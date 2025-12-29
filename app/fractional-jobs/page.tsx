import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { ServerJobGrid } from '@/components/ServerJobGrid'
import { FAQ } from '@/components/FAQ'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { JobListingSchema } from '@/components/JobPostingSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Jobs Worldwide: Global Executive Roles 2025',
  description: 'Browse fractional jobs globally: CFO, CTO, CMO, COO roles. Part-time executive positions in US, UK, Australia, Canada, and worldwide.',
  keywords: 'fractional jobs, fractional executive jobs, fractional CFO, fractional CTO, fractional CMO, fractional COO, part-time executive, interim executive, portfolio career, remote executive jobs',
  alternates: {
    canonical: 'https://fractional.quest/fractional-jobs',
  },
  openGraph: {
    title: 'Fractional Jobs Worldwide | Global Executive Roles',
    description: 'Browse all fractional executive jobs globally: CFO, CTO, CMO, COO roles in US, UK, Australia, and more.',
    type: 'website',
    url: 'https://fractional.quest/fractional-jobs',
  },
}

// Role pages for internal linking
const ROLE_PAGES = [
  { name: 'Fractional CFO', href: '/fractional-cfo-jobs-uk', category: 'Finance', color: 'emerald' },
  { name: 'Fractional CMO', href: '/fractional-cmo-jobs-uk', category: 'Marketing', color: 'amber' },
  { name: 'Fractional CTO', href: '/fractional-cto-jobs-uk', category: 'Engineering', color: 'blue' },
  { name: 'Fractional COO', href: '/fractional-coo-jobs-uk', category: 'Operations', color: 'slate' },
  { name: 'Fractional CEO', href: '/fractional-ceo-jobs-uk', category: 'Executive', color: 'purple' },
  { name: 'Fractional HR Director', href: '/fractional-hr-jobs-uk', category: 'HR', color: 'pink' },
  { name: 'Fractional CPO', href: '/cpo', category: 'Product', color: 'violet' },
  { name: 'Fractional CRO', href: '/cro', category: 'Sales', color: 'red' },
]

// Location pages for internal linking
const LOCATION_PAGES = [
  { name: 'London', href: '/fractional-jobs-london', jobs: '60%' },
  { name: 'Manchester', href: '/fractional-jobs-manchester', jobs: '12%' },
  { name: 'Birmingham', href: '/fractional-jobs-birmingham', jobs: '8%' },
  { name: 'Edinburgh', href: '/fractional-jobs-edinburgh', jobs: '6%' },
  { name: 'Remote UK', href: '/remote-fractional-jobs', jobs: '40%' },
]

// Industry pages
const INDUSTRY_PAGES = [
  { name: 'Tech & SaaS', href: '/fractional-jobs-tech' },
  { name: 'Finance', href: '/fractional-jobs-finance' },
  { name: 'Healthcare', href: '/fractional-jobs-healthcare' },
  { name: 'E-commerce', href: '/fractional-jobs-ecommerce' },
  { name: 'Startups', href: '/fractional-jobs-startups' },
]

const FRACTIONAL_FAQS = [
  {
    question: 'What are fractional jobs?',
    answer: 'Fractional jobs are part-time executive roles where experienced professionals work with multiple companies simultaneously. Unlike full-time positions, fractional executives typically dedicate 1-3 days per week to each client, providing strategic leadership without the cost of a full-time hire.',
  },
  {
    question: 'How much do fractional executives earn?',
    answer: 'Fractional executives in the UK typically earn £700-£1,500 per day depending on role, experience, and location. CFOs and CTOs command the highest rates (£900-£1,500/day), while most fractional professionals working with 2-4 clients earn £150,000-£300,000+ annually.',
  },
  {
    question: 'What types of fractional jobs are available?',
    answer: 'The most common fractional roles are CFO (Chief Financial Officer), CTO (Chief Technology Officer), CMO (Chief Marketing Officer), COO (Chief Operating Officer), and CHRO (Chief HR Officer). There are also fractional roles for Product Officers, Sales Directors, and specialized functions like Compliance and Data.',
  },
  {
    question: 'How do I find fractional jobs?',
    answer: 'Fractional jobs can be found through specialized platforms like Fractional Quest, executive networks, LinkedIn, and fractional recruitment agencies. Building a strong personal brand and network is essential, as many fractional roles come through referrals and direct outreach.',
  },
]

async function getAllStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, roleStats, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true`,
      sql`
        SELECT role_category, COUNT(*) as count
        FROM jobs
        WHERE is_active = true AND role_category IS NOT NULL
        GROUP BY role_category
        ORDER BY count DESC
      `,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (is_remote = true OR workplace_type = 'Remote')`,
    ])

    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      roleStats: roleStats as { role_category: string; count: string }[],
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0'),
    }
  } catch {
    return { total: 17, roleStats: [], remoteCount: 8 }
  }
}

