import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Executive Director UK 2025',
  description: 'Interim executive director roles UK. Temporary leadership, rates, when to hire.',
  keywords: 'interim executive director, interim director, temporary executive director, executive director jobs, interim leadership, interim management',
  alternates: {
    canonical: 'https://fractional.quest/interim-executive-director',
  },
  openGraph: {
    title: 'Interim Executive Director UK 2025',
    description: 'Temporary executive leadership for organisations in transition.',
    url: 'https://fractional.quest/interim-executive-director',
  },
}

const faqItems = [
  {
    question: 'What is an interim executive director?',
    answer: 'An interim executive director is a temporary senior leader who steps into an executive director role during transitions, typically for 3-12 months. They provide immediate leadership coverage during succession gaps, organisational change, or when permanent recruitment is underway.',
  },
  {
    question: 'How much do interim executive directors earn?',
    answer: 'Interim executive directors in the UK typically earn £800-£1,500 per day, depending on sector and organisation size. Charity and non-profit interim directors often earn £600-£1,000/day, while commercial sector roles command £1,000-£1,500/day.',
  },
  {
    question: 'How long do interim executive director appointments last?',
    answer: 'Most interim executive director appointments last 6-12 months, though shorter assignments (3-6 months) are common for specific projects or urgent gap coverage. Some extend beyond 12 months for complex transformations.',
  },
  {
    question: 'What\'s the difference between interim and fractional executive director?',
    answer: 'An interim executive director works full-time (5 days/week) for one organisation temporarily. A fractional executive director works part-time (1-3 days/week) across multiple organisations on an ongoing basis. Interim is temporary full-time; fractional is ongoing part-time.',
  },
  {
    question: 'When do organisations hire interim executive directors?',
    answer: 'Organisations hire interim executive directors when: the current executive director leaves unexpectedly; during major transitions or restructuring; while recruiting a permanent replacement; for specific transformation projects; or during crisis management.',
  },
  {
    question: 'What experience is needed for interim executive director roles?',
    answer: 'Interim executive directors typically have 15-20+ years of experience with significant time in executive director or equivalent senior leadership roles. Sector expertise is often important, particularly in non-profit, healthcare, or highly regulated industries.',
  },
]

export default function InterimExecutiveDirectorPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Interim Executive Director: Complete Guide to Temporary Executive Leadership',
    description: 'A comprehensive guide to interim executive director roles - temporary executive leadership for organisations in transition.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Complete Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Interim<br />Executive Director
            </h1>
            <p className="text-2xl md:text-3xl text-emerald-100 leading-relaxed font-light">
              Temporary executive leadership for organisations navigating change, transition, and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-emerald-50 border-b-4 border-emerald-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-emerald-200">
            <div className="text-sm font-bold uppercase tracking-wider text-emerald-600 mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              What is an Interim Executive Director?
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              An <strong className="font-semibold text-gray-900">interim executive director</strong> is a temporary senior leader who provides full-time executive leadership during periods of transition, typically serving 3-12 months.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlike permanent executive directors, interim executives are brought in for specific mandates: covering succession gaps, leading transformation, managing crisis, or stabilising organisations during change. The <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Institute of Directors</a> reports growing demand for interim executive talent across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Executive director leading team meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Interim executive directors provide immediate leadership during transitions</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">Understanding the Interim Executive Director Role</h2>

            <p className="text-lg leading-relaxed">
              The executive director role varies significantly across sectors. In the commercial sector, it often refers to a board-level director with executive responsibilities. In the charity and non-profit sector, the executive director (or chief executive) is typically the most senior staff member, reporting to the board of trustees.
            </p>

            <p className="text-lg leading-relaxed">
              According to the <a href="https://www.fim.org.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">Institute of Interim Management</a>, interim executive director placements have grown 40% since 2020, driven by increased leadership transitions, organisational restructuring, and the need for experienced change leaders.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Key Characteristics of Interim Executive Directors
              </p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><strong>Full-time commitment:</strong> 4-5 days per week to one organisation</li>
                <li><strong>Defined mandate:</strong> Clear objectives and timeline</li>
                <li><strong>Speed to impact:</strong> Expected to deliver value within weeks</li>
                <li><strong>Objectivity:</strong> External perspective without internal politics</li>
                <li><strong>Experience:</strong> 15-20+ years with proven senior leadership track record</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When Organisations Hire Interim Executive Directors</h2>

            <p className="text-lg">
              Organisations typically engage interim executive directors in these scenarios:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-emerald-300 transition-colors">
                <div className="w-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Succession Gap</h4>
                  <p className="text-sm text-gray-600 m-0">Executive director departs and permanent replacement recruitment is underway. Interim provides immediate coverage and stability.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-emerald-300 transition-colors">
                <div className="w-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Organisational Transformation</h4>
                  <p className="text-sm text-gray-600 m-0">Major change initiative—restructuring, merger, digital transformation—requires specialist change leadership.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-emerald-300 transition-colors">
                <div className="w-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Turnaround/Crisis</h4>
                  <p className="text-sm text-gray-600 m-0">Organisation in distress needs experienced leadership to stabilise operations and implement recovery plan.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-emerald-300 transition-colors">
                <div className="w-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Project Leadership</h4>
                  <p className="text-sm text-gray-600 m-0">Specific initiative (merger integration, new programme launch) requires dedicated executive leadership.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-emerald-300 transition-colors">
                <div className="w-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Capability Gap</h4>
                  <p className="text-sm text-gray-600 m-0">Current leadership lacks specific expertise needed for a phase (fundraising, international expansion, regulatory change).</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim Executive Director by Sector</h2>

            <p className="text-lg">
              The role varies significantly across sectors:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Charity & Non-Profit</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Often the most senior staff role. Focus on strategy, stakeholder relations, fundraising, and governance.
                </p>
                <p className="text-sm text-emerald-600">Rates: £600-£1,000/day</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Executive-level leadership in NHS trusts, private healthcare, or care organisations. Often regulatory-focused.
                </p>
                <p className="text-sm text-emerald-600">Rates: £800-£1,400/day</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Commercial</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Board-level director with executive responsibilities. May focus on specific function (operations, sales, etc.).
                </p>
                <p className="text-sm text-emerald-600">Rates: £900-£1,500/day</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Public Sector</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Senior executive roles in government agencies, local authorities, or public bodies. Often via framework contracts.
                </p>
                <p className="text-sm text-emerald-600">Rates: £700-£1,200/day</p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim Executive Director Compensation</h2>

            <p className="text-lg">
              Interim executive director rates vary by sector, organisation size, and mandate complexity:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-emerald-500">Sector</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-emerald-500">Daily Rate</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-emerald-500">6-Month Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Charity/Non-Profit</td>
                    <td className="p-4 text-gray-700">£600-£1,000</td>
                    <td className="p-4 text-gray-600">£72k-£120k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Public Sector</td>
                    <td className="p-4 text-gray-700">£700-£1,200</td>
                    <td className="p-4 text-gray-600">£84k-£144k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Healthcare</td>
                    <td className="p-4 text-gray-700">£800-£1,400</td>
                    <td className="p-4 text-gray-600">£96k-£168k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Commercial</td>
                    <td className="p-4 text-gray-700">£900-£1,500</td>
                    <td className="p-4 text-gray-600">£108k-£180k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim vs Fractional Executive Director</h2>

            <p className="text-lg">
              Both models provide flexible executive leadership, but serve different needs:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-emerald-800 mb-3">Interim Executive Director</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Time:</strong> Full-time (4-5 days/week)</li>
                  <li><strong>Duration:</strong> 3-12 months</li>
                  <li><strong>Clients:</strong> One at a time</li>
                  <li><strong>Purpose:</strong> Gap coverage, crisis, transformation</li>
                  <li><strong>Cost:</strong> £600-£1,500/day</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Fractional Executive Director</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Time:</strong> Part-time (1-3 days/week)</li>
                  <li><strong>Duration:</strong> Ongoing (6 months+)</li>
                  <li><strong>Clients:</strong> 2-4 simultaneously</li>
                  <li><strong>Purpose:</strong> Ongoing leadership at reduced cost</li>
                  <li><strong>Cost:</strong> £500-£1,200/day</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Interim Executive Directors</h2>

            <p className="text-lg">
              Organisations typically source interim executive directors through:
            </p>

            <ul className="text-lg space-y-3">
              <li><strong>Specialist interim firms:</strong> Companies like Odgers Interim, Boyden, and sector specialists</li>
              <li><strong>Executive search:</strong> Traditional headhunters with interim divisions</li>
              <li><strong>Networks:</strong> Board chairs, non-executive directors, and sector leaders</li>
              <li><strong>Platforms:</strong> Online marketplaces like <Link href="/fractional-jobs" className="text-emerald-600 hover:text-emerald-700 underline">Fractional.Quest</Link></li>
              <li><strong>Sector bodies:</strong> <a href="https://www.acevo.org.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline">ACEVO</a> for charity sector, NHS frameworks for healthcare</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-emerald-400">Interim executive director in one sentence:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                Temporary full-time executive leadership for organisations in transition—providing experienced leaders for 3-12 months during succession gaps, transformation, or crisis.
              </p>
            </div>

            <p className="text-lg">
              The interim executive director model offers organisations a way to access proven leadership during critical periods without the long-term commitment of a permanent hire.
            </p>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ skipSchema={true} items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Executive Director Opportunities
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Browse live interim and fractional executive director roles across all sectors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-jobs" className="px-10 py-5 bg-white text-emerald-600 font-bold uppercase tracking-wider hover:bg-emerald-50 transition-colors">
              Browse Executive Jobs
            </Link>
            <Link href="/fractional-executive" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-emerald-600 transition-colors">
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
              <Link href="/interim-executive-board" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                Interim Executive Board
              </Link>
              <Link href="/interim-ceo" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                Interim CEO
              </Link>
              <Link href="/fractional-executive" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                Fractional Executive
              </Link>
              <Link href="/fractional-ceo" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                Fractional CEO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
