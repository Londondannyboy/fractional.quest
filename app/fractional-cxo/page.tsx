import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CXO UK 2025: Part-Time C-Suite Leadership',
  description: 'Fractional CXO guide for UK businesses. Access part-time C-suite executives—CFO, CMO, CTO, COO, CHRO—without full-time commitment or cost.',
  keywords: 'fractional CXO, fractional C-suite, part-time CXO, fractional executive, CXO as a service, fractional C-level',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cxo',
  },
  openGraph: {
    title: 'Fractional CXO UK 2025: Part-Time C-Suite Leadership',
    description: 'Access part-time C-suite executives for your business.',
    url: 'https://fractional.quest/fractional-cxo',
  },
}

const faqItems = [
  {
    question: 'What does CXO mean?',
    answer: 'CXO is a catch-all term for C-suite executives where "X" represents any function: CFO (Finance), CMO (Marketing), CTO (Technology), COO (Operations), CHRO (HR), etc. Fractional CXO means any part-time C-level executive.',
  },
  {
    question: 'Which fractional CXO roles are most common?',
    answer: 'Fractional CFO is the most established, followed by CMO, CTO, and COO. CHRO/CPO, CRO, and CISO are growing rapidly. Almost any C-suite role can now be engaged fractionally.',
  },
  {
    question: 'Can I have multiple fractional CXOs?',
    answer: 'Yes, many growing companies engage 2-3 fractional executives simultaneously—for example, a fractional CFO and fractional CMO. This provides a diverse C-suite without full-time costs.',
  },
  {
    question: 'How do I choose which fractional CXO I need?',
    answer: 'Start with your biggest constraint or gap. If cash flow and fundraising are challenges, start with CFO. If growth is stalling, consider CMO or CRO. If technology is holding you back, look at CTO.',
  },
]

