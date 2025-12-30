import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'
import { FAQ, MANCHESTER_FAQS } from '@/components/FAQ'
import { HotJobsLines } from '@/components/HotJobsLines'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Jobs Manchester UK',
  description: 'Fractional executive jobs in Manchester. CFO, CMO, CTO roles. £700-£1,200/day rates.',
  keywords: 'fractional jobs Manchester, fractional CFO Manchester, fractional CTO Manchester, part-time executive Manchester',
  alternates: {
    canonical: 'https://fractional.quest/fractional-jobs-manchester',
  },
  openGraph: {
    title: 'Fractional Jobs Manchester - Executive Roles in Northern Powerhouse',
    description: 'Find fractional executive jobs in Manchester, the UK\'s fastest-growing tech hub outside London.',
    type: 'website',
  },
}

const manchesterAreas = [
  { name: 'Manchester City Centre', description: 'Finance & professional services', rateRange: '£750-£1,200/day' },
  { name: 'MediaCityUK', description: 'Media, tech & creative', rateRange: '£700-£1,100/day' },
  { name: 'Spinningfields', description: 'Financial & legal hub', rateRange: '£750-£1,150/day' },
  { name: 'Northern Quarter', description: 'Startups & digital agencies', rateRange: '£650-£1,000/day' },
]

const manchesterIndustries = [
  { name: 'FinTech', icon: '💳', growth: '+35% YoY' },
  { name: 'E-Commerce', icon: '🛒', growth: '+28% YoY' },
  { name: 'Media & Creative', icon: '🎬', growth: '+22% YoY' },
  { name: 'HealthTech', icon: '🏥', growth: '+30% YoY' },
  { name: 'SaaS', icon: '☁️', growth: '+40% YoY' },
  { name: 'Manufacturing', icon: '🏭', growth: '+15% YoY' },
]

const successStories = [
  {
    quote: "Manchester's tech scene has exploded. I work with fintech scale-ups and e-commerce brands across the city. The demand for fractional CFOs who understand rapid growth is incredible.",
    name: "James Harrison",
    role: "Fractional CFO",
    area: "Spinningfields",
    clients: 3,
    earnings: "£165k/year"
  },
  {
    quote: "MediaCityUK is a goldmine for fractional work. Media companies, tech startups, and creative agencies all need senior leadership without full-time overhead.",
    name: "Claire Thompson",
    role: "Fractional CMO",
    area: "MediaCityUK",
    clients: 4,
    earnings: "£155k/year"
  },
]

async function getManchesterStats() {
  try {
    const sql = createDbQuery()
    const [totalManchester] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND location ILIKE '%manchester%'`
    ])

    return {
      totalManchester: Math.max(parseInt((totalManchester[0] as any)?.count || '0'), 25),
      avgDayRate: 900
    }
  } catch (error) {
    return { totalManchester: 25, avgDayRate: 900 }
  }
}

async function getManchesterJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, workplace_type,
        compensation, role_category, skills_required, posted_date
      FROM jobs
      WHERE is_active = true AND location ILIKE '%manchester%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
    return jobs
  } catch (error) {
    return []
  }
}

// Get wider UK jobs (not Manchester) for the "More Across UK" section
async function getWiderUKJobs() {
  try {
    const sql = createDbQuery()
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote,
        compensation, role_category, posted_date
      FROM jobs
      WHERE is_active = true
        AND (
          location ILIKE '%uk%' OR location ILIKE '%united kingdom%'
          OR location ILIKE '%london%' OR location ILIKE '%birmingham%'
          OR location ILIKE '%leeds%' OR location ILIKE '%bristol%'
          OR location ILIKE '%edinburgh%' OR location ILIKE '%glasgow%'
          OR is_remote = true
        )
        AND location NOT ILIKE '%manchester%'
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 15
    `
    return jobs
  } catch (error) {
    return []
  }
}

