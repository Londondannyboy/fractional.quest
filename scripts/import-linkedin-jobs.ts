/**
 * Import jobs from LinkedIn JSON export into fractional.quest database
 *
 * Usage: npx tsx scripts/import-linkedin-jobs.ts <json-file-path>
 */

import { neon } from '@neondatabase/serverless'
import * as fs from 'fs'
import * as path from 'path'

// Load env from .env.local
const envLocalPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, 'utf-8')
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) return
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) return
    const key = trimmed.substring(0, eqIdx)
    let value = trimmed.substring(eqIdx + 1)
    // Remove surrounding quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (!process.env[key]) {
      process.env[key] = value
    }
  })
}

const sql = neon(process.env.DATABASE_URL!)

interface LinkedInJob {
  id: string
  title: string
  organization: string
  organization_url: string
  organization_logo: string | null
  url: string
  date_posted: string
  date_validthrough: string | null
  salary_raw: {
    '@type': string
    currency: string
    value: {
      '@type': string
      minValue: number
      maxValue: number
      unitText: string
    }
  } | null
  employment_type: string[] | null
  location_type: string | null
  locations_derived: string[] | null
  countries_derived: string[] | null
  cities_derived: string[] | null
  remote_derived: boolean
  description_text: string | null
  seniority: string | null
  linkedin_org_industry: string | null
  linkedin_org_size: string | null
  linkedin_org_description: string | null
  linkedin_org_url: string | null
  external_apply_url: string | null
}

// Role categorization based on title
// Valid enum values: Engineering, Marketing, Finance, Operations, Sales, HR, Product, Design, Data, Legal, Customer Success, Executive, Other
function categorizeRole(title: string): string {
  const t = title.toLowerCase()

  if (t.includes('ceo') || t.includes('chief executive') || t.includes('managing director')) return 'Executive'
  if (t.includes('cfo') || t.includes('chief financial') || t.includes('finance director') || t.includes('financial controller') || t.includes('accountant') || t.includes('bookkeeper') || t.includes('controller')) return 'Finance'
  if (t.includes('cto') || t.includes('chief technology') || t.includes('tech director') || t.includes('engineering')) return 'Engineering'
  if (t.includes('cmo') || t.includes('chief marketing') || t.includes('marketing director') || t.includes('head of marketing') || t.includes('gtm') || t.includes('growth') || t.includes('seo')) return 'Marketing'
  if (t.includes('coo') || t.includes('chief operating') || t.includes('operations director') || t.includes('operations manager')) return 'Operations'
  if (t.includes('chro') || t.includes('chief people') || t.includes('hr director') || t.includes('people director') || t.includes('culture') || t.includes('human resource')) return 'HR'
  if (t.includes('cpo') || t.includes('chief product') || t.includes('product director') || t.includes('product development') || t.includes('merchandising')) return 'Product'
  if (t.includes('cro') || t.includes('chief revenue') || t.includes('sales director') || t.includes('head of sales') || t.includes('vp of sales') || t.includes('sales manager')) return 'Sales'
  if (t.includes('compliance') || t.includes('legal') || t.includes('counsel') || t.includes('regulatory')) return 'Legal'
  if (t.includes('ciso') || t.includes('security') || t.includes('cybersecurity')) return 'Engineering' // Map security to Engineering
  if (t.includes('data') || t.includes('analytics')) return 'Data'
  if (t.includes('consultant') || t.includes('advisor')) return 'Other' // Map consulting to Other
  if (t.includes('quality')) return 'Operations' // Map quality to Operations
  if (t.includes('writer') || t.includes('editor') || t.includes('content')) return 'Marketing' // Map content to Marketing
  if (t.includes('customer success') || t.includes('customer service')) return 'Customer Success'
  if (t.includes('design') || t.includes('ux') || t.includes('ui')) return 'Design'

  return 'Executive'
}

