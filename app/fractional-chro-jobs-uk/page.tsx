import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleNews } from '@/components/RoleNews'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CHRO Jobs UK | How to Become a Fractional CHRO (2025)',
  description: 'Fractional CHRO jobs UK - Find part-time Chief HR Officer roles paying £1,100-£1,300/day. Career guide for becoming a fractional CHRO. 10+ monthly searches.',
  keywords: 'fractional chro jobs, fractional chro jobs uk, how to become a fractional chro, fractional chief people officer jobs, part time chro jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-chro-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CHRO Jobs UK | How to Become a Fractional CHRO',
    description: 'Find fractional CHRO roles and learn how to transition from full-time to fractional executive HR leadership.',
    images: ['/images/fractional-chro-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-chro-jobs-uk',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 32, remoteCount: 14 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'HR' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - renders in initial HTML for crawlers
async function getHRJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'HR'
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

const CHRO_CAREER_FAQS = [
  {
    question: 'How do I become a fractional CHRO?',
    answer: 'To become a fractional CHRO, you typically need: 15-20+ years HR experience with 8+ years in senior roles (CHRO, CPO, HR Director); experience at scale (200+ employees); CIPD Level 7 qualification; and a network of potential clients. Most fractional CHROs transition after successful full-time CHRO careers.'
  },
  {
    question: 'How much do fractional CHROs earn in the UK?',
    answer: 'Fractional CHROs in the UK typically earn £1,100-£1,300 per day. Working 3-4 days per week across 2-3 clients, annual earnings range from £145,000 to £250,000+. This often exceeds full-time CHRO salary while offering more flexibility and variety.'
  },
  {
    question: 'What qualifications do I need to be a fractional CHRO?',
    answer: 'Essential: CIPD Level 7 (Advanced Diploma in Strategic People Management), 15+ years HR experience with 8+ years at CHRO/HR Director level, proven track record leading HR through growth or transformation. Valuable: MBA, coaching qualifications, M&A experience, international HR experience.'
  },
  {
    question: 'How do I find fractional CHRO clients?',
    answer: 'Key sources include: VC/PE firms seeking portfolio company CHROs; executive networks and referrals from other C-suite executives; fractional platforms like Fractional Quest; CIPD and HR Directors forums; LinkedIn thought leadership; and board/advisory positions leading to referrals.'
  },
  {
    question: 'What IR35 considerations apply to fractional CHROs?',
    answer: 'Most fractional CHROs operate outside IR35 by: working with multiple clients (not one exclusive client), using own equipment, having right of substitution, controlling how/when work is done, and bearing business risk. Use limited company structure and ensure contracts reflect genuine self-employment.'
  },
  {
    question: 'Can I work as a fractional CHRO while still employed full-time?',
    answer: 'Some HR leaders start fractional work alongside employment through advisory roles or small engagements (check employment contract restrictions). However, true fractional CHRO work requires significant time commitment. Most transition fully after building 1-2 initial clients through their network.'
  },
]

export default async function FractionalCHROJobsUKPage() {
  const [stats, companies, jobs] = await Promise.all([
    getHRStats(),
    getFeaturedCompanies(),
    getHRJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Aspirational Image */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        {/* Background Image - HR professional */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/85 via-teal-600/70 to-green-500/50" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to HR Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                HR Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CHRO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief HR Officer roles for experienced people leaders.
                Work 2-3 days a week at £1,100-£1,300/day.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,200</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-chro" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CHRO Guide
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">How Much Can You Earn as a Fractional CHRO?</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* JOBS SECTION - Server-rendered for SEO */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CHRO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CHRO jobs in the UK</p>
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
                  <div className="relative h-40 bg-gradient-to-br from-emerald-500 to-teal-600">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop"
                      alt={`${job.title} - Fractional CHRO job UK at ${job.company_name}`}
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
                        <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                      View fractional CHRO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* CTA to view all */}
          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=HR"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
            >
              View All {stats.total}+ Fractional CHRO Jobs UK
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
              <h2 className="text-3xl md:text-4xl font-black">UK Companies Hiring Fractional CHROs</h2>
              <p className="text-gray-400 mt-2">These UK companies are actively looking for fractional CHRO talent</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-emerald-400 transition-colors cursor-default">{company}</span>
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br />
              <span className="text-emerald-600">Fractional CHRO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500"></div>
          </div>

          {/* SEO Image - Editorial Style */}
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fractional CHRO jobs UK - HR executive leading strategic people planning meeting"
              title="Fractional CHRO Jobs UK - Part-Time Chief HR Officer Roles"
              className="w-full h-80 md:h-96 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
              Fractional CHRO jobs UK: People leaders across the UK are embracing fractional work
            </figcaption>
          </figure>

          {/* Article Content - Editorial Typography */}
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CHRO jobs</strong> represent the evolution of HR leadership. Part-time Chief HR Officer positions where experienced people leaders provide strategic guidance to multiple companies simultaneously—delivering world-class people expertise at a fraction of the cost. According to <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">CIPD (Chartered Institute of Personnel and Development)</a>, the UK's professional body for HR, flexible and fractional working models are transforming how organisations access senior people talent.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional CHRO Jobs UK</h3>
            <p>
              The UK market for <strong>fractional CHRO jobs UK</strong> has experienced remarkable growth over the past three years, driven by fundamental shifts in how companies build and scale their people functions. <a href="https://www.gov.uk/business-finance-support" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Startups, scale-ups, and SMEs</a> are accessing senior HR leadership without the £100,000-£180,000 annual cost of a full-time Chief HR Officer.
            </p>
            <p>
              This transformation is particularly evident in the technology and professional services sectors, where companies need sophisticated people strategies but may not yet have the revenue to justify a full-time executive hire. The <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">IPSE (Association of Independent Professionals and the Self-Employed)</a> reports that senior HR contractors now represent one of the fastest-growing segments of the independent professional market, with fractional CHRO roles commanding premium day rates due to their strategic impact.
            </p>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-emerald-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Companies access CHRO expertise for £2,400-£5,200/week instead of £8,500+ monthly for full-time."
              </p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional CHRO Jobs Are Booming</h3>
            <p>
              The explosion in fractional CHRO demand reflects several converging trends in the UK employment landscape. The shift to hybrid and remote work, accelerated by the pandemic, has fundamentally changed how organisations think about workplace culture and employee engagement. Companies need strategic HR leadership to navigate these challenges, but many cannot justify the investment in a full-time C-suite role.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Talent Wars and Skills Shortage</h4>
            <p>
              UK businesses are facing the tightest labour market in decades. <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">ONS employment data</a> shows record numbers of job vacancies across most sectors, with competition for skilled workers at an all-time high. Fractional CHROs bring battle-tested strategies for talent acquisition, retention, and employer branding—expertise that's become mission-critical for growing companies. They've typically navigated multiple talent wars across different organisations and can quickly implement what works without the trial-and-error that internal hires might require.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Hybrid Work and Culture Transformation</h4>
            <p>
              The permanent shift to hybrid working has created unprecedented challenges for maintaining company culture, employee engagement, and productivity. Fractional CHROs specialising in remote-first cultures are in particularly high demand, commanding £1,200-£1,400/day. They help organisations redesign performance management systems, reimagine onboarding for distributed teams, and create engagement strategies that work across physical and virtual environments. Understanding <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">ACAS guidance on flexible working</a> and implementing compliant policies has become a core competency for fractional CHROs.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">DEI Initiatives and Regulatory Compliance</h4>
            <p>
              Diversity, Equity, and Inclusion initiatives have moved from "nice to have" to business imperative. Investors increasingly scrutinise portfolio companies' DEI metrics, and <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">regulatory requirements around diversity reporting</a> continue to expand. Fractional CHROs with proven DEI transformation experience are particularly sought after, especially those who can demonstrate measurable improvements in representation, pay equity, and inclusive culture. They bring frameworks for measuring DEI progress, training programmes that actually change behaviour, and the executive credibility to hold leadership teams accountable.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">PE/VC Portfolio Company Demand</h4>
            <p>
              Private equity and venture capital firms increasingly mandate professional HR leadership across their portfolios. According to <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">British Private Equity & Venture Capital Association research</a>, portfolio companies with strong people strategies show significantly better growth and exit outcomes. A single fractional CHRO might work with 3-4 portfolio companies within the same fund, providing consistent people strategy frameworks while tailoring implementation to each business's stage and sector.
            </p>

            <ul className="space-y-3 my-8">
              <li><strong>Cost efficiency:</strong> Senior expertise at 40-50% of full-time cost</li>
              <li><strong>Diverse experience:</strong> CHROs bringing insights from multiple industries and growth stages</li>
              <li><strong>Immediate impact:</strong> No lengthy onboarding—strategic HR from day one</li>
              <li><strong>Scalability:</strong> Flex engagement based on business needs and funding stages</li>
              <li><strong>Regulatory expertise:</strong> Navigate complex <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">UK employment law</a> and compliance requirements</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional CHRO Jobs</h3>
            <p>
              Fractional CHRO jobs in the UK span diverse specialisations, each commanding different day rates based on complexity and demand. Understanding these archetypes helps you position your experience and target the right opportunities.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Scale-up CHRO', desc: 'Building people infrastructure for rapid growth (50-500 employees)', rate: '£1,100-£1,300/day' },
                { title: 'Transformation CHRO', desc: 'Culture change, restructuring, and organisational redesign', rate: '£1,200-£1,400/day' },
                { title: 'Interim CHRO', desc: 'Temporary executive cover during transitions or searches', rate: '£1,000-£1,250/day' },
                { title: 'PE Portfolio CHRO', desc: 'Multi-company people strategy across VC/PE portfolios', rate: '£1,200-£1,500/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-emerald-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            <p>
              <strong>Scale-up CHROs</strong> specialise in the critical 50-500 employee growth phase, where companies must professionalise their people function while maintaining startup agility. They build the HR infrastructure—compensation frameworks, performance systems, learning & development—that enables companies to scale without breaking culture. This role requires deep experience navigating hypergrowth and the political savvy to implement structure without bureaucracy.
            </p>
            <p>
              <strong>Transformation CHROs</strong> are change agents brought in when organisations need cultural overhaul, restructuring, or post-merger integration. They excel at stakeholder management, change communications, and the difficult people decisions that transformation requires. Many have M&A integration experience and understand <a href="https://www.gov.uk/redundancy-your-rights" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">redundancy processes and TUPE regulations</a> inside out.
            </p>
            <p>
              <strong>Interim CHROs</strong> provide executive-level HR leadership during transitions—covering maternity leave, filling gaps during recruitment, or stabilising teams after departures. While "interim" might suggest temporary, many interim CHRO engagements extend to 12-18 months, providing substantial income stability. The key skill is quickly assessing situations, prioritising ruthlessly, and delivering tangible improvements in constrained timeframes.
            </p>
            <p>
              <strong>PE Portfolio CHROs</strong> represent the premium end of the market, working across multiple portfolio companies within a single fund. They bring a repeatable playbook for people excellence, typically focusing on talent density, leadership development, and building HR functions that scale. Many spend 1-2 days per month with each portfolio company, providing strategic guidance while empowering local HR teams to execute.
            </p>

            {/* Second SEO Image */}
            <figure className="my-10 -mx-6 lg:-mx-16">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Fractional CHRO jobs UK - Chief HR Officer reviewing people strategy and talent analytics"
                title="Fractional CHRO Jobs UK - HR Leadership Opportunities"
                className="w-full h-64 md:h-80 object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
                UK fractional CHRO jobs offer flexible people leadership opportunities
              </figcaption>
            </figure>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CHRO Jobs by Location</h3>
            <p>
              While London dominates the fractional CHRO market, strong opportunities exist across UK business hubs. Regional variations in day rates reflect local market dynamics, cost of living, and startup density.
            </p>
            <ul className="space-y-2">
              <li><strong>London & Tech City:</strong> £1,100-£1,400/day—Highest concentration of roles, particularly in fintech, SaaS, and VC-backed startups</li>
              <li><strong>Manchester & Northwest:</strong> £950-£1,200/day—Thriving tech scene supported by <a href="https://www.investinmanchester.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">MIDAS investment</a> and strong media/creative industries</li>
              <li><strong>Edinburgh & Glasgow:</strong> £950-£1,200/day—Financial services and growing tech sector backed by <a href="https://www.scottish-enterprise.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Scottish Enterprise</a></li>
              <li><strong>Bristol & Southwest:</strong> £900-£1,150/day—Aerospace, tech, and creative industries cluster</li>
              <li><strong>Remote UK:</strong> £850-£1,100/day—Fully remote roles with national or international clients</li>
            </ul>
            <p>
              Remote and hybrid working arrangements have fundamentally changed the geography of fractional CHRO work. Many experienced CHROs now work with clients nationwide without being constrained by location. A CHRO based in Bristol might work with a fintech in London, a SaaS company in Edinburgh, and a manufacturing business in Birmingham—attending in-person quarterly board meetings but conducting most work remotely. This flexibility has democratised access to top talent while allowing CHROs to build diverse, geographically-dispersed client portfolios.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Building a Successful Fractional CHRO Practice</h3>
            <p>
              Transitioning from full-time employment to a successful fractional practice requires strategic planning, business development skills, and the confidence to position yourself as a premium service provider. Here's how experienced fractional CHROs build sustainable, lucrative practices.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Finding Your First Clients</h4>
            <p>
              Most successful fractional CHROs land their first 1-2 clients through their existing network—previous employers, board contacts, or warm introductions from other executives. This highlights the importance of maintaining strong relationships throughout your corporate career. Many CHROs negotiate with their departing employer to continue on a fractional basis during the transition period, providing immediate income while building their practice.
            </p>

            <div className="bg-gray-50 text-gray-900 p-8 my-10 not-prose">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Top Client Sources for Fractional CHROs</h4>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Direct Outreach:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• VC/PE firms seeking portfolio company support</li>
                    <li>• CEO networks and founder communities</li>
                    <li>• Board and advisory connections</li>
                    <li>• Previous employer referrals and alumni networks</li>
                    <li>• <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">CIPD</a> HR Directors forum</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Platforms & Communities:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Fractional Quest</li>
                    <li>• LinkedIn thought leadership and inbound</li>
                    <li>• Interim management firms (Odgers, Venn Group)</li>
                    <li>• Executive search firm relationships</li>
                    <li>• HR SaaS provider partner networks</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Positioning and Personal Branding</h4>
            <p>
              Successful fractional CHROs are expert at articulating their value proposition. Rather than positioning as "available for hire," they position as specialists solving specific problems—"I help SaaS companies scale from 50 to 500 people without breaking culture" or "I specialise in M&A people integration for PE-backed businesses." This specificity makes it easier for potential clients to understand when to engage you.
            </p>
            <p>
              LinkedIn becomes your primary marketing channel. Optimise your headline for your target audience, share insights on people strategy challenges, and engage authentically with your network. Many successful fractional CHROs publish weekly articles on HR topics, building thought leadership that attracts inbound enquiries. The goal isn't viral content—it's consistent visibility with your target buyer (typically CEOs and other C-suite executives).
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Pricing Your Services</h4>
            <p>
              Pricing fractional CHRO services is as much art as science. The UK market typically operates on day rates rather than hourly rates, reflecting the strategic nature of the work. Your day rate should account for your experience, the value you deliver, your target earnings, and the inevitable non-billable time spent on business development and administration.
            </p>

            <div className="overflow-x-auto my-10 not-prose">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-900">
                    <th className="p-4 text-left">Experience Level</th>
                    <th className="p-4 text-left">Day Rate</th>
                    <th className="p-4 text-left">2-3 Clients Annual</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="p-4">First-time fractional CHRO</td>
                    <td className="p-4">£1,000-£1,100</td>
                    <td className="p-4">£130k-£175k</td>
                  </tr>
                  <tr className="border-b bg-emerald-50">
                    <td className="p-4 font-semibold">Established fractional CHRO</td>
                    <td className="p-4 font-bold text-emerald-600">£1,100-£1,300</td>
                    <td className="p-4 font-bold text-emerald-600">£145k-£210k</td>
                  </tr>
                  <tr>
                    <td className="p-4">Premium fractional CHRO (M&A, PE specialist)</td>
                    <td className="p-4">£1,300-£1,500</td>
                    <td className="p-4">£170k-£250k+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional CHRO Jobs</h3>
            <p>
              Professional credentials matter enormously in fractional HR leadership. Unlike some functional areas where experience might compensate for formal qualifications, HR leadership requires recognised credentials. <a href="https://www.cipd.org/uk/learn/qualifications/level7-advanced-diploma/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">CIPD Level 7 qualification</a> (Advanced Diploma in Strategic People Management) is considered the baseline for CHRO-level work. Many clients explicitly require Chartered CIPD status (Chartered FCIPD or Chartered MCIPD) in their briefs.
            </p>

            <div className="bg-gray-50 p-6 border-l-4 border-emerald-500 mb-8 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Essential Requirements</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>15-20+ years HR experience</strong> with 8+ years at CHRO/CPO/HR Director level</li>
                <li>• <strong>Experience at scale:</strong> Led HR for 200+ employee organisations through growth phases</li>
                <li>• <strong>CIPD qualification:</strong> Level 7 minimum, Chartered status highly valuable</li>
                <li>• <strong>Track record:</strong> Demonstrable outcomes from HR leadership (culture transformation, talent density improvements, successful M&A integrations)</li>
                <li>• <strong>Board experience:</strong> Comfortable presenting to boards and challenging C-suite peers</li>
                <li>• <strong>Network:</strong> Connections to potential clients (founders, CEOs, PE/VC firms)</li>
                <li>• <strong>Business acumen:</strong> Understanding of <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">IR35</a>, limited company operation, and professional indemnity insurance</li>
              </ul>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Specialised Skills That Command Premium Rates</h4>
            <ul className="space-y-2">
              <li><strong>M&A and Integration:</strong> Experience integrating acquired companies and managing redundancy processes under <a href="https://www.gov.uk/business-transfers-takeovers" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">TUPE regulations</a></li>
              <li><strong>DEI Strategy:</strong> Proven track record improving diversity metrics and building inclusive cultures</li>
              <li><strong>Global HR:</strong> Experience managing international teams and navigating multi-country employment law</li>
              <li><strong>Executive Coaching:</strong> Qualifications from ICF or EMCC, enabling leadership development work</li>
              <li><strong>Employment Law Expertise:</strong> Deep understanding of <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">UK employment law</a>, ideally with tribunal experience</li>
              <li><strong>HR Technology:</strong> Experience implementing HRIS, ATS, and people analytics platforms</li>
            </ul>

            <div className="bg-emerald-50 p-6 border border-emerald-200 rounded-lg my-10 not-prose">
              <p className="text-emerald-800 font-medium mb-3">Ready to explore fractional CHRO opportunities?</p>
              <Link href="/fractional-chro" className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-900">
                Read the Complete Fractional CHRO Guide →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* IR35 Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              UK IR35 Calculator for Fractional CHRO Jobs
            </h2>
            <p className="text-gray-600 mt-4">
              As a fractional CHRO in the UK, your IR35 status significantly impacts your take-home pay from CHRO jobs
            </p>
          </div>
          <IR35Calculator defaultDayRate={1200} />
        </div>
      </section>

      {/* HR News */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="HR" title="Latest UK CHRO Jobs & HR Leadership News" limit={3} />
        </div>
      </section>

      {/* FAQ Section - Editorial Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Common Questions About Fractional CHRO Jobs UK
            </h2>
          </div>
          <FAQ items={CHRO_CAREER_FAQS} title="" />
        </div>
      </section>

      {/* Resources & Further Reading Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Additional Resources</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">UK Resources for Fractional CHRO Jobs</h2>
            <p className="text-xl text-gray-500">Authoritative UK sources for fractional CHRO professionals seeking HR leadership jobs</p>
          </div>

          <div className="space-y-8">
            {/* Professional Bodies & HR */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-emerald-500">Professional Bodies & HR Organizations</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    CIPD (Chartered Institute of Personnel and Development)
                  </a>
                  {' '}— The UK's professional body for HR and people development, offering qualifications, research, and networking
                </li>
                <li>
                  <a href="https://www.shrm.org/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    SHRM (Society for Human Resource Management)
                  </a>
                  {' '}— International HR professional organisation with significant UK presence and resources
                </li>
                <li>
                  <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    Institute of Directors (IoD)
                  </a>
                  {' '}— Professional development and networking for C-level executives including CHROs
                </li>
              </ul>
            </div>

            {/* Government & Employment Law */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-emerald-500">Government Resources & Employment Law</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    ACAS (Advisory, Conciliation and Arbitration Service)
                  </a>
                  {' '}— Official UK guidance on employment rights, workplace issues, and dispute resolution
                </li>
                <li>
                  <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    Gov.uk Employment Guidance
                  </a>
                  {' '}— Official government guidance for employers on rights, contracts, and compliance
                </li>
                <li>
                  <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    Gov.uk IR35 Rules
                  </a>
                  {' '}— Understanding off-payroll working rules essential for fractional executives
                </li>
                <li>
                  <a href="https://www.gov.uk/set-up-business" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    Gov.uk Business Setup Guide
                  </a>
                  {' '}— Official guidance for setting up a limited company as a fractional executive
                </li>
              </ul>
            </div>

            {/* Industry Data & Research */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-emerald-500">Industry Research & Market Data</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    ONS Employment Statistics
                  </a>
                  {' '}— Official UK labour market data including self-employment and contractor trends
                </li>
                <li>
                  <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    British Private Equity & Venture Capital Association
                  </a>
                  {' '}— Insights on PE/VC portfolio companies that frequently hire fractional CHROs
                </li>
                <li>
                  <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    IPSE (Association of Independent Professionals)
                  </a>
                  {' '}— Research and advocacy for independent professionals and the self-employed
                </li>
              </ul>
            </div>

            {/* Business Support */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-emerald-500">Business Support & Regional Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    British Business Bank
                  </a>
                  {' '}— Research on SME trends and access to finance for growing businesses
                </li>
                <li>
                  <a href="https://www.investinmanchester.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    MIDAS (Manchester Investment & Development Agency)
                  </a>
                  {' '}— Supporting business growth and investment in Greater Manchester
                </li>
                <li>
                  <a href="https://www.scottish-enterprise.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
                    Scottish Enterprise
                  </a>
                  {' '}— Economic development agency supporting businesses across Scotland
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-white rounded-lg border-l-4 border-emerald-500">
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> These resources provide valuable guidance for fractional CHRO professionals, from regulatory compliance to professional development and market insights. Bookmark these sources to stay current with UK HR leadership trends and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Editorial */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Fractional CHRO Jobs UK
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create your profile and get matched with UK companies seeking fractional CHRO leadership for their people teams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/handler/sign-up"
              className="px-10 py-5 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors"
            >
              Create Profile
            </Link>
            <Link
              href="/fractional-chro"
              className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              CHRO Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages - Minimal */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Fractional CHRO</Link>
              <Link href="/fractional-hr-director-jobs" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">HR Director Jobs</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/interim-chro" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Interim CHRO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
