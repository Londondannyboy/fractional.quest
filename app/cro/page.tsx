import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'CRO Jobs UK 2025',
  description: 'CRO jobs UK. Fractional, part-time, interim Chief Revenue Officer. £1,000-£1,800/day.',
  keywords: 'cro, cro jobs, cro jobs uk, chief revenue officer, fractional cro, part time cro, interim cro, cro services, hire cro, cro salary uk, revenue officer jobs',
  alternates: {
    canonical: 'https://fractional.quest/cro',
  },
  openGraph: {
    title: 'CRO Jobs & Services UK | Chief Revenue Officer',
    description: 'Find CRO jobs UK - fractional, part-time, and interim Chief Revenue Officer roles.',
    url: 'https://fractional.quest/cro',
  },
}

async function getCROStats() {
  try {
    const sql = createDbQuery()
    const [totalResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%CRO%' OR title ILIKE '%Chief Revenue%' OR title ILIKE '%Revenue Officer%')`
    ])
    return { total: parseInt((totalResult[0] as any)?.count || '0') }
  } catch {
    return { total: 28 }
  }
}

const CRO_FAQS = [
  {
    question: 'What does a CRO do?',
    answer: 'A Chief Revenue Officer (CRO) leads all revenue-generating functions including sales, marketing, and customer success. They align these teams under one strategy to drive predictable, scalable growth.',
  },
  {
    question: 'What is a Fractional CRO?',
    answer: 'A Fractional CRO is a part-time Chief Revenue Officer who works with your company 1-3 days per week. They bring senior revenue leadership and go-to-market expertise without the cost of a full-time executive hire. Typical day rates are £1,000-£1,800.',
  },
  {
    question: 'How much does a CRO earn in the UK?',
    answer: 'Full-time CRO salaries in the UK range from £180,000-£300,000+ depending on company size. Fractional CROs charge £1,000-£1,800 per day, often earning more than their full-time counterparts.',
  },
  {
    question: 'CRO vs VP Sales - what is the difference?',
    answer: 'A CRO has broader scope than a VP Sales. While VP Sales focuses on the sales team and closing deals, a CRO owns the entire revenue engine: sales, marketing, partnerships, and customer success/retention.',
  },
]

export default async function CROPage() {
  const stats = await getCROStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Revenue Leadership
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              CRO Jobs &<br />
              <span className="text-green-300">Services UK</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Your hub for <strong className="text-white">Chief Revenue Officer</strong> opportunities in the UK.
              Browse <Link href="/fractional-cro-jobs-uk" className="text-green-300 hover:text-white underline">fractional CRO jobs</Link>,
              hire a CRO, or explore revenue leadership roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cro-jobs-uk" className="px-8 py-4 bg-white text-green-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Browse CRO Jobs
              </Link>
              <Link href="/fractional-cro-services" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Hire a CRO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links - CRO Cluster */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fractional-cro-jobs-uk" className="group bg-white p-8 border-2 border-green-200 hover:border-green-500 transition-colors rounded-xl">
              <div className="text-3xl mb-4">💼</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">Fractional CRO Jobs UK</h2>
              <p className="text-gray-600 mb-4">Browse {stats.total}+ part-time Chief Revenue Officer roles paying £1,000-£1,800/day.</p>
              <span className="text-green-600 font-semibold">View Jobs →</span>
            </Link>
            <Link href="/fractional-cro-services" className="group bg-white p-8 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">Fractional CRO Services</h2>
              <p className="text-gray-600 mb-4">Hire a fractional CRO to drive revenue. Senior leadership at 50% of full-time cost.</p>
              <span className="text-green-600 font-semibold">Learn More →</span>
            </Link>
            <Link href="/interim-cro" className="group bg-white p-8 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <div className="text-3xl mb-4">⚡</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">Interim CRO</h2>
              <p className="text-gray-600 mb-4">Full-time temporary revenue leadership for growth sprints and turnarounds.</p>
              <span className="text-green-600 font-semibold">Explore →</span>
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Latest CRO Jobs UK</h2>
              <p className="text-gray-700 mt-2">Part-time and fractional Chief Revenue Officer positions</p>
            </div>
            <Link href="/fractional-cro-jobs-uk" className="text-green-600 font-bold hover:text-green-700">
              View All CRO Jobs →
            </Link>
          </div>
          <ServerJobGrid
            jobs={[]}
            roleCategory="Sales"
            ctaLink="/fractional-jobs-uk?department=Sales"
            ctaText="View All CRO Jobs UK"
            maxJobs={6}
            showViewAll={true}
          />
        </div>
      </section>

      {/* What is a CRO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a CRO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A <strong className="text-gray-900">Chief Revenue Officer (CRO)</strong> is the senior executive responsible for all revenue-generating activities within a company. They unify sales, marketing, and customer success under one strategic vision.
            </p>
            <p className="text-gray-700 mb-6">
              In the UK, demand for <strong>CRO jobs</strong> has surged as companies prioritise efficient growth over growth-at-all-costs. Whether you're looking for <Link href="/fractional-cro-jobs-uk" className="text-green-600 hover:text-green-800 underline">fractional CRO jobs UK</Link> or hiring a CRO, understanding the role is essential.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">CRO vs Other Sales Roles</h3>
            <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">CRO</h4>
                <p className="text-gray-600 text-sm">Owns entire revenue engine: sales, marketing, partnerships, customer success, and retention.</p>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">VP Sales / Sales Director</h4>
                <p className="text-gray-600 text-sm">Focuses on sales team performance and closing new business deals.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 border-l-4 border-green-500 my-8">
              <p className="text-lg text-gray-900 font-medium mb-0">
                Looking for CRO opportunities? Browse our <Link href="/fractional-cro-jobs-uk" className="text-green-600 hover:text-green-800 underline font-bold">Fractional CRO Jobs UK</Link> page for the latest part-time Chief Revenue Officer roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Sales Roles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Related Roles</span>
            <h2 className="text-3xl font-black text-gray-900">Sales & Revenue Cluster</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fractional-sales-director-jobs-uk" className="group bg-gray-50 p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Fractional Sales Director Jobs</h3>
              <p className="text-gray-600 text-sm">Part-time sales leadership and team management roles.</p>
            </Link>
            <Link href="/fractional-business-development-jobs-uk" className="group bg-gray-50 p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Business Development Jobs</h3>
              <p className="text-gray-600 text-sm">Fractional BD roles for partnerships and new market entry.</p>
            </Link>
            <Link href="/sales" className="group bg-gray-50 p-6 border border-gray-200 hover:border-green-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">All Sales Jobs</h3>
              <p className="text-gray-600 text-sm">Browse all fractional sales and revenue roles.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">CRO Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={CRO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Find Your<br />
            <span className="text-green-300">CRO Opportunity?</span>
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Browse fractional CRO jobs or explore how to hire a CRO for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cro-jobs-uk" className="px-10 py-5 bg-white text-green-900 font-bold uppercase tracking-wider hover:bg-green-50 transition-colors rounded-lg">
              Browse CRO Jobs UK
            </Link>
            <Link href="/fractional-cro-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-lg">
              Hire a CRO
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
              <Link href="/fractional-cro-jobs-uk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Fractional CRO Jobs UK</Link>
              <Link href="/fractional-cro-services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Fractional CRO Services</Link>
              <Link href="/interim-cro" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Interim CRO</Link>
              <Link href="/fractional-sales-director-jobs-uk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Sales Director Jobs</Link>
              <Link href="/sales" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Sales Hub</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
