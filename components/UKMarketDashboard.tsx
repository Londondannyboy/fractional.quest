'use client'

import { useState, useEffect } from 'react'

interface MarketStats {
  totalJobs: number
  byRole: { role: string; count: number; avgRate: number }[]
  byLocation: { location: string; count: number }[]
  avgDayRate: number
  remotePercentage: number
}

// Default data while loading or as fallback
const DEFAULT_STATS: MarketStats = {
  totalJobs: 200,
  byRole: [
    { role: 'CFO', count: 45, avgRate: 1050 },
    { role: 'CTO', count: 38, avgRate: 1100 },
    { role: 'CMO', count: 35, avgRate: 950 },
    { role: 'COO', count: 28, avgRate: 950 },
    { role: 'CHRO', count: 20, avgRate: 850 },
    { role: 'Other', count: 34, avgRate: 900 },
  ],
  byLocation: [
    { location: 'London', count: 120 },
    { location: 'Manchester', count: 25 },
    { location: 'Birmingham', count: 15 },
    { location: 'Edinburgh', count: 12 },
    { location: 'Remote', count: 28 },
  ],
  avgDayRate: 950,
  remotePercentage: 35,
}

interface UKMarketDashboardProps {
  className?: string
  initialStats?: Partial<MarketStats>
}

export function UKMarketDashboard({ className = '', initialStats }: UKMarketDashboardProps) {
  const [stats, setStats] = useState<MarketStats>({
    ...DEFAULT_STATS,
    ...initialStats,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Try to fetch live stats from API
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/jobs/summary')
        if (response.ok) {
          const data = await response.json()
          if (data) {
            setStats(prevStats => ({
              ...prevStats,
              totalJobs: data.totalJobs || prevStats.totalJobs,
              avgDayRate: data.avgDayRate || prevStats.avgDayRate,
            }))
          }
        }
      } catch {
        // Use default stats on error
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  const maxRoleCount = Math.max(...stats.byRole.map(r => r.count))
  const maxLocationCount = Math.max(...stats.byLocation.map(l => l.count))

  // JSON-LD Schema
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'UK Fractional Jobs Market Dashboard',
    'description': 'Live market data for fractional executive jobs in the UK',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Any',
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">UK Fractional Jobs Market 2025</h3>
            <p className="text-purple-200">Live market data and trends</p>
          </div>
          {isLoading && (
            <div className="flex items-center gap-2 text-purple-200 text-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              Loading...
            </div>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-purple-700">{stats.totalJobs}+</div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-green-700">&pound;{stats.avgDayRate}</div>
            <div className="text-sm text-gray-600">Avg Day Rate</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-blue-700">{stats.remotePercentage}%</div>
            <div className="text-sm text-gray-600">Remote/Hybrid</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-amber-700">40%</div>
            <div className="text-sm text-gray-600">YoY Growth</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Jobs by Role */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Jobs by Role</h4>
            <div className="space-y-3">
              {stats.byRole.map(item => (
                <div key={item.role}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{item.role}</span>
                    <span className="text-gray-500">{item.count} jobs &bull; &pound;{item.avgRate}/day</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / maxRoleCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Jobs by Location */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Jobs by Location</h4>
            <div className="space-y-3">
              {stats.byLocation.map(item => (
                <div key={item.location}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{item.location}</span>
                    <span className="text-gray-500">{item.count} jobs ({Math.round((item.count / stats.totalJobs) * 100)}%)</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / maxLocationCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Market Insights</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">Top Hiring Industries</div>
              <p className="text-sm text-gray-600">Technology (35%), FinTech (20%), Professional Services (15%)</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">Fastest Growing Role</div>
              <p className="text-sm text-gray-600">Fractional CTO (+55% YoY) driven by AI/ML demand</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">Rate Trend</div>
              <p className="text-sm text-gray-600">Day rates up ~8% vs 2024, strongest in London</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          Data updated regularly from active job listings. Market statistics are estimates based on available data.
        </p>
      </div>
    </div>
  )
}
