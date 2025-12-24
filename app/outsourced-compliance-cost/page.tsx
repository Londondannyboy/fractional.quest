import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Outsourced Compliance Cost UK | Pricing Guide 2025',
  description: 'How much does an outsourced compliance officer cost? UK pricing guide - day rates £800-£1,500, monthly retainers £3,000-£12,000. CCO, MLRO, and consultant costs.',
  keywords: 'outsourced compliance cost, compliance officer cost, fractional cco cost, mlro cost, compliance consultant rates, compliance services pricing',
  alternates: {
    canonical: 'https://fractional.quest/outsourced-compliance-cost',
  },
  openGraph: {
    title: 'Outsourced Compliance Cost UK | Pricing Guide 2025',
    description: 'Complete guide to outsourced compliance costs. Day rates £800-£1,500, monthly retainers £3,000-£12,000.',
    url: 'https://fractional.quest/outsourced-compliance-cost',
  },
}

const COST_FAQS = [
  {
    question: 'How much does an outsourced compliance officer cost?',
    answer: 'Outsourced compliance officers in the UK typically charge £800-£1,500 per day, or £3,000-£12,000 monthly on retainer. Costs vary by seniority (CCO vs consultant), scope (SMF16/SMF17 or advisory), and time commitment. Most firms pay £4,000-£8,000/month for combined CCO and MLRO services at 1-2 days per week.'
  },
  {
    question: 'Is outsourced compliance cheaper than full-time?',
    answer: 'Yes, typically 40-60% cheaper. A full-time compliance officer costs £100,000-£180,000 annually (salary plus employer costs). Outsourced compliance at 2 days per week costs £80,000-£120,000 annually. You also save on recruitment fees, training, benefits, and management overhead. For firms needing 1-3 days/week coverage, outsourced is significantly more cost-effective.'
  },
  {
    question: 'What factors affect outsourced compliance cost?',
    answer: 'Key cost factors include: SMF accountability (SMF16/SMF17 holders charge 20-30% more), sector complexity (crypto and investment firms pay premium rates), time commitment (more days = lower per-day rate), experience level (15+ year veterans charge more), scope of work (ongoing oversight vs project-based), and location (London premium applies).'
  },
  {
    question: 'How much does a fractional CCO cost per month?',
    answer: 'A fractional CCO (SMF16) typically costs £4,000-£6,000/month for 1 day per week, or £8,000-£12,000/month for 2 days per week. This equates to day rates of £1,000-£1,500. Annual cost ranges from £48,000-£144,000 depending on time commitment—compared to £150,000-£250,000 for a full-time CCO.'
  },
  {
    question: 'What is the cost of an outsourced MLRO?',
    answer: 'An outsourced MLRO (SMF17) typically costs £3,500-£5,000/month for 1 day per week, or £7,000-£10,000/month for 2 days per week. Day rates range from £900-£1,300. Combined CCO/MLRO services (same person) are typically 10-15% cheaper than separate appointments.'
  },
  {
    question: 'What ROI can I expect from outsourced compliance?',
    answer: 'ROI from outsourced compliance includes: avoiding regulatory fines (which can be millions), faster FCA authorisation (weeks vs months of delay), reduced regulatory risk, and cost savings vs full-time hire. For a FinTech paying £6,000/month, avoiding even a minor FCA fine would represent significant ROI, aside from the direct cost savings.'
  }
]

const pricingTable = [
  { role: 'Compliance Consultant (Non-SMF)', dayRate: '£700-£1,000', monthly1Day: '£2,800-£4,000', monthly2Days: '£5,600-£8,000', annual: '£33,600-£96,000' },
  { role: 'Fractional MLRO (SMF17)', dayRate: '£900-£1,300', monthly1Day: '£3,600-£5,200', monthly2Days: '£7,200-£10,400', annual: '£43,200-£124,800' },
  { role: 'Fractional CCO (SMF16)', dayRate: '£1,000-£1,500', monthly1Day: '£4,000-£6,000', monthly2Days: '£8,000-£12,000', annual: '£48,000-£144,000' },
  { role: 'CCO + MLRO Combined', dayRate: '£1,100-£1,500', monthly1Day: '£4,400-£6,000', monthly2Days: '£8,800-£12,000', annual: '£52,800-£144,000' },
]

