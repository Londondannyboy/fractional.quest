import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO for Startups | Expert Financial Leadership for £3k-£8k/Month',
  description: 'Fractional CFO services for startups. Get Series A-ready financials, fundraising support, and strategic CFO expertise without £150k+ full-time cost. 50/mo searches, $218 CPC.',
  keywords: 'fractional cfo for startups, startup cfo, fractional cfo seed stage, series a cfo, startup financial leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-for-startups',
  },
  openGraph: {
    title: 'Fractional CFO for Startups | Financial Leadership Without Full-Time Cost',
    description: 'Expert fractional CFO services for startups. Fundraising, financial modeling, investor relations, and strategic finance leadership.',
    images: ['/images/fractional-cfo-startups.jpg'],
    url: 'https://fractional.quest/fractional-cfo-for-startups',
  },
}

const STARTUP_CFO_FAQS = [
  {
    question: "When should a startup hire a fractional CFO?",
    answer: "Hire a fractional CFO when you're 6-12 months from fundraising, have >£1M ARR, experiencing rapid growth (3x+ YoY), struggling with cash flow, or investors demand better reporting. Most startups engage fractional CFOs pre-Series A through Series B."
  },
  {
    question: "How much does a fractional CFO cost for startups?",
    answer: "Startup fractional CFOs cost £3,000-£8,000/month for 1-2 days/week. Pre-seed/seed startups typically need 1 day/week (£3,000-£4,500/month). Series A startups need 2 days/week (£6,000-£9,000/month). This is 60-75% cheaper than full-time."
  },
  {
    question: "What does a fractional CFO do for startups?",
    answer: "Startup fractional CFOs focus on: building investor-ready financial models, managing fundraising processes, creating board reporting, implementing financial controls, cash flow forecasting, unit economics analysis, and preparing companies for due diligence."
  },
  {
    question: "Do startups really need a CFO?",
    answer: "Not immediately. Pre-revenue startups can use accountants/bookkeepers. But once you're raising Series A, have >£1M ARR, or managing complex financials, you need CFO-level strategic thinking. Fractional gives you this without full-time cost."
  },
  {
    question: "Can a fractional CFO help with fundraising?",
    answer: "Yes, this is their primary value for startups. Fractional CFOs build financial models VCs expect, manage due diligence, present financials credibly, and help negotiate terms. Many have raised £50M+ across their careers."
  },
]

