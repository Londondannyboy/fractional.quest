'use client'

import { useState, useEffect } from 'react'

interface RepoPreferences {
  preferences: Record<string, Array<{
    id: number
    value: string
    rawText?: string
    createdAt: string
  }>>
  count: number
}

interface Props {
  userId: string
  onUpdate?: () => void
}

const PREFERENCE_LABELS: Record<string, string> = {
  role: '💼 Roles',
  industry: '🏢 Industries',
  location: '📍 Locations',
  availability: '📅 Availability',
  day_rate: '💰 Day Rate',
  skill: '⚡ Skills'
}

const PREFERENCE_COLORS: Record<string, string> = {
  role: 'bg-blue-500/20 border-blue-500/50 text-blue-200',
  industry: 'bg-purple-500/20 border-purple-500/50 text-purple-200',
  location: 'bg-green-500/20 border-green-500/50 text-green-200',
  availability: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-200',
  day_rate: 'bg-pink-500/20 border-pink-500/50 text-pink-200',
  skill: 'bg-indigo-500/20 border-indigo-500/50 text-indigo-200'
}

export default function RepoDisplay({ userId, onUpdate }: Props) {
  const [data, setData] = useState<RepoPreferences | null>(null)
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<number | null>(null)

  const fetchPreferences = async () => {
    try {
      setLoading(true)
      console.log('[RepoDisplay] Fetching preferences for user:', userId)
      const response = await fetch(`/api/get-repo-preferences?userId=${userId}`)
      if (response.ok) {
        const result = await response.json()
        console.log('[RepoDisplay] Fetched:', result)
        setData(result)
      } else {
        console.error('[RepoDisplay] Fetch failed:', response.status)
      }
    } catch (error) {
      console.error('[RepoDisplay] Error fetching:', error)
    } finally {
      setLoading(false)
    }
  }

  // Fetch on mount and when userId changes
  useEffect(() => {
    fetchPreferences()
  }, [userId])

  // Auto-refresh every 2 seconds to show real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPreferences()
    }, 2000)
    return () => clearInterval(interval)
  }, [userId])

  const handleDelete = async (prefId: number) => {
    if (!confirm('Remove this item from your repo?')) return

    try {
      setDeleting(prefId)
      const response = await fetch('/api/delete-repo-preference', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prefId, userId })
      })

      if (response.ok) {
        await fetchPreferences()
        onUpdate?.()
      }
    } catch (error) {
      console.error('[RepoDisplay] Error deleting:', error)
    } finally {
      setDeleting(null)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-purple-300 text-sm">Loading your repo...</div>
      </div>
    )
  }

  // Show placeholders for expected fields
  const placeholderFields = [
    { type: 'role', label: '💼 Roles', example: 'e.g., CFO, CMO' },
    { type: 'location', label: '📍 Location', example: 'e.g., London, Paris' },
    { type: 'day_rate', label: '💰 Day Rate', example: 'e.g., £1500' },
    { type: 'availability', label: '📅 Availability', example: 'e.g., Immediate' }
  ]

  if (!data || data.count === 0) {
    return (
      <div className="space-y-3">
        <div className="text-xs font-medium text-purple-200 mb-2">
          Your Repo (0 items)
        </div>
        <div className="text-xs text-purple-400 mb-4">
          Start speaking to fill in your details
        </div>
        {placeholderFields.map((field) => (
          <div key={field.type} className="space-y-1">
            <div className="text-xs font-medium text-purple-300/60">
              {field.label}
            </div>
            <div className="px-3 py-2 rounded-lg border border-purple-500/20 bg-purple-500/5 text-xs text-purple-400/40 italic">
              {field.example}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-semibold text-purple-200">
          Your Repo ({data.count} {data.count === 1 ? 'item' : 'items'})
        </div>
        <button
          onClick={fetchPreferences}
          className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
        >
          Refresh
        </button>
      </div>

      {Object.entries(data.preferences).map(([type, items]) => (
        <div key={type} className="space-y-2">
          <div className="text-xs font-medium text-purple-300 flex items-center gap-1">
            {PREFERENCE_LABELS[type] || type}
          </div>
          <div className="space-y-1">
            {items.map((item) => (
              <div
                key={item.id}
                className={`group flex items-center justify-between gap-2 px-3 py-2 rounded-lg border ${
                  PREFERENCE_COLORS[type] || 'bg-gray-500/20 border-gray-500/50 text-gray-200'
                } transition-all`}
              >
                <div className="flex-1 text-sm">{item.value}</div>
                <button
                  onClick={() => handleDelete(item.id)}
                  disabled={deleting === item.id}
                  className="opacity-0 group-hover:opacity-100 text-xs text-red-400 hover:text-red-300 transition-all disabled:opacity-50"
                >
                  {deleting === item.id ? '...' : '×'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
