import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Fractional CCO UK 2025',
  description: 'Fractional CCO services. SMF16 approved, £1,000-£1,500/day. FinTech, crypto, payments.',
  keywords: 'fractional cco, fractional chief compliance officer, part time cco, outsourced cco, cco services uk, smf16, fractional compliance officer, chief compliance officer services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cco',
  },
  openGraph: {
    title: 'Fractional CCO | Chief Compliance Officer Services UK 2025',
    description: 'Part-time Chief Compliance Officer services for UK regulated firms. SMF16 approved fractional CCOs at £1,000-£1,500/day.',
    url: 'https://fractional.quest/fractional-cco',
  },
}

const CCO_FAQS = [
  {
    question: 'What is a fractional CCO?',
    answer: 'A fractional CCO (Chief Compliance Officer) is a senior compliance professional who provides CCO-level services to organisations on a part-time basis—typically 1-3 days per week. They hold or can hold SMF16 (Compliance Oversight) FCA approval and provide strategic compliance leadership, regulatory relationship management, and compliance programme oversight without the cost of a full-time executive hire.'
  },
  {
    question: 'How much does a fractional CCO cost?',
    answer: 'Fractional CCOs in the UK typically charge £1,000-£1,500 per day, or £4,000-£12,000 per month on retainer (depending on days per week). This compares to £150,000-£250,000+ annually for a full-time CCO including benefits. A fractional CCO working 1-2 days per week costs £48,000-£96,000 annually—40-60% less than full-time equivalent.'
  },
  {
    question: 'Can a fractional CCO hold SMF16 approval?',
    answer: 'Yes, fractional CCOs can hold SMF16 (Compliance Oversight) FCA approval. The FCA permits part-time and outsourced SMF appointments provided the individual has sufficient time and resource to fulfil their responsibilities. Many fractional CCOs hold SMF16 at multiple firms simultaneously, though each appointment requires separate FCA approval.'
  },
  {
    question: 'What does a fractional CCO do?',
    answer: 'A fractional CCO provides strategic compliance leadership including: developing compliance strategy and policies, managing regulatory relationships with the FCA, overseeing the compliance monitoring programme, attending board and committee meetings, providing compliance advice to senior management, managing compliance risk, and ensuring regulatory reporting. They perform the same functions as a full-time CCO but on a part-time basis.'
  },
  {
    question: 'Who needs a fractional CCO?',
    answer: 'Fractional CCOs are ideal for: FCA-authorised firms with fewer than 50-100 employees, FinTech startups requiring SMF16 coverage, firms seeking FCA authorisation, companies transitioning between compliance hires, PE portfolio companies requiring professional compliance, and firms with straightforward regulatory footprints that don\'t justify full-time CCO cost.'
  },
  {
    question: 'How is a fractional CCO different from a compliance consultant?',
    answer: 'A fractional CCO provides ongoing strategic compliance leadership and typically holds SMF16 accountability, making them personally accountable to the FCA. A compliance consultant provides project-based or advisory support without SMF responsibility. Fractional CCOs attend board meetings, manage regulatory relationships, and have oversight responsibility—consultants advise and deliver projects.'
  }
]

const ccoResponsibilities = [
  {
    area: 'Compliance Strategy',
    tasks: [
      'Developing the firm\'s compliance framework and strategy',
      'Setting compliance risk appetite with the board',
      'Prioritising compliance initiatives and resources',
      'Aligning compliance with business strategy'
    ]
  },
  {
    area: 'Regulatory Relationships',
    tasks: [
      'Managing FCA relationship and communications',
      'Responding to regulatory enquiries and requests',
      'Handling s166 reviews and regulatory visits',
      'Engaging with industry bodies and regulators'
    ]
  },
  {
    area: 'Compliance Programme',
    tasks: [
      'Overseeing the compliance monitoring programme',
      'Reviewing and approving compliance policies',
      'Ensuring adequate compliance resources',
      'Managing compliance testing and assurance'
    ]
  },
  {
    area: 'Governance & Reporting',
    tasks: [
      'Attending board and committee meetings',
      'Providing compliance MI and reporting',
      'Advising on compliance implications of business decisions',
      'Escalating compliance issues appropriately'
    ]
  },
  {
    area: 'Regulatory Change',
    tasks: [
      'Monitoring and assessing regulatory change',
      'Implementing new regulatory requirements',
      'Advising on Consumer Duty, operational resilience etc.',
      'Training staff on regulatory developments'
    ]
  },
  {
    area: 'Risk Management',
    tasks: [
      'Identifying and assessing compliance risks',
      'Managing the compliance risk register',
      'Investigating compliance breaches',
      'Implementing remediation actions'
    ]
  }
]

