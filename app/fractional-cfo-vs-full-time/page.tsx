import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { StrategicComparisonInfographic, ComparisonData } from '@/components/infographics/StrategicComparisonInfographic'

export const metadata: Metadata = {
  title: 'Fractional vs Full-Time CFO',
  description: 'Fractional CFO vs Full-Time comparison. Costs, benefits, when each makes sense.',
  openGraph: {
    title: 'Fractional CFO vs Full-Time CFO: Complete Comparison Guide 2025',
    description: 'Detailed comparison of Fractional vs Full-Time CFO: costs, benefits, decision framework, and when each makes sense for your business in 2025.',
    type: 'article',
    url: 'https://fractional.quest/fractional-cfo-vs-full-time',
  },
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-vs-full-time',
  },
}

export const revalidate = 3600

const cfoComparisonData: ComparisonData = {
  role: 'CFO',
  fullTime: {
    baseSalary: 180000,
    bonusesBenefits: 61840,
    recruitmentTraining: 41000,
    hiddenCosts: 20000,
    total: 302840,
  },
  fractional: {
    fee: 115200,
    total: 115200,
    daysPerWeek: 2,
  },
  strengths: {
    fractional: 'Superior for fundraising rounds, system implementations, and high-growth stages where speed and cost-efficiency are paramount.',
    fullTime: 'Essential for large-scale operations, IPO readiness, and companies requiring daily C-suite presence and long-term cultural leadership.',
  }
}

