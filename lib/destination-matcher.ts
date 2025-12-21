/**
 * Destination matching service
 * Matches jobs to destinations based on remote status, season, and timezone
 */

import { neon } from '@neondatabase/serverless'
import { getCurrentUKSeason, isWinterEscapeSeason, getCurrentMonth } from './season-utils'
import type { Destination, JobDestinationSuggestion } from './types'

interface JobForMatching {
  id: string
  is_remote: boolean
  workplace_type: string | null
  location: string | null
  hours_per_week: string | null
}

interface MatchedDestination {
  destination: Destination
  suggestion_type: 'remote_escape' | 'weekend_getaway' | 'timezone_match'
  match_score: number
  season_context: string
}

/**
 * Parse hours per week string to number
 */
function parseHoursPerWeek(hours: string | null | undefined): number {
  if (!hours) return 40 // Assume full-time if not specified
  const match = hours.match(/(\d+)/)
  return match ? parseInt(match[1]) : 40
}

/**
 * Determine if job is fully remote
 */
function isFullyRemote(job: JobForMatching): boolean {
  return job.is_remote || job.workplace_type === 'Remote'
}

/**
 * Determine if job is hybrid
 */
function isHybrid(job: JobForMatching): boolean {
  return job.workplace_type === 'Hybrid'
}

/**
 * Match destinations to a job
 */
export async function matchDestinationsToJob(
  job: JobForMatching,
  limit: number = 3
): Promise<MatchedDestination[]> {
  const sql = neon(process.env.DATABASE_URL!)
  const season = getCurrentUKSeason()
  const currentMonth = getCurrentMonth()
  const isPartTime = parseHoursPerWeek(job.hours_per_week) < 30

  // No suggestions for onsite jobs
  if (!isFullyRemote(job) && !isHybrid(job)) {
    return []
  }

  let suggestionType: 'remote_escape' | 'weekend_getaway' | 'timezone_match'
  let destinations: any[]

  if (isFullyRemote(job) && isWinterEscapeSeason()) {
    // Winter escape - warm destinations with decent UK overlap
    suggestionType = 'remote_escape'
    destinations = await sql`
      SELECT * FROM destinations
      WHERE is_active = true
        AND ${currentMonth} = ANY(best_months)
        AND (avg_temp_jan >= 18 OR avg_temp_jul >= 25)
      ORDER BY nomad_score DESC, uk_overlap_hours DESC
      LIMIT ${limit}
    `
  } else if (isFullyRemote(job)) {
    // Timezone-friendly destinations (good UK overlap)
    suggestionType = 'timezone_match'
    destinations = await sql`
      SELECT * FROM destinations
      WHERE is_active = true
        AND uk_overlap_hours >= 6
      ORDER BY nomad_score DESC
      LIMIT ${limit}
    `
  } else if (isHybrid(job)) {
    // Weekend getaway - short-haul destinations (similar timezone)
    suggestionType = 'weekend_getaway'
    destinations = await sql`
      SELECT * FROM destinations
      WHERE is_active = true
        AND utc_offset_hours BETWEEN -1 AND 2
      ORDER BY nomad_score DESC
      LIMIT ${limit}
    `
  } else {
    return []
  }

  return destinations.map((dest, index) => ({
    destination: dest as Destination,
    suggestion_type: suggestionType,
    match_score: 100 - (index * 10), // First result gets 100, then 90, 80...
    season_context: season
  }))
}

/**
 * Get cached suggestion for a job, or generate new one
 */
export async function getDestinationSuggestionForJob(
  jobId: string,
  job: JobForMatching
): Promise<MatchedDestination | null> {
  const sql = neon(process.env.DATABASE_URL!)

  // Check cache first (valid for 7 days)
  const cached = await sql`
    SELECT jds.*, d.*
    FROM job_destination_suggestions jds
    JOIN destinations d ON jds.destination_id = d.id
    WHERE jds.job_id = ${jobId}
      AND jds.generated_at > NOW() - INTERVAL '7 days'
    ORDER BY jds.match_score DESC
    LIMIT 1
  `

  if (cached.length > 0) {
    const row = cached[0]
    return {
      destination: {
        id: row.destination_id,
        name: row.name,
        country: row.country,
        slug: row.slug,
        tagline: row.tagline,
        description: row.description,
        best_months: row.best_months,
        timezone: row.timezone,
        utc_offset_hours: row.utc_offset_hours,
        uk_overlap_hours: row.uk_overlap_hours,
        cost_of_living: row.cost_of_living,
        nomad_score: row.nomad_score,
        image_url: row.image_url,
        is_active: true
      } as Destination,
      suggestion_type: row.suggestion_type,
      match_score: row.match_score,
      season_context: row.season_context
    }
  }

  // Generate new suggestions
  const suggestions = await matchDestinationsToJob(job, 1)
  if (suggestions.length === 0) return null

  const suggestion = suggestions[0]

  // Cache the result
  try {
    await sql`
      INSERT INTO job_destination_suggestions (job_id, destination_id, suggestion_type, match_score, season_context)
      VALUES (${jobId}, ${suggestion.destination.id}, ${suggestion.suggestion_type}, ${suggestion.match_score}, ${suggestion.season_context})
      ON CONFLICT (job_id, destination_id) DO UPDATE SET
        match_score = EXCLUDED.match_score,
        season_context = EXCLUDED.season_context,
        generated_at = NOW()
    `
  } catch (e) {
    // Ignore cache errors
    console.error('Failed to cache destination suggestion:', e)
  }

  return suggestion
}
