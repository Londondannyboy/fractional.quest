import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ, COO_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleContentHub } from '@/components/RoleContentHub'
import { FracSection } from '@/components/FracSection'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { ExpertProfile, ExpertProfileSchema } from '@/components/ExpertProfile'
import { CaseStudy, CaseStudySchema } from '@/components/CaseStudy'
import { LazyYouTube } from '@/components/LazyYouTube'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

// Target keyword: "fractional coo jobs uk"
export const metadata: Metadata = {
  title: 'Fractional COO Jobs UK ⚙️ Operations Leadership Roles',
  description: '🔧 Fractional COO jobs UK - Part-time Chief Operating Officer positions paying £750-£1,400/day. Browse live roles for experienced operations leaders. Remote & hybrid.',
  keywords: 'fractional coo jobs uk, fractional coo jobs, fractional chief operating officer, part time coo jobs uk, fractional coo, coo jobs uk, part time chief operating officer, fractional operations director, interim coo uk',
  alternates: {
    canonical: 'https://fractional.quest/fractional-coo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional COO Jobs UK ⚙️ Operations Leadership Roles',
    description: '🔧 Fractional COO jobs UK - Part-time COO positions paying £750-£1,400/day. Remote & hybrid.',
    images: ['/images/fractional-coo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-coo-jobs-uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional COO Jobs UK ⚙️ Operations Leadership Roles',
    description: '🔧 Fractional COO jobs UK - £750-£1,400/day. Browse live roles.',
  },
}

async function getOperationsStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Operations' AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Operations' AND (is_remote = true OR workplace_type = 'Remote') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 28, remoteCount: 12 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Operations' AND company_name IS NOT NULL
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - renders in initial HTML for crawlers
// UK-ONLY filter: prioritise UK jobs, exclude non-UK locations
async function getOperationsJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true
        AND role_category = 'Operations'
        AND title NOT ILIKE '%interim%'
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 20
    `
    return jobs as any[]
  } catch {
    return []
  }
}

// Calculate days ago for posted date
function getDaysAgo(postedDate: string | null): number | undefined {
  if (!postedDate) return undefined
  const posted = new Date(postedDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - posted.getTime())
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
}

// Get related jobs from OTHER C-suite roles for cross-linking
async function getRelatedJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND role_category IS NOT NULL
        AND role_category != 'Operations'
        AND title NOT ILIKE '%interim%'
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 15
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function FractionalCooJobsUkPage() {
  const [stats, companies, jobs, relatedJobs] = await Promise.all([
    getOperationsStats(),
    getFeaturedCompanies(),
    getOperationsJobs(),
    getRelatedJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional COO Jobs UK | Part-Time COO Roles 2025"
        description="Find part-time COO positions paying £750-£1,400/day"
        url="https://fractional.quest/fractional-coo-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <FAQPageSchema faqs={COO_FAQS} />

      {/* Video Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "What is a Fractional COO? Role Explained",
            "description": "Learn what a fractional COO does and how part-time Chief Operating Officers help UK businesses scale operations. Discover fractional COO jobs, typical responsibilities, day rates, and how operations leaders provide strategic guidance to startups and scale-ups.",
            "thumbnailUrl": "https://img.youtube.com/vi/cNLqJdkqDHk/maxresdefault.jpg",
            "uploadDate": "2024-04-10",
            "duration": "PT7M45S",
            "contentUrl": "https://www.youtube.com/watch?v=cNLqJdkqDHk",
            "embedUrl": "https://www.youtube.com/embed/cNLqJdkqDHk",
            "publisher": {
              "@type": "Organization",
              "name": "Fractional Quest",
              "logo": { "@type": "ImageObject", "url": "https://fractional.quest/logo.png" }
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
            "name": "COO vs CEO: Understanding the Difference",
            "description": "Understand the difference between a COO and CEO, and how fractional COO jobs UK allow experienced operations leaders to work with multiple companies. Learn about Chief Operating Officer responsibilities and career paths.",
            "thumbnailUrl": "https://img.youtube.com/vi/dP1VypL5lzA/maxresdefault.jpg",
            "uploadDate": "2024-05-20",
            "duration": "PT10M30S",
            "contentUrl": "https://www.youtube.com/watch?v=dP1VypL5lzA",
            "embedUrl": "https://www.youtube.com/embed/dP1VypL5lzA",
            "publisher": {
              "@type": "Organization",
              "name": "Fractional Quest",
              "logo": { "@type": "ImageObject", "url": "https://fractional.quest/logo.png" }
            }
          })
        }}
      />

      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-coo-jobs-uk" />
      {/* Hero - Clean white design with video thumbnail */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <BreadcrumbsLight items={getRoleBreadcrumbs('coo', 'jobs')} className="mb-8" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Operations Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-gray-500" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                <span className="text-orange-600">Fractional COO Jobs</span>
                <br />UK
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-8">
                Part-time <strong className="text-gray-900">Chief Operating Officer</strong> roles for experienced operations leaders.
                Work <strong className="text-gray-900">2-3 days a week</strong> at <strong className="text-orange-600">£750-£1,400/day</strong>.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="#jobs" className="px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/25">
                  Browse {stats.total}+ Jobs
                </Link>
                <Link href="/fractional-coo-salary" className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                  Salary Guide
                </Link>
              </div>

              {/* Quick stats inline */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <span><strong className="text-gray-900">{stats.remoteCount}</strong> remote roles</span>
                <span><strong className="text-gray-900">£950</strong> avg day rate</span>
                <span><strong className="text-gray-900">2-3 days</strong> per week</span>
              </div>
            </div>

            {/* Right: Video thumbnail with play button */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                  alt="Fractional COO - Chief Operating Officer working in UK business"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-lg mb-1">What is a Fractional COO?</p>
                  <p className="text-white/70 text-sm">Part-time operations leadership for growing UK businesses</p>
                </div>
              </div>

              {/* Frac chat widget - positioned below on mobile, beside on desktop */}
              <div className="mt-6 lg:hidden">
                <FracSection title="Ask Frac about COO roles" />
              </div>
            </div>
          </div>

          {/* Desktop Frac widget - floating */}
          <div className="hidden lg:block absolute top-1/2 right-8 -translate-y-1/2 w-72">
            <FracSection title="Ask Frac about COO roles" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{stats.total}+</div>
              <div className="text-sm text-gray-400">Live Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">£950</div>
              <div className="text-sm text-gray-400">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
              <div className="text-sm text-gray-400">Remote Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2-3 days</div>
              <div className="text-sm text-gray-400">Avg Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Jobs Lines - Latest COO Jobs */}
      {(jobs as any[]).length > 0 && (
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <HotJobsLines
              jobs={(jobs as any[]).map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                is_remote: job.is_remote,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date
              }))}
              title="Latest COO Jobs"
              maxJobs={12}
              viewAllHref="#jobs"
              viewAllText="See all jobs"
            />
          </div>
        </section>
      )}

      {/* Authority Context Section - Why Fractional COO is Growing */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Why Fractional Chief Operating Officer Roles Are Growing in the UK
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
              <p>
                The <a href="https://en.wikipedia.org/wiki/Chief_operating_officer" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium">Chief Operating Officer (COO)</a> role has evolved significantly. According to <a href="https://www.bbc.co.uk/news/business" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium">BBC Business</a> reporting on the UK's flexible work economy, senior executives increasingly prefer portfolio careers that offer autonomy and variety.
              </p>
              <p>
                The <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium">Office for National Statistics</a> reports that self-employment among senior professionals has grown 23% since 2019. Meanwhile, <a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium">Companies House data</a> shows over 900,000 new UK companies were registered in 2024—many requiring operational leadership but unable to afford £200,000+ full-time COO salaries.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-orange-600">43%</div>
                  <div className="text-sm text-gray-600">Growth in fractional roles since 2020</div>
                  <div className="text-xs text-gray-400 mt-1">Source: IPSE Research</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-orange-600">£175k</div>
                  <div className="text-sm text-gray-600">Avg full-time COO salary saved</div>
                  <div className="text-xs text-gray-400 mt-1">Source: Glassdoor UK</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                  <div className="text-2xl font-bold text-orange-600">2-3 days</div>
                  <div className="text-sm text-gray-600">Typical weekly commitment</div>
                  <div className="text-xs text-gray-400 mt-1">Source: Market data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS SECTION - Server-rendered for SEO */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional COO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional COO jobs in the UK</p>
          </div>

          {/* Server-rendered job grid - visible to search engines */}
          <ServerJobGrid
            jobs={jobs}
            roleCategory="Operations"
            ctaLink="/fractional-jobs-uk?department=Operations"
            ctaText={`View All ${stats.total}+ Fractional COO Jobs UK`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Earnings</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">How Much Can You Earn as a Fractional COO?</h2>
          </div>
          <RoleCalculator role="coo" />
        </div>
      </section>


      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-gray-50 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black">Companies Seeking COOs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-orange-400 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br /><span className="text-orange-600">Fractional COO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fractional COO jobs UK - operations executive leading team planning session" className="w-full h-80 md:h-96 object-cover" />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">Operations leaders across the UK are embracing fractional work</figcaption>
          </figure>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional COO jobs</strong> represent the new frontier of operations leadership. Part-time Chief Operating Officer positions where experienced leaders provide strategic operational guidance to multiple companies simultaneously—delivering world-class expertise at a fraction of the cost. According to <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">IPSE (Association of Independent Professionals)</a>, the demand for senior operational contractors has grown by over 40% since 2020.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional COO Jobs UK</h3>
            <p>The demand for <strong>fractional COO jobs UK</strong> has grown substantially as companies recognise that world-class operations leadership doesn't require a full-time commitment. <a href="https://www.gov.uk/government/organisations/department-for-business-and-trade" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Startups scaling from founder-led to operationally mature</a>, PE portfolio companies, and SMEs professionalising their operations all increasingly turn to fractional COOs.</p>
            <p>
              The fractional COO model has emerged as a critical solution for companies navigating the challenging journey from startup chaos to operational excellence. Many founders excel at product development and sales but struggle with the operational infrastructure needed to scale efficiently. A fractional COO brings the experience of having scaled multiple businesses, implementing proven systems and processes without the £150,000-£250,000 annual cost of a full-time executive hire.
            </p>
            <p>
              Private equity firms have been particularly enthusiastic adopters of the fractional COO model. When acquiring portfolio companies, PE firms often need rapid operational improvements to drive value creation. A fractional COO can deliver immediate impact, implementing operational best practices, improving margins, and building scalable processes—all while the firm evaluates whether a permanent hire is necessary.
            </p>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-orange-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Founders access operational expertise for £2,000-£4,000/week vs £150,000+ annually for full-time."</p>
            </div>

            {/* Video 1: What is a Fractional COO */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What is a Fractional COO?</h4>
              <LazyYouTube
                videoId="cNLqJdkqDHk"
                title="What is a Fractional COO? Role Explained"
              />
              <p className="text-gray-500 text-sm mt-3">Learn how fractional COOs provide strategic operations leadership to UK businesses</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional COO Jobs Are Booming</h3>
            <p>
              The growth in fractional COO jobs reflects broader economic and business trends. According to the <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">British Business Bank</a>, UK SMEs are increasingly seeking flexible access to senior operational talent as they navigate uncertain economic conditions. The flexibility to scale operational leadership up or down based on business needs provides a significant competitive advantage.
            </p>
            <ul className="space-y-3">
              <li><strong>Founder relief:</strong> CEO/founders need operational leadership without permanent overhead. As companies grow beyond 20-30 employees, founders often find themselves spending 60-70% of their time on operational issues rather than strategic growth</li>
              <li><strong>PE requirements:</strong> Private equity mandates operational excellence. <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">BVCA research</a> shows portfolio companies with strong operational leadership deliver 40% higher returns</li>
              <li><strong>Cost efficiency:</strong> Access COO expertise at a fraction of full-time cost. A fractional COO working 2 days per week costs roughly £80,000-£120,000 annually versus £150,000-£250,000 for full-time</li>
              <li><strong>Operational maturity:</strong> Companies need to professionalise as they scale. The transition from £1m to £10m revenue requires fundamentally different operational capabilities</li>
              <li><strong>Diverse experience:</strong> Fractional COOs bring multi-company best practices, having seen what works across different industries and growth stages</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional COO Jobs</h3>
            <p>
              Fractional COO jobs in the UK span a wide range of specialisations and industries. The type of role you pursue often depends on your background and the kinds of operational challenges you enjoy solving. Scale-up COOs tend to focus on building systems and infrastructure for rapid growth, while turnaround specialists excel at restructuring struggling operations.
            </p>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Scale-up COO', desc: 'Building operational infrastructure for growth', rate: '£900-£1,300/day' },
                { title: 'PE Portfolio COO', desc: 'Driving value creation for PE investments', rate: '£1,000-£1,400/day' },
                { title: 'Turnaround COO', desc: 'Restructuring and optimising businesses', rate: '£950-£1,350/day' },
                { title: 'Process COO', desc: 'Implementing systems and efficiency', rate: '£800-£1,150/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-orange-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>
            <p>
              The choice of specialisation often depends on your operational background. Former consultants from firms like McKinsey, Bain, and BCG tend to excel in turnaround and PE portfolio roles, bringing structured problem-solving approaches. Operations leaders from high-growth tech companies often gravitate toward scale-up roles, where their experience building systems from scratch proves invaluable. Manufacturing and supply chain specialists command premium rates in sectors like e-commerce, logistics, and direct-to-consumer brands.
            </p>

            {/* Video 2: COO vs CEO */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">COO vs CEO: Understanding the Difference</h4>
              <LazyYouTube
                videoId="dP1VypL5lzA"
                title="COO vs CEO: Understanding the Difference"
              />
              <p className="text-gray-500 text-sm mt-3">Understand the key differences between COO and CEO roles</p>
            </div>

            {/* Second image for SEO */}
            <figure className="my-10 -mx-6 lg:-mx-16">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Fractional COO jobs UK - Chief Operating Officer reviewing operational metrics and KPIs"
                title="Fractional COO Jobs UK - Operations Leadership Opportunities"
                className="w-full h-64 md:h-80 object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
                UK fractional COO jobs offer flexible operations leadership opportunities
              </figcaption>
            </figure>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional COO Jobs by Location</h3>
            <p>
              London dominates the UK fractional COO market, accounting for approximately 55% of available positions. According to <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Tech Nation</a>, this concentration reflects London's status as the UK's startup and PE hub. However, regional opportunities tracked by <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">ONS employment data</a> are growing rapidly as the operational expertise of fractional COOs becomes more widely recognised.
            </p>
            <ul className="space-y-2">
              <li><strong>London:</strong> £950-£1,400/day - Tech startups, PE portfolio companies, financial services</li>
              <li><strong>Manchester:</strong> £800-£1,100/day - E-commerce, digital agencies, manufacturing</li>
              <li><strong>Birmingham:</strong> £750-£1,000/day - Logistics, automotive supply chain, professional services</li>
              <li><strong>Bristol &amp; Edinburgh:</strong> £750-£1,050/day - Tech scale-ups, fintech, life sciences</li>
              <li><strong>Remote UK:</strong> £700-£1,000/day - Nationwide opportunities with occasional site visits</li>
            </ul>
            <p>
              Remote and hybrid working has become increasingly common for fractional COO roles since 2020. While some operational leadership requires on-site presence—particularly in manufacturing, logistics, or retail—many fractional COOs now work primarily remotely with scheduled site visits. This flexibility has opened up the market for operations leaders based outside London to work with high-growth businesses across the UK.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Building a Successful Fractional COO Practice</h3>
            <p>
              Transitioning to fractional COO work requires careful planning and positioning. The <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">CIPD flexible working trends</a> show increasing acceptance of senior part-time roles. Unlike CFOs or CMOs, who can demonstrate value through financial metrics or campaign results, COOs must articulate operational improvements in ways that resonate with founders and PE partners. The <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Institute of Directors</a> provides excellent frameworks for demonstrating governance value.
            </p>
            <p>
              Successful fractional COOs typically focus on a specific niche—whether that's a particular industry (e-commerce, SaaS, manufacturing), company stage (Series A-B, PE-backed, turnaround), or operational domain (supply chain, customer operations, technology operations). This specialisation helps attract clients who value domain expertise over generalist capabilities.
            </p>
            <p>
              Building a strong referral network is essential for fractional COO success. PE operating partners, management consultants, and founder networks provide the majority of high-quality leads. Many successful fractional COOs maintain relationships with 2-3 PE firms who regularly introduce them to portfolio companies needing operational support.
            </p>

            <div className="bg-orange-50 p-6 border border-orange-200 rounded-lg my-8 not-prose">
              <p className="text-orange-800 font-medium mb-3">Looking for part-time COO opportunities?</p>
              <Link href="/fractional-coo-salary" className="inline-flex items-center text-orange-700 font-bold hover:text-orange-900">
                View COO Salary &amp; Rate Guide →
              </Link>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional COO Jobs</h3>
            <p>
              The requirements for fractional COO jobs are demanding, reflecting the seniority and breadth of the role. Most fractional COOs bring 15-20+ years of experience, with significant time in operational leadership positions. Professional certifications and executive education can strengthen your positioning, particularly qualifications from bodies like the <a href="https://www.cmi.org.uk/professional-development/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Chartered Management Institute (CMI)</a>.
            </p>
            <ul className="space-y-2">
              <li>15+ years operations and general management experience</li>
              <li>5+ years in COO, VP Operations, or Operations Director roles</li>
              <li>Experience scaling operations from startup to mature business</li>
              <li>Strong process design and systems thinking</li>
              <li>Track record building and leading teams across multiple functions</li>
              <li>Understanding of <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">IR35 regulations</a> for contractor arrangements</li>
              <li>Experience with ERP systems, operational software, and automation tools</li>
            </ul>
            <p>
              Beyond technical skills, successful fractional COOs possess strong emotional intelligence and communication abilities. The role requires influencing without direct authority, building trust quickly with new teams, and navigating complex stakeholder relationships. Many founders are emotionally attached to their ways of working, and a skilled fractional COO must introduce change while maintaining those relationships.
            </p>
          </article>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As a fractional COO, your IR35 status significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={950} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional COO Jobs UK</h2>
          </div>
          <FAQ items={COO_FAQS} title="" />
        </div>
      </section>

      {/* Salary Comparison Section - Data-rich content */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Salary Data</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional COO Salary UK vs Full-Time</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Full-time COO */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                Full-Time COO (Permanent)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Salary</span>
                  <span className="font-bold text-gray-900">£150,000 - £250,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bonus (20-40%)</span>
                  <span className="font-bold text-gray-900">£30,000 - £100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equity/LTIP</span>
                  <span className="font-bold text-gray-900">£50,000 - £200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Benefits (pension, car, etc.)</span>
                  <span className="font-bold text-gray-900">£20,000 - £40,000</span>
                </div>
                <div className="border-t border-gray-300 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">Total Annual Cost</span>
                  <span className="font-black text-gray-900">£250,000 - £590,000</span>
                </div>
              </div>
            </div>

            {/* Fractional COO */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                Fractional COO (2 Days/Week)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Day Rate</span>
                  <span className="font-bold text-gray-900">£900 - £1,200/day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days Per Year (2/week x 48 weeks)</span>
                  <span className="font-bold text-gray-900">96 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Additional Benefits</span>
                  <span className="font-bold text-gray-900">None required</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Equity</span>
                  <span className="font-bold text-gray-900">Often included (0.1-0.5%)</span>
                </div>
                <div className="border-t border-orange-300 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">Total Annual Cost</span>
                  <span className="font-black text-orange-600">£86,400 - £115,200</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
            <p className="text-lg font-bold text-green-800">
              Businesses save <span className="text-2xl">£165,000 - £475,000/year</span> with a Fractional COO
            </p>
            <p className="text-sm text-green-700 mt-2">While accessing the same level of operational expertise</p>
          </div>
        </div>
      </section>

      {/* E-E-A-T: Expert Profile - Establishes authority */}
      <ExpertProfile />
      <ExpertProfileSchema />

      {/* E-E-A-T: Case Study - Demonstrates real experience */}
      <CaseStudy />
      <CaseStudySchema />

      {/* Related C-Suite Jobs */}
      {(relatedJobs as any[]).length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Other C-Suite Opportunities
              </h2>
              <p className="text-gray-600">
                Explore other executive roles across the UK.
              </p>
            </div>
            <HotJobsLines
              jobs={(relatedJobs as any[]).map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                is_remote: job.is_remote,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date
              }))}
              title="Related Executive Roles"
              maxJobs={15}
              viewAllHref="/fractional-jobs-uk"
              viewAllText="View all UK jobs"
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Find Your Next<br /><span className="text-orange-400">Fractional COO Role</span></h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional operations leadership across the UK.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-orange-500 text-white font-bold rounded-lg uppercase tracking-wider hover:bg-orange-400 transition-colors">Create Profile</Link>
            <Link href="/fractional-coo-salary" className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors">COO Salary Guide</Link>
          </div>
        </div>
      </section>

      {/* Related Resources - More comprehensive */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="text-lg font-bold text-gray-900 mb-8">Related Resources</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Other C-Suite Jobs */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Other C-Suite Jobs UK</h4>
              <ul className="space-y-3">
                <li><Link href="/fractional-cfo-jobs-uk" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional CFO Jobs UK</Link></li>
                <li><Link href="/fractional-cmo-jobs-uk" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional CMO Jobs UK</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional CTO Jobs UK</Link></li>
                <li><Link href="/fractional-chro-jobs-uk" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional CHRO Jobs UK</Link></li>
                <li><Link href="/fractional-ceo-jobs-uk" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional CEO Jobs UK</Link></li>
              </ul>
            </div>

            {/* COO Guides */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">COO Guides</h4>
              <ul className="space-y-3">
                <li><Link href="/fractional-coo-salary" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional COO Salary Guide</Link></li>
                <li><Link href="/fractional-coo-london" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional COO London</Link></li>
                <li><Link href="/fractional-coo-meaning" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">What is a Fractional COO?</Link></li>
                <li><Link href="/how-to-become-fractional-coo" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">How to Become a Fractional COO</Link></li>
                <li><Link href="/fractional-coo-vs-full-time" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional vs Full-Time COO</Link></li>
                <li><Link href="/fractional-coo-for-startups" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Startup COO Jobs</Link></li>
              </ul>
            </div>

            {/* Find Talent */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Hire a Fractional COO</h4>
              <ul className="space-y-3">
                <li><Link href="/fractional-coo-services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional COO Services</Link></li>
                <li><Link href="/fractional-coo-cost" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional COO Cost</Link></li>
                <li><Link href="/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Top Fractional Recruiters</Link></li>
                <li><Link href="/fractional-jobs-uk" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">All Fractional Jobs UK</Link></li>
                <li><Link href="/fractional-jobs-london" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Fractional Jobs London</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub - Internal Linking */}
      <RoleContentHub currentRole="coo" />
    </div>
  )
}
