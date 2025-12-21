'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { useUser } from '@stackframe/stack'
import { AspirationalBadge } from './AspirationalBadge'
import { generateAspirationalMessage } from '@/lib/aspirational-messages'
import type { AspirationalMessageData } from '@/lib/types'

interface JobCardProps {
  jobId?: string | number
  slug?: string
  title: string
  company: string
  location: string
  isRemote: boolean
  workplaceType?: string | null
  compensation?: string
  dayRate?: number
  currency?: string
  roleCategory?: string
  skills?: string[]
  postedDaysAgo?: number
  hoursPerWeek?: string
  className?: string
  onClick?: () => void
  // Optional: override the auto-generated message
  aspirationalMessage?: AspirationalMessageData | null
  // Additional props for compatibility
  companyDomain?: string
  description?: string
  jobSource?: string
  isSyndicated?: boolean
  postedDate?: Date
  estimatedDayRate?: { min: number; max: number }
  companyType?: 'direct' | 'recruiter' | 'job_board'
  appealSummary?: string
  keyDeliverables?: string[]
}

export function JobCard({
  jobId,
  slug,
  title,
  company,
  location,
  isRemote,
  workplaceType,
  compensation,
  dayRate,
  currency = '£',
  roleCategory,
  skills = [],
  postedDaysAgo,
  hoursPerWeek,
  className = '',
  onClick,
  aspirationalMessage: customMessage,
  // Additional props for compatibility (may not all be used yet)
  companyDomain,
  description,
  jobSource,
  isSyndicated,
  postedDate,
  estimatedDayRate,
  companyType,
  appealSummary,
  keyDeliverables,
}: JobCardProps) {
  const user = useUser()
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Generate aspirational message based on job context
  const aspirationalMessage = useMemo(() => {
    if (customMessage !== undefined) return customMessage

    const message = generateAspirationalMessage({
      isRemote,
      workplaceType,
      location,
      hoursPerWeek,
    })

    // Convert to AspirationalMessageData format
    if (message) {
      return {
        headline: message.headline,
        subtext: message.subtext,
        type: message.type,
        icon: message.icon,
      } as AspirationalMessageData
    }
    return null
  }, [customMessage, isRemote, workplaceType, location, hoursPerWeek])

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!jobId) return

    if (!user) {
      window.location.href = '/handler/sign-in?returnUrl=' + encodeURIComponent(window.location.pathname)
      return
    }

    setIsSaving(true)
    try {
      const response = await fetch('/api/save-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobId, action: isSaved ? 'remove' : 'add' })
      })

      if (response.ok) {
        setIsSaved(!isSaved)
      }
    } catch (error) {
      console.error('Failed to save job:', error)
    } finally {
      setIsSaving(false)
    }
  }

  // Format compensation display
  const compensationDisplay = useMemo(() => {
    if (dayRate) {
      return `${currency}${dayRate.toLocaleString()}/day`
    }
    if (compensation) {
      return compensation
    }
    return null
  }, [dayRate, currency, compensation])

  // Format posted time
  const postedDisplay = useMemo(() => {
    if (postedDaysAgo === undefined) return null
    if (postedDaysAgo === 0) return 'Today'
    if (postedDaysAgo === 1) return 'Yesterday'
    if (postedDaysAgo < 7) return `${postedDaysAgo} days ago`
    if (postedDaysAgo < 14) return '1 week ago'
    return `${Math.floor(postedDaysAgo / 7)} weeks ago`
  }, [postedDaysAgo])

  // Location display with remote indicator
  const locationDisplay = useMemo(() => {
    if (isRemote && !location) return 'Remote'
    if (isRemote) return `${location} (Remote)`
    if (workplaceType === 'Hybrid') return `${location} (Hybrid)`
    return location || 'Location TBD'
  }, [location, isRemote, workplaceType])

  const cardContent = (
    <article
      className={`
        card-premium p-6 flex flex-col h-full
        cursor-pointer group
        ${className}
      `}
      onClick={onClick}
    >
      {/* Header: Category + Posted */}
      <header className="flex justify-between items-start mb-3">
        {roleCategory && (
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            {roleCategory}
          </span>
        )}
        {postedDisplay && (
          <span className="text-xs text-gray-400">
            {postedDisplay}
          </span>
        )}
      </header>

      {/* Title - Editorial font */}
      <h3 className="font-editorial text-xl text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
        {title}
      </h3>

      {/* Company */}
      <p className="text-base font-medium text-gray-700 mb-4">
        {company}
      </p>

      {/* Aspirational Message */}
      {aspirationalMessage && (
        <div className="mb-4">
          <AspirationalBadge message={aspirationalMessage} />
        </div>
      )}

      {/* Meta: Location + Compensation */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
        <span className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {locationDisplay}
        </span>
        {compensationDisplay && (
          <span className="flex items-center gap-1.5 font-medium text-gray-900">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {compensationDisplay}
          </span>
        )}
      </div>

      {/* Skills - Max 3 */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="px-2.5 py-1 text-gray-400 text-xs">
              +{skills.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Spacer to push CTA to bottom */}
      <div className="flex-grow" />

      {/* CTA */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
        <button className="btn-gradient flex-1 text-center text-sm py-3">
          View Role
        </button>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`
            p-3 rounded-lg border transition-colors
            ${isSaved
              ? 'bg-blue-50 border-blue-200 text-blue-600'
              : 'bg-white border-gray-200 text-gray-400 hover:text-gray-600 hover:border-gray-300'
            }
          `}
          aria-label={isSaved ? 'Remove from saved' : 'Save job'}
        >
          <svg
            className="w-5 h-5"
            fill={isSaved ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>
    </article>
  )

  // Wrap in Link if slug is provided
  if (slug) {
    return (
      <Link href={`/fractional-job/${slug}`} className="block">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default JobCard
