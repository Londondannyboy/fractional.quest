import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Recruiter Jobs UK',
  description: 'Fractional Recruiter jobs UK. Part-time Internal Recruiter roles. £400-£700/day.',
  keywords: 'fractional recruiter jobs, fractional talent acquisition jobs uk, part time internal recruiter, fractional head of talent, part time recruitment jobs, freelance recruiter',
  alternates: {
    canonical: 'https://fractional.quest/fractional-recruiter-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Recruiter Jobs UK | Part-Time Talent Acquisition Roles',
    description: 'Fractional Recruiter jobs UK - Find part-time Internal Recruiter positions paying £400-£700/day. Remote & hybrid available.',
    images: ['/images/fractional-recruiter-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-recruiter-jobs-uk',
  },
}

async function getRecruiterStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'HR' OR title ILIKE '%Recruiter%' OR title ILIKE '%Talent Acquisition%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'HR' OR title ILIKE '%Recruiter%' OR title ILIKE '%Talent Acquisition%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 22, remoteCount: 10 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'HR' OR title ILIKE '%Recruiter%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getRecruiterJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'HR' OR title ILIKE '%Recruiter%' OR title ILIKE '%Talent Acquisition%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 12
    `
    return jobs as any[]
  } catch {
    return []
  }
}

function getDaysAgo(postedDate: string | null): number | undefined {
  if (!postedDate) return undefined
  const posted = new Date(postedDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - posted.getTime())
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
}

const RECRUITER_FAQS = [
  {
    question: 'What is a Fractional Internal Recruiter?',
    answer: 'A Fractional Internal Recruiter works within a company\'s HR team on a part-time basis to manage hiring. Unlike an agency recruiter who works on commission, a fractional recruiter is paid a day rate to build the company\'s internal talent capability, reduce agency spend, and manage the hiring process.',
  },
  {
    question: 'How much do Fractional Recruiter jobs pay?',
    answer: 'Day rates typically range from £400 to £700. For senior \"Head of Talent\" roles, rates can be higher (£600-£900).',
  },
  {
    question: 'Why hire a Fractional Recruiter instead of an agency?',
    answer: 'Agencies charge 15-20% of salary per hire. If a company is hiring 5+ people, a fractional recruiter is significantly cheaper. Plus, they build the company\'s own employer brand and talent pool, rather than renting the agency\'s.',
  },
  {
    question: 'What are the main tasks?',
    answer: 'Sourcing candidates (LinkedIn Recruiter), managing the ATS, conducting initial screens, training hiring managers, and improving the candidate experience.',
  },
]

export default async function FractionalRecruiterJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getRecruiterStats(),
    getFeaturedCompanies(),
    getRecruiterJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Recruiter Jobs UK | Part-Time Talent Acquisition Roles"
        description="Find part-time Internal Recruiter positions paying £400-£700/day"
        url="https://fractional.quest/fractional-recruiter-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-800/90 via-pink-700/80 to-rose-800/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Talent Acquisition
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Recruiter Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Internal Recruiter roles for talent experts.
                Build teams and reduce agency spend for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£550</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-pink-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-hr-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  HR Jobs
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
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Earnings Calculator</h2>
          </div>
          <RoleCalculator role="chro" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Recruiter Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional recruiter jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-pink-600 to-rose-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">TALENT</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 font-medium mb-2">{job.company_name}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        UK
                      </span>
                      {job.compensation && (
                        <span className="font-semibold text-gray-900">{job.compensation}</span>
                      )}
                    </div>
                     {job.description_snippet && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{job.description_snippet}</p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-600 hover:text-pink-700">
                      View fractional recruiter job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=HR"
              className="inline-flex items-center gap-2 px-8 py-4 bg-pink-700 text-white font-bold uppercase tracking-wider hover:bg-pink-800 transition-colors"
            >
              View All {stats.total}+ Fractional Recruiter Jobs UK
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              A Guide to <span className="text-pink-600">Fractional Recruiter Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-pink-700"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Recruiter jobs</strong> (or Internal Recruiters) are booming as companies seek to reduce their reliance on expensive external agencies. This role brings the recruitment function in-house, creating long-term value for the employer brand.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Agency vs In-House</h3>
            <p>
              Many recruiters burn out in the high-pressure sales environment of agencies. <strong className="font-semibold">Fractional Internal Recruitment</strong> offers a different path: working closely with hiring managers to build teams, improve the candidate experience, and make quality hires without the KPI-driven stress of agency life.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-pink-700">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional recruiters save companies thousands in agency fees while building a sustainable talent pipeline."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Strategic Talent Acquisition</h3>
            <p>
              It's not just about filling seats. Fractional recruiters help companies define their EVP (Employee Value Proposition), implement ATS systems (like Ashby or Greenhouse), and train managers on how to interview effectively. They leave the company with a better hiring engine than they found.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The 'Embedded' Model</h3>
            <p>
              Often called "Embedded Talent Partners," this model allows <Link href="/fractional-recruiter-jobs-uk" className="text-pink-600 hover:text-pink-800 underline">fractional recruiters</Link> to work as part of the team for a project (e.g., "Hire 10 engineers in Q1") and then scale down. It's the ultimate flexible solution for high-growth companies.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="HR" title="Latest Talent News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional Recruiter Jobs</h2>
          </div>
          <FAQ skipSchema={true} items={RECRUITER_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-pink-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-pink-100">Fractional Talent Role</span></h2>
          <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking talent experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-pink-800 font-bold uppercase tracking-wider hover:bg-pink-700 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="chro" /> 
      {/* Mapped to CHRO/HR */}
    </div>
  )
}
