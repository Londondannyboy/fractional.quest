import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { addToUserGraph, ensureZepUser } from '@/lib/zep-client'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Real-Time Entity Extraction API
 *
 * Called by Hume EVI's extract_and_update_graph tool during conversation.
 * Extracts career entities and updates the knowledge graph in real-time.
 *
 * Flow:
 * 1. Receive transcript chunk from Hume tool call
 * 2. Extract entities using Gemini (fast, ~200ms)
 * 3. Route by confidence:
 *    - >= 0.80: Auto-add to ZEP + Neon
 *    - 0.50-0.79: Return as confirmation request
 *    - < 0.50: Skip
 * 4. Return dual-format response for Hume to speak + UI to render
 */

// Confidence thresholds
const AUTO_ADD_THRESHOLD = 0.80
const SOFT_CONFIRM_THRESHOLD = 0.50

// Entity types we extract
type ClusterType = 'skills' | 'experience' | 'career_interests' | 'preferences'

interface ExtractedEntity {
  id: string
  cluster: ClusterType
  entity_type: string
  value: string
  confidence: number
  raw_text: string
  metadata?: Record<string, any>
  requires_hard_validation: boolean
}

interface GraphNode {
  id: string
  type: string
  label: string
  cluster: ClusterType
  data: {
    confidence: number
    validated: boolean
    pending?: boolean
  }
}

interface ConfirmationRequest {
  id: string
  cluster: ClusterType
  value: string
  confidence: number
  reasoning: string
  validation_type: 'hard' | 'soft'
}

export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    const body = await request.json()
    const { transcript_chunk, user_id, user_type = 'candidate', entity_hints = [] } = body

    console.log('[realtime-extract] Processing:', {
      transcriptLength: transcript_chunk?.length,
      userId: user_id,
      userType: user_type
    })

    if (!transcript_chunk || transcript_chunk.length < 5) {
      return NextResponse.json({
        content: JSON.stringify({
          text: "I'll keep that in mind.",
          data: { type: 'graph_update', nodes: [], confirmations: [] }
        })
      })
    }

    // Step 1: Extract entities using Gemini (fast)
    const entities = await extractEntitiesWithGemini(transcript_chunk, user_type, entity_hints)

    if (entities.length === 0) {
      return NextResponse.json({
        content: JSON.stringify({
          text: "Got it, tell me more.",
          data: { type: 'graph_update', nodes: [], confirmations: [] }
        })
      })
    }

    // Step 2: Process entities with confidence routing
    const immediateNodes: GraphNode[] = []
    const confirmations: ConfirmationRequest[] = []

    // Ensure ZEP user exists (fire and forget)
    if (user_id) {
      ensureZepUser(user_id).catch(err =>
        console.error('[realtime-extract] ZEP user ensure failed:', err)
      )
    }

    // Process entities
    for (const entity of entities) {
      // Hard validation required (exclusive statements like "ONLY want")
      if (entity.requires_hard_validation) {
        confirmations.push(createConfirmation(entity, 'hard'))
        continue
      }

      // High confidence - auto-add
      if (entity.confidence >= AUTO_ADD_THRESHOLD) {
        // Write to ZEP instantly
        if (user_id) {
          writeToZep(user_id, entity).catch(err =>
            console.error('[realtime-extract] ZEP write failed:', err)
          )
          // Write to Neon in background
          writeToNeon(user_id, entity).catch(err =>
            console.error('[realtime-extract] Neon write failed:', err)
          )
        }

        immediateNodes.push(entityToNode(entity))
        continue
      }

      // Soft confirmation threshold
      if (entity.confidence >= SOFT_CONFIRM_THRESHOLD) {
        confirmations.push(createConfirmation(entity, 'soft'))
        continue
      }

      // Low confidence - skip
      console.log('[realtime-extract] Skipping low confidence:', entity.value, entity.confidence)
    }

    // Build response text
    let responseText = ''
    if (immediateNodes.length > 0) {
      const nodeLabels = immediateNodes.map(n => n.label).slice(0, 3)
      responseText = `I've noted ${nodeLabels.join(', ')}${immediateNodes.length > 3 ? ` and ${immediateNodes.length - 3} more` : ''}. `
    }
    if (confirmations.length > 0) {
      responseText += `Please check the screen to confirm ${confirmations.length === 1 ? 'something' : 'a few things'} I picked up.`
    }
    if (!responseText) {
      responseText = "Got it, continue."
    }

    const duration = Date.now() - startTime
    console.log(`[realtime-extract] Completed in ${duration}ms:`, {
      extracted: entities.length,
      autoAdded: immediateNodes.length,
      needsConfirmation: confirmations.length
    })

    // Return dual-format response
    return NextResponse.json({
      content: JSON.stringify({
        text: responseText,
        data: {
          type: 'graph_update',
          nodes: immediateNodes,
          confirmations: confirmations,
          stats: {
            extracted: entities.length,
            autoAdded: immediateNodes.length,
            needsConfirmation: confirmations.length,
            processingTimeMs: duration
          }
        }
      })
    })

  } catch (error) {
    console.error('[realtime-extract] Error:', error)
    return NextResponse.json({
      content: JSON.stringify({
        text: "I'll remember that. Keep going.",
        data: { type: 'graph_update', nodes: [], confirmations: [], error: String(error) }
      })
    })
  }
}

