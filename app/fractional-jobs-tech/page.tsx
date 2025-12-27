import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { IR35Calculator } from '@/components/IR35Calculator'
import { FAQ, TECH_FAQS } from '@/components/FAQ'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Tech Jobs UK 2025',
  description: 'Fractional tech jobs UK. CTO, VP Engineering, Tech Director. £900-£1,500/day.',
  openGraph: {
    title: 'Fractional Tech Jobs UK - CTO, VP Engineering, Tech Director Roles',
    description: 'Find fractional technology leadership roles across the UK.',
    type: 'website',
  },
}

const techRoles = [
  { name: 'Fractional CTO', description: 'Strategic technology leadership', rateRange: '£1,000-£1,500/day', demand: 'Very High' },
  { name: 'Fractional VP Engineering', description: 'Engineering team leadership', rateRange: '£900-£1,300/day', demand: 'High' },
  { name: 'Fractional Tech Director', description: 'Technical strategy & delivery', rateRange: '£850-£1,200/day', demand: 'High' },
  { name: 'Fractional Head of Product', description: 'Product strategy & roadmap', rateRange: '£800-£1,200/day', demand: 'High' },
  { name: 'Fractional CISO', description: 'Security & compliance leadership', rateRange: '£950-£1,400/day', demand: 'Growing' },
  { name: 'Fractional Data Lead', description: 'Data strategy & analytics', rateRange: '£850-£1,250/day', demand: 'Growing' },
]

const techSectors = [
  { name: 'SaaS/Cloud', icon: '☁️', growth: '+28% YoY', description: 'B2B software companies' },
  { name: 'FinTech', icon: '💳', growth: '+22% YoY', description: 'Financial technology' },
  { name: 'HealthTech', icon: '🏥', growth: '+25% YoY', description: 'Healthcare technology' },
  { name: 'E-commerce', icon: '🛒', growth: '+18% YoY', description: 'Online retail & marketplaces' },
  { name: 'AI/ML', icon: '🤖', growth: '+35% YoY', description: 'Artificial intelligence' },
  { name: 'Cybersecurity', icon: '🔐', growth: '+30% YoY', description: 'Security solutions' },
]

const techSkills = [
  'Cloud Architecture (AWS/GCP/Azure)', 'DevOps & Platform Engineering', 'AI/ML Implementation',
  'Data Engineering', 'API & Integration Strategy', 'Security & Compliance',
  'Team Scaling & Hiring', 'Technical Due Diligence', 'Legacy Modernization'
]

const relatedSearches = [
  'Fractional CTO Jobs UK', 'Fractional VP Engineering', 'Part-Time CTO London',
  'Fractional Tech Director', 'Fractional CISO Jobs', 'Startup CTO Jobs',
  'SaaS Fractional CTO', 'FinTech Fractional CTO', 'Fractional Head of Engineering'
]

async function getTechStats() {
  try {
    const sql = createDbQuery()
    const [total, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%tech%' OR role_category ILIKE '%CTO%' OR role_category ILIKE '%engineering%' OR title ILIKE '%CTO%' OR title ILIKE '%tech%')`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND (role_category ILIKE '%tech%' OR role_category ILIKE '%CTO%') AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])
    return {
      total: parseInt((total[0] as any)?.count || '0'),
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '1100'))
    }
  } catch (error) {
    return { total: 45, avgDayRate: 1100 }
  }
}

