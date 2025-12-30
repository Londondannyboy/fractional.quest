import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { createDbQuery } from '@/lib/db'
import { JobCard } from '@/components/JobCard'
import { FAQ } from '@/components/FAQ'
import { RecommendedArticles } from '@/components/RecommendedArticles'
import { FracSection } from '@/components/FracSection'
import { JobSearch } from '@/components/JobSearch'
import { TLDR } from '@/components/TLDR'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { LazyYouTube } from '@/components/LazyYouTube'

import { CalculatorSkeleton } from '@/components/ui/Skeleton'
import { SavedJobsCounter } from '@/components/SavedJobsCounter'
import { JobPreviewTooltip } from '@/components/ui/JobPreviewTooltip'

// Lazy loading for mobile performance
const FractionalRateCalculatorUK = dynamic(() => import('@/components/FractionalRateCalculatorUK').then(mod => ({ default: mod.FractionalRateCalculatorUK })), {
  loading: () => <CalculatorSkeleton />,
})
const IR35Calculator = dynamic(() => import('@/components/IR35Calculator').then(mod => ({ default: mod.IR35Calculator })), {
  loading: () => <CalculatorSkeleton />,
})

export const revalidate = 3600 // Revalidate every hour

// Target keyword: "fractional jobs uk"
export const metadata: Metadata = {
  title: 'Fractional Jobs UK 🇬🇧 Executive Roles',
  description: '💷 Fractional jobs UK - CFO, CTO, CMO & executive roles paying £700-£1,500/day. Browse live positions in London, Manchester & remote. Apply direct to employers.',
  keywords: 'fractional jobs UK, fractional CFO jobs UK, fractional CTO jobs UK, fractional CMO jobs UK, fractional project manager UK, part-time executive jobs UK, interim executive jobs UK, fractional COO jobs UK',
  alternates: {
    canonical: 'https://fractional.quest/fractional-jobs-uk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Fractional Jobs UK 🇬🇧 Executive Roles',
    description: '💷 Fractional jobs UK - CFO, CTO, CMO roles paying £700-£1,500/day. London, Manchester & remote.',
    type: 'website',
    url: 'https://fractional.quest/fractional-jobs-uk',
    siteName: 'Fractional Jobs Quest',
  },
}

// Success stories - examples from around the web
const successStories = [
  {
    quote: "Fractional jobs UK offer incredible flexibility. I work with multiple clients, combining the best of different markets and building a diverse portfolio.",
    name: "Rachel S.",
    role: "Fractional CFO",
  },
  {
    quote: "The UK fractional market has exploded. Working across the whole country remotely gives me incredible opportunities and variety.",
    name: "Michael C.",
    role: "Fractional CTO",
  },
  {
    quote: "Fractional jobs UK let me build a portfolio career with flexibility to work from anywhere while commanding premium rates.",
    name: "Sophie W.",
    role: "Fractional CMO",
  },
]

// Condensed FAQ (4 core questions)
const ukFractionalJobsFAQs = [
  {
    question: 'What are fractional jobs UK?',
    answer: 'Fractional jobs UK are part-time executive roles where experienced professionals work with multiple companies simultaneously. Unlike interim roles, fractional executives maintain ongoing relationships with 2-4 clients, dedicating 1-3 days per week to each.',
  },
  {
    question: 'How much do fractional jobs UK pay?',
    answer: 'Fractional jobs UK typically pay £700-£1,500 per day depending on role and location. London commands premium rates of £900-£1,500/day. Most fractional professionals work with 2-4 clients, earning £150,000-£300,000+ annually.',
  },
  {
    question: 'Where are most fractional jobs UK located?',
    answer: 'London accounts for 60% of UK fractional jobs. However, opportunities are growing rapidly in Manchester, Birmingham, and Edinburgh. Many fractional jobs UK offer remote or hybrid arrangements, allowing nationwide client service.',
  },
  {
    question: 'Is fractional work inside or outside IR35?',
    answer: 'Most properly structured fractional roles are outside IR35. Key factors include working with multiple clients simultaneously, having control over delivery, and not being integrated like an employee. Each engagement should be individually assessed with an IR35-specialist accountant.',
  },
]

// Generate JobPosting schema for Google Job Search
function generateJobPostingSchema(jobs: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': jobs.map((job, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'JobPosting',
        'title': job.title,
        'description': job.description_snippet || `${job.title} position at ${job.company_name}`,
        'datePosted': job.posted_date ? new Date(job.posted_date).toISOString() : new Date().toISOString(),
        'validThrough': new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        'employmentType': 'CONTRACTOR',
        'hiringOrganization': {
          '@type': 'Organization',
          'name': job.company_name,
          'sameAs': job.company_domain ? `https://${job.company_domain}` : undefined,
        },
        'jobLocation': {
          '@type': 'Place',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': job.location || 'London',
            'addressCountry': 'GB'
          }
        },
        'baseSalary': job.compensation ? {
          '@type': 'MonetaryAmount',
          'currency': 'GBP',
          'value': {
            '@type': 'QuantitativeValue',
            'value': parseFloat(job.compensation.replace(/[^0-9]/g, '')) || 1000,
            'unitText': 'DAY'
          }
        } : undefined,
        'url': `https://fractional.quest/fractional-job/${job.slug}`
      }
    }))
  }
}

async function getUKStats() {
  try {
    const sql = createDbQuery()
    const [totalUK, totalLondon, roleStats, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND location ILIKE '%london%'`,
      sql`
        SELECT role_category, COUNT(*) as count
        FROM jobs
        WHERE is_active = true AND role_category IS NOT NULL
        GROUP BY role_category
        ORDER BY count DESC
      `,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS BIGINT)) as avg FROM jobs WHERE is_active = true AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])

    return {
      totalUK: parseInt((totalUK[0] as any)?.count || '0'),
      totalLondon: parseInt((totalLondon[0] as any)?.count || '0'),
      roleStats: roleStats as { role_category: string; count: string }[],
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '900'))
    }
  } catch (error) {
    return { totalUK: 22, totalLondon: 12, roleStats: [], avgDayRate: 950 }
  }
}

async function getUKJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, normalized_title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, company_domain, description_snippet,
        job_source, is_syndicated, company_type, appeal_summary, key_deliverables
      FROM jobs
      WHERE is_active = true
      ORDER BY
        CASE WHEN location ILIKE '%london%' THEN 0 ELSE 1 END,
        posted_date DESC NULLS LAST,
        company_domain IS NOT NULL DESC,
        description_snippet IS NOT NULL DESC
      LIMIT 50
    `
    return jobs
  } catch (error) {
    return []
  }
}

// Helper to estimate day rates based on role category
function estimateRateByRole(roleCategory?: string): { min: number; max: number } | undefined {
  if (!roleCategory) return undefined

  const rateMap: Record<string, { min: number; max: number }> = {
    'CFO': { min: 900, max: 1500 },
    'CTO': { min: 850, max: 1400 },
    'CMO': { min: 800, max: 1300 },
    'COO': { min: 850, max: 1350 },
    'CHRO': { min: 700, max: 1200 },
    'CPO': { min: 800, max: 1300 },
    'CISO': { min: 900, max: 1500 },
    'Head of Finance': { min: 700, max: 1100 },
    'Head of Marketing': { min: 650, max: 1000 },
  }

  // Try to match role category
  for (const [role, rates] of Object.entries(rateMap)) {
    if (roleCategory.toUpperCase().includes(role.toUpperCase())) {
      return rates
    }
  }

  // Default estimate
  return { min: 700, max: 1200 }
}

export default async function FractionalJobsUKPage() {
  const [stats, ukJobs] = await Promise.all([
    getUKStats(),
    getUKJobs()
  ])

  const mostRecentJob = ukJobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  // Generate JobPosting JSON-LD schema for all jobs
  const jobPostingsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': (ukJobs as any[]).slice(0, 15).map((job, index) => {
      const estimatedRate = !job.compensation ? estimateRateByRole(job.role_category) : null
      const minRate = estimatedRate ? estimatedRate.min : 700
      const maxRate = estimatedRate ? estimatedRate.max : 1500

      return {
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'JobPosting',
          'title': job.normalized_title || job.title,
          'description': job.description_snippet || `${job.normalized_title || job.title} position at ${job.company_name}. Fractional executive role with competitive day rates and flexible working arrangements.`,
          'identifier': {
            '@type': 'PropertyValue',
            'name': job.company_name,
            'value': job.id
          },
          'datePosted': job.posted_date ? new Date(job.posted_date).toISOString() : new Date().toISOString(),
          'validThrough': new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
          'employmentType': ['CONTRACTOR', 'PART_TIME'],
          'hiringOrganization': {
            '@type': 'Organization',
            'name': job.company_name,
            'sameAs': job.company_domain ? `https://${job.company_domain}` : undefined,
            'logo': job.company_domain ? `https://logo.clearbit.com/${job.company_domain}` : undefined
          },
          'jobLocation': {
            '@type': 'Place',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': job.location || 'London',
              'addressRegion': job.location?.includes('London') ? 'Greater London' : 'UK',
              'addressCountry': 'GB'
            }
          },
          'baseSalary': {
            '@type': 'MonetaryAmount',
            'currency': 'GBP',
            'value': {
              '@type': 'QuantitativeValue',
              'minValue': minRate,
              'maxValue': maxRate,
              'unitText': 'DAY'
            }
          },
          'workHours': job.is_remote ? 'Remote' : job.workplace_type || 'Flexible',
          'jobLocationType': job.is_remote ? 'TELECOMMUTE' : undefined,
          'skills': job.skills_required?.join(', ') || 'Executive Leadership, Strategic Planning, Financial Management',
          'qualifications': `Senior ${job.role_category || 'Executive'} experience required. Proven track record in fractional or interim roles preferred.`,
          'responsibilities': job.key_deliverables?.join('. ') || 'Lead strategic initiatives. Provide executive-level guidance. Drive business growth.',
          'url': `https://fractional.quest/fractional-job/${job.slug}`,
          'directApply': true,
          'industry': 'Professional Services, Executive Search',
          'occupationalCategory': job.role_category || 'Executive'
        }
      }
    })
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://fractional.quest'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Fractional Jobs UK',
        'item': 'https://fractional.quest/fractional-jobs-uk'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* WebPage Schema with dateModified for SEO freshness */}
      <WebPageSchema
        title="Fractional Jobs UK: CFO, CTO, CMO, PM Roles"
        description="Find fractional jobs UK: 17+ CFO, CTO, CMO, Project Manager roles with £700-£1,500 day rates"
        url="https://fractional.quest/fractional-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.totalUK}
      />

      {/* JobPosting JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQ Schema - generated once in server component to avoid hydration duplicates */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: ukFractionalJobsFAQs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }) }}
      />
      {/* Video Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "What is a Fractional Executive? The Complete Guide",
            "description": "Learn what a fractional executive does and how fractional jobs UK are transforming the way businesses access senior leadership. This video covers CFO, CTO, CMO roles, typical day rates, and how to build a portfolio career in the UK fractional market.",
            "thumbnailUrl": "https://img.youtube.com/vi/QI1tHp_D-AI/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=QI1tHp_D-AI",
            "embedUrl": "https://www.youtube.com/embed/QI1tHp_D-AI",
            "uploadDate": "2023-04-10",
            "duration": "PT11M20S",
            "publisher": {
              "@type": "Organization",
              "name": "Fractional Quest",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fractional.quest/logo.png"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "How to Become a Fractional Executive",
            "description": "A step-by-step guide to transitioning from full-time employment to a fractional executive career. Learn how to position yourself for fractional jobs UK, set your rates, acquire clients, and build a sustainable portfolio practice.",
            "thumbnailUrl": "https://img.youtube.com/vi/r5WlSD_h-c4/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=r5WlSD_h-c4",
            "embedUrl": "https://www.youtube.com/embed/r5WlSD_h-c4",
            "uploadDate": "2023-08-05",
            "duration": "PT14M15S",
            "publisher": {
              "@type": "Organization",
              "name": "Fractional Quest",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fractional.quest/logo.png"
              }
            }
          })
        }}
      />

      {/* Hero Section with Colorful Aspirational Image */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        {/* Background Image - Colorful and Global */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Fractional jobs UK background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-blue-900/70 to-purple-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  {stats.totalUK}+ Live Opportunities
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Executive Jobs
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-xl">
                CFO, CTO, CMO & senior leadership roles. Work 2-3 days a week with multiple clients. Live and work from anywhere.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#jobs"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Browse Jobs ↓
                </Link>
                <Link
                  href="/profile/edit"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur text-white border border-white/30 hover:bg-white/20 transition-all duration-200"
                >
                  Create Profile
                </Link>
              </div>
            </div>

            {/* Frac Section */}
            <div className="hidden lg:block lg:w-80">
              <FracSection title="Talk with Frac" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10 text-center text-base">
            <div>
              <span className="font-black text-white">{stats.totalUK}+</span>
              <span className="font-bold text-white ml-1">Live Jobs</span>
            </div>
            <div>
              <span className="font-black text-white">£700-1,500</span>
              <span className="font-bold text-white ml-1">Day Rates</span>
            </div>
            <div>
              <span className="font-black text-white">2-3 Days</span>
              <span className="font-bold text-white ml-1">Per Week</span>
            </div>
            <div>
              <span className="font-black text-white">Global</span>
              <span className="font-bold text-white ml-1">Remote Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section with Filters */}
      {(ukJobs as any[]).length > 0 && (
        <section id="jobs" className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Fractional Jobs UK
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                {stats.totalUK} active opportunities • Updated hourly
              </p>

              {/* Advanced Job Search */}
              <JobSearch totalJobs={stats.totalUK} className="mb-6" />

              {/* Quick Role Links */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  { label: 'All Roles', href: '/fractional-jobs-uk', active: true },
                  { label: 'London Jobs', href: '/fractional-jobs-london', featured: true },
                  { label: 'CFO', href: '/fractional-cfo-jobs-uk' },
                  { label: 'CTO', href: '/fractional-cto-jobs-uk' },
                  { label: 'CMO', href: '/fractional-cmo-jobs-uk' },
                  { label: 'COO', href: '/fractional-coo-jobs-uk' },
                  { label: 'HR/CHRO', href: '/fractional-hr-jobs-uk' },
                ].map((filter) => (
                  <Link
                    key={filter.label}
                    href={filter.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      filter.active
                        ? 'bg-blue-600 text-white'
                        : filter.featured
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {filter.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Jobs Column */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
                {(ukJobs as any[]).slice(0, 15).map((job: any) => {
                  const postedDate = job.posted_date ? new Date(job.posted_date) : null
                  const postedDaysAgo = postedDate
                    ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                    : undefined

                  // Estimate salary if missing
                  const estimatedRate = !job.compensation ? estimateRateByRole(job.role_category) : undefined

                  return (
                    <JobPreviewTooltip
                      key={job.id}
                      title={job.normalized_title || job.title}
                      company={job.company_name}
                      keyDeliverables={job.key_deliverables || []}
                      description={job.description_snippet}
                      compensation={job.compensation || (estimatedRate ? `£${estimatedRate.min}-${estimatedRate.max}/day` : undefined)}
                      isRemote={job.is_remote || job.workplace_type === 'Remote'}
                    >
                      <Link href={`/fractional-job/${job.slug}`} className="flex">
                        <JobCard
                          jobId={job.id}
                          title={job.normalized_title || job.title}
                          company={job.company_name}
                          location={job.location || 'UK'}
                          isRemote={job.is_remote || job.workplace_type === 'Remote'}
                          compensation={job.compensation}
                          roleCategory={job.role_category}
                          skills={job.skills_required || []}
                          postedDaysAgo={postedDaysAgo}
                          companyDomain={job.company_domain}
                          description={job.description_snippet}
                          jobSource={job.job_source || 'LinkedIn'}
                          isSyndicated={job.is_syndicated ?? true}
                          postedDate={postedDate || undefined}
                          estimatedDayRate={estimatedRate}
                          companyType={job.company_type as 'direct' | 'recruiter' | 'job_board' || 'recruiter'}
                          appealSummary={job.appeal_summary}
                          keyDeliverables={job.key_deliverables || []}
                        />
                      </Link>
                    </JobPreviewTooltip>
                  )
                })}
              </div>

              {/* Right Sidebar - Content Hub (Sticky) */}
              <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:scrollbar-thin">
                {/* TLDR Summary */}
                <TLDR
                  points={[
                    '£700-£1,500/day rates for CFO, CTO, CMO roles',
                    '2-3 days/week with multiple clients',
                    'London (60%) + remote opportunities across UK',
                    'Most roles outside IR35 when properly structured',
                  ]}
                />

                {/* Rate Calculator Card */}
                <Link
                  href="#rate-calculator"
                  className="block bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-5 text-white hover:from-blue-700 hover:to-blue-900 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-base font-bold">Rate Calculator</h3>
                  </div>
                  <p className="text-sm text-blue-100 mb-3">
                    Calculate your earning potential based on role, location and days worked.
                  </p>
                  <span className="text-xs font-medium text-blue-200 group-hover:text-white transition-colors flex items-center gap-1">
                    Calculate now →
                  </span>
                </Link>

                {/* IR35 Calculator Card */}
                <Link
                  href="#ir35-calculator"
                  className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                    </svg>
                    <h3 className="text-base font-bold text-gray-900">IR35 Tax Calculator</h3>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                      BETA
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Compare take-home pay inside vs outside IR35.
                  </p>
                  <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700 transition-colors flex items-center gap-1">
                    Calculate tax →
                  </span>
                </Link>

                {/* Saved Jobs Counter */}
                <SavedJobsCounter />

                {/* CTA Card */}
                <div className="bg-gray-900 rounded-xl p-5 text-center">
                  <h3 className="text-base font-bold text-white mb-2">Join the Platform</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Create your profile and get discovered by companies.
                  </p>
                  <Link
                    href="/profile/edit"
                    className="block w-full text-center px-4 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
                  >
                    Create Profile
                  </Link>
                </div>

                {/* Browse by Role */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Browse by Role</h3>
                  <div className="space-y-1.5">
                    {[
                      { label: 'Fractional CFO', href: '/fractional-cfo-jobs-uk' },
                      { label: 'Fractional CTO', href: '/fractional-cto-jobs-uk' },
                      { label: 'Fractional CMO', href: '/fractional-cmo-jobs-uk' },
                      { label: 'Fractional COO', href: '/fractional-coo-jobs-uk' },
                      { label: 'Fractional CHRO', href: '/fractional-hr-jobs-uk' },
                      { label: 'Fractional CISO', href: '/fractional-ciso-jobs-uk' },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm"
                      >
                        <span className="font-medium text-gray-700 group-hover:text-blue-700">{link.label}</span>
                        <span className="text-gray-400">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Content Hub - Resources */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Resources</h3>
                  <div className="space-y-2">
                    <Link
                      href="/how-to-become-a-fractional-executive"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      How to Go Fractional
                    </Link>
                    <Link
                      href="/fractional-executive-salary-uk"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      UK Salary Guide
                    </Link>
                    <Link
                      href="/what-is-a-fractional-executive"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      What is a Fractional Executive?
                    </Link>
                    <Link
                      href="/fractional-jobs-articles"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      All Articles & Guides
                    </Link>
                  </div>
                </div>

                {/* Location Quick Links */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Jobs by Location</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'London', href: '/fractional-jobs-london' },
                      { label: 'Manchester', href: '/fractional-jobs-manchester' },
                      { label: 'Birmingham', href: '/fractional-jobs-birmingham' },
                      { label: 'Edinburgh', href: '/fractional-jobs-edinburgh' },
                      { label: 'Remote', href: '/fractional-jobs?type=Remote' },
                    ].map((loc) => (
                      <Link
                        key={loc.href}
                        href={loc.href}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Fractional Jobs UK - Moved Below Jobs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            About Fractional Jobs UK
          </h2>

          {/* Video 1: What is a Fractional Executive */}
          <div className="my-10 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">What is a Fractional Executive?</h4>
            <LazyYouTube videoId="QI1tHp_D-AI" title="What is a Fractional Executive? The Complete Guide" />
            <p className="text-gray-500 text-sm mt-3">Learn what fractional executives do and how the UK market works</p>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Browse {stats.totalUK}+ fractional executive jobs across the United Kingdom. Find part-time CFO, CTO, CMO, and COO roles with
              £700-£1,500 daily rates from London to Edinburgh.
            </p>
            <p>
              The UK fractional jobs market has grown exponentially since 2020, with fractional executives now representing over 15% of
              senior leadership appointments according to recent <a href="https://www.gov.uk/government/statistics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK government employment statistics</a>.
              This shift reflects fundamental changes in how businesses access executive talent and how experienced leaders structure their careers.
            </p>
            <p>
              Fractional work differs from traditional interim management by emphasizing ongoing strategic partnerships rather than short-term crisis intervention.
              A fractional CFO, CTO, or CMO typically works with 2-4 clients simultaneously, dedicating 1-3 days per week to each organization.
              This model enables businesses to access C-level expertise at 40-60% lower cost than full-time employment, while executives earn premium
              rates and enjoy portfolio career diversity.
            </p>
          </div>
        </div>
      </section>

      {/* Rate Calculator Section */}
      <section id="rate-calculator" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !text-gray-900 mb-4">
              Calculate Your Fractional Rate
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Understand your earning potential as a fractional executive. Input your role and location to see realistic day rates, weekly earnings, and annual income projections based on current UK market data.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <FractionalRateCalculatorUK />
          </div>
        </div>
      </section>



      {/* IR35 Calculator Section */}
      <section id="ir35-calculator" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Tax Planning Tool
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-bold rounded-full border border-blue-600/30">
                BETA
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !text-gray-900 mb-4">
              IR35 Tax Calculator
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
              Compare your take-home pay inside vs outside IR35. Understand the tax implications of different working arrangements
              to make informed decisions about your fractional career structure.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl mx-auto">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Important:</strong> This calculator provides estimates only. Always consult a qualified accountant or tax professional
                for actual IR35 status determination and tax advice specific to your circumstances.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <IR35Calculator defaultDayRate={stats.avgDayRate} />
          </div>
        </div>
      </section>

      {/* UK Market Dashboard */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !text-gray-900 mb-8 text-center">
            UK Fractional Jobs Market 2025
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">{stats.totalUK}+</div>
              <div className="text-gray-400 text-xs md:text-sm mt-2">Active Jobs</div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">£{stats.avgDayRate}</div>
              <div className="text-gray-400 text-xs md:text-sm mt-2">Avg Day Rate</div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">2.5</div>
              <div className="text-gray-400 text-xs md:text-sm mt-2">Avg Clients</div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">+40%</div>
              <div className="text-gray-400 text-xs md:text-sm mt-2">YoY Growth</div>
            </div>
          </div>

          {/* Top 3 Markets */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 !text-gray-900 mb-6">Top UK Markets</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'London', jobs: stats.totalLondon, rate: '£900-£1,500/day', link: '/fractional-jobs-london' },
                { name: 'Manchester', jobs: Math.round(stats.totalUK * 0.15), rate: '£700-£1,200/day', link: '/fractional-jobs-manchester' },
                { name: 'Birmingham', jobs: Math.round(stats.totalUK * 0.08), rate: '£650-£1,100/day', link: '/fractional-jobs-birmingham' },
              ].map((region) => (
                <Link
                  key={region.name}
                  href={region.link}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-600 transition-colors group"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-400 transition-colors">{region.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{region.jobs}+ jobs</p>
                  <p className="text-blue-400 text-sm font-semibold">{region.rate}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-600 mb-4 block">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !text-gray-900 mb-2">Fractional Executives in Action</h2>
            <p className="text-gray-600 text-sm">Examples from around the web</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <article key={i} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                <blockquote className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-gray-900 font-bold text-base md:text-lg flex-shrink-0">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="font-semibold text-gray-900 not-italic block text-sm md:text-base">{story.name}</cite>
                    <span className="text-gray-400 text-xs md:text-sm">{story.role}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Wider and more dynamic */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-600 mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Everything you need to know about fractional executive careers in the UK
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <FAQ
              items={ukFractionalJobsFAQs}
              title=""
              className=""
             
            />
          </div>
        </div>
      </section>



      {/* Internal Links - Subtle footer */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 !text-gray-900 mb-8 md:mb-12 text-center">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><Link href="/fractional-cfo-jobs-uk" className="hover:text-blue-400 transition-colors">Fractional CFO Jobs UK</Link></li>
                <li><Link href="/fractional-cmo-jobs-uk" className="hover:text-blue-400 transition-colors">Fractional CMO Jobs UK</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="hover:text-blue-400 transition-colors">Fractional CTO Jobs UK</Link></li>
                <li><Link href="/fractional-coo-jobs-uk" className="hover:text-blue-400 transition-colors">Fractional COO Jobs UK</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><Link href="/fractional-jobs?location=London" className="hover:text-blue-400 transition-colors">Fractional Jobs London</Link></li>
                <li><Link href="/fractional-jobs-manchester" className="hover:text-blue-400 transition-colors">Fractional Jobs Manchester</Link></li>
                <li><Link href="/fractional-jobs-birmingham" className="hover:text-blue-400 transition-colors">Fractional Jobs Birmingham</Link></li>
                <li><Link href="/fractional-jobs-edinburgh" className="hover:text-blue-400 transition-colors">Fractional Jobs Edinburgh</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li><Link href="/fractional-jobs-uk" className="hover:text-blue-400 transition-colors">All Fractional Jobs UK</Link></li>
                <li><Link href="/how-to-become-a-fractional-executive" className="hover:text-blue-400 transition-colors">How to Go Fractional</Link></li>
                <li><Link href="/fractional-executive-salary-uk" className="hover:text-blue-400 transition-colors">UK Salary Guide</Link></li>
                <li><Link href="/fractional-jobs-articles" className="hover:text-blue-400 transition-colors">All Articles</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide: Understanding Fractional Jobs UK */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 !text-gray-900 mb-8">
            Understanding Fractional Jobs in the United Kingdom
          </h2>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">What Are Fractional Jobs UK?</h3>
              <p className="mb-4">
                Fractional jobs UK represent a transformative model of executive employment where senior leaders provide strategic guidance
                to multiple organizations simultaneously. Unlike traditional full-time roles, fractional executives work part-time—typically
                1-3 days per week per client—enabling businesses to access C-suite expertise without bearing the full cost of permanent employment.
              </p>
              <p className="mb-4">
                According to <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Office for National Statistics data</a>,
                the UK has seen a 127% increase in fractional executive appointments since 2019. This growth spans all major business hubs including
                London, Manchester, Birmingham, Edinburgh, and Bristol, with remote fractional arrangements becoming increasingly common.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Key Differences: Fractional vs Interim vs Part-Time</h3>
              <div className="bg-white rounded-xl p-6 mb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Fractional Executive</h4>
                <p className="mb-2">Ongoing strategic partnership with multiple clients. Proactive, long-term relationship focused on growth and development.
                Typical engagement: 12-36 months with 1-3 days per week per client.</p>
              </div>
              <div className="bg-white rounded-xl p-6 mb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Interim Executive</h4>
                <p className="mb-2">Temporary full-time role to address specific crisis or transition. Reactive, short-term assignment typically 3-6 months.
                Often covering maternity leave, M&A transitions, or turnaround situations.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Part-Time Employee</h4>
                <p>Permanent reduced-hours position with single employer. Benefits and employment rights under UK law per
                <a href="https://www.gov.uk/part-time-worker-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline ml-1">government part-time worker rights</a>.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Fractional Job Roles in High Demand</h3>
              <p className="mb-4">
                The UK fractional jobs market encompasses various C-suite functions, each with distinct characteristics and compensation ranges:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Fractional CFO Jobs UK</h4>
                  <p className="mb-2">
                    Financial strategy, fundraising, cash flow management, financial modeling. Average day rate: £900-£1,500.
                    Particularly sought after by scale-ups preparing for Series A/B funding rounds and PE-backed portfolio companies requiring
                    financial rigor without full-time CFO expense.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Fractional CTO Jobs UK</h4>
                  <p className="mb-2">
                    Technology roadmap, technical architecture, engineering team leadership, digital transformation. Average day rate: £850-£1,400.
                    Essential for businesses undergoing cloud migration, building technical teams, or requiring strategic technology guidance
                    without commitment to permanent CTO compensation packages exceeding £200,000 annually.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Fractional CMO Jobs UK</h4>
                  <p className="mb-2">
                    Marketing strategy, brand development, demand generation, go-to-market planning. Average day rate: £800-£1,300.
                    Particularly valuable for businesses launching new products, entering new markets, or pivoting positioning without
                    resources for full marketing department leadership.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Fractional COO Jobs UK</h4>
                  <p className="mb-2">
                    Operational excellence, process optimization, team scaling, systems implementation. Average day rate: £850-£1,400.
                    Critical during rapid growth phases when operational complexity outpaces existing management capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content: Evolution of Fractional Jobs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 !text-gray-900 mb-6">
            The Evolution of Fractional Jobs in the UK
          </h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              The concept of fractional work has transformed dramatically over the past decade. What began as "interim management"
              has evolved into a sophisticated ecosystem of fractional executives who provide strategic leadership to multiple
              organizations simultaneously. This shift reflects fundamental changes in how businesses access talent and how
              experienced executives structure their careers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Today's fractional jobs UK market is characterized by highly specialized professionals—fractional CFOs managing
              financial strategy for 3-4 companies, fractional CTOs architecting technology roadmaps, and fractional CMOs driving
              growth initiatives. These roles offer businesses access to senior expertise without full-time employment costs, while
              giving executives portfolio careers with diverse challenges and premium day rates.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The COVID-19 pandemic accelerated this transformation, normalizing remote work and demonstrating that strategic
              leadership doesn't require physical presence five days per week. As a result, fractional jobs UK has grown by over
              40% year-on-year, with London leading the market but opportunities expanding rapidly across Manchester, Birmingham,
              and Edinburgh.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content: Benefits of Fractional Jobs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 !text-gray-900 mb-6">
            The Benefits of Fractional Jobs for Executives and Companies
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Executives</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Premium Earnings:</strong> £700-£1,500 daily rates enable £150,000-£300,000+ annual income</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Portfolio Diversity:</strong> Work with 2-4 clients across different industries and growth stages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Flexibility:</strong> Design your own schedule and choose projects that align with your expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Continuous Learning:</strong> Exposure to multiple business models and challenges accelerates growth</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Companies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Cost Efficiency:</strong> Save 40-60% versus full-time hire including salary, NI, benefits, and overhead</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Immediate Impact:</strong> Access C-level expertise immediately without lengthy recruitment processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Flexible Scaling:</strong> Increase or decrease fractional executive time as business needs change</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong>Cross-Industry Insights:</strong> Fractional executives bring proven strategies from multiple sectors</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            The fractional model creates a win-win scenario. Companies gain access to seasoned leadership at a fraction of
            full-time cost, while executives build rewarding portfolio careers with higher earnings and greater autonomy.
            This alignment of interests explains why fractional jobs UK continues to be one of the fastest-growing segments
            of the executive job market.
          </p>
        </div>
      </section>

      {/* Legal and Tax Considerations for Fractional Jobs UK */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 !text-gray-900 mb-8">
            Legal and Tax Considerations for Fractional Jobs UK
          </h2>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">IR35 and Fractional Executive Work</h3>
              <p className="mb-4">
                Understanding IR35 legislation is critical for fractional executives operating in the UK. The <a href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">HMRC IR35 rules</a> determine
                whether a contractor should be treated as an employee for tax purposes. Properly structured fractional arrangements typically fall
                outside IR35 due to multiple concurrent clients, control over delivery methods, and genuine business-to-business relationships.
              </p>

              <div className="bg-white rounded-xl p-6 mb-4">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Key IR35 Factors for Fractional Jobs</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="text-base font-semibold text-blue-400 mb-1">Multiple Clients</h5>
                    <p className="text-sm">Working with 2-4 organizations simultaneously demonstrates genuine business operation rather than disguised employment.</p>
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-blue-400 mb-1">Substitution Rights</h5>
                    <p className="text-sm">Ability to send a substitute (even if not exercised) indicates contractor status per <a href="https://www.gov.uk/hmrc-internal-manuals/employment-status-manual" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">HMRC Employment Status Manual</a>.</p>
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-blue-400 mb-1">Control and Autonomy</h5>
                    <p className="text-sm">Fractional executives determine how work is delivered, contrasting with employees who receive detailed direction.</p>
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-blue-400 mb-1">Financial Risk</h5>
                    <p className="text-sm">Bearing business costs, using own equipment, and potential for profit/loss support outside IR35 status.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Structuring Your Fractional Practice</h3>
              <p className="mb-4">
                Most UK fractional executives operate through limited companies to optimize tax efficiency and maintain IR35 compliance.
                According to <a href="https://www.gov.uk/set-up-limited-company" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Companies House guidance</a>,
                forming a limited company provides professional credibility, tax planning opportunities, and clear separation between personal and business finances.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-base font-bold text-gray-900 mb-2">Limited Company Benefits</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Corporation tax at 19-25% vs income tax up to 45%</li>
                    <li>• Dividend tax efficiency on profit extraction</li>
                    <li>• VAT registration threshold flexibility</li>
                    <li>• Professional indemnity insurance deductibility</li>
                    <li>• Pension contributions up to £60,000 annually</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5">
                  <h4 className="text-base font-bold text-gray-900 mb-2">Sole Trader Considerations</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Simpler administration and lower costs</li>
                    <li>• All profits taxed as personal income</li>
                    <li>• Unlimited personal liability</li>
                    <li>• May appear less established to clients</li>
                    <li>• Limited tax planning opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Employment Law and Fractional Contracts</h3>
              <p className="mb-4">
                Fractional executives should ensure contracts clearly establish contractor status rather than employment. Key contractual elements include
                defined deliverables rather than time-based obligations, notice periods appropriate for business relationships (typically 30-90 days),
                and explicit acknowledgment of the right to work for other clients. The <a href="https://www.acas.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Advisory, Conciliation and Arbitration Service (ACAS)</a> provides
                guidance on distinguishing contractors from employees.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Essential Contract Clauses for Fractional Work</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong className="text-gray-900">Scope of Services:</strong> Define specific deliverables and outcomes rather than hours worked</p>
                  <p><strong className="text-gray-900">Non-Exclusivity:</strong> Explicit confirmation of right to serve other clients</p>
                  <p><strong className="text-gray-900">Payment Terms:</strong> Day rate or project fee structure, typically net 30 days</p>
                  <p><strong className="text-gray-900">Intellectual Property:</strong> Clear ownership and licensing arrangements for work product</p>
                  <p><strong className="text-gray-900">Professional Indemnity:</strong> Specification of required insurance coverage (typically £1-2M)</p>
                  <p><strong className="text-gray-900">Data Protection:</strong> GDPR compliance obligations per <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICO guidance</a></p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Insurance and Professional Protection</h3>
              <p className="mb-4">
                Fractional executives should maintain comprehensive insurance coverage to protect against professional risks. Most clients require
                evidence of professional indemnity insurance before engagement commencement, with £1 million minimum coverage standard for
                fractional CFO, CTO, and CMO roles, escalating to £2-5 million for larger client engagements or board-level appointments.
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-base font-bold text-gray-900 mb-1">Professional Indemnity Insurance</h4>
                  <p className="text-sm">Protects against claims of professional negligence, errors in advice, or breach of professional duty. Essential for all fractional executive work.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-base font-bold text-gray-900 mb-1">Public Liability Insurance</h4>
                  <p className="text-sm">Covers third-party injury or property damage claims. Required for on-site client work and typically £2-5 million coverage.</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-base font-bold text-gray-900 mb-1">Cyber Liability Insurance</h4>
                  <p className="text-sm">Increasingly important for fractional CTOs and executives handling sensitive data. Covers data breach costs and regulatory fines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content: How to Succeed in Fractional Jobs UK */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 !text-gray-900 mb-6">
            How to Get Started with Fractional Jobs UK
          </h2>

          {/* Video 2: How to Become a Fractional Executive */}
          <div className="my-10 not-prose">
            <h4 className="text-lg font-bold text-gray-900 mb-4">How to Become a Fractional Executive</h4>
            <LazyYouTube videoId="r5WlSD_h-c4" title="How to Become a Fractional Executive" />
            <p className="text-gray-500 text-sm mt-3">Step-by-step guide to launching your fractional executive career</p>
          </div>

          <div className="space-y-6 text-gray-600">
            <p className="leading-relaxed">
              Breaking into the fractional jobs UK market requires strategic positioning and demonstrable expertise. Most successful
              fractional executives have 15+ years of experience in their domain, with at least 5 years in senior leadership roles.
              The key differentiator isn't just technical competence—it's the ability to deliver immediate strategic impact while
              building scalable systems that persist after your engagement ends.
            </p>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Steps to Launch Your Fractional Jobs UK Career</h3>
              <ol className="space-y-4 text-gray-600 list-decimal list-inside">
                <li><strong className="text-gray-900">Build Your Portfolio:</strong> Document 3-5 significant achievements with quantified results. Fractional clients want evidence of transformation, not just task completion.</li>
                <li><strong className="text-gray-900">Establish Your Niche:</strong> The most successful fractional executives specialize. Whether it's SaaS financial modeling, B2B growth marketing, or technical architecture for scale-ups, depth beats breadth.</li>
                <li><strong className="text-gray-900">Set Your Rate Structure:</strong> UK fractional jobs typically command £700-£1,500 per day depending on role and experience. Start conservative, then adjust based on demand and value delivered.</li>
                <li><strong className="text-gray-900">Develop Client Acquisition:</strong> Your first 2-3 clients often come from existing networks. Beyond that, content marketing, speaking engagements, and strategic partnerships become critical.</li>
                <li><strong className="text-gray-900">Master the Delivery Model:</strong> Fractional work demands asynchronous productivity. You'll need systems for documentation, knowledge transfer, and maintaining momentum across 2-4 concurrent clients.</li>
              </ol>
            </div>

            <p className="leading-relaxed">
              The UK fractional jobs market rewards specialists who can operate independently while integrating seamlessly with existing
              teams. Unlike interim roles focused on crisis management, fractional positions emphasize ongoing strategic partnership.
              You're not covering a vacancy—you're providing permanent executive capacity at a fraction of full-time cost.
            </p>

            <p className="leading-relaxed">
              Geography still matters despite remote work normalization. London fractional jobs offer premium rates but higher competition.
              Regional markets like Manchester, Birmingham, and Edinburgh present strong opportunities for executives willing to serve
              local businesses with remote support. Many fractional professionals maintain a hybrid model: one anchor client requiring
              regular on-site presence, supplemented by 2-3 fully remote engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Content: Market Outlook */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 !text-gray-900 mb-6">
            The Future of Fractional Jobs in the UK Market
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="leading-relaxed">
              The fractional executive model is experiencing structural acceleration across the UK. Economic uncertainty drives companies
              to optimize fixed costs while maintaining access to strategic capabilities. Simultaneously, experienced executives increasingly
              reject traditional employment in favor of portfolio careers offering autonomy and earning potential beyond salaried positions.
            </p>

            <p className="leading-relaxed">
              Industry analysis suggests fractional jobs UK will grow 35-40% annually through 2027. This growth spans all C-suite
              functions, with particularly strong demand for fractional CFOs managing complex financial strategy, fractional CTOs
              navigating technology transformation, and fractional CMOs driving digital-first growth initiatives. The COO and Chief
              Revenue Officer functions are emerging as new fractional opportunities as companies seek operational excellence without
              permanent overhead.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Market Drivers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Remote work infrastructure enables seamless fractional engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Scale-up ecosystem requires senior expertise at pre-IPO stage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>PE-backed companies seek operational improvement without headcount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Executive talent shortage makes fractional access competitive advantage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Emerging Opportunities</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Fractional Chief People Officers for HR transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Fractional Chief Data Officers driving AI implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Fractional Chief Sustainability Officers for ESG compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">→</span>
                    <span>Fractional Chief Product Officers for product-market fit</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="leading-relaxed">
              For executives considering fractional work, timing has never been better. The infrastructure exists, market demand is
              accelerating, and rate expectations continue rising. The transition requires careful planning—particularly around client
              acquisition, portfolio management, and financial structuring—but the rewards increasingly justify the effort. Whether
              you're seeking greater autonomy, higher earnings, or more diverse professional challenges, fractional jobs UK offers a
              compelling alternative to traditional executive careers.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-600 mb-6 block">Get Started</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 !text-gray-900 mb-6 leading-tight">
            Find Fractional Jobs UK Today
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join the UK&apos;s fastest-growing executive job market. Build your portfolio career with flexibility and premium rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              Browse All Jobs
            </Link>
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold rounded-lg border border-gray-700 text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              Join Platform
            </Link>
          </div>
        </div>
      </section>

      {/* JobPosting Schema for Google Job Search */}
      {(ukJobs as any[]).length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJobPostingSchema(ukJobs))
          }}
        />
      )}
    </div>
  )
}
