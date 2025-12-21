/**
 * Voice-to-Graph Sync Layer
 *
 * Orchestrates the pipeline: Voice → Pydantic AI → ZEP (instant) → Neon (validated)
 *
 * Key Features:
 * - ZEP-first writes for instant visual feedback (50-100ms)
 * - Confidence-based routing (≥0.80 auto, 0.50-0.79 confirm, <0.50 reject)
 * - Background Neon validation (source of truth)
 * - Persistent confirmation queue (survives sessions)
 * - Graceful degradation (ZEP fails → Neon only)
 */

import { addToUserGraph, ensureZepUser, type GraphNode, type GraphEdge } from '@/lib/zep-client'
import { createDbQuery } from '@/lib/db'

// ============================================================================
// TYPES
// ============================================================================

export type ClusterType =
  // Candidate clusters
  | 'skills'
  | 'experience'
  | 'career_interests'
  | 'preferences'
  // Client clusters
  | 'requirements'
  | 'candidate_matches'
  | 'culture_fit'

export type EntityType =
  | 'skill'
  | 'company'
  | 'role'
  | 'location'
  | 'availability'
  | 'day_rate'
  | 'requirement'
  | 'personality_trait'
  | 'culture_value'

export interface ExtractedEntity {
  id: string
  cluster: ClusterType
  entity_type: EntityType
  value: string
  confidence: number // 0.0-1.0
  raw_text: string
  metadata?: Record<string, any>
  requires_hard_validation: boolean // MUST confirm (e.g., "ONLY")
  requires_soft_validation: boolean // Should confirm (low confidence)
}

export interface ConfirmationRequest {
  id: string
  entity_id: string
  cluster: ClusterType
  value: string
  confidence: number
  reasoning: string
  validation_type: 'hard' | 'soft'
  created_at: Date
}

export interface VoiceExtractionResult {
  immediateUpdates: GraphNode[] // High confidence, added to ZEP
  needsConfirmation: ConfirmationRequest[] // Needs user approval
  errors: string[]
}

// ============================================================================
// CONFIDENCE THRESHOLDS
// ============================================================================

const CONFIDENCE_THRESHOLDS = {
  AUTO_ADD: 0.80,     // ≥0.80: Immediately add to ZEP + graph
  SOFT_CONFIRM: 0.50, // 0.50-0.79: Show soft notification
  REJECT: 0.50        // <0.50: Ignore or ask for clarification
}

const HARD_VALIDATION_KEYWORDS = [
  'only', 'just', 'exclusively', 'nothing else',
  'must', 'need to', 'have to', 'required',
  'relocating', 'moving to', 'must be in',
  'won\'t consider', 'definitely not', 'never'
]

// ============================================================================
// MAIN EXTRACTION PROCESSOR
// ============================================================================

export async function processVoiceExtraction(
  userId: string,
  entities: ExtractedEntity[],
  userType: 'candidate' | 'client'
): Promise<VoiceExtractionResult> {
  const result: VoiceExtractionResult = {
    immediateUpdates: [],
    needsConfirmation: [],
    errors: []
  }

  // Ensure ZEP user exists
  try {
    await ensureZepUser(userId)
  } catch (error) {
    console.error('[voice-to-graph-sync] Failed to ensure ZEP user:', error)
    result.errors.push('ZEP initialization failed')
  }

  // Process each entity
  for (const entity of entities) {
    try {
      // HARD VALIDATION: Always requires confirmation
      if (entity.requires_hard_validation) {
        result.needsConfirmation.push(createConfirmationRequest(entity, 'hard'))
        continue
      }

      // HIGH CONFIDENCE: Immediate ZEP write
      if (entity.confidence >= CONFIDENCE_THRESHOLDS.AUTO_ADD) {
        const node = await writeToZepImmediate(userId, entity)
        if (node) {
          result.immediateUpdates.push(node)
          // Background: Save to Neon (fire and forget)
          validateAndSaveToNeon(userId, entity, 'auto').catch(err =>
            console.error('[voice-to-graph-sync] Neon save failed:', err)
          )
        }
        continue
      }

      // SOFT VALIDATION: Show notification
      if (entity.confidence >= CONFIDENCE_THRESHOLDS.SOFT_CONFIRM) {
        result.needsConfirmation.push(createConfirmationRequest(entity, 'soft'))
        continue
      }

      // LOW CONFIDENCE: Skip
      console.log('[voice-to-graph-sync] Skipping low confidence entity:', entity.value, entity.confidence)
    } catch (error) {
      console.error('[voice-to-graph-sync] Error processing entity:', entity, error)
      result.errors.push(`Failed to process: ${entity.value}`)
    }
  }

  return result
}

