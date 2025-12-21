import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Admin endpoint to create test user for local development
 * Only works when NEXT_PUBLIC_BYPASS_AUTH is enabled
 */

export async function POST(request: NextRequest) {
  try {
    // Only allow in development with bypass auth enabled
    if (process.env.NEXT_PUBLIC_BYPASS_AUTH !== 'true') {
      return NextResponse.json(
        { error: 'Only available in bypass auth mode' },
        { status: 403 }
      )
    }

    // Create test user
    const result = await sql`
      INSERT INTO users (neon_auth_id, email, created_at)
      VALUES ('test-user', 'test@example.com', NOW())
      ON CONFLICT (neon_auth_id) DO UPDATE
      SET email = EXCLUDED.email
      RETURNING id, neon_auth_id, email
    `

    return NextResponse.json({
      success: true,
      user: result[0]
    })
  } catch (error) {
    console.error('[Setup Test User] Error:', error)
    return NextResponse.json(
      { error: 'Failed to create test user', details: String(error) },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check if test user exists
    const result = await sql`
      SELECT id, neon_auth_id, email, created_at
      FROM users
      WHERE neon_auth_id = 'test-user'
      LIMIT 1
    `

    if (result.length === 0) {
      return NextResponse.json({
        exists: false,
        message: 'Test user does not exist. POST to this endpoint to create it.'
      })
    }

    return NextResponse.json({
      exists: true,
      user: result[0]
    })
  } catch (error) {
    console.error('[Setup Test User] Error:', error)
    return NextResponse.json(
      { error: 'Failed to check test user' },
      { status: 500 }
    )
  }
}
