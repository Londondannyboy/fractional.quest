import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Finance Partner UK 2025: Part-Time FBP Services',
  description: 'Guide to fractional finance business partners. How FBPs provide commercial finance support to business units on a part-time basis.',
  keywords: 'fractional finance partner, finance business partner, FBP, part-time finance partner, commercial finance partner, fractional FBP',
  alternates: {
    canonical: 'https://fractional.quest/fractional-finance-partner',
  },
  openGraph: {
    title: 'Fractional Finance Partner UK 2025: Part-Time FBP Services',
    description: 'Part-time finance business partner services.',
    url: 'https://fractional.quest/fractional-finance-partner',
  },
}

const faqItems = [
  {
    question: 'What is a fractional finance business partner?',
    answer: 'A fractional finance business partner (FBP) is a senior finance professional who works part-time, embedded within a business unit or department. They provide commercial finance support—budgeting, analysis, decision support—without being full-time.',
  },
  {
    question: 'How is FBP different from a fractional CFO?',
    answer: 'A CFO leads the entire finance function. An FBP is embedded within a specific business area to provide commercial support. CFOs set strategy; FBPs translate financial expertise into operational decisions for their business unit.',
  },
  {
    question: 'What does a finance business partner do?',
    answer: 'FBPs provide commercial analysis, help with budgeting and forecasting, support business cases, inform pricing decisions, track performance, and translate financial data into actionable insights for business leaders.',
  },
  {
    question: 'When should I hire a fractional FBP?',
    answer: 'Consider fractional FBP when a business unit needs commercial finance support but not full-time capacity. Ideal for growing departments, project-based needs, or when testing the FBP model before full-time commitment.',
  },
]

export default function FractionalFinancePartnerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Finance Role
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Finance Partner
            </h1>
            <p className="text-2xl md:text-3xl text-green-100 leading-relaxed font-light">
              Commercial finance expertise embedded in your business. Strategic support, flexible commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-green-50 border-b-4 border-green-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-green-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Finance Partner?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional finance business partner (FBP)</strong> is a senior finance professional who works part-time, embedded within a business unit. They translate financial expertise into commercial decisions, providing the same value as full-time FBPs at lower cost.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              FBPs bridge finance and operations—helping business leaders understand numbers and make better commercial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/7681070/pexels-photo-7681070.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Finance analysis and business partnering"
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
            <h2 className="text-3xl font-black text-gray-900">The Finance Business Partner Role</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Finance business partnering has become a core capability in modern organizations. According to <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800">ICAEW</a>, finance professionals increasingly need to be business partners—not just number crunchers—providing insight and influence.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional FBP brings this capability on a part-time basis, ideal for business units that need commercial finance support but not full-time capacity.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">FBP vs CFO vs Accountant</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Role</th>
                    <th className="text-left py-3 font-bold text-gray-900">Scope</th>
                    <th className="text-left py-3 font-bold text-gray-900">Focus</th>
                    <th className="text-left py-3 font-bold text-gray-900">Output</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-green-50">
                    <td className="py-3 font-bold text-green-700">Finance Partner</td>
                    <td className="py-3">Business unit/department</td>
                    <td className="py-3">Commercial decisions</td>
                    <td className="py-3">Business insight</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">CFO</td>
                    <td className="py-3 text-gray-600">Entire company</td>
                    <td className="py-3 text-gray-600">Financial strategy</td>
                    <td className="py-3 text-gray-600">Strategic direction</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Financial Controller</td>
                    <td className="py-3 text-gray-600">Finance operations</td>
                    <td className="py-3 text-gray-600">Accuracy, compliance</td>
                    <td className="py-3 text-gray-600">Financial reports</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Accountant</td>
                    <td className="py-3 text-gray-600">Transaction processing</td>
                    <td className="py-3 text-gray-600">Recording, reporting</td>
                    <td className="py-3 text-gray-600">Financial statements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What Fractional FBPs Do</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Commercial Analysis</h4>
                  <p className="text-sm text-gray-600 m-0">Analyze performance, identify trends, and provide insights that drive better business decisions.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Budgeting & Forecasting</h4>
                  <p className="text-sm text-gray-600 m-0">Work with business leaders on budgets, rolling forecasts, and variance analysis. Translate plans into numbers.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Business Cases</h4>
                  <p className="text-sm text-gray-600 m-0">Build financial models for investment decisions. Assess ROI, payback periods, and risk. Support capital allocation.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Pricing & Profitability</h4>
                  <p className="text-sm text-gray-600 m-0">Analyze product/service profitability. Support pricing decisions. Identify margin improvement opportunities.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Performance Tracking</h4>
                  <p className="text-sm text-gray-600 m-0">Define KPIs, create dashboards, and track performance. Help business leaders understand their numbers.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Use Fractional FBP</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h3 className="font-bold text-green-700 mb-3">Good Fit</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Growing departments needing commercial support</li>
                  <li>Business units without dedicated finance</li>
                  <li>Major projects requiring financial analysis</li>
                  <li>Cost constraint on full-time hire</li>
                  <li>Testing FBP model before commitment</li>
                </ul>
              </div>

              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <h3 className="font-bold text-red-700 mb-3">May Need Full-Time</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Large, complex business units</li>
                  <li>Daily financial decision needs</li>
                  <li>High-volume transactional analysis</li>
                  <li>Multiple sub-teams needing support</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Costs</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-8 bg-green-50 border-2 border-green-200 rounded-xl">
                <div className="text-sm font-bold text-green-700 uppercase mb-2">Fractional FBP</div>
                <div className="text-3xl font-black text-gray-900 mb-2">£1,500-£3,500/month</div>
                <p className="text-gray-600 text-sm mb-0">1-2 days/week engagement</p>
              </div>
              <div className="p-8 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Full-Time FBP</div>
                <div className="text-3xl font-black text-gray-900 mb-2">£5,000-£7,500/month</div>
                <p className="text-gray-600 text-sm mb-0">Salary + benefits</p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Skills to Look For</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Commercial acumen:</strong> Understands business, not just numbers</li>
              <li><strong>Communication:</strong> Can explain finance to non-finance people</li>
              <li><strong>Analytical:</strong> Strong modeling and analysis capabilities</li>
              <li><strong>Systems:</strong> Proficient in Excel, BI tools, ERP systems</li>
              <li><strong>Business partnering:</strong> Experience working embedded in operations</li>
              <li><strong>Industry knowledge:</strong> Understanding of your sector (ideal)</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-green-400">Summary:</strong> Fractional finance business partners provide commercial finance support to business units on a part-time basis. They bridge finance and operations, helping leaders make better decisions. Cost £1,500-£3,500/month for 1-2 days/week.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">FAQs</h2>
          <FAQ skipSchema={true} items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Finance Talent</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cfo" className="px-10 py-5 bg-white text-green-700 font-bold uppercase tracking-wider hover:bg-green-50 transition-colors">
              Fractional CFO
            </Link>
            <Link href="/fractional-cfo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-green-700 transition-colors">
              Finance Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cfo" className="text-gray-600 hover:text-green-700 font-medium">Fractional CFO</Link>
            <Link href="/fractional-business-partner" className="text-gray-600 hover:text-green-700 font-medium">Business Partner</Link>
            <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-green-700 font-medium">CFO Jobs</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-green-700 font-medium">Fractional Executive</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
