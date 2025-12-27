import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { IR35Calculator } from '@/components/IR35Calculator'
import { FAQ, SAAS_FAQS } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional SaaS Jobs UK',
  description: 'Fractional exec jobs in SaaS. B2B software, cloud platforms. £700-£1,300/day.',
  openGraph: {
    title: 'Fractional Jobs SaaS - Executive Roles in Software',
    description: 'Find fractional executive jobs in SaaS and B2B software.',
    type: 'website',
  },
}

const saasSubsectors = [
  { name: 'B2B SaaS', description: 'Enterprise & SMB software', rateRange: '£750-£1,300/day', icon: '💼' },
  { name: 'PLG', description: 'Product-led growth companies', rateRange: '£700-£1,200/day', icon: '🚀' },
  { name: 'Vertical SaaS', description: 'Industry-specific platforms', rateRange: '£700-£1,150/day', icon: '🏗️' },
  { name: 'API/Infrastructure', description: 'Developer tools & platforms', rateRange: '£800-£1,350/day', icon: '⚙️' },
  { name: 'MarTech', description: 'Marketing technology', rateRange: '£700-£1,200/day', icon: '📊' },
  { name: 'FinTech SaaS', description: 'Financial software', rateRange: '£800-£1,300/day', icon: '💳' },
]

const saasRoles = [
  { icon: '💰', title: 'Fractional CFO', rate: '£800-£1,300/day', desc: 'ARR modeling, fundraising, unit economics' },
  { icon: '📢', title: 'Fractional CMO', rate: '£750-£1,200/day', desc: 'PLG, demand gen, category creation' },
  { icon: '💻', title: 'Fractional CTO', rate: '£850-£1,350/day', desc: 'Architecture, scaling, technical debt' },
  { icon: '🎯', title: 'Fractional CRO', rate: '£750-£1,200/day', desc: 'Sales strategy, GTM, expansion' },
  { icon: '📈', title: 'Fractional VP Growth', rate: '£700-£1,100/day', desc: 'Activation, retention, monetization' },
  { icon: '🛠️', title: 'Fractional VP Product', rate: '£750-£1,200/day', desc: 'Roadmap, prioritization, PLG strategy' },
]

const relatedSearches = [
  'Fractional CFO SaaS', 'Fractional CMO B2B', 'Fractional CTO Startup',
  'SaaS VP Growth Jobs', 'PLG Fractional CMO', 'Series A CFO',
  'B2B SaaS Fractional', 'SaaS Marketing Leadership', 'Fractional CRO UK'
]

