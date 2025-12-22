import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CGO Jobs UK | Part-Time Chief Green Officer Roles',
  description: 'Fractional CGO jobs UK - Find part-time Chief Green Officer & Sustainability Officer positions paying £700-£1,200/day. Browse live CGO roles for ESG leaders. Remote & hybrid available.',
  keywords: 'fractional cgo jobs, fractional cgo jobs uk, part time chief green officer, fractional sustainability officer, cgo part time, fractional esg jobs, chief sustainability officer part time',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cgo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CGO Jobs UK | Part-Time Chief Green Officer Roles',
    description: 'Fractional CGO jobs UK - Find part-time CGO positions paying £700-£1,200/day. Remote & hybrid available.',
    images: ['/images/fractional-cgo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cgo-jobs-uk',
  },
}

async function getCGOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Sustainability%' OR title ILIKE '%Green%' OR title ILIKE '%ESG%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Sustainability%' OR title ILIKE '%Green%' OR title ILIKE '%ESG%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 12, remoteCount: 5 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Sustainability%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCGOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Sustainability%' OR title ILIKE '%Green%' OR title ILIKE '%ESG%')
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

const CGO_FAQS = [
  {
    question: 'What is a Fractional CGO?',
    answer: 'A Fractional CGO (Chief Green Officer or Chief Sustainability Officer) is an experienced ESG leader who helps companies develop and implement sustainability strategies on a part-time basis. They ensure environmental compliance, drive net-zero initiatives, and build sustainable business models.',
  },
  {
    question: 'How much do Fractional CGO jobs pay?',
    answer: 'Fractional CGO/CSO day rates in the UK generally range from £700 to £1,200 per day. Rates are rising as regulatory pressure (e.g., SDR, TCFD) increases and investors demand robust ESG credentials.',
  },
  {
    question: 'Why hire a Fractional CGO?',
    answer: 'Many SMEs want to be sustainable but lack the expertise or budget for a full-time ESG director. A Fractional CGO provides the strategic roadmap, ensuring the company meets its environmental goals and compliance obligations efficiently.',
  },
  {
    question: 'What is the background of a CGO?',
    answer: 'CGOs often come from diverse backgrounds including environmental science, operations, legal compliance, or corporate strategy. The key requirement is deep knowledge of sustainability frameworks and the ability to drive organisational change.',
  },
]

export default async function FractionalCgoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCGOStats(),
    getFeaturedCompanies(),
    getCGOJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-green-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Sustainability Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CGO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Green Officer roles for experienced ESG leaders.
                Drive sustainability strategy and net-zero goals for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£950</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-coo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  COO Jobs
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
          <RoleCalculator role="coo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CGO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CGO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-emerald-600 to-green-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CGO</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                      View fractional CGO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Operations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors"
            >
              View All {stats.total}+ Fractional CGO Jobs UK
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
              A Guide to <span className="text-emerald-600">Fractional CGO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CGO jobs</strong> (Chief Green Officer or Chief Sustainability Officer) are emerging as critical roles in the modern C-suite. As companies face increasing pressure from investors, customers, and regulators to operate sustainably, part-time ESG leadership provides a focused, expert path to Net Zero.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Sustainability as Strategy</h3>
            <p>
              A <strong className="font-semibold">Fractional CGO</strong> moves sustainability from a "nice-to-have" marketing message to a core business strategy. For SMEs and mid-market firms, a full-time CSO may be out of reach, but a fractional leader can deliver the audit, strategy, and reporting frameworks needed to satisfy stakeholders and secure green investment.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-emerald-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional CGOs ensure that environmental responsibility translates into operational efficiency and long-term value creation."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What the Role Delivers</h3>
            <ul className="space-y-3">
              <li><strong>ESG Reporting:</strong> Managing disclosures for frameworks like TCFD, SASB, and B Corp certification.</li>
              <li><strong>Carbon Reduction:</strong> Developing and executing credible Net Zero roadmaps.</li>
              <li><strong>Supply Chain Audit:</strong> Assessing and improving the sustainability of the company's value chain.</li>
              <li><strong>Stakeholder Engagement:</strong> Communicating sustainability progress to investors, employees, and customers.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Now?</h3>
            <p>
              The UK's regulatory environment is tightening, and "greenwashing" is being actively punished. Companies need genuine expertise to navigate this landscape. <Link href="/fractional-cgo-jobs-uk" className="text-emerald-600 hover:text-emerald-800 underline">Fractional sustainability roles</Link> offer the specific, high-level guidance required to build a resilient, compliant, and future-proof business.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Operations" title="Latest Sustainability News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CGO Jobs</h2>
          </div>
          <FAQ items={CGO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-emerald-400">Fractional CGO Role</span></h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking ESG leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-emerald-900 font-bold uppercase tracking-wider hover:bg-emerald-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="coo" /> 
      {/* Mapped to COO/Ops */}
    </div>
  )
}
