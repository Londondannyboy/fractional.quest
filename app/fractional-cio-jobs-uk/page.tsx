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
  title: 'Fractional CIO Jobs UK 2025',
  description: 'Fractional CIO jobs UK. Part-time CIO roles for tech leaders. £800-£1,400/day.',
  keywords: 'fractional cio jobs, fractional cio jobs uk, part time cio, part-time cio, cio part time, fractional cio opportunities, fractional cio uk, part time chief information officer, fractional cio remote',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cio-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CIO Jobs UK | Part-Time CIO Roles 2025',
    description: 'Fractional CIO jobs UK - Find part-time CIO positions paying £800-£1,400/day. Remote & hybrid available.',
    images: ['/images/fractional-cio-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cio-jobs-uk',
  },
}

async function getCIOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Engineering' OR title ILIKE '%CIO%' OR title ILIKE '%Chief Information%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Engineering' OR title ILIKE '%CIO%' OR title ILIKE '%Chief Information%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 32, remoteCount: 15 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Engineering' OR title ILIKE '%CIO%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCIOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Engineering' OR title ILIKE '%CIO%' OR title ILIKE '%Chief Information%')
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

const CIO_FAQS = [
  {
    question: 'What is a Fractional CIO?',
    answer: 'A Fractional CIO (Chief Information Officer) is an experienced technology executive who works with companies on a part-time basis, typically 1-3 days per week. They provide strategic IT leadership, digital transformation guidance, and technology governance without the cost of a full-time CIO.',
  },
  {
    question: 'How much do Fractional CIO jobs pay in the UK?',
    answer: 'Fractional CIO day rates in the UK typically range from £800 to £1,400 per day. Rates can vary based on sector (e.g., Financial Services pays more) and the complexity of the digital transformation required.',
  },
  {
    question: 'What is the difference between a Fractional CIO and a Fractional CTO?',
    answer: 'A Fractional CIO typically focuses on internal IT operations, digital transformation, vendor management, and information systems that support the business. A Fractional CTO focuses more on building external-facing products, software engineering, and R&D. In smaller companies, these roles sometimes overlap.',
  },
  {
    question: 'What industries hire Fractional CIOs?',
    answer: 'Industries with heavy reliance on IT infrastructure, such as Manufacturing, Healthcare, Logistics, and Professional Services, frequently hire Fractional CIOs to modernise their systems and oversee digital transformation projects.',
  },
]

export default async function FractionalCioJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCIOStats(),
    getFeaturedCompanies(),
    getCIOJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CIO Jobs UK | Part-Time CIO Roles 2025"
        description="Find part-time CIO positions paying £800-£1,400/day"
        url="https://fractional.quest/fractional-cio-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cio-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cio', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Technology Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CIO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Information Officer roles for experienced IT leaders.
                Drive digital transformation for 2-3 days a week at £800-£1,400/day.
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
                <Link href="#jobs" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-cto-salary" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Salary Guide
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">How Much Can You Earn as a Fractional CIO?</h2>
          </div>
          <RoleCalculator role="cto" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CIO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CIO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-blue-800 to-indigo-900">
                     <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CIO</div>
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
                      View fractional CIO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Engineering"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
            >
              View All {stats.total}+ Fractional CIO Jobs UK
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
              A Guide to <span className="text-blue-600">Fractional CIO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-blue-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CIO jobs</strong> are becoming increasingly vital as UK businesses face complex digital challenges. A part-time Chief Information Officer provides the strategic vision to align technology with business goals, ensuring robust infrastructure, security, and digital scalability—without the full-time executive price tag.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why the Surge in Fractional CIO Roles?</h3>
            <p>
              The demand for <strong className="font-semibold">fractional CIO jobs in the UK</strong> is driven by the need for digital transformation in mid-market companies. Organisations that cannot afford a £180k+ full-time CIO still need high-level guidance on cloud migration, ERP implementation, and cybersecurity. A fractional CIO bridges this gap, delivering expert governance and strategy for a few days a month.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional CIOs deliver enterprise-grade IT strategy to SMEs, turning technology from a cost centre into a competitive advantage."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              <li><strong>Digital Transformation:</strong> Leading the shift from legacy systems to modern, cloud-based infrastructure.</li>
              <li><strong>Vendor Management:</strong> Negotiating contracts and managing relationships with software and hardware vendors to optimise costs.</li>
              <li><strong>IT Governance & Security:</strong> Establishing policies and frameworks to ensure data integrity and compliance (often working alongside a CISO).</li>
              <li><strong>Strategic Planning:</strong> Aligning the technology roadmap with the company's long-term business objectives.</li>
              <li><strong>Team Leadership:</strong> Mentoring IT managers and teams to improve performance and delivery.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CIO vs. CTO</h3>
            <p>
              While both roles deal with technology, a <Link href="/fractional-cio-jobs-uk" className="text-blue-600 hover:text-blue-800 underline">Fractional CIO</Link> typically focuses on internal systems, efficiency, and information flow (ERP, CRM, Helpdesk). In contrast, a <Link href="/fractional-cto-jobs-uk" className="text-blue-600 hover:text-blue-800 underline">Fractional CTO</Link> is often more external-facing, focusing on product development and software engineering for customers. However, in many SMEs, a "Fractional CIO/CTO" hybrid role is common.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Market Rates & Expectations</h3>
             <p>
              Experienced Fractional CIOs in the UK command day rates between <strong>£800 and £1,400</strong>. Rates are influenced by industry complexity—for example, CIOs in highly regulated sectors like Finance or Healthcare often secure higher premiums due to the rigorous compliance requirements involved.
            </p>
          </article>
        </div>
      </section>

      {/* Finance/Tech News - borrowing Engineering category */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Engineering" title="Latest Tech Leadership News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CIO Jobs</h2>
          </div>
          <FAQ items={CIO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-blue-400">Fractional CIO Role</span></h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking strategic IT leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="cto" /> 
    </div>
  )
}