async function getAllJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, description_snippet
      FROM jobs
      WHERE is_active = true
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 50
    `
    return jobs as any[]
  } catch {
    return []
  }
}

export default async function FractionalJobsPage() {
  const [stats, jobs] = await Promise.all([getAllStats(), getAllJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Jobs | All Executive Roles UK"
        description="Browse all fractional executive jobs: CFO, CTO, CMO, COO roles"
        url="https://fractional.quest/fractional-jobs"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />
      <JobListingSchema jobs={jobs} pageUrl="https://fractional.quest/fractional-jobs" />
      {/* Video Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "What Are Fractional Jobs? Complete Guide to Part-Time Executive Roles",
            "description": "Learn what fractional jobs are and how part-time executive roles are transforming the future of work. This video covers CFO, CTO, CMO roles, typical day rates, portfolio career benefits, and how to find fractional opportunities worldwide.",
            "thumbnailUrl": "https://img.youtube.com/vi/YwlRrjNF2vI/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=YwlRrjNF2vI",
            "embedUrl": "https://www.youtube.com/embed/YwlRrjNF2vI",
            "uploadDate": "2023-05-01",
            "duration": "PT10M30S",
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
            "name": "The Future of Executive Work: Fractional Leadership Explained",
            "description": "Discover why fractional jobs are the future of executive employment. Learn how businesses benefit from part-time C-suite leadership and how experienced executives build portfolio careers with multiple clients.",
            "thumbnailUrl": "https://img.youtube.com/vi/3k_mJFQP8vQ/maxresdefault.jpg",
            "contentUrl": "https://www.youtube.com/watch?v=3k_mJFQP8vQ",
            "embedUrl": "https://www.youtube.com/embed/3k_mJFQP8vQ",
            "uploadDate": "2023-07-15",
            "duration": "PT13M45S",
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
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              All Roles
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Fractional Jobs
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Browse {stats.total}+ fractional executive positions across the UK.
              CFO, CTO, CMO, COO and more. Part-time leadership roles paying £700-£1,500/day.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#jobs" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Browse All Jobs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link href="/fractional-jobs-uk" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                UK Jobs Only
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
            <div className="flex flex-wrap justify-between gap-4 text-sm">
              <div>
                <span className="text-gray-400">Total Jobs:</span>
                <span className="ml-2 font-bold text-white">{stats.total}+</span>
              </div>
              <div>
                <span className="text-gray-400">Remote:</span>
                <span className="ml-2 font-bold text-white">{stats.remoteCount}+</span>
              </div>
              <div>
                <span className="text-gray-400">Day Rates:</span>
                <span className="ml-2 font-bold text-white">£700-£1,500</span>
              </div>
              <LastUpdatedBadge date={lastUpdatedDate} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Role */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Role</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ROLE_PAGES.map((role) => (
              <Link
                key={role.href}
                href={role.href}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all"
              >
                <span className="font-bold text-gray-900">{role.name}</span>
                <span className="block text-sm text-gray-500 mt-1">Jobs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Location */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Location</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {LOCATION_PAGES.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all text-center"
              >
                <span className="font-bold text-gray-900">{loc.name}</span>
                <span className="block text-xs text-gray-500 mt-1">{loc.jobs} of jobs</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Industry */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Industry</h2>
          <div className="flex flex-wrap gap-3">
            {INDUSTRY_PAGES.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all text-sm font-medium text-gray-700"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Jobs - Server Rendered */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">All Listings</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Latest Fractional Jobs</h2>
            </div>
            <p className="text-gray-500">{stats.total}+ live fractional positions</p>
          </div>

          <ServerJobGrid
            jobs={jobs}
            roleCategory="Executive"
            ctaLink="/fractional-jobs-uk"
            ctaText={`View All ${stats.total}+ Fractional Jobs`}
            maxJobs={12}
            showViewAll={true}
          />
        </div>
      </section>

      {/* What is Fractional Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Fractional Jobs?</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              Fractional jobs are part-time executive positions where experienced leaders work with
              multiple companies simultaneously. Instead of one full-time role, fractional executives
              build a portfolio career, dedicating 1-3 days per week to each client.
            </p>
            <p>
              This model benefits both sides: companies get senior expertise at a fraction of the cost
              of a full-time hire, while executives enjoy variety, flexibility, and often higher
              overall earnings than traditional employment.
            </p>
            <p>
              Common fractional roles include CFO (Chief Financial Officer), CTO (Chief Technology Officer),
              CMO (Chief Marketing Officer), COO (Chief Operating Officer), and CHRO (Chief HR Officer).
              The UK fractional market has grown significantly, with demand particularly strong in
              startups, scale-ups, and PE-backed companies.
            </p>
          </div>
        </div>
      </section>

      {/* UK Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The UK Fractional Executive Market</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              The United Kingdom has emerged as one of Europe's leading markets for fractional executive
              talent. According to the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">ScaleUp Institute</a>,
              UK scale-ups increasingly turn to fractional leaders for strategic guidance without the
              overhead of full-time C-suite hires.
            </p>
            <p>
              London remains the epicentre, accounting for over 60% of fractional opportunities, but
              Manchester, Birmingham, Edinburgh, and Bristol are rapidly growing hubs. Remote and hybrid
              arrangements have expanded the talent pool further, allowing executives outside major cities
              to serve clients nationwide.
            </p>
            <p>
              Day rates for fractional executives in the UK typically range from £700 to £1,500, with
              CFOs and CTOs commanding the highest premiums. Most fractional professionals work with
              2-4 clients simultaneously, earning £150,000 to £350,000+ annually while maintaining
              flexibility over their schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Fractional Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Executives</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Portfolio diversification across multiple industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Higher earning potential than single employment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Flexibility to choose projects and clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Work-life balance with reduced commuting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Continuous learning across different business challenges</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Companies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Access to senior expertise at 30-50% of full-time cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>No long-term employment commitments or notice periods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Fresh perspectives from experienced multi-sector professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Rapid onboarding for immediate strategic impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Scale expertise up or down based on business needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <FAQ faqs={FRACTIONAL_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Fractional Role?</h2>
          <p className="text-gray-300 mb-8">
            Browse {stats.total}+ fractional executive positions across the UK.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse UK Jobs
            </Link>
            <Link
              href="/remote-fractional-jobs"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Remote Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
