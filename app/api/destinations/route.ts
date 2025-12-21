import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const destinations = await sql`
      SELECT
        id, name, country, slug, tagline, description,
        best_months, avg_temp_jan, avg_temp_jul,
        timezone, utc_offset_hours, uk_overlap_hours,
        cost_of_living, monthly_cost_estimate,
        avg_internet_speed_mbps, coworking_spaces_count,
        nomad_score, image_url
      FROM destinations
      WHERE is_active = true
      ORDER BY nomad_score DESC
    `

    return NextResponse.json({ destinations })
  } catch (error) {
    console.error('Error fetching destinations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch destinations' },
      { status: 500 }
    )
  }
}
