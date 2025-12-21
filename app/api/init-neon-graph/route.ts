import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Initialize clean Neon schema for graph data with validation
 */

export async function POST(request: NextRequest) {
  try {
    // Drop existing table to start fresh
    await sql`DROP TABLE IF EXISTS user_repo_preferences CASCADE`

    // Create table with strict constraints
    await sql`
      CREATE TABLE user_repo_preferences (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id TEXT NOT NULL,
        preference_type TEXT NOT NULL,
        preference_value TEXT NOT NULL,
        validated BOOLEAN DEFAULT false,
        raw_text TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),

        -- Enforce allowed types
        CHECK (preference_type IN ('role', 'location', 'day_rate', 'skill', 'availability', 'company', 'industry'))
      )
    `

    // Create unique index for case-insensitive deduplication
    await sql`
      CREATE UNIQUE INDEX idx_user_prefs_unique
      ON user_repo_preferences(user_id, preference_type, LOWER(preference_value))
    `

    // Create index for fast lookups
    await sql`
      CREATE INDEX idx_user_prefs ON user_repo_preferences(user_id, preference_type)
    `

    return NextResponse.json({
      success: true,
      message: 'Neon graph schema initialized with validation'
    })
  } catch (error) {
    console.error('[Init Neon Graph] Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to initialize schema',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
