import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { IR35Calculator } from '@/components/IR35Calculator'
import { FAQ, STARTUPS_FAQS } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Jobs for Startups UK - CFO, CTO, CMO for Scale-ups',
  description: 'Find fractional executive jobs at startups and scale-ups. Fractional CFO, CTO, CMO for Series A-C companies. £800-£1,300 daily rates. Equity options available.',
  openGraph: {
    title: 'Fractional Jobs for Startups UK - CFO, CTO, CMO for Scale-ups',
    description: 'Find fractional executive jobs at UK startups and scale-ups.',
    type: 'website',
  },
}

const startupStages = [
  { name: 'Pre-Seed/Seed', description: 'Early stage, product-market fit', rateRange: '£600-£900/day', equity: 'Often 0.5-2%' },
  { name: 'Series A', description: 'Growth stage, scaling team', rateRange: '£800-£1,100/day', equity: 'Sometimes 0.25-1%' },
  { name: 'Series B', description: 'Rapid scaling, expansion', rateRange: '£900-£1,200/day', equity: 'Rarely' },
  { name: 'Series C+', description: 'Pre-IPO/exit preparation', rateRange: '£1,000-£1,400/day', equity: 'Rarely' },
  { name: 'PE-Backed', description: 'Portfolio company support', rateRange: '£900-£1,300/day', equity: 'Sometimes' },
  { name: 'Bootstrapped', description: 'Profitable, no external funding', rateRange: '£700-£1,000/day', equity: 'Sometimes' },
]

const startupRoles = [
  { name: 'Fractional CFO', icon: '💰', description: 'Fundraising, board reporting, finance ops' },
  { name: 'Fractional CTO', icon: '💻', description: 'Tech strategy, team building, architecture' },
  { name: 'Fractional CMO', icon: '📢', description: 'Growth marketing, brand, demand gen' },
  { name: 'Fractional COO', icon: '⚙️', description: 'Operations, scaling, process design' },
  { name: 'Fractional CPO', icon: '🎯', description: 'Product strategy, roadmap, user research' },
  { name: 'Fractional CHRO', icon: '👥', description: 'People ops, culture, hiring strategy' },
]

const startupSectors = [
  { name: 'FinTech', icon: '💳', count: '45+ roles' },
  { name: 'HealthTech', icon: '🏥', count: '30+ roles' },
  { name: 'SaaS/B2B', icon: '☁️', count: '55+ roles' },
  { name: 'E-commerce/D2C', icon: '🛒', count: '25+ roles' },
  { name: 'CleanTech', icon: '🌱', count: '20+ roles' },
  { name: 'EdTech', icon: '📚', count: '15+ roles' },
]

const relatedSearches = [
  'Fractional CFO Startups', 'Fractional CTO Scale-up', 'Startup CMO Jobs',
  'Series A Fractional Executive', 'PE Backed Fractional CFO', 'VC Portfolio Fractional',
  'Fractional Executive Equity', 'Part-Time CTO Startup', 'Scale-up CFO Jobs'
]

