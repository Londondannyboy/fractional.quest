import { Metadata } from 'next'
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
  title: 'Fractional CPO Jobs UK: Chief Product Officer Roles 2025',
  description: 'Fractional CPO jobs UK for experienced product leaders. Part-time Chief Product Officer positions paying £800-£1,300/day. Browse live fractional CPO jobs, interim CPO roles, and product leadership opportunities across the UK.',
  keywords: 'fractional cpo jobs, fractional cpo jobs uk, part time cpo, part-time chief product officer, cpo part time, cpo jobs uk, cpo jobs, interim cpo, fractional cpo, chief product officer jobs, head of product part time, remote cpo jobs, cpo salary uk, fractional product leadership, vp product jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cpo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CPO Jobs UK | Part-Time Chief Product Officer Roles 2025',
    description: 'Fractional CPO jobs UK - Find part-time CPO positions paying £800-£1,300/day. Browse CPO jobs now.',
    images: ['/images/fractional-cpo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cpo-jobs-uk',
  },
}

async function getCPOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%CPO%' OR title ILIKE '%Chief Product%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Product' OR title ILIKE '%CPO%' OR title ILIKE '%Chief Product%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 24, remoteCount: 12 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Product' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCPOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Product'
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

const CPO_FAQS = [
  {
    question: 'What is a Fractional CPO?',
    answer: 'A Fractional CPO (Chief Product Officer) is an experienced product leader who works with companies on a part-time basis, typically 1-3 days per week. They define product vision and strategy, build roadmaps, mentor product teams, and ensure product-market fit—all without the £150,000-£250,000+ cost of a full-time executive. Fractional CPOs are particularly valuable for startups transitioning from founder-led product to professional product management.',
  },
  {
    question: 'How much do Fractional CPO jobs pay in the UK?',
    answer: 'Fractional CPO day rates in the UK range from £800 to £1,300 per day, with London-based roles commanding £1,000-£1,300/day and regional positions averaging £800-£1,100/day. Annual earnings for fractional CPOs working with multiple clients can reach £150,000-£300,000+. Rates vary based on company stage, product complexity, and sector.',
  },
  {
    question: 'What types of companies hire Fractional CPOs?',
    answer: 'Early-stage startups (Seed to Series A) hire Fractional CPOs to establish product strategy and discovery processes. Scale-ups (Series B+) use them to professionalise product functions, implement frameworks, and mentor junior PMs. B2B SaaS, FinTech, and HealthTech are the highest-demand sectors for fractional product leadership.',
  },
  {
    question: 'What does a Fractional CPO do?',
    answer: 'A Fractional CPO defines product vision and strategy, creates and prioritises roadmaps, implements discovery and delivery frameworks, mentors product managers, aligns product with business objectives, manages stakeholder expectations, drives product-led growth initiatives, and presents product metrics to the board. They bring strategic leadership without operational micromanagement.',
  },
  {
    question: 'What qualifications do I need for Fractional CPO jobs?',
    answer: 'Successful Fractional CPO candidates typically have: 12+ years of product experience with 5+ years in VP Product or CPO roles; proven track record delivering products from 0-1 and scaling to product-market fit; experience with product frameworks (Jobs to be Done, OKRs, RICE); expertise in product tools (Jira, Linear, Productboard, Amplitude); and strong stakeholder management skills.',
  },
  {
    question: 'Do Fractional CPOs work remotely?',
    answer: 'Yes, product leadership is highly suited to remote work. Most Fractional CPOs work remotely or in a hybrid model, using collaborative tools like Figma, Miro, Linear, and Notion. Typical engagement structures include 1-2 days per month on-site for workshops and stakeholder sessions, with the remainder conducted remotely.',
  },
]

