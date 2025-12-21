import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Save extracted preference to user's Repo
 *
 * Stores both validated and unvalidated preferences with their confidence level
 */

interface SavePreferenceRequest {
  user_id: string
  preference_type: 'role' | 'industry' | 'location' | 'availability' | 'day_rate' | 'skill'
  values: string[]
  validated: boolean
  raw_text?: string
}

// Normalization rules
const ALLOWED_ROLES = ['CEO', 'CFO', 'CTO', 'CMO', 'COO', 'CPO', 'VP', 'Director', 'Manager', 'Lead']

function normalizeValue(type: string, value: string): string {
  // Normalize roles to uppercase
  if (type === 'role') {
    return value.toUpperCase()
  }

  // Normalize locations to title case
  if (type === 'location') {
    return value.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ')
  }

  // Return as-is for other types
  return value
}

export async function POST(request: NextRequest) {
  try {
    const body: SavePreferenceRequest = await request.json()

    if (!body.user_id || !body.preference_type || !body.values || body.values.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields: user_id, preference_type, values' },
        { status: 400 }
      )
    }

    // Insert or update each preference value
    const results = []
    for (const value of body.values) {
      try {
        // Normalize the value
        const normalizedValue = normalizeValue(body.preference_type, value)

        const result = await sql`
          INSERT INTO user_repo_preferences (user_id, preference_type, preference_value, validated, raw_text)
          VALUES (${body.user_id}, ${body.preference_type}, ${normalizedValue}, ${body.validated}, ${body.raw_text || null})
          ON CONFLICT (user_id, preference_type, LOWER(preference_value))
          DO UPDATE SET
            validated = GREATEST(user_repo_preferences.validated, EXCLUDED.validated),
            raw_text = COALESCE(EXCLUDED.raw_text, user_repo_preferences.raw_text)
          RETURNING id, preference_type, preference_value, validated
        `
        results.push(result[0])
        console.log('[SavePreference] Saved:', normalizedValue)
      } catch (e) {
        console.error('[SavePreference] Error saving value:', value, e)
      }
    }

    console.log('[SavePreference] Total saved:', {
      user_id: body.user_id,
      type: body.preference_type,
      count: results.length,
      validated: body.validated
    })

    return NextResponse.json({
      success: true,
      saved: results,
      validated: body.validated
    })
  } catch (error) {
    console.error('[SavePreference] Error:', error)
    return NextResponse.json(
      { error: 'Failed to save preference', details: String(error) },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve user's repo preferences
export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('user_id')

  if (!userId) {
    return NextResponse.json(
      { error: 'Missing user_id parameter' },
      { status: 400 }
    )
  }

  try {
    // Get all preferences grouped by type
    const preferences = await sql`
      SELECT preference_type, preference_value, validated, created_at
      FROM user_repo_preferences
      WHERE user_id = ${userId}
      ORDER BY preference_type, created_at DESC
    `

    // Group by type
    const grouped: Record<string, { value: string; validated: boolean }[]> = {}
    for (const pref of preferences) {
      if (!grouped[pref.preference_type]) {
        grouped[pref.preference_type] = []
      }
      grouped[pref.preference_type].push({
        value: pref.preference_value,
        validated: pref.validated
      })
    }

    return NextResponse.json({ preferences: grouped })
  } catch (error) {
    console.error('[GetPreferences] Error:', error)
    return NextResponse.json(
      { error: 'Failed to get preferences', details: String(error) },
      { status: 500 }
    )
  }
}