export default function FractionalCFOForStartupsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CFO for Startups | Expert Financial Leadership',
    description: 'Fractional CFO services for startups. Get Series A-ready financials, fundraising support, and strategic CFO expertise without £150k+ full-time cost.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero */}
      <section className="relative bg-gray-50 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cfo" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to CFO Hub
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-blue-950/200 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              High-Value ($218 CPC)
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              Fractional CFO<br />
              <span className="text-gray-400">for Startups</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Get <strong className="text-white">Series A-ready financials</strong> and expert fundraising support without the £150k+ full-time CFO cost. Perfect for pre-seed through Series B startups.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black">£3k-£8k</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Cost</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-blue-400">$218</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">CPC Value</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">60-75%</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Startups Need Fractional CFOs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">The Startup Challenge</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Startups Need Fractional CFOs</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Most startups face a dilemma: <strong>You need CFO-level financial expertise to raise capital and scale, but you can't afford or justify a £150k+ full-time CFO.</strong> Fractional CFOs solve this perfectly.
            </p>

            <div className="bg-blue-950/20 border-l-4 border-blue-600 p-8 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-4">The Startup CFO Gap</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What VCs Expect:</p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• Investor-ready financial model</li>
                    <li>• Unit economics analysis</li>
                    <li>• Cash runway forecasts</li>
                    <li>• SaaS metrics dashboard</li>
                    <li>• Cap table modeling</li>
                    <li>• Professional board reporting</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">What Founders Can Deliver:</p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• Basic spreadsheet models</li>
                    <li>• Rough revenue tracking</li>
                    <li>• Bank balance monitoring</li>
                    <li>• Manual calculations</li>
                    <li>• Excel cap table</li>
                    <li>• Ad-hoc investor updates</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 mt-6 mb-0 font-semibold">
                Fractional CFOs bridge this gap—giving you institutional-quality finance without full-time cost.
              </p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">When Startups Hire Fractional CFOs</h3>

            <div className="grid gap-6 my-10">
              <div className="bg-white p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">6-12 Months Pre-Fundraise</h4>
                <p className="text-gray-700 mb-0">You're planning a seed or Series A in the next year. You need to build credible financials NOW so investors take you seriously. Most successful raises start with 6+ months of financial preparation.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-blue-600">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Post-Seed, Pre-Series A</h4>
                <p className="text-gray-700 mb-0">You've raised £500k-£2M seed. You're at £1-3M ARR. Investors want better reporting. You're hiring fast. Founder-led finance is breaking. This is the PERFECT time for fractional CFO.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Rapid Growth Phase (3x+ YoY)</h4>
                <p className="text-gray-700 mb-0">Revenue growing 3x+ year-over-year. You've gone from 5 to 30 people in 12 months. Cash burn is £100k+/month. You need financial controls, forecasting, and systems ASAP.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-blue-600">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Investor Pressure</h4>
                <p className="text-gray-700 mb-0">Your board wants monthly reporting on unit economics, cohort analysis, burn multiple, and scenario planning. You can't deliver this with your current setup.</p>
              </div>

              <div className="bg-white p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cash Runway &lt;12 Months</h4>
                <p className="text-gray-700 mb-0">You're burning faster than expected. Runway is under 12 months. You need credible cash flow forecasts, expense management, and potentially bridge financing. Emergency CFO help required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Startup Fractional CFOs Do */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Fractional CFOs Do for Startups</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Startup fractional CFOs focus on high-impact strategic work that drives fundraising, growth, and sustainability:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-8 border-2 border-gray-900">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">💰</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-0">1. Fundraising Leadership</h3>
                </div>
                <p className="text-gray-700 mb-4"><strong>Why This Matters:</strong> 80% of startup fractional CFO engagements involve fundraising support. This is where they deliver 10x+ ROI.</p>
                <div className="bg-gray-50 p-6">
                  <p className="font-semibold text-gray-900 mb-3">Typical Deliverables:</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Build investor-ready financial model (3-statement, monthly detail, 3-5 year forecast)</li>
                    <li>• Create unit economics dashboard (CAC, LTV, payback period, cohort analysis)</li>
                    <li>• Develop SaaS metrics reporting (ARR, MRR, churn, NRR, burn multiple)</li>
                    <li>• Prepare data room for due diligence (financials, contracts, cap table)</li>
                    <li>• Present financials to VCs (credibly answer tough questions)</li>
                    <li>• Model various deal scenarios (valuation, dilution, pro formas)</li>
                    <li>• Negotiate term sheets alongside founders</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📊</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-0">2. Financial Planning & Analysis</h3>
                </div>
                <div className="bg-gray-50 p-6">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Build rolling 12-month budget and 3-year strategic plan</li>
                    <li>• Create 13-week cash flow forecasts (updated weekly)</li>
                    <li>• Develop scenario planning ("base case, upside, downside")</li>
                    <li>• Implement monthly variance analysis (budget vs actual)</li>
                    <li>• Track KPIs and build executive dashboards</li>
                    <li>• Model pricing strategies and revenue scenarios</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">📈</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-0">3. Board Reporting & Investor Relations</h3>
                </div>
                <div className="bg-gray-50 p-6">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Create monthly/quarterly board packs (financials + narrative)</li>
                    <li>• Present financial performance to board (in-person or virtual)</li>
                    <li>• Manage investor reporting and update emails</li>
                    <li>• Prepare annual budgets for board approval</li>
                    <li>• Build investor data room and maintain updates</li>
                    <li>• Answer investor ad-hoc questions on financials</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">⚙️</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-0">4. Financial Operations & Systems</h3>
                </div>
                <div className="bg-gray-50 p-6">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Implement accounting software (Xero, QuickBooks) and FP&A tools (Adaptive, Causal)</li>
                    <li>• Establish financial controls and approval processes</li>
                    <li>• Set up chart of accounts and GL structure</li>
                    <li>• Create expense policies and procurement processes</li>
                    <li>• Build revenue recognition framework (especially for SaaS)</li>
                    <li>• Establish month-end close calendar and procedures</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">👥</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-0">5. Team Building & Scaling</h3>
                </div>
                <div className="bg-gray-50 p-6">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Hire first Financial Controller (when you reach £3-5M ARR)</li>
                    <li>• Hire FP&A Analyst (Series A+)</li>
                    <li>• Build job descriptions and interview for finance hires</li>
                    <li>• Manage and mentor junior finance team</li>
                    <li>• Decide when to transition to full-time CFO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown for Startups */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CFO Cost for Startups</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-6">By Startup Stage</h3>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-white">
                    <th className="p-4 text-left">Stage</th>
                    <th className="p-4 text-left">Typical ARR</th>
                    <th className="p-4 text-left">CFO Time Needed</th>
                    <th className="p-4 text-left">Monthly Cost</th>
                    <th className="p-4 text-left">Annual Cost</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Pre-Seed</td>
                    <td className="p-4">£0-£500k</td>
                    <td className="p-4">0.5-1 day/week</td>
                    <td className="p-4">£1,500-£4,500</td>
                    <td className="p-4">£18k-£54k</td>
                  </tr>
                  <tr className="border-b bg-blue-950/20">
                    <td className="p-4 font-semibold">Seed</td>
                    <td className="p-4">£500k-£2M</td>
                    <td className="p-4">1-1.5 days/week</td>
                    <td className="p-4 text-blue-600 font-bold">£3,000-£6,000</td>
                    <td className="p-4 text-blue-600 font-bold">£36k-£72k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Series A</td>
                    <td className="p-4">£2M-£10M</td>
                    <td className="p-4">2-2.5 days/week</td>
                    <td className="p-4">£6,000-£12,000</td>
                    <td className="p-4">£72k-£144k</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Series B</td>
                    <td className="p-4">£10M-£30M</td>
                    <td className="p-4">2.5-3 days/week</td>
                    <td className="p-4">£9,000-£15,000</td>
                    <td className="p-4">£108k-£180k</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Series B+</td>
                    <td className="p-4">£30M+</td>
                    <td className="p-4 text-gray-600">Consider full-time CFO</td>
                    <td className="p-4 text-gray-600">£150k-£250k/year</td>
                    <td className="p-4 text-gray-600">Full-time</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 text-white p-8 my-10">
              <h3 className="text-2xl font-bold text-white mb-4">Sweet Spot: Seed to Series A</h3>
              <p className="text-gray-300 mb-4">
                The PERFECT time for fractional CFO is <strong className="text-white">post-seed, pre-Series A</strong>. You have revenue (£500k-£3M ARR), you're preparing to raise Series A in 6-18 months, and you need institutional-quality finance but can't afford £150k+ full-time.
              </p>
              <div className="bg-white/10 p-6">
                <p className="text-white font-semibold mb-2">Typical Engagement:</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 1.5-2 days/week for 12-18 months</li>
                  <li>• £75k-£120k total cost</li>
                  <li>• Saves £130k-£190k vs full-time CFO</li>
                  <li>• Typical outcome: successful Series A raise</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Project-Based Pricing for Startups</h3>

            <p className="text-gray-700 mb-6">
              Many startup fractional CFOs offer fixed-fee project pricing for fundraising:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-white p-6 border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Seed Round Support</h4>
                <div className="text-3xl font-black text-gray-900 mb-2">£15k-£30k</div>
                <div className="text-sm text-gray-600 mb-4">Fixed fee, 3-4 months</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Build financial model</li>
                  <li>• Prepare data room</li>
                  <li>• Support investor pitches</li>
                  <li>• Model deal scenarios</li>
                </ul>
              </div>

              <div className="bg-white p-6 border-2 border-blue-600">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Series A Support</h4>
                <div className="text-3xl font-black text-blue-600 mb-2">£25k-£50k</div>
                <div className="text-sm text-gray-600 mb-4">Fixed fee, 4-6 months</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Full investor model</li>
                  <li>• Complete data room</li>
                  <li>• Attend VC meetings</li>
                  <li>• Manage due diligence</li>
                  <li>• Term sheet negotiation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI for Startups */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">ROI: Real Startup Examples</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div className="bg-white p-8 border-l-4 border-blue-600">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">🚀</span>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mt-0 mb-1">SaaS Startup - Successful Series A</h3>
                    <p className="text-sm text-gray-600 mb-0">£2.5M ARR, 20 employees, London</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Challenge:</strong> Needed to raise £8M Series A but had weak financials. Board unhappy with founder-led reporting. No credible unit economics.</p>
                  <p><strong>Fractional CFO Engagement:</strong> £40,000 (9 months, 2 days/week pre-raise + 1 day/week post-close)</p>
                  <p><strong>Deliverables:</strong> Built institutional-quality model, implemented FP&A, presented to 15 VCs, managed due diligence for 3 term sheets.</p>
                  <p><strong>Outcome:</strong> Raised £8M at £35M valuation (vs projected £6M at £25M without CFO). Additional £2M capital + £10M higher valuation.</p>
                  <p className="text-blue-600 font-bold text-lg">ROI: 300x (£12M additional value for £40k investment)</p>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-900">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">💡</span>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mt-0 mb-1">FinTech Seed Stage - Cash Crisis Averted</h3>
                    <p className="text-sm text-gray-600 mb-0">£800k ARR, 12 employees, Edinburgh</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Challenge:</strong> Burning £90k/month with only 6 months runway. No clear path to next fundraise. Investors nervous.</p>
                  <p><strong>Fractional CFO Engagement:</strong> £28,000 (6 months, 1.5 days/week emergency engagement)</p>
                  <p><strong>Actions:</strong> Implemented weekly cash forecasting, cut burn to £45k/month, extended payment terms, secured £300k bridge from existing investors, built Series A model.</p>
                  <p><strong>Outcome:</strong> Extended runway from 6 to 16 months. Bought time to hit milestones for Series A. Currently raising £5M at 2x better terms than emergency round would have been.</p>
                  <p className="text-blue-600 font-bold text-lg">ROI: Company saved from insolvency. Avoided 40%+ dilution from emergency funding.</p>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-blue-600">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">📊</span>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mt-0 mb-1">E-Commerce - First Professional Finance Function</h3>
                    <p className="text-sm text-gray-600 mb-0">£4M revenue, 25 employees, Bristol</p>
                  </div>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Challenge:</strong> Growing 4x YoY but zero financial visibility. Inventory chaos. No idea if profitable. Investors threatening to pull future funding unless finance improves.</p>
                  <p><strong>Fractional CFO Engagement:</strong> £65,000 (12 months, 1.5 days/week)</p>
                  <p><strong>Built:</strong> Implemented Xero + Fathom, hired Financial Controller, created unit economics dashboard, monthly board reporting, inventory forecasting model.</p>
                  <p><strong>Discovered:</strong> 40% of SKUs unprofitable. £200k inventory write-down needed. But identified 3 hero products driving all profit—doubled down on those.</p>
                  <p><strong>Outcome:</strong> Went from -5% EBITDA to +12% EBITDA in 8 months by cutting unprofitable lines. Grew from £4M to £7M revenue profitably.</p>
                  <p className="text-blue-600 font-bold text-lg">ROI: 10x+ (£650k additional profit vs £65k cost)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Interactive Tool</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Calculate Your Startup CFO Costs</h2>
          </div>
          <RoleCalculator role="CFO" />
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Selection Guide</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Choose a Fractional CFO for Your Startup</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Not all fractional CFOs are right for startups. Here's what to look for:
            </p>

            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">✓ Must-Have Experience</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Startup/Scale-up Background</p>
                    <p className="text-sm mb-0">Must have worked at startups (not just corporates). Ask: "Tell me about the fastest-growing company you've worked at. What stage did you join, what stage did you leave?"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Fundraising Track Record</p>
                    <p className="text-sm mb-0">Must have raised capital (seed, Series A, or later). Ask: "How many funding rounds have you led or supported? What was your role? What was the outcome?"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Your Industry Knowledge</p>
                    <p className="text-sm mb-0">SaaS CFOs understand SaaS metrics. FinTech CFOs understand compliance. Hire someone who's done YOUR industry. Ask: "How many [SaaS/FinTech/etc] companies have you worked with?"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">VC/Investor Fluency</p>
                    <p className="text-sm mb-0">Must speak VC language. Ask: "Can you walk me through how you'd build a financial model for Series A?" If they can't articulate this clearly, move on.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">✗ Red Flags to Avoid</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start">
                  <span className="mr-3 text-red-600 text-xl">✗</span>
                  <span><strong>Only corporate finance background</strong> - Big 4 audit or F500 CFOs often don't understand startup speed and resource constraints</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 text-red-600 text-xl">✗</span>
                  <span><strong>Never raised capital</strong> - Can't lead fundraising if they've never done it</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 text-red-600 text-xl">✗</span>
                  <span><strong>Too many current clients</strong> - If they have 5+ active clients, they're spread too thin for startup needs</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 text-red-600 text-xl">✗</span>
                  <span><strong>Can't start quickly</strong> - Startups need help NOW. If they can't start within 2-3 weeks, pass</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-3 text-red-600 text-xl">✗</span>
                  <span><strong>No references from founders</strong> - Always check 2-3 founder references who've raised with this CFO</span>
                </p>
              </div>
            </div>

            <div className="bg-blue-950/20 border-l-4 border-blue-600 p-6">
              <p className="text-lg font-semibold text-gray-900 mb-2">Recommended Approach</p>
              <p className="text-gray-700 mb-0">
                Interview 3-4 fractional CFO candidates. Ask each to review your financials (30-min free consultation) and propose what they'd do in first 90 days. Choose based on: (1) startup experience, (2) fundraising track record, (3) cultural fit, (4) clarity of proposed approach. Check references carefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={STARTUP_CFO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Hire a Fractional CFO for Your Startup?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Find experienced startup CFOs who've raised £100M+ and scaled companies from seed to Series C.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo-services" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find Startup CFOs
            </Link>
            <Link href="/fractional-cfo-cost" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Calculate Costs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
