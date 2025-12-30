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
import { LazyYouTube } from '@/components/LazyYouTube'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CGO Jobs UK: Chief Sustainability Officer Roles 2025',
  description: 'Fractional CGO jobs UK for experienced sustainability leaders. Part-time Chief Green Officer and CSO positions paying £700-£1,200/day. Browse live ESG, sustainability, and net-zero leadership opportunities across the UK.',
  keywords: 'fractional cgo jobs, fractional cgo jobs uk, part time chief green officer, fractional sustainability officer, cgo part time, fractional esg jobs, chief sustainability officer part time, fractional cso, esg director jobs, net zero jobs uk, sustainability director jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cgo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CGO Jobs UK | Part-Time Chief Green Officer Roles 2025',
    description: 'Fractional CGO jobs UK - Find part-time sustainability and ESG positions paying £700-£1,200/day. Remote & hybrid available.',
    images: ['/images/fractional-cgo-jobs-uk.jpg'],
    url: 'https://fractional.quest/fractional-cgo-jobs-uk',
  },
}

async function getCGOStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Sustainability%' OR title ILIKE '%Green%' OR title ILIKE '%ESG%')`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Sustainability%' OR title ILIKE '%Green%' OR title ILIKE '%ESG%') AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 12, remoteCount: 5 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Sustainability%') AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO
async function getCGOJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND (role_category = 'Operations' OR title ILIKE '%Sustainability%' OR title ILIKE '%Green%' OR title ILIKE '%ESG%')
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

const CGO_FAQS = [
  {
    question: 'What is a Fractional CGO?',
    answer: 'A Fractional CGO (Chief Green Officer or Chief Sustainability Officer) is an experienced ESG leader who works with companies on a part-time basis, typically 1-2 days per week. They develop sustainability strategies, ensure environmental compliance, drive net-zero initiatives, and build sustainable business models—all without the £120,000-£180,000+ cost of a full-time hire.',
  },
  {
    question: 'How much do Fractional CGO jobs pay in the UK?',
    answer: 'Fractional CGO/CSO day rates in the UK range from £700 to £1,200 per day. London-based roles typically command £900-£1,200/day, while regional positions average £700-£1,000/day. Rates are rising as regulatory pressure (SDR, TCFD, CSRD) increases and investors demand robust ESG credentials.',
  },
  {
    question: 'Why hire a Fractional CGO?',
    answer: 'Companies hire Fractional CGOs to: develop credible net-zero roadmaps, ensure compliance with emerging ESG regulations (SDR, TCFD, CSRD), prepare sustainability reports for investors and stakeholders, build sustainable supply chains, achieve B Corp certification, and integrate ESG into business strategy—all without the cost of a full-time executive.',
  },
  {
    question: 'What qualifications do I need for Fractional CGO jobs?',
    answer: 'Successful Fractional CGO candidates typically have: 10+ years in sustainability, environmental, or ESG roles; expertise in frameworks like TCFD, GRI, SASB, and Science Based Targets; understanding of UK/EU sustainability regulations; experience with carbon accounting and net-zero planning; and strong stakeholder communication skills.',
  },
  {
    question: 'What is the background of a CGO?',
    answer: 'CGOs come from diverse backgrounds including environmental science, operations management, corporate strategy, legal compliance, and engineering. The key requirements are deep knowledge of sustainability frameworks, understanding of regulatory requirements, and the ability to drive organisational change across departments.',
  },
  {
    question: 'What industries hire Fractional CGOs?',
    answer: 'High-demand industries include: manufacturing (supply chain sustainability), financial services (ESG investing, SDR compliance), real estate (energy efficiency, net-zero buildings), retail and FMCG (sustainable sourcing), and any company facing investor or regulatory pressure on ESG performance.',
  },
]

