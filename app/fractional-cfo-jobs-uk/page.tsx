import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ, CFO_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleContentHub } from '@/components/RoleContentHub'
import { RoleNews } from '@/components/RoleNews'
import { FracSection } from '@/components/FracSection'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO Jobs UK | Part-Time Chief Financial Officer Roles 2025',
  description: 'Fractional CFO jobs UK - Find part-time Chief Financial Officer positions paying £800-£1,500/day. Browse fractional CFO job descriptions, requirements & live CFO roles. Remote & hybrid fractional finance manager opportunities available.',
  keywords: 'fractional cfo jobs, fractional cfo jobs uk, part time cfo, part-time cfo, cfo part time, fractional cfo opportunities, fractional cfo uk, part time chief financial officer, fractional cfo remote, fractional chief financial officer, fractional cfo job description, fractional finance manager',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CFO Jobs UK | Part-Time Chief Financial Officer Roles 2025',
    description: 'Fractional CFO jobs - Find part-time CFO positions paying £800-£1,500/day. Remote & hybrid available.',
    images: ['/images/fractional-cfo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cfo-jobs-uk',
  },
}

async function getFinanceStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Finance'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Finance' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 45, remoteCount: 18 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Finance' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - renders in initial HTML for crawlers
async function getFinanceJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Finance'
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

