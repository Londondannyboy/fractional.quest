/**
 * JobPosting Schema Component
 * Generates structured data for job listings per Google's guidelines
 * https://developers.google.com/search/docs/appearance/structured-data/job-posting
 */

interface JobPostingSchemaProps {
  title: string
  description: string
  datePosted: string
  validThrough?: string
  company: {
    name: string
    logo?: string
    url?: string
  }
  location?: {
    city?: string
    region?: string
    country?: string
    postalCode?: string
    streetAddress?: string
  }
  isRemote?: boolean
  employmentType?: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'TEMPORARY' | 'INTERN' | 'VOLUNTEER' | 'PER_DIEM' | 'OTHER'
  salary?: {
    currency?: string
    value?: number
    minValue?: number
    maxValue?: number
    unitText?: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'
  }
  jobUrl: string
  skills?: string[]
  qualifications?: string[]
  responsibilities?: string[]
  benefits?: string[]
  experienceRequirements?: string
  educationRequirements?: string
  directApply?: boolean
}

export function JobPostingSchema({
  title,
  description,
  datePosted,
  validThrough,
  company,
  location,
  isRemote = false,
  employmentType = 'CONTRACTOR',
  salary,
  jobUrl,
  skills,
  qualifications,
  responsibilities,
  benefits,
  experienceRequirements,
  educationRequirements,
  directApply = true,
}: JobPostingSchemaProps) {
  // Build the structured data object
  const structuredData: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted,
    hiringOrganization: {
      '@type': 'Organization',
      name: company.name,
      ...(company.logo && { logo: company.logo }),
      ...(company.url && { sameAs: company.url }),
    },
    employmentType,
    directApply,
    url: jobUrl,
  }

  // Add validity period if provided
  if (validThrough) {
    structuredData.validThrough = validThrough
  }

  // Add job location
  if (location && !isRemote) {
    structuredData.jobLocation = {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        ...(location.streetAddress && { streetAddress: location.streetAddress }),
        ...(location.city && { addressLocality: location.city }),
        ...(location.region && { addressRegion: location.region }),
        ...(location.postalCode && { postalCode: location.postalCode }),
        addressCountry: location.country || 'GB',
      },
    }
  }

  // Handle remote work
  if (isRemote) {
    structuredData.jobLocationType = 'TELECOMMUTE'
    structuredData.applicantLocationRequirements = {
      '@type': 'Country',
      name: 'United Kingdom',
    }
  }

  // Add salary information if provided
  if (salary) {
    structuredData.baseSalary = {
      '@type': 'MonetaryAmount',
      currency: salary.currency || 'GBP',
      value: {
        '@type': 'QuantitativeValue',
        ...(salary.value && { value: salary.value }),
        ...(salary.minValue && { minValue: salary.minValue }),
        ...(salary.maxValue && { maxValue: salary.maxValue }),
        unitText: salary.unitText || 'DAY',
      },
    }
  }

  // Add skills if provided
  if (skills && skills.length > 0) {
    structuredData.skills = skills.join(', ')
  }

  // Add qualifications
  if (qualifications && qualifications.length > 0) {
    structuredData.qualifications = qualifications.join('. ')
  }

  // Add responsibilities
  if (responsibilities && responsibilities.length > 0) {
    structuredData.responsibilities = responsibilities.join('. ')
  }

  // Add job benefits
  if (benefits && benefits.length > 0) {
    structuredData.jobBenefits = benefits.join(', ')
  }

  // Add experience requirements
  if (experienceRequirements) {
    structuredData.experienceRequirements = experienceRequirements
  }

  // Add education requirements
  if (educationRequirements) {
    structuredData.educationRequirements = {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: educationRequirements,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

/**
 * Role-based salary estimates for schema (day rates in GBP)
 * Used when no compensation is provided - Google prefers estimated salaries over missing
 */
const ROLE_SALARY_ESTIMATES: Record<string, { min: number; max: number }> = {
  'Executive': { min: 1000, max: 2000 },
  'CEO': { min: 1000, max: 2000 },
  'CFO': { min: 900, max: 1500 },
  'Finance': { min: 900, max: 1500 },
  'CTO': { min: 850, max: 1600 },
  'Engineering': { min: 850, max: 1600 },
  'CMO': { min: 800, max: 1400 },
  'Marketing': { min: 800, max: 1400 },
  'COO': { min: 850, max: 1400 },
  'Operations': { min: 850, max: 1400 },
  'HR': { min: 700, max: 1200 },
  'CHRO': { min: 800, max: 1300 },
  'Product': { min: 800, max: 1300 },
  'CPO': { min: 800, max: 1300 },
  'Sales': { min: 750, max: 1300 },
  'CRO': { min: 800, max: 1400 },
  'default': { min: 700, max: 1200 },
}

/**
 * Get estimated salary for a role category
 */
function getEstimatedSalary(roleCategory?: string, title?: string): { min: number; max: number } {
  // Try role category first
  if (roleCategory && ROLE_SALARY_ESTIMATES[roleCategory]) {
    return ROLE_SALARY_ESTIMATES[roleCategory]
  }

  // Try to infer from title
  if (title) {
    const t = title.toLowerCase()
    if (t.includes('ceo') || t.includes('chief executive')) return ROLE_SALARY_ESTIMATES['CEO']
    if (t.includes('cfo') || t.includes('chief financial')) return ROLE_SALARY_ESTIMATES['CFO']
    if (t.includes('cto') || t.includes('chief technology')) return ROLE_SALARY_ESTIMATES['CTO']
    if (t.includes('cmo') || t.includes('chief marketing')) return ROLE_SALARY_ESTIMATES['CMO']
    if (t.includes('coo') || t.includes('chief operating')) return ROLE_SALARY_ESTIMATES['COO']
    if (t.includes('chro') || t.includes('chief people') || t.includes('hr director')) return ROLE_SALARY_ESTIMATES['HR']
    if (t.includes('cpo') || t.includes('chief product')) return ROLE_SALARY_ESTIMATES['Product']
    if (t.includes('cro') || t.includes('chief revenue') || t.includes('sales director')) return ROLE_SALARY_ESTIMATES['Sales']
  }

  return ROLE_SALARY_ESTIMATES['default']
}

/**
 * Calculate validThrough date (30 days from posted date)
 */
function calculateValidThrough(postedDate?: string): string {
  const baseDate = postedDate ? new Date(postedDate) : new Date()
  const validThrough = new Date(baseDate.getTime() + 30 * 24 * 60 * 60 * 1000)
  return validThrough.toISOString().split('T')[0]
}

/**
 * Generate JobPosting schema for a list of jobs (for job listing pages)
 * Enhanced with salary estimates, validThrough, and complete schema fields
 */
interface JobListingSchemaProps {
  jobs: Array<{
    id: string
    slug: string
    title: string
    company_name: string
    location?: string
    is_remote?: boolean
    compensation?: string
    posted_date?: string
    description_snippet?: string
    role_category?: string
    skills_required?: string[]
  }>
  pageUrl: string
}

export function JobListingSchema({ jobs, pageUrl }: JobListingSchemaProps) {
  // Generate ItemList schema for multiple jobs with full compliance
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: jobs.map((job, index) => {
      const datePosted = job.posted_date || new Date().toISOString().split('T')[0]
      const validThrough = calculateValidThrough(job.posted_date)
      const estimatedSalary = getEstimatedSalary(job.role_category, job.title)
      const parsedSalary = job.compensation ? parseCompensation(job.compensation) : null

      // Build base salary - use parsed if available, otherwise estimate
      const baseSalary = parsedSalary ? {
        '@type': 'MonetaryAmount',
        currency: parsedSalary.currency || 'GBP',
        value: {
          '@type': 'QuantitativeValue',
          minValue: parsedSalary.minValue,
          ...(parsedSalary.maxValue && { maxValue: parsedSalary.maxValue }),
          unitText: parsedSalary.unitText || 'DAY',
        },
      } : {
        '@type': 'MonetaryAmount',
        currency: 'GBP',
        value: {
          '@type': 'QuantitativeValue',
          minValue: estimatedSalary.min,
          maxValue: estimatedSalary.max,
          unitText: 'DAY',
        },
      }

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'JobPosting',
          '@id': `https://fractional.quest/fractional-job/${job.slug}`,
          title: job.title,
          description: job.description_snippet || `${job.title} position at ${job.company_name}. Fractional/part-time opportunity in the UK.`,
          hiringOrganization: {
            '@type': 'Organization',
            name: job.company_name || 'Confidential',
          },
          datePosted,
          validThrough,
          employmentType: 'CONTRACTOR',
          baseSalary,
          directApply: true,
          url: `https://fractional.quest/fractional-job/${job.slug}`,
          // Location handling
          ...(job.is_remote ? {
            jobLocationType: 'TELECOMMUTE',
            applicantLocationRequirements: {
              '@type': 'Country',
              name: 'United Kingdom',
            },
          } : {
            jobLocation: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                addressLocality: job.location || 'United Kingdom',
                addressCountry: 'GB',
              },
            },
          }),
          // Skills if available
          ...(job.skills_required && job.skills_required.length > 0 && {
            skills: job.skills_required.join(', '),
          }),
        },
      }
    }),
    numberOfItems: jobs.length,
    url: pageUrl,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

