/**
 * Fantastic.jobs Active Jobs DB API Client
 * https://rapidapi.com/fantastic-jobs-fantastic-jobs-default/api/active-jobs-db
 *
 * Direct from 150k+ employer career sites & 37 ATS platforms
 * No recruiter spam - employer-direct jobs only
 * $1-9 per 1,000 jobs via RapidAPI
 * Hourly refresh, 95% discovered within 3 hours
 */

const RAPIDAPI_KEY = process.env.FANTASTIC_JOBS_RAPIDAPI_KEY
const RAPIDAPI_HOST = 'active-jobs-db.p.rapidapi.com'

// Raw job from Fantastic.jobs API
interface FantasticJob {
  id: string
  title: string
  organization: string
  organization_logo: string | null
  url: string
  date_posted: string
  date_expires?: string | null
  salary_raw: string | null
  employment_type: string[] | null
  locations_derived: string[]
  countries_derived: string[]
  remote_derived: boolean
  source: string // paylocity, smartrecruiters, greenhouse, etc.
  description_text?: string
  description_html?: string
}

// Our normalized job schema
export interface NormalizedJob {
  title: string
  company_name: string
  company_logo: string | null
  location: string
  is_remote: boolean
  workplace_type: 'Remote' | 'Hybrid' | 'On-site'
  compensation: string | null
  role_category: string
  posted_date: Date
  valid_through: Date | null
  source_url: string
  job_source: string
  is_active: boolean
  description_snippet: string | null
  // Estimated day rate based on role
  estimated_day_rate: { min: number; max: number } | null
}

// Role-based salary estimates for day rates (GBP)
const SALARY_ESTIMATES: Record<string, { min: number; max: number }> = {
  'Executive': { min: 1000, max: 2000 },
  'CEO': { min: 1000, max: 2000 },
  'CFO': { min: 900, max: 1500 },
  'Finance': { min: 900, max: 1500 },
  'CTO': { min: 850, max: 1600 },
  'Engineering': { min: 850, max: 1600 },
  'CMO': { min: 800, max: 1400 },
  'Marketing': { min: 800, max: 1400 },
  'COO': { min: 850, max: 1400 },
  'Operations': { min: 850, max: 1400 },
  'HR': { min: 700, max: 1200 },
  'CHRO': { min: 800, max: 1300 },
  'Product': { min: 800, max: 1300 },
  'CPO': { min: 800, max: 1300 },
  'Sales': { min: 750, max: 1300 },
  'CRO': { min: 800, max: 1400 },
  'default': { min: 700, max: 1200 },
}

/**
 * Categorize role based on title keywords
 */
function categorizeRole(title: string): string {
  const t = title.toLowerCase()

  // CEO/Executive
  if (t.includes('ceo') || t.includes('chief executive') || t.includes('managing director') || t.includes('general manager')) {
    return 'Executive'
  }

  // CFO/Finance
  if (t.includes('cfo') || t.includes('chief financial') || t.includes('finance director') || t.includes('financial controller') || t.includes('fd ')) {
    return 'Finance'
  }

  // CTO/Engineering
  if (t.includes('cto') || t.includes('chief technology') || t.includes('vp engineering') || t.includes('tech director') || t.includes('engineering director')) {
    return 'Engineering'
  }

  // CMO/Marketing
  if (t.includes('cmo') || t.includes('chief marketing') || t.includes('marketing director') || t.includes('vp marketing') || t.includes('head of marketing')) {
    return 'Marketing'
  }

  // COO/Operations
  if (t.includes('coo') || t.includes('chief operating') || t.includes('operations director') || t.includes('vp operations') || t.includes('head of operations')) {
    return 'Operations'
  }

  // CHRO/HR
  if (t.includes('chro') || t.includes('chief people') || t.includes('hr director') || t.includes('people director') || t.includes('head of hr') || t.includes('head of people')) {
    return 'HR'
  }

  // CPO/Product
  if (t.includes('cpo') || t.includes('chief product') || t.includes('product director') || t.includes('vp product') || t.includes('head of product')) {
    return 'Product'
  }

  // CRO/Sales
  if (t.includes('cro') || t.includes('chief revenue') || t.includes('sales director') || t.includes('vp sales') || t.includes('head of sales')) {
    return 'Sales'
  }

  return 'Executive' // Default to Executive for C-suite searches
}

/**
 * Parse salary string to estimate day rate
 */
function parseSalary(salaryRaw: string | null): string | null {
  if (!salaryRaw) return null

  try {
    // Try to extract numeric values
    const numbers = salaryRaw.match(/[\d,]+/g)
    if (!numbers) return salaryRaw

    // Return as-is if it looks formatted
    return salaryRaw
  } catch {
    return null
  }
}

/**
 * Get estimated day rate based on role category
 */
function getEstimatedDayRate(roleCategory: string): { min: number; max: number } {
  return SALARY_ESTIMATES[roleCategory] || SALARY_ESTIMATES.default
}

/**
 * Transform Fantastic.jobs job to our normalized schema
 */
