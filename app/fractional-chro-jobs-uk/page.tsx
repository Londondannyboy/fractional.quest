import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CHRO Jobs UK | How to Become a Fractional CHRO (2025)',
  description: 'Fractional CHRO jobs UK - Find part-time Chief HR Officer roles paying £1,100-£1,300/day. Career guide for becoming a fractional CHRO. 10+ monthly searches.',
  keywords: 'fractional chro jobs, fractional chro jobs uk, how to become a fractional chro, fractional chief people officer jobs, part time chro jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-chro-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CHRO Jobs UK | How to Become a Fractional CHRO',
    description: 'Find fractional CHRO roles and learn how to transition from full-time to fractional executive HR leadership.',
    images: ['/images/fractional-chro-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-chro-jobs-uk',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 32, remoteCount: 14 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'HR' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

const CHRO_CAREER_FAQS = [
  {
    question: 'How do I become a fractional CHRO?',
    answer: 'To become a fractional CHRO, you typically need: 15-20+ years HR experience with 8+ years in senior roles (CHRO, CPO, HR Director); experience at scale (200+ employees); CIPD Level 7 qualification; and a network of potential clients. Most fractional CHROs transition after successful full-time CHRO careers.'
  },
  {
    question: 'How much do fractional CHROs earn in the UK?',
    answer: 'Fractional CHROs in the UK typically earn £1,100-£1,300 per day. Working 3-4 days per week across 2-3 clients, annual earnings range from £145,000 to £250,000+. This often exceeds full-time CHRO salary while offering more flexibility and variety.'
  },
  {
    question: 'What qualifications do I need to be a fractional CHRO?',
    answer: 'Essential: CIPD Level 7 (Advanced Diploma in Strategic People Management), 15+ years HR experience with 8+ years at CHRO/HR Director level, proven track record leading HR through growth or transformation. Valuable: MBA, coaching qualifications, M&A experience, international HR experience.'
  },
  {
    question: 'How do I find fractional CHRO clients?',
    answer: 'Key sources include: VC/PE firms seeking portfolio company CHROs; executive networks and referrals from other C-suite executives; fractional platforms like Fractional Quest; CIPD and HR Directors forums; LinkedIn thought leadership; and board/advisory positions leading to referrals.'
  },
  {
    question: 'What IR35 considerations apply to fractional CHROs?',
    answer: 'Most fractional CHROs operate outside IR35 by: working with multiple clients (not one exclusive client), using own equipment, having right of substitution, controlling how/when work is done, and bearing business risk. Use limited company structure and ensure contracts reflect genuine self-employment.'
  },
  {
    question: 'Can I work as a fractional CHRO while still employed full-time?',
    answer: 'Some HR leaders start fractional work alongside employment through advisory roles or small engagements (check employment contract restrictions). However, true fractional CHRO work requires significant time commitment. Most transition fully after building 1-2 initial clients through their network.'
  },
]

export default async function FractionalCHROJobsUKPage() {
  const [stats, companies] = await Promise.all([getHRStats(), getFeaturedCompanies()])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D categoryFilter="HR" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to HR Hub
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Career Guide
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CHRO<br />
                <span className="text-pink-400">Jobs UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Find <strong className="text-white">fractional CHRO opportunities</strong> or learn how to transition from full-time to fractional executive HR leadership.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">{stats.total}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">HR Roles</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1,200</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Avg CHRO Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{stats.remoteCount}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
                  Browse CHRO Jobs
                </Link>
                <Link href="#how-to-become" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  How to Become One
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Calculator</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">How Much Can You Earn as a Fractional CHRO?</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CHRO & HR Leadership Jobs</h2>
            </div>
            <p className="text-gray-500">Pre-filtered to HR. Change filters to explore.</p>
          </div>
          <Suspense fallback={<div className="bg-white rounded-2xl border border-gray-200 p-8"><div className="animate-pulse space-y-4"><div className="h-10 bg-gray-200 rounded w-1/3"></div><div className="grid grid-cols-2 gap-4"><div className="h-48 bg-gray-200 rounded"></div><div className="h-48 bg-gray-200 rounded"></div></div></div></div>}>
            <EmbeddedJobBoard defaultDepartment="HR" pageSlug="fractional-chro-jobs-uk" jobsPerPage={10} title="Latest CHRO & HR Leadership Jobs" allJobsLinkText="View All HR Jobs" />
          </Suspense>
        </div>
      </section>

      {/* 3D Graph */}
      <DesktopOnly>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Interactive Network</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">HR Leadership Knowledge Graph</h2>
              <p className="text-gray-400 mt-2">Explore CHRO roles, skills, and companies in 3D</p>
            </div>
            <JobsGraph3D roleFilter="HR" limit={25} height="500px" />
          </div>
        </section>
      </DesktopOnly>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black">Companies Seeking HR Leaders</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-pink-400 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How to Become a Fractional CHRO */}
      <section id="how-to-become" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Career Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              How to Become a<br /><span className="text-pink-600">Fractional CHRO</span>
            </h2>
            <div className="w-24 h-1 bg-pink-500"></div>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Transitioning from full-time CHRO to fractional requires a different approach to your career. Here's the step-by-step guide based on successful fractional CHROs in the UK market.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Step 1: Assess Your Readiness</h3>

            <div className="bg-gray-50 p-6 border-l-4 border-pink-500 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Minimum Requirements</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>15-20+ years HR experience</strong> with 8+ years at CHRO/HR Director level</li>
                <li>• <strong>Experience at scale:</strong> Led HR for 200+ employee organisations</li>
                <li>• <strong><a href="https://www.cipd.org/uk/learn/qualifications/level7-advanced-diploma/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD Level 7</a></strong> qualification (Advanced Diploma in Strategic People Management)</li>
                <li>• <strong>Track record:</strong> Demonstrable outcomes from HR leadership (culture transformation, M&A integration, scaling teams)</li>
                <li>• <strong>Network:</strong> Connections to potential clients (founders, CEOs, PE/VC firms)</li>
                <li>• <strong>Financial runway:</strong> 6-12 months of savings to cover transition period</li>
              </ul>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Step 2: Set Up Your Business</h3>

            <div className="grid gap-6 my-10">
              <div className="bg-white p-6 border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Limited Company Structure</h4>
                <p className="text-gray-700 mb-0">Most fractional CHROs operate through a limited company for tax efficiency and IR35 compliance. Set up a company, register for VAT if appropriate, and establish proper accounting.</p>
              </div>
              <div className="bg-white p-6 border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Professional Indemnity Insurance</h4>
                <p className="text-gray-700 mb-0">Essential for HR advisory work. Cover typically £1M-£5M. Clients often require proof of insurance before engagement. Cost: £500-£1,500/year.</p>
              </div>
              <div className="bg-white p-6 border-2 border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Contract Templates</h4>
                <p className="text-gray-700 mb-0">Have a solicitor draft your standard engagement contract covering: scope of work, day rate, notice period, confidentiality, IP, and liability limitations.</p>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Step 3: Build Your Personal Brand</h3>

            <div className="space-y-6 my-10">
              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">LinkedIn Presence</h4>
                <p className="text-gray-700 mb-0">Optimise headline for "Fractional CHRO" and related terms. Share insights on HR leadership, culture, and people strategy. Engage with founder and CEO content. Post 2-3 times per week.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-pink-500">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Thought Leadership</h4>
                <p className="text-gray-700 mb-0">Write articles on HR challenges you've solved. Speak at HR events and startup meetups. Consider a simple website showcasing your experience and approach.</p>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-gray-900">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Network Activation</h4>
                <p className="text-gray-700 mb-0">Tell your network you're going fractional. Ask for introductions to founders and CEOs. Many first clients come from warm referrals from ex-colleagues, board contacts, or previous employers.</p>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Step 4: Find Your First Clients</h3>

            <div className="bg-gray-50 text-white p-8 my-10">
              <h4 className="text-xl font-bold text-white mb-4">Top Client Sources for Fractional CHROs</h4>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-2">Direct Outreach:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• VC/PE firms (portfolio company support)</li>
                    <li>• CEO/founder networks</li>
                    <li>• Board and advisory connections</li>
                    <li>• Previous employer referrals</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Platforms & Communities:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Fractional Quest</li>
                    <li>• CIPD HR Directors network</li>
                    <li>• LinkedIn inbound</li>
                    <li>• Interim management firms</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Step 5: Price Your Services</h3>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-white">
                    <th className="p-4 text-left">Experience Level</th>
                    <th className="p-4 text-left">Day Rate</th>
                    <th className="p-4 text-left">2-3 Clients Annual</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="p-4">First-time fractional CHRO</td>
                    <td className="p-4">£1,000-£1,100</td>
                    <td className="p-4">£130k-£175k</td>
                  </tr>
                  <tr className="border-b bg-pink-50">
                    <td className="p-4 font-semibold">Established fractional CHRO</td>
                    <td className="p-4 font-bold text-pink-600">£1,100-£1,300</td>
                    <td className="p-4 font-bold text-pink-600">£145k-£210k</td>
                  </tr>
                  <tr>
                    <td className="p-4">Premium fractional CHRO (M&A, PE specialist)</td>
                    <td className="p-4">£1,300-£1,500</td>
                    <td className="p-4">£170k-£250k+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-pink-50 p-6 border border-pink-200 rounded-lg my-10">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Pricing Tips</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Don't undercharge to win first clients—it devalues the market and is hard to raise later</li>
                <li>• Quote day rates, not hourly (fractional work includes thinking time between client days)</li>
                <li>• Consider retainer structures for ongoing work (slight discount for commitment)</li>
                <li>• Price based on value delivered, not just time spent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As a fractional CHRO, your IR35 status significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={1200} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CHRO Careers</h2>
          </div>
          <FAQ items={CHRO_CAREER_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Start Your<br /><span className="text-pink-400">Fractional CHRO Career</span></h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional people leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">Create Profile</Link>
            <Link href="/fractional-chro" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">CHRO Guide</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Jobs UK</Link>
              <Link href="/fractional-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Fractional CHRO</Link>
              <Link href="/fractional-hr-director-jobs" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director Jobs</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/interim-chro" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim CHRO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
