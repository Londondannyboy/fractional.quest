import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

// Apify API configuration - Set APIFY_API_KEY in Vercel environment variables
const APIFY_API_TOKEN = process.env.APIFY_API_KEY
const APIFY_TASK_ID = process.env.APIFY_TASK_ID || 'eCRqlhiXr9ANbXDUt'

interface ApifyJob {
  title: string
  company?: string
  company_name?: string
  location?: string
  url?: string
  source_url?: string
  posted_date?: string
  description?: string
  salary?: string
  compensation?: string
  is_remote?: boolean
  workplace_type?: string
  skills?: string[]
}

/**
 * GET /api/cron/sync-apify-jobs
 * Vercel Cron job to sync jobs from Apify
 * Designed to run hourly for fresh job data
 */
export async function GET(request: NextRequest) {
  // Verify this is a legitimate cron request from Vercel
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  // In production, verify the cron secret
  if (process.env.NODE_ENV === 'production' && cronSecret) {
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  try {
    // Verify API token is set
    if (!APIFY_API_TOKEN) {
      return NextResponse.json(
        { error: 'APIFY_API_KEY environment variable not set' },
        { status: 500 }
      )
    }

    console.log('[Apify Sync] Starting hourly job sync...')

    // Run the Apify task
    const runResponse = await fetch(
      `https://api.apify.com/v2/actor-tasks/${APIFY_TASK_ID}/runs?token=${APIFY_API_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (!runResponse.ok) {
      throw new Error(`Failed to start Apify task: ${runResponse.status}`)
    }

    const runData = await runResponse.json()
    const runId = runData.data?.id

    if (!runId) {
      throw new Error('No run ID returned from Apify')
    }

    console.log(`[Apify Sync] Task started with run ID: ${runId}`)

    // Wait for the run to complete (poll every 10 seconds, max 5 minutes)
    let attempts = 0
    const maxAttempts = 30
    let runStatus = 'RUNNING'

    while (runStatus === 'RUNNING' && attempts < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, 10000))

      const statusResponse = await fetch(
        `https://api.apify.com/v2/actor-runs/${runId}?token=${APIFY_API_TOKEN}`
      )
      const statusData = await statusResponse.json()
      runStatus = statusData.data?.status || 'UNKNOWN'
      attempts++

      console.log(`[Apify Sync] Run status: ${runStatus} (attempt ${attempts}/${maxAttempts})`)
    }

    if (runStatus !== 'SUCCEEDED') {
      return NextResponse.json({
        success: false,
        message: `Apify run did not complete successfully. Status: ${runStatus}`,
        runId,
      })
    }

    // Fetch the dataset results
    const datasetId = runData.data?.defaultDatasetId
    const datasetResponse = await fetch(
      `https://api.apify.com/v2/datasets/${datasetId}/items?token=${APIFY_API_TOKEN}`
    )

    if (!datasetResponse.ok) {
      throw new Error(`Failed to fetch dataset: ${datasetResponse.status}`)
    }

    const jobs: ApifyJob[] = await datasetResponse.json()

    console.log(`[Apify Sync] Fetched ${jobs.length} jobs from Apify`)

    if (jobs.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No jobs found in Apify dataset',
        stats: { fetched: 0, inserted: 0, updated: 0, skipped: 0 },
      })
    }

    // Process and insert/update jobs
    let inserted = 0
    let updated = 0
    let skipped = 0

    for (const job of jobs) {
      try {
        const title = job.title
        const company = job.company || job.company_name || 'Unknown Company'
        const location = job.location || 'UK'
        const sourceUrl = job.url || job.source_url || ''
        const compensation = job.salary || job.compensation || null
        const isRemote = job.is_remote || job.workplace_type?.toLowerCase().includes('remote') || false
        const description = job.description?.substring(0, 500) || null
        const postedDate = job.posted_date ? new Date(job.posted_date) : new Date()

        // Skip if missing required fields
        if (!title || !sourceUrl) {
          skipped++
          continue
        }

        // Detect role category from title
        const roleCategory = detectRoleCategory(title)

        // Generate slug
        const slug = generateSlug(title, company)

        // Check if job already exists
        const existing = await sql`
          SELECT id FROM jobs WHERE source_url = ${sourceUrl} OR slug = ${slug}
        `

        if (existing.length > 0) {
          // Update existing job
          await sql`
            UPDATE jobs SET
              title = ${title},
              company_name = ${company},
              location = ${location},
              is_remote = ${isRemote},
              compensation = ${compensation},
              role_category = ${roleCategory},
              description_snippet = ${description},
              posted_date = ${postedDate.toISOString()},
              is_active = true,
              updated_at = NOW()
            WHERE id = ${(existing[0] as any).id}
          `
          updated++
        } else {
          // Insert new job
          await sql`
            INSERT INTO jobs (
              slug, title, company_name, location, is_remote,
              compensation, role_category, description_snippet,
              posted_date, source_url, job_source, is_active,
              is_fractional, created_at, updated_at
            ) VALUES (
              ${slug}, ${title}, ${company}, ${location}, ${isRemote},
              ${compensation}, ${roleCategory}, ${description},
              ${postedDate.toISOString()}, ${sourceUrl}, 'Apify', true,
              true, NOW(), NOW()
            )
            ON CONFLICT (slug) DO UPDATE SET
              title = EXCLUDED.title,
              company_name = EXCLUDED.company_name,
              is_active = true,
              updated_at = NOW()
          `
          inserted++
        }
      } catch (jobError) {
        console.error(`[Apify Sync] Error processing job "${job.title}":`, jobError)
        skipped++
      }
    }

    const stats = {
      fetched: jobs.length,
      inserted,
      updated,
      skipped,
      runId,
    }

    console.log('[Apify Sync] Complete:', stats)

    // Revalidate job pages
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://fractional.quest'}/api/revalidate?path=/fractional-jobs-london`)
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://fractional.quest'}/api/revalidate?path=/fractional-jobs-uk`)
    } catch (revalidateError) {
      console.log('[Apify Sync] Revalidation skipped:', revalidateError)
    }

    return NextResponse.json({
      success: true,
      message: `Synced ${inserted} new jobs, updated ${updated}, skipped ${skipped}`,
      stats,
    })
  } catch (error) {
    console.error('[Apify Sync] Error:', error)
    return NextResponse.json(
      { error: 'Sync failed', details: String(error) },
      { status: 500 }
    )
  }
}

/**
 * Detect role category from job title
 */
function detectRoleCategory(title: string): string | null {
  const lower = title.toLowerCase()

  if (lower.includes('cfo') || lower.includes('chief financial')) return 'CFO'
  if (lower.includes('cto') || lower.includes('chief technology')) return 'CTO'
  if (lower.includes('cmo') || lower.includes('chief marketing')) return 'CMO'
  if (lower.includes('coo') || lower.includes('chief operating')) return 'COO'
  if (lower.includes('chro') || lower.includes('chief human') || lower.includes('hr director')) return 'CHRO'
  if (lower.includes('cpo') || lower.includes('chief product')) return 'CPO'
  if (lower.includes('ciso') || lower.includes('chief information security')) return 'CISO'
  if (lower.includes('finance director') || lower.includes('fd')) return 'CFO'
  if (lower.includes('marketing director')) return 'CMO'
  if (lower.includes('tech lead') || lower.includes('engineering')) return 'CTO'

  return null
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

  // Add timestamp suffix for uniqueness
  const suffix = Date.now().toString(36).substring(-4)
  return `${combined}-${suffix}`
}

// Increase max duration for cron job
export const maxDuration = 300
