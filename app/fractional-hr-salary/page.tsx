import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { RateDistribution } from '@/components/RateDistribution'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Salary UK 2025',
  description: 'Fractional HR salary UK. Day rates £700-£1,300, annual earnings £90k-£200k.',
  keywords: 'fractional hr salary, fractional hr day rate, fractional hr pay, part time hr salary, fractional hr earnings uk, fractional hr director salary',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-salary',
  },
  openGraph: {
    title: 'Fractional HR Salary UK 2025 - Complete Pay Guide',
    description: 'Fractional HR salary guide. UK day rates £700-£1,300. Annual earnings £90k-£200k.',
    images: ['/images/fractional-hr-salary.jpg'],
    url: 'https://fractional.quest/fractional-hr-salary',
  },
}

const salaryData = {
  dayRates: [
    { level: 'Fractional People Partner', range: '£600-£850/day', annual: '£78k-£110k', experience: '8-12 years' },
    { level: 'Fractional HR Director', range: '£900-£1,100/day', annual: '£117k-£143k', experience: '12-18 years' },
    { level: 'Fractional CHRO', range: '£1,100-£1,300/day', annual: '£143k-£169k', experience: '18+ years' },
  ],
  byLocation: [
    { location: 'London (City/West End)', range: '£950-£1,300/day', premium: '+20%' },
    { location: 'London (Tech/Shoreditch)', range: '£850-£1,200/day', premium: '+10%' },
    { location: 'Manchester', range: '£750-£1,050/day', premium: 'Base' },
    { location: 'Birmingham', range: '£700-£1,000/day', premium: '-5%' },
    { location: 'Edinburgh', range: '£750-£1,050/day', premium: 'Base' },
    { location: 'Bristol', range: '£750-£1,000/day', premium: '-3%' },
    { location: 'Remote UK', range: '£700-£950/day', premium: '-10%' },
  ],
  byIndustry: [
    { industry: 'Private Equity / VC Portfolio', range: '£1,000-£1,300/day', demand: 'Very High' },
    { industry: 'FinTech / Financial Services', range: '£950-£1,250/day', demand: 'High' },
    { industry: 'Tech / SaaS', range: '£900-£1,200/day', demand: 'Very High' },
    { industry: 'Healthcare / Life Sciences', range: '£850-£1,150/day', demand: 'Medium' },
    { industry: 'Professional Services', range: '£800-£1,100/day', demand: 'Medium' },
    { industry: 'E-commerce / Retail', range: '£750-£1,050/day', demand: 'High' },
    { industry: 'Manufacturing', range: '£700-£1,000/day', demand: 'Medium' },
  ],
}

