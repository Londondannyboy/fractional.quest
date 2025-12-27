import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CMO Job Description UK 2025',
  description: 'Fractional CMO job description template. Roles, responsibilities, and requirements for part-time Chief Marketing Officers.',
  keywords: 'fractional cmo job description, fractional cmo roles, fractional cmo responsibilities, part-time cmo job, cmo job description',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cmo-job-description',
  },
  openGraph: {
    title: 'Fractional CMO Job Description UK 2025',
    description: 'Complete guide to fractional CMO roles and responsibilities.',
    url: 'https://fractional.quest/fractional-cmo-job-description',
  },
}

const faqItems = [
  {
    question: 'What does a fractional CMO do?',
    answer: 'A fractional CMO provides part-time marketing leadership, typically working 1-3 days per week. They develop marketing strategy, lead teams, manage budgets, oversee brand positioning, and drive growth—delivering executive-level expertise without full-time commitment.',
  },
  {
    question: 'What qualifications does a fractional CMO need?',
    answer: 'Fractional CMOs typically have 15+ years of marketing experience, including 5+ years in senior leadership. Relevant qualifications include marketing degrees, CIM certifications, and proven track records of delivering measurable business growth.',
  },
  {
    question: 'How is a fractional CMO different from a marketing consultant?',
    answer: 'A fractional CMO takes ownership as a member of the leadership team, attending board meetings and being accountable for marketing performance. Consultants typically advise and recommend but don\'t lead execution or manage teams directly.',
  },
  {
    question: 'What should I include in a fractional CMO job description?',
    answer: 'Include: company stage and challenges, time commitment (days/week), key responsibilities, required experience, reporting structure, contract type (interim vs ongoing), compensation range, and any specific industry or channel expertise needed.',
  },
]

export default function FractionalCMOJobDescriptionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-600 to-pink-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Job Description
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional CMO<br />Job Description
            </h1>
            <p className="text-2xl md:text-3xl text-pink-100 leading-relaxed font-light">
              Complete guide to fractional CMO roles, responsibilities, and requirements for UK businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-pink-50 border-b-4 border-pink-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-pink-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What is a Fractional CMO?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional CMO</strong> is a senior marketing executive who works with companies on a part-time basis—typically 1-3 days per week—providing strategic leadership without the cost of a full-time hire.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              The role combines strategic planning, team leadership, and hands-on execution. Fractional CMOs join the leadership team, attend board meetings, and are accountable for marketing performance and growth outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Marketing executive presenting strategy"
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
            <h2 className="text-3xl font-black text-gray-900">Fractional CMO Core Responsibilities</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A fractional CMO job description should clearly outline the strategic and operational responsibilities expected. Here are the core areas typically covered:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategy</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Develop and own marketing strategy</li>
                  <li>Define brand positioning and messaging</li>
                  <li>Set marketing goals and KPIs</li>
                  <li>Align marketing with business objectives</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Leadership</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Lead and develop marketing team</li>
                  <li>Participate in leadership meetings</li>
                  <li>Report to board and investors</li>
                  <li>Manage agency relationships</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Execution</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Oversee campaign development</li>
                  <li>Manage marketing budget</li>
                  <li>Drive demand generation</li>
                  <li>Optimize channel mix</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Growth</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Build growth engine and pipeline</li>
                  <li>Improve conversion rates</li>
                  <li>Develop market expansion plans</li>
                  <li>Drive customer acquisition</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Sample Fractional CMO Job Description</h2>

            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg my-10">
              <h3 className="font-bold text-gray-900 mb-4">Fractional CMO – B2B SaaS Scale-Up</h3>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">About the Role</h4>
                  <p className="text-sm">We're seeking an experienced fractional CMO to lead marketing for our Series A B2B SaaS company. You'll work 2 days per week, joining our leadership team to build and execute our marketing strategy as we scale from £2M to £10M ARR.</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Key Responsibilities</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Develop and execute marketing strategy aligned with revenue goals</li>
                    <li>• Build and lead a small marketing team (2-3 people)</li>
                    <li>• Own demand generation, pipeline contribution, and CAC metrics</li>
                    <li>• Manage marketing budget of £200-400k annually</li>
                    <li>• Refine brand positioning and go-to-market messaging</li>
                    <li>• Report to CEO and present to board quarterly</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Requirements</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 15+ years B2B marketing experience, 5+ at CMO/VP level</li>
                    <li>• Track record scaling SaaS from £1-10M+ ARR</li>
                    <li>• Strong demand generation and digital marketing expertise</li>
                    <li>• Experience building and leading marketing teams</li>
                    <li>• Data-driven approach with commercial acumen</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Engagement</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 2 days per week (hybrid: 1 day in London office)</li>
                    <li>• Day rate: £900-£1,200 depending on experience</li>
                    <li>• Initial 6-month contract with extension expected</li>
                    <li>• Start date: Immediate</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional CMO Requirements</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              When writing your fractional CMO job description, consider these typical requirements based on guidance from the <a href="https://www.cim.co.uk" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">Chartered Institute of Marketing</a>:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Experience Level</h4>
                  <p className="text-sm text-gray-600 m-0">15+ years of marketing experience with at least 5 years in senior leadership roles (CMO, VP Marketing, Marketing Director).</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Sector Expertise</h4>
                  <p className="text-sm text-gray-600 m-0">Relevant industry experience (B2B, B2C, SaaS, e-commerce, professional services) matching your business context.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Proven Track Record</h4>
                  <p className="text-sm text-gray-600 m-0">Demonstrable results—revenue growth, brand building, successful campaigns, or team development.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-pink-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Strategic and Hands-On</h4>
                  <p className="text-sm text-gray-600 m-0">Ability to operate at both strategic and tactical levels—essential in the fractional model with limited time.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional CMO Compensation</h2>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">Day Rate</div>
                <div className="text-2xl font-black text-gray-900">£800-£1,400</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-pink-50 border border-pink-200 rounded-xl text-center">
                <div className="text-sm font-bold text-pink-600 uppercase mb-2">Monthly</div>
                <div className="text-2xl font-black text-gray-900">£6,000-£12,000</div>
                <div className="text-xs text-gray-500">1-2 days/week</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase mb-2">vs Full-Time</div>
                <div className="text-2xl font-black text-gray-900">50-70%</div>
                <div className="text-xs text-gray-500">cost savings</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Related CMO Resources</h2>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-cmo-meaning" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-pink-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-pink-600">CMO Meaning</h3>
                <p className="text-sm text-gray-600">What is a fractional CMO?</p>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-pink-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-pink-600">CMO Jobs</h3>
                <p className="text-sm text-gray-600">Current opportunities</p>
              </Link>

              <Link href="/fractional-marketing-director" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-pink-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-pink-600">Marketing Director</h3>
                <p className="text-sm text-gray-600">Alternative roles</p>
              </Link>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-pink-400">Summary:</strong> A fractional CMO job description should cover strategy, leadership, execution, and growth responsibilities. Expect 15+ years experience, 1-3 days/week commitment, and £800-£1,400/day compensation.
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
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Fractional CMOs</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-pink-600 font-bold uppercase tracking-wider hover:bg-pink-50 transition-colors">
              CMO Jobs
            </Link>
            <Link href="/fractional-marketing-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-pink-600 transition-colors">
              All Marketing Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-cmo-meaning" className="text-gray-600 hover:text-pink-600 font-medium">CMO Meaning</Link>
            <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium">CMO Jobs</Link>
            <Link href="/fractional-marketing-director" className="text-gray-600 hover:text-pink-600 font-medium">Marketing Director</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-pink-600 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
