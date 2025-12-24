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
  title: 'Fractional Financial Controller Jobs UK | Part-Time FC Roles',
  description: 'Fractional Financial Controller jobs UK - Find part-time FC positions paying £400-£700/day. Browse live Financial Controller roles for experienced accountants. Remote & hybrid available.',
  keywords: 'fractional financial controller jobs, fractional fc jobs uk, part time financial controller, fractional controller roles, part time controller jobs, finance controller part time',
  alternates: {
    canonical: 'https://fractional.quest/fractional-financial-controller-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Financial Controller Jobs UK | Part-Time FC Roles',
    description: 'Fractional Financial Controller jobs UK - Find part-time FC positions paying £400-£700/day. Remote & hybrid available.',
    images: ['/images/fractional-financial-controller-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-financial-controller-jobs-uk',
  },
}

async function getFCStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Finance' OR title ILIKE '%Financial Controller%' OR title ILIKE '%Controller%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Finance' OR title ILIKE '%Financial Controller%' OR title ILIKE '%Controller%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 25, remoteCount: 10 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Finance' OR title ILIKE '%Financial Controller%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getFCJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Finance' OR title ILIKE '%Financial Controller%' OR title ILIKE '%Controller%')
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

const FC_FAQS = [
  {
    question: 'What is a Fractional Financial Controller?',
    answer: 'A Fractional Financial Controller (FC) is a qualified accountant who manages a company\'s accounting function part-time. They ensure accurate bookkeeping, run month-end processes, manage audits, and implement financial controls.',
  },
  {
    question: 'How much do Fractional Financial Controller jobs pay?',
    answer: 'Day rates for Fractional FCs in the UK typically range from £400 to £700. While lower than FD/CFO rates, the role is highly operational and in steady demand.',
  },
  {
    question: 'Why hire a Fractional FC?',
    answer: 'Companies hire Fractional FCs when they need more than a bookkeeper but aren\'t ready for a full-time Controller. They provide the technical accounting oversight needed to ensure the numbers are right.',
  },
  {
    question: 'Can this role lead to a CFO position?',
    answer: 'Yes, many Fractional FCs grow with their clients or take on more strategic responsibilities over time, eventually stepping into Fractional FD or CFO roles.',
  },
]

export default async function FractionalFinancialControllerJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getFCStats(),
    getFeaturedCompanies(),
    getFCJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-financial-controller-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/80 to-sky-600/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('fc', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Accounting & Controls
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Financial Controller Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Financial Controller roles for qualified accountants.
                Manage month-end and controls for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£550</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-finance-director-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  FD Jobs
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Controller Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional controller jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-blue-500 to-sky-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">FC</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700">
                      View fractional FC job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Finance"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All {stats.total}+ Fractional Controller Jobs UK
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
              A Guide to <span className="text-blue-600">Fractional Controller Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Financial Controller jobs</strong> fill the critical gap between bookkeeping and strategic finance. For many businesses, the numbers need to be right before they can be useful. A part-time FC ensures accuracy, compliance, and control.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Guardian of the Ledger</h3>
            <p>
              A <strong className="font-semibold">Fractional FC</strong> is responsible for the integrity of the financial data. They don't just report the numbers; they ensure they are correct. This role is vital for companies preparing for audit, due diligence, or simply wanting to graduate from "shoebox accounting" to professional financial management.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-600">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Reliable data is the foundation of all good business decisions. Fractional Controllers build that foundation."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              <li><strong>Month-End Close:</strong> Running a disciplined process to produce accurate P&L and Balance Sheets on time.</li>
              <li><strong>Controls & Process:</strong> Implementing systems to prevent fraud and error (e.g., approval workflows).</li>
              <li><strong>Audit Management:</strong> Leading the relationship with external auditors.</li>
              <li><strong>Technical Accounting:</strong> Handling complex revenue recognition or consolidation issues.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">A High-Volume Market</h3>
            <p>
              <Link href="/fractional-financial-controller-jobs-uk" className="text-blue-600 hover:text-blue-800 underline">Fractional FC roles</Link> are plentiful. Almost every growing company hits a point where they need this skill set. For qualified accountants (ACA/ACCA) wanting flexibility, it's a reliable and lucrative career path.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Finance" title="Latest Accounting News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional Controller Jobs</h2>
          </div>
          <FAQ items={FC_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Your Next<br /><span className="text-blue-100">Fractional FC Role</span></h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking financial controllers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="cfo" /> 
      {/* Mapped to CFO/Finance */}
    </div>
  )
}
