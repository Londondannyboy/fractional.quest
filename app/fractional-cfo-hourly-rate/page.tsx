import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO Hourly Rate UK 2025 | £150-£500/Hour Benchmarks',
  description: 'Fractional CFO hourly rates in the UK: £150-£500/hour depending on experience. See rate benchmarks by seniority, location, and industry. 260/mo searches.',
  keywords: 'fractional cfo hourly rate, fractional cfo rates, cfo hourly rate, part time cfo rates, fractional cfo pricing',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-hourly-rate',
  },
  openGraph: {
    title: 'Fractional CFO Hourly Rate UK 2025 | Complete Benchmarks',
    description: 'Complete UK fractional CFO hourly rate guide. See what fractional CFOs charge per hour by experience and location.',
    images: ['/images/fractional-cfo-hourly-rate.jpg'],
    url: 'https://fractional.quest/fractional-cfo-hourly-rate',
  },
}

const HOURLY_RATE_FAQS = [
  {
    question: "What is the average hourly rate for a fractional CFO?",
    answer: "In the UK, fractional CFOs typically charge £200-£350 per hour on average. Junior fractional CFOs (8-12 years experience) charge £150-£250/hour, mid-level (12-18 years) charge £250-£400/hour, and senior CFOs (18+ years) charge £350-£500/hour."
  },
  {
    question: "Is hourly or day rate better for fractional CFO work?",
    answer: "Day rates are more common and often better value. An hourly CFO charging £300/hour would be £2,400/day (8 hours), but most fractional CFOs charge £900-£1,200/day instead. Day rates also reduce admin overhead and incentive misalignment."
  },
  {
    question: "How many hours per month does a fractional CFO work?",
    answer: "Typical fractional CFO engagements are 40-80 hours per month (10-20 hours/week or 1-3 days/week). This varies based on company needs—fundraising periods require more hours, steady-state operations require less."
  },
  {
    question: "Do fractional CFOs charge more in London?",
    answer: "Yes, London-based fractional CFOs typically charge 15-25% more than regional cities. London rates are £250-£500/hour vs £150-£400/hour in Manchester, Birmingham, Leeds, and other UK cities."
  },
  {
    question: "What affects fractional CFO hourly rates?",
    answer: "Five main factors: years of experience (15+ commands premium), industry specialization (SaaS, FinTech pay more), project complexity (fundraising, M&A cost more), location (London highest), and scarcity of expertise (IPO experience rare, therefore expensive)."
  },
]

export default function FractionalCFOHourlyRatePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CFO Hourly Rate UK 2025 | £150-£500/Hour Benchmarks',
    description: 'Fractional CFO hourly rates in the UK: £150-£500/hour depending on experience. Complete rate benchmarks by seniority, location, and industry.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero Section */}
      <section className="relative bg-gray-50 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cfo" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to CFO Hub
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Pricing Guide 2025
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              Fractional CFO<br />
              <span className="text-gray-400">Hourly Rate UK</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Complete hourly rate benchmarks for UK fractional CFOs. £150-£500/hour depending on experience, location, and specialization.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black">£200-£350</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Average Hourly Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">260/mo</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">£150-£500</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Full Range</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer - Featured Snippet Target */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Quick Answer</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CFO Hourly Rate: 2025 Benchmarks</h2>
          </div>

          <div className="bg-blue-950/20 border-l-4 border-blue-600 p-8 mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
              UK fractional CFOs charge <strong className="font-bold">£150-£500 per hour</strong> with an average of <strong>£200-£350/hour</strong>. Rates depend on experience level, industry expertise, location, and project complexity. Most fractional CFOs prefer <strong>day rates</strong> (£700-£1,500/day) over hourly billing due to better value and less admin.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-6">Hourly Rate by Experience Level</h3>

            <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Junior CFO</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£150-£250</div>
                <div className="text-sm text-gray-600 mb-4">per hour</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 8-12 years experience</li>
                  <li>• Controller background</li>
                  <li>• Small companies (£1-5M)</li>
                  <li>• Limited fundraising exp</li>
                </ul>
              </div>

              <div className="bg-gray-50 text-white p-6 border-2 border-gray-900">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Mid-Level CFO</div>
                <div className="text-4xl font-black mb-2">£250-£400</div>
                <div className="text-sm text-gray-300 mb-4">per hour</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 12-18 years experience</li>
                  <li>• Prior CFO role</li>
                  <li>• Growing companies (£5-20M)</li>
                  <li>• Fundraising experience</li>
                </ul>
              </div>

              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Senior CFO</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£350-£500</div>
                <div className="text-sm text-gray-600 mb-4">per hour</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 18+ years experience</li>
                  <li>• Multiple CFO roles</li>
                  <li>• Scale-ups (£20M+)</li>
                  <li>• IPO, PE, VC experience</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 my-10">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Important Note: Day Rates Often Better Value</h4>
              <p className="text-gray-700 mb-4">
                While hourly rates help with comparisons, <strong>most fractional CFOs prefer day rates</strong>. Here's why:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>• <strong>Hourly at £300/hour × 8 hours = £2,400/day</strong></p>
                <p>• <strong>Day rate = £1,050 average</strong> (saves you £1,350/day or 56%!)</p>
                <p>• Day rates align incentives—focus on outcomes, not billable hours</p>
                <p>• Less admin overhead tracking hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rate by Location */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Geographic Variance</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Hourly Rate by UK Location</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">London</h3>
              <div className="text-3xl font-black text-gray-900 mb-2">£250-£500</div>
              <p className="text-sm text-gray-600 mb-4">per hour</p>
              <p className="text-sm text-gray-700">Highest rates in UK. Large talent pool. Premium for FinTech, PE, VC experience.</p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Edinburgh</h3>
              <div className="text-3xl font-black text-gray-900 mb-2">£200-£400</div>
              <p className="text-sm text-gray-600 mb-4">per hour</p>
              <p className="text-sm text-gray-700">Strong FinTech scene. 15-20% below London rates. Good value.</p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Manchester</h3>
              <div className="text-3xl font-black text-gray-900 mb-2">£180-£350</div>
              <p className="text-sm text-gray-600 mb-4">per hour</p>
              <p className="text-sm text-gray-700">Growing tech hub. 20-25% below London. Quality talent available.</p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Birmingham</h3>
              <div className="text-3xl font-black text-gray-900 mb-2">£170-£330</div>
              <p className="text-sm text-gray-600 mb-4">per hour</p>
              <p className="text-sm text-gray-700">Midlands hub. 25-30% below London. Strong manufacturing CFO base.</p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Leeds</h3>
              <div className="text-3xl font-black text-gray-900 mb-2">£170-£330</div>
              <p className="text-sm text-gray-600 mb-4">per hour</p>
              <p className="text-sm text-gray-700">Financial services hub. Good talent. Similar to Birmingham pricing.</p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bristol</h3>
              <div className="text-3xl font-black text-gray-900 mb-2">£180-£350</div>
              <p className="text-sm text-gray-600 mb-4">per hour</p>
              <p className="text-sm text-gray-700">Growing startup scene. Aerospace sector. 20% below London.</p>
            </div>

            <div className="bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Cambridge</h3>
              <div className="text-3xl font-black text-gray-900 mb-2">£200-£400</div>
              <p className="text-sm text-gray-600 mb-4">per hour</p>
              <p className="text-sm text-gray-700">DeepTech hub. Life sciences. Premium rates for specialized expertise.</p>
            </div>

            <div className="bg-white p-6 border-2 border-blue-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Remote (UK)</h3>
              <div className="text-3xl font-black text-blue-600 mb-2">£150-£350</div>
              <p className="text-sm text-gray-600 mb-4">per hour</p>
              <p className="text-sm text-gray-700">Best value. Access to UK-wide talent. 20-30% cost savings vs London.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rate by Industry */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Industry Premiums</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Hourly Rate by Industry Specialization</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-white">
                  <th className="p-4 text-left">Industry</th>
                  <th className="p-4 text-left">Hourly Rate Range</th>
                  <th className="p-4 text-left">Premium vs Baseline</th>
                  <th className="p-4 text-left">Why Premium?</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b bg-blue-950/20">
                  <td className="p-4 font-semibold">SaaS / Tech</td>
                  <td className="p-4 text-blue-600 font-bold">£250-£500</td>
                  <td className="p-4">+20-30%</td>
                  <td className="p-4 text-sm">High demand, specialized metrics (ARR, CAC, LTV), fundraising expertise</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">FinTech</td>
                  <td className="p-4 font-bold">£300-£500</td>
                  <td className="p-4">+30-40%</td>
                  <td className="p-4 text-sm">Regulatory complexity, compliance expertise, high salaries baseline</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Life Sciences / Biotech</td>
                  <td className="p-4 font-bold">£280-£450</td>
                  <td className="p-4">+25-35%</td>
                  <td className="p-4 text-sm">Clinical trial budgeting, R&D tax credits, grant funding expertise</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">E-Commerce</td>
                  <td className="p-4 font-bold">£200-£380</td>
                  <td className="p-4">+10-20%</td>
                  <td className="p-4 text-sm">Inventory management, unit economics, marketplace dynamics</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold">Professional Services</td>
                  <td className="p-4 font-bold">£180-£350</td>
                  <td className="p-4">Baseline</td>
                  <td className="p-4 text-sm">Standard baseline, straightforward financials</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Manufacturing</td>
                  <td className="p-4 font-bold">£170-£330</td>
                  <td className="p-4">-5-10%</td>
                  <td className="p-4 text-sm">Traditional sector, less competition for CFO talent</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 font-semibold">Retail / Hospitality</td>
                  <td className="p-4 font-bold">£150-£300</td>
                  <td className="p-4">-10-20%</td>
                  <td className="p-4 text-sm">Lower margins, less complex finance needs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rate by Project Type */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Project Complexity</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Hourly Rate by Project Type</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Complex, high-stakes projects command premium rates. Here's what to expect:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Fundraising (Series A/B/C)</h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-black text-gray-900">£300-£500</span>
                  <span className="text-gray-600">per hour</span>
                </div>
                <p className="text-gray-700 mb-0">Premium rates due to high-stakes nature. CFO builds investor model, manages due diligence, presents to VCs. Often structured as fixed-fee project (£25-50k for Series A).</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">M&A / Due Diligence</h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-black text-gray-900">£350-£500</span>
                  <span className="text-gray-600">per hour</span>
                </div>
                <p className="text-gray-700 mb-0">Highest hourly rates. Specialized expertise in buy-side or sell-side DD, valuation, deal structuring. Tight deadlines. High liability.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">IPO Readiness</h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-black text-gray-900">£400-£500</span>
                  <span className="text-gray-600">per hour</span>
                </div>
                <p className="text-gray-700 mb-0">Top-tier rates for rare expertise. Building audit controls, implementing SOX compliance, preparing for public company reporting.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Turnaround / Restructuring</h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-black text-gray-900">£300-£450</span>
                  <span className="text-gray-600">per hour</span>
                </div>
                <p className="text-gray-700 mb-0">Premium for crisis expertise. CFO manages creditors, restructures debt, extends runway. High pressure, immediate impact required.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Ongoing Strategic CFO</h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-black text-gray-900">£200-£350</span>
                  <span className="text-gray-600">per hour</span>
                </div>
                <p className="text-gray-700 mb-0">Standard rates for ongoing fractional work. Board reporting, FP&A, team leadership, systems implementation. Usually structured as day rate instead.</p>
              </div>

              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">Advisory / Consulting Only</h3>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-3xl font-black text-gray-900">£150-£300</span>
                  <span className="text-gray-600">per hour</span>
                </div>
                <p className="text-gray-700 mb-0">Lower rates for advisory-only work with no accountability. No team management, no board presentations. Often for very small companies or specific questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Rate */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Rate Drivers</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Affects Fractional CFO Hourly Rates?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">1. Years of Experience</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 8-12 years: £150-£250/hr</li>
                  <li>• 12-18 years: £250-£400/hr</li>
                  <li>• 18+ years: £350-£500/hr</li>
                  <li>• Each 5 years adds ~£75/hr premium</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">2. Industry Specialization</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• SaaS/FinTech: +20-40% premium</li>
                  <li>• Life Sciences: +25-35% premium</li>
                  <li>• E-Commerce: +10-20% premium</li>
                  <li>• Generalist: baseline rates</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">3. Geographic Location</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• London: highest (£250-£500/hr)</li>
                  <li>• Edinburgh/Cambridge: -10-15%</li>
                  <li>• Manchester/Bristol: -20-25%</li>
                  <li>• Remote: -20-30% (best value)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">4. Project Complexity</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• IPO readiness: £400-£500/hr</li>
                  <li>• M&A/fundraising: £300-£500/hr</li>
                  <li>• Turnaround: £300-£450/hr</li>
                  <li>• Ongoing CFO: £200-£350/hr</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">5. Scarcity of Expertise</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• IPO experience: very rare (+40%)</li>
                  <li>• PE/VC background: rare (+25%)</li>
                  <li>• Multiple exits: uncommon (+20%)</li>
                  <li>• General CFO: common (baseline)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">6. Engagement Length</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• 1-3 month projects: full rate</li>
                  <li>• 6-12 months: -5-10% discount</li>
                  <li>• 12+ months: -10-15% discount</li>
                  <li>• Multi-year retainer: -15-20%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Interactive Tool</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Calculate Your Fractional CFO Costs</h2>
          </div>
          <RoleCalculator role="CFO" />
        </div>
      </section>

      {/* Hourly vs Day Rate vs Monthly */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Pricing Models</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Hourly vs Day Rate vs Monthly Retainer</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Understanding which pricing model saves you the most money:
            </p>

            <div className="bg-gray-50 text-white p-8 mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">Example: Senior CFO, 2 Days/Week, 3 Months</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Option 1: Hourly Rate (£300/hour)</h4>
                  <div className="space-y-1 text-gray-300 text-sm">
                    <p>• 16 hours/day × 2 days = 16 hours/week</p>
                    <p>• 16 hours × £300 = £4,800/week</p>
                    <p>• £4,800 × 12 weeks = <strong className="text-white text-xl">£57,600 total</strong></p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Option 2: Day Rate (£1,200/day) ✓ BEST VALUE</h4>
                  <div className="space-y-1 text-gray-300 text-sm">
                    <p>• £1,200 × 2 days = £2,400/week</p>
                    <p>• £2,400 × 12 weeks = <strong className="text-blue-400 text-xl">£28,800 total</strong></p>
                    <p className="text-blue-400 font-bold">Saves £28,800 (50% cheaper than hourly!)</p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Option 3: Monthly Retainer (£9,000/month)</h4>
                  <div className="space-y-1 text-gray-300 text-sm">
                    <p>• £9,000 × 3 months = <strong className="text-white text-xl">£27,000 total</strong></p>
                    <p className="text-blue-400 font-bold">Saves £30,600 vs hourly (53% cheaper)</p>
                    <p className="text-gray-400">But less flexible—locked into 3-month commitment</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Which Model Should You Choose?</h3>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-white">
                    <th className="p-4 text-left">Model</th>
                    <th className="p-4 text-left">Best For</th>
                    <th className="p-4 text-left">Pros</th>
                    <th className="p-4 text-left">Cons</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Hourly Rate</td>
                    <td className="p-4">Ad-hoc advisory, &lt;5hrs/month</td>
                    <td className="p-4 text-sm">Very flexible, pay per hour</td>
                    <td className="p-4 text-sm">Most expensive, admin overhead, incentive misalignment</td>
                  </tr>
                  <tr className="border-b bg-blue-950/20">
                    <td className="p-4 font-semibold">Day Rate</td>
                    <td className="p-4">1-3 days/week ongoing</td>
                    <td className="p-4 text-sm">50% cheaper than hourly, flexible, outcome-focused</td>
                    <td className="p-4 text-sm">Still tracks days (minor admin)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Monthly Retainer</td>
                    <td className="p-4">6-12 month engagements</td>
                    <td className="p-4 text-sm">Most cost-effective, predictable budgeting, 5-10% discount</td>
                    <td className="p-4 text-sm">Less flexible, committed for duration</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-950/20 border-l-4 border-blue-600 p-6">
              <p className="text-lg font-semibold text-gray-900 mb-2">Recommendation</p>
              <p className="text-gray-700 mb-0">
                <strong>Start with day rates</strong> for first 2-3 months to test fit, then move to monthly retainer if it's working well. Avoid hourly unless you truly only need 3-5 hours/month of advisory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={HOURLY_RATE_FAQS} title="" />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Related Guides</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">More Fractional CFO Pricing Resources</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/fractional-cfo-salary" className="bg-gray-50 p-8 hover:bg-gray-50 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">Day Rate & Salary Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Complete day rate benchmarks by experience and location</p>
              <div className="text-sm font-bold uppercase tracking-wider">View Rates →</div>
            </Link>

            <Link href="/fractional-cfo-cost" className="bg-gray-50 p-8 hover:bg-gray-50 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">Fractional CFO Cost</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Employer perspective—total cost of hiring a fractional CFO</p>
              <div className="text-sm font-bold uppercase tracking-wider">Calculate Cost →</div>
            </Link>

            <Link href="/fractional-cfo" className="bg-gray-50 p-8 hover:bg-gray-50 hover:text-white transition-all group">
              <h3 className="text-xl font-black mb-3">Complete CFO Guide</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-4">Everything about fractional CFOs—from hiring to becoming one</p>
              <div className="text-sm font-bold uppercase tracking-wider">Read Guide →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Hire or Become a Fractional CFO?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Explore opportunities or find the right fractional CFO for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo-jobs-uk" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Browse CFO Jobs
            </Link>
            <Link href="/fractional-cfo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Hire a Fractional CFO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
