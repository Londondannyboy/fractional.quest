import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'
import { createDbQuery } from '@/lib/db'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time Marketing Executive Jobs UK',
  description: 'Part-time marketing executive roles UK. CMO, marketing director positions.',
  keywords: 'part-time marketing executive, part-time cmo, part-time marketing director, fractional marketing, marketing executive jobs',
  alternates: {
    canonical: 'https://fractional.quest/part-time-marketing-executive',
  },
  openGraph: {
    title: 'Part-Time Marketing Executive Jobs UK',
    description: 'Senior marketing leadership on a part-time basis.',
    url: 'https://fractional.quest/part-time-marketing-executive',
  },
}

async function getPartTimeMarketingJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (title ILIKE '%part-time%marketing%' OR title ILIKE '%part time%marketing%' OR title ILIKE '%fractional%marketing%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 10
    `
    return jobs
  } catch (error) {
    return []
  }
}

const faqItems = [
  {
    question: 'What is a part-time marketing executive?',
    answer: 'A part-time marketing executive is a senior marketing leader (CMO, marketing director, VP marketing) who works reduced hours—typically 1-3 days per week. Also known as "fractional" marketing executives, they provide strategic marketing leadership without full-time commitment.',
  },
  {
    question: 'How much do part-time marketing executives earn?',
    answer: 'Part-time marketing executives in the UK earn £700-£1,400 per day, depending on seniority. At 2 days per week, this translates to £70,000-£140,000 annually. Many work with 2-4 clients, earning £150,000-£280,000+ total.',
  },
  {
    question: 'Why do companies hire part-time marketing executives?',
    answer: 'Companies hire part-time marketing executives when they need senior marketing expertise but cannot justify or afford a full-time CMO. Common reasons include: scaling marketing post-Series A, building a marketing function, needing strategic direction while the team executes.',
  },
  {
    question: 'Is part-time marketing executive the same as fractional CMO?',
    answer: 'Yes, "part-time marketing executive" and "fractional CMO" (or fractional marketing director) essentially mean the same thing—senior marketing leadership on a reduced-hours basis. "Fractional" is the preferred industry term as it emphasizes the senior executive nature of the role.',
  },
  {
    question: 'What companies need part-time marketing executives?',
    answer: 'The highest demand comes from startups (post-seed to Series B), scale-ups (£2M-£20M revenue), and mid-market companies. B2B SaaS, FinTech, DTC, and professional services are particularly active in hiring part-time marketing leadership.',
  },
  {
    question: 'Can I work part-time as a marketing executive?',
    answer: 'Yes, if you have 12-15+ years of marketing experience with senior leadership roles. You can build a portfolio of 2-4 clients, each at 1-2 days per week. Many marketing executives transition to part-time/fractional work for flexibility and variety.',
  },
]

export default async function PartTimeMarketingExecutivePage() {
  const partTimeJobs = await getPartTimeMarketingJobs()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Part-Time Marketing Executive: Senior Marketing Leadership Without Full-Time Commitment',
    description: 'Complete guide to part-time marketing executive roles in the UK - CMO, marketing director, and VP positions on a reduced-hours basis.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-500 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Marketing Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Part-Time<br />Marketing Executive
            </h1>
            <p className="text-2xl md:text-3xl text-rose-100 leading-relaxed font-light">
              Senior marketing leadership on a flexible, reduced-hours basis. CMO expertise without full-time cost.
            </p>
          </div>
        </div>
      </section>

      {/* Live Part-Time Marketing Jobs */}
      {(partTimeJobs as any[]).length > 0 && (
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <HotJobsLines
              jobs={(partTimeJobs as any[]).map(job => ({
                id: job.id, slug: job.slug, title: job.title, company_name: job.company_name,
                location: job.location, compensation: job.compensation, role_category: job.role_category,
                posted_date: job.posted_date, is_remote: job.is_remote,
              }))}
              title="Live Part-Time Marketing Jobs"
              maxJobs={10}
              viewAllHref="/fractional-cmo-jobs-uk"
              viewAllText="View all jobs"
            />
          </div>
        </section>
      )}

      {/* Quick Answer */}
      <section className="py-16 bg-rose-50 border-b-4 border-rose-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-rose-200">
            <div className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              What is a Part-Time Marketing Executive?
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">part-time marketing executive</strong> is a senior marketing leader who works on a reduced-hours basis—typically 1-3 days per week—providing strategic leadership without full-time commitment.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Also known as <Link href="/fractional-cmo" className="text-rose-600 hover:text-rose-700 underline">fractional CMOs</Link> or fractional marketing directors, these executives bring 12-20+ years of experience to help companies build and scale their marketing function at 50-70% less cost than a full-time hire.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Marketing executive working with team"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Part-time marketing executives provide strategic leadership on a flexible schedule</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">Understanding Part-Time Marketing Executive Roles</h2>

            <p className="text-lg leading-relaxed">
              The concept of part-time executive work has transformed how companies access senior talent. In marketing, this means getting CMO-level expertise without the £150,000-£250,000+ annual commitment of a full-time hire.
            </p>

            <p className="text-lg leading-relaxed">
              According to the <a href="https://www.cim.co.uk/" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700 underline">Chartered Institute of Marketing</a>, the demand for flexible marketing leadership has grown significantly as companies recognize that strategic marketing doesn't always require 40+ hours per week.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Part-Time vs Full-Time: The Numbers
              </p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><strong>Part-time (2 days/week):</strong> £70k-£140k annually</li>
                <li><strong>Full-time CMO:</strong> £150k-£250k+ salary + bonus + equity</li>
                <li><strong>Savings:</strong> 50-70% cost reduction</li>
                <li><strong>Experience:</strong> Often more senior than affordable full-time</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Types of Part-Time Marketing Executive Roles</h2>

            <div className="grid gap-6 my-10">
              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-rose-400 transition-colors group flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-rose-600">Part-Time CMO</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Chief Marketing Officer level - strategy, team, board-level reporting
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-rose-600 font-bold">£900-£1,400/day</div>
                </div>
              </Link>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Part-Time VP Marketing</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Demand generation, marketing operations, team leadership
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-rose-600 font-bold">£800-£1,200/day</div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Part-Time Marketing Director</h3>
                  <p className="text-gray-600 text-sm mb-0">
                    Strategic planning, channel oversight, execution management
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-rose-600 font-bold">£700-£1,100/day</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When Companies Need Part-Time Marketing Executives</h2>

            <p className="text-lg">
              The part-time marketing executive model works particularly well in these scenarios:
            </p>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-rose-300 transition-colors">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Scaling Startups</h4>
                  <p className="text-sm text-gray-600 m-0">Post-Series A companies that need marketing leadership but can't justify £200k+ CMO hire yet.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-rose-300 transition-colors">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">SMEs Without Marketing Leader</h4>
                  <p className="text-sm text-gray-600 m-0">Established businesses (£2M-£20M) with marketing teams but no senior leadership.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-rose-300 transition-colors">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Specific Expertise Needed</h4>
                  <p className="text-sm text-gray-600 m-0">Companies needing specialist skills (PLG, ABM, brand) for a phase rather than permanently.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white hover:border-rose-300 transition-colors">
                <div className="w-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">CEO Stepping Back</h4>
                  <p className="text-sm text-gray-600 m-0">Founder-led marketing that needs professionalizing as the CEO focuses elsewhere.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">What Part-Time Marketing Executives Do</h2>

            <p className="text-lg">
              A part-time marketing executive focuses on high-value strategic activities:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Strategic</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Marketing strategy development</li>
                  <li>Positioning and messaging</li>
                  <li>Channel prioritization</li>
                  <li>Budget planning and ROI</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Leadership</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Team management and development</li>
                  <li>Agency/vendor oversight</li>
                  <li>Hiring and structure</li>
                  <li>Process and systems</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Board & Stakeholder</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Board-level reporting</li>
                  <li>Investor communication</li>
                  <li>Cross-functional alignment</li>
                  <li>Executive team participation</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Execution Oversight</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Campaign strategy (not execution)</li>
                  <li>Performance analysis</li>
                  <li>Growth initiative leadership</li>
                  <li>Key partnership decisions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Finding Part-Time Marketing Executive Roles</h2>

            <p className="text-lg">
              If you're a marketing leader looking for part-time work:
            </p>

            <ul className="text-lg space-y-3">
              <li><strong>Specialist platforms:</strong> <Link href="/fractional-marketing-jobs" className="text-rose-600 hover:underline">Fractional.Quest marketing jobs</Link>, Chief Outsiders</li>
              <li><strong>LinkedIn:</strong> Search "fractional CMO" or "part-time marketing director"</li>
              <li><strong>VC networks:</strong> Connect with investors who place fractional execs in portfolio</li>
              <li><strong>Referrals:</strong> Former colleagues, clients, and industry contacts</li>
              <li><strong>Personal brand:</strong> Content marketing demonstrating your expertise</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-rose-400">Part-time marketing executive in summary:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                Senior marketing leadership (CMO, VP, Director) on a 1-3 day per week basis, providing strategic direction at 50-70% less cost than full-time. Also called "fractional" marketing executives.
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
      <section className="py-20 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Part-Time Marketing Jobs
          </h2>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">
            Browse fractional and part-time marketing executive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-marketing-jobs" className="px-10 py-5 bg-white text-rose-600 font-bold uppercase tracking-wider hover:bg-rose-50 transition-colors">
              Marketing Jobs
            </Link>
            <Link href="/fractional-cmo" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-rose-600 transition-colors">
              CMO Guide
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
              <Link href="/fractional-cmo" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
                Fractional CMO Guide
              </Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
                CMO Jobs UK
              </Link>
              <Link href="/fractional-marketing-jobs" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
                Marketing Jobs
              </Link>
              <Link href="/part-time-cmo" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
                Part-Time CMO
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
