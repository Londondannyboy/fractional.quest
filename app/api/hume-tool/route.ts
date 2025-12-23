import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import {
  updateUserType,
  updateOnboardingStep,
  checkAndCompleteOnboarding,
} from '@/lib/onboarding-state'

const sql = neon(process.env.DATABASE_URL!)

/**
 * Hume EVI Tool Endpoint
 *
 * This endpoint is called by Hume when the voice assistant needs to:
 * - Get user profile information
 * - Search for jobs
 * - Get user skills
 * - Save user preferences
 *
 * The user_id is passed as a session variable when connecting to Hume.
 */

interface HumeToolRequest {
  type: string
  tool_type: string
  tool_call_id: string
  name: string
  parameters: string // JSON string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('========================================')
    console.log('[Hume Tool] RECEIVED REQUEST')
    console.log('[Hume Tool] Type:', body.type)
    console.log('[Hume Tool] Name:', body.name)
    console.log('[Hume Tool] Full body:', JSON.stringify(body, null, 2))
    console.log('========================================')

    // Handle tool calls
    if (body.type === 'tool_call' || body.name) {
      const toolName = body.name || body.tool_name
      const params = typeof body.parameters === 'string'
        ? JSON.parse(body.parameters)
        : body.parameters || {}

      console.log(`[Hume Tool] Executing: ${toolName}`, params)

      let result: string

      switch (toolName) {
        case 'get_user_profile':
          result = await getUserProfile(params.user_id)
          break

        // Support both Hume name (get_user_facts) and original name (get_user_skills)
        case 'get_user_facts':
        case 'get_user_skills':
          result = await getUserSkills(params.user_id)
          break

        case 'search_jobs':
          result = await searchJobs(params)
          break

        case 'search_articles':
          result = await searchArticles(params)
          break

        // Support both Hume name (save_user_fact) and original name (save_user_preference)
        case 'save_user_fact':
        case 'save_user_preference':
          result = await saveUserPreference(params)
          break

        case 'get_job_details':
          result = await getJobDetails(params.job_id)
          break

        case 'confirm_preference':
          // This tool triggers client-side UI for human confirmation
          // Returns structured data that the client can parse and display
          result = confirmPreference(params)
          break

        // ========== Onboarding Tools ==========

        case 'set_user_type':
          result = await setUserTypeOnboarding(params.user_id, params.user_type)
          break

        case 'add_skill':
          result = await addSkillToOnboarding(
            params.user_id,
            params.skill_name,
            params.confidence
          )
          break

        case 'add_company':
          result = await addCompanyToOnboarding(
            params.user_id,
            params.company_name,
            params.role,
            params.tenure
          )
          break

        case 'add_role_preference':
          result = await addRolePreferenceToOnboarding(params.user_id, params.role_title)
          break

        case 'set_company_info':
          result = await setCompanyInfoOnboarding(
            params.user_id,
            params.company_name,
            params.industry
          )
          break

        case 'add_role_needed':
          result = await addRoleNeededToOnboarding(
            params.user_id,
            params.role_title,
            params.priority,
            params.timeline
          )
          break

        case 'add_requirement':
          result = await addRequirementToOnboarding(
            params.user_id,
            params.requirement_type,
            params.value,
            params.is_hard_constraint
          )
          break

        case 'complete_onboarding':
          result = await completeOnboardingTool(params.user_id)
          break

        // ========== Real-Time Graph Extraction ==========
        case 'extract_and_update_graph':
          result = await extractAndUpdateGraph(params)
          break

        default:
          result = `Unknown tool: ${toolName}`
      }

      console.log(`[Hume Tool] Result for ${toolName}:`, result.substring(0, 200))

      // Return in Hume's expected format
      return NextResponse.json({
        type: 'tool_response',
        tool_call_id: body.tool_call_id || 'unknown',
        content: result
      })
    }

    // If not a tool call, return error
    return NextResponse.json(
      { error: 'Invalid request - expected tool_call' },
      { status: 400 }
    )
  } catch (error) {
    console.error('[Hume Tool] Error:', error)
    return NextResponse.json(
      {
        type: 'tool_response',
        tool_call_id: 'error',
        content: `Error processing request: ${error}`
      },
      { status: 500 }
    )
  }
}

