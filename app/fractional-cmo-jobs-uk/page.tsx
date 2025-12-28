import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { FAQ, CMO_FAQS } from '@/components/FAQ'
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

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CMO Jobs UK: Part-Time Roles',
  description: 'Fractional CMO jobs UK. Part-time Chief Marketing Officer positions paying £700-£1,400/day. Remote & hybrid roles for experienced marketing leaders.',
  keywords: 'fractional cmo jobs uk, fractional cmo jobs, part time cmo jobs, fractional cmo uk, cmo jobs uk, part time chief marketing officer, fractional cmo',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cmo-jobs-uk',
  },
  openGraph: {
    title: 'Fractional CMO Jobs UK | Part-Time CMO Roles 2025',
    description: 'Fractional CMO jobs UK - Find part-time CMO positions paying £700-£1,400/day. Remote & hybrid.',
    url: 'https://fractional.quest/fractional-cmo-jobs-uk',
    images: ['/images/fractional-cmo-jobs-uk.jpg'],
  },
}

async function getMarketingStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, avgRateResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Marketing'`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND role_category = 'Marketing' AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Marketing' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      avgRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '950')),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 38, avgRate: 950, remoteCount: 15 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Marketing' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

// Server-side job fetch for SEO - renders in initial HTML for crawlers
async function getMarketingJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, country, city, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, hours_per_week, salary_min, salary_max, salary_currency,
        description_snippet
      FROM jobs
      WHERE is_active = true AND role_category = 'Marketing'
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

