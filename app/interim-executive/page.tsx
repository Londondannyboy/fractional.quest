import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Executive Guide UK 2025',
  description: 'What is an interim executive? Temporary leadership roles, rates, when to hire.',
  keywords: 'interim executive, interim management, temporary executive, interim leadership, interim roles, interim jobs',
  alternates: {
    canonical: 'https://fractional.quest/interim-executive',
  },
  openGraph: {
    title: 'Interim Executive Guide UK 2025',
    description: 'Complete guide to interim executive leadership.',
    url: 'https://fractional.quest/interim-executive',
  },
}

const faqItems = [
  {
    question: 'What is an interim executive?',
    answer: 'An interim executive is an experienced senior leader who takes on a temporary full-time role within an organisation, typically for 3-12 months. They provide immediate leadership during transitions, cover succession gaps, lead transformation projects, or manage crisis situations.',
  },
  {
    question: 'How much do interim executives earn?',
    answer: 'Interim executives in the UK typically earn £800-£2,000 per day, depending on role seniority and sector. CEO-level interims command £1,500-£2,500/day, while other C-suite roles range from £800-£1,600/day. Annual equivalent earnings of £180,000-£450,000+ are common.',
  },
  {
    question: 'What is the difference between interim and fractional?',
    answer: 'Interim executives work full-time (5 days/week) for one organisation temporarily (3-12 months). Fractional executives work part-time (1-3 days/week) across multiple organisations on an ongoing basis. Interim is about temporary full coverage; fractional is about ongoing part-time leadership.',
  },
  {
    question: 'When do companies hire interim executives?',
    answer: 'Companies hire interim executives during: CEO or C-suite departures, major transformations, turnaround situations, M&A integration, crisis management, rapid growth requiring temporary specialist leadership, or while recruiting permanent executives.',
  },
  {
    question: 'How do I become an interim executive?',
    answer: 'To become an interim executive, you typically need 20+ years of experience with significant senior leadership roles, a strong track record of delivering results, specific expertise (turnaround, growth, transformation), and the ability to make immediate impact without extensive onboarding.',
  },
  {
    question: 'How long do interim assignments last?',
    answer: 'Most interim executive assignments last 6-12 months. Shorter engagements (3-6 months) are common for gap coverage, while complex transformations may extend to 12-18 months. The timeline depends on the specific mandate.',
  },
]