// ============================================================================
// ZEP WRITES (INSTANT VISUAL FEEDBACK)
// ============================================================================

async function writeToZepImmediate(
  userId: string,
  entity: ExtractedEntity
): Promise<GraphNode | null> {
  const startTime = Date.now()

  try {
    // Format data for ZEP
    const zepData = formatEntityForZep(entity)

    // Write to user's ZEP graph
    await addToUserGraph(userId, zepData)

    const duration = Date.now() - startTime
    console.log(`[voice-to-graph-sync] ZEP write successful (${duration}ms):`, entity.value)

    // Return as GraphNode for immediate UI update
    return entityToGraphNode(entity)
  } catch (error) {
    console.error('[voice-to-graph-sync] ZEP write failed:', error)
    // Fallback: Try Neon only
    try {
      await validateAndSaveToNeon(userId, entity, 'auto')
      return entityToGraphNode(entity)
    } catch (neonError) {
      console.error('[voice-to-graph-sync] Neon fallback also failed:', neonError)
      return null
    }
  }
}

function formatEntityForZep(entity: ExtractedEntity): string {
  // Format as natural language for ZEP's knowledge graph
  const metadata = entity.metadata || {}

  switch (entity.entity_type) {
    case 'skill':
      return `User has ${entity.value} skill${metadata.years ? ` with ${metadata.years} years experience` : ''}${metadata.proficiency ? ` at ${metadata.proficiency} level` : ''}`

    case 'company':
      return `User worked at ${entity.value}${metadata.role ? ` as ${metadata.role}` : ''}${metadata.years ? ` for ${metadata.years} years` : ''}`

    case 'role':
      return `User is interested in ${entity.value} roles${metadata.seniority ? ` at ${metadata.seniority} level` : ''}`

    case 'location':
      return `User prefers ${entity.value} location${metadata.remote ? ' (remote)' : ''}`

    case 'requirement':
      return `Client requires ${entity.value}${metadata.priority ? ` (${metadata.priority} priority)` : ''}`

    default:
      return `User mentioned: ${entity.value}`
  }
}

function entityToGraphNode(entity: ExtractedEntity): GraphNode {
  return {
    id: entity.id,
    type: mapEntityTypeToNodeType(entity.entity_type),
    label: entity.value,
    data: {
      cluster: entity.cluster,
      confidence: entity.confidence,
      raw_text: entity.raw_text,
      metadata: entity.metadata,
      validated: false // Will be true after Neon save
    }
  }
}

function mapEntityTypeToNodeType(entityType: EntityType): GraphNode['type'] {
  switch (entityType) {
    case 'skill': return 'skill'
    case 'company': return 'company'
    case 'role': return 'job'
    case 'location': return 'preference'
    case 'requirement': return 'preference'
    default: return 'fact'
  }
}

// ============================================================================
// NEON VALIDATION (SOURCE OF TRUTH)
// ============================================================================

export async function validateAndSaveToNeon(
  userId: string,
  entity: ExtractedEntity,
  validatedBy: 'auto' | 'user'
): Promise<void> {
  const startTime = Date.now()

  try {
    // Use existing Neon connection
    const { neon } = await import('@neondatabase/serverless')
    const db = neon(process.env.DATABASE_URL!)

    // Generate unique node ID
    const nodeId = `${entity.cluster}-${entity.value.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    // Save to graph_nodes table
    await db`
      INSERT INTO graph_nodes (
        id,
        user_id,
        label,
        cluster,
        value,
        metadata,
        validated,
        created_at,
        updated_at
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
        ${validatedBy === 'user'},
        NOW(),
        NOW()
      )
      ON CONFLICT (user_id, cluster, LOWER(value))
      DO UPDATE SET
        validated = EXCLUDED.validated,
        metadata = EXCLUDED.metadata,
        updated_at = NOW()
    `

    const duration = Date.now() - startTime
    console.log(`[voice-to-graph-sync] Neon save successful (${duration}ms):`, entity.value)
  } catch (error) {
    console.error('[voice-to-graph-sync] Neon save failed:', error)
    throw error
  }
}

// ============================================================================
// CONFIRMATION REQUESTS (PERSISTENT)
// ============================================================================

function createConfirmationRequest(
  entity: ExtractedEntity,
  validationType: 'hard' | 'soft'
): ConfirmationRequest {
  return {
    id: `conf-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    entity_id: entity.id,
    cluster: entity.cluster,
    value: entity.value,
    confidence: entity.confidence,
    reasoning: generateConfirmationReasoning(entity, validationType),
    validation_type: validationType,
    created_at: new Date()
  }
}

