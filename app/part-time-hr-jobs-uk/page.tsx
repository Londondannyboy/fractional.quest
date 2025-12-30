import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { DesktopOnly } from '@/components/DesktopOnly'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { FAQ, HR_FAQS } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Part-Time HR Jobs UK 2025',
  description: 'Part-time HR jobs UK. Flexible HR Director, CHRO roles. £700-£1,300/day.',
  keywords: 'part time hr jobs uk, part-time hr jobs, part time hr director jobs, part time chro jobs, flexible hr jobs uk',
  alternates: {
    canonical: 'https://fractional.quest/part-time-hr-jobs-uk',
  },
  openGraph: {
    title: 'Part-Time HR Jobs UK 2025 | Flexible HR Positions',
    description: 'Browse part-time HR jobs in the UK. Flexible positions paying £700-£1,300/day.',
    images: ['/images/part-time-hr-jobs-uk.jpg'],
    url: 'https://fractional.quest/part-time-hr-jobs-uk',
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

async function getHRJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'HR'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return jobs as any[]
  } catch {
    return []
  }
}

export default async function PartTimeHRJobsUKPage() {
  const [stats, jobs] = await Promise.all([getHRStats(), getHRJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Part-Time HR Jobs UK | Flexible HR Director & CHRO Positions"
        description="Browse part-time HR jobs in the UK. Flexible positions paying £700-£1,300/day."
        url="https://fractional.quest/part-time-hr-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Part-time HR jobs UK background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0">
          <JobsGraph3D categoryFilter="HR" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/part-time-hr" className="inline-flex items-center text-white/60 hover:text-gray-900 mb-6 transition-colors text-sm">
              <span className="mr-2">←</span> Back to Part-Time HR
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                  Job Board
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Part-Time<br />
                <span className="text-pink-400">HR Jobs UK</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Browse <strong className="text-white">{stats.total}+ flexible HR opportunities</strong>. Work 1-3 days per week at £700-£1,300/day.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">{stats.total}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">HR Roles</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{stats.remoteCount}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Remote</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£950</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Board */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Part-Time HR Opportunities</h2>
            </div>
            <p className="text-gray-500">Pre-filtered to HR roles. Adjust filters as needed.</p>
          </div>
          <ServerJobGrid
            jobs={jobs}
            roleCategory="HR"
            ctaLink="/fractional-jobs-uk?department=HR"
            ctaText={`View All ${stats.total}+ HR Jobs`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* 3D Graph - Desktop Only */}
      <DesktopOnly>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Interactive Network</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">HR Jobs Knowledge Graph</h2>
              <p className="text-gray-400 mt-2">Explore roles, skills, and companies in 3D</p>
            </div>
            <JobsGraph3D roleFilter="HR" limit={25} height="500px" />
          </div>
        </section>
      </DesktopOnly>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-pink max-w-none">
            <h2>Finding Part-Time HR Jobs in the UK</h2>
            <p>
              The UK market for <strong>part-time HR jobs</strong> has grown significantly, with more experienced HR professionals choosing <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangements</a>. Whether you're seeking a fractional HR Director role or a part-time CHRO position supported by <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD professional standards</a>, the opportunities are increasingly diverse.
            </p>

            <h3>Types of Part-Time HR Roles Available</h3>
            <ul>
              <li><strong>Part-Time HR Director:</strong> 1-3 days/week, £900-£1,100/day, building and leading HR functions in line with <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK employment legislation</a></li>
              <li><strong>Part-Time CHRO:</strong> 2-3 days/week, £1,100-£1,300/day, board-level people leadership</li>
              <li><strong>Part-Time People Partner:</strong> 1-2 days/week, £600-£850/day, hands-on HR support</li>
              <li><strong>Part-Time HR Consultant:</strong> Project-based, £700-£950/day, specialist expertise aligned with <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACAS best practices</a></li>
            </ul>

            <h3>Industries Hiring Part-Time HR</h3>
            <p>Part-time HR roles are particularly common in:</p>
            <ul>
              <li><strong>Tech & SaaS:</strong> <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Scale-ups</a> needing senior HR for rapid growth</li>
              <li><strong>VC/PE-backed companies:</strong> <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Portfolio companies</a> with professional HR requirements</li>
              <li><strong>Financial services:</strong> Regulated industries needing compliance expertise</li>
              <li><strong>Healthcare:</strong> Growing sector with specific HR challenges informed by <a href="https://www.ons.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a></li>
            </ul>

            <h3>Why Companies Hire Part-Time HR Professionals</h3>
            <p>
              Many UK businesses are turning to part-time HR leadership as a cost-effective solution. <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> research shows that flexible HR arrangements allow companies to access senior expertise without the full-time overhead, particularly beneficial for organizations navigating complex <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">employment regulations</a>.
            </p>

            <h3>Professional Development for Part-Time HR Roles</h3>
            <p>
              Maintaining your professional credentials is essential. The <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> offers resources specifically for HR professionals working in fractional or part-time capacities. Additionally, staying current with <a href="https://www.shrm.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SHRM best practices</a> can enhance your value proposition to UK clients.
            </p>

            <h3>The Self-Employed HR Market</h3>
            <p>
              Many part-time HR professionals operate as self-employed consultants. <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IPSE (Association of Independent Professionals and the Self-Employed)</a> provides guidance on navigating the freelance HR landscape, including IR35 considerations and contract best practices.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQ faqs={HR_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Part-Time HR Career?</h2>
          <p className="text-gray-600 mb-8">Create your profile and get matched with companies seeking flexible HR leadership.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/handler/sign-up" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors">
              Create Profile
            </Link>
            <Link href="/part-time-hr" className="px-8 py-4 border-2 border-gray-300 font-semibold hover:bg-gray-100 transition-colors">
              Part-Time HR Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">HR Cluster</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Complete HR Guide</Link>
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">All HR Jobs UK</Link>
              <Link href="/part-time-hr" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Part-Time HR Guide</Link>
              <Link href="/fractional-hr-jobs-remote" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Remote HR Jobs</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-director-jobs" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