// ============ Tool Implementations ============

async function getUserProfile(userId: string): Promise<string> {
  if (!userId) {
    return "No user ID provided. The user may not be logged in."
  }

  try {
    const results = await sql`
      SELECT
        first_name,
        last_name,
        email,
        current_country,
        destination_countries,
        budget_monthly,
        timeline,
        relocation_motivation as interests
      FROM users
      WHERE neon_auth_id = ${userId}
      LIMIT 1
    `

    if (results.length === 0) {
      return "No profile found for this user. They appear to be new."
    }

    const p = results[0]
    const parts = []

    if (p.first_name) parts.push(`Name: ${p.first_name} ${p.last_name || ''}`.trim())
    if (p.current_country) parts.push(`Location: ${p.current_country}`)
    if (p.interests) parts.push(`Interests: ${p.interests}`)
    if (p.timeline) parts.push(`Timeline: ${p.timeline}`)
    if (p.budget_monthly) parts.push(`Budget: £${p.budget_monthly}/day`)
    if (p.destination_countries) {
      const countries = Array.isArray(p.destination_countries)
        ? p.destination_countries.join(', ')
        : p.destination_countries
      parts.push(`Interested locations: ${countries}`)
    }

    return parts.length > 0
      ? parts.join('. ')
      : "Profile exists but has no details filled in yet."
  } catch (error) {
    console.error('[getUserProfile] Error:', error)
    return "Unable to fetch profile at this time."
  }
}

async function getUserSkills(userId: string): Promise<string> {
  if (!userId) {
    return "No user ID provided."
  }

  try {
    // First get the internal user ID
    const userResult = await sql`
      SELECT id FROM users WHERE neon_auth_id = ${userId} LIMIT 1
    `

    if (userResult.length === 0) {
      return "User not found."
    }

    const internalId = userResult[0].id

    const skills = await sql`
      SELECT skill_name, skill_level, years_experience
      FROM user_skills
      WHERE user_id = ${internalId}
      ORDER BY years_experience DESC NULLS LAST
      LIMIT 10
    `

    if (skills.length === 0) {
      return "No skills recorded yet. Ask them about their professional expertise."
    }

    const skillList = skills.map(s => {
      let desc = s.skill_name
      if (s.years_experience) desc += ` (${s.years_experience} years)`
      if (s.skill_level) desc += ` - ${s.skill_level}`
      return desc
    }).join(', ')

    return `Skills: ${skillList}`
  } catch (error) {
    console.error('[getUserSkills] Error:', error)
    return "Unable to fetch skills at this time."
  }
}

// Map executive titles to role categories for better search
function mapRoleToCategory(roleType?: string): string {
  if (!roleType) return '%'

  const roleLower = roleType.toLowerCase()

  // Map C-level titles to categories
  if (roleLower.includes('cmo') || roleLower.includes('chief marketing')) {
    return '%Marketing%'
  }
  if (roleLower.includes('cfo') || roleLower.includes('chief financial') || roleLower.includes('finance director')) {
    return '%Finance%'
  }
  if (roleLower.includes('cto') || roleLower.includes('chief technology') || roleLower.includes('chief technical')) {
    return '%Technology%'
  }
  if (roleLower.includes('coo') || roleLower.includes('chief operating')) {
    return '%Operations%'
  }
  if (roleLower.includes('ceo') || roleLower.includes('chief executive')) {
    return '%Executive%'
  }

  // Default: use the literal search term
  return `%${roleType}%`
}

