/**
 * Voice-to-Graph API Coordinator
 *
 * Main endpoint that orchestrates the entire pipeline:
 * Voice transcript → Pydantic AI extraction → ZEP write (instant) → Neon save (validated)
 *
 * POST /api/voice-to-graph
 *
 * Request:
 *   { userId: string, transcript: string, userType: "candidate" | "client", sessionId?: string }
 *
 * Response:
 *   {
 *     success: boolean,
 *     immediateNodes: GraphNode[],  // Ready to display in graph
 *     confirmationRequests: ConfirmationRequest[],  // Need user approval
 *     stats: { extracted, autoAdded, needsConfirmation, failed },
 *     errors?: string[]
 *   }
 */

import { NextRequest, NextResponse } from 'next/server'
import {
  processVoiceExtraction,
  savePendingConfirmations,
  type ExtractedEntity,
  type ConfirmationRequest
} from '@/lib/voice-to-graph-sync'
import type { GraphNode } from '@/lib/zep-client'

// ============================================================================
// REQUEST/RESPONSE TYPES
// ============================================================================

interface VoiceToGraphRequest {
  userId: string
  transcript: string
  userType: 'candidate' | 'client'
  sessionId?: string
  context?: string[] // Previous conversation for better extraction
}

interface VoiceToGraphResponse {
  success: boolean
  immediateNodes: GraphNode[] // High confidence, added to ZEP
  confirmationRequests: ConfirmationRequest[] // Needs user approval
  stats: {
    extracted: number
    autoAdded: number
    needsConfirmation: number
    failed: number
  }
  errors?: string[]
}

// ============================================================================
// MAIN HANDLER
// ============================================================================

export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    // Parse request
    const body: VoiceToGraphRequest = await request.json()
    const { userId, transcript, userType, sessionId, context = [] } = body

    // Validation
    if (!userId || !transcript || !userType) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, transcript, userType' },
        { status: 400 }
      )
    }

    if (transcript.trim().length < 5) {
      return NextResponse.json(
        { error: 'Transcript too short' },
        { status: 400 }
      )
    }

    console.log('[voice-to-graph] Processing transcript:', {
      userId,
      userType,
      transcriptLength: transcript.length,
      sessionId
    })

    // ========================================================================
    // STEP 1: Call Pydantic AI for extraction
    // ========================================================================

    const extractionStartTime = Date.now()
    let entities: ExtractedEntity[] = []

    try {
      const pydanticResponse = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/api/pydantic-voice-extract.py`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            transcript,
            user_type: userType,
            context
          })
        }
      )

      if (!pydanticResponse.ok) {
        throw new Error(`Pydantic AI failed: ${pydanticResponse.status}`)
      }

      const extractionResult = await pydanticResponse.json()
      entities = extractionResult.entities.map((e: any) => ({
        id: `entity-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        ...e
      }))

      const extractionDuration = Date.now() - extractionStartTime
      console.log(`[voice-to-graph] Pydantic AI extracted ${entities.length} entities (${extractionDuration}ms)`)

    } catch (error) {
      console.error('[voice-to-graph] Pydantic AI extraction failed:', error)

      // Fallback: Simple regex extraction
      entities = fallbackExtraction(transcript, userType)
      console.log(`[voice-to-graph] Using fallback extraction: ${entities.length} entities`)
    }

    // ========================================================================
    // STEP 2: Process entities (ZEP + Neon)
    // ========================================================================

    const result = await processVoiceExtraction(userId, entities, userType)

    // ========================================================================
    // STEP 3: Save pending confirmations to database
    // ========================================================================

    if (result.needsConfirmation.length > 0) {
      await savePendingConfirmations(userId, result.needsConfirmation)
    }

    // ========================================================================
    // STEP 4: Build response
    // ========================================================================

    const response: VoiceToGraphResponse = {
      success: true,
      immediateNodes: result.immediateUpdates,
      confirmationRequests: result.needsConfirmation,
      stats: {
        extracted: entities.length,
        autoAdded: result.immediateUpdates.length,
        needsConfirmation: result.needsConfirmation.length,
        failed: result.errors.length
      },
      errors: result.errors.length > 0 ? result.errors : undefined
    }

    const totalDuration = Date.now() - startTime
    console.log(`[voice-to-graph] Complete (${totalDuration}ms):`, response.stats)

    return NextResponse.json(response)

  } catch (error) {
    console.error('[voice-to-graph] Fatal error:', error)

    return NextResponse.json(
      {
        success: false,
        immediateNodes: [],
        confirmationRequests: [],
        stats: { extracted: 0, autoAdded: 0, needsConfirmation: 0, failed: 1 },
        errors: [(error as Error).message]
      } as VoiceToGraphResponse,
      { status: 500 }
    )
  }
}

// ============================================================================
// FALLBACK EXTRACTION (when Pydantic AI fails)
// ============================================================================

function fallbackExtraction(
  transcript: string,
  userType: 'candidate' | 'client'
): ExtractedEntity[] {
  const entities: ExtractedEntity[] = []

  // Simple pattern matching for common entities
  const patterns = {
    roles: /\b(CEO|CFO|CTO|CMO|COO|CPO|VP|Director|Manager|Lead)\b/gi,
    companies: /\b(Google|Apple|Microsoft|Amazon|Meta|Stripe|Revolut|Monzo|Wise|Klarna|N26)\b/gi,
    locations: /\b(London|Paris|Berlin|New York|Singapore|Dubai|Remote)\b/gi,
    skills: /\b(M&A|Fundraising|FP&A|Strategy|Leadership|Board Relations|Risk Management)\b/gi
  }

  // Extract roles
  const roleMatches = transcript.match(patterns.roles) || []
  roleMatches.forEach(role => {
    entities.push({
      id: `fallback-role-${Date.now()}-${Math.random()}`,
      cluster: userType === 'candidate' ? 'career_interests' : 'requirements',
      entity_type: 'role',
      value: role,
      confidence: 0.6, // Lower confidence for fallback
      raw_text: role,
      metadata: {},
      requires_hard_validation: false,
      requires_soft_validation: true
    })
  })

  // Extract companies
  const companyMatches = transcript.match(patterns.companies) || []
  companyMatches.forEach(company => {
    entities.push({
      id: `fallback-company-${Date.now()}-${Math.random()}`,
      cluster: 'experience',
      entity_type: 'company',
      value: company,
      confidence: 0.6,
      raw_text: company,
      metadata: {},
      requires_hard_validation: false,
      requires_soft_validation: true
    })
  })

  // Extract locations
  const locationMatches = transcript.match(patterns.locations) || []
  locationMatches.forEach(location => {
    entities.push({
      id: `fallback-location-${Date.now()}-${Math.random()}`,
      cluster: 'preferences',
      entity_type: 'location',
      value: location,
      confidence: 0.6,
      raw_text: location,
      metadata: {},
      requires_hard_validation: false,
      requires_soft_validation: true
    })
  })

  // Extract skills
  const skillMatches = transcript.match(patterns.skills) || []
  skillMatches.forEach(skill => {
    entities.push({
      id: `fallback-skill-${Date.now()}-${Math.random()}`,
      cluster: 'skills',
      entity_type: 'skill',
      value: skill,
      confidence: 0.6,
      raw_text: skill,
      metadata: {},
      requires_hard_validation: false,
      requires_soft_validation: true
    })
  })

  return entities
}

// ============================================================================
// EXPORTS
// ============================================================================

export const runtime = 'edge' // Use Edge Runtime for lower latency
export const maxDuration = 30 // Max 30 seconds for Pydantic AI
