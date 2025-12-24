import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional COO Cost 2025 | $60k-$180k vs $200k+ Full-Time',
  description: 'How much does a fractional COO cost? $5k-$15k/month ($60k-$180k annually) vs $200k-$350k+ for full-time. Calculate your savings. Complete pricing guide.',
  keywords: 'fractional coo cost, how much does a fractional coo cost, fractional coo pricing, part time coo cost, coo cost',
  alternates: {
    canonical: 'https://fractional.quest/fractional-coo-cost',
  },
  openGraph: {
    title: 'Fractional COO Cost 2025 | Complete Pricing Guide',
    description: 'Complete cost breakdown for hiring a fractional COO. See monthly costs, annual totals, and savings vs full-time.',
    images: ['/images/fractional-coo-cost.jpg'],
    url: 'https://fractional.quest/fractional-coo-cost',
  },
}

const COST_FAQS = [
  {
    question: "How much does a fractional COO cost per month?",
    answer: "Fractional COOs typically cost $5,000-$15,000 per month depending on days worked and seniority. For 2 days/week at $1,500/day average = $12,000/month. For 1 day/week = $6,000/month. This is 50-70% less than a full-time COO. According to <a href='https://www.managers.org.uk/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-700 underline'>CMI research</a>, this flexible model is increasingly popular among UK businesses."
  },
  {
    question: "Is a fractional COO worth the cost?",
    answer: "Yes, if you're a $2M-$30M revenue company needing COO expertise but can't justify $200k-$350k+ for full-time. You get senior expertise (15+ years) for $60k-$180k/year, can scale up/down monthly, and start within days vs months to hire full-time. The <a href='https://www.cipd.org/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-700 underline'>CIPD</a> has found that flexible leadership arrangements often deliver higher value-per-pound than traditional hires."
  },
  {
    question: "What's the ROI of hiring a fractional COO?",
    answer: "Typical ROI: $1 spent generates $3-8 in value. Examples: reducing customer onboarding from 45 to 12 days (28% satisfaction increase), implementing systems that save 20 hours/week of CEO time, identifying $200k+ in operational cost savings, or scaling from $5M to $15M without proportional headcount growth. <a href='https://www.makeuk.org/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-700 underline'>Make UK</a> members report significant operational improvements from fractional executive hires."
  },
  {
    question: "How much cheaper is fractional vs full-time COO?",
    answer: "Fractional COOs are 50-70% cheaper. Example: 2 days/week fractional = $120,000/year vs full-time at $280,000+ (salary + bonus + benefits + equity). You save $160,000 annually (57% reduction) while getting more experienced talent. This cost efficiency is particularly valuable for <a href='https://www.british-business-bank.co.uk/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-700 underline'>growing businesses</a> managing cash flow carefully."
  },
  {
    question: "What does fractional COO cost include?",
    answer: "The day rate or monthly retainer is all-inclusive: strategic operational leadership, team management, process design, <a href='https://www.apm.org.uk/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-700 underline'>project leadership</a>, and performance management. It does NOT include software subscriptions or additional contractor costs."
  },
]

