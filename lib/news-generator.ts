/**
 * AI-powered news article generator for fractional executive job news
 * Uses Pydantic AI Gateway with Gemini Flash for cost-effective generation
 */

import { z } from 'zod'
import { createDbQuery } from '@/lib/db'

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
const CLAUDE_MODEL = 'claude-3-5-haiku-20241022' // Fast and cost-effective

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
  content: z.string(), // Plain text content
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
Return ONLY valid JSON in this EXACT format (no markdown, no code blocks):
{
  "title": "your title here",
  "excerpt": "brief summary here",
  "content": "Write 3-4 SHORT paragraphs. Separate each paragraph with ||BREAK|| (example: First paragraph.||BREAK||Second paragraph.||BREAK||Third paragraph.)",
  "category": "Finance|Marketing|Engineering|Operations|HR|Sales|General",
  "suggested_slug": "url-slug-here"
}

IMPORTANT: Content MUST have multiple paragraphs separated by ||BREAK||
Keep total under 400 words. Write for UK audience. Use £ for currency.`

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
  if (!ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is required')
  }

  // Determine the category for internal links
  const articleCategory = targetCategory || mapRoleCategoryToArticleCategory(jobs[0]?.role_category || 'Other')
  const internalLinkInstructions = getInternalLinkingInstructions(articleCategory)

  // Temporarily skip internal links to avoid JSON parsing issues
  const systemPrompt = PROMPTS[contentType]

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

  // Use Anthropic Claude API with JSON mode
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 2000,
      temperature: 0.7,
      messages: [{
        role: 'user',
        content: fullPrompt
      }]
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`AI generation failed: ${response.status} - ${error}`)
  }

  const data = await response.json()
  const text = data.content?.[0]?.text

  if (!text) {
    throw new Error('No response from Claude')
  }

  console.log('[News Generator] Claude response (first 500 chars):', text.substring(0, 500))

  // Extract JSON from response (Claude sometimes wraps in markdown)
  let jsonStr = text.trim()

  // Remove markdown code blocks if present
  if (jsonStr.startsWith('```')) {
    jsonStr = jsonStr.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '')
  }

  // Find JSON object boundaries
  const startIdx = jsonStr.indexOf('{')
  const endIdx = jsonStr.lastIndexOf('}')
  if (startIdx !== -1 && endIdx !== -1) {
    jsonStr = jsonStr.substring(startIdx, endIdx + 1)
  }

  // Parse and validate with Zod
  try {
    const parsed = JSON.parse(jsonStr)
    // Convert ||BREAK|| to actual paragraph breaks
    if (parsed.content) {
      parsed.content = parsed.content.replace(/\|\|BREAK\|\|/g, '\n\n').trim()
    }
    return GeneratedArticle.parse(parsed)
  } catch (error) {
    console.error('[News Generator] Parse failed. Raw JSON:', jsonStr)
    throw new Error(`Failed to parse Claude response: ${error}`)
  }
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
 * Get relevant image from Unsplash based on article context
 */
async function getUnsplashImage(
  category: ArticleCategory,
  title?: string,
  jobs?: JobData[]
): Promise<string | null> {
  // Extract contextual keywords from title and jobs
  const contextKeywords: string[] = []

  // Extract key terms from title
  if (title) {
    const titleLower = title.toLowerCase()
    // Look for role-specific keywords
    if (titleLower.includes('ai') || titleLower.includes('artificial intelligence')) {
      contextKeywords.push('artificial intelligence', 'technology')
    }
    if (titleLower.includes('cfo') || titleLower.includes('finance')) {
      contextKeywords.push('finance', 'accounting')
    }
    if (titleLower.includes('cto') || titleLower.includes('technology')) {
      contextKeywords.push('technology', 'coding')
    }
    if (titleLower.includes('cmo') || titleLower.includes('marketing')) {
      contextKeywords.push('marketing', 'digital')
    }
    if (titleLower.includes('data') || titleLower.includes('analytics')) {
      contextKeywords.push('data', 'analytics')
    }
  }

  // Extract from job titles
  if (jobs && jobs.length > 0) {
    const firstJob = jobs[0]
    if (firstJob.title) {
      const jobTitle = firstJob.title.toLowerCase()
      if (jobTitle.includes('ai') || jobTitle.includes('machine learning')) {
        contextKeywords.push('artificial intelligence')
      }
      if (jobTitle.includes('design') || jobTitle.includes('product')) {
        contextKeywords.push('design', 'product')
      }
    }
  }

  // Build search query
  let searchQuery = contextKeywords.length > 0
    ? contextKeywords.slice(0, 2).join(' ') // Use top 2 keywords
    : getCategoryKeyword(category)

  // Use Unsplash API (free tier, no key needed)
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(searchQuery)}&orientation=landscape`,
      {
        headers: {
          'Authorization': 'Client-ID 5K_rHaCkHFVF7VJMHYKXgHLvvf7AqPZzviuhE6LlRlU'
        }
      }
    )

    if (response.ok) {
      const data = await response.json()
      return data.urls?.regular || null
    }
  } catch (error) {
    console.error('[Unsplash] API error:', error)
  }

  // Fallback to category-based keyword
  return null
}

function getCategoryKeyword(category: ArticleCategory): string {
  const keywords: Record<ArticleCategory, string> = {
    Finance: 'business finance',
    Marketing: 'digital marketing',
    Engineering: 'technology office',
    Operations: 'business operations',
    HR: 'team meeting',
    Sales: 'business presentation',
    General: 'professional office'
  }
  return keywords[category] || 'business professional'
}

/**
 * Get company logo from brand.dev data, fallback to contextual Unsplash
 */
export async function getCompanyLogo(
  domain: string,
  category: ArticleCategory = 'General',
  title?: string,
  jobs?: JobData[]
): Promise<string | null> {
  if (!domain) {
    // No domain, use contextual Unsplash
    return getUnsplashImage(category, title, jobs)
  }

  const sql = createDbQuery()

  try {
    const [brand] = await sql`
      SELECT logos FROM company_brands WHERE domain = ${domain}
    `

    if (brand?.logos) {
      // logos is JSONB, extract the primary logo URL
      const logos = typeof brand.logos === 'string' ? JSON.parse(brand.logos) : brand.logos
      const logoUrl = logos?.primary || logos?.icon || logos?.[0]
      if (logoUrl) return logoUrl
    }

    // No logo found, fallback to contextual Unsplash
    return getUnsplashImage(category, title, jobs)
  } catch {
    return getUnsplashImage(category, title, jobs)
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
