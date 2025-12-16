import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { JobCard } from '@/components/JobCard'
import { JobFilters } from '@/components/JobFilters'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { JobsSunburst } from '@/components/JobsSunburst'
import { SkillsRadar } from '@/components/SkillsRadar'
import { DesktopOnly } from '@/components/DesktopOnly'

// Revalidate every 15 minutes for jobs
export const revalidate = 900

export const metadata: Metadata = {
  title: 'Fractional Jobs UK 2025 - Browse Executive & Part-Time C-Suite Roles',
  description: 'Browse fractional jobs in the UK. Find fractional CFO, CMO, CTO roles paying £600-£1,500/day. Part-time executive positions updated regularly.',
  keywords: 'fractional jobs, fractional jobs uk, fractional executive jobs, part time executive jobs, fractional cfo jobs, fractional cmo jobs',
  openGraph: {
    title: 'Fractional Jobs UK - Browse Executive & Part-Time C-Suite Roles',
    description: 'Browse fractional jobs in the UK. Find fractional CFO, CMO, CTO roles paying £600-£1,500/day.',
    type: 'website',
  },
}

interface JobsPageProps {
  searchParams: Promise<{
    page?: string
    role?: string
    location?: string
    industry?: string
    q?: string
  }>
}

interface FilterOption {
  value: string
  label: string
}

