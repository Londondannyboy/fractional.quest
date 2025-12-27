import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleContentHub } from '@/components/RoleContentHub'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim CEO UK | Temporary Chief Executive Officer Roles',
  description: 'Interim CEO roles UK - Full-time temporary Chief Executive Officer positions paying £1,200-£2,000/day. Browse live interim CEO jobs for experienced leaders.',
  keywords: 'interim ceo uk, interim ceo, temporary ceo, interim chief executive officer, ceo interim, interim ceo jobs uk',
  alternates: {
    canonical: 'https://fractional.quest/interim-ceo',
  },
  openGraph: {
    title: 'Interim CEO UK | Temporary Chief Executive Officer Roles',
    description: 'Interim CEO roles UK - Full-time temporary executive leadership paying £1,200-£2,000/day.',
    url: 'https://fractional.quest/interim-ceo',
    images: ['/images/interim-ceo-uk.jpg'],
  },
}

// Interim CEO-specific FAQ data
const INTERIM_CEO_FAQS = [
  {
    question: 'What is an Interim CEO?',
    answer: 'An Interim CEO (Chief Executive Officer) is a temporary executive who leads a company on a full-time basis during transitions, typically for 6-18 months. Interim CEOs are brought in during CEO departures, turnarounds, crises, or strategic pivots to provide immediate experienced leadership while the board recruits a permanent CEO or navigates a critical period.',
  },
  {
    question: 'How much do Interim CEOs earn in the UK?',
    answer: 'Interim CEO day rates in the UK typically range from £1,200 to £2,000 per day for full-time engagements (5 days per week). London-based interim CEO roles often command premium rates of £1,400-£2,000/day, while regional positions average £1,000-£1,500/day. Annual earnings for a 12-month interim CEO assignment can range from £300,000 to £500,000+ depending on complexity and company size.',
  },
  {
    question: 'What qualifications do I need to become an Interim CEO?',
    answer: 'Successful Interim CEO candidates typically have 20+ years of business experience with at least 10+ years as a CEO, Managing Director, or equivalent C-suite role. Requirements include a proven track record of leading businesses through change, P&L accountability for £10M-£500M+ revenues, turnaround or crisis management experience, board-level stakeholder management, and strong financial acumen. Many interim CEOs hold MBAs or professional qualifications from IoD or similar bodies.',
  },
  {
    question: 'How long do Interim CEO assignments typically last?',
    answer: 'Most Interim CEO engagements last 6-18 months. Shorter assignments (3-6 months) occur during CEO recruitment processes or immediate crisis stabilisation. Longer engagements (12-24 months) happen during complex turnarounds, pre-exit preparations, or major strategic transformations. The assignment ends when a permanent CEO is appointed or the specific mandate (turnaround, sale, etc.) is completed.',
  },
  {
    question: 'What is the difference between Interim CEO and Fractional CEO?',
    answer: 'An Interim CEO works full-time (5 days/week) as a temporary replacement for a departing or absent CEO, filling the CEO seat completely but temporarily. A Fractional CEO works part-time (2-3 days/week) on an ongoing basis, providing strategic leadership alongside existing management without replacing anyone. Interim = full-time replacement; Fractional = part-time augmentation.',
  },
  {
    question: 'Which industries hire Interim CEOs in the UK?',
    answer: 'The highest demand for Interim CEOs in the UK comes from PE portfolio companies post-acquisition, businesses in financial distress or turnaround, family businesses during succession transitions, companies preparing for sale or IPO, organisations experiencing sudden CEO departure, and sectors undergoing regulatory or market disruption. Manufacturing, retail, financial services, healthcare, and technology are particularly active.',
  },
]