/**
 * Extract entities using Gemini 2.0 Flash (fast, cheap)
 */
async function extractEntitiesWithGemini(
  transcript: string,
  userType: string,
  hints: string[]
): Promise<ExtractedEntity[]> {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_API_KEY

  if (!apiKey) {
    console.error('[realtime-extract] No Google API key configured')
    return []
  }

  const prompt = `Extract career entities from this transcript. Return JSON array.

Transcript: "${transcript}"
User type: ${userType}
${hints.length > 0 ? `Hints: ${hints.join(', ')}` : ''}

For each entity found, return:
{
  "entity_type": "skill" | "company" | "role" | "location" | "day_rate" | "preference",
  "value": "extracted value",
  "confidence": 0.0-1.0,
  "raw_text": "quote from transcript",
  "requires_hard_validation": true if user said "only", "must", "exclusively"
}

Only extract clear, specific entities. Skip vague statements.
Return empty array [] if nothing concrete found.
Return ONLY valid JSON array, no markdown or explanation.`

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 1000
          }
        })
      }
    )

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '[]'

    // Parse JSON from response (handle markdown code blocks)
    const jsonMatch = text.match(/\[[\s\S]*\]/)
    if (!jsonMatch) return []

    const rawEntities = JSON.parse(jsonMatch[0])

    // Map to our format with IDs and clusters
    return rawEntities.map((e: any, i: number) => ({
      id: `entity-${Date.now()}-${i}`,
      cluster: mapEntityTypeToCluster(e.entity_type),
      entity_type: e.entity_type,
      value: e.value,
      confidence: e.confidence || 0.7,
      raw_text: e.raw_text || transcript,
      metadata: e.metadata,
      requires_hard_validation: e.requires_hard_validation || false
    }))

  } catch (error) {
    console.error('[realtime-extract] Gemini extraction failed:', error)
    return []
  }
}

function mapEntityTypeToCluster(entityType: string): ClusterType {
  switch (entityType) {
    case 'skill': return 'skills'
    case 'company': return 'experience'
    case 'role': return 'career_interests'
    case 'location':
    case 'day_rate':
    case 'preference':
    default: return 'preferences'
  }
}

function entityToNode(entity: ExtractedEntity): GraphNode {
  return {
    id: entity.id,
    type: entity.entity_type,
    label: entity.value,
    cluster: entity.cluster,
    data: {
      confidence: entity.confidence,
      validated: false,
      pending: true
    }
  }
}

function createConfirmation(entity: ExtractedEntity, type: 'hard' | 'soft'): ConfirmationRequest {
  const reasoning = type === 'hard'
    ? `You said "${entity.raw_text.slice(0, 50)}..." - confirming this is a strict requirement`
    : `Detected "${entity.value}" (${Math.round(entity.confidence * 100)}% confidence) - please verify`

  return {
    id: `conf-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    cluster: entity.cluster,
    value: entity.value,
    confidence: entity.confidence,
    reasoning,
    validation_type: type
  }
}

/**
 * Write to ZEP knowledge graph (instant, ~50ms)
 */
async function writeToZep(userId: string, entity: ExtractedEntity): Promise<void> {
  try {
    const text = formatEntityForZep(entity)
    await addToUserGraph(userId, { text } as Record<string, unknown>, 'text')
    console.log('[realtime-extract] ZEP write success:', entity.value)
  } catch (error) {
    console.error('[realtime-extract] ZEP write failed:', error)
    throw error
  }
}

function formatEntityForZep(entity: ExtractedEntity): string {
  switch (entity.entity_type) {
    case 'skill':
      return `User has ${entity.value} skill`
    case 'company':
      return `User worked at ${entity.value}`
    case 'role':
      return `User is interested in ${entity.value} roles`
    case 'location':
      return `User prefers ${entity.value} location`
    case 'day_rate':
      return `User's day rate is ${entity.value}`
    default:
      return `User mentioned: ${entity.value}`
  }
}

/**
 * Write to Neon database (background, source of truth)
 */
async function writeToNeon(userId: string, entity: ExtractedEntity): Promise<void> {
  try {
    const nodeId = `${entity.cluster}-${entity.value.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`

    await sql`
      INSERT INTO graph_nodes (
        id, user_id, label, cluster, value, metadata, validated, created_at, updated_at
      ) VALUES (
        ${nodeId},
        ${userId},
        ${entity.value},
        ${entity.cluster},
        ${entity.value},
        ${JSON.stringify({
          entityType: entity.entity_type,
          confidence: entity.confidence,
          rawText: entity.raw_text,
          ...entity.metadata
        })},
        false,
        NOW(),
        NOW()
      )
      ON CONFLICT (user_id, cluster, LOWER(value))
      DO UPDATE SET
        metadata = EXCLUDED.metadata,
        updated_at = NOW()
    `

    console.log('[realtime-extract] Neon write success:', entity.value)
  } catch (error) {
    console.error('[realtime-extract] Neon write failed:', error)
    throw error
  }
}
