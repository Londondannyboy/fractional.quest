/**
 * =============================================================================
 * SEO POLICY: Fractional Quest
 * =============================================================================
 *
 * This file is the SINGLE SOURCE OF TRUTH for SEO configuration.
 * Update this file when adding new pages or changing SEO strategy.
 *
 * Related files that must stay in sync:
 * - app/sitemap.ts (uses EXCLUDED_DIRS, EXCLUDED_PAGES)
 * - app/robots.ts (uses DISALLOWED_PATHS)
 * - Layout files in excluded directories (noindex metadata)
 *
 * =============================================================================
 */

// =============================================================================
// RENDERING STRATEGY
// =============================================================================
//
// Our site uses a HYBRID approach optimized for SEO:
//
// 1. ISR (Incremental Static Regeneration) - DEFAULT for SEO pages
//    - Use: `export const revalidate = 3600`
//    - Pages are pre-rendered and cached
//    - Revalidated in background every hour
//    - Best for: Job listings, articles, guides, landing pages
//
// 2. SSR (Server-Side Rendering) - For dynamic content
//    - Use: `generateMetadata()` for dynamic meta tags
//    - Renders fresh on each request
//    - Best for: Individual job pages, user profiles (public)
//
// 3. CSR (Client-Side Rendering) - For interactive tools
//    - Use: `'use client'` directive
//    - NOT indexed by search engines
//    - Best for: Calculators, chat, dashboards, profile editors
//
// IMPORTANT: Having a client component (like RoleCalculator) inside an ISR page
// does NOT make the page CSR. The page is still server-rendered with the
// client component hydrating after initial load. This is called "partial hydration"
// and is the recommended pattern.
//
// =============================================================================

// =============================================================================
// DIRECTORY CLASSIFICATION
// =============================================================================

/**
 * Directories that should be INDEXED by search engines
 * These are SEO-valuable content pages
 */
export const SEO_DIRECTORIES = [
  // Role-specific job pages
  'fractional-cfo-jobs-uk',
  'fractional-cmo-jobs-uk',
  'fractional-cto-jobs-uk',
  'fractional-coo-jobs-uk',
  // ... all other role pages

  // Service pages
  'fractional-cfo-services',
  'fractional-cmo-services',
  // ... all other service pages

  // Content pages
  'what-is-fractional-work',
  'fractional-jobs-articles',
  // ... all other content pages
]

/**
 * Directories that should NOT be indexed
 * Keep in sync with app/sitemap.ts EXCLUDED_DIRS
 */
export const NON_SEO_DIRECTORIES = [
  // System directories
  'api',
  'handler',
  'handlers',
  '_components',
  '_lib',
  'components',
  'lib',

  // User/auth pages (require login, personalized content)
  'profile',
  'dashboard',
  'onboarding',
  'onboarding-demo',

  // Interactive tools (CSR, no static content for crawlers)
  'chat',
  'voice',
  'voice-clean',
  'frac',
  'calculators',
  'contact',
  'visualizations',

  // Test and prototype pages (development only)
  'prototype',
  'repo',
  'test-graph-pip',
  'test-graph-split',
  'test-hume',
  'test-onboarding',
  'dual-agent-test',
  'env-check',
]

/**
 * Individual pages to exclude from sitemap
 * (even if they're not in an excluded directory)
 * Use this for ROOT-LEVEL pages that aren't in a directory
 */
export const EXCLUDED_PAGES = [
  // Redirect pages
  'articles',        // Redirects to fractional-jobs-articles
  'jobs',            // Redirects to fractional-jobs-uk
  'fractional-jobs', // Redirects to fractional-jobs-uk

  // Root-level non-SEO pages
  'fractionaljobsuk', // Old URL, redirects
]

/**
 * Article slugs that should NOT be added from DB
 * (because they already exist as static pages)
 * This prevents duplicates when articles have same slug as static pages
 */
export const STATIC_PAGE_SLUGS = [
  // These exist as both static pages AND articles in DB
  'remote-fractional-jobs',
  'fractional-cfo-jobs-uk',
  'fractional-cmo-jobs-uk',
  'fractional-cto-jobs-uk',
  'fractional-coo-jobs-uk',
  'fractional-hr-jobs-uk',
  'fractional-jobs-uk',
  'fractional-jobs-london',
  'fractional-jobs-manchester',
  'fractional-jobs-birmingham',
]

// =============================================================================
// CHECKLIST: Adding a New Page
// =============================================================================
//
// When creating a new page, follow this checklist:
//
// 1. Determine page type:
//    □ SEO content page → Use ISR with `revalidate = 3600`
//    □ Interactive tool → Use CSR with `'use client'`
//    □ User-specific page → Use CSR + add to NON_SEO_DIRECTORIES
//
// 2. For SEO pages:
//    □ Add `export const metadata: Metadata = {...}` with title, description
//    □ Add canonical URL in alternates
//    □ Add OpenGraph tags for social sharing
//    □ Include structured data (JSON-LD) where appropriate
//    □ Ensure primary content is server-rendered (not in useEffect)
//
// 3. For non-SEO pages:
//    □ Add directory to NON_SEO_DIRECTORIES above
//    □ Add directory to EXCLUDED_DIRS in app/sitemap.ts
//    □ Add path to DISALLOWED_PATHS in app/robots.ts
//    □ Create layout.tsx with `robots: { index: false, follow: false }`
//
// 4. For pages with interactive components:
//    □ Keep page as server component (no 'use client' at top)
//    □ Import client components (calculators, forms) as needed
//    □ Server content renders for SEO, client components hydrate
//
// =============================================================================

// =============================================================================
// MONITORING & MAINTENANCE
// =============================================================================
//
// Regular checks (monthly):
// 1. Google Search Console → Check indexed pages count
// 2. Run: `curl https://fractional.quest/sitemap.xml | grep -c '<url>'`
// 3. Verify no test/prototype pages are being indexed
// 4. Check for crawl errors in Search Console
//
// After deployments:
// 1. Request sitemap re-crawl in Search Console
// 2. Test key pages with: https://search.google.com/test/rich-results
// 3. Verify structured data is valid
//
// =============================================================================

/**
 * Helper to check if a path should be indexed
 */
export function shouldIndex(path: string): boolean {
  const normalizedPath = path.replace(/^\//, '').split('/')[0]
  return !NON_SEO_DIRECTORIES.includes(normalizedPath)
}

/**
 * Default metadata for non-SEO pages
 */
export const noIndexMetadata = {
  robots: {
    index: false,
    follow: false,
  },
}
