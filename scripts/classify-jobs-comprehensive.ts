/**
 * Comprehensive Job Classification using Pydantic AI
 * Classifies: Country, City, Role Category, Industry, Employment Type, Seniority
 *
 * Run: npx tsx scripts/classify-jobs-comprehensive.ts
 */

import { neon } from '@neondatabase/serverless'
import { z } from 'zod'

const sql = neon(process.env.DATABASE_URL!)
// Use Claude API directly (most reliable)
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY

// Valid values from your database
const INDUSTRIES = [
  'Technology',
  'FinTech',
  'SaaS',
  'Healthcare',
  'E-commerce',
  'Professional Services',
  'Financial Services',
  'Manufacturing',
  'Retail',
  'Media',
  'Real Estate',
  'Education',
  'Energy',
  'Recruitment',
  'Other'
] as const

// Function areas (broad categories)
const ROLE_CATEGORIES = [
  'Engineering',
  'Marketing',
  'Finance',
  'Operations',
  'Sales',
  'HR',
  'Product',
  'Design',
  'Data',
  'Legal',
  'Customer Success',
  'Executive',
  'Other'
] as const

// Executive titles (specific C-level roles)
const EXECUTIVE_TITLES = [
  'CFO',
  'CMO',
  'CTO',
  'COO',
  'CPO',
  'CHRO',
  'CIO',
  'CDO',
  'CSO',
  'CCO',
  'CEO',
  'Managing Director',
  'VP Finance',
  'VP Marketing',
  'VP Engineering',
  'VP Operations',
  'VP Product',
  'Finance Director',
  'Marketing Director',
  'Technology Director',
  'Operations Director',
  'Product Director',
  'HR Director',
  'Other'
] as const

// Major UK cities only
const MAJOR_UK_CITIES = [
  'London',
  'Manchester',
  'Birmingham',
  'Edinburgh',
  'Glasgow',
  'Leeds',
  'Bristol',
  'Liverpool',
  'Newcastle',
  'Cardiff',
  'Belfast',
  'Cambridge',
  'Oxford',
  'Remote',
  'UK-wide'
] as const

const EMPLOYMENT_TYPES = [
  'Fractional',
  'Part-time',
  'Interim',
  'Contract',
  'Consultant',
  'Full-time',
  'Other'
] as const

const SENIORITY_LEVELS = [
  'Executive',  // C-level, VPs
  'Director',
  'Manager',
  'Senior',
  'Mid',
  'Junior',
  'Intern'
] as const

const JobClassification = z.object({
  // Geographic
  country: z.string().describe('Country code or name (e.g., "UK", "USA", "Germany")'),
  city: z.enum(MAJOR_UK_CITIES).nullable().describe('Major UK city only (London, Manchester, Birmingham, etc.) or null if not a major city'),

  // Role classification
  executive_title: z.enum(EXECUTIVE_TITLES).describe('Specific executive title (CFO, CMO, CTO, VP Finance, Finance Director, etc.)'),
  role_category: z.enum(ROLE_CATEGORIES).describe('Broad function area (Finance, Marketing, Engineering, Operations, etc.)'),
  seniority_level: z.enum(SENIORITY_LEVELS).describe('Seniority level'),

  // Business classification
  industry: z.enum(INDUSTRIES).describe('Primary industry vertical'),

  // Employment classification
  employment_type: z.enum(EMPLOYMENT_TYPES).describe('Type of employment'),
  is_fractional: z.boolean().describe('True if role is fractional, part-time, interim, or contract'),

  // Confidence and reasoning
  confidence: z.number().min(0).max(1),
  reasoning: z.string().describe('Brief explanation of classification decisions')
})

type JobClassification = z.infer<typeof JobClassification>

interface JobToClassify {
  id: string
  title: string
  company_name: string
  location: string | null
  about_company: string | null
  description_snippet: string | null
}