export default async function FractionalCpoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCPOStats(),
    getFeaturedCompanies(),
    getCPOJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CPO Jobs UK | Part-Time Chief Product Officer Roles 2025"
        description="Find part-time CPO positions paying £800-£1,300/day"
        url="https://fractional.quest/fractional-cpo-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <FAQPageSchema faqs={CPO_FAQS} />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cpo-jobs-uk" />
      {/* Video Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "What Does a Chief Product Officer Do?",
            "description": "Learn what a Chief Product Officer (CPO) does and how fractional CPOs help UK startups and scale-ups build winning products. This video explains the CPO role, product strategy, roadmap prioritisation, and team leadership. Essential viewing for anyone exploring fractional CPO jobs UK or considering part-time product leadership.",
            "thumbnailUrl": "https://img.youtube.com/vi/2vfkjAzYCM4/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=2vfkjAzYCM4",
            "embedUrl": "https://www.youtube.com/embed/2vfkjAzYCM4",
            "uploadDate": "2023-02-10",
            "duration": "PT10M45S",
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
            "name": "How to Build a Product-Led Growth Strategy",
            "description": "A comprehensive guide to building product-led growth (PLG) strategies. Learn how fractional CPOs implement PLG in B2B SaaS companies, drive product adoption, and create self-serve customer journeys. Essential for understanding fractional CPO jobs UK responsibilities in modern product organisations.",
            "thumbnailUrl": "https://img.youtube.com/vi/tKf9gI_M-dg/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=tKf9gI_M-dg",
            "embedUrl": "https://www.youtube.com/embed/tKf9gI_M-dg",
            "uploadDate": "2023-05-18",
            "duration": "PT14M20S",
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
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-indigo-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cpo', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Product Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CPO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Product Officer roles for experienced product leaders.
                Shape product vision and strategy for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£1,050</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-product-manager-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  PM Jobs
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
          <RoleCalculator role="cpo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CPO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CPO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-purple-600 to-indigo-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CPO</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-700">
                      View fractional CPO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Product"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors"
            >
              View All {stats.total}+ Fractional CPO Jobs UK
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
              <span className="text-purple-600">Fractional CPO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-purple-900"></div>
          </div>

          {/* SEO Image */}
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80"
              alt="Fractional CPO jobs UK - Chief Product Officer leading product strategy session"
              title="Fractional CPO Jobs UK - Part-Time Chief Product Officer Roles"
              className="w-full h-80 md:h-96 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
              Fractional CPO jobs UK: Product leaders across the UK are embracing fractional work
            </figcaption>
          </figure>

          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CPO jobs</strong> are transforming how UK companies build and scale products. Part-time Chief Product Officer positions where seasoned product executives bring strategic clarity—defining vision, building roadmaps, and driving product-market fit—without the £150,000-£250,000+ overhead of a full-time leader. According to <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">CIPD research</a>, senior product roles are increasingly embracing flexible models. The <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">UK tech sector</a> continues to drive demand.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional CPO Jobs UK</h3>
            <p>
              The UK market for <strong>fractional CPO jobs</strong> has grown substantially, driven by the explosion of venture-backed startups requiring experienced product leadership. According to <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">BVCA data</a>, portfolio companies increasingly favour fractional CPOs during early growth stages when product direction is critical but a full-time hire isn't yet justified. The <a href="https://www.mindtheproduct.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Mind the Product</a> community has championed this shift toward flexible product leadership.
            </p>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-purple-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional CPOs help founders transition from 'founder-led product' to professional product management, establishing the processes that enable scaling."</p>
            </div>

            {/* Video 1: What is a CPO */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What Does a Chief Product Officer Do?</h4>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/2vfkjAzYCM4"
                  title="What Does a Chief Product Officer Do?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-gray-500 text-sm mt-3">Learn how fractional CPOs shape product strategy and build winning products</p>
            </div>

            <p>
              Startups at Seed to Series B stage are the primary drivers of demand. These companies have validated product-market fit but need strategic product leadership to scale. A fractional CPO provides the expertise to build discovery processes, implement prioritisation frameworks, mentor junior PMs, and align product with business objectives—all at a fraction of the cost. The <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">British Business Bank</a> notes that as companies scrutinise headcount costs, the fractional model offers a high-impact, flexible alternative.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional CPO Jobs Are Growing</h3>
            <p>
              Multiple factors are driving unprecedented demand for fractional CPO roles across the UK. The shift from feature factories to outcome-driven product teams requires experienced leadership. Boards and investors demand clear product strategy aligned with business metrics—areas where experienced CPOs excel.
            </p>
            <ul className="space-y-3">
              <li><strong>Founder bandwidth:</strong> Founders delegating product leadership to focus on fundraising and GTM</li>
              <li><strong>Product-led growth:</strong> PLG strategies requiring sophisticated product thinking aligned with <a href="https://www.productled.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">ProductLed</a> frameworks</li>
              <li><strong>Discovery maturity:</strong> Implementing continuous discovery per <a href="https://www.producttalk.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Teresa Torres' methodology</a></li>
              <li><strong>Team scaling:</strong> Building and mentoring product teams from 1 to 10+ PMs</li>
              <li><strong>Investor readiness:</strong> Professionalising product function before Series A-B rounds</li>
              <li><strong>Platform thinking:</strong> Evolving from single product to platform architecture</li>
            </ul>

            <div className="bg-purple-50 p-6 border border-purple-200 rounded-lg my-8 not-prose">
              <p className="text-purple-800 font-medium mb-3">Looking to hire a Fractional CPO instead?</p>
              <Link href="/fractional-cpo-services" className="inline-flex items-center text-purple-700 font-bold hover:text-purple-900">
                View Fractional CPO Services →
              </Link>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional CPO Jobs</h3>
            <p>
              Fractional CPO roles in the UK span diverse specialisations, each commanding different day rates based on product complexity, sector expertise, and company stage. B2B SaaS CPO positions are most common, requiring expertise in subscription products, feature adoption, and enterprise workflows. Consumer/marketplace CPOs command rates based on scale and growth metrics.
            </p>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'B2B SaaS CPO', desc: 'Enterprise products, PLG, feature adoption', rate: '£1,000-£1,300/day' },
                { title: 'FinTech / RegTech CPO', desc: 'FCA compliance, regulated products', rate: '£1,100-£1,400/day' },
                { title: 'HealthTech CPO', desc: 'NHS integration, clinical workflows', rate: '£1,000-£1,300/day' },
                { title: 'Early-Stage CPO', desc: 'Seed to Series A, PMF discovery', rate: '£800-£1,100/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-purple-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            {/* Video 2: Product-Led Growth */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Building Product-Led Growth (PLG)</h4>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/tKf9gI_M-dg"
                  title="How to Build a Product-Led Growth Strategy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <p className="text-gray-500 text-sm mt-3">How fractional CPOs implement PLG strategies for B2B SaaS companies</p>
            </div>

            {/* Second SEO Image */}
            <figure className="my-10 -mx-6 lg:-mx-16">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                alt="Fractional CPO jobs UK - product roadmap and strategy planning"
                title="Fractional CPO Jobs UK - Product Leadership Opportunities"
                className="w-full h-64 md:h-80 object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
                UK fractional CPO jobs offer competitive day rates for experienced product leaders
              </figcaption>
            </figure>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CPO Jobs by Location</h3>
            <p>
              London dominates with approximately 60% of fractional CPO opportunities, driven by the capital's concentration of venture-backed startups and tech scale-ups. However, remote-first culture has expanded opportunities—experienced CPOs based anywhere in the UK can serve multiple clients. Cambridge, Manchester, Edinburgh, and Bristol all generate consistent demand through their growing tech ecosystems.
            </p>
            <ul className="space-y-2">
              <li><strong>London (Shoreditch, King's Cross, City):</strong> £1,000-£1,300/day</li>
              <li><strong>Cambridge & Oxford:</strong> £900-£1,200/day</li>
              <li><strong>Manchester & Leeds:</strong> £850-£1,100/day</li>
              <li><strong>Edinburgh & Glasgow:</strong> £850-£1,100/day</li>
              <li><strong>Remote UK (multi-client):</strong> £900-£1,200/day</li>
            </ul>
            <p>
              The shift to hybrid working has reshaped fractional CPO engagements. Many companies structure roles as 1-2 days per month on-site for workshops, planning sessions, and stakeholder alignment, with the remainder conducted remotely. This flexibility enables fractional CPOs to serve 3-5 clients simultaneously.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional CPO Jobs</h3>
            <p>
              Fractional CPO roles demand extensive product leadership experience. Unlike advisory roles, a fractional CPO takes accountability for product outcomes—they must demonstrate the track record to back that responsibility.
            </p>
            <ul className="space-y-2">
              <li>12+ years product experience, with 5+ years in VP Product or CPO roles</li>
              <li>Proven track record building products from 0-1 and scaling to product-market fit</li>
              <li>Experience building and leading product teams (5-20+ people)</li>
              <li>Deep expertise in product tools: Jira, Linear, Productboard, Amplitude, Mixpanel</li>
              <li>Knowledge of product frameworks: Jobs to be Done, OKRs, RICE, continuous discovery</li>
              <li>Understanding of <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">IR35 legislation</a> and limited company structure</li>
              <li>Board-level communication skills and experience presenting to investors</li>
              <li>Certification from <a href="https://www.mindtheproduct.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Mind the Product</a> or <a href="https://www.scrum.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 underline">Scrum.org</a> adds credibility</li>
            </ul>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Building a Successful Fractional CPO Practice</h3>
            <p>
              Transitioning from full-time CPO to a thriving fractional practice requires strategic positioning and business development discipline. Most successful fractional CPOs spend 6-12 months building their initial client base, typically starting with 2-3 anchor clients before expanding to a sustainable portfolio of 4-6 engagements generating £150,000-£300,000 annually.
            </p>
            <p>
              The key differentiator is establishing deep expertise in a defensible niche—whether that's a specific vertical (SaaS, FinTech, HealthTech), stage (0-1 vs. scaling), or methodology (PLG, enterprise product). Building standardised playbooks for discovery workshops, roadmap facilitation, team assessments, and board reporting enables efficient delivery across multiple clients.
            </p>
          </article>
        </div>
      </section>

      {/* IR35 Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              UK IR35 Calculator for Fractional CPO Jobs
            </h2>
            <p className="text-gray-600 mt-4">
              As a fractional CPO in the UK, your IR35 status significantly impacts your take-home pay
            </p>
          </div>
          <IR35Calculator defaultDayRate={1050} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Product" title="Latest Product Leadership News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CPO Jobs</h2>
          </div>
          <FAQ items={CPO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-purple-400">Fractional CPO Role</span></h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking product leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-purple-900 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      {/* CPO Cluster Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Explore More</span>
            <h2 className="text-3xl font-black text-gray-900">CPO Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/cpo" className="group bg-white p-6 border border-gray-200 hover:border-purple-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">CPO Hub</h3>
              <p className="text-gray-600 text-sm">Everything about Chief Product Officer roles, salary, and career paths.</p>
            </Link>
            <Link href="/fractional-cpo-services" className="group bg-white p-6 border border-gray-200 hover:border-purple-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Hire a Fractional CPO</h3>
              <p className="text-gray-600 text-sm">Looking to hire? Find vetted fractional CPOs for your product team.</p>
            </Link>
            <Link href="/interim-cpo" className="group bg-white p-6 border border-gray-200 hover:border-purple-500 transition-colors rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Interim CPO</h3>
              <p className="text-gray-600 text-sm">Full-time temporary CPO for launches, pivots, and transformations.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/cpo" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">CPO Hub</Link>
              <Link href="/fractional-cpo-services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">CPO Services</Link>
              <Link href="/interim-cpo" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Interim CPO</Link>
              <Link href="/fractional-product-manager-jobs-uk" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">PM Jobs</Link>
              <Link href="/fractional-cto-jobs-uk" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">CTO Jobs</Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">CMO Jobs</Link>
            </div>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="product" />
    </div>
  )
}
