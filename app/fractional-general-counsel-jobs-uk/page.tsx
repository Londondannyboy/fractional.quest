import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional GC Jobs UK 2025',
  description: 'Fractional General Counsel jobs UK. Part-time GC roles. £800-£1,500/day.',
  keywords: 'fractional general counsel jobs, fractional gc jobs uk, part time general counsel, fractional legal counsel, part time gc jobs, fractional head of legal',
  alternates: {
    canonical: 'https://fractional.quest/fractional-general-counsel-jobs-uk',
  },
  openGraph: {
    title: 'Fractional General Counsel Jobs UK | Part-Time GC Roles',
    description: 'Fractional General Counsel jobs UK - Find part-time GC positions paying £800-£1,500/day. Remote & hybrid available.',
    images: ['/images/fractional-general-counsel-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-general-counsel-jobs-uk',
  },
}

async function getGCStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Legal' OR title ILIKE '%General Counsel%' OR title ILIKE '%GC%' OR title ILIKE '%Head of Legal%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Legal' OR title ILIKE '%General Counsel%' OR title ILIKE '%GC%' OR title ILIKE '%Head of Legal%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 18, remoteCount: 7 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Legal' OR title ILIKE '%General Counsel%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getGCJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Legal' OR title ILIKE '%General Counsel%' OR title ILIKE '%GC%' OR title ILIKE '%Head of Legal%')
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

const GC_FAQS = [
  {
    question: 'What is a Fractional General Counsel?',
    answer: 'A Fractional General Counsel (GC) is a senior lawyer who acts as a company\'s Head of Legal on a part-time basis. They provide strategic legal advice, manage external law firms, and handle day-to-day commercial contracts for a fraction of the cost of a full-time hire.',
  },
  {
    question: 'How much do Fractional GC jobs pay?',
    answer: 'Day rates for Fractional GCs in the UK are substantial, typically £800-£1,500+. This offers huge savings compared to law firm hourly rates (£400-£800 per *hour*) or a full-time GC salary (£150k+).',
  },
  {
    question: 'Why not just use a law firm?',
    answer: 'Law firms are reactive and expensive. A Fractional GC is proactive and embedded in the business. They understand the commercial context, spot risks early, and can handle routine work much more cost-effectively than external counsel.',
  },
  {
    question: 'What experience is required?',
    answer: 'Typically 10+ years PQE (Post-Qualified Experience), often with a mix of private practice training and in-house experience. Commercial acumen is just as important as legal knowledge.',
  },
]

export default async function FractionalGeneralCounselJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getGCStats(),
    getFeaturedCompanies(),
    getGCJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-slate-800/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Legal Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional General Counsel Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time General Counsel roles for experienced lawyers.
                Provide strategic legal counsel for 1-3 days a week.
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
                <Link href="#jobs" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-legal-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Legal Jobs
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional GC Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional GC jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-gray-700 to-slate-800">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">GC</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-gray-800">
                      View fractional GC job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Legal"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900 transition-colors"
            >
              View All {stats.total}+ Fractional GC Jobs UK
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
              A Guide to <span className="text-gray-600">Fractional General Counsel Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-gray-800"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional General Counsel jobs</strong> are the smart alternative to traditional law firm retainers. A part-time GC acts as your strategic legal partner, embedded in the business to manage risk, contracts, and IP—providing the certainty of an in-house lawyer without the full-time overhead.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">In-House Quality, Flexible Cost</h3>
            <p>
              Growing companies face a "legal gap": they are too big to rely solely on expensive external firms for every contract, but too small to justify a £150k+ full-time General Counsel. A <strong className="font-semibold">Fractional GC</strong> fills this gap. They sit on the leadership team, attend board meetings, and handle the day-to-day commercial legal work for a fixed monthly fee.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-gray-800">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional GCs are business enablers. They speed up deal cycles by being part of the team, rather than an external blocker."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              <li><strong>Commercial Contracts:</strong> Drafting and negotiating customer, supplier, and partnership agreements.</li>
              <li><strong>Corporate Governance:</strong> Managing board minutes, shareholder resolutions, and Companies House filings.</li>
              <li><strong>Risk Management:</strong> Identifying legal risks early and implementing mitigation strategies.</li>
              <li><strong>External Management:</strong> Managing specialist external counsel (e.g., litigation, M&A) to control costs.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Hire a Fractional GC?</h3>
            <p>
              Speed and context. An external lawyer charges by the hour and doesn't know your business inside out. A <Link href="/fractional-general-counsel-jobs-uk" className="text-gray-600 hover:text-gray-800 underline">fractional general counsel</Link> knows your risk appetite, your product, and your team, allowing them to make faster, more commercially aligned decisions.
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional GC Jobs</h2>
          </div>
          <FAQ items={GC_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Your Next<br /><span className="text-gray-400">Fractional GC Role</span></h2>
          <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking legal leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-gray-900 font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="compliance" /> 
      {/* Mapped to Compliance/Legal */}
    </div>
  )
}
