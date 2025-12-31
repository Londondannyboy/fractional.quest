import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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
  title: 'Fractional Business Development Jobs UK: Part-Time BD Roles 2025',
  description: 'Fractional Business Development jobs UK for experienced BD professionals. Part-time Business Development positions paying £500-£900/day. Browse live fractional BD jobs and partnerships opportunities across the UK.',
  keywords: 'fractional business development jobs, fractional bd jobs uk, part time business development, fractional partnerships jobs, part time bd jobs, freelance business development',
  alternates: {
    canonical: 'https://fractional.quest/fractional-business-development-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Business Development Jobs UK | Part-Time BD Roles',
    description: 'Fractional Business Development jobs UK - Find part-time BD positions paying £500-£900/day. Remote & hybrid available.',
    images: ['/images/fractional-business-development-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-business-development-jobs-uk',
  },
}

async function getBDStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Business Development%' OR title ILIKE '%BD%' OR title ILIKE '%Partnerships%') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Business Development%' OR title ILIKE '%BD%' OR title ILIKE '%Partnerships%') AND (is_remote = true OR workplace_type = 'Remote') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 35, remoteCount: 15 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Business Development%') AND company_name IS NOT NULL
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getBDJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Business Development%' OR title ILIKE '%BD%' OR title ILIKE '%Partnerships%')
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
        AND role_category NOT IN ('Sales')
        AND title NOT ILIKE '%Business Development%'
        AND title NOT ILIKE '%BD%'
        AND title NOT ILIKE '%interim%'
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
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

const BD_FAQS = [
  {
    question: 'What is a Fractional BD Director?',
    answer: 'A Fractional Business Development Director focuses on strategic partnerships, new market entry, and large-scale deal making. Unlike direct sales, BD is often about opening doors and creating channels for future revenue.',
  },
  {
    question: 'How much do Fractional BD jobs pay?',
    answer: 'Day rates typically range from £500 to £900. BD roles often have a longer lead time than direct sales, so the compensation structure may rely more on a retainer than immediate commission.',
  },
  {
    question: 'What industries hire Fractional BDs?',
    answer: 'Tech (SaaS partnerships), Professional Services (introducer networks), and Media/Agencies are big users of fractional BD talent. It\'s about leveraging an existing network to create value.',
  },
  {
    question: 'Is this the same as Lead Generation?',
    answer: 'No. While lead gen is a part of it, BD is more strategic. It involves negotiating complex agreements, setting up reseller programmes, or finding white-label opportunities.',
  },
]

export default async function FractionalBusinessDevelopmentJobsUkPage() {
  const [stats, companies, jobs, relatedJobs] = await Promise.all([
    getBDStats(),
    getFeaturedCompanies(),
    getBDJobs(),
    getRelatedJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Business Development Jobs UK | Part-Time BD Roles"
        description="Find part-time BD positions paying £500-£900/day"
        url="https://fractional.quest/fractional-business-development-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1920&q=80"
            alt="Fractional Business Development jobs UK hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700/90 via-teal-600/80 to-green-700/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Strategic Partnerships
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Business Development Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time BD roles for experienced dealmakers.
                Build partnerships and open new markets for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£700</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-teal-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-sales-director-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Sales Jobs
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
              title="Latest Fractional BD Jobs"
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional BD Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional business development jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-teal-500 to-green-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">BD</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700">
                      View fractional BD job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Sales"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 text-white font-bold rounded-lg hover:bg-teal-800 transition-colors"
            >
              View All {stats.total}+ Fractional BD Jobs UK
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
              A Guide to <span className="text-teal-600">Fractional Business Development Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-teal-700"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Business Development jobs</strong> are for the connectors, the networkers, and the dealmakers. Unlike sales, which is transactional, business development is about long-term value creation through partnerships and strategic alliances.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Leveraging Your Network</h3>
            <p>
              A <strong className="font-semibold">Fractional BD Director</strong> is often hired for who they know as much as what they know. Senior professionals with deep contacts in a specific industry (e.g., Banking, Retail, Government) can open doors that a cold call never could. This access is incredibly valuable to startups trying to break into established markets.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-teal-700">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional BD roles allow you to monetise your professional network by connecting innovative solutions with the buyers who need them."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Strategic Focus</h3>
            <p>
              The role often involves exploring new revenue models. Can we white-label our tech? Can we partner with a distributor? Can we enter a new geography? Fractional BDs do the legwork to validate these hypotheses without the company committing to a full-time hire.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">A High-Impact Role</h3>
            <p>
              Because <Link href="/fractional-business-development-jobs-uk" className="text-teal-600 hover:text-teal-800 underline">fractional BD</Link> is output-focused, it offers great flexibility. It's not about hours at a desk; it's about meetings, introductions, and signed agreements.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Sales" title="Latest BD News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional BD Jobs</h2>
          </div>
          <FAQ items={BD_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Your Next<br /><span className="text-teal-100">Fractional BD Role</span></h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking strategic partners.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-teal-800 font-bold uppercase tracking-wider hover:bg-teal-700 transition-colors">Create Profile</Link>
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
      {/* Mapped to CMO/Sales */}
    </div>
  )
}
