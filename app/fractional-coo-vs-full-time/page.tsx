import { Metadata } from 'next'
import Link from 'next/link'
import { StrategicComparisonInfographic, ComparisonData } from '@/components/infographics/StrategicComparisonInfographic'

export const metadata: Metadata = {
  title: 'Fractional vs Full-Time COO',
  description: 'Fractional COO vs Full-Time. $120k vs $280k+, 2 days/week vs full-time.',
  keywords: 'fractional coo vs full time coo, fractional vs full time, part time coo vs full time, should i hire fractional',
}

const cooComparisonData: ComparisonData = {
  role: 'COO',
  fullTime: {
    baseSalary: 220000,
    bonusesBenefits: 55000,
    recruitmentTraining: 45000,
    hiddenCosts: 10000,
    total: 330000,
  },
  fractional: {
    fee: 120000,
    total: 120000,
    daysPerWeek: 2,
  },
  strengths: {
    fractional: 'Perfect for revenue stages of £2M-£20M where you need high-level operational strategy and process scaling without full-time overhead.',
    fullTime: 'Essential for £30M+ revenue companies with complex multi-site logistics requiring daily operational oversight and deep team integration.',
  }
}

export default function FractionalVsFullTimeCOOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50 text-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/fractional-coo" className="text-gray-400 hover:text-gray-900 mb-6 inline-block">← Back to COO Hub</Link>
          <h1 className="text-5xl font-black mb-6">Fractional COO vs Full-Time COO</h1>
          <p className="text-xl text-gray-300">
            Complete comparison: cost, commitment, expertise, and when each makes sense for your business.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-8">Head-to-Head Comparison</h2>

          <StrategicComparisonInfographic data={cooComparisonData} />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-900">
                  <th className="py-4 px-6 text-left">Factor</th>
                  <th className="py-4 px-6 text-left">Fractional COO</th>
                  <th className="py-4 px-6 text-left">Full-Time COO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold">Time Commitment</td>
                  <td className="py-4 px-6">1-3 days/week</td>
                  <td className="py-4 px-6">5 days/week</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-bold">Annual Cost</td>
                  <td className="py-4 px-6 text-blue-700 font-bold">$60k-$180k</td>
                  <td className="py-4 px-6">$200k-$350k + equity</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold">Start Time</td>
                  <td className="py-4 px-6 text-blue-700 font-bold">1-2 weeks</td>
                  <td className="py-4 px-6">2-4 months</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-bold">Experience Level</td>
                  <td className="py-4 px-6 text-blue-700 font-bold">15-20+ years (senior)</td>
                  <td className="py-4 px-6">10-20+ years (varies)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold">Commitment Length</td>
                  <td className="py-4 px-6">6-18 months (flexible)</td>
                  <td className="py-4 px-6">Indefinite (years)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-bold">Benefits & Taxes</td>
                  <td className="py-4 px-6 text-blue-700 font-bold">$0 (contractor)</td>
                  <td className="py-4 px-6">$40k-$70k</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold">Equity</td>
                  <td className="py-4 px-6">Optional</td>
                  <td className="py-4 px-6">Expected (0.5-2%)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-bold">Flexibility</td>
                  <td className="py-4 px-6 text-blue-700 font-bold">Scale up/down monthly</td>
                  <td className="py-4 px-6">Fixed</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold">Risk</td>
                  <td className="py-4 px-6 text-blue-700 font-bold">Low (30-day notice)</td>
                  <td className="py-4 px-6">High (6-12 month disruption if bad fit)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-8">When to Choose Fractional</h2>

          <div className="space-y-6 prose prose-lg max-w-none">
            <div className="bg-white p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2 mt-0">Revenue: $2M-$20M</h3>
              <p className="mb-0">You need COO expertise but can't justify $250k+ for full-time. Fractional gives you senior talent at startup budget.</p>
            </div>

            <div className="bg-white p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2 mt-0">Strategic Work: 2-3 Days/Week Needed</h3>
              <p className="mb-0">You need high-level operational strategy, not someone managing day-to-day tasks. Fractional COO focuses on strategic work while your team executes.</p>
            </div>

            <div className="bg-white p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2 mt-0">Speed: Need Help NOW</h3>
              <p className="mb-0">Can't wait 3-6 months to hire full-time. Fractional COOs start within 1-2 weeks.</p>
            </div>

            <div className="bg-white p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2 mt-0">Testing: Want to "Try Before You Buy"</h3>
              <p className="mb-0">Work with fractional COO for 6-12 months, validate fit, then convert to full-time if needed. Much lower risk than direct hire.</p>
            </div>

            <div className="bg-white p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-2 mt-0">Flexibility: Needs May Change</h3>
              <p className="mb-0">Uncertain how much support you'll need? Scale fractional engagement up/down as requirements evolve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-8">When to Choose Full-Time</h2>

          <div className="space-y-6 prose prose-lg max-w-none">
            <div className="bg-gray-50 p-6 border-l-4 border-gray-400">
              <h3 className="text-xl font-bold mb-2 mt-0">Revenue: $30M+</h3>
              <p className="mb-0">At this scale, you genuinely need 4-5 days/week of operational leadership. The math justifies full-time.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-gray-400">
              <h3 className="text-xl font-bold mb-2 mt-0">Day-to-Day Management Needed</h3>
              <p className="mb-0">You need someone managing daily operations, not just strategic decisions. Large teams, complex logistics, continuous oversight required.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-gray-400">
              <h3 className="text-xl font-bold mb-2 mt-0">Cultural Integration Priority</h3>
              <p className="mb-0">You want COO deeply embedded in culture, attending all meetings, building relationships across entire org. Full-time presence matters.</p>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-gray-400">
              <h3 className="text-xl font-bold mb-2 mt-0">Budget Available</h3>
              <p className="mb-0">You have $250k-$350k budget for COO + ability to offer meaningful equity. Cash isn't the constraint.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">The Hybrid Path: Start Fractional → Convert Full-Time</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Many successful companies start with fractional COO, validate the fit over 6-12 months, then convert to full-time when revenue and needs justify it. Best of both worlds: lower risk + proven partnership.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Hire a Fractional COO?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/fractional-coo-services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 inline-block transition-colors">
              Find Fractional COOs →
            </Link>
            <Link href="/fractional-coo-cost" className="bg-gray-50 hover:bg-gray-100 text-white font-bold py-4 px-8 inline-block transition-colors">
              Calculate Costs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
