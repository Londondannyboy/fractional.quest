'use client'

import React from 'react'
import type { AspirationalMessageData } from '@/lib/types'

interface AspirationalBadgeProps {
  message: AspirationalMessageData
  className?: string
}

const ICONS = {
  globe: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  sun: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  coffee: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zm5-4h4" />
    </svg>
  ),
  plane: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
}

const TYPE_STYLES = {
  remote_escape: {
    bg: 'bg-[var(--lifestyle-teal-bg)]',
    border: 'border-[var(--lifestyle-teal)]',
    text: 'text-[var(--lifestyle-teal)]',
    subtext: 'text-teal-600',
  },
  weekend_getaway: {
    bg: 'bg-[var(--lifestyle-amber-bg)]',
    border: 'border-[var(--lifestyle-amber)]',
    text: 'text-[var(--lifestyle-amber)]',
    subtext: 'text-amber-600',
  },
  timezone_match: {
    bg: 'bg-[var(--lifestyle-emerald-bg)]',
    border: 'border-[var(--lifestyle-emerald)]',
    text: 'text-[var(--lifestyle-emerald)]',
    subtext: 'text-emerald-600',
  },
  flexibility: {
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    text: 'text-blue-600',
    subtext: 'text-blue-500',
  },
}

export function AspirationalBadge({ message, className = '' }: AspirationalBadgeProps) {
  const styles = TYPE_STYLES[message.type]
  const Icon = ICONS[message.icon]

  return (
    <div
      className={`
        p-3 rounded-lg border-l-4
        ${styles.bg} ${styles.border}
        ${className}
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 ${styles.text}`}>
          {Icon}
        </div>
        <div className="min-w-0">
          <p className={`text-sm font-medium ${styles.text}`}>
            {message.headline}
          </p>
          {message.subtext && (
            <p className={`text-xs mt-0.5 ${styles.subtext}`}>
              {message.subtext}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AspirationalBadge