function transformToNormalizedJob(job: FantasticJob): NormalizedJob {
  const roleCategory = categorizeRole(job.title)
  const location = job.locations_derived?.[0] || 'UK'

  // Determine workplace type
  let workplaceType: 'Remote' | 'Hybrid' | 'On-site' = 'On-site'
  if (job.remote_derived) {
    workplaceType = 'Remote'
  } else if (job.title.toLowerCase().includes('hybrid')) {
    workplaceType = 'Hybrid'
  }

  // Generate description snippet
  const descriptionSnippet = job.description_text
    ? job.description_text.substring(0, 200).replace(/\s+/g, ' ').trim() + '...'
    : null

  // Calculate valid_through (30 days from posted date)
  const postedDate = new Date(job.date_posted)
  const validThrough = job.date_expires
    ? new Date(job.date_expires)
    : new Date(postedDate.getTime() + 30 * 24 * 60 * 60 * 1000)

  return {
    title: job.title,
    company_name: job.organization,
    company_logo: job.organization_logo,
    location,
    is_remote: job.remote_derived,
    workplace_type: workplaceType,
    compensation: parseSalary(job.salary_raw),
    role_category: roleCategory,
    posted_date: postedDate,
    valid_through: validThrough,
    source_url: job.url,
    job_source: job.source,
    is_active: true,
    description_snippet: descriptionSnippet,
    estimated_day_rate: getEstimatedDayRate(roleCategory),
  }
}

/**
 * Fetch active jobs from Fantastic.jobs API
 */
export async function fetchActiveJobs(
  titleFilter: string,
  locationFilter = 'United Kingdom',
  limit = 100
): Promise<NormalizedJob[]> {
  if (!RAPIDAPI_KEY) {
    console.warn('FANTASTIC_JOBS_RAPIDAPI_KEY not set - skipping job fetch')
    return []
  }

  const url = new URL('https://active-jobs-db.p.rapidapi.com/active-ats-7d')
  url.searchParams.set('limit', limit.toString())
  url.searchParams.set('offset', '0')
  url.searchParams.set('title_filter', titleFilter)
  url.searchParams.set('location_filter', locationFilter)
  url.searchParams.set('description_type', 'text')

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error('Fantastic.jobs API error:', response.status, await response.text())
      return []
    }

    const jobs: FantasticJob[] = await response.json()
    return jobs.map(transformToNormalizedJob)
  } catch (error) {
    console.error('Error fetching from Fantastic.jobs:', error)
    return []
  }
}

/**
 * Search queries for fractional/interim executive roles
 */
export const FRACTIONAL_SEARCH_QUERIES = [
  // Core fractional roles
  'fractional CMO',
  'fractional CEO',
  'fractional CFO',
  'fractional CTO',
  'fractional COO',
  'fractional CHRO',
  'fractional CPO',
  'fractional CRO',

  // Interim variants
  'interim CMO',
  'interim CEO',
  'interim CFO',
  'interim CTO',
  'interim COO',
  'interim CHRO',
  'interim finance director',
  'interim marketing director',
  'interim operations director',

  // Part-time variants
  'part-time CFO',
  'part-time CMO',
  'part-time CTO',
  'part-time COO',
  'part time chief',

  // Portfolio/consultant variants
  'portfolio executive',
  'portfolio CFO',
  'portfolio CMO',
  'consultant CFO',
  'consultant CMO',

  // Head of (flexible)
  'head of finance part',
  'head of marketing part',
  'head of operations part',
  'head of people part',
  'head of HR part',

  // Director level
  'finance director contract',
  'marketing director contract',
  'operations director contract',
]

/**
 * Sync all fractional jobs from Fantastic.jobs API
 * Returns a flat array of all jobs from all queries
 */
export async function syncAllFractionalJobs(): Promise<NormalizedJob[]> {
  const allJobs: NormalizedJob[] = []
  const seenUrls = new Set<string>()

  for (const query of FRACTIONAL_SEARCH_QUERIES) {
    try {
      const jobs = await fetchActiveJobs(query, 'United Kingdom', 50)

      // Deduplicate by URL
      for (const job of jobs) {
        if (!seenUrls.has(job.source_url)) {
          seenUrls.add(job.source_url)
          allJobs.push(job)
        }
      }

      // Rate limit - wait 100ms between requests
      await new Promise(resolve => setTimeout(resolve, 100))
    } catch (error) {
      console.error(`Error fetching jobs for query "${query}":`, error)
    }
  }

  console.log(`Synced ${allJobs.length} unique jobs from Fantastic.jobs`)
  return allJobs
}

/**
 * Check if a title matches fractional/interim criteria
 */
export function isFractionalRole(title: string): boolean {
  const t = title.toLowerCase()
  return (
    t.includes('fractional') ||
    t.includes('interim') ||
    t.includes('part-time') ||
    t.includes('part time') ||
    t.includes('portfolio') ||
    (t.includes('contract') && (t.includes('director') || t.includes('chief'))) ||
    (t.includes('consultant') && (t.includes('cfo') || t.includes('cmo') || t.includes('cto')))
  )
}