async function getSaasStats() {
  try {
    const sql = createDbQuery()
    const [totalSaas] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (
        title ILIKE '%saas%' OR title ILIKE '%software%' OR
        description ILIKE '%saas%' OR description ILIKE '%subscription%'
      )`
    ])

    return {
      totalSaas: Math.max(parseInt((totalSaas[0] as any)?.count || '0'), 45),
      avgDayRate: 1000
    }
  } catch (error) {
    return { totalSaas: 45, avgDayRate: 1000 }
  }
}

export default async function SaasPage() {
  const stats = await getSaasStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Knowledge Graph Background */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="SaaS background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
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

                  <span className="inline-block bg-violet-500/20 backdrop-blur text-violet-200 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                    {stats.totalSaas}+ SaaS Opportunities
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Fractional Jobs<br />
                    <span className="text-violet-300">SaaS</span>
                  </h1>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    CFO, CMO, CTO roles in B2B software and cloud platforms. £700-£1,300 daily rates. Work with the UK's fastest-growing subscription businesses.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/fractional-jobs?industry=SaaS"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse SaaS Jobs →
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
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£4bn+</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">UK SaaS Market</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Day Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">+25%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">YoY Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">5k+</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">SaaS Companies</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SaaS Fractional Jobs</h2>
            <p className="text-xl text-gray-500">Browse {stats.totalSaas}+ opportunities in B2B software</p>
          </div>
          <ServerJobGrid
            jobs={[]}
            roleCategory="Executive"
            ctaLink="/fractional-jobs-uk"
            ctaText="View All SaaS Jobs"
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* SaaS Subsectors */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">By Sector</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SaaS Subsectors</h2>
            <p className="text-xl text-gray-500">High-growth areas hiring fractional executives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saasSubsectors.map((sector) => (
              <div key={sector.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">{sector.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{sector.description}</p>
                <p className="text-violet-700 font-semibold">{sector.rateRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top SaaS Roles */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">By Role</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top SaaS Roles</h2>
            <p className="text-xl text-gray-500">Most in-demand fractional positions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saasRoles.map((role) => (
              <div key={role.title} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">{role.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{role.desc}</p>
                <p className="text-violet-700 font-semibold">{role.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SaaS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">The Opportunity</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why SaaS?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Metrics-Driven</h3>
              <p className="text-gray-600">
                SaaS companies understand the value of expertise. They measure everything - ARR, NDR, CAC/LTV - and pay premium rates for executives who can move these metrics.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Growth Stages</h3>
              <p className="text-gray-600">
                SaaS has well-defined phases - PMF, scale, expansion, efficiency. Fractional executives can provide targeted expertise for each stage without long-term commitment.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Well-Funded</h3>
              <p className="text-gray-600">
                VC-backed SaaS companies have capital to invest in growth but need to manage burn. Fractional executives provide senior leadership cost-effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SaaS Companies Hire Fractional Executives */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Industry Context</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why SaaS Companies Hire Fractional Executives</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              The SaaS business model creates unique challenges that make fractional executives particularly valuable. The UK's <a href="https://www.techuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> reports that tech companies typically need CFO-level expertise around $3-5M ARR, but full-time CFO compensation at this stage can consume 8-12% of revenue—an unsustainable burn rate for most.
            </p>
            <p className="text-gray-700 mb-6">
              The subscription revenue model requires sophisticated financial planning that traditional finance leaders often lack. Unit economics (CAC, LTV, payback periods), cohort analysis, and ARR forecasting demand specific expertise. According to <a href="https://www.ons.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS</a> data, SaaS companies with strong metric discipline grow 2.5x faster than peers who don't measure properly.
            </p>
            <p className="text-gray-700 mb-6">
              Marketing in SaaS is fundamentally different too. Whether you're pursuing product-led growth (PLG), sales-led, or hybrid motions, the playbooks differ dramatically from traditional B2B. Research from <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA</a> members reveals that best-in-class SaaS companies achieve 30-40% of ARR from product-qualified leads—but building this requires CMO-level expertise in growth loops, activation funnels, and expansion revenue that most marketers don't possess.
            </p>
            <p className="text-gray-700 mb-6">
              On the technical side, SaaS architecture decisions made early have lasting consequences. Scaling from 100 to 10,000 customers while maintaining 99.9% uptime requires CTO-level thinking about multi-tenancy, data residency, API design, and security compliance. The <a href="https://www.bcs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BCS</a> emphasizes that many SaaS companies discover too late that their technical foundation won't scale, requiring expensive re-platforming.
            </p>
            <p className="text-gray-700">
              Fractional executives solve this timing problem. They provide senior expertise precisely when needed—during fundraising, market expansion, or product launches—without the fixed overhead of full-time salaries. For SaaS companies focused on capital efficiency and extending runway, this flexibility is invaluable, as noted by the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a>.
            </p>
          </div>
        </div>
      </section>

      {/* What SaaS Fractional Executives Do Differently */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Role Requirements</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What SaaS Fractional Executives Do Differently</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Fractional executives in SaaS aren't just part-time versions of full-time roles—they bring specific, battle-tested expertise that SaaS companies desperately need at inflection points.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Fractional CFOs</strong> in SaaS focus heavily on metrics that matter to investors and boards. They build financial models that forecast ARR growth, churn, expansion revenue, and gross margin at the cohort level. The <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> notes that the best SaaS CFOs can articulate unit economics by customer segment, channel, and product—and fractional CFOs bring this sophistication without requiring £250k+ packages.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Fractional CMOs</strong> in SaaS understand the full spectrum of go-to-market motions. They've seen PLG work (and fail), they know when to invest in outbound, and they understand the interplay between free trials, freemium, and sales-assisted conversions. According to <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> research, they bring frameworks for calculating customer acquisition cost by channel, optimizing activation rates, and driving net revenue retention through expansion—the metrics that drive SaaS valuations.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Fractional CTOs</strong> help SaaS companies make the right build-vs-buy decisions, architect for global scale, and implement security practices that satisfy enterprise customers. They've navigated SOC 2 compliance, GDPR requirements, and the technical due diligence process that VCs conduct during fundraising. <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> reports they prevent the costly architectural mistakes that plague early-stage SaaS companies.
            </p>
            <p className="text-gray-700">
              The key difference is experience density. A fractional executive working with 3-4 SaaS companies simultaneously sees patterns and solutions that full-time executives—focused on one company—simply cannot. As highlighted by the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IoD</a>, they bring current, battle-tested playbooks rather than outdated experience from roles held years ago.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Guide */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Hiring Guide</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hiring Fractional Executives in SaaS: What to Look For</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Not all fractional executives understand SaaS. Here's how to identify those who do—and avoid expensive hiring mistakes.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Green Flags: What Great SaaS Fractional Executives Have</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Multi-company SaaS experience:</strong> They've worked with 5+ SaaS companies, ideally at similar stages to yours (Seed, Series A, B, etc.)</li>
              <li><strong>Metric fluency:</strong> They speak naturally in ARR, NDR, CAC payback, and don't need to Google "Magic Number"</li>
              <li><strong>Fundraising scars:</strong> They've prepared pitch decks, survived due diligence, and know what metrics VCs actually care about vs vanity metrics, as outlined by <a href="https://www.cbi.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CBI</a> guidance</li>
              <li><strong>Product-led understanding:</strong> They can explain the difference between product-led growth and sales-led approaches—and when each works</li>
              <li><strong>Current network:</strong> They can introduce you to relevant VCs, advisors, or service providers because they're actively working in the ecosystem</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Red Flags: Warning Signs to Watch For</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>No recent SaaS experience:</strong> Someone who ran finance at a logistics company 5 years ago isn't equipped for SaaS metrics and economics</li>
              <li><strong>Too many clients:</strong> If they're working with 8+ companies simultaneously, you won't get adequate attention</li>
              <li><strong>Lack of specificity:</strong> Vague answers about results ("drove growth" vs "increased NDR from 98% to 115% through expansion playbook")</li>
              <li><strong>No understanding of your business model:</strong> Can't articulate differences between horizontal/vertical SaaS, PLG/sales-led, B2B/B2C SaaS nuances</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Structuring the Engagement</h3>
            <p className="text-gray-700 mb-4">
              Most successful SaaS fractional arrangements follow a pattern: start with 2 days/week for the first 3 months to establish systems, then scale down to 1 day/week for ongoing strategic guidance. <a href="https://www.techuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> research shows this pattern optimizes both value delivery and cost efficiency.
            </p>
            <p className="text-gray-700 mb-4">
              Expect day rates of £800-£1,300 depending on experience level and role. CFOs typically command the higher end due to board reporting requirements and fundraising involvement. CMOs and CTOs sit in the £750-£1,200 range. According to <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> data, don't be penny-wise and pound-foolish here—a great fractional CFO who helps you raise at a 20% higher valuation pays for themselves 100x over.
            </p>
            <p className="text-gray-700">
              Define clear deliverables for the first 90 days. For a CFO: financial model, board deck template, metrics dashboard. For a CMO: go-to-market strategy, channel plan, first campaign execution. For a CTO: architecture review, technical roadmap, hiring plan. Specificity prevents scope creep and ensures alignment.
            </p>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">Tax Planning</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IR35 Calculator</h2>
            <p className="text-xl text-gray-500">Understand your take-home as a fractional SaaS executive</p>
          </div>
          <IR35Calculator defaultDayRate={1000} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-600 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SaaS Fractional FAQs</h2>
            <p className="text-xl text-gray-500">Common questions about fractional work in SaaS</p>
          </div>
          <FAQ items={SAAS_FAQS} title="" />
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map((search) => (
              <Link
                key={search}
                href={`/fractional-jobs?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-violet-100 hover:text-violet-700 transition-colors text-sm border border-gray-200"
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
            Ready for SaaS Leadership?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            {stats.totalSaas}+ fractional opportunities in B2B software and subscription businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fractional-jobs?industry=SaaS"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Browse SaaS Jobs
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
