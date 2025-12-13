/**
 * One-time script to classify existing articles using Pydantic AI Gateway
 * Run: DATABASE_URL=... PYDANTIC_AI_GATEWAY_API_KEY=... npx tsx scripts/classify-articles.ts
 */

import { neon } from '@neondatabase/serverless'
import { z } from 'zod'

const sql = neon(process.env.DATABASE_URL!)
const GATEWAY_URL = process.env.GATEWAY_URL || 'https://gateway.pydantic.dev/proxy/chat/'
const GATEWAY_API_KEY = process.env.PYDANTIC_AI_GATEWAY_API_KEY

const ArticleClassification = z.object({
  category: z.enum(['Finance', 'Marketing', 'Engineering', 'Operations', 'HR', 'Sales', 'General']),
  confidence: z.number(),
  reasoning: z.string()
})

type ArticleClassification = z.infer<typeof ArticleClassification>

async function classifyArticle(title: string, excerpt: string): Promise<ArticleClassification> {
  if (!GATEWAY_API_KEY) {
    throw new Error('PYDANTIC_AI_GATEWAY_API_KEY is required')
  }

  const response = await fetch(GATEWAY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GATEWAY_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'google-gla:gemini-1.5-flash',
      messages: [{
        role: 'system',
        content: `You are an article classifier for a fractional executive job board. Classify articles into exactly one category based on the C-suite role they relate to.

Categories:
- Finance: CFO, accounting, financial planning, fundraising, treasury
- Marketing: CMO, brand, demand generation, growth marketing, content
- Engineering: CTO, technology, software, infrastructure, architecture
- Operations: COO, processes, supply chain, logistics, business operations
- HR: CPO, CHRO, people operations, talent, hiring, culture
- Sales: CRO, revenue, business development, partnerships
- General: Broad fractional executive topics not specific to one role

Respond with valid JSON only:
{"category": "Finance|Marketing|Engineering|Operations|HR|Sales|General", "confidence": 0.0-1.0, "reasoning": "brief explanation"}`
      }, {
        role: 'user',
        content: `Classify this article:\n\nTitle: ${title}\nExcerpt: ${excerpt || 'No excerpt available'}`
      }],
      temperature: 0.1,
      response_format: { type: 'json_object' }
    })
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`API error: ${response.status} - ${error}`)
  }

  const data = await response.json()
  const text = data.choices?.[0]?.message?.content

  if (!text) {
    throw new Error('No response from AI')
  }

  return ArticleClassification.parse(JSON.parse(text))
}

async function main() {
  console.log('🔍 Fetching uncategorized articles...')

  // Get all uncategorized articles
  const articles = await sql`
    SELECT id, title, excerpt, app
    FROM articles
    WHERE category IS NULL
      AND status = 'published'
    ORDER BY published_at DESC
  `

  console.log(`📝 Found ${articles.length} articles to classify\n`)

  let classified = 0
  let errors = 0

  for (const article of articles) {
    try {
      console.log(`Processing: ${article.title.substring(0, 50)}...`)

      const result = await classifyArticle(article.title, article.excerpt || '')

      // Update article with category
      await sql`
        UPDATE articles
        SET category = ${result.category},
            generation_metadata = jsonb_build_object(
              'classification', jsonb_build_object(
                'confidence', ${result.confidence},
                'reasoning', ${result.reasoning},
                'classified_at', ${new Date().toISOString()}
              )
            )
        WHERE id = ${article.id}
      `

      console.log(`  ✅ ${result.category} (${(result.confidence * 100).toFixed(0)}% - ${result.reasoning})`)
      classified++

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200))

    } catch (error) {
      console.error(`  ❌ Error: ${error}`)
      errors++
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`  Classified: ${classified}`)
  console.log(`  Errors: ${errors}`)
  console.log(`  Total: ${articles.length}`)
}

main().catch(console.error)
