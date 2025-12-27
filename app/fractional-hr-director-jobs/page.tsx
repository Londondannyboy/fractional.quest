import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { DesktopOnly } from '@/components/DesktopOnly'
import { RoleCalculator } from '@/components/RoleCalculator'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { FAQ, HR_FAQS } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional HR Director Jobs UK',
  description: 'Fractional HR Director jobs UK. Part-time roles £900-£1,100/day.',
  keywords: 'fractional hr director jobs, fractional hr director jobs uk, part time hr director jobs, fractional head of hr jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-hr-director-jobs',
  },
  openGraph: {
    title: 'Fractional HR Director Jobs UK 2025 | £900-£1,100/Day',
    description: 'Find fractional HR Director jobs in the UK. Part-time positions paying £900-£1,100/day.',
    images: ['/images/fractional-hr-director-jobs.jpg'],
    url: 'https://fractional.quest/fractional-hr-director-jobs',
  },
}

async function getHRStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'HR'`
    return parseInt((result[0] as any)?.count || '0')
  } catch {
    return 32
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
      LIMIT 12
    `
    return jobs as any[]
  } catch {
    return []
  }
}

export default async function FractionalHRDirectorJobsPage() {
  const [jobCount, jobs] = await Promise.all([getHRStats(), getHRJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional HR Director Jobs UK | £900-£1,100/Day Roles"
        description="Find fractional HR Director jobs in the UK. Part-time positions paying £900-£1,100/day."
        url="https://fractional.quest/fractional-hr-director-jobs"
        dateModified={lastUpdatedDate}
        itemCount={jobCount}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="HR workplace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/fractional-hr-director" className="inline-flex items-center text-white/60 hover:text-gray-900 mb-6 transition-colors text-sm">
              <span className="mr-2">←</span> Back to HR Director Guide
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                  Job Board
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional<br />
                <span className="text-pink-400">HR Director Jobs</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Find <strong className="text-white">HR Director positions</strong> paying £900-£1,100/day. The most in-demand fractional HR role in the UK.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">{jobCount}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">HR Roles</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1,000</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">20/mo</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Searches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">£900-£1,100</div>
              <div className="text-gray-600 text-sm">Day Rate Range</div>
            </div>
            <div>
              <div className="text-2xl font-bold">12-18 Years</div>
              <div className="text-gray-600 text-sm">Typical Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold">30-150</div>
              <div className="text-gray-600 text-sm">Employee Sweet Spot</div>
            </div>
            <div>
              <div className="text-2xl font-bold">1-3 Days</div>
              <div className="text-gray-600 text-sm">Per Week</div>
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
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">HR Director Opportunities</h2>
            </div>
            <p className="text-gray-500">Pre-filtered to HR. Look for Director-level roles.</p>
          </div>
          <ServerJobGrid
            jobs={jobs}
            roleCategory="HR"
            ctaLink="/fractional-jobs-uk?department=HR"
            ctaText={`View All ${jobCount}+ HR Director Jobs`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* What HR Directors Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900">What Fractional HR Directors Do</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border-l-4 border-pink-500">
              <h3 className="font-bold text-gray-900 mb-3">Strategic Leadership</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Develop people strategy aligned with business goals</li>
                <li>• Advise leadership team on people matters</li>
                <li>• Create organisational structure for growth</li>
              </ul>
            </div>
            <div className="bg-white p-6 border-l-4 border-gray-300">
              <h3 className="font-bold text-gray-900 mb-3">HR Infrastructure</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Build policies, contracts, handbooks</li>
                <li>• Implement HRIS and HR processes</li>
                <li>• Establish performance frameworks</li>
              </ul>
            </div>
            <div className="bg-white p-6 border-l-4 border-gray-300">
              <h3 className="font-bold text-gray-900 mb-3">Employee Relations</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Handle complex ER cases</li>
                <li>• Manage restructuring and redundancy</li>
                <li>• Ensure UK employment law compliance</li>
              </ul>
            </div>
            <div className="bg-white p-6 border-l-4 border-pink-500">
              <h3 className="font-bold text-gray-900 mb-3">Talent & Culture</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Lead senior hiring</li>
                <li>• Develop employer brand</li>
                <li>• Shape culture and engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Calculate HR Director Earnings</h2>
          </div>
          <RoleCalculator role="hr" />
        </div>
      </section>

      {/* 3D Graph */}
      <DesktopOnly>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white">HR Director Network</h2>
              <p className="text-gray-400 mt-2">Explore roles and companies</p>
            </div>
            <JobsGraph3D roleFilter="HR" limit={25} height="500px" />
          </div>
        </section>
      </DesktopOnly>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQ skipSchema={true} faqs={HR_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Fractional HR Director Career</h2>
          <p className="text-gray-600 mb-8">Create your profile and get matched with companies seeking HR Directors.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/handler/sign-up" className="px-8 py-4 bg-pink-500 text-white font-semibold hover:bg-pink-400 transition-colors">
              Create Profile
            </Link>
            <Link href="/fractional-hr-director" className="px-8 py-4 border-2 border-gray-300 font-semibold hover:bg-gray-100 transition-colors">
              HR Director Guide
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
              <Link href="/fractional-hr-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">All HR Jobs</Link>
              <Link href="/fractional-hr-director" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">HR Director Guide</Link>
              <Link href="/fractional-chro-jobs-uk" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">CHRO Jobs</Link>
              <Link href="/fractional-hr-salary" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/fractional-hr-jobs-remote" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Remote HR Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
