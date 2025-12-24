import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Fractional MLRO UK | Outsourced Money Laundering Reporting Officer 2025',
  description: 'Fractional MLRO services for UK firms. Outsourced Money Laundering Reporting Officer (SMF17) for FinTech, crypto, payments & EMIs. Day rates £900-£1,300.',
  keywords: 'fractional mlro, outsourced mlro, mlro services uk, smf17, money laundering reporting officer, outsourced aml, fractional aml officer, mlro jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-mlro-uk',
  },
  openGraph: {
    title: 'Fractional MLRO UK | Outsourced MLRO Services 2025',
    description: 'Outsourced Money Laundering Reporting Officer services for UK regulated firms. SMF17 approved, £900-£1,300/day.',
    url: 'https://fractional.quest/fractional-mlro-uk',
  },
}

const MLRO_FAQS = [
  {
    question: 'What is a fractional MLRO?',
    answer: 'A fractional MLRO (Money Laundering Reporting Officer) is an outsourced professional who fulfils the <a href="https://www.fca.org.uk/firms/senior-managers-certification-regime/senior-management-functions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SMF17</a> role on a part-time basis—typically 1-2 days per week. They have FCA approval to act as your firm\'s nominated officer for suspicious activity reporting and oversee your AML/CTF framework. Fractional MLROs work across multiple regulated firms, bringing expertise from various sectors.'
  },
  {
    question: 'Can you outsource the MLRO role?',
    answer: 'Yes, the FCA permits outsourcing of the MLRO (SMF17) function. The outsourced individual must be FCA-approved and meet fitness and propriety requirements. However, your firm retains ultimate responsibility for AML compliance—you cannot outsource regulatory accountability. Most FinTech, EMI, and crypto firms successfully use outsourced MLROs.'
  },
  {
    question: 'How much does a fractional MLRO cost?',
    answer: 'Fractional MLROs in the UK charge £900-£1,300 per day, or £3,000-£8,000 per month on retainer (1-2 days per week). This compares to £80,000-£150,000+ annually for a full-time MLRO. A fractional MLRO working 1 day per week costs approximately £48,000-£62,000 annually—significant savings for smaller firms.'
  },
  {
    question: 'What does a fractional MLRO do?',
    answer: 'A fractional MLRO manages your AML/CTF framework including: receiving and assessing internal suspicious activity reports, submitting SARs to the <a href="https://www.nationalcrimeagency.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">NCA</a>, overseeing transaction monitoring, maintaining AML policies and procedures, providing annual MLRO reporting to the board, managing AML training, and liaising with regulators on AML matters.'
  },
  {
    question: 'Who needs a fractional MLRO?',
    answer: 'Fractional MLROs are ideal for: FCA-authorised firms within scope of the Money Laundering Regulations, FinTech and payment firms (EMIs, PIs), crypto businesses with FCA registration, consumer credit firms, smaller investment firms, and any regulated firm that cannot justify a full-time MLRO salary but needs SMF17 coverage.'
  },
  {
    question: 'Can the same person be CCO and MLRO?',
    answer: 'Yes, one person can hold both <a href="https://www.fca.org.uk/firms/senior-managers-certification-regime/senior-management-functions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SMF16 (Compliance Oversight) and SMF17 (MLRO)</a> at the same firm. This is common at smaller firms. However, the FCA expects the individual to have sufficient time and expertise for both roles. For firms with significant AML complexity, separating the roles may be appropriate.'
  }
]

