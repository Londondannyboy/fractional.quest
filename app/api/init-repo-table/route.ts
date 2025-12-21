import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Initialize the user_repo_preferences table
 */

export async function POST(request: NextRequest) {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS user_repo_preferences (
        id SERIAL PRIMARY KEY,
        user_id UUID REFERENCES users(id) ON DELETE CASCADE,
        preference_type VARCHAR(50) NOT NULL,
        preference_value TEXT NOT NULL,
        validated BOOLEAN DEFAULT false,
        confidence VARCHAR(20) DEFAULT 'extracted',
        raw_text TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, preference_type, preference_value)
      )
    `

    return NextResponse.json({
      success: true,
      message: 'Table created successfully'
    })
  } catch (error) {
    console.error('[Init Repo Table] Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to create table',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