const costComparison = [
  { item: 'Base Salary', outsourced: '—', fullTime: '£90,000-£150,000' },
  { item: 'Employer NI', outsourced: '—', fullTime: '£12,000-£18,000' },
  { item: 'Pension Contribution', outsourced: '—', fullTime: '£4,500-£7,500' },
  { item: 'Benefits (Healthcare, etc.)', outsourced: '—', fullTime: '£3,000-£8,000' },
  { item: 'Recruitment Fee', outsourced: '—', fullTime: '£20,000-£35,000 (one-time)' },
  { item: 'Training & CPD', outsourced: 'Included', fullTime: '£2,000-£5,000' },
  { item: 'Management Overhead', outsourced: 'Minimal', fullTime: '£5,000-£10,000' },
  { item: 'Day Rate / Retainer', outsourced: '£48,000-£144,000', fullTime: '—' },
  { item: 'Total Annual Cost', outsourced: '£48,000-£144,000', fullTime: '£136,500-£233,500+' },
]

const projectCosts = [
  { project: 'FCA Authorisation Support', range: '£15,000-£40,000', notes: 'Depends on permission complexity' },
  { project: 'Consumer Duty Implementation', range: '£10,000-£25,000', notes: 'Gap analysis, policy, governance' },
  { project: 'Compliance Framework Build', range: '£8,000-£20,000', notes: 'Full policy and procedure suite' },
  { project: 'Regulatory Change Implementation', range: '£5,000-£15,000', notes: 'Per significant regulatory change' },
  { project: 'Compliance Monitoring Programme', range: '£5,000-£12,000', notes: 'Annual monitoring plan design' },
  { project: 'AML Framework Review', range: '£6,000-£15,000', notes: 'Risk assessment, policies, training' },
]

