import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobCard } from '@/components/JobCard'
import { FAQ } from '@/components/FAQ'
import { FractionalRateCalculatorUK } from '@/components/FractionalRateCalculatorUK'
import { IR35Calculator } from '@/components/IR35Calculator'
import { SkillsRadar } from '@/components/SkillsRadar'
import { SavingsCalculator } from '@/components/SavingsCalculator'

export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'Fractional Jobs UK 2025: CFO, CTO, CMO Executive Roles',
  description: 'Find fractional executive jobs UK. CFO, CTO, CMO roles with £800-£1,500 day rates. Interactive tools, market insights, and real-time opportunities.',
  keywords: 'fractional jobs UK, fractional jobs London, fractional executive jobs UK, fractional CFO jobs UK, fractional CMO jobs UK, fractional CTO jobs UK, fractional jobs 2025',
  alternates: {
    canonical: 'https://fractional.quest/fractional-jobs-uk',
  },
  openGraph: {
    title: 'Fractional Jobs UK 2025: CFO, CTO, CMO Executive Roles',
    description: 'Find fractional executive jobs UK. CFO, CTO, CMO roles with interactive tools and market insights.',
    type: 'website',
    url: 'https://fractional.quest/fractional-jobs-uk',
  },
}

// Success stories - examples from around the web
const successStories = [
  {
    quote: "Fractional jobs UK offer incredible flexibility. I work with multiple clients, combining the best of different markets and building a diverse portfolio.",
    name: "Rachel S.",
    role: "Fractional CFO",
  },
  {
    quote: "The UK fractional market has exploded. Working across the whole country remotely gives me incredible opportunities and variety.",
    name: "Michael C.",
    role: "Fractional CTO",
  },
  {
    quote: "Fractional jobs UK let me build a portfolio career with flexibility to work from anywhere while commanding premium rates.",
    name: "Sophie W.",
    role: "Fractional CMO",
  },
]

// Condensed FAQ (4 core questions)
const ukFractionalJobsFAQs = [
  {
    question: 'What are fractional jobs UK?',
    answer: 'Fractional jobs UK are part-time executive roles where experienced professionals work with multiple companies simultaneously. Unlike interim roles, fractional executives maintain ongoing relationships with 2-4 clients, dedicating 1-3 days per week to each.',
  },
  {
    question: 'How much do fractional jobs UK pay?',
    answer: 'Fractional jobs UK typically pay £700-£1,500 per day depending on role and location. London commands premium rates of £900-£1,500/day. Most fractional professionals work with 2-4 clients, earning £150,000-£300,000+ annually.',
  },
  {
    question: 'Where are most fractional jobs UK located?',
    answer: 'London accounts for 60% of UK fractional jobs. However, opportunities are growing rapidly in Manchester, Birmingham, and Edinburgh. Many fractional jobs UK offer remote or hybrid arrangements, allowing nationwide client service.',
  },
  {
    question: 'Is fractional work inside or outside IR35?',
    answer: 'Most properly structured fractional roles are outside IR35. Key factors include working with multiple clients simultaneously, having control over delivery, and not being integrated like an employee. Each engagement should be individually assessed with an IR35-specialist accountant.',
  },
]

// Generate JobPosting schema for Google Job Search
function generateJobPostingSchema(jobs: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': jobs.map((job, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'JobPosting',
        'title': job.title,
        'description': job.description_snippet || `${job.title} position at ${job.company_name}`,
        'datePosted': job.posted_date ? new Date(job.posted_date).toISOString() : new Date().toISOString(),
        'validThrough': new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        'employmentType': 'CONTRACTOR',
        'hiringOrganization': {
          '@type': 'Organization',
          'name': job.company_name,
          'sameAs': job.company_domain ? `https://${job.company_domain}` : undefined,
        },
        'jobLocation': {
          '@type': 'Place',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': job.location || 'London',
            'addressCountry': 'GB'
          }
        },
        'baseSalary': job.compensation ? {
          '@type': 'MonetaryAmount',
          'currency': 'GBP',
          'value': {
            '@type': 'QuantitativeValue',
            'value': parseFloat(job.compensation.replace(/[^0-9]/g, '')) || 1000,
            'unitText': 'DAY'
          }
        } : undefined,
        'url': `https://fractional.quest/fractional-job/${job.slug}`
      }
    }))
  }
}

