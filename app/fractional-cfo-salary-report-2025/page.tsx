import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CFO Salary Report UK 2025',
  description: 'Fractional CFO salary report. Day rates, annual earnings, regional trends.',
  openGraph: {
    title: '2025 Fractional CFO Salary Report UK',
    description: 'Complete salary data for fractional CFOs. Day rates, annual earnings, and market analysis.',
    url: 'https://fractional.quest/fractional-cfo-salary-report-2025',
  },
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-salary-report-2025',
  },
}

export const revalidate = 3600

export default function FractionalCFOSalaryReport2025Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context': 'https://schema.org', '@type': 'Article', headline: '2025 Fractional CFO Salary Report UK', description: 'Comprehensive salary and rate data for fractional CFOs in 2025.', author: {'@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest'}, publisher: {'@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest'}, datePublished: '2025-01-16', dateModified: '2025-01-16'})}} />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-950/20/30 to-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/fractional-cfo" className="hover:text-blue-600 transition-colors">Fractional CFO</Link>
            <span>/</span>
            <span className="text-slate-900">2025 Salary Report</span>
          </nav>

          <header className="mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/30 px-4 py-1.5 text-sm font-semibold text-blue-700">
              <span>📊</span>
              <span>2025 Data</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              2025 Fractional CFO Salary Report: UK Rates & Earnings Data
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Comprehensive salary and rate analysis for UK fractional CFOs. Day rates, annual earnings, regional variations, and market trends based on 2025 market data.
            </p>
          </header>

          <div className="mb-12 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Key Findings 2025</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-blue-950/20 p-6">
                <div className="mb-2 text-3xl font-bold text-blue-700">£1,200</div>
                <div className="text-sm text-slate-700">Median day rate (UK)</div>
                <div className="mt-2 text-xs text-slate-600">↑ 8% vs 2024</div>
              </div>
              <div className="rounded-lg bg-blue-50 p-6">
                <div className="mb-2 text-3xl font-bold text-blue-700">£140K</div>
                <div className="text-sm text-slate-700">Median annual earnings</div>
                <div className="mt-2 text-xs text-slate-600">4-5 clients, 2 days/week each</div>
              </div>
              <div className="rounded-lg bg-purple-50 p-6">
                <div className="mb-2 text-3xl font-bold text-purple-700">+15%</div>
                <div className="text-sm text-slate-700">Demand growth YoY</div>
                <div className="mt-2 text-xs text-slate-600">Post-funding companies</div>
              </div>
            </div>
          </div>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Day Rate Benchmarks by Experience</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Experience</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Day Rate Range</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Median</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-slate-900">Typical Clients</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Entry (10-15 yrs)</td>
                    <td className="py-3 px-4 text-slate-600">£800-£1,100</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£950</td>
                    <td className="py-3 pl-4 text-slate-600">£2M-£15M revenue</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Mid-level (15-20 yrs)</td>
                    <td className="py-3 px-4 text-slate-600">£1,100-£1,500</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,300</td>
                    <td className="py-3 pl-4 text-slate-600">£10M-£40M revenue</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Senior (20+ yrs)</td>
                    <td className="py-3 px-4 text-slate-600">£1,500-£2,000</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,700</td>
                    <td className="py-3 pl-4 text-slate-600">£30M-£100M+ revenue</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Specialist</td>
                    <td className="py-3 px-4 text-slate-600">£1,800-£2,500+</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£2,000</td>
                    <td className="py-3 pl-4 text-slate-600">IPO, PE, complex M&A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Annual Earnings Analysis</h2>
            <p className="text-lg text-slate-600">Based on typical portfolio of 4-5 clients at 2 days/week each (48 working weeks):</p>
            <div className="not-prose space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Entry-Level Fractional CFO</span>
                  <span className="text-2xl font-bold text-blue-600">£91K-£106K</span>
                </div>
                <p className="text-sm text-slate-600">£950/day × 2 days × 48 weeks = £91K per client × 4-5 clients</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Mid-Level Fractional CFO</span>
                  <span className="text-2xl font-bold text-blue-600">£125K-£156K</span>
                </div>
                <p className="text-sm text-slate-600">£1,300/day × 2 days × 48 weeks = £125K per client × 4-5 clients</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold text-slate-900">Senior Fractional CFO</span>
                  <span className="text-2xl font-bold text-blue-600">£163K-£204K</span>
                </div>
                <p className="text-sm text-slate-600">£1,700/day × 2 days × 48 weeks = £163K per client × 4-5 clients</p>
              </div>
            </div>
          </section>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Regional Rate Variations</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Region</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Median Day Rate</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-slate-900">vs UK Average</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">London</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,500</td>
                    <td className="py-3 pl-4 text-blue-600">+25%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Southeast</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,300</td>
                    <td className="py-3 pl-4 text-blue-600">+8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Manchester/Leeds</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,150</td>
                    <td className="py-3 pl-4 text-slate-600">-4%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Scotland</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,100</td>
                    <td className="py-3 pl-4 text-slate-600">-8%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Regional (other)</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,000</td>
                    <td className="py-3 pl-4 text-slate-600">-17%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Note: Remote work has reduced regional variations. Many regional CFOs now command London rates serving remote-first companies. See <Link href="/fractional-cfo-jobs-remote" className="text-blue-600 hover:text-blue-700 underline">remote CFO opportunities</Link>.
            </p>
          </section>

          <div className="mb-12 rounded-xl bg-gradient-to-br from-blue-950/200 to-blue-600 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Maximize Your CFO Earnings</h2>
            <p className="mb-6 text-blue-950/20">
              Access salary benchmarks, rate negotiation guides, and client acquisition strategies to optimize your fractional CFO practice.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/fractional-cfo-hourly-rate" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-950/20">
                View Rate Benchmarks
              </Link>
              <Link href="/fractional-cfo-training" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700">
                Explore Training
              </Link>
            </div>
          </div>

          <section className="mt-12 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/fractional-cfo-hourly-rate" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Detailed Rate Guide</h3>
                <p className="mt-1 text-sm text-slate-600">Hourly and day rate breakdowns</p>
              </Link>
              <Link href="/fractional-cfo-salary" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">CFO Salary Overview</h3>
                <p className="mt-1 text-sm text-slate-600">Full salary analysis and trends</p>
              </Link>
              <Link href="/state-fractional-cfo-market-2025" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Market Report 2025</h3>
                <p className="mt-1 text-sm text-slate-600">Industry trends and outlook</p>
              </Link>
              <Link href="/how-to-become-fractional-cfo" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Career Transition Guide</h3>
                <p className="mt-1 text-sm text-slate-600">Launch your fractional CFO practice</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
