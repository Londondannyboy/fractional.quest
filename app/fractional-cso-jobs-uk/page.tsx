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
  title: 'Fractional CSO Jobs UK: Chief Sales Officer Roles 2025',
  description: 'Fractional CSO jobs UK for experienced sales leaders. Part-time Chief Sales Officer positions paying £1,000-£1,600/day. Browse live fractional CSO jobs and sales leadership opportunities across the UK.',
  keywords: 'fractional cso jobs, fractional cso jobs uk, part time chief sales officer, fractional sales jobs, cso part time, fractional sales director, fractional sales leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cso-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CSO Jobs UK | Part-Time Chief Sales Officer Roles',
    description: 'Fractional CSO jobs UK - Find part-time CSO positions paying £1,000-£1,600/day. Remote & hybrid available.',
    images: ['/images/fractional-cso-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cso-jobs-uk',
  },
}

async function getCSOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%CSO%' OR title ILIKE '%Chief Sales%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%CSO%' OR title ILIKE '%Chief Sales%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 35, remoteCount: 12 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Sales' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCSOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date,
        hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%CSO%' OR title ILIKE '%Chief Sales%')
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

const CSO_FAQS = [
  {
    question: 'What is a Fractional CSO?',
    answer: 'A Fractional CSO (Chief Sales Officer) is an experienced sales leader who works with companies part-time to overhaul their sales strategy, manage the sales team, and drive revenue growth. They provide the leadership of a seasoned sales veteran at a fraction of the cost.',
  },
  {
    question: 'How much do Fractional CSO jobs pay in the UK?',
    answer: 'Fractional CSO day rates typically range from £1,000 to £1,600 per day. Compensation often includes a performance-based component (commission or equity) tied to revenue targets.',
  },
  {
    question: 'Fractional CSO vs Fractional CRO - what\'s the difference?',
    answer: 'A CSO is laser-focused on the sales function: closing deals, managing reps, and hitting quotas. A CRO (Chief Revenue Officer) has a broader remit that includes Marketing and Customer Success. In smaller companies, the roles are often interchangeable.',
  },
  {
    question: 'When should a startup hire a Fractional CSO?',
    answer: 'When the founder can no longer lead sales alone, or when the existing sales team is underperforming due to lack of leadership. A Fractional CSO can professionalise the sales process and hire the right full-time talent.',
  },
]

export default async function FractionalCsoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCSOStats(),
    getFeaturedCompanies(),
    getCSOJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CSO Jobs UK | Part-Time Chief Sales Officer Roles"
        description="Find part-time CSO positions paying £1,000-£1,600/day"
        url="https://fractional.quest/fractional-cso-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cso-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 via-green-700/80 to-lime-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cso', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Sales Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CSO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Sales Officer roles for experienced sales leaders.
                Drive revenue and manage sales teams for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,300</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-green-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CSO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CSO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-green-600 to-lime-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CSO</div>
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
                      View fractional CSO job →
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
              View All {stats.total}+ Fractional CSO Jobs UK
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
              A Guide to <span className="text-green-600">Fractional CSO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-green-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CSO jobs</strong> involve more than just "hitting the phones." A part-time Chief Sales Officer builds the entire sales infrastructure—from hiring and compensation plans to pipeline management and deal strategy—enabling companies to scale revenue sustainably.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Building High-Performance Sales Teams</h3>
            <p>
              Founders often struggle to transition from "founder-led sales" to a professional sales team. A <strong className="font-semibold">Fractional CSO</strong> manages this transition. They bring the playbooks, the training, and the accountability needed to turn a group of reps into a high-performance unit, all for a fraction of the cost of a full-time leader.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-green-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"The Fractional CSO role is about installing a repeatable, scalable sales process that works even when the founder isn't in the room."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              <li><strong>Sales Strategy:</strong> Defining target markets, ideal customer profiles (ICPs), and value propositions.</li>
              <li><strong>Team Management:</strong> Hiring, onboarding, coaching, and managing the performance of sales representatives.</li>
              <li><strong>Pipeline Rigour:</strong> Implementing strict qualification criteria (e.g., MEDDIC) to ensure accurate forecasting.</li>
              <li><strong>Incentive Design:</strong> Creating commission structures that drive the right behaviours.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The UK Market</h3>
            <p>
              <Link href="/fractional-cso-jobs-uk" className="text-green-600 hover:text-green-800 underline">Fractional sales leadership</Link> is in high demand across the UK, particularly in B2B SaaS and professional services. As companies look to grow efficiently, the ability to hire a veteran sales leader on a flexible basis is a game-changer.
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CSO Jobs</h2>
          </div>
          <FAQ items={CSO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-green-400">Fractional CSO Role</span></h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking sales leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-green-900 font-bold uppercase tracking-wider hover:bg-green-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="cmo" /> 
      {/* Mapped to CMO/Sales */}
    </div>
  )
}
