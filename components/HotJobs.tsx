'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface HotJob {
  id: string
  slug: string
  title: string
  company_name: string
  location: string
  compensation?: string
  role_category?: string
  posted_date: string
  is_remote?: boolean
}

interface HotJobsProps {
  jobs: HotJob[]
  className?: string
  title?: string
  maxJobs?: number
}

// Calculate relative time with precise formatting
// Jobs from last 2 hours get "hot" badge, last 24 hours shown in section
function getRelativeTime(dateString: string): { text: string; isHot: boolean; isNew: boolean; minutes: number } {
  const posted = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - posted.getTime()
  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  // "Hot" = last 2 hours, "New" = last 24 hours
  const isHot = diffHours < 2
  const isNew = diffHours < 24

  if (diffMinutes < 1) {
    return { text: 'Just now', isHot: true, isNew: true, minutes: 0 }
  } else if (diffMinutes < 60) {
    return { text: `${diffMinutes} min ago`, isHot: true, isNew: true, minutes: diffMinutes }
  } else if (diffHours < 24) {
    return { text: `${diffHours}h ago`, isHot, isNew: true, minutes: diffMinutes }
  } else if (diffDays === 1) {
    return { text: 'Yesterday', isHot: false, isNew: false, minutes: diffMinutes }
  } else if (diffDays < 7) {
    return { text: `${diffDays} days ago`, isHot: false, isNew: false, minutes: diffMinutes }
  } else {
    return {
      text: posted.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      isHot: false,
      isNew: false,
      minutes: diffMinutes
    }
  }
}

export function HotJobs({
  jobs,
  className = '',
  title = 'Hot Jobs',
  maxJobs = 5
}: HotJobsProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update time every minute for live timestamps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  // Get all jobs with relative times, sorted by newest first
  const allJobsWithTime = jobs
    .map(job => ({
      ...job,
      relativeTime: getRelativeTime(job.posted_date)
    }))
    .sort((a, b) => a.relativeTime.minutes - b.relativeTime.minutes)

  // Filter to jobs posted in last 24 hours
  const last24Hours = allJobsWithTime.filter(job => job.relativeTime.isNew)

  // If we have jobs from last 24 hours, show those. Otherwise show newest available
  const displayJobs = last24Hours.length > 0
    ? last24Hours.slice(0, maxJobs)
    : allJobsWithTime.slice(0, maxJobs)

  if (displayJobs.length === 0) return null

  // Count truly "hot" jobs (last 2 hours)
  const hotCount = displayJobs.filter(j => j.relativeTime.isHot).length
  // Count new jobs (last 24 hours)
  const newCount = displayJobs.filter(j => j.relativeTime.isNew).length

  return (
    <div className={`bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          {newCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-bold bg-orange-500 text-white rounded-full">
              {newCount} today
            </span>
          )}
          {hotCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-bold bg-red-500 text-white rounded-full animate-pulse">
              {hotCount} just in
            </span>
          )}
        </div>
        <span className="text-xs text-gray-500" suppressHydrationWarning>
          Updated {currentTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {/* Job List */}
      <div className="space-y-3">
        {displayJobs.map((job, index) => (
          <Link
            key={job.id || job.slug}
            href={`/job/${job.slug}`}
            className="block bg-white rounded-xl p-4 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                  {job.title}
                </h4>

                {/* Company & Location */}
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                  <span className="truncate">{job.company_name}</span>
                  <span className="text-gray-300">•</span>
                  <span className="truncate">{job.location}</span>
                  {job.is_remote && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-emerald-800 font-semibold">Remote</span>
                    </>
                  )}
                </div>

                {/* Compensation */}
                {job.compensation && (
                  <div className="mt-1 text-sm font-medium text-gray-700">
                    {job.compensation}
                  </div>
                )}
              </div>

              {/* Time Badge */}
              <div className="flex-shrink-0">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                  job.relativeTime.isHot
                    ? 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {job.relativeTime.isHot && (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  )}
                  {job.relativeTime.text}
                </span>
              </div>
            </div>

            {/* Role Category Badge */}
            {job.role_category && (
              <div className="mt-2">
                <span className="inline-block px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                  {job.role_category}
                </span>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-4 text-center">
        <Link
          href="/fractional-jobs-uk"
          className="text-sm font-semibold text-orange-600 hover:text-orange-700"
        >
          View all jobs →
        </Link>
      </div>
    </div>
  )
}

// Compact version for sidebars
export function HotJobsCompact({
  jobs,
  className = '',
  maxJobs = 3
}: { jobs: HotJob[]; className?: string; maxJobs?: number }) {
  const recentJobs = jobs
    .map(job => ({
      ...job,
      relativeTime: getRelativeTime(job.posted_date)
    }))
    .sort((a, b) => a.relativeTime.minutes - b.relativeTime.minutes)
    .slice(0, maxJobs)

  if (recentJobs.length === 0) return null

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <h3 className="text-sm font-bold text-gray-900">Latest Jobs</h3>
      </div>
      <div className="space-y-2">
        {recentJobs.map((job) => (
          <Link
            key={job.id || job.slug}
            href={`/job/${job.slug}`}
            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900 truncate flex-1">
                {job.title}
              </span>
              <span className={`text-xs ml-2 ${
                job.relativeTime.isHot ? 'text-red-600 font-medium' : 'text-gray-500'
              }`}>
                {job.relativeTime.text}
              </span>
            </div>
            <span className="text-xs text-gray-500">{job.company_name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