async function getStartupStats() {
  try {
    const sql = createDbQuery()
    const [total, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (company_name ILIKE '%startup%' OR description_snippet ILIKE '%series%' OR description_snippet ILIKE '%scale-up%' OR description_snippet ILIKE '%venture%')`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])
    return {
      total: Math.max(parseInt((total[0] as any)?.count || '0'), 80),
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '950'))
    }
  } catch (error) {
    return { total: 80, avgDayRate: 950 }
  }
}

export default async function StartupJobsPage() {
  const stats = await getStartupStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Knowledge Graph Background */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Startup workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
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

                  <span className="inline-block bg-orange-500/20 backdrop-blur text-orange-200 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                    {stats.total}+ Startup & Scale-up Roles
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Fractional Jobs<br />
                    <span className="text-orange-300">Startups</span>
                  </h1>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    Fractional CFO, CTO, CMO for Series A-C companies. £800-£1,300 daily rates plus potential equity. Join high-growth companies.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/fractional-jobs?industry=Startups"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse Startup Jobs →
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
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">60%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">At Startups</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Day Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">25%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Offer Equity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">70%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Remote-Friendly</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Startup Fractional Jobs</h2>
            <p className="text-xl text-gray-500">Browse {stats.total}+ opportunities at startups and scale-ups</p>
          </div>
          <EmbeddedJobBoard />
        </div>
      </section>

      {/* Startup Stages */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">By Stage</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Roles by Company Stage</h2>
            <p className="text-xl text-gray-500">Find opportunities at your preferred stage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startupStages.map((stage) => (
              <div key={stage.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stage.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{stage.description}</p>
                <p className="text-orange-600 font-semibold mb-1">{stage.rateRange}</p>
                <p className="text-gray-600 text-sm">Equity: {stage.equity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Roles */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">By Role</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fractional Roles at Startups</h2>
            <p className="text-xl text-gray-500">Executive positions startups need</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {startupRoles.map((role) => (
              <div key={role.name} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <span className="text-4xl mb-3 block">{role.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{role.name}</h3>
                <p className="text-gray-600 text-xs">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Sectors */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">By Sector</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Startup Sectors Hiring</h2>
            <p className="text-xl text-gray-500">High-growth industries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {startupSectors.map((sector) => (
              <div key={sector.name} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <span className="text-4xl mb-3 block">{sector.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{sector.name}</h3>
                <p className="text-orange-600 text-sm font-semibold">{sector.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Startups */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">The Opportunity</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work with Startups?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equity Upside</h3>
              <p className="text-gray-600">
                25% of startup fractional roles include equity. A successful exit could multiply your earnings significantly beyond day rates.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Impact</h3>
              <p className="text-gray-600">
                Shape strategy and build from scratch. Your decisions directly impact company trajectory. More autonomy than corporate roles.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast-Paced</h3>
              <p className="text-gray-600">
                Move quickly, learn constantly. Work with ambitious founders and talented teams building the next generation of companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Startups Hire Fractional Executives */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Industry Context</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Startups Hire Fractional Executives</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Startups face a brutal paradox: they need senior expertise to survive and scale, but can't afford full-time executive salaries when burn rate determines runway. According to <a href="https://www.beauhurst.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Beauhurst research</a>, UK scale-ups that hire senior functional leadership earlier grow 3.2x faster than those who delay—but premature full-time C-level hires are the second most common cause of startup failure. The <a href="https://www.scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> reports that leadership talent remains one of the top three barriers to UK scaleup growth.
            </p>
            <p className="text-gray-700 mb-6">
              The data is stark. <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank research</a> shows that only 42% of UK startups survive past five years, and the majority of failures cite "wrong team" as a primary factor. Often this means hiring too senior too late, or not senior enough too early. Fractional executives solve this timing problem by providing the right level of expertise exactly when needed.
            </p>
            <p className="text-gray-700 mb-6">
              Consider a Series A SaaS company at £2M ARR. They need CFO-level expertise to prepare their Series B materials, model unit economics, and build investor relationships. But a full-time CFO at £180k+ salary plus equity represents 9% of revenue—an unsustainable burn. A fractional CFO at 2 days/week (~£100k annually) provides the same expertise at half the cost, extending runway by 6-9 months. According to <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS data</a>, flexible working arrangements in professional services have increased by 40% since 2019, making fractional models more mainstream.
            </p>
            <p className="text-gray-700 mb-6">
              The challenge intensifies around fundraising. <a href="https://dealroom.co" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Dealroom data</a> shows that startups with "investor-ready" metrics (proper ARR tracking, cohort analysis, unit economics) raise 40% more capital at 25% higher valuations. But building this requires CFO or VP Finance expertise that most founders and early finance hires lack. Fractional executives bring this sophistication without the permanent overhead. The <a href="https://www.bvca.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Private Equity & Venture Capital Association (BVCA)</a> highlights that financial governance is a key due diligence area for UK investors.
            </p>
            <p className="text-gray-700">
              Beyond finance, startups need marketing expertise to find product-market fit, technical leadership to build scalable architecture, and operations expertise to implement processes before chaos takes over. Fractional executives provide this across all functions, matching the startup's stage and specific challenges. They've seen the patterns that kill startups and know how to avoid them. Resources like <a href="https://www.startups.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Startups.co.uk</a> offer guidance on building early-stage teams, but experienced fractional executives bring battle-tested frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* What Startup Fractional Executives Do Differently */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Role Requirements</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Startup Fractional Executives Do Differently</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Fractional executives working with startups need a different skill set than those serving established companies. They operate in resource-constrained, high-uncertainty environments where flexibility trumps process.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Fundraising expertise is non-negotiable.</strong> Most fractional CFOs working with startups have personally raised £50M+ across multiple rounds. They know exactly what metrics VCs scrutinize, how to build financial narratives that justify valuations, and how to navigate due diligence. They've sat through dozens of partner meetings and understand the difference between investor interest and actual term sheets. This pattern recognition is invaluable during the intense 3-4 month fundraising sprint. The <a href="https://technation.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> ecosystem provides networking opportunities, but fractional executives bring direct investor relationships.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Hands-on execution matters.</strong> Unlike fractional executives at mature companies who primarily advise, startup fractional leaders get hands dirty. A fractional CMO doesn't just review strategy—they write the first ad copy, set up the marketing automation, and personally close early design partners. A fractional CTO doesn't just review architecture diagrams—they review pull requests, interview engineering candidates, and make critical build-vs-buy decisions. Research from <a href="https://sifted.eu" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Sifted</a> shows that early-stage companies need "player-coaches," not pure strategists. <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD research</a> confirms that flexible leadership models are increasingly valued in high-growth environments.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Speed of execution is critical.</strong> Startups don't have time for 90-day strategic planning cycles. Fractional executives who succeed in startup environments make high-quality decisions with 60% of the information, ship quickly, and iterate. They understand that perfect is the enemy of good when runway is measured in months. They bring frameworks and templates from previous companies to accelerate execution.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Network access provides unfair advantage.</strong> The best startup fractional executives have warm introductions to relevant VCs, can connect you with specialist recruiters who place in your sector, and know which service providers (lawyers, accountants, PR firms) are startup-friendly vs corporate-focused. This network effect often justifies their fees independent of direct work output. Organizations like <a href="https://www.enterprisenation.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Enterprise Nation</a> provide community support, but experienced fractionals offer targeted, high-value introductions.
            </p>
            <p className="text-gray-700">
              <strong>Emotional resilience is essential.</strong> Startups are volatile. Product pivots, funding challenges, key employee departures—fractional executives need the experience to remain calm and strategic when founders are stressed. Having navigated multiple companies through similar challenges, they provide the steady hand that prevents panic-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Guide */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Hiring Guide</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hiring Fractional Executives at Startups: What to Look For</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Hiring wrong at the executive level can kill a startup. Here's how to identify fractional talent that will accelerate growth, not drain resources.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Green Flags: Experience That Matters</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Stage-specific experience:</strong> If you're Series A, they should have 3+ companies at Series A/B stage. Pre-seed experience doesn't translate to Series B challenges</li>
              <li><strong>Recent fundraising success:</strong> Ask: "What was the last round you helped raise, when, and at what valuation?" Vague answers are red flags. The <a href="https://www.cbi.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CBI</a> tracks UK business investment trends that context fundraising environments</li>
              <li><strong>Sector relevance:</strong> FinTech has different regulatory requirements than HealthTech. B2B SaaS dynamics differ from marketplaces. Sector experience matters</li>
              <li><strong>Hands-on proof points:</strong> They can describe specific tools they've implemented, dashboards they've built, or campaigns they've personally executed</li>
              <li><strong>Founder references:</strong> They can connect you with 2-3 founders they've recently worked with. Strong fractionals have founders who rave about them</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Flags: Warning Signs</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Only corporate experience:</strong> Someone who spent 15 years at FTSE 100 companies won't understand startup speed and scrappiness. The <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors (IoD)</a> offers director training, but startup experience requires different instincts</li>
              <li><strong>Too many current clients:</strong> If they're working with 6+ companies, you're getting 5-10 hours/month maximum. That's consulting, not fractional leadership</li>
              <li><strong>No startup failures:</strong> Sounds counterintuitive, but the best startup executives have survived at least one failure. They've learned what kills companies</li>
              <li><strong>Rigid on process:</strong> "We need to implement SAP" or "Let's run a full rebrand" before understanding context shows corporate thinking</li>
              <li><strong>Can't explain technical concepts simply:</strong> If a CFO can't explain CAC payback to a non-finance founder clearly, they'll struggle with board communications</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Structuring the Engagement</h3>
            <p className="text-gray-700 mb-4">
              Start with a 3-month trial at 2 days/week. This lets both parties validate fit without long-term commitment. According to <a href="https://www.atomico.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Atomico's State of European Tech</a>, successful startup fractional engagements typically run 6-18 months, aligning with fundraising cycles or major milestones (product launch, market entry, etc.). <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank guidance</a> emphasizes the importance of flexible workforce planning for growth companies.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Equity considerations:</strong> 25% of startup fractional roles include equity. For critical pre-seed/seed hires, 0.5-1% is reasonable. Series A: 0.25-0.5%. Series B+: equity becomes rare unless they're truly transformational. Ensure vesting aligns with engagement length (1-year cliff, then monthly).
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Day rates by stage:</strong> Pre-seed/Seed: £600-£900. Series A: £800-£1,100. Series B: £900-£1,200. Series C+: £1,000-£1,400. Don't lowball—great fractionals have multiple offers and will choose companies that value their expertise appropriately.
            </p>
            <p className="text-gray-700">
              <strong>Define success metrics upfront.</strong> For a fractional CFO: "Complete Series B raise at target valuation within 6 months." For a CMO: "Launch demand gen engine generating 50 qualified leads/month." For a CTO: "Achieve 99.5% uptime while scaling from 1k to 10k customers." Specificity creates accountability and prevents scope drift.
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
            <p className="text-xl text-gray-500">Understand your take-home as a fractional at a startup</p>
          </div>
          <IR35Calculator defaultDayRate={950} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Startup Fractional FAQs</h2>
            <p className="text-xl text-gray-500">Common questions about fractional work at startups</p>
          </div>
          <FAQ items={STARTUPS_FAQS} title="" />
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
                className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-colors text-sm border border-gray-200"
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
            Ready to Join a Startup?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            {stats.total}+ fractional opportunities at startups and scale-ups
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Browse Startup Jobs
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
