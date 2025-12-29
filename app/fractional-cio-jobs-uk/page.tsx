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
import { FAQPageSchema } from '@/components/FAQPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CIO Jobs UK 2025 | Part-Time Chief Information Officer Roles',
  description: 'Browse fractional CIO jobs UK - part-time Chief Information Officer roles paying £800-£1,400/day. Find remote & hybrid fractional CIO opportunities for experienced IT leaders. Interim CIO positions available.',
  keywords: 'fractional cio jobs, fractional cio jobs uk, part time cio, part-time cio, interim cio jobs uk, fractional chief information officer, fractional cio opportunities, fractional cio uk, fractional cio salary, fractional cio remote, fractional it director',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cio-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CIO Jobs UK 2025 | Part-Time Chief Information Officer Roles',
    description: 'Fractional CIO jobs UK - Part-time Chief Information Officer positions paying £800-£1,400/day. Remote, hybrid & interim CIO roles available.',
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
    answer: 'Fractional CIO day rates in the UK typically range from £800 to £1,400 per day. Rates can vary based on sector (e.g., Financial Services pays more) and the complexity of the digital transformation required. Annual earnings for fractional CIOs typically range from £70,000 to £180,000+ depending on client load.',
  },
  {
    question: 'What is the difference between a Fractional CIO and a Fractional CTO?',
    answer: 'A Fractional CIO typically focuses on internal IT operations, digital transformation, vendor management, and information systems that support the business. A Fractional CTO focuses more on building external-facing products, software engineering, and R&D. In smaller companies, these roles sometimes overlap.',
  },
  {
    question: 'What industries hire Fractional CIOs?',
    answer: 'Industries with heavy reliance on IT infrastructure, such as Manufacturing, Healthcare, Logistics, Financial Services, and Professional Services, frequently hire Fractional CIOs to modernise their systems and oversee digital transformation projects.',
  },
  {
    question: 'How many days per week do fractional CIOs work?',
    answer: 'Most fractional CIO engagements involve 1-3 days per week, though this varies by client needs. Some fractional CIOs work with multiple clients simultaneously, creating a portfolio career. Typical arrangements include 2 days per week for ongoing strategic work, or more intensive periods during transformation projects.',
  },
  {
    question: 'Can I work for multiple companies as a fractional CIO?',
    answer: 'Yes, working with multiple clients is common and often encouraged for fractional CIOs. Many successful fractional CIOs serve 2-4 clients simultaneously, carefully managing their time to ensure each receives quality attention. This portfolio approach provides income stability and diverse experience.',
  },
  {
    question: 'What qualifications do I need for fractional CIO jobs?',
    answer: 'Most fractional CIO roles require 15+ years of IT leadership experience, including previous CIO, IT Director, or senior technology management positions. Relevant certifications (ITIL, TOGAF, cloud certifications) are valuable but not always required. Strong business acumen and board-level communication skills are essential.',
  },
  {
    question: 'Are fractional CIO roles remote or on-site?',
    answer: 'Most fractional CIO jobs offer hybrid arrangements, with a mix of remote work and on-site presence. Strategic planning and board meetings typically require in-person attendance, while day-to-day advisory work can be done remotely. Fully remote fractional CIO roles have increased significantly since 2020.',
  },
  {
    question: 'How long do fractional CIO engagements last?',
    answer: 'Fractional CIO engagements typically last 6-24 months, though some become long-term arrangements spanning several years. Interim CIO roles (covering a vacancy) may be shorter at 3-6 months, while ongoing strategic advisory relationships often continue indefinitely.',
  },
  {
    question: 'What\'s the difference between a fractional CIO and an IT consultant?',
    answer: 'A fractional CIO acts as a part-time member of the leadership team with ongoing accountability for IT strategy and outcomes. An IT consultant typically provides project-based advice without ongoing responsibility. Fractional CIOs have skin in the game and are invested in long-term success.',
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
        title="Fractional CIO Jobs UK | Part-Time Chief Information Officer Roles 2025"
        description="Find fractional CIO, part-time Chief Information Officer and interim CIO positions paying £800-£1,400/day"
        url="https://fractional.quest/fractional-cio-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cio-jobs-uk" />
      <FAQPageSchema faqs={CIO_FAQS} />
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
                Fractional CIO and part-time Chief Information Officer roles for experienced IT leaders.
                Drive digital transformation 2-3 days a week at £800-£1,400/day. Interim CIO and fractional IT director positions across London, Manchester and remote UK.
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CIO & Chief Information Officer Jobs UK</h2>
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
              <strong className="font-semibold text-gray-900">Fractional CIO jobs</strong> are becoming increasingly vital as UK businesses face complex digital challenges. Whether you call it a <strong>fractional Chief Information Officer</strong>, <strong>part-time CIO</strong>, or <strong>interim CIO</strong>, these roles provide strategic technology leadership to align IT with business goals—without the full-time executive price tag.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What is a Fractional CIO?</h3>
            <p>
              A <strong>fractional CIO</strong> (also known as a <strong>part-time Chief Information Officer</strong>) is an experienced technology executive who works with one or more companies on a non-full-time basis. Typically working 1-3 days per week, they provide the same strategic IT leadership as a permanent CIO but at a fraction of the cost.
            </p>
            <p>
              The <strong>fractional CIO</strong> model has grown significantly in the UK, with demand increasing over 150% in the past three years. This reflects a fundamental shift in how mid-market companies access senior technology leadership—particularly SMEs undergoing digital transformation who need CIO-level guidance but cannot justify a £150,000-£250,000 full-time salary.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional CIO Jobs Are Growing</h3>
            <p>
              The demand for <strong>fractional CIO jobs UK</strong> is driven by several converging factors:
            </p>
            <ul className="space-y-3">
              <li><strong>Digital transformation urgency:</strong> Companies need expert guidance on cloud migration, ERP implementation, and IT modernisation</li>
              <li><strong>Cost efficiency:</strong> Access CIO expertise for £2,000-£4,200/week instead of £12,000+ monthly for full-time</li>
              <li><strong>Skills shortage:</strong> The UK faces a shortage of experienced CIOs, making fractional arrangements attractive</li>
              <li><strong>Cybersecurity concerns:</strong> Rising threats require senior security oversight that many SMEs lack</li>
              <li><strong>PE/VC influence:</strong> Private equity firms increasingly mandate <strong>fractional CIO</strong> appointments across portfolio companies</li>
            </ul>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional CIOs deliver enterprise-grade IT strategy to SMEs, turning technology from a cost centre into a competitive advantage."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional CIO Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Fractional CIO', desc: 'Ongoing part-time technology leadership 1-3 days/week', rate: '£900-£1,300/day' },
                { title: 'Interim CIO', desc: 'Cover CIO vacancy or lead transformation project', rate: '£1,000-£1,400/day' },
                { title: 'Part-Time CIO', desc: 'Regular engagement for SMEs needing IT strategy', rate: '£800-£1,200/day' },
                { title: 'Fractional IT Director', desc: 'Hands-on technology management for growing companies', rate: '£700-£1,000/day' },
              ].map((type, i) => (
                <div key={i} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Responsibilities of a Fractional CIO</h3>
            <ul className="space-y-3">
              <li><strong>Digital Transformation:</strong> Leading the shift from legacy systems to modern, cloud-based infrastructure</li>
              <li><strong>IT Strategy:</strong> Developing technology roadmaps aligned with business objectives</li>
              <li><strong>Vendor Management:</strong> Negotiating contracts and managing software/hardware vendor relationships</li>
              <li><strong>IT Governance & Security:</strong> Establishing policies and frameworks for data integrity and compliance</li>
              <li><strong>Team Leadership:</strong> Mentoring IT managers and building high-performing technology teams</li>
              <li><strong>Budget Management:</strong> Optimising IT spend and demonstrating ROI on technology investments</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CIO vs CTO vs IT Director</h3>
            <p>
              While these roles overlap, there are important distinctions for UK businesses:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6 not-prose">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 font-bold">Role</th>
                    <th className="text-left py-2 font-bold">Focus</th>
                    <th className="text-left py-2 font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Fractional CIO</td>
                    <td className="py-2">Internal IT, governance, digital transformation</td>
                    <td className="py-2">Companies modernising IT infrastructure</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Fractional CTO</td>
                    <td className="py-2">Product development, engineering, R&D</td>
                    <td className="py-2">Tech companies building products</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Fractional IT Director</td>
                    <td className="py-2">Day-to-day IT operations, team management</td>
                    <td className="py-2">SMEs needing hands-on IT leadership</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              In many SMEs, a "<strong>Fractional CIO/CTO</strong>" hybrid role is common, combining both internal IT strategy and product technology leadership. Read more in our <Link href="/fractional-cto-jobs-uk" className="text-blue-600 hover:text-blue-800 underline">Fractional CTO Jobs UK</Link> guide.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">How to Become a Fractional CIO</h3>
            <p>
              Transitioning to <strong>fractional CIO jobs</strong> requires experience, positioning, and network building. Most successful <strong>fractional Chief Information Officers</strong> follow this path:
            </p>
            <ol className="list-decimal list-inside space-y-2 my-4">
              <li><strong>Build your track record:</strong> 15+ years in IT leadership, with CIO or IT Director experience</li>
              <li><strong>Develop expertise:</strong> Specialise in cloud migration, cybersecurity, or digital transformation</li>
              <li><strong>Set up your business:</strong> Register a limited company, get professional indemnity insurance</li>
              <li><strong>Build your network:</strong> Connect with PE firms, business advisors, and SME founders</li>
              <li><strong>Land your first client:</strong> Often through existing network or platforms like Fractional Quest</li>
            </ol>
            <p>
              Demand for <strong>fractional CIO jobs UK</strong> is growing rapidly, with many IT leaders successfully building portfolio careers within 6-12 months.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CIO Jobs by Location</h3>
            <p>
              <strong>Fractional CIO jobs</strong> are available across the UK, with highest concentration in major business hubs:
            </p>
            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">London</h4>
                <p className="text-gray-600 text-sm mb-2">Highest volume of <strong>fractional CIO jobs London</strong>. Financial services, fintech, and professional services dominate. Premium rates £1,000-£1,400/day.</p>
                <Link href="/fractional-jobs-london" className="text-blue-600 text-sm font-medium hover:underline">London Roles →</Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Manchester</h4>
                <p className="text-gray-600 text-sm mb-2">Growing hub for <strong>fractional CIO</strong> roles. Strong in manufacturing, logistics, and digital agencies. Rates £800-£1,200/day.</p>
                <Link href="/fractional-jobs-uk?location=Manchester" className="text-blue-600 text-sm font-medium hover:underline">Manchester Roles →</Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Remote UK</h4>
                <p className="text-gray-600 text-sm mb-2"><strong>Remote fractional CIO jobs</strong> have grown 200%+ since 2020. Most offer hybrid flexibility with occasional on-site days.</p>
                <Link href="/remote" className="text-blue-600 text-sm font-medium hover:underline">Remote Roles →</Link>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CIO Salary & Rates UK</h3>
            <p>
              <strong>Fractional CIO salary</strong> in the UK is typically quoted as day rates rather than annual figures. Rates vary by experience, sector, and engagement complexity:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6 not-prose">
              <h4 className="font-bold text-gray-900 mb-4">Typical Fractional CIO Day Rates (UK 2025)</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Entry-level fractional IT Director:</strong> £600-£800/day</li>
                <li><strong>Mid-level fractional CIO:</strong> £800-£1,100/day</li>
                <li><strong>Senior fractional CIO:</strong> £1,100-£1,400/day</li>
                <li><strong>Specialist CIO (Finance/Healthcare):</strong> £1,200-£1,600/day</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">Based on 2-3 days per week engagement, <strong>fractional CIO</strong> annual earnings typically range from £70,000 to £180,000+ depending on client load.</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Who Hires Fractional CIOs?</h3>
            <p>
              <strong>Fractional CIO jobs</strong> are most common in these company types:
            </p>
            <ul className="space-y-2">
              <li><strong>PE-backed companies:</strong> Portfolio companies needing IT due diligence and transformation</li>
              <li><strong>Scale-ups:</strong> Fast-growing businesses outgrowing their IT infrastructure</li>
              <li><strong>SMEs (£5m-£50m revenue):</strong> Companies needing CIO expertise without full-time cost</li>
              <li><strong>Manufacturing:</strong> Businesses digitising operations and supply chains</li>
              <li><strong>Healthcare:</strong> Organisations managing sensitive data and compliance requirements</li>
              <li><strong>Professional services:</strong> Law firms, accountancies, and consultancies modernising systems</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Skills Required for Fractional CIO Jobs</h3>
            <p>
              Most <strong>fractional CIO jobs UK</strong> require a combination of technical expertise and business acumen:
            </p>
            <ul className="space-y-2">
              <li><strong>Cloud & infrastructure:</strong> AWS, Azure, GCP experience; enterprise architecture</li>
              <li><strong>Cybersecurity:</strong> Risk frameworks, compliance (ISO 27001, Cyber Essentials)</li>
              <li><strong>Digital transformation:</strong> ERP implementation, process automation, AI/ML adoption</li>
              <li><strong>Vendor management:</strong> Contract negotiation, SLA management</li>
              <li><strong>Leadership:</strong> Team building, stakeholder management, board-level communication</li>
              <li><strong>Business acumen:</strong> Understanding P&L impact, ROI justification</li>
            </ul>
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
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional CIO, interim CIO, or part-time Chief Information Officer leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-blue-900 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="cto" /> 
    </div>
  )
}