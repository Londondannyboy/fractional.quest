import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { syncAllFractionalJobs, NormalizedJob, isFractionalRole } from '@/lib/fantastic-jobs'

const sql = neon(process.env.DATABASE_URL!)

/**
 * POST /api/jobs/sync-fantastic
 * Sync jobs from Fantastic.jobs API into the database
 * Should be called by a cron job every 6 hours
 *
 * Required headers:
 * - Authorization: Bearer <CRON_SECRET> (for security)
 *
 * Query params:
 * - force=true: Skip duplicate check and force upsert
 */
export async function POST(request: NextRequest) {
  // Verify authorization
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  // Allow if CRON_SECRET matches or in development
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    // Also allow if no cron secret is set (development)
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  const force = request.nextUrl.searchParams.get('force') === 'true'

  try {
    console.log('Starting Fantastic.jobs sync...')

    // Fetch all jobs from Fantastic.jobs API
    const jobs = await syncAllFractionalJobs()

    if (jobs.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No new jobs found',
        stats: { fetched: 0, inserted: 0, updated: 0, skipped: 0 }
      })
    }

    // Filter to only fractional/interim roles
    const fractionalJobs = jobs.filter(job => isFractionalRole(job.title))

    console.log(`Found ${fractionalJobs.length} fractional jobs out of ${jobs.length} total`)

    let inserted = 0
    let updated = 0
    let skipped = 0
    const errors: string[] = []

    for (const job of fractionalJobs) {
      try {
        // Generate slug from title and company
        const slug = generateSlug(job.title, job.company_name)

        // Check if job already exists by URL or slug
        const existing = await sql`
          SELECT id FROM jobs WHERE source_url = ${job.source_url} OR slug = ${slug}
        `

        if (existing.length > 0 && !force) {
          // Update existing job
          await sql`
            UPDATE jobs SET
              title = ${job.title},
              company_name = ${job.company_name},
              company_logo = ${job.company_logo},
              location = ${job.location},
              is_remote = ${job.is_remote},
              workplace_type = ${job.workplace_type},
              compensation = ${job.compensation || formatDayRate(job.estimated_day_rate)},
              role_category = ${job.role_category},
              posted_date = ${job.posted_date},
              valid_through = ${job.valid_through},
              source_url = ${job.source_url},
              job_source = ${job.job_source},
              is_active = true,
              description_snippet = ${job.description_snippet},
              updated_at = NOW()
            WHERE id = ${(existing[0] as any).id}
          `
          updated++
        } else if (existing.length === 0) {
          // Insert new job
          await sql`
            INSERT INTO jobs (
              slug, title, company_name, company_logo, location,
              is_remote, workplace_type, compensation, role_category,
              posted_date, valid_through, source_url, job_source,
              is_active, is_fractional, description_snippet,
              created_at, updated_at
            ) VALUES (
              ${slug}, ${job.title}, ${job.company_name}, ${job.company_logo},
              ${job.location}, ${job.is_remote}, ${job.workplace_type},
              ${job.compensation || formatDayRate(job.estimated_day_rate)},
              ${job.role_category}, ${job.posted_date}, ${job.valid_through},
              ${job.source_url}, ${job.job_source}, true, true,
              ${job.description_snippet}, NOW(), NOW()
            )
            ON CONFLICT (slug) DO UPDATE SET
              title = EXCLUDED.title,
              company_name = EXCLUDED.company_name,
              is_active = true,
              updated_at = NOW()
          `
          inserted++
        } else {
          skipped++
        }
      } catch (jobError) {
        const errorMsg = `Error processing job "${job.title}": ${jobError}`
        console.error(errorMsg)
        errors.push(errorMsg)
        skipped++
      }
    }

    // Optionally mark old jobs as inactive (jobs not updated in 14 days)
    const deactivated = await sql`
      UPDATE jobs SET is_active = false
      WHERE job_source IS NOT NULL
        AND updated_at < NOW() - INTERVAL '14 days'
        AND is_active = true
      RETURNING id
    `

    const stats = {
      fetched: jobs.length,
      fractionalFiltered: fractionalJobs.length,
      inserted,
      updated,
      skipped,
      deactivated: deactivated.length,
      errors: errors.length
    }

    console.log('Fantastic.jobs sync complete:', stats)

    return NextResponse.json({
      success: true,
      message: `Synced ${inserted} new jobs, updated ${updated}, skipped ${skipped}`,
      stats,
      ...(errors.length > 0 && { errors: errors.slice(0, 10) }) // Limit errors in response
    })

  } catch (error) {
    console.error('Fantastic.jobs sync error:', error)
    return NextResponse.json(
      { error: 'Sync failed', details: String(error) },
      { status: 500 }
    )
  }
}

/**
 * GET /api/jobs/sync-fantastic
 * Get sync status and stats
 */
export async function GET() {
  try {
    const stats = await sql`
      SELECT
        COUNT(*) FILTER (WHERE job_source IS NOT NULL) as synced_total,
        COUNT(*) FILTER (WHERE job_source IS NOT NULL AND is_active = true) as synced_active,
        COUNT(*) FILTER (WHERE job_source IS NOT NULL AND created_at > NOW() - INTERVAL '24 hours') as synced_last_24h,
        COUNT(*) FILTER (WHERE job_source IS NOT NULL AND updated_at > NOW() - INTERVAL '1 hour') as synced_last_hour,
        MAX(updated_at) FILTER (WHERE job_source IS NOT NULL) as last_sync
      FROM jobs
    `

    const bySource = await sql`
      SELECT job_source, COUNT(*) as count
      FROM jobs
      WHERE job_source IS NOT NULL AND is_active = true
      GROUP BY job_source
      ORDER BY count DESC
    `

    const byCategory = await sql`
      SELECT role_category, COUNT(*) as count
      FROM jobs
      WHERE is_active = true
      GROUP BY role_category
      ORDER BY count DESC
    `

    return NextResponse.json({
      status: 'ok',
      stats: stats[0],
      bySource,
      byCategory
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get stats', details: String(error) },
      { status: 500 }
    )
  }
}

/**
 * Generate URL-friendly slug from title and company
 */
function generateSlug(title: string, company: string): string {
  const combined = `${title} ${company}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80)

  // Add random suffix for uniqueness
  const suffix = Math.random().toString(36).substring(2, 6)
  return `${combined}-${suffix}`
}

/**
 * Format estimated day rate as compensation string
 */
function formatDayRate(rate: { min: number; max: number } | null): string | null {
  if (!rate) return null
  return `£${rate.min}-£${rate.max}/day`
}
