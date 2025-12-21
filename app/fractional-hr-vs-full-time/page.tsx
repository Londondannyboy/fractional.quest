import { Metadata } from 'next'
import Link from 'next/link'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR vs Full-Time HR | Which is Right for You? (2025)',
  description: 'Fractional HR vs Full-Time HR comparison. Costs, flexibility, expertise, and when to choose each. Fractional saves 35-55% at £94k-£114k vs £145k-£183k full-time.',
  keywords: 'fractional hr vs full time, fractional hr vs full time hr, part time hr vs full time, hire fractional hr or full time',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-vs-full-time',
  },
  openGraph: {
    title: 'Fractional HR vs Full-Time HR | Complete Comparison Guide',
    description: 'Comprehensive comparison of fractional vs full-time HR - costs, flexibility, and decision framework.',
    images: ['/images/fractional-hr-vs-full-time.jpg'],
    url: 'https://fractional.quest/fractional-hr-vs-full-time',
  },
}

export default function FractionalHRVsFullTimePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/fractional-hr" className="text-gray-400 hover:text-white mb-6 inline-block text-sm">← Back to HR Hub</Link>
          <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Comparison Guide
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Fractional HR vs<br />Full-Time HR</h1>
          <p className="text-xl text-gray-300 mb-8">
            Should you hire fractional or full-time? A comprehensive comparison to help you make the right decision for your business.
          </p>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-4xl font-black text-pink-400">35-55%</div>
              <div className="text-gray-400 text-sm">Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white">1-2 Weeks</div>
              <div className="text-gray-400 text-sm">Time to Start</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Quick Comparison</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-white">
                  <th className="p-4 text-left">Factor</th>
                  <th className="p-4 text-left bg-pink-600">Fractional HR</th>
                  <th className="p-4 text-left">Full-Time HR</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-4 font-semibold">Annual Cost (HR Director)</td>
                  <td className="p-4 bg-pink-50 font-bold text-pink-600">£94k-£114k (2 days/week)</td>
                  <td className="p-4">£145k-£183k (total comp)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Time Commitment</td>
                  <td className="p-4 bg-pink-50">1-3 days/week, flexible</td>
                  <td className="p-4">5 days/week, fixed</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Experience Level</td>
                  <td className="p-4 bg-pink-50">15-20+ years typical</td>
                  <td className="p-4">10-15 years typical</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Time to Hire</td>
                  <td className="p-4 bg-pink-50 font-bold text-pink-600">1-2 weeks</td>
                  <td className="p-4">3-6 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Notice Period</td>
                  <td className="p-4 bg-pink-50">30-60 days</td>
                  <td className="p-4">3-6 months</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Scalability</td>
                  <td className="p-4 bg-pink-50">Scale up/down monthly</td>
                  <td className="p-4">Fixed capacity</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Benefits/Equity</td>
                  <td className="p-4 bg-pink-50">Not included (contractor)</td>
                  <td className="p-4">Required (pension, NI, etc.)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold">Multi-Company Experience</td>
                  <td className="p-4 bg-pink-50">Working with 2-4 clients</td>
                  <td className="p-4">Single company focus</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4 bg-pink-50">20-150 employees, £2M-£20M revenue</td>
                  <td className="p-4">150+ employees, £20M+ revenue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Deep Dive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 mb-8">True Cost Comparison</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 border-2 border-pink-500">
              <h3 className="text-xl font-black text-gray-900 mb-6">Fractional HR Director (2 days/week)</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span>Day rate × 2 × 52 weeks</span>
                  <span className="font-bold">£104,000</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Employer National Insurance</span>
                  <span className="font-bold">£0</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Pension contribution</span>
                  <span className="font-bold">£0</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Benefits & equipment</span>
                  <span className="font-bold">£0</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Recruitment fees</span>
                  <span className="font-bold">£0</span>
                </div>
                <div className="flex justify-between pt-4 bg-pink-50 px-4 py-3 -mx-4">
                  <span className="font-bold text-lg">Total Annual Cost</span>
                  <span className="font-bold text-2xl text-pink-600">£104,000</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-2 border-gray-200">
              <h3 className="text-xl font-black text-gray-900 mb-6">Full-Time HR Director</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span>Base salary</span>
                  <span className="font-bold">£125,000</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Employer NI (13.8%)</span>
                  <span className="font-bold">£17,250</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Pension (5%)</span>
                  <span className="font-bold">£6,250</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Benefits & equipment</span>
                  <span className="font-bold">£5,000</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Recruitment (25%, amortized)</span>
                  <span className="font-bold">£10,400</span>
                </div>
                <div className="flex justify-between pt-4 bg-gray-100 px-4 py-3 -mx-4">
                  <span className="font-bold text-lg">Total Annual Cost</span>
                  <span className="font-bold text-2xl text-gray-600">£163,900</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 text-white p-10 text-center">
            <div className="text-5xl font-black mb-4 text-pink-400">Save £59,900/year</div>
            <div className="text-xl mb-2">That's 37% cost reduction with fractional HR</div>
            <div className="text-gray-400">Plus more experienced talent and faster start</div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Choose Each</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-pink-500 p-8">
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">✓</span>
                Choose Fractional HR When...
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2 font-bold">•</span>
                  <span>You have <strong>20-150 employees</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2 font-bold">•</span>
                  <span>Revenue is <strong>£2M-£20M</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2 font-bold">•</span>
                  <span>You need <strong>strategic expertise</strong>, not admin capacity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2 font-bold">•</span>
                  <span>Budget is <strong>constrained</strong> but you need senior talent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2 font-bold">•</span>
                  <span>You need to <strong>start quickly</strong> (within weeks, not months)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2 font-bold">•</span>
                  <span>HR needs are <strong>variable</strong> (busy periods then quieter)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2 font-bold">•</span>
                  <span>You're in a <strong>transformation phase</strong> (fundraising, M&A)</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 p-8">
              <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">✓</span>
                Choose Full-Time HR When...
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 font-bold">•</span>
                  <span>You have <strong>150+ employees</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 font-bold">•</span>
                  <span>Revenue exceeds <strong>£20M+</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 font-bold">•</span>
                  <span>You need <strong>daily presence</strong> for ER, culture, team mgmt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 font-bold">•</span>
                  <span>HR workload requires <strong>40+ hours/week</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 font-bold">•</span>
                  <span>You want <strong>deep cultural embedding</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 font-bold">•</span>
                  <span>You can afford <strong>£150k+ total comp</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 font-bold">•</span>
                  <span>You have <strong>complex ongoing needs</strong> requiring daily attention</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-pink-50 p-8 border border-pink-200">
            <h3 className="text-xl font-black text-gray-900 mb-4">The Hybrid Approach</h3>
            <p className="text-gray-700 mb-0">
              Many companies start with a <strong>fractional HR Director</strong> to build infrastructure, then transition to full-time as they grow. Some keep a fractional CHRO for strategic oversight while adding a full-time HR Manager for operations. The models aren't mutually exclusive—they can complement each other.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Calculate Your Savings</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Fractional HR?</h2>
          <p className="text-gray-300 mb-8">Find experienced fractional HR professionals or learn more about the model.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors">
              Browse HR Professionals
            </Link>
            <Link href="/fractional-hr" className="px-8 py-4 border-2 border-white font-semibold hover:bg-white/10 transition-colors">
              Complete HR Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-hr-cost" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Cost Guide</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/part-time-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Part-Time HR</Link>
              <Link href="/what-is-fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">What is Fractional HR?</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