export default async function FractionalCmoJobsUkPage() {
  const [stats, companies, jobs] = await Promise.all([
    getMarketingStats(),
    getFeaturedCompanies(),
    getMarketingJobs()
  ])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional CMO Jobs UK | Part-Time CMO Roles 2025"
        description="Find part-time CMO positions paying £700-£1,400/day"
        url="https://fractional.quest/fractional-cmo-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <FAQPageSchema faqs={CMO_FAQS} />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-cmo-jobs-uk" />
      {/* Hero with Aspirational Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image - Marketing professional */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/85 via-orange-500/70 to-pink-500/50" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cmo', 'jobs')} className="mb-8" />
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    Marketing Leadership
                  </span>
                  <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Fractional CMO Jobs UK
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                  Part-time Chief Marketing Officer roles for experienced marketing leaders.
                  Work 2-3 days a week at £700-£1,400/day.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#jobs" className="px-8 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                    Browse Jobs
                  </Link>
                  <Link href="/fractional-cmo-salary" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                    Salary Guide
                  </Link>
                </div>
              </div>

              {/* Frac Section Integration */}
              <div className="hidden lg:block lg:w-80">
                <FracSection title="Talk with Frac about CMO roles" />
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
              <div className="text-3xl font-bold text-white">{stats.total}+</div>
              <div className="text-sm text-gray-400">Live Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">£{stats.avgRate}</div>
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

      {/* JOBS SECTION - Server-rendered for SEO */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CMO Jobs UK Listings</h2>
            </div>
            <p className="text-gray-500">{jobs.length}+ live fractional CMO jobs in the UK</p>
          </div>

          {/* Server-rendered job grid - visible to search engines */}
          <ServerJobGrid
            jobs={jobs}
            roleCategory="Marketing"
            ctaLink="/fractional-jobs-uk?department=Marketing"
            ctaText={`View All ${stats.total}+ Fractional CMO Jobs UK`}
            maxJobs={9}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Earnings</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              Fractional CMO Jobs UK Earnings Calculator
            </h2>
          </div>
          <RoleCalculator role="cmo" />
        </div>
      </section>


      {/* Companies Hiring - Editorial Style */}
      {companies.length > 0 && (
        <section className="py-16 bg-gray-50 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black">UK Companies Hiring Fractional CMOs</h2>
              <p className="text-gray-400 mt-2">These UK companies are actively looking for fractional CMO talent</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span
                  key={index}
                  className="text-xl md:text-2xl font-light text-gray-400 hover:text-amber-400 transition-colors cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Lead-in */}
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br />
              <span className="text-amber-600">Fractional CMO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500"></div>
          </div>

          {/* SEO Image - Editorial Style */}
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fractional CMO jobs UK - marketing executive leading strategy meeting with team"
              title="Fractional CMO Jobs UK - Part-Time Chief Marketing Officer Roles"
              className="w-full h-80 md:h-96 object-cover"
            />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
              Fractional CMO jobs UK: Marketing leaders across the UK are embracing fractional work
            </figcaption>
          </figure>

          {/* Article Content - Editorial Typography */}
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Fractional CMO jobs</strong> represent the new frontier of marketing leadership. Part-time Chief Marketing Officer positions where experienced leaders provide strategic guidance to multiple companies simultaneously—delivering world-class expertise at a fraction of the cost. According to <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">IPSE (Association of Independent Professionals and the Self-Employed)</a>, the UK&apos;s senior contractor market continues to expand, with marketing leadership roles among the fastest-growing segments.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">The Rise of Fractional CMO Jobs UK</h3>
            <p>
              The UK market for <strong>fractional CMO jobs UK</strong> has exploded, with a 200% year-on-year increase in searches. Startups, scale-ups, and SMEs are accessing senior marketing talent without the £120,000-£200,000 annual cost of a full-time Chief Marketing Officer.
            </p>

            <div className="bg-gray-50 p-8 my-10 border-l-4 border-amber-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Companies access CMO expertise for £1,500-£4,000/week instead of £10,000+ monthly for full-time."
              </p>
            </div>

            <div className="bg-amber-50 p-6 border border-amber-200 rounded-lg my-8 not-prose">
              <p className="text-amber-800 font-medium mb-3">Looking for part-time CMO opportunities instead?</p>
              <Link href="/part-time-cmo-jobs-uk" className="inline-flex items-center text-amber-700 font-bold hover:text-amber-900">
                Browse Part-Time CMO Jobs UK →
              </Link>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Fractional CMO Jobs Are Booming</h3>
            <p>
              The growth in fractional CMO demand is supported by broader economic trends. The <a href="https://www.britishbusinessbank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">British Business Bank&apos;s research</a> shows UK SMEs are increasingly seeking flexible access to senior talent, while <a href="https://technation.io/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Tech Nation data</a> highlights the UK tech sector&apos;s continued expansion, creating strong demand for marketing leadership.
            </p>
            <ul className="space-y-3">
              <li><strong>Cost efficiency:</strong> Senior expertise at a fraction of the cost</li>
              <li><strong>Diverse experience:</strong> CMOs bringing insights from multiple industries</li>
              <li><strong>Immediate impact:</strong> No lengthy onboarding—strategy from day one</li>
              <li><strong>Scalability:</strong> Flex engagement based on business needs</li>
              <li><strong>VC expectations:</strong> Professional marketing leadership post-Series A</li>
            </ul>
            <p>
              The fractional CMO model has proven particularly effective for UK businesses navigating uncertain economic conditions. Companies can access world-class marketing leadership without committing to the substantial fixed costs associated with a full-time executive hire. This flexibility allows businesses to scale their marketing investment up or down based on performance, seasonal demands, or funding milestones. For venture-backed startups, having an experienced fractional CMO on board signals marketing maturity to investors and helps accelerate growth during critical fundraising periods.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Fractional CMO Jobs</h3>
            <p>
              Fractional CMO jobs in the UK span a wide range of specialisations, each commanding different day rates based on the complexity and demand of the role. B2B SaaS CMO positions tend to pay the highest rates due to the technical expertise required in product-led growth and demand generation strategies. DTC and e-commerce CMO roles focus heavily on customer acquisition, brand building, and performance marketing across multiple channels. Startup CMO positions are particularly rewarding for experienced marketers who enjoy building marketing functions from the ground up, while growth marketing CMO roles appeal to data-driven leaders obsessed with optimising customer acquisition costs and lifetime value.
            </p>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'B2B SaaS CMO', desc: 'Demand generation & pipeline acceleration', rate: '£1,000-£1,400/day' },
                { title: 'DTC/E-commerce CMO', desc: 'Customer acquisition & brand building', rate: '£900-£1,300/day' },
                { title: 'Startup CMO', desc: 'Building marketing foundations Series A-C', rate: '£850-£1,200/day' },
                { title: 'Growth Marketing CMO', desc: 'Performance-focused CAC/LTV optimisation', rate: '£900-£1,300/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-amber-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>
            <p>
              The choice of specialisation often depends on your career background and the types of companies you want to work with. Many fractional CMOs find success by focusing on a specific vertical or business model where they can leverage their deepest expertise. Others prefer a generalist approach, taking on diverse challenges across different industries to build a broader portfolio of experience.
            </p>

            {/* Second SEO Image */}
            <figure className="my-10 -mx-6 lg:-mx-16">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Fractional CMO jobs UK - Chief Marketing Officer reviewing marketing strategy and analytics"
                title="Fractional CMO Jobs UK - Marketing Leadership Opportunities"
                className="w-full h-64 md:h-80 object-cover"
              />
              <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">
                UK fractional CMO jobs offer flexible marketing leadership opportunities
              </figcaption>
            </figure>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CMO Jobs by Location</h3>
            <p>
              London leads with 55% of roles, supported by the capital&apos;s thriving startup ecosystem documented by <a href="https://www.beauhurst.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Beauhurst</a>, but opportunities exist nationwide. Regional hubs like Manchester (backed by <a href="https://www.investinmanchester.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">MIDAS</a>) and Edinburgh (supported by <a href="https://www.scottish-enterprise.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Scottish Enterprise</a>) are rapidly expanding their fractional markets:
            </p>
            <ul className="space-y-2">
              <li><strong><Link href="/fractional-jobs-london" className="text-amber-600 hover:text-amber-700 underline">London Tech City</Link>:</strong> £900-£1,400/day</li>
              <li><strong>Manchester:</strong> £700-£1,000/day</li>
              <li><strong>Bristol & Edinburgh:</strong> £700-£1,000/day</li>
              <li><strong>Remote UK:</strong> £650-£950/day</li>
            </ul>
            <p>
              Remote and hybrid working arrangements have become increasingly common for fractional CMO jobs in the UK since 2020. Many companies now offer fully remote fractional CMO positions, which allows experienced marketing leaders to work with businesses anywhere in the country without being constrained by geography. This flexibility has opened up opportunities for fractional CMOs based outside London to command competitive rates while working with high-growth startups and scale-ups across the UK. The rise of remote work has also enabled UK-based fractional CMOs to take on international clients, further expanding the potential market for their services.
            </p>

            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Fractional CMO Jobs</h3>
            <p>
              Professional credentials and continuous development are increasingly valued in fractional CMO roles. Many successful CMOs hold qualifications from bodies like the <a href="https://www.cim.co.uk" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Chartered Institute of Marketing (CIM)</a> or have completed executive education programmes. Understanding <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">IR35 compliance</a> and operating through a limited company structure is also essential for most fractional arrangements. For a complete career roadmap, see our guide on <Link href="/how-to-become-a-fractional-cmo" className="text-amber-600 hover:text-amber-700 underline">how to become a fractional CMO</Link>.
            </p>
            <ul className="space-y-2">
              <li>12-15+ years marketing experience, 5+ in senior leadership</li>
              <li>Proven track record of revenue/pipeline growth</li>
              <li>Deep channel expertise (performance, brand, PLG, ABM)</li>
              <li>Team building and management experience</li>
              <li>Board-level communication skills and understanding of <a href="https://www.asa.org.uk" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">advertising regulations</a></li>
              <li>Knowledge of <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">data protection regulations (GDPR)</a> for marketing activities</li>
            </ul>

            <div className="bg-gray-50 text-gray-900 p-6 rounded-lg my-10 not-prose">
              <p className="text-gray-600 mb-3">Want to understand fractional CMO pricing?</p>
              <Link href="/fractional-cmo-cost" className="inline-flex items-center text-amber-400 font-bold hover:text-amber-300">
                View Fractional CMO Cost Guide →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* IR35 Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              UK IR35 Calculator for Fractional CMO Jobs
            </h2>
            <p className="text-gray-600 mt-4">
              As a fractional CMO in the UK, your IR35 status significantly impacts your take-home pay from CMO jobs
            </p>
          </div>
          <IR35Calculator defaultDayRate={950} />
        </div>
      </section>

      {/* Marketing News */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Marketing" title="Latest UK CMO Jobs & Marketing News" limit={3} />
        </div>
      </section>

      {/* FAQ Section - Editorial Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Common Questions About Fractional CMO Jobs UK
            </h2>
          </div>
          <FAQ items={CMO_FAQS} title="" />
        </div>
      </section>

      {/* Resources & Further Reading Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Additional Resources</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">UK Resources for Fractional CMO Jobs</h2>
            <p className="text-xl text-gray-500">Authoritative UK sources for fractional CMO professionals seeking marketing leadership jobs</p>
          </div>

          <div className="space-y-8">
            {/* Professional Bodies & Marketing */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-500">Professional Bodies &amp; Marketing Organizations</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.marketingweek.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    Marketing Week
                  </a>
                  {' '}&mdash; Leading UK marketing publication with industry news, analysis, and career insights
                </li>
                <li>
                  <a href="https://www.dma.org.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    Data &amp; Marketing Association (DMA)
                  </a>
                  {' '}&mdash; UK trade association for data-driven marketing, offering guidance and best practices
                </li>
                <li>
                  <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    Institute of Directors (IoD)
                  </a>
                  {' '}&mdash; Professional development and networking for C-level executives including CMOs
                </li>
              </ul>
            </div>

            {/* Government & Regulation */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-500">Government Resources &amp; Regulation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.gov.uk/set-up-business" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    Gov.uk Business Setup Guide
                  </a>
                  {' '}&mdash; Official guidance for setting up a limited company as a fractional executive
                </li>
                <li>
                  <a href="https://www.cap.org.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    Committee of Advertising Practice (CAP)
                  </a>
                  {' '}&mdash; UK advertising codes and guidance for compliant marketing practices
                </li>
                <li>
                  <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    ONS Employment Statistics
                  </a>
                  {' '}&mdash; Official UK labour market data including self-employment and contractor trends
                </li>
              </ul>
            </div>

            {/* Industry Data & Research */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-500">Industry Research &amp; Market Data</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.thinkbox.tv" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    Thinkbox Marketing Research
                  </a>
                  {' '}&mdash; UK marketing effectiveness research and advertising insights
                </li>
                <li>
                  <a href="https://www.iabuk.com/research" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    IAB UK Research
                  </a>
                  {' '}&mdash; Digital advertising standards and market research for the UK
                </li>
                <li>
                  <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    British Private Equity &amp; Venture Capital Association
                  </a>
                  {' '}&mdash; Insights on PE/VC portfolio companies that frequently hire fractional CMOs
                </li>
              </ul>
            </div>

            {/* Business Support & Networking */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-500">Business Support &amp; Networking</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="https://www.linkedin.com/business/marketing" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    LinkedIn Marketing Solutions
                  </a>
                  {' '}&mdash; Platform for building your personal brand and connecting with potential clients
                </li>
                <li>
                  <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline font-medium">
                    CIPD (Chartered Institute of Personnel and Development)
                  </a>
                  {' '}&mdash; Research on flexible working and employment trends relevant to fractional executives
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-white rounded-lg border-l-4 border-amber-500">
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> These resources provide valuable guidance for fractional CMO professionals, from regulatory compliance to professional development and market insights. Bookmark these sources to stay current with UK marketing leadership trends and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Editorial */}
      <section className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Fractional CMO Jobs UK
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create your profile and get matched with UK companies seeking fractional CMO leadership for their marketing teams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/handler/sign-up"
              className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors"
            >
              Create Profile
            </Link>
            <Link
              href="/fractional-cmo-salary"
              className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Salary Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages - Minimal */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/part-time-cmo-jobs-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Part-Time CMO Jobs UK</Link>
              <Link href="/fractional-jobs-london" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Fractional Jobs London</Link>
              <Link href="/fractional-cmo-salary" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">CMO Salary Guide</Link>
              <Link href="/fractional-cmo-cost" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Fractional CMO Cost</Link>
              <Link href="/how-to-become-a-fractional-cmo" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Become a Fractional CMO</Link>
              <Link href="/fractional-cmo-meaning" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Fractional CMO Meaning</Link>
              <Link href="/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Fractional Recruitment Agency</Link>
              <Link href="/fractional-cfo-jobs-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">CFO Jobs UK</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub - Internal Linking */}
      <RoleContentHub currentRole="cmo" />
    </div>
  )
}