async function getTechJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date
      FROM jobs
      WHERE is_active = true AND (role_category ILIKE '%tech%' OR role_category ILIKE '%CTO%' OR role_category ILIKE '%engineering%' OR title ILIKE '%CTO%' OR title ILIKE '%tech%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function TechJobsPage() {
  const [stats, jobs] = await Promise.all([getTechStats(), getTechJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Tech Jobs UK - CTO, VP Engineering, Tech Director Roles"
        description="Find fractional tech jobs in the UK with £900-£1,500 daily rates"
        url="https://fractional.quest/fractional-jobs-tech"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      {/* Hero Section with 3D Knowledge Graph Background */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920)' }} />
          <JobsGraph3D categoryFilter="Technology" limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>

        {/* Bottom-aligned content with glass panel */}
        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              {/* Left: Main content */}
              <div className="max-w-2xl">
                <div className="bg-gray-50/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
                  <Link href="/" className="inline-flex items-center text-white/70 hover:text-gray-900 mb-6 transition-colors text-sm tracking-wide">
                    <span className="mr-2">←</span> Back to Home
                  </Link>

                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-block bg-blue-500/20 backdrop-blur text-blue-200 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest">
                      {stats.total}+ Tech Leadership Roles
                    </span>
                    <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Fractional<br />
                    <span className="text-blue-300">Tech</span> Jobs UK
                  </h1>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    Fractional CTO, VP Engineering, Tech Director positions. £900-£1,500 daily rates across SaaS, FinTech, and HealthTech.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/fractional-jobs?industry=Technology"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse Tech Jobs →
                    </Link>
                    <Link
                      href="/handler/sign-up"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                    >
                      Get Notified
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Stats panel */}
              <div className="w-full lg:w-auto">
                <div className="bg-gray-50/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">25%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">of All Roles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Day Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">+28%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">YoY Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">65%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Remote Work</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Board - Moved up after hero */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Opportunities</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fractional Tech Jobs</h2>
            <p className="text-xl text-gray-500">Browse {stats.total}+ tech leadership opportunities</p>
          </div>
          <ServerJobGrid
            jobs={[]}
            roleCategory="Engineering"
            ctaLink="/fractional-jobs-uk?department=Engineering"
            ctaText={`View All ${stats.total}+ Tech Jobs`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Tech Roles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">By Role</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fractional Tech Roles</h2>
            <p className="text-xl text-gray-500">Technology leadership positions available</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techRoles.map((role) => (
              <div key={role.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{role.description}</p>
                <p className="text-blue-700 font-semibold mb-1">{role.rateRange}</p>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Demand: {role.demand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Sectors */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">By Sector</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Sectors Hiring</h2>
            <p className="text-xl text-gray-500">Industries with highest demand for fractional tech leaders</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techSectors.map((sector) => (
              <div key={sector.name} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all">
                <span className="text-4xl mb-3 block">{sector.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{sector.name}</h3>
                <p className="text-blue-700 text-sm font-semibold mb-1">{sector.growth}</p>
                <p className="text-gray-600 text-xs">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Skills</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In-Demand Tech Skills</h2>
            <p className="text-xl text-gray-500">Skills that command premium fractional rates</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techSkills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tech */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">The Opportunity</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Fractional Tech Leadership?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Startup-Ready</h3>
              <p className="text-gray-600">
                Startups and scale-ups can't always afford a £200k+ full-time CTO. The <a href="https://www.bvca.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Private Equity & Venture Capital Association</a> highlights how portfolio companies increasingly use fractional leadership to scale efficiently. Fractional tech leaders provide senior expertise at a fraction of the cost.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Rates</h3>
              <p className="text-gray-600">
                Tech leadership commands the highest fractional rates. CTOs with cloud, AI, or security expertise can earn £1,200-£1,500/day.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Remote-First</h3>
              <p className="text-gray-600">
                65% of fractional tech roles are fully remote or hybrid. The <a href="https://www.cbi.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CBI</a> reports that flexible working arrangements have become essential for attracting senior talent. Work with clients across the UK and Europe from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tech Companies Hire Fractional Executives */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Industry Context</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Tech Companies Hire Fractional Executives</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              The technology sector faces a unique leadership challenge: technical complexity is accelerating faster than talent pipelines can produce experienced leaders. According to <a href="https://survey.stackoverflow.co/2023/#leadership-experience" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Stack Overflow's Developer Survey</a>, only 8% of developers have 20+ years of experience—the cohort from which technical executives are typically drawn. The UK's <a href="https://technation.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> reports growing demand for senior technology leadership as the digital economy expands. Yet technology decisions made today have 5-10 year consequences for scalability, security, and technical debt.
            </p>
            <p className="text-gray-700 mb-6">
              This scarcity drives compensation to unsustainable levels. A CTO with deep cloud architecture experience, AI/ML implementation history, and successful scaling credentials commands £180k-£300k in salary plus significant equity. According to <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> salary benchmarking data, technology leadership roles continue to command premium compensation. For companies at £5-20M revenue, this represents 1-6% of revenue—often untenable when margins are thin and growth investment needs are high.
            </p>
            <p className="text-gray-700 mb-6">
              The technical landscape compounds this challenge. <a href="https://octoverse.github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">GitHub's Octoverse report</a> tracks the explosion of programming languages, frameworks, and architectural patterns. A CTO who built their expertise on monolithic PHP applications in 2010 may lack relevant experience for microservices, Kubernetes, serverless architectures, and edge computing that define modern systems. Companies need leaders with current, battle-tested knowledge.
            </p>
            <p className="text-gray-700 mb-6">
              Security and compliance requirements have become executive-level concerns. GDPR, SOC 2, ISO 27001, PCI-DSS—these aren't checkbox exercises but fundamental architectural decisions. The <a href="https://www.bcs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BCS (British Computer Society)</a> provides professional standards for IT security leadership. Research from the <a href="https://www.cncf.io/reports/cncf-annual-survey-2023/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Cloud Native Computing Foundation</a> shows that security and compliance drive 60% of cloud architecture decisions. Companies need fractional CISOs and CTOs who've actually implemented these frameworks at scale, not consultants who've read about them.
            </p>
            <p className="text-gray-700">
              Fractional tech executives solve multiple problems simultaneously. They provide current expertise in rapidly evolving technologies, bring pattern recognition from multiple companies facing similar challenges, and cost 50-60% less than full-time equivalents. <a href="https://www.scaleupdevelopmenteconomy.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">The ScaleUp Institute</a> highlights how access to senior expertise remains a critical challenge for high-growth companies. For tech companies navigating cloud migration, AI implementation, or scaling from 10 to 100 engineers, this expertise at the critical moment prevents catastrophically expensive mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* What Tech Fractional Executives Do Differently */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Role Requirements</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Tech Fractional Executives Do Differently</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Fractional technology executives operate differently than permanent CTOs or consultants. They combine hands-on technical depth with strategic vision, bringing current expertise from multiple parallel implementations. <a href="https://technation.io/insights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation insights</a> show how flexible leadership models are transforming the UK tech ecosystem.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>They make build-vs-buy decisions based on current reality, not past experience.</strong> The technology landscape shifts monthly. A fractional CTO evaluating whether to build a recommendation engine in-house or use a managed service has likely evaluated the same decision for 2-3 other clients in the past quarter. They know which vendors over-promise, which open-source projects have active communities vs abandoned codebases, and what truly costs in production vs marketing claims. This current, comparative knowledge prevents expensive wrong turns.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>They architect for the company you're becoming, not the company you are.</strong> Scaling from 1,000 to 100,000 users requires different architecture than scaling from 100,000 to 10 million. Fractional CTOs have seen these transitions and know which parts of the stack need over-engineering and which can stay simple. They prevent premature optimization (wasting engineering resources) and identify critical bottlenecks before they cause outages.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>They can still code—and that matters.</strong> According to <a href="https://stackoverflow.com/dev-survey" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Stack Overflow data</a>, technology stacks are increasingly polyglot. The best fractional CTOs maintain hands-on coding skills, review architecture through pull requests, and can diagnose production issues by reading logs and metrics. They're not "retired" CTOs—they're actively practicing technologists who happen to work fractionally.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>They build teams, not just systems.</strong> Hiring technical talent is brutally competitive. Research from <a href="https://www.techuk.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> shows the UK tech sector faces persistent skills shortages. Fractional CTOs leverage their networks to source hard-to-find specialists, know which technical interview questions actually predict performance, and understand compensation benchmarks across different company stages. They've built engineering teams 5-10 times and know the hiring mistakes that kill momentum.
            </p>
            <p className="text-gray-700">
              <strong>They navigate vendor relationships strategically.</strong> Cloud spend can spiral from £5k to £50k monthly without architectural discipline. Fractional CTOs negotiate enterprise agreements, implement FinOps practices to control costs, and know when to challenge vendor pricing vs when you're getting fair value. This cost management often pays their fees multiple times over.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Guide */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Hiring Guide</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hiring Fractional Tech Executives: What to Look For</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              The wrong fractional CTO can set your technical roadmap back 12-18 months. Here's how to identify truly exceptional technical leadership.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Green Flags: Technical Excellence</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Recent hands-on experience:</strong> They can discuss technologies you use (or should use) with current, specific detail—not generic "cloud" references</li>
              <li><strong>GitHub presence:</strong> Active contributions to open source or maintained personal projects show they're still coding, not just managing</li>
              <li><strong>Scale experience:</strong> Ask: "What's the largest system you've scaled, from what baseline to what peak?" Specific numbers matter</li>
              <li><strong>Disaster stories:</strong> Great CTOs have survived production outages, security incidents, and architectural mistakes. They learned from failures</li>
              <li><strong>Hiring success:</strong> They can name 5+ exceptional engineers they've hired and what made each hire successful. The <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> emphasizes that leadership capability in building teams is critical</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Flags: Warning Signs</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tech buzzword bingo:</strong> If they mention AI, blockchain, microservices, and serverless in the first conversation without context, run</li>
              <li><strong>Can't explain trade-offs:</strong> Every technical decision has trade-offs. If they can't articulate downsides of their recommendations, they lack depth</li>
              <li><strong>No production war stories:</strong> Anyone who's run production systems has scars. No stories means no real operational experience</li>
              <li><strong>Dismissive of existing codebase:</strong> "Rewrite everything" is rarely the answer. Great CTOs find incremental improvement paths</li>
              <li><strong>Generic security answers:</strong> Security requires specific, current knowledge of threats and mitigations, not platitudes about "best practices"</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Structuring Technical Engagements</h3>
            <p className="text-gray-700 mb-4">
              Start with a technical audit (1-2 weeks, fixed fee £3k-£8k). A good fractional CTO will review architecture, codebase, infrastructure, team structure, and technical debt—then provide a prioritized roadmap. According to <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS business data</a>, strategic planning and expert consultation are key drivers of productivity growth in the tech sector. This audit validates their expertise and gives you actionable insights even if you don't proceed with ongoing engagement.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Ongoing engagement:</strong> Most technical fractional relationships run 2 days/week for 6-12 months. One day for architecture/strategy work, one day embedded with the engineering team for reviews, hiring, and technical decisions. This balance provides strategic direction without disconnecting from implementation reality.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Day rates by specialization:</strong> General CTO/VP Engineering: £900-£1,200. Cloud architecture specialists: £1,000-£1,350. Security (CISO): £1,100-£1,400. AI/ML specialists: £1,200-£1,500. Rates reflect scarcity of genuine expertise. <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> research shows that access to senior expertise is a critical factor in scaling technology businesses.
            </p>
            <p className="text-gray-700">
              <strong>Define technical outcomes upfront.</strong> For cloud migration: "Migrate 80% of workloads to AWS with &lt;10% downtime, achieve £15k/month cost reduction." For scaling: "Support 10x traffic growth with &lt;200ms p95 latency." For security: "Achieve SOC 2 Type II certification within 8 months." Measurable outcomes prevent endless architectural philosophy debates.
            </p>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Tax Planning</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IR35 Calculator</h2>
            <p className="text-xl text-gray-500">Understand your take-home as a fractional tech leader</p>
          </div>
          <IR35Calculator defaultDayRate={1100} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Fractional FAQs</h2>
            <p className="text-xl text-gray-500">Common questions about fractional tech roles</p>
          </div>
          <FAQ items={TECH_FAQS} title="" />
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map((search) => (
              <Link
                key={search}
                href={`/fractional-jobs?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm border border-gray-200"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for Fractional Tech Leadership?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            {stats.total}+ CTO, VP Engineering, and Tech Director opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fractional-jobs?role=CTO"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Browse Tech Jobs
            </Link>
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Join the Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
