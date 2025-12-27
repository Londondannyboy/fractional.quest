import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Management UK 2025',
  description: 'Fractional management services UK. Part-time executive and senior management for growing businesses.',
  keywords: 'fractional management, fractional managers, part-time management, interim management, fractional executives',
  alternates: {
    canonical: 'https://fractional.quest/fractional-management',
  },
  openGraph: {
    title: 'Fractional Management UK 2025',
    description: 'Part-time executive management for growing businesses.',
    url: 'https://fractional.quest/fractional-management',
  },
}

const faqItems = [
  {
    question: 'What is fractional management?',
    answer: 'Fractional management is a model where experienced senior managers and executives work with companies on a part-time basis. This includes C-suite executives, directors, and senior managers who provide leadership 1-3 days per week.',
  },
  {
    question: 'How is fractional management different from consulting?',
    answer: 'Fractional managers take ownership and accountability for outcomes, join the leadership team, and manage people. Consultants typically advise and recommend but don\'t take operational responsibility or manage teams directly.',
  },
  {
    question: 'What types of fractional management are available?',
    answer: 'Fractional management spans all senior functions: finance (CFO/FD), marketing (CMO), technology (CTO), operations (COO), HR (CHRO), sales (CRO), and specialist roles like product, digital, and strategy.',
  },
  {
    question: 'How do I engage fractional management?',
    answer: 'Fractional managers are engaged on day rates (£600-£1,500/day) or monthly retainers. Engagements typically run 6+ months and can be found through specialist platforms, executive networks, or direct outreach.',
  },
]

export default function FractionalManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-700 to-slate-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Management Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Management
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed font-light">
              Part-time senior management for businesses that need expertise without full-time commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-slate-100 border-b-4 border-slate-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-slate-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is Fractional Management?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              <strong className="font-semibold text-gray-900">Fractional management</strong> refers to engaging experienced senior managers and executives on a part-time basis—typically 1-3 days per week—to provide leadership, expertise, and accountability without full-time cost.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlike consultants who advise, fractional managers take ownership: they join your leadership team, manage people, and are accountable for results in their function.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Management team in discussion"
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
            <h2 className="text-3xl font-black text-gray-900">Types of Fractional Management</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Fractional management encompasses a range of senior roles across all business functions:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">C-Suite Management</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-cfo-jobs-uk" className="text-slate-700 hover:text-slate-800">CFO</Link> - Finance & fundraising</li>
                  <li><Link href="/fractional-cmo-jobs-uk" className="text-slate-700 hover:text-slate-800">CMO</Link> - Marketing & brand</li>
                  <li><Link href="/fractional-cto-jobs-uk" className="text-slate-700 hover:text-slate-800">CTO</Link> - Technology & engineering</li>
                  <li><Link href="/fractional-coo-jobs-uk" className="text-slate-700 hover:text-slate-800">COO</Link> - Operations & scaling</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Director Management</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-marketing-director" className="text-slate-700 hover:text-slate-800">Marketing Director</Link></li>
                  <li><Link href="/fractional-finance-director" className="text-slate-700 hover:text-slate-800">Finance Director</Link></li>
                  <li><Link href="/fractional-sales-director-jobs-uk" className="text-slate-700 hover:text-slate-800">Sales Director</Link></li>
                  <li><Link href="/fractional-hr-director" className="text-slate-700 hover:text-slate-800">HR Director</Link></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Specialist Management</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-product-director" className="text-slate-700 hover:text-slate-800">Product Director</Link></li>
                  <li><Link href="/fractional-digital-director" className="text-slate-700 hover:text-slate-800">Digital Director</Link></li>
                  <li><Link href="/fractional-growth-director" className="text-slate-700 hover:text-slate-800">Growth Director</Link></li>
                  <li><Link href="/fractional-strategy-director" className="text-slate-700 hover:text-slate-800">Strategy Director</Link></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Support Management</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><Link href="/fractional-chief-of-staff" className="text-slate-700 hover:text-slate-800">Chief of Staff</Link></li>
                  <li><Link href="/fractional-operations-director" className="text-slate-700 hover:text-slate-800">Operations Director</Link></li>
                  <li><Link href="/fractional-it-director" className="text-slate-700 hover:text-slate-800">IT Director</Link></li>
                  <li><Link href="/fractional-head-of-sales" className="text-slate-700 hover:text-slate-800">Head of Sales</Link></li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional vs Other Models</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-slate-700">Fractional</th>
                    <th className="text-left py-3 font-bold text-gray-500">Interim</th>
                    <th className="text-left py-3 font-bold text-gray-500">Consultant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Time</td>
                    <td className="py-3 text-slate-700">1-3 days/week</td>
                    <td className="py-3 text-gray-600">4-5 days/week</td>
                    <td className="py-3 text-gray-600">Project-based</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Duration</td>
                    <td className="py-3 text-slate-700">Ongoing (6+ months)</td>
                    <td className="py-3 text-gray-600">Fixed (3-12 months)</td>
                    <td className="py-3 text-gray-600">Project scope</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Accountability</td>
                    <td className="py-3 text-slate-700">Owns function</td>
                    <td className="py-3 text-gray-600">Owns function</td>
                    <td className="py-3 text-gray-600">Advises only</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Team</td>
                    <td className="py-3 text-slate-700">Manages people</td>
                    <td className="py-3 text-gray-600">Manages people</td>
                    <td className="py-3 text-gray-600">No reports</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Benefits of Fractional Management</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-slate-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Cost Efficiency</h4>
                  <p className="text-sm text-gray-600 m-0">Access senior management at 50-70% of full-time cost. Pay only for time needed.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-slate-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Experience Level</h4>
                  <p className="text-sm text-gray-600 m-0">Often more experienced than affordable full-time hires. 15-25+ years typical.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-slate-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Flexibility</h4>
                  <p className="text-sm text-gray-600 m-0">Scale up or down as needs change. No long-term employment obligations.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-slate-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Fresh Perspective</h4>
                  <p className="text-sm text-gray-600 m-0">External view with cross-industry experience. Challenge internal assumptions.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Management Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£600-£1,500</div>
                <div className="text-xs text-gray-500">by seniority</div>
              </div>
              <div className="p-6 bg-slate-100 border border-slate-300 rounded-xl text-center">
                <div className="text-sm font-bold text-slate-700 uppercase mb-2">Monthly</div>
                <div className="text-2xl font-black text-gray-900">£5,000-£12,000</div>
                <div className="text-xs text-gray-500">1-2 days/week</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">vs Full-Time</div>
                <div className="text-2xl font-black text-gray-900">50-70%</div>
                <div className="text-xs text-gray-500">savings</div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-slate-300">Summary:</strong> Fractional management provides part-time senior leadership across all functions at £600-£1,500/day. Unlike consultants, fractional managers take ownership and manage teams.
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
      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Fractional Managers</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-slate-700 font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-roles" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-slate-700 transition-colors">
              All Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-leadership" className="text-gray-600 hover:text-slate-700 font-medium">Fractional Leadership</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-slate-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-roles" className="text-gray-600 hover:text-slate-700 font-medium">All Roles</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-slate-700 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
