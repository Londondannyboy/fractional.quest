import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Operations Director UK 2025',
  description: 'Fractional operations director UK. Part-time operations leadership for scaling businesses.',
  keywords: 'fractional operations director, part-time operations director, fractional head of operations, operations leadership, fractional ops',
  alternates: {
    canonical: 'https://fractional.quest/fractional-operations-director',
  },
  openGraph: {
    title: 'Fractional Operations Director UK 2025',
    description: 'Part-time operations leadership for growing businesses.',
    url: 'https://fractional.quest/fractional-operations-director',
  },
}

const faqItems = [
  {
    question: 'What is a fractional operations director?',
    answer: 'A fractional operations director is an experienced operations leader who works with companies on a part-time basis, typically 1-3 days per week. They optimize processes, improve efficiency, and build scalable operations without the cost of a full-time hire.',
  },
  {
    question: 'How much does a fractional operations director cost?',
    answer: 'Fractional operations directors in the UK typically charge £600-£1,100 per day. At 2 days per week, this equals £60,000-£110,000 annually—compared to £80,000-£130,000+ for a full-time operations director.',
  },
  {
    question: 'When should I hire a fractional operations director?',
    answer: 'Hire a fractional operations director when: scaling operations; improving efficiency; implementing new processes; managing rapid growth; preparing for funding; or when you need ops expertise without full-time commitment.',
  },
  {
    question: 'What is the difference between operations director and COO?',
    answer: 'An Operations Director typically focuses on specific operational areas like logistics, production, or service delivery. A COO has broader responsibility across all operations and usually sits on the executive team. For smaller companies, the roles may overlap.',
  },
]

export default function FractionalOperationsDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-lime-700 to-lime-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Operations Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Operations Director
            </h1>
            <p className="text-2xl md:text-3xl text-lime-100 leading-relaxed font-light">
              Part-time operations leadership for businesses scaling efficiently and building sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-lime-50 border-b-4 border-lime-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-lime-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional Operations Director?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional operations director</strong> is a senior operations leader who works with companies 1-3 days per week, providing expertise in process optimization, efficiency improvement, and operational scaling without full-time cost.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              This role is ideal for growing businesses that need experienced operations leadership to build scalable systems, improve margins, and prepare for growth—without committing to a full-time hire.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Operations team planning workflow"
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
            <h2 className="text-3xl font-black text-gray-900">What a Fractional Operations Director Does</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional operations director brings senior operational expertise to growing businesses. They typically focus on:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Process Optimization</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Map and improve workflows</li>
                  <li>Eliminate waste and bottlenecks</li>
                  <li>Standardize best practices</li>
                  <li>Document procedures</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Scaling Operations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Build scalable systems</li>
                  <li>Capacity planning</li>
                  <li>Technology and automation</li>
                  <li>Prepare for growth</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Team & Structure</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Define org structure</li>
                  <li>Hire operations talent</li>
                  <li>Develop team capabilities</li>
                  <li>Performance management</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Performance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>KPI frameworks</li>
                  <li>Dashboard and reporting</li>
                  <li>Quality management</li>
                  <li>Continuous improvement</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Operations Director</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-lime-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Rapid Growth</h4>
                  <p className="text-sm text-gray-600 m-0">Business is scaling quickly and operations are struggling to keep up with demand.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-lime-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Efficiency Problems</h4>
                  <p className="text-sm text-gray-600 m-0">Margins are being squeezed by operational inefficiencies and you need expert help to optimize.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-lime-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Pre-Funding Preparation</h4>
                  <p className="text-sm text-gray-600 m-0">You're preparing for investment and need to demonstrate operational maturity and scalability.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-lime-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Process Chaos</h4>
                  <p className="text-sm text-gray-600 m-0">Things are done ad-hoc without documented processes, causing quality and delivery issues.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-lime-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">M&A Integration</h4>
                  <p className="text-sm text-gray-600 m-0">You've acquired a business and need to integrate operations effectively.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Operations Director Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£600-£1,100</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-lime-50 border border-lime-200 rounded-xl text-center">
                <div className="text-sm font-bold text-lime-700 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£60,000-£110,000</div>
                <div className="text-xs text-gray-500">vs £110,000+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Savings</div>
                <div className="text-2xl font-black text-gray-900">40-50%</div>
                <div className="text-xs text-gray-500">vs permanent hire</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Operations Director vs COO</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Understanding the difference helps you choose the right level:
            </p>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-lime-700">Operations Director</th>
                    <th className="text-left py-3 font-bold text-gray-500">COO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Scope</td>
                    <td className="py-3 text-lime-700">Specific operational areas</td>
                    <td className="py-3 text-gray-600">All company operations</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Level</td>
                    <td className="py-3 text-lime-700">Senior management</td>
                    <td className="py-3 text-gray-600">C-suite executive</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Focus</td>
                    <td className="py-3 text-lime-700">Process, efficiency, delivery</td>
                    <td className="py-3 text-gray-600">Strategy, scaling, leadership</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Day Rate</td>
                    <td className="py-3 text-lime-700">£600-£1,100</td>
                    <td className="py-3 text-gray-600">£800-£1,400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Fractional Ops Director</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Effective operations directors combine analytical rigor with practical execution. According to the <a href="https://www.cim.org.uk" target="_blank" rel="noopener noreferrer" className="text-lime-600 hover:text-lime-700">Chartered Management Institute</a>, look for:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Industry experience:</strong> Operations knowledge relevant to your sector and business model</li>
              <li><strong>Process expertise:</strong> Experience designing and implementing scalable processes</li>
              <li><strong>Data-driven approach:</strong> Uses metrics to drive decisions and improvements</li>
              <li><strong>Technology awareness:</strong> Understands how to leverage tech for operational efficiency</li>
              <li><strong>Change management:</strong> Can lead transformation and bring teams along</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-lime-400">Summary:</strong> A fractional operations director provides part-time (1-3 days/week) operational leadership at £600-£1,100/day—ideal for scaling businesses needing process optimization and efficiency improvement.
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
      <section className="py-20 bg-lime-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Operations Leaders</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-coo-jobs-uk" className="px-10 py-5 bg-white text-lime-700 font-bold uppercase tracking-wider hover:bg-lime-50 transition-colors">
              COO Jobs
            </Link>
            <Link href="/fractional-executive-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-lime-700 transition-colors">
              All Executive Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-coo-jobs-uk" className="text-gray-600 hover:text-lime-700 font-medium">COO Jobs</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-lime-700 font-medium">Executive Jobs</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-lime-700 font-medium">C-Suite</Link>
            <Link href="/fractional-executive" className="text-gray-600 hover:text-lime-700 font-medium">What is Fractional?</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
