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
  title: 'Fractional CCO Jobs UK 2025',
  description: 'Fractional CCO jobs UK. Part-time Chief Compliance Officer roles. £800-£1,300/day.',
  keywords: 'fractional cco jobs, fractional cco jobs uk, part time cco, part-time chief compliance officer, cco part time, fractional compliance opportunities, fractional risk jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cco-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CCO Jobs UK | Part-Time Chief Compliance Officer Roles',
    description: 'Fractional CCO jobs UK - Find part-time CCO positions paying £800-£1,300/day. Remote & hybrid available.',
    images: ['/images/fractional-cco-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cco-jobs-uk',
  },
}

async function getCCOStats() {
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
    return { total: 15, remoteCount: 6 }
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
async function getCCOJobs() {
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

const CCO_FAQS = [
  {
    question: 'What is a Fractional CCO?',
    answer: 'A Fractional CCO (Chief Compliance Officer) is an experienced risk and compliance executive who helps organisations navigate regulatory requirements on a part-time basis. They build compliance frameworks, manage risk, and deal with regulators like the FCA or ICO.',
  },
  {
    question: 'How much do Fractional CCO jobs pay in the UK?',
    answer: 'Fractional CCO day rates in the UK typically range from £800 to £1,300 per day. Rates are particularly high in the FinTech and HealthTech sectors due to the complexity and severity of regulatory penalties.',
  },
  {
    question: 'Why do companies hire Fractional CCOs?',
    answer: 'Early-stage FinTechs and regulated businesses need senior compliance oversight to obtain licences (like FCA authorisation) but often cannot afford a full-time CCO. A fractional CCO provides the necessary "approved person" status and strategic oversight.',
  },
  {
    question: 'What sectors are most active for Fractional CCOs?',
    answer: 'Financial Services (FinTech, WealthTech, Crypto) is the dominant sector. However, Healthcare (CQC compliance) and Data-heavy industries (GDPR) also frequently hire fractional compliance leadership.',
  },
]

export default async function FractionalCcoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCCOStats(),
    getFeaturedCompanies(),
    getCCOJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CCO Jobs UK | Part-Time Chief Compliance Officer Roles"
        description="Find part-time CCO positions paying £800-£1,300/day"
        url="https://fractional.quest/fractional-cco-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cco-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-gray-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cco', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Risk & Compliance
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CCO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Compliance Officer roles for experienced risk leaders.
                Manage regulatory strategy and governance for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,100</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-compliance-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Compliance Roles
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CCO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CCO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-slate-600 to-gray-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CCO</div>
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
                      View fractional CCO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Compliance"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
            >
              View All {stats.total}+ Fractional CCO Jobs UK
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
              A Guide to <span className="text-slate-600">Fractional CCO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CCO jobs</strong> are critical for businesses operating in regulated environments. According to <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">CIPD research</a>, senior compliance roles are increasingly embracing flexible models. A part-time Chief Compliance Officer ensures that growth doesn't come at the expense of legal and regulatory obligations, providing expert oversight on frameworks like <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">UK GDPR</a>, <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">FCA regulations</a>, and ISO standards.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Navigating Regulatory Complexity</h3>
            <p>
              For FinTechs, HealthTechs, and InsurTechs, compliance is existential. However, a full-time CCO with 15+ years of experience commands a significant salary. A <strong className="font-semibold">Fractional CCO</strong> offers a strategic solution: high-level guidance on licence applications, risk assessments, and policy frameworks for a few days a month.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-slate-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional CCOs allow startups to build 'compliance by design' from day one, avoiding costly remediation later."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What the Role Involves</h3>
            <ul className="space-y-3">
              <li><strong>Regulatory Liaison:</strong> Acting as the point of contact for bodies like the <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">FCA</a>, <a href="https://www.bankofengland.co.uk/prudential-regulation" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">PRA</a>, or <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">ICO</a>.</li>
              <li><strong>Framework Design:</strong> Building policies and procedures (<a href="https://www.gov.uk/guidance/money-laundering-regulations-your-responsibilities" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">AML</a>, KYC, <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">Data Protection</a>) that form the company's compliance backbone.</li>
              <li><strong>Risk Management:</strong> Identifying and mitigating operational and regulatory risks in line with <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">IoD governance standards</a>.</li>
              <li><strong>Culture & Training:</strong> Embedding a culture of compliance across the organisation, supported by <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">CIPD best practices</a>.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Market Demand</h3>
            <p>
              The UK's status as a global FinTech hub, as highlighted by <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">Tech Nation research</a>, drives strong demand for <Link href="/fractional-cco-jobs-uk" className="text-slate-600 hover:text-slate-800 underline">fractional compliance officers</Link>. According to <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">ONS employment data</a>, professional services roles are increasingly adopting flexible working patterns. As regulations around <a href="https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">AI</a> and <a href="https://www.fca.org.uk/firms/cryptoassets" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 underline">crypto assets</a> evolve, the need for specialised, flexible compliance talent is set to grow even further.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Compliance" title="Latest Regulatory News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CCO Jobs</h2>
          </div>
          <FAQ skipSchema={true} items={CCO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-slate-400">Fractional CCO Role</span></h2>
          <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking compliance leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-slate-900 font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="compliance" /> 
    </div>
  )
}
