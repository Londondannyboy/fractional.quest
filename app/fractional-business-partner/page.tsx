import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Business Partner UK 2025: Strategic Partnership Roles',
  description: 'Guide to fractional business partner roles. How HR, finance, and other business partners work part-time to support departments.',
  keywords: 'fractional business partner, fractional HR business partner, fractional finance business partner, part-time business partner, HRBP',
  alternates: {
    canonical: 'https://fractional.quest/fractional-business-partner',
  },
  openGraph: {
    title: 'Fractional Business Partner UK 2025: Strategic Partnership Roles',
    description: 'Part-time business partner roles for growing companies.',
    url: 'https://fractional.quest/fractional-business-partner',
  },
}

const faqItems = [
  {
    question: 'What is a fractional business partner?',
    answer: 'A fractional business partner is a senior professional who works part-time embedded within a function or business unit, providing strategic support. Common examples include HR Business Partners (HRBPs) and Finance Business Partners who work with specific teams.',
  },
  {
    question: 'How is a business partner different from an executive?',
    answer: 'Executives lead entire functions (e.g., CHRO leads all HR). Business partners are embedded within other departments to provide functional expertise (e.g., HRBP supports the sales team with people matters). They\'re strategic but focused on specific areas.',
  },
  {
    question: 'What types of business partners can be fractional?',
    answer: 'Common fractional business partner roles include HR Business Partner, Finance Business Partner, IT Business Partner, and Commercial Business Partner. Any embedded strategic role can potentially be delivered fractionally.',
  },
  {
    question: 'When should I hire a fractional business partner?',
    answer: 'Consider fractional when a department needs strategic functional support but not full-time. For example, if your sales team needs HR support for hiring and performance but doesn\'t justify a dedicated HRBP.',
  },
]

export default function FractionalBusinessPartnerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Partnership Roles
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Business Partner
            </h1>
            <p className="text-2xl md:text-3xl text-teal-100 leading-relaxed font-light">
              Embedded expertise for your teams. Strategic partnership, flexible commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-teal-50 border-b-4 border-teal-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-teal-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Business Partner?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional business partner</strong> is a senior professional who provides strategic support to a department or business unit on a part-time basis. Rather than sitting in a central function, they're embedded with specific teams to drive outcomes.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Common examples include HR Business Partners (HRBPs) supporting specific departments and Finance Business Partners providing commercial support to business units.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business partnership meeting"
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
            <h2 className="text-3xl font-black text-gray-900">Types of Fractional Business Partners</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-teal-50 border-2 border-teal-200 p-6 rounded-lg">
                <h3 className="font-bold text-teal-700 mb-3">HR Business Partner</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Focus:</strong> People matters for specific teams</li>
                  <li><strong>Activities:</strong> Hiring, performance, development</li>
                  <li><strong>Partners with:</strong> Department heads</li>
                  <li><strong>Reports to:</strong> HR Director/CHRO</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-3">Finance Business Partner</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Focus:</strong> Commercial support for business units</li>
                  <li><strong>Activities:</strong> Budgeting, analysis, decisions</li>
                  <li><strong>Partners with:</strong> Business unit leaders</li>
                  <li><strong>Reports to:</strong> FD/CFO</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-3">IT Business Partner</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Focus:</strong> Technology for business functions</li>
                  <li><strong>Activities:</strong> Requirements, solutions, adoption</li>
                  <li><strong>Partners with:</strong> Function leaders</li>
                  <li><strong>Reports to:</strong> CTO/CIO</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-3">Commercial Partner</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Focus:</strong> Revenue and market opportunities</li>
                  <li><strong>Activities:</strong> Pricing, deals, market analysis</li>
                  <li><strong>Partners with:</strong> Sales/product teams</li>
                  <li><strong>Reports to:</strong> CRO/Commercial Director</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Business Partner vs Executive</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-teal-700">Business Partner</th>
                    <th className="text-left py-3 font-bold text-gray-500">Functional Executive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Scope</td>
                    <td className="py-3 text-teal-700">Specific department/unit</td>
                    <td className="py-3 text-gray-600">Entire function</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Position</td>
                    <td className="py-3 text-teal-700">Embedded in business</td>
                    <td className="py-3 text-gray-600">Leads central function</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Reports to</td>
                    <td className="py-3 text-teal-700">Functional head</td>
                    <td className="py-3 text-gray-600">CEO</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Team</td>
                    <td className="py-3 text-teal-700">Usually individual</td>
                    <td className="py-3 text-gray-600">Leads team</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Seniority</td>
                    <td className="py-3 text-teal-700">Senior manager/director</td>
                    <td className="py-3 text-gray-600">C-suite</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What Fractional Business Partners Do</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Strategic Support</h4>
                  <p className="text-sm text-gray-600 m-0">Translate functional expertise into practical support for business teams. Bridge between central function and operational reality.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Problem Solving</h4>
                  <p className="text-sm text-gray-600 m-0">Help department leaders solve functional challenges. For HRBP: hiring, retention, performance. For FBP: budgets, analysis, decisions.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Relationship Building</h4>
                  <p className="text-sm text-gray-600 m-0">Become trusted partner to department leaders. Understand their challenges deeply. Advocate for their needs within the function.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-teal-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Change Implementation</h4>
                  <p className="text-sm text-gray-600 m-0">Help implement functional initiatives (new systems, policies, processes) within the business area they support.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When Fractional Makes Sense</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Growing teams:</strong> Department needs support but not full-time business partner</li>
              <li><strong>Specific projects:</strong> Major hiring push, system implementation, restructure</li>
              <li><strong>Expertise gap:</strong> Need seniority beyond what generalist can provide</li>
              <li><strong>Cost constraint:</strong> Can't justify dedicated business partner</li>
              <li><strong>Trial:</strong> Test business partner model before full-time commitment</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Costs</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-8 bg-teal-50 border-2 border-teal-200 rounded-xl">
                <div className="text-sm font-bold text-teal-700 uppercase mb-2">Fractional Business Partner</div>
                <div className="text-3xl font-black text-gray-900 mb-2">£1,500-£4,000/month</div>
                <p className="text-gray-600 text-sm mb-0">1-2 days/week engagement</p>
              </div>
              <div className="p-8 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Full-Time Business Partner</div>
                <div className="text-3xl font-black text-gray-900 mb-2">£5,000-£8,000/month</div>
                <p className="text-gray-600 text-sm mb-0">Salary + benefits</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-teal-400">Summary:</strong> Fractional business partners provide embedded strategic support to specific departments on a part-time basis. Common roles include HR Business Partner and Finance Business Partner. Ideal when departments need expertise but not full-time capacity.
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
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Business Partners</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-finance-partner" className="px-10 py-5 bg-white text-teal-700 font-bold uppercase tracking-wider hover:bg-teal-50 transition-colors">
              Finance Partner
            </Link>
            <Link href="/fractional-chro" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-teal-700 transition-colors">
              HR Leadership
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-finance-partner" className="text-gray-600 hover:text-teal-700 font-medium">Finance Partner</Link>
            <Link href="/fractional-chro" className="text-gray-600 hover:text-teal-700 font-medium">Fractional CHRO</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-teal-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-director" className="text-gray-600 hover:text-teal-700 font-medium">Fractional Director</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
