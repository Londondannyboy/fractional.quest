'use client'

import { useState, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface JobSearchProps {
  totalJobs: number
  className?: string
}

const LOCATIONS = [
  { value: '', label: 'All Locations' },
  { value: 'London', label: 'London' },
  { value: 'Manchester', label: 'Manchester' },
  { value: 'Birmingham', label: 'Birmingham' },
  { value: 'Edinburgh', label: 'Edinburgh' },
  { value: 'Leeds', label: 'Leeds' },
  { value: 'Bristol', label: 'Bristol' },
  { value: 'Remote', label: 'Remote Only' },
]

const DAY_RATES = [
  { value: '', label: 'Any Day Rate' },
  { value: '500-700', label: '£500-700/day' },
  { value: '700-900', label: '£700-900/day' },
  { value: '900-1200', label: '£900-1,200/day' },
  { value: '1200+', label: '£1,200+/day' },
]

const ROLES = [
  { value: '', label: 'All Roles' },
  { value: 'CFO', label: 'CFO / Finance' },
  { value: 'CTO', label: 'CTO / Technology' },
  { value: 'CMO', label: 'CMO / Marketing' },
  { value: 'COO', label: 'COO / Operations' },
  { value: 'HR', label: 'HR / CHRO' },
  { value: 'CPO', label: 'CPO / Product' },
  { value: 'CISO', label: 'CISO / Security' },
]

const WORK_TYPE = [
  { value: '', label: 'Any Work Type' },
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'onsite', label: 'On-site' },
]

export function JobSearch({ totalJobs, className = '' }: JobSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [location, setLocation] = useState(searchParams.get('location') || '')
  const [dayRate, setDayRate] = useState(searchParams.get('rate') || '')
  const [role, setRole] = useState(searchParams.get('role') || '')
  const [workType, setWorkType] = useState(searchParams.get('type') || '')
  const [isExpanded, setIsExpanded] = useState(false)

  const buildQueryString = useCallback(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (location) params.set('location', location)
    if (dayRate) params.set('rate', dayRate)
    if (role) params.set('role', role)
    if (workType) params.set('type', workType)
    return params.toString()
  }, [searchQuery, location, dayRate, role, workType])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const queryString = buildQueryString()
    router.push(`/fractional-jobs-uk${queryString ? `?${queryString}` : ''}`)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setLocation('')
    setDayRate('')
    setRole('')
    setWorkType('')
    router.push('/fractional-jobs-uk')
  }

  const activeFilters = [searchQuery, location, dayRate, role, workType].filter(Boolean).length

  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}>
      <form onSubmit={handleSearch}>
        {/* Main Search Bar */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs, skills, companies..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Search Jobs
            </button>
          </div>
        </div>

        {/* Quick Filters Row */}
        <div className="p-4 flex flex-wrap items-center gap-3">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {ROLES.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {LOCATIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <select
            value={dayRate}
            onChange={(e) => setDayRate(e.target.value)}
            className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {DAY_RATES.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <select
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
            className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {WORK_TYPE.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <div className="flex-1" />

          {activeFilters > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </form>

      {/* Results Count */}
      <div className="px-4 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">{totalJobs}</span>
          <span className="text-gray-600 text-sm">jobs found</span>
        </div>
        {activeFilters > 0 && (
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                &quot;{searchQuery}&quot;
                <button onClick={() => setSearchQuery('')} className="hover:text-blue-900">&times;</button>
              </span>
            )}
            {role && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                {ROLES.find(r => r.value === role)?.label}
                <button onClick={() => setRole('')} className="hover:text-purple-900">&times;</button>
              </span>
            )}
            {location && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                {LOCATIONS.find(l => l.value === location)?.label}
                <button onClick={() => setLocation('')} className="hover:text-green-900">&times;</button>
              </span>
            )}
            {dayRate && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                {DAY_RATES.find(r => r.value === dayRate)?.label}
                <button onClick={() => setDayRate('')} className="hover:text-amber-900">&times;</button>
              </span>
            )}
            {workType && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                {WORK_TYPE.find(t => t.value === workType)?.label}
                <button onClick={() => setWorkType('')} className="hover:text-teal-900">&times;</button>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
