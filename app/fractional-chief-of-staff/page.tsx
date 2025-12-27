import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Chief of Staff UK 2025',
  description: 'Fractional chief of staff UK. Part-time strategic support for CEOs and founders of growing businesses.',
  keywords: 'fractional chief of staff, part-time chief of staff, fractional cos, chief of staff consulting, ceo support',
  alternates: {
    canonical: 'https://fractional.quest/fractional-chief-of-staff',
  },
  openGraph: {
    title: 'Fractional Chief of Staff UK 2025',
    description: 'Part-time strategic support for CEOs and founders.',
    url: 'https://fractional.quest/fractional-chief-of-staff',
  },
}

const faqItems = [
  {
    question: 'What is a fractional chief of staff?',
    answer: 'A fractional chief of staff is an experienced operational executive who works part-time (1-3 days/week) to support a CEO or founder. They handle strategic initiatives, cross-functional coordination, and operational priorities—freeing the CEO to focus on high-value activities.',
  },
  {
    question: 'What does a fractional chief of staff do?',
    answer: 'A fractional chief of staff manages strategic projects, coordinates across departments, prepares for board meetings, handles investor communications, drives OKRs and planning processes, and serves as a trusted advisor and sounding board for the CEO.',
  },
  {
    question: 'How much does a fractional chief of staff cost?',
    answer: 'Fractional chiefs of staff in the UK typically charge £600-£1,000 per day. At 2 days per week, this equals £60,000-£100,000 annually—compared to £100,000-£150,000+ for a full-time chief of staff.',
  },
  {
    question: 'When should I hire a fractional chief of staff?',
    answer: 'Hire a fractional chief of staff when the CEO is overwhelmed with operational tasks, strategic initiatives are stalling, cross-functional coordination is breaking down, or you need experienced support without a full-time commitment.',
  },
]

export default function FractionalChiefOfStaffPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              CEO Support
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Chief of Staff
            </h1>
            <p className="text-2xl md:text-3xl text-indigo-100 leading-relaxed font-light">
              Strategic support for CEOs and founders. Part-time operational leadership to amplify your impact.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-indigo-50 border-b-4 border-indigo-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-indigo-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Chief of Staff?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional chief of staff</strong> is an experienced operational leader who works part-time to support the CEO—handling strategic initiatives, cross-functional coordination, and high-priority projects that would otherwise consume the CEO's time.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              This emerging role is particularly valuable for scale-up CEOs and founders who need leverage but aren't ready for a full-time chief of staff hire.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Chief of staff working with executive team"
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
            <h2 className="text-3xl font-black text-gray-900">What a Fractional Chief of Staff Does</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The chief of staff role varies significantly by company, but fractional chiefs of staff typically focus on high-impact areas that directly support the CEO's effectiveness:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategic Initiatives</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Lead cross-functional projects</li>
                  <li>Drive OKR/goal-setting process</li>
                  <li>Execute strategic priorities</li>
                  <li>Manage special projects</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Operational Coordination</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Align leadership team</li>
                  <li>Resolve cross-team blockers</li>
                  <li>Improve internal processes</li>
                  <li>Drive meeting effectiveness</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Board & Investor</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Prepare board materials</li>
                  <li>Coordinate investor updates</li>
                  <li>Track commitments and follow-ups</li>
                  <li>Support fundraising process</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">CEO Support</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Serve as sounding board</li>
                  <li>Handle overflow priorities</li>
                  <li>Prepare for key meetings</li>
                  <li>Protect CEO's time</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Chief of Staff</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">CEO Bandwidth Crisis</h4>
                  <p className="text-sm text-gray-600 m-0">The CEO is stretched too thin, spending time on operational tasks instead of strategy and key relationships.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Strategic Projects Stalling</h4>
                  <p className="text-sm text-gray-600 m-0">Important initiatives lack ownership and momentum because no one has dedicated bandwidth.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Coordination Breakdown</h4>
                  <p className="text-sm text-gray-600 m-0">Departments are siloed, communication is poor, and cross-functional work is difficult.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Board/Investor Demands</h4>
                  <p className="text-sm text-gray-600 m-0">Preparing for board meetings and investor communications is consuming too much CEO time.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Rapid Growth Phase</h4>
                  <p className="text-sm text-gray-600 m-0">The company is scaling quickly and the CEO needs leverage to maintain effectiveness.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Chief of Staff Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£600-£1,000</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-xl text-center">
                <div className="text-sm font-bold text-indigo-700 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£60,000-£100,000</div>
                <div className="text-xs text-gray-500">vs £120,000+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Typical Commitment</div>
                <div className="text-2xl font-black text-gray-900">1-2 Days</div>
                <div className="text-xs text-gray-500">per week</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Chief of Staff vs Other Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The chief of staff role is sometimes confused with other support roles. Here's how it differs:
            </p>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Role</th>
                    <th className="text-left py-3 font-bold text-gray-600">Focus</th>
                    <th className="text-left py-3 font-bold text-gray-600">Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-indigo-50">
                    <td className="py-3 font-bold text-indigo-700">Chief of Staff</td>
                    <td className="py-3 text-gray-700">Strategic initiatives, cross-functional coordination</td>
                    <td className="py-3 text-gray-700">Senior strategic</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">COO</td>
                    <td className="py-3 text-gray-600">Day-to-day operations, running the business</td>
                    <td className="py-3 text-gray-600">C-level executive</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Executive Assistant</td>
                    <td className="py-3 text-gray-600">Calendar, travel, admin support</td>
                    <td className="py-3 text-gray-600">Administrative</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Project Manager</td>
                    <td className="py-3 text-gray-600">Specific project delivery</td>
                    <td className="py-3 text-gray-600">Tactical</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Fractional CoS</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Effective fractional chiefs of staff combine operational excellence with strategic thinking. Look for:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Consulting or strategy background:</strong> Ability to structure and solve complex problems</li>
              <li><strong>Startup/scale-up experience:</strong> Understands the pace and ambiguity of growing companies</li>
              <li><strong>Executive presence:</strong> Can represent the CEO and engage with the leadership team</li>
              <li><strong>Project management skills:</strong> Delivers results, not just advice</li>
              <li><strong>Discretion and trust:</strong> Will handle confidential information appropriately</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-indigo-400">Summary:</strong> A fractional chief of staff provides part-time (1-2 days/week) strategic support at £600-£1,000/day—ideal for CEOs who need leverage without a full-time hire.
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
          <h2 className="text-4xl font-black mb-6">Find Executive Support</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-indigo-700 font-bold uppercase tracking-wider hover:bg-indigo-50 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-coo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-indigo-700 transition-colors">
              COO Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-coo-jobs-uk" className="text-gray-600 hover:text-indigo-700 font-medium">COO Jobs</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-indigo-700 font-medium">Executive Jobs</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-indigo-700 font-medium">C-Suite</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-indigo-700 font-medium">What is Fractional?</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