async function getExecutiveStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, avgRateResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Executive'`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND role_category = 'Executive' AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Executive' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      avgRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '1400')),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 18, avgRate: 1400, remoteCount: 5 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Executive' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - renders in initial HTML for crawlers
async function getExecutiveJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Executive'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 9
    `
    return jobs as any[]
  } catch {
    return []
  }
}

// Calculate days ago for posted date
function getDaysAgo(postedDate: string | null): number | undefined {
  if (!postedDate) return undefined
  const posted = new Date(postedDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - posted.getTime())
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
}

export default async function InterimCeoPage() {
  const [stats, companies, jobs] = await Promise.all([
    getExecutiveStats(),
    getFeaturedCompanies(),
    getExecutiveJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Aspirational Image */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        {/* Background Image - Executive leadership */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-800/80 to-violet-700/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Interim Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Interim CEO UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Full-time temporary Chief Executive Officer roles for experienced business leaders.
                Lead organisations through transition at £1,200-£2,000/day.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£{stats.avgRate}</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">6-18</div>
                  <div className="text-white/80 text-sm">Months Typical</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Interim CEO Roles
                </Link>
                <Link href="/fractional-ceo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Fractional CEO Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-indigo-600 mb-2">£1,200-£2,000</div>
              <div className="text-gray-600 font-medium mb-1">Daily Rate Range</div>
              <p className="text-sm text-gray-500">Full-time interim CEO day rates across UK markets</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-indigo-600 mb-2">6-18 Months</div>
              <div className="text-gray-600 font-medium mb-1">Typical Assignment</div>
              <p className="text-sm text-gray-500">Average duration of interim CEO engagements</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-indigo-600 mb-2">20+ Years</div>
              <div className="text-gray-600 font-medium mb-1">Experience Required</div>
              <p className="text-sm text-gray-500">Minimum business experience for interim CEO roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS SECTION - Server-rendered for SEO */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CEO Roles UK</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live executive roles</p>
          </div>

          {/* Server-rendered job grid - visible to search engines */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  {/* Job image header */}
                  <div className="relative h-40 bg-gradient-to-br from-indigo-600 to-purple-700">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop"
                      alt={`${job.title} - Interim CEO role UK at ${job.company_name}`}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {job.role_category && (
                        <span className="bg-white/90 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                          {job.role_category}
                        </span>
                      )}
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    {job.is_remote && (
                      <span className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Remote
                      </span>
                    )}
                  </div>
                  {/* Job content */}
                  <div className="p-4">
                    <p className="text-gray-700 font-medium mb-2">{job.company_name}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {job.location || 'UK'}
                      </span>
                      {job.compensation && (
                        <span className="font-semibold text-gray-900">{job.compensation}</span>
                      )}
                    </div>
                    {job.description_snippet && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{job.description_snippet}</p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                      View interim CEO role →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA to view all */}
          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Executive"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View All {stats.total}+ Executive Roles
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">UK Companies Seeking Interim CEOs</h2>
              <p className="text-gray-600 mt-2">These UK companies are actively looking for interim CEO leadership</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span
                  key={index}
                  className="text-xl md:text-2xl font-light text-gray-400 hover:text-indigo-600 transition-colors cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Lead-in */}
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Complete Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br />
              <span className="text-indigo-600">Interim CEO UK Roles</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600"></div>
          </div>

          {/* SEO Image - Editorial Style */}
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Interim CEO UK - temporary chief executive officer leading board meeting and business transformation"
              title="Interim CEO UK - Temporary Chief Executive Officer Roles"
              className="w-full h-80 md:h-96 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
              Interim CEO UK: Temporary executive leaders across the UK provide full-time leadership during critical transitions
            </figcaption>
          </figure>

          {/* Article Content - Editorial Typography */}
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Interim CEO UK</strong> roles represent critical executive leadership during periods of transition, crisis, or transformation. Full-time temporary Chief Executive Officers who step into the breach when businesses need immediate, experienced leadership—whether following a sudden departure, during a turnaround, or preparing for a major strategic shift. According to the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors (IoD)</a>, the UK market for interim executive leadership continues to grow, with CEO roles being the most senior and strategically important interim positions.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What is an Interim CEO?</h3>
            <p>
              An <strong>Interim CEO</strong> is a temporary Chief Executive Officer who leads an organisation on a full-time basis during a defined transition period—typically 6-18 months. Unlike fractional CEOs who work part-time alongside existing leadership, interim CEOs completely fill the CEO seat temporarily. They are brought in during sudden departures, planned transitions, turnarounds, acquisitions, or pre-exit preparations when organisations need someone to hold the reins while navigating change or recruiting permanent leadership. As the <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK government's guidance on flexible working</a> highlights, modern employment arrangements increasingly embrace temporary and flexible executive leadership models.
            </p>
            <p>
              The interim CEO operates with full executive authority, reporting to the board and holding complete accountability for business performance. They attend all board meetings, manage the entire executive team, make critical strategic decisions, and represent the company to investors, customers, and other stakeholders. In every functional way, they are the CEO—just with a predetermined end date or exit criteria.
            </p>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-indigo-600">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim CEOs provide immediate, full-time executive leadership at £1,200-£2,000/day, or £300,000-£500,000+ for a 12-month assignment."
              </p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">When Companies Need Interim CEOs</h3>
            <p>
              The demand for <strong>interim CEO UK</strong> roles arises from specific business situations where immediate, experienced executive leadership is essential. Research from the <a href="https://www.frc.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Financial Reporting Council</a> shows that effective governance during leadership transitions significantly impacts business continuity and stakeholder confidence. Here are the most common scenarios:
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { scenario: 'Sudden CEO Departure', desc: 'Unexpected resignation, termination, or health issues requiring immediate CEO replacement while the board conducts a proper search.' },
                { scenario: 'Planned Transition', desc: 'Retiring or departing CEO with an interim brought in to bridge the gap between old and new permanent leadership.' },
                { scenario: 'Business Turnaround', desc: 'Company in financial distress requiring experienced turnaround CEO to stabilise operations and restore profitability.' },
                { scenario: 'Post-Acquisition Integration', desc: 'PE firm acquires company and installs interim CEO to rapidly professionalise operations and implement value creation plan.' },
                { scenario: 'Pre-Exit Preparation', desc: 'Preparing company for sale or IPO by bringing in experienced CEO to maximise value and satisfy due diligence requirements.' },
                { scenario: 'Founder-Professional Transition', desc: 'Founder stepping back with interim CEO professionalising the business before permanent CEO recruitment.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{item.scenario}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <p>
              In each scenario, the common thread is urgency combined with strategic importance. The business can't afford to operate without a CEO, can't rush the permanent hire, or needs specific expertise for a defined period. According to <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Private Equity &amp; Venture Capital Association (BVCA)</a> data, private equity firms frequently deploy interim CEOs in portfolio companies to drive rapid transformation or prepare businesses for exit, making PE-backed companies one of the largest sources of interim CEO demand.
            </p>

            <div className="bg-indigo-50 p-6 border border-indigo-200 rounded-lg my-8 not-prose">
              <p className="text-indigo-800 font-medium mb-3">Interested in part-time CEO roles instead?</p>
              <Link href="/fractional-ceo-jobs-uk" className="inline-flex items-center text-indigo-700 font-bold hover:text-indigo-900">
                Explore Fractional CEO Jobs UK →
              </Link>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Interim CEO vs Fractional CEO: Key Differences</h3>
            <p>
              One of the most common questions about executive leadership models is the difference between <strong>interim CEO</strong> and <strong>fractional CEO</strong> roles. While both involve non-permanent executive leadership, they serve fundamentally different purposes and operate on different models:
            </p>

            <div className="overflow-x-auto my-8 not-prose">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Aspect</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Interim CEO</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Fractional CEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Time Commitment</td>
                    <td className="border border-gray-300 p-3">Full-time (5 days/week)</td>
                    <td className="border border-gray-300 p-3">Part-time (2-3 days/week)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Duration</td>
                    <td className="border border-gray-300 p-3">6-18 months (defined period)</td>
                    <td className="border border-gray-300 p-3">Ongoing (no fixed end date)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Purpose</td>
                    <td className="border border-gray-300 p-3">Temporary replacement</td>
                    <td className="border border-gray-300 p-3">Strategic augmentation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Authority</td>
                    <td className="border border-gray-300 p-3">Full CEO authority</td>
                    <td className="border border-gray-300 p-3">Advisory/strategic influence</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Day Rate</td>
                    <td className="border border-gray-300 p-3">£1,200-£2,000/day</td>
                    <td className="border border-gray-300 p-3">£1,000-£2,000/day</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium">Use Case</td>
                    <td className="border border-gray-300 p-3">CEO departure, crisis, transition</td>
                    <td className="border border-gray-300 p-3">Startup growth, founder support</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The choice between interim and fractional depends entirely on the situation. If the CEO seat is vacant or needs to be temporarily filled, an interim CEO is the solution. If you have leadership in place but need strategic augmentation, a fractional CEO makes more sense. Some businesses even use both models sequentially—starting with an interim CEO during a transition, then moving to a fractional CEO model for ongoing strategic support once permanent leadership is in place. The <a href="https://www.managers.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Management Institute (CMI)</a> provides extensive research on effective executive leadership models for UK businesses.
            </p>

            {/* Second SEO Image */}
            <figure className="my-10 -mx-6 lg:-mx-16">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80"
                alt="Interim CEO UK - chief executive officer leading strategic transformation and business turnaround"
                title="Interim CEO UK - Temporary Executive Leadership"
                className="w-full h-64 md:h-80 object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
                UK interim CEO roles provide experienced executive leadership during critical business transitions
              </figcaption>
            </figure>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Interim CEO Day Rates UK: What to Expect</h3>
            <p>
              <strong>Interim CEO day rates UK</strong> typically range from £1,200 to £2,000 per day for full-time engagements (5 days per week), with several factors influencing where a specific role falls within this range. Location plays a significant role—London-based interim CEO positions often command £1,400-£2,000/day, while regional roles average £1,000-£1,500/day. Company size and complexity matter significantly; leading a £100M+ business commands higher rates than a £10M company. <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a> shows the growing trend of high-value contractor roles across the UK executive market.
            </p>
            <p>
              The nature of the assignment also impacts rates. Turnaround situations—where the interim CEO must rescue a distressed business—often command premium rates (£1,500-£2,200/day) due to the intensity, risk, and specialist skills required. Pre-exit preparation roles (preparing companies for sale or IPO) also command top rates given the value creation potential and strategic importance. Standard transition or caretaker CEO roles fall in the middle of the range.
            </p>

            <ul className="space-y-2">
              <li><strong>London &amp; South East:</strong> £1,400-£2,000/day</li>
              <li><strong>Manchester &amp; North West:</strong> £1,000-£1,500/day</li>
              <li><strong>Scotland &amp; Edinburgh:</strong> £1,000-£1,500/day</li>
              <li><strong>Midlands &amp; Regional:</strong> £1,000-£1,400/day</li>
              <li><strong>Turnaround/Crisis Roles:</strong> £1,500-£2,200/day (all regions)</li>
            </ul>

            <p>
              For a typical 12-month interim CEO assignment at £1,400/day (5 days per week, 48 weeks), total compensation would be approximately £336,000. This compares favourably to permanent CEO salaries of £150,000-£300,000+ when you factor in the temporary nature, specialist expertise, and lack of long-term commitments like equity, pensions, or notice periods. From the company's perspective, they're paying for proven expertise without the long-term financial commitment of a permanent hire.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Interim CEO Roles</h3>
            <p>
              Interim CEO positions demand the highest caliber of executive experience and proven track records. Companies hiring interim CEOs need confidence that the candidate can step in immediately and perform at the highest level from day one. According to <a href="https://www.icaew.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW guidance</a>, financial acumen and governance expertise are critical for interim executive roles.
            </p>

            <ul className="space-y-2">
              <li><strong>20+ years business experience</strong> with minimum 10+ years as CEO, Managing Director, or equivalent C-suite role</li>
              <li><strong>Proven CEO track record</strong> across multiple businesses or significant tenure scaling/transforming organisations</li>
              <li><strong>P&amp;L accountability</strong> for £10M-£500M+ revenues depending on target company size</li>
              <li><strong>Industry expertise</strong> relevant to the target sector (FinTech, manufacturing, retail, etc.)</li>
              <li><strong>Change management experience</strong> leading turnarounds, restructurings, or major transformations</li>
              <li><strong>Board-level capability</strong> managing complex stakeholder relationships with investors, boards, and institutional shareholders</li>
              <li><strong>Financial literacy</strong> including fundraising, M&amp;A, and cash flow management experience</li>
              <li><strong>Executive team leadership</strong> building, developing, and managing C-suite teams</li>
              <li><strong>Professional credibility</strong> often including MBA, IoD membership, or equivalent qualifications</li>
            </ul>

            <p>
              Beyond technical qualifications, successful interim CEOs possess exceptional emotional intelligence and adaptability. They must rapidly assess situations, build trust with sceptical teams, navigate complex politics, and drive change without the benefit of long-term relationships or deep organisational knowledge. The ability to operate effectively from day one in unfamiliar environments distinguishes exceptional interim CEOs from those who struggle. Many top interim CEOs invest in executive coaching, maintain peer advisory networks, and continually develop their leadership capabilities through organisations like the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a>.
            </p>

            <div className="bg-gray-50 text-gray-900 p-6 rounded-lg my-10 not-prose">
              <p className="text-gray-600 mb-3">Understand interim CEO compensation in detail?</p>
              <Link href="/fractional-ceo-salary" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700">
                View Executive Salary Guide →
              </Link>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">How to Become an Interim CEO</h3>
            <p>
              Transitioning into interim CEO work requires intentional positioning and credibility building. Most successful interim CEOs come from permanent CEO or MD roles where they've built proven track records, typically spending 15-20+ years in full-time executive positions before making the shift. The transition often happens naturally—executives approaching retirement age, those wanting more variety and control over their time, or CEOs who have successfully exited businesses and want to continue contributing without full-time commitment.
            </p>

            <p>
              <strong>Building your interim CEO profile</strong> starts with clarifying your specialty and value proposition. What types of situations do you excel in? Turnarounds? Growth acceleration? Post-acquisition integration? Pre-exit preparation? Which industries do you know deeply? What company sizes match your experience? Successful interim CEOs develop clear positioning around their specialisation rather than trying to be generalists. A CEO with three successful manufacturing turnarounds becomes the go-to person for those situations. Clarity creates demand.
            </p>

            <p>
              <strong>Networking and visibility</strong> are critical for interim CEO work. Most assignments come through warm introductions from private equity firms, non-executive directors, investors, corporate finance advisors, or professional service firms (law, accounting). Building relationships with these intermediaries—through speaking at events, writing thought leadership, joining relevant organisations, and maintaining active LinkedIn presence—creates the pipeline. The <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> provides valuable insights on connecting with high-growth businesses that frequently require interim leadership. Many successful interim CEOs also register with specialist <a href="/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter" className="text-blue-600 hover:text-blue-700 underline">interim executive recruitment agencies</a> that match experienced leaders with suitable opportunities.
            </p>

            <p>
              <strong>Professional infrastructure</strong> matters significantly. Most interim CEOs operate through personal service companies (Ltd companies) for tax efficiency and professional positioning, though understanding <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 compliance</a> is critical. Many hold professional indemnity insurance, maintain IoD membership for governance credibility, and invest in executive coaching to continuously refine their interim CEO capabilities. The infrastructure signals professionalism and reduces client risk.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Interim CEO Responsibilities and Deliverables</h3>
            <p>
              Interim CEO responsibilities are comprehensive, encompassing everything a permanent CEO would handle. The difference lies in the compressed timeframe and defined mandate—interim CEOs must deliver results faster, often within 6-12 months, and typically have specific deliverables agreed with the board at the outset.
            </p>

            <p>
              <strong>Immediate priorities</strong> for most interim CEOs include rapidly assessing the business situation (strengths, weaknesses, opportunities, threats), building trust and credibility with the executive team and broader organisation, establishing clear communication with the board and investors, and stabilising any urgent issues (cash flow, key customer relationships, critical operational problems). The first 30 days are crucial—experienced interim CEOs develop and present a comprehensive assessment and initial action plan within the first month.
            </p>

            <p>
              <strong>Operational leadership</strong> involves managing day-to-day business operations, leading the executive team, maintaining customer and supplier relationships, and ensuring business continuity during the transition. In turnaround situations, this might include difficult decisions like restructuring, cost reduction, or strategic pivots. In growth situations, it might focus on scaling operations, raising capital, or accelerating sales. The operational intensity varies by mandate but requires full CEO-level engagement.
            </p>

            <p>
              <strong>Strategic deliverables</strong> typically include developing or refining business strategy, preparing the company for the next phase (sale, new CEO, growth acceleration), implementing critical initiatives (system upgrades, process improvements, organisational restructuring), and positioning the business for success under permanent leadership. Many interim CEOs are specifically tasked with preparing companies for exit, which involves professionalising operations, improving financial performance, and satisfying due diligence requirements that maximise valuation. The <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> provides valuable research on SME growth strategies that interim CEOs frequently implement.
            </p>

            <p>
              <strong>Succession planning and transition</strong> are unique interim CEO responsibilities. Unlike permanent CEOs, interims explicitly plan for their own replacement. This might involve supporting the board's CEO search process, ensuring knowledge transfer to the incoming permanent CEO, or developing internal talent to step into larger roles. The best interim CEOs leave organisations stronger and better positioned for sustained success under permanent leadership—their success is measured by what happens after they leave, not just what they accomplish during their tenure.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Interim CEO by Industry and Sector</h3>
            <p>
              While core CEO competencies transfer across sectors, specific industries have unique interim CEO demand drivers and specialist requirements. Understanding sector-specific dynamics helps interim CEOs position themselves effectively and helps companies find appropriately experienced leaders.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                {
                  sector: 'Private Equity Portfolio Companies',
                  desc: 'PE firms frequently deploy interim CEOs in portfolio companies immediately post-acquisition to drive 100-day plans, implement value creation strategies, and professionalise operations. Requires PE operating model experience.',
                  rate: '£1,400-£2,000/day'
                },
                {
                  sector: 'Manufacturing & Industrial',
                  desc: 'Turnaround situations, operational restructuring, and pre-exit preparation common. Requires supply chain expertise, lean manufacturing knowledge, and industrial sector experience.',
                  rate: '£1,200-£1,800/day'
                },
                {
                  sector: 'Technology & SaaS',
                  desc: 'Scaling challenges, professionalising founder-led businesses, pre-Series B/C transitions. Requires tech sector knowledge, product-led growth expertise, and VC/PE relationship management.',
                  rate: '£1,200-£1,800/day'
                },
                {
                  sector: 'Retail & Consumer',
                  desc: 'Turnarounds, omnichannel transformations, and pre-exit preparation. Requires retail operations expertise, e-commerce/digital knowledge, and consumer brand experience.',
                  rate: '£1,000-£1,600/day'
                },
                {
                  sector: 'Financial Services & FinTech',
                  desc: 'Regulatory compliance, risk management, and rapid growth scaling. Requires FCA regulatory knowledge, financial services expertise, and governance capability.',
                  rate: '£1,400-£2,000/day'
                },
                {
                  sector: 'Healthcare & Life Sciences',
                  desc: 'Clinical governance, regulatory navigation, and commercial acceleration. Requires healthcare sector knowledge, CQC/MHRA regulatory experience, and clinical/commercial balance.',
                  rate: '£1,200-£1,800/day'
                },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{type.sector}</h4>
                  <p className="text-gray-600 text-sm mb-3">{type.desc}</p>
                  <span className="text-indigo-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            <p>
              Sector specialisation significantly increases interim CEO value and day rates. An interim CEO with deep manufacturing experience and three successful operational turnarounds commands premium rates in that sector because they bring proven playbooks, instant credibility, and compressed learning curves. Rather than spending months understanding industry dynamics, specialist interim CEOs hit the ground running from day one, which is precisely what boards value when hiring interim leadership. According to <a href="https://www.beauhurst.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Beauhurst research</a>, high-growth companies in technology, FinTech, and healthcare are particularly active hirers of interim executive talent.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">IR35 and Tax Considerations for Interim CEOs</h3>
            <p>
              Most interim CEOs in the UK operate through personal service companies (Ltd companies), making <strong>IR35 compliance</strong> a critical consideration. The off-payroll working rules (IR35) determine whether your interim CEO engagement is genuinely self-employed or should be treated as disguised employment for tax purposes. Getting this wrong can result in significant tax liabilities for both you and your client.
            </p>

            <p>
              For most interim CEO engagements, the relationship typically sits outside IR35 if structured correctly. Key factors supporting outside-IR35 status include: providing services to multiple clients (portfolio of interim CEO roles), having genuine autonomy over how and when work is performed, taking financial risk (no guaranteed income, ability to send substitutes in theory), and operating with clear contractual boundaries defining deliverables rather than employment obligations. However, longer-term, full-time interim CEO assignments with single clients can trigger inside-IR35 determination if there's significant integration, supervision, and control by the client. <a href="https://www.gov.uk/guidance/business-support-helpline" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Government business support services</a> can provide guidance on properly structuring interim executive arrangements.
            </p>

            <p>
              Professional advice from accountants specialising in contractor taxation is essential. Many interim CEOs work with specialist contractor accountancy firms that understand IR35 rules and can help structure engagements appropriately. The <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Association of Independent Professionals and the Self-Employed (IPSE)</a> provides excellent resources on IR35 compliance for high-level contractors and interim executives.
            </p>

            <p>
              When negotiating interim CEO contracts, discuss IR35 status explicitly with clients. Many larger companies and PE firms have standard processes for determining IR35 status and may require working through umbrella companies or accepting inside-IR35 status depending on their risk appetite. Understanding the take-home pay implications of inside vs outside IR35 helps you price your services appropriately—inside IR35 typically reduces take-home by 20-25%, so your gross day rate should account for this difference. The <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD (Chartered Institute of Personnel and Development)</a> offers valuable guidance on executive employment contracts and IR35 considerations.
            </p>
          </article>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Interim CEO UK Earnings Calculator
            </h2>
            <p className="text-gray-600 mt-2">Calculate your potential earnings from interim CEO roles in the UK market</p>
          </div>
          <RoleCalculator role="ceo" />
        </div>
      </section>

      {/* IR35 Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              UK IR35 Calculator for Interim CEO Roles
            </h2>
            <p className="text-gray-600 mt-4">
              As an interim CEO in the UK, your IR35 status significantly impacts your take-home pay from interim roles
            </p>
          </div>
          <IR35Calculator defaultDayRate={1400} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Common Questions About Interim CEO UK Roles
            </h2>
          </div>
          <FAQ skipSchema={true} items={INTERIM_CEO_FAQS} title="" />
        </div>
      </section>

      {/* Resources & Further Reading Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Additional Resources</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">UK Resources for Interim CEO Professionals</h2>
            <p className="text-xl text-gray-500">Authoritative UK sources for interim CEO leaders seeking temporary executive roles</p>
          </div>

          <div className="space-y-8">
            {/* Professional Bodies & Leadership */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-600">Professional Bodies &amp; Executive Organizations</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    Institute of Directors (IoD)
                  </a>
                  {' '}&mdash; Leading UK organisation for directors and executives, offering professional development, governance guidance, and networking for interim CEOs
                </li>
                <li>
                  <a href="https://www.icaew.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    Institute of Chartered Accountants in England and Wales (ICAEW)
                  </a>
                  {' '}&mdash; Professional body providing financial leadership guidance critical for interim CEO roles
                </li>
                <li>
                  <a href="https://www.managers.org.uk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    Chartered Management Institute (CMI)
                  </a>
                  {' '}&mdash; Professional body for management and leadership development in the UK
                </li>
              </ul>
            </div>

            {/* Government & Regulation */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-600">Government Resources &amp; Regulation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    HMRC IR35 Guidance
                  </a>
                  {' '}&mdash; Official guidance on off-payroll working rules critical for interim CEO contractors
                </li>
                <li>
                  <a href="https://www.frc.org.uk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    Financial Reporting Council (FRC)
                  </a>
                  {' '}&mdash; UK corporate governance standards and reporting requirements for interim CEOs
                </li>
                <li>
                  <a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    Companies House
                  </a>
                  {' '}&mdash; Register and manage your limited company for interim executive work
                </li>
                <li>
                  <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    ONS Employment Statistics
                  </a>
                  {' '}&mdash; Official UK labour market data including self-employment and interim contractor trends
                </li>
              </ul>
            </div>

            {/* Private Equity & Investment */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-600">Private Equity, VC &amp; Investment</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    British Private Equity &amp; Venture Capital Association (BVCA)
                  </a>
                  {' '}&mdash; Insights on PE/VC portfolio companies that frequently hire interim CEOs
                </li>
                <li>
                  <a href="https://www.beauhurst.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    Beauhurst
                  </a>
                  {' '}&mdash; Comprehensive data on UK high-growth companies and funding activity where interim CEOs are in demand
                </li>
                <li>
                  <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    Tech Nation
                  </a>
                  {' '}&mdash; UK tech sector insights and growth company data
                </li>
              </ul>
            </div>

            {/* Business Support & Networking */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-600">Business Support &amp; Networking</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    IPSE (Association of Independent Professionals and the Self-Employed)
                  </a>
                  {' '}&mdash; Support and advocacy for UK independent professionals including interim executives
                </li>
                <li>
                  <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    British Business Bank
                  </a>
                  {' '}&mdash; Research on UK SME financing and growth trends relevant to interim CEO mandates
                </li>
                <li>
                  <a href="https://www.linkedin.com/business/talent" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline font-medium">
                    LinkedIn
                  </a>
                  {' '}&mdash; Essential platform for building interim CEO brand and connecting with PE firms, boards, and clients
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-lg border-l-4 border-indigo-600">
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> These resources provide valuable guidance for interim CEO professionals, from corporate governance to IR35 compliance and market insights. Bookmark these sources to stay current with UK executive leadership trends and regulatory requirements affecting interim roles.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Find Interim CEO Roles UK
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create your profile and get matched with UK companies seeking interim CEO leadership for critical transitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact/companies"
              className="px-10 py-5 bg-indigo-600 text-white font-bold uppercase tracking-wider hover:bg-indigo-700 transition-colors rounded-lg"
            >
              Create Profile
            </Link>
            <Link
              href="/fractional-ceo-salary"
              className="px-10 py-5 border-2 border-gray-300 text-gray-700 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-lg"
            >
              Salary Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-ceo-jobs-uk" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Fractional CEO Jobs UK</Link>
              <Link href="/interim-cfo" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim CFO</Link>
              <Link href="/interim-coo" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim COO</Link>
              <Link href="/interim-cmo" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim CMO</Link>
              <Link href="/interim-cto" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim CTO</Link>
              <Link href="/fractional-ceo-salary" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">CEO Salary Guide</Link>
              <Link href="/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim Recruitment Agency</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub - Internal Linking */}
      <RoleContentHub currentRole="ceo" />
    </div>
  )
}
