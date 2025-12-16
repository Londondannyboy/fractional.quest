'use client'
import React, { useState } from 'react'
import { useUser } from '@stackframe/stack'
import { Badge } from './Badge'
import { CompanyLogo } from './CompanyLogo'
import { MiniSkillsChart } from './MiniSkillsChart'
import { MiniCompanyGraph } from './MiniCompanyGraph'

interface JobCardProps {
  jobId?: string | number  // Optional for backwards compatibility
  title: string
  company: string
  location: string
  isRemote: boolean
  compensation?: string
  dayRate?: number
  currency?: string
  roleCategory?: string
  skills?: string[]
  postedDaysAgo?: number
  className?: string
  onClick?: () => void
  companyDomain?: string
  description?: string
  // New props for enhanced features
  jobSource?: string
  isSyndicated?: boolean
  postedDate?: string | Date
  companySummary?: string
  estimatedDayRate?: { min: number; max: number }
  companyType?: 'direct' | 'recruiter' | 'job_board'
  appealSummary?: string
  keyDeliverables?: string[]
}

export function JobCard({
  jobId,
  title,
  company,
  location,
  isRemote,
  compensation,
  dayRate,
  currency = '£',
  roleCategory,
  skills = [],
  postedDaysAgo,
  className = '',
  onClick,
  companyDomain,
  description,
  jobSource = 'LinkedIn',
  isSyndicated = true,
  postedDate,
  companySummary,
  estimatedDayRate,
  companyType = 'recruiter',
  appealSummary,
  keyDeliverables,
}: JobCardProps) {
  const user = useUser()  // Don't redirect, just check if logged in

  // State for expandable graphs
  const [showGraphs, setShowGraphs] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!jobId) {
      console.warn('JobCard: jobId is required to save jobs')
      return
    }

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

  // Enhanced compensation display with estimation
  const displayedCompensation = compensation || (dayRate ? `${currency}${dayRate}/day` : null)
  const hasEstimatedRate = !displayedCompensation && estimatedDayRate

  // Format posted date nicely
  const formatPostedDate = (days: number | undefined) => {
    if (days === undefined) return null
    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 7) return `${days}d ago`
    if (days < 30) return `${Math.floor(days / 7)}w ago`
    return `${Math.floor(days / 30)}mo ago`
  }

  // Smart excerpt truncation - ensure we end on a sentence or word boundary
  const truncateDescription = (text: string | undefined, maxLength: number = 160) => {
    if (!text) return ''
    if (text.length <= maxLength) return text

    // Try to end at a sentence
    const sentences = text.substring(0, maxLength).split(/[.!?]/)
    if (sentences.length > 1 && sentences[0].length > 50) {
      return sentences[0] + '.'
    }

    // Otherwise end at a word boundary
    const truncated = text.substring(0, maxLength)
    const lastSpace = truncated.lastIndexOf(' ')
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
  }

  // Generate company summary if not provided (placeholder logic)
  const displayCompanySummary = companySummary || generateCompanySummary(company, roleCategory)

  return (
    <div
      onClick={onClick}
      className={`group relative bg-gray-900 border-2 border-gray-800 rounded-2xl p-6
        hover:border-blue-600 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]
        hover:-translate-y-1 transition-all duration-300 cursor-pointer
        overflow-hidden flex flex-col h-full ${className}`}
    >
      {/* Neon gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-500/0 to-blue-600/0
        group-hover:from-blue-600/5 group-hover:via-blue-500/5 group-hover:to-blue-600/5
        transition-all duration-500 rounded-2xl pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Role badge - top right corner */}
        {roleCategory && (
          <div className="absolute -top-2 -right-2">
            <Badge role={roleCategory} size="sm" className="shadow-lg shadow-blue-600/30">
              {roleCategory}
            </Badge>
          </div>
        )}

        {/* Title & Company - FIRST - Most Important */}
        <div className="mb-3">
          <h3 className="text-xl md:text-2xl font-black text-white !text-white group-hover:text-blue-100 transition-colors mb-3 leading-tight h-[4rem] flex items-start">
            <span className="line-clamp-2">{title}</span>
          </h3>
          <p className="text-base md:text-lg font-bold text-white !text-white mb-3 h-[1.75rem]">{company}</p>

          {/* Compact Badges Row - Under Title/Company */}
          <div className="flex flex-wrap items-center gap-2">
            {/* NEW Badge */}
            {postedDaysAgo !== undefined && postedDaysAgo <= 3 && (
              <span className="inline-flex items-center gap-1 bg-blue-500/20 border border-blue-500/50
                rounded px-2 py-0.5 text-[10px] font-bold text-blue-300 uppercase animate-pulse">
                New
              </span>
            )}

            {/* Posted Time */}
            {postedDaysAgo !== undefined && (
              <span className="text-xs text-gray-400">
                Posted {formatPostedDate(postedDaysAgo)}
              </span>
            )}

            {/* Source Separator */}
            {jobSource && (
              <span className="text-xs text-gray-600">•</span>
            )}

            {/* Apply Type Badge - Simplified */}
            <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-semibold uppercase ${
              companyType === 'direct'
                ? 'bg-blue-500/20 text-blue-300'
                : companyType === 'recruiter'
                ? 'bg-orange-500/20 text-orange-300'
                : 'bg-gray-500/20 text-gray-300'
            }`}>
              {companyType === 'direct' ? 'Direct' : companyType === 'recruiter' ? 'Recruiter' : 'Job Board'}
            </span>
          </div>

          {/* Why Apply - Prominent Appeal Summary */}
          <div className="mt-3 min-h-[5rem]">
            {appealSummary && (
              <div className="p-3 bg-gradient-to-r from-blue-600/20 to-blue-600/20 border-l-4 border-blue-600 rounded-lg">
                <p className="text-sm font-semibold text-white leading-relaxed line-clamp-3">
                  {appealSummary}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Company Summary - NEW */}
        {displayCompanySummary && (
          <div className="mb-4 p-3 bg-blue-950/30 border border-blue-800/30 rounded-lg">
            <p className="text-xs text-blue-300 leading-relaxed">
              💡 {displayCompanySummary}
            </p>
          </div>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-3">
          <span className="flex items-center gap-1.5 text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </span>
          {isRemote && (
            <span className="flex items-center gap-1.5 text-blue-400 font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Remote
            </span>
          )}
          {displayedCompensation && (
            <span className="flex items-center gap-1.5 font-semibold text-white bg-blue-500/20 px-2.5 py-1 rounded-lg border border-blue-500/30">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {displayedCompensation}
            </span>
          )}
          {/* Estimated Rate - NEW */}
          {hasEstimatedRate && (
            <span className="flex items-center gap-1.5 font-medium text-blue-300 bg-blue-500/20 px-2.5 py-1 rounded-lg border border-blue-500/30">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Est. {currency}{estimatedDayRate!.min}-{estimatedDayRate!.max}/day
            </span>
          )}
        </div>

        {/* Description - Enhanced truncation */}
        {description && (
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            {truncateDescription(description, 180)}
          </p>
        )}

        {/* Key Deliverables */}
        {keyDeliverables && keyDeliverables.length > 0 && (
          <div className="mb-4 p-4 bg-gray-950/50 rounded-xl border border-gray-800">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              What You'll Deliver
            </h4>
            <ul className="space-y-2">
              {keyDeliverables.map((deliverable, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Dual Graphs - Skills & Company Network - Expandable */}
        {skills.length > 0 && (
          <div className="mb-4">
            <button
              onClick={(e) => { e.preventDefault(); setShowGraphs(!showGraphs); }}
              className="w-full flex items-center justify-between p-3 bg-gray-950/50 rounded-lg border border-gray-800 hover:border-blue-600 transition-colors text-sm font-semibold text-white"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                View Skills & Company Analysis
              </span>
              <svg className={`w-5 h-5 transition-transform ${showGraphs ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showGraphs && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Skills Chart */}
                <div className="p-4 bg-gradient-to-br from-blue-950/40 to-gray-900/60 rounded-xl border border-blue-600/30 hover:border-blue-600/50 transition-colors">
                  <MiniSkillsChart skills={skills} maxSkills={5} />
                </div>
                {/* Company Graph - Black Background */}
                <div className="p-4 bg-black/80 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <MiniCompanyGraph
                    companyName={company}
                    companyDomain={companyDomain}
                    jobTitle={title}
                    skills={skills}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Skills Tags - Better Readability */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.slice(0, 5).map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-gray-800 text-gray-200 text-sm font-medium rounded-lg border border-gray-700 hover:border-blue-600 transition-colors">
                {skill}
              </span>
            ))}
            {skills.length > 5 && (
              <span className="px-3 py-1.5 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-lg border border-blue-700">
                +{skills.length - 5} more
              </span>
            )}
          </div>
        )}

        {/* Enhanced Apply Button & Save Button - Bottom */}
        <div className="pt-4 border-t border-gray-800 mt-auto space-y-3">
          <button
            className="relative w-full px-8 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500
              hover:from-blue-600 hover:via-blue-500 hover:to-blue-400
              text-white font-black text-base rounded-xl
              shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)]
              transform hover:scale-[1.02] transition-all duration-300
              overflow-hidden group/btn"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
              translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />

            {/* Glow pulse animation */}
            <div className="absolute inset-0 bg-blue-400/20 animate-pulse rounded-xl" />

            <span className="relative flex items-center justify-center gap-2">
              Apply Now
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          {/* Save Button - only show if jobId is provided */}
          {jobId && (
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`w-full px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                isSaved
                  ? 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-500'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-blue-500'
              } ${isSaving ? 'opacity-50 cursor-not-allowed' : ''}`}
              title={isSaved ? 'Remove from saved jobs' : 'Save job for later'}
            >
              <svg
                className={`w-5 h-5 transition-all ${
                  isSaved ? 'fill-white' : 'fill-none'
                }`}
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              {isSaving ? 'Saving...' : isSaved ? 'Saved' : 'Save Job'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// Helper function to generate company summaries (placeholder - can be enhanced with AI)
function generateCompanySummary(companyName: string, roleCategory?: string): string {
  // This is a placeholder. In production, this would be enriched via AI or database
  const summaries: Record<string, string> = {
    'default': `Join ${companyName} and bring your ${roleCategory || 'executive'} expertise to help drive strategic growth and innovation.`
  }

  // Add more intelligent summary generation based on company data
  // For now, return a generic but helpful summary
  return summaries['default']
}
