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
  title: 'Fractional Legal Jobs UK: Part-Time Legal Counsel Roles 2025',
  description: 'Fractional Legal jobs UK for experienced lawyers. Part-time Legal Counsel positions paying £600-£1,000/day. Browse live fractional legal jobs and general counsel opportunities across the UK.',
  keywords: 'fractional legal jobs, fractional legal counsel jobs uk, part time legal counsel, fractional lawyer, part time lawyer jobs, freelance legal counsel',
  alternates: {
    canonical: 'https://fractional.quest/fractional-legal-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Legal Jobs UK | Part-Time Legal Counsel Roles',
    description: 'Fractional Legal jobs UK - Find part-time Legal Counsel positions paying £600-£1,000/day. Remote & hybrid available.',
    images: ['/images/fractional-legal-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-legal-jobs-uk',
  },
}

async function getLegalStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Legal' OR title ILIKE '%Legal%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Legal' OR title ILIKE '%Legal%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 24, remoteCount: 9 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Legal' OR title ILIKE '%Legal%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getLegalJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Legal' OR title ILIKE '%Legal%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 20
    `
    return jobs as any[]
  } catch {
    return []
  }
}

async function getRelatedJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 15
    `
    return jobs
  } catch (error) {
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

const LEGAL_FAQS = [
  {
    question: 'What is a Fractional Legal Counsel?',
    answer: 'A Fractional Legal Counsel is a qualified lawyer who supports a business on a part-time basis. They handle a range of legal tasks—from contract review to employment issues—acting as an extension of the team.',
  },
  {
    question: 'How much do Fractional Legal jobs pay?',
    answer: 'Day rates for Fractional Legal Counsel generally range from £600 to £1,000. This is an attractive rate for lawyers seeking work-life balance away from the "billable hour" culture of big firms.',
  },
  {
    question: 'Do I need to be a General Counsel to apply?',
    answer: 'Not necessarily. While many roles are for "Head of Legal" or "GC", there is growing demand for specialist fractional counsel in areas like Employment Law, Intellectual Property, and Data Privacy.',
  },
  {
    question: 'Is remote work common?',
    answer: 'Yes, legal work is highly conducive to remote working. Most fractional legal roles are hybrid or fully remote, with tools like DocuSign and Slack facilitating collaboration.',
  },
]

export default async function FractionalLegalJobsUkPage() {
  const [stats, companies, jobs, relatedJobs] = await Promise.all([
    getLegalStats(),
    getFeaturedCompanies(),
    getLegalJobs(),
    getRelatedJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Legal Jobs UK | Part-Time Legal Counsel Roles"
        description="Find part-time Legal Counsel positions paying £600-£1,000/day"
        url="https://fractional.quest/fractional-legal-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-legal-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80"
            alt="Legal services and law office"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-800/90 via-stone-700/80 to-gray-800/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('legal', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Legal Services
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Legal Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Legal Counsel roles for experienced lawyers.
                Provide expert legal support for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£800</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-stone-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-general-counsel-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  General Counsel Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Job Lines - Visible Immediately */}
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
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date,
                is_remote: job.is_remote,
              }))}
              title="Latest Legal Counsel Jobs"
              maxJobs={12}
              viewAllHref="#jobs"
              viewAllText="See all legal jobs"
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
          <RoleCalculator role="cfo" />
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Legal Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional legal jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-stone-600 to-gray-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">LEGAL</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-stone-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-600 hover:text-stone-700">
                      View fractional legal job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Legal"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-700 text-white font-bold rounded-lg hover:bg-stone-800 transition-colors"
            >
              View All {stats.total}+ Fractional Legal Jobs UK
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
              A Guide to <span className="text-stone-600">Fractional Legal Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-stone-700"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Legal jobs</strong> cover a broad spectrum of roles, from specialist counsel to interim legal management. They offer qualified lawyers a way to work with innovative companies without leaving the law, providing the variety of consulting with the impact of an in-house role.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Beyond the Billable Hour</h3>
            <p>
              The traditional law firm model is under pressure. <strong className="font-semibold">Fractional legal roles</strong> are the antidote. Instead of chasing six-minute units, fractional lawyers work on a retainer or day-rate basis, allowing them to focus on outcomes rather than inputs. This model is attractive to startups who need clear, predictable legal costs.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-stone-700">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional lawyers bring the precision of private practice to the dynamic world of startups and scale-ups."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Common Use Cases</h3>
            <ul className="space-y-3">
              <li><strong>Commercial Support:</strong> Clearing the backlog of NDAs, MSAs, and SaaS agreements.</li>
              <li><strong>Employment Law:</strong> Guiding HR teams through restructuring, hiring, and policy updates.</li>
              <li><strong>IP Protection:</strong> Managing trademark portfolios and patent filings.</li>
              <li><strong>Corporate:</strong> Preparing for fundraising, managing cap tables, and investor relations.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">A Growing Ecosystem</h3>
            <p>
              Platforms and communities for <Link href="/fractional-legal-jobs-uk" className="text-stone-600 hover:text-stone-800 underline">fractional lawyers</Link> are springing up, validating this career path. It's no longer just "between jobs"; it's a deliberate lifestyle choice for senior legal talent.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Compliance" title="Latest Legal News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional Legal Jobs</h2>
          </div>
          <FAQ items={LEGAL_FAQS} title="" />
        </div>
      </section>

      {/* Related Jobs Section */}
      {(relatedJobs as any[]).length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                More Fractional Jobs Across the UK
              </h2>
              <p className="text-gray-600">
                Explore other fractional executive opportunities.
              </p>
            </div>
            <HotJobsLines
              jobs={(relatedJobs as any[]).map(job => ({
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-stone-400">Fractional Legal Role</span></h2>
          <p className="text-xl text-stone-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking legal expertise.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-stone-800 font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="compliance" /> 
      {/* Mapped to Compliance/Legal */}
    </div>
  )
}