async function classifyJob(job: JobToClassify): Promise<JobClassification> {
  const prompt = `Analyze this job posting and classify it into structured categories.

Job Title: ${job.title}
Company: ${job.company_name}
Location: ${job.location || 'Not specified'}
About Company: ${job.about_company || 'Not provided'}
Description: ${job.description_snippet || 'Not provided'}

Classify into these categories:

1. COUNTRY:
   - Extract from location or infer from context
   - Use standard names: "UK", "USA", "Germany", etc.

2. CITY (Major UK cities only):
   - ONLY use if city is one of: London, Manchester, Birmingham, Edinburgh, Glasgow, Leeds, Bristol, Liverpool, Newcastle, Cardiff, Belfast, Cambridge, Oxford
   - Use "Remote" if explicitly remote
   - Use "UK-wide" if covers multiple cities or whole UK
   - Use null if city mentioned but NOT in the major cities list

3. EXECUTIVE_TITLE (Specific C-level role - choose ONE):
   - CFO: Chief Financial Officer
   - Finance Director: Finance Director
   - VP Finance: VP Finance
   - CMO: Chief Marketing Officer
   - Marketing Director: Marketing Director
   - VP Marketing: VP Marketing
   - CTO: Chief Technology Officer, Chief Technical Officer
   - Technology Director: Technology Director, Tech Director
   - VP Engineering: VP Engineering
   - COO: Chief Operating Officer
   - Operations Director: Operations Director
   - VP Operations: VP Operations
   - CPO: Chief Product Officer
   - Product Director: Product Director
   - VP Product: VP Product
   - CHRO: Chief HR Officer, Chief People Officer
   - HR Director: HR Director, People Director
   - CIO: Chief Information Officer
   - CDO: Chief Data Officer
   - CSO: Chief Security Officer
   - CCO: Chief Commercial Officer
   - CEO: Chief Executive Officer
   - Managing Director: Managing Director, MD
   - Other: Any non-C-suite or unclear title

4. ROLE_CATEGORY (Broad function area - choose ONE):
   - Finance: All finance/accounting roles (CFO, Finance Director, etc.)
   - Marketing: All marketing roles (CMO, Marketing Director, etc.)
   - Engineering: All tech/engineering roles (CTO, VP Engineering, etc.)
   - Operations: All operations roles (COO, Operations Director, etc.)
   - Product: All product roles (CPO, Product Director, etc.)
   - HR: All people/HR roles (CHRO, HR Director, etc.)
   - Sales: All sales roles
   - Data: Data/analytics roles (CDO, etc.)
   - Executive: General executive roles (CEO, Managing Director)
   - Other: Everything else

5. SENIORITY_LEVEL:
   - Executive: Chief X Officer, C-suite, VPs
   - Director: Director-level roles
   - Manager: Manager-level roles
   - Senior: Senior individual contributor
   - Mid: Mid-level
   - Junior: Junior level
   - Intern: Internship

5. INDUSTRY:
   - Technology: Pure tech, software, IT services
   - FinTech: Financial technology, payment platforms
   - SaaS: Software-as-a-service
   - Healthcare: Medical, pharmaceutical, health tech
   - E-commerce: Online retail, marketplaces
   - Professional Services: Consulting, legal, accounting, agencies
   - Financial Services: Banks, investment, insurance
   - Manufacturing: Physical goods production
   - Retail: Physical retail, luxury goods
   - Media: Advertising, marketing agencies, content, entertainment
   - Real Estate: Property, real estate services
   - Education: Schools, training, EdTech
   - Energy: Oil, gas, renewables, utilities
   - Recruitment: Staffing, executive search
   - Other: Everything else

6. EMPLOYMENT_TYPE:
   - Fractional: Explicitly fractional role
   - Part-time: Part-time work
   - Interim: Interim or temporary
   - Contract: Contract-based
   - Consultant: Consulting role
   - Full-time: Full-time position
   - Other: Unclear

7. IS_FRACTIONAL:
   - true: If employment type is Fractional, Part-time, Interim, or Contract
   - false: If Full-time or Other

Important context:
- "Fractional CFO" → executive_title: CFO, role_category: Finance, employment_type: Fractional, is_fractional: true
- "Part-time CTO in London" → executive_title: CTO, role_category: Engineering, city: London, country: UK, employment_type: Part-time, is_fractional: true
- "Interim CMO" → executive_title: CMO, role_category: Marketing, employment_type: Interim, is_fractional: true
- "Finance Director at Oxfordshire company" → executive_title: Finance Director, role_category: Finance, city: null (Oxfordshire not a major city), country: UK
- If location mentions "UK" or UK cities → country: UK
- If no city OR city is not in major cities list → city: null
- If "Remote" or "UK-wide" → use those values for city

Respond with JSON matching this exact structure:
{
  "country": "UK",
  "city": "London",
  "executive_title": "CFO",
  "role_category": "Finance",
  "seniority_level": "Executive",
  "industry": "FinTech",
  "employment_type": "Fractional",
  "is_fractional": true,
  "confidence": 0.95,
  "reasoning": "Fractional CFO role at FinTech company in London"
}`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1024,
      temperature: 0.1,
      messages: [{
        role: 'user',
        content: prompt + '\n\nRespond with ONLY valid JSON, no other text.'
      }]
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`API error: ${response.status} - ${error}`)
  }

  const data = await response.json()
  const text = data.content?.[0]?.text

  if (!text) {
    throw new Error('No response from AI')
  }

  return JobClassification.parse(JSON.parse(text))
}

