import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Seed test data for test-user
 */

export async function POST(request: NextRequest) {
  try {
    // Get test user
    const userResult = await sql`
      SELECT id FROM users WHERE neon_auth_id = 'test-user' LIMIT 1
    `

    if (userResult.length === 0) {
      return NextResponse.json(
        { error: 'Test user not found' },
        { status: 404 }
      )
    }

    const userId = userResult[0].id

    // Insert test preferences
    const testData = [
      { type: 'role', value: 'CFO' },
      { type: 'role', value: 'CMO' },
      { type: 'location', value: 'London' },
      { type: 'day_rate', value: '£1500' },
      { type: 'availability', value: 'Immediate' }
    ]

    const results = []
    for (const item of testData) {
      const result = await sql`
        INSERT INTO user_repo_preferences (user_id, preference_type, preference_value, validated)
        VALUES (${userId}, ${item.type}, ${item.value}, true)
        ON CONFLICT (user_id, preference_type, preference_value)
        DO UPDATE SET validated = true
        RETURNING id, preference_type, preference_value
      `
      results.push(result[0])
    }

    return NextResponse.json({
      success: true,
      inserted: results
    })
  } catch (error) {
    console.error('[Seed Test Data] Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to seed test data',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