export default function OutsourcedComplianceCostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Outsourced compliance cost UK - pricing and budget planning for compliance services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/90 to-slate-900/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-green-300/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <span className="inline-block bg-green-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Pricing Guide
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            Outsourced Compliance<br />
            <span className="text-green-400">Cost UK</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100/80 leading-relaxed max-w-3xl mb-8">
            How much does an <strong className="text-white">outsourced compliance officer</strong> cost?
            Complete UK pricing guide for fractional CCO, MLRO, and compliance consultant services.
          </p>
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-green-400">&pound;1,050</div>
              <div className="text-green-200/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">&pound;5,500</div>
              <div className="text-green-200/60 text-sm uppercase tracking-wider">Avg Monthly</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">50%</div>
              <div className="text-green-200/60 text-sm uppercase tracking-wider">Savings vs FTE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Table */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Outsourced Compliance Rates 2025</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-4 font-bold text-slate-900">Role</th>
                  <th className="text-left p-4 font-bold text-slate-900">Day Rate</th>
                  <th className="text-left p-4 font-bold text-slate-900">Monthly (1 day/wk)</th>
                  <th className="text-left p-4 font-bold text-slate-900">Monthly (2 days/wk)</th>
                  <th className="text-left p-4 font-bold text-slate-900">Annual Range</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={i} className="border-b border-slate-200">
                    <td className="p-4 font-medium text-slate-900">{row.role}</td>
                    <td className="p-4 text-green-600 font-semibold">{row.dayRate}</td>
                    <td className="p-4 text-slate-700">{row.monthly1Day}</td>
                    <td className="p-4 text-slate-700">{row.monthly2Days}</td>
                    <td className="p-4 text-slate-600">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 prose prose-lg prose-slate max-w-none">
            <p className="text-slate-600">
              Prices shown are typical market rates for the UK. Actual costs vary based on complexity,
              sector, location, and specific requirements. Retainer arrangements often include email/phone
              support between scheduled days.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Outsourced vs Full-Time: Cost Comparison</h2>
            <p className="text-xl text-slate-600 mt-4">
              Comparing 2 days/week outsourced CCO to a full-time compliance officer hire.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm bg-white">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-4 font-bold text-slate-900">Cost Element</th>
                  <th className="text-left p-4 font-bold text-slate-900">Outsourced (2 days/wk)</th>
                  <th className="text-left p-4 font-bold text-slate-900">Full-Time Employee</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-200 ${i === costComparison.length - 1 ? 'bg-green-50 font-bold' : ''}`}>
                    <td className="p-4 font-medium text-slate-900">{row.item}</td>
                    <td className="p-4 text-green-600">{row.outsourced}</td>
                    <td className="p-4 text-slate-700">{row.fullTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-green-100 p-6 rounded-lg">
            <p className="text-slate-800">
              <strong className="text-slate-900">Bottom Line:</strong> Outsourced compliance at 2 days/week costs
              approximately &pound;96,000-&pound;120,000 annually—compared to &pound;150,000-&pound;230,000 for a
              full-time hire. That's a <strong>40-50% cost saving</strong> while accessing senior expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Project-Based Costs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Projects</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Project-Based Compliance Costs</h2>
            <p className="text-xl text-slate-600 mt-4">
              Beyond ongoing retainers, some compliance work is delivered as fixed-price projects.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-green-50">
                  <th className="text-left p-4 font-bold text-slate-900">Project</th>
                  <th className="text-left p-4 font-bold text-slate-900">Typical Cost</th>
                  <th className="text-left p-4 font-bold text-slate-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                {projectCosts.map((project, i) => (
                  <tr key={i} className="border-b border-slate-200">
                    <td className="p-4 font-medium text-slate-900">{project.project}</td>
                    <td className="p-4 text-green-600 font-semibold">{project.range}</td>
                    <td className="p-4 text-slate-600">{project.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Factors Affecting Cost */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Factors</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What Affects Outsourced Compliance Cost?</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. SMF Accountability</h3>
            <p>
              Professionals holding <strong>SMF16 (Compliance Oversight)</strong> or <strong>SMF17 (MLRO)</strong> roles
              charge 20-30% more than non-SMF consultants. This reflects personal regulatory accountability—they can
              face FCA enforcement action for compliance failures.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">2. Industry Complexity</h3>
            <p>
              Some sectors command premium rates due to regulatory complexity:
            </p>
            <ul className="space-y-2">
              <li><strong>Crypto/Digital Assets:</strong> +15-25% (specialist AML, Travel Rule)</li>
              <li><strong>Investment Management:</strong> +10-20% (MiFID II, CASS complexity)</li>
              <li><strong>Consumer Credit:</strong> +5-10% (CONC, affordability requirements)</li>
              <li><strong>Payments/E-money:</strong> Base rate (high volume but established frameworks)</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">3. Time Commitment</h3>
            <p>
              Higher time commitments often attract volume discounts. A firm requiring 3 days/week may negotiate
              a 10-15% per-day discount compared to 1 day/week engagement.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">4. Experience Level</h3>
            <p>
              Day rates correlate with experience:
            </p>
            <ul className="space-y-2">
              <li><strong>10-15 years:</strong> &pound;800-&pound;1,100/day</li>
              <li><strong>15-20 years:</strong> &pound;1,000-&pound;1,300/day</li>
              <li><strong>20+ years (former CCO):</strong> &pound;1,200-&pound;1,500+/day</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">5. Location</h3>
            <p>
              London-based professionals typically charge 10-15% more than those outside London. However,
              remote delivery has reduced this premium as location matters less for strategic compliance work.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">ROI of Outsourced Compliance</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              Beyond direct cost savings, outsourced compliance delivers return on investment through:
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-2xl font-black text-green-600 mb-2">Regulatory Fines Avoided</div>
                <p className="text-slate-600 text-sm">
                  FCA fines for compliance failures can be millions. Even a small fine exceeds years of compliance costs.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-2xl font-black text-green-600 mb-2">Faster Authorisation</div>
                <p className="text-slate-600 text-sm">
                  Experienced compliance officers reduce FCA authorisation time by weeks—accelerating revenue.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-2xl font-black text-green-600 mb-2">Business Enablement</div>
                <p className="text-slate-600 text-sm">
                  Proactive compliance advice enables product launches and market entry that might otherwise stall.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-2xl font-black text-green-600 mb-2">Investor Confidence</div>
                <p className="text-slate-600 text-sm">
                  Professional compliance arrangements reassure investors and facilitate due diligence.
                </p>
              </div>
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
              Compliance Cost: Common Questions
            </h2>
          </div>
          <FAQ items={COST_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400 mb-4 block">Get a Quote</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need Compliance<br /><span className="text-green-400">Cost Estimate?</span>
          </h2>
          <p className="text-xl text-green-200/80 mb-10 max-w-2xl mx-auto">
            Get a tailored quote for outsourced compliance services for your regulated business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-green-500 text-white font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">
              Request Quote
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-green-900 transition-colors">
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
              <Link href="/outsourced-compliance-officer-uk" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Outsourced Compliance Guide</Link>
              <Link href="/fractional-cco" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Fractional CCO</Link>
              <Link href="/fractional-mlro-uk" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Fractional MLRO</Link>
              <Link href="/compliance-officer-salary-uk" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Compliance Salary UK</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
