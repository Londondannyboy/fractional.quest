'use client'

import { useState, useCallback, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { RangeSlider } from './ui/RangeSlider'

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

const ROLES = [
  { value: '', label: 'All Roles' },
  { value: 'CFO', label: 'CFO / Finance' },
  { value: 'CTO', label: 'CTO / Technology' },
  { value: 'CMO', label: 'CMO / Marketing' },
  { value: 'COO', label: 'COO / Operations' },
  { value: 'HR', label: 'HR / CHRO' },
  { value: 'CPO', label: 'CPO / Product' },
  { value: 'CISO', label: 'CISO / Security' },
  { value: 'CIO', label: 'CIO / IT' },
  { value: 'CDO', label: 'CDO / Data' },
  { value: 'CRO', label: 'CRO / Revenue' },
  { value: 'CCO', label: 'CCO / Compliance' },
  { value: 'Legal', label: 'Legal / GC' },
  { value: 'Sales', label: 'Sales Director' },
  { value: 'AI', label: 'Head of AI' },
  { value: 'Growth', label: 'Head of Growth' },
  { value: 'Product', label: 'Product Manager' },
  { value: 'Project', label: 'Project Manager' },
]

const WORK_TYPE = [
  { value: '', label: 'Any Work Type' },
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'onsite', label: 'On-site' },
]

// Rate slider constants
const MIN_RATE = 400
const MAX_RATE = 2000
const DEFAULT_MIN = 400
const DEFAULT_MAX = 2000

export function JobSearch({ totalJobs, className = '' }: JobSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Parse rate from URL params
  const parseRateFromUrl = () => {
    const rate = searchParams.get('rate')
    if (!rate) return { min: DEFAULT_MIN, max: DEFAULT_MAX }
    const [min, max] = rate.split('-').map(Number)
    return { min: min || DEFAULT_MIN, max: max || DEFAULT_MAX }
  }

  const initialRate = parseRateFromUrl()

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [location, setLocation] = useState(searchParams.get('location') || '')
  const [minRate, setMinRate] = useState(initialRate.min)
  const [maxRate, setMaxRate] = useState(initialRate.max)
  const [role, setRole] = useState(searchParams.get('role') || '')
  const [workType, setWorkType] = useState(searchParams.get('type') || '')
  const [showRateSlider, setShowRateSlider] = useState(false)

  const hasRateFilter = minRate !== DEFAULT_MIN || maxRate !== DEFAULT_MAX

  const buildQueryString = useCallback(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (location) params.set('location', location)
    if (hasRateFilter) params.set('rate', `${minRate}-${maxRate}`)
    if (role) params.set('role', role)
    if (workType) params.set('type', workType)
    return params.toString()
  }, [searchQuery, location, minRate, maxRate, hasRateFilter, role, workType])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const queryString = buildQueryString()
    router.push(`/fractional-jobs-uk${queryString ? `?${queryString}` : ''}`)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setLocation('')
    setMinRate(DEFAULT_MIN)
    setMaxRate(DEFAULT_MAX)
    setRole('')
    setWorkType('')
    router.push('/fractional-jobs-uk')
  }

  const handleRateChange = (min: number, max: number) => {
    setMinRate(min)
    setMaxRate(max)
  }

  const activeFilters = [searchQuery, location, hasRateFilter, role, workType].filter(Boolean).length

  const formatRate = (value: number) => `£${value.toLocaleString()}`

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

          {/* Day Rate Toggle Button */}
          <button
            type="button"
            onClick={() => setShowRateSlider(!showRateSlider)}
            className={`px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              hasRateFilter
                ? 'bg-blue-50 border-blue-300 text-blue-700'
                : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {hasRateFilter ? `${formatRate(minRate)} - ${formatRate(maxRate)}` : 'Day Rate'}
            <svg className={`w-4 h-4 transition-transform ${showRateSlider ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

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

        {/* Rate Slider Panel */}
        {showRateSlider && (
          <div className="px-4 pb-4 pt-2 border-t border-gray-100">
            <div className="bg-gray-50 rounded-lg p-4">
              <RangeSlider
                min={MIN_RATE}
                max={MAX_RATE}
                step={50}
                minValue={minRate}
                maxValue={maxRate}
                onChange={handleRateChange}
                formatValue={formatRate}
                label="Day Rate"
              />
              <div className="flex justify-end mt-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMinRate(DEFAULT_MIN)
                    setMaxRate(DEFAULT_MAX)
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setShowRateSlider(false)}
                  className="px-3 py-1.5 text-xs font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
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
            {hasRateFilter && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                {formatRate(minRate)} - {formatRate(maxRate)}/day
                <button onClick={() => { setMinRate(DEFAULT_MIN); setMaxRate(DEFAULT_MAX); }} className="hover:text-amber-900">&times;</button>
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