async function searchJobs(params: {
  role_type?: string
  location?: string
  job_type?: string  // 'fractional', 'contract', 'interim', 'part-time', 'permanent'
  remote?: boolean
  limit?: number
}): Promise<string> {
  try {
    const rolePattern = mapRoleToCategory(params.role_type)
    const locationPattern = params.location ? `%${params.location}%` : '%'
    const limit = params.limit || 5

    // Build job type filter
    let jobTypeCondition = ''
    if (params.job_type) {
      const type = params.job_type.toLowerCase()
      if (type === 'fractional') {
        jobTypeCondition = ` AND (is_fractional = true OR LOWER(title) LIKE '%fractional%')`
      } else if (type === 'contract' || type === 'interim') {
        jobTypeCondition = ` AND (LOWER(title) LIKE '%contract%' OR LOWER(title) LIKE '%interim%')`
      } else if (type === 'part-time' || type === 'part time') {
        jobTypeCondition = ` AND LOWER(title) LIKE '%part%time%'`
      } else if (type === 'permanent' || type === 'full-time') {
        jobTypeCondition = ` AND (is_fractional = false OR is_fractional IS NULL) AND LOWER(title) NOT LIKE '%fractional%' AND LOWER(title) NOT LIKE '%contract%' AND LOWER(title) NOT LIKE '%interim%'`
      }
    }

    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote,
        salary_min, salary_max, salary_currency, is_fractional,
        CASE
          WHEN is_fractional = true THEN 1
          WHEN LOWER(title) LIKE '%fractional%' THEN 2
          WHEN LOWER(title) LIKE '%part%time%' OR LOWER(title) LIKE '%interim%' OR LOWER(title) LIKE '%contract%' THEN 3
          ELSE 4
        END as priority
      FROM jobs
      WHERE is_active = true
        AND (
          LOWER(COALESCE(executive_title::text, '')) LIKE LOWER(${rolePattern})
          OR LOWER(COALESCE(role_category::text, '')) LIKE LOWER(${rolePattern})
          OR LOWER(title) LIKE LOWER(${rolePattern})
        )
        AND (
          LOWER(COALESCE(city::text, '')) LIKE LOWER(${locationPattern})
          OR LOWER(COALESCE(country, '')) LIKE LOWER(${locationPattern})
          OR LOWER(COALESCE(location, '')) LIKE LOWER(${locationPattern})
        )
        ${jobTypeCondition ? sql.unsafe(jobTypeCondition) : sql``}
      ORDER BY priority ASC, posted_date DESC NULLS LAST
      LIMIT ${limit}
    `

    if (jobs.length === 0) {
      const roleText = params.role_type ? `${params.role_type} ` : ''
      const locationText = params.location ? ` in ${params.location}` : ''
      return `No ${roleText}fractional roles found${locationText} currently. Try a broader search.`
    }

    // Build human-readable descriptions for Frac to speak
    const jobDescriptions = jobs.map(j => {
      let desc = `${j.title} at ${j.company_name}`
      if (j.location) desc += `, ${j.location}`
      if (j.is_remote) desc += ' (Remote)'
      if (j.salary_min || j.salary_max) {
        const symbol = j.salary_currency === 'USD' ? '$' : '£'
        if (j.salary_min && j.salary_max) {
          desc += ` - ${symbol}${j.salary_min}-${j.salary_max}/day`
        }
      }
      return desc
    }).join(', ')

    // Return BOTH text (for Frac to speak) and structured data (for UI to render)
    return JSON.stringify({
      text: `I found ${jobs.length} fractional ${params.role_type || ''} role${jobs.length > 1 ? 's' : ''}${params.location ? ` in ${params.location}` : ''}. ${jobDescriptions}. Would you like to know more about any of these?`,
      data: {
        type: 'job_results',
        query: {
          role_type: params.role_type,
          location: params.location,
          remote: params.remote
        },
        jobs: jobs.map(j => ({
          id: j.id,
          slug: j.slug,
          title: j.title,
          company: j.company_name,
          location: j.location,
          isRemote: j.is_remote || false,
          dayRate: j.salary_min,
          dayRateMax: j.salary_max,
          currency: j.salary_currency || 'GBP',
        }))
      }
    })
  } catch (error) {
    console.error('[searchJobs] Error:', error)
    return "Unable to search jobs at this time."
  }
}

async function saveUserPreference(params: {
  user_id: string
  field: string
  value: string
}): Promise<string> {
  if (!params.user_id) {
    return "Cannot save - no user ID provided."
  }

  const allowedFields = ['interests', 'timeline', 'budget_monthly', 'current_country']

  if (!allowedFields.includes(params.field)) {
    return `Cannot update ${params.field}. Allowed fields: ${allowedFields.join(', ')}`
  }

  try {
    // Update specific field based on whitelisted name
    switch (params.field) {
      case 'interests':
        await sql`UPDATE users SET relocation_motivation = ${params.value} WHERE neon_auth_id = ${params.user_id}`
        break
      case 'timeline':
        await sql`UPDATE users SET timeline = ${params.value} WHERE neon_auth_id = ${params.user_id}`
        break
      case 'budget_monthly':
        await sql`UPDATE users SET budget_monthly = ${params.value} WHERE neon_auth_id = ${params.user_id}`
        break
      case 'current_country':
        await sql`UPDATE users SET current_country = ${params.value} WHERE neon_auth_id = ${params.user_id}`
        break
    }

    return `Saved ${params.field}: ${params.value}`
  } catch (error) {
    console.error('[saveUserPreference] Error:', error)
    return "Unable to save preference at this time."
  }
}

async function getJobDetails(jobId: string): Promise<string> {
  if (!jobId) {
    return "No job ID provided."
  }

  try {
    const results = await sql`
      SELECT
        title, company_name, location, is_remote,
        salary_min, salary_max, salary_currency,
        description, requirements, url
      FROM jobs
      WHERE id = ${jobId}
      LIMIT 1
    `

    if (results.length === 0) {
      return "Job not found."
    }

    const j = results[0]
    let desc = `${j.title} at ${j.company_name}. `
    if (j.location) desc += `Location: ${j.location}. `
    if (j.is_remote) desc += `Remote work available. `
    if (j.salary_min || j.salary_max) {
      const symbol = j.salary_currency === 'USD' ? '$' : '£'
      desc += `Salary: ${symbol}${j.salary_min || '?'}-${j.salary_max || '?'}/day. `
    }
    if (j.description) {
      // Truncate for voice
      const shortDesc = j.description.substring(0, 300)
      desc += `Description: ${shortDesc}...`
    }

    return desc
  } catch (error) {
    console.error('[getJobDetails] Error:', error)
    return "Unable to fetch job details at this time."
  }
}

async function searchArticles(params: {
  topic?: string
  limit?: number
}): Promise<string> {
  try {
    const topicPattern = params.topic ? `%${params.topic}%` : '%'
    const limit = params.limit || 5

    const articles = await sql`
      SELECT id, slug, title, summary, category
      FROM articles
      WHERE is_published = true
        AND (LOWER(title) LIKE LOWER(${topicPattern})
             OR LOWER(COALESCE(summary, '')) LIKE LOWER(${topicPattern})
             OR LOWER(COALESCE(category, '')) LIKE LOWER(${topicPattern}))
      ORDER BY published_date DESC NULLS LAST
      LIMIT ${limit}
    `

    if (articles.length === 0) {
      return params.topic
        ? `No articles found about ${params.topic}. Try a different topic.`
        : "No articles available at the moment."
    }

    const articleDescriptions = articles.map(a => {
      let desc = a.title
      if (a.category) desc += ` (${a.category})`
      if (a.slug) desc += ` - Read at fractional.quest/articles/${a.slug}`
      return desc
    }).join('. ')

    return `Found ${articles.length} articles: ${articleDescriptions}`
  } catch (error) {
    console.error('[searchArticles] Error:', error)
    return "Unable to search articles at this time."
  }
}

/**
 * Human-in-the-loop preference confirmation
 * Returns structured data that triggers client-side confirmation UI
 *
 * The response format uses a special prefix [CONFIRM_PREFERENCE] that
 * the client can detect and parse to show a confirmation card.
 */
function confirmPreference(params: {
  preference_type: string  // e.g., "role", "industry", "location", "availability", "day_rate"
  extracted_values: string[] | string  // e.g., ["CMO", "CFO"] or "tech, games, software"
  user_id?: string
}): string {
  const values = Array.isArray(params.extracted_values)
    ? params.extracted_values
    : params.extracted_values.split(',').map(v => v.trim())

  const preferenceLabel = params.preference_type === 'role' ? 'roles like'
    : params.preference_type === 'industry' ? 'industries like'
    : params.preference_type === 'location' ? 'locations like'
    : params.preference_type === 'day_rate' ? 'a day rate of'
    : params.preference_type

  const displayText = params.preference_type === 'day_rate'
    ? values[0]  // For day rate, just show the value
    : values.join(', ')  // For lists, join with commas

  // Return JSON with both text (for Frac to speak) and data (for UI confirmation)
  return JSON.stringify({
    text: `Let me confirm that with you. You're interested in ${preferenceLabel} ${displayText}. Please check your screen to confirm.`,
    data: {
      type: 'confirmation',
      action: 'save_preference',
      preference_type: params.preference_type,
      values: values,
      user_id: params.user_id,
      details: `You're interested in ${preferenceLabel} ${displayText}`
    }
  })
}