export default function FractionalCOOCostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional COO Cost 2025 | Complete Pricing Guide',
    description: 'How much does a fractional COO cost? $5k-$15k/month ($60k-$180k annually) vs $200k-$350k+ for full-time.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-12-16',
    dateModified: '2025-12-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Hero */}
      <section className="relative bg-gray-50 text-gray-900 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-coo" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to COO Hub
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Employer Guide 2025
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
              Fractional COO<br />
              <span className="text-gray-400">Cost Breakdown</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
              Everything employers need to know about <strong className="text-white">fractional COO costs</strong> in 2025. Monthly fees, annual totals, and how you save 50-70% vs full-time. Understand the <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">independent professional</a> market dynamics.
            </p>
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-4xl md:text-5xl font-black">$5k-15k</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Per Month</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">60-70%</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Savings vs Full-Time</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black">1-3 Days</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">Per Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Interactive Tool</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Calculate Your COO Costs</h2>
          </div>
          <RoleCalculator role="COO" />
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Monthly Cost Breakdown</h2>

          <div className="prose prose-lg prose-gray max-w-none">
            <div className="grid md:grid-cols-3 gap-6 not-prose mb-12">
              <div className="bg-white p-8 border border-gray-200">
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Light Touch</div>
                <div className="text-3xl font-black text-gray-900 mb-4">$5-7k</div>
                <div className="text-gray-700 text-sm mb-4">1 day per week</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Strategic guidance</li>
                  <li>• Weekly check-ins</li>
                  <li>• System audits</li>
                  <li>• Team coaching</li>
                </ul>
              </div>

              <div className="bg-blue-600 text-white p-8 relative">
                <div className="absolute top-4 right-4 text-xs bg-white text-blue-600 px-2 py-1 font-bold">POPULAR</div>
                <div className="text-sm uppercase tracking-wider mb-2">Active Leadership</div>
                <div className="text-3xl font-black mb-4">$10-12k</div>
                <div className="text-white/80 text-sm mb-4">2 days per week</div>
                <ul className="text-sm space-y-2">
                  <li>• Full operational leadership</li>
                  <li>• Team management</li>
                  <li>• System implementation</li>
                  <li>• Project leadership</li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-gray-200">
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Deep Engagement</div>
                <div className="text-3xl font-black text-gray-900 mb-4">$15k+</div>
                <div className="text-gray-700 text-sm mb-4">3 days per week</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Executive leadership</li>
                  <li>• Major transformations</li>
                  <li>• Crisis management</li>
                  <li>• Full strategic oversight</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">What Affects Fractional COO Cost?</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Experience Level</h4>
                <p>COOs with 15-20 years experience charge $800-$1,200/day. Those with 20+ years and proven <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scale-up</a> experience charge $1,200-$1,800/day. Premium COOs with IPO or major exit experience can command $2,000+/day.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Company Complexity</h4>
                <p>Larger companies ($10M+ revenue), multiple locations, complex supply chains, or heavily regulated industries require more senior talent and command higher rates. <a href="https://www.ons.gov.uk/businessindustryandtrade" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Business statistics</a> show that operational complexity scales non-linearly with company size.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Time Commitment</h4>
                <p>1 day/week typically costs more per day ($1,500) than 3 days/week ($1,200/day) due to context switching overhead. Many fractional COOs offer volume discounts for higher time commitments. This <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working</a> arrangement allows companies to scale operational leadership as needed.</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Geographic Market</h4>
                <p>Major tech hubs (San Francisco, New York, Boston) command 20-30% premiums. Remote fractional COOs often charge 10-15% less than on-site but deliver identical value. The growth of <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a> has made geography less relevant to fractional executive pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">Fractional vs Full-Time: Total Cost Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-900">
                  <th className="py-4 px-6 text-left">Cost Component</th>
                  <th className="py-4 px-6 text-left">Fractional COO (2 days/week)</th>
                  <th className="py-4 px-6 text-left">Full-Time COO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold">Base Compensation</td>
                  <td className="py-4 px-6">$120,000/year</td>
                  <td className="py-4 px-6">$220,000/year</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-bold">Benefits & Payroll Taxes</td>
                  <td className="py-4 px-6">$0 (contractor, subject to <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35</a> rules)</td>
                  <td className="py-4 px-6">$40,000 (18%)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold">Equity Grant</td>
                  <td className="py-4 px-6">$0 (optional)</td>
                  <td className="py-4 px-6">$40,000/year (0.5-2%)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-bold">Recruiting Costs</td>
                  <td className="py-4 px-6">$0</td>
                  <td className="py-4 px-6">$55,000 (25% of base)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-bold">Onboarding Time</td>
                  <td className="py-4 px-6">1-2 weeks</td>
                  <td className="py-4 px-6">3-6 months ramp</td>
                </tr>
                <tr className="border-b-2 border-gray-900 font-bold bg-blue-50">
                  <td className="py-4 px-6">TOTAL YEAR 1</td>
                  <td className="py-4 px-6 text-blue-700">$120,000</td>
                  <td className="py-4 px-6">$355,000</td>
                </tr>
                <tr className="bg-blue-600 text-white font-bold">
                  <td className="py-4 px-6">YOU SAVE</td>
                  <td className="py-4 px-6" colSpan={2}>$235,000 (66% savings)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional COO Cost FAQs</h2>
          </div>
          <FAQ items={COST_FAQS} title="" className="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Ready to Hire a Fractional COO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Get 60-70% cost savings while accessing senior operational expertise. Join <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IoD</a> members and other directors who have embraced fractional leadership models.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/fractional-coo-services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 transition-colors"
            >
              Find Fractional COOs →
            </Link>
            <Link
              href="/fractional-coo"
              className="inline-block bg-gray-50 hover:bg-gray-100 text-white font-bold py-4 px-8 transition-colors"
            >
              Learn More About COOs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
