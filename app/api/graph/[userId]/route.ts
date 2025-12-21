import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Get user's career graph from graph_nodes table
 * Returns nodes and links in ClusteredForceGraph format
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params

    if (!userId) {
      return NextResponse.json(
        { error: 'userId required' },
        { status: 400 }
      )
    }

    console.log('[Graph API] Fetching graph for user:', userId)

    // Fetch all graph nodes for user
    const nodes = await sql`
      SELECT
        id,
        label,
        cluster,
        value,
        metadata,
        validated,
        created_at
      FROM graph_nodes
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
    `

    console.log('[Graph API] Found nodes:', nodes.length)

    // Convert to graph format with center node
    const graphNodes = [
      {
        id: 'user-center',
        label: 'ME',
        cluster: 'skills', // Center node doesn't really have a cluster
        value: 'User',
        validated: true,
        createdAt: new Date().toISOString(),
      },
      ...nodes.map((row: any) => ({
        id: row.id,
        label: row.label,
        cluster: row.cluster,
        value: row.value,
        metadata: row.metadata,
        validated: row.validated,
        createdAt: row.created_at,
      }))
    ]

    // Create links from center to all nodes
    const links = nodes.map((node: any) => ({
      source: 'user-center',
      target: node.id,
    }))

    return NextResponse.json({
      nodes: graphNodes,
      links,
    })
  } catch (error) {
    console.error('[Graph API] Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch graph',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}
