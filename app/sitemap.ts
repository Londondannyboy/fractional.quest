import { MetadataRoute } from 'next'
import { createDbQuery } from '@/lib/db'
import { NON_SEO_DIRECTORIES, EXCLUDED_PAGES, STATIC_PAGE_SLUGS } from '@/lib/seo-policy'
import fs from 'fs'
import path from 'path'

export const revalidate = 3600 // Revalidate every hour

// =============================================================================
// SEO POLICY: See lib/seo-policy.ts for full documentation
// =============================================================================

// Use centralized policy for excluded directories
const EXCLUDED_DIRS = NON_SEO_DIRECTORIES

// Convert static page slugs to a Set for fast lookup
const STATIC_SLUGS_SET = new Set(STATIC_PAGE_SLUGS)

// Dynamic route patterns to exclude (contain brackets)
const isDynamicRoute = (dir: string) => dir.includes('[') && dir.includes(']')

// Determine priority based on URL patterns
function getPriority(slug: string): number {
  // Homepage
  if (slug === '') return 1

  // High priority service pages
  if (slug.endsWith('-services') || slug === 'fractional-services') return 0.95

  // Primary content hubs
  if (['fractional-hr', 'fractional-cfo', 'fractional-cto', 'fractional-cmo', 'fractional-coo'].includes(slug)) return 0.95

  // Jobs pages (high priority)
  if (slug.includes('-jobs-uk') || slug.includes('-jobs-remote')) return 0.9

  // Definition/meaning pages
  if (slug.startsWith('what-is-') || slug.includes('-meaning')) return 0.9

  // For startups pages
  if (slug.includes('-for-startups')) return 0.9

  // Part-time pages
  if (slug.startsWith('part-time-')) return 0.88

  // VS comparison pages
  if (slug.includes('-vs-')) return 0.88

  // Cost and salary pages
  if (slug.includes('-cost') || slug.includes('-salary') || slug.includes('-hourly-rate')) return 0.85

  // Interim pages
  if (slug.startsWith('interim-')) return 0.85

  // How to become pages
  if (slug.startsWith('how-to-become-')) return 0.85

  // Location pages
  if (slug.startsWith('fractional-jobs-')) return 0.8

  // Consultant pages
  if (slug.includes('-consultant')) return 0.8

  // Short redirects
  if (['cfo', 'cto', 'cmo', 'coo', 'hr', 'guide', 'contact'].includes(slug)) return 0.7

  // Utility pages
  if (['privacy', 'terms', 'voice', 'chat'].includes(slug)) return 0.3

  // Default
  return 0.8
}

// Determine change frequency based on URL patterns
function getChangeFrequency(slug: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' {
  // Jobs pages update frequently
  if (slug.includes('-jobs')) return 'daily'

  // Homepage and main listings
  if (slug === '' || slug === 'fractional-jobs' || slug === 'fractionaljobsuk') return 'daily'

  // Location pages
  if (slug.startsWith('fractional-jobs-') || slug === 'london' || slug === 'remote') return 'daily'

  // Articles hub
  if (slug === 'fractional-jobs-articles') return 'daily'

  // Salary and cost pages (update less frequently)
  if (slug.includes('-salary') || slug.includes('-cost') || slug.includes('-hourly-rate')) return 'monthly'

  // Legal pages
  if (['privacy', 'terms'].includes(slug)) return 'yearly'

  // Most content pages
  return 'weekly'
}

// Recursively find all page.tsx files in the app directory
function findAllPages(dir: string, baseDir: string): string[] {
  const pages: string[] = []

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        // Skip excluded directories and dynamic routes
        if (EXCLUDED_DIRS.includes(entry.name) || isDynamicRoute(entry.name)) {
          continue
        }

        // Recurse into subdirectories
        pages.push(...findAllPages(fullPath, baseDir))
      } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
        // Found a page - extract the route
        const relativePath = path.relative(baseDir, dir)

        // Skip individually excluded pages
        if (EXCLUDED_PAGES.includes(relativePath)) {
          continue
        }

        pages.push(relativePath)
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }

  return pages
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://fractional.quest'
  const appDir = path.join(process.cwd(), 'app')

  // Auto-discover all static pages
  const discoveredPages = findAllPages(appDir, appDir)

  // Track URLs to prevent duplicates
  const seenUrls = new Set<string>()

  const staticPages: MetadataRoute.Sitemap = discoveredPages.map(slug => {
    const url = slug === '' ? baseUrl : `${baseUrl}/${slug}`
    seenUrls.add(url)
    return {
      url,
      lastModified: new Date(),
      changeFrequency: getChangeFrequency(slug),
      priority: getPriority(slug),
    }
  })

  // Sort by priority (highest first)
  staticPages.sort((a, b) => (b.priority || 0) - (a.priority || 0))

  try {
    const sql = createDbQuery()

    // Fetch all active jobs with real timestamps
    const jobs = await sql`
      SELECT slug, updated_date, posted_date FROM jobs
      WHERE is_active = true
      ORDER BY COALESCE(updated_date, posted_date) DESC NULLS LAST
      LIMIT 500
    `

    const jobUrls: MetadataRoute.Sitemap = jobs
      .filter((job: any) => {
        const url = `${baseUrl}/fractional-job/${job.slug}`
        if (seenUrls.has(url)) return false
        seenUrls.add(url)
        return true
      })
      .map((job: any) => ({
        url: `${baseUrl}/fractional-job/${job.slug}`,
        lastModified: new Date(job.updated_date || job.posted_date || Date.now()),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))

    // Fetch all published articles with real timestamps
    const articles = await sql`
      SELECT slug, published_at, updated_at FROM articles
      WHERE status = 'published' AND app = 'fractional'
      ORDER BY COALESCE(updated_at, published_at) DESC NULLS LAST
      LIMIT 500
    `

    // Only add articles that don't already exist as static pages
    // Double-check against both seenUrls AND explicit STATIC_SLUGS_SET
    const articleUrls: MetadataRoute.Sitemap = articles
      .filter((article: any) => {
        // Skip if slug matches a known static page
        if (STATIC_SLUGS_SET.has(article.slug)) {
          return false
        }
        const url = `${baseUrl}/${article.slug}`
        if (seenUrls.has(url)) return false
        seenUrls.add(url)
        return true
      })
      .map((article: any) => ({
        url: `${baseUrl}/${article.slug}`,
        lastModified: new Date(article.updated_at || article.published_at || Date.now()),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))

    // Log sitemap stats for monitoring
    console.log(`[Sitemap] Generated: ${staticPages.length} static, ${jobUrls.length} jobs, ${articleUrls.length} articles`)

    return [...staticPages, ...jobUrls, ...articleUrls]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static pages if database query fails
    return staticPages
  }
}