async function main() {
  if (!ANTHROPIC_API_KEY) {
    console.error('❌ ANTHROPIC_API_KEY required')
    console.error('Set in your .env.local file')
    process.exit(1)
  }

  console.log('🔍 Fetching jobs to classify...\n')

  const jobs = await sql`
    SELECT id, title, company_name, location, about_company, description_snippet
    FROM jobs
    WHERE is_active = true
    ORDER BY posted_date DESC
  ` as JobToClassify[]

  console.log(`📋 Found ${jobs.length} active jobs to classify\n`)

  let updated = 0
  let errors = 0
  const stats = {
    countries: {} as Record<string, number>,
    cities: {} as Record<string, number>,
    roles: {} as Record<string, number>,
    industries: {} as Record<string, number>,
    employment_types: {} as Record<string, number>,
    fractional_count: 0
  }

  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i]

    try {
      console.log(`[${i + 1}/${jobs.length}] ${job.title} at ${job.company_name}`)

      const classification = await classifyJob(job)

      // Update the job with all classifications
      await sql`
        UPDATE jobs
        SET
          country = ${classification.country},
          city = ${classification.city},
          executive_title = ${classification.executive_title},
          role_category = ${classification.role_category},
          seniority_level = ${classification.seniority_level},
          industry = ${classification.industry},
          employment_type = ${classification.employment_type},
          is_fractional = ${classification.is_fractional}
        WHERE id = ${job.id}
      `

      // Update stats
      stats.countries[classification.country] = (stats.countries[classification.country] || 0) + 1
      if (classification.city) {
        stats.cities[classification.city] = (stats.cities[classification.city] || 0) + 1
      }
      stats.roles[classification.role_category] = (stats.roles[classification.role_category] || 0) + 1
      stats.industries[classification.industry] = (stats.industries[classification.industry] || 0) + 1
      stats.employment_types[classification.employment_type] = (stats.employment_types[classification.employment_type] || 0) + 1
      if (classification.is_fractional) {
        stats.fractional_count++
      }

      updated++

      console.log(`  ✓ ${classification.country}${classification.city ? ` / ${classification.city}` : ''} | ${classification.executive_title} (${classification.role_category}) | ${classification.employment_type} | ${classification.industry}`)
      console.log(`    Fractional: ${classification.is_fractional ? 'Yes' : 'No'} | Confidence: ${(classification.confidence * 100).toFixed(0)}%`)
      console.log(`    ${classification.reasoning}\n`)

      // Rate limiting - Pydantic AI Gateway has generous limits but let's be respectful
      await new Promise(r => setTimeout(r, 200))

    } catch (error) {
      console.error(`  ✗ Error: ${error}\n`)
      errors++
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60))
  console.log('📊 CLASSIFICATION COMPLETE')
  console.log('='.repeat(60))
  console.log(`✅ Updated: ${updated} jobs`)
  console.log(`❌ Errors: ${errors} jobs`)
  console.log(`🔄 Fractional roles: ${stats.fractional_count} (${((stats.fractional_count / updated) * 100).toFixed(1)}%)`)

  console.log('\n🌍 By Country:')
  Object.entries(stats.countries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([country, count]) => {
      console.log(`  ${country}: ${count}`)
    })

  console.log('\n🏙️  By City (Top 10):')
  Object.entries(stats.cities)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([city, count]) => {
      console.log(`  ${city}: ${count}`)
    })

  console.log('\n👔 By Role:')
  Object.entries(stats.roles)
    .sort((a, b) => b[1] - a[1])
    .forEach(([role, count]) => {
      console.log(`  ${role}: ${count}`)
    })

  console.log('\n🏢 By Industry:')
  Object.entries(stats.industries)
    .sort((a, b) => b[1] - a[1])
    .forEach(([industry, count]) => {
      console.log(`  ${industry}: ${count}`)
    })

  console.log('\n💼 By Employment Type:')
  Object.entries(stats.employment_types)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`)
    })

  console.log('\n' + '='.repeat(60))
  console.log('✨ Classification complete! Your jobs are now fully categorized.')
  console.log('='.repeat(60))
}

main().catch(console.error)