export default async function FractionalCgoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getCGOStats(),
    getFeaturedCompanies(),
    getCGOJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CGO Jobs UK | Part-Time Chief Green Officer Roles 2025"
        description="Find part-time CGO & Sustainability Officer positions paying £700-£1,200/day"
        url="https://fractional.quest/fractional-cgo-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <FAQPageSchema faqs={CGO_FAQS} />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cgo-jobs-uk" />
      {/* Video Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "What is a Chief Sustainability Officer (CSO)?",
            "description": "Learn what a Chief Sustainability Officer or CGO does and how fractional sustainability leaders help UK businesses achieve net-zero targets. This video explains the ESG leadership role, sustainability frameworks, and regulatory compliance. Essential for anyone exploring fractional CGO jobs UK.",
            "thumbnailUrl": "https://img.youtube.com/vi/nBV7pG3P8fc/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=nBV7pG3P8fc",
            "embedUrl": "https://www.youtube.com/embed/nBV7pG3P8fc",
            "uploadDate": "2023-05-10",
            "duration": "PT9M45S",
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
            "name": "Net Zero Strategy for Businesses",
            "description": "A comprehensive guide to developing net-zero strategies for UK businesses. Learn how fractional CGOs create carbon reduction roadmaps, implement TCFD disclosures, and drive sustainable transformation. Essential for understanding fractional CGO jobs UK responsibilities.",
            "thumbnailUrl": "https://img.youtube.com/vi/eIbGhjE8h9s/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=eIbGhjE8h9s",
            "embedUrl": "https://www.youtube.com/embed/eIbGhjE8h9s",
            "uploadDate": "2023-09-05",
            "duration": "PT13M10S",
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
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80"
            alt="Fractional CGO jobs UK hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-green-900/70" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cgo', 'jobs')} className="mb-8" />
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Sustainability Leadership
                </span>
                <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CGO Jobs UK
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Part-time Chief Green Officer roles for experienced ESG leaders.
                Drive sustainability strategy and net-zero goals for 1-3 days a week.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.total}+</div>
                  <div className="text-white/80 text-sm">Live Roles</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">£950</div>
                  <div className="text-white/80 text-sm">Avg Day Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">{stats.remoteCount}</div>
                  <div className="text-white/80 text-sm">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Browse Jobs
                </Link>
                <Link href="/fractional-coo-jobs-uk" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  COO Jobs
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
          <RoleCalculator role="cgo" /> 
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CGO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CGO jobs in the UK</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {jobs.slice(0, 9).map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/fractional-job/${job.slug}`} className="block">
                  <div className="relative h-40 bg-gradient-to-br from-emerald-600 to-green-700">
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-black">CGO</div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                        {job.title}
                      </h3>
                    </div>
                     <div className="absolute top-3 left-3 flex gap-2">
                      {getDaysAgo(job.posted_date) !== undefined && getDaysAgo(job.posted_date)! <= 3 && (
                        <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                      View fractional CGO job →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/fractional-jobs-uk?department=Operations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white font-bold rounded-lg hover:bg-emerald-800 transition-colors"
            >
              View All {stats.total}+ Fractional CGO Jobs UK
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
              <span className="text-emerald-600">Fractional CGO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-900"></div>
          </div>

          {/* SEO Image */}
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80"
              alt="Fractional CGO jobs UK - Chief Sustainability Officer leading ESG strategy"
              title="Fractional CGO Jobs UK - Part-Time Chief Green Officer Roles"
              className="w-full h-80 md:h-96 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
              Fractional CGO jobs UK: Sustainability leaders across the UK are embracing fractional work
            </figcaption>
          </figure>

          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CGO jobs</strong> (Chief Green Officer or Chief Sustainability Officer) are emerging as critical roles in the modern C-suite. Part-time ESG leadership positions where experienced sustainability executives drive net-zero initiatives, ensure regulatory compliance, and build sustainable business models. According to <a href="https://www.gov.uk/government/publications/uk-sustainability-disclosure-standards" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">UK SDR regulations</a>, demand for ESG expertise continues to grow.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional CGO Jobs UK</h3>
            <p>
              The UK market for <strong>fractional CGO jobs</strong> has grown substantially as regulatory pressure intensifies. The <a href="https://www.fca.org.uk/publications/policy-statements/ps21-24-new-climate-related-disclosure-rules" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">FCA's climate disclosure rules</a>, the <a href="https://www.gov.uk/government/publications/uk-sustainability-disclosure-standards" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">SDR framework</a>, and investor demands for credible ESG performance have created unprecedented demand for sustainability leadership. A full-time CSO (£120,000-£180,000+) is prohibitive for most mid-market firms, making the fractional model highly attractive.
            </p>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-emerald-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Fractional CGOs transform sustainability from a compliance burden into a competitive advantage—driving operational efficiency and long-term value creation."</p>
            </div>

            {/* Video 1: What is a CSO/CGO */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What is a Chief Sustainability Officer?</h4>
              <LazyYouTube videoId="nBV7pG3P8fc" title="What is a Chief Sustainability Officer (CSO)?" />
              <p className="text-gray-500 text-sm mt-3">Learn how fractional CGOs drive ESG strategy and net-zero initiatives</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional CGO Jobs Are Growing</h3>
            <ul className="space-y-3">
              <li><strong>Regulatory pressure:</strong> SDR, TCFD, CSRD requirements demand senior ESG expertise</li>
              <li><strong>Investor scrutiny:</strong> VCs, PE firms, and institutional investors requiring robust ESG credentials</li>
              <li><strong>Net-zero commitments:</strong> Companies need credible pathways to decarbonisation</li>
              <li><strong>Supply chain sustainability:</strong> Scope 3 emissions requiring value chain transformation</li>
              <li><strong>B Corp certification:</strong> Growing demand for certified sustainable business practices</li>
              <li><strong>Greenwashing risk:</strong> <a href="https://www.asa.org.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">ASA enforcement</a> and reputational risks of misleading claims</li>
            </ul>

            <div className="bg-emerald-50 p-6 border border-emerald-200 rounded-lg my-8 not-prose">
              <p className="text-emerald-800 font-medium mb-3">Looking to hire a Fractional CGO instead?</p>
              <Link href="/fractional-cgo-services" className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-900">
                View Fractional CGO Services →
              </Link>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional CGO Jobs</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Financial Services CGO', desc: 'SDR compliance, ESG investing', rate: '£900-£1,200/day' },
                { title: 'Manufacturing CGO', desc: 'Net-zero operations, Scope 3', rate: '£800-£1,100/day' },
                { title: 'Real Estate CGO', desc: 'Energy efficiency, sustainable buildings', rate: '£750-£1,000/day' },
                { title: 'Scale-up CGO', desc: 'B Corp, ESG frameworks from scratch', rate: '£700-£950/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-emerald-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>

            {/* Video 2: Net Zero Strategy */}
            <div className="my-10 not-prose">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Developing a Net Zero Strategy</h4>
              <LazyYouTube videoId="eIbGhjE8h9s" title="Net Zero Strategy for Businesses" />
              <p className="text-gray-500 text-sm mt-3">How fractional CGOs create carbon reduction roadmaps for UK businesses</p>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional CGO Jobs</h3>
            <ul className="space-y-2">
              <li>10+ years in sustainability, environmental, or ESG roles</li>
              <li>Expertise in frameworks: TCFD, GRI, SASB, CDP, Science Based Targets</li>
              <li>Understanding of <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">UK/EU sustainability regulations</a></li>
              <li>Carbon accounting and net-zero planning experience</li>
              <li>Supply chain sustainability and Scope 3 emissions expertise</li>
              <li>Understanding of <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 underline">IR35 legislation</a> and limited company structure</li>
              <li>Board-level communication skills and stakeholder engagement</li>
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
              UK IR35 Calculator for Fractional CGO Jobs
            </h2>
            <p className="text-gray-600 mt-4">
              As a fractional CGO in the UK, your IR35 status significantly impacts your take-home pay
            </p>
          </div>
          <IR35Calculator defaultDayRate={950} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Operations" title="Latest Sustainability News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Fractional CGO Jobs</h2>
          </div>
          <FAQ items={CGO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-emerald-400">Fractional CGO Role</span></h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking ESG leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-emerald-900 font-bold uppercase tracking-wider hover:bg-emerald-50 transition-colors">Create Profile</Link>
          </div>
        </div>
      </section>

      <RoleContentHub currentRole="coo" /> 
      {/* Mapped to COO/Ops */}
    </div>
  )
}