export default function InterimExecutivePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Interim Executive: The Complete Guide to Temporary Executive Leadership',
    description: 'A comprehensive guide to interim executives - what they are, how they work, typical costs, and when to hire one.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Complete Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Interim<br />Executive
            </h1>
            <p className="text-2xl md:text-3xl text-orange-100 leading-relaxed font-light">
              Temporary senior leadership for organisations navigating change. Immediate impact when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-orange-50 border-b-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-orange-200">
            <div className="text-sm font-bold uppercase tracking-wider text-orange-600 mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              What is an Interim Executive?
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              An <strong className="font-semibold text-gray-900">interim executive</strong> is a senior leader who takes on a temporary full-time role within an organisation, typically for 3-12 months.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlike permanent executives or consultants, interim executives are fully embedded leaders who own outcomes and drive results during critical periods. According to the <a href="https://www.fim.org.uk/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Institute of Interim Management</a>, the UK interim market has grown 25% year-on-year as organisations recognise the value of experienced, flexible leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Executive leading strategic meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Interim executives provide immediate leadership during critical periods</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">The Interim Executive Model</h2>

            <p className="text-lg leading-relaxed">
              Interim management has matured significantly in the UK over the past two decades. What was once seen as emergency cover has evolved into a strategic tool for navigating change. The <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">Institute of Directors</a> reports that over 30% of UK companies have used interim executives in the past five years.
            </p>

            <p className="text-lg leading-relaxed">
              Interim executives differ from permanent hires in crucial ways: they're hired for outcomes rather than tenure, bring external perspective without internal politics, and can make difficult decisions without career concerns at the company.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Key Characteristics of Interim Executives
              </p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><strong>Full-time commitment:</strong> 4-5 days per week to one client</li>
                <li><strong>Defined mandate:</strong> Specific objectives and success criteria</li>
                <li><strong>Speed to impact:</strong> Expected to deliver within weeks, not months</li>
                <li><strong>Objectivity:</strong> External perspective, no internal baggage</li>
                <li><strong>Experience:</strong> 20+ years with proven senior leadership</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Types of Interim Executive Roles</h2>

            <p className="text-lg">
              Virtually every C-suite and senior leadership role can be filled on an interim basis:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <Link href="/interim-ceo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-orange-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">Interim CEO</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Chief executive leadership during transitions, turnarounds, or succession gaps.
                </p>
                <p className="text-sm text-orange-600">Rates: £1,500-£2,500/day</p>
              </Link>

              <Link href="/interim-cfo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-orange-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">Interim CFO</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Financial leadership for fundraising, restructuring, or transformation.
                </p>
                <p className="text-sm text-orange-600">Rates: £1,000-£1,800/day</p>
              </Link>

              <Link href="/interim-coo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-orange-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">Interim COO</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Operational leadership for scaling, integration, or performance improvement.
                </p>
                <p className="text-sm text-orange-600">Rates: £1,000-£1,600/day</p>
              </Link>

              <Link href="/interim-cmo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-orange-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">Interim CMO</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Marketing leadership for repositioning, launches, or team building.
                </p>
                <p className="text-sm text-orange-600">Rates: £900-£1,500/day</p>
              </Link>

              <Link href="/interim-cto" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-orange-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">Interim CTO</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Technology leadership for transformation, due diligence, or crisis.
                </p>
                <p className="text-sm text-orange-600">Rates: £1,000-£1,800/day</p>
              </Link>

              <Link href="/interim-hr-director" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-orange-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">Interim HR Director</h3>
                <p className="text-gray-600 text-sm mb-2">
                  People leadership for restructuring, culture change, or complex ER.
                </p>
                <p className="text-sm text-orange-600">Rates: £800-£1,400/day</p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire an Interim Executive</h2>

            <p className="text-lg">
              Companies typically engage interim executives in these scenarios:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-orange-300 transition-colors">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Succession Gap</h4>
                  <p className="text-sm text-gray-600 m-0">Executive departs unexpectedly. Interim provides immediate coverage while recruiting permanent replacement.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-orange-300 transition-colors">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Turnaround</h4>
                  <p className="text-sm text-gray-600 m-0">Company in distress needs experienced leadership to stabilise operations and implement recovery.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-orange-300 transition-colors">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Transformation</h4>
                  <p className="text-sm text-gray-600 m-0">Major change initiative requires specialist expertise not available internally.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-orange-300 transition-colors">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">M&A Integration</h4>
                  <p className="text-sm text-gray-600 m-0">Post-acquisition integration requires experienced leadership to merge organisations.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-orange-300 transition-colors">
                <div className="w-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Crisis Management</h4>
                  <p className="text-sm text-gray-600 m-0">Regulatory investigation, reputational crisis, or operational failure requires specialist response.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim Executive Compensation</h2>

            <p className="text-lg">
              Interim executives command premium rates, reflecting their experience and temporary nature:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-orange-500">Role</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-orange-500">Daily Rate</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-orange-500">6-Month Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Interim CEO</td>
                    <td className="p-4 text-gray-700">£1,500-£2,500</td>
                    <td className="p-4 text-gray-600">£180k-£300k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Interim CFO</td>
                    <td className="p-4 text-gray-700">£1,000-£1,800</td>
                    <td className="p-4 text-gray-600">£120k-£220k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Interim COO</td>
                    <td className="p-4 text-gray-700">£1,000-£1,600</td>
                    <td className="p-4 text-gray-600">£120k-£190k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Interim CTO/CMO</td>
                    <td className="p-4 text-gray-700">£900-£1,600</td>
                    <td className="p-4 text-gray-600">£110k-£190k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Interim HR Director</td>
                    <td className="p-4 text-gray-700">£800-£1,400</td>
                    <td className="p-4 text-gray-600">£96k-£170k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim vs Fractional Executives</h2>

            <p className="text-lg">
              Both models provide flexible leadership, but serve different needs:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">Interim Executive</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Time:</strong> Full-time (4-5 days/week)</li>
                  <li><strong>Duration:</strong> 3-12 months</li>
                  <li><strong>Clients:</strong> One at a time</li>
                  <li><strong>Purpose:</strong> Gap, crisis, transformation</li>
                  <li><strong>Rates:</strong> £800-£2,500/day</li>
                </ul>
              </div>
              <Link href="/fractional-executive" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors group">
                <h4 className="font-bold text-gray-800 mb-3 group-hover:text-orange-600">Fractional Executive</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Time:</strong> Part-time (1-3 days/week)</li>
                  <li><strong>Duration:</strong> Ongoing (6 months+)</li>
                  <li><strong>Clients:</strong> 2-4 simultaneously</li>
                  <li><strong>Purpose:</strong> Ongoing leadership at reduced cost</li>
                  <li><strong>Rates:</strong> £700-£1,600/day</li>
                </ul>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-orange-400">Interim executive in one sentence:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                Experienced senior leaders who provide temporary full-time leadership (3-12 months) during transitions, transformations, or crises—bringing immediate impact without long-term commitment.
              </p>
            </div>

            <p className="text-lg">
              The interim executive market continues to grow as organisations recognise the value of experienced, flexible leadership during critical periods. For the right situations, an interim executive can deliver transformational impact.
            </p>
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
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Interim Executive Roles
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Browse live interim opportunities or explore fractional alternatives for ongoing leadership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-jobs" className="px-10 py-5 bg-white text-orange-600 font-bold uppercase tracking-wider hover:bg-orange-50 transition-colors">
              Browse Executive Jobs
            </Link>
            <Link href="/fractional-executive" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-600 transition-colors">
              Fractional Alternative
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Guides</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/interim-executive-board" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Interim Executive Board
              </Link>
              <Link href="/interim-executive-director" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Interim Executive Director
              </Link>
              <Link href="/interim-ceo" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Interim CEO
              </Link>
              <Link href="/fractional-executive" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Fractional Executive
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
