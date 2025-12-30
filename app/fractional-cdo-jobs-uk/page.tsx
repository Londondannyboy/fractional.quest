import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { ExpertProfile, ExpertProfileSchema } from '@/components/ExpertProfile'
import { CaseStudy, CaseStudySchema } from '@/components/CaseStudy'
import { RoleCalculator } from '@/components/RoleCalculator'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleNews } from '@/components/RoleNews'
import { RoleContentHub } from '@/components/RoleContentHub'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { LazyYouTube } from '@/components/LazyYouTube'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CDO Jobs UK: Chief Data Officer Roles 2025',
  description: 'Fractional CDO jobs UK for experienced data leaders. Part-time Chief Data Officer positions paying £900-£1,500/day. Browse live fractional CDO jobs, interim CDO roles, and data leadership opportunities across the UK.',
  keywords: 'fractional cdo jobs, fractional cdo jobs uk, part time cdo, part-time chief data officer, cdo part time, fractional cdo opportunities, fractional data jobs, head of data part time, interim cdo jobs, data officer salary uk, chief data officer jobs uk, fractional data leadership',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cdo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CDO Jobs UK | Part-Time Chief Data Officer Roles 2025',
    description: 'Fractional CDO jobs UK - Find part-time CDO positions paying £900-£1,500/day. Remote & hybrid available.',
    images: ['/images/fractional-cdo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cdo-jobs-uk',
  },
}

