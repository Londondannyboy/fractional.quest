import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'CPO Jobs & Services UK | Chief Product Officer | Fractional Quest',
  description: 'Find CPO jobs UK - fractional CPO, part-time Chief Product Officer, and interim CPO roles. Browse CPO jobs, hire a fractional CPO, or explore CPO services. £800-£1,300/day.',
  keywords: 'cpo, cpo jobs, cpo jobs uk, chief product officer, fractional cpo, part time cpo, interim cpo, cpo services, hire cpo, cpo salary uk',
  alternates: {
    canonical: 'https://fractional.quest/cpo',
  },
  openGraph: {
    title: 'CPO Jobs & Services UK | Chief Product Officer',
    description: 'Find CPO jobs UK - fractional, part-time, and interim Chief Product Officer roles. Browse jobs or hire a CPO.',
    url: 'https://fractional.quest/cpo',
  },
}

async function getCPOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%CPO%' OR title ILIKE '%Chief Product%')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 24 }
  }
}

const CPO_FAQS = [
  {
    question: 'What does a CPO do?',
    answer: 'A Chief Product Officer (CPO) leads the product function, defining product vision and strategy, managing roadmaps, leading product teams, and ensuring product-market fit. They work with engineering, design, and commercial teams to build products that users love.',
  },
  {
    question: 'What is a Fractional CPO?',
    answer: 'A Fractional CPO is a part-time Chief Product Officer who works with your company 1-3 days per week. They provide senior product leadership, strategy, and team development without the cost of a full-time executive hire. Typical day rates are £800-£1,300.',
  },
  {
    question: 'How much does a CPO earn in the UK?',
    answer: 'Full-time CPO salaries in the UK range from £150,000-£250,000+ depending on company size and sector. Fractional CPOs charge £800-£1,300 per day, translating to £80,000-£140,000 annually for 2 days/week work.',
  },
  {
    question: 'What is the difference between CPO and VP Product?',
    answer: 'A CPO is typically the most senior product role, reporting to the CEO and sitting on the executive team. A VP Product usually reports to the CPO and manages product managers. In smaller companies, these roles may be combined.',
  },
]

