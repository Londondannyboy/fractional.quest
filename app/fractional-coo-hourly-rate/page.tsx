import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional COO Hourly Rate 2025 | $125-$250/hour Guide',
  description: 'Fractional COO hourly rates range from $125-$250/hour ($1,000-$2,000/day) depending on experience. Complete pricing guide for hourly engagements.',
  keywords: 'fractional coo hourly rate, coo hourly rate, part time coo hourly rate, fractional operations hourly',
}

export default function FractionalCOOHourlyRatePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/fractional-coo" className="text-gray-400 hover:text-white mb-6 inline-block">← Back to COO Hub</Link>
          <h1 className="text-5xl font-black mb-6">Fractional COO Hourly Rate 2025</h1>
          <p className="text-xl text-gray-300">
            Complete guide to fractional COO hourly rates: $125-$250/hour depending on experience and engagement type.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50">
              <div className="text-3xl font-black text-emerald-700">$150</div>
              <div className="text-gray-600">Average Hourly</div>
            </div>
            <div className="text-center p-6 bg-gray-50">
              <div className="text-3xl font-black text-emerald-700">$1,200</div>
              <div className="text-gray-600">Average Day Rate</div>
            </div>
            <div className="text-center p-6 bg-gray-50">
              <div className="text-3xl font-black text-emerald-700">8 hrs</div>
              <div className="text-gray-600">Typical Day Length</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Hourly Rate Breakdown</h2>

            <div className="space-y-4 not-prose my-8">
              <div className="border-l-4 border-emerald-600 pl-6 py-4">
                <div className="font-bold text-lg mb-2">Entry-Level: $125-$150/hour</div>
                <p className="text-gray-600">10-15 years experience, smaller companies ($2M-$10M revenue)</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-6 py-4">
                <div className="font-bold text-lg mb-2">Mid-Level: $150-$200/hour</div>
                <p className="text-gray-600">15-20 years experience, growth companies ($10M-$50M revenue)</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-6 py-4">
                <div className="font-bold text-lg mb-2">Senior: $200-$250/hour</div>
                <p className="text-gray-600">20+ years experience, complex operations, $50M+ revenue</p>
              </div>
            </div>

            <h2>When Hourly vs Day Rate Makes Sense</h2>

            <h3>Choose Hourly Billing When:</h3>
            <ul>
              <li>You need occasional strategic input (5-10 hours/month)</li>
              <li>Project scope is unclear and may vary significantly</li>
              <li>You want to test working together before committing to days/week</li>
              <li>You need specific expertise for defined tasks</li>
            </ul>

            <h3>Choose Day Rate When:</h3>
            <ul>
              <li>You need consistent, ongoing leadership (1-3 days/week)</li>
              <li>Engagement is 6+ months</li>
              <li>COO needs deep integration with your team</li>
              <li>You want predictable monthly costs</li>
            </ul>

            <p className="text-xl font-bold text-gray-900 bg-emerald-50 p-6 my-8">
              Most fractional COOs prefer day rates for ongoing work because hourly tracking creates admin overhead and doesn't capture strategic thinking time outside scheduled hours.
            </p>

            <h2>Converting Hourly to Day Rates</h2>
            <p>
              Standard conversion: Hourly rate × 8 hours = day rate. However, many fractional COOs offer slightly lower day rates to encourage longer engagements:
            </p>
            <ul>
              <li>$150/hour → $1,000/day (not $1,200) - 17% discount</li>
              <li>$200/hour → $1,400/day (not $1,600) - 12% discount</li>
              <li>$250/hour → $1,800/day (not $2,000) - 10% discount</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Hire a Fractional COO?</h2>
          <Link
            href="/fractional-coo-services"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 transition-colors"
          >
            Find Fractional COOs →
          </Link>
        </div>
      </section>
    </div>
  )
}
