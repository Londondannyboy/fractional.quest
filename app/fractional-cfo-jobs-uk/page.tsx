import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { createDbQuery } from '@/lib/db'
import { FAQ, CFO_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleContentHub } from '@/components/RoleContentHub'
import { RoleNews } from '@/components/RoleNews'
import { FracSection } from '@/components/FracSection'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { JobListingSchema } from '@/components/JobPostingSchema'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { ExpertProfile, ExpertProfileSchema } from '@/components/ExpertProfile'
import { CaseStudy, CaseStudySchema } from '@/components/CaseStudy'
import { LazyYouTube } from '@/components/LazyYouTube'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

// Target keyword: "fractional cfo jobs uk"
export const metadata: Metadata = {
  title: 'Fractional CFO Jobs UK 💰 Finance Director Roles',
  description: '💼 Fractional CFO jobs UK - Part-time CFO & finance director positions paying £800-£1,500/day. Browse live roles in London, Manchester & remote. Apply direct to employers.',
  keywords: 'fractional cfo jobs, fractional cfo jobs uk, fractional finance director, fractional finance director jobs, fractional fd jobs, part time cfo jobs, interim cfo jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CFO Jobs UK 💰 Finance Director Roles',
    description: '💼 Fractional CFO jobs UK - Part-time CFO & finance director positions paying £800-£1,500/day. London, Manchester & remote.',
    images: ['/images/fractional-cfo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cfo-jobs-uk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CFO Jobs UK 💰 Finance Director Roles',
    description: '💼 Fractional CFO jobs UK - £800-£1,500/day. Browse live roles.',
  },
}

async function getFinanceStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Finance' AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Finance' AND (is_remote = true OR workplace_type = 'Remote') AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 45, remoteCount: 18 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Finance' AND company_name IS NOT NULL
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - renders in initial HTML for crawlers
async function getFinanceJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city,
        is_remote, workplace_type, compensation, role_category,
        skills_required, posted_date, hours_per_week, description_snippet,
        salary_min, salary_max, salary_currency
      FROM jobs
      WHERE is_active = true AND role_category = 'Finance'
        AND title NOT ILIKE '%interim%'
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 20
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

