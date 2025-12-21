import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_id, preference_type, preference_value } = body

    if (!user_id || !preference_type || !preference_value) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const result = await sql`
      DELETE FROM user_repo_preferences
      WHERE user_id = ${user_id}
        AND preference_type = ${preference_type}
        AND LOWER(preference_value) = LOWER(${preference_value})
      RETURNING id, preference_type, preference_value
    `

    if (result.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    console.log('[Delete] Removed:', result[0])
    return NextResponse.json({ success: true, deleted: result[0] })
  } catch (error) {
    console.error('[Delete] Error:', error)
    return NextResponse.json(
      { error: 'Failed to delete', details: String(error) },
      { status: 500 }
    )
  }
}
