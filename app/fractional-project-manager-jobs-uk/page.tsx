import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Project Manager Jobs UK | Part-Time PM Roles',
  description: 'Fractional Project Manager jobs UK - Find part-time Project Manager positions paying £400-£700/day. Browse live PM roles for experienced delivery leads. Remote & hybrid available.',
  keywords: 'fractional project manager jobs, fractional pm jobs uk, part time project manager, fractional delivery manager, part time project management, freelance project manager',
  alternates: {
    canonical: 'https://fractional.quest/fractional-project-manager-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Project Manager Jobs UK | Part-Time PM Roles',
    description: 'Fractional Project Manager jobs UK - Find part-time Project Manager positions paying £400-£700/day. Remote & hybrid available.',
    images: ['/images/fractional-project-manager-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-project-manager-jobs-uk',
  },
}

async function getProjectStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Project Manager%' OR title ILIKE '%Delivery Manager%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Project Manager%' OR title ILIKE '%Delivery Manager%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 40, remoteCount: 15 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Project Manager%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getProjectJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Project Manager%' OR title ILIKE '%Delivery Manager%')
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

const PROJECT_FAQS = [
  {
    question: 'What is a Fractional Project Manager?',
    answer: 'A Fractional Project Manager is an experienced delivery professional who manages specific projects for a company on a part-time or contract basis. They ensure projects are delivered on time, within budget, and to scope, often managing multiple client projects simultaneously.',
  },
  {
    question: 'How much do Fractional Project Manager jobs pay?',
    answer: 'Day rates for Fractional Project Managers in the UK typically range from £400 to £700. Rates vary based on the methodology (Agile vs Waterfall), industry (e.g., Construction vs Tech), and project complexity.',
  },
  {
    question: 'What industries hire Fractional Project Managers?',
    answer: 'Almost every industry hires project managers. Tech (software delivery), Construction, Marketing agencies, and Professional Services are the most common employers of fractional talent.',
  },
  {
    question: 'Is certification required?',
    answer: 'While not always mandatory, certifications like PRINCE2, PMP, or Agile/Scrum Master are highly valued and often expected for senior fractional roles.',
  },
]

export default async function FractionalProjectManagerJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getProjectStats(),
    getFeaturedCompanies(),
    getProjectJobs()
  ])

  return (
    <div className="min-h-screen bg-white">
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-project-manager-jobs-uk" />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800/90 via-teal-700/80 to-cyan-800/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('project', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Project Delivery
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Project Manager Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Project Manager roles for experienced delivery leads.
                Deliver key initiatives on time and budget for 1-3 days a week.
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
                <Link href="#jobs" className="px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-product-manager-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Product Jobs
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
          <RoleCalculator role="coo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Project Manager Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional PM jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-teal-600 to-cyan-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">PM</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700">
                      View fractional PM job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Operations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 text-white font-bold rounded-lg hover:bg-teal-800 transition-colors"
            >
              View All {stats.total}+ Fractional Project Manager Jobs UK
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
              A Guide to <span className="text-teal-700">Fractional Project Manager Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-teal-700"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Project Manager jobs</strong> provide essential delivery capability to businesses that need to get things done but don't need a permanent Project Office. This is the gig economy for professional delivery leads.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Delivery on Demand</h3>
            <p>
              Whether it's an office move, a software implementation, or a compliance remediation programme, projects have a start and an end. Hiring a full-time PM often results in them being underutilised once the project finishes. A <strong className="font-semibold">Fractional PM</strong> comes in for the duration of the project (or part-time across multiple projects) and leaves when the job is done.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-teal-700">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional Project Managers offer a flexible, cost-effective way to access PRINCE2/Agile expertise exactly when it's needed."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Skills</h3>
            <ul className="space-y-3">
              <li><strong>Planning & Scheduling:</strong> Creating realistic timelines and Gantt charts.</li>
              <li><strong>Budget Management:</strong> Tracking spend against forecast to prevent overruns.</li>
              <li><strong>Risk Management:</strong> Identifying and mitigating risks (RAID logs).</li>
              <li><strong>Stakeholder Communication:</strong> Keeping everyone from the team to the board informed.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why the Shift?</h3>
            <p>
              The shift towards project-based work in the economy favours the <Link href="/fractional-project-manager-jobs-uk" className="text-teal-700 hover:text-teal-800 underline">fractional model</Link>. Businesses value the ability to spin up a project team quickly with experienced contractors rather than go through a slow permanent recruitment process.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Operations" title="Latest Project News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional Project Manager Jobs</h2>
          </div>
          <FAQ skipSchema={true} items={PROJECT_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-teal-100">Fractional PM Role</span></h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking delivery experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-teal-800 font-bold uppercase tracking-wider hover:bg-teal-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="pm" /> 
      {/* Mapped to PM */}
    </div>
  )
}