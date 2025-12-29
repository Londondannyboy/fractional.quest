import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { WebPageSchema } from '@/components/WebPageSchema'
import { JobListingSchema } from '@/components/JobPostingSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Jobs Australia: Executive Roles 2025',
  description: 'Browse fractional jobs in Australia: CFO, CTO, CMO, COO roles. Part-time executive positions across Australia.',
  keywords: 'fractional jobs Australia, fractional CFO Australia, fractional CTO Australia, fractional CMO Australia, part-time executive Australia',
  alternates: {
    canonical: 'https://fractional.quest/fractional-jobs-au',
  },
  openGraph: {
    title: 'Fractional Jobs Australia | Executive Roles',
    description: 'Browse fractional executive jobs in Australia.',
    type: 'website',
    url: 'https://fractional.quest/fractional-jobs-au',
  },
}

async function getAUJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city,
        is_remote, workplace_type, compensation, role_category,
        skills_required, posted_date, description_snippet,
        salary_min, salary_max, salary_currency
      FROM jobs
      WHERE is_active = true
        AND (country = 'Australia' OR is_remote = true)
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return jobs as any[]
  } catch {
    return []
  }
}

async function getAUStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (country = 'Australia' OR is_remote = true)`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND is_remote = true`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 0, remoteCount: 0 }
  }
}

export default async function FractionalJobsAUPage() {
  const [jobs, stats] = await Promise.all([getAUJobs(), getAUStats()])

  const lastUpdatedDate = jobs[0]?.posted_date
    ? new Date(jobs[0].posted_date)
    : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Jobs Australia | Executive Roles"
        description="Browse fractional executive jobs in Australia"
        url="https://fractional.quest/fractional-jobs-au"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema
        jobs={jobs}
        pageUrl="https://fractional.quest/fractional-jobs-au"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-green-900 to-green-800">
        <div className="container-content relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🇦🇺</span>
              <span className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Australia
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Fractional Jobs Australia
            </h1>
            <p className="text-xl text-green-100 leading-relaxed max-w-2xl mb-8">
              Find part-time executive and fractional C-suite roles across Australia.
              {stats.total > 0 && ` Currently ${stats.total} active positions including ${stats.remoteCount} remote roles.`}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/fractional-jobs"
                className="px-6 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                🌍 View Global Jobs
              </Link>
              <Link
                href="/fractional-jobs-uk"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                🇬🇧 UK Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="py-16">
        <div className="container-content">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {stats.total} Fractional Jobs in Australia
          </h2>
          {jobs.length > 0 ? (
            <ServerJobGrid jobs={jobs} />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-600 mb-4">No Australia-specific jobs at the moment.</p>
              <Link href="/fractional-jobs" className="text-green-600 font-medium hover:underline">
                Browse all global jobs →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
