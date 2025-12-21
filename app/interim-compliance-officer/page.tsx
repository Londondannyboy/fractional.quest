import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Interim Compliance Officer UK | When and Why to Hire One 2025',
  description: 'Interim compliance officer guide - when and why to hire one. Temporary CCO/MLRO cover, regulatory transitions, maternity cover. Day rates £900-£1,400 UK.',
  keywords: 'interim compliance officer, interim cco, interim mlro, temporary compliance officer, compliance maternity cover, interim compliance jobs',
  alternates: {
    canonical: 'https://fractional.quest/interim-compliance-officer',
  },
  openGraph: {
    title: 'Interim Compliance Officer UK | When and Why to Hire One',
    description: 'When to hire an interim compliance officer. Temporary CCO/MLRO cover for transitions, departures, and special projects.',
    url: 'https://fractional.quest/interim-compliance-officer',
  },
}

const INTERIM_FAQS = [
  {
    question: 'What is an interim compliance officer?',
    answer: 'An interim compliance officer is a temporary, full-time or near-full-time compliance professional engaged to cover a specific need—such as a resignation, maternity leave, regulatory investigation, or while recruiting a permanent hire. Unlike fractional compliance (ongoing part-time), interim is typically a defined period engagement at higher time commitment.'
  },
  {
    question: 'How is interim different from fractional compliance?',
    answer: 'Interim compliance is temporary full-time (3-5 days/week for a defined period, e.g., 3-12 months). Fractional compliance is ongoing part-time (1-3 days/week indefinitely). Interim fills a gap while you recruit; fractional is a permanent operating model. Interim typically costs more per month but is time-limited.'
  },
  {
    question: 'How long do interim compliance engagements last?',
    answer: 'Interim compliance engagements typically last 3-12 months. Common scenarios: 3-6 months for maternity/parental leave cover, 4-8 months while recruiting a permanent CCO, 6-12 months for regulatory remediation projects, or 3-6 months for FCA authorisation support.'
  },
  {
    question: 'How much does an interim compliance officer cost?',
    answer: 'Interim compliance officers charge £900-£1,400 per day for full-time engagement. Monthly cost at 4-5 days/week ranges from £16,000-£25,000. This is higher than permanent employment but reflects speed of deployment, flexibility, and absence of employment obligations.'
  },
  {
    question: 'Can an interim compliance officer hold SMF approval?',
    answer: 'Yes, interim compliance officers can hold SMF16 (Compliance Oversight) or SMF17 (MLRO) approval. For extended interim periods, FCA approval is typically required. Some interim professionals already hold SMF approval at multiple firms, enabling faster deployment.'
  },
  {
    question: 'When should I hire interim vs fractional compliance?',
    answer: 'Hire interim when you need full-time temporary cover (resignation, leave, project). Hire fractional when you need ongoing part-time coverage as your permanent operating model. Many firms start with interim during crisis and transition to fractional once stabilised.'
  }
]

const interimScenarios = [
  {
    scenario: 'Compliance Officer Resignation',
    description: 'Your CCO or MLRO has resigned and you need immediate SMF cover while recruiting their replacement.',
    typicalDuration: '4-8 months',
    urgency: 'High'
  },
  {
    scenario: 'Maternity/Parental Leave',
    description: 'Cover during parental leave when your compliance officer will return to the role.',
    typicalDuration: '3-9 months',
    urgency: 'Medium'
  },
  {
    scenario: 'Regulatory Investigation',
    description: 'FCA enforcement action or s166 review requiring experienced, independent compliance leadership.',
    typicalDuration: '6-12 months',
    urgency: 'Very High'
  },
  {
    scenario: 'FCA Authorisation',
    description: 'Compliance leadership during authorisation process, transitioning to permanent hire post-approval.',
    typicalDuration: '6-12 months',
    urgency: 'High'
  },
  {
    scenario: 'Major Regulatory Change',
    description: 'Implementing significant regulatory change (Consumer Duty, operational resilience) requiring additional capacity.',
    typicalDuration: '3-9 months',
    urgency: 'Medium'
  },
  {
    scenario: 'M&A Integration',
    description: 'Compliance integration during acquisition or merger, managing combined regulatory requirements.',
    typicalDuration: '6-12 months',
    urgency: 'High'
  }
]