const benefitsForFirms = [
  {
    title: 'Cost Efficiency',
    desc: 'Access CCO-level expertise at 40-60% of full-time cost. No salary, pension, benefits, or recruitment fees.',
    stat: '50%',
    statLabel: 'Average Cost Saving'
  },
  {
    title: 'Immediate Availability',
    desc: 'Fractional CCOs can typically start within 2-4 weeks. No 3-month notice periods or lengthy recruitment.',
    stat: '2-4',
    statLabel: 'Weeks to Start'
  },
  {
    title: 'Senior Experience',
    desc: 'Access 15-20+ years compliance experience and often existing FCA SMF approval—faster and lower risk.',
    stat: '15+',
    statLabel: 'Years Experience'
  },
  {
    title: 'Flexibility',
    desc: 'Scale up or down based on business needs. Add days during authorisation, reduce once bedded in.',
    stat: '1-3',
    statLabel: 'Days Per Week'
  },
  {
    title: 'Cross-Firm Perspective',
    desc: 'Fractional CCOs work across multiple firms—bringing best practice, sector knowledge, and regulatory insight.',
    stat: '5+',
    statLabel: 'Firms Typically Worked'
  },
  {
    title: 'Independence',
    desc: 'External CCOs bring objectivity and independence—less susceptible to internal politics or groupthink.',
    stat: '100%',
    statLabel: 'Independent Oversight'
  }
]

const industriesServed = [
  { name: 'FinTech & Payments', desc: 'EMIs, payment institutions, consumer credit', demand: 'Very High' },
  { name: 'Crypto & Digital Assets', desc: 'FCA-registered cryptoasset businesses', demand: 'Very High' },
  { name: 'Investment Management', desc: 'Boutique asset managers, hedge funds', demand: 'High' },
  { name: 'Wealth Management', desc: 'IFAs, discretionary managers, family offices', demand: 'High' },
  { name: 'Insurance & InsurTech', desc: 'MGAs, insurers, insurance intermediaries', demand: 'Medium' },
  { name: 'Consumer Finance', desc: 'Lenders, debt purchasers, credit brokers', demand: 'Medium' },
]

