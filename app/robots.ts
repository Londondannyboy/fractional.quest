import { MetadataRoute } from 'next'
import { NON_SEO_DIRECTORIES } from '@/lib/seo-policy'

// =============================================================================
// SEO POLICY: See lib/seo-policy.ts for full documentation
// =============================================================================

// Convert directory names to URL paths for robots.txt
const DISALLOWED_PATHS = [
  '/admin/', // Always block admin
  ...NON_SEO_DIRECTORIES.map(dir => `/${dir}/`),
]

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://fractional.quest'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      // Explicitly allow AI crawlers for better indexing
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