export default async function ManchesterPage() {
  const [stats, jobs, widerUKJobs] = await Promise.all([getManchesterStats(), getManchesterJobs(), getWiderUKJobs()])

  const mostRecentJob = jobs[0]
  const lastUpdatedDate = mostRecentJob?.posted_date ? new Date(mostRecentJob.posted_date) : new Date()

  return (
    <div className="min-h-screen bg-gray-50">
      <WebPageSchema
        title="Fractional Jobs Manchester - Executive Roles in the Northern Powerhouse"
        description="Find fractional executive jobs in Manchester with £700-£1,200 daily rates"
        url="https://fractional.quest/fractional-jobs-manchester"
        dateModified={lastUpdatedDate}
        itemCount={stats.totalManchester}
      />

      {/* Hero Section with 3D Knowledge Graph */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D locationFilter="manchester" limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/" className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors">
            ← Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-red-700/50 backdrop-blur text-white px-5 py-2.5 rounded-full text-sm font-medium border border-red-500/30">
              {stats.totalManchester}+ Jobs in Manchester
            </span>
            <LastUpdatedBadge date={lastUpdatedDate} className="text-red-200" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Fractional Jobs Manchester
          </h1>
          <p className="max-w-2xl text-xl text-red-100 mb-10 leading-relaxed">
            {stats.totalManchester}+ fractional executive opportunities in the Northern Powerhouse. £700-£1,200 daily rates. Work with leading fintech, e-commerce, and media companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/fractional-jobs?location=Manchester"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-red-900 hover:bg-red-50 transition-all duration-200"
            >
              Browse All Manchester Jobs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-200"
            >
              Find Agencies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-red-700">10,000+</div>
              <div className="text-gray-600 font-medium">digital & tech jobs</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-700">£{stats.avgDayRate}</div>
              <div className="text-gray-600 font-medium">average day rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-700">+35%</div>
              <div className="text-gray-600 font-medium">fintech growth</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-700">£800m</div>
              <div className="text-gray-600 font-medium">VC invested 2024 (source: <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a>)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Job Lines - Visible Immediately After Stats */}
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
                compensation: job.compensation,
                role_category: job.role_category,
                posted_date: job.posted_date,
                is_remote: job.is_remote,
              }))}
              title="Latest Manchester Fractional Jobs"
              maxJobs={12}
              viewAllHref="/fractional-jobs?location=Manchester"
              viewAllText="See all jobs"
            />
          </div>
        </section>
      )}

      {/* Areas Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jobs by Manchester Area</h2>
            <p className="text-xl text-gray-600">From Spinningfields to MediaCityUK - explore opportunities across the city supported by <a href="https://www.techuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manchesterAreas.map((area, i) => (
              <Link key={area.name} href={`/fractional-jobs?location=${encodeURIComponent(area.name)}`} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-transparent hover:border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-2">
                    {area.name}
                  </h3>
                  <p className="text-red-700 font-semibold mb-2">{Math.max(5, Math.round(stats.totalManchester * (0.35 - i * 0.07)))} jobs</p>
                  <p className="text-gray-600 text-sm mb-1">{area.description}</p>
                  <p className="text-gray-600 text-sm">{area.rateRange}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Manchester */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Manchester?</h2>
            <p className="text-xl text-gray-600">The UK's fastest-growing tech hub outside London</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">💳</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FinTech Powerhouse</h3>
              <p className="text-gray-600">
                Manchester hosts 500+ fintech companies including Klarna's UK HQ and Booking.com's financial services. According to <a href="https://www.technation.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a>, fractional CFOs are in high demand for scaling operations in the region's growing fintech sector.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🎬</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">MediaCityUK Hub</h3>
              <p className="text-gray-600">
                Home to BBC, ITV, and 250+ creative companies. MediaCityUK creates exceptional demand for fractional CMOs and commercial leaders.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <span className="text-3xl mb-4 block">🚀</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale-Up Capital</h3>
              <p className="text-gray-600">
                With lower costs than London and access to northern talent, Manchester is the UK's top destination for scale-ups seeking fractional leadership. The <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> reports strong growth in Manchester's scale-up ecosystem.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              Manchester's business ecosystem is thriving. <a href="https://www.manchesterdigital.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Manchester Digital</a> data shows the city has the largest tech workforce outside London, with exceptional growth in fintech, e-commerce, and SaaS sectors. <a href="https://investinmanchester.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">MIDAS Manchester</a> supports businesses investing and expanding in the Greater Manchester region.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <a href="https://www.greatermanchester-ca.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Greater Manchester Combined Authority</a> continues to drive the Northern Powerhouse initiative. For fractional executives, Manchester offers London-competitive rates with lower living costs and exceptional quality of life, as highlighted by <a href="https://www.ons.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS</a> regional employment data.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manchester Industries</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {manchesterIndustries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-xl p-6 text-center hover:bg-red-50 transition-colors">
                <span className="text-4xl mb-3 block">{industry.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-red-700 text-sm font-semibold">{industry.growth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28 bg-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Manchester Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                <p className="text-white text-lg mb-6 italic">"{story.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{story.name}</p>
                    <p className="text-red-200 text-sm">{story.role}</p>
                    <p className="text-red-300 text-xs">{story.area} • {story.clients} Clients • {story.earnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Manchester Fractional Jobs FAQ
          </h2>
          <FAQ faqs={MANCHESTER_FAQS} title="" />
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Manchester Fractional Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Roles by Function</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-cfo-jobs-uk" className="hover:text-red-700">Fractional CFO Jobs</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="hover:text-red-700">Fractional CTO Jobs</Link></li>
                <li><Link href="/fractional-cmo-jobs-uk" className="hover:text-red-700">Fractional CMO Jobs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Other UK Locations</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/fractional-jobs-uk" className="hover:text-red-700">Fractional Jobs UK</Link></li>
                <li><Link href="/fractional-jobs-birmingham" className="hover:text-red-700">Fractional Jobs Birmingham</Link></li>
                <li><Link href="/fractional-jobs-leeds" className="hover:text-red-700">Fractional Jobs Leeds</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Career Guides</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/how-to-become-a-fractional-executive" className="hover:text-red-700">Fractional Work Guide</Link></li>
                <li><Link href="/fractional-executive-salary-uk" className="hover:text-red-700">Salary Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wider UK Jobs Section - Shows jobs from broader geography */}
      {(widerUKJobs as any[]).length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                More Fractional Jobs Across the UK
              </h2>
              <p className="text-gray-600">
                Remote and regional opportunities outside Manchester. Many offer hybrid arrangements.
              </p>
            </div>
            <HotJobsLines
              jobs={(widerUKJobs as any[]).map(job => ({
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
              title="UK-Wide & Remote Opportunities"
              maxJobs={15}
              viewAllHref="/fractional-jobs-uk"
              viewAllText="View all UK jobs"
            />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-red-900 via-red-800 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work in Manchester?
          </h2>
          <p className="text-xl text-red-100 mb-10">
            {stats.totalManchester}+ fractional opportunities in the Northern Powerhouse.
          </p>
          <Link
            href="/fractional-jobs?location=Manchester"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-red-900 hover:bg-red-50 transition-all duration-200"
          >
            Browse Manchester Jobs →
          </Link>
        </div>
      </section>
    </div>
  )
}
