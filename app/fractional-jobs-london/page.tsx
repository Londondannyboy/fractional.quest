import { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { createDbQuery } from '@/lib/db'
import { JobCard } from '@/components/JobCard'
import { FAQ } from '@/components/FAQ'
import { TLDR } from '@/components/TLDR'
import { SidebarPanels } from '@/components/SidebarPanels'
import { JobSearch } from '@/components/JobSearch'
import { CalculatorSkeleton } from '@/components/ui/Skeleton'
import { SavedJobsCounter } from '@/components/SavedJobsCounter'
import { JobPreviewTooltip } from '@/components/ui/JobPreviewTooltip'

const FractionalRateCalculatorUK = dynamic(
  () => import('@/components/FractionalRateCalculatorUK').then(mod => ({ default: mod.FractionalRateCalculatorUK })),
  { loading: () => <CalculatorSkeleton /> }
)

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Jobs London: Executive Roles',
  description: 'Find fractional jobs in London. CFO, CTO, CMO roles with £900-£1,500 day rates. Part-time opportunities in the City & Canary Wharf.',
  keywords: 'fractional jobs London, fractional CFO London, fractional CTO London, fractional CMO London, part-time executive jobs London, interim executive London',
  alternates: {
    canonical: 'https://fractional.quest/fractional-jobs-london',
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
    title: 'Fractional Jobs London: CFO, CTO, CMO Roles 2025',
    description: 'Find fractional executive jobs in London. CFO, CTO, CMO roles with £900-£1,500 day rates.',
    type: 'website',
    url: 'https://fractional.quest/fractional-jobs-london',
    siteName: 'Fractional Quest',
  },
}

const londonFAQs = [
  {
    question: 'How much do fractional executives earn in London?',
    answer: 'London fractional executives command premium rates of £900-£1,500 per day, significantly higher than other UK regions. CFOs and CTOs typically earn £1,000-£1,500/day, while CMOs average £900-£1,300/day. Most fractional executives work with 2-3 clients, earning £200,000-£350,000+ annually. According to <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a>, London executives earn significantly above national averages.',
  },
  {
    question: 'Where are most London fractional jobs based?',
    answer: 'London fractional jobs cluster around the <a href="https://www.cityoflondon.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">City of London</a>, Canary Wharf, and Tech City (Shoreditch/Old Street). However, 60%+ offer hybrid or remote arrangements, so physical location is increasingly flexible. Many executives split time between client offices and home working. <a href="https://londonandpartners.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">London & Partners</a> reports continued growth in flexible executive roles across the capital.',
  },
  {
    question: 'What industries hire fractional executives in London?',
    answer: 'London\'s fractional market is dominated by fintech, scale-ups, and PE/VC-backed companies. Key sectors include financial services, technology, professional services, and creative industries. The Square Mile and Canary Wharf provide strong demand for fractional CFOs, while Tech City drives CTO and CMO roles. <a href="https://www.techuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> highlights London\'s tech sector growth, and the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> reports increasing demand for flexible executive leadership.',
  },
  {
    question: 'How does London compare to other UK cities for fractional work?',
    answer: 'London accounts for 60% of UK fractional jobs and offers 25-40% higher day rates than regional cities. However, competition is fiercer. Manchester and Birmingham are growing rapidly with more hybrid opportunities. Many executives maintain London clients while living elsewhere. The <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> reports strong regional growth in scale-ups requiring executive talent.',
  },
]

const tldrPoints = [
  '£900-£1,500/day rates for London-based CFO, CTO, CMO roles',
  '60% of UK fractional jobs are in London',
  'Most roles offer hybrid/remote flexibility',
  'Fintech, scale-ups & PE-backed companies lead hiring',
]

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
            'addressLocality': 'London',
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