export default function InterimComplianceOfficerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80"
            alt="Interim compliance officer UK - temporary CCO and MLRO cover for regulated firms"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-orange-800/90 to-slate-900/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-orange-300/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <span className="inline-block bg-orange-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Situation Guide
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[0.95] tracking-tight">
            Interim Compliance<br />
            <span className="text-orange-400">Officer UK</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-100/80 leading-relaxed max-w-3xl mb-8">
            When and why to hire an <strong className="text-white">interim compliance officer</strong>.
            Temporary CCO and MLRO cover for resignations, regulatory issues, and transitions.
          </p>
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-orange-400">&pound;1,150</div>
              <div className="text-orange-200/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">3-12</div>
              <div className="text-orange-200/60 text-sm uppercase tracking-wider">Months Typical</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">2 wks</div>
              <div className="text-orange-200/60 text-sm uppercase tracking-wider">Start Time</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#scenarios" className="px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">
              View Scenarios
            </Link>
            <Link href="/contact/companies" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-900 transition-colors">
              Hire Interim CCO
            </Link>
          </div>
        </div>
      </section>

      {/* What is Interim Compliance */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Definition</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What is an Interim Compliance Officer?</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              An <strong className="text-slate-900">interim compliance officer</strong> is a temporary, typically
              full-time compliance professional engaged to fill a specific gap—such as covering a departure,
              managing a crisis, or bridging while you recruit a permanent hire.
            </p>

            <p>
              Unlike <Link href="/outsourced-compliance-officer-uk" className="text-orange-600 hover:text-orange-700 underline">fractional compliance</Link> (ongoing
              part-time), interim is characterised by:
            </p>
            <ul className="space-y-2">
              <li><strong>Full-time or near-full-time commitment</strong> (3-5 days per week)</li>
              <li><strong>Defined duration</strong> (typically 3-12 months)</li>
              <li><strong>Specific objective</strong> (cover departure, complete project, manage crisis)</li>
              <li><strong>Exit strategy</strong> (transition to permanent hire or fractional arrangement)</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 not-prose">
              <p className="text-lg font-semibold text-slate-900 mb-2">Interim vs Fractional: Key Difference</p>
              <p className="text-slate-700">
                <strong>Interim</strong> = temporary full-time (gap-filling, time-limited)<br />
                <strong>Fractional</strong> = permanent part-time (ongoing operating model)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Situations</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">When to Hire an Interim Compliance Officer</h2>
          </div>

          <div className="space-y-6">
            {interimScenarios.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.scenario}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                  <div className="flex gap-4 md:flex-col md:items-end">
                    <span className="text-sm text-slate-500">
                      <span className="font-semibold text-slate-900">{item.typicalDuration}</span>
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      item.urgency === 'Very High' ? 'bg-red-100 text-red-700' :
                      item.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>{item.urgency} Urgency</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interim vs Fractional vs Outsourced */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Interim vs Fractional vs Outsourced: What's the Difference?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-orange-50">
                  <th className="text-left p-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left p-4 font-bold text-slate-900">Interim</th>
                  <th className="text-left p-4 font-bold text-slate-900">Fractional</th>
                  <th className="text-left p-4 font-bold text-slate-900">Full-Time Employee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Time Commitment</td>
                  <td className="p-4 text-slate-700">Full-time (3-5 days/wk)</td>
                  <td className="p-4 text-slate-700">Part-time (1-3 days/wk)</td>
                  <td className="p-4 text-slate-700">Full-time (5 days/wk)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Duration</td>
                  <td className="p-4 text-slate-700">3-12 months (defined)</td>
                  <td className="p-4 text-slate-700">Ongoing (indefinite)</td>
                  <td className="p-4 text-slate-700">Permanent</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Monthly Cost</td>
                  <td className="p-4 text-orange-600 font-semibold">&pound;16,000-&pound;25,000</td>
                  <td className="p-4 text-slate-700">&pound;4,000-&pound;12,000</td>
                  <td className="p-4 text-slate-700">&pound;8,000-&pound;15,000 (all-in)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Start Time</td>
                  <td className="p-4 text-slate-700">1-2 weeks</td>
                  <td className="p-4 text-slate-700">2-4 weeks</td>
                  <td className="p-4 text-slate-700">3-6 months</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Best For</td>
                  <td className="p-4 text-slate-700">Gap cover, crises, projects</td>
                  <td className="p-4 text-slate-700">Ongoing strategic oversight</td>
                  <td className="p-4 text-slate-700">Complex, high-volume compliance</td>
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
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Interim Compliance Officer Costs</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Day Rates</h3>
            <ul className="space-y-2">
              <li><strong>Interim Compliance Officer:</strong> &pound;900-&pound;1,200/day</li>
              <li><strong>Interim CCO (SMF16):</strong> &pound;1,100-&pound;1,400/day</li>
              <li><strong>Interim MLRO (SMF17):</strong> &pound;1,000-&pound;1,300/day</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Monthly Cost (Full-Time)</h3>
            <p>
              At 4-5 days per week, interim compliance costs:
            </p>
            <ul className="space-y-2">
              <li><strong>Junior/Mid Interim:</strong> &pound;16,000-&pound;20,000/month</li>
              <li><strong>Senior Interim CCO:</strong> &pound;20,000-&pound;25,000/month</li>
            </ul>

            <p>
              While this exceeds permanent employment cost, it reflects speed of deployment, flexibility,
              no employment obligations, and no recruitment fees.
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
              Interim Compliance: Common Questions
            </h2>
          </div>
          <FAQ items={INTERIM_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need Interim<br /><span className="text-orange-400">Compliance Cover?</span>
          </h2>
          <p className="text-xl text-orange-200/80 mb-10 max-w-2xl mx-auto">
            Connect with experienced interim CCOs and MLROs for your temporary compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-orange-500 text-white font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">
              Hire Interim CCO
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-900 transition-colors">
              Outsourcing Guide
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
              <Link href="/outsourced-compliance-officer-uk" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Outsourced Compliance Guide</Link>
              <Link href="/fractional-cco" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Fractional CCO</Link>
              <Link href="/part-time-compliance-jobs-uk" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Part-Time Compliance Jobs</Link>
              <Link href="/outsourced-compliance-cost" className="text-slate-600 hover:text-orange-600 font-medium transition-colors">Compliance Costs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
