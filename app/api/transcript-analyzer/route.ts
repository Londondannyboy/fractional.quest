import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { z } from 'zod'

const sql = neon(process.env.DATABASE_URL!)
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

/**
 * Transcript Analyzer - Pydantic AI Alternative
 *
 * Parses conversation transcript to extract intent and query Neon DB directly.
 * Runs in parallel with Hume tool calling to compare approaches.
 */

interface TranscriptAnalyzerRequest {
  transcript: string  // Full conversation text
  userId?: string
}

// Zod schema for structured intent extraction (like Pydantic but for TypeScript)
const ExtractedIntentSchema = z.object({
  action: z.enum(['search_jobs', 'confirm_preference', 'unknown']),
  roleType: z.string().optional().describe('Executive title like CFO, CMO, CTO, Finance Director, Marketing Director'),
  location: z.string().optional().describe('City or country like London, Manchester, UK'),
  preferenceType: z.string().optional(),
  values: z.array(z.string()).optional(),
  confidence: z.number().min(0).max(1),
  reasoning: z.string().describe('Brief explanation of why this intent was detected')
})

type ExtractedIntent = z.infer<typeof ExtractedIntentSchema>

export async function POST(request: NextRequest) {
  try {
    const body: TranscriptAnalyzerRequest = await request.json()
    const { transcript, userId } = body

    console.log('[Transcript Analyzer] Analyzing:', transcript.substring(0, 200))
    console.log('[Transcript Analyzer] Full transcript:', transcript)

    // Extract intent from transcript using AI
    const intent = await extractIntent(transcript)
    console.log('[Transcript Analyzer] Intent:', JSON.stringify(intent, null, 2))

    if (intent.action === 'search_jobs') {
      // Query Neon DB directly (roleType can be undefined for general search)
      const jobs = await searchJobsFromDB(intent.roleType, intent.location)

      return NextResponse.json({
        status: 'success',
        method: 'transcript_parsing',
        intent,
        data: {
          type: 'job_results',
          source: 'pydantic_ai_layer',
          jobs: jobs.map(j => ({
            id: j.id,
            slug: j.slug,
            title: j.title,
            company: j.company_name,
            location: j.location,
            isRemote: j.is_remote,
            dayRate: j.salary_min,
            currency: j.salary_currency || 'GBP',
          }))
        }
      })
    }

    if (intent.action === 'confirm_preference') {
      return NextResponse.json({
        status: 'success',
        method: 'transcript_parsing',
        intent,
        data: {
          type: 'confirmation',
          source: 'pydantic_ai_layer',
          preference_type: intent.preferenceType,
          values: intent.values,
          details: `Detected interest in ${intent.values?.join(', ')}`
        }
      })
    }

    return NextResponse.json({
      status: 'no_action',
      method: 'transcript_parsing',
      intent
    })

  } catch (error) {
    console.error('[Transcript Analyzer] Error:', error)
    return NextResponse.json(
      { error: 'Analysis failed', details: String(error) },
      { status: 500 }
    )
  }
}

/**
 * Extract intent from conversation transcript using Google Gemini Flash
 * Fast, cheap, and accurate AI intent extraction
 */