// Determine executive title from job title
// Valid enum values: CFO, CMO, CTO, COO, CPO, CHRO, CIO, CDO, CSO, CCO, CEO, Managing Director,
// VP Finance, VP Marketing, VP Engineering, VP Operations, VP Product,
// Finance Director, Marketing Director, Technology Director, Operations Director, Product Director, HR Director, Other
function getExecutiveTitle(title: string): string | null {
  const t = title.toLowerCase()

  if (t.includes('cfo') || t.includes('chief financial')) return 'CFO'
  if (t.includes('cto') || t.includes('chief technology')) return 'CTO'
  if (t.includes('cmo') || t.includes('chief marketing')) return 'CMO'
  if (t.includes('coo') || t.includes('chief operating')) return 'COO'
  if (t.includes('ceo') || t.includes('chief executive')) return 'CEO'
  if (t.includes('chro') || t.includes('chief people') || t.includes('chief human')) return 'CHRO'
  if (t.includes('cpo') || t.includes('chief product')) return 'CPO'
  if (t.includes('cro') || t.includes('chief revenue')) return 'CSO' // Map CRO to CSO (Sales)
  if (t.includes('ciso') || t.includes('chief information security')) return 'CIO' // Map CISO to CIO
  if (t.includes('cio') || t.includes('chief information officer')) return 'CIO'
  if (t.includes('cdo') || t.includes('chief data')) return 'CDO'
  if (t.includes('cso') || t.includes('chief sales')) return 'CSO'
  if (t.includes('cco') || t.includes('chief customer') || t.includes('chief commercial')) return 'CCO'
  if (t.includes('managing director')) return 'Managing Director'
  if (t.includes('vp finance') || t.includes('vp of finance')) return 'VP Finance'
  if (t.includes('vp marketing') || t.includes('vp of marketing')) return 'VP Marketing'
  if (t.includes('vp engineering') || t.includes('vp of engineering')) return 'VP Engineering'
  if (t.includes('vp operations') || t.includes('vp of operations')) return 'VP Operations'
  if (t.includes('vp product') || t.includes('vp of product')) return 'VP Product'
  if (t.includes('vp sales') || t.includes('vp of sales')) return 'CSO'
  if (t.includes('finance director')) return 'Finance Director'
  if (t.includes('marketing director')) return 'Marketing Director'
  if (t.includes('technology director') || t.includes('tech director')) return 'Technology Director'
  if (t.includes('operations director')) return 'Operations Director'
  if (t.includes('product director')) return 'Product Director'
  if (t.includes('hr director') || t.includes('people director')) return 'HR Director'
  if (t.includes('sales director')) return 'CSO'
  if (t.includes('director')) return 'Other'

  return null
}

// Check if job is fractional/interim/part-time
function isFractionalRole(title: string, employmentType: string[] | null): boolean {
  const t = title.toLowerCase()
  const fractionalKeywords = [
    'fractional', 'interim', 'part-time', 'part time',
    'contract', 'consulting', 'consultant', 'advisor',
    'temporary', 'freelance', 'portfolio', 'flexible'
  ]

  // Check title
  if (fractionalKeywords.some(kw => t.includes(kw))) return true

  // Check employment type
  if (employmentType) {
    const types = employmentType.map(et => et.toLowerCase())
    if (types.includes('contractor') || types.includes('part_time') || types.includes('temporary')) return true
  }

  return false
}

