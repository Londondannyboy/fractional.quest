import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO Consulting UK 2025',
  description: 'Fractional CFO consulting services UK. Expert financial strategy on a part-time basis for growing businesses.',
  keywords: 'fractional cfo consulting, fractional cfo services, part-time cfo consulting, cfo consulting uk, fractional finance consulting',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-consulting',
  },
  openGraph: {
    title: 'Fractional CFO Consulting UK 2025',
    description: 'Part-time CFO consulting for strategic financial leadership.',
    url: 'https://fractional.quest/fractional-cfo-consulting',
  },
}

const faqItems = [
  {
    question: 'What is fractional CFO consulting?',
    answer: 'Fractional CFO consulting provides part-time access to senior financial expertise. A fractional CFO works with your business 1-3 days per week, delivering strategic financial leadership, planning, and advisory services without the cost of a full-time hire.',
  },
  {
    question: 'How much does fractional CFO consulting cost?',
    answer: 'Fractional CFO consulting in the UK typically costs £800-£1,500 per day or £4,000-£10,000 per month on retainer. This compares to £150,000-£250,000+ for a full-time CFO including salary, bonus, and benefits.',
  },
  {
    question: 'What services do fractional CFO consultants provide?',
    answer: 'Fractional CFO consultants provide financial strategy, forecasting, cash flow management, fundraising support, board reporting, financial systems implementation, M&A due diligence, and investor relations—tailored to your business needs.',
  },
  {
    question: 'When should I hire fractional CFO consulting?',
    answer: 'Hire fractional CFO consulting when raising capital, scaling operations, preparing for exit, implementing financial systems, managing cash flow challenges, or when you need strategic finance expertise but not full-time capacity.',
  },
]

export default function FractionalCFOConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              CFO Consulting
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional CFO<br />Consulting
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-100 leading-relaxed font-light">
              Strategic financial leadership on a part-time basis. Expert CFO consulting for growing UK businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-emerald-50 border-b-4 border-emerald-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-emerald-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is Fractional CFO Consulting?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              <strong className="font-semibold text-gray-900">Fractional CFO consulting</strong> delivers senior-level financial expertise to businesses that need strategic guidance without the commitment and cost of a full-time Chief Financial Officer.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Working typically 1-3 days per week, fractional CFO consultants provide the same caliber of financial leadership as permanent executives—at 50-70% lower cost. Ideal for scaling businesses from £1M to £50M+ revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="CFO consulting financial strategy meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">What Fractional CFO Consultants Deliver</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Fractional CFO consulting goes beyond basic bookkeeping or accounting. These are senior finance professionals—often with Big Four, private equity, or FTSE experience—who bring strategic perspective to your business.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategic Finance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Financial strategy and planning</li>
                  <li>Business model optimization</li>
                  <li>Pricing and margin analysis</li>
                  <li>Growth and scaling strategy</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Fundraising Support</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Investor presentations and materials</li>
                  <li>Financial modelling</li>
                  <li>Due diligence preparation</li>
                  <li>Term sheet negotiation</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Operations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Cash flow management</li>
                  <li>Financial systems and controls</li>
                  <li>Reporting and dashboards</li>
                  <li>Budget vs actuals analysis</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Governance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Board reporting and attendance</li>
                  <li>Investor relations</li>
                  <li>Risk management</li>
                  <li>Compliance oversight</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional CFO Consulting Costs</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The cost of fractional CFO consulting varies based on seniority, scope, and engagement structure. Most consultants work on either daily rates or monthly retainers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="p-8 bg-emerald-50 border-2 border-emerald-200 rounded-xl">
                <div className="text-sm font-bold text-emerald-700 uppercase mb-2">Daily Rate</div>
                <div className="text-3xl font-black text-gray-900 mb-2">£800-£1,500</div>
                <p className="text-gray-600 text-sm mb-0">Best for project-based work, due diligence, or ad-hoc strategic support.</p>
              </div>
              <div className="p-8 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Monthly Retainer</div>
                <div className="text-3xl font-black text-gray-900 mb-2">£4,000-£10,000</div>
                <p className="text-gray-600 text-sm mb-0">Ongoing engagement, typically 1-2 days per week with regular involvement.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire Fractional CFO Consulting</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Preparing for Fundraising</h4>
                  <p className="text-sm text-gray-600 m-0">You need investor-ready financials, models, and data room preparation but don't have in-house expertise.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Rapid Scaling</h4>
                  <p className="text-sm text-gray-600 m-0">Business is growing faster than your finance function. Need senior oversight without permanent headcount.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Strategic Transformation</h4>
                  <p className="text-sm text-gray-600 m-0">Implementing new systems, restructuring, or preparing for exit requires experienced financial leadership.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-emerald-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Cash Flow Challenges</h4>
                  <p className="text-sm text-gray-600 m-0">Need expert help managing working capital, forecasting, or navigating financial difficulties.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional vs Full-Time CFO</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-emerald-700">Fractional CFO</th>
                    <th className="text-left py-3 font-bold text-gray-500">Full-Time CFO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Annual Cost</td>
                    <td className="py-3 text-emerald-700">£50,000-£120,000</td>
                    <td className="py-3 text-gray-600">£150,000-£250,000+</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Time Commitment</td>
                    <td className="py-3 text-emerald-700">1-3 days/week</td>
                    <td className="py-3 text-gray-600">Full-time</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Flexibility</td>
                    <td className="py-3 text-emerald-700">Scale up/down easily</td>
                    <td className="py-3 text-gray-600">Fixed commitment</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Experience Level</td>
                    <td className="py-3 text-emerald-700">Often more senior</td>
                    <td className="py-3 text-gray-600">Varies by hire</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Fractional CFO Consultants</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The UK has a growing market for fractional CFO consulting. Key sources include specialized platforms like <a href="https://www.fdcapital.co.uk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800">FD Capital</a>, executive networks, and professional bodies like the <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800">ICAEW</a> (Institute of Chartered Accountants).
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When evaluating consultants, look for relevant sector experience, proven track record in your stage of business, and clear communication about how they'll work with your existing team.
            </p>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-emerald-400">The Bottom Line:</strong> Fractional CFO consulting provides senior financial leadership at £4,000-£10,000/month vs £150,000+/year for full-time. Ideal for scaling businesses needing strategic finance expertise without permanent headcount.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">FAQs</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find CFO Consulting</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cfo-jobs-uk" className="px-10 py-5 bg-white text-emerald-700 font-bold uppercase tracking-wider hover:bg-emerald-50 transition-colors">
              CFO Jobs
            </Link>
            <Link href="/fractional-cfo" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-emerald-700 transition-colors">
              CFO Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo" className="text-gray-600 hover:text-emerald-700 font-medium">Fractional CFO</Link>
            <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-emerald-700 font-medium">CFO Jobs</Link>
            <Link href="/fractional-finance-director" className="text-gray-600 hover:text-emerald-700 font-medium">Finance Director</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-emerald-700 font-medium">All Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
