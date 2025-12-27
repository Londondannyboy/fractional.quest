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
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional DPO Jobs UK | Part-Time Data Protection Officer Roles',
  description: 'Fractional DPO jobs UK - Find part-time Data Protection Officer positions paying £500-£900/day. Browse live DPO roles for experienced privacy professionals. Remote & hybrid available.',
  keywords: 'fractional dpo jobs, fractional data protection officer jobs uk, part time dpo, fractional privacy officer, gdpr consultant jobs, data privacy jobs part time',
  alternates: {
    canonical: 'https://fractional.quest/fractional-dpo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional DPO Jobs UK | Part-Time Data Protection Officer Roles',
    description: 'Fractional DPO jobs UK - Find part-time DPO positions paying £500-£900/day. Remote & hybrid available.',
    images: ['/images/fractional-dpo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-dpo-jobs-uk',
  },
}

async function getDPOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Compliance' OR title ILIKE '%DPO%' OR title ILIKE '%Data Protection%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Compliance' OR title ILIKE '%DPO%' OR title ILIKE '%Data Protection%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 15, remoteCount: 10 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Compliance' OR title ILIKE '%DPO%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getDPOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Compliance' OR title ILIKE '%DPO%' OR title ILIKE '%Data Protection%')
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

const DPO_FAQS = [
  {
    question: 'What is a Fractional DPO?',
    answer: 'A Fractional DPO (Data Protection Officer) is an expert in data privacy laws (specifically GDPR) who fulfils the statutory DPO role for an organisation on an outsourced, part-time basis. They monitor compliance, train staff, and liaise with the ICO.',
  },
  {
    question: 'Is a DPO mandatory?',
    answer: 'Under UK GDPR, appointing a DPO is mandatory for public authorities and organisations whose core activities involve large-scale regular monitoring of individuals or large-scale processing of special categories of data. Many other companies appoint one voluntarily to demonstrate best practice.',
  },
  {
    question: 'How much do Fractional DPO jobs pay?',
    answer: 'Fractional DPO day rates typically range from £500 to £900 per day. Rates reflect the niche expertise and the personal liability involved in the role.',
  },
  {
    question: 'Can a DPO work remotely?',
    answer: 'Yes, the role is heavily documentation and advisory-focused, making it ideal for remote working. However, building relationships with key stakeholders often benefits from some on-site presence.',
  },
]

export default async function FractionalDpoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getDPOStats(),
    getFeaturedCompanies(),
    getDPOJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional DPO Jobs UK | Part-Time Data Protection Officer Roles"
        description="Find part-time DPO positions paying £500-£900/day"
        url="https://fractional.quest/fractional-dpo-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-dpo-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-cyan-900/80 to-blue-950/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('dpo', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Data Privacy
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional DPO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Data Protection Officer roles for privacy experts.
                Ensure GDPR compliance for 1-3 days a week.
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
                <Link href="#jobs" className="px-8 py-4 bg-white text-cyan-950 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-compliance-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Compliance Jobs
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional DPO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional DPO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-cyan-900 to-slate-800">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">DPO</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-cyan-800 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-900 hover:text-cyan-800">
                      View fractional DPO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Compliance"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-950 text-white font-bold rounded-lg hover:bg-cyan-900 transition-colors"
            >
              View All {stats.total}+ Fractional DPO Jobs UK
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
              A Guide to <span className="text-cyan-900">Fractional DPO Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-950"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional DPO jobs</strong> are a statutory necessity for many businesses. Under GDPR, specific organisations <em>must</em> appoint a Data Protection Officer. Hiring a fractional DPO is the most efficient way to meet this requirement without the cost of a full-time specialist.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Independent Oversight</h3>
            <p>
              A key requirement of the DPO role is independence. They must be able to report to the highest management level without conflict of interest. A <strong className="font-semibold">Fractional DPO</strong>, as an external expert, naturally provides this independence. They offer unbiased advice on data protection impact assessments (DPIAs) and breach notifications.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-cyan-950">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional DPOs provide the 'critical friend' perspective that prevents data disasters and builds customer trust."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The DPO's Toolkit</h3>
            <ul className="space-y-3">
              <li><strong>GDPR Knowledge:</strong> Deep understanding of the regulation and evolving case law.</li>
              <li><strong>Technical Awareness:</strong> Ability to understand IT security measures and data flows.</li>
              <li><strong>Communication:</strong> Translating complex legal requirements into practical advice for staff.</li>
              <li><strong>Crisis Management:</strong> Leading the response to data breaches and cyber incidents.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Market Outlook</h3>
            <p>
              With data privacy remaining a top priority for consumers and regulators, the demand for <Link href="/fractional-dpo-jobs-uk" className="text-cyan-900 hover:text-cyan-800 underline">fractional DPOs</Link> is steady and resilient. It is a highly specialised niche with significant responsibility.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Compliance" title="Latest Privacy News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional DPO Jobs</h2>
          </div>
          <FAQ skipSchema={true} items={DPO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-cyan-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-cyan-400">Fractional DPO Role</span></h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking privacy experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-cyan-950 font-bold uppercase tracking-wider hover:bg-cyan-900 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="compliance" /> 
      {/* Mapped to Compliance */}
    </div>
  )
}