// Functional department categories (matches database ENUM)
const ROLE_CATEGORIES: FilterOption[] = [
  { value: '', label: 'All Departments' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Operations', label: 'Operations' },
  { value: 'Sales', label: 'Sales' },
  { value: 'HR', label: 'HR' },
  { value: 'Product', label: 'Product' },
  { value: 'Design', label: 'Design' },
  { value: 'Data', label: 'Data' },
  { value: 'Legal', label: 'Legal' },
  { value: 'Customer Success', label: 'Customer Success' },
  { value: 'Other', label: 'Other' },
]

// Location options (matches database ENUM)
const LOCATIONS: FilterOption[] = [
  { value: '', label: 'All Locations' },
  { value: 'London', label: 'London' },
  { value: 'Manchester', label: 'Manchester' },
  { value: 'Birmingham', label: 'Birmingham' },
  { value: 'Leeds', label: 'Leeds' },
  { value: 'Bristol', label: 'Bristol' },
  { value: 'Edinburgh', label: 'Edinburgh' },
  { value: 'Glasgow', label: 'Glasgow' },
  { value: 'Liverpool', label: 'Liverpool' },
  { value: 'Newcastle', label: 'Newcastle' },
  { value: 'Sheffield', label: 'Sheffield' },
  { value: 'Cambridge', label: 'Cambridge' },
  { value: 'Oxford', label: 'Oxford' },
  { value: 'Cardiff', label: 'Cardiff' },
  { value: 'Belfast', label: 'Belfast' },
  { value: 'Remote', label: 'Remote' },
  { value: 'Other UK', label: 'Other UK' },
]

// Industry options (matches database ENUM)
const INDUSTRIES: FilterOption[] = [
  { value: '', label: 'All Industries' },
  { value: 'Technology', label: 'Technology' },
  { value: 'FinTech', label: 'FinTech' },
  { value: 'SaaS', label: 'SaaS' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'E-commerce', label: 'E-commerce' },
  { value: 'Professional Services', label: 'Professional Services' },
  { value: 'Financial Services', label: 'Financial Services' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Retail', label: 'Retail' },
  { value: 'Media', label: 'Media' },
  { value: 'Real Estate', label: 'Real Estate' },
  { value: 'Education', label: 'Education' },
  { value: 'Energy', label: 'Energy' },
  { value: 'Recruitment', label: 'Recruitment' },
  { value: 'Other', label: 'Other' },
]

// Fetch filter options
function getFilterOptions() {
  return {
    roleOptions: ROLE_CATEGORIES,
    locationOptions: LOCATIONS,
    industryOptions: INDUSTRIES
  }
}

function JobFiltersWrapper({
  currentRole,
  currentLocation,
  currentIndustry,
  totalJobs,
  roleOptions,
  locationOptions,
  industryOptions
}: {
  currentRole: string
  currentLocation: string
  currentIndustry: string
  totalJobs: number
  roleOptions: FilterOption[]
  locationOptions: FilterOption[]
  industryOptions: FilterOption[]
}) {
  return (
    <Suspense fallback={<div className="h-24 bg-gray-100 rounded-xl animate-pulse" />}>
      <JobFilters
        currentRole={currentRole}
        currentLocation={currentLocation}
        currentIndustry={currentIndustry}
        totalJobs={totalJobs}
        roleOptions={roleOptions}
        locationOptions={locationOptions}
        industryOptions={industryOptions}
      />
    </Suspense>
  )
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  // Await searchParams (required in Next.js 15+)
  const params = await searchParams

  const limit = 20
  const page = parseInt(params.page || '1')
  const offset = (page - 1) * limit

  // Get filter values
  const roleFilter = params.role || ''
  const locationFilter = params.location || ''
  const industryFilter = params.industry || ''
  const searchQuery = params.q || ''

  try {
    const sql = createDbQuery()

    // Get filter options (static ENUMs)
    const { roleOptions, locationOptions, industryOptions } = getFilterOptions()

    // Build dynamic WHERE clause
    let whereConditions = ['is_active = true']

    if (roleFilter) {
      // Direct match against database ENUM
      whereConditions.push(`role_category = '${roleFilter}'`)
    }

    if (locationFilter) {
      // Direct match against city ENUM
      whereConditions.push(`city = '${locationFilter}'`)
    }

    if (industryFilter) {
      // Direct match against industry ENUM
      whereConditions.push(`industry = '${industryFilter}'`)
    }

    // Search query - search in title, company, skills
    if (searchQuery) {
      const sanitizedQuery = searchQuery.replace(/'/g, "''")
      whereConditions.push(`(
        LOWER(title) LIKE LOWER('%${sanitizedQuery}%')
        OR LOWER(company_name) LIKE LOWER('%${sanitizedQuery}%')
        OR LOWER(description_snippet) LIKE LOWER('%${sanitizedQuery}%')
        OR EXISTS (
          SELECT 1 FROM unnest(skills_required) AS skill
          WHERE LOWER(skill) LIKE LOWER('%${sanitizedQuery}%')
        )
      )`)
    }

    const whereClause = whereConditions.join(' AND ')

    // Fetch jobs from database
    const jobs = await sql`
      SELECT
        id,
        slug,
        title,
        company_name,
        location,
        is_remote,
        workplace_type,
        compensation,
        role_category,
        skills_required,
        posted_date,
        description_snippet,
        company_domain
      FROM jobs
      WHERE ${sql.unsafe(whereClause)}
      ORDER BY posted_date DESC NULLS LAST
      LIMIT ${limit} OFFSET ${offset}
    `

    // Get total count for pagination
    const countResult = await sql`
      SELECT COUNT(*) as count
      FROM jobs
      WHERE ${sql.unsafe(whereClause)}
    `

    const total = parseInt((countResult[0] as any)?.count || '0')
    const totalPages = Math.ceil(total / limit)

    // Build pagination URL with filters
    const buildPageUrl = (pageNum: number) => {
      const params = new URLSearchParams()
      params.set('page', pageNum.toString())
      if (roleFilter) params.set('role', roleFilter)
      if (locationFilter) params.set('location', locationFilter)
      if (industryFilter) params.set('industry', industryFilter)
      if (searchQuery) params.set('q', searchQuery)
      return `/fractional-jobs?${params.toString()}`
    }

    // Check if we have any active filters
    const hasActiveFilters = roleFilter || locationFilter || industryFilter || searchQuery

    // Helper to parse location for schema
    const parseLocation = (locationStr: string) => {
      const parts = locationStr.split(',').map(p => p.trim())
      return {
        addressLocality: parts[0] || locationStr,
        addressRegion: parts[1] || '',
        addressCountry: parts.length > 2 ? parts[parts.length - 1] : 'United Kingdom'
      }
    }

    // Generate JobPosting schema for each job in the list
    const jobPostingsSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: jobs.map((job: any, index: number) => {
        const parsedLoc = parseLocation(job.location || '')
        const postedDate = job.posted_date ? new Date(job.posted_date) : new Date()
        const validThrough = new Date(postedDate.getTime() + 30 * 24 * 60 * 60 * 1000)

        return {
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'JobPosting',
            title: job.title,
            description: job.description_snippet || `${job.title} position at ${job.company_name}`,
            datePosted: postedDate.toISOString(),
            validThrough: validThrough.toISOString(),
            employmentType: job.is_remote ? 'CONTRACTOR' : 'PART_TIME',
            hiringOrganization: {
              '@type': 'Organization',
              name: job.company_name,
              ...(job.company_domain && { sameAs: `https://${job.company_domain}` })
            },
            jobLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: parsedLoc.addressLocality,
                ...(parsedLoc.addressRegion && { addressRegion: parsedLoc.addressRegion }),
                addressCountry: 'GB'
              }
            },
            ...(job.is_remote && {
              jobLocationType: 'TELECOMMUTE',
              applicantLocationRequirements: {
                '@type': 'Country',
                name: 'United Kingdom'
              }
            }),
            url: `https://fractional.quest/fractional-job/${job.slug}`
          }
        }
      })
    }

    return (
      <div className="min-h-screen bg-white">
        {/* JobPosting Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }}
        />

        {/* Compact Hero Section */}
        <section className="bg-gray-900 pt-6 pb-8">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-4 transition-colors text-sm">
              <span className="mr-2">←</span> Back to Home
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <span className="inline-block bg-blue-950/200/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-3">
                  {total}+ Live Positions
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {searchQuery ? (
                    <>Jobs matching "<span className="text-blue-400">{searchQuery}</span>"</>
                  ) : (
                    'Fractional Jobs UK'
                  )}
                </h1>

                <img
                  src="/logo.svg"
                  alt="Fractional Jobs UK - Browse executive and part-time C-suite positions"
                  className="hidden"
                  width={1}
                  height={1}
                />

                <p className="text-gray-400">
                  {searchQuery ? (
                    `Showing ${total} position${total !== 1 ? 's' : ''} with this skill or keyword`
                  ) : (
                    'CFO, CMO, CTO & specialist roles • £600-£1,500/day • Updated daily'
                  )}
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{total}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400">7</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">15+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Locations</div>
                </div>
              </div>
            </div>

            {/* Search context banner when filtering */}
            {hasActiveFilters && (
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span className="text-sm text-gray-300">
                    Filtered by:
                    {searchQuery && <span className="ml-2 px-2 py-0.5 bg-blue-500/20 rounded text-blue-300">"{searchQuery}"</span>}
                    {roleFilter && <span className="ml-2 px-2 py-0.5 bg-amber-500/20 rounded text-amber-300">{roleFilter}</span>}
                    {locationFilter && <span className="ml-2 px-2 py-0.5 bg-purple-500/20 rounded text-purple-300">{locationFilter}</span>}
                    {industryFilter && <span className="ml-2 px-2 py-0.5 bg-blue-950/200/20 rounded text-blue-700">{industryFilter}</span>}
                  </span>
                </div>
                <Link href="/fractional-jobs-uk" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Clear all ×
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <JobFiltersWrapper
              currentRole={roleFilter}
              currentLocation={locationFilter}
              currentIndustry={industryFilter}
              totalJobs={total}
              roleOptions={roleOptions}
              locationOptions={locationOptions}
              industryOptions={industryOptions}
            />
          </div>
        </section>

        {/* Jobs List - Clean white section */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {jobs.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">No jobs match your filters</h2>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
                <Link href="/fractional-jobs-uk">
                  <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-black font-semibold transition-colors">
                    Clear All Filters
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-4 mb-12">
                  {jobs.map((job: any) => {
                    const postedDate = job.posted_date ? new Date(job.posted_date) : null
                    const postedDaysAgo = postedDate
                      ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                      : undefined

                    return (
                      <Link key={job.id} href={`/fractional-job/${job.slug}`}>
                        <JobCard
                          title={job.title}
                          company={job.company_name}
                          location={job.location || 'Location TBD'}
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2">
                    {page > 1 && (
                      <Link href={buildPageUrl(page - 1)}>
                        <button className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors">
                          ← Previous
                        </button>
                      </Link>
                    )}

                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                        const pageNum = Math.max(1, page - 2) + i
                        if (pageNum > totalPages) return null

                        return (
                          <Link key={pageNum} href={buildPageUrl(pageNum)}>
                            <button
                              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                pageNum === page
                                  ? 'bg-gray-900 text-white'
                                  : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {pageNum}
                            </button>
                          </Link>
                        )
                      })}
                    </div>

                    {page < totalPages && (
                      <Link href={buildPageUrl(page + 1)}>
                        <button className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors">
                          Next →
                        </button>
                      </Link>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* 3D Jobs Knowledge Graph - Desktop Only */}
        <DesktopOnly>
          <section className="py-20 md:py-28 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-sm text-gray-400 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Interactive 3D Network
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jobs Knowledge Graph</h2>
                <p className="text-lg text-gray-400">
                  Explore relationships between jobs, skills, and companies in 3D
                </p>
              </div>
              <Suspense fallback={
                <div className="rounded-xl p-6 flex items-center justify-center h-[550px]" style={{ background: 'radial-gradient(ellipse at center, #111827 0%, #030712 100%)' }}>
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-gray-600/30 border-t-gray-400 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-400 text-sm">Loading 3D network...</p>
                  </div>
                </div>
              }>
                <JobsGraph3D roleFilter={roleFilter} limit={20} height="550px" />
              </Suspense>
            </div>
          </section>
        </DesktopOnly>

        {/* Browse by Role - Dark section */}
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-4 block">By Function</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Role</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Fractional jobs offer experienced executives the opportunity to work with multiple companies on a part-time basis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Link href="/part-time-cfo" className="group">
                <article className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                  <span className="text-3xl mb-4 block">💰</span>
                  <h3 className="font-bold text-white group-hover:text-white transition-colors mb-1">Part-Time CFO</h3>
                  <p className="text-gray-400 text-sm">Finance leadership roles</p>
                </article>
              </Link>
              <Link href="/part-time-cmo" className="group">
                <article className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                  <span className="text-3xl mb-4 block">📢</span>
                  <h3 className="font-bold text-white group-hover:text-white transition-colors mb-1">Part-Time CMO</h3>
                  <p className="text-gray-400 text-sm">Marketing leadership roles</p>
                </article>
              </Link>
              <Link href="/fractional-cfo-salary" className="group">
                <article className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                  <span className="text-3xl mb-4 block">📊</span>
                  <h3 className="font-bold text-white group-hover:text-white transition-colors mb-1">CFO Salary Guide</h3>
                  <p className="text-gray-400 text-sm">Day rates & earnings</p>
                </article>
              </Link>
              <Link href="/fractional-cmo-salary" className="group">
                <article className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                  <span className="text-3xl mb-4 block">📈</span>
                  <h3 className="font-bold text-white group-hover:text-white transition-colors mb-1">CMO Salary Guide</h3>
                  <p className="text-gray-400 text-sm">Day rates & earnings</p>
                </article>
              </Link>
            </div>

            <div className="text-center mb-8">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-4 block">By Location</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by City</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                London dominates with 60% of roles, but Manchester, Birmingham, and Edinburgh have growing fractional communities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'London', href: '/fractional-jobs-london' },
                { label: 'Manchester', href: '/fractional-jobs-manchester' },
                { label: 'Birmingham', href: '/fractional-jobs-birmingham' },
                { label: 'Edinburgh', href: '/fractional-jobs-edinburgh' },
                { label: 'Bristol', href: '/fractional-jobs-bristol' },
                { label: 'Leeds', href: '/fractional-jobs-leeds' },
              ].map((loc) => (
                <Link
                  key={loc.label}
                  href={loc.href}
                  className="px-5 py-2.5 bg-white/10 text-white rounded-full hover:bg-white hover:text-gray-900 font-medium transition-all"
                >
                  {loc.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Data Exploration Section - Desktop Only */}
        <DesktopOnly>
          <section className="py-16 bg-gray-950">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-2 block">Advanced Analytics</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Explore the Market</h2>
                <p className="text-gray-400 mt-2">Interactive visualizations of roles, skills, and opportunities</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Sunburst */}
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-amber-400">◉</span> Role Hierarchy
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">Click to explore roles, companies, and jobs</p>
                  <Suspense fallback={
                    <div className="flex items-center justify-center h-80 bg-gray-900 rounded-lg">
                      <div className="w-10 h-10 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
                    </div>
                  }>
                    <JobsSunburst height="320px" />
                  </Suspense>
                </div>

                {/* Skills Radar */}
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-purple-400">◉</span> Skills Comparison
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">Compare skill requirements across C-suite roles</p>
                  <Suspense fallback={
                    <div className="flex items-center justify-center h-80 bg-gray-900 rounded-lg">
                      <div className="w-10 h-10 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                    </div>
                  }>
                    <SkillsRadar height="320px" />
                  </Suspense>
                </div>
              </div>
            </div>
          </section>
        </DesktopOnly>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-gray-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Stay Updated</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Can't find the right job?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Get notified when new fractional positions match your profile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/handler/sign-up"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                Create Job Alert
              </Link>
              <Link
                href="/fractional-jobs-articles"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                Read Career Guides
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-xl shadow-sm">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Jobs</h1>
          <p className="text-gray-600 mb-6">There was an error loading jobs. Please try again later.</p>
          <Link href="/">
            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-black font-semibold transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
