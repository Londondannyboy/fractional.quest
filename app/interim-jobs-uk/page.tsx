import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createDbQuery } from '@/lib/db'
import { JobCard } from '@/components/JobCard'
import { FAQ } from '@/components/FAQ'
import { HotJobsLines } from '@/components/HotJobsLines'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Jobs UK | Executive & Management Positions 2025',
  description: 'Interim jobs UK - CFO, HR Director, Finance & executive interim roles. £600-£1,200/day rates. London, Manchester & remote positions. Apply to live interim vacancies.',
  keywords: 'interim jobs UK, interim CFO jobs, interim HR director jobs, interim finance director, interim management jobs UK, interim executive jobs, interim positions UK',
  alternates: {
    canonical: 'https://fractional.quest/interim-jobs-uk',
  },
  openGraph: {
    title: 'Interim Jobs UK | Executive & Management Positions',
    description: 'Interim jobs UK - CFO, HR, Finance & executive roles. £600-£1,200/day. Apply now.',
    type: 'website',
    url: 'https://fractional.quest/interim-jobs-uk',
  },
}

const interimFAQs = [
  {
    question: 'What are interim jobs UK?',
    answer: 'Interim jobs UK are temporary executive or management positions, typically lasting 3-12 months. Unlike permanent roles, interim managers are hired to deliver specific outcomes—leading change projects, covering maternity leave, or steering companies through transitions. They work full-time for one client at a time.',
  },
  {
    question: 'How much do interim jobs UK pay?',
    answer: 'Interim jobs UK typically pay £600-£1,200 per day depending on seniority and sector. Interim CFOs and Finance Directors command £800-£1,200/day, while interim HR Directors average £700-£1,000/day. Most interim assignments are 3-6 months with potential extensions.',
  },
  {
    question: 'What is the difference between interim and fractional?',
    answer: 'Interim roles are full-time temporary positions with one employer (3-12 months). Fractional roles are ongoing part-time arrangements (1-3 days/week) with multiple clients simultaneously. Interim suits transformation projects; fractional suits ongoing strategic support.',
  },
  {
    question: 'How do I find interim jobs UK?',
    answer: 'The best interim jobs UK are found through specialist recruiters, executive networks, and job boards like this one. Building relationships with interim management firms and maintaining an active LinkedIn presence significantly increases opportunities.',
  },
]

async function getInterimStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`
      SELECT
        COUNT(*) FILTER (WHERE title ILIKE '%interim%') as total_interim,
        COUNT(*) FILTER (WHERE title ILIKE '%interim%' AND (location ILIKE '%london%')) as london,
        COUNT(*) FILTER (WHERE title ILIKE '%interim%' AND (location ILIKE '%uk%' OR location ILIKE '%united kingdom%' OR location ILIKE '%england%')) as uk_wide,
        COUNT(*) FILTER (WHERE title ILIKE '%interim%' AND is_remote = true) as remote
      FROM jobs
      WHERE is_active = true
    `
    return result[0] || { total_interim: 0, london: 0, uk_wide: 0, remote: 0 }
  } catch (error) {
    return { total_interim: 0, london: 0, uk_wide: 0, remote: 0 }
  }
}