export default function FractionalHRSalaryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-900 to-pink-800 py-20 bg-cover bg-center bg-blend-multiply" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/fractional-hr" className="text-pink-300 hover:text-gray-900 mb-6 inline-block text-sm">← Back to HR Hub</Link>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Fractional HR Salary UK 2025</h1>
          <p className="text-xl text-pink-200 mb-8">
            Complete guide to fractional HR pay rates, day rates, and annual earnings in the UK market.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-pink-600">£950</div>
              <div className="text-gray-600 text-sm">Average Day Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-600">£124k</div>
              <div className="text-gray-600 text-sm">Average Annual</div>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-600">2</div>
              <div className="text-gray-600 text-sm">Days Per Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Rate Distribution */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-400 mb-2 block">Live Market Data</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">HR Day Rate Distribution</h2>
            <p className="text-gray-400 mt-2 text-sm">From current job listings</p>
          </div>
          <Suspense fallback={
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin" />
            </div>
          }>
            <RateDistribution height="400px" roleFilter="HR" />
          </Suspense>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-pink mb-12 max-w-none">
            <h2>Fractional HR Salary Overview</h2>
            <p>
              <strong>Fractional HR salary</strong> in the UK varies significantly based on seniority, location, industry, and client portfolio. Unlike <a href="https://www.cipd.org/en/knowledge/factsheets/pay-salary-structures-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">full-time HR roles with fixed annual salaries</a>, fractional HR professionals charge day rates—typically ranging from £700 to £1,300 per day in 2025.
            </p>
            <p>
              The <strong>fractional HR pay</strong> model offers higher effective hourly earnings than most full-time positions. A fractional HR Director working 2-3 days per week at £1,000/day earns approximately £130,000 annually—often exceeding a full-time HR Director salary while offering more flexibility. Most fractional HR professionals operate through <a href="https://www.gov.uk/set-up-business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">limited companies for tax efficiency</a>, though understanding <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 legislation</a> is crucial for compliance.
            </p>
          </div>

          {/* Day Rates by Seniority */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fractional HR Day Rates by Seniority</h2>
            <p className="text-gray-700 mb-4">
              Day rates vary significantly by seniority and experience level. Senior HR professionals with <a href="https://www.cipd.org/en/knowledge/factsheets/hr-profession-map-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">comprehensive HR expertise across the profession map</a> command premium rates. Many fractional HR leaders have previously held executive positions and bring <a href="https://www.shrm.org/topics-tools/news/hr-magazine/senior-hr-professional-competencies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">senior-level competencies</a> to their client engagements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-pink-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Level</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Day Rate</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Annual (Est.)</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.dayRates.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium text-gray-900">{row.level}</td>
                      <td className="p-4 text-pink-600 font-semibold">{row.range}</td>
                      <td className="p-4 text-gray-700">{row.annual}</td>
                      <td className="p-4 text-gray-600">{row.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-4">*Annual estimates based on 130 billable days per year (2.5 days/week average)</p>
          </div>

          {/* By Location */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fractional HR Salary by Location</h2>
            <p className="text-gray-700 mb-4">
              Location significantly impacts fractional HR rates. London commands premium rates due to higher operating costs and concentration of high-growth startups. Regional variations reflect local <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employment market data</a>, with remote work enabling access to clients nationwide while maintaining competitive pricing.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-pink-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Location</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Day Rate Range</th>
                    <th className="text-left p-4 font-semibold text-gray-900">vs Average</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.byLocation.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium text-gray-900">{row.location}</td>
                      <td className="p-4 text-pink-600 font-semibold">{row.range}</td>
                      <td className="p-4 text-gray-600">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* By Industry */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fractional HR Rates by Industry</h2>
            <p className="text-gray-700 mb-4">
              Industry specialization drives significant rate premiums. Private equity and VC-backed companies often require rapid HR infrastructure deployment, commanding top rates. <a href="https://www.ipse.co.uk/policy/research/self-employed-landscape.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Self-employed professionals</a> with sector-specific expertise typically charge 15-25% more than generalists. Understanding <a href="https://www.iod.com/about-us/what-we-do/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">business leadership dynamics</a> across sectors is essential.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-pink-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Industry</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Day Rate Range</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Demand</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.byIndustry.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium text-gray-900">{row.industry}</td>
                      <td className="p-4 text-pink-600 font-semibold">{row.range}</td>
                      <td className="p-4 text-gray-600">{row.demand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg prose-pink max-w-none">
            <h2>Factors Affecting Fractional HR Salary</h2>
            <p>Several factors influence <strong>fractional HR earnings</strong>:</p>
            <ul>
              <li><strong>Qualifications</strong> - <a href="https://www.cipd.org/en/qualifications/cipd-qualifications/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD Level 7</a> qualified professionals command 10-15% higher rates</li>
              <li><strong>ER expertise</strong> - <a href="https://www.acas.org.uk/tribunal-procedure" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tribunal experience</a> and complex ER skills add £100-150/day premium</li>
              <li><strong>Industry specialisation</strong> - Deep sector expertise (FinTech, PE) commands premium rates, particularly in <a href="https://www.british-business-bank.co.uk/research/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">high-growth sectors</a></li>
              <li><strong>Scale experience</strong> - Having built HR functions at 100+ employee companies, especially during <a href="https://scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scale-up phases</a>, increases rates</li>
              <li><strong>M&A experience</strong> - <a href="https://www.acas.org.uk/tupe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">TUPE</a> and integration expertise adds significant premium</li>
            </ul>

            <h2>Full-Time HR Director vs Fractional HR Salary</h2>
            <p>
              Comparing <strong>fractional HR salary</strong> to full-time equivalents requires considering total compensation and working patterns. A full-time HR Director at a Series B startup might earn £120,000-£150,000 plus benefits according to <a href="https://www.cipd.org/en/knowledge/reports/reward-management-survey/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD reward surveys</a>. A fractional HR Director earning £1,000/day for 130 days achieves £130,000—similar cash compensation with more flexibility and typically better effective hourly rate. The fractional model also aligns well with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a> that many professionals now prioritize.
            </p>
          </div>
        </div>
      </article>

      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Calculate Your Fractional HR Earnings</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pink-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Fractional HR Opportunities?</h2>
          <p className="text-pink-200 mb-8">Browse live HR roles or create your profile to get matched with companies.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 bg-white text-pink-900 font-semibold hover:bg-pink-50 transition-colors">
              Browse HR Jobs
            </Link>
            <Link href="/part-time-hr" className="px-8 py-4 border-2 border-white font-semibold hover:bg-white/10 transition-colors">
              Part-Time HR Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Related HR Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Salary & Rates</h3>
              <div className="space-y-2">
                <Link href="/fractional-hr-hourly-rate" className="block text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Hourly Rates 2025</Link>
                <Link href="/fractional-hr-cost" className="block text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Cost Breakdown</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Job Opportunities</h3>
              <div className="space-y-2">
                <Link href="/fractional-hr-jobs-uk" className="block text-gray-600 hover:text-pink-600 font-medium transition-colors">UK HR Jobs</Link>
                <Link href="/fractional-hr-jobs-remote" className="block text-gray-600 hover:text-pink-600 font-medium transition-colors">Remote HR Jobs</Link>
                <Link href="/fractional-hr-director-jobs" className="block text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director Jobs</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">HR Guides</h3>
              <div className="space-y-2">
                <Link href="/fractional-hr" className="block text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
                <Link href="/fractional-hr-director" className="block text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director Guide</Link>
                <Link href="/fractional-chro" className="block text-gray-600 hover:text-pink-600 font-medium transition-colors">CHRO Guide</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
