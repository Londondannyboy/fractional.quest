import { NextRequest, NextResponse } from 'next/server'
import { stackServerApp } from '@/stack/server'
import { createDbQuery } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const user = await stackServerApp.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { jobId, action } = await request.json()

    if (!jobId || !action || !['add', 'remove'].includes(action)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const sql = createDbQuery()

    if (action === 'add') {
      await sql`
        INSERT INTO saved_jobs (user_id, job_id, saved_at)
        VALUES (${user.id}, ${jobId}, NOW())
        ON CONFLICT (user_id, job_id) DO NOTHING
      `
    } else {
      await sql`
        DELETE FROM saved_jobs
        WHERE user_id = ${user.id} AND job_id = ${jobId}
      `
    }

    return NextResponse.json({ success: true, action })
  } catch (error) {
    console.error('Error saving job:', error)
    return NextResponse.json({ error: 'Failed to save job' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await stackServerApp.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const sql = createDbQuery()

    const savedJobs = await sql`
      SELECT job_id, saved_at
      FROM saved_jobs
      WHERE user_id = ${user.id}
      ORDER BY saved_at DESC
    `

    return NextResponse.json({ savedJobs: savedJobs.map((j: any) => j.job_id) })
  } catch (error) {
    console.error('Error fetching saved jobs:', error)
    return NextResponse.json({ error: 'Failed to fetch saved jobs' }, { status: 500 })
  }
}
