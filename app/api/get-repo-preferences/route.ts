import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Get all confirmed repo preferences for a user
 *
 * Returns all validated preferences grouped by type
 */

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      )
    }

    // Get internal user ID from neon_auth_id
    const userResult = await sql`
      SELECT id FROM users WHERE neon_auth_id = ${userId} LIMIT 1
    `

    if (userResult.length === 0) {
      return NextResponse.json({
        preferences: []
      })
    }

    const internalUserId = userResult[0].id

    // Fetch all validated preferences
    const preferences = await sql`
      SELECT
        id,
        preference_type,
        preference_value,
        validated,
        raw_text,
        created_at
      FROM user_repo_preferences
      WHERE user_id = ${internalUserId}
      AND validated = true
      ORDER BY preference_type, created_at DESC
    `

    // Group by type
    const grouped: Record<string, any[]> = {}
    preferences.forEach((pref: any) => {
      if (!grouped[pref.preference_type]) {
        grouped[pref.preference_type] = []
      }
      grouped[pref.preference_type].push({
        id: pref.id,
        value: pref.preference_value,
        rawText: pref.raw_text,
        createdAt: pref.created_at
      })
    })

    return NextResponse.json({
      preferences: grouped,
      count: preferences.length
    })
  } catch (error) {
    console.error('[Get Repo Preferences] Detailed error:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      error
    })
    return NextResponse.json(
      {
        error: 'Failed to fetch preferences',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
