import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Debug endpoint to see raw database state
 */

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId') || 'test-user'

    // Get all preferences
    const prefs = await sql`
      SELECT * FROM user_repo_preferences
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
    `

    // Also get graph format
    const graphResponse = await fetch(
      `${request.nextUrl.origin}/api/graph/neon?userId=${userId}`
    )
    const graphData = await graphResponse.json()

    return NextResponse.json({
      userId,
      raw_preferences: prefs,
      graph_format: graphData,
      counts: {
        total_prefs: prefs.length,
        graph_nodes: graphData.graph?.nodes?.length || 0,
        graph_edges: graphData.graph?.edges?.length || 0
      }
    })
  } catch (error) {
    console.error('[Debug Graph] Error:', error)
    return NextResponse.json(
      {
        error: 'Debug failed',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
