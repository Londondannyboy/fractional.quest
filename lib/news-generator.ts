/**
 * AI-powered news article generator for fractional executive job news
 * Uses Pydantic AI Gateway with Gemini Flash for cost-effective generation
 */

import { z } from 'zod'
import { createDbQuery } from '@/lib/db'

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY
const GEMINI_MODEL = 'gemini-1.5-flash'

// Article categories - matches job role_category
export type ArticleCategory = 'Finance' | 'Marketing' | 'Engineering' | 'Operations' | 'HR' | 'Sales' | 'General'

// Content types for rotation
export type ContentType = 'job_roundup' | 'company_spotlight' | 'market_trend'

// Internal links for SEO - spread link juice to pillar pages
const INTERNAL_LINKS: Record<ArticleCategory, { services: string; jobs: string; salary?: string }> = {
  Finance: { services: '/fractional-cfo-services', jobs: '/fractional-cfo-jobs-uk', salary: '/fractional-cfo-salary' },
  Marketing: { services: '/fractional-cmo-services', jobs: '/fractional-cmo-jobs-uk', salary: '/fractional-cmo-salary' },
  Engineering: { services: '/fractional-cto-services', jobs: '/fractional-cto-jobs-uk' },
  Operations: { services: '/fractional-coo-services', jobs: '/fractional-coo-jobs-uk' },
  HR: { services: '/fractional-chro-services', jobs: '/fractional-jobs?role=HR' },
  Sales: { services: '/fractional-sales-director-services', jobs: '/fractional-jobs?role=Sales' },
  General: { services: '/fractional-executive-services', jobs: '/fractional-jobs' }
}

// Zod schema for generated article validation
export const GeneratedArticle = z.object({
  title: z.string().max(100),
  excerpt: z.string().max(300),
  content: z.string(), // Markdown content
  category: z.enum(['Finance', 'Marketing', 'Engineering', 'Operations', 'HR', 'Sales', 'General']),
  suggested_slug: z.string()
})

export type GeneratedArticle = z.infer<typeof GeneratedArticle>

// Job data structure for article generation
export interface JobData {
  id: string
  title: string
  company_name: string
  company_domain?: string
  location?: string
  role_category: string
  salary_min?: number
  salary_max?: number
  is_remote?: boolean
  posted_date?: string
  description_snippet?: string
}

// Get internal linking instructions for a category
function getInternalLinkingInstructions(category: ArticleCategory): string {
  const links = INTERNAL_LINKS[category]
  const linkList = [
    `[fractional ${category.toLowerCase()} services](${links.services})`,
    `[${category.toLowerCase()} jobs](${links.jobs})`,
    links.salary ? `[salary guide](${links.salary})` : null
  ].filter(Boolean).join(', ')

  return `
IMPORTANT - Internal Linking for SEO:
Include 2-3 natural internal links in the article body using markdown format. Use these target URLs:
${linkList}

Example: "Companies seeking [fractional CFO services](/fractional-cfo-services) are increasingly..." or "Browse current [CFO jobs](/fractional-cfo-jobs-uk) to see..."
Make links contextual and natural - don't force them.`
}

// Base prompt for all content types
const BASE_INSTRUCTIONS = `
Format: JSON with fields: title, excerpt (max 200 chars), content (markdown with internal links), category, suggested_slug
Write for UK audience. Use £ for currency. Be factual and professional.`