/**
 * Helper to parse compensation string to salary object
 */
export function parseCompensation(compensation: string | undefined): JobPostingSchemaProps['salary'] | undefined {
  if (!compensation) return undefined

  // Try to extract day rate (e.g., "£800-£1,200/day", "£1000 per day")
  const dayRateMatch = compensation.match(/£([\d,]+)(?:\s*-\s*£([\d,]+))?(?:\s*\/?\s*(?:day|per day|pd))/i)
  if (dayRateMatch) {
    const minValue = parseInt(dayRateMatch[1].replace(/,/g, ''))
    const maxValue = dayRateMatch[2] ? parseInt(dayRateMatch[2].replace(/,/g, '')) : undefined
    return {
      currency: 'GBP',
      minValue,
      ...(maxValue && { maxValue }),
      unitText: 'DAY',
    }
  }

  // Try to extract annual salary (e.g., "£80,000-£120,000", "£100k")
  const annualMatch = compensation.match(/£([\d,]+)(?:k)?(?:\s*-\s*£([\d,]+)(?:k)?)?(?:\s*(?:pa|per annum|\/year))?/i)
  if (annualMatch) {
    let minValue = parseInt(annualMatch[1].replace(/,/g, ''))
    if (compensation.includes('k')) minValue *= 1000
    let maxValue = annualMatch[2] ? parseInt(annualMatch[2].replace(/,/g, '')) : undefined
    if (maxValue && compensation.includes('k')) maxValue *= 1000
    return {
      currency: 'GBP',
      minValue,
      ...(maxValue && { maxValue }),
      unitText: 'YEAR',
    }
  }

  return undefined
}
