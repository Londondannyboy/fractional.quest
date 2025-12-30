import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
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

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Client Services Director Jobs UK: Part-Time CSD Roles 2025',
  description: 'Fractional Client Services Director jobs UK for experienced client success leaders. Part-time positions paying £600-£1,000/day. Browse live fractional CSD jobs and customer success opportunities across the UK.',
  keywords: 'fractional client services director jobs, fractional customer success jobs uk, part time client services, fractional head of customer success, part time cs jobs, freelance account director',
  alternates: {
    canonical: 'https://fractional.quest/fractional-client-services-director-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Client Services Director Jobs UK | Part-Time CS Roles',
    description: 'Fractional Client Services Director jobs UK - Find part-time CS positions paying £600-£1,000/day. Remote & hybrid available.',
    images: ['/images/fractional-client-services-director-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-client-services-director-jobs-uk',
  },
}

async function getCSStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Client Services%' OR title ILIKE '%Customer Success%' OR title ILIKE '%Account Director%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Client Services%' OR title ILIKE '%Customer Success%' OR title ILIKE '%Account Director%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 28, remoteCount: 12 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Client Services%' OR title ILIKE '%Customer Success%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCSJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Sales' OR title ILIKE '%Client Services%' OR title ILIKE '%Customer Success%' OR title ILIKE '%Account Director%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 20
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

const CS_FAQS = [
  {
    question: 'What is a Fractional Client Services Director?',
    answer: 'A Fractional Client Services Director (or Head of Customer Success) is an experienced leader who manages the post-sales function. They focus on client retention, onboarding, account growth, and team management on a part-time basis.',
  },
  {
    question: 'How much do Fractional CS jobs pay?',
    answer: 'Day rates in the UK generally range from £600 to £1,000. Rates are driven by the value of retention—reducing churn in a SaaS business, for example, has a massive financial impact.',
  },
  {
    question: 'Why hire a Fractional CSD?',
    answer: 'Agencies and SaaS companies often struggle with churn. A Fractional CSD brings best-practice processes (QBRs, health scores, onboarding playbooks) to professionalise the function and improve Net Dollar Retention (NDR).',
  },
  {
    question: 'Is this an agency-only role?',
    answer: 'No. While common in digital agencies, it is increasingly vital in B2B SaaS and subscription businesses where "Customer Success" is the engine of growth.',
  },
]

export default async function FractionalClientServicesDirectorJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCSStats(),
    getFeaturedCompanies(),
    getCSJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Client Services Director Jobs UK | Part-Time CS Roles"
        description="Find part-time CS & Customer Success positions paying £600-£1,000/day"
        url="https://fractional.quest/fractional-client-services-director-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
            alt="Fractional Client Services Director jobs UK hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/90 via-indigo-700/80 to-blue-800/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Customer Success
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional Client Services Director Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Client Services roles for retention experts.
                Drive account growth and customer success for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£800</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-sales-director-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Sales Jobs
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
          <RoleCalculator role="cmo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional Client Services Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CS jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-indigo-600 to-blue-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CS</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                      View fractional CS job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Sales"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-700 text-white font-bold rounded-lg hover:bg-indigo-800 transition-colors"
            >
              View All {stats.total}+ Fractional CS Jobs UK
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
              A Guide to <span className="text-indigo-600">Fractional Client Services Jobs</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-700"></div>
          </div>
          
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional Client Services Director jobs</strong> are about one thing: retention. In a subscription economy, keeping customers is just as important as finding them. These part-time roles provide the strategic oversight to turn customer success into a growth engine.
            </p>
            
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Protecting Revenue</h3>
            <p>
              Churn kills growth. A <strong className="font-semibold">Fractional CS Director</strong> diagnoses the root causes of churn—be it poor onboarding, lack of product adoption, or weak relationship management—and fixes them. They implement the health scores and playbooks that alert the team before a client walks away.
            </p>

             <div className="bg-gray-50 p-8 my-10 border-l-4 border-indigo-700">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional CS leaders shift the focus from reactive firefighting to proactive value delivery, securing long-term revenue."</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Upsell & Cross-sell</h3>
            <p>
              It's not just about defence. A good CS function is a revenue generator. Fractional directors train account managers to spot upsell opportunities and turn satisfied customers into advocates. They align CS with Sales to create a seamless customer journey.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Talent Gap</h3>
            <p>
              Experienced Customer Success leadership is scarce in the UK. By hiring a <Link href="/fractional-client-services-director-jobs-uk" className="text-indigo-600 hover:text-indigo-800 underline">fractional CS leader</Link>, companies can access top-tier talent that would otherwise be out of reach, ensuring their most valuable asset—their customers—are in safe hands.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Sales" title="Latest CS News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CS Jobs</h2>
          </div>
          <FAQ items={CS_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-indigo-100">Fractional CS Role</span></h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking retention experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-indigo-800 font-bold uppercase tracking-wider hover:bg-indigo-700 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="cmo" /> 
      {/* Mapped to CMO/Sales */}
    </div>
  )
}
