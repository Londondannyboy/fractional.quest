import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Board Member UK 2025: Part-Time NED & Board Roles',
  description: 'Fractional board member guide. How non-executive directors and board advisors work part-time to provide governance and strategic oversight.',
  keywords: 'fractional board member, part-time NED, non-executive director, board advisor, fractional governance, startup board member',
  alternates: {
    canonical: 'https://fractional.quest/fractional-board-member',
  },
  openGraph: {
    title: 'Fractional Board Member UK 2025: Part-Time NED & Board Roles',
    description: 'Part-time board roles for governance and strategic oversight.',
    url: 'https://fractional.quest/fractional-board-member',
  },
}

const faqItems = [
  {
    question: 'What is a fractional board member?',
    answer: 'A fractional board member is a non-executive director or board advisor who serves on multiple boards simultaneously. They provide governance, strategic oversight, and experienced counsel to each company, typically for 1-2 days per month per board.',
  },
  {
    question: 'How much do board members get paid?',
    answer: 'UK non-executive directors typically receive £20,000-£50,000 per year for SME boards, £50,000-£100,000 for larger companies, and potentially more for FTSE boards. Startup advisory boards may pay in equity rather than cash.',
  },
  {
    question: 'How many boards can one person sit on?',
    answer: 'Most portfolio professionals hold 2-5 board positions, depending on the time commitment of each. The Institute of Directors recommends NEDs carefully assess capacity before taking additional roles.',
  },
  {
    question: 'What is the difference between NED and advisor?',
    answer: 'Non-Executive Directors (NEDs) have formal fiduciary duties and legal responsibilities. Advisors provide guidance without legal obligations. NEDs sit on the actual board; advisors may attend meetings but don\'t vote.',
  },
]