export default function FractionalVsFullTimeCFOPage() {
  const faqItems = [
    {
      question: 'When should I hire a full-time CFO instead of a fractional CFO?',
      answer: 'Hire a full-time CFO when your company has £50M+ revenue, requires daily strategic financial leadership, is preparing for IPO, or has complex multi-entity operations requiring constant oversight. Full-time CFOs are essential for large organisations with ongoing M&A activity or significant regulatory requirements.'
    },
    {
      question: 'Can a fractional CFO provide the same quality as a full-time CFO?',
      answer: 'Yes. Fractional CFOs are typically experienced professionals who have served as full-time CFOs previously. They bring the same expertise and strategic capabilities, just on a part-time basis. Many fractional CFOs have more diverse experience having worked across multiple companies and industries.'
    },
    {
      question: 'What is the cost difference between fractional and full-time CFO?',
      answer: 'A full-time CFO costs £150,000-£300,000+ annually (including benefits, taxes, and overheads), while a fractional CFO typically costs £30,000-£120,000 annually for 1-3 days per week. This represents 60-80% cost savings for most businesses.'
    },
    {
      question: 'How quickly can I hire a fractional CFO compared to full-time?',
      answer: 'Fractional CFO recruitment typically takes 2-4 weeks versus 3-6 months for a full-time CFO. The hiring process is faster because you\'re engaging an experienced professional who can start immediately without lengthy notice periods.'
    },
    {
      question: 'Can I transition from fractional to full-time CFO later?',
      answer: 'Absolutely. Many companies start with a fractional CFO and transition to full-time as they scale. Some fractional CFOs may transition into the full-time role themselves, or they can help recruit and onboard a full-time successor.'
    },
    {
      question: 'What are the risks of choosing fractional over full-time?',
      answer: 'The main risks are limited availability during crisis situations, potential knowledge gaps if engagement ends abruptly, and divided attention across multiple clients. These can be mitigated through clear contracts, knowledge documentation processes, and selecting experienced fractional CFOs with established practices.'
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
            headline: 'Fractional CFO vs Full-Time CFO: Complete Comparison Guide 2025',
            description: 'Detailed comparison of Fractional vs Full-Time CFO: costs, benefits, decision framework, and when each makes sense for your business in 2025.',
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
            <span className="text-slate-900">Fractional vs Full-Time</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Fractional CFO vs Full-Time CFO: Complete Comparison Guide 2025
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Should you hire a fractional or full-time CFO? This comprehensive comparison covers costs, benefits, and a decision framework to help you choose the right financial leadership for your business stage.
            </p>
          </header>

          {/* Quick Decision Matrix */}
          <div className="mb-12 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Quick Decision Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Factor</th>
                    <th className="pb-3 px-4 text-left font-semibold text-blue-600">Fractional CFO</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-blue-600">Full-Time CFO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Best for revenue</td>
                    <td className="py-3 px-4 text-slate-600">£1M-£50M</td>
                    <td className="py-3 pl-4 text-slate-600">£50M+</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Annual cost</td>
                    <td className="py-3 px-4 text-slate-600">£30K-£120K</td>
                    <td className="py-3 pl-4 text-slate-600">£150K-£300K+</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Time commitment</td>
                    <td className="py-3 px-4 text-slate-600">1-3 days/week</td>
                    <td className="py-3 pl-4 text-slate-600">5 days/week</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Hiring speed</td>
                    <td className="py-3 px-4 text-slate-600">2-4 weeks</td>
                    <td className="py-3 pl-4 text-slate-600">3-6 months</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Flexibility</td>
                    <td className="py-3 px-4 text-slate-600">High (scalable)</td>
                    <td className="py-3 pl-4 text-slate-600">Low (fixed)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Notice period</td>
                    <td className="py-3 px-4 text-slate-600">1-4 weeks</td>
                    <td className="py-3 pl-4 text-slate-600">3-6 months</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Experience breadth</td>
                    <td className="py-3 px-4 text-slate-600">Multiple industries</td>
                    <td className="py-3 pl-4 text-slate-600">Deep specialization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <StrategicComparisonInfographic data={cfoComparisonData} />

          {/* Cost Comparison */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Total Cost Comparison</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The true cost difference extends beyond base salary. Here's the complete financial picture including all employer costs:
            </p>

            <div className="not-prose mb-8 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
              <h3 className="mb-4 text-xl font-bold text-slate-900">Full-Time CFO Annual Cost Breakdown</h3>
              <div className="space-y-3 text-slate-700">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Base salary</span>
                  <span className="font-semibold">£180,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span><a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Employer NI</a> (13.8%)</span>
                  <span className="font-semibold">£24,840</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span><a href="https://www.cipd.org/uk/knowledge/factsheets/pensions-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Pension</a> (5% employer)</span>
                  <span className="font-semibold">£9,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Bonus (20% target)</span>
                  <span className="font-semibold">£36,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Benefits (private medical, car allowance)</span>
                  <span className="font-semibold">£12,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Recruitment fees (20% base)</span>
                  <span className="font-semibold">£36,000</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Training & development</span>
                  <span className="font-semibold">£5,000</span>
                </div>
                <div className="flex justify-between pt-3 text-lg font-bold text-slate-900">
                  <span>Total Year 1 Cost</span>
                  <span className="text-blue-600">£302,840</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Ongoing annual cost (years 2+)</span>
                  <span>£266,840</span>
                </div>
              </div>
            </div>

            <div className="not-prose mb-8 rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5">
              <h3 className="mb-4 text-xl font-bold text-slate-900">Fractional CFO Annual Cost (2 days/week)</h3>
              <div className="space-y-3 text-slate-700">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Daily rate: £1,200 × 2 days × 48 weeks</span>
                  <span className="font-semibold">£115,200</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>VAT (if applicable, can be reclaimed)</span>
                  <span className="font-semibold">£0</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>No <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35</a> employment costs (NI, pension, benefits)</span>
                  <span className="font-semibold">£0</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span>No recruitment fees</span>
                  <span className="font-semibold">£0</span>
                </div>
                <div className="flex justify-between pt-3 text-lg font-bold text-slate-900">
                  <span>Total Annual Cost</span>
                  <span className="text-blue-600">£115,200</span>
                </div>
              </div>
            </div>

            <div className="not-prose rounded-xl bg-blue-950/20 p-6">
              <p className="text-lg font-semibold text-blue-900">
                Annual Savings: £187,640 (62% cost reduction)
              </p>
              <p className="mt-2 text-sm text-blue-700">
                This saving can fund additional finance team members, systems, or be reinvested in growth initiatives. Learn more about <Link href="/fractional-cfo-cost" className="underline hover:text-blue-900">fractional CFO costs</Link>.
              </p>
            </div>
          </section>

          {/* When Each Makes Sense */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">When to Choose Fractional vs Full-Time</h2>

            <div className="not-prose mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-blue-950/20 p-6 ring-1 ring-blue-900/30">
                <h3 className="mb-4 text-xl font-bold text-blue-900">Choose Fractional CFO When:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Revenue is £1M-£50M annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>You need strategic finance 1-3 days per week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Budget is limited (under £150K for CFO)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>You're in growth phase but not yet scaled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Need expertise for specific projects (fundraising, M&A)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Want to test CFO capability before full-time hire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Require flexibility to scale up/down quickly</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-blue-50 p-6 ring-1 ring-blue-100">
                <h3 className="mb-4 text-xl font-bold text-blue-900">Choose Full-Time CFO When:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Revenue exceeds £50M annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Require daily strategic leadership presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Preparing for IPO or major liquidity event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Managing complex multi-entity operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Ongoing M&A activity requiring constant oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Heavy regulatory requirements (financial services, pharma)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-blue-600">✓</span>
                    <span>Need C-suite presence for investor/board confidence</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Comparison */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Benefits & Drawbacks Comparison</h2>

            <h3 className="text-2xl font-bold text-blue-900">Fractional CFO Benefits</h3>
            <ul className="text-slate-700">
              <li><strong>Cost efficiency:</strong> 60-80% lower cost than full-time for same expertise level, as reported by <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IPSE</a></li>
              <li><strong>Diverse experience:</strong> Cross-industry insights from working with multiple clients</li>
              <li><strong>Fast deployment:</strong> Start within 2-4 weeks vs 3-6 months for full-time</li>
              <li><strong>Scalability:</strong> Easily adjust commitment level (1-4 days/week) as needs change</li>
              <li><strong>Lower risk:</strong> Shorter notice periods and trial capability before full commitment</li>
              <li><strong>Proven track record:</strong> Most fractional CFOs have 15-25 years experience including prior full-time CFO roles, often holding professional qualifications from <a href="https://www.icaew.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW</a>, <a href="https://www.accaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a>, or <a href="https://www.cimaglobal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIMA</a></li>
              <li><strong>Project expertise:</strong> Specialist knowledge for fundraising, M&A, systems implementation</li>
            </ul>

            <h3 className="text-2xl font-bold text-red-900">Fractional CFO Drawbacks</h3>
            <ul className="text-slate-700">
              <li><strong>Limited availability:</strong> Not on-site daily, may have other client commitments</li>
              <li><strong>Cultural integration:</strong> Part-time presence can make team integration harder, requiring strong <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employee relations</a> practices</li>
              <li><strong>Crisis response:</strong> May not be immediately available during unexpected emergencies</li>
              <li><strong>Knowledge continuity:</strong> Risk of gaps if engagement ends and transition isn't managed</li>
              <li><strong>Divided attention:</strong> Juggling multiple clients means not 100% focused on your business</li>
            </ul>

            <h3 className="text-2xl font-bold text-blue-900">Full-Time CFO Benefits</h3>
            <ul className="text-slate-700">
              <li><strong>Full availability:</strong> Always accessible for urgent matters and daily decisions</li>
              <li><strong>Deep company knowledge:</strong> Complete immersion in business operations and culture</li>
              <li><strong>Team leadership:</strong> Direct management and development of finance team, following <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> best practices</li>
              <li><strong>Stakeholder relationships:</strong> Dedicated time for investor, board, and bank relationships, particularly valuable for <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">board governance</a></li>
              <li><strong>Strategic continuity:</strong> Long-term strategic planning and execution capability</li>
              <li><strong>Cultural fit:</strong> Full integration into leadership team and company culture</li>
            </ul>

            <h3 className="text-2xl font-bold text-red-900">Full-Time CFO Drawbacks</h3>
            <ul className="text-slate-700">
              <li><strong>High fixed cost:</strong> £150K-£300K+ annual commitment regardless of business performance, significantly higher than <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">median earnings</a></li>
              <li><strong>Limited perspective:</strong> Single-company focus may create blind spots vs external insight</li>
              <li><strong>Long hiring process:</strong> 3-6 months to recruit, potentially longer for right candidate</li>
              <li><strong>Exit complexity:</strong> 3-6 month notice periods, potential gardening leave, replacement challenges</li>
              <li><strong>Skill gaps:</strong> May not have specific expertise needed for one-off projects (e.g., IPO experience)</li>
              <li><strong>Overhead burden:</strong> Particularly expensive for smaller companies with limited financial complexity</li>
            </ul>
          </section>

          {/* Transition Path */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Transitioning from Fractional to Full-Time</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Many successful scale-ups follow a natural progression path. Here's how to manage the transition effectively:
            </p>

            <div className="not-prose mb-6 space-y-4">
              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/30 text-sm font-bold text-blue-700">1</span>
                  <h3 className="font-bold text-slate-900">Start Fractional (£1M-£10M revenue)</h3>
                </div>
                <p className="ml-11 text-slate-600">
                  Begin with 1-2 days per week to establish financial processes, reporting, and strategic planning. This phase typically lasts 12-24 months, ideal for businesses supported by <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> funding.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/30 text-sm font-bold text-blue-700">2</span>
                  <h3 className="font-bold text-slate-900">Scale Fractional Time (£10M-£30M revenue)</h3>
                </div>
                <p className="ml-11 text-slate-600">
                  Increase to 2-3 days per week as complexity grows. Fractional CFO helps recruit and build the finance team, prepares systems for scale—a common pattern among <a href="https://scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp</a> businesses.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/30 text-sm font-bold text-blue-700">3</span>
                  <h3 className="font-bold text-slate-900">Evaluate Full-Time Need (£30M-£50M revenue)</h3>
                </div>
                <p className="ml-11 text-slate-600">
                  Assess whether operational complexity justifies full-time leadership. Consider IPO plans, investor requirements, and daily management needs.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">4</span>
                  <h3 className="font-bold text-slate-900">Transition to Full-Time (£50M+ revenue)</h3>
                </div>
                <p className="ml-11 text-slate-600">
                  Either convert fractional CFO to full-time (if they're interested and suitable) or have them recruit and onboard their full-time successor.
                </p>
              </div>
            </div>

            <p className="text-slate-700">
              This staged approach minimizes risk, allows you to validate CFO value before full commitment, and ensures smooth knowledge transfer when moving to full-time. Understanding <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employment obligations</a> is crucial when making this transition.
            </p>
          </section>

          {/* Hybrid Model */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">The Hybrid Model: Best of Both Worlds</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Some companies use a hybrid approach, combining fractional expertise with full-time finance leadership at a more junior level:
            </p>

            <div className="not-prose rounded-xl bg-slate-50 p-8">
              <h3 className="mb-4 text-xl font-bold text-slate-900">Hybrid Structure Example</h3>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4">
                  <div className="mb-2 font-bold text-blue-700">Fractional CFO (2 days/week) - £115K/year</div>
                  <p className="text-sm text-slate-600">
                    Strategic leadership, board reporting, investor relations, major projects, team mentoring
                  </p>
                </div>
                <div className="text-center text-slate-400">+</div>
                <div className="rounded-lg bg-white p-4">
                  <div className="mb-2 font-bold text-blue-700">Full-Time Financial Controller - £80K/year</div>
                  <p className="text-sm text-slate-600">
                    Day-to-day operations, team management, process execution, management reporting, ensuring compliance with <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employment standards</a>
                  </p>
                </div>
                <div className="mt-4 rounded-lg bg-blue-950/20 p-4">
                  <div className="font-bold text-blue-900">Total Cost: £195K/year</div>
                  <p className="mt-2 text-sm text-slate-700">
                    vs £270K+ for full-time CFO alone. Provides strategic CFO expertise PLUS daily operational coverage - better capability at lower cost.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Decision Framework */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Decision Framework: 5 Key Questions</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Use this framework to determine which option is right for your business:
            </p>

            <div className="not-prose space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-3 text-lg font-bold text-slate-900">1. What is your current revenue and growth trajectory?</h3>
                <ul className="ml-6 space-y-2 text-slate-700">
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>Under £10M:</strong> Fractional CFO (1-2 days/week)</span></li>
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>£10M-£30M:</strong> Fractional CFO (2-3 days/week)</span></li>
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>£30M-£50M:</strong> Senior Fractional CFO (3-4 days/week) or evaluate full-time</span></li>
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>£50M+:</strong> Full-time CFO</span></li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-3 text-lg font-bold text-slate-900">2. How often do you need strategic financial leadership input?</h3>
                <ul className="ml-6 space-y-2 text-slate-700">
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>Weekly strategic reviews sufficient:</strong> Fractional CFO</span></li>
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>Daily strategic decisions required:</strong> Full-time CFO</span></li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-3 text-lg font-bold text-slate-900">3. What is your budget for CFO-level expertise?</h3>
                <ul className="ml-6 space-y-2 text-slate-700">
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>£30K-£150K annually:</strong> Fractional CFO (scalable by days/week)</span></li>
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>£150K-£300K+ annually:</strong> Full-time CFO</span></li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-3 text-lg font-bold text-slate-900">4. What is your immediate strategic priority?</h3>
                <ul className="ml-6 space-y-2 text-slate-700">
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>Specific project:</strong> Fractional CFO with relevant experience (fundraising, M&A, IPO prep, system implementation)</span></li>
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>Ongoing transformation:</strong> Full-time CFO for continuous leadership</span></li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-3 text-lg font-bold text-slate-900">5. How quickly do you need to fill the role?</h3>
                <ul className="ml-6 space-y-2 text-slate-700">
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>Within 4 weeks:</strong> Fractional CFO (fast deployment)</span></li>
                  <li className="flex gap-2"><span className="text-blue-600">→</span> <span><strong>Can wait 3-6 months:</strong> Full-time CFO recruitment</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Real Examples */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Real-World Scenarios</h2>

            <div className="not-prose space-y-6">
              <div className="rounded-xl bg-blue-950/20 p-6 ring-1 ring-blue-900/30">
                <h3 className="mb-2 text-lg font-bold text-blue-900">Scenario: Fast-Growing SaaS Startup - £8M ARR</h3>
                <p className="mb-3 text-slate-700"><strong>Challenge:</strong> Raising Series B (£20M round), need investor-ready financials and 3-year forecast model</p>
                <p className="mb-3 text-slate-700"><strong>Solution:</strong> Fractional CFO (3 days/week for 6 months, then 2 days/week ongoing)</p>
                <p className="text-slate-700"><strong>Outcome:</strong> Completed fundraise successfully, established board reporting, built finance team (hired FC and FP&A analyst). Saved £120K vs full-time while getting specialized fundraising expertise.</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-6 ring-1 ring-blue-100">
                <h3 className="mb-2 text-lg font-bold text-blue-900">Scenario: PE-Backed Manufacturing Business - £85M Revenue</h3>
                <p className="mb-3 text-slate-700"><strong>Challenge:</strong> Complex multi-site operations, quarterly PE reporting, preparing for exit in 3 years</p>
                <p className="mb-3 text-slate-700"><strong>Solution:</strong> Full-time CFO with manufacturing and PE portfolio experience</p>
                <p className="text-slate-700"><strong>Outcome:</strong> Daily operational oversight, implemented ERP across 4 sites, led 3 bolt-on acquisitions, delivered 2.8x exit multiple. Required full-time presence for integration complexity and PE relationship management.</p>
              </div>

              <div className="rounded-xl bg-blue-950/20 p-6 ring-1 ring-blue-900/30">
                <h3 className="mb-2 text-lg font-bold text-blue-900">Scenario: Professional Services Firm - £15M Revenue</h3>
                <p className="mb-3 text-slate-700"><strong>Challenge:</strong> Managing cash flow across 40 projects, partner reporting, tax planning</p>
                <p className="mb-3 text-slate-700"><strong>Solution:</strong> Fractional CFO (2 days/week) + full-time Financial Controller (hybrid model)</p>
                <p className="text-slate-700"><strong>Outcome:</strong> CFO handles strategic planning and partner relations, FC manages daily operations. Total cost £195K vs £270K+ for CFO alone, with better operational coverage.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mb-12 rounded-xl bg-gradient-to-br from-blue-950/200 to-blue-600 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Ready to Find Your CFO Solution?</h2>
            <p className="mb-6 text-blue-950/20">
              Whether you need fractional or full-time CFO expertise, Fractional Quest connects you with experienced financial leaders matched to your business stage and needs.
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
                Calculate Your CFO Costs
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ items={faqItems} title="Fractional vs Full-Time CFO FAQs" />

          {/* Related Resources */}
          <section className="mt-12 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/what-is-fractional-cfo" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">What is a Fractional CFO?</h3>
                <p className="mt-1 text-sm text-slate-600">Complete guide to fractional CFO roles and responsibilities</p>
              </Link>
              <Link href="/fractional-cfo-cost" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional CFO Cost Guide</h3>
                <p className="mt-1 text-sm text-slate-600">Detailed cost breakdowns and ROI analysis</p>
              </Link>
              <Link href="/fractional-cfo-hourly-rate" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional CFO Hourly Rates</h3>
                <p className="mt-1 text-sm text-slate-600">2025 rate benchmarks by experience and location</p>
              </Link>
              <Link href="/fractional-cfo-for-startups" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional CFO for Startups</h3>
                <p className="mt-1 text-sm text-slate-600">When and how startups should engage fractional CFOs</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
