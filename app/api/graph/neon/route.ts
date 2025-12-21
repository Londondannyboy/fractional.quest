import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Convert Neon preferences to graph format for ForceGraph3D
 */

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'userId required' },
        { status: 400 }
      )
    }

    console.log('[Graph Neon] Fetching for user:', userId)

    // Fetch all preferences for user
    const prefs = await sql`
      SELECT
        id,
        preference_type,
        preference_value,
        validated,
        created_at
      FROM user_repo_preferences
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
    `

    console.log('[Graph Neon] Found preferences:', prefs.length)

    // Convert to graph format
    const nodes = [
      {
        id: userId,
        type: 'user',
        label: 'You',
        data: {}
      }
    ]

    const edges = []

    // Add nodes and edges for each preference
    for (const pref of prefs) {
      const nodeId = `${pref.preference_type}:${pref.preference_value}`

      nodes.push({
        id: nodeId,
        type: pref.preference_type,
        label: pref.preference_value,
        data: {
          validated: pref.validated,
          created_at: pref.created_at
        }
      })

      edges.push({
        source: userId,
        target: nodeId,
        type: 'has',
        label: pref.preference_type
      })
    }

    console.log('[Graph Neon] Converted to:', nodes.length, 'nodes,', edges.length, 'edges')

    return NextResponse.json({
      graph: {
        nodes,
        edges
      },
      count: prefs.length
    })
  } catch (error) {
    console.error('[Graph Neon] Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch graph',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
