import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Board Roles UK 2025',
  description: 'Interim executive board roles UK. Temporary board positions, rates, when to hire.',
  keywords: 'interim executive board, interim board member, interim executive director, temporary board executive, interim non-executive director, interim chairman, board level interim',
  alternates: {
    canonical: 'https://fractional.quest/interim-executive-board',
  },
  openGraph: {
    title: 'Interim Board Roles UK 2025',
    description: 'Interim executive board roles. Temporary board-level leadership.',
    url: 'https://fractional.quest/interim-executive-board',
  },
}

const faqItems = [
  {
    question: 'What is an interim executive board role?',
    answer: 'An interim executive board role is a temporary board-level position where an experienced executive joins a company\'s leadership during a transition period. Unlike permanent board members, interim executives typically serve 3-12 months to address specific challenges like turnaround, transformation, or succession gaps.',
  },
  {
    question: 'How much do interim board executives earn?',
    answer: 'Interim board executives in the UK typically earn £1,000-£2,500+ per day, depending on seniority and complexity. CEO/Chairman-level interims command £1,500-£2,500/day, while other C-suite board roles range from £1,000-£1,800/day. Annual earnings of £200,000-£500,000+ are common.',
  },
  {
    question: 'When do companies use interim board executives?',
    answer: 'Companies use interim board executives during CEO/C-suite departures, turnaround situations, major transformations, M&A integration, crisis management, regulatory investigations, or while recruiting permanent executives. The interim provides immediate leadership continuity.',
  },
  {
    question: 'What\'s the difference between interim and fractional board roles?',
    answer: 'Interim board executives work full-time (5 days/week) for one company during a defined period (3-12 months). Fractional executives work part-time (1-3 days/week) across multiple companies on an ongoing basis. Interim is about temporary full-time coverage; fractional is about ongoing part-time leadership.',
  },
  {
    question: 'What experience is needed for interim board roles?',
    answer: 'Interim board executives typically have 20+ years of experience with significant time at board level. Prior CEO, CFO, or other C-suite experience is essential, along with a track record in the specific challenge the company faces (turnaround, growth, transformation, etc.).',
  },
  {
    question: 'How long do interim board appointments last?',
    answer: 'Most interim board appointments last 6-12 months, though some crisis situations may be shorter (3-6 months) and complex transformations longer (12-18 months). The timeline depends on the specific mandate—succession, turnaround, or strategic initiative.',
  },
]

