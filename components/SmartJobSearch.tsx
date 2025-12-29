'use client'

import { useState, useCallback, Component, ReactNode } from 'react'
import { useCopilotAction, useCopilotReadable } from '@copilotkit/react-core'
import { useRouter, useSearchParams } from 'next/navigation'

// Error boundary to prevent CopilotKit errors from crashing the page
class CopilotErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.warn('CopilotKit error (non-fatal):', error.message)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

interface SmartJobSearchProps {
  totalJobs?: number
  className?: string
  placeholder?: string
}

interface JobFilters {
  role?: string
  location?: string
  rateMin?: number
  rateMax?: number
  workType?: 'Remote' | 'Hybrid' | 'On-site'
  keywords?: string[]
}

function SmartJobSearchInner({
  totalJobs = 50,
  className = '',
  placeholder = 'Try: "CFO roles in London, remote, under £1,200/day"'
}: SmartJobSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [filters, setFilters] = useState<JobFilters>({})
  const [suggestions, setSuggestions] = useState<string[]>([])

  // Make current filters readable to the AI
  useCopilotReadable({
    description: 'Current job search filters and context',
    value: {
      currentFilters: filters,
      totalJobs,
      availableRoles: ['CFO', 'CTO', 'CMO', 'COO', 'CHRO', 'CPO', 'CISO'],
      availableLocations: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Remote'],
      rateRange: { min: 500, max: 2000 },
    },
  })

  // Action to filter jobs based on natural language query
  useCopilotAction({
    name: 'filterJobs',
    description: 'Filter fractional executive jobs based on user criteria. Use this when user wants to search or filter jobs.',
    parameters: [
      {
        name: 'role',
        type: 'string',
        description: 'Executive role type (CFO, CTO, CMO, COO, CHRO, CPO, CISO)',
        required: false,
      },
      {
        name: 'location',
        type: 'string',
        description: 'Location preference (London, Manchester, Remote, etc.)',
        required: false,
      },
      {
        name: 'rateMin',
        type: 'number',
        description: 'Minimum day rate in GBP',
        required: false,
      },
      {
        name: 'rateMax',
        type: 'number',
        description: 'Maximum day rate in GBP',
        required: false,
      },
      {
        name: 'workType',
        type: 'string',
        description: 'Work arrangement (Remote, Hybrid, On-site)',
        required: false,
      },
    ],
    handler: async ({ role, location, rateMin, rateMax, workType }) => {
      const newFilters: JobFilters = {}

      if (role) newFilters.role = role.toUpperCase()
      if (location) newFilters.location = location
      if (rateMin) newFilters.rateMin = rateMin
      if (rateMax) newFilters.rateMax = rateMax
      if (workType) newFilters.workType = workType as JobFilters['workType']

      setFilters(newFilters)

      // Build URL with filters
      const params = new URLSearchParams()
      if (role) params.set('role', role.toUpperCase())
      if (location) params.set('location', location)
      if (workType) params.set('type', workType)

      // Navigate to filtered view
      const queryString = params.toString()
      if (queryString) {
        router.push(`/fractional-jobs-uk?${queryString}`)
      }

      return `Found jobs matching: ${JSON.stringify(newFilters)}`
    },
  })

  // Action to save a search for later
  useCopilotAction({
    name: 'saveSearch',
    description: 'Save the current search criteria for job alerts',
    parameters: [
      {
        name: 'searchName',
        type: 'string',
        description: 'A name for this saved search',
        required: true,
      },
    ],
    handler: async ({ searchName }) => {
      // Store in localStorage for now
      const savedSearches = JSON.parse(localStorage.getItem('savedSearches') || '[]')
      savedSearches.push({
        name: searchName,
        filters,
        createdAt: new Date().toISOString(),
      })
      localStorage.setItem('savedSearches', JSON.stringify(savedSearches))
      return `Search "${searchName}" saved successfully!`
    },
  })

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return

    setIsSearching(true)

    // Parse basic keywords for quick filtering
    const lowerQuery = query.toLowerCase()
    const newFilters: JobFilters = {}

    // Detect role
    const roles = ['cfo', 'cto', 'cmo', 'coo', 'chro', 'cpo', 'ciso']
    for (const role of roles) {
      if (lowerQuery.includes(role)) {
        newFilters.role = role.toUpperCase()
        break
      }
    }

    // Detect location
    const locations = ['london', 'manchester', 'birmingham', 'edinburgh', 'remote']
    for (const loc of locations) {
      if (lowerQuery.includes(loc)) {
        newFilters.location = loc.charAt(0).toUpperCase() + loc.slice(1)
        break
      }
    }

    // Detect rate limits
    const underMatch = query.match(/under\s*£?([\d,]+)/i)
    if (underMatch) {
      newFilters.rateMax = parseInt(underMatch[1].replace(',', ''))
    }

    const overMatch = query.match(/over\s*£?([\d,]+)/i)
    if (overMatch) {
      newFilters.rateMin = parseInt(overMatch[1].replace(',', ''))
    }

    // Detect work type
    if (lowerQuery.includes('remote')) {
      newFilters.workType = 'Remote'
    } else if (lowerQuery.includes('hybrid')) {
      newFilters.workType = 'Hybrid'
    } else if (lowerQuery.includes('on-site') || lowerQuery.includes('onsite')) {
      newFilters.workType = 'On-site'
    }

    setFilters(newFilters)

    // Build URL
    const params = new URLSearchParams()
    if (newFilters.role) params.set('role', newFilters.role)
    if (newFilters.location) params.set('location', newFilters.location)
    if (newFilters.workType) params.set('type', newFilters.workType)

    const queryString = params.toString()
    if (queryString) {
      router.push(`/fractional-jobs-uk?${queryString}`)
    }

    setIsSearching(false)
  }, [query, router])

  const quickFilters = [
    { label: 'CFO Roles', query: 'CFO jobs' },
    { label: 'Remote Only', query: 'remote jobs' },
    { label: 'London', query: 'jobs in London' },
    { label: '£1000+/day', query: 'over £1000 per day' },
  ]

  return (
    <div className={`${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder={placeholder}
              className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSearching ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Searching...
              </>
            ) : (
              'Search'
            )}
          </button>
        </div>

        {/* AI Badge */}
        <div className="absolute -top-2 right-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11a1 1 0 11-2 0 1 1 0 012 0zm0-3a1 1 0 01-2 0V7a1 1 0 112 0v3z" />
          </svg>
          AI-Powered
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mt-3">
        {quickFilters.map((filter) => (
          <button
            key={filter.label}
            onClick={() => {
              setQuery(filter.query)
              handleSearch()
            }}
            className="px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-blue-50 hover:text-blue-700 text-gray-600 rounded-full transition-colors"
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Active Filters Display */}
      {Object.keys(filters).length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-3 p-3 bg-blue-50 rounded-lg">
          <span className="text-xs font-medium text-blue-700">Active filters:</span>
          {filters.role && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
              Role: {filters.role}
            </span>
          )}
          {filters.location && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
              Location: {filters.location}
            </span>
          )}
          {filters.workType && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
              Type: {filters.workType}
            </span>
          )}
          {filters.rateMax && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
              Max: £{filters.rateMax}/day
            </span>
          )}
          <button
            onClick={() => setFilters({})}
            className="ml-auto text-xs text-blue-600 hover:text-blue-800 underline"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  )
}

// Basic fallback search component (no CopilotKit)
function BasicJobSearch({
  className = '',
  placeholder = 'Search jobs...'
}: SmartJobSearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/fractional-jobs-uk?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 text-gray-900 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  )
}

// Export wrapped component with error boundary
export function SmartJobSearch(props: SmartJobSearchProps) {
  return (
    <CopilotErrorBoundary fallback={<BasicJobSearch {...props} />}>
      <SmartJobSearchInner {...props} />
    </CopilotErrorBoundary>
  )
}
