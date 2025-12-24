import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CDO Jobs UK | Part-Time Chief Data Officer Roles',
  description: 'Fractional CDO jobs UK - Find part-time Chief Data Officer positions paying £900-£1,500/day. Browse live CDO roles for experienced data leaders. Remote & hybrid available.',
  keywords: 'fractional cdo jobs, fractional cdo jobs uk, part time cdo, part-time chief data officer, cdo part time, fractional cdo opportunities, fractional data jobs, head of data part time',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cdo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CDO Jobs UK | Part-Time Chief Data Officer Roles',
    description: 'Fractional CDO jobs UK - Find part-time CDO positions paying £900-£1,500/day. Remote & hybrid available.',
    images: ['/images/fractional-cdo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cdo-jobs-uk',
  },
}

async function getCDOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%CDO%' OR title ILIKE '%Chief Data%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%CDO%' OR title ILIKE '%Chief Data%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 18, remoteCount: 8 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%CDO%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCDOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%CDO%' OR title ILIKE '%Chief Data%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 12
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

const CDO_FAQS = [
  {
    question: 'What is a Fractional CDO?',
    answer: 'A Fractional CDO (Chief Data Officer) is an experienced data executive who helps companies define their data strategy, governance, and architecture on a part-time basis. They enable organisations to become data-driven without the cost of a full-time hire.',
  },
  {
    question: 'How much do Fractional CDO jobs pay in the UK?',
    answer: 'Fractional CDO day rates in the UK are high, typically ranging from £900 to £1,500 per day. Demand is driven by the need for AI readiness and complex data compliance (GDPR) strategies.',
  },
  {
    question: 'Why hire a Fractional CDO?',
    answer: 'Companies hire Fractional CDOs to unlock the value of their data. This includes setting up modern data stacks, ensuring regulatory compliance, preparing for AI/ML initiatives, and bridging the gap between technical teams and business leadership.',
  },
  {
    question: 'What industries need Fractional CDOs?',
    answer: 'FinTech, Insurance, Healthcare, and E-commerce are the biggest employers of Fractional CDOs due to the volume and sensitivity of the data they handle. However, any company seeking to leverage AI is a potential client.',
  },
]

export default async function FractionalCdoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCDOStats(),
    getFeaturedCompanies(),
    getCDOJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cdo-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/80 to-blue-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cdo', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Data Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CDO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Data Officer roles for experienced data leaders.
                Lead data strategy and AI readiness for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,200</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-head-of-ai-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  AI Jobs
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
          <RoleCalculator role="cto" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CDO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CDO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-teal-600 to-blue-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CDO</div>
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
                      View fractional CDO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Data"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors"
            >
              View All {stats.total}+ Fractional CDO Jobs UK
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
              A Guide to <span className="text-teal-600">Fractional CDO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-teal-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CDO jobs</strong> are amongst the fastest-growing executive roles in the UK. As data becomes the lifeblood of modern business, part-time Chief Data Officers provide the critical governance, strategy, and architecture needed to harness it effectively—without the full-time cost.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Strategic Value of a Fractional CDO</h3>
            <p>
              For many mid-sized companies, hiring a full-time CDO (£180k-£250k) is prohibitive. Yet, the need for data leadership is acute. A <strong className="font-semibold">Fractional CDO</strong> steps in to turn messy data into a strategic asset. They implement modern data stacks, establish single sources of truth, and prepare organisations for the AI revolution.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-teal-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"The Fractional CDO is the architect of the AI-ready enterprise, ensuring data is clean, compliant, and accessible."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Core Focus Areas</h3>
            <ul className="space-y-3">
              <li><strong>Data Strategy:</strong> Creating a roadmap that aligns data initiatives with business goals (e.g., reducing churn, optimising pricing).</li>
              <li><strong>Governance & Compliance:</strong> Ensuring robust GDPR compliance and data ethics frameworks are in place.</li>
              <li><strong>Architecture:</strong> Overseeing the selection and implementation of data warehouses (Snowflake, BigQuery) and BI tools.</li>
              <li><strong>AI & ML Readiness:</strong> assessing data quality and infrastructure to support future Artificial Intelligence projects.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Who Hires Fractional CDOs?</h3>
            <p>
              <Link href="/fractional-cdo-jobs-uk" className="text-teal-600 hover:text-teal-800 underline">Fractional CDO roles</Link> are common in private equity-backed firms looking to maximise valuation through better data assets. They are also prevalent in FinTech and HealthTech scale-ups where data integrity is not just an advantage, but a regulatory requirement.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Engineering" title="Latest Data & Tech News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CDO Jobs</h2>
          </div>
          <FAQ items={CDO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-teal-400">Fractional CDO Role</span></h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking data leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-teal-900 font-bold uppercase tracking-wider hover:bg-teal-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>
      
       <RoleContentHub currentRole="cto" /> 
    </div>
  )
}
