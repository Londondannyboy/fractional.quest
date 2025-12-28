import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Sales Director Jobs UK 2025',
  description: 'Fractional Sales Director jobs UK. Part-time positions £600-£1,000/day. Remote & hybrid.',
  keywords: 'fractional sales director jobs, fractional sales jobs uk, part time sales director, fractional sales leadership, part time sales jobs, freelance sales director',
  alternates: {
    canonical: 'https://fractional.quest/fractional-sales-director-jobs-uk',
  },
  openGraph: {
    title: 'Sales Director Jobs UK 2025',
    description: 'Fractional Sales Director jobs UK. Part-time positions £600-£1,000/day.',
    images: ['/images/fractional-sales-director-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-sales-director-jobs-uk',
  },
}

async function getSalesStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Sales Director%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Sales Director%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 40, remoteCount: 15 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Sales Director%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getSalesJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Sales Director%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 20
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

const SALES_FAQS = [
  {
    question: 'What is a Fractional Sales Director?',
    answer: 'A Fractional Sales Director is an experienced sales leader who manages a sales team and strategy on a part-time basis. They bring structure, training, and accountability to the sales function without the cost of a full-time hire.',
  },
  {
    question: 'How much do Fractional Sales Director jobs pay?',
    answer: 'Fractional Sales Director day rates in the UK typically range from £600 to £1,000. Rates can be higher if there is a significant performance element (commission) attached to the role.',
  },
  {
    question: 'Why hire a Fractional Sales Director?',
    answer: 'Many SMEs have a junior sales team but no one to manage them. A Fractional Sales Director provides the leadership, coaching, and pipeline discipline needed to turn potential into revenue.',
  },
  {
    question: 'Is this role different from a CRO?',
    answer: 'Yes. A CRO (Chief Revenue Officer) looks at the whole revenue picture including marketing and retention. A Sales Director is typically focused purely on "new business" and managing the sales team\'s performance.',
  },
]

export default async function FractionalSalesDirectorJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getSalesStats(),
    getFeaturedCompanies(),
    getSalesJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Sales Director Jobs UK | Part-Time Sales Roles"
        description="Find part-time Sales Director positions paying £600-£1,000/day. Remote & hybrid available."
        url="https://fractional.quest/fractional-sales-director-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/90 via-green-600/80 to-teal-700/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Sales Management
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Sales Director Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Sales Director roles for experienced sales leaders.
                Manage teams and drive revenue for 2-3 days a week.
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
                <Link href="#jobs" className="px-8 py-4 bg-white text-green-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-cro-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CRO Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Sales Director Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional sales director jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-green-600 to-emerald-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">SALES</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700">
                      View fractional sales director job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Sales"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-colors"
            >
              View All {stats.total}+ Fractional Sales Director Jobs UK
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
              A Guide to <span className="text-green-600">Fractional Sales Director Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-green-700"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Sales Director jobs</strong> are for leaders who know how to build and motivate teams. It's about taking the founder out of the day-to-day sales management role and installing professional rigour.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Pipeline Discipline</h3>
            <p>
              The most common problem in SME sales is a lack of discipline. Pipelines are full of hope, not reality. A <strong className="font-semibold">Fractional Sales Director</strong> cleans this up. They implement CRM standards, hold weekly pipeline reviews, and ensure that every deal is qualified. This predictability is worth its weight in gold to a business owner.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-green-700">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional Sales Directors turn sales from an art form into a science, creating predictable revenue streams."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Coaching & Development</h3>
            <p>
              Often, sales teams are made up of junior talent with high potential but low experience. A fractional leader spends time listening to calls, joining meetings, and coaching reps to improve their close rates. It's hands-on leadership that drives immediate results.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Flexibility for Growth</h3>
            <p>
              Hiring a £120k Sales Director is a big risk for a £2m turnover company. Hiring a <Link href="/fractional-sales-director-jobs-uk" className="text-green-600 hover:text-green-800 underline">fractional sales leader</Link> for £4k a month is a much lower risk with potentially higher ROI. It allows companies to punch above their weight in the talent market.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Sales" title="Latest Sales News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional Sales Director Jobs</h2>
          </div>
          <FAQ items={SALES_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Your Next<br />
            <span className="text-green-100">Fractional Sales Role</span>
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking sales leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-green-800 font-bold uppercase tracking-wider hover:bg-green-700 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="cmo" /> 
      {/* Mapped to CMO/Sales */}
    </div>
  )
}
