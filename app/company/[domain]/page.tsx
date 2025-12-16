import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createDbQuery } from '@/lib/db'
import { JobCard } from '@/components/JobCard'

export const revalidate = 3600 // Revalidate every hour

interface CompanyPageProps {
  params: Promise<{ domain: string }>
}

interface BrandColor {
  hex: string
  type: string
  brightness: number
}

interface BrandData {
  colors: BrandColor[]
  logos: Record<string, string>
  banners: Record<string, string>
  description: string | null
  founded: number | null
  employees: number | null
  city: string | null
  country: string | null
  company_kind: string | null
  industries: string[] | null
  quality_score: string | null
  font_title: string | null
  font_body: string | null
  // Brand.dev specific fields
  socials: Record<string, string> | null
  links: Record<string, string | null> | null
  slogan: string | null
  styleguide: any | null
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { domain } = await params
  const sql = createDbQuery()

  const [company] = await sql`
    SELECT DISTINCT company_name
    FROM jobs
    WHERE company_domain = ${domain} AND is_active = true
    LIMIT 1
  `

  if (!company) {
    return { title: 'Company Not Found' }
  }

  return {
    title: `${company.company_name} Jobs | Fractional Quest`,
    description: `Browse fractional and part-time jobs at ${company.company_name}. Find executive roles, day rates, and flexible opportunities.`,
    openGraph: {
      title: `${company.company_name} - Fractional Jobs`,
      description: `Browse fractional and part-time jobs at ${company.company_name}`,
      type: 'website',
    },
  }
}

async function getCompanyData(domain: string) {
  const sql = createDbQuery()

  // Get all jobs for this company
  const jobs = await sql`
    SELECT
      id, slug, title, company_name, location, city, is_remote,
      workplace_type, compensation, role_category, seniority_level,
      skills_required, posted_date, description_snippet, company_domain
    FROM jobs
    WHERE company_domain = ${domain} AND is_active = true
    ORDER BY posted_date DESC NULLS LAST
  `

  if (jobs.length === 0) {
    return null
  }

  // Get brand data if available
  const [brandData] = await sql`
    SELECT colors, logos, banners, description, founded, employees,
           city, country, company_kind, industries, quality_score,
           font_title, font_body, socials, links, slogan, styleguide
    FROM company_brands
    WHERE domain = ${domain}
    LIMIT 1
  `

  // Get company stats
  const companyName = jobs[0].company_name
  const roleCategories = [...new Set(jobs.map((j: any) => j.role_category).filter(Boolean))]
  const locations = [...new Set(jobs.map((j: any) => j.city || j.location).filter(Boolean))]

  return {
    name: companyName,
    domain,
    jobs,
    stats: {
      totalJobs: jobs.length,
      roleCategories,
      locations,
    },
    brand: brandData as BrandData | undefined
  }
}

