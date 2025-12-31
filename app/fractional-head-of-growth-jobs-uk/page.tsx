import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { RoleCalculator } from '@/components/RoleCalculator'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Head of Growth Jobs UK: Growth Director Roles 2025',
  description: 'Fractional Head of Growth jobs UK for experienced growth leaders. Part-time Growth Director positions paying £700-£1,200/day. Browse live fractional growth jobs and marketing leadership opportunities across the UK.',
  keywords: 'fractional head of growth jobs, fractional growth director jobs uk, part time head of growth, fractional growth jobs, growth marketing jobs part time, fractional growth marketing',
  alternates: {
    canonical: 'https://fractional.quest/fractional-head-of-growth-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Head of Growth Jobs UK | Part-Time Growth Roles',
    description: 'Fractional Head of Growth jobs UK - Find part-time Growth Director positions paying £700-£1,200/day. Remote & hybrid available.',
    images: ['/images/fractional-head-of-growth-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-head-of-growth-jobs-uk',
  },
}

async function getGrowthStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Marketing' OR title ILIKE '%Growth%') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%') AND title NOT ILIKE '%interim%'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Marketing' OR title ILIKE '%Growth%') AND (is_remote = true OR workplace_type = 'Remote') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%') AND title NOT ILIKE '%interim%'`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 30, remoteCount: 12 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Marketing' OR title ILIKE '%Growth%') AND company_name IS NOT NULL AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%') AND title NOT ILIKE '%interim%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getGrowthJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Marketing' OR title ILIKE '%Growth%') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%') AND title NOT ILIKE '%interim%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 20
    `
    return jobs as any[]
  } catch {
    return []
  }
}

// Get related jobs from other categories
async function getRelatedJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote,
        compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND role_category NOT IN ('Marketing')
        AND title NOT ILIKE '%Growth%'
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
        AND title NOT ILIKE '%interim%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 15
    `
    return jobs as any[]
  } catch {
    return []
  }
}

function getDaysAgo(postedDate: string | null): number | undefined {
  if (!postedDate) return undefined
  const posted = new Date(postedDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - posted.getTime())
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
}

const GROWTH_FAQS = [
  {
    question: 'What is a Fractional Head of Growth?',
    answer: 'A Fractional Head of Growth is an experienced marketing and product leader who focuses on user acquisition, retention, and monetisation. They run experiments, optimise funnels, and align marketing with product to drive rapid growth, working part-time for high-potential startups.',
  },
  {
    question: 'How much do Fractional Head of Growth jobs pay?',
    answer: 'Day rates in the UK typically range from £700 to £1,200. These roles often include performance bonuses or equity options tied to growth targets (e.g., hitting a specific ARR milestone).',
  },
  {
    question: 'Head of Growth vs CMO - what\'s the difference?',
    answer: 'A CMO (Chief Marketing Officer) covers brand, PR, comms, and broader strategy. A Head of Growth is laser-focused on metrics: acquisition cost (CAC), lifetime value (LTV), and churn. Growth roles sit at the intersection of marketing, product, and data.',
  },
  {
    question: 'When should a startup hire a Fractional Head of Growth?',
    answer: 'Usually after Product-Market Fit (PMF) has been established. Once you have a product people love, you need a Growth leader to find the scalable channels to reach more of them.',
  },
]

export default async function FractionalHeadOfGrowthJobsUkPage() {
  const [stats, companies, jobs, relatedJobs] = await Promise.all([
    getGrowthStats(),
    getFeaturedCompanies(),
    getGrowthJobs(),
    getRelatedJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Head of Growth Jobs UK | Part-Time Growth Roles"
        description="Find part-time Growth Director positions paying £700-£1,200/day"
        url="https://fractional.quest/fractional-head-of-growth-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Fractional Head of Growth Jobs UK hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-orange-500/80 to-red-600/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Growth Marketing
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Head of Growth Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Growth Director roles for experienced marketers.
                Scale user acquisition and retention for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£950</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-orange-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-cmo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CMO Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Job Lines - Visible Immediately */}
      {jobs.length > 0 && (
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <HotJobsLines
              jobs={jobs.map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date,
                is_remote: job.is_remote,
              }))}
              title="Latest Fractional Growth Jobs"
              maxJobs={12}
              viewAllHref="#jobs"
              viewAllText="See all jobs"
            />
          </div>
        </section>
      )}

      {/* Calculator */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Earnings Calculator</h2>
          </div>
          <RoleCalculator role="cmo" />
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Growth Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional growth jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-orange-500 to-red-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">GROWTH</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 font-medium mb-2">{job.company_name}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        UK
                      </span>
                      {job.compensation && (
                        <span className="font-semibold text-gray-900">{job.compensation}</span>
                      )}
                    </div>
                     {job.description_snippet && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{job.description_snippet}</p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700">
                      View fractional growth job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Marketing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
            >
              View All {stats.total}+ Fractional Growth Jobs UK
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              A Guide to <span className="text-orange-600">Fractional Growth Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Head of Growth jobs</strong> are designed for marketers who obsess over metrics. Unlike traditional brand marketers, growth leaders use experimentation, data, and engineering to unlock scalable channels for acquisition and retention.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Science of Scaling</h3>
            <p>
              Startups don\'t just \"grow\" by accident. A <strong className="font-semibold">Fractional Head of Growth</strong> brings a scientific approach to scaling. They test channels (paid, organic, viral loops), optimise conversion rates, and focus on the entire funnel—not just top-of-funnel awareness. For companies post-product-market fit, this role is the catalyst for rapid expansion.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-orange-600">
              <p className="text-xl font-semibold text-gray-900 mb-0">\"Growth isn\'t magic; it\'s a process. Fractional growth leaders install the experimentation engine that makes scaling inevitable.\"</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Core Competencies</h3>
            <ul className="space-y-3">
              <li><strong>Experimentation:</strong> Running high-velocity tests to identify what works.</li>
              <li><strong>Performance Marketing:</strong> Managing paid spend on Google, Meta, and LinkedIn with a focus on ROAS.</li>
              <li><strong>Product-Led Growth (PLG):</strong> Working with product teams to build virality and retention triggers into the product itself.</li>
              <li><strong>Data Analytics:</strong> Deep diving into cohort analysis and funnel metrics to plug leaks.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional?</h3>
            <p>
              Good growth talent is incredibly expensive. A full-time Head of Growth can cost £120k-£180k. By hiring a <Link href="/fractional-head-of-growth-jobs-uk" className="text-orange-600 hover:text-orange-800 underline">fractional growth expert</Link>, startups get the strategy and systems setup for a fraction of the cost, often transitioning to a full-time junior hire to execute the playbook once it\'s established.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Marketing" title="Latest Growth Marketing News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional Growth Jobs</h2>
          </div>
          <FAQ items={GROWTH_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Your Next<br /><span className="text-orange-100">Fractional Growth Role</span></h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking growth leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-orange-600 font-bold uppercase tracking-wider hover:bg-orange-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      {/* Related Jobs Section */}
      {relatedJobs.length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                More Fractional Jobs Across the UK
              </h2>
              <p className="text-gray-600">
                Explore other fractional executive opportunities
              </p>
            </div>
            <HotJobsLines
              jobs={relatedJobs.map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date,
                is_remote: job.is_remote,
              }))}
              title="Related Opportunities"
              maxJobs={15}
              viewAllHref="/fractional-jobs-uk"
              viewAllText="View all UK jobs"
            />
          </div>
        </section>
      )}

      <RoleContentHub currentRole="cmo" />
      {/* Mapped to CMO/Marketing */}
    </div>
  )
}
