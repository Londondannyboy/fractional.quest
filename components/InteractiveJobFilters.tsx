'use client'

import { useState, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface InteractiveJobFiltersProps {
  className?: string
  currentRole?: string
  currentLocation?: string
  currentType?: string
}

const ROLES = [
  { id: 'all', label: 'All Roles' },
  { id: 'CFO', label: 'CFO' },
  { id: 'CTO', label: 'CTO' },
  { id: 'CMO', label: 'CMO' },
  { id: 'COO', label: 'COO' },
  { id: 'CHRO', label: 'CHRO' },
  { id: 'CPO', label: 'CPO' },
  { id: 'CISO', label: 'CISO' },
]

const LOCATIONS = [
  { id: 'all', label: 'All Locations' },
  { id: 'London', label: 'London' },
  { id: 'Manchester', label: 'Manchester' },
  { id: 'Birmingham', label: 'Birmingham' },
  { id: 'Edinburgh', label: 'Edinburgh' },
  { id: 'Remote', label: 'Remote' },
]

const WORK_TYPES = [
  { id: 'all', label: 'All Types' },
  { id: 'Remote', label: 'Remote' },
  { id: 'Hybrid', label: 'Hybrid' },
  { id: 'On-site', label: 'On-site' },
]

const RATE_RANGES = [
  { id: 'all', label: 'Any Rate', min: 0, max: Infinity },
  { id: '500-800', label: '£500-£800/day', min: 500, max: 800 },
  { id: '800-1000', label: '£800-£1,000/day', min: 800, max: 1000 },
  { id: '1000-1200', label: '£1,000-£1,200/day', min: 1000, max: 1200 },
  { id: '1200+', label: '£1,200+/day', min: 1200, max: Infinity },
]

export function InteractiveJobFilters({
  className = '',
  currentRole = 'all',
  currentLocation = 'London',
  currentType = 'all',
}: InteractiveJobFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedRole, setSelectedRole] = useState(currentRole)
  const [selectedLocation, setSelectedLocation] = useState(currentLocation)
  const [selectedType, setSelectedType] = useState(currentType)
  const [selectedRate, setSelectedRate] = useState('all')
  const [isExpanded, setIsExpanded] = useState(false)

  const applyFilters = useCallback(() => {
    const params = new URLSearchParams()

    if (selectedRole !== 'all') params.set('role', selectedRole)
    if (selectedLocation !== 'all') params.set('location', selectedLocation)
    if (selectedType !== 'all') params.set('type', selectedType)
    if (selectedRate !== 'all') params.set('rate', selectedRate)

    const queryString = params.toString()
    router.push(`/fractional-jobs-uk${queryString ? `?${queryString}` : ''}`)
  }, [selectedRole, selectedLocation, selectedType, selectedRate, router])

  const clearFilters = useCallback(() => {
    setSelectedRole('all')
    setSelectedLocation('all')
    setSelectedType('all')
    setSelectedRate('all')
    router.push('/fractional-jobs-uk')
  }, [router])

  const activeFiltersCount = [
    selectedRole !== 'all',
    selectedLocation !== 'all' && selectedLocation !== 'London',
    selectedType !== 'all',
    selectedRate !== 'all',
  ].filter(Boolean).length

  return (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden ${className}`}>
      {/* Filter Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="font-semibold text-gray-900">Advanced Filters</span>
          {activeFiltersCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
              {activeFiltersCount} active
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable Filter Content */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="p-4 pt-0 space-y-4 border-t border-gray-100">
          {/* Role Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Executive Role</label>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedRole === role.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedLocation === loc.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Work Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Work Type</label>
            <div className="flex flex-wrap gap-2">
              {WORK_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedType === type.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rate Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Day Rate</label>
            <div className="flex flex-wrap gap-2">
              {RATE_RANGES.map((rate) => (
                <button
                  key={rate.id}
                  onClick={() => setSelectedRate(rate.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    selectedRate === rate.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {rate.label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={applyFilters}
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Filters
            </button>
            <button
              onClick={clearFilters}
              className="px-4 py-2.5 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
