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
  title: 'Fractional CRO Jobs UK: Revenue Roles',
  description: 'Fractional CRO jobs UK. Part-time CRO positions paying £1,000-£1,800/day. Browse live roles for sales & growth leaders.',
  keywords: 'fractional cro jobs, fractional cro jobs uk, part time cro, part-time chief revenue officer, cro part time, fractional cro opportunities, fractional sales jobs, head of sales part time',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cro-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CRO Jobs UK | Part-Time Chief Revenue Officer Roles',
    description: 'Fractional CRO jobs UK - Find part-time CRO positions paying £1,000-£1,800/day. Remote & hybrid available.',
    images: ['/images/fractional-cro-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cro-jobs-uk',
  },
}

async function getCROStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%CRO%' OR title ILIKE '%Chief Revenue%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%CRO%' OR title ILIKE '%Chief Revenue%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 28, remoteCount: 10 }
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
async function getCROJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Sales'
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

const CRO_FAQS = [
  {
    question: 'What is a Fractional CRO?',
    answer: 'A Fractional CRO (Chief Revenue Officer) is an experienced sales and growth executive who works with companies on a part-time basis. They align sales, marketing, and customer success teams to drive revenue growth, without the cost of a full-time hire.',
  },
  {
    question: 'How much do Fractional CRO jobs pay in the UK?',
    answer: 'Fractional CRO day rates in the UK are among the highest for fractional roles, ranging from £1,000 to £1,800 per day. This reflects the direct impact they have on the company\'s bottom line and growth trajectory.',
  },
  {
    question: 'What does a Fractional CRO do?',
    answer: 'They oversee the entire revenue engine. This includes setting sales strategy, optimising pricing, managing the sales team, aligning marketing with sales, implementing RevOps systems, and reducing churn through customer success initiatives.',
  },
  {
    question: 'When should a company hire a Fractional CRO?',
    answer: 'Companies often hire a Fractional CRO when they have hit a revenue plateau, are preparing for a major funding round and need to show predictable growth, or when the founder can no longer manage sales alongside other duties.',
  },
]

export default async function FractionalCroJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCROStats(),
    getFeaturedCompanies(),
    getCROJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CRO Jobs UK | Part-Time Chief Revenue Officer Roles"
        description="Find part-time CRO positions paying £1,000-£1,800/day"
        url="https://fractional.quest/fractional-cro-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cro-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-teal-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cro', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Revenue Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CRO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Revenue Officer roles for experienced growth leaders.
                Drive sales strategy and revenue alignment for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,400</div>
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
                <Link href="/fractional-sales-director-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Sales Director Jobs
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CRO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CRO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-green-600 to-emerald-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CRO</div>
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
                      View fractional CRO job →
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
              View All {stats.total}+ Fractional CRO Jobs UK
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
              A Guide to <span className="text-green-600">Fractional CRO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-green-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CRO jobs</strong> are for the architects of growth. According to <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">CIPD flexible working research</a>, senior revenue leadership is increasingly embracing part-time and portfolio models. A Fractional Chief Revenue Officer unifies sales, marketing, and customer success under one strategic vision, driving predictable revenue generation for high-growth companies. The <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">UK tech sector</a> is leading this trend.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Revenue Engine Architect</h3>
            <p>
              In many UK startups and scale-ups, sales and marketing operate in silos. A <strong className="font-semibold">Fractional CRO</strong> bridges this divide. Unlike a Sales Director who focuses on closing deals, a CRO focuses on the entire customer lifecycle—from acquisition to retention. Hiring a fractional CRO allows smaller companies to access this high-level strategic alignment without the £200k+ cost of a full-time executive.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-green-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"A Fractional CRO doesn't just manage sales; they build the machine that makes revenue predictable and scalable."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What Sets CROs Apart?</h3>
            <ul className="space-y-3">
              <li><strong>Full Funnel Accountability:</strong> Owning the journey from lead generation to close and renewal, aligned with <a href="https://www.cim.co.uk/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">CIM marketing standards</a>.</li>
              <li><strong>RevOps Focus:</strong> Implementing data, systems, and tools (Salesforce, HubSpot) that provide pipeline visibility per <a href="https://ico.org.uk/for-organisations/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">ICO data handling guidelines</a>.</li>
              <li><strong>Pricing Strategy:</strong> Optimising pricing models with insights from <a href="https://www.ons.gov.uk/economy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">ONS economic data</a>.</li>
              <li><strong>Go-to-Market Strategy:</strong> Defining target markets using <a href="https://www.gov.uk/business-finance-support" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">government business resources</a> and market research.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Market Outlook</h3>
            <p>
              Demand for <Link href="/fractional-cro-jobs-uk" className="text-green-600 hover:text-green-800 underline">fractional revenue leaders</Link> is surging in the UK's B2B SaaS sector. <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">BVCA research</a> shows that investors now demand clear unit economics and retention metrics—the exact expertise a Fractional CRO provides. The <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">British Business Bank</a> notes the shift from "growth at all costs" to "efficient growth" across UK scale-ups. As <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 underline">IoD governance standards</a> evolve, experienced revenue leadership becomes essential.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Sales" title="Latest Sales & Revenue News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CRO Jobs</h2>
          </div>
          <FAQ items={CRO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-green-400">Fractional CRO Role</span></h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking revenue leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-green-900 font-bold uppercase tracking-wider hover:bg-green-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      {/* CRO Cluster Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Explore More</span>
            <h2 className="text-3xl font-black text-gray-900">Revenue & Sales Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/cro" className="group bg-white p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">CRO Hub</h3>
              <p className="text-gray-600 text-sm">Everything about Chief Revenue Officer roles and careers.</p>
            </Link>
            <Link href="/fractional-cro-services" className="group bg-white p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Hire a Fractional CRO</h3>
              <p className="text-gray-600 text-sm">Looking to hire? Find vetted fractional CROs for your revenue team.</p>
            </Link>
            <Link href="/sales" className="group bg-white p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">All Sales Jobs</h3>
              <p className="text-gray-600 text-sm">Browse all fractional sales and revenue leadership roles.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/cro" className="text-gray-700 hover:text-green-600 font-medium transition-colors">CRO Hub</Link>
              <Link href="/fractional-cro-services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">CRO Services</Link>
              <Link href="/interim-cro" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Interim CRO</Link>
              <Link href="/fractional-sales-director-jobs-uk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Sales Director Jobs</Link>
              <Link href="/sales" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Sales Hub</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">CMO Jobs</Link>
            </div>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="cmo" />
    </div>
  )
}