export default function FractionalCXOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              C-Suite Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />CXO
            </h1>
            <p className="text-2xl md:text-3xl text-indigo-100 leading-relaxed font-light">
              Part-time C-suite leadership for growing businesses. Any executive, on your terms.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-indigo-50 border-b-4 border-indigo-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-indigo-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is Fractional CXO?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              <strong className="font-semibold text-gray-900">Fractional CXO</strong> is a catch-all term for any C-suite executive (CFO, CMO, CTO, COO, etc.) working part-time with your company. The "X" represents the variable—any C-level function you need.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fractional CXOs work 1-3 days per week, providing strategic leadership at a fraction of full-time cost while typically serving 2-4 clients simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Executive leadership team meeting"
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
            <h2 className="text-3xl font-black text-gray-900">The Complete Fractional CXO Landscape</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Almost every C-suite role can now be engaged fractionally. Here's the complete landscape of fractional CXO options:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-indigo-700 mb-3">Finance & Operations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-cfo" className="text-indigo-600 hover:underline">Fractional CFO</Link> - Financial strategy, reporting, fundraising</li>
                  <li><Link href="/fractional-coo" className="text-indigo-600 hover:underline">Fractional COO</Link> - Operations, processes, execution</li>
                  <li><Link href="/fractional-cro" className="text-indigo-600 hover:underline">Fractional CRO</Link> - Revenue, sales leadership</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-indigo-700 mb-3">Marketing & Growth</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-cmo" className="text-indigo-600 hover:underline">Fractional CMO</Link> - Marketing strategy, brand, growth</li>
                  <li><Link href="/fractional-growth-director" className="text-indigo-600 hover:underline">Fractional Growth Director</Link> - Growth tactics, experiments</li>
                  <li><Link href="/fractional-digital-director" className="text-indigo-600 hover:underline">Fractional Digital Director</Link> - Digital marketing, channels</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-indigo-700 mb-3">Technology</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-cto" className="text-indigo-600 hover:underline">Fractional CTO</Link> - Technology strategy, architecture</li>
                  <li><Link href="/fractional-cpo" className="text-indigo-600 hover:underline">Fractional CPO</Link> - Product vision, roadmap</li>
                  <li><Link href="/fractional-ciso" className="text-indigo-600 hover:underline">Fractional CISO</Link> - Cybersecurity, risk</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-indigo-700 mb-3">People & Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-chro" className="text-indigo-600 hover:underline">Fractional CHRO/CPO</Link> - People strategy, culture</li>
                  <li><Link href="/fractional-chief-of-staff" className="text-indigo-600 hover:underline">Fractional Chief of Staff</Link> - CEO support, execution</li>
                  <li><Link href="/fractional-strategy-director" className="text-indigo-600 hover:underline">Fractional Strategy Director</Link> - Strategic planning</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional CXO Cost Comparison</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Role</th>
                    <th className="text-left py-3 font-bold text-indigo-700">Fractional (Monthly)</th>
                    <th className="text-left py-3 font-bold text-gray-500">Full-Time (Annual)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">CFO</td>
                    <td className="py-3 text-indigo-700">£2,500-£6,000</td>
                    <td className="py-3 text-gray-600">£120,000-£200,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">CMO</td>
                    <td className="py-3 text-indigo-700">£2,500-£5,500</td>
                    <td className="py-3 text-gray-600">£100,000-£180,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">CTO</td>
                    <td className="py-3 text-indigo-700">£3,000-£7,000</td>
                    <td className="py-3 text-gray-600">£130,000-£220,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">COO</td>
                    <td className="py-3 text-indigo-700">£3,000-£6,500</td>
                    <td className="py-3 text-gray-600">£120,000-£200,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">CHRO</td>
                    <td className="py-3 text-indigo-700">£2,000-£5,000</td>
                    <td className="py-3 text-gray-600">£100,000-£170,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">CRO</td>
                    <td className="py-3 text-indigo-700">£3,000-£7,000</td>
                    <td className="py-3 text-gray-600">£140,000-£250,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Which Fractional CXO Do You Need?</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-indigo-600">CFO</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">When You Need a Fractional CFO</h4>
                  <p className="text-sm text-gray-600 m-0">Cash flow challenges, fundraising, financial reporting gaps, preparing for exit, investor requirements, or scaling finance operations.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-indigo-600">CMO</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">When You Need a Fractional CMO</h4>
                  <p className="text-sm text-gray-600 m-0">Growth stalling, need marketing strategy, brand positioning unclear, or marketing team needs senior leadership.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-indigo-600">CTO</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">When You Need a Fractional CTO</h4>
                  <p className="text-sm text-gray-600 m-0">Technical debt, scaling challenges, need technology roadmap, team building, or architecture decisions.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-indigo-600">COO</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">When You Need a Fractional COO</h4>
                  <p className="text-sm text-gray-600 m-0">CEO overwhelmed with operations, scaling processes, team coordination issues, or preparing for investment.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-indigo-600">CHRO</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">When You Need a Fractional CHRO</h4>
                  <p className="text-sm text-gray-600 m-0">High turnover, hiring challenges, culture problems, scaling team, or need HR professionalization.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Building a Fractional C-Suite</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Many scaling companies build a fractional C-suite with multiple part-time executives. A typical combination might be:
            </p>

            <div className="bg-indigo-50 border-2 border-indigo-200 p-8 rounded-lg my-10">
              <h3 className="font-bold text-gray-900 mb-4">Example: £5M Revenue Scale-Up</h3>
              <div className="grid gap-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-indigo-200">
                  <span className="font-medium">Fractional CFO</span>
                  <span className="text-indigo-700">1 day/week - £3,000/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-indigo-200">
                  <span className="font-medium">Fractional CMO</span>
                  <span className="text-indigo-700">2 days/week - £4,500/month</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-indigo-200">
                  <span className="font-medium">Fractional CTO</span>
                  <span className="text-indigo-700">1 day/week - £3,500/month</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold">Total</span>
                  <span className="text-indigo-700 font-bold">£11,000/month</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 mb-0">
                This provides C-suite coverage in finance, marketing, and technology for ~£132,000/year—less than one full-time C-suite hire.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-indigo-400">Summary:</strong> Fractional CXO is a catch-all term for any part-time C-suite executive—CFO, CMO, CTO, COO, CHRO, and more. Access the C-level expertise you need, when you need it, at a fraction of full-time cost.
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
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Your Fractional CXO</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-c-suite" className="px-10 py-5 bg-white text-indigo-700 font-bold uppercase tracking-wider hover:bg-indigo-50 transition-colors">
              C-Suite Guide
            </Link>
            <Link href="/fractional-executive-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-indigo-700 transition-colors">
              Executive Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-indigo-700 font-medium">Fractional C-Suite</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-indigo-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-roles" className="text-gray-600 hover:text-indigo-700 font-medium">All Fractional Roles</Link>
            <Link href="/what-is-fractional" className="text-gray-600 hover:text-indigo-700 font-medium">What is Fractional?</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
