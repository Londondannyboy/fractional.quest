import Link from 'next/link'

interface HotJobLine {
  id: string
  slug: string
  title: string
  company_name: string
  location: string
  compensation?: string
  posted_date?: string
  is_remote?: boolean
  role_category?: string
}

interface HotJobsLinesProps {
  jobs: HotJobLine[]
  title?: string
  maxJobs?: number
  className?: string
  showViewAll?: boolean
  viewAllHref?: string
  viewAllText?: string
}

// Calculate days ago
function getDaysAgo(dateString?: string): string {
  if (!dateString) return ''
  const posted = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - posted.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return '1d'
  if (diffDays < 7) return `${diffDays}d`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w`
  return `${Math.floor(diffDays / 30)}mo`
}

export function HotJobsLines({
  jobs,
  title = 'Latest Jobs',
  maxJobs = 10,
  className = '',
  showViewAll = true,
  viewAllHref = '/fractional-jobs-uk',
  viewAllText = 'View all jobs'
}: HotJobsLinesProps) {
  const displayJobs = jobs.slice(0, maxJobs)

  if (displayJobs.length === 0) return null

  return (
    <div className={`bg-white border border-gray-200 rounded-xl ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-xl">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <h2 className="text-sm font-bold text-gray-900">{title}</h2>
          <span className="text-xs text-gray-500">({displayJobs.length})</span>
        </div>
        {showViewAll && (
          <Link
            href={viewAllHref}
            className="text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            {viewAllText} →
          </Link>
        )}
      </div>

      {/* Job Lines */}
      <div className="divide-y divide-gray-100">
        {displayJobs.map((job) => {
          const daysAgo = getDaysAgo(job.posted_date)

          return (
            <Link
              key={job.id || job.slug}
              href={`/fractional-job/${job.slug}`}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 transition-colors group"
            >
              {/* Role indicator dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />

              {/* Job title */}
              <span className="font-medium text-gray-900 group-hover:text-blue-600 truncate flex-1 min-w-0 text-sm">
                {job.title}
              </span>

              {/* Company */}
              <span className="text-gray-500 text-sm truncate max-w-[120px] hidden sm:block">
                {job.company_name}
              </span>

              {/* Location/Remote */}
              <span className="text-gray-400 text-xs truncate max-w-[80px] hidden md:block">
                {job.is_remote ? 'Remote' : job.location?.split(',')[0]}
              </span>

              {/* Compensation if available */}
              {job.compensation && (
                <span className="text-emerald-700 text-xs font-medium hidden lg:block">
                  {job.compensation}
                </span>
              )}

              {/* Days ago */}
              {daysAgo && (
                <span className="text-gray-400 text-xs w-8 text-right flex-shrink-0">
                  {daysAgo}
                </span>
              )}

              {/* Arrow */}
              <svg
                className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )
        })}
      </div>

      {/* Footer with count */}
      {showViewAll && jobs.length > maxJobs && (
        <div className="px-4 py-2 bg-gray-50 rounded-b-xl border-t border-gray-100">
          <Link
            href={viewAllHref}
            className="text-xs text-gray-500 hover:text-blue-600"
          >
            +{jobs.length - maxJobs} more jobs available
          </Link>
        </div>
      )}
    </div>
  )
}

// Minimal version - just titles as links (like fractionaljobs.io)
export function HotJobsMinimal({
  jobs,
  title = 'Jobs',
  maxJobs = 15,
  className = '',
  viewAllHref = '/fractional-jobs-uk',
}: HotJobsLinesProps) {
  const displayJobs = jobs.slice(0, maxJobs)

  if (displayJobs.length === 0) return null

  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">{title}</h2>
        <span className="text-xs text-gray-400">{displayJobs.length} jobs</span>
      </div>
      <ul className="space-y-1">
        {displayJobs.map((job) => (
          <li key={job.id || job.slug}>
            <Link
              href={`/fractional-job/${job.slug}`}
              className="flex items-center gap-2 py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <span className="text-blue-500">→</span>
              <span className="truncate">{job.title}</span>
              <span className="text-gray-400 text-xs hidden sm:inline">@ {job.company_name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={viewAllHref}
        className="inline-block mt-3 text-xs font-medium text-blue-600 hover:text-blue-700"
      >
        View all jobs →
      </Link>
    </div>
  )
}
