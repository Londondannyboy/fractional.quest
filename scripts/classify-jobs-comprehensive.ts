/**
 * Comprehensive Job Classification using Pydantic AI
 * Classifies: Country, City, Role Category, Industry, Employment Type, Seniority
 *
 * Run: npx tsx scripts/classify-jobs-comprehensive.ts
 */

import { neon } from '@neondatabase/serverless'
import { z } from 'zod'

const sql = neon(process.env.DATABASE_URL!)
const GATEWAY_URL = process.env.GATEWAY_URL || 'https://gateway.pydantic.dev/proxy/chat/'
const GATEWAY_API_KEY = process.env.PYDANTIC_AI_GATEWAY_API_KEY

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

const ROLE_CATEGORIES = [
  'CFO',
  'CMO',
  'CTO',
  'COO',
  'CPO',  // Chief Product Officer
  'CHRO', // Chief Human Resources Officer
  'CIO',  // Chief Information Officer
  'CDO',  // Chief Data Officer
  'CSO',  // Chief Security Officer
  'CCO',  // Chief Commercial Officer
  'Other'
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
  'C-Level',
  'VP',
  'Director',
  'Senior Manager',
  'Manager',
  'Other'
] as const

const JobClassification = z.object({
  // Geographic
  country: z.string().describe('Country code or name (e.g., "UK", "USA", "Germany")'),
  city: z.string().nullable().describe('City name if mentioned (e.g., "London", "Manchester", "Birmingham") or null'),

  // Role classification
  role_category: z.enum(ROLE_CATEGORIES).describe('Primary C-level role type'),
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

2. CITY:
   - Extract specific city if mentioned: "London", "Manchester", "Birmingham", "Edinburgh", "Remote", etc.
   - Return null if no specific city mentioned

3. ROLE_CATEGORY (choose ONE):
   - CFO: Chief Financial Officer, Finance Director
   - CMO: Chief Marketing Officer, Marketing Director
   - CTO: Chief Technology Officer, Technology Director, VP Engineering
   - COO: Chief Operating Officer, Operations Director
   - CPO: Chief Product Officer, Product Director
   - CHRO: Chief HR Officer, People Director, HR Director
   - CIO: Chief Information Officer
   - CDO: Chief Data Officer
   - CSO: Chief Security Officer
   - CCO: Chief Commercial Officer, Chief Customer Officer
   - Other: Any other role

4. SENIORITY_LEVEL:
   - C-Level: Chief X Officer, C-suite
   - VP: Vice President, VP of X
   - Director: Director-level roles
   - Senior Manager: Senior management
   - Manager: Management roles
   - Other: Non-management or unclear

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
- "Fractional CFO" → role_category: CFO, employment_type: Fractional, is_fractional: true
- "Part-time CTO in London" → city: London, country: UK, employment_type: Part-time, is_fractional: true
- "Interim CMO" → employment_type: Interim, is_fractional: true
- If location mentions "UK" or UK cities → country: UK
- If no city but "Remote" or "UK-wide" → city: null, country: UK

Respond with JSON matching this exact structure:
{
  "country": "UK",
  "city": "London",
  "role_category": "CFO",
  "seniority_level": "C-Level",
  "industry": "FinTech",
  "employment_type": "Fractional",
  "is_fractional": true,
  "confidence": 0.95,
  "reasoning": "Fractional CFO role at FinTech company in London"
}`

  const response = await fetch(GATEWAY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GATEWAY_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'google-gla:gemini-1.5-flash',
      messages: [{
        role: 'user',
        content: prompt
      }],
      temperature: 0.1,
      response_format: { type: 'json_object' }
    })
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  const text = data.choices?.[0]?.message?.content

  if (!text) {
    throw new Error('No response from AI')
  }

  return JobClassification.parse(JSON.parse(text))
}

async function main() {
  if (!GATEWAY_API_KEY) {
    console.error('❌ PYDANTIC_AI_GATEWAY_API_KEY required')
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

      console.log(`  ✓ ${classification.country}${classification.city ? ` / ${classification.city}` : ''} | ${classification.role_category} | ${classification.employment_type} | ${classification.industry}`)
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
