import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Debug endpoint to check what's in the jobs table
 */
export async function GET() {
  try {
    // Check total job count
    const totalCount = await sql`SELECT COUNT(*) as count FROM jobs`

    // Check active jobs
    const activeCount = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true`

    // Check fractional jobs
    const fractionalCount = await sql`
      SELECT COUNT(*) as count FROM jobs
      WHERE is_fractional = true OR LOWER(title) LIKE '%fractional%'
    `

    // Sample of job titles
    const sampleJobs = await sql`
      SELECT id, title, is_fractional, is_active, role_category
      FROM jobs
      ORDER BY posted_date DESC
      LIMIT 20
    `

    // Count by role category
    const roleCategories = await sql`
      SELECT role_category, COUNT(*) as count
      FROM jobs
      WHERE is_active = true
      GROUP BY role_category
      ORDER BY count DESC
    `

    return NextResponse.json({
      summary: {
        total_jobs: totalCount[0].count,
        active_jobs: activeCount[0].count,
        fractional_tagged_jobs: fractionalCount[0].count
      },
      sample_jobs: sampleJobs,
      role_categories: roleCategories
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