export default async function FractionalCfoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getFinanceStats(),
    getFeaturedCompanies(),
    getFinanceJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Cleaner Look */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="container-content">
            <Link href="/" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors text-sm font-medium">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-3xl">
                <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Finance Leadership
                </span>
                <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Fractional CFO Jobs UK
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
                  Fractional Chief Financial Officer opportunities for experienced finance leaders.
                  Part-time CFO roles paying £800-£1,500/day. Work 2-3 days a week as a fractional finance manager.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#jobs" className="px-8 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-black transition-colors shadow-lg">
                    Browse Jobs
                  </Link>
                  <Link href="/fractional-cfo-salary" className="px-8 py-4 border border-gray-200 text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                    Salary Guide
                  </Link>
                </div>
              </div>

              {/* Frac Section Integration */}
              <div className="hidden lg:block lg:w-80">
                <FracSection title="Talk with Frac about CFO roles" />
              </div>
            </div>
        </div>
      </section>

      {/* Stats Bar - Clean */}
      <section className="bg-gray-50 py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.total}+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Live Roles</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">£1,050</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Avg Day Rate</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.remoteCount}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Remote Roles</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">2-3 days</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Avg Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS BOARD */}
      <section id="jobs" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <EmbeddedJobBoard 
            defaultDepartment="Finance" 
            title="Latest Fractional CFO Jobs" 
            pageSlug="fractional-cfo-jobs-uk"
          />
        </div>
      </section>

      {/* Server-rendered Jobs for SEO */}
      <section className="sr-only">
        {jobs.map(job => (
          <div key={job.id}>
            <h3>{job.title} at {job.company_name}</h3>
            <p>{job.description_snippet}</p>
            <a href={`/fractional-job/${job.slug}`}>View Job</a>
          </div>
        ))}
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Earnings</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">How Much Can You Earn?</h2>
          </div>
          <RoleCalculator role="cfo" />
        </div>
      </section>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Companies Seeking CFOs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-gray-900 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">The Guide</span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br /><span className="text-blue-600">Fractional CFO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-gray-900"></div>
          </div>
          <figure className="mb-16 -mx-6 lg:-mx-16 rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fractional CFO jobs UK" className="w-full h-80 md:h-96 object-cover" />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 bg-white py-2">Finance leaders across the UK are embracing fractional work</figcaption>
          </figure>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CFO jobs</strong> represent the new frontier of finance leadership. <strong>Part time CFO</strong> and <strong>fractional chief financial officer</strong> positions where experienced leaders provide strategic financial guidance to multiple companies simultaneously—delivering world-class expertise at a fraction of the cost.
            </p>
            {/* Rest of the content preserved but styled consistently */}
             <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">The Rise of Fractional CFO Jobs UK</h3>
            <p>The UK market for <strong>fractional CFO jobs UK</strong> has grown by over 180% in the past three years. This surge reflects a fundamental shift in how companies access senior finance talent, particularly among <a href="https://www.gov.uk/business-finance-support" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">startups, scale-ups, and SMEs</a> that need experienced financial leadership but cannot justify a full-time CFO salary of £150,000-£300,000.</p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-gray-900 rounded-r-lg">
              <p className="text-xl font-serif italic text-gray-900 mb-0">"Companies access CFO expertise for £2,000-£5,000/week instead of £12,500+ monthly for full-time."</p>
            </div>
            
            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Why Fractional CFO Jobs Are Booming</h3>
            <ul className="space-y-3">
              <li><strong>Cost efficiency:</strong> Senior expertise at a fraction of the cost</li>
              <li><strong>Flexibility:</strong> Scale finance leadership based on current needs</li>
              <li><strong>Quality talent:</strong> Access CFOs with diverse, multi-industry experience</li>
              <li><strong>Speed to impact:</strong> No lengthy recruitment—start adding value within days</li>
              <li><strong>PE/VC influence:</strong> <a href="https://www.bvca.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Investors mandate fractional CFOs</a> across portfolios</li>
            </ul>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Types of Fractional CFO Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Startup CFO', desc: 'Series A-C fundraising & investor relations', rate: '£1,000-£1,400/day' },
                { title: 'PE Portfolio CFO', desc: 'Financial transformation & value creation', rate: '£1,100-£1,500/day' },
                { title: 'Scale-up CFO', desc: 'Professionalising finance function', rate: '£950-£1,300/day' },
                { title: 'Exit-ready CFO', desc: 'Due diligence & IPO preparation', rate: '£1,100-£1,500/day' },
              ].map((type, i) => (
                <div key={i} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Fractional CFO Job Description</h3>
            <p>
              A typical <strong>fractional CFO job description</strong> includes strategic financial leadership on a part-time basis. The <strong>fractional chief financial officer</strong> role encompasses financial strategy, cash flow management, fundraising support, investor relations, and board-level reporting. Unlike a <strong>fractional finance manager</strong> who handles day-to-day operations, a fractional CFO focuses on strategic financial direction and high-level decision making.
            </p>
            <p>
              Key responsibilities in a <strong>fractional CFO job description</strong> typically include: developing financial models and forecasts, managing relationships with investors and lenders, overseeing financial reporting and compliance, building and mentoring finance teams, and providing strategic guidance to the CEO and board. Most <strong>fractional CFO opportunities</strong> require 2-3 days per week commitment.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Requirements</h3>
            <p>
              Most <strong>fractional CFO jobs</strong> and <strong>part time CFO</strong> opportunities require extensive qualifications and experience. Professional bodies like <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW</a>, <a href="https://www.accaglobal.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a>, and <a href="https://www.cimaglobal.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIMA</a> provide the professional credibility essential for <strong>fractional chief financial officer</strong> roles.
            </p>
          </article>
        </div>
      </section>

      {/* Part-Time CFO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Alternative Term</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Part-Time CFO Jobs UK</h2>
            <p className="text-xl text-gray-600 mt-4">The terms "part-time CFO" and "fractional CFO" are often used interchangeably</p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              <strong>Part-time CFO</strong> roles are identical to <strong>fractional CFO jobs</strong>—both describe Chief Financial Officers who work with companies on a non-full-time basis.
            </p>

            <div className="bg-white p-6 border border-gray-200 rounded-lg my-8 not-prose shadow-sm">
              <p className="text-gray-900 font-medium mb-3">Looking specifically for part-time CFO opportunities?</p>
              <Link href="/part-time-cfo" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900">
                Read our Part-Time CFO Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">UK Tax</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As a fractional CFO, your IR35 status significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={1050} />
        </div>
      </section>

      {/* Finance News */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Finance" title="Latest CFO & Finance News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">FAQ</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <FAQ items={CFO_FAQS} title="" />
        </div>
      </section>

      {/* CTA - Fixed Colors */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Ready?</span>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold mb-6 leading-tight">Find Your Next<br /><span className="text-blue-400">Fractional CFO Role</span></h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional finance leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-gray-900 font-bold rounded-lg uppercase tracking-wider hover:bg-gray-100 transition-colors">Create Profile</Link>
            <Link href="/fractional-cfo-salary" className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors">Salary Guide</Link>
          </div>
        </div>
      </section>

      {/* Content Hub */}
      <RoleContentHub currentRole="cfo" />
    </div>
  )
}
