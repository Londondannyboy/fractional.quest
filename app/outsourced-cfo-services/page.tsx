import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Outsourced CFO Services UK: External CFO Solutions 2025',
  description: 'Outsourced CFO services explained. How outsourcing your CFO function works, benefits, costs, and comparison with fractional and in-house CFO options.',
  openGraph: {
    title: 'Outsourced CFO Services UK: External CFO Solutions 2025',
    description: 'Complete guide to outsourced CFO services. Benefits, costs, and how it compares to fractional and in-house CFOs.',
    url: 'https://fractional.quest/outsourced-cfo-services',
  },
  alternates: {
    canonical: 'https://fractional.quest/outsourced-cfo-services',
  },
}

export const revalidate = 3600

export default function OutsourcedCFOServicesPage() {
  const faqItems = [
    {
      question: 'What is the difference between outsourced CFO and fractional CFO?',
      answer: 'The terms are often used interchangeably. Both provide external CFO services on a part-time basis. "Outsourced CFO" sometimes implies a company providing CFO services, while "fractional CFO" can refer to either companies or independent practitioners. Functionally, they deliver the same strategic finance leadership without full-time commitment.'
    },
    {
      question: 'How much do outsourced CFO services cost?',
      answer: 'Outsourced CFO services typically cost £30K-£150K annually depending on time commitment (1-3 days per week) and provider type. Companies charge £1,200-£2,000/day, while independent fractional CFOs charge £800-£1,800/day. This is 60-80% less expensive than employing a full-time CFO (£150K-£300K+ annually).'
    },
    {
      question: 'What services do outsourced CFOs provide?',
      answer: 'Outsourced CFOs provide strategic finance leadership including: financial planning and analysis, fundraising support (equity and debt), M&A advisory, board reporting and investor relations, budgeting and forecasting, cash flow management, systems implementation, finance team building, and strategic business advisory. They act as your external CFO for all strategic financial matters.'
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Outsourced CFO Services UK: External CFO Solutions 2025',
            description: 'Complete guide to outsourced CFO services, benefits, costs, and provider comparison.',
            author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
            publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
            datePublished: '2025-01-16',
            dateModified: '2025-01-16',
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/fractional-cfo" className="hover:text-emerald-600 transition-colors">Fractional CFO</Link>
            <span>/</span>
            <span className="text-slate-900">Outsourced CFO Services</span>
          </nav>

          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Outsourced CFO Services UK: External CFO Solutions 2025
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Complete guide to outsourcing your CFO function. Understand benefits, costs, provider types, and how outsourced CFO services compare to fractional and in-house options.
            </p>
          </header>

          <div className="mb-12 rounded-xl bg-blue-50 p-6 ring-1 ring-blue-100">
            <h2 className="mb-3 text-xl font-bold text-blue-900">Outsourced CFO = Fractional CFO</h2>
            <p className="text-slate-700">
              "Outsourced CFO" and "<Link href="/fractional-cfo" className="text-blue-600 hover:text-blue-700 underline font-semibold">fractional CFO</Link>" are largely synonymous terms. Both describe external CFO services provided on a part-time basis without the full-time employment commitment. The terminology varies by provider preference, but the service delivery model is identical: strategic finance leadership for a fraction of full-time cost.
            </p>
          </div>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">What is an Outsourced CFO?</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              An outsourced CFO is a senior finance professional who provides CFO-level services to your business on a part-time, external basis. Instead of hiring a full-time employee, you engage an experienced CFO (or CFO services firm) for 1-3 days per week.
            </p>

            <h3 className="text-2xl font-bold text-slate-900">How Outsourced CFO Services Work</h3>
            <div className="not-prose mb-6 space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-2 font-bold text-slate-900">1. Scoping & Engagement</div>
                <p className="text-sm text-slate-600">
                  Initial consultation to understand your needs, company stage, and strategic priorities. CFO proposes engagement structure (days per week, key deliverables, pricing).
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-2 font-bold text-slate-900">2. Onboarding (30-60 days)</div>
                <p className="text-sm text-slate-600">
                  CFO conducts financial assessment, reviews systems and processes, meets key stakeholders, establishes reporting cadence, and identifies quick wins.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-2 font-bold text-slate-900">3. Ongoing Strategic Leadership</div>
                <p className="text-sm text-slate-600">
                  Regular strategic input (weekly/fortnightly meetings), monthly board reporting, quarterly planning, ad-hoc advisory on major decisions, and project-based work (fundraising, M&A, systems).
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Core Services Provided</h3>
            <ul className="text-slate-700">
              <li><strong>Strategic Financial Planning:</strong> Long-term financial modeling, scenario analysis, growth strategy</li>
              <li><strong>Fundraising Support:</strong> Investor materials, due diligence, term sheet negotiation, cap table management</li>
              <li><strong>Financial Reporting:</strong> Board packs, investor updates, management accounts, KPI frameworks</li>
              <li><strong>Cash Management:</strong> Forecasting, working capital optimization, runway analysis</li>
              <li><strong>Systems & Process:</strong> Accounting system selection, FP&A platform implementation, automation</li>
              <li><strong>Team Building:</strong> Finance team recruitment, structure design, capability development</li>
              <li><strong>M&A Advisory:</strong> Buy-side or sell-side support, valuation, integration planning</li>
            </ul>
          </section>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Benefits of Outsourcing Your CFO Function</h2>

            <div className="not-prose grid gap-6 md:grid-cols-2 mb-6">
              <div className="rounded-xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
                <h3 className="mb-3 text-lg font-bold text-emerald-900">Cost Efficiency</h3>
                <p className="text-sm text-slate-700">
                  Save 60-80% vs full-time CFO. £30K-£120K annually instead of £150K-£300K+. No benefits, pension, NI, or recruitment costs.
                </p>
              </div>
              <div className="rounded-xl bg-blue-50 p-6 ring-1 ring-blue-100">
                <h3 className="mb-3 text-lg font-bold text-blue-900">Immediate Expertise</h3>
                <p className="text-sm text-slate-700">
                  Access experienced CFOs (15-25 years) within 2-4 weeks. No 3-6 month recruitment process. Start immediately with proven professionals.
                </p>
              </div>
              <div className="rounded-xl bg-purple-50 p-6 ring-1 ring-purple-100">
                <h3 className="mb-3 text-lg font-bold text-purple-900">Scalability</h3>
                <p className="text-sm text-slate-700">
                  Flexibly adjust commitment (1-4 days/week) as needs change. Scale up for fundraising/M&A, scale down during steady state.
                </p>
              </div>
              <div className="rounded-xl bg-orange-50 p-6 ring-1 ring-orange-100">
                <h3 className="mb-3 text-lg font-bold text-orange-900">Diverse Experience</h3>
                <p className="text-sm text-slate-700">
                  Outsourced CFOs bring cross-industry insights from working with multiple companies. Broader perspective than single-company CFOs.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Outsourced vs In-House vs Fractional CFO</h2>
            <div className="not-prose overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Factor</th>
                    <th className="pb-3 px-4 text-left font-semibold text-emerald-700">Outsourced/Fractional CFO</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-blue-700">In-House CFO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Annual cost</td>
                    <td className="py-3 px-4 text-slate-600">£30K-£120K</td>
                    <td className="py-3 pl-4 text-slate-600">£150K-£300K+</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Time to hire</td>
                    <td className="py-3 px-4 text-slate-600">2-4 weeks</td>
                    <td className="py-3 pl-4 text-slate-600">3-6 months</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Commitment</td>
                    <td className="py-3 px-4 text-slate-600">1-3 days/week, flexible</td>
                    <td className="py-3 pl-4 text-slate-600">5 days/week, fixed</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Best for</td>
                    <td className="py-3 px-4 text-slate-600">£1M-£50M revenue</td>
                    <td className="py-3 pl-4 text-slate-600">£50M+ revenue</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              See full comparison in our <Link href="/fractional-cfo-vs-full-time" className="text-emerald-600 hover:text-emerald-700 underline">fractional vs full-time CFO guide</Link>.
            </p>
          </section>

          <div className="mb-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Find Outsourced CFO Services</h2>
            <p className="mb-6 text-emerald-50">
              Fractional Quest connects businesses with experienced outsourced/fractional CFO professionals and firms across the UK.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/fractional-cfo" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 transition-all hover:bg-emerald-50">
                Explore CFO Services
              </Link>
              <Link href="/fractional-cfo-cost" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-700">
                See Pricing
              </Link>
            </div>
          </div>

          <FAQ items={faqItems} title="Outsourced CFO Services FAQs" />

          <section className="mt-12 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/fractional-cfo" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600">Fractional CFO Guide</h3>
                <p className="mt-1 text-sm text-slate-600">Complete guide to fractional CFO services</p>
              </Link>
              <Link href="/fractional-cfo-companies" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600">CFO Service Providers</h3>
                <p className="mt-1 text-sm text-slate-600">Compare CFO companies and platforms</p>
              </Link>
              <Link href="/fractional-cfo-cost" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600">CFO Cost Guide</h3>
                <p className="mt-1 text-sm text-slate-600">Detailed pricing breakdown</p>
              </Link>
              <Link href="/virtual-cfo-services" className="group rounded-lg bg-white p-4 shadow-sm hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600">Virtual CFO Services</h3>
                <p className="mt-1 text-sm text-slate-600">Remote CFO solutions</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
