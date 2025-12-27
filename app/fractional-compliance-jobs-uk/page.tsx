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
  title: 'Fractional Compliance Jobs UK | Part-Time Compliance Roles',
  description: 'Fractional Compliance jobs UK - Find part-time Compliance Officer positions paying £500-£900/day. Browse live compliance roles for experienced professionals. Remote & hybrid available.',
  keywords: 'fractional compliance jobs, fractional compliance officer jobs uk, part time compliance officer, fractional compliance roles, part time compliance jobs, compliance consultant jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-compliance-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Compliance Jobs UK | Part-Time Compliance Roles',
    description: 'Fractional Compliance jobs UK - Find part-time Compliance Officer positions paying £500-£900/day. Remote & hybrid available.',
    images: ['/images/fractional-compliance-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-compliance-jobs-uk',
  },
}

async function getComplianceStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Compliance' OR title ILIKE '%Compliance%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Compliance' OR title ILIKE '%Compliance%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 20, remoteCount: 8 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Compliance' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getComplianceJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Compliance'
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

const COMPLIANCE_FAQS = [
  {
    question: 'What is a Fractional Compliance Officer?',
    answer: 'A Fractional Compliance Officer is an experienced professional who manages a company\'s regulatory obligations on a part-time basis. They ensure the business adheres to laws and regulations (like FCA rules or GDPR) without the cost of a full-time hire.',
  },
  {
    question: 'How much do Fractional Compliance jobs pay?',
    answer: 'Day rates for Fractional Compliance Officers in the UK typically range from £500 to £900. Senior roles (Head of Compliance) or those in complex sectors like FinTech can command higher rates.',
  },
  {
    question: 'Which industries hire Fractional Compliance Officers?',
    answer: 'Financial Services (FinTech, Wealth Management), Healthcare, Insurance, and Legal sectors are the biggest employers. Any regulated industry needs compliance oversight, making fractional roles common.',
  },
  {
    question: 'Is this role suitable for remote work?',
    answer: 'Yes, much compliance work involves policy writing, monitoring, and reporting, which can be done remotely. However, site visits or audits may require some travel.',
  },
]

export default async function FractionalComplianceJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getComplianceStats(),
    getFeaturedCompanies(),
    getComplianceJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Compliance Jobs UK | Part-Time Compliance Roles"
        description="Find part-time Compliance Officer positions paying £500-£900/day"
        url="https://fractional.quest/fractional-compliance-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-compliance-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 via-slate-700/80 to-gray-800/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('compliance', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Regulatory Compliance
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Compliance Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Compliance Officer roles for experienced professionals.
                Manage risk and regulation for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£750</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-slate-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-cco-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CCO Jobs
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Compliance Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional compliance jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-slate-500 to-gray-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">COMP</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-slate-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-700">
                      View fractional compliance job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Compliance"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-600 text-white font-bold rounded-lg hover:bg-slate-700 transition-colors"
            >
              View All {stats.total}+ Fractional Compliance Jobs UK
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
              A Guide to <span className="text-slate-600">Fractional Compliance Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-slate-600"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Compliance Officer jobs</strong> are essential for keeping UK businesses on the right side of the law. Whether it's AML checks in FinTech or CQC standards in Healthcare, these part-time roles provide the oversight needed for safe, legal growth.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why the Need?</h3>
            <p>
              Regulation is becoming more complex, not less. But for many SMEs, a full-time compliance team is overkill. A <strong className="font-semibold">Fractional Compliance Officer</strong> offers a "Goldilocks" solution: the right amount of expertise for the right amount of time. They set up the frameworks, train the staff, and conduct the audits that keep the regulators happy.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-slate-600">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Compliance isn\'t just a cost centre; it\'s a licence to operate. Fractional experts secure that licence efficiently."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Tasks</h3>
            <ul className="space-y-3">
              <li><strong>Policy Development:</strong> Writing and updating the employee handbooks and compliance manuals.</li>
              <li><strong>Monitoring & Testing:</strong> Checking that the rules are actually being followed (e.g., call monitoring, file reviews).</li>
              <li><strong>Training:</strong> Educating staff on their responsibilities (e.g., anti-bribery, data protection).</li>
              <li><strong>Regulatory Reporting:</strong> Submitting required returns to bodies like the FCA.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Career Path</h3>
            <p>
              For compliance professionals, <Link href="/fractional-compliance-jobs-uk" className="text-slate-600 hover:text-slate-800 underline">fractional work</Link> offers variety and high day rates. It's a way to escape the grind of a single large institution and make a tangible impact across multiple growing businesses.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Compliance" title="Latest Compliance News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional Compliance Jobs</h2>
          </div>
          <FAQ skipSchema={true} items={COMPLIANCE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-slate-400">Fractional Compliance Role</span></h2>
          <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking compliance experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-slate-800 font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      {/* Compliance Cluster Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Explore More</span>
            <h2 className="text-3xl font-black text-gray-900">Compliance Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/compliance" className="group bg-white p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Compliance Hub</h3>
              <p className="text-gray-600 text-sm">Everything about compliance careers and opportunities.</p>
            </Link>
            <Link href="/fractional-compliance-services" className="group bg-white p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Hire a Compliance Officer</h3>
              <p className="text-gray-600 text-sm">Find vetted fractional compliance professionals.</p>
            </Link>
            <Link href="/interim-compliance-officer" className="group bg-white p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Interim Compliance</h3>
              <p className="text-gray-600 text-sm">Full-time temporary compliance leadership.</p>
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
              <Link href="/compliance" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Compliance Hub</Link>
              <Link href="/fractional-compliance-services" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Compliance Services</Link>
              <Link href="/part-time-compliance-jobs-uk" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Part-Time Compliance</Link>
              <Link href="/fractional-compliance-fintech" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">FinTech Compliance</Link>
              <Link href="/fractional-mlro-uk" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">MLRO Jobs</Link>
            </div>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="compliance" />
    </div>
  )
}