export default function FractionalBoardMemberPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-700 to-stone-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Governance Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Board Member
            </h1>
            <p className="text-2xl md:text-3xl text-stone-300 leading-relaxed font-light">
              Part-time governance and strategic oversight. Build a portfolio of board roles.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-stone-100 border-b-4 border-stone-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-stone-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Board Member?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional board member</strong> is a non-executive director (NED) or board advisor who sits on multiple boards simultaneously. They provide governance, oversight, and strategic counsel to each organization—typically for 1-2 days per month per board.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Board roles are inherently "fractional"—NEDs have always held multiple positions. The term emphasizes this portfolio approach to senior governance roles.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Board meeting in progress"
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
            <h2 className="text-3xl font-black text-gray-900">Types of Board Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              "Board member" encompasses several distinct roles, each with different responsibilities and compensation:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-stone-50 border-2 border-stone-200 p-6 rounded-lg">
                <h3 className="font-bold text-stone-700 mb-3">Non-Executive Director (NED)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Role:</strong> Formal board member with fiduciary duties</li>
                  <li><strong>Responsibility:</strong> Governance, oversight, strategy</li>
                  <li><strong>Liability:</strong> Legal obligations under Companies Act</li>
                  <li><strong>Compensation:</strong> £20,000-£100,000+ per year</li>
                  <li><strong>Time:</strong> 1-2 days/month + prep</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-3">Board Advisor</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Role:</strong> Informal advisor without board seat</li>
                  <li><strong>Responsibility:</strong> Guidance, connections, expertise</li>
                  <li><strong>Liability:</strong> No formal legal obligations</li>
                  <li><strong>Compensation:</strong> Equity, small retainer, or fees</li>
                  <li><strong>Time:</strong> Few hours per month</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-3">Chair (Non-Exec)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Role:</strong> Leads the board</li>
                  <li><strong>Responsibility:</strong> Board effectiveness, CEO relationship</li>
                  <li><strong>Liability:</strong> Full NED responsibilities plus more</li>
                  <li><strong>Compensation:</strong> 2-3x NED fee</li>
                  <li><strong>Time:</strong> 2-4 days/month</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-3">Observer</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Role:</strong> Attends board but doesn't vote</li>
                  <li><strong>Responsibility:</strong> Usually investor representation</li>
                  <li><strong>Liability:</strong> Limited</li>
                  <li><strong>Compensation:</strong> Usually none (investor role)</li>
                  <li><strong>Time:</strong> Board meetings only</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What Do Board Members Do?</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-stone-800">Institute of Directors</a>, non-executive directors have three primary functions:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Strategy</h4>
                  <p className="text-sm text-gray-600 m-0">Contribute to strategic development, challenge assumptions, and bring external perspective to strategic decisions.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Scrutiny</h4>
                  <p className="text-sm text-gray-600 m-0">Hold management accountable for performance against objectives. Review financial reports, risk, and compliance.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Support</h4>
                  <p className="text-sm text-gray-600 m-0">Support the executive team with advice, connections, and experience. Act as sounding board for the CEO.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-stone-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Risk & Compliance</h4>
                  <p className="text-sm text-gray-600 m-0">Ensure appropriate risk management and regulatory compliance. Serve on audit and risk committees.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Board Member Compensation</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Company Type</th>
                    <th className="text-left py-3 font-bold text-stone-700">NED Fee (Annual)</th>
                    <th className="text-left py-3 font-bold text-gray-900">Chair Fee</th>
                    <th className="text-left py-3 font-bold text-gray-900">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Early-Stage Startup</td>
                    <td className="py-3 text-stone-700">Equity only</td>
                    <td className="py-3 text-gray-600">N/A</td>
                    <td className="py-3 text-gray-600">Ad hoc</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Scale-Up (£1-10M)</td>
                    <td className="py-3 text-stone-700">£10,000-£25,000</td>
                    <td className="py-3 text-gray-600">£20,000-£40,000</td>
                    <td className="py-3 text-gray-600">1 day/month</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">SME (£10-50M)</td>
                    <td className="py-3 text-stone-700">£25,000-£45,000</td>
                    <td className="py-3 text-gray-600">£45,000-£80,000</td>
                    <td className="py-3 text-gray-600">1-2 days/month</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Mid-Market</td>
                    <td className="py-3 text-stone-700">£40,000-£70,000</td>
                    <td className="py-3 text-gray-600">£70,000-£120,000</td>
                    <td className="py-3 text-gray-600">2 days/month</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">FTSE 250</td>
                    <td className="py-3 text-stone-700">£60,000-£100,000</td>
                    <td className="py-3 text-gray-600">£150,000-£250,000</td>
                    <td className="py-3 text-gray-600">2-3 days/month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Building a Board Portfolio</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Many experienced executives build a portfolio of board roles as part of a <Link href="/portfolio-career" className="text-stone-700 hover:text-stone-800">portfolio career</Link>. A typical portfolio might include:
            </p>

            <div className="bg-stone-50 border-2 border-stone-200 p-8 rounded-lg my-10">
              <h3 className="font-bold text-gray-900 mb-4">Example Board Portfolio</h3>
              <div className="grid gap-4 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="font-medium">NED - Private Equity Portfolio Company</span>
                  <span className="text-stone-700">£35,000/year</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="font-medium">NED - Tech Scale-Up</span>
                  <span className="text-stone-700">£25,000/year</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="font-medium">Chair - SME Family Business</span>
                  <span className="text-stone-700">£45,000/year</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-stone-200">
                  <span className="font-medium">Advisor - 2 Early-Stage Startups</span>
                  <span className="text-stone-700">Equity</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold">Total Board Income</span>
                  <span className="text-stone-700 font-bold">£105,000+/year</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 mb-0">
                Combined with 1-2 fractional executive roles, this creates a diverse £200,000+ portfolio career.
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">How to Get Board Roles</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Network:</strong> Most board roles come through personal connections and referrals</li>
              <li><strong>Visibility:</strong> Build profile through speaking, writing, and industry involvement</li>
              <li><strong>Recruiters:</strong> Register with board search firms (Odgers, Heidrick, Spencer Stuart)</li>
              <li><strong>IoD:</strong> Join the <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-stone-800">Institute of Directors</a> and their board matching service</li>
              <li><strong>Qualifications:</strong> Consider IoD Certificate/Diploma in Company Direction</li>
              <li><strong>Start smaller:</strong> Advisory roles and charity boards build experience</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-stone-400">Summary:</strong> Fractional board members (NEDs and advisors) serve multiple organizations, providing governance, strategy, and oversight for 1-2 days per month each. Fees range from £20,000-£100,000+ per board, making it a lucrative part of a portfolio career.
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
      <section className="py-20 bg-stone-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Explore Board Opportunities</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/portfolio-career" className="px-10 py-5 bg-white text-stone-700 font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors">
              Portfolio Career Guide
            </Link>
            <Link href="/fractional-advisory" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-stone-700 transition-colors">
              Advisory Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/portfolio-career" className="text-gray-600 hover:text-stone-700 font-medium">Portfolio Career</Link>
            <Link href="/portfolio-executive" className="text-gray-600 hover:text-stone-700 font-medium">Portfolio Executive</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-stone-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-stone-700 font-medium">Fractional C-Suite</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
