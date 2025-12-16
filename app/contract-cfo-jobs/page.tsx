import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Contract CFO Jobs UK: Fixed-Term CFO Opportunities 2025',
  description: 'Find contract CFO jobs in the UK. Guide to interim CFO roles, contract lengths, day rates, and how contract CFO positions differ from fractional and permanent roles.',
  openGraph: {
    title: 'Contract CFO Jobs UK: Fixed-Term CFO Opportunities 2025',
    description: 'Find contract CFO jobs in the UK. Guide to interim CFO roles, contract lengths, day rates, and how contract CFO positions differ from fractional and permanent roles.',
    type: 'article',
    url: 'https://fractional.quest/contract-cfo-jobs',
  },
  alternates: {
    canonical: 'https://fractional.quest/contract-cfo-jobs',
  },
}

export const revalidate = 3600

export default function ContractCFOJobsPage() {
  const faqItems = [
    {
      question: 'What is the difference between contract CFO and fractional CFO?',
      answer: 'Contract CFOs work full-time (5 days/week) for a fixed period (typically 6-18 months) for a single client, often filling a permanent vacancy gap or handling a specific transformation. Fractional CFOs work part-time (1-3 days/week) for multiple clients concurrently on an ongoing basis. Contract CFOs earn more monthly but less annually than established fractional CFOs with multiple clients.'
    },
    {
      question: 'How long do contract CFO positions typically last?',
      answer: 'Most contract CFO roles last 6-18 months. Common scenarios: 6-9 months to cover maternity/sabbatical leave, 9-12 months for interim coverage during CFO recruitment, 12-18 months for specific projects (fundraising, IPO prep, restructuring, system implementation). Some extend beyond initial terms if projects continue or permanent hire is delayed.'
    },
    {
      question: 'What day rates do contract CFOs earn?',
      answer: 'UK contract CFO day rates typically range £800-£1,500 depending on experience, location, and assignment complexity. This translates to £16K-£30K monthly (20 working days). Rates are generally 30-50% higher than equivalent permanent salary on a pro-rata basis to reflect contract nature and lack of benefits.'
    },
    {
      question: 'Do contract CFO jobs include benefits?',
      answer: 'No, contract CFOs are self-employed or operate through umbrella companies/limited companies. You do not receive pension, sick pay, holiday pay, or other employee benefits. However, day rates account for this - they\'re set higher than permanent equivalents to compensate for lack of benefits and job security.'
    },
    {
      question: 'Can contract CFO roles become permanent?',
      answer: 'Yes, this is relatively common. Many companies use contract CFO assignments as extended "try before you buy" arrangements. If you perform well and fit culturally, they may offer permanent conversion. However, this requires negotiation - contract rates are higher, so permanent salary will be significantly lower on a monthly basis (though you gain benefits and security).'
    },
    {
      question: 'How do I find contract CFO jobs?',
      answer: 'Best sources: specialist interim finance recruiters (Odgers Interim, Robert Half, FD Capital), LinkedIn networking with recruiters and direct company outreach, finance recruitment agencies, professional networks (ICAEW, ACCA job boards), and executive search firms handling interim placements. Most contract CFO roles are filled through recruiters rather than advertised publicly.'
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Contract CFO Jobs UK: Fixed-Term CFO Opportunities 2025',
            description: 'Find contract CFO jobs in the UK. Guide to interim CFO roles, contract lengths, day rates, and how contract CFO positions differ from fractional and permanent roles.',
            author: {
              '@type': 'Organization',
              name: 'Fractional Quest',
              url: 'https://fractional.quest'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Fractional Quest',
              url: 'https://fractional.quest',
              logo: {
                '@type': 'ImageObject',
                url: 'https://fractional.quest/logo.png'
              }
            },
            datePublished: '2025-01-16',
            dateModified: '2025-01-16',
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-950/20/30 to-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/fractional-cfo" className="hover:text-blue-600 transition-colors">Fractional CFO</Link>
            <span>/</span>
            <span className="text-slate-900">Contract Jobs</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contract CFO Jobs UK: Fixed-Term CFO Opportunities 2025
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Complete guide to contract (interim) CFO roles in the UK. Understand contract lengths, day rates, where to find opportunities, and how contract CFO work differs from permanent and fractional positions.
            </p>
          </header>

          {/* Quick Comparison */}
          <div className="mb-12 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Contract vs Fractional vs Permanent CFO</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Factor</th>
                    <th className="pb-3 px-4 text-left font-semibold text-blue-700">Contract CFO</th>
                    <th className="pb-3 px-4 text-left font-semibold text-blue-700">Fractional CFO</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-purple-700">Permanent CFO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Time commitment</td>
                    <td className="py-3 px-4 text-slate-600">Full-time (5 days/week)</td>
                    <td className="py-3 px-4 text-slate-600">Part-time (1-3 days/week)</td>
                    <td className="py-3 pl-4 text-slate-600">Full-time (5 days/week)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Duration</td>
                    <td className="py-3 px-4 text-slate-600">Fixed (6-18 months)</td>
                    <td className="py-3 px-4 text-slate-600">Ongoing (rolling)</td>
                    <td className="py-3 pl-4 text-slate-600">Indefinite</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Number of clients</td>
                    <td className="py-3 px-4 text-slate-600">One client at a time</td>
                    <td className="py-3 px-4 text-slate-600">3-6 concurrent clients</td>
                    <td className="py-3 pl-4 text-slate-600">One employer</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Monthly earnings</td>
                    <td className="py-3 px-4 text-slate-600">£16K-£30K</td>
                    <td className="py-3 px-4 text-slate-600">£8K-£15K (per client)</td>
                    <td className="py-3 pl-4 text-slate-600">£12.5K-£25K</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Benefits</td>
                    <td className="py-3 px-4 text-slate-600">None (self-employed)</td>
                    <td className="py-3 px-4 text-slate-600">None (self-employed)</td>
                    <td className="py-3 pl-4 text-slate-600">Pension, bonus, benefits</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Job security</td>
                    <td className="py-3 px-4 text-slate-600">Fixed end date</td>
                    <td className="py-3 px-4 text-slate-600">Multiple clients = stability</td>
                    <td className="py-3 pl-4 text-slate-600">Notice period protection</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Notice period</td>
                    <td className="py-3 px-4 text-slate-600">1-4 weeks typically</td>
                    <td className="py-3 px-4 text-slate-600">1-4 weeks typically</td>
                    <td className="py-3 pl-4 text-slate-600">3-6 months</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Best for</td>
                    <td className="py-3 px-4 text-slate-600">Covering gaps, specific projects</td>
                    <td className="py-3 px-4 text-slate-600">Part-time strategic CFO support</td>
                    <td className="py-3 pl-4 text-slate-600">Large companies, ongoing leadership</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Common Contract CFO Scenarios */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Common Contract CFO Scenarios</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Companies hire contract CFOs for specific situations requiring full-time but temporary finance leadership:
            </p>

            <div className="not-prose space-y-4">
              <div className="rounded-xl bg-blue-50 p-6 ring-1 ring-blue-100">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  <h3 className="text-lg font-bold text-blue-900">1. Interim Coverage (40% of contract CFO roles)</h3>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Filling the gap between one CFO leaving and a permanent replacement starting. Often occurs because:
                </p>
                <ul className="ml-6 space-y-1 text-sm text-slate-700">
                  <li>• Permanent CFO recruitment takes 4-6 months, leaving operational gap</li>
                  <li>• Sudden CFO departure requires immediate coverage while searching for replacement</li>
                  <li>• Company wants to evaluate CFO function before committing to permanent hire</li>
                </ul>
                <div className="mt-3 text-xs text-slate-600">
                  <strong>Typical duration:</strong> 6-12 months | <strong>Day rate:</strong> £900-£1,400
                </div>
              </div>

              <div className="rounded-xl bg-blue-950/20 p-6 ring-1 ring-blue-900/30">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-lg font-bold text-blue-900">2. Project-Based Assignments (30% of roles)</h3>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Specific initiatives requiring CFO-level oversight for defined period:
                </p>
                <ul className="ml-6 space-y-1 text-sm text-slate-700">
                  <li>• Fundraising (Series B/C, debt financing, IPO preparation)</li>
                  <li>• M&A transactions (buy-side or sell-side, post-merger integration)</li>
                  <li>• Financial system implementations (ERP, FP&A platforms)</li>
                  <li>• Turnaround or restructuring programs</li>
                  <li>• Finance transformation and team building</li>
                </ul>
                <div className="mt-3 text-xs text-slate-600">
                  <strong>Typical duration:</strong> 9-18 months | <strong>Day rate:</strong> £1,000-£1,800 (specialist rates)
                </div>
              </div>

              <div className="rounded-xl bg-purple-50 p-6 ring-1 ring-purple-100">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">🏖️</span>
                  <h3 className="text-lg font-bold text-purple-900">3. Maternity/Sabbatical Cover (15% of roles)</h3>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Temporary coverage while permanent CFO is on leave:
                </p>
                <ul className="ml-6 space-y-1 text-sm text-slate-700">
                  <li>• Maternity leave coverage (typically 6-12 months)</li>
                  <li>• Sabbatical or extended leave arrangements</li>
                  <li>• Medical leave (can be shorter notice but similar duration)</li>
                </ul>
                <div className="mt-3 text-xs text-slate-600">
                  <strong>Typical duration:</strong> 6-12 months | <strong>Day rate:</strong> £800-£1,200
                </div>
              </div>

              <div className="rounded-xl bg-orange-50 p-6 ring-1 ring-orange-100">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl">📈</span>
                  <h3 className="text-lg font-bold text-orange-900">4. Growth Phase Support (15% of roles)</h3>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Companies growing rapidly need immediate CFO support but aren't ready to commit to permanent:
                </p>
                <ul className="ml-6 space-y-1 text-sm text-slate-700">
                  <li>• Recently funded startups needing to establish financial infrastructure</li>
                  <li>• Companies scaling from £10M to £30M+ requiring upgraded finance function</li>
                  <li>• Bridging gap until company can afford/justify permanent CFO</li>
                </ul>
                <div className="mt-3 text-xs text-slate-600">
                  <strong>Typical duration:</strong> 12-18 months | <strong>Day rate:</strong> £900-£1,500
                </div>
              </div>
            </div>
          </section>

          {/* Day Rates */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Contract CFO Day Rates 2025</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Contract CFO rates vary by experience, location, assignment complexity, and market demand:
            </p>

            <div className="not-prose overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Experience Level</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Day Rate</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Monthly (20 days)</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-slate-900">Typical Company Size</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Financial Controller stepping up</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£600-£800</td>
                    <td className="py-3 px-4 text-slate-600">£12K-£16K</td>
                    <td className="py-3 pl-4 text-slate-600">£2M-£10M revenue</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Mid-level CFO (10-15 yrs)</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£800-£1,100</td>
                    <td className="py-3 px-4 text-slate-600">£16K-£22K</td>
                    <td className="py-3 pl-4 text-slate-600">£10M-£30M revenue</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Senior CFO (15-20+ yrs)</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,100-£1,500</td>
                    <td className="py-3 px-4 text-slate-600">£22K-£30K</td>
                    <td className="py-3 pl-4 text-slate-600">£30M-£100M+ revenue</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Specialist (M&A, IPO, turnaround)</td>
                    <td className="py-3 px-4 font-semibold text-slate-900">£1,400-£2,000+</td>
                    <td className="py-3 px-4 text-slate-600">£28K-£40K+</td>
                    <td className="py-3 pl-4 text-slate-600">Complex assignments, any size</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose mt-6 rounded-xl bg-slate-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Regional Rate Variations</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-slate-900">Higher Rates (+15-30%):</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• London and Southeast</li>
                    <li>• Financial services sector</li>
                    <li>• Urgent/short-notice assignments</li>
                    <li>• Highly specialized requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-slate-900">Lower Rates (-10-20%):</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Regional locations (North, Midlands)</li>
                    <li>• Longer-term contracts (12+ months)</li>
                    <li>• Less complex organizations</li>
                    <li>• Remote-only positions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Finding Jobs */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">How to Find Contract CFO Jobs</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Most contract CFO roles are filled through specialist recruiters rather than public job boards:
            </p>

            <h3 className="text-2xl font-bold text-slate-900">1. Specialist Interim Finance Recruiters</h3>
            <p className="text-slate-700">
              The primary channel for contract CFO placements. Build relationships with 5-10 key recruiters:
            </p>
            <ul className="text-slate-700">
              <li><strong>Odgers Interim:</strong> Specialist in interim executive placements including CFO roles</li>
              <li><strong>FD Capital:</strong> Focused on finance director and CFO interim positions</li>
              <li><strong>Robert Half:</strong> Large recruiter with strong interim finance practice</li>
              <li><strong>Michael Page Interim:</strong> Broad interim recruitment including senior finance</li>
              <li><strong>Hays Senior Finance:</strong> Interim and contract CFO/FD specialists</li>
              <li><strong>Venn Group:</strong> Financial services and corporate interim finance</li>
            </ul>

            <div className="not-prose mb-6 rounded-xl bg-blue-50 p-6 ring-1 ring-blue-100">
              <h4 className="mb-3 font-bold text-blue-900">Working Effectively with Recruiters:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-blue-600">→</span> <span>Register with 5-10 specialist firms (not 50+ - quality over quantity)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">→</span> <span>Build relationships: call your key contacts monthly even when not actively searching</span></li>
                <li className="flex gap-2"><span className="text-blue-600">→</span> <span>Be clear on your day rate expectations, notice period, and assignment preferences</span></li>
                <li className="flex gap-2"><span className="text-blue-600">→</span> <span>Provide detailed CV highlighting interim/project experience and quantified achievements</span></li>
                <li className="flex gap-2"><span className="text-blue-600">→</span> <span>Respond quickly to opportunities (contract CFO roles fill fast - within days)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">→</span> <span>Give feedback after interviews to help recruiters understand your preferences</span></li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">2. LinkedIn Networking & Direct Approach</h3>
            <p className="text-slate-700">
              Increasingly important channel, particularly for shorter-notice urgent requirements:
            </p>
            <ul className="text-slate-700">
              <li>Optimize LinkedIn headline: "Interim/Contract CFO | Available [Your Notice Period] | [Specializations]"</li>
              <li>Feature section should clearly state your availability and day rate range</li>
              <li>Connect with interim finance recruiters (search "interim CFO recruiter UK")</li>
              <li>Join relevant groups: "Interim Finance Professionals UK", "CFO Network"</li>
              <li>Monitor hashtags: #InterimCFO, #ContractCFO, #CFOJobs, #InterimFinance</li>
              <li>Direct outreach to companies in growth/change (recently funded, new CEO, M&A activity)</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">3. Professional Networks</h3>
            <ul className="text-slate-700">
              <li><strong>ICAEW/ACCA:</strong> Job boards include interim positions; networking events connect you with potential clients</li>
              <li><strong>CFO networks:</strong> CFO Connect, Finance Leaders Network (referrals from other CFOs)</li>
              <li><strong>Interim management associations:</strong> IIM (Institute of Interim Management)</li>
              <li><strong>Sector-specific groups:</strong> If you specialize (e.g., SaaS CFOs, manufacturing finance), join those communities</li>
            </ul>
          </section>

          {/* Contract Structure */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Contract Structure & Commercial Terms</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Understanding contract terms is essential for protecting yourself and maximizing earnings:
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Operating Models</h3>
            <div className="not-prose mb-6 space-y-3">
              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-bold text-slate-900">1. Limited Company (Personal Service Company)</h4>
                  <span className="rounded bg-blue-900/30 px-2 py-0.5 text-xs font-semibold text-blue-700">Most Common</span>
                </div>
                <p className="mb-2 text-sm text-slate-600">
                  You invoice through your limited company. Most tax-efficient if genuinely outside IR35.
                </p>
                <div className="text-xs text-slate-500">
                  <strong>Pros:</strong> Tax efficiency (19% corp tax + dividends), professional credibility, expense deductions<br/>
                  <strong>Cons:</strong> IR35 risk, admin overhead, requires accountant
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <h4 className="mb-2 font-bold text-slate-900">2. Umbrella Company</h4>
                <p className="mb-2 text-sm text-slate-600">
                  Umbrella company employs you, invoices client, and pays you salary minus their margin.
                </p>
                <div className="text-xs text-slate-500">
                  <strong>Pros:</strong> No IR35 risk, simple admin, statutory benefits (holiday pay, sick pay)<br/>
                  <strong>Cons:</strong> Higher tax burden (PAYE), umbrella margin (3-5%), lower take-home
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <h4 className="mb-2 font-bold text-slate-900">3. PAYE Contractor (via agency)</h4>
                <p className="mb-2 text-sm text-slate-600">
                  Agency employs you directly as temporary employee for the assignment duration.
                </p>
                <div className="text-xs text-slate-500">
                  <strong>Pros:</strong> Simple, no IR35 concerns, holiday pay included<br/>
                  <strong>Cons:</strong> Lowest take-home (PAYE + NI), agency takes significant margin
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Standard Contract Terms</h3>
            <ul className="text-slate-700">
              <li><strong>Notice period:</strong> 1-4 weeks (negotiate longer if you need security, shorter for flexibility)</li>
              <li><strong>Payment terms:</strong> Typically 30 days from invoice. Negotiate weekly or fortnightly timesheets for faster cash flow</li>
              <li><strong>Expenses:</strong> Clarify what's included (travel, accommodation, software). Usually reimbursed separately</li>
              <li><strong>Extension options:</strong> Include provisions for extending if project continues</li>
              <li><strong>Conversion terms:</strong> If they want to hire you permanently, agree fee/terms upfront (typically 15-25% of annual salary)</li>
              <li><strong>IP and confidentiality:</strong> Standard clauses protecting client information</li>
            </ul>

            <div className="not-prose mt-6 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
              <h4 className="mb-2 font-bold text-amber-900">⚠️ IR35 Considerations for Contract CFOs</h4>
              <p className="text-sm text-amber-800">
                For medium/large clients (£10.2M+ revenue), they determine IR35 status. Full-time contract CFO roles have higher IR35 risk than part-time fractional work due to: working exclusively for one client, operating from their premises, integrated into their team, and supervised management. Many clients will apply inside IR35 determination for contract CFO roles. Factor this into rate negotiations - you need 20-30% higher rate to compensate for inside IR35 tax treatment.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mb-12 rounded-xl bg-gradient-to-br from-blue-950/200 to-blue-600 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Find Your Next Contract CFO Role</h2>
            <p className="mb-6 text-blue-950/20">
              Fractional Quest connects experienced finance professionals with contract and fractional CFO opportunities across the UK.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/fractional-cfo-jobs-remote"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-950/20"
              >
                Browse Remote CFO Jobs
              </Link>
              <Link
                href="/how-to-become-fractional-cfo"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700"
              >
                Career Transition Guide
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ items={faqItems} title="Contract CFO Jobs FAQs" />

          {/* Related Resources */}
          <section className="mt-12 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/fractional-cfo-jobs-remote" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Remote Fractional CFO Jobs</h3>
                <p className="mt-1 text-sm text-slate-600">Find location-independent CFO opportunities</p>
              </Link>
              <Link href="/fractional-cfo-vs-full-time" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional vs Full-Time CFO</h3>
                <p className="mt-1 text-sm text-slate-600">Comprehensive comparison guide</p>
              </Link>
              <Link href="/fractional-cfo-hourly-rate" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">CFO Rate Benchmarks 2025</h3>
                <p className="mt-1 text-sm text-slate-600">Day rate and hourly rate data</p>
              </Link>
              <Link href="/fractional-controller-jobs" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional Controller Jobs</h3>
                <p className="mt-1 text-sm text-slate-600">Entry route to fractional finance</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
