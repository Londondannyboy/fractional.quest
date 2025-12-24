import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Cost UK 2025 | £67k-£135k vs £150k+ Full-Time',
  description: 'How much does fractional HR cost? £700-£1,300/day (£67k-£135k annually) vs £150k-£250k+ for full-time CHRO. Complete UK pricing guide with ROI analysis.',
  keywords: 'fractional hr cost, how much does fractional hr cost, fractional hr pricing, fractional hr rates uk, part time hr cost',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-cost',
  },
  openGraph: {
    title: 'Fractional HR Cost UK 2025 | Complete Pricing Guide',
    description: 'Complete cost breakdown for hiring fractional HR. Day rates, monthly costs, annual totals, and savings vs full-time.',
    images: ['/images/fractional-hr-cost.jpg'],
    url: 'https://fractional.quest/fractional-hr-cost',
  },
}

const COST_FAQS = [
  {
    question: 'How much does a fractional HR Director cost per month?',
    answer: 'UK fractional HR Directors typically cost £3,900-£9,500 per month depending on days worked and seniority. For 2 days/week at £1,000/day average = £8,700/month. For 1 day/week = £4,300/month. This is 35-50% less than a full-time HR Director. Self-employed professionals often work through limited companies to ensure <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 compliance</a>.'
  },
  {
    question: 'Is fractional HR worth the cost?',
    answer: 'Yes, if you have 20-150 employees and need senior HR expertise but can\'t justify £150k+ for full-time. You get experienced leadership (15+ years) for £67k-£135k/year, can scale up/down monthly, and avoid tribunal costs (£8,500-£25,000+ average) through proper HR management. Growing businesses particularly benefit, as highlighted by the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a>.'
  },
  {
    question: 'What\'s the ROI of hiring fractional HR?',
    answer: 'Typical ROI: £1 spent generates £3-8 in value. Examples: avoiding £25k tribunal through proper process, saving £50k bad hire costs through better recruitment, reducing turnover 15% (saving £150k+ in replacement costs), or professionalising HR for successful fundraise.'
  },
  {
    question: 'How much cheaper is fractional vs full-time HR?',
    answer: 'Fractional HR is 35-55% cheaper. Example: 2 days/week fractional HR Director = £104,000/year vs full-time at £160,000+ (salary + NI + pension + benefits). You save £56,000+ annually while often getting more experienced talent.'
  },
  {
    question: 'What does fractional HR cost include?',
    answer: 'The day rate or retainer is all-inclusive: strategic HR leadership, employee relations, policy development, compliance according to <a href="https://www.cipd.org/uk/knowledge/factsheets/employment-law-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK employment law</a>, talent strategy, and team leadership. It does NOT include: HRIS software subscriptions, external legal counsel, recruitment fees, or HR admin outsourcing.'
  },
]