// ============ Onboarding Tool Implementations ============

/**
 * Parse rough tenure from natural language
 * Examples: "about a year" → "~1 year", "two to three years" → "2-3 years"
 */
function parseRoughTenure(tenureText?: string): string | undefined {
  if (!tenureText) return undefined

  const text = tenureText.toLowerCase()

  // Less than 6 months
  if (text.match(/few months|couple months|less than.*month/i)) {
    return '< 6 months'
  }

  // About 1 year
  if (text.match(/about.*year|around.*year|roughly.*year|one year/i) && !text.match(/two|three|four|five/i)) {
    return '~1 year'
  }

  // 1-2 years
  if (text.match(/year or two|one to two|1.*2 year/i)) {
    return '1-2 years'
  }

  // 2-3 years
  if (text.match(/two.*three|2.*3 year|couple.*year/i)) {
    return '2-3 years'
  }

  // 3-5 years
  if (text.match(/three.*five|3.*5 year|few years/i)) {
    return '3-5 years'
  }

  // 5+ years
  if (text.match(/five.*more|5\+|over five|more than five/i)) {
    return '5+ years'
  }

  // Default: return original text
  return tenureText
}

async function setUserTypeOnboarding(userId: string, userType: 'candidate' | 'client'): Promise<string> {
  try {
    await updateUserType(userId, userType)
    return `User type set to ${userType}.`
  } catch (error) {
    console.error('[setUserTypeOnboarding] Error:', error)
    return 'Failed to set user type.'
  }
}

