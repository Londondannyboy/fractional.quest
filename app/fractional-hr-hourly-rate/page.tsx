import { Metadata } from 'next'
import Link from 'next/link'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Hourly Rate UK 2025 | £88-£163/Hour Guide',
  description: 'Fractional HR hourly rates UK 2025. People Partners £75-£106/hour. HR Directors £113-£138/hour. CHROs £138-£163/hour. Complete pricing guide.',
  keywords: 'fractional hr hourly rate, fractional hr rate per hour, part time hr hourly rate, fractional hr consultant hourly rate',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-hourly-rate',
  },
  openGraph: {
    title: 'Fractional HR Hourly Rate UK 2025 | Complete Guide',
    description: 'Fractional HR hourly rates from £75-£163/hour depending on seniority. Full breakdown.',
    images: ['/images/fractional-hr-hourly-rate.jpg'],
    url: 'https://fractional.quest/fractional-hr-hourly-rate',
  },
}

const hourlyRates = [
  { role: 'Fractional People Partner', hourly: '£75-£106', daily: '£600-£850', notes: '8-12 years experience' },
  { role: 'Fractional HR Consultant', hourly: '£88-£119', daily: '£700-£950', notes: 'Project-based, specialist' },
  { role: 'Fractional HR Director', hourly: '£113-£138', daily: '£900-£1,100', notes: '12-18 years, most common' },
  { role: 'Fractional CHRO', hourly: '£138-£163', daily: '£1,100-£1,300', notes: '18+ years, board-level' },
]

export default function FractionalHRHourlyRatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/fractional-hr" className="text-gray-400 hover:text-gray-900 mb-6 inline-block text-sm">← Back to HR Hub</Link>
          <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Pricing Guide 2025
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">Fractional HR<br />Hourly Rate</h1>
          <p className="text-xl text-gray-600 mb-8">
            UK fractional HR hourly rates from <strong className="text-white">£75-£163 per hour</strong> depending on seniority and specialisation.
          </p>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-4xl font-black text-pink-400">£113-£138</div>
              <div className="text-gray-600 text-sm">HR Director Hourly</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white">£119</div>
              <div className="text-gray-600 text-sm">Market Average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-pink-50 border-l-4 border-pink-500 p-8 mb-12">
            <h2 className="text-2xl font-black text-gray-900 mb-4">Quick Answer: Fractional HR Hourly Rates</h2>
            <p className="text-xl text-gray-700 mb-0">
              Fractional HR professionals in the UK charge <strong>£75-£163 per hour</strong> based on an 8-hour day rate model. Most fractional HR Directors charge £113-£138/hour (equivalent to £900-£1,100/day). Unlike consultants who charge hourly, most fractional HR professionals quote day rates—but understanding the hourly equivalent helps compare value.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hourly Rates by Role Level</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-900">
                    <th className="text-left p-4 font-semibold">Role</th>
                    <th className="text-left p-4 font-semibold">Hourly Rate</th>
                    <th className="text-left p-4 font-semibold">Day Rate</th>
                    <th className="text-left p-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {hourlyRates.map((row, i) => (
                    <tr key={i} className={`border-b ${row.role.includes('Director') ? 'bg-pink-50' : ''}`}>
                      <td className="p-4 font-medium text-gray-900">{row.role}</td>
                      <td className={`p-4 font-bold ${row.role.includes('Director') ? 'text-pink-600' : 'text-gray-700'}`}>{row.hourly}</td>
                      <td className="p-4 text-gray-600">{row.daily}</td>
                      <td className="p-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-4">*Hourly rates calculated from day rates assuming 8-hour working day</p>
          </div>

          <div className="prose prose-lg prose-pink max-w-none">
            <h2>Why Day Rates, Not Hourly?</h2>
            <p>
              Most fractional HR professionals quote <strong>day rates rather than hourly rates</strong>. This is because:
            </p>
            <ul>
              <li><strong>Strategic work isn't hourly:</strong> HR leadership involves thinking between meetings, not just billable hours</li>
              <li><strong>Easier planning:</strong> Companies can budget for "2 days per week" rather than tracking hours</li>
              <li><strong>Value-based:</strong> You're paying for outcomes and expertise, not time</li>
              <li><strong>Industry standard:</strong> Matches how other fractional executives (CFOs, CTOs) price</li>
            </ul>

            <h2>When Hourly Rates Apply</h2>
            <p>Hourly rates are sometimes used for:</p>
            <ul>
              <li><strong>Advisory calls:</strong> Quick phone consultations (£150-£250/hour)</li>
              <li><strong>Small projects:</strong> Under 1 day of work</li>
              <li><strong>Overflow support:</strong> Urgent ER advice on specific matters</li>
              <li><strong>Coaching:</strong> Executive coaching sessions for HR teams</li>
            </ul>

            <h2>Hourly Rate vs Full-Time Equivalent</h2>
            <p>
              A fractional HR Director charging £125/hour (£1,000/day) appears expensive compared to a full-time HR Director earning £120,000/year (roughly £58/hour). However, the comparison isn't straightforward:
            </p>
            <div className="bg-gray-50 p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-3">True Cost Comparison</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Full-time HR Director:</strong> £120k salary + £20k employer costs = £140k/year for 230 working days = £609/day</li>
                <li><strong>Fractional HR Director:</strong> £1,000/day for only the days you need (e.g., 100 days/year = £100k)</li>
                <li><strong>Savings:</strong> £40k+ if you only need 2 days/week, plus more senior expertise</li>
              </ul>
            </div>

            <h2>Factors Affecting Hourly Rates</h2>
            <ul>
              <li><strong>Seniority:</strong> CHROs command 30-40% higher rates than People Partners</li>
              <li><strong>Specialisation:</strong> ER specialists, M&A experts, and DE&I consultants often charge premiums</li>
              <li><strong>Location:</strong> London rates are 15-25% higher than regional</li>
              <li><strong>Urgency:</strong> Same-day or crisis support may attract 25-50% premium</li>
              <li><strong>Commitment:</strong> Longer retainers (6+ months) may receive 10-15% discount</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Calculate Hourly Equivalent</h2>
            <p className="text-gray-600">See how day rates translate to hourly and annual earnings</p>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Fractional HR Opportunities</h2>
          <p className="text-gray-600 mb-8">Browse roles or learn more about fractional HR pricing.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors">
              Browse HR Jobs
            </Link>
            <Link href="/fractional-hr-salary" className="px-8 py-4 border-2 border-white font-semibold hover:bg-white/10 transition-colors">
              Full Salary Guide
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
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-cost" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Cost Guide</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director</Link>
              <Link href="/fractional-hr-vs-full-time" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">vs Full-Time</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