export default function FractionalHRCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional HR Cost UK 2025 | Complete Pricing Guide',
    description: 'How much does fractional HR cost? £700-£1,300/day (£67k-£135k annually) vs £150k-£250k+ for full-time.',
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
          <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to HR Hub
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Employer Guide 2025
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              Fractional HR<br />
              <span className="text-gray-400">Cost Breakdown</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Everything employers need to know about <strong className="text-white">fractional HR costs</strong> in 2025. Daily rates, monthly fees, and how you save 35-55% vs full-time.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black">£700-£1,300</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-pink-400">Save 35-55%</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">vs Full-Time</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">10/mo</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does Fractional HR Cost?</h2>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-8 mb-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-0">
              UK fractional HR professionals cost <strong className="font-bold">£700-£1,300 per day</strong> or <strong>£67,000-£135,000 annually</strong> for 2 days/week, depending on seniority (People Partner to CHRO). This is <strong>35-55% cheaper</strong> than a full-time HR Director/CHRO at £150,000-£250,000+ per year including salary, NI, pension, benefits, and equity.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-6">Monthly Cost by Engagement Level</h3>

            <p className="text-gray-600 mb-6">
              Pricing varies based on engagement level and company size. For freelance workers and contractors, understanding <a href="https://www.ipse.co.uk/ipse-for-you/guides.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">self-employment regulations</a> is essential.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">1 Day/Week</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£3,000-£5,600</div>
                <div className="text-sm text-gray-600 mb-4">per month (4-5 days)</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Strategic oversight</li>
                  <li>• Complex ER support</li>
                  <li>• Policy development</li>
                  <li>• Best for: 20-50 employees</li>
                </ul>
              </div>

              <div className="bg-gray-50 text-gray-900 p-6 border-2 border-gray-900">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">2 Days/Week</div>
                <div className="text-4xl font-black mb-2">£5,600-£11,200</div>
                <div className="text-sm text-gray-600 mb-4">per month (8-10 days)</div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Full HR leadership</li>
                  <li>• Team management</li>
                  <li>• Infrastructure building</li>
                  <li>• Best for: 50-100 employees</li>
                </ul>
              </div>

              <div className="bg-white p-6 border-2 border-gray-200">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2">3 Days/Week</div>
                <div className="text-4xl font-black text-gray-900 mb-2">£8,400-£16,800</div>
                <div className="text-sm text-gray-600 mb-4">per month (12-15 days)</div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Deeply embedded</li>
                  <li>• Major initiatives</li>
                  <li>• Restructuring support</li>
                  <li>• Best for: 100-150 employees</li>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR vs Full-Time: True Cost Comparison</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Let's compare the TRUE all-in cost of fractional vs full-time, including hidden expenses. According to <a href="https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2024-to-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">HMRC guidance</a>, employer costs extend well beyond salary. Understanding your <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">obligations as an employer</a> is crucial when evaluating hiring decisions:
            </p>

            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">Fractional HR Director (2 Days/Week) - All-In Cost</h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Day rate (£1,000 avg) × 2 days/week</span>
                  <span className="font-bold">£2,000/week</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Monthly cost (avg 4.3 weeks)</span>
                  <span className="font-bold">£8,700/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Annual cost (52 weeks)</span>
                  <span className="font-bold text-pink-600">£104,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Employer National Insurance (<a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 compliant</a>)</span>
                  <span className="font-bold">£0 (contractor)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Pension contribution</span>
                  <span className="font-bold">£0 (contractor)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Benefits & equipment</span>
                  <span className="font-bold">£0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Recruitment fees</span>
                  <span className="font-bold">£0</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-pink-50 px-4 py-3">
                  <span className="font-bold text-lg">TOTAL ANNUAL COST</span>
                  <span className="font-bold text-2xl text-pink-600">£104,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-gray-900 mb-10">
              <h3 className="text-2xl font-black text-gray-900 mt-0 mb-6">Full-Time HR Director - All-In Cost</h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Base salary (mid-level)</span>
                  <span className="font-bold">£120,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Bonus (15% typical)</span>
                  <span className="font-bold">£18,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span><a href="https://www.gov.uk/browse/employing-people/payroll" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Employer National Insurance</a> (13.8%)</span>
                  <span className="font-bold">£19,044/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span><a href="https://www.gov.uk/workplace-pensions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Pension contribution</a> (5%)</span>
                  <span className="font-bold">£6,900/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Benefits (health, insurance)</span>
                  <span className="font-bold">£4,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Office space & equipment</span>
                  <span className="font-bold">£4,000/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Recruitment fee (25% of salary, amortized 3 years)</span>
                  <span className="font-bold">£10,000/year</span>
                </div>
                <div className="flex justify-between items-center pt-4 bg-gray-100 px-4 py-3">
                  <span className="font-bold text-lg">TOTAL ANNUAL COST</span>
                  <span className="font-bold text-2xl text-gray-600">£181,944</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 text-gray-900 p-10 text-center">
              <div className="text-5xl md:text-6xl font-black mb-4 text-pink-400">Save £77,944</div>
              <div className="text-2xl mb-6">That's 43% cost reduction with fractional HR</div>
              <div className="text-gray-300">For 2 days/week fractional vs full-time HR Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Seniority */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">By Role Level</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional HR Cost by Seniority</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-900">
                  <th className="p-4 text-left">Role Level</th>
                  <th className="p-4 text-left">Day Rate</th>
                  <th className="p-4 text-left">1 Day/Week</th>
                  <th className="p-4 text-left">2 Days/Week</th>
                  <th className="p-4 text-left">3 Days/Week</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4">
                    <div className="font-semibold">People Partner</div>
                    <div className="text-sm text-gray-600">8-12 years exp</div>
                  </td>
                  <td className="p-4 font-bold">£600-£850</td>
                  <td className="p-4">£31k-£44k/year</td>
                  <td className="p-4">£62k-£88k/year</td>
                  <td className="p-4">£94k-£133k/year</td>
                </tr>
                <tr className="border-b bg-pink-50">
                  <td className="p-4">
                    <div className="font-semibold">HR Director</div>
                    <div className="text-sm text-gray-600">12-18 years exp</div>
                  </td>
                  <td className="p-4 font-bold">£900-£1,100</td>
                  <td className="p-4">£47k-£57k/year</td>
                  <td className="p-4 text-pink-600 font-bold">£94k-£114k/year</td>
                  <td className="p-4">£140k-£172k/year</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">
                    <div className="font-semibold">CHRO</div>
                    <div className="text-sm text-gray-600">18+ years exp</div>
                  </td>
                  <td className="p-4 font-bold">£1,100-£1,300</td>
                  <td className="p-4">£57k-£68k/year</td>
                  <td className="p-4">£114k-£135k/year</td>
                  <td className="p-4">£172k-£203k/year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-gray-50 p-6">
            <p className="text-gray-700 mb-0">
              <strong>Most common:</strong> HR Director (12-18 years exp) at 2 days/week = £94k-£114k annually. This saves £68k-£88k vs full-time HR Director (£162k-£202k total cost). For salary benchmarking, the <a href="https://www.cipd.org/uk/knowledge/reports/reward-management-survey/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD Reward Management Survey</a> provides comprehensive market data.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Examples */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Is the Cost Worth It? ROI Examples</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">ROI Example 1: Tribunal Avoidance</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Cost:</strong> £50,000 (12-month engagement, 1 day/week)</p>
                  <p><strong>Situation:</strong> Company facing potential unfair dismissal claim. Fractional HR Director implemented proper <a href="https://www.acas.org.uk/dismissals" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">performance management process</a>, documented everything correctly, and managed exit professionally following <a href="https://www.acas.org.uk/acas-code-of-practice-on-disciplinary-and-grievance-procedures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACAS guidance</a>.</p>
                  <p><strong>Outcome:</strong> Avoided tribunal claim that would have cost £25,000+ in legal fees plus potential £50,000+ award.</p>
                  <p className="text-pink-600 font-bold text-lg">ROI: 1.5-2x (£75,000+ saved for £50k investment)</p>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-gray-900">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">ROI Example 2: Reduced Turnover</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Cost:</strong> £80,000 (12-month engagement, 2 days/week)</p>
                  <p><strong>Actions:</strong> Implemented engagement surveys, created career frameworks, improved management practices, fixed compensation issues. According to <a href="https://www.shrm.org/topics-tools/tools/toolkits/managing-employee-retention" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SHRM research</a>, systematic retention strategies significantly reduce turnover costs.</p>
                  <p><strong>Outcome:</strong> Reduced turnover from 25% to 15%. For 80 employees at £40k average salary, saving 8 departures × £30k replacement cost = £240,000.</p>
                  <p className="text-pink-600 font-bold text-lg">ROI: 3x (£240k saved for £80k investment)</p>
                </div>
              </div>

              <div className="bg-white p-8 border-l-4 border-pink-500">
                <h3 className="text-xl font-black text-gray-900 mt-0 mb-4">ROI Example 3: Fundraising Support</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Cost:</strong> £35,000 (6-month engagement, 1.5 days/week)</p>
                  <p><strong>Actions:</strong> Built HR infrastructure, created people metrics dashboard, developed retention strategy, professionalised HR for investor due diligence. The <a href="https://www.british-business-bank.co.uk/finance-hub/scaling-a-business/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> emphasises strong people management as critical for scaling businesses.</p>
                  <p><strong>Outcome:</strong> Company successfully raised £5M Series A. Investors specifically cited professional HR function and retention metrics as factors in decision.</p>
                  <p className="text-pink-600 font-bold text-lg">ROI: Enabled funding round—invaluable</p>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Calculate Your Fractional HR Costs</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={COST_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Hire Fractional HR?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Find experienced fractional HR professionals at £700-£1,300/day. Save 35-55% vs full-time while getting senior expertise. Business leaders at the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> increasingly favour flexible talent models.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              Browse HR Professionals
            </Link>
            <Link href="/fractional-hr" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Complete HR Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-hourly-rate" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Hourly Rates</Link>
              <Link href="/fractional-hr-vs-full-time" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">vs Full-Time</Link>
              <Link href="/fractional-hr-for-startups" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR for Startups</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