async function addSkillToOnboarding(
  userId: string,
  skillName: string,
  confidence?: number
): Promise<string> {
  try {
    const skill = { name: skillName, confidence }
    await updateOnboardingStep(userId, 'collecting_skills', {
      skills: [skill] // Will be merged with existing skills
    })

    return `Added skill: ${skillName}${confidence ? ` (confidence: ${Math.round(confidence * 100)}%)` : ''}.`
  } catch (error) {
    console.error('[addSkillToOnboarding] Error:', error)
    return 'Failed to add skill.'
  }
}

async function addCompanyToOnboarding(
  userId: string,
  companyName: string,
  role?: string,
  tenure?: string
): Promise<string> {
  try {
    const parsedTenure = parseRoughTenure(tenure)
    const company = {
      name: companyName,
      role,
      tenure: parsedTenure
    }

    await updateOnboardingStep(userId, 'collecting_experience', {
      companies: [company] // Will be merged with existing companies
    })

    let response = `Added ${companyName}`
    if (role) response += ` as ${role}`
    if (parsedTenure) response += ` for ${parsedTenure}`
    response += '.'

    return response
  } catch (error) {
    console.error('[addCompanyToOnboarding] Error:', error)
    return 'Failed to add company.'
  }
}

async function addRolePreferenceToOnboarding(userId: string, roleTitle: string): Promise<string> {
  try {
    await updateOnboardingStep(userId, 'collecting_preferences', {
      roles: [roleTitle] // Will be merged with existing roles
    })

    return `Added role preference: ${roleTitle}.`
  } catch (error) {
    console.error('[addRolePreferenceToOnboarding] Error:', error)
    return 'Failed to add role preference.'
  }
}

async function setCompanyInfoOnboarding(
  userId: string,
  companyName: string,
  industry?: string
): Promise<string> {
  try {
    await updateOnboardingStep(userId, 'collecting_company', {
      companyName,
      industry
    })

    return `Set company: ${companyName}${industry ? ` in ${industry} industry` : ''}.`
  } catch (error) {
    console.error('[setCompanyInfoOnboarding] Error:', error)
    return 'Failed to set company info.'
  }
}

