import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO: The Complete Guide 2025 | Everything You Need to Know',
  description: 'The complete guide to Fractional CFOs. Learn what a fractional CFO does, pricing, how to hire one, and how to become a fractional CFO. 12,100+ searches/month.',
  keywords: 'fractional cfo, what is a fractional cfo, fractional cfo services, fractional cfo salary, fractional cfo jobs, hire fractional cfo, become fractional cfo',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo',
  },
  openGraph: {
    title: 'Fractional CFO: The Complete Guide 2025',
    description: 'Everything you need to know about Fractional CFOs - from what they do to how to hire or become one.',
    images: ['/images/fractional-cfo.jpg'],
    url: 'https://fractional.quest/fractional-cfo',
  },
}

const CFO_FAQS = [
  {
    question: "What is a Fractional CFO?",
    answer: "A Fractional CFO is an experienced Chief Financial Officer who works with your company part-time (typically 1-3 days per week), providing strategic financial leadership without the cost of a full-time hire. They manage your finance function, build investor relationships, and drive financial strategy."
  },
  {
    question: "How much does a Fractional CFO cost?",
    answer: "Fractional CFO costs in the UK typically range from £700-£1,500 per day depending on experience, or £3,000-£6,000 per week for part-time engagements. This is 50-70% less expensive than hiring a full-time CFO at £150,000-£250,000 annually."
  },
  {
    question: "When should I hire a Fractional CFO?",
    answer: "Consider hiring a fractional CFO when you're preparing for fundraising, experiencing rapid growth, need financial expertise for M&A, require investor-ready financials, or need strategic financial leadership but can't justify a full-time CFO hire."
  },
  {
    question: "How much do Fractional CFOs earn?",
    answer: "Fractional CFOs in the UK typically earn £100,000-£300,000+ annually depending on their client portfolio. With 2-4 clients at £3,000-£6,000/week each, many fractional CFOs earn more than they would in a full-time role while enjoying flexibility."
  },
  {
    question: "How do I become a Fractional CFO?",
    answer: "To become a fractional CFO, you typically need 15+ years of finance experience, prior CFO or senior finance leadership roles, strong industry expertise, and the ability to build client relationships. Many successful fractional CFOs are CPA or CMA qualified and have worked in PE, VC, or high-growth startups."
  },
  {
    question: "What's the difference between a Fractional CFO and a Full-Time CFO?",
    answer: "The main differences are time commitment (part-time vs full-time), cost (£3,000-£6,000/week vs £150,000-£250,000/year), and flexibility. Fractional CFOs work 1-3 days per week, are often engaged for specific projects or phases, and can be scaled up or down as needed."
  },
]

