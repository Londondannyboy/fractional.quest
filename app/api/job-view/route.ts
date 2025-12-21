import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

export async function POST(request: NextRequest) {
  try {
    const { jobId, userId, sessionId, referrer, deviceType } = await request.json()

    if (!jobId) {
      return NextResponse.json({ error: 'Job ID required' }, { status: 400 })
    }

    const sql = neon(process.env.DATABASE_URL!)

    // Record the view
    await sql`
      INSERT INTO job_views (job_id, user_id, session_id, referrer, device_type)
      VALUES (${jobId}, ${userId || null}, ${sessionId || null}, ${referrer || null}, ${deviceType || null})
    `

    // Update aggregated counts (quick update for this job only)
    await sql`
      INSERT INTO job_view_counts (job_id, total_views, views_last_7_days, views_last_24_hours, last_updated)
      SELECT
        ${jobId},
        COUNT(*),
        COUNT(*) FILTER (WHERE viewed_at > NOW() - INTERVAL '7 days'),
        COUNT(*) FILTER (WHERE viewed_at > NOW() - INTERVAL '24 hours'),
        NOW()
      FROM job_views
      WHERE job_id = ${jobId}
      ON CONFLICT (job_id) DO UPDATE SET
        total_views = EXCLUDED.total_views,
        views_last_7_days = EXCLUDED.views_last_7_days,
        views_last_24_hours = EXCLUDED.views_last_24_hours,
        last_updated = NOW()
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error recording job view:', error)
    return NextResponse.json({ error: 'Failed to record view' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get('jobId')

    if (!jobId) {
      return NextResponse.json({ error: 'Job ID required' }, { status: 400 })
    }

    const sql = neon(process.env.DATABASE_URL!)

    const result = await sql`
      SELECT total_views, views_last_7_days, views_last_24_hours
      FROM job_view_counts
      WHERE job_id = ${parseInt(jobId)}
    `

    if (result.length === 0) {
      return NextResponse.json({ totalViews: 0, views7Days: 0, views24Hours: 0 })
    }

    return NextResponse.json({
      totalViews: result[0].total_views,
      views7Days: result[0].views_last_7_days,
      views24Hours: result[0].views_last_24_hours
    })
  } catch (error) {
    console.error('Error fetching job views:', error)
    return NextResponse.json({ error: 'Failed to fetch views' }, { status: 500 })
  }
}