const mlroResponsibilities = [
  {
    area: 'SAR Management',
    tasks: [
      'Receiving internal suspicious activity reports',
      'Assessing and investigating potential SARs',
      'Submitting SARs to the NCA',
      'Managing SAR triage and decision-making',
      'Maintaining SAR records and audit trail'
    ]
  },
  {
    area: 'AML Framework',
    tasks: [
      'Developing and maintaining AML policies',
      'Overseeing the firm-wide risk assessment',
      'Managing customer due diligence standards',
      'Implementing enhanced due diligence processes',
      'Ensuring sanctions and PEP screening'
    ]
  },
  {
    area: 'Transaction Monitoring',
    tasks: [
      'Overseeing transaction monitoring systems',
      'Setting and reviewing monitoring rules',
      'Investigating escalated alerts',
      'Managing false positive rates',
      'Ensuring adequate coverage of ML typologies'
    ]
  },
  {
    area: 'Governance & Reporting',
    tasks: [
      'Annual MLRO report to the board',
      'Quarterly AML MI and reporting',
      'Attending risk and compliance committees',
      'Escalating AML issues to senior management',
      'Regulatory liaison on AML matters'
    ]
  },
  {
    area: 'Training & Culture',
    tasks: [
      'AML training programme oversight',
      'Staff awareness and communication',
      'Building an anti-money laundering culture',
      'Advising business on AML implications'
    ]
  },
  {
    area: 'Regulatory Compliance',
    tasks: [
      'Monitoring regulatory change (JMLSG guidance, FCA policy)',
      'Travel Rule implementation',
      'Crypto-specific AML requirements',
      'FCA annual financial crime returns'
    ]
  }
]

const industriesNeedingMLRO = [
  { name: 'FinTech & Payments', regulations: 'FCA (EMI, PI)', amlRisk: 'High', demand: 'Very High' },
  { name: 'Crypto & Digital Assets', regulations: 'FCA Crypto Registration', amlRisk: 'Very High', demand: 'Very High' },
  { name: 'Consumer Finance', regulations: 'FCA (Consumer Credit)', amlRisk: 'Medium-High', demand: 'High' },
  { name: 'Investment Management', regulations: 'FCA (MiFID II)', amlRisk: 'Medium', demand: 'Medium' },
  { name: 'Wealth Management', regulations: 'FCA (COBS)', amlRisk: 'High', demand: 'High' },
  { name: 'Money Service Businesses', regulations: 'HMRC MLR', amlRisk: 'Very High', demand: 'High' },
]