async function getInterimJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, normalized_title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, company_domain, description_snippet
      FROM jobs
      WHERE is_active = true
        AND title ILIKE '%interim%'
        AND (
          location ILIKE '%uk%' OR location ILIKE '%united kingdom%'
          OR location ILIKE '%london%' OR location ILIKE '%england%'
          OR location ILIKE '%manchester%' OR location ILIKE '%birmingham%'
          OR location ILIKE '%edinburgh%' OR location ILIKE '%scotland%'
        )
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 30
    `
    return jobs
  } catch (error) {
    return []
  }
}

async function getFractionalJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND title NOT ILIKE '%interim%'
        AND (title ILIKE '%fractional%' OR title ILIKE '%part-time%' OR title ILIKE '%part time%')
        AND (location ILIKE '%uk%' OR location ILIKE '%london%' OR is_remote = true)
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 15
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function InterimJobsUKPage() {
  const [stats, interimJobs, fractionalJobs] = await Promise.all([
    getInterimStats(),
    getInterimJobs(),
    getFractionalJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Interim Jobs UK | Executive & Management Positions"
        description="Interim jobs UK - CFO, HR Director, Finance & executive interim roles."
        url="https://fractional.quest/interim-jobs-uk"
        dateModified={new Date()}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Interim executive in boardroom meeting"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Interim Jobs UK
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Executive interim positions across the UK. CFO, HR Director, Finance Director & management roles paying £600-£1,200/day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#jobs"
              className="px-8 py-4 bg-white text-amber-900 font-bold rounded-lg hover:bg-amber-50 transition-colors"
            >
              Browse Interim Jobs
            </Link>
            <Link
              href="/fractional-jobs-uk"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              View Fractional Roles
            </Link>
          </div>
          <LastUpdatedBadge date={new Date()} className="mt-8" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10 text-center text-base">
            <div>
              <span className="font-black text-white">{stats.total_interim || 20}+</span>
              <span className="font-bold text-white ml-1">Interim Jobs</span>
            </div>
            <div>
              <span className="font-black text-white">£600-1,200</span>
              <span className="font-bold text-white ml-1">Day Rates</span>
            </div>
            <div>
              <span className="font-black text-white">3-12</span>
              <span className="font-bold text-white ml-1">Month Contracts</span>
            </div>
            <div>
              <span className="font-black text-white">Full-Time</span>
              <span className="font-bold text-white ml-1">Commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Job Lines */}
      {(interimJobs as any[]).length > 0 && (
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <HotJobsLines
              jobs={(interimJobs as any[]).map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date,
                is_remote: job.is_remote,
              }))}
              title="Latest UK Interim Jobs"
              maxJobs={12}
              viewAllHref="#jobs"
              viewAllText="See all interim jobs"
            />
          </div>
        </section>
      )}

      {/* What is Interim */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Interim Jobs?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              <strong>Interim jobs UK</strong> are temporary executive and management positions designed to deliver specific outcomes. Unlike permanent hires, interim managers are brought in for defined periods—typically 3-12 months—to lead change initiatives, cover senior absences, or steer organisations through critical transitions.
            </p>
            <p>
              The UK interim management market has grown significantly, with businesses increasingly valuing the flexibility and expertise that interim executives bring. Key sectors include financial services, healthcare, technology, and professional services.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
              <p className="font-semibold text-amber-900 mb-2">Interim vs Fractional: Key Differences</p>
              <ul className="text-amber-800 space-y-1">
                <li><strong>Interim:</strong> Full-time, single client, 3-12 months, transformation focus</li>
                <li><strong>Fractional:</strong> Part-time (1-3 days/week), multiple clients, ongoing, strategic support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">UK Interim Jobs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Live interim positions across the UK. CFO, HR Director, Finance Director and executive management roles.
            </p>
          </div>

          {(interimJobs as any[]).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(interimJobs as any[]).map((job) => {
                const postedDate = job.posted_date ? new Date(job.posted_date) : null
                const postedDaysAgo = postedDate ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24)) : undefined
                return (
                  <JobCard
                    key={job.id || job.slug}
                    jobId={job.id}
                    slug={job.slug}
                    title={job.normalized_title || job.title}
                    company={job.company_name}
                    location={job.location || 'UK'}
                    isRemote={job.is_remote || job.workplace_type === 'Remote'}
                    compensation={job.compensation}
                    roleCategory={job.role_category}
                    skills={job.skills_required || []}
                    postedDaysAgo={postedDaysAgo}
                    companyDomain={job.company_domain}
                    description={job.description_snippet}
                  />
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-600 mb-4">No interim jobs currently listed. Check back soon or browse fractional roles.</p>
              <Link href="/fractional-jobs-uk" className="text-amber-600 font-semibold hover:text-amber-700">
                Browse Fractional Jobs →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Popular Interim Roles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Interim Roles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/interim-cfo-jobs-uk" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 mb-2">Interim CFO</h3>
              <p className="text-gray-600 text-sm mb-3">Lead financial transformation, M&A integration, and turnaround projects.</p>
              <span className="text-amber-600 font-medium">£900-£1,200/day →</span>
            </Link>
            <Link href="/interim-hr-director-jobs-uk" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 mb-2">Interim HR Director</h3>
              <p className="text-gray-600 text-sm mb-3">Drive people transformation, restructuring, and culture change initiatives.</p>
              <span className="text-amber-600 font-medium">£700-£1,000/day →</span>
            </Link>
            <Link href="/interim-finance-director-jobs-uk" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 mb-2">Interim Finance Director</h3>
              <p className="text-gray-600 text-sm mb-3">Cover FD absences, implement systems, and strengthen financial controls.</p>
              <span className="text-amber-600 font-medium">£700-£1,000/day →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Fractional Jobs Section */}
      {(fractionalJobs as any[]).length > 0 && (
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Prefer Part-Time? Explore Fractional Roles
              </h2>
              <p className="text-gray-600">
                Fractional jobs offer ongoing part-time arrangements (1-3 days/week) with multiple clients.
              </p>
            </div>
            <HotJobsLines
              jobs={(fractionalJobs as any[]).map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date,
                is_remote: job.is_remote,
              }))}
              title="Fractional Opportunities"
              maxJobs={10}
              viewAllHref="/fractional-jobs-uk"
              viewAllText="View all fractional jobs"
            />
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Interim Jobs UK: FAQ</h2>
          <FAQ items={interimFAQs} />
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-2">
              <Link href="/fractional-cfo-jobs-uk" className="block text-gray-600 hover:text-amber-600">Fractional CFO Jobs</Link>
              <Link href="/fractional-hr-jobs-uk" className="block text-gray-600 hover:text-amber-600">Fractional HR Jobs</Link>
              <Link href="/fractional-cmo-jobs-uk" className="block text-gray-600 hover:text-amber-600">Fractional CMO Jobs</Link>
            </div>
            <div className="space-y-2">
              <Link href="/fractional-cto-jobs-uk" className="block text-gray-600 hover:text-amber-600">Fractional CTO Jobs</Link>
              <Link href="/fractional-coo-jobs-uk" className="block text-gray-600 hover:text-amber-600">Fractional COO Jobs</Link>
              <Link href="/fractional-finance-director-jobs-uk" className="block text-gray-600 hover:text-amber-600">Finance Director Jobs</Link>
            </div>
            <div className="space-y-2">
              <Link href="/fractional-jobs-london" className="block text-gray-600 hover:text-amber-600">London Jobs</Link>
              <Link href="/fractional-jobs-manchester" className="block text-gray-600 hover:text-amber-600">Manchester Jobs</Link>
              <Link href="/fractional-jobs-remote" className="block text-gray-600 hover:text-amber-600">Remote Jobs</Link>
            </div>
            <div className="space-y-2">
              <Link href="/fractional-jobs-uk" className="block text-gray-600 hover:text-amber-600">All UK Jobs</Link>
              <Link href="/how-to-become-a-fractional-executive" className="block text-gray-600 hover:text-amber-600">Go Fractional Guide</Link>
              <Link href="/fractional-executive-salary-uk" className="block text-gray-600 hover:text-amber-600">Salary Guide</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
