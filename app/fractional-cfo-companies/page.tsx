import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Fractional CFO Companies UK',
  description: 'Compare UK fractional CFO companies, platforms, individual practitioners.',
  openGraph: {
    title: 'Top Fractional CFO Companies UK: Comparison Guide 2025',
    description: 'Compare UK fractional CFO companies, platforms, and individual practitioners. Independent analysis of pricing, services, and fit for different business needs.',
    type: 'article',
    url: 'https://fractional.quest/fractional-cfo-companies',
  },
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-companies',
  },
}

export const revalidate = 3600

export default function FractionalCFOCompaniesPage() {
  const faqItems = [
    {
      question: 'What is the difference between fractional CFO companies and individual practitioners?',
      answer: 'Fractional CFO companies provide multiple CFO professionals as a service, offering backup coverage and broader expertise. Individual practitioners work independently, typically offering more personalized service and direct relationships but without team backup. Companies generally charge premium rates (20-40% more) for the additional infrastructure and coverage.'
    },
    {
      question: 'How do I choose the right fractional CFO company for my business?',
      answer: 'Consider your industry (look for sector expertise), company stage (ensure they work with similar-sized businesses), engagement model preference (team vs individual), budget (£30K-£150K+ annually), and specific needs (fundraising, M&A, turnaround). Request case studies and speak to their current clients before deciding.'
    },
    {
      question: 'Are fractional CFO platforms worth the premium pricing?',
      answer: 'Platforms offer benefits like vetted CFO networks, backup coverage, standardized processes, and technology integration. They\'re worth the 20-40% premium if you value these features, particularly continuity of service. For straightforward needs, an individual practitioner may offer better value.'
    },
    {
      question: 'Can I switch fractional CFO companies if I\'m not satisfied?',
      answer: 'Yes, most engagements have 1-3 month notice periods. Ensure your contract includes knowledge transfer provisions and that critical financial documentation is stored in systems you own (not proprietary to the CFO company) to enable smooth transitions.'
    },
    {
      question: 'Do fractional CFO companies offer specialized industry expertise?',
      answer: 'Yes, many companies specialize by sector (SaaS, ecommerce, manufacturing, professional services) or stage (startup, scale-up, turnaround). Some maintain generalist teams with broad experience. Match the company\'s specialization to your specific industry and stage for best results.'
    },
    {
      question: 'How quickly can fractional CFO companies deploy someone?',
      answer: 'Most companies can assign a CFO within 2-4 weeks after initial consultation and scoping. Individual practitioners may start faster (1-2 weeks) as they don\'t require internal matching processes. Both are significantly faster than recruiting a full-time CFO (3-6 months).'
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
            headline: 'Top Fractional CFO Companies UK: Comparison Guide 2025',
            description: 'Compare UK fractional CFO companies, platforms, and individual practitioners. Independent analysis of pricing, services, and fit for different business needs.',
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
            <span className="text-slate-900">CFO Companies</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Top Fractional CFO Companies UK: Comparison Guide 2025
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Independent comparison of UK fractional CFO companies, platforms, and individual practitioners. Find the right financial leadership partner for your business stage and needs.
            </p>
          </header>

          {/* Comparison Framework */}
          <div className="mb-12 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Three Types of Fractional CFO Providers</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-6 ring-1 ring-blue-100">
                <h3 className="mb-3 text-lg font-bold text-blue-900">1. Fractional CFO Firms</h3>
                <p className="mb-4 text-sm text-slate-700">Established companies with teams of CFO professionals</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>Team coverage & backup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>Standardized processes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>Multiple specializations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>Premium pricing</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-blue-950/20 p-6 ring-1 ring-blue-900/30">
                <h3 className="mb-3 text-lg font-bold text-blue-900">2. CFO Platforms</h3>
                <p className="mb-4 text-sm text-slate-700">Marketplaces connecting businesses with vetted CFO talent</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>Vetted CFO network</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>Technology integration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>Flexible matching</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-blue-600">✓</span>
                    <span>Mid-tier pricing</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-purple-50 p-6 ring-1 ring-purple-100">
                <h3 className="mb-3 text-lg font-bold text-purple-900">3. Individual Practitioners</h3>
                <p className="mb-4 text-sm text-slate-700">Experienced CFOs operating independently</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-purple-600">✓</span>
                    <span>Direct relationship</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-purple-600">✓</span>
                    <span>Personalized service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-purple-600">✓</span>
                    <span>Deep expertise focus</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 text-purple-600">✓</span>
                    <span>Competitive pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Pricing Comparison by Provider Type</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Pricing varies significantly based on provider type, CFO experience, and engagement model. Here's what to expect across the UK market:
            </p>

            <div className="not-prose overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Provider Type</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Daily Rate Range</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Annual Cost (2 days/week)</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-slate-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-blue-700">CFO Firms (Premium)</td>
                    <td className="py-3 px-4 text-slate-600">£1,500-£2,500</td>
                    <td className="py-3 px-4 text-slate-600">£144K-£240K</td>
                    <td className="py-3 pl-4 text-slate-600">£20M+ revenue, complex needs</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-blue-700">CFO Firms (Standard)</td>
                    <td className="py-3 px-4 text-slate-600">£1,200-£1,800</td>
                    <td className="py-3 px-4 text-slate-600">£115K-£173K</td>
                    <td className="py-3 pl-4 text-slate-600">£10M-£30M revenue</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-blue-700">CFO Platforms</td>
                    <td className="py-3 px-4 text-slate-600">£1,000-£1,600</td>
                    <td className="py-3 px-4 text-slate-600">£96K-£154K</td>
                    <td className="py-3 pl-4 text-slate-600">£5M-£25M revenue, tech-forward</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-purple-700">Individual (Experienced)</td>
                    <td className="py-3 px-4 text-slate-600">£1,200-£1,800</td>
                    <td className="py-3 px-4 text-slate-600">£115K-£173K</td>
                    <td className="py-3 pl-4 text-slate-600">Sector specialists, IPO experience</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-purple-700">Individual (Mid-level)</td>
                    <td className="py-3 px-4 text-slate-600">£800-£1,200</td>
                    <td className="py-3 px-4 text-slate-600">£77K-£115K</td>
                    <td className="py-3 pl-4 text-slate-600">£2M-£15M revenue, startups</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-slate-600">
              Rates typically quoted exclude VAT. Most CFOs are VAT-registered, so add 20% if your business cannot reclaim VAT. See detailed pricing breakdown in our <Link href="/fractional-cfo-cost" className="text-blue-600 hover:text-blue-700 underline">CFO cost guide</Link>.
            </p>
          </section>

          {/* Selection Criteria */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Key Selection Criteria</h2>

            <h3 className="text-2xl font-bold text-slate-900">1. Industry & Sector Expertise</h3>
            <p className="text-slate-700">
              Different companies specialize in different sectors. Match their expertise to your industry:
            </p>
            <ul className="text-slate-700">
              <li><strong>SaaS & Technology:</strong> Look for CFOs with subscription revenue modeling, ARR metrics, and venture capital experience</li>
              <li><strong>Ecommerce & Retail:</strong> Need inventory management, multi-channel attribution, and working capital expertise</li>
              <li><strong>Professional Services:</strong> Require project accounting, utilization metrics, and partner compensation modeling</li>
              <li><strong>Manufacturing:</strong> Essential to have cost accounting, supply chain finance, and ERP implementation experience</li>
              <li><strong>Healthcare & Life Sciences:</strong> Must understand regulatory requirements, grant accounting, and research funding</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">2. Company Stage Specialization</h3>
            <p className="text-slate-700">
              Ensure the company works with businesses at your stage:
            </p>
            <ul className="text-slate-700">
              <li><strong>Early-Stage (£1M-£5M):</strong> Foundation-building, basic reporting, early fundraising</li>
              <li><strong>Growth Stage (£5M-£20M):</strong> Scaling systems, Series A/B fundraising, team building</li>
              <li><strong>Scale-Up (£20M-£50M):</strong> Complex reporting, Series C+, pre-IPO readiness</li>
              <li><strong>Established (£50M+):</strong> Multi-entity management, M&A, exit preparation</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">3. Engagement Model & Flexibility</h3>
            <p className="text-slate-700">
              Different providers offer different engagement structures:
            </p>
            <div className="not-prose mb-6 space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <h4 className="mb-2 font-bold text-slate-900">Retainer Model (Most Common)</h4>
                <p className="text-sm text-slate-600">
                  Fixed monthly fee for defined number of days. Typically 1-3 days per week. Best for ongoing strategic work.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <h4 className="mb-2 font-bold text-slate-900">Project-Based Model</h4>
                <p className="text-sm text-slate-600">
                  Fixed fee for specific deliverables (fundraising, M&A, system implementation). Best for defined initiatives.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <h4 className="mb-2 font-bold text-slate-900">Hybrid Model</h4>
                <p className="text-sm text-slate-600">
                  Base retainer plus project fees. Covers ongoing oversight plus specific initiatives. Offers balanced commitment.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">4. Team Coverage & Backup</h3>
            <p className="text-slate-700">
              Consider what happens when your primary CFO is unavailable:
            </p>
            <ul className="text-slate-700">
              <li><strong>CFO Firms:</strong> Provide backup CFO coverage, team redundancy, and continuity during holidays/illness</li>
              <li><strong>Platforms:</strong> Can reassign from their network if needed, but may require transition period</li>
              <li><strong>Individual Practitioners:</strong> Limited backup unless they have trusted associates; consider their holiday coverage plan</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">5. Technology & Systems Expertise</h3>
            <p className="text-slate-700">
              Evaluate their proficiency with tools you use or need:
            </p>
            <ul className="text-slate-700">
              <li><strong>Accounting systems:</strong> Xero, QuickBooks, Sage, NetSuite</li>
              <li><strong>FP&A tools:</strong> Adaptive Insights, Anaplan, Cube, Excel/Google Sheets modeling</li>
              <li><strong>BI platforms:</strong> Power BI, Tableau, Looker</li>
              <li><strong>ERP systems:</strong> SAP, Oracle, Microsoft Dynamics (for larger businesses)</li>
            </ul>
          </section>

          {/* Market Landscape */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">UK Fractional CFO Market Landscape</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The UK fractional CFO market has matured significantly. Here's what characterizes different provider types:
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Established CFO Firms</h3>
            <p className="text-slate-700">
              These are traditional professional services firms or specialized CFO service providers with teams of 5-50+ CFO professionals:
            </p>
            <div className="not-prose mb-6 rounded-xl bg-blue-50 p-6 ring-1 ring-blue-100">
              <h4 className="mb-3 font-bold text-blue-900">Characteristics:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Multiple CFOs with different sector specializations</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Standardized methodologies and documentation</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Support teams (analysts, bookkeepers, system specialists)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Formal onboarding and knowledge transfer processes</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Premium pricing (£1,200-£2,500/day)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Professional indemnity insurance and QA processes</span></li>
              </ul>
              <p className="mt-4 text-sm text-slate-700">
                <strong>Best for:</strong> Companies £10M+ revenue needing comprehensive coverage, or businesses requiring multiple finance specializations beyond CFO level.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">CFO Platforms & Marketplaces</h3>
            <p className="text-slate-700">
              Technology-enabled platforms that match businesses with independent CFOs from their vetted network:
            </p>
            <div className="not-prose mb-6 rounded-xl bg-blue-950/20 p-6 ring-1 ring-blue-900/30">
              <h4 className="mb-3 font-bold text-blue-900">Characteristics:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Curated network of independent CFO professionals</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Technology-first approach with integrated dashboards</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Matching algorithms based on industry, stage, needs</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Flexible engagement terms and scaling</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Mid-tier pricing (£1,000-£1,600/day)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Can switch CFOs within network if mismatch occurs</span></li>
              </ul>
              <p className="mt-4 text-sm text-slate-700">
                <strong>Best for:</strong> Tech-forward companies £5M-£25M revenue who value transparency, technology integration, and flexible matching.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Individual Practitioners</h3>
            <p className="text-slate-700">
              Experienced CFO professionals operating independently, often trading through limited companies:
            </p>
            <div className="not-prose mb-6 rounded-xl bg-purple-50 p-6 ring-1 ring-purple-100">
              <h4 className="mb-3 font-bold text-purple-900">Characteristics:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-purple-600">•</span> <span>15-30 years finance experience, typically ex-CFO of larger companies</span></li>
                <li className="flex gap-2"><span className="text-purple-600">•</span> <span>Direct relationship and personalized service</span></li>
                <li className="flex gap-2"><span className="text-purple-600">•</span> <span>Often specialize in specific sectors or situations (turnaround, fundraising, exits)</span></li>
                <li className="flex gap-2"><span className="text-purple-600">•</span> <span>Portfolio of 3-6 concurrent clients</span></li>
                <li className="flex gap-2"><span className="text-purple-600">•</span> <span>Competitive pricing (£800-£1,800/day depending on experience)</span></li>
                <li className="flex gap-2"><span className="text-purple-600">•</span> <span>Built on referrals and reputation</span></li>
              </ul>
              <p className="mt-4 text-sm text-slate-700">
                <strong>Best for:</strong> Companies £2M-£20M revenue seeking senior expertise, direct relationships, and value-focused pricing. Particularly effective when sector specialization is critical.
              </p>
            </div>
          </section>

          {/* Red Flags */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Red Flags to Watch For</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Not all fractional CFO providers are equal. Watch for these warning signs:
            </p>

            <div className="not-prose space-y-3">
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-1 font-bold text-red-900">🚩 Lack of sector experience</h4>
                <p className="text-sm text-red-800">
                  If they can't provide case studies or references from your industry, they may not understand your specific financial challenges.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-1 font-bold text-red-900">🚩 Vague pricing structures</h4>
                <p className="text-sm text-red-800">
                  Reputable providers give clear day rates or project fees upfront. Avoid those who won't commit to pricing until after extensive scoping.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-1 font-bold text-red-900">🚩 No references or case studies</h4>
                <p className="text-sm text-red-800">
                  Established CFOs should readily provide references from current or past clients. Refusal or inability to do so is concerning.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-1 font-bold text-red-900">🚩 Pushing for long-term contracts upfront</h4>
                <p className="text-sm text-red-800">
                  Quality CFOs are comfortable with 3-6 month initial terms. Insistence on 12-24 month contracts before proving value suggests desperation.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-1 font-bold text-red-900">🚩 Junior CFOs presented as senior</h4>
                <p className="text-sm text-red-800">
                  Ask about their experience level directly. Some firms present Financial Controllers as "CFOs" to justify higher rates.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="mb-1 font-bold text-red-900">🚩 Proprietary systems lock-in</h4>
                <p className="text-sm text-red-800">
                  If they insist on using their proprietary systems and make it difficult to export your data, you're creating dependency and exit friction.
                </p>
              </div>
            </div>
          </section>

          {/* Due Diligence Questions */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Due Diligence Questions to Ask</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Ask these questions during your initial consultations:
            </p>

            <div className="not-prose space-y-4">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Experience & Credentials</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• What is the background of the specific CFO who will work with us? (Ask for CV/LinkedIn)</li>
                  <li>• How many clients in our sector have you worked with in the past 3 years?</li>
                  <li>• Can you provide 2-3 references from similar-sized businesses?</li>
                  <li>• What relevant qualifications do you hold (ACA, ACCA, CIMA, CFA)?</li>
                  <li>• Have you successfully completed [specific project type we need] before?</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Service Delivery</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• How many other clients does our assigned CFO currently serve?</li>
                  <li>• What is your typical response time for urgent matters?</li>
                  <li>• Who provides backup coverage when our CFO is on holiday or ill?</li>
                  <li>• What communication cadence do you recommend (weekly, fortnightly)?</li>
                  <li>• Do you work on-site, remotely, or hybrid? What's your preference?</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Commercial Terms</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• What is your day rate, and what does it include?</li>
                  <li>• What is the minimum engagement period and notice period?</li>
                  <li>• Are there additional fees for specific projects (fundraising, M&A)?</li>
                  <li>• What systems/tools costs should we budget for?</li>
                  <li>• Do you carry professional indemnity insurance? What level?</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-4 text-lg font-bold text-slate-900">Approach & Methodology</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• What is your process for onboarding and the first 90 days?</li>
                  <li>• What deliverables/reports can we expect monthly?</li>
                  <li>• How do you approach building our finance team over time?</li>
                  <li>• What KPIs or metrics would you recommend we track?</li>
                  <li>• How do you ensure knowledge transfer and documentation?</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Decision Matrix */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Choose the Right Provider Type for Your Situation</h2>

            <div className="not-prose overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Your Situation</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Best Provider Type</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-slate-900">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">£2M-£8M revenue startup</td>
                    <td className="py-3 px-4 font-medium text-purple-700">Individual Practitioner</td>
                    <td className="py-3 pl-4 text-slate-600">Cost-effective, personalized, sufficient for complexity level</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">£8M-£25M tech scaleup</td>
                    <td className="py-3 px-4 font-medium text-blue-700">CFO Platform</td>
                    <td className="py-3 pl-4 text-slate-600">Tech integration, flexibility, quality vetted network</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">£25M+ complex operations</td>
                    <td className="py-3 px-4 font-medium text-blue-700">CFO Firm</td>
                    <td className="py-3 pl-4 text-slate-600">Team coverage, multiple specializations, infrastructure</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Specific project (fundraise, M&A)</td>
                    <td className="py-3 px-4 font-medium text-purple-700">Individual Specialist</td>
                    <td className="py-3 pl-4 text-slate-600">Deep expertise in specific domain, project-focused</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">Turnaround or restructuring</td>
                    <td className="py-3 px-4 font-medium text-blue-700">CFO Firm or Specialist</td>
                    <td className="py-3 pl-4 text-slate-600">Experience with challenging situations, team support</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-slate-700">PE-backed portfolio company</td>
                    <td className="py-3 px-4 font-medium text-blue-700">CFO Firm</td>
                    <td className="py-3 pl-4 text-slate-600">PE reporting expertise, credibility, standardized approach</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mb-12 rounded-xl bg-gradient-to-br from-blue-950/200 to-blue-600 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Find Your Perfect CFO Match</h2>
            <p className="mb-6 text-blue-950/20">
              Fractional Quest connects you with vetted fractional CFO companies and individual practitioners matched to your industry, stage, and specific needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/fractional-cfo"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-950/20"
              >
                Explore Fractional CFO Options
              </Link>
              <Link
                href="/fractional-cfo-cost"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700"
              >
                Compare Pricing
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ items={faqItems} title="Fractional CFO Companies FAQs" />

          {/* Related Resources */}
          <section className="mt-12 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/fractional-cfo-vs-full-time" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional vs Full-Time CFO</h3>
                <p className="mt-1 text-sm text-slate-600">Complete comparison to help you decide</p>
              </Link>
              <Link href="/fractional-cfo-cost" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional CFO Cost Guide</h3>
                <p className="mt-1 text-sm text-slate-600">Detailed pricing breakdown by provider type</p>
              </Link>
              <Link href="/what-is-fractional-cfo" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">What is a Fractional CFO?</h3>
                <p className="mt-1 text-sm text-slate-600">Understanding the fractional CFO role</p>
              </Link>
              <Link href="/fractional-cfo-hourly-rate" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">CFO Hourly Rate Benchmarks</h3>
                <p className="mt-1 text-sm text-slate-600">2025 rate data by experience and location</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
