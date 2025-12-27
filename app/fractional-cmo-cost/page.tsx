import { Metadata } from 'next'
import Link from 'next/link'
import { RoleCalculator } from '@/components/RoleCalculator'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CMO Cost UK 2025',
  description: 'Fractional CMO cost UK. Day rates £700-£1,400, monthly £3k-£5.5k. 40-60% cheaper than full-time.',
  keywords: 'fractional cmo cost, fractional cmo pricing, fractional cmo rates, how much does a fractional cmo cost, fractional cmo day rate, fractional cmo retainer',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cmo-cost',
  },
  openGraph: {
    title: 'Fractional CMO Cost UK 2025: Complete Pricing Guide',
    description: 'Fractional CMO costs £700-£1,400/day or £3k-£5.5k/month. 40-60% cheaper than full-time. Calculate your savings.',
    url: 'https://fractional.quest/fractional-cmo-cost',
  },
}

const faqItems = [
  {
    question: 'How much does a fractional CMO cost in the UK?',
    answer: 'Fractional CMO costs range from £700-£1,400 per day or £3,000-£5,500 per month for 1-2 days per week. Annual costs typically range from £70,000-£140,000, compared to £150,000-£250,000+ for a full-time CMO. Pricing depends on experience level, industry specialization, and engagement scope.',
  },
  {
    question: 'Is a fractional CMO cheaper than hiring full-time?',
    answer: 'Yes, typically 40-60% cheaper. A fractional CMO at £1,000/day for 2 days/week costs £104k annually vs £180k-£250k+ for full-time (including salary, benefits, equity, and overhead). You get senior expertise at a fraction of the cost without long-term employment commitments.',
  },
  {
    question: 'What pricing models do fractional CMOs use?',
    answer: 'Three main models: (1) Day rate: £700-£1,400 per day, pay as you go. (2) Monthly retainer: £3k-£5.5k for ongoing support (4-8 days/month). (3) Project-based: £10k-£50k for defined scope work like rebrands or product launches. Retainers are most common for long-term growth.',
  },
  {
    question: 'What affects fractional CMO pricing?',
    answer: 'Key factors: Experience level (10-15 years = £700-£900/day, 20+ years = £1,200-£1,400/day), industry expertise (B2B SaaS, FinTech command premiums), channel specialization (PLG, performance marketing), location (London +10-20%), and engagement scope (strategic advisory vs hands-on execution).',
  },
  {
    question: 'Are there hidden costs with fractional CMOs?',
    answer: 'Minimal. Unlike full-time hires, there are no benefits, pension contributions, office space, or severance costs. You may need to budget for tools and software they recommend, plus agency/freelancer costs they manage. Most fractional CMOs work remotely, reducing overhead.',
  },
  {
    question: 'How long should I hire a fractional CMO for?',
    answer: 'Minimum 3-6 months to see meaningful impact. Most engagements run 12-24 months. The first 90 days focus on audit and strategy, with results accelerating in months 4-12 as systems scale. Many companies transition to full-time CMOs once they hit certain revenue milestones.',
  },
]