// Generate slug from title and company
function generateSlug(title: string, company: string): string {
  const combined = `${title} ${company}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80)

  const suffix = Math.random().toString(36).substring(2, 6)
  return `${combined}-${suffix}`
}

// Format salary from LinkedIn format
function formatSalary(salaryRaw: LinkedInJob['salary_raw']): { compensation: string | null, salaryMin: number | null, salaryMax: number | null, currency: string | null } {
  if (!salaryRaw?.value) {
    return { compensation: null, salaryMin: null, salaryMax: null, currency: null }
  }

  const { minValue, maxValue, unitText } = salaryRaw.value
  const currency = salaryRaw.currency || 'USD'

  let unitLabel = '/year'
  if (unitText === 'HOUR') unitLabel = '/hour'
  if (unitText === 'DAY') unitLabel = '/day'
  if (unitText === 'MONTH') unitLabel = '/month'

  const currencySymbol = currency === 'GBP' ? '£' : currency === 'EUR' ? '€' : '$'
  const compensation = `${currencySymbol}${minValue.toLocaleString()}-${currencySymbol}${maxValue.toLocaleString()}${unitLabel}`

  return { compensation, salaryMin: minValue, salaryMax: maxValue, currency }
}

// Determine workplace type
function getWorkplaceType(job: LinkedInJob): 'Remote' | 'Hybrid' | 'On-site' {
  if (job.remote_derived || job.location_type === 'TELECOMMUTE') return 'Remote'
  const title = job.title.toLowerCase()
  if (title.includes('remote')) return 'Remote'
  if (title.includes('hybrid')) return 'Hybrid'
  return 'On-site'
}

// Map employment type
function mapEmploymentType(types: string[] | null): string {
  if (!types || types.length === 0) return 'Contract'

  const mapping: Record<string, string> = {
    'FULL_TIME': 'Full-time',
    'PART_TIME': 'Part-time',
    'CONTRACTOR': 'Contract',
    'TEMPORARY': 'Temporary',
    'INTERN': 'Internship',
    'OTHER': 'Other'
  }

  return mapping[types[0]] || 'Contract'
}

// Get description snippet
function getSnippet(description: string | null): string | null {
  if (!description) return null
  // Get first 300 chars, ending at a word boundary
  const snippet = description.substring(0, 300)
  const lastSpace = snippet.lastIndexOf(' ')
  return lastSpace > 200 ? snippet.substring(0, lastSpace) + '...' : snippet + '...'
}

// Map country name to code
function mapCountry(countries: string[] | null): string | null {
  if (!countries || countries.length === 0) return null

  const countryMap: Record<string, string> = {
    'United States': 'USA',
    'United Kingdom': 'UK',
    'Canada': 'Canada',
    'Germany': 'Germany',
    'France': 'France',
    'Ireland': 'Ireland',
    'Saudi Arabia': 'Saudi Arabia',
    'Philippines': 'Philippines',
    'Argentina': 'Argentina',
    'Australia': 'Australia',
    'Netherlands': 'Netherlands',
    'Spain': 'Spain',
    'Italy': 'Italy',
    'Singapore': 'Singapore',
    'India': 'India',
  }

  return countryMap[countries[0]] || countries[0]
}

// Map seniority level to enum
// Valid enum values: Executive, Director, Manager, Senior, Mid, Junior, Intern
function mapSeniorityLevel(seniority: string | null): string | null {
  if (!seniority) return null

  const s = seniority.toLowerCase()

  if (s.includes('executive') || s.includes('c-level') || s.includes('مدير تنفيذي')) return 'Executive'
  if (s.includes('director')) return 'Director'
  if (s.includes('manager') || s.includes('mid-senior') || s.includes('senior level')) return 'Senior'
  if (s.includes('senior')) return 'Senior'
  if (s.includes('mid') || s.includes('associate')) return 'Mid'
  if (s.includes('entry') || s.includes('junior') || s.includes('مساعد')) return 'Junior'
  if (s.includes('intern') || s.includes('trainee')) return 'Intern'
  if (s.includes('not applicable')) return null

  return 'Senior' // Default for fractional roles
}

// Get city from derived data - map to valid enum values
// Valid enum values: London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, Glasgow,
// Liverpool, Newcastle, Sheffield, Cambridge, Oxford, Cardiff, Belfast, Remote, Other UK, International, UK-wide
function getCity(job: LinkedInJob): string | null {
  // If remote, return Remote
  if (job.remote_derived || job.location_type === 'TELECOMMUTE') {
    return 'Remote'
  }

  if (!job.cities_derived || job.cities_derived.length === 0) {
    return null
  }

  const city = job.cities_derived[0]
  const validUKCities = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Edinburgh',
    'Glasgow', 'Liverpool', 'Newcastle', 'Sheffield', 'Cambridge', 'Oxford', 'Cardiff', 'Belfast']

  // Check if it's a valid UK city
  if (validUKCities.includes(city)) {
    return city
  }

  // Check country - if UK but not a main city, use Other UK
  const countries = job.countries_derived || []
  if (countries.includes('United Kingdom')) {
    return 'Other UK'
  }

  // International city
  return 'International'
}

// Extract company domain from URL
function getCompanyDomain(linkedinOrgUrl: string | null): string | null {
  if (!linkedinOrgUrl) return null
  try {
    const url = new URL(linkedinOrgUrl)
    return url.hostname
  } catch {
    return null
  }
}

async function importJobs(filePath: string) {
  console.log(`Reading jobs from ${filePath}...`)

  const content = fs.readFileSync(filePath, 'utf-8')
  const jobs: LinkedInJob[] = JSON.parse(content)

  console.log(`Found ${jobs.length} total jobs`)

  // Filter for fractional/interim/part-time roles
  const fractionalJobs = jobs.filter(job => isFractionalRole(job.title, job.employment_type))
  console.log(`Filtered to ${fractionalJobs.length} fractional/interim/part-time jobs`)

  let inserted = 0
  let updated = 0
  let skipped = 0
  const errors: string[] = []

  for (const job of fractionalJobs) {
    try {
      const slug = generateSlug(job.title, job.organization)
      const location = job.locations_derived?.[0] || 'Remote'
      const workplaceType = getWorkplaceType(job)
      const roleCategory = categorizeRole(job.title)
      const executiveTitle = getExecutiveTitle(job.title)
      const { compensation, salaryMin, salaryMax, currency } = formatSalary(job.salary_raw)
      const employmentType = mapEmploymentType(job.employment_type)
      const snippet = getSnippet(job.description_text)
      const postedDate = new Date(job.date_posted)
      const validThrough = job.date_validthrough ? new Date(job.date_validthrough) : null
      const applyUrl = job.external_apply_url || job.url
      const country = mapCountry(job.countries_derived)
      const city = getCity(job)
      const companyDomain = getCompanyDomain(job.linkedin_org_url)
      const externalId = `linkedin-${job.id}`
      const seniorityLevel = mapSeniorityLevel(job.seniority)

      // Check for existing job by external_id or URL
      const existing = await sql`
        SELECT id FROM jobs WHERE external_id = ${externalId} OR url = ${applyUrl}
      `

      if (existing.length > 0) {
        // Update existing job
        await sql`
          UPDATE jobs SET
            title = ${job.title},
            company_name = ${job.organization},
            location = ${location},
            is_remote = ${workplaceType === 'Remote'},
            workplace_type = ${workplaceType},
            compensation = ${compensation},
            salary_min = ${salaryMin},
            salary_max = ${salaryMax},
            salary_currency = ${currency},
            role_category = ${roleCategory},
            executive_title = ${executiveTitle},
            employment_type = ${employmentType},
            seniority_level = ${seniorityLevel},
            posted_date = ${postedDate},
            application_deadline = ${validThrough},
            url = ${applyUrl},
            job_source = ${'LinkedIn'},
            is_active = true,
            is_fractional = true,
            description_snippet = ${snippet},
            full_description = ${job.description_text},
            about_company = ${job.linkedin_org_description},
            country = ${country},
            city = ${city},
            company_domain = ${companyDomain},
            last_seen_at = NOW(),
            updated_date = NOW()
          WHERE id = ${(existing[0] as { id: string }).id}
        `
        updated++
        console.log(`Updated: ${job.title} @ ${job.organization}`)
      } else {
        // Insert new job
        await sql`
          INSERT INTO jobs (
            external_id, slug, title, company_name, location,
            is_remote, workplace_type, compensation, salary_min, salary_max, salary_currency,
            role_category, executive_title, employment_type, seniority_level,
            posted_date, application_deadline, url, job_source,
            is_active, is_fractional, description_snippet, full_description, about_company,
            country, city, company_domain,
            first_seen_at, last_seen_at, updated_date
          ) VALUES (
            ${externalId}, ${slug}, ${job.title}, ${job.organization}, ${location},
            ${workplaceType === 'Remote'}, ${workplaceType}, ${compensation}, ${salaryMin}, ${salaryMax}, ${currency},
            ${roleCategory}, ${executiveTitle}, ${employmentType}, ${seniorityLevel},
            ${postedDate}, ${validThrough}, ${applyUrl}, ${'LinkedIn'},
            true, true, ${snippet}, ${job.description_text}, ${job.linkedin_org_description},
            ${country}, ${city}, ${companyDomain},
            NOW(), NOW(), NOW()
          )
          ON CONFLICT (slug) DO UPDATE SET
            title = EXCLUDED.title,
            company_name = EXCLUDED.company_name,
            is_active = true,
            last_seen_at = NOW()
        `
        inserted++
        console.log(`Inserted: ${job.title} @ ${job.organization}`)
      }
    } catch (error) {
      const msg = `Error processing ${job.title}: ${error}`
      console.error(msg)
      errors.push(msg)
      skipped++
    }
  }

  console.log('\n=== Import Complete ===')
  console.log(`Inserted: ${inserted}`)
  console.log(`Updated: ${updated}`)
  console.log(`Skipped: ${skipped}`)
  console.log(`Errors: ${errors.length}`)

  if (errors.length > 0) {
    console.log('\nFirst 5 errors:')
    errors.slice(0, 5).forEach(e => console.log(`  - ${e}`))
  }
}

// Run
const filePath = process.argv[2]
if (!filePath) {
  console.error('Usage: npx tsx scripts/import-linkedin-jobs.ts <json-file-path>')
  process.exit(1)
}

importJobs(path.resolve(filePath))
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Import failed:', err)
    process.exit(1)
  })
