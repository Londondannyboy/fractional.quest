import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

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

interface ExtractedIntent {
  action: 'search_jobs' | 'confirm_preference' | 'unknown'
  roleType?: string
  location?: string
  preferenceType?: string
  values?: string[]
  confidence: number
}

export async function POST(request: NextRequest) {
  try {
    const body: TranscriptAnalyzerRequest = await request.json()
    const { transcript, userId } = body

    console.log('[Transcript Analyzer] Analyzing:', transcript.substring(0, 100))

    // Extract intent from transcript
    const intent = extractIntent(transcript)
    console.log('[Transcript Analyzer] Intent:', intent)

    if (intent.action === 'search_jobs' && intent.roleType) {
      // Query Neon DB directly
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
 * Extract intent from conversation transcript using pattern matching
 */
function extractIntent(transcript: string): ExtractedIntent {
  const lowerText = transcript.toLowerCase()

  // Job search patterns
  const jobSearchKeywords = ['show', 'find', 'search', 'looking for', 'interested in', 'want', 'need']
  const roleKeywords = {
    'cfo': ['cfo', 'chief financial', 'finance director', 'financial officer'],
    'cmo': ['cmo', 'chief marketing', 'marketing director', 'marketing officer'],
    'cto': ['cto', 'chief technology', 'technology director', 'cto'],
    'coo': ['coo', 'chief operating', 'operations director', 'operating officer'],
    'hr': ['hr director', 'chief human', 'people director', 'chro']
  }
  const locationKeywords = ['in london', 'in manchester', 'in birmingham', 'london', 'manchester', 'uk']

  // Check for job search intent
  const hasJobSearchKeyword = jobSearchKeywords.some(kw => lowerText.includes(kw))
  const hasJobWord = lowerText.includes('job') || lowerText.includes('role') || lowerText.includes('position')

  if (hasJobSearchKeyword && hasJobWord) {
    // Extract role type
    let roleType: string | undefined
    let maxMatches = 0

    for (const [role, keywords] of Object.entries(roleKeywords)) {
      const matches = keywords.filter(kw => lowerText.includes(kw)).length
      if (matches > maxMatches) {
        maxMatches = matches
        roleType = role.toUpperCase()
      }
    }

    // Extract location
    let location: string | undefined
    if (lowerText.includes('london')) location = 'London'
    else if (lowerText.includes('manchester')) location = 'Manchester'
    else if (lowerText.includes('birmingham')) location = 'Birmingham'
    else if (lowerText.includes('uk') || lowerText.includes('united kingdom')) location = 'UK'

    if (roleType) {
      return {
        action: 'search_jobs',
        roleType,
        location,
        confidence: 0.8
      }
    }
  }

  // Check for preference confirmation intent
  const hasInterestKeyword = lowerText.includes('interested in') ||
                            lowerText.includes('looking for') ||
                            lowerText.includes('want to work')

  if (hasInterestKeyword) {
    const values: string[] = []

    // Extract role preferences
    for (const [role, keywords] of Object.entries(roleKeywords)) {
      if (keywords.some(kw => lowerText.includes(kw))) {
        values.push(role.toUpperCase())
      }
    }

    if (values.length > 0) {
      return {
        action: 'confirm_preference',
        preferenceType: 'role',
        values,
        confidence: 0.7
      }
    }
  }

  return {
    action: 'unknown',
    confidence: 0
  }
}

/**
 * Query Neon DB directly for jobs
 */
async function searchJobsFromDB(roleType: string, location?: string) {
  try {
    const rolePattern = `%${roleType}%`
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
          LOWER(title) LIKE LOWER(${rolePattern})
          OR LOWER(role_category) LIKE LOWER(${rolePattern})
        )
        AND LOWER(COALESCE(location, '')) LIKE LOWER(${locationPattern})
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
