import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Consulting UK 2025',
  description: 'Fractional HR consulting services UK. Part-time HR leadership and consulting.',
  keywords: 'fractional hr consulting, hr consulting, fractional hr services, part-time hr, hr consultant, fractional chro',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-consulting',
  },
  openGraph: {
    title: 'Fractional HR Consulting UK 2025',
    description: 'Part-time HR leadership and strategic consulting.',
    url: 'https://fractional.quest/fractional-hr-consulting',
  },
}

const faqItems = [
  {
    question: 'What is fractional HR consulting?',
    answer: 'Fractional HR consulting is a service where experienced HR professionals provide strategic HR leadership on a part-time basis, typically 1-3 days per week. Unlike traditional HR consultants who advise on projects, fractional HR consultants become embedded members of the leadership team with ongoing accountability.',
  },
  {
    question: 'How much does fractional HR consulting cost?',
    answer: 'Fractional HR consulting in the UK typically costs £600-£1,200 per day, depending on seniority and scope. CHRO-level consultants command £900-£1,200/day, while HR Director-level costs £600-£900/day. Monthly retainers of £2,500-£6,000 for 1-2 days per week are common.',
  },
  {
    question: 'What does a fractional HR consultant do?',
    answer: 'Fractional HR consultants develop people strategy, build HR infrastructure (policies, handbooks, systems), handle complex employee relations, lead talent acquisition strategy, implement performance frameworks, ensure employment law compliance, and advise leadership on organizational development.',
  },
  {
    question: 'When should I use fractional HR consulting?',
    answer: 'Consider fractional HR consulting when: you\'re scaling and need HR leadership without full-time cost; facing complex ER issues; building HR from scratch; implementing major changes (restructuring, TUPE); need interim cover; or want strategic HR support without hiring a full-time CHRO.',
  },
  {
    question: 'What is the difference between fractional HR and HR consultant?',
    answer: 'A fractional HR consultant is an embedded part-time leader who owns HR outcomes and manages your people function. A traditional HR consultant typically advises on specific projects (handbook review, policy audit) without ongoing leadership responsibility.',
  },
  {
    question: 'What qualifications should a fractional HR consultant have?',
    answer: 'Fractional HR consultants typically have CIPD Level 7 qualification, 12-15+ years of HR experience with senior leadership roles, expertise in UK employment law, and proven track record building HR functions. Industry-specific experience is often valuable.',
  },
]

