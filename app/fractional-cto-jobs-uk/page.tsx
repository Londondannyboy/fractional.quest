import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ, CTO_FAQS } from '@/components/FAQ'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleContentHub } from '@/components/RoleContentHub'
import { FracSection } from '@/components/FracSection'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { FAQPageSchema } from '@/components/FAQPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CTO Jobs UK: Part-Time Roles',
  description: 'Fractional CTO jobs UK. Part-time CTO positions paying £850-£1,600/day. Browse live roles for experienced tech leaders.',
  keywords: 'fractional cto jobs uk, fractional cto jobs, part time cto jobs, fractional cto uk, cto jobs uk, part time chief technology officer, fractional cto',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cto-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CTO Jobs UK | Part-Time CTO Roles 2025',
    description: 'Fractional CTO jobs UK - Find part-time CTO positions paying £850-£1,600/day. Remote & hybrid.',
    images: ['/images/fractional-cto-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cto-jobs-uk',
  },
}

async function getEngineeringStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult, ukResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Engineering'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Engineering' AND (is_remote = true OR workplace_type = 'Remote')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Engineering' AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0'),
      ukCount: parseInt((ukResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 35, remoteCount: 20, ukCount: 15 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Engineering' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - UK ONLY by default
async function getTechJobs(showAllCountries: boolean = false) {
  try {
    const sql = createDbQuery()
    const jobs = showAllCountries
      ? await sql`
          SELECT
            id, slug, title, company_name, location, country, city, is_remote, workplace_type,
            compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
            description_snippet
          FROM jobs
          WHERE is_active = true AND role_category = 'Engineering'
          ORDER BY posted_date DESC NULLS LAST
          LIMIT 30
        `
      : await sql`
          SELECT
            id, slug, title, company_name, location, country, city, is_remote, workplace_type,
            compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
            description_snippet
          FROM jobs
          WHERE is_active = true AND role_category = 'Engineering'
            AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR is_remote = true)
          ORDER BY posted_date DESC NULLS LAST
          LIMIT 30
        `
    return jobs as any[]
  } catch {
    return []
  }
}

// Calculate days ago for posted date
function getDaysAgo(postedDate: string | null): number | undefined {
  if (!postedDate) return undefined
  const posted = new Date(postedDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - posted.getTime())
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
}

// Job images for variety
const JOB_IMAGES = [
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80',
]

export default async function FractionalCtoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getEngineeringStats(),
    getFeaturedCompanies(),
    getTechJobs(false) // UK only by default
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CTO Jobs UK | Part-Time CTO Roles 2025"
        description="Find part-time CTO positions paying £850-£1,600/day"
        url="https://fractional.quest/fractional-cto-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <FAQPageSchema faqs={CTO_FAQS} />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cto-jobs-uk" />

      {/* Hero with Aspirational Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image - Tech professional */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-blue-800/90 to-teal-700/85" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cto', 'jobs')} className="mb-8" />

            {/* Authority Links Badge Row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="https://www.bbc.co.uk/news/business"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white/90 text-xs font-medium hover:bg-white/20 transition-colors"
              >
                <span className="font-bold">BBC</span> Business
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Chief_technology_officer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white/90 text-xs font-medium hover:bg-white/20 transition-colors"
              >
                <span className="font-bold">Wikipedia</span> CTO Role
              </a>
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                🇬🇧 UK Tech Leadership
              </span>
              <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  Fractional CTO Jobs UK
                </h1>
                <p className="text-xl text-white/95 leading-relaxed max-w-2xl mb-4 drop-shadow">
                  Part-time Chief Technology Officer roles for experienced tech leaders.
                </p>
                <p className="text-lg text-white/85 leading-relaxed max-w-2xl mb-8">
                  Work 2-3 days a week at <strong className="text-white">£850-£1,600/day</strong>. According to <a href="https://www.bbc.co.uk/news/business" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">BBC Business</a>, fractional executive roles have grown 300% since 2020.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#jobs" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Browse UK Jobs
                  </Link>
                  <Link href="/fractional-jobs-tech" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                    All Tech Jobs
                  </Link>
                </div>
              </div>

              {/* Frac Section Integration */}
              <div className="hidden lg:block lg:w-80">
                <FracSection title="Talk with Frac about CTO roles" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{stats.ukCount}+</div>
              <div className="text-sm text-gray-400">UK Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">£1,100</div>
              <div className="text-sm text-gray-400">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
              <div className="text-sm text-gray-400">Remote Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2-3 days</div>
              <div className="text-sm text-gray-400">Avg Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS SECTION - UK FOCUSED with Filter */}
      <section id="jobs" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header with Country Filter */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CTO Jobs UK</h2>
            </div>
            <div className="flex items-center gap-4">
              {/* UK Filter - Default Selected */}
              <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                <span className="text-2xl">🇬🇧</span>
                <select
                  defaultValue="UK"
                  className="bg-transparent border-none text-gray-700 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="UK">United Kingdom</option>
                  <option value="Remote">Remote Only</option>
                  <option value="All">All Countries</option>
                </select>
              </div>
              <span className="text-gray-500 text-sm">{jobs.length}+ live jobs</span>
            </div>
          </div>

          {/* Horizontal Job Cards - esportsjobs style */}
          <div className="space-y-4 mb-10">
            {jobs.slice(0, 12).map((job, index) => {
              const daysAgo = getDaysAgo(job.posted_date)
              const jobImage = JOB_IMAGES[index % JOB_IMAGES.length]

              return (
                <Link
                  key={job.id}
                  href={`/fractional-job/${job.slug}`}
                  className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image - Left Side */}
                    <div className="relative w-full md:w-56 h-40 md:h-auto flex-shrink-0 bg-gradient-to-br from-blue-600 to-purple-700">
                      <img
                        src={jobImage}
                        alt={`Fractional CTO job UK - ${job.title} at ${job.company_name}`}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
                      />
                      {/* Gradient overlays for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent md:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent md:hidden" />
                      {/* Badges on image */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {daysAgo !== undefined && daysAgo <= 3 && (
                          <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
                            New
                          </span>
                        )}
                        {job.is_remote && (
                          <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
                            Remote
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content - Right Side */}
                    <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">
                          {job.title}
                        </h3>

                        {/* Company & Location Row */}
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                          <span className="font-semibold text-blue-600">{job.company_name}</span>
                          <span className="flex items-center gap-1">
                            📍 {job.location || 'UK'}
                          </span>
                          {job.compensation && (
                            <span className="font-bold text-gray-900">💷 {job.compensation}</span>
                          )}
                          {job.hours_per_week && (
                            <span className="text-gray-500">⏰ {job.hours_per_week}</span>
                          )}
                        </div>

                        {/* Description snippet */}
                        {job.description_snippet && (
                          <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                            {job.description_snippet}
                          </p>
                        )}

                        {/* Skills */}
                        {job.skills_required && job.skills_required.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {(job.skills_required as string[]).slice(0, 4).map((skill: string, i: number) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs rounded-full bg-blue-50 border border-blue-200 text-blue-700"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Apply Button */}
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center gap-2 bg-blue-600 group-hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow">
                          View Job
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Engineering"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              View All {stats.total}+ Fractional CTO Jobs UK
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Companies Seeking Fractional CTOs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-blue-600 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content with More Line Breaks */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br />
              <span className="text-blue-600">Fractional CTO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500"></div>
          </div>

          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fractional CTO jobs UK - technology executive reviewing code and architecture" className="w-full h-80 md:h-96 object-cover rounded-lg" />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">Technology leaders across the UK are embracing fractional work</figcaption>
          </figure>

          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 font-light">
              <strong className="font-semibold text-gray-900">Fractional CTO jobs</strong> represent the new frontier of technology leadership.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Part-time Chief Technology Officer positions where experienced leaders provide strategic technical guidance to multiple companies simultaneously—delivering world-class expertise at a fraction of the cost.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              According to <a href="https://en.wikipedia.org/wiki/Chief_technology_officer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">Wikipedia</a>, the CTO role has evolved significantly since its origins in the 1980s.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Today's fractional CTOs serve as strategic partners, not just technical managers.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-16 mb-6">The Rise of Fractional CTO Jobs UK</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The UK market for <strong>fractional CTO jobs UK</strong> has grown significantly.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This growth is driven by non-technical founders, <a href="https://www.gov.uk/government/publications/uks-digital-strategy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">digital transformation initiatives</a>, and the need for expert technical due diligence.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Companies that previously couldn't afford senior tech leadership now access world-class CTOs paying £850-£1,600 per day rather than £180,000-£350,000 annually.
            </p>

            <div className="bg-blue-50 p-8 my-12 border-l-4 border-blue-500 rounded-r-lg">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Non-technical founders access CTO expertise without diluting equity or committing to £200k+ salaries."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-16 mb-6">Why Fractional CTO Jobs Are Booming</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <a href="https://www.bbc.co.uk/news/business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline font-medium">BBC Business</a> has reported on the growing trend of fractional executives across UK businesses.
            </p>

            <ul className="space-y-4 mb-12 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Non-technical founders:</strong> First-time founders need technical leadership without equity dilution</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Digital transformation:</strong> Traditional businesses need strategic tech guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Technical due diligence:</strong> VCs require independent tech assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Team scaling:</strong> Companies need CTOs to build teams from 2 to 20+</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Architecture decisions:</strong> Critical build vs buy decisions require experience</span>
              </li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-16 mb-6">Types of Fractional CTO Jobs</h3>

            <div className="grid md:grid-cols-2 gap-6 not-prose my-10">
              {[
                { title: 'Startup CTO', desc: 'Building MVP & hiring first engineers', rate: '£1,000-£1,400/day' },
                { title: 'Scale-up CTO', desc: 'Scaling architecture & building teams', rate: '£1,100-£1,500/day' },
                { title: 'Due Diligence CTO', desc: 'Technical assessment for M&A', rate: '£1,200-£1,600/day' },
                { title: 'Transformation CTO', desc: 'Leading digital transformation', rate: '£950-£1,300/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{type.desc}</p>
                  <span className="text-blue-600 font-bold">{type.rate}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-16 mb-6">Fractional CTO vs Interim CTO</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Understanding the difference is crucial for both hiring companies and tech leaders.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Fractional CTOs</strong> work part-time (typically 2-3 days/week) with multiple clients simultaneously. They provide ongoing strategic guidance and are ideal for companies that need experienced tech leadership but not full-time capacity.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Interim CTOs</strong> work full-time but temporarily, usually to bridge a gap during transitions or while searching for a permanent hire.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-16 mb-6">Requirements for Fractional CTO Jobs</h3>

            <ul className="space-y-4 mb-12 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>15+ years of software engineering experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>5+ years in CTO, VP Engineering, or Technical Director roles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Experience scaling engineering teams (5 to 50+)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Broad technology stack knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Strong communication with non-technical stakeholders</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* AI/ML Boom Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">Market Dynamics</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              The AI/ML Boom Driving<br />
              <span className="text-blue-600">Fractional CTO Demand</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500"></div>
          </div>

          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The explosive growth in fractional CTO opportunities—up 55% year-over-year according to <a href="https://technation.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> research—directly correlates with the AI/ML integration wave sweeping UK businesses.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every company from Series A startups to established mid-market firms now faces the same question: how do we integrate AI without derailing our roadmap or overspending on experiments?
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This creates perfect conditions for fractional CTOs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A full-time CTO with deep AI/ML expertise commands £200,000-£350,000 packages. Yet most companies need this expertise for strategic guidance, vendor selection, and architecture decisions—not 40 hours weekly.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A fractional CTO providing 2 days per week at £1,200 daily costs £115,000 annually, saving over £100,000 while accessing identical expertise.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <Link href="/fractional-jobs-london" className="text-blue-600 hover:text-blue-700 underline font-semibold">London</Link> accounts for roughly 60% of fractional CTO opportunities, though Manchester, Edinburgh, and Cambridge show strong growth.
            </p>
          </article>
        </div>
      </section>

      {/* Technical Specializations Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">In Demand</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Technical Specializations<br />
              <span className="text-blue-600">Commanding Premium Rates</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500"></div>
          </div>

          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              While generalist fractional CTOs maintain steady demand, specialized expertise commands significant premiums.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">AI/ML Integration & Architecture</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Fractional CTOs with production AI/ML experience command £1,300-£1,600 daily.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Companies need guidance on LLM integration, RAG architectures, vector databases, and prompt engineering at scale.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Platform Engineering & DevOps</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As companies scale from 10 to 100+ engineers, platform engineering becomes critical.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Fractional CTOs specializing in Kubernetes, infrastructure-as-code, CI/CD pipelines, and developer experience command £1,100-£1,400 daily.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Security & Compliance Architecture</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              FinTech, HealthTech, and financial services require fractional CTOs with deep security expertise.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              SOC 2, ISO 27001, PCI DSS, <a href="https://ico.org.uk/for-organisations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">GDPR</a>—navigating these frameworks while maintaining development velocity demands experience.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Rates of £1,200-£1,500 daily reflect the specialized knowledge and liability involved.
            </p>
          </article>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">
              As a fractional CTO, your <a href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 status</a> significantly impacts your take-home pay
            </p>
          </div>
          <IR35Calculator defaultDayRate={1100} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CTO Jobs UK</h2>
          </div>
          <FAQ items={CTO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Your Next<br />
            <span className="text-blue-200">Fractional CTO Role</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Create your profile and get matched with companies seeking fractional technology leadership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-blue-700 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded-lg shadow-lg">
              Create Profile
            </Link>
            <Link href="/fractional-jobs-tech" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors rounded-lg">
              Browse Tech Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-jobs-london" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Fractional Jobs London</Link>
              <Link href="/fractional-jobs-tech" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Tech Industry Jobs</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">CMO Jobs UK</Link>
              <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Jobs UK</Link>
              <Link href="/fractional-coo-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">COO Jobs UK</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub - Internal Linking */}
      <RoleContentHub currentRole="cto" />
    </div>
  )
}