async function getLondonStats() {
  try {
    const sql = createDbQuery()
    const [totalLondon, roleStats, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND location ILIKE '%london%'`,
      sql`
        SELECT role_category, COUNT(*) as count
        FROM jobs
        WHERE is_active = true AND location ILIKE '%london%' AND role_category IS NOT NULL
        GROUP BY role_category
        ORDER BY count DESC
      `,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND location ILIKE '%london%' AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])

    return {
      totalLondon: parseInt((totalLondon[0] as any)?.count || '0'),
      roleStats: roleStats as { role_category: string; count: string }[],
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '1050'))
    }
  } catch (error) {
    return { totalLondon: 12, roleStats: [], avgDayRate: 1050 }
  }
}

async function getLondonJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, normalized_title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, company_domain, description_snippet,
        job_source, is_syndicated, company_type, appeal_summary, key_deliverables
      FROM jobs
      WHERE is_active = true
        AND location ILIKE '%london%'
        AND skills_required IS NOT NULL
        AND array_length(skills_required, 1) > 0
        AND company_domain IS NOT NULL
        AND description_snippet IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 15
    `
    return jobs
  } catch (error) {
    return []
  }
}

function estimateRateByRole(roleCategory?: string): { min: number; max: number } | undefined {
  if (!roleCategory) return undefined
  const rateMap: Record<string, { min: number; max: number }> = {
    'CFO': { min: 1000, max: 1500 },
    'CTO': { min: 950, max: 1400 },
    'CMO': { min: 900, max: 1300 },
    'COO': { min: 950, max: 1400 },
    'CHRO': { min: 800, max: 1250 },
    'CPO': { min: 900, max: 1350 },
    'CISO': { min: 1000, max: 1500 },
  }
  return rateMap[roleCategory]
}

export default async function FractionalJobsLondonPage() {
  const [stats, londonJobs] = await Promise.all([
    getLondonStats(),
    getLondonJobs()
  ])

  // Use the most recent job's posted date as "last updated"
  // This reflects actual content freshness, not just render time
  const mostRecentJob = (londonJobs as any[])[0]
  const lastUpdatedDate = mostRecentJob?.posted_date
    ? new Date(mostRecentJob.posted_date)
    : new Date()

  const lastUpdated = lastUpdatedDate.toISOString()
  const lastUpdatedDisplay = lastUpdatedDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const jobPostingsSchema = generateJobPostingSchema(londonJobs as any[])

  // WebPage schema with dateModified - this is what Google uses for "freshness"
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Fractional Jobs London: CFO, CTO, CMO Executive Roles',
    'description': 'Find fractional jobs in London: CFO, CTO, CMO roles with £900-£1,500 day rates.',
    'url': 'https://fractional.quest/fractional-jobs-london',
    'datePublished': '2024-11-01T00:00:00Z',
    'dateModified': lastUpdated,
    'publisher': {
      '@type': 'Organization',
      'name': 'Fractional Quest',
      'url': 'https://fractional.quest'
    },
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': stats.totalLondon,
      'itemListElement': (londonJobs as any[]).slice(0, 5).map((job, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'url': `https://fractional.quest/fractional-job/${job.slug}`
      }))
    }
  }


  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://fractional.quest' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Fractional Jobs UK', 'item': 'https://fractional.quest/fractional-jobs-uk' },
      { '@type': 'ListItem', 'position': 3, 'name': 'London', 'item': 'https://fractional.quest/fractional-jobs-london' }
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section with H1 */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/fractional-jobs-uk" className="hover:text-white transition-colors">UK Jobs</Link>
            <span>/</span>
            <span className="text-white font-medium">London</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              {stats.totalLondon}+ London Jobs
            </span>
            <span className="text-gray-400 text-xs">
              Updated {lastUpdatedDisplay}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Fractional Jobs London
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-2xl">
            CFO, CTO, CMO & executive roles in the City, Canary Wharf and beyond. Premium day rates from £900-£1,500.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#jobs"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Browse Jobs
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg border border-gray-600 text-white hover:bg-gray-800 transition-colors"
            >
              All UK Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10 text-center text-base">
            <div>
              <span className="font-black text-white">{stats.totalLondon}+</span>
              <span className="font-bold text-white ml-1">London Jobs</span>
            </div>
            <div>
              <span className="font-black text-white">£900-1,500</span>
              <span className="font-bold text-white ml-1">Day Rates</span>
            </div>
            <div>
              <span className="font-black text-white">60%</span>
              <span className="font-bold text-white ml-1">of UK Market</span>
            </div>
            <div>
              <span className="font-black text-white">Hybrid</span>
              <span className="font-bold text-white ml-1">Options Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      {(londonJobs as any[]).length > 0 && (
        <section id="jobs" className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Fractional Jobs in London
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                {stats.totalLondon} active London opportunities. London's position as a global business hub, highlighted by the <a href="https://www.cbi.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CBI</a>, continues to drive demand for flexible executive expertise across fintech, scale-ups, and established enterprises.
              </p>

              <JobSearch totalJobs={stats.totalLondon} className="mb-6" />

              {/* Role Filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  { label: 'All London', href: '/fractional-jobs-london', active: true },
                  { label: 'CFO', href: '/fractional-cfo-jobs-uk?location=London' },
                  { label: 'CTO', href: '/fractional-cto-jobs-uk?location=London' },
                  { label: 'CMO', href: '/fractional-cmo-jobs-uk?location=London' },
                  { label: 'All UK', href: '/fractional-jobs-uk' },
                ].map((filter) => (
                  <Link
                    key={filter.label}
                    href={filter.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      filter.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {filter.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Jobs Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
                {(londonJobs as any[]).slice(0, 15).map((job: any) => {
                  const postedDate = job.posted_date ? new Date(job.posted_date) : null
                  const postedDaysAgo = postedDate
                    ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                    : undefined
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
                          location={job.location || 'London'}
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

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
                {/* TLDR */}
                <TLDR points={tldrPoints} />

                {/* Rate Calculator Link */}
                <Link
                  href="#rate-calculator"
                  className="block bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-5 text-white hover:from-blue-700 hover:to-blue-900 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-base font-bold">London Rate Calculator</h3>
                  </div>
                  <p className="text-sm text-blue-100 mb-3">
                    Calculate London-specific day rates by role.
                  </p>
                  <span className="text-xs font-medium text-blue-200 group-hover:text-white transition-colors flex items-center gap-1">
                    Calculate now →
                  </span>
                </Link>

                {/* Saved Jobs */}
                <SavedJobsCounter />

                {/* Browse Other Locations */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Other UK Locations</h3>
                  <div className="space-y-1.5">
                    {[
                      { label: 'All UK Jobs', href: '/fractional-jobs-uk' },
                      { label: 'Manchester', href: '/fractional-jobs-manchester' },
                      { label: 'Birmingham', href: '/fractional-jobs-birmingham' },
                      { label: 'Edinburgh', href: '/fractional-jobs-edinburgh' },
                      { label: 'Remote Only', href: '/fractional-jobs-uk?type=Remote' },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm"
                      >
                        <span className="font-medium text-gray-700">{link.label}</span>
                        <span className="text-gray-400">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Articles */}
                <SidebarPanels
                  showPopularArticles={true}
                  showGuides={false}
                  showPostJob={true}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why London for Fractional Work */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why London Leads the UK Fractional Market
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              London dominates the UK's fractional executive market, accounting for approximately 60% of all available positions. This concentration is driven by the capital's unique position as a global financial centre, home to Europe's largest technology cluster, and headquarters for thousands of scale-up businesses seeking flexible leadership.
            </p>
            <p className="mb-4">
              The City of London and Canary Wharf provide consistent demand for fractional CFOs, particularly among fintech companies and PE-backed portfolio businesses requiring financial restructuring or IPO preparation. Meanwhile, Tech City's corridor from Shoreditch to King's Cross generates strong demand for fractional CTOs and CPOs from Series A to Series C startups navigating rapid growth phases.
            </p>
            <p>
              London-based fractional executives command premium rates 25-40% higher than regional counterparts, reflecting both the cost of living adjustment and the complexity of mandates. Most London roles now offer hybrid arrangements, with executives typically spending 1-2 days per week on-site and the remainder working remotely—enabling portfolio careers spanning multiple clients across different sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Rate Calculator */}
      <section id="rate-calculator" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              London Fractional Rate Calculator
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Calculate your earning potential as a London-based fractional executive. Day rates in London are 25-40% higher than regional cities. Professional development resources from the <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> and networking opportunities through the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> help London executives command premium rates.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <FractionalRateCalculatorUK />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            London Fractional Jobs FAQ
          </h2>
          <FAQ faqs={londonFAQs} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/fractional-jobs-uk" className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">All UK Jobs</span>
              <p className="text-sm text-gray-500 mt-1">Browse nationwide</p>
            </Link>
            <Link href="/fractional-cfo-jobs-uk" className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">CFO Jobs</span>
              <p className="text-sm text-gray-500 mt-1">Finance leadership</p>
            </Link>
            <Link href="/fractional-cto-jobs-uk" className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">CTO Jobs</span>
              <p className="text-sm text-gray-500 mt-1">Tech leadership</p>
            </Link>
            <Link href="/how-to-become-a-fractional-executive" className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
              <span className="font-medium text-gray-900">Get Started</span>
              <p className="text-sm text-gray-500 mt-1">Go fractional guide</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