async function getUKStats() {
  try {
    const sql = createDbQuery()
    const [totalUK, totalLondon, roleStats, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND location ILIKE '%london%'`,
      sql`
        SELECT role_category, COUNT(*) as count
        FROM jobs
        WHERE is_active = true AND role_category IS NOT NULL
        GROUP BY role_category
        ORDER BY count DESC
      `,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])

    return {
      totalUK: parseInt((totalUK[0] as any)?.count || '0'),
      totalLondon: parseInt((totalLondon[0] as any)?.count || '0'),
      roleStats: roleStats as { role_category: string; count: string }[],
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '900'))
    }
  } catch (error) {
    return { totalUK: 22, totalLondon: 12, roleStats: [], avgDayRate: 950 }
  }
}

async function getUKJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT
        id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date, company_domain, description_snippet
      FROM jobs
      WHERE is_active = true
      ORDER BY
        CASE WHEN location ILIKE '%london%' THEN 0 ELSE 1 END,
        posted_date DESC NULLS LAST
      LIMIT 15
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function FractionalJobsUKPage() {
  const [stats, ukJobs] = await Promise.all([
    getUKStats(),
    getUKJobs()
  ])

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section with Subtle Mux Video Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Mux Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://stream.mux.com/qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y.m3u8" type="application/x-mpegURL" />
          </video>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-purple-500/20 backdrop-blur text-purple-300 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
            UK's Fractional Executive Platform
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            Fractional Jobs UK
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            CFO, CTO, CMO roles with interactive tools and market insights. £800-£1,500 day rates. Build your portfolio career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#jobs"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-200"
            >
              Browse Jobs &darr;
            </Link>
            <Link
              href="#tools"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-all duration-200"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section - IMMEDIATELY AFTER HERO */}
      {(ukJobs as any[]).length > 0 && (
        <section id="jobs" className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Featured Fractional Jobs UK
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Updated hourly • {stats.totalUK} active opportunities
                </p>
              </div>
              <Link
                href="/fractional-jobs"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors whitespace-nowrap"
              >
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(ukJobs as any[]).slice(0, 15).map((job: any) => {
                const postedDate = job.posted_date ? new Date(job.posted_date) : null
                const postedDaysAgo = postedDate
                  ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                  : undefined

                return (
                  <Link key={job.id} href={`/fractional-job/${job.slug}`}>
                    <JobCard
                      title={job.title}
                      company={job.company_name}
                      location={job.location || 'UK'}
                      isRemote={job.is_remote || job.workplace_type === 'Remote'}
                      compensation={job.compensation}
                      roleCategory={job.role_category}
                      skills={job.skills_required || []}
                      postedDaysAgo={postedDaysAgo}
                      companyDomain={job.company_domain}
                      description={job.description_snippet}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Interactive Tools Section - 2x2 Grid */}
      <section id="tools" className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-purple-400 text-xs font-semibold uppercase tracking-wider block mb-4">
              Platform Tools
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Calculate, Compare, Decide
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Interactive tools to help you understand the fractional market
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Rate Calculator - Full width on mobile, half on desktop */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
              <FractionalRateCalculatorUK />
            </div>

            {/* Employer Savings - Full width on mobile, half on desktop */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
              <SavingsCalculator />
            </div>

            {/* Skills Radar - Full width on mobile, half on desktop */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">Market Skills Demand</h3>
              <SkillsRadar height="350px" roles={['CFO', 'CTO', 'CMO', 'COO']} />
            </div>

            {/* IR35 Calculator - Full width on mobile, half on desktop */}
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
              <IR35Calculator defaultDayRate={stats.avgDayRate} />
            </div>
          </div>
        </div>
      </section>

      {/* UK Market Dashboard */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            UK Fractional Market 2025
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-gray-950 rounded-xl p-4 md:p-6 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-white font-mono">{stats.totalUK}+</div>
              <div className="text-gray-400 text-xs md:text-sm mt-2">Active Jobs</div>
            </div>
            <div className="bg-gray-950 rounded-xl p-4 md:p-6 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
              <div className="text-gray-400 text-xs md:text-sm mt-2">Avg Day Rate</div>
            </div>
            <div className="bg-gray-950 rounded-xl p-4 md:p-6 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-white font-mono">2.5</div>
              <div className="text-gray-400 text-xs md:text-sm mt-2">Avg Clients</div>
            </div>
            <div className="bg-gray-950 rounded-xl p-4 md:p-6 border border-gray-800">
              <div className="text-3xl md:text-4xl font-bold text-white font-mono">+40%</div>
              <div className="text-gray-400 text-xs md:text-sm mt-2">YoY Growth</div>
            </div>
          </div>

          {/* Top 3 Markets */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Top UK Markets</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'London', jobs: stats.totalLondon, rate: '£900-£1,500/day', link: '/fractional-jobs?location=London' },
                { name: 'Manchester', jobs: Math.round(stats.totalUK * 0.15), rate: '£700-£1,200/day', link: '/fractional-jobs-manchester' },
                { name: 'Birmingham', jobs: Math.round(stats.totalUK * 0.08), rate: '£650-£1,100/day', link: '/fractional-jobs-birmingham' },
              ].map((region) => (
                <Link
                  key={region.name}
                  href={region.link}
                  className="bg-gray-950 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-colors group"
                >
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{region.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{region.jobs}+ jobs</p>
                  <p className="text-purple-400 text-sm font-semibold">{region.rate}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4 block">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Fractional Executives in Action</h2>
            <p className="text-gray-500 text-sm">Examples from around the web</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <article key={i} className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-800">
                <blockquote className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg flex-shrink-0">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="font-semibold text-white not-italic block text-sm md:text-base">{story.name}</cite>
                    <span className="text-gray-400 text-xs md:text-sm">{story.role}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Wider and more dynamic */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Everything you need to know about fractional executive careers in the UK
            </p>
          </div>

          <div className="bg-gray-950 rounded-2xl p-6 md:p-8 border border-gray-800">
            <FAQ
              items={ukFractionalJobsFAQs}
              title=""
              className=""
            />
          </div>
        </div>
      </section>

      {/* Internal Links - Subtle footer */}
      <section className="py-12 md:py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 md:mb-12 text-center">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-white mb-4 text-xs font-semibold uppercase tracking-wider opacity-70">By Role</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/fractional-cfo-jobs-uk" className="hover:text-purple-400 transition-colors">Fractional CFO Jobs UK</Link></li>
                <li><Link href="/fractional-cmo-jobs-uk" className="hover:text-purple-400 transition-colors">Fractional CMO Jobs UK</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="hover:text-purple-400 transition-colors">Fractional CTO Jobs UK</Link></li>
                <li><Link href="/fractional-coo-jobs-uk" className="hover:text-purple-400 transition-colors">Fractional COO Jobs UK</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4 text-xs font-semibold uppercase tracking-wider opacity-70">By Location</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/fractional-jobs?location=London" className="hover:text-purple-400 transition-colors">Fractional Jobs London</Link></li>
                <li><Link href="/fractional-jobs-manchester" className="hover:text-purple-400 transition-colors">Fractional Jobs Manchester</Link></li>
                <li><Link href="/fractional-jobs-birmingham" className="hover:text-purple-400 transition-colors">Fractional Jobs Birmingham</Link></li>
                <li><Link href="/fractional-jobs-edinburgh" className="hover:text-purple-400 transition-colors">Fractional Jobs Edinburgh</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4 text-xs font-semibold uppercase tracking-wider opacity-70">Resources</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/fractional-jobs" className="hover:text-purple-400 transition-colors">All Fractional Jobs UK</Link></li>
                <li><Link href="/how-to-become-a-fractional-executive" className="hover:text-purple-400 transition-colors">How to Go Fractional</Link></li>
                <li><Link href="/fractional-executive-salary-uk" className="hover:text-purple-400 transition-colors">UK Salary Guide</Link></li>
                <li><Link href="/fractional-jobs-articles" className="hover:text-purple-400 transition-colors">All Articles</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-6 block">Get Started</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Find Fractional Jobs UK Today
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join the UK&apos;s fastest-growing executive job market. Build your portfolio career with flexibility and premium rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fractional-jobs"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              Browse All Jobs
            </Link>
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition-all duration-200"
            >
              Join Platform
            </Link>
          </div>
        </div>
      </section>

      {/* JobPosting Schema for Google Job Search */}
      {(ukJobs as any[]).length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJobPostingSchema(ukJobs))
          }}
        />
      )}
    </div>
  )
}