export default function FractionalCFOGuidePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CFO: The Complete Guide 2025',
    description: 'The complete guide to Fractional CFOs. Learn what a fractional CFO does, pricing, how to hire one, and how to become a fractional CFO.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero Section with 3D Knowledge Graph Background */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D roleFilter="CFO" limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Complete Guide 2025
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CFO:<br />
                <span className="text-gray-400">Everything You Need to Know</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                The definitive guide to <strong className="text-white">Fractional CFOs</strong>. Whether you're looking to hire, become, or understand what a fractional CFO does—this guide covers it all.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">12,100</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£700-£1.5k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">60%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Cost Savings</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#what-is" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  What is a Fractional CFO?
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Earnings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">In This Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="#what-is" className="p-6 bg-white hover:bg-gray-900 hover:text-white transition-all group">
              <div className="text-5xl font-black text-gray-200 group-hover:text-gray-700 mb-2">01</div>
              <h3 className="text-lg font-bold mb-2">What is a Fractional CFO?</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">Definition, responsibilities, and when to hire</p>
            </Link>
            <Link href="#vs-fulltime" className="p-6 bg-white hover:bg-gray-900 hover:text-white transition-all group">
              <div className="text-5xl font-black text-gray-200 group-hover:text-gray-700 mb-2">02</div>
              <h3 className="text-lg font-bold mb-2">Fractional vs Full-Time CFO</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">Cost comparison and decision framework</p>
            </Link>
            <Link href="#when-to-hire" className="p-6 bg-white hover:bg-gray-900 hover:text-white transition-all group">
              <div className="text-5xl font-black text-gray-200 group-hover:text-gray-700 mb-2">03</div>
              <h3 className="text-lg font-bold mb-2">When to Hire</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">8 scenarios where you need a fractional CFO</p>
            </Link>
            <Link href="#pricing" className="p-6 bg-white hover:bg-gray-900 hover:text-white transition-all group">
              <div className="text-5xl font-black text-gray-200 group-hover:text-gray-700 mb-2">04</div>
              <h3 className="text-lg font-bold mb-2">Pricing & Costs</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">Day rates, retainers, and pricing models</p>
            </Link>
            <Link href="#become" className="p-6 bg-white hover:bg-gray-900 hover:text-white transition-all group">
              <div className="text-5xl font-black text-gray-200 group-hover:text-gray-700 mb-2">05</div>
              <h3 className="text-lg font-bold mb-2">How to Become One</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">Career path and requirements</p>
            </Link>
            <Link href="#jobs" className="p-6 bg-white hover:bg-gray-900 hover:text-white transition-all group">
              <div className="text-5xl font-black text-gray-200 group-hover:text-gray-700 mb-2">06</div>
              <h3 className="text-lg font-bold mb-2">Find CFO Jobs</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">Job boards and opportunities</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: What is a Fractional CFO */}
      <section id="what-is" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Section 01</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">What is a Fractional CFO?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-950/20 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-xl font-semibold text-gray-900 mb-2">Featured Snippet Definition</p>
              <p className="text-lg text-gray-700 mb-0">
                A <strong>Fractional CFO</strong> is an experienced Chief Financial Officer who provides strategic financial leadership to companies on a part-time basis—typically working 1-3 days per week. Unlike consultants, fractional CFOs become embedded members of your leadership team, managing your finance function and driving outcomes at 50-70% less cost than a full-time hire.
              </p>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Think of a fractional CFO as your company's senior financial leader—just not five days a week. They attend board meetings, manage your finance team, build investor relationships, oversee fundraising, and take full ownership of financial strategy and outcomes.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What Does a Fractional CFO Do?</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Strategic Responsibilities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Financial strategy & planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fundraising & investor relations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Board reporting & governance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>M&A due diligence & integration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Operational Responsibilities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cash flow management & forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Financial modeling & scenario planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Finance team leadership & hiring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Systems implementation & process improvement</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Typical Engagement Models</h3>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4 text-left">Model</th>
                    <th className="p-4 text-left">Time Commitment</th>
                    <th className="p-4 text-left">Typical Cost</th>
                    <th className="p-4 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Hourly</td>
                    <td className="p-4">5-20 hours/month</td>
                    <td className="p-4">£150-£500/hour</td>
                    <td className="p-4">Advisory, specific projects</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Day Rate</td>
                    <td className="p-4">1-3 days/week</td>
                    <td className="p-4">£700-£1,500/day</td>
                    <td className="p-4">Ongoing strategic support</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Monthly Retainer</td>
                    <td className="p-4">40-60 hours/month</td>
                    <td className="p-4">£3,000-£8,000/month</td>
                    <td className="p-4">Embedded leadership</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Project-Based</td>
                    <td className="p-4">3-6 months</td>
                    <td className="p-4">£15,000-£50,000</td>
                    <td className="p-4">Fundraising, M&A, IPO prep</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 text-white p-8 my-10">
              <p className="text-2xl font-bold mb-4">Want to learn more?</p>
              <p className="text-lg text-gray-300 mb-6">Read our comprehensive guide on what fractional CFOs do, day-to-day responsibilities, and real-world examples.</p>
              <Link href="/what-is-fractional-cfo" className="inline-block px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                Read Full Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Fractional vs Full-Time CFO */}
      <section id="vs-fulltime" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Section 02</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Fractional CFO vs Full-Time CFO</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              The choice between a fractional and full-time CFO comes down to three factors: <strong>time requirements, budget constraints, and business stage</strong>. Here's how they compare.
            </p>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-4">Factor</th>
                    <th className="p-4">Fractional CFO</th>
                    <th className="p-4">Full-Time CFO</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Annual Cost</td>
                    <td className="p-4 text-blue-600 font-bold">£36,000-£120,000</td>
                    <td className="p-4 text-gray-600">£150,000-£250,000+</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Time Commitment</td>
                    <td className="p-4">1-3 days/week</td>
                    <td className="p-4">5 days/week</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Flexibility</td>
                    <td className="p-4 text-blue-600">Scale up/down monthly</td>
                    <td className="p-4 text-gray-600">Fixed commitment</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Notice Period</td>
                    <td className="p-4 text-blue-600">30 days typical</td>
                    <td className="p-4 text-gray-600">3-6 months</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Equity Required</td>
                    <td className="p-4 text-blue-600">Rarely</td>
                    <td className="p-4 text-gray-600">Often 0.5-2%</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">Start Timeline</td>
                    <td className="p-4 text-blue-600">1-2 weeks</td>
                    <td className="p-4 text-gray-600">3-6 months</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Experience Level</td>
                    <td className="p-4 text-blue-600">Very senior (15+ years)</td>
                    <td className="p-4">Varies (8+ years)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Best For</td>
                    <td className="p-4">£1M-£20M revenue, project-based needs</td>
                    <td className="p-4">£20M+ revenue, complex operations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">When to Choose Fractional</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">✓</span>
                <span>You're pre-Series B or under £20M revenue</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">✓</span>
                <span>You need CFO expertise for fundraising, M&A, or strategic projects</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">✓</span>
                <span>Your finance function is relatively straightforward</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">✓</span>
                <span>You want flexibility to scale up or down</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">✓</span>
                <span>Budget constraints prevent full-time hire</span>
              </li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">When to Choose Full-Time</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3 text-gray-400 font-bold">→</span>
                <span>You're post-Series B or £20M+ revenue</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400 font-bold">→</span>
                <span>You have complex multi-entity structures or international operations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400 font-bold">→</span>
                <span>You're preparing for IPO or require full-time governance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-400 font-bold">→</span>
                <span>You need someone managing 40+ hours of operational finance work weekly</span>
              </li>
            </ul>

            <div className="bg-gray-900 text-white p-8 my-10">
              <p className="text-2xl font-bold mb-4">Need help deciding?</p>
              <p className="text-lg text-gray-300 mb-6">Read our detailed comparison guide with real cost breakdowns and decision framework.</p>
              <Link href="/fractional-cfo-vs-full-time" className="inline-block px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                Compare in Detail →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: When to Hire */}
      <section id="when-to-hire" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Section 03</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">When to Hire a Fractional CFO</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Most companies hire a fractional CFO during critical growth phases or strategic events. Here are the 8 most common scenarios:
            </p>

            <div className="grid gap-6 my-10">
              <div className="bg-gray-50 p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mb-3 mt-0">1. Preparing for Fundraising</h3>
                <p className="text-gray-700 mb-0">You're planning a seed, Series A, or growth round and need investor-ready financials, a compelling financial model, and someone who can speak credibly to VCs and angels.</p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mb-3 mt-0">2. Rapid Growth Phase</h3>
                <p className="text-gray-700 mb-0">Revenue is growing 3x+ year-over-year, you're hiring fast, and your founder-led finance function can't keep up. You need systems, processes, and strategic financial leadership.</p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mb-3 mt-0">3. M&A Activity</h3>
                <p className="text-gray-700 mb-0">You're acquiring companies, being acquired, or considering strategic partnerships. You need someone to lead due diligence, valuation, and integration.</p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mb-3 mt-0">4. Cash Flow Crisis</h3>
                <p className="text-gray-700 mb-0">Cash runway is &lt;12 months, you're burning faster than planned, or you need to extend your runway. A fractional CFO can implement cash management discipline and build credible forecasts.</p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mb-3 mt-0">5. Board Demands Strategic Finance</h3>
                <p className="text-gray-700 mb-0">Your investors want better reporting, unit economics analysis, scenario planning, or quarterly business reviews. You need someone who speaks their language.</p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mb-3 mt-0">6. Scaling Finance Operations</h3>
                <p className="text-gray-700 mb-0">You're moving from spreadsheets to proper FP&A, implementing NetSuite or Xero, building a finance team, or establishing financial controls and policies.</p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mb-3 mt-0">7. International Expansion</h3>
                <p className="text-gray-700 mb-0">You're opening in new markets, dealing with multi-currency complexity, international tax, transfer pricing, or setting up foreign entities.</p>
              </div>

              <div className="bg-gray-50 p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mb-3 mt-0">8. Temporary Gap Coverage</h3>
                <p className="text-gray-700 mb-0">Your CFO left, is on leave, or you're in transition. You need immediate senior finance leadership while searching for the right full-time hire.</p>
              </div>
            </div>

            <div className="bg-blue-950/20 border-l-4 border-blue-600 p-6 my-8">
              <p className="text-lg font-semibold text-gray-900 mb-2">Quick Decision Framework</p>
              <p className="text-gray-700 mb-0">If you answered "yes" to 2+ scenarios above, you likely need fractional CFO support. Most companies engage a fractional CFO for 6-18 months, then either transition to full-time or continue fractionally as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing & Costs */}
      <section id="pricing" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Section 04</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Fractional CFO Pricing & Costs</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Fractional CFO pricing in the UK varies by experience level, industry complexity, and engagement model. Here's what to expect:
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Typical UK Pricing Ranges</h3>

            <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Junior CFO</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£700-£950</div>
                <div className="text-sm text-gray-600 mb-4">per day</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 8-12 years experience</li>
                  <li>• Financial Controller background</li>
                  <li>• Operational focus</li>
                  <li>• Small companies (£1-5M)</li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white p-6 border-2 border-gray-900">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Mid-Level CFO</div>
                <div className="text-4xl font-black mb-2">£950-£1,250</div>
                <div className="text-sm text-gray-300 mb-4">per day</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 12-18 years experience</li>
                  <li>• Prior CFO role</li>
                  <li>• Fundraising experience</li>
                  <li>• Growing companies (£5-20M)</li>
                </ul>
              </div>

              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Senior CFO</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£1,250-£1,500+</div>
                <div className="text-sm text-gray-600 mb-4">per day</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 18+ years experience</li>
                  <li>• Multiple CFO roles</li>
                  <li>• IPO, PE, VC experience</li>
                  <li>• Scale-ups (£20M+)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Cost Comparison: Real Numbers</h3>

            <div className="bg-white p-8 my-8 border-2 border-gray-900">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Fractional CFO (2 days/week)</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Day rate (£1,050 avg)</span>
                      <span className="font-semibold">£2,100/week</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly cost (8-9 days)</span>
                      <span className="font-semibold">£8,400-£9,450</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">Annual cost</span>
                      <span className="font-bold text-blue-600">£100,800-£113,400</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Full-Time CFO</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Base salary</span>
                      <span className="font-semibold">£150,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bonus (20%)</span>
                      <span className="font-semibold">£30,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Benefits & NI (15%)</span>
                      <span className="font-semibold">£27,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equity dilution</span>
                      <span className="font-semibold">0.5-1.5%</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-bold">Annual cost</span>
                      <span className="font-bold text-gray-600">£207,000+</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">Save £93,600-£107,000 Annually</div>
                <div className="text-gray-600">That's 45-52% cost reduction vs full-time</div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Pricing Models Explained</h3>

            <div className="space-y-4 my-8">
              <details className="bg-white p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">Hourly Rates (£150-£500/hour)</summary>
                <p className="mt-4 text-gray-700">Best for ad-hoc advisory, board meeting attendance, or very small engagements. Less common for ongoing fractional work due to admin overhead.</p>
              </details>

              <details className="bg-white p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">Day Rates (£700-£1,500/day) — Most Common</summary>
                <p className="mt-4 text-gray-700">The standard model. You book 1-3 days per week, paying only for days worked. Provides predictability while allowing flexibility to scale up/down monthly.</p>
              </details>

              <details className="bg-white p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">Monthly Retainers (£3,000-£10,000/month)</summary>
                <p className="mt-4 text-gray-700">Fixed monthly fee for a defined scope (e.g., 40 hours, board reporting, fundraising support). Common for 6-12 month engagements with clear deliverables.</p>
              </details>

              <details className="bg-white p-6 border border-gray-200">
                <summary className="font-bold text-lg cursor-pointer">Project-Based (£15,000-£75,000)</summary>
                <p className="mt-4 text-gray-700">Fixed fee for specific projects like Series A raise (£25-50k), acquisition due diligence (£15-30k), or IPO readiness (£50-75k). Typically 3-6 month projects.</p>
              </details>
            </div>

            <div className="bg-gray-900 text-white p-8 my-10">
              <p className="text-2xl font-bold mb-4">Explore detailed pricing breakdowns</p>
              <div className="space-y-4">
                <Link href="/fractional-cfo-salary" className="block px-6 py-3 bg-white text-black font-bold text-center uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Day Rates by Experience & Location →
                </Link>
                <Link href="/fractional-cfo-cost" className="block px-6 py-3 bg-white text-black font-bold text-center uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Cost Calculator (Employer View) →
                </Link>
                <Link href="/fractional-cfo-hourly-rate" className="block px-6 py-3 bg-white text-black font-bold text-center uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hourly Rate Benchmarks →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Interactive Tool</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Calculate Your Earnings or Savings</h2>
          </div>
          <RoleCalculator role="CFO" />
        </div>
      </section>

      {/* Section 5: How to Become */}
      <section id="become" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Section 05</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">How to Become a Fractional CFO</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Transitioning to fractional CFO work requires senior experience, a strong network, and the ability to sell and deliver results independently. Here's the typical path:
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Required Experience & Qualifications</h3>

            <div className="bg-white p-8 my-8 border-l-4 border-gray-900">
              <h4 className="text-xl font-bold text-gray-900 mb-4 mt-0">Minimum Requirements</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">✓</span>
                  <span><strong>15+ years finance experience</strong> including senior leadership roles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">✓</span>
                  <span><strong>Prior CFO or Finance Director role</strong> (or very senior Controller)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">✓</span>
                  <span><strong>Track record in fundraising, M&A, or scaling</strong> companies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">✓</span>
                  <span><strong>Strong communication skills</strong>—you'll pitch clients and present to boards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-600 font-bold">✓</span>
                  <span><strong>Self-starter mentality</strong>—you're running a solo business</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 my-8 border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-gray-900 mb-4 mt-0">Helpful But Not Required</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Professional qualifications (ACA, ACCA, CIMA, CPA, CMA)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>VC, PE, or investment banking background</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Big 4 audit experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Industry specialization (SaaS, FinTech, Healthcare, etc.)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Step-by-Step Career Path</h3>

            <div className="space-y-6 my-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-black">1</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Build Senior Finance Experience (10-15 years)</h4>
                  <p className="text-gray-700">Start in audit, FP&A, or corporate finance. Progress to Finance Director or VP Finance. Get exposure to fundraising, M&A, board reporting, and strategic projects.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-black">2</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Land Your First CFO Role</h4>
                  <p className="text-gray-700">Join a startup, scale-up, or SME as CFO. Lead at least one major project (fundraise, acquisition, international expansion). Build credibility and a track record.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-black">3</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Develop Specialized Expertise</h4>
                  <p className="text-gray-700">Become known for something—SaaS metrics, fundraising, M&A, turnarounds, international expansion. This differentiates you in a crowded market.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-black">4</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Build Your Network</h4>
                  <p className="text-gray-700">Most fractional work comes through referrals. Cultivate relationships with VCs, PE firms, startup founders, recruiters, and other fractional executives who can refer overflow work.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-black">5</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Land Your First Fractional Client</h4>
                  <p className="text-gray-700">Start with one part-time client (often 1-2 days/week) while still employed, or take the leap full-time. Your first client typically comes from your network or a recruiter.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-black">6</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Build a Portfolio (2-4 clients)</h4>
                  <p className="text-gray-700">Most fractional CFOs have 2-4 simultaneous clients. This diversifies income, spreads risk, and keeps work interesting. Each client gets 1-3 days/week.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Typical Transition Timeline</h3>

            <div className="bg-white p-8 my-8">
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-semibold">Years 0-10:</span>
                  <span>Build foundation (Analyst → Manager → Senior Manager)</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-semibold">Years 10-15:</span>
                  <span>Finance Director / VP Finance roles</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="font-semibold">Years 15-18:</span>
                  <span>First CFO role at startup/SME</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b bg-blue-950/20 px-4 py-2">
                  <span className="font-semibold">Year 18+:</span>
                  <span className="font-bold">Transition to Fractional CFO</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 my-10">
              <p className="text-2xl font-bold mb-4">Ready to make the transition?</p>
              <p className="text-lg text-gray-300 mb-6">Read our complete guide on becoming a fractional CFO, including how to price yourself, find clients, and build your practice.</p>
              <Link href="/how-to-become-fractional-cfo" className="inline-block px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                Read Career Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Find Jobs */}
      <section id="jobs" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Section 06</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Find Fractional CFO Jobs</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              The fractional CFO job market is growing rapidly—up 50%+ year-over-year. Here's where to find opportunities and how to position yourself.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Top Job Sources</h3>

            <div className="grid gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Fractional.Quest Job Board</h4>
                <p className="text-gray-700 mb-4">720+ fractional CFO jobs updated daily. Filter by location, remote, experience level, and industry.</p>
                <Link href="/fractional-cfo-jobs-uk" className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-wider hover:bg-gray-700">
                  Browse CFO Jobs →
                </Link>
              </div>

              <div className="bg-gray-50 p-6 border-l-4 border-blue-600">
                <h4 className="text-lg font-bold text-gray-900 mb-2">2. Remote Fractional CFO Jobs</h4>
                <p className="text-gray-700 mb-4">140+ remote fractional CFO roles—work from anywhere with UK, EU, or US companies.</p>
                <Link href="/fractional-cfo-jobs-remote" className="inline-block px-4 py-2 bg-gray-900 text-white font-bold text-sm uppercase tracking-wider hover:bg-gray-700">
                  View Remote Jobs →
                </Link>
              </div>

              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">3. Related Role Opportunities</h4>
                <div className="space-y-3">
                  <div>
                    <Link href="/part-time-cfo-jobs-uk" className="font-semibold text-gray-900 hover:text-blue-600">Part-Time CFO Jobs (170/mo)</Link>
                    <p className="text-sm text-gray-600">Similar to fractional but often W-2/PAYE employment</p>
                  </div>
                  <div>
                    <Link href="/contract-cfo-jobs" className="font-semibold text-gray-900 hover:text-blue-600">Contract CFO Jobs (40/mo)</Link>
                    <p className="text-sm text-gray-600">Fixed-term contracts, typically 6-18 months</p>
                  </div>
                  <div>
                    <Link href="/fractional-controller-jobs" className="font-semibold text-gray-900 hover:text-blue-600">Fractional Controller Jobs (140/mo)</Link>
                    <p className="text-sm text-gray-600">Step up from Controller to fractional CFO roles</p>
                  </div>
                  <div>
                    <Link href="/interim-cfo" className="font-semibold text-gray-900 hover:text-blue-600">Interim CFO Jobs</Link>
                    <p className="text-sm text-gray-600">Temporary full-time coverage during transitions</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">How to Stand Out</h3>

            <div className="bg-white p-8 my-8 border-2 border-gray-900">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">💼</span>
                  <div>
                    <strong className="text-gray-900">Specialize:</strong> "Fractional CFO for SaaS" beats "Fractional CFO" in a competitive market
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">📊</span>
                  <div>
                    <strong className="text-gray-900">Quantify results:</strong> "Raised £15M Series B" &gt; "Supported fundraising"
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🎯</span>
                  <div>
                    <strong className="text-gray-900">Build thought leadership:</strong> LinkedIn posts, case studies, speaking at events
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">🤝</span>
                  <div>
                    <strong className="text-gray-900">Network relentlessly:</strong> 80%+ of fractional work comes from referrals
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-2xl">⚡</span>
                  <div>
                    <strong className="text-gray-900">Move fast:</strong> Respond to opportunities within 24 hours—clients hire quickly
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Market Data: Fractional CFO Jobs</h3>

            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <div className="bg-gray-50 p-6 text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">720/mo</div>
                <div className="text-sm text-gray-600">Monthly job searches</div>
              </div>
              <div className="bg-gray-50 p-6 text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">+50%</div>
                <div className="text-sm text-gray-600">YoY growth in "services"</div>
              </div>
              <div className="bg-gray-50 p-6 text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">140</div>
                <div className="text-sm text-gray-600">Remote jobs monthly (+180% YoY)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Tools Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Resources</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Fractional CFO Tools & Resources</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/fractional-cfo-services" className="bg-white p-8 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">Hire a Fractional CFO</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">For companies looking to engage fractional CFO services</p>
              <div className="text-sm font-bold uppercase tracking-wider">Learn More →</div>
            </Link>

            <Link href="/fractional-cfo-salary" className="bg-white p-8 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">Salary & Rates Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Comprehensive day rate and salary benchmarks by experience</p>
              <div className="text-sm font-bold uppercase tracking-wider">View Rates →</div>
            </Link>

            <Link href="/2025-fractional-cfo-salary-report" className="bg-white p-8 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">2025 Salary Report</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Annual market research and compensation trends</p>
              <div className="text-sm font-bold uppercase tracking-wider">Download Report →</div>
            </Link>

            <Link href="/fractional-cfo-training" className="bg-white p-8 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">Training & Certification</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Courses, programs, and skills development for aspiring fractionals</p>
              <div className="text-sm font-bold uppercase tracking-wider">Explore Training →</div>
            </Link>

            <Link href="/fractional-cfo-community" className="bg-white p-8 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">Community & Reddit</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Join discussions, share experiences, learn from peers</p>
              <div className="text-sm font-bold uppercase tracking-wider">Join Community →</div>
            </Link>

            <Link href="/what-is-fractional-cfo" className="bg-white p-8 hover:bg-gray-900 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">What is a Fractional CFO?</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Comprehensive definition and role overview</p>
              <div className="text-sm font-bold uppercase tracking-wider">Learn More →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CFO_FAQS} title="" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you're hiring a fractional CFO or becoming one, we have the resources and job board to help you succeed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo-services" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Hire a Fractional CFO
            </Link>
            <Link href="/fractional-cfo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Browse CFO Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
