import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO Cost UK 2025',
  description: 'Fractional CFO cost. £3k-£10k/month vs £150k+ full-time. Calculate savings.',
  keywords: 'fractional cfo cost, how much does a fractional cfo cost, fractional cfo pricing, part time cfo cost, cfo cost',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-cost',
  },
  openGraph: {
    title: 'Fractional CFO Cost UK 2025 | Complete Pricing Guide',
    description: 'Complete cost breakdown for hiring a fractional CFO. See monthly costs, annual totals, and savings vs full-time.',
    images: ['/images/fractional-cfo-cost.jpg'],
    url: 'https://fractional.quest/fractional-cfo-cost',
  },
}

const COST_FAQS = [
  {
    question: "How much does a fractional CFO cost per month?",
    answer: "UK fractional CFOs typically cost £3,000-£10,000 per month depending on days worked and seniority. For 2 days/week at £1,050/day average = £8,400/month. For 1 day/week = £4,200/month. This is 50-70% less than a full-time CFO."
  },
  {
    question: "Is a fractional CFO worth the cost?",
    answer: "Yes, if you're a £1M-£20M revenue company needing CFO expertise but can't justify £150k-£250k+ for full-time. You get senior expertise (15+ years) for £36k-£120k/year, can scale up/down monthly, and start within days vs months to hire full-time."
  },
  {
    question: "What's the ROI of hiring a fractional CFO?",
    answer: "Typical ROI: £1 spent generates £3-10 in value. Examples: avoiding £200k bad hire by better financial diligence, raising £5M Series A that wouldn't happen without investor-ready model, extending cash runway 12 months through better cash management, or identifying £500k cost savings."
  },
  {
    question: "How much cheaper is fractional vs full-time CFO?",
    answer: "Fractional CFOs are 45-70% cheaper. Example: 2 days/week fractional = £100,800/year vs full-time at £207,000+ (salary + bonus + benefits + NI). You save £106,200 annually (51% reduction) while getting more experienced talent."
  },
  {
    question: "What does fractional CFO cost include?",
    answer: "The day rate or monthly retainer is all-inclusive: strategic financial leadership, board reporting, fundraising support, financial modeling, cash flow management, and team leadership. It does NOT include bookkeeping, payroll, or accounting software subscriptions."
  },
]

