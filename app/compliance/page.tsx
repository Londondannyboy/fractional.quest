import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Compliance Jobs UK 2025',
  description: 'Compliance jobs UK. Fractional, part-time, interim compliance roles. FinTech, financial services.',
  keywords: 'compliance jobs, compliance jobs uk, fractional compliance officer, part time compliance jobs, compliance officer jobs, interim compliance officer, fintech compliance jobs, outsourced compliance, mlro jobs',
  alternates: {
    canonical: 'https://fractional.quest/compliance',
  },
  openGraph: {
    title: 'Compliance Jobs UK | Fractional & Part-Time Compliance Roles',
    description: 'Compliance jobs UK - Fractional, part-time, and interim compliance officer positions.',
    url: 'https://fractional.quest/compliance',
  },
}

async function getComplianceStats() {
  try {
    const sql = createDbQuery()
    const [totalResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Compliance' OR title ILIKE '%Compliance%' OR title ILIKE '%MLRO%')`
    ])
    return { total: parseInt((totalResult[0] as any)?.count || '0') }
  } catch {
    return { total: 20 }
  }
}

const COMPLIANCE_FAQS = [
  {
    question: 'What is a Fractional Compliance Officer?',
    answer: 'A Fractional Compliance Officer is an experienced compliance professional who works with your company part-time, typically 1-3 days per week. They ensure regulatory compliance (FCA, GDPR, AML, etc.) without the cost of a full-time hire. Day rates typically range from £500-£900.',
  },
  {
    question: 'Which industries need fractional compliance officers?',
    answer: 'Any regulated industry: FinTech, Financial Services, Wealth Management, Insurance, Healthcare, Pharmaceuticals, and Legal Services are the main employers. Startups in regulated sectors particularly benefit from fractional compliance expertise.',
  },
  {
    question: 'What does an outsourced compliance officer do?',
    answer: 'They handle policy development, regulatory reporting, staff training, compliance monitoring, audit preparation, and regulatory relationship management. In FinTech, they often serve as the MLRO (Money Laundering Reporting Officer) or SMF16/17.',
  },
  {
    question: 'How much do compliance jobs pay in the UK?',
    answer: 'Fractional Compliance Officers typically charge £500-£900 per day. Senior roles like Head of Compliance or MLRO command higher rates (£800-£1,200/day). Full-time salaries range from £60,000-£150,000+ depending on seniority and sector.',
  },
]

