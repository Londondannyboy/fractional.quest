import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { RoleCalculator } from '@/components/RoleCalculator'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Head of AI Jobs UK: AI Director Roles 2025',
  description: 'Fractional Head of AI jobs UK for experienced AI/ML leaders. Part-time AI Director positions paying £1,000-£1,800/day. Browse live fractional AI jobs and machine learning leadership opportunities across the UK.',
  keywords: 'fractional head of ai jobs, fractional ai director jobs uk, part time head of ai, fractional ai jobs, ai leadership part time, artificial intelligence jobs uk',
  alternates: {
    canonical: 'https://fractional.quest/fractional-head-of-ai-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Head of AI Jobs UK | Part-Time AI Director Roles',
    description: 'Fractional Head of AI jobs UK - Find part-time AI Director positions paying £1,000-£1,800/day. Remote & hybrid available.',
    images: ['/images/fractional-head-of-ai-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-head-of-ai-jobs-uk',
  },
}

async function getAIStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Engineering' OR title ILIKE '%AI%' OR title ILIKE '%Artificial Intelligence%' OR title ILIKE '%Machine Learning%') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%') AND title NOT ILIKE '%interim%'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Engineering' OR title ILIKE '%AI%' OR title ILIKE '%Artificial Intelligence%' OR title ILIKE '%Machine Learning%') AND (is_remote = true OR workplace_type = 'Remote') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%') AND title NOT ILIKE '%interim%'`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 42, remoteCount: 18 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Engineering' OR title ILIKE '%AI%') AND company_name IS NOT NULL AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%') AND title NOT ILIKE '%interim%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getAIJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Engineering' OR title ILIKE '%AI%' OR title ILIKE '%Artificial Intelligence%') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%') AND title NOT ILIKE '%interim%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 20
    `
    return jobs as any[]
  } catch {
    return []
  }
}

// Get related jobs from other categories
async function getRelatedJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote,
        compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND role_category NOT IN ('Engineering')
        AND title NOT ILIKE '%AI%'
        AND title NOT ILIKE '%Artificial Intelligence%'
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
        AND title NOT ILIKE '%interim%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 15
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

const AI_FAQS = [
  {
    question: 'What is a Fractional Head of AI?',
    answer: 'A Fractional Head of AI (or AI Director) is an experienced AI leader who helps companies define their AI strategy, select the right tools, and implement machine learning solutions on a part-time basis. They guide organisations through the "hype" to find real business value.',
  },
  {
    question: 'How much do Fractional Head of AI jobs pay?',
    answer: 'This is one of the highest-paying fractional roles, with day rates in the UK ranging from £1,000 to £1,800+. The scarcity of experienced AI talent drives these premiums.',
  },
  {
    question: 'Why hire a Fractional Head of AI?',
    answer: 'Many companies know they need an "AI strategy" but don\'t know where to start. A full-time AI researcher or director is expensive and hard to find. A fractional leader can set the direction, oversee initial projects, and train the team for a fraction of the cost.',
  },
  {
    question: 'What skills are required?',
    answer: 'A mix of deep technical understanding (LLMs, Python, ML Ops) and strategic business acumen. You need to explain complex concepts to non-technical boards and identify profitable use cases.',
  },
]

export default async function FractionalHeadOfAiJobsUkPage() {
  const [stats, companies, jobs, relatedJobs] = await Promise.all([
    getAIStats(),
    getFeaturedCompanies(),
    getAIJobs(),
    getRelatedJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Head of AI Jobs UK | Part-Time AI Director Roles"
        description="Find part-time AI Director positions paying £1,000-£1,800/day"
        url="https://fractional.quest/fractional-head-of-ai-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80"
            alt="Fractional Head of AI Jobs UK hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-purple-900/80 to-indigo-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  AI & Future Tech
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Head of AI Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time AI Director roles for experienced technology leaders.
                Lead AI strategy and implementation for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,400</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-violet-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-cto-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  CTO Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Job Lines - Visible Immediately */}
      {jobs.length > 0 && (
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <HotJobsLines
              jobs={jobs.map(job => ({
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
              title="Latest Fractional AI Jobs"
              maxJobs={12}
              viewAllHref="#jobs"
              viewAllText="See all jobs"
            />
          </div>
        </section>
      )}

      {/* Calculator */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Earnings Calculator</h2>
          </div>
          <RoleCalculator role="cto" />
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional AI Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional AI jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-violet-600 to-indigo-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">AI</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-violet-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700">
                      View fractional AI job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Engineering"
              className="inline-flex items-center gap-2 px-8 py-4 bg-violet-700 text-white font-bold rounded-lg hover:bg-violet-800 transition-colors"
            >
              View All {stats.total}+ Fractional AI Jobs UK
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
              A Guide to <span className="text-violet-600">Fractional AI Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-violet-900"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Head of AI jobs</strong> are the newest and most sought-after roles in the UK tech market. As businesses race to adopt Artificial Intelligence, they need experienced leaders to navigate the complexity of LLMs, generative AI, and data strategy without the risk of a full-time hire.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Leading the AI Revolution</h3>
            <p>
              Every board is asking "What is our AI strategy?" A <strong className="font-semibold">Fractional AI Director</strong> answers this. They move companies from vague ambition to concrete implementation. Whether it's automating customer support, integrating Copilots for developers, or building custom models, these leaders provide the technical roadmap and ethical governance required.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-violet-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional AI leaders bridge the gap between cutting-edge research and practical business value, ensuring investments in AI pay off."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              <li><strong>AI Strategy & Roadmap:</strong> Identifying high-impact use cases and ignoring the hype.</li>
              <li><strong>Tool Selection:</strong> Choosing the right models (OpenAI, Anthropic, Open Source) and infrastructure.</li>
              <li><strong>Data Readiness:</strong> Working with data teams to ensure the necessary data quality for AI initiatives.</li>
              <li><strong>Ethics & Governance:</strong> Ensuring AI use is compliant, unbiased, and secure.</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">A Booming Market</h3>
            <p>
              The UK is positioning itself as a global AI superpower, and demand for <Link href="/fractional-head-of-ai-jobs-uk" className="text-violet-600 hover:text-violet-800 underline">fractional AI talent</Link> is outstripping supply. For experienced technologists, this is a golden era to leverage their skills across multiple high-growth companies.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Engineering" title="Latest AI News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional AI Jobs</h2>
          </div>
          <FAQ items={AI_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-violet-400">Fractional AI Role</span></h2>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking AI leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-violet-900 font-bold uppercase tracking-wider hover:bg-violet-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      {/* Related Jobs Section */}
      {relatedJobs.length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                More Fractional Jobs Across the UK
              </h2>
              <p className="text-gray-600">
                Explore other fractional executive opportunities
              </p>
            </div>
            <HotJobsLines
              jobs={relatedJobs.map(job => ({
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
              title="Related Opportunities"
              maxJobs={15}
              viewAllHref="/fractional-jobs-uk"
              viewAllText="View all UK jobs"
            />
          </div>
        </section>
      )}

      <RoleContentHub currentRole="cto" />
      {/* Mapped to CTO/Tech */}
    </div>
  )
}
