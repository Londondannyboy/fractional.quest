import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { RateDistribution } from '@/components/RateDistribution'

export const metadata: Metadata = {
  title: 'Fractional COO Salary 2025 - Day Rates, Annual Earnings & Pay Guide',
  description: 'Fractional COO salary guide for 2025. Day rates $1,000-$1,800. Annual earnings $150k-$300k+. Compare rates by location, industry and experience level.',
  keywords: 'fractional coo salary, fractional coo day rate, fractional coo pay, part time coo salary, fractional coo earnings',
  openGraph: {
    title: 'Fractional COO Salary 2025 - Complete Pay Guide',
    description: 'Fractional COO salary guide. Day rates $1,000-$1,800. Annual earnings $150k-$300k+.',
  },
}

const salaryData = {
  dayRates: [
    { level: 'Entry-level Fractional COO', range: '$800-$1,200/day', annual: '$120k-$180k', experience: '10-15 years' },
    { level: 'Mid-level Fractional COO', range: '$1,200-$1,500/day', annual: '$180k-$240k', experience: '15-20 years' },
    { level: 'Senior Fractional COO', range: '$1,500-$1,800/day', annual: '$240k-$300k+', experience: '20+ years' },
  ],
  byLocation: [
    { location: 'San Francisco / Silicon Valley', range: '$1,500-$2,200/day', premium: '+35%' },
    { location: 'New York City', range: '$1,400-$2,000/day', premium: '+25%' },
    { location: 'Boston / Cambridge', range: '$1,200-$1,700/day', premium: '+15%' },
    { location: 'Los Angeles', range: '$1,100-$1,600/day', premium: '+10%' },
    { location: 'Chicago', range: '$1,000-$1,400/day', premium: 'Base' },
    { location: 'Austin', range: '$1,000-$1,400/day', premium: 'Base' },
    { location: 'Remote US', range: '$900-$1,300/day', premium: '-10%' },
  ],
  byIndustry: [
    { industry: 'Private Equity / VC Portfolio', range: '$1,500-$2,200/day', demand: 'Very High' },
    { industry: 'SaaS / Tech', range: '$1,300-$1,800/day', demand: 'Very High' },
    { industry: 'E-commerce / DTC', range: '$1,200-$1,600/day', demand: 'High' },
    { industry: 'FinTech', range: '$1,400-$1,900/day', demand: 'Very High' },
    { industry: 'Healthcare / Pharma', range: '$1,100-$1,500/day', demand: 'Medium' },
    { industry: 'Manufacturing', range: '$1,000-$1,400/day', demand: 'Medium' },
    { industry: 'Professional Services', range: '$1,000-$1,400/day', demand: 'Medium' },
  ],
}

export default function FractionalCooSalaryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/90" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link href="/" className="text-blue-200 hover:text-gray-900 mb-6 inline-block">← Back to Home</Link>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Fractional COO Salary 2025</h1>
          <p className="text-xl text-blue-100 mb-8">
            Complete guide to fractional COO pay rates, day rates, and annual earnings in the US market. Understanding <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 underline">IR35 regulations</a> is essential for fractional executives operating through limited companies.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-blue-700">$1,300</div>
              <div className="text-gray-600">Average Day Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">$195k</div>
              <div className="text-gray-600">Average Annual</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-700">2-3</div>
              <div className="text-gray-600">Days Per Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Rate Distribution */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-2 block">Live Market Data</span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Real Fractional COO Salaries</h2>
            <p className="text-blue-200 mt-2">From actual job postings on Fractional Quest</p>
          </div>
          <Suspense fallback={<div className="text-white text-center">Loading rate data...</div>}>
            <RateDistribution roleFilter="COO" />
          </Suspense>
        </div>
      </section>

      {/* Day Rate Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-8">Fractional COO Day Rates by Experience</h2>
          <p className="text-gray-600 mb-6">
            These rates reflect the growing demand for <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a> among senior executives. According to <a href="https://www.cipd.org.uk/knowledge/fundamentals/pay-reward/salary-surveys/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD salary surveys</a>, operational leadership roles command premium rates in the current market.
          </p>

          <div className="space-y-4">
            {salaryData.dayRates.map((tier) => (
              <div key={tier.level} className="border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{tier.level}</h3>
                    <p className="text-sm text-gray-600">{tier.experience} experience in operations management</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-blue-700">{tier.range}</div>
                    <div className="text-sm text-gray-600">{tier.annual}/year</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            Many fractional COOs are members of professional bodies like the <a href="https://www.managers.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Management Institute (CMI)</a> or the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors (IoD)</a>, which provide professional development and networking opportunities.
          </p>
        </div>
      </section>

      {/* By Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-8">Fractional COO Rates by Location</h2>
          <p className="text-gray-600 mb-6">
            Geographic salary variations are tracked by the <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment and labour market data</a>. Remote work has enabled fractional executives to serve clients nationwide while maintaining competitive rates.
          </p>

          <div className="space-y-3">
            {salaryData.byLocation.map((loc) => (
              <div key={loc.location} className="bg-white border border-gray-200 p-5 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">{loc.location}</div>
                  <div className="text-sm text-gray-600">Premium: {loc.premium}</div>
                </div>
                <div className="text-xl font-black text-blue-700">{loc.range}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By Industry */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-8">Fractional COO Rates by Industry</h2>
          <p className="text-gray-600 mb-6">
            Industry-specific rates vary significantly. The <a href="https://www.makeuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Make UK manufacturing association</a> provides insights into operational leadership needs in manufacturing, while <a href="https://scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> research shows particularly high demand for fractional COOs in high-growth technology companies.
          </p>

          <div className="space-y-3">
            {salaryData.byIndustry.map((ind) => (
              <div key={ind.industry} className="border border-gray-200 p-5 flex justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">{ind.industry}</div>
                  <div className="text-sm text-gray-600">Demand: {ind.demand}</div>
                </div>
                <div className="text-xl font-black text-blue-700">{ind.range}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            Self-employed fractional executives should consult <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IPSE (Association of Independent Professionals and the Self-Employed)</a> for guidance on rates, contracts, and best practices in the UK market.
          </p>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">Calculate Your Fractional COO Earnings</h2>
          <p className="text-xl text-blue-100 mb-8">
            2-3 clients × 2 days/week × $1,300/day = $156k-$234k annually<br />
            4 clients × 2 days/week = $312k/year
          </p>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Growing businesses backed by the <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 underline">British Business Bank</a> and venture capital firms increasingly seek fractional COOs to scale operations efficiently without the commitment of a full-time executive hire.
          </p>
          <Link
            href="/fractional-coo-jobs-uk"
            className="inline-block bg-white text-blue-700 font-bold py-4 px-8 hover:bg-blue-50 transition-colors"
          >
            Browse Fractional COO Jobs →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">Ready to Become a Fractional COO?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn how to transition from full-time to fractional operations leadership. Professional bodies like <a href="https://www.apm.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">APM (Association for Project Management)</a> offer valuable certifications that can enhance your credibility as a fractional executive.
          </p>
          <Link
            href="/how-to-become-fractional-coo"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 transition-colors"
          >
            Read the Career Guide →
          </Link>
        </div>
      </section>
    </div>
  )
}