export default function FractionalHRConsultingPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional HR Consulting: Strategic People Leadership for Growing Companies',
    description: 'Complete guide to fractional HR consulting in the UK - part-time HR leadership and strategic consulting services.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              HR Services
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional HR<br />Consulting
            </h1>
            <p className="text-2xl md:text-3xl text-teal-100 leading-relaxed font-light">
              Strategic HR leadership on a part-time basis. Build your people function without full-time cost.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-teal-50 border-b-4 border-teal-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-teal-200">
            <div className="text-sm font-bold uppercase tracking-wider text-teal-600 mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              What is Fractional HR Consulting?
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              <strong className="font-semibold text-gray-900">Fractional HR consulting</strong> provides companies with experienced HR leadership on a part-time basis—typically 1-3 days per week—combining strategic consulting with embedded leadership.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlike traditional project-based HR consultants, fractional HR consultants become part of your leadership team, owning your people strategy and function. According to the <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">CIPD</a>, this model has grown 40% as scaling companies seek flexible access to senior HR expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="HR consulting meeting with team"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Fractional HR consultants provide strategic leadership for growing teams</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">What Fractional HR Consulting Includes</h2>

            <p className="text-lg leading-relaxed">
              Fractional HR consulting goes beyond traditional HR advice. It provides embedded leadership with accountability for your people function:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategic</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>People strategy aligned with business goals</li>
                  <li>Organizational design and structure</li>
                  <li>Culture development and change</li>
                  <li>Leadership development</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Operational</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>HR policy and handbook development</li>
                  <li>HRIS selection and implementation</li>
                  <li>Compensation and benefits strategy</li>
                  <li>Performance management systems</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Compliance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Employment law compliance</li>
                  <li>Complex employee relations</li>
                  <li>Disciplinary and grievance</li>
                  <li>TUPE and restructuring</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Talent</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Talent acquisition strategy</li>
                  <li>Employer branding</li>
                  <li>Retention and engagement</li>
                  <li>Succession planning</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional HR Consulting Costs</h2>

            <p className="text-lg">
              Fractional HR consulting offers significant cost savings compared to full-time HR leadership:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">HR Director Level</div>
                <div className="text-2xl font-black text-gray-900">£600-£900</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-xl text-center">
                <div className="text-sm font-bold text-teal-600 uppercase tracking-wider mb-2">CHRO Level</div>
                <div className="text-2xl font-black text-gray-900">£900-£1,200</div>
                <div className="text-xs text-gray-500">per day</div>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Monthly Retainer</div>
                <div className="text-2xl font-black text-gray-900">£2.5k-£6k</div>
                <div className="text-xs text-gray-500">1-2 days/week</div>
              </div>
            </div>

            <p className="text-lg">
              Compare this to a full-time HR Director (£80,000-£120,000+) or CHRO (£120,000-£180,000+). A fractional HR consultant at 2 days per week costs roughly <strong>50-70% less</strong>.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Use Fractional HR Consulting</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-teal-300 transition-colors">
                <div className="w-1.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Scaling Companies (30-150 employees)</h4>
                  <p className="text-sm text-gray-600 m-0">Need HR leadership but not 40 hours/week. Building processes, compliance, and culture.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-teal-300 transition-colors">
                <div className="w-1.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Complex Employee Relations</h4>
                  <p className="text-sm text-gray-600 m-0">Facing difficult ER issues (tribunals, grievances, redundancies) requiring expert guidance.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-teal-300 transition-colors">
                <div className="w-1.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Building HR from Scratch</h4>
                  <p className="text-sm text-gray-600 m-0">Creating policies, handbooks, systems, and processes as you professionalize.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-teal-300 transition-colors">
                <div className="w-1.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Major Change Programs</h4>
                  <p className="text-sm text-gray-600 m-0">Restructuring, TUPE, culture change, or organizational transformation.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-teal-300 transition-colors">
                <div className="w-1.5 bg-teal-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">PE/VC-Backed Companies</h4>
                  <p className="text-sm text-gray-600 m-0">Investors require professional HR but company doesn't need (or can't afford) full-time.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional HR vs Traditional HR Consulting</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-teal-500">Factor</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-teal-500">Fractional HR</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-teal-500">Traditional Consulting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Relationship</td>
                    <td className="p-4 text-gray-700">Embedded leader, part of team</td>
                    <td className="p-4 text-gray-700">External advisor</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Accountability</td>
                    <td className="p-4 text-gray-700">Owns outcomes</td>
                    <td className="p-4 text-gray-700">Advises on outcomes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Duration</td>
                    <td className="p-4 text-gray-700">Ongoing (6 months+)</td>
                    <td className="p-4 text-gray-700">Project-based</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Scope</td>
                    <td className="p-4 text-gray-700">Full HR function</td>
                    <td className="p-4 text-gray-700">Specific deliverable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Related HR Services</h2>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-hr" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-teal-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600">Fractional HR Guide</h3>
                <p className="text-gray-600 text-sm mb-0">Complete guide to fractional HR</p>
              </Link>

              <Link href="/fractional-hr-services" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-teal-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600">HR Services</h3>
                <p className="text-gray-600 text-sm mb-0">Overview of fractional HR services</p>
              </Link>

              <Link href="/fractional-hr-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-teal-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600">HR Jobs</h3>
                <p className="text-gray-600 text-sm mb-0">Fractional HR opportunities</p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-teal-400">Fractional HR consulting in summary:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                Part-time HR leadership (1-3 days/week) that combines strategic consulting with embedded accountability—building your people function at 50-70% less than full-time HR leadership cost.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Fractional HR Support
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Connect with experienced fractional HR consultants or explore HR leadership roles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-hr-jobs-uk" className="px-10 py-5 bg-white text-teal-600 font-bold uppercase tracking-wider hover:bg-teal-50 transition-colors">
              HR Jobs UK
            </Link>
            <Link href="/fractional-hr" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-teal-600 transition-colors">
              HR Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                Fractional HR Guide
              </Link>
              <Link href="/fractional-hr-consultant" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                HR Consultant
              </Link>
              <Link href="/fractional-hr-services" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                HR Services
              </Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                HR Jobs UK
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