export default function FractionalCFOCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional CFO Cost UK 2025 | Complete Pricing Guide',
    description: 'How much does a fractional CFO cost? £3k-£10k/month (£36k-£120k annually) vs £150k-£250k+ for full-time.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero */}
      <section className="relative bg-gray-50 text-gray-900 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cfo" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to CFO Hub
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Employer Guide 2025
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              Fractional CFO<br />
              <span className="text-gray-400">Cost Breakdown</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Everything employers need to know about <strong className="text-white">fractional CFO costs</strong> in 2025. Monthly fees, annual totals, and how you save 45-70% vs full-time.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black">£3k-£10k</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Cost</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-blue-400">Save 50-70%</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">vs Full-Time</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">170/mo</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Monthly Searches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Quick Answer</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does a Fractional CFO Cost?</h2>
          </div>

          <div className="bg-blue-950/20 border-l-4 border-blue-600 p-8 mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
              UK fractional CFOs cost <strong className="font-bold">£3,000-£10,000 per month</strong> or <strong>£36,000-£120,000 annually</strong>, depending on days worked (1-3 days/week) and seniority. This is <strong>45-70% cheaper</strong> than a full-time CFO at £150,000-£250,000+ per year when including salary, bonus, benefits, and equity.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-6">Monthly Cost by Engagement Level</h3>

            <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">1 Day/Week</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£3,150-£6,000</div>
                <div className="text-sm text-gray-600 mb-4">per month (4-5 days)</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Board reporting</li>
                  <li>• Strategic advisory</li>
                  <li>• Key decision support</li>
                  <li>• Best for: £1-5M revenue</li>
                </ul>
              </div>

              <div className="bg-gray-50 text-gray-900 p-6 border-2 border-gray-900">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">2 Days/Week</div>
                <div className="text-4xl font-black mb-2">£6,300-£12,000</div>
                <div className="text-sm text-gray-600 mb-4">per month (8-10 days)</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Full CFO leadership</li>
                  <li>• Team management</li>
                  <li>• Fundraising support</li>
                  <li>• Best for: £5-15M revenue</li>
                </ul>
              </div>

              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">3 Days/Week</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£9,450-£18,000</div>
                <div className="text-sm text-gray-600 mb-4">per month (12-15 days)</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Deeply embedded CFO</li>
                  <li>• Complex projects</li>
                  <li>• M&A / fundraising</li>
                  <li>• Best for: £15-25M revenue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Cost Breakdown */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Detailed Breakdown</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CFO vs Full-Time CFO: True Cost Comparison</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Let's compare the TRUE all-in cost of fractional vs full-time, including hidden expenses most companies forget. According to <a href="https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2024-to-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">HMRC guidance</a>, employer costs extend well beyond salary:
            </p>

            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">Fractional CFO (2 Days/Week) - All-In Cost</h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Day rate (£1,050 avg) × 2 days/week</span>
                  <span className="font-bold">£2,100/week</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Monthly cost (avg 4.3 weeks)</span>
                  <span className="font-bold">£9,030/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Annual cost (52 weeks)</span>
                  <span className="font-bold text-blue-600">£109,200/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Benefits / National Insurance</span>
                  <span className="font-bold">£0 (contractor)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Office space / equipment</span>
                  <span className="font-bold">£0 (works remotely)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Recruitment fees</span>
                  <span className="font-bold">£0 (no placement fee)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Equity dilution</span>
                  <span className="font-bold">£0 (rarely required)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Notice period risk</span>
                  <span className="font-bold">30 days (vs 3-6 months)</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-blue-950/20 px-4 py-3">
                  <span className="font-bold text-lg">TOTAL ANNUAL COST</span>
                  <span className="font-bold text-2xl text-blue-600">£109,200</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">Full-Time CFO - All-In Cost</h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Base salary (mid-level CFO)</span>
                  <span className="font-bold">£150,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Bonus (20% typical)</span>
                  <span className="font-bold">£30,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Employer National Insurance (13.8% per <a href="https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2024-to-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">HMRC rates</a>)</span>
                  <span className="font-bold">£24,840/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Pension contribution (5%)</span>
                  <span className="font-bold">£9,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Benefits (health, insurance, etc.)</span>
                  <span className="font-bold">£5,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Office space (£500/sqm × 10sqm)</span>
                  <span className="font-bold">£5,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Equipment, IT, software</span>
                  <span className="font-bold">£3,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Recruitment fee (25% of salary, amortized over 3 years)</span>
                  <span className="font-bold">£12,500/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Equity (1% at £10M valuation, vested over 4 years)</span>
                  <span className="font-bold">£25,000/year</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-gray-100 px-4 py-3">
                  <span className="font-bold text-lg">TOTAL ANNUAL COST</span>
                  <span className="font-bold text-2xl text-gray-600">£264,340</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 text-gray-900 p-10 text-center">
              <div className="text-5xl md:text-6xl font-black mb-4 text-blue-400">Save £155,140</div>
              <div className="text-2xl mb-6">That's 59% cost reduction with fractional CFO</div>
              <div className="text-gray-300">For 2 days/week fractional vs full-time CFO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Seniority */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">By Experience Level</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CFO Cost by Seniority</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-900">
                  <th className="p-4 text-left">Seniority</th>
                  <th className="p-4 text-left">Day Rate</th>
                  <th className="p-4 text-left">1 Day/Week</th>
                  <th className="p-4 text-left">2 Days/Week</th>
                  <th className="p-4 text-left">3 Days/Week</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4">
                    <div className="font-semibold">Junior CFO</div>
                    <div className="text-sm text-gray-600">8-12 years exp</div>
                  </td>
                  <td className="p-4 font-bold">£700-£950</td>
                  <td className="p-4">£36k-£49k/year</td>
                  <td className="p-4">£73k-£99k/year</td>
                  <td className="p-4">£109k-£148k/year</td>
                </tr>
                <tr className="border-b bg-blue-950/20">
                  <td className="p-4">
                    <div className="font-semibold">Mid-Level CFO</div>
                    <div className="text-sm text-gray-600">12-18 years exp</div>
                  </td>
                  <td className="p-4 font-bold">£950-£1,250</td>
                  <td className="p-4">£49k-£65k/year</td>
                  <td className="p-4 text-blue-600 font-bold">£99k-£130k/year</td>
                  <td className="p-4">£148k-£195k/year</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">
                    <div className="font-semibold">Senior CFO</div>
                    <div className="text-sm text-gray-600">18+ years exp</div>
                  </td>
                  <td className="p-4 font-bold">£1,250-£1,500</td>
                  <td className="p-4">£65k-£78k/year</td>
                  <td className="p-4">£130k-£156k/year</td>
                  <td className="p-4">£195k-£234k/year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gray-50 p-6">
            <p className="text-gray-700 mb-0">
              <strong>Most common:</strong> Mid-level CFO (12-18 years exp) at 2 days/week = £99k-£130k annually. This saves £77k-£134k vs full-time CFO (£207k-£264k total cost). Many hold <a href="https://www.accaglobal.com/gb/en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a> or <a href="https://www.cimaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIMA</a> professional qualifications.
            </p>
          </div>
        </div>
      </section>

      {/* Hidden Savings */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Hidden Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Hidden Cost Savings with Fractional CFOs</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Beyond direct salary savings, fractional CFOs provide cost advantages most companies overlook. When evaluating <a href="https://www.gov.uk/business-finance-support" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">business finance support options</a>, these hidden benefits become crucial:
            </p>

            <div className="grid gap-6 my-10">
              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">1. No Recruitment Costs</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="mb-2"><strong>Full-Time CFO Recruitment:</strong></p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• Executive recruiter fee: £37,500 (25% of £150k salary)</li>
                    <li>• Hiring team time: 50+ hours of interviews × £200/hr = £10,000</li>
                    <li>• Average time to hire: 4-6 months (opportunity cost per <a href="https://www.cipd.org/uk/knowledge/reports/resourcing-talent-planning-survey/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD data</a>)</li>
                    <li>• Bad hire cost if wrong fit: £150k+ wasted</li>
                  </ul>
                  <p className="mt-4 font-semibold text-blue-600">Fractional: £0 recruitment fees. Start within 1-2 weeks.</p>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">2. Flexibility = Lower Risk</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="mb-2"><strong>Full-Time CFO Lock-In:</strong></p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• 3-6 month notice period (£37,500-£75,000 exit cost)</li>
                    <li>• Can't scale down if business slows</li>
                    <li>• Redundancy risk if company downsizes</li>
                  </ul>
                  <p className="mt-4 font-semibold text-blue-600">Fractional: 30-day notice. Scale from 1 to 3 days/week monthly. No redundancy liability. Understanding <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 contractor status</a> helps ensure compliant engagements.</p>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">3. More Experienced Talent</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="mb-2"><strong>Experience Paradox:</strong></p>
                  <p className="text-sm">At £150k full-time salary, you get a CFO with 10-15 years experience. For £100k fractional (2 days/week), you get a CFO with 18+ years and multiple prior CFO roles, often with <a href="https://www.icaew.com/membership/regulations-standards-and-guidance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW qualifications</a>. Better talent, lower cost.</p>
                  <p className="mt-4 font-semibold text-blue-600">Fractional CFOs are typically more senior because they've "graduated" to fractional after successful full-time CFO careers.</p>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">4. No Equity Dilution</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="mb-2"><strong>Full-Time CFO Equity:</strong></p>
                  <ul className="space-y-1 text-sm list-none pl-0">
                    <li>• Typical: 0.5-2% equity grant</li>
                    <li>• At £10M valuation: £50k-£200k value</li>
                    <li>• At exit (£50M): £250k-£1M dilution</li>
                  </ul>
                  <p className="mt-4 font-semibold text-blue-600">Fractional: Rarely ask for equity. Cash-only compensation.</p>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-3">5. Faster Value Realization</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="mb-2"><strong>Full-Time CFO Ramp Time:</strong></p>
                  <p className="text-sm">4-6 months to hire + 3-6 months to ramp = 7-12 months before delivering value. That's £87k-£150k in salary before they're fully productive. <a href="https://www.iod.com/news/director-salaries/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IoD research</a> confirms executive onboarding timelines.</p>
                  <p className="mt-4 font-semibold text-blue-600">Fractional: Productive from week 1. Hit the ground running with immediate impact.</p>
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Interactive Tool</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Calculate Your Fractional CFO Costs</h2>
          </div>
          <RoleCalculator role="CFO" />
        </div>
      </section>

      {/* When It's Worth It */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">ROI</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Is the Cost Worth It? ROI Examples</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Fractional CFOs typically deliver 3-10x ROI. According to <a href="https://scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> research, professional finance leadership is critical for growth companies. Here are real examples:
            </p>

            <div className="bg-gray-50 text-gray-900 p-8 mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Scenario 1: Fundraising</h3>
              <div className="space-y-4 text-gray-300">
                <p><strong className="text-white">Cost:</strong> £40,000 (6-month engagement, 2 days/week)</p>
                <p><strong className="text-white">Value Delivered:</strong> Built investor model, managed due diligence, supported Series A pitch. Access to <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> programs enhanced funding strategy.</p>
                <p><strong className="text-white">Outcome:</strong> Raised £5M Series A at £25M valuation (vs potential £3M at £18M without CFO)</p>
                <p className="text-blue-400 font-bold text-xl">ROI: 125x (£2M additional capital raised + £7M valuation increase)</p>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Scenario 2: Cash Management</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>Cost:</strong> £54,600 (12-month engagement, 1 day/week)</p>
                <p><strong>Value Delivered:</strong> Implemented 13-week cash forecasting, renegotiated payment terms, optimized inventory. Strategies aligned with <a href="https://www.ons.gov.uk/businessindustryandtrade" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS business trends</a>.</p>
                <p><strong>Outcome:</strong> Extended runway from 8 to 18 months (avoided emergency fundraise at terrible terms), freed £200k working capital</p>
                <p className="text-blue-600 font-bold text-xl">ROI: 5.7x (£200k cash freed + avoided £100k dilution from emergency round)</p>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-gray-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ROI Scenario 3: M&A</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>Cost:</strong> £30,000 (fixed fee, 3-month project)</p>
                <p><strong>Value Delivered:</strong> Led buy-side due diligence on acquisition target, particularly valuable for businesses working with <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">independent contractors</a></p>
                <p><strong>Outcome:</strong> Identified £500k working capital hole and £300k revenue overstatement. Renegotiated price from £2M to £1.4M</p>
                <p className="text-blue-600 font-bold text-xl">ROI: 28x (£600k purchase price reduction + avoided £500k surprise cash call)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={COST_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Hire a Fractional CFO?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Find experienced fractional CFOs at £3k-£10k/month. Save 45-70% vs full-time while getting senior expertise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo-services" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Hire a Fractional CFO
            </Link>
            <Link href="/fractional-cfo-salary" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              View Rate Benchmarks
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
