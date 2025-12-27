import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Consultant UK 2025',
  description: 'Fractional consultants vs executives. Understanding the difference and choosing the right model for your business.',
  keywords: 'fractional consultant, fractional vs consultant, fractional executive consultant, part-time consultant, executive consulting',
  alternates: {
    canonical: 'https://fractional.quest/fractional-consultant',
  },
  openGraph: {
    title: 'Fractional Consultant UK 2025',
    description: 'Fractional executives vs consultants explained.',
    url: 'https://fractional.quest/fractional-consultant',
  },
}

const faqItems = [
  {
    question: 'What is a fractional consultant?',
    answer: 'A fractional consultant is a senior advisor who works with companies part-time, providing expertise and recommendations. Unlike fractional executives, consultants typically advise rather than take operational ownership or manage teams directly.',
  },
  {
    question: 'How is a fractional executive different from a consultant?',
    answer: 'Fractional executives take ownership: they join the leadership team, manage people, and are accountable for results. Consultants advise and recommend but typically don\'t take operational responsibility or manage teams.',
  },
  {
    question: 'Should I hire a fractional executive or consultant?',
    answer: 'Hire a fractional executive when you need someone to own and run a function. Hire a consultant when you need expertise, analysis, or recommendations without operational accountability.',
  },
  {
    question: 'Can fractional executives also consult?',
    answer: 'Yes, many fractional executives offer both models. Some engagements start as consulting (assessment, strategy) and evolve into fractional (ongoing leadership). The key is matching the model to your needs.',
  },
]

export default function FractionalConsultantPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Comparison Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Consultant
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light">
              Understanding the difference between fractional executives and consultants.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-gray-100 border-b-4 border-gray-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-gray-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Fractional Executive vs Consultant</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              The key difference is <strong className="font-semibold text-gray-900">ownership</strong>. Fractional executives own a function—they join your leadership team, manage people, and are accountable for results. Consultants advise and recommend but don't take operational responsibility.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Both models involve part-time senior expertise, but they serve different needs and operate differently within your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Consultant presenting to executive team"
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
            <h2 className="text-3xl font-black text-gray-900">Fractional vs Consultant: Key Differences</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-blue-700">Fractional Executive</th>
                    <th className="text-left py-3 font-bold text-gray-500">Consultant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Accountability</td>
                    <td className="py-3 text-blue-700">Owns function and outcomes</td>
                    <td className="py-3 text-gray-600">Advises, not accountable</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Team Management</td>
                    <td className="py-3 text-blue-700">Manages people directly</td>
                    <td className="py-3 text-gray-600">No direct reports</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Leadership Role</td>
                    <td className="py-3 text-blue-700">Part of leadership team</td>
                    <td className="py-3 text-gray-600">External advisor</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Duration</td>
                    <td className="py-3 text-blue-700">Ongoing (6+ months)</td>
                    <td className="py-3 text-gray-600">Project-based</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Deliverables</td>
                    <td className="py-3 text-blue-700">Business results</td>
                    <td className="py-3 text-gray-600">Recommendations/reports</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Decision Making</td>
                    <td className="py-3 text-blue-700">Makes decisions</td>
                    <td className="py-3 text-gray-600">Informs decisions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Executive</h2>

            <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-lg my-10">
              <h3 className="font-bold text-gray-900 mb-4">Choose Fractional When:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>You need someone to <strong>own and run</strong> a function (finance, marketing, tech)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>You have a team that needs <strong>management and leadership</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>You want ongoing, <strong>embedded support</strong> (6+ months)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>You need someone <strong>accountable for results</strong>, not just advice</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>You want them to participate in <strong>leadership meetings</strong> and strategy</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Consultant</h2>

            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg my-10">
              <h3 className="font-bold text-gray-900 mb-4">Choose Consultant When:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold">→</span>
                  <span>You need <strong>expert analysis or recommendations</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold">→</span>
                  <span>The engagement is <strong>project-based</strong> with clear scope</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold">→</span>
                  <span>You have internal people to <strong>execute</strong> on recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold">→</span>
                  <span>You want <strong>external perspective</strong> without changing org structure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500 font-bold">→</span>
                  <span>The need is <strong>temporary</strong> (weeks to months)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Example Scenarios</h2>

            <div className="grid gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">"We need to build a marketing function"</h3>
                <p className="text-gray-600 mb-3">You don't have marketing leadership, need to hire a team, set strategy, and be accountable for growth.</p>
                <div className="text-blue-600 font-bold">→ Fractional CMO</div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">"We need a marketing strategy review"</h3>
                <p className="text-gray-600 mb-3">You have a marketing team but want expert analysis and recommendations.</p>
                <div className="text-gray-600 font-bold">→ Marketing Consultant</div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">"Our CFO left and we need someone to run finance"</h3>
                <p className="text-gray-600 mb-3">You have a finance team that needs leadership, reporting, and accountability.</p>
                <div className="text-blue-600 font-bold">→ Fractional CFO</div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">"We need a financial model for fundraising"</h3>
                <p className="text-gray-600 mb-3">You need specific deliverables—a model and projections.</p>
                <div className="text-gray-600 font-bold">→ Finance Consultant</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Hybrid Approaches</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Many engagements start as one model and evolve. Common patterns include:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Consulting → Fractional</h4>
                  <p className="text-sm text-gray-600 m-0">Start with assessment/strategy consulting, then transition to ongoing fractional leadership.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Fractional → Full-Time</h4>
                  <p className="text-sm text-gray-600 m-0">Fractional executive helps define the role and hire their full-time replacement.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-gray-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Blended Model</h4>
                  <p className="text-sm text-gray-600 m-0">Fractional executive leading function, plus consulting projects on specific initiatives.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Cost Comparison</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="text-sm font-bold text-blue-700 uppercase mb-2">Fractional Executive</div>
                <div className="text-2xl font-black text-gray-900 mb-2">£600-£1,500/day</div>
                <p className="text-sm text-gray-600 mb-0">Ongoing engagement, 1-3 days/week, monthly retainer common</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Consultant</div>
                <div className="text-2xl font-black text-gray-900 mb-2">£800-£2,000/day</div>
                <p className="text-sm text-gray-600 mb-0">Project-based, often shorter engagements, deliverable-focused</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-gray-300">Summary:</strong> Fractional executives own functions and manage teams. Consultants advise and deliver recommendations. Choose fractional when you need ongoing leadership; choose consulting for project-based expertise.
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
      <section className="py-20 bg-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Fractional Executives</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-gray-700 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-roles" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-gray-700 transition-colors">
              All Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-executive" className="text-gray-600 hover:text-gray-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-executive-meaning" className="text-gray-600 hover:text-gray-700 font-medium">Fractional Meaning</Link>
            <Link href="/fractional-roles" className="text-gray-600 hover:text-gray-700 font-medium">All Roles</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-gray-700 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
