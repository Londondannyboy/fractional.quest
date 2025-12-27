import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional IT Director UK 2025',
  description: 'Fractional IT director UK. Part-time IT leadership for businesses needing technology strategy and management.',
  keywords: 'fractional it director, part-time it director, fractional head of it, it director consulting, it leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-it-director',
  },
  openGraph: {
    title: 'Fractional IT Director UK 2025',
    description: 'Part-time IT leadership for growing businesses.',
    url: 'https://fractional.quest/fractional-it-director',
  },
}

const faqItems = [
  {
    question: 'What is a fractional IT director?',
    answer: 'A fractional IT director is an experienced IT leader who works with companies on a part-time basis, typically 1-3 days per week. They provide IT strategy, infrastructure management, security oversight, and technology leadership without the cost of a full-time hire.',
  },
  {
    question: 'How much does a fractional IT director cost?',
    answer: 'Fractional IT directors in the UK typically charge £600-£1,100 per day. At 2 days per week, this equals £60,000-£110,000 annually—compared to £80,000-£120,000+ for a full-time IT director.',
  },
  {
    question: 'When should I hire a fractional IT director?',
    answer: 'Hire a fractional IT director when: upgrading IT infrastructure; improving cybersecurity; managing IT suppliers; digital transformation projects; or when you need senior IT expertise but not full-time capacity.',
  },
  {
    question: 'What is the difference between IT director and CTO?',
    answer: 'IT Directors typically focus on internal technology operations, infrastructure, and support. CTOs focus on product/software development and technology strategy. Some companies have both; others combine the roles.',
  },
]

export default function FractionalITDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-700 to-sky-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              IT Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />IT Director
            </h1>
            <p className="text-2xl md:text-3xl text-sky-100 leading-relaxed font-light">
              Part-time IT leadership for businesses needing technology strategy and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-sky-50 border-b-4 border-sky-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-sky-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional IT Director?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional IT director</strong> is a senior IT leader who works with companies 1-3 days per week, providing strategic oversight of technology infrastructure, cybersecurity, and IT operations without full-time commitment.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              This role is ideal for SMEs and growing businesses that need experienced IT leadership to modernize systems, improve security, manage vendors, and align technology with business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="IT professional working with servers"
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
            <h2 className="text-3xl font-black text-gray-900">What a Fractional IT Director Does</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional IT director brings senior technology expertise to businesses that need IT leadership but can't justify or afford a full-time hire. Key responsibilities include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">IT Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Technology roadmap development</li>
                  <li>Digital transformation planning</li>
                  <li>IT budget management</li>
                  <li>Align IT with business goals</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Infrastructure</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Cloud strategy and migration</li>
                  <li>Network and systems oversight</li>
                  <li>Disaster recovery planning</li>
                  <li>Technology selection</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Security</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Cybersecurity strategy</li>
                  <li>Risk assessment and mitigation</li>
                  <li>Compliance management</li>
                  <li>Security awareness training</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Operations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Vendor management</li>
                  <li>IT support oversight</li>
                  <li>Service level management</li>
                  <li>IT team development</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional IT Director</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-sky-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">IT Infrastructure Upgrade</h4>
                  <p className="text-sm text-gray-600 m-0">You need to modernize systems, migrate to cloud, or overhaul your technology stack.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-sky-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Cybersecurity Concerns</h4>
                  <p className="text-sm text-gray-600 m-0">You want to improve security posture, respond to a breach, or achieve compliance.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-sky-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Vendor Management</h4>
                  <p className="text-sm text-gray-600 m-0">You need someone to manage IT suppliers, negotiate contracts, and ensure value.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-sky-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Digital Transformation</h4>
                  <p className="text-sm text-gray-600 m-0">You're implementing new business systems (ERP, CRM) and need strategic oversight.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-sky-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Business Growth</h4>
                  <p className="text-sm text-gray-600 m-0">Company is scaling and IT needs to keep pace, but not ready for full-time IT director.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional IT Director Costs</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£600-£1,100</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-sky-50 border border-sky-200 rounded-xl text-center">
                <div className="text-sm font-bold text-sky-700 uppercase mb-2">Annual (2 days/wk)</div>
                <div className="text-2xl font-black text-gray-900">£60,000-£110,000</div>
                <div className="text-xs text-gray-500">vs £100,000+ full-time</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Savings</div>
                <div className="text-2xl font-black text-gray-900">40-50%</div>
                <div className="text-xs text-gray-500">vs permanent hire</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">IT Director vs CTO</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Understanding the difference helps you choose the right role:
            </p>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-sky-700">IT Director</th>
                    <th className="text-left py-3 font-bold text-gray-500">CTO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Primary Focus</td>
                    <td className="py-3 text-sky-700">Internal IT operations</td>
                    <td className="py-3 text-gray-600">Product/tech strategy</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Scope</td>
                    <td className="py-3 text-sky-700">Infrastructure, support, security</td>
                    <td className="py-3 text-gray-600">Software, architecture, R&D</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Best For</td>
                    <td className="py-3 text-sky-700">Non-tech companies</td>
                    <td className="py-3 text-gray-600">Tech/product companies</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Typical Rate</td>
                    <td className="py-3 text-sky-700">£600-£1,100/day</td>
                    <td className="py-3 text-gray-600">£900-£1,500/day</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What to Look for in a Fractional IT Director</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.bcs.org" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">British Computer Society (BCS)</a>, effective IT leaders combine technical knowledge with business acumen:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Broad technical knowledge:</strong> Infrastructure, cloud, security, and enterprise systems</li>
              <li><strong>Strategic thinking:</strong> Can align IT investments with business objectives</li>
              <li><strong>Vendor management:</strong> Experience negotiating and managing IT suppliers</li>
              <li><strong>Security expertise:</strong> Understanding of cybersecurity risks and controls</li>
              <li><strong>Communication skills:</strong> Can translate technical concepts for business stakeholders</li>
            </ul>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-sky-400">Summary:</strong> A fractional IT director provides part-time (1-3 days/week) IT leadership at £600-£1,100/day—ideal for SMEs needing technology strategy, security, and infrastructure management.
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
      <section className="py-20 bg-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find IT Leadership</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cto-jobs-uk" className="px-10 py-5 bg-white text-sky-700 font-bold uppercase tracking-wider hover:bg-sky-50 transition-colors">
              CTO Jobs
            </Link>
            <Link href="/fractional-executive-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-sky-700 transition-colors">
              All Executive Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cto-jobs-uk" className="text-gray-600 hover:text-sky-700 font-medium">CTO Jobs</Link>
            <Link href="/fractional-cio" className="text-gray-600 hover:text-sky-700 font-medium">CIO</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-sky-700 font-medium">Executive Jobs</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-sky-700 font-medium">C-Suite</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
