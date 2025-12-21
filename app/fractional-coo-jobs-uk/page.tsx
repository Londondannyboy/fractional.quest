import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ, COO_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional COO Jobs UK | Part-Time COO Roles',
  description: 'Fractional COO jobs UK - Find part-time Chief Operating Officer positions paying £750-£1,400/day. Browse live COO roles for experienced operations leaders.',
  keywords: 'fractional coo jobs uk, fractional coo jobs, part time coo jobs, fractional coo uk, coo jobs uk, part time chief operating officer',
  openGraph: {
    title: 'Fractional COO Jobs UK | Part-Time COO Roles',
    description: 'Fractional COO jobs UK - Find part-time COO positions paying £750-£1,400/day.',
    images: ['/images/fractional-coo-jobs-uk.jpg'],
  },
}

async function getOperationsStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Operations'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Operations' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 28, remoteCount: 12 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Operations' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - renders in initial HTML for crawlers
async function getOperationsJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Operations'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 12
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

export default async function FractionalCooJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getOperationsStats(),
    getFeaturedCompanies(),
    getOperationsJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Aspirational Image */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        {/* Background Image - Operations professional */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/85 via-amber-500/70 to-yellow-400/50" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Operations Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional COO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Operating Officer roles for experienced operations leaders.
                Work 2-3 days a week at £750-£1,400/day.
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
                <Link href="#jobs" className="px-8 py-4 bg-white text-orange-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-jobs-startups" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Startup COO Jobs
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">How Much Can You Earn as a Fractional COO?</h2>
          </div>
          <RoleCalculator role="coo" />
        </div>
      </section>

      {/* JOBS SECTION - Server-rendered for SEO */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional COO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional COO jobs in the UK</p>
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
                  <div className="relative h-40 bg-gradient-to-br from-orange-500 to-amber-600">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop"
                      alt={`${job.title} - Fractional COO job UK at ${job.company_name}`}
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
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700">
                      View fractional COO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA to view all */}
          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Operations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              View All {stats.total}+ Fractional COO Jobs UK
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-gray-50 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black">Companies Seeking COOs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-orange-400 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br /><span className="text-orange-600">Fractional COO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500"></div>
          </div>
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fractional COO jobs UK - operations executive leading team planning session" className="w-full h-80 md:h-96 object-cover" />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">Operations leaders across the UK are embracing fractional work</figcaption>
          </figure>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional COO jobs</strong> represent the new frontier of operations leadership. Part-time Chief Operating Officer positions where experienced leaders provide strategic operational guidance to multiple companies simultaneously—delivering world-class expertise at a fraction of the cost.
            </p>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional COO Jobs UK</h3>
            <p>The demand for <strong>fractional COO jobs UK</strong> has grown substantially as companies recognise that world-class operations leadership doesn't require a full-time commitment. <a href="https://www.gov.uk/government/organisations/department-for-business-and-trade" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Startups scaling from founder-led to operationally mature</a>, PE portfolio companies, and SMEs professionalising their operations all increasingly turn to fractional COOs.</p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-orange-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Founders access operational expertise for £2,000-£4,000/week vs £150,000+ annually for full-time."</p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional COO Jobs Are Booming</h3>
            <ul className="space-y-3">
              <li><strong>Founder relief:</strong> CEO/founders need operational leadership without permanent overhead</li>
              <li><strong>PE requirements:</strong> Private equity mandates operational excellence</li>
              <li><strong>Cost efficiency:</strong> Access COO expertise at a fraction of full-time cost</li>
              <li><strong>Operational maturity:</strong> Companies need to professionalise as they scale</li>
              <li><strong>Diverse experience:</strong> Fractional COOs bring multi-company best practices</li>
            </ul>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional COO Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Scale-up COO', desc: 'Building operational infrastructure for growth', rate: '£900-£1,300/day' },
                { title: 'PE Portfolio COO', desc: 'Driving value creation for PE investments', rate: '£1,000-£1,400/day' },
                { title: 'Turnaround COO', desc: 'Restructuring and optimising businesses', rate: '£950-£1,350/day' },
                { title: 'Process COO', desc: 'Implementing systems and efficiency', rate: '£800-£1,150/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-orange-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional COO Jobs</h3>
            <ul className="space-y-2">
              <li>15+ years <a href="https://www.cmi.org.uk/professional-development/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">operations and general management experience</a></li>
              <li>5+ years in COO, VP Operations, or Operations Director roles</li>
              <li>Experience scaling operations from startup to mature business</li>
              <li>Strong process design and systems thinking</li>
              <li>Track record building and leading teams</li>
            </ul>
          </article>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As a fractional COO, your IR35 status significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={950} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional COO Jobs UK</h2>
          </div>
          <FAQ items={COO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-orange-400">Fractional COO Role</span></h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional operations leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Create Profile</Link>
            <Link href="/fractional-jobs-startups" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Startup Jobs</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/uk-fractional-jobs-uk-london-fractional-jobs-london" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Fractional Jobs</Link>
              <Link href="/fractional-jobs-startups" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Startup COO Jobs</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">CMO Jobs UK</Link>
              <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">CFO Jobs UK</Link>
              <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">CTO Jobs UK</Link>
              <Link href="/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Top Fractional Recruiters</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
