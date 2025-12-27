import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Fractional CFO Training 2025',
  description: 'Fractional CFO training programs, certifications, skills, career transition paths.',
  openGraph: {
    title: 'Fractional CFO Training & Certification Guide 2025',
    description: 'Complete guide to fractional CFO training programs, essential certifications, skills development, and career transition paths for finance professionals in the UK.',
    type: 'article',
    url: 'https://fractional.quest/fractional-cfo-training',
  },
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-training',
  },
}

export const revalidate = 3600

export default function FractionalCFOTrainingPage() {
  const faqItems = [
    {
      question: 'Do I need specific certifications to become a fractional CFO?',
      answer: 'While not legally required, professional accounting qualifications (ACA, ACCA, CIMA) are essential for credibility. Most fractional CFOs have 15+ years experience including prior full-time CFO or senior finance roles. Additional certifications in areas like FP&A, M&A, or fundraising strengthen your offering.'
    },
    {
      question: 'How long does it take to transition to fractional CFO work?',
      answer: 'The transition typically takes 6-18 months, including building your personal brand, establishing initial client relationships, and developing your service offering. Most successful fractional CFOs start with 1-2 clients while maintaining some corporate income, gradually building their portfolio to 3-6 clients.'
    },
    {
      question: 'What is the most important skill for fractional CFOs?',
      answer: 'Beyond technical finance expertise, commercial acumen and communication skills are critical. Fractional CFOs must quickly understand business models, translate financial insights for non-finance stakeholders, and build trust rapidly. Client relationship management and consulting skills often matter more than pure technical ability.'
    },
    {
      question: 'Are there specialized training programs for fractional CFOs?',
      answer: 'Yes, several UK programs specifically train finance professionals for fractional work, covering consulting skills, business development, pricing, engagement management, and client acquisition. Programs range from 3-month intensive courses (£3K-£8K) to 12-month comprehensive programs (£10K-£25K).'
    },
    {
      question: 'Can I become a fractional CFO without having been a full-time CFO first?',
      answer: 'It\'s challenging but possible. Most clients expect CFO-level experience. If you\'ve been a Finance Director, Head of FP&A, or Financial Controller for 10+ years with strategic exposure, you can position yourself as a fractional CFO for smaller companies (£2M-£10M revenue). Start with "Fractional Finance Director" positioning and scale up as you build experience.'
    },
    {
      question: 'What business structure should I use as a fractional CFO?',
      answer: 'Most UK fractional CFOs operate through limited companies for tax efficiency and IR35 compliance. Some join umbrella companies initially. Key considerations include professional indemnity insurance (£1M-£5M coverage), IR35 status determination, and VAT registration (mandatory over £90K revenue). Consult an accountant familiar with consultancy businesses.'
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
            headline: 'Fractional CFO Training & Certification Guide 2025',
            description: 'Complete guide to fractional CFO training programs, essential certifications, skills development, and career transition paths for finance professionals in the UK.',
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
            <span className="text-slate-900">Training</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Fractional CFO Training & Certification Guide 2025
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Complete guide to training programs, essential certifications, skills development, and career transition paths for finance professionals moving into fractional CFO work.
            </p>
          </header>

          {/* Prerequisites */}
          <div className="mb-12 rounded-xl bg-blue-50 p-8 ring-1 ring-blue-100">
            <h2 className="mb-4 text-2xl font-bold text-blue-900">Prerequisites: Are You Ready?</h2>
            <p className="mb-4 text-slate-700">
              Before investing in fractional CFO training, ensure you meet the minimum requirements for credibility in the market:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4">
                <h3 className="mb-2 font-bold text-slate-900">✓ Essential Requirements</h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• 15+ years finance experience</li>
                  <li>• ACA, ACCA, CIMA, or equivalent</li>
                  <li>• Prior CFO, FD, or FC experience</li>
                  <li>• Strategic finance exposure</li>
                  <li>• Board/C-suite interaction experience</li>
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h3 className="mb-2 font-bold text-slate-900">✓ Highly Desirable</h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Sector specialization depth</li>
                  <li>• Fundraising or M&A experience</li>
                  <li>• Systems implementation projects</li>
                  <li>• Scale-up or turnaround experience</li>
                  <li>• Team leadership track record</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Certifications */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Essential Professional Certifications</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Professional accounting qualifications are non-negotiable for credibility. Here's the UK landscape:
            </p>

            <div className="not-prose mb-8 space-y-4">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">ACA (ICAEW) - Institute of Chartered Accountants in England and Wales</h3>
                  <span className="rounded-full bg-blue-900/30 px-3 py-1 text-xs font-semibold text-blue-700">Gold Standard</span>
                </div>
                <p className="mb-3 text-slate-600">
                  Most prestigious UK accounting qualification. Widely recognized, particularly strong for audit, financial reporting, and governance.
                </p>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div>
                    <div className="font-semibold text-slate-900">Duration:</div>
                    <div className="text-slate-600">3-5 years (typically during employment)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Cost:</div>
                    <div className="text-slate-600">£8,000-£15,000 (employer-funded typically)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Best for:</div>
                    <div className="text-slate-600">Corporate finance, governance, audit background</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">CPD Required:</div>
                    <div className="text-slate-600">Yes - ongoing annual requirement</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Learn more: <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW website</a>
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">ACCA - Association of Chartered Certified Accountants</h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Globally Recognized</span>
                </div>
                <p className="mb-3 text-slate-600">
                  International qualification with 240,000+ members worldwide. Strong technical foundation, particularly valued in SME and international contexts.
                </p>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div>
                    <div className="font-semibold text-slate-900">Duration:</div>
                    <div className="text-slate-600">2-4 years (flexible study options)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Cost:</div>
                    <div className="text-slate-600">£5,000-£10,000</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Best for:</div>
                    <div className="text-slate-600">SME sector, international businesses</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">CPD Required:</div>
                    <div className="text-slate-600">Yes - 40 units annually</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Learn more: <a href="https://www.accaglobal.com/gb/en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA website</a>
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">CIMA - Chartered Institute of Management Accountants</h3>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Business-Focused</span>
                </div>
                <p className="mb-3 text-slate-600">
                  Management accounting focus. Excellent for fractional CFOs targeting operational finance, cost management, and strategic planning roles.
                </p>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div>
                    <div className="font-semibold text-slate-900">Duration:</div>
                    <div className="text-slate-600">3-4 years</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Cost:</div>
                    <div className="text-slate-600">£6,000-£12,000</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Best for:</div>
                    <div className="text-slate-600">Management accounting, FP&A, strategic finance</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">CPD Required:</div>
                    <div className="text-slate-600">Yes - ongoing requirement</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Learn more: <a href="https://www.cimaglobal.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIMA website</a>
                </p>
              </div>
            </div>
          </section>

          {/* Specialized Fractional CFO Training */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Specialized Fractional CFO Training Programs</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Beyond core accounting qualifications, these programs specifically prepare finance professionals for fractional/consulting work:
            </p>

            <h3 className="text-2xl font-bold text-slate-900">1. Fractional CFO Business Model Training (3-6 months)</h3>
            <p className="text-slate-700">
              Programs focused on the business of being a fractional CFO: client acquisition, engagement management, pricing, and service delivery.
            </p>
            <div className="not-prose mb-6 rounded-lg bg-blue-950/20 p-6 ring-1 ring-blue-900/30">
              <h4 className="mb-3 font-bold text-blue-900">Typical Curriculum Includes:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Positioning and niche selection (choosing your sector/stage specialization)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Service packaging and pricing strategies (day rates, retainers, project fees)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Client acquisition (personal brand, LinkedIn, referrals, partnerships)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Engagement scoping and proposal writing</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Contract templates and T&Cs</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Client onboarding frameworks (first 30-60-90 days)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Consulting skills (stakeholder management, difficult conversations)</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>Managing multiple clients and time management</span></li>
                <li className="flex gap-2"><span className="text-blue-600">•</span> <span>IR35 compliance and business structure (Ltd company vs umbrella)</span></li>
              </ul>
              <div className="mt-4 grid gap-2 md:grid-cols-3 text-sm">
                <div>
                  <span className="font-semibold text-blue-900">Duration:</span> 3-6 months
                </div>
                <div>
                  <span className="font-semibold text-blue-900">Cost:</span> £3,000-£8,000
                </div>
                <div>
                  <span className="font-semibold text-blue-900">Format:</span> Online/hybrid
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">2. Executive Coaching & Consulting Skills Programs</h3>
            <p className="text-slate-700">
              Develop the soft skills critical for fractional CFO success. Technical expertise alone isn't sufficient - you must influence, coach, and consult effectively.
            </p>
            <div className="not-prose mb-6 space-y-3">
              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-1 font-bold text-slate-900">Institute of Consulting (IC) - Certified Management Consultant (CMC)</div>
                <p className="mb-2 text-sm text-slate-600">
                  International consulting certification. Demonstrates professionalism and ethical standards. Particularly valuable for fractional CFOs positioning as strategic consultants.
                </p>
                <div className="text-xs text-slate-500">Cost: £1,500-£3,000 | Duration: 6-12 months</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-1 font-bold text-slate-900">Executive Coaching Certification (ICF Accredited)</div>
                <p className="mb-2 text-sm text-slate-600">
                  Valuable for fractional CFOs who mentor founders or develop finance teams. ICF-accredited programs teach structured coaching methodologies.
                </p>
                <div className="text-xs text-slate-500">Cost: £4,000-£12,000 | Duration: 6-18 months</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">3. Specialized Domain Training</h3>
            <p className="text-slate-700">
              Strengthen specific technical capabilities that command premium rates:
            </p>
            <div className="not-prose space-y-3">
              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-1 font-bold text-slate-900">Fundraising & Investor Relations</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Venture capital and private equity dynamics</li>
                  <li>• Financial modeling for investment (DCF, LBO models)</li>
                  <li>• Due diligence preparation and data room management</li>
                  <li>• Pitch deck financials and investor presentations</li>
                </ul>
                <div className="mt-2 text-xs text-slate-500">Providers: CFI, Venture Deals course, sector-specific programs</div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-1 font-bold text-slate-900">M&A & Transaction Advisory</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Buy-side and sell-side M&A process</li>
                  <li>• Valuation methodologies (multiples, DCF, precedent transactions)</li>
                  <li>• Deal structuring and negotiation</li>
                  <li>• Post-merger integration (PMI) financial leadership</li>
                </ul>
                <div className="mt-2 text-xs text-slate-500">Providers: ACG, M&A courses from business schools</div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-1 font-bold text-slate-900">FP&A & Advanced Modeling</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Advanced Excel/Google Sheets modeling</li>
                  <li>• Scenario planning and sensitivity analysis</li>
                  <li>• FP&A platform expertise (Adaptive, Anaplan, Cube)</li>
                  <li>• Driver-based financial modeling</li>
                </ul>
                <div className="mt-2 text-xs text-slate-500">Providers: CFI (Corporate Finance Institute), Wall Street Prep, FP&A-focused courses</div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-1 font-bold text-slate-900">SaaS & Subscription Business Metrics</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• ARR, MRR, churn, and cohort analysis</li>
                  <li>• CAC payback, LTV:CAC ratios, unit economics</li>
                  <li>• SaaS Rule of 40 and efficiency metrics</li>
                  <li>• Pricing strategy and revenue recognition (ASC 606, IFRS 15)</li>
                </ul>
                <div className="mt-2 text-xs text-slate-500">Providers: SaaS-focused CFO communities, ChartMogul resources, sector specialists</div>
              </div>

              <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-1 font-bold text-slate-900">Turnaround & Restructuring</div>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Cash flow crisis management and 13-week cash flow forecasting</li>
                  <li>• Stakeholder negotiation (creditors, HMRC, suppliers)</li>
                  <li>• Business restructuring and cost reduction programs</li>
                  <li>• Insolvency procedures and rescue finance options</li>
                </ul>
                <div className="mt-2 text-xs text-slate-500">Providers: R3 (insolvency professionals), turnaround specialist courses</div>
              </div>
            </div>
          </section>

          {/* Skills Framework */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Essential Skills Framework for Fractional CFOs</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Beyond qualifications, successful fractional CFOs master these five skill categories:
            </p>

            <div className="not-prose grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-6 ring-1 ring-blue-100">
                <h3 className="mb-3 text-lg font-bold text-blue-900">1. Technical Finance Mastery</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Financial modeling and forecasting</li>
                  <li>✓ Management reporting and KPI frameworks</li>
                  <li>✓ Budgeting and variance analysis</li>
                  <li>✓ Cash flow management and working capital optimization</li>
                  <li>✓ Financial systems selection and implementation</li>
                  <li>✓ Tax planning and structure (corporate, personal)</li>
                </ul>
              </div>

              <div className="rounded-xl bg-blue-950/20 p-6 ring-1 ring-blue-900/30">
                <h3 className="mb-3 text-lg font-bold text-blue-900">2. Strategic & Commercial Acumen</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Business model analysis and unit economics</li>
                  <li>✓ Competitive positioning and market dynamics</li>
                  <li>✓ Pricing strategy and margin optimization</li>
                  <li>✓ Growth strategy and market expansion</li>
                  <li>✓ Risk assessment and mitigation</li>
                  <li>✓ Scenario planning and strategic options analysis</li>
                </ul>
              </div>

              <div className="rounded-xl bg-purple-50 p-6 ring-1 ring-purple-100">
                <h3 className="mb-3 text-lg font-bold text-purple-900">3. Communication & Influence</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Translating finance for non-finance stakeholders</li>
                  <li>✓ Board-level presentation and reporting</li>
                  <li>✓ Difficult conversations and negotiation</li>
                  <li>✓ Active listening and requirements gathering</li>
                  <li>✓ Influencing without authority</li>
                  <li>✓ Storytelling with data</li>
                </ul>
              </div>

              <div className="rounded-xl bg-orange-50 p-6 ring-1 ring-orange-100">
                <h3 className="mb-3 text-lg font-bold text-orange-900">4. Leadership & Team Development</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Finance team recruitment and structuring</li>
                  <li>✓ Coaching and mentoring junior finance staff</li>
                  <li>✓ Process design and workflow optimization</li>
                  <li>✓ Change management and transformation</li>
                  <li>✓ Performance management frameworks</li>
                  <li>✓ Building high-performance finance cultures</li>
                </ul>
              </div>

              <div className="rounded-xl bg-pink-50 p-6 ring-1 ring-pink-100">
                <h3 className="mb-3 text-lg font-bold text-pink-900">5. Consulting & Client Management</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Scoping engagements and setting boundaries</li>
                  <li>✓ Expectation management and delivery</li>
                  <li>✓ Rapid business assessment (diagnostic capabilities)</li>
                  <li>✓ Prioritization and focus (identifying highest impact)</li>
                  <li>✓ Knowledge transfer and documentation</li>
                  <li>✓ Managing client relationships long-term</li>
                </ul>
              </div>

              <div className="rounded-xl bg-teal-50 p-6 ring-1 ring-teal-100">
                <h3 className="mb-3 text-lg font-bold text-teal-900">6. Business Development & Marketing</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Personal brand building (LinkedIn, thought leadership)</li>
                  <li>✓ Networking and relationship development</li>
                  <li>✓ Referral generation and partner relationships</li>
                  <li>✓ Proposal writing and value articulation</li>
                  <li>✓ Pricing conversations and negotiation</li>
                  <li>✓ Pipeline management and conversion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Transition Roadmap */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">12-Month Transition Roadmap</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Structured plan for transitioning from corporate finance role to established fractional CFO practice:
            </p>

            <div className="not-prose space-y-4">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 font-bold text-blue-700">M1-3</span>
                  <h3 className="text-lg font-bold text-slate-900">Foundation & Positioning (Months 1-3)</h3>
                </div>
                <ul className="ml-13 space-y-2 text-sm text-slate-700">
                  <li>• Complete IR35 and business structure setup (limited company, insurance, contracts)</li>
                  <li>• Define your niche (sector, stage, services) based on experience and market demand</li>
                  <li>• Develop service packages and pricing framework</li>
                  <li>• Build LinkedIn presence and thought leadership content plan</li>
                  <li>• Enroll in fractional CFO business model training if applicable</li>
                  <li>• Create core marketing materials (profile, case studies, testimonials from corporate career)</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 font-bold text-blue-700">M4-6</span>
                  <h3 className="text-lg font-bold text-slate-900">First Clients & Validation (Months 4-6)</h3>
                </div>
                <ul className="ml-13 space-y-2 text-sm text-slate-700">
                  <li>• Network intensively (50+ conversations per month) with target clients and referrers</li>
                  <li>• Secure first 1-2 clients (potentially at reduced rates for testimonials/case studies)</li>
                  <li>• Refine service delivery based on initial client feedback</li>
                  <li>• Document processes and create reusable frameworks</li>
                  <li>• Build referral partnerships with complementary service providers</li>
                  <li>• Continue corporate role part-time if possible (de-risk transition)</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 font-bold text-blue-700">M7-9</span>
                  <h3 className="text-lg font-bold text-slate-900">Scale to 3-4 Clients (Months 7-9)</h3>
                </div>
                <ul className="ml-13 space-y-2 text-sm text-slate-700">
                  <li>• Add 2-3 more clients to reach 3-4 total portfolio</li>
                  <li>• Optimize time management across multiple clients</li>
                  <li>• Increase rates based on proven value delivery</li>
                  <li>• Develop case studies and testimonials from early clients</li>
                  <li>• Consider leaving corporate role entirely (if not already)</li>
                  <li>• Invest in specialized training for gaps identified (e.g., SaaS metrics, fundraising)</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30 font-bold text-blue-700">M10-12</span>
                  <h3 className="text-lg font-bold text-slate-900">Optimize & Systematize (Months 10-12)</h3>
                </div>
                <ul className="ml-13 space-y-2 text-sm text-slate-700">
                  <li>• Reach target portfolio of 4-6 clients generating £100K-£150K annual revenue</li>
                  <li>• Systematize delivery with templates, playbooks, and SOPs</li>
                  <li>• Establish referral engine generating consistent inbound leads</li>
                  <li>• Build waitlist or selective client acceptance criteria</li>
                  <li>• Consider whether to remain solo or build team/associate network</li>
                  <li>• Plan year 2 strategy (specialization deepening, rate increases, service expansion)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ongoing Development */}
          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Continuous Professional Development (CPD)</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Fractional CFO work requires staying current. Maintain expertise through:
            </p>

            <h3 className="text-2xl font-bold text-slate-900">Annual CPD Requirements</h3>
            <ul className="text-slate-700">
              <li><strong>ICAEW members:</strong> No minimum hours but must maintain competence (recommend 30-40 hours annually)</li>
              <li><strong>ACCA members:</strong> 40 CPD units annually (21 verifiable)</li>
              <li><strong>CIMA members:</strong> 30 hours (minimum 20 relevant to role) plus annual CPD declaration</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900">Recommended CPD Mix</h3>
            <div className="not-prose mb-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="pb-3 pr-4 text-left font-semibold text-slate-900">Activity Type</th>
                    <th className="pb-3 px-4 text-left font-semibold text-slate-900">Annual Hours</th>
                    <th className="pb-3 pl-4 text-left font-semibold text-slate-900">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Technical updates</td>
                    <td className="py-3 px-4 text-slate-600">10-15 hours</td>
                    <td className="py-3 pl-4 text-slate-600">Accounting standards, tax changes, regulatory updates</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Sector specialization</td>
                    <td className="py-3 px-4 text-slate-600">10-15 hours</td>
                    <td className="py-3 pl-4 text-slate-600">SaaS CFO forums, industry conferences, sector webinars</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Skills development</td>
                    <td className="py-3 px-4 text-slate-600">5-10 hours</td>
                    <td className="py-3 pl-4 text-slate-600">Communication, leadership, consulting skills courses</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-slate-700">Peer learning</td>
                    <td className="py-3 px-4 text-slate-600">5-10 hours</td>
                    <td className="py-3 pl-4 text-slate-600">CFO roundtables, mastermind groups, networking events</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-slate-900">Valuable Communities & Resources</h3>
            <ul className="text-slate-700">
              <li><strong>CFO Connect:</strong> UK-based CFO peer network with regional chapters</li>
              <li><strong>Finance Leaders Network:</strong> Events and forums for senior finance professionals</li>
              <li><strong>Sector-specific groups:</strong> SaaS CFO Slack communities, fintech finance forums, etc.</li>
              <li><strong>LinkedIn groups:</strong> Fractional CFO networks, finance transformation groups</li>
              <li><strong>Professional body events:</strong> ICAEW, ACCA, CIMA host regular CPD webinars and conferences</li>
            </ul>
          </section>

          {/* Investment Summary */}
          <div className="mb-12 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Total Investment Summary</h2>
            <p className="mb-6 text-slate-600">
              Here's what to budget for your fractional CFO training and transition:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-4 font-bold text-slate-900">Initial Setup Costs (Year 1)</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span>Limited company formation & accounting</span>
                    <span className="font-semibold">£1,000-£2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional indemnity insurance</span>
                    <span className="font-semibold">£800-£2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fractional CFO business training</span>
                    <span className="font-semibold">£3,000-£8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Specialized certifications (optional)</span>
                    <span className="font-semibold">£1,000-£5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing & branding</span>
                    <span className="font-semibold">£2,000-£5,000</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 font-bold">
                    <span>Total Year 1 Investment</span>
                    <span className="text-blue-600">£7,800-£22,000</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="mb-4 font-bold text-slate-900">Ongoing Annual Costs</h3>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span>Accounting & compliance</span>
                    <span className="font-semibold">£1,500-£3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional indemnity insurance</span>
                    <span className="font-semibold">£800-£2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CPD and training</span>
                    <span className="font-semibold">£1,500-£4,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional body memberships</span>
                    <span className="font-semibold">£300-£500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marketing & networking</span>
                    <span className="font-semibold">£2,000-£5,000</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 font-bold">
                    <span>Total Annual Ongoing</span>
                    <span className="text-blue-600">£6,100-£14,500</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              ROI is typically achieved within 6-12 months as day rates (£800-£1,800) significantly exceed employed salary on a pro-rata basis. Learn more about <Link href="/fractional-cfo-hourly-rate" className="text-blue-600 hover:text-blue-700 underline">fractional CFO rates</Link>.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mb-12 rounded-xl bg-gradient-to-br from-blue-950/200 to-blue-600 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Ready to Launch Your Fractional CFO Career?</h2>
            <p className="mb-6 text-blue-950/20">
              Fractional Quest supports finance professionals transitioning to fractional work, offering resources, training recommendations, and client opportunities.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/how-to-become-fractional-cfo"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-950/20"
              >
                Read Career Transition Guide
              </Link>
              <Link
                href="/fractional-cfo"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700"
              >
                Explore Fractional CFO Resources
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ items={faqItems} title="Fractional CFO Training FAQs" />

          {/* Related Resources */}
          <section className="mt-12 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Related Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/how-to-become-fractional-cfo" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">How to Become a Fractional CFO</h3>
                <p className="mt-1 text-sm text-slate-600">Complete career transition roadmap</p>
              </Link>
              <Link href="/fractional-cfo-jobs-remote" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Remote Fractional CFO Jobs</h3>
                <p className="mt-1 text-sm text-slate-600">Find fractional CFO opportunities</p>
              </Link>
              <Link href="/fractional-cfo-hourly-rate" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional CFO Rates 2025</h3>
                <p className="mt-1 text-sm text-slate-600">Benchmark your pricing strategy</p>
              </Link>
              <Link href="/fractional-cfo-companies" className="group rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600">Fractional CFO Companies</h3>
                <p className="mt-1 text-sm text-slate-600">Compare joining a firm vs going solo</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
