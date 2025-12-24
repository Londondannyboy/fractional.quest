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
  title: 'Fractional Managing Director Jobs UK | Part-Time MD Roles',
  description: 'Fractional Managing Director jobs UK - Find part-time MD positions paying £800-£1,500/day. Browse live Managing Director roles for experienced business leaders. Remote & hybrid available.',
  keywords: 'fractional managing director jobs, fractional md jobs uk, part time managing director, fractional md roles, part time md jobs, fractional general management jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-managing-director-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Managing Director Jobs UK | Part-Time MD Roles',
    description: 'Fractional Managing Director jobs UK - Find part-time MD positions paying £800-£1,500/day. Remote & hybrid available.',
    images: ['/images/fractional-managing-director-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-managing-director-jobs-uk',
  },
}

async function getMDStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Managing Director%' OR title ILIKE '%MD%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Managing Director%' OR title ILIKE '%MD%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 22, remoteCount: 8 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Managing Director%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getMDJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Managing Director%' OR title ILIKE '%MD%')
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

const MD_FAQS = [
  {
    question: 'What is a Fractional Managing Director?',
    answer: 'A Fractional Managing Director (MD) is an experienced business leader who runs a company or division on a part-time basis. They provide overall strategic direction, P&L management, and operational oversight, often filling a gap during a turnaround or transition.',
  },
  {
    question: 'How much do Fractional MD jobs pay in the UK?',
    answer: 'Fractional MD day rates in the UK range from £800 to £1,500 per day. Rates depend heavily on the size of the business (turnover/headcount) and the complexity of the challenge (e.g., turnaround vs steady state).',
  },
  {
    question: 'When should a company hire a Fractional MD?',
    answer: 'Companies hire Fractional MDs during leadership transitions (e.g., waiting for a permanent CEO), to lead a specific division or subsidiary, or to oversee a turnaround project where full-time leadership isn\'t yet required or affordable.',
  },
  {
    question: 'How is this different from a Fractional CEO?',
    answer: 'The roles are very similar. \"Managing Director\" is often used in UK subsidiaries of foreign companies or in SMEs where the owner is the \"Chairman\". A Fractional MD might have more operational, P&L-focused responsibilities compared to a visionary Fractional CEO, but the lines are blurred.',
  },
]

export default async function FractionalManagingDirectorJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getMDStats(),
    getFeaturedCompanies(),
    getMDJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Managing Director Jobs UK | Part-Time MD Roles"
        description="Find part-time MD positions paying £800-£1,500/day. Remote & hybrid available."
        url="https://fractional.quest/fractional-managing-director-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-managing-director-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-slate-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('md', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Executive Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Managing Director Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Managing Director roles for experienced business leaders.
                Lead operations and P&L for 2-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,150</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-blue-950 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-ceo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CEO Jobs
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
          <RoleCalculator role="ceo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional MD Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional MD jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-blue-900 to-slate-800">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">MD</div>
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-blue-800">
                      View fractional MD job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Operations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-950 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors"
            >
              View All {stats.total}+ Fractional MD Jobs UK
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
              A Guide to <span className="text-blue-900">Fractional MD Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-blue-950"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Managing Director jobs</strong> offer experienced business leaders the chance to steer multiple organisations simultaneously. Whether overseeing a turnaround, leading a subsidiary, or guiding a scale-up, the role demands versatile, high-impact leadership.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Leadership on Your Terms</h3>
            <p>
              In the UK, the title "Managing Director" often carries P&L responsibility for a specific business unit or SME. A <strong className="font-semibold">Fractional MD</strong> provides this leadership on a flexible basis. This is ideal for foreign companies establishing a UK presence, or for owners looking to step back from day-to-day operations without committing to a permanent, full-time salary.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-950">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional MDs bring the steady hand of experience to businesses in transition, delivering stability and strategic direction from day one."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What the Role Entails</h3>
            <ul className="space-y-3">
              <li><strong>P&L Management:</strong> Taking full responsibility for the financial performance of the business unit.</li>
              <li><strong>Strategy Execution:</strong> Turning the board's vision into operational reality.</li>
              <li><strong>Team Leadership:</strong> Managing functional heads (Sales, Ops, Finance) and driving performance.</li>
              <li><strong>Stakeholder Management:</strong> Reporting to the parent company, investors, or the owner/founder.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why the Demand?</h3>
            <p>
              The flexibility of <Link href="/fractional-managing-director-jobs-uk" className="text-blue-900 hover:text-blue-800 underline">fractional MD roles</Link> is attractive in uncertain economic times. Companies can access top-tier leadership to navigate challenges or drive specific projects without the long-term fixed cost, making it a growing segment of the executive job market.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Operations" title="Latest Management News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional MD Jobs</h2>
          </div>
          <FAQ items={MD_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-blue-400">Fractional MD Role</span></h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking executive leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-blue-950 font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="ceo" /> 
      {/* Mapped to CEO */}
    </div>
  )
}