// Prompts for each content type
const PROMPTS: Record<ContentType, string> = {
  job_roundup: `You are a professional business journalist writing for a UK fractional executive marketplace.

Write a roundup article about the latest fractional executive jobs provided. The article should:
- Have an engaging, SEO-friendly title (include "Fractional" and the role category, e.g. "Fractional CFO")
- Open with a brief market observation
- Highlight 3-5 key roles with company names and locations
- Include salary insights where available
- End with a call-to-action linking to the jobs page

${BASE_INSTRUCTIONS}
Target length: 300-500 words`,

  company_spotlight: `You are a professional business journalist writing for a UK fractional executive marketplace.

Write a spotlight article about a company hiring fractional executives. The article should:
- Have a compelling title featuring the company name
- Briefly introduce the company (use provided info)
- Explain why they're hiring fractional talent
- Detail the specific role they're offering
- Include location and compensation if available
- Link to relevant services page for companies considering similar hires

${BASE_INSTRUCTIONS}
Target length: 250-400 words`,

  market_trend: `You are a professional business journalist writing for a UK fractional executive marketplace.

Write a market trend article based on the job data provided. The article should:
- Have an insight-driven title about the fractional market
- Identify a trend from the data (e.g., remote work, sector growth, salary trends)
- Support with specific examples from the jobs
- Provide context for UK businesses and executives
- Include actionable insights
- Link to both services (for companies) and jobs (for executives)

${BASE_INSTRUCTIONS}
Target length: 400-600 words`
}

/**
 * Generate an article using AI
 */
export async function generateArticle(
  contentType: ContentType,
  jobs: JobData[],
  targetCategory?: ArticleCategory
): Promise<GeneratedArticle> {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is required')
  }

  // Determine the category for internal links
  const articleCategory = targetCategory || mapRoleCategoryToArticleCategory(jobs[0]?.role_category || 'Other')
  const internalLinkInstructions = getInternalLinkingInstructions(articleCategory)

  const systemPrompt = PROMPTS[contentType] + '\n' + internalLinkInstructions

  // Format job data for the prompt
  const jobsFormatted = jobs.map(job => ({
    title: job.title,
    company: job.company_name,
    location: job.location || 'UK',
    category: job.role_category,
    salary: job.salary_min && job.salary_max
      ? `£${job.salary_min.toLocaleString()}-£${job.salary_max.toLocaleString()}`
      : 'Competitive',
    remote: job.is_remote ? 'Remote available' : 'On-site/Hybrid',
    posted: job.posted_date || 'Recent',
    snippet: job.description_snippet?.substring(0, 200)
  }))

  const userPrompt = targetCategory
    ? `Generate a ${contentType.replace('_', ' ')} article for the ${targetCategory} category.\n\nJobs data:\n${JSON.stringify(jobsFormatted, null, 2)}`
    : `Generate a ${contentType.replace('_', ' ')} article.\n\nJobs data:\n${JSON.stringify(jobsFormatted, null, 2)}`

  const fullPrompt = `${systemPrompt}\n\n${userPrompt}`

  // Use Google Gemini API
  const url = `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: fullPrompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2000,
        responseMimeType: 'application/json'
      }
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`AI generation failed: ${response.status} - ${error}`)
  }

  const data = await response.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text

  if (!text) {
    throw new Error('No response from AI')
  }

  // Extract JSON from response (handle markdown code blocks)
  let jsonStr = text.trim()
  const jsonMatch = jsonStr.match(/\{[\s\S]*\}/)
  if (jsonMatch) {
    jsonStr = jsonMatch[0]
  }

  // Parse and validate with Zod
  const parsed = JSON.parse(jsonStr)
  return GeneratedArticle.parse(parsed)
}

/**
 * Generate a URL-safe slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80)
}

/**
 * Get company logo from brand.dev data
 */
export async function getCompanyLogo(domain: string): Promise<string | null> {
  if (!domain) return null

  const sql = createDbQuery()

  try {
    const [brand] = await sql`
      SELECT logos FROM company_brands WHERE domain = ${domain}
    `

    if (brand?.logos) {
      // logos is JSONB, extract the primary logo URL
      const logos = typeof brand.logos === 'string' ? JSON.parse(brand.logos) : brand.logos
      return logos?.primary || logos?.icon || logos?.[0] || null
    }

    return null
  } catch {
    return null
  }
}

/**
 * Map job role_category to article category
 */
export function mapRoleCategoryToArticleCategory(roleCategory: string): ArticleCategory {
  const mapping: Record<string, ArticleCategory> = {
    'Finance': 'Finance',
    'Marketing': 'Marketing',
    'Engineering': 'Engineering',
    'Operations': 'Operations',
    'HR': 'HR',
    'Sales': 'Sales',
    'Other': 'General'
  }

  return mapping[roleCategory] || 'General'
}
