import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { getDestinationSuggestionForJob } from '@/lib/destination-matcher'

const sql = neon(process.env.DATABASE_URL!)

export async function GET(request: NextRequest) {
  const jobId = request.nextUrl.searchParams.get('jobId')

  if (!jobId) {
    return NextResponse.json({ error: 'jobId required' }, { status: 400 })
  }

  try {
    // Fetch job details
    const jobs = await sql`
      SELECT id, is_remote, workplace_type, location, hours_per_week
      FROM jobs
      WHERE id = ${jobId}
    `

    if (jobs.length === 0) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    const job = jobs[0]
    const suggestion = await getDestinationSuggestionForJob(jobId, {
      id: job.id,
      is_remote: job.is_remote,
      workplace_type: job.workplace_type,
      location: job.location,
      hours_per_week: job.hours_per_week
    })

    if (!suggestion) {
      return NextResponse.json({ suggestion: null })
    }

    return NextResponse.json({ suggestion })
  } catch (error) {
    console.error('Error getting destination suggestion:', error)
    return NextResponse.json(
      { error: 'Failed to get suggestion' },
      { status: 500 }
    )
  }
}