export default function FractionalCCOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fractional CCO - Chief Compliance Officer in executive boardroom meeting"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-violet-800/90 to-slate-900/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-violet-300/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <span className="inline-block bg-violet-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Role Explainer
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            Fractional CCO<br />
            <span className="text-violet-400">Services UK</span>
          </h1>
          <p className="text-xl md:text-2xl text-violet-100/80 leading-relaxed max-w-3xl mb-8">
            <strong className="text-white">Fractional Chief Compliance Officer</strong> services for UK regulated firms.
            Part-time CCO expertise with SMF16 accountability at a fraction of full-time cost.
          </p>
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-violet-400">&pound;1,200</div>
              <div className="text-violet-200/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">SMF16</div>
              <div className="text-violet-200/60 text-sm uppercase tracking-wider">FCA Approved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">50%</div>
              <div className="text-violet-200/60 text-sm uppercase tracking-wider">Cost Saving</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#what-is" className="px-8 py-4 bg-violet-500 text-white font-bold uppercase tracking-wider hover:bg-violet-400 transition-colors">
              Learn More
            </Link>
            <Link href="/contact/companies" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-violet-900 transition-colors">
              Hire Fractional CCO
            </Link>
          </div>
        </div>
      </section>

      {/* What is a Fractional CCO */}
      <section id="what-is" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Definition</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What is a Fractional CCO?</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              A <strong className="text-slate-900">fractional CCO</strong> (Chief Compliance Officer) is a senior
              compliance executive who provides CCO-level leadership to organisations on a part-time, retained basis—
              typically working 1-3 days per week rather than full-time.
            </p>

            <p>
              In the UK regulatory context, a fractional CCO typically holds or is eligible for
              <a href="https://www.fca.org.uk/firms/senior-managers-certification-regime" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700 underline"> FCA SMF16 (Compliance Oversight)</a> approval—
              making them personally accountable for the firm's compliance with FCA rules. This distinguishes them from
              compliance consultants who advise without regulatory accountability.
            </p>

            <div className="bg-violet-50 border-l-4 border-violet-500 p-6 my-8 not-prose">
              <p className="text-lg font-semibold text-slate-900 mb-2">Key Distinction</p>
              <p className="text-slate-700">
                A <strong>fractional CCO</strong> holds SMF16 accountability and provides ongoing strategic leadership.
                A <strong>compliance consultant</strong> delivers project-based support without SMF responsibility.
                Both are valuable—but they serve different purposes.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Why "Fractional"?</h3>
            <p>
              The term "fractional" reflects that companies access a <em>fraction</em> of a senior executive's time—
              typically one to three days per week. This enables experienced CCOs to work with multiple clients
              simultaneously, and enables firms to access senior talent they couldn't otherwise afford.
            </p>

            <p>
              The fractional model has grown significantly in the UK since 2020, driven by:
            </p>
            <ul className="space-y-2">
              <li><strong>FinTech proliferation</strong> — Newly authorised firms need CCO coverage but can't justify full-time cost</li>
              <li><strong>Remote work normalisation</strong> — CCO functions can be delivered remotely, enabling portfolio careers</li>
              <li><strong>Regulatory complexity</strong> — <a href="https://www.fca.org.uk/firms/consumer-duty" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700 underline">Consumer Duty</a> and other requirements demand senior expertise</li>
              <li><strong>Cost pressures</strong> — Economic uncertainty makes fractional models attractive</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fractional CCO vs Full-Time CCO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Fractional CCO vs Full-Time CCO</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm bg-white">
              <thead>
                <tr className="bg-violet-100">
                  <th className="text-left p-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left p-4 font-bold text-slate-900">Fractional CCO</th>
                  <th className="text-left p-4 font-bold text-slate-900">Full-Time CCO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Annual Cost</td>
                  <td className="p-4 text-violet-600 font-semibold">&pound;48,000-&pound;144,000</td>
                  <td className="p-4 text-slate-700">&pound;150,000-&pound;250,000+</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Time Commitment</td>
                  <td className="p-4 text-slate-700">1-3 days per week</td>
                  <td className="p-4 text-slate-700">Full-time (5 days)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">SMF16 Accountability</td>
                  <td className="p-4 text-slate-700">Yes (can hold)</td>
                  <td className="p-4 text-slate-700">Yes</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Time to Hire</td>
                  <td className="p-4 text-slate-700">2-4 weeks</td>
                  <td className="p-4 text-slate-700">3-6 months</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Experience Level</td>
                  <td className="p-4 text-slate-700">Typically 15-20+ years</td>
                  <td className="p-4 text-slate-700">Variable—depends on budget</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Cross-Firm Knowledge</td>
                  <td className="p-4 text-slate-700">High (works with multiple firms)</td>
                  <td className="p-4 text-slate-700">Limited (single firm focus)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Day-to-Day Presence</td>
                  <td className="p-4 text-slate-700">Scheduled days + emergency cover</td>
                  <td className="p-4 text-slate-700">Always available</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Flexibility</td>
                  <td className="p-4 text-slate-700">Scale up/down as needed</td>
                  <td className="p-4 text-slate-700">Fixed cost</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 prose prose-lg prose-slate max-w-none">
            <p>
              <strong>When Fractional Makes Sense:</strong> Firms with fewer than 50-100 employees, straightforward
              regulatory footprints, or those in early growth stages typically find fractional CCOs more cost-effective.
              The key question: do you need CCO-level input daily, or can strategic oversight be delivered in 1-3 days per week?
            </p>
          </div>
        </div>
      </section>

      {/* What Does a Fractional CCO Do */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What Does a Fractional CCO Do?</h2>
            <p className="text-xl text-slate-600 mt-4">
              A fractional CCO performs the same functions as a full-time CCO—but prioritised and condensed
              into scheduled time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ccoResponsibilities.map((area, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-4">{area.area}</h3>
                <ul className="space-y-2">
                  {area.tasks.map((task, j) => (
                    <li key={j} className="text-slate-600 text-sm flex items-start">
                      <span className="text-violet-500 mr-2">&bull;</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Typical Fractional CCO Week</h3>
            <p>
              A fractional CCO working 2 days per week might structure their time as follows:
            </p>
            <ul className="space-y-2">
              <li><strong>Day 1:</strong> Compliance monitoring review, policy approvals, team catch-up, board pack preparation</li>
              <li><strong>Day 2:</strong> Board/committee attendance, regulatory correspondence, ad-hoc advice, strategic planning</li>
              <li><strong>Between days:</strong> Email and phone availability for urgent matters, regulatory monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Advantages</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Benefits of Hiring a Fractional CCO</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsForFirms.map((benefit, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6">
                <div className="text-3xl font-black text-violet-600 mb-1">{benefit.stat}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-3">{benefit.statLabel}</div>
                <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Sectors</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Industries That Use Fractional CCOs</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-violet-50">
                  <th className="text-left p-4 font-bold text-slate-900">Industry</th>
                  <th className="text-left p-4 font-bold text-slate-900">Typical Firms</th>
                  <th className="text-left p-4 font-bold text-slate-900">Demand</th>
                </tr>
              </thead>
              <tbody>
                {industriesServed.map((ind, i) => (
                  <tr key={i} className="border-b border-slate-200">
                    <td className="p-4 font-medium text-slate-900">{ind.name}</td>
                    <td className="p-4 text-slate-600">{ind.desc}</td>
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
            <p>
              <strong>FinTech and crypto</strong> have the highest demand for fractional CCOs, driven by rapid growth
              and regulatory complexity. These sectors typically engage CCOs for 1-2 days per week, scaling up during
              authorisation or product launches.
            </p>
            <p>
              For industry-specific guidance, see our article on
              <Link href="/fractional-compliance-fintech" className="text-violet-600 hover:text-violet-700 underline ml-1">fractional compliance for FinTech</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">How to Find a Fractional CCO in the UK</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Define Your Requirements</h3>
            <p>Before searching, clarify:</p>
            <ul className="space-y-2">
              <li>Do you need SMF16 accountability, or advisory support?</li>
              <li>How many days per week do you need?</li>
              <li>What sector experience is required? (FinTech, crypto, investment, etc.)</li>
              <li>Do you need MLRO (SMF17) as well as CCO coverage?</li>
              <li>What's your budget for fractional CCO services?</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Source Candidates</h3>
            <p>Fractional CCOs can be found through:</p>
            <ul className="space-y-2">
              <li><strong>Compliance consultancies</strong> — Bovill, Thistle Initiatives, Compliancy Services</li>
              <li><strong>Specialist recruiters</strong> — Compliance-focused interim recruitment agencies</li>
              <li><strong>Professional networks</strong> — ICA, CISI, LinkedIn compliance groups</li>
              <li><strong>Direct referrals</strong> — From lawyers, accountants, or industry peers</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Evaluate Candidates</h3>
            <p>Key criteria for fractional CCO selection:</p>
            <ul className="space-y-2">
              <li><strong>FCA approval history</strong> — Have they held SMF16 before? Clean regulatory record?</li>
              <li><strong>Sector experience</strong> — Experience with your type of regulated activity?</li>
              <li><strong>Availability</strong> — Capacity for the days you need? Emergency cover arrangement?</li>
              <li><strong>Communication style</strong> — Will they integrate with your board and team?</li>
              <li><strong>References</strong> — Feedback from previous fractional clients</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. FCA Approval (if required)</h3>
            <p>
              If your fractional CCO will hold SMF16, they'll need FCA approval at your firm (even if approved elsewhere).
              This typically takes 8-12 weeks through the <a href="https://www.fca.org.uk/firms/approved-persons" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700 underline">Form A process</a>.
              CCOs with existing approvals may benefit from faster processing.
            </p>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Fractional CCO Costs</h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-violet-50">
                  <th className="text-left p-4 font-bold text-slate-900">Engagement Level</th>
                  <th className="text-left p-4 font-bold text-slate-900">Day Rate</th>
                  <th className="text-left p-4 font-bold text-slate-900">Monthly Cost</th>
                  <th className="text-left p-4 font-bold text-slate-900">Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Light Touch (1 day/week)</td>
                  <td className="p-4 text-violet-600 font-semibold">&pound;1,000-&pound;1,500</td>
                  <td className="p-4 text-slate-700">&pound;4,000-&pound;6,000</td>
                  <td className="p-4 text-slate-700">&pound;48,000-&pound;72,000</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Standard (2 days/week)</td>
                  <td className="p-4 text-violet-600 font-semibold">&pound;1,000-&pound;1,500</td>
                  <td className="p-4 text-slate-700">&pound;8,000-&pound;12,000</td>
                  <td className="p-4 text-slate-700">&pound;96,000-&pound;144,000</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Comprehensive (3 days/week)</td>
                  <td className="p-4 text-violet-600 font-semibold">&pound;1,000-&pound;1,500</td>
                  <td className="p-4 text-slate-700">&pound;12,000-&pound;18,000</td>
                  <td className="p-4 text-slate-700">&pound;144,000-&pound;216,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              <strong>Cost comparison:</strong> A full-time CCO at a mid-sized FinTech earns &pound;150,000-&pound;180,000
              salary plus &pound;30,000-&pound;50,000 in benefits, NI, and overhead—total cost &pound;180,000-&pound;230,000.
              A fractional CCO at 2 days per week costs &pound;96,000-&pound;144,000—a 40-50% saving.
            </p>
            <p>
              For detailed pricing information, see our guide on
              <Link href="/outsourced-compliance-cost" className="text-violet-600 hover:text-violet-700 underline ml-1">outsourced compliance costs</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Fractional CCO: Common Questions
            </h2>
          </div>
          <FAQ skipSchema={true} items={CCO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need a Fractional<br /><span className="text-violet-400">Chief Compliance Officer?</span>
          </h2>
          <p className="text-xl text-violet-200/80 mb-10 max-w-2xl mx-auto">
            Connect with experienced fractional CCOs for your FCA-regulated business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-violet-500 text-white font-bold uppercase tracking-wider hover:bg-violet-400 transition-colors">
              Hire Fractional CCO
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-violet-900 transition-colors">
              Complete Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12 bg-violet-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/part-time-compliance-jobs-uk" className="bg-white p-6 border border-violet-200 hover:border-violet-400 transition-colors group">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Career Guide</span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-violet-600 transition-colors">Part-Time Compliance Jobs UK</h3>
              <p className="text-slate-600 text-sm mt-2">Find flexible CCO, MLRO, and compliance officer roles paying £800-£1,500/day.</p>
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="bg-white p-6 border border-violet-200 hover:border-violet-400 transition-colors group">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Complete Guide</span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-violet-600 transition-colors">Outsourced Compliance Officer UK</h3>
              <p className="text-slate-600 text-sm mt-2">Everything you need to know about outsourced and fractional compliance services.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Related Guides</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/outsourced-compliance-officer-uk" className="text-slate-600 hover:text-violet-600 font-medium transition-colors">Outsourced Compliance Guide</Link>
              <Link href="/fractional-mlro-uk" className="text-slate-600 hover:text-violet-600 font-medium transition-colors">Fractional MLRO</Link>
              <Link href="/compliance-officer-salary-uk" className="text-slate-600 hover:text-violet-600 font-medium transition-colors">Compliance Salary UK</Link>
              <Link href="/part-time-compliance-jobs-uk" className="text-slate-600 hover:text-violet-600 font-medium transition-colors">Part-Time Compliance Jobs</Link>
              <Link href="/fractional-compliance-fintech" className="text-slate-600 hover:text-violet-600 font-medium transition-colors">FinTech Compliance</Link>
              <Link href="/outsourced-compliance-cost" className="text-slate-600 hover:text-violet-600 font-medium transition-colors">Compliance Costs</Link>
              <Link href="/how-to-become-fractional-compliance-officer" className="text-slate-600 hover:text-violet-600 font-medium transition-colors">Become Fractional Compliance</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