export default async function CPOPage() {
  const stats = await getCPOStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Product Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              CPO Jobs &<br />
              <span className="text-purple-300">Services UK</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Your hub for <strong className="text-white">Chief Product Officer</strong> opportunities in the UK.
              Browse <Link href="/fractional-cpo-jobs-uk" className="text-purple-300 hover:text-white underline">fractional CPO jobs</Link>,
              hire a CPO, or explore CPO services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cpo-jobs-uk" className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Browse CPO Jobs
              </Link>
              <Link href="/fractional-cpo-services" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Hire a CPO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - CPO Cluster */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fractional-cpo-jobs-uk" className="group bg-white p-8 border-2 border-purple-200 hover:border-purple-500 transition-colors rounded-xl">
              <div className="text-3xl mb-4">💼</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">Fractional CPO Jobs UK</h2>
              <p className="text-gray-600 mb-4">Browse {stats.total}+ part-time Chief Product Officer roles paying £800-£1,300/day.</p>
              <span className="text-purple-600 font-semibold">View Jobs →</span>
            </Link>
            <Link href="/fractional-cpo-services" className="group bg-white p-8 border border-gray-200 hover:border-purple-500 transition-colors rounded-xl">
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">Fractional CPO Services</h2>
              <p className="text-gray-600 mb-4">Hire a fractional CPO to lead your product. Senior leadership at 50% of full-time cost.</p>
              <span className="text-purple-600 font-semibold">Learn More →</span>
            </Link>
            <Link href="/interim-cpo" className="group bg-white p-8 border border-gray-200 hover:border-purple-500 transition-colors rounded-xl">
              <div className="text-3xl mb-4">⚡</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">Interim CPO</h2>
              <p className="text-gray-600 mb-4">Full-time temporary product leadership for major launches and transformations.</p>
              <span className="text-purple-600 font-semibold">Explore →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Live Roles</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Latest CPO Jobs UK</h2>
              <p className="text-gray-700 mt-2">Part-time and fractional Chief Product Officer positions</p>
            </div>
            <Link href="/fractional-cpo-jobs-uk" className="text-purple-600 font-bold hover:text-purple-700">
              View All CPO Jobs →
            </Link>
          </div>
          <ServerJobGrid
            jobs={[]}
            roleCategory="Product"
            ctaLink="/fractional-jobs-uk?department=Product"
            ctaText="View All CPO Jobs UK"
            maxJobs={6}
            showViewAll={true}
          />
        </div>
      </section>

      {/* What is a CPO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a CPO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A <strong className="text-gray-900">Chief Product Officer (CPO)</strong> is the senior executive responsible for all product-related activities within a company. They define product vision, lead product strategy, and ensure the product organisation delivers value to customers and the business.
            </p>
            <p className="text-gray-700 mb-6">
              In the UK, the demand for <strong>CPO jobs</strong> has grown significantly as companies recognise the importance of strategic product leadership. Whether you're looking for <Link href="/fractional-cpo-jobs-uk" className="text-purple-600 hover:text-purple-800 underline">fractional CPO jobs UK</Link> or considering hiring a CPO for your business, understanding the role is essential.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">CPO Responsibilities</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Product Vision & Strategy:</strong> Defining where the product is going and how it gets there</li>
              <li><strong>Roadmap Management:</strong> Prioritising features and initiatives aligned with business goals</li>
              <li><strong>Team Leadership:</strong> Building and mentoring the product team</li>
              <li><strong>Stakeholder Alignment:</strong> Working with CEO, engineering, sales, and customers</li>
              <li><strong>Product-Market Fit:</strong> Ensuring the product meets customer needs</li>
            </ul>

            <div className="bg-purple-50 p-6 border-l-4 border-purple-500 my-8">
              <p className="text-lg text-gray-900 font-medium mb-0">
                Looking for CPO opportunities? Browse our <Link href="/fractional-cpo-jobs-uk" className="text-purple-600 hover:text-purple-800 underline font-bold">Fractional CPO Jobs UK</Link> page for the latest part-time Chief Product Officer roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of CPO Engagement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Options</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Types of CPO Engagement</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-purple-50 p-8 border-2 border-purple-200 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💼</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Link href="/fractional-cpo-jobs-uk" className="hover:text-purple-600">Fractional CPO</Link>
                  </h3>
                  <p className="text-gray-700 mb-3">Part-time CPO working 1-3 days per week on an ongoing basis. Ideal for startups and scale-ups who need senior product leadership but not full-time.</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-purple-600 font-semibold">£800-£1,300/day</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-600">1-3 days/week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Link href="/interim-cpo" className="hover:text-purple-600">Interim CPO</Link>
                  </h3>
                  <p className="text-gray-700 mb-3">Full-time temporary CPO for 3-12 months. Best for product launches, pivots, or filling gaps during permanent recruitment.</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-purple-600 font-semibold">£1,200-£1,800/day</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-600">Full-time, 3-12 months</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-200 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏢</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Time CPO</h3>
                  <p className="text-gray-700 mb-3">Permanent Chief Product Officer as an employee. For established companies with substantial product teams and complexity.</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-purple-600 font-semibold">£150,000-£250,000/year</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-600">Permanent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">CPO Frequently Asked Questions</h2>
          </div>
          <FAQ items={CPO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Find Your<br />
            <span className="text-purple-300">CPO Opportunity?</span>
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Browse fractional CPO jobs or explore how to hire a CPO for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cpo-jobs-uk" className="px-10 py-5 bg-white text-purple-900 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors rounded-lg">
              Browse CPO Jobs UK
            </Link>
            <Link href="/fractional-cpo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-lg">
              Hire a CPO
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
              <Link href="/fractional-cpo-jobs-uk" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Fractional CPO Jobs UK</Link>
              <Link href="/fractional-cpo-services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Fractional CPO Services</Link>
              <Link href="/interim-cpo" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Interim CPO</Link>
              <Link href="/fractional-product-manager-jobs-uk" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Product Manager Jobs</Link>
              <Link href="/fractional-cto-jobs-uk" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">CTO Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