function generateConfirmationReasoning(
  entity: ExtractedEntity,
  validationType: 'hard' | 'soft'
): string {
  if (validationType === 'hard') {
    // Detect which keyword triggered hard validation
    const keyword = HARD_VALIDATION_KEYWORDS.find(k =>
      entity.raw_text.toLowerCase().includes(k)
    )

    if (keyword === 'only' || keyword === 'just' || keyword === 'exclusively') {
      return `You said "${keyword}" - confirming this is an exclusive requirement`
    }

    if (keyword === 'must' || keyword === 'need to' || keyword === 'have to') {
      return `You said "${keyword}" - confirming this is a strict requirement`
    }

    if (keyword === 'relocating' || keyword === 'moving to') {
      return `You mentioned relocating - confirming this is a firm commitment`
    }

    return `This appears to be a critical requirement - please confirm`
  }

  // Soft validation reasoning
  const confidencePercent = Math.round(entity.confidence * 100)
  return `Detected "${entity.value}" with ${confidencePercent}% confidence - please verify`
}

// ============================================================================
// PERSISTENT CONFIRMATION QUEUE
// ============================================================================

export async function savePendingConfirmations(
  userId: string,
  confirmations: ConfirmationRequest[]
): Promise<void> {
  try {
    const { neon } = await import('@neondatabase/serverless')
    const db = neon(process.env.DATABASE_URL!)

    for (const confirmation of confirmations) {
      await db`
        INSERT INTO pending_validations (
          id,
          user_id,
          entity_id,
          cluster,
          value,
          confidence,
          reasoning,
          validation_type,
          created_at,
          status
        ) VALUES (
          ${confirmation.id},
          ${userId},
          ${confirmation.entity_id},
          ${confirmation.cluster},
          ${confirmation.value},
          ${confirmation.confidence},
          ${confirmation.reasoning},
          ${confirmation.validation_type},
          ${confirmation.created_at.toISOString()},
          'pending'
        )
        ON CONFLICT (id) DO NOTHING
      `
    }

    console.log(`[voice-to-graph-sync] Saved ${confirmations.length} pending confirmations`)
  } catch (error) {
    console.error('[voice-to-graph-sync] Failed to save pending confirmations:', error)
  }
}

export async function loadPendingConfirmations(
  userId: string
): Promise<ConfirmationRequest[]> {
  try {
    const { neon } = await import('@neondatabase/serverless')
    const db = neon(process.env.DATABASE_URL!)

    const results = await db`
      SELECT * FROM pending_validations
      WHERE user_id = ${userId}
        AND status = 'pending'
      ORDER BY created_at ASC
    `

    return results.map((row: any) => ({
      id: row.id,
      entity_id: row.entity_id,
      cluster: row.cluster as ClusterType,
      value: row.value,
      confidence: row.confidence,
      reasoning: row.reasoning,
      validation_type: row.validation_type as 'hard' | 'soft',
      created_at: new Date(row.created_at)
    }))
  } catch (error) {
    console.error('[voice-to-graph-sync] Failed to load pending confirmations:', error)
    return []
  }
}

export async function markConfirmationComplete(
  confirmationId: string,
  status: 'confirmed' | 'rejected'
): Promise<void> {
  try {
    const { neon } = await import('@neondatabase/serverless')
    const db = neon(process.env.DATABASE_URL!)

    await db`
      UPDATE pending_validations
      SET status = ${status},
          completed_at = NOW()
      WHERE id = ${confirmationId}
    `

    console.log(`[voice-to-graph-sync] Marked confirmation ${confirmationId} as ${status}`)
  } catch (error) {
    console.error('[voice-to-graph-sync] Failed to mark confirmation complete:', error)
  }
}

// ============================================================================
// RETRY LOGIC
// ============================================================================

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  baseDelay: number = 100
): Promise<T> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      if (attempt === maxAttempts) throw error

      const delay = baseDelay * Math.pow(2, attempt - 1) // Exponential backoff
      console.log(`[voice-to-graph-sync] Retry attempt ${attempt}/${maxAttempts} after ${delay}ms`)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  throw new Error('Should never reach here')
}
