import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Sales Jobs UK | Sales Director, CRO & BD Roles',
  description: 'Fractional sales jobs UK - Find part-time Sales Director, CRO, and Business Development roles. Browse fractional sales jobs paying £600-£1,800/day. Remote & hybrid available.',
  keywords: 'fractional sales jobs, fractional sales jobs uk, part time sales director, fractional cro, sales director jobs, business development jobs, fractional sales, sales consultant jobs uk',
  alternates: {
    canonical: 'https://fractional.quest/sales',
  },
  openGraph: {
    title: 'Fractional Sales Jobs UK | Sales Director, CRO & BD Roles',
    description: 'Fractional sales jobs UK - Part-time Sales Director, CRO, and BD roles paying £600-£1,800/day.',
    url: 'https://fractional.quest/sales',
  },
}

async function getSalesStats() {
  try {
    const sql = createDbQuery()
    const [totalResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Sales'`
    ])
    return { total: parseInt((totalResult[0] as any)?.count || '0') }
  } catch {
    return { total: 45 }
  }
}

const SALES_FAQS = [
  {
    question: 'What types of fractional sales jobs are available?',
    answer: 'The main fractional sales roles include: Fractional CRO (Chief Revenue Officer), Fractional Sales Director, Fractional VP Sales, Fractional Business Development Director, and Fractional Sales Consultant. Day rates range from £600-£1,800 depending on seniority.',
  },
  {
    question: 'Why hire a fractional sales leader?',
    answer: 'Companies hire fractional sales talent when they need senior expertise but cannot justify a full-time hire. Common scenarios: startups needing to build their first sales process, SMEs wanting to professionalise their sales function, or companies requiring sales leadership during growth phases.',
  },
  {
    question: 'What is the difference between CRO and Sales Director?',
    answer: 'A CRO (Chief Revenue Officer) owns all revenue functions: sales, marketing, partnerships, and customer success. A Sales Director focuses specifically on the sales team, pipeline management, and closing new business. CROs are typically more strategic; Sales Directors more operational.',
  },
  {
    question: 'Can fractional sales roles be done remotely?',
    answer: 'Yes, many fractional sales leadership roles can be done remotely, especially strategic work like sales process design, CRM implementation, and team coaching. However, some client-facing or team-building activities may require occasional on-site presence.',
  },
]

export default async function SalesHubPage() {
  const stats = await getSalesStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-800 via-green-700 to-emerald-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Sales & Revenue
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Fractional Sales<br />
              <span className="text-green-200">Jobs UK</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Your hub for <strong className="text-white">fractional sales jobs</strong> in the UK.
              From CRO to Sales Director to Business Development - find part-time sales leadership roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#jobs" className="px-8 py-4 bg-white text-green-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Browse All Sales Jobs
              </Link>
              <Link href="/fractional-cro-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                CRO Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Role Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/fractional-cro-jobs-uk" className="group bg-white p-6 border-2 border-green-200 hover:border-green-500 transition-colors rounded-xl">
              <div className="text-2xl mb-3">👔</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Fractional CRO</h2>
              <p className="text-gray-600 text-sm mb-3">Chief Revenue Officer roles. £1,000-£1,800/day.</p>
              <span className="text-green-600 font-semibold text-sm">View CRO Jobs →</span>
            </Link>
            <Link href="/fractional-sales-director-jobs-uk" className="group bg-white p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <div className="text-2xl mb-3">📊</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Sales Director</h2>
              <p className="text-gray-600 text-sm mb-3">Part-time Sales Director roles. £600-£1,000/day.</p>
              <span className="text-green-600 font-semibold text-sm">View Jobs →</span>
            </Link>
            <Link href="/fractional-business-development-jobs-uk" className="group bg-white p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <div className="text-2xl mb-3">🤝</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Business Development</h2>
              <p className="text-gray-600 text-sm mb-3">Fractional BD and partnerships roles.</p>
              <span className="text-green-600 font-semibold text-sm">View BD Jobs →</span>
            </Link>
            <Link href="/cro" className="group bg-white p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <div className="text-2xl mb-3">📈</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">CRO Hub</h2>
              <p className="text-gray-600 text-sm mb-3">Everything about Chief Revenue Officer roles.</p>
              <span className="text-green-600 font-semibold text-sm">Learn More →</span>
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Sales Jobs UK</h2>
              <p className="text-gray-700 mt-2">{stats.total}+ part-time sales and revenue roles</p>
            </div>
            <Link href="/fractional-jobs-uk?department=Sales" className="text-green-600 font-bold hover:text-green-700">
              View All Sales Jobs →
            </Link>
          </div>
          <ServerJobGrid
            jobs={[]}
            roleCategory="Sales"
            ctaLink="/fractional-jobs-uk?department=Sales"
            ctaText="View All Fractional Sales Jobs"
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Why Fractional Sales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">The Guide</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Sales Leadership</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-gray-900">Fractional sales jobs</strong> have transformed how UK companies build and scale their revenue functions. From seed-stage startups to established SMEs, businesses are hiring part-time sales leaders to professionalise their go-to-market approach.
            </p>
            <p className="text-gray-700 mb-6">
              Whether you need a <Link href="/fractional-cro-jobs-uk" className="text-green-600 hover:text-green-800 underline">Fractional CRO</Link> to align your entire revenue engine, a <Link href="/fractional-sales-director-jobs-uk" className="text-green-600 hover:text-green-800 underline">Sales Director</Link> to manage your team, or a <Link href="/fractional-business-development-jobs-uk" className="text-green-600 hover:text-green-800 underline">BD lead</Link> to open new markets - fractional models offer flexibility and expertise.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Fractional Sales Roles</h3>
            <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Fractional CRO</h4>
                <p className="text-gray-600 text-sm">Strategic revenue leadership. Aligns sales, marketing, and CS. £1,000-£1,800/day.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Fractional Sales Director</h4>
                <p className="text-gray-600 text-sm">Manages sales teams and pipeline. Hands-on coaching. £600-£1,000/day.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Fractional VP Sales</h4>
                <p className="text-gray-600 text-sm">Senior sales leadership for scaling companies. £800-£1,200/day.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Fractional BD Director</h4>
                <p className="text-gray-600 text-sm">Partnerships, new markets, strategic deals. £700-£1,100/day.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 border-l-4 border-green-500 my-8">
              <p className="text-lg text-gray-900 font-medium mb-0">
                Browse all fractional sales opportunities on our <Link href="/fractional-cro-jobs-uk" className="text-green-600 hover:text-green-800 underline font-bold">CRO Jobs</Link> and <Link href="/fractional-sales-director-jobs-uk" className="text-green-600 hover:text-green-800 underline font-bold">Sales Director Jobs</Link> pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Sales Jobs FAQ</h2>
          </div>
          <FAQ skipSchema={true} items={SALES_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready for Your Next<br />
            <span className="text-green-200">Fractional Sales Role?</span>
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Create your profile and get matched with companies seeking sales leadership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-green-800 font-bold uppercase tracking-wider hover:bg-green-50 transition-colors rounded-lg">
              Create Profile
            </Link>
            <Link href="/fractional-cro-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-lg">
              Browse CRO Jobs
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
              <Link href="/fractional-cro-jobs-uk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Fractional CRO Jobs</Link>
              <Link href="/fractional-sales-director-jobs-uk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Sales Director Jobs</Link>
              <Link href="/fractional-business-development-jobs-uk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">BD Jobs</Link>
              <Link href="/cro" className="text-gray-700 hover:text-green-600 font-medium transition-colors">CRO Hub</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">CMO Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