async function extractIntent(transcript: string): Promise<ExtractedIntent> {
  // Skip if transcript is too short
  if (!transcript || transcript.length < 10) {
    return {
      action: 'unknown',
      confidence: 0,
      reasoning: 'Transcript too short to analyze'
    }
  }

  try {
    const prompt = `Analyze this conversation transcript and extract the user's intent.

Transcript: "${transcript}"

Determine if the user is:

1. **search_jobs**: User wants to SEE jobs NOW
   - "Show me...", "Find...", "What jobs...", "I want to see..."
   - Action: Query database and display jobs immediately

2. **confirm_preference**: User is STATING a preference that needs HUMAN confirmation (HITL)
   - "I'm interested in...", "I prefer...", "I like...", "My background is..."
   - Action: Show confirmation modal asking "You're interested in X. Confirm?"
   - ONLY use this if user is stating a lasting preference, not a one-time search

3. **unknown**: Neither of the above

IMPORTANT:
- "I'm interested in fractional jobs in the UK" → Most likely search_jobs (wants to see jobs)
- "I'm interested in CMO and CFO roles going forward" → confirm_preference (stating preference to save)
- When in doubt, prefer search_jobs (users want results, not confirmation dialogs)

If search_jobs, extract:
- roleType: Executive title (CFO, CMO, CTO, Finance Director, Marketing Director, VP Finance, etc.) or null
- location: City (London, Manchester, Birmingham, etc.) or country (UK, USA) or null

If confirm_preference, extract:
- preferenceType: What kind of preference (role, industry, location, etc.)
- values: List of values they're confirming

Examples:
"Show me CFO jobs in London" → search_jobs, roleType: "CFO", location: "London"
"I'm interested in fractional jobs in the UK" → search_jobs, roleType: null, location: "UK" (user wants to see jobs)
"I'm looking for Marketing Director positions" → search_jobs, roleType: "Marketing Director", location: null
"What jobs do you have?" → search_jobs, roleType: null, location: null
"I'm interested in CMO and CFO roles for my career" → confirm_preference, preferenceType: "role", values: ["CMO", "CFO"]

Respond with ONLY valid JSON matching this structure:
{
  "action": "search_jobs" | "confirm_preference" | "unknown",
  "roleType": "CFO" or null,
  "location": "London" or null,
  "preferenceType": "role" or null,
  "values": ["CFO", "CMO"] or null,
  "confidence": 0.85,
  "reasoning": "User asking about fractional jobs in UK"
}`

    // Use Google Gemini Flash - cheaper and faster!
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 512,
          responseMimeType: 'application/json'
        }
      })
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Google Gemini API error: ${response.status} - ${error}`)
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) {
      throw new Error('No response from Google Gemini')
    }

    // Parse and validate with Zod (like Pydantic for TypeScript)
    const parsed = JSON.parse(text)
    const validated = ExtractedIntentSchema.parse(parsed)

    console.log('[Transcript Analyzer] AI extracted intent:', validated)
    return validated

  } catch (error) {
    console.error('[Transcript Analyzer] AI extraction failed:', error)
    // Fallback to unknown intent
    return {
      action: 'unknown',
      confidence: 0,
      reasoning: `Error extracting intent: ${error}`
    }
  }
}

/**
 * Query Neon DB directly for jobs
 */
async function searchJobsFromDB(roleType?: string, location?: string) {
  try {
    const rolePattern = roleType ? `%${roleType}%` : '%'
    const locationPattern = location ? `%${location}%` : '%'

    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote,
        salary_min, salary_max, salary_currency,
        CASE
          WHEN is_fractional = true THEN 1
          WHEN LOWER(title) LIKE '%fractional%' THEN 2
          WHEN LOWER(title) LIKE '%part%time%' OR LOWER(title) LIKE '%interim%' OR LOWER(title) LIKE '%contract%' THEN 3
          ELSE 4
        END as priority
      FROM jobs
      WHERE is_active = true
        AND (
          LOWER(COALESCE(executive_title::text, '')) LIKE LOWER(${rolePattern})
          OR LOWER(COALESCE(role_category::text, '')) LIKE LOWER(${rolePattern})
          OR LOWER(title) LIKE LOWER(${rolePattern})
        )
        AND (
          LOWER(COALESCE(city::text, '')) LIKE LOWER(${locationPattern})
          OR LOWER(COALESCE(country, '')) LIKE LOWER(${locationPattern})
          OR LOWER(COALESCE(location, '')) LIKE LOWER(${locationPattern})
        )
      ORDER BY priority ASC, posted_date DESC NULLS LAST
      LIMIT 5
    `

    return jobs
  } catch (error) {
    console.error('[Transcript Analyzer] DB query error:', error)
    return []
  }
}

// GET for testing
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: 'Transcript Analyzer',
    description: 'Pydantic AI alternative - parses transcripts and queries Neon directly',
    usage: 'POST with { transcript: string, userId?: string }',
    advantages: [
      'No dependency on Hume tool calling',
      'Direct DB access',
      'Works even if Hume system prompt is misconfigured',
      'Can run in parallel with Hume tools for comparison'
    ]
  })
}
