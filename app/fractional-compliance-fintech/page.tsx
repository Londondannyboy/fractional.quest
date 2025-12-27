import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Fractional FinTech Compliance',
  description: 'FCA compliance for FinTech. SMF16/SMF17 for EMIs, payments, consumer credit. £900-£1,400/day.',
  keywords: 'fintech compliance, fca compliance officer, emi compliance, payment institution compliance, fractional compliance fintech, smf16, smf17, consumer duty compliance',
  alternates: {
    canonical: 'https://fractional.quest/fractional-compliance-fintech',
  },
  openGraph: {
    title: 'Fractional Compliance for FinTech | FCA Compliance Services UK',
    description: 'FCA compliance officers for FinTech. SMF16/SMF17 approved specialists for EMIs, payments, and consumer credit.',
    url: 'https://fractional.quest/fractional-compliance-fintech',
  },
}

const FINTECH_FAQS = [
  {
    question: 'What FCA compliance do FinTech companies need?',
    answer: 'FinTech compliance requirements depend on your regulatory permissions. EMIs and Payment Institutions need Payment Services Regulations compliance, safeguarding, and operational resilience. Consumer credit firms need CONC (Consumer Credit sourcebook) compliance and affordability assessments. All FCA-authorised FinTechs need Consumer Duty compliance, AML frameworks, and SM&CR arrangements. Most require SMF16 (Compliance Oversight) and SMF17 (MLRO) appointments.'
  },
  {
    question: 'Can FinTech startups use fractional compliance officers?',
    answer: 'Yes, fractional compliance is particularly suited to FinTech startups. Most early-stage FinTechs have straightforward regulatory footprints and limited compliance budgets. A fractional CCO/MLRO working 1-2 days per week provides the senior oversight required by the FCA at a fraction of full-time cost. This model is widely accepted by the FCA for authorised firms.'
  },
  {
    question: 'How much does FinTech compliance cost?',
    answer: 'Fractional compliance for FinTech typically costs £4,000-£8,000 per month for combined CCO and MLRO services (1-2 days per week). This compares to £150,000-£250,000 annually for full-time compliance leadership. Additional project costs may apply for authorisation applications, Consumer Duty implementation, or regulatory change projects.'
  },
  {
    question: 'What is SMF16 and SMF17 for FinTech?',
    answer: 'SMF16 (Compliance Oversight) is the FCA-approved role responsible for the firm\'s overall compliance with FCA rules. SMF17 (MLRO - Money Laundering Reporting Officer) is responsible for AML/CTF compliance and SAR submissions. Both are Senior Manager Functions requiring FCA pre-approval. Most FinTechs need both roles, which can be held by one person at smaller firms.'
  },
  {
    question: 'What is Consumer Duty compliance for FinTech?',
    answer: 'Consumer Duty (PS22/9) requires FinTechs to deliver good outcomes for retail customers across four areas: products and services, price and value, consumer understanding, and consumer support. FinTechs must embed Consumer Duty into product design, governance, and ongoing monitoring. This applies to all FCA-authorised firms serving retail customers, including EMIs, payment firms, and consumer credit providers.'
  },
  {
    question: 'Do EMIs need a compliance officer?',
    answer: 'Yes, EMIs (Electronic Money Institutions) authorised by the FCA must have appropriate compliance arrangements, including SMF16 (Compliance Oversight) and SMF17 (MLRO) appointments. Small EMIs under the small EMI registration regime have lighter requirements but still need AML compliance arrangements. Fractional compliance officers are widely used by EMIs of all sizes.'
  }
]

const fintechRegulations = [
  {
    firmType: 'Electronic Money Institution (EMI)',
    keyRegs: ['EMD2', 'PSRs 2017', 'Safeguarding', 'SM&CR', 'Consumer Duty'],
    smfRequired: 'SMF16, SMF17',
    complianceFocus: 'Safeguarding, operational resilience, AML'
  },
  {
    firmType: 'Payment Institution (PI)',
    keyRegs: ['PSRs 2017', 'PSD2', 'SM&CR', 'Consumer Duty'],
    smfRequired: 'SMF16, SMF17',
    complianceFocus: 'SCA, account access, AML'
  },
  {
    firmType: 'Consumer Credit Firm',
    keyRegs: ['CONC', 'CCA 1974', 'SM&CR', 'Consumer Duty'],
    smfRequired: 'SMF16, SMF17',
    complianceFocus: 'Affordability, vulnerability, collections'
  },
  {
    firmType: 'Crypto Asset Business',
    keyRegs: ['MLRs 2017', 'FCA Crypto Regime', 'Travel Rule'],
    smfRequired: 'MLRO (registration)',
    complianceFocus: 'AML/KYC, custody, promotions'
  },
  {
    firmType: 'Appointed Representative',
    keyRegs: ['Principal\'s permissions', 'SM&CR (limited)', 'Consumer Duty'],
    smfRequired: 'Via principal',
    complianceFocus: 'AR agreement, oversight by principal'
  },
]