export default function FractionalMLROUKPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fractional MLRO - Money Laundering Reporting Officer reviewing AML compliance"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/90 to-slate-900/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-amber-300/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <span className="inline-block bg-amber-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            AML Services
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            Fractional MLRO<br />
            <span className="text-amber-400">Services UK</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-100/80 leading-relaxed max-w-3xl mb-8">
            <strong className="text-white">Outsourced Money Laundering Reporting Officer</strong> services for UK regulated firms.
            <a href="https://www.fca.org.uk/firms/senior-managers-certification-regime/senior-management-functions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SMF17-approved</a> MLROs for FinTech, crypto, payments, and consumer credit.
          </p>
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-amber-400">&pound;1,100</div>
              <div className="text-amber-200/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">SMF17</div>
              <div className="text-amber-200/60 text-sm uppercase tracking-wider">FCA Approved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">1-2</div>
              <div className="text-amber-200/60 text-sm uppercase tracking-wider">Days/Week</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#what-is" className="px-8 py-4 bg-amber-500 text-white font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
              Learn More
            </Link>
            <Link href="/contact/companies" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-amber-900 transition-colors">
              Hire Fractional MLRO
            </Link>
          </div>
        </div>
      </section>

      {/* What is a Fractional MLRO */}
      <section id="what-is" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Definition</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What is a Fractional MLRO?</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              A <strong className="text-slate-900">fractional MLRO</strong> (Money Laundering Reporting Officer) is an
              outsourced AML professional who provides MLRO services to regulated firms on a part-time basis—typically
              1-2 days per week.
            </p>

            <p>
              In the UK, the MLRO is a critical regulatory role defined under the
              <a href="https://www.legislation.gov.uk/uksi/2017/692/contents" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline"> Money Laundering Regulations 2017</a> and,
              for FCA-authorised firms, requires <a href="https://www.fca.org.uk/firms/senior-managers-certification-regime" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">SMF17 approval</a>.
              The MLRO acts as the firm's nominated officer—the person responsible for receiving internal suspicious
              activity reports and determining whether to submit SARs to the <a href="https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/money-laundering-and-illicit-finance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">National Crime Agency</a>.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 not-prose">
              <p className="text-lg font-semibold text-slate-900 mb-2">Personal Accountability</p>
              <p className="text-slate-700">
                The MLRO has personal regulatory accountability for AML compliance. Unlike advisory roles, an MLRO
                can face FCA enforcement action, fines, and prohibition for failures. This is why experienced MLROs—many of whom hold professional qualifications from bodies like <a href="https://www.cisi.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CISI</a> or <a href="https://www.int-comp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICA</a>—command premium rates as they accept significant personal regulatory risk.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Why Outsource the MLRO Function?</h3>
            <p>
              Many regulated firms, particularly FinTech startups and smaller financial services companies, find that <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a> like fractional MLRO services offer significant advantages:
            </p>
            <ul className="space-y-2">
              <li><strong>Full-time MLRO cost is prohibitive</strong> — &pound;80,000-&pound;150,000 annual salary plus benefits</li>
              <li><strong>AML workload is part-time</strong> — Many firms don't generate enough SARs or monitoring activity for full-time</li>
              <li><strong>Specialist expertise is needed</strong> — Crypto, payments, and other sectors need specific AML knowledge</li>
              <li><strong>Rapid deployment required</strong> — For authorisation or when existing MLRO leaves</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FCA Requirements */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Regulatory</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">FCA Requirements for MLROs</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">SMF17: MLRO Function</h3>
            <p>
              For <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA</a>-authorised firms, the MLRO must hold <strong>SMF17 approval</strong> under the Senior Managers Regime.
              Key requirements include:
            </p>
            <ul className="space-y-2">
              <li>FCA pre-approval via Form A application</li>
              <li>Fitness and propriety assessment</li>
              <li>Criminal records (DBS) check</li>
              <li>Regulatory references from previous employers</li>
              <li>Statement of Responsibilities defining accountability</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Can the MLRO Be Outsourced?</h3>
            <p>
              Yes, the <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA</a> permits outsourcing of the MLRO function. However:
            </p>
            <ul className="space-y-2">
              <li>The outsourced individual must meet the same FCA approval requirements</li>
              <li>The firm retains ultimate responsibility for AML compliance</li>
              <li>Appropriate outsourcing arrangements and SLAs must be in place</li>
              <li>The firm must maintain oversight of the outsourced function</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">MLRO vs Deputy MLRO</h3>
            <p>
              Firms must have arrangements for MLRO cover during absence, a requirement emphasized by the <a href="https://www.bankofengland.co.uk/prudential-regulation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Prudential Regulation Authority</a> for dual-regulated firms. This can be addressed through:
            </p>
            <ul className="space-y-2">
              <li><strong>Deputy MLRO</strong> — Formal appointment of a deputy (may need SMF17 approval depending on role)</li>
              <li><strong>Fractional MLRO provider cover</strong> — Many fractional MLRO firms provide colleague cover</li>
              <li><strong>Documented escalation procedures</strong> — Clear protocols for MLRO absence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Does a Fractional MLRO Do */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What Does a Fractional MLRO Do?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mlroResponsibilities.map((area, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-4">{area.area}</h3>
                <ul className="space-y-2">
                  {area.tasks.map((task, j) => (
                    <li key={j} className="text-slate-600 text-sm flex items-start">
                      <span className="text-amber-500 mr-2">&bull;</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Sectors</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Who Needs a Fractional MLRO?</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm bg-white">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-4 font-bold text-slate-900">Industry</th>
                  <th className="text-left p-4 font-bold text-slate-900">Regulation</th>
                  <th className="text-left p-4 font-bold text-slate-900">AML Risk</th>
                  <th className="text-left p-4 font-bold text-slate-900">MLRO Demand</th>
                </tr>
              </thead>
              <tbody>
                {industriesNeedingMLRO.map((ind, i) => (
                  <tr key={i} className="border-b border-slate-200">
                    <td className="p-4 font-medium text-slate-900">{ind.name}</td>
                    <td className="p-4 text-slate-600">{ind.regulations}</td>
                    <td className="p-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        ind.amlRisk === 'Very High' ? 'bg-red-100 text-red-700' :
                        ind.amlRisk === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>{ind.amlRisk}</span>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        ind.demand === 'Very High' ? 'bg-green-100 text-green-700' :
                        ind.demand === 'High' ? 'bg-blue-100 text-blue-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>{ind.demand}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Crypto and Digital Assets</h3>
            <p>
              The <a href="https://www.fca.org.uk/firms/cryptoassets" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">FCA crypto registration regime</a> has
              created significant demand for MLROs with crypto-specific AML expertise. Crypto firms face unique challenges
              including Travel Rule implementation, on-chain monitoring, and rapidly evolving typologies. Professional development through <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> training helps MLROs stay current with emerging risks in digital assets.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">FinTech and Payments</h3>
            <p>
              EMIs (Electronic Money Institutions) and Payment Institutions are high-volume, lower-value businesses
              that require sophisticated transaction monitoring and customer due diligence. <a href="https://www.ukfinance.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK Finance</a> members and payment firms increasingly rely on fractional MLROs with
              payments experience who understand the balance between friction and financial crime risk.
            </p>
          </div>
        </div>
      </section>

      {/* Fractional vs Full-Time MLRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Fractional vs Full-Time MLRO</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left p-4 font-bold text-slate-900">Fractional MLRO</th>
                  <th className="text-left p-4 font-bold text-slate-900">Full-Time MLRO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Annual Cost</td>
                  <td className="p-4 text-amber-600 font-semibold">&pound;36,000-&pound;72,000</td>
                  <td className="p-4 text-slate-700">&pound;100,000-&pound;180,000</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Time Commitment</td>
                  <td className="p-4 text-slate-700">1-2 days per week</td>
                  <td className="p-4 text-slate-700">Full-time (5 days)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">SMF17 Accountability</td>
                  <td className="p-4 text-slate-700">Yes</td>
                  <td className="p-4 text-slate-700">Yes</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Cross-Firm Experience</td>
                  <td className="p-4 text-slate-700">High (multiple firms)</td>
                  <td className="p-4 text-slate-700">Limited (single firm)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">SAR Response Time</td>
                  <td className="p-4 text-slate-700">Same day on scheduled days; next day otherwise</td>
                  <td className="p-4 text-slate-700">Immediate (during hours)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Cost of Outsourced MLRO Services</h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm bg-white">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-4 font-bold text-slate-900">Engagement Level</th>
                  <th className="text-left p-4 font-bold text-slate-900">Day Rate</th>
                  <th className="text-left p-4 font-bold text-slate-900">Monthly Cost</th>
                  <th className="text-left p-4 font-bold text-slate-900">Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Light Touch (1 day/week)</td>
                  <td className="p-4 text-amber-600 font-semibold">&pound;900-&pound;1,300</td>
                  <td className="p-4 text-slate-700">&pound;3,600-&pound;5,200</td>
                  <td className="p-4 text-slate-700">&pound;43,200-&pound;62,400</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Standard (2 days/week)</td>
                  <td className="p-4 text-amber-600 font-semibold">&pound;900-&pound;1,300</td>
                  <td className="p-4 text-slate-700">&pound;7,200-&pound;10,400</td>
                  <td className="p-4 text-slate-700">&pound;86,400-&pound;124,800</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">MLRO + CCO Combined</td>
                  <td className="p-4 text-amber-600 font-semibold">&pound;1,100-&pound;1,500</td>
                  <td className="p-4 text-slate-700">&pound;8,800-&pound;12,000</td>
                  <td className="p-4 text-slate-700">&pound;105,600-&pound;144,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              Most FinTech and payment firms engage fractional MLROs for 1 day per week at a cost of &pound;3,500-&pound;5,000
              per month. This provides sufficient time for SAR management, monitoring oversight, and governance reporting. For growing businesses, the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> research shows that flexible compliance solutions enable faster growth while maintaining regulatory standards.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Fractional MLRO: Common Questions
            </h2>
          </div>
          <FAQ items={MLRO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need a Fractional<br /><span className="text-amber-400">MLRO?</span>
          </h2>
          <p className="text-xl text-amber-200/80 mb-10 max-w-2xl mx-auto">
            Connect with experienced outsourced MLROs for your UK regulated business. <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IoD</a> members and business leaders trust fractional compliance solutions for effective governance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-amber-500 text-white font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
              Hire Fractional MLRO
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-amber-900 transition-colors">
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
              <Link href="/outsourced-compliance-officer-uk" className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Outsourced Compliance Guide</Link>
              <Link href="/fractional-cco" className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Fractional CCO</Link>
              <Link href="/fractional-compliance-fintech" className="text-slate-600 hover:text-amber-600 font-medium transition-colors">FinTech Compliance</Link>
              <Link href="/compliance-officer-salary-uk" className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Compliance Salary UK</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
