import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ, CTO_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleContentHub } from '@/components/RoleContentHub'
import { FracSection } from '@/components/FracSection'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { FAQPageSchema } from '@/components/FAQPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CTO Jobs UK: Part-Time Roles',
  description: 'Fractional CTO jobs UK. Part-time CTO positions paying £850-£1,600/day. Browse live roles for experienced tech leaders.',
  keywords: 'fractional cto jobs uk, fractional cto jobs, part time cto jobs, fractional cto uk, cto jobs uk, part time chief technology officer, fractional cto',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cto-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CTO Jobs UK | Part-Time CTO Roles 2025',
    description: 'Fractional CTO jobs UK - Find part-time CTO positions paying £850-£1,600/day. Remote & hybrid.',
    images: ['/images/fractional-cto-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cto-jobs-uk',
  },
}

async function getEngineeringStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Engineering'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Engineering' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 35, remoteCount: 20 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Engineering' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - renders in initial HTML for crawlers
async function getTechJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Engineering'
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

export default async function FractionalCtoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getEngineeringStats(),
    getFeaturedCompanies(),
    getTechJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CTO Jobs UK | Part-Time CTO Roles 2025"
        description="Find part-time CTO positions paying £850-£1,600/day"
        url="https://fractional.quest/fractional-cto-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <FAQPageSchema faqs={CTO_FAQS} />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cto-jobs-uk" />
      {/* Hero with Aspirational Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image - Tech professional */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700/85 via-blue-600/70 to-teal-500/50" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cto', 'jobs')} className="mb-8" />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    Technology Leadership
                  </span>
                  <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Fractional CTO Jobs UK
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                  Part-time Chief Technology Officer roles for experienced tech leaders.
                  Work 2-3 days a week at £850-£1,600/day.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#jobs" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                    Browse Jobs
                  </Link>
                  <Link href="/fractional-jobs-tech" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                    Tech Industry Jobs
                  </Link>
                </div>
              </div>

              {/* Frac Section Integration */}
              <div className="hidden lg:block lg:w-80">
                <FracSection title="Talk with Frac about CTO roles" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{stats.total}+</div>
              <div className="text-sm text-gray-400">Live Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">£1,100</div>
              <div className="text-sm text-gray-400">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
              <div className="text-sm text-gray-400">Remote Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2-3 days</div>
              <div className="text-sm text-gray-400">Avg Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS SECTION - Server-rendered for SEO */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CTO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CTO jobs in the UK</p>
          </div>

          {/* Server-rendered job grid - visible to search engines */}
          <ServerJobGrid
            jobs={jobs}
            roleCategory="Engineering"
            ctaLink="/fractional-jobs-uk?department=Engineering"
            ctaText={`View All ${stats.total}+ Fractional CTO Jobs UK`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Calculator */}


      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-gray-50 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black">Companies Seeking CTOs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-blue-400 transition-colors cursor-default">{company}</span>
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
              Everything You Need to Know About<br /><span className="text-blue-600">Fractional CTO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500"></div>
          </div>
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fractional CTO jobs UK - technology executive reviewing code and architecture" className="w-full h-80 md:h-96 object-cover" />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">Technology leaders across the UK are embracing fractional work</figcaption>
          </figure>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CTO jobs</strong> represent the new frontier of technology leadership. Part-time Chief Technology Officer positions where experienced leaders provide strategic technical guidance to multiple companies simultaneously—delivering world-class expertise at a fraction of the cost.
            </p>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional CTO Jobs UK</h3>
            <p>The UK market for <strong>fractional CTO jobs UK</strong> has grown significantly, driven by non-technical founders, <a href="https://www.gov.uk/government/publications/uks-digital-strategy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">digital transformation initiatives</a>, and the need for expert technical due diligence. Companies that previously couldn't afford senior tech leadership now access world-class CTOs paying £850-£1,600 per day rather than £180,000-£350,000 annually.</p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Non-technical founders access CTO expertise without diluting equity or committing to £200k+ salaries."</p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional CTO Jobs Are Booming</h3>
            <ul className="space-y-3">
              <li><strong>Non-technical founders:</strong> First-time founders need technical leadership without equity dilution</li>
              <li><strong>Digital transformation:</strong> Traditional businesses need strategic tech guidance</li>
              <li><strong>Technical due diligence:</strong> VCs require independent tech assessment</li>
              <li><strong>Team scaling:</strong> Companies need CTOs to build teams from 2 to 20+</li>
              <li><strong>Architecture decisions:</strong> Critical build vs buy decisions require experience</li>
            </ul>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional CTO Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Startup CTO', desc: 'Building MVP & hiring first engineers', rate: '£1,000-£1,400/day' },
                { title: 'Scale-up CTO', desc: 'Scaling architecture & building teams', rate: '£1,100-£1,500/day' },
                { title: 'Due Diligence CTO', desc: 'Technical assessment for M&A', rate: '£1,200-£1,600/day' },
                { title: 'Transformation CTO', desc: 'Leading digital transformation', rate: '£950-£1,300/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional CTO Jobs</h3>
            <ul className="space-y-2">
              <li>15+ years of <a href="https://www.bcs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">software engineering experience</a></li>
              <li>5+ years in CTO, VP Engineering, or Technical Director roles</li>
              <li>Experience scaling engineering teams (5 to 50+)</li>
              <li>Broad technology stack knowledge</li>
              <li>Strong communication with non-technical stakeholders</li>
            </ul>
          </article>
        </div>
      </section>

      {/* AI/ML Boom Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">Market Dynamics</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              The AI/ML Boom Driving<br /><span className="text-blue-600">Fractional CTO Demand</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500"></div>
          </div>
          <article className="prose prose-lg prose-gray max-w-none space-y-6">
            <p className="text-gray-700 leading-relaxed">
              The explosive growth in fractional CTO opportunities—up 55% year-over-year according to <a href="https://technation.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> research—directly correlates with the AI/ML integration wave sweeping UK businesses. Every company from Series A startups to established mid-market firms now faces the same question: how do we integrate AI without derailing our roadmap or overspending on experiments?
            </p>
            <p className="text-gray-700 leading-relaxed">
              This creates perfect conditions for fractional CTOs. A full-time CTO with deep AI/ML expertise commands £200,000-£350,000 packages. Yet most companies need this expertise for strategic guidance, vendor selection, and architecture decisions—not 40 hours weekly. A fractional CTO providing 2 days per week at £1,200 daily costs £115,000 annually, saving over £100,000 while accessing identical expertise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond AI, the technical complexity curve continues steepening. Cloud-native architectures, microservices, event-driven systems, real-time data pipelines—the modern tech stack demands expertise non-technical founders cannot acquire quickly. Meanwhile, hiring full-time senior engineers has become brutally competitive according to <a href="https://www.linkedin.com/pulse/topics/home/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">LinkedIn market data</a>. Fractional CTOs solve both problems: they architect the right systems and attract strong engineering talent through their reputation and network.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <Link href="/fractional-jobs-london" className="text-blue-600 hover:text-blue-700 underline font-semibold">London</Link> accounts for roughly 60% of fractional CTO opportunities according to <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a>, though Manchester, Edinburgh, and Cambridge show strong growth. FinTech and B2B SaaS dominate demand, but HealthTech, PropTech, and ClimaTech increasingly seek fractional technical leadership. The common thread: regulated or complex domains where strategic technical decisions carry existential weight.
            </p>
          </article>
        </div>
      </section>

      {/* Technical Specializations Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">In Demand</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Technical Specializations<br /><span className="text-blue-600">Commanding Premium Rates</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500"></div>
          </div>
          <article className="prose prose-lg prose-gray max-w-none space-y-6">
            <p className="text-gray-700 leading-relaxed">
              While generalist fractional CTOs maintain steady demand, specialized expertise commands significant premiums. Understanding which specializations pay top rates helps position your fractional practice for maximum earnings.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">AI/ML Integration & Architecture</h3>
            <p className="text-gray-700 leading-relaxed">
              Fractional CTOs with production AI/ML experience command £1,300-£1,600 daily. Companies need guidance on <a href="https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">LLM integration</a>, RAG architectures, vector databases, and prompt engineering at scale. The key differentiation: hands-on production experience, not just theoretical knowledge. Clients pay premium rates for CTOs who have shipped AI features to millions of users and can navigate the reliability and cost challenges.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platform Engineering & DevOps</h3>
            <p className="text-gray-700 leading-relaxed">
              As companies scale from 10 to 100+ engineers, <a href="https://www.techuk.org/what-we-deliver/insights.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">platform engineering</a> becomes critical. Fractional CTOs specializing in Kubernetes, infrastructure-as-code, CI/CD pipelines, and developer experience command £1,100-£1,400 daily. The value proposition: reducing deployment friction and enabling engineering teams to ship faster. Series B-C companies pay willingly for CTOs who can transform their deployment cadence from weekly to daily.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Security & Compliance Architecture</h3>
            <p className="text-gray-700 leading-relaxed">
              FinTech, HealthTech, and financial services require fractional CTOs with deep security and compliance expertise. SOC 2, ISO 27001, PCI DSS, <a href="https://ico.org.uk/for-organisations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">GDPR</a>—navigating these frameworks while maintaining development velocity demands experience. Rates of £1,200-£1,500 daily reflect the specialized knowledge and liability involved. This niche particularly suits former enterprise CTOs transitioning to fractional work.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mobile-First Architecture</h3>
            <p className="text-gray-700 leading-relaxed">
              Consumer apps and B2C platforms need CTOs who understand mobile-first architecture, offline-first design, and app store optimization. React Native, Flutter, native iOS/Android expertise combined with backend scalability knowledge creates a valuable specialization. Rates of £1,000-£1,300 daily, with higher premiums for CTOs who have shipped apps to millions of users.
            </p>
          </article>
        </div>
      </section>

      {/* Building Practice Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">Practical Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Building a Successful<br /><span className="text-blue-600">Fractional CTO Practice</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500"></div>
          </div>
          <article className="prose prose-lg prose-gray max-w-none space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Transitioning from full-time CTO to fractional work requires strategic positioning. The most successful fractional CTOs share common patterns in how they build and maintain their practices.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Positioning Over Generalization</h3>
            <p className="text-gray-700 leading-relaxed">
              Avoid marketing yourself as a "fractional CTO for any company." Instead, claim specific territory: "fractional CTO for Series A FinTech companies building regulated platforms" or "fractional CTO helping B2B SaaS scale from £1M to £10M ARR." This specificity makes referrals flow naturally. When a VC encounters a portfolio company matching your profile, your specialized positioning makes you the obvious choice.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Portfolio Approach</h3>
            <p className="text-gray-700 leading-relaxed">
              Most successful fractional CTOs maintain 2-4 concurrent clients. The typical structure: one anchor client at 2-3 days weekly (£120,000-180,000 annually), one secondary client at 1-2 days weekly (£60,000-£100,000), plus advisory roles or due diligence projects. This diversification provides income stability while preventing over-reliance on any single client.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Network Building in Tech</h3>
            <p className="text-gray-700 leading-relaxed">
              Unlike other fractional roles, CTO opportunities flow heavily through VC and <a href="https://www.cbi.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">tech community networks</a>. Attend London Tech Week, speak at developer conferences, contribute to open source, and build relationships with Series A-B investors. Many fractional CTOs report that 70-80% of opportunities come through warm introductions—your network becomes your primary business development engine.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Managing Multiple Codebases</h3>
            <p className="text-gray-700 leading-relaxed">
              The operational challenge of fractional CTO work: context switching between different tech stacks, teams, and codebases. Successful practitioners develop systems: detailed handover documents, recorded architecture decision records, and scheduled "deep work" days for each client. Tuesday might be Client A (FinTech, Python/React), Wednesday Client B (SaaS, Node/Vue), with Thursdays reserved for strategic thinking and architecture reviews across all clients.
            </p>
          </article>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As a fractional CTO, your <a href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 status</a> significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={1100} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CTO Jobs UK</h2>
          </div>
          <FAQ items={CTO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-blue-400">Fractional CTO Role</span></h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional technology leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Create Profile</Link>
            <Link href="/fractional-jobs-tech" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Tech Jobs</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-jobs-london" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Fractional Jobs London</Link>
              <Link href="/fractional-jobs-tech" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Tech Industry Jobs</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">CMO Jobs UK</Link>
              <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Jobs UK</Link>
              <Link href="/fractional-coo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">COO Jobs UK</Link>
              <Link href="/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Fractional Recruiters UK</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub - Internal Linking */}
      <RoleContentHub currentRole="cto" />
    </div>
  )
}
