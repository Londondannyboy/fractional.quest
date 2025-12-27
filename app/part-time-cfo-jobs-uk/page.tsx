import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ, CFO_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleNews } from '@/components/RoleNews'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time CFO Jobs UK | Fractional CFO & Remote CFO Roles 2025',
  description: 'Part-time CFO jobs & fractional CFO roles in the UK. Remote CFO jobs paying £800-£1,500/day. Part-time chief financial officer positions wanted? Browse CFO jobs in London, Leeds, Manchester.',
  keywords: 'part time cfo, part-time cfo, cfo part time, fractional cfo jobs, remote cfo jobs, part time cfo wanted, part time chief financial officer, cfo job, fractional cfo job description, part time cfo leeds, part time cfo london, part time cfo manchester',
  alternates: {
    canonical: 'https://fractional.quest/part-time-cfo-jobs-uk',
  },
  openGraph: {
    title: 'Part-Time CFO Jobs UK | Fractional CFO & Remote CFO Roles',
    description: 'Part-time CFO jobs & fractional CFO roles across the UK. Remote CFO positions paying £800-£1,500/day. Browse CFO jobs now.',
    url: 'https://fractional.quest/part-time-cfo-jobs-uk',
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

export default async function PartTimeCfoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([getFinanceStats(), getFeaturedCompanies(), getFinanceJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Part-Time CFO Jobs UK | Fractional CFO & Remote CFO Roles"
        description="Part-time CFO jobs & fractional CFO roles across the UK. Remote CFO positions paying £800-£1,500/day."
        url="https://fractional.quest/part-time-cfo-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      {/* Editorial Hero with 3D Knowledge Graph */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <JobsGraph3D roleFilter="CFO" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-blue-950/200 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                  Finance Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Part-Time CFO<br />
                <span className="text-blue-400">Jobs UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                <strong className="text-white">Part-time CFO jobs</strong> and <strong className="text-white">fractional CFO jobs</strong> for experienced finance leaders.
                Remote CFO roles and flexible Chief Financial Officer positions paying £800-£1,500/day.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400">{stats.total}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Live Roles</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1,050</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{stats.remoteCount}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-blue-950/200 text-black font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
                  Browse Jobs Now
                </Link>
                <Link href="/fractional-cfo-salary" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">How Much Can You Earn as a Part-Time CFO?</h2>
          </div>
          <RoleCalculator role="cfo" />
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Part-Time CFO Jobs</h2>
            </div>
            <p className="text-gray-500">Pre-filtered to Finance. Change filters to explore.</p>
          </div>
          <ServerJobGrid
            jobs={jobs}
            roleCategory="Finance"
            ctaLink="/fractional-jobs-uk?department=Finance"
            ctaText={`View All ${stats.total}+ CFO Jobs`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* CFO Jobs Knowledge Graph - Desktop Only */}
      <DesktopOnly>
        <section className="py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Interactive Network</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">CFO Jobs Knowledge Graph</h2>
              <p className="text-gray-300 mt-2">Explore CFO roles, skills, and companies in 3D</p>
            </div>
            <JobsGraph3D roleFilter="CFO" limit={25} height="500px" />
          </div>
        </section>
      </DesktopOnly>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Companies Seeking Part-Time CFOs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-700 hover:text-blue-600 transition-colors cursor-default">{company}</span>
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
              Everything You Need to Know About<br /><span className="text-blue-600">Part-Time CFO & Fractional CFO Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-blue-950/200"></div>
          </div>
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Part-time CFO jobs and fractional CFO jobs UK - remote CFO reviewing financial reports"
              title="Part-time CFO jobs UK - Fractional CFO and Remote CFO Roles"
              className="w-full h-80 md:h-96 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">Finance leaders across the UK are embracing part-time CFO, fractional CFO, and remote CFO work arrangements</figcaption>
          </figure>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Part-time CFO jobs</strong> represent the new frontier of finance leadership. Flexible Chief Financial Officer positions where experienced leaders provide strategic financial guidance on a 1-3 day per week basis—delivering world-class expertise without the full-time commitment.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What is a Part-Time CFO?</h3>
            <p>
              A <strong>part-time CFO</strong> (also known as a fractional CFO) is an experienced Chief Financial Officer who works with companies on a flexible basis. Rather than committing to a single full-time role, part-time CFOs typically work with multiple clients, dedicating 1-3 days per week to each engagement.
            </p>
            <p>
              The demand for <strong>part-time CFO jobs UK</strong> has grown by over 180% in the past three years. This surge reflects how startups, scale-ups, and SMEs access senior finance talent—companies that need experienced financial leadership but cannot justify a full-time CFO salary of £150,000-£300,000.
            </p>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-950/200">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Part-time CFO jobs offer the same strategic expertise as full-time roles at a fraction of the cost—typically £2,000-£5,000/week vs £12,500+ monthly for full-time."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Part-Time CFO vs Full-Time CFO</h3>
            <p>
              The key difference lies in engagement structure. A full-time CFO works exclusively for one company, earning £150,000-£300,000 annually. A <strong>part-time Chief Financial Officer</strong> works with 2-4 clients simultaneously, charging day rates of £800-£1,500.
            </p>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-gray-50 p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Part-Time CFO</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 1-3 days per week per client</li>
                  <li>• £800-£1,500/day rates</li>
                  <li>• Multiple clients simultaneously</li>
                  <li>• Flexible, project-based</li>
                  <li>• Contractor/limited company</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Full-Time CFO</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 5 days per week, one company</li>
                  <li>• £150,000-£300,000 salary</li>
                  <li>• Single employer focus</li>
                  <li>• Permanent employment</li>
                  <li>• PAYE with benefits</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Who Hires Part-Time CFOs? (Part-Time CFO Wanted)</h3>
            <p>When a company posts "<strong>part time CFO wanted</strong>", they typically fall into one of these categories:</p>
            <ul className="space-y-3">
              <li><strong>Venture-backed startups:</strong> Series A-C companies needing fundraising and investor relations</li>
              <li><strong>PE portfolio companies:</strong> Private equity firms requiring finance leadership across investments</li>
              <li><strong>Scale-ups:</strong> Fast-growing companies (£5-50m revenue) outgrowing their bookkeeper</li>
              <li><strong>SMEs preparing for exit:</strong> Businesses professionalising finances for sale</li>
              <li><strong>Turnaround situations:</strong> Companies needing experienced financial leadership</li>
            </ul>
            <p className="mt-4">
              If you see a "<strong>part time CFO wanted</strong>" or "<strong>fractional CFO wanted</strong>" listing, these organisations are seeking senior finance talent on a flexible basis—typically 1-3 days per week.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Part-Time CFO Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Startup CFO', desc: 'Series A-C fundraising & investor relations', rate: '£1,000-£1,400/day' },
                { title: 'PE Portfolio CFO', desc: 'Financial transformation & value creation', rate: '£1,100-£1,500/day' },
                { title: 'Scale-up CFO', desc: 'Professionalising finance function', rate: '£950-£1,300/day' },
                { title: 'Exit-ready CFO', desc: 'Due diligence & IPO preparation', rate: '£1,100-£1,500/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Part-Time CFO Job Description & Fractional CFO Job Description</h3>
            <p>Whether you're looking at a <strong>part-time CFO job</strong> or a <strong>fractional CFO job description</strong>, the core responsibilities are similar. A typical <strong>CFO job</strong> at this level includes:</p>
            <ul className="space-y-2">
              <li><strong>Financial Strategy:</strong> Develop and execute strategic financial plans aligned with business goals</li>
              <li><strong>Cash Flow Management:</strong> Forecasting, working capital optimisation, treasury management</li>
              <li><strong>Fundraising:</strong> Lead equity raises, debt facilities, investor relations and board presentations</li>
              <li><strong>Financial Reporting:</strong> Board packs, management accounts, investor reports and compliance</li>
              <li><strong>Team Leadership:</strong> Mentor finance team, implement processes and systems</li>
              <li><strong>M&A Support:</strong> Due diligence, deal structuring, integration planning</li>
            </ul>
            <p className="mt-4">
              The <strong>fractional CFO job description</strong> may also include working across multiple clients, requiring strong time management and the ability to context-switch between different businesses and industries.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Part-Time CFO Salary UK</h3>
            <p>
              <strong>Part-time CFO</strong> day rates in the UK typically range from £800 to £1,500 per day. London roles command premium rates, with City and Canary Wharf engagements often paying £1,200-£1,500 daily.
            </p>
            <p>
              A part-time CFO working 2-3 days per week across multiple clients can realistically earn £150,000-£250,000 annually. The most experienced CFOs with strong networks can earn significantly more.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Part-Time CFO Jobs by Location</h3>
            <p>
              <strong>Part-time CFO jobs London</strong> represent the UK's largest market, accounting for approximately 60% of all flexible finance leadership roles. The City, Shoreditch, and Canary Wharf are particularly active, with strong demand from fintech, SaaS, and PE-backed companies.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-3">Part-Time CFO Jobs Leeds</h4>
            <p>
              <strong>Part-time CFO Leeds</strong> is an emerging market with growing demand from manufacturing, retail, and professional services businesses. Yorkshire-based companies increasingly seek flexible CFO talent, with day rates of £700-£1,100.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-3">Part-Time CFO Jobs Manchester</h4>
            <p>
              Manchester has the UK's second-largest market for <strong>part-time CFO jobs</strong>, driven by its thriving tech and media sectors. MediaCityUK and the Northern Quarter host numerous scale-ups seeking experienced finance leadership.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-3">Part-Time CFO Jobs Birmingham, Edinburgh & Bristol</h4>
            <p>
              These regional hubs offer growing opportunities for <strong>CFO part time</strong> roles. Day rates are typically 15-25% lower than London, but cost of living adjustments and reduced commute times make regional roles attractive.
            </p>

            <div className="bg-blue-950/20 p-6 border border-blue-800/40 rounded-lg my-8 not-prose">
              <p className="text-blue-800 font-medium mb-3">Looking for fractional CFO positions?</p>
              <Link href="/fractional-cfo-jobs-uk" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900">
                Browse Fractional CFO Jobs UK →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Remote CFO Jobs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Remote Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Remote CFO Jobs UK</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              <strong>Remote CFO jobs</strong> have transformed how finance leaders work. Since 2020, demand for <strong>remote CFO jobs</strong> has grown over 200%, with many UK companies now offering fully remote or hybrid CFO positions.
            </p>
            <p>
              Whether you're seeking a <strong>remote CFO job</strong> as a fractional engagement or a part-time employed role, remote working allows you to serve clients across the UK—from London to Leeds to Edinburgh—without geographical constraints.
            </p>
            <p>
              Currently, approximately <strong>{stats.remoteCount} of our {stats.total} finance roles</strong> offer remote or hybrid working. <strong>Remote CFO jobs</strong> typically pay the same day rates as on-site roles, making them an attractive option for experienced finance leaders.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg my-8 not-prose border border-blue-200">
              <p className="text-gray-700 mb-3">Browse remote CFO positions:</p>
              <Link href="/remote" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800">
                View All Remote CFO Jobs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As a part-time CFO, your IR35 status significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={1050} />
        </div>
      </section>

      {/* Finance News */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Finance" title="Latest CFO & Finance News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Part-Time CFO & Fractional CFO Jobs FAQ</h2>
            <p className="text-gray-600 mt-4">Common questions about part-time CFO jobs, fractional CFO roles, and remote CFO positions in the UK.</p>
          </div>
          <FAQ skipSchema={true} items={CFO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">Find Your Next<br /><span className="text-blue-400">Part-Time CFO Role</span></h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking part-time finance leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Create Profile</Link>
            <Link href="/fractional-cfo-salary" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors">Salary Guide</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Fractional CFO Jobs</Link>
              <Link href="/fractional-cfo-jobs-remote" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Remote CFO Jobs</Link>
              <Link href="/fractional-cfo-salary" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Salary Guide</Link>
              <Link href="/contract-cfo-jobs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contract CFO Jobs</Link>
              <Link href="/part-time-cmo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Part-Time CMO Jobs</Link>
              <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">CTO Jobs UK</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