export default function InterimExecutiveBoardPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Interim Executive Board: Complete Guide to Temporary Board-Level Leadership',
    description: 'A comprehensive guide to interim executive board roles - temporary board-level leadership for companies in transition.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Complete Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Interim Executive<br />Board
            </h1>
            <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-light">
              Temporary board-level leadership for companies navigating change, transition, and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-slate-50 border-b-4 border-slate-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-slate-200">
            <div className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              What is an Interim Executive Board Role?
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              An <strong className="font-semibold text-gray-900">interim executive board</strong> role is a temporary board-level leadership position where an experienced executive joins a company during a period of transition—typically 3-12 months.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Unlike permanent board members, interim executives are brought in for specific mandates: turnaround, succession coverage, transformation, crisis management, or <a href="https://www.icaew.com/technical/corporate-governance" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-700 underline">governance improvement</a>. They work full-time during their tenure and bring immediate impact without the long-term commitment of a permanent hire.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Executive boardroom meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Interim executives provide board-level leadership during critical transitions</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">Understanding Interim Board-Level Roles</h2>

            <p className="text-lg leading-relaxed">
              The interim executive market has matured significantly in the UK. What was once seen as emergency coverage is now recognized as a strategic tool for navigating transitions. According to the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-700 underline">Institute of Directors</a>, over 30% of UK companies have used interim executives at board level in the past five years.
            </p>

            <p className="text-lg leading-relaxed">
              Interim board executives differ from permanent hires in crucial ways: they're hired for outcomes rather than tenure, bring external perspective without internal politics, and can make difficult decisions without career concerns at the company.
            </p>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Key Characteristics of Interim Board Executives
              </p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><strong>Full-time commitment:</strong> 4-5 days per week to one client</li>
                <li><strong>Defined mandate:</strong> Specific objectives and timeline</li>
                <li><strong>Speed to value:</strong> Expected to deliver impact within weeks, not months</li>
                <li><strong>Objectivity:</strong> External perspective without internal baggage</li>
                <li><strong>Experience:</strong> 20+ years with proven board-level track record</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Types of Interim Executive Board Roles</h2>

            <p className="text-lg">
              Interim executives can fill virtually any board-level position. The most common roles include:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Interim CEO</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Temporary chief executive providing leadership during succession gaps, turnaround, or transformation.
                </p>
                <p className="text-sm text-slate-600">Rates: £1,500-£2,500/day</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Interim Chairman</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Temporary board leadership for governance, shareholder relations, and executive oversight.
                </p>
                <p className="text-sm text-slate-600">Rates: £1,500-£2,500/day</p>
              </div>

              <Link href="/interim-cfo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-slate-600">Interim CFO</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Temporary financial leadership for fundraising, restructuring, IPO prep, or succession.
                </p>
                <p className="text-sm text-slate-600">Rates: £1,000-£1,800/day</p>
              </Link>

              <Link href="/interim-coo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-slate-600">Interim COO</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Temporary operational leadership for transformation, integration, or performance improvement.
                </p>
                <p className="text-sm text-slate-600">Rates: £1,000-£1,600/day</p>
              </Link>

              <Link href="/interim-cmo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-slate-600">Interim CMO</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Temporary marketing leadership for repositioning, launch, or team building.
                </p>
                <p className="text-sm text-slate-600">Rates: £900-£1,500/day</p>
              </Link>

              <Link href="/interim-cto" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-slate-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-slate-600">Interim CTO</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Temporary technology leadership for transformation, due diligence, or crisis response.
                </p>
                <p className="text-sm text-slate-600">Rates: £1,000-£1,800/day</p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When Companies Use Interim Board Executives</h2>

            <p className="text-lg">
              According to research from <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-700 underline">BVCA</a> and the <a href="https://www.fim.org.uk/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-700 underline">Institute of Interim Management</a>, companies typically engage interim board executives in these scenarios:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-slate-300 transition-colors">
                <div className="w-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Succession Gap</h4>
                  <p className="text-sm text-gray-600 m-0">CEO, CFO, or other C-suite executive departs unexpectedly. Interim provides immediate coverage while recruiting permanent replacement.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-slate-300 transition-colors">
                <div className="w-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Turnaround</h4>
                  <p className="text-sm text-gray-600 m-0">Company in distress needs experienced leadership to stabilize operations, manage stakeholders, and implement recovery plan.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-slate-300 transition-colors">
                <div className="w-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Transformation</h4>
                  <p className="text-sm text-gray-600 m-0">Major change initiative (digital transformation, restructuring, IPO prep) requires specific expertise not available internally.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-slate-300 transition-colors">
                <div className="w-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">M&A Integration</h4>
                  <p className="text-sm text-gray-600 m-0">Post-acquisition integration requires experienced leadership to merge organizations, cultures, and systems.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-slate-300 transition-colors">
                <div className="w-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Crisis Management</h4>
                  <p className="text-sm text-gray-600 m-0">Regulatory investigation, reputational crisis, or operational failure requires specialist crisis leadership.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-slate-300 transition-colors">
                <div className="w-1.5 bg-slate-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Governance Improvement</h4>
                  <p className="text-sm text-gray-600 m-0">Board needs strengthening before a transaction, IPO, or to satisfy stakeholder/regulatory requirements.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim Board Executive Compensation</h2>

            <p className="text-lg">
              Interim board executives command premium rates, reflecting their experience, impact, and temporary nature:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-slate-500">Role</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-slate-500">Daily Rate</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-slate-500">6-Month Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Interim CEO/Chairman</td>
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
                    <td className="p-4 font-semibold text-gray-900">Interim CTO</td>
                    <td className="p-4 text-gray-700">£1,000-£1,800</td>
                    <td className="p-4 text-gray-600">£120k-£220k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Interim CMO</td>
                    <td className="p-4 text-gray-700">£900-£1,500</td>
                    <td className="p-4 text-gray-600">£110k-£180k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg">
              Rates vary based on company size, sector, complexity of mandate, and location. FTSE 100 turnaround roles command the highest rates; SME succession coverage is at the lower end. Most interims work through limited companies and charge day rates without equity or benefits.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Interim vs Fractional Board Roles</h2>

            <p className="text-lg">
              Both interim and <Link href="/fractional-executive" className="text-slate-600 hover:text-slate-700 underline">fractional executives</Link> provide flexible leadership, but they serve different purposes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-3">Interim Executive Board</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Time:</strong> Full-time (4-5 days/week)</li>
                  <li><strong>Duration:</strong> 3-12 months</li>
                  <li><strong>Clients:</strong> One at a time</li>
                  <li><strong>Purpose:</strong> Gap coverage, crisis, transformation</li>
                  <li><strong>Rates:</strong> £1,000-£2,500/day</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Fractional Executive</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Time:</strong> Part-time (1-3 days/week)</li>
                  <li><strong>Duration:</strong> Ongoing (6 months+)</li>
                  <li><strong>Clients:</strong> 2-4 simultaneously</li>
                  <li><strong>Purpose:</strong> Ongoing leadership at reduced cost</li>
                  <li><strong>Rates:</strong> £700-£1,600/day</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-slate-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Which Model to Choose?
              </p>
              <p className="text-gray-700 mb-0">
                <strong>Interim:</strong> When you need full-time coverage for a defined period—succession gap, turnaround, crisis. <strong>Fractional:</strong> When you need ongoing senior expertise but don't require (or can't afford) full-time—scaling companies, SMEs building capabilities.
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Interim Board Executives</h2>

            <p className="text-lg">
              Companies typically source interim board executives through three channels:
            </p>

            <ul className="text-lg space-y-3">
              <li><strong>Specialist interim firms:</strong> <a href="https://www.odgersinterim.com/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-700 underline">Odgers Interim</a>, Boyden Interim, and similar firms specialize in board-level placements</li>
              <li><strong>Executive search:</strong> Traditional headhunters increasingly offer interim divisions</li>
              <li><strong>Networks:</strong> Board chairs, investors, and advisors often have established relationships with proven interims</li>
              <li><strong>Platforms:</strong> Marketplaces like <Link href="/fractional-jobs" className="text-slate-600 hover:text-slate-700 underline">Fractional.Quest</Link> connect companies with vetted interim talent</li>
            </ul>

            <p className="text-lg">
              Due diligence is critical: verify track record, check references thoroughly, and ensure the interim's experience matches your specific mandate. The best interims are selective—they take roles where they can genuinely deliver impact.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-slate-400">Interim executive board roles in one sentence:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                Temporary full-time board-level leadership for companies navigating transitions—providing experienced executives (CEO, CFO, COO, etc.) for 3-12 months during succession gaps, turnarounds, transformations, or crises.
              </p>
            </div>

            <p className="text-lg">
              The interim executive market continues to grow as companies recognize the value of flexible, expert leadership during critical periods. For the right situations, an interim board executive can be the difference between successful navigation of a challenge and prolonged disruption.
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
      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Interim Executive Roles
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Browse live interim opportunities or explore fractional alternatives for ongoing leadership needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-jobs" className="px-10 py-5 bg-white text-slate-700 font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors">
              Browse Executive Jobs
            </Link>
            <Link href="/fractional-executive" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-slate-700 transition-colors">
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
              <Link href="/interim-ceo" className="text-gray-600 hover:text-slate-600 font-medium transition-colors">
                Interim CEO
              </Link>
              <Link href="/interim-cfo" className="text-gray-600 hover:text-slate-600 font-medium transition-colors">
                Interim CFO
              </Link>
              <Link href="/interim-coo" className="text-gray-600 hover:text-slate-600 font-medium transition-colors">
                Interim COO
              </Link>
              <Link href="/fractional-executive" className="text-gray-600 hover:text-slate-600 font-medium transition-colors">
                Fractional Executive
              </Link>
              <Link href="/fractional-jobs" className="text-gray-600 hover:text-slate-600 font-medium transition-colors">
                All Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
