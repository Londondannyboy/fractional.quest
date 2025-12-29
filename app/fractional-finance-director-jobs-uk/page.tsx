import { Metadata } from 'next'
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

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Finance Director Jobs UK: Part-Time FD Roles 2025',
  description: 'Fractional Finance Director jobs UK for experienced finance leaders. Part-time FD positions paying £600-£1,000/day. Browse live fractional FD jobs and finance leadership opportunities across the UK.',
  keywords: 'fractional finance director jobs, fractional fd jobs, fractional fd jobs uk, part time finance director, fractional fd roles, part time fd jobs, finance director part time, fractional fd, fd jobs uk',
  alternates: {
    canonical: 'https://fractional.quest/fractional-finance-director-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Finance Director Jobs | Fractional FD Jobs UK',
    description: 'Fractional finance director jobs - Find fractional FD jobs paying £600-£1,000/day. Remote & hybrid available.',
    images: ['/images/fractional-finance-director-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-finance-director-jobs-uk',
  },
}

async function getFDStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Finance' OR title ILIKE '%Finance Director%' OR title ILIKE '%FD%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Finance' OR title ILIKE '%Finance Director%' OR title ILIKE '%FD%') AND (is_remote = true OR workplace_type = 'Remote')`
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
      WHERE is_active = true AND (role_category = 'Finance' OR title ILIKE '%Finance Director%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getFDJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Finance' OR title ILIKE '%Finance Director%' OR title ILIKE '%FD%')
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

const FD_FAQS = [
  {
    question: 'What is a Fractional Finance Director?',
    answer: 'A Fractional Finance Director (FD) is an experienced finance leader who manages the financial operations of a company part-time. They oversee reporting, cash flow, compliance, and the finance team, providing steady leadership without the cost of a full-time hire.',
  },
  {
    question: 'How much do Fractional FD jobs pay in the UK?',
    answer: 'Fractional FD day rates in the UK generally range from £600 to £1,000 per day. This is often slightly lower than a Fractional CFO rate, reflecting the more operational nature of the role.',
  },
  {
    question: 'What is the difference between a Fractional FD and a Fractional CFO?',
    answer: 'In the UK, an FD is typically more internally focused on operations, controls, and reporting. A CFO is more strategic, focused on fundraising, M&A, and investor relations. Many SMEs hire a Fractional FD first, then upgrade to a CFO as they prepare for major growth or investment.',
  },
  {
    question: 'What qualifications are required?',
    answer: 'Almost all Fractional FD roles require a recognised accountancy qualification (ACA, ACCA, CIMA) and significant post-qualification experience, often including prior FD roles in relevant industries.',
  },
]

export default async function FractionalFinanceDirectorJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getFDStats(),
    getFeaturedCompanies(),
    getFDJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Finance Director Jobs | Fractional FD Jobs UK"
        description="Find fractional FD jobs paying £600-£1,000/day. Part-time Finance Director roles for experienced finance leaders."
        url="https://fractional.quest/fractional-finance-director-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-finance-director-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 via-blue-700/80 to-sky-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('fd', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Operational Finance
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Finance Director Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Finance Director roles for experienced finance leaders.
                Manage financial operations and reporting for 2-3 days a week.
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
                <Link href="#jobs" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-cfo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CFO Jobs
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
          <RoleCalculator role="cfo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional FD Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional FD jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-blue-700 to-sky-800">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">FD</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800 hover:text-blue-900">
                      View fractional FD job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Finance"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors"
            >
              View All {stats.total}+ Fractional FD Jobs UK
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
              A Guide to <span className="text-blue-800">Fractional FD Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-blue-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Finance Director jobs</strong> are a staple of the UK SME market. While startups often chase the title of "CFO," many established businesses need the operational rigour, control, and reporting focus of a classic Finance Director—delivered on a flexible, part-time basis.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Operational Finance Leadership</h3>
            <p>
              A <strong className="font-semibold">Fractional FD</strong> is the safe pair of hands every growing business needs. They professionalise the finance function, ensuring that management accounts are accurate, cash flow is forecasted, and the business is compliant with HMRC. Unlike a CFO who might spend time pitching to investors, an FD spends time ensuring the business engine is running smoothly.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-800">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional FDs bring Big 4 discipline to SMEs, implementing the controls and reporting that allow owners to sleep at night."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              <li><strong>Financial Reporting:</strong> Producing timely, accurate monthly management packs for the board.</li>
              <li><strong>Cash Management:</strong> detailed 13-week cash flow forecasting and working capital optimisation.</li>
              <li><strong>Compliance:</strong> Overseeing VAT, payroll, annual accounts, and audit relationships.</li>
              <li><strong>Team Management:</strong> Mentoring bookkeepers and finance assistants.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Who Hires Fractional FDs?</h3>
            <p>
              This is perhaps the broadest market. Manufacturing, Logistics, Construction, and Professional Services firms all heavily rely on <Link href="/fractional-finance-director-jobs-uk" className="text-blue-800 hover:text-blue-900 underline">fractional finance directors</Link>. Any business with £2m-£20m turnover that is too complex for a bookkeeper but too small for a full-time FD is a potential client.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Finance" title="Latest Finance News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional FD Jobs</h2>
          </div>
          <FAQ items={FD_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-blue-400">Fractional FD Role</span></h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking finance leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-blue-800 font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="cfo" /> 
      {/* Mapped to CFO */}
    </div>
  )
}