export default async function ComplianceHubPage() {
  const stats = await getComplianceStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Regulatory Compliance
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Compliance<br />
              <span className="text-slate-300">Jobs UK</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Your hub for <strong className="text-white">compliance jobs</strong> in the UK.
              Browse <Link href="/fractional-compliance-jobs-uk" className="text-slate-300 hover:text-white underline">fractional compliance officer</Link> roles,
              part-time compliance jobs, and interim positions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-compliance-jobs-uk" className="px-8 py-4 bg-white text-slate-800 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Browse Compliance Jobs
              </Link>
              <Link href="/fractional-compliance-services" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Hire Compliance Officer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Role Types */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/fractional-compliance-jobs-uk" className="group bg-white p-6 border-2 border-slate-200 hover:border-slate-500 transition-colors rounded-xl">
              <div className="text-2xl mb-3">📋</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Fractional Compliance</h2>
              <p className="text-gray-600 text-sm mb-3">Part-time Compliance Officer roles. £500-£900/day.</p>
              <span className="text-slate-600 font-semibold text-sm">View Jobs →</span>
            </Link>
            <Link href="/part-time-compliance-jobs-uk" className="group bg-white p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <div className="text-2xl mb-3">⏰</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Part-Time Compliance</h2>
              <p className="text-gray-600 text-sm mb-3">Flexible compliance roles for experienced professionals.</p>
              <span className="text-slate-600 font-semibold text-sm">View Jobs →</span>
            </Link>
            <Link href="/interim-compliance-officer" className="group bg-white p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <div className="text-2xl mb-3">⚡</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Interim Compliance</h2>
              <p className="text-gray-600 text-sm mb-3">Full-time temporary compliance leadership.</p>
              <span className="text-slate-600 font-semibold text-sm">View Jobs →</span>
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="group bg-white p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <div className="text-2xl mb-3">🏢</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Outsourced Compliance</h2>
              <p className="text-gray-600 text-sm mb-3">Cost and benefits of outsourced compliance.</p>
              <span className="text-slate-600 font-semibold text-sm">Learn More →</span>
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Compliance Jobs UK</h2>
              <p className="text-gray-700 mt-2">{stats.total}+ compliance and regulatory roles</p>
            </div>
            <Link href="/fractional-compliance-jobs-uk" className="text-slate-600 font-bold hover:text-slate-700">
              View All Compliance Jobs →
            </Link>
          </div>
          <ServerJobGrid
            jobs={[]}
            roleCategory="Executive"
            ctaLink="/fractional-jobs-uk"
            ctaText="View All Compliance Jobs UK"
            maxJobs={6}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Compliance by Sector */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">By Industry</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Compliance Jobs by Sector</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-gray-900">Compliance jobs</strong> are essential across regulated industries. The UK's complex regulatory landscape creates strong demand for experienced compliance professionals, particularly in financial services and FinTech.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Compliance Roles by Industry</h3>
            <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">FinTech Compliance</h4>
                <p className="text-gray-600 text-sm">FCA authorisation, MLRO, AML/KYC, payments compliance. High demand sector.</p>
                <Link href="/fractional-compliance-fintech" className="text-slate-600 text-sm font-semibold hover:underline">FinTech Compliance Jobs →</Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Financial Services</h4>
                <p className="text-gray-600 text-sm">Wealth management, banking, insurance compliance roles.</p>
                <Link href="/fractional-compliance-jobs-uk" className="text-slate-600 text-sm font-semibold hover:underline">View Jobs →</Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">MLRO Roles</h4>
                <p className="text-gray-600 text-sm">Money Laundering Reporting Officer positions. SMF16/17 certified.</p>
                <Link href="/fractional-mlro-uk" className="text-slate-600 text-sm font-semibold hover:underline">MLRO Jobs →</Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Data Protection / DPO</h4>
                <p className="text-gray-600 text-sm">GDPR compliance, data protection officer roles.</p>
                <Link href="/fractional-dpo-jobs-uk" className="text-slate-600 text-sm font-semibold hover:underline">DPO Jobs →</Link>
              </div>
            </div>

            <div className="bg-slate-50 p-6 border-l-4 border-slate-600 my-8">
              <p className="text-lg text-gray-900 font-medium mb-0">
                Looking for compliance work? Browse our <Link href="/fractional-compliance-jobs-uk" className="text-slate-600 hover:text-slate-800 underline font-bold">Fractional Compliance Jobs</Link> page for the latest opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Resources</span>
            <h2 className="text-3xl font-black text-gray-900">Compliance Guides</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/how-to-become-fractional-compliance-officer" className="group bg-gray-50 p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">How to Become a Fractional Compliance Officer</h3>
              <p className="text-gray-600 text-sm">Career guide for compliance professionals considering fractional work.</p>
            </Link>
            <Link href="/compliance-officer-salary-uk" className="group bg-gray-50 p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Compliance Officer Salary UK</h3>
              <p className="text-gray-600 text-sm">Day rates and salary benchmarks for compliance roles.</p>
            </Link>
            <Link href="/outsourced-compliance-cost" className="group bg-gray-50 p-6 border border-gray-200 hover:border-slate-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-slate-600">Outsourced Compliance Cost</h3>
              <p className="text-gray-600 text-sm">What does outsourced compliance cost? Full guide.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Compliance Jobs FAQ</h2>
          </div>
          <FAQ items={COMPLIANCE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready for Your Next<br />
            <span className="text-slate-300">Compliance Role?</span>
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Create your profile and get matched with companies seeking compliance expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-slate-800 font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors rounded-lg">
              Create Profile
            </Link>
            <Link href="/fractional-compliance-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-lg">
              Browse Compliance Jobs
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
              <Link href="/fractional-compliance-jobs-uk" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Fractional Compliance Jobs</Link>
              <Link href="/part-time-compliance-jobs-uk" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Part-Time Compliance</Link>
              <Link href="/interim-compliance-officer" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">Interim Compliance</Link>
              <Link href="/fractional-compliance-fintech" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">FinTech Compliance</Link>
              <Link href="/fractional-mlro-uk" className="text-gray-700 hover:text-slate-600 font-medium transition-colors">MLRO Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
