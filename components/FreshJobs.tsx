/**
 * FreshJobs - Shows latest job postings with schema markup
 * Displays recent fractional executive jobs for SEO and user engagement
 */

import Link from 'next/link'
import { createDbQuery } from '@/lib/db'

interface Job {
  id: number
  slug: string
  title: string
  company_name: string
  location: string | null
  is_remote: boolean
  compensation: string | null
  role_category: string | null
  posted_date: string | null
  description_snippet: string | null
}

interface FreshJobsProps {
  limit?: number
  title?: string
  showViewAll?: boolean
}

export async function FreshJobs({
  limit = 6,
  title = "Fresh Jobs This Week",
  showViewAll = true
}: FreshJobsProps) {
  let jobs: Job[] = []

  try {
    const sql = createDbQuery()
    jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote,
             compensation, role_category, posted_date, description_snippet
      FROM jobs
      WHERE is_active = true AND is_fractional = true
      ORDER BY posted_date DESC NULLS LAST
      LIMIT ${limit}
    ` as Job[]
  } catch (error) {
    console.error('[FreshJobs] Failed to fetch jobs:', error)
    return null
  }

  if (jobs.length === 0) {
    console.log('[FreshJobs] No jobs found')
    return null
  }

  // Generate JobPosting schema for each job
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Latest Fractional Jobs UK",
    "description": "Recent fractional executive job opportunities in the UK",
    "numberOfItems": jobs.length,
    "itemListElement": jobs.map((job, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description_snippet || `${job.title} position at ${job.company_name}`,
        "datePosted": job.posted_date || new Date().toISOString(),
        "hiringOrganization": {
          "@type": "Organization",
          "name": job.company_name
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": job.location || "United Kingdom",
            "addressCountry": "GB"
          }
        },
        "employmentType": "CONTRACTOR",
        ...(job.is_remote && {
          "jobLocationType": "TELECOMMUTE",
          "applicantLocationRequirements": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        }),
        "url": `https://fractional.quest/fractional-job/${job.slug}`
      }
    }))
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Recently posted'
    const date = new Date(dateString)
    const daysAgo = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
    if (daysAgo === 0) return 'Today'
    if (daysAgo === 1) return 'Yesterday'
    if (daysAgo < 7) return `${daysAgo} days ago`
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  }

  return (
    <section className="py-12">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600">
            Latest fractional executive opportunities • Updated daily
          </p>
        </div>
        {showViewAll && (
          <Link
            href="/fractional-jobs-uk"
            className="hidden md:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            View all jobs
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/fractional-job/${job.slug}`}
            className="group relative flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200"
          >
            {/* Role Category Badge */}
            {job.role_category && (
              <span className="inline-block self-start px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3">
                {job.role_category}
              </span>
            )}

            {/* Job Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {job.title}
            </h3>

            {/* Company */}
            <p className="text-gray-700 font-medium mb-2">
              {job.company_name}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.is_remote ? 'Remote' : job.location || 'UK'}
            </div>

            {/* Compensation & Date */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
              {job.compensation && (
                <span className="text-sm font-semibold text-gray-900">
                  {job.compensation}
                </span>
              )}
              <span className="text-xs text-gray-500">
                {formatDate(job.posted_date)}
              </span>
            </div>

            {/* Hover Arrow */}
            <div className="absolute top-6 right-6 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View All */}
      {showViewAll && (
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/fractional-jobs-uk"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            View all jobs →
          </Link>
        </div>
      )}
    </section>
  )
}