async function getCDOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%CDO%' OR title ILIKE '%Chief Data%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%CDO%' OR title ILIKE '%Chief Data%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 18, remoteCount: 8 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%CDO%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCDOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Data' OR title ILIKE '%CDO%' OR title ILIKE '%Chief Data%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 20
    `
    return jobs as any[]
  } catch {
    return []
  }
}

// Get related jobs from OTHER roles for cross-promotion
async function getRelatedJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND role_category IS NOT NULL
        AND role_category != 'Data'
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

const CDO_FAQS = [
  {
    question: 'What is a Fractional CDO?',
    answer: 'A Fractional CDO (Chief Data Officer) is an experienced data executive who works with companies on a part-time basis, typically 1-3 days per week. They define data strategy, governance, and architecture, enabling organisations to become data-driven and AI-ready without the £180,000-£280,000+ cost of a full-time hire.',
  },
  {
    question: 'How much do Fractional CDO jobs pay in the UK?',
    answer: 'Fractional CDO day rates in the UK range from £900 to £1,500 per day, making them among the highest-paid fractional executive roles. London-based CDOs typically command £1,100-£1,500/day, while regional roles average £900-£1,300/day. Annual earnings for fractional CDOs working with multiple clients can reach £200,000-£350,000+.',
  },
  {
    question: 'Why hire a Fractional CDO?',
    answer: 'Companies hire Fractional CDOs to: unlock the value of their data assets, implement modern data stacks (Snowflake, Databricks, BigQuery), ensure GDPR and regulatory compliance, prepare for AI/ML initiatives, establish data governance frameworks, and bridge the gap between technical teams and business leadership.',
  },
  {
    question: 'What industries need Fractional CDOs?',
    answer: 'FinTech, Insurance, Healthcare, and E-commerce are the primary employers of Fractional CDOs due to the volume and sensitivity of data they handle. Private equity portfolio companies, media organisations, and any company preparing for AI adoption are also key clients.',
  },
  {
    question: 'What qualifications do I need for Fractional CDO jobs?',
    answer: 'Successful Fractional CDO candidates typically have: 15+ years of data experience with 5+ years in CDO, VP Data, or Head of Analytics roles; proven track record implementing data platforms and governance frameworks; expertise in cloud data platforms (Snowflake, Databricks, BigQuery); strong understanding of GDPR and data ethics; and board-level communication skills.',
  },
  {
    question: 'How is a Fractional CDO different from a Data Consultant?',
    answer: 'A Fractional CDO operates as an embedded executive with ongoing accountability for data strategy and outcomes. They attend board meetings, manage data teams, and own the data roadmap. A Data Consultant typically provides project-based advice without executive responsibility. Fractional CDOs have skin in the game and are invested in long-term success.',
  },
]

export default async function FractionalCdoJobsUkPage() {
  const [stats, companies, jobs, relatedJobs] = await Promise.all([
    getCDOStats(),
    getFeaturedCompanies(),
    getCDOJobs(),
    getRelatedJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CDO Jobs UK | Part-Time Chief Data Officer Roles 2025"
        description="Find part-time CDO positions paying £900-£1,500/day"
        url="https://fractional.quest/fractional-cdo-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <FAQPageSchema faqs={CDO_FAQS} />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cdo-jobs-uk" />
      {/* Video Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "What is a Chief Data Officer (CDO)?",
            "description": "Learn what a Chief Data Officer does and how fractional CDOs help UK businesses unlock data value. This video explains the CDO role, data governance, modern data platforms, and AI readiness. Essential viewing for anyone exploring fractional CDO jobs UK or data leadership opportunities.",
            "thumbnailUrl": "https://img.youtube.com/vi/ZTqk5FGM3Xk/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=ZTqk5FGM3Xk",
            "embedUrl": "https://www.youtube.com/embed/ZTqk5FGM3Xk",
            "uploadDate": "2023-03-20",
            "duration": "PT11M30S",
            "publisher": {
              "@type": "Organization",
              "name": "Fractional Quest",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fractional.quest/logo.png"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Building a Modern Data Stack",
            "description": "A comprehensive guide to building a modern data stack with Snowflake, Databricks, and cloud platforms. Learn how fractional CDOs implement data infrastructure, enable analytics, and prepare UK businesses for AI adoption. Essential for understanding fractional CDO jobs UK responsibilities.",
            "thumbnailUrl": "https://img.youtube.com/vi/OU5rMdyQ4dA/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=OU5rMdyQ4dA",
            "embedUrl": "https://www.youtube.com/embed/OU5rMdyQ4dA",
            "uploadDate": "2023-08-15",
            "duration": "PT15M20S",
            "publisher": {
              "@type": "Organization",
              "name": "Fractional Quest",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fractional.quest/logo.png"
              }
            }
          })
        }}
      />
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            alt="Fractional CDO jobs UK hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/80 to-blue-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cdo', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Data Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CDO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Data Officer roles for experienced data leaders.
                Lead data strategy and AI readiness for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,200</div>
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
                <Link href="/fractional-head-of-ai-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  AI Jobs
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
          <RoleCalculator role="cdo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CDO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CDO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-teal-600 to-blue-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CDO</div>
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
                      View fractional CDO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Data"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors"
            >
              View All {stats.total}+ Fractional CDO Jobs UK
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
              Everything You Need to Know About<br />
              <span className="text-teal-600">Fractional CDO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-teal-900"></div>
          </div>

          {/* SEO Image */}
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="Fractional CDO jobs UK - Chief Data Officer leading data strategy"
              title="Fractional CDO Jobs UK - Part-Time Chief Data Officer Roles"
              className="w-full h-80 md:h-96 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
              Fractional CDO jobs UK: Data leaders across the UK are embracing fractional work
            </figcaption>
          </figure>

          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CDO jobs</strong> are among the fastest-growing executive roles in the UK. Part-time Chief Data Officer positions where seasoned data executives turn raw information into strategic assets—implementing modern data stacks, establishing governance frameworks, and preparing organisations for the AI revolution. According to <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 underline">CIPD research</a>, senior data leadership is increasingly embracing flexible models.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional CDO Jobs UK</h3>
            <p>
              The UK market for <strong>fractional CDO jobs</strong> has exploded, driven by the convergence of AI adoption, regulatory complexity, and the value of data-driven decision making. According to <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 underline">BVCA research</a>, private equity firms increasingly mandate data leadership across portfolio companies. The cost of a full-time CDO (£180,000-£280,000+) is prohibitive for most mid-market companies, yet the need for data strategy has never been more acute.
            </p>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-teal-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"The Fractional CDO is the architect of the AI-ready enterprise, ensuring data is clean, compliant, and accessible across the organisation."</p>
            </div>

            {/* Video 1: What is a CDO */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What is a Chief Data Officer?</h4>
              <LazyYouTube videoId="ZTqk5FGM3Xk" title="What is a Chief Data Officer (CDO)?" />
              <p className="text-gray-500 text-sm mt-3">Learn how fractional CDOs drive data strategy and AI readiness</p>
            </div>

            <p>
              UK companies at Series A-C are primary drivers of demand. These organisations have accumulated significant data but lack the leadership to leverage it strategically. A fractional CDO provides the expertise to implement modern data platforms, establish single sources of truth, ensure <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 underline">GDPR compliance</a>, and prepare for AI/ML initiatives—all at a fraction of the cost.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional CDO Jobs Are Booming</h3>
            <ul className="space-y-3">
              <li><strong>AI readiness:</strong> Companies preparing for AI/ML adoption need clean, governed data foundations</li>
              <li><strong>Regulatory pressure:</strong> <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 underline">ICO enforcement</a> and GDPR requirements demand senior data governance</li>
              <li><strong>PE/VC expectations:</strong> Investors require demonstrable data maturity and analytics capabilities</li>
              <li><strong>Modern data stacks:</strong> Implementing Snowflake, Databricks, BigQuery requires executive-level architecture decisions</li>
              <li><strong>Analytics transformation:</strong> Moving from Excel-based reporting to self-service BI and data democratisation</li>
              <li><strong>Data monetisation:</strong> Exploring opportunities to generate revenue from data assets</li>
            </ul>

            <div className="bg-teal-50 p-6 border border-teal-200 rounded-lg my-8 not-prose">
              <p className="text-teal-800 font-medium mb-3">Looking to hire a Fractional CDO instead?</p>
              <Link href="/fractional-cdo-services" className="inline-flex items-center text-teal-700 font-bold hover:text-teal-900">
                View Fractional CDO Services →
              </Link>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional CDO Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'FinTech / Financial Services CDO', desc: 'FCA data requirements, real-time analytics', rate: '£1,200-£1,500/day' },
                { title: 'HealthTech CDO', desc: 'NHS data integration, clinical analytics', rate: '£1,100-£1,400/day' },
                { title: 'PE Portfolio CDO', desc: 'Multi-company data strategy, value creation', rate: '£1,100-£1,400/day' },
                { title: 'Scale-up CDO', desc: 'Building data function from scratch', rate: '£900-£1,200/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-teal-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            {/* Video 2: Modern Data Stack */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Building a Modern Data Stack</h4>
              <LazyYouTube videoId="OU5rMdyQ4dA" title="Building a Modern Data Stack" />
              <p className="text-gray-500 text-sm mt-3">How fractional CDOs implement Snowflake, Databricks, and modern analytics</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CDO Jobs by Location</h3>
            <p>
              London dominates with approximately 60% of fractional CDO opportunities, driven by the capital's concentration of FinTech, media, and data-intensive scale-ups. However, remote-first culture has expanded access—experienced CDOs based anywhere in the UK can serve multiple clients. Manchester, Edinburgh, and Cambridge tech ecosystems generate consistent demand.
            </p>
            <ul className="space-y-2">
              <li><strong>London (City, Shoreditch, Canary Wharf):</strong> £1,100-£1,500/day</li>
              <li><strong>Manchester & Leeds:</strong> £900-£1,200/day</li>
              <li><strong>Edinburgh & Glasgow:</strong> £900-£1,200/day</li>
              <li><strong>Remote UK (multi-client):</strong> £950-£1,300/day</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional CDO Jobs</h3>
            <ul className="space-y-2">
              <li>15+ years data experience, with 5+ years in CDO, VP Data, or Head of Analytics roles</li>
              <li>Proven track record implementing modern data platforms (Snowflake, Databricks, BigQuery)</li>
              <li>Deep understanding of <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 underline">GDPR and data protection requirements</a></li>
              <li>Experience with BI tools: Looker, Tableau, Power BI</li>
              <li>Understanding of <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 underline">IR35 legislation</a> and limited company structure</li>
              <li>Board-level communication skills and experience presenting to investors</li>
              <li>Knowledge of AI/ML fundamentals and data science workflows</li>
            </ul>
          </article>
        </div>
      </section>

      {/* IR35 Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              UK IR35 Calculator for Fractional CDO Jobs
            </h2>
            <p className="text-gray-600 mt-4">
              As a fractional CDO in the UK, your IR35 status significantly impacts your take-home pay
            </p>
          </div>
          <IR35Calculator defaultDayRate={1200} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Engineering" title="Latest Data & Tech News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CDO Jobs</h2>
          </div>
          <FAQ items={CDO_FAQS} title="" />
        </div>
      </section>

      {/* E-E-A-T: Expert Profile - Establishes authority */}
      <ExpertProfile />
      <ExpertProfileSchema />

      {/* E-E-A-T: Case Study - Demonstrates real experience */}
      <CaseStudy />
      <CaseStudySchema />

      {/* CTA */}
      <section className="py-20 md:py-28 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-teal-400">Fractional CDO Role</span></h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking data leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-teal-900 font-bold uppercase tracking-wider hover:bg-teal-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>
      
      <RoleContentHub currentRole="cto" /> 
    </div>
  )
}