export default function FractionalCMOCostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-950/200 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cmo" className="text-blue-900/30 hover:text-white mb-8 inline-flex items-center text-sm">
            <span className="mr-2">←</span> Back to Fractional CMO Guide
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-gray-50 text-blue-400 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Pricing Guide 2025
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                Fractional CMO<br />Cost
              </h1>
              <p className="text-2xl md:text-3xl text-blue-950/20 leading-relaxed font-light mb-8">
                Complete UK pricing guide. Day rates, monthly retainers, and ROI comparison vs full-time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-black text-gray-900 mb-2">£700-1.4k</div>
                <div className="text-blue-900/30 text-sm">Day Rate Range</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-black text-gray-900 mb-2">£3-5.5k</div>
                <div className="text-blue-900/30 text-sm">Monthly Retainer</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-black text-gray-900 mb-2">40-60%</div>
                <div className="text-blue-900/30 text-sm">Cost Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <div className="text-4xl font-black text-gray-900 mb-2">£70-140k</div>
                <div className="text-blue-900/30 text-sm">Annual Cost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Cost Calculator</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Calculate Your Savings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the cost of hiring a fractional CMO vs full-time. See potential savings in real-time. Understanding <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 tax implications</a> is crucial when engaging fractional executives.
            </p>
          </div>
          <RoleCalculator role="cmo" />
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Pricing Models</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How Fractional CMOs Charge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three common pricing models. Choose based on your needs, budget, and engagement timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Day Rate */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200 hover:border-blue-700 transition-all">
              <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">Option 1</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Day Rate</h3>
              <div className="mb-6">
                <div className="text-5xl font-black text-gray-900">£700-£1,400</div>
                <div className="text-gray-600">per day</div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-bold text-gray-900 mb-3">Best For:</div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Short-term projects (3-6 months)</li>
                  <li>• Variable workload needs</li>
                  <li>• Testing fractional before committing</li>
                  <li>• Strategic advisory only</li>
                </ul>
              </div>
              <div className="border-t pt-6">
                <div className="text-sm font-bold text-gray-900 mb-2">Example Cost:</div>
                <div className="text-gray-700 text-sm">
                  2 days/week × £1,000/day = £8,000/month or £104,000/year
                </div>
              </div>
            </div>

            {/* Monthly Retainer */}
            <div className="bg-blue-950/20 p-8 rounded-lg shadow-md border-2 border-blue-400 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 text-xs font-bold uppercase rounded-full">
                Most Popular
              </div>
              <div className="text-blue-700 font-bold text-sm uppercase tracking-wider mb-4">Option 2</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Monthly Retainer</h3>
              <div className="mb-6">
                <div className="text-5xl font-black text-gray-900">£3k-£5.5k</div>
                <div className="text-gray-600">per month</div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-bold text-gray-900 mb-3">Best For:</div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Ongoing marketing leadership</li>
                  <li>• Predictable monthly costs</li>
                  <li>• Long-term growth (12+ months)</li>
                  <li>• Team management & strategy</li>
                </ul>
              </div>
              <div className="border-t border-blue-800/40 pt-6">
                <div className="text-sm font-bold text-gray-900 mb-2">Example Cost:</div>
                <div className="text-gray-700 text-sm">
                  £4,500/month retainer (6-8 days) = £54,000/year
                </div>
              </div>
            </div>

            {/* Project-Based */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200 hover:border-blue-700 transition-all">
              <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">Option 3</div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Project-Based</h3>
              <div className="mb-6">
                <div className="text-5xl font-black text-gray-900">£10k-£50k</div>
                <div className="text-gray-600">per project</div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-bold text-gray-900 mb-3">Best For:</div>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Defined scope deliverables</li>
                  <li>• Product launches</li>
                  <li>• Rebrands or repositioning</li>
                  <li>• Marketing audits</li>
                </ul>
              </div>
              <div className="border-t pt-6">
                <div className="text-sm font-bold text-gray-900 mb-2">Example Cost:</div>
                <div className="text-gray-700 text-sm">
                  £25k for rebrand project (3 months, 15 days of work)
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-950/20 border-l-4 border-blue-600 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Pro Tip: Start with a 3-Month Trial</p>
                <p className="text-gray-700">
                  Most companies begin with a 3-month monthly retainer to assess fit. This gives the CMO time to audit, strategize,
                  and deliver early wins. If it works, extend to 12 months. If not, part ways cleanly with 30 days notice. Consider <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a> to maximize value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day Rate Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Rate Breakdown</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Fractional CMO Day Rates by Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Pricing varies significantly based on years of experience, track record, and specialization. The <a href="https://www.cim.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Marketing (CIM)</a> provides professional development standards for marketing leaders.
            </p>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-950/20 border-b-2 border-blue-600">
                  <th className="text-left p-6 font-bold text-gray-900">Experience Level</th>
                  <th className="text-left p-6 font-bold text-gray-900">Day Rate</th>
                  <th className="text-left p-6 font-bold text-gray-900">Annual Cost (2 days/week)</th>
                  <th className="text-left p-6 font-bold text-gray-900">Years Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Entry-Level Fractional CMO</td>
                  <td className="p-6 text-blue-700 font-bold text-lg">£700-£900</td>
                  <td className="p-6 text-gray-700">£70k-£95k</td>
                  <td className="p-6 text-gray-600">10-15 years</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Mid-Level Fractional CMO</td>
                  <td className="p-6 text-blue-700 font-bold text-lg">£900-£1,200</td>
                  <td className="p-6 text-gray-700">£95k-£125k</td>
                  <td className="p-6 text-gray-600">15-20 years</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-6 font-semibold text-gray-900">Senior Fractional CMO</td>
                  <td className="p-6 text-blue-700 font-bold text-lg">£1,200-£1,400</td>
                  <td className="p-6 text-gray-700">£125k-£145k</td>
                  <td className="p-6 text-gray-600">20+ years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-sm">
            *Annual costs calculated at 2 days per week × 52 weeks. Actual billable days typically 155-160/year after holidays.
          </p>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Pricing Factors</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">What Affects Fractional CMO Pricing?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                factor: 'Industry Expertise',
                description: 'CMOs with deep vertical experience command premiums. B2B SaaS, FinTech, and HealthTech specialists earn 15-25% more than generalists due to high demand and specialized knowledge. The <a href="https://ipa.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Practitioners in Advertising (IPA)</a> sets standards for marketing best practices.',
                premium: '+15-25%',
              },
              {
                factor: 'Channel Specialization',
                description: 'Specialists in high-value channels (PLG, performance marketing, brand building, ABM) charge more. Cross-channel generalists who can orchestrate the full funnel are most valuable. The <a href="https://dma.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Data & Marketing Association (DMA)</a> offers insights into digital marketing trends.',
                premium: '+10-20%',
              },
              {
                factor: 'Track Record & Results',
                description: 'Proven results matter. CMOs who can show they\'ve scaled companies from £1M to £10M+ ARR, reduced CAC significantly, or driven successful exits command premium rates.',
                premium: '+20-30%',
              },
              {
                factor: 'Location',
                description: 'London-based CMOs charge 10-20% more than regional, though most work is remote. Companies in London also pay premiums for occasional in-person strategic sessions.',
                premium: '+10-20%',
              },
              {
                factor: 'Engagement Scope',
                description: 'Strategic advisory only costs less than hands-on execution. CMOs who build teams, manage agencies, and drive day-to-day operations charge at the higher end.',
                premium: '+15-25%',
              },
              {
                factor: 'Company Stage & Complexity',
                description: 'Early-stage startups may negotiate lower rates in exchange for advisory equity. Complex enterprises with multiple products, markets, or regulatory requirements pay more. The <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> supports high-growth companies navigating expansion.',
                premium: '+10-15%',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 border-l-4 border-blue-950/200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.factor}</h3>
                  <span className="bg-blue-900/30 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                    {item.premium}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Regional Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">UK Regional Rate Variations</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Location impacts pricing, though remote work has reduced regional differences significantly. <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a> shows regional variations in professional service rates across the UK.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { location: 'London (Shoreditch/Tech City)', range: '£900-£1,400/day', note: 'Highest rates due to concentration of startups and scale-ups' },
              { location: 'London (City/Canary Wharf)', range: '£850-£1,200/day', note: 'Corporate sector, often requires more compliance expertise' },
              { location: 'Manchester', range: '£700-£1,000/day', note: 'Strong tech scene, lower cost of living = lower rates' },
              { location: 'Birmingham', range: '£700-£950/day', note: 'Growing startup ecosystem, competitive pricing' },
              { location: 'Edinburgh', range: '£750-£1,000/day', note: 'FinTech hub, rates reflect sector specialization' },
              { location: 'Remote UK', range: '£650-£950/day', note: 'Fully remote CMOs often charge 10-15% less' },
            ].map((region, index) => (
              <div key={index} className="bg-gray-50 p-6 border border-gray-200 rounded-lg hover:border-blue-700 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{region.location}</h3>
                <div className="text-2xl font-black text-blue-600 mb-3">{region.range}</div>
                <p className="text-gray-600 text-sm">{region.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">ROI Analysis</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Fractional vs Full-Time CMO Cost</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The true cost of a full-time CMO goes far beyond salary. Here's the full breakdown. The <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> provides guidance on employment costs and compensation benchmarking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Fractional */}
            <div className="bg-white p-10 rounded-lg shadow-lg border-2 border-blue-400">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Fractional CMO</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Day rate (£1,000 × 2 days/week)</span>
                  <span className="font-bold text-gray-900">£104,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Benefits & pension</span>
                  <span className="font-bold text-gray-900">£0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Equity dilution</span>
                  <span className="font-bold text-gray-900">£0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Recruitment fees</span>
                  <span className="font-bold text-gray-900">£0</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Office/equipment</span>
                  <span className="font-bold text-gray-900">£0</span>
                </div>
              </div>
              <div className="pt-6 border-t-2 border-blue-600">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total Annual Cost:</span>
                  <span className="text-4xl font-black text-blue-600">£104k</span>
                </div>
              </div>
            </div>

            {/* Full-Time */}
            <div className="bg-white p-10 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Full-Time CMO</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Base salary</span>
                  <span className="font-bold text-gray-900">£180,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Benefits & pension (15%) - see <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD benchmarks</a></span>
                  <span className="font-bold text-gray-900">£27,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Equity (0.5-2% @ £50M valuation)</span>
                  <span className="font-bold text-gray-900">£50,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Recruitment fees (25% salary)</span>
                  <span className="font-bold text-gray-900">£45,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-700">Office/equipment/overheads</span>
                  <span className="font-bold text-gray-900">£12,000</span>
                </div>
              </div>
              <div className="pt-6 border-t-2 border-gray-900">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total Annual Cost:</span>
                  <span className="text-4xl font-black text-gray-900">£314k</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-10 rounded-lg text-center">
            <div className="text-6xl font-black mb-4">£210,000</div>
            <p className="text-2xl mb-2">Annual Savings with Fractional</p>
            <p className="text-blue-900/30 text-lg">
              That's a <strong>67% cost reduction</strong> while still getting strategic CMO-level expertise
            </p>
          </div>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-3 block">Hidden Costs</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Are There Hidden Costs?</h2>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Unlike full-time hires, fractional CMOs have minimal hidden costs. Here's what you should (and shouldn't) budget for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">✅</span> No Hidden Costs
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• No benefits or pension contributions</li>
                  <li>• No equity dilution (usually)</li>
                  <li>• No office space or equipment</li>
                  <li>• No recruitment fees</li>
                  <li>• No severance or notice pay</li>
                  <li>• No training or onboarding costs</li>
                  <li>• No employment taxes beyond contractor rate - see <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IPSE guidance</a></li>
                </ul>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Budget For These
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Marketing tools they recommend (CRM, analytics, automation)</li>
                  <li>• Agencies/freelancers they manage (content, design, ads)</li>
                  <li>• Ad spend and campaign budgets</li>
                  <li>• Events, conferences, or research costs</li>
                  <li>• Software licenses for team collaboration</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700">
              The key difference: With fractional CMOs, these "additional" costs are <strong>marketing investments</strong> you'd
              make anyway, not employment overhead. You're not paying for health insurance, office space, or severance—just strategic
              expertise and the marketing programs they run. The <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> offers resources on funding growth initiatives including marketing investments.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ skipSchema={true} items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Hire a Fractional CMO?
          </h2>
          <p className="text-xl text-blue-900/30 mb-10 max-w-2xl mx-auto">
            Browse 100+ live fractional CMO opportunities or post your role to find pre-vetted marketing leaders. The <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors (IoD)</a> provides resources on hiring senior executives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-blue-600 font-bold uppercase tracking-wider hover:bg-blue-950/20 transition-colors">
              Fractional CMO Jobs UK
            </Link>
            <Link href="/part-time-cmo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-colors">
              Part-Time CMO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Resources</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Fractional Jobs CMO
              </Link>
              <Link href="/part-time-cmo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Part-Time CMO Jobs UK
              </Link>
              <Link href="/fractional-cmo" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Fractional CMO Guide
              </Link>
              <Link href="/fractional-cmo-salary" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                CMO Salary Data
              </Link>
              <Link href="/hire-fractional-cmo" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                How to Hire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
