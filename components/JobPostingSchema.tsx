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
 * Generate JobPosting schema for a list of jobs (for job listing pages)
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
  }>
  pageUrl: string
}

export function JobListingSchema({ jobs, pageUrl }: JobListingSchemaProps) {
  // Generate ItemList schema for multiple jobs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: jobs.map((job, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'JobPosting',
        '@id': `https://fractional.quest/fractional-job/${job.slug}`,
        title: job.title,
        hiringOrganization: {
          '@type': 'Organization',
          name: job.company_name || 'Confidential',
        },
        datePosted: job.posted_date || new Date().toISOString().split('T')[0],
        ...(job.description_snippet && { description: job.description_snippet }),
        ...(job.is_remote && { jobLocationType: 'TELECOMMUTE' }),
        ...(job.location && !job.is_remote && {
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: job.location,
              addressCountry: 'GB',
            },
          },
        }),
        employmentType: 'CONTRACTOR',
        url: `https://fractional.quest/fractional-job/${job.slug}`,
      },
    })),
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