const complianceServices = [
  {
    title: 'FCA Authorisation Support',
    desc: 'Application drafting, regulatory business plan, compliance framework development, FCA engagement',
    typical: 'Project-based'
  },
  {
    title: 'Fractional CCO (SMF16)',
    desc: 'Ongoing compliance oversight, board reporting, regulatory relationship, policy governance',
    typical: '1-2 days/week'
  },
  {
    title: 'Fractional MLRO (SMF17)',
    desc: 'AML framework, SAR management, transaction monitoring oversight, annual MLRO report',
    typical: '1 day/week'
  },
  {
    title: 'Consumer Duty Implementation',
    desc: 'Gap analysis, outcome testing, governance embedding, MI framework',
    typical: 'Project + ongoing'
  },
  {
    title: 'Compliance Monitoring',
    desc: 'First-line testing, breach management, thematic reviews, MI production',
    typical: '1-2 days/week'
  },
  {
    title: 'Regulatory Change Management',
    desc: 'Impact assessment, implementation planning, policy updates, training',
    typical: 'As needed'
  },
]

export default function FractionalComplianceFintechPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fractional compliance for FinTech - FCA regulatory compliance in financial technology"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-cyan-800/90 to-slate-900/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-cyan-300/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <span className="inline-block bg-cyan-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Industry Guide
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            Fractional Compliance<br />
            <span className="text-cyan-400">for FinTech</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100/80 leading-relaxed max-w-3xl mb-8">
            <strong className="text-white">FCA compliance officers</strong> for FinTech, EMIs, payment institutions, and
            consumer credit firms. SMF16 and SMF17 approved specialists at fractional cost.
          </p>
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-cyan-400">&pound;1,150</div>
              <div className="text-cyan-200/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">SMF16/17</div>
              <div className="text-cyan-200/60 text-sm uppercase tracking-wider">FCA Approved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">50+</div>
              <div className="text-cyan-200/60 text-sm uppercase tracking-wider">FinTechs Served</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#services" className="px-8 py-4 bg-cyan-500 text-white font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors">
              View Services
            </Link>
            <Link href="/contact/companies" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-cyan-900 transition-colors">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FinTech Compliance Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">FinTech Compliance in the UK</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              <strong className="text-slate-900">FinTech compliance</strong> encompasses the regulatory requirements for
              technology-driven financial services companies operating under <a href="https://www.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 underline">FCA authorisation</a>.
              From payments and e-money to consumer credit and crypto, each FinTech vertical has specific compliance needs.
            </p>

            <p>
              The UK FinTech sector faces an increasingly complex regulatory landscape:
            </p>
            <ul className="space-y-2">
              <li><strong>Consumer Duty</strong> — Outcomes-focused regulation requiring embedded compliance</li>
              <li><strong>Operational Resilience</strong> — Business continuity and third-party risk requirements</li>
              <li><strong>SM&CR</strong> — Senior Managers regime requiring SMF16 and SMF17 appointments</li>
              <li><strong>AML/CTF</strong> — Enhanced due diligence, transaction monitoring, and SAR reporting</li>
              <li><strong>FCA Scrutiny</strong> — Increased focus on FinTech supervision and authorisation standards</li>
            </ul>

            <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8 not-prose">
              <p className="text-lg font-semibold text-slate-900 mb-2">Why Fractional Compliance Works for FinTech</p>
              <p className="text-slate-700">
                Most FinTechs have straightforward regulatory footprints (single permission, focused product) but need
                senior compliance expertise. Fractional compliance provides CCO/MLRO-level input at 40-60% of full-time
                cost—ideal for firms pre-revenue or in early growth stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Requirements by Firm Type */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Regulations</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">FCA Requirements by FinTech Type</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm bg-white">
              <thead>
                <tr className="bg-cyan-50">
                  <th className="text-left p-4 font-bold text-slate-900">Firm Type</th>
                  <th className="text-left p-4 font-bold text-slate-900">Key Regulations</th>
                  <th className="text-left p-4 font-bold text-slate-900">SMF Required</th>
                  <th className="text-left p-4 font-bold text-slate-900">Compliance Focus</th>
                </tr>
              </thead>
              <tbody>
                {fintechRegulations.map((firm, i) => (
                  <tr key={i} className="border-b border-slate-200">
                    <td className="p-4 font-medium text-slate-900">{firm.firmType}</td>
                    <td className="p-4 text-slate-600 text-xs">
                      {firm.keyRegs.map((reg, j) => (
                        <span key={j} className="inline-block bg-slate-100 px-2 py-1 rounded mr-1 mb-1">{reg}</span>
                      ))}
                    </td>
                    <td className="p-4 text-cyan-600 font-semibold text-sm">{firm.smfRequired}</td>
                    <td className="p-4 text-slate-600 text-sm">{firm.complianceFocus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Services</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">FinTech Compliance Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {complianceServices.map((service, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{service.desc}</p>
                <span className="text-cyan-600 font-semibold text-sm">{service.typical}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consumer Duty Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Key Regulation</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Consumer Duty for FinTech</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              <a href="https://www.fca.org.uk/firms/consumer-duty" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 underline">Consumer Duty</a> is
              the FCA's flagship conduct regulation, requiring firms to deliver good outcomes for retail customers.
              For FinTechs, this means embedding customer-focused thinking into product design, pricing, communications,
              and customer service.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The Four Outcomes</h3>
            <ul className="space-y-2">
              <li><strong>Products and Services</strong> — Products designed to meet customer needs</li>
              <li><strong>Price and Value</strong> — Fair pricing with reasonable relationship to benefits</li>
              <li><strong>Consumer Understanding</strong> — Clear communications enabling informed decisions</li>
              <li><strong>Consumer Support</strong> — Accessible, responsive customer service</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">FinTech Consumer Duty Challenges</h3>
            <ul className="space-y-2">
              <li>Digital-only products and the vulnerability of customers without digital access</li>
              <li>Algorithm-driven pricing and the need to demonstrate fair value</li>
              <li>Automated customer service and ensuring adequate support for complex issues</li>
              <li>Cross-border services and identifying the UK customer base</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why FinTechs Choose Fractional */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Why FinTechs Choose Fractional Compliance</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="text-3xl font-black text-cyan-600 mb-2">50%</div>
              <div className="font-bold text-slate-900 mb-2">Cost Savings</div>
              <p className="text-slate-600 text-sm">
                Access CCO and MLRO-level expertise at half the cost of full-time hires. Preserve runway for
                product development.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="text-3xl font-black text-cyan-600 mb-2">2 weeks</div>
              <div className="font-bold text-slate-900 mb-2">Time to Start</div>
              <p className="text-slate-600 text-sm">
                Fractional compliance officers can typically start within 2 weeks—no 3-month notice periods.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="text-3xl font-black text-cyan-600 mb-2">15+</div>
              <div className="font-bold text-slate-900 mb-2">Years Experience</div>
              <p className="text-slate-600 text-sm">
                Access senior professionals with 15+ years FCA experience—often more than you could afford full-time.
              </p>
            </div>
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="text-3xl font-black text-cyan-600 mb-2">Scale</div>
              <div className="font-bold text-slate-900 mb-2">Flexible Coverage</div>
              <p className="text-slate-600 text-sm">
                Start with 1 day/week and scale up as you grow. Add days for authorisation or product launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              FinTech Compliance: Common Questions
            </h2>
          </div>
          <FAQ skipSchema={true} items={FINTECH_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need Compliance<br /><span className="text-cyan-400">for Your FinTech?</span>
          </h2>
          <p className="text-xl text-cyan-200/80 mb-10 max-w-2xl mx-auto">
            Connect with FCA-experienced fractional compliance officers for your FinTech.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-cyan-500 text-white font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors">
              Get a Quote
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-cyan-900 transition-colors">
              Complete Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/outsourced-compliance-officer-uk" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Outsourced Compliance Guide</Link>
              <Link href="/fractional-cco" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Fractional CCO</Link>
              <Link href="/fractional-mlro-uk" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Fractional MLRO</Link>
              <Link href="/outsourced-compliance-cost" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">Compliance Costs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