// Helper to get brand styling
function getBrandStyling(brand?: BrandData) {
  const defaultColors = {
    primary: '#1f2937',
    accent: '#a855f7',
    light: '#f9fafb',
    text: 'white',
    background: '#f9fafb'
  }

  if (!brand?.colors || brand.colors.length === 0) {
    return {
      colors: defaultColors,
      banner: null,
      logo: null,
      hasRichBranding: false,
      buttonStyle: null
    }
  }

  // Find colors by type from brand extraction
  const darkColor = brand.colors.find(c => c.type === 'dark')
    || brand.colors.reduce((darkest, c) => c.brightness < darkest.brightness ? c : darkest)
  const accentColor = brand.colors.find(c => c.type === 'accent')
  const lightColor = brand.colors.find(c => c.type === 'light')

  // Get styleguide colors if available (more accurate)
  const styleguideColors = brand.styleguide?.colors
  const styleguideAccent = styleguideColors?.accent
  const styleguideBackground = styleguideColors?.background

  // Get banner image if available
  const banner = brand.banners?.banner || brand.banners?.background || null

  // Get logo - prefer light logo for dark backgrounds
  const logo = brand.logos?.logo_light || brand.logos?.logo_dark
    || brand.logos?.symbol_light || brand.logos?.symbol_dark || null

  // Determine text color based on background brightness
  const textColor = darkColor.brightness < 128 ? 'white' : '#1f2937'

  // Get button styling from styleguide if available
  const buttonStyle = brand.styleguide?.components?.button?.primary || null

  return {
    colors: {
      primary: darkColor.hex,
      // Prefer styleguide accent (more accurate) over extracted accent
      accent: styleguideAccent || accentColor?.hex || '#a855f7',
      light: lightColor?.hex || '#f9fafb',
      text: textColor,
      // Styleguide background for cards/sections
      background: styleguideBackground || lightColor?.hex || '#f9fafb'
    },
    banner,
    logo,
    hasRichBranding: !!banner || (brand.colors.length >= 2 && !!logo),
    buttonStyle
  }
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { domain } = await params
  const company = await getCompanyData(domain)

  if (!company) {
    notFound()
  }

  const styling = getBrandStyling(company.brand)
  const { colors, banner, logo } = styling

  // Build location string
  const locationParts = [company.brand?.city, company.brand?.country].filter(Boolean)
  const locationString = locationParts.join(', ')

  return (
    <div className="min-h-screen bg-white">
      {/* Epic Hero Section */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {/* Background - Banner image or gradient */}
        {banner ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${banner})` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${colors.primary} 0%, ${colors.primary}CC 30%, ${colors.primary}66 60%, transparent 100%)`
              }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent}44 50%, ${colors.primary} 100%)`
            }}
          />
        )}

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full opacity-10"
            style={{ backgroundColor: colors.accent }}
          />
          <div
            className="absolute -bottom-1/2 -left-1/4 w-3/4 h-3/4 rounded-full opacity-5"
            style={{ backgroundColor: colors.light }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pb-12 md:pb-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center mb-8 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: colors.text, opacity: 0.7 }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Jobs
            </Link>

            <div className="flex flex-col md:flex-row md:items-end gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                {logo ? (
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white shadow-2xl p-4 flex items-center justify-center">
                    <img
                      src={logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-2xl flex items-center justify-center"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <span className="text-6xl font-black text-white">
                      {company.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Company Info */}
              <div className="flex-1">
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-none tracking-tight"
                  style={{ color: colors.text }}
                >
                  {company.name}
                </h1>

                {/* Slogan */}
                {company.brand?.slogan && (
                  <p
                    className="text-2xl md:text-3xl mb-4 max-w-3xl font-light italic"
                    style={{ color: colors.text, opacity: 0.9 }}
                  >
                    "{company.brand.slogan}"
                  </p>
                )}

                {/* Description */}
                {company.brand?.description && (
                  <p
                    className="text-base md:text-lg mb-6 max-w-2xl"
                    style={{ color: colors.text, opacity: 0.8 }}
                  >
                    {company.brand.description.length > 200
                      ? company.brand.description.slice(0, 200) + '...'
                      : company.brand.description}
                  </p>
                )}

                {/* Social Links */}
                {company.brand?.socials && Object.keys(company.brand.socials).length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {company.brand.socials.linkedin && (
                      <a
                        href={company.brand.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full transition-opacity hover:opacity-80"
                        style={{ backgroundColor: `${colors.light}22` }}
                        aria-label={`${company.name} on LinkedIn`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.text }}>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {company.brand.socials.x && (
                      <a
                        href={company.brand.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full transition-opacity hover:opacity-80"
                        style={{ backgroundColor: `${colors.light}22` }}
                        aria-label={`${company.name} on X`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.text }}>
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                    {company.brand.socials.facebook && (
                      <a
                        href={company.brand.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full transition-opacity hover:opacity-80"
                        style={{ backgroundColor: `${colors.light}22` }}
                        aria-label={`${company.name} on Facebook`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.text }}>
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                    {company.brand.socials.youtube && (
                      <a
                        href={company.brand.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full transition-opacity hover:opacity-80"
                        style={{ backgroundColor: `${colors.light}22` }}
                        aria-label={`${company.name} on YouTube`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.text }}>
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    )}
                    {/* Careers link if available */}
                    {company.brand.links?.careers && (
                      <a
                        href={company.brand.links.careers}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                        style={{ backgroundColor: colors.accent, color: 'white' }}
                        aria-label={`View careers at ${company.name}`}
                      >
                        View All Careers →
                      </a>
                    )}
                  </div>
                )}

                {/* Meta info row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                  {locationString && (
                    <span className="flex items-center gap-2" style={{ color: colors.text, opacity: 0.8 }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {locationString}
                    </span>
                  )}
                  {company.brand?.founded && (
                    <span className="flex items-center gap-2" style={{ color: colors.text, opacity: 0.8 }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Founded {company.brand.founded}
                    </span>
                  )}
                  {company.brand?.employees && (
                    <span className="flex items-center gap-2" style={{ color: colors.text, opacity: 0.8 }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {company.brand.employees.toLocaleString()}+ employees
                    </span>
                  )}
                </div>

                {/* Industry tags */}
                {company.brand?.industries && company.brand.industries.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {company.brand.industries.map((industry: string) => (
                      <span
                        key={industry}
                        className="px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm"
                        style={{
                          backgroundColor: `${colors.accent}33`,
                          color: colors.text,
                          border: `1px solid ${colors.accent}66`
                        }}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                )}

                {/* Website link */}
                <a
                  href={`https://${company.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: colors.accent,
                    color: 'white'
                  }}
                >
                  Visit Website
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: colors.primary }} className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black" style={{ color: colors.text }}>
                {company.stats.totalJobs}
              </div>
              <div style={{ color: colors.text, opacity: 0.6 }} className="text-sm font-medium uppercase tracking-wider mt-1">
                Open Roles
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black" style={{ color: colors.text }}>
                {company.stats.roleCategories.length}
              </div>
              <div style={{ color: colors.text, opacity: 0.6 }} className="text-sm font-medium uppercase tracking-wider mt-1">
                Departments
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black" style={{ color: colors.text }}>
                {company.stats.locations.length}
              </div>
              <div style={{ color: colors.text, opacity: 0.6 }} className="text-sm font-medium uppercase tracking-wider mt-1">
                Locations
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <svg className="w-10 h-10 md:w-12 md:h-12" style={{ color: colors.accent }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div style={{ color: colors.text, opacity: 0.6 }} className="text-sm font-medium uppercase tracking-wider mt-1">
                Verified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Tags */}
      {company.stats.roleCategories.length > 0 && (
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 mr-2">Hiring in:</span>
              {company.stats.roleCategories.map((category: string) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Jobs List */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Open Positions at {company.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.jobs.map((job: any) => {
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
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in {company.name}?
          </h2>
          <p className="text-gray-600 mb-8">
            Set up job alerts to get notified when new positions open up.
          </p>
          <Link
            href="/handler/sign-up"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-all"
          >
            Create Job Alert
          </Link>
        </div>
      </section>
    </div>
  )
}
