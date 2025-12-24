import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { DesktopOnly } from '@/components/DesktopOnly'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Remote Fractional HR Jobs UK 2025 | Work From Home HR Roles',
  description: 'Find remote fractional HR jobs in the UK. Work-from-home HR Director and CHRO positions paying £700-£1,300/day. Fully remote and hybrid opportunities.',
  keywords: 'remote fractional hr jobs, remote hr jobs uk, work from home hr jobs, remote hr director jobs, fractional hr remote',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-jobs-remote',
  },
  openGraph: {
    title: 'Remote Fractional HR Jobs UK 2025 | Work From Home',
    description: 'Find remote fractional HR jobs. Work-from-home HR positions paying £700-£1,300/day.',
    images: ['/images/fractional-hr-jobs-remote.jpg'],
    url: 'https://fractional.quest/fractional-hr-jobs-remote',
  },
}

async function getRemoteHRStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR' AND (is_remote = true OR workplace_type = 'Remote' OR workplace_type = 'Hybrid')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 32, remoteCount: 18 }
  }
}

export default async function RemoteHRJobsPage() {
  const stats = await getRemoteHRStats()
  const remotePercentage = stats.total > 0 ? Math.round((stats.remoteCount / stats.total) * 100) : 56
  const lastUpdatedDate = new Date() // Use current date as we don't fetch individual jobs

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Remote Fractional HR Jobs UK 2025 | Work From Home HR Roles"
        description="Find remote fractional HR jobs paying £700-£1,300/day"
        url="https://fractional.quest/fractional-hr-jobs-remote"
        dateModified={lastUpdatedDate}
        itemCount={stats.remoteCount}
      />
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Remote HR workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr-jobs-uk" className="inline-flex items-center text-white/60 hover:text-gray-900 mb-6 transition-colors text-sm">
              <span className="mr-2">←</span> Back to All HR Jobs
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                  Remote Jobs
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Remote<br />
                <span className="text-pink-400">HR Jobs</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Work from anywhere. <strong className="text-white">{stats.remoteCount}+ remote & hybrid HR opportunities</strong> paying £700-£1,300/day.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">{stats.remoteCount}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Remote Roles</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{remotePercentage}%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Of HR Jobs</div>
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Remote & Hybrid HR Jobs</h2>
            </div>
            <p className="text-gray-500">Filter by workplace type to refine results.</p>
          </div>
          <Suspense fallback={<div className="bg-white rounded-2xl border border-gray-200 p-8"><div className="animate-pulse space-y-4"><div className="h-10 bg-gray-200 rounded w-1/3"></div><div className="grid grid-cols-2 gap-4"><div className="h-48 bg-gray-200 rounded"></div><div className="h-48 bg-gray-200 rounded"></div></div></div></div>}>
            <EmbeddedJobBoard defaultDepartment="HR" pageSlug="fractional-hr-jobs-remote" jobsPerPage={12} title="Remote HR Opportunities" allJobsLinkText="View All HR Jobs" />
          </Suspense>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-pink max-w-none">
            <h2>Remote Fractional HR: How It Works</h2>
            <p>
              <strong>Remote fractional HR</strong> has become increasingly common since 2020. Many HR leadership activities—strategy development, policy creation, HRIS implementation, and even complex ER—can be done effectively from home. According to <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 underline">CIPD research</a>, flexible working is now standard for senior HR roles.
            </p>

            <h3>What Works Remotely</h3>
            <ul>
              <li><strong>Strategy & planning:</strong> People strategy, workforce planning, org design</li>
              <li><strong>Policy development:</strong> Handbooks, contracts, HR documentation</li>
              <li><strong>Systems:</strong> HRIS selection and implementation</li>
              <li><strong>Coaching:</strong> Manager coaching and leadership development</li>
              <li><strong>Reporting:</strong> Board reporting, metrics, analytics</li>
              <li><strong>Recruitment strategy:</strong> Hiring process design, employer branding</li>
            </ul>

            <h3>What Benefits From On-Site</h3>
            <ul>
              <li><strong>Culture building:</strong> All-hands, team events, culture initiatives</li>
              <li><strong>Sensitive ER:</strong> Disciplinaries, grievances, terminations</li>
              <li><strong>Team workshops:</strong> Leadership team facilitation</li>
              <li><strong>Onboarding:</strong> New employee inductions (though many are now hybrid)</li>
            </ul>

            <h3>Typical Remote/Hybrid Models</h3>
            <p>Most <strong>remote HR roles</strong> are actually hybrid:</p>
            <ul>
              <li><strong>Fully remote:</strong> 100% WFH, common for distributed companies</li>
              <li><strong>Hybrid (1 day on-site):</strong> 1 day in office for key meetings, rest remote</li>
              <li><strong>Hybrid (2 days on-site):</strong> 2 days for presence, team time, ER</li>
              <li><strong>Remote with travel:</strong> Fully remote but travel for critical moments</li>
            </ul>

            <h3>Remote HR Day Rates</h3>
            <p>
              Remote fractional HR roles typically pay 5-10% lower than equivalent on-site roles, reflecting reduced travel time and costs. However, many professionals prefer the flexibility, and the market is becoming more equalised as remote work normalises.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Graph */}
      <DesktopOnly>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white">Remote HR Jobs Network</h2>
              <p className="text-gray-400 mt-2">Explore companies and roles in 3D</p>
            </div>
            <JobsGraph3D roleFilter="HR" limit={25} height="500px" />
          </div>
        </section>
      </DesktopOnly>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Remote HR Role</h2>
          <p className="text-gray-600 mb-8">Create your profile and get matched with remote-friendly companies.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/handler/sign-up" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors">
              Create Profile
            </Link>
            <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 border-2 border-white font-semibold hover:bg-white/10 transition-colors">
              All HR Jobs
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
              <Link href="/fractional-hr-director-jobs" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director Jobs</Link>
              <Link href="/part-time-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Part-Time HR Jobs</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-roles" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">All HR Roles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
