'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Auth removed - will be replaced with NeonAuth
import { AspirationalBadge } from './AspirationalBadge'
import { generateAspirationalMessage } from '@/lib/aspirational-messages'
import type { AspirationalMessageData } from '@/lib/types'

// Dream destinations for remote workers - suggest lifestyle possibilities
const DREAM_DESTINATIONS = [
  { name: 'Lisbon', country: 'Portugal', slug: 'lisbon', image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=80&h=80&fit=crop' },
  { name: 'Barcelona', country: 'Spain', slug: 'barcelona', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=80&h=80&fit=crop' },
  { name: 'Bali', country: 'Indonesia', slug: 'bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=80&h=80&fit=crop' },
  { name: 'Dubai', country: 'UAE', slug: 'dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=80&h=80&fit=crop' },
  { name: 'Albufeira', country: 'Portugal', slug: 'albufeira', image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=80&h=80&fit=crop' },
  { name: 'Split', country: 'Croatia', slug: 'split', image: 'https://images.unsplash.com/photo-1555990538-1e0e0e6b0e5c?w=80&h=80&fit=crop' },
]

// Get a random dream destination for this job (consistent based on job ID)
function getDreamDestination(jobId: string | number | undefined) {
  const hash = String(jobId || Math.random()).split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  return DREAM_DESTINATIONS[Math.abs(hash) % DREAM_DESTINATIONS.length]
}

// Parse hours per week to determine flexibility level
function getFlexibilityInfo(hoursPerWeek?: string): { days: string; isPartTime: boolean } | null {
  if (!hoursPerWeek) return null

  const lower = hoursPerWeek.toLowerCase()

  // Extract numbers
  const numbers = lower.match(/\d+/g)
  if (numbers && numbers.length > 0) {
    const hours = parseInt(numbers[0])
    if (hours <= 16) return { days: '1-2 days/week', isPartTime: true }
    if (hours <= 24) return { days: '2-3 days/week', isPartTime: true }
    if (hours <= 32) return { days: '3-4 days/week', isPartTime: true }
  }

  // Check for day mentions
  if (lower.includes('1 day') || lower.includes('one day')) return { days: '1 day/week', isPartTime: true }
  if (lower.includes('2 day') || lower.includes('two day')) return { days: '2 days/week', isPartTime: true }
  if (lower.includes('3 day') || lower.includes('three day')) return { days: '3 days/week', isPartTime: true }
  if (lower.includes('part-time') || lower.includes('part time')) return { days: 'Part-time', isPartTime: true }

  return null
}

// Aspirational images for different role categories - professional people working
const ROLE_IMAGES: Record<string, string[]> = {
  'CFO': [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop', // Professional man
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop', // Professional woman
  ],
  'CTO': [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', // Tech leader man
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop', // Tech leader woman
  ],
  'CMO': [
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=400&fit=crop', // Marketing woman
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop', // Marketing man
  ],
  'COO': [
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop', // Operations leader
    'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop', // Operations woman
  ],
  'CHRO': [
    'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=600&h=400&fit=crop', // HR professional
    'https://images.unsplash.com/photo-1573496774379-b930dba17d8b?w=600&h=400&fit=crop', // HR meeting
  ],
  'CPO': [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop', // Product team
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop', // Product planning
  ],
  'default': [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', // Team collaboration
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', // Business meeting
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop', // Laptop work
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop', // Modern office
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop', // Office space
  ],
}

// Get a consistent image for a job based on its ID/title to avoid duplicates
function getJobImage(jobId: string | number | undefined, roleCategory?: string, title?: string): string {
  // Create a simple hash from jobId or title for consistent image selection
  const hashSource = String(jobId || title || Math.random())
  let hash = 0
  for (let i = 0; i < hashSource.length; i++) {
    const char = hashSource.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  hash = Math.abs(hash)

  // Try to match role category
  const normalizedRole = roleCategory?.toUpperCase() || ''
  let images = ROLE_IMAGES.default

  for (const [role, roleImages] of Object.entries(ROLE_IMAGES)) {
    if (role !== 'default' && normalizedRole.includes(role)) {
      images = roleImages
      break
    }
  }

  // Select image based on hash
  return images[hash % images.length]
}

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
  // Image override
  imageUrl?: string
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
  imageUrl,
}: JobCardProps) {
  // Auth removed - save functionality disabled until NeonAuth is added
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [viewCount, setViewCount] = useState<number | null>(null)

  // Fetch view count on mount
  useEffect(() => {
    if (jobId) {
      fetch(`/api/job-view?jobId=${jobId}`)
        .then(res => res.json())
        .then(data => {
          if (data.views7Days > 0) {
            setViewCount(data.views7Days)
          }
        })
        .catch(() => {}) // Silently fail
    }
  }, [jobId])

  // Get dream destination for remote jobs
  const dreamDestination = useMemo(() => {
    if (isRemote) {
      return getDreamDestination(jobId)
    }
    return null
  }, [isRemote, jobId])

  // Get flexibility info
  const flexibilityInfo = useMemo(() => getFlexibilityInfo(hoursPerWeek), [hoursPerWeek])

  // Get image for this job
  const jobImage = useMemo(() => {
    if (imageUrl) return imageUrl
    return getJobImage(jobId, roleCategory, title)
  }, [imageUrl, jobId, roleCategory, title])

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

  // Save functionality disabled until NeonAuth is added
  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Auth required - feature disabled
    console.log('Save job feature requires authentication')
  }

  // Format compensation display
  const compensationDisplay = useMemo(() => {
    if (dayRate) {
      return `${currency}${dayRate.toLocaleString()}/day`
    }
    if (compensation) {
      return compensation
    }
    if (estimatedDayRate) {
      return `${currency}${estimatedDayRate.min}-${estimatedDayRate.max}/day`
    }
    return null
  }, [dayRate, currency, compensation, estimatedDayRate])

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
        overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm
        hover:shadow-lg hover:border-gray-300 transition-all duration-300
        cursor-pointer group flex flex-col h-full
        ${className}
      `}
      onClick={onClick}
    >
      {/* Image - Optimized with Next.js Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={jobImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Stronger gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-gray-900/10" />

        {/* Top badges row */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {/* Role category badge */}
            {roleCategory && (
              <span className="bg-gray-800/95 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-gray-700">
                {roleCategory}
              </span>
            )}
            {/* New badge for recent posts */}
            {postedDaysAgo !== undefined && postedDaysAgo <= 2 && (
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm animate-pulse">
                New
              </span>
            )}
            {/* Hot badge for posts 3-7 days old */}
            {postedDaysAgo !== undefined && postedDaysAgo > 2 && postedDaysAgo <= 7 && (
              <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Hot
              </span>
            )}
            {/* View count - social proof */}
            {viewCount && viewCount > 5 && (
              <span className="bg-gray-900/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 border border-gray-700">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                {viewCount}
              </span>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            {/* Remote badge */}
            {isRemote && (
              <span className="bg-teal-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                Remote
              </span>
            )}
            {/* Flexibility badge */}
            {flexibilityInfo && (
              <span className="bg-purple-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                {flexibilityInfo.days}
              </span>
            )}
          </div>
        </div>

        {/* Title overlay at bottom of image - with strong contrast for readability */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <h3
            className="font-bold text-white text-xl leading-tight line-clamp-2 drop-shadow-lg"
            style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Company */}
        <p className="text-base font-medium text-gray-700 mb-2">
          {company}
        </p>

        {/* Job Description Snippet */}
        {description && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {/* Our Opinion / Appeal Summary */}
        {appealSummary && (
          <div className="mb-3 p-2.5 bg-blue-50 border-l-3 border-blue-500 rounded-r-lg">
            <p className="text-xs text-blue-700 leading-relaxed">
              <span className="font-semibold text-blue-800">Why apply: </span>
              {appealSummary}
            </p>
          </div>
        )}

        {/* Meta: Location + Compensation */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {locationDisplay}
          </span>
          {compensationDisplay && (
            <span className="flex items-center gap-1.5 font-semibold text-gray-900">
              {compensationDisplay}
            </span>
          )}
        </div>

        {/* Skills - Max 3 */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md border border-gray-200"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="px-2.5 py-1 text-gray-600 text-xs">
                +{skills.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Dream destination suggestion for remote roles - sell the lifestyle */}
        {dreamDestination && flexibilityInfo && (
          <div className="mb-3 p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200 flex items-center gap-3">
            <Image
              src={dreamDestination.image}
              alt={dreamDestination.name}
              width={40}
              height={40}
              className="rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow-sm"
              loading="lazy"
            />
            <p className="text-xs text-teal-700">
              <span className="font-semibold">{flexibilityInfo.days}?</span> Work from {dreamDestination.name}
            </p>
          </div>
        )}

        {/* Remote-only dream suggestion (when no flexibility info but is remote) */}
        {dreamDestination && !flexibilityInfo && (
          <div className="mb-3 p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200 flex items-center gap-3">
            <Image
              src={dreamDestination.image}
              alt={dreamDestination.name}
              width={40}
              height={40}
              className="rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow-sm"
              loading="lazy"
            />
            <p className="text-xs text-teal-700">
              <span className="font-semibold">Work anywhere.</span> Why not {dreamDestination.name}?
            </p>
          </div>
        )}

        {/* Syndicated job indicator */}
        {isSyndicated && (
          <div className="mb-3 flex items-center gap-1.5 text-xs text-gray-600">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            via {jobSource || 'partner'}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          {postedDisplay && (
            <span className="text-xs text-gray-600 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {postedDisplay}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-700 text-white text-sm font-semibold rounded-lg group-hover:bg-teal-800 transition-colors">
            Apply Now
            <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  )

  // Wrap in Link if slug is provided
  if (slug) {
    return (
      <Link href={`/fractional-job/${slug}`} className="block h-full">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default JobCard