// Get related jobs from OTHER C-suite roles for cross-linking
async function getRelatedJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND role_category IS NOT NULL
        AND role_category != 'Finance'
        AND title NOT ILIKE '%interim%'
        AND (country ILIKE '%UK%' OR country ILIKE '%United Kingdom%' OR location ILIKE '%UK%' OR location ILIKE '%London%' OR location ILIKE '%Manchester%' OR location ILIKE '%Edinburgh%' OR location ILIKE '%Birmingham%' OR location ILIKE '%Bristol%' OR location ILIKE '%Leeds%' OR location ILIKE '%Glasgow%' OR location ILIKE '%England%' OR location ILIKE '%Scotland%' OR location ILIKE '%Wales%')
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 15
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function FractionalCfoJobsUkPage() {
  const [stats, companies, jobs, relatedJobs] = await Promise.all([
    getFinanceStats(),
    getFeaturedCompanies(),
    getFinanceJobs(),
    getRelatedJobs()
  ])

  // Use most recent job's posted date for SEO freshness
  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date
    ? new Date(mostRecentJob.posted_date)
    : new Date()

  return (
    <div className="min-h-screen bg-white">
      {/* WebPage Schema with dateModified for SEO freshness */}
      <WebPageSchema
        title="Fractional CFO Jobs UK | Part-Time Finance Director & Interim Roles"
        description="Find fractional CFO, fractional finance director, part-time CFO and interim CFO positions paying £800-£1,500/day"
        url="https://fractional.quest/fractional-cfo-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      {/* FAQ Schema for rich snippets */}
      <FAQPageSchema faqs={CFO_FAQS} />

      {/* Video Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "What is a Fractional CFO? Role Explained",
            "description": "Learn what a fractional CFO does and how fractional finance directors help UK businesses. Discover fractional CFO jobs, typical responsibilities, day rates, and how part-time CFOs provide strategic financial leadership to startups, scale-ups, and SMEs.",
            "thumbnailUrl": "https://img.youtube.com/vi/4TJhPLGFz4E/maxresdefault.jpg",
            "uploadDate": "2024-03-15",
            "duration": "PT8M30S",
            "contentUrl": "https://www.youtube.com/watch?v=4TJhPLGFz4E",
            "embedUrl": "https://www.youtube.com/embed/4TJhPLGFz4E",
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
            "name": "How to Become a Fractional CFO",
            "description": "Step-by-step guide on how to become a fractional CFO or fractional finance director in the UK. Learn about qualifications needed, how to find fractional CFO jobs, setting your day rate, and building a successful portfolio career in finance leadership.",
            "thumbnailUrl": "https://img.youtube.com/vi/cR2sZ0u7JKg/maxresdefault.jpg",
            "uploadDate": "2024-02-20",
            "duration": "PT12M15S",
            "contentUrl": "https://www.youtube.com/watch?v=cR2sZ0u7JKg",
            "embedUrl": "https://www.youtube.com/embed/cR2sZ0u7JKg",
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

      {/* JobPosting Schema for SEO */}
      <JobListingSchema
        jobs={jobs}
        pageUrl="https://fractional.quest/fractional-cfo-jobs-uk"
      />

      {/* Hero with Cleaner Look */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fractional CFO jobs UK - finance director reviewing reports for part-time role"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        </div>
        <div className="container-content relative z-10">
            <BreadcrumbsLight
              items={getRoleBreadcrumbs('cfo', 'jobs')}
              className="mb-8"
            />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    Finance Leadership
                  </span>
                  <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
                </div>
                <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Fractional CFO Jobs UK
                </h1>
                <p className="text-xl text-white leading-relaxed max-w-2xl mb-8">
                  Fractional CFO and fractional finance director opportunities for experienced finance leaders.
                  Part-time CFO roles paying £800-£1,500/day. Interim CFO and fractional FD jobs across London, Manchester and remote UK positions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#jobs" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Browse Jobs
                  </Link>
                  <Link href="/fractional-cfo-salary" className="px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                    Salary Guide
                  </Link>
                </div>
              </div>

              {/* Frac Section Integration */}
              <div className="hidden lg:block lg:w-80">
                <FracSection title="Talk with Frac about CFO roles" />
              </div>
            </div>
        </div>
      </section>

      {/* Stats Bar - Clean */}
      <section className="bg-gray-50 py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.total}+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Live Roles</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">£1,050</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Avg Day Rate</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">{stats.remoteCount}</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Remote Roles</div>
            </div>
            <div>
              <div className="font-editorial text-3xl font-bold text-gray-900">2-3 days</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mt-1">Avg Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Jobs Lines - Latest CFO Jobs */}
      {(jobs as any[]).length > 0 && (
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <HotJobsLines
              jobs={(jobs as any[]).map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                is_remote: job.is_remote,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date
              }))}
              title="Latest CFO Jobs"
              maxJobs={12}
              viewAllHref="#jobs"
              viewAllText="See all jobs"
            />
          </div>
        </section>
      )}

      {/* JOBS SECTION - Server-rendered for SEO */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Fractional CFO & Finance Director Jobs UK</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CFO jobs in the UK</p>
          </div>

          {/* Server-rendered job grid - visible to search engines */}
          <ServerJobGrid
            jobs={jobs}
            roleCategory="Finance"
            ctaLink="/fractional-jobs-uk?department=Finance"
            ctaText={`View All ${stats.total}+ Fractional CFO Jobs UK`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Earnings</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">How Much Can You Earn?</h2>
          </div>
          <RoleCalculator role="cfo" />
        </div>
      </section>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Companies Seeking CFOs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-gray-900 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">The Guide</span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br /><span className="text-blue-600">Fractional CFO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-gray-900"></div>
          </div>
          <figure className="mb-16 -mx-6 lg:-mx-16 rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fractional CFO and finance director jobs UK - part-time and interim CFO opportunities" className="w-full h-80 md:h-96 object-cover" />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 bg-white py-2">Finance leaders across the UK are embracing fractional work</figcaption>
          </figure>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CFO jobs</strong> represent the new frontier of finance leadership in the UK. Whether you call it a <strong>fractional finance director</strong>, <strong>part-time CFO</strong>, or <strong>fractional FD</strong>, these positions allow experienced finance leaders to provide strategic guidance to multiple companies simultaneously—delivering world-class expertise at a fraction of the cost.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">The Rise of Fractional CFO Jobs UK</h3>
            <p>The UK market for <strong>fractional CFO jobs</strong> has grown by over 180% in the past three years, with demand for <strong>fractional finance director</strong> roles growing even faster (+260% YoY). According to <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD research on flexible working trends</a>, senior executive roles are increasingly embracing part-time and portfolio models.</p>
            <p>This surge reflects a fundamental shift in how companies access senior finance talent. <a href="https://www.gov.uk/business-finance-support" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Startups, scale-ups, and SMEs</a> need experienced financial leadership but cannot justify a full-time CFO salary of £150,000-£300,000. The <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a> shows self-employment in professional services has grown steadily, with finance executives leading the shift to flexible working.</p>

            {/* Video 1: What is a Fractional CFO - Lazy loaded for performance */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What is a Fractional CFO?</h4>
              <LazyYouTube
                videoId="4TJhPLGFz4E"
                title="What is a Fractional CFO? Role Explained"
              />
              <p className="text-gray-500 text-sm mt-3">Learn how fractional CFOs provide strategic finance leadership to UK businesses</p>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Fractional CFO vs Finance Director: UK Terminology</h3>
            <p>In the UK, the terms <strong>CFO</strong> and <strong>Finance Director (FD)</strong> are often used interchangeably, though there are subtle differences. Traditionally, UK companies used "Finance Director" while "CFO" was more common in US-influenced or larger organisations. Today, both terms appear in <strong>fractional CFO jobs</strong> and <strong>fractional finance director jobs</strong>.</p>
            <p>When searching for opportunities, consider all variations: <strong>fractional CFO</strong>, <strong>fractional FD</strong>, <strong>fractional finance director</strong>, <strong>part-time CFO</strong>, and <strong>interim CFO</strong>. Many companies use these terms interchangeably when advertising roles, so casting a wide net increases your chances of finding the right position.</p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-gray-900 rounded-r-lg">
              <p className="text-xl font-serif italic text-gray-900 mb-0">"Companies access CFO expertise for £2,000-£5,000/week instead of £12,500+ monthly for full-time."</p>
            </div>
            
            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Why Fractional & Interim CFO Jobs Are Booming</h3>
            <ul className="space-y-3">
              <li><strong>Cost efficiency:</strong> Senior expertise at a fraction of the cost—<a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank research</a> shows SMEs increasingly favour flexible finance leadership</li>
              <li><strong>Flexibility:</strong> Scale finance leadership based on current needs, aligned with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK flexible working legislation</a></li>
              <li><strong>Quality talent:</strong> Access CFOs with diverse, multi-industry experience</li>
              <li><strong>Speed to impact:</strong> No lengthy recruitment—<a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> research shows fractional executives start adding value within days</li>
              <li><strong>PE/VC influence:</strong> <a href="https://www.bvca.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA research</a> confirms investors increasingly mandate fractional CFOs across portfolio companies</li>
            </ul>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Types of Fractional CFO & Finance Director Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Fractional Startup CFO', desc: 'Series A-C fundraising & investor relations', rate: '£1,000-£1,400/day' },
                { title: 'Fractional Finance Director', desc: 'Strategic FD for SMEs and growth companies', rate: '£900-£1,200/day' },
                { title: 'Interim CFO', desc: 'Cover CFO vacancy or lead transformation projects', rate: '£1,100-£1,500/day' },
                { title: 'Part-Time CFO', desc: 'Ongoing finance leadership 2-3 days per week', rate: '£950-£1,300/day' },
                { title: 'Fractional FD', desc: 'Part-time finance director for growing businesses', rate: '£850-£1,100/day' },
                { title: 'PE Portfolio CFO', desc: 'Financial transformation & value creation', rate: '£1,100-£1,500/day' },
                { title: 'Scale-up CFO', desc: 'Professionalising finance function', rate: '£950-£1,300/day' },
                { title: 'Exit-ready CFO', desc: 'Due diligence & IPO preparation', rate: '£1,100-£1,500/day' },
              ].map((type, i) => (
                <div key={i} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-blue-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Fractional CFO Job Description</h3>
            <p>
              A typical <strong>fractional CFO job description</strong> includes strategic financial leadership on a part-time basis. The <strong>fractional chief financial officer</strong> role encompasses financial strategy, cash flow management, fundraising support, investor relations, and board-level reporting. Unlike a <strong>fractional finance manager</strong> who handles day-to-day operations, a fractional CFO focuses on strategic financial direction and high-level decision making.
            </p>
            <p>
              Key responsibilities in a <strong>fractional CFO job description</strong> typically include: developing financial models and forecasts, managing relationships with investors and lenders, overseeing financial reporting and compliance, building and mentoring finance teams, and providing strategic guidance to the CEO and board. Most <strong>fractional CFO opportunities</strong> require 2-3 days per week commitment.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Requirements for Fractional CFO Jobs</h3>
            <p>
              Most <strong>fractional CFO jobs</strong> and <strong>fractional finance director</strong> opportunities require extensive qualifications and experience. Professional bodies like <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICAEW</a>, <a href="https://www.accaglobal.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ACCA</a>, and <a href="https://www.cimaglobal.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIMA</a> provide the professional credibility essential for <strong>fractional FD</strong> roles.
            </p>
            <p>
              Typical requirements for <strong>fractional CFO jobs UK</strong> include: ACA, ACCA or CIMA qualification with 10+ years post-qualification experience, previous CFO or Finance Director experience (ideally in similar-sized companies), sector expertise relevant to target clients, strong communication skills for board-level interactions, and experience with fundraising, M&A, or exit processes.
            </p>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">How to Become a Fractional CFO</h3>
            <p>
              Transitioning to <strong>fractional CFO jobs</strong> requires a combination of experience, positioning, and network building. Most successful <strong>fractional finance directors</strong> follow a similar path:
            </p>
            <ol className="list-decimal list-inside space-y-2 my-4">
              <li><strong>Build your track record:</strong> 10-15 years as a finance leader, ideally with CFO or FD experience</li>
              <li><strong>Develop a niche:</strong> Specialise in a sector (SaaS, e-commerce, manufacturing) or situation (fundraising, turnaround, exit)</li>
              <li><strong>Set up your business:</strong> Register as a limited company, get professional indemnity insurance, establish your day rate</li>
              <li><strong>Build your network:</strong> Connect with investors, advisors, and business owners who hire <strong>fractional CFOs</strong></li>
              <li><strong>Land your first client:</strong> Often comes from your existing network or through platforms like Fractional Quest</li>
            </ol>
            <p>
              The growing demand for <strong>fractional finance director jobs</strong> means the transition is becoming more straightforward, with many finance leaders successfully building portfolio careers within 6-12 months of starting.
            </p>

            {/* Video 2: How to Become a Fractional CFO - Lazy loaded for performance */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">How to Become a Fractional CFO</h4>
              <LazyYouTube
                videoId="cR2sZ0u7JKg"
                title="How to Become a Fractional CFO"
              />
              <p className="text-gray-500 text-sm mt-3">Step-by-step guide to building a fractional CFO career in the UK</p>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Fractional CFO Jobs by Location</h3>
            <p>
              <strong>Fractional CFO jobs</strong> are available across the UK, with the highest concentration in major business hubs. Here's what to expect in different locations:
            </p>
            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">London</h4>
                <p className="text-gray-600 text-sm mb-2">Highest volume of <strong>fractional CFO jobs London</strong>. Tech, fintech, and PE-backed companies dominate. Premium rates of £1,000-£1,500/day.</p>
                <Link href="/fractional-jobs-london" className="text-blue-600 text-sm font-medium hover:underline">London Roles →</Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Manchester</h4>
                <p className="text-gray-600 text-sm mb-2">Growing hub for <strong>fractional finance director</strong> roles. Strong in digital, manufacturing, and professional services. Rates £800-£1,200/day.</p>
                <Link href="/fractional-jobs-uk?location=Manchester" className="text-blue-600 text-sm font-medium hover:underline">Manchester Roles →</Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Remote UK</h4>
                <p className="text-gray-600 text-sm mb-2"><strong>Remote fractional CFO jobs</strong> have grown 200%+ since 2020. Most roles offer hybrid flexibility with occasional in-person board meetings.</p>
                <Link href="/remote" className="text-blue-600 text-sm font-medium hover:underline">Remote Roles →</Link>
              </div>
            </div>

            <h3 className="font-editorial text-2xl font-bold text-gray-900 mt-12 mb-4">Fractional CFO Salary & Rates UK</h3>
            <p>
              <strong>Fractional CFO salary</strong> in the UK varies significantly based on experience, sector, and engagement type. Unlike permanent roles, <strong>fractional finance director</strong> positions are typically quoted as day rates rather than annual salaries.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-6 not-prose">
              <h4 className="font-bold text-gray-900 mb-4">Typical Fractional CFO Day Rates (UK 2025)</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Entry-level fractional FD:</strong> £600-£850/day</li>
                <li><strong>Mid-level fractional CFO:</strong> £850-£1,100/day</li>
                <li><strong>Senior fractional CFO:</strong> £1,100-£1,400/day</li>
                <li><strong>PE/VC specialist CFO:</strong> £1,300-£1,800/day</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">Based on 2-3 days per week engagement, <strong>fractional CFO</strong> annual earnings typically range from £80,000 to £200,000+ depending on client load.</p>
            </div>
            <p>
              For a detailed breakdown of earning potential, try our <Link href="#calculator" className="text-blue-600 hover:underline">Fractional CFO Rate Calculator</Link> above, or read our comprehensive <Link href="/fractional-cfo-salary" className="text-blue-600 hover:underline">Fractional CFO Salary Guide</Link>.
            </p>
          </article>
        </div>
      </section>

      {/* Part-Time, Interim CFO & Finance Director Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Related Searches</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Part-Time CFO, Interim CFO & Finance Director Jobs</h2>
            <p className="text-xl text-gray-600 mt-4">All the terms UK companies use when hiring fractional finance leadership</p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              <strong>Part-time CFO</strong>, <strong>interim CFO</strong>, and <strong>fractional finance director</strong> roles are closely related—all describe experienced finance leaders who work with companies on a non-full-time basis. While <strong>interim CFO jobs</strong> typically involve covering a vacancy or leading a specific project, <strong>fractional CFO</strong> and <strong>fractional FD</strong> roles are ongoing part-time engagements.
            </p>

            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <p className="text-gray-900 font-medium mb-3">Part-time CFO opportunities</p>
                <Link href="/part-time-cfo" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900">
                  Part-Time CFO Guide →
                </Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <p className="text-gray-900 font-medium mb-3">Interim CFO for projects</p>
                <Link href="/interim-cfo" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900">
                  Interim CFO Guide →
                </Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                <p className="text-gray-900 font-medium mb-3">Fractional Finance Director</p>
                <Link href="/fractional-finance-director" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900">
                  Fractional FD Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">UK Tax</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As a fractional CFO, your IR35 status significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={1050} />
        </div>
      </section>

      {/* Finance News */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Finance" title="Latest CFO & Finance News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">FAQ</span>
            <h2 className="font-editorial text-3xl md:text-4xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <FAQ items={CFO_FAQS} title="" />
        </div>
      </section>

      {/* E-E-A-T: Expert Profile - Establishes authority */}
      <ExpertProfile />
      <ExpertProfileSchema />

      {/* E-E-A-T: Case Study - Demonstrates real experience */}
      <CaseStudy />
      <CaseStudySchema />

      {/* Related C-Suite Jobs */}
      {(relatedJobs as any[]).length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Other C-Suite Opportunities
              </h2>
              <p className="text-gray-600">
                Explore other executive roles across the UK.
              </p>
            </div>
            <HotJobsLines
              jobs={(relatedJobs as any[]).map(job => ({
                id: job.id,
                slug: job.slug,
                title: job.title,
                company_name: job.company_name,
                location: job.location,
                is_remote: job.is_remote,
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date
              }))}
              title="Related Executive Roles"
              maxJobs={15}
              viewAllHref="/fractional-jobs-uk"
              viewAllText="View all UK jobs"
            />
          </div>
        </section>
      )}

      {/* CTA - Fixed Colors */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Ready?</span>
          <h2 className="font-editorial text-4xl md:text-5xl font-bold mb-6 leading-tight">Find Your Next<br /><span className="text-blue-400">Fractional CFO Role</span></h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking fractional CFO, finance director, or interim FD leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-gray-900 font-bold rounded-lg uppercase tracking-wider hover:bg-gray-100 transition-colors">Create Profile</Link>
            <Link href="/fractional-cfo-salary" className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors">Salary Guide</Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/fractional-jobs-london" className="text-gray-300 hover:text-white transition-colors">London Jobs</Link>
            <span className="text-gray-600">•</span>
            <Link href="/fractional-jobs-uk" className="text-gray-300 hover:text-white transition-colors">All UK Jobs</Link>
            <span className="text-gray-600">•</span>
            <Link href="/fractional-cto-jobs-uk" className="text-gray-300 hover:text-white transition-colors">CTO Jobs</Link>
            <span className="text-gray-600">•</span>
            <Link href="/fractional-cmo-jobs-uk" className="text-gray-300 hover:text-white transition-colors">CMO Jobs</Link>
          </div>
        </div>
      </section>

      {/* Content Hub */}
      <RoleContentHub currentRole="cfo" />
    </div>
  )
}