async function addRoleNeededToOnboarding(
  userId: string,
  roleTitle: string,
  priority?: string,
  timeline?: string
): Promise<string> {
  try {
    const role = { title: roleTitle, priority, timeline }
    await updateOnboardingStep(userId, 'collecting_hiring_needs', {
      rolesNeeded: [role] // Will be merged with existing roles
    })

    let response = `Added hiring need: ${roleTitle}`
    if (priority) response += ` (priority: ${priority})`
    if (timeline) response += ` - timeline: ${timeline}`
    response += '.'

    return response
  } catch (error) {
    console.error('[addRoleNeededToOnboarding] Error:', error)
    return 'Failed to add role needed.'
  }
}

async function addRequirementToOnboarding(
  userId: string,
  requirementType: string,
  value: string,
  isHardConstraint?: boolean
): Promise<string> {
  try {
    const requirement = {
      type: requirementType,
      value,
      isHardConstraint: isHardConstraint || false
    }

    await updateOnboardingStep(userId, 'collecting_requirements', {
      requirements: [requirement] // Will be merged with existing requirements
    })

    return `Added ${isHardConstraint ? 'hard' : 'soft'} requirement: ${requirementType} - ${value}.`
  } catch (error) {
    console.error('[addRequirementToOnboarding] Error:', error)
    return 'Failed to add requirement.'
  }
}

async function completeOnboardingTool(userId: string): Promise<string> {
  try {
    const isComplete = await checkAndCompleteOnboarding(userId)

    if (isComplete) {
      return 'Onboarding complete! All required information has been collected.'
    } else {
      return 'Onboarding is not yet complete. Some required information is still missing.'
    }
  } catch (error) {
    console.error('[completeOnboardingTool] Error:', error)
    return 'Failed to complete onboarding.'
  }
}

// ============ Real-Time Graph Extraction ============

/**
 * Extract career entities from transcript and update knowledge graph in real-time.
 * Called by Hume when user mentions skills, companies, roles, locations, or preferences.
 *
 * Returns dual-format response:
 * - text: What Frac should say
 * - data: { type: 'graph_update', nodes: [...], confirmations: [...] }
 */
async function extractAndUpdateGraph(params: {
  transcript_chunk: string
  user_id: string
  user_type?: string
  entity_hints?: string[]
}): Promise<string> {
  try {
    // Call our dedicated real-time extraction endpoint
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    const response = await fetch(`${baseUrl}/api/realtime-extract`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        transcript_chunk: params.transcript_chunk,
        user_id: params.user_id,
        user_type: params.user_type || 'candidate',
        entity_hints: params.entity_hints || []
      })
    })

    if (!response.ok) {
      console.error('[extractAndUpdateGraph] API error:', response.status)
      return JSON.stringify({
        text: "I'll keep that in mind. Continue.",
        data: { type: 'graph_update', nodes: [], confirmations: [] }
      })
    }

    const result = await response.json()

    // The /api/realtime-extract endpoint returns { content: JSON.stringify({ text, data }) }
    // We just pass through the content
    return result.content || JSON.stringify({
      text: "Got it.",
      data: { type: 'graph_update', nodes: [], confirmations: [] }
    })

  } catch (error) {
    console.error('[extractAndUpdateGraph] Error:', error)
    return JSON.stringify({
      text: "I heard you. Keep going.",
      data: { type: 'graph_update', nodes: [], confirmations: [], error: String(error) }
    })
  }
}

// Also support GET for testing
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    tools: [
      'get_user_profile',
      'get_user_facts (get_user_skills)',
      'search_jobs',
      'search_articles',
      'save_user_fact (save_user_preference)',
      'get_job_details',
      'confirm_preference',
      '--- ONBOARDING TOOLS ---',
      'set_user_type',
      'add_skill',
      'add_company',
      'add_role_preference',
      'set_company_info',
      'add_role_needed',
      'add_requirement',
      'complete_onboarding',
      '--- REAL-TIME GRAPH ---',
      'extract_and_update_graph'
    ],
    usage: 'POST tool calls from Hume EVI'
  })
}
