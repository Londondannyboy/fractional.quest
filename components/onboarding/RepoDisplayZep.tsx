'use client'

import { useState, useEffect } from 'react'

interface Props {
  userId: string
  graphData?: {
    nodes: Array<{
      id: string
      type: 'user' | 'skill' | 'job' | 'company' | 'preference' | 'fact'
      label: string
      data?: Record<string, unknown>
    }>
    edges: Array<{
      source: string
      target: string
      type: string
      weight?: number
      label?: string
    }>
  }
  onUpdate?: () => void
}

const PREFERENCE_LABELS: Record<string, string> = {
  role: '💼 Roles',
  location: '📍 Locations',
  day_rate: '💰 Day Rate',
  skill: '⚡ Skills',
  company: '🏢 Companies',
  preference: '🎯 Preferences'
}

const PREFERENCE_COLORS: Record<string, string> = {
  role: 'bg-blue-500/20 border-blue-500/50 text-blue-200',
  location: 'bg-green-500/20 border-green-500/50 text-green-200',
  day_rate: 'bg-pink-500/20 border-pink-500/50 text-pink-200',
  skill: 'bg-indigo-500/20 border-indigo-500/50 text-indigo-200',
  company: 'bg-amber-500/20 border-amber-500/50 text-amber-200',
  preference: 'bg-purple-500/20 border-purple-500/50 text-purple-200'
}

export default function RepoDisplayZep({ userId, graphData, onUpdate }: Props) {
  const [loading, setLoading] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // Handle delete
  const handleDelete = async (node: any) => {
    if (!userId) return

    setDeletingId(node.id)

    try {
      const response = await fetch('/api/delete-repo-preference', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          preference_type: node.type,
          preference_value: node.label
        })
      })

      if (response.ok) {
        console.log('[RepoDisplayZep] Deleted:', node.label)
        onUpdate?.() // Trigger refresh
      } else {
        console.error('[RepoDisplayZep] Delete failed:', await response.text())
      }
    } catch (error) {
      console.error('[RepoDisplayZep] Delete error:', error)
    } finally {
      setDeletingId(null)
    }
  }

  // Group nodes by type (excluding user node)
  const groupedNodes: Record<string, any[]> = {}
  if (graphData?.nodes) {
    graphData.nodes
      .filter(n => n.type !== 'user')
      .forEach(node => {
        if (!groupedNodes[node.type]) {
          groupedNodes[node.type] = []
        }
        groupedNodes[node.type].push(node)
      })
  }

  const totalCount = graphData?.nodes?.filter(n => n.type !== 'user').length || 0

  // Show placeholders for expected fields
  const placeholderFields = [
    { type: 'role', label: '💼 Roles', example: 'e.g., CFO, CMO' },
    { type: 'location', label: '📍 Location', example: 'e.g., London, Paris' },
    { type: 'day_rate', label: '💰 Day Rate', example: 'e.g., £1500' },
    { type: 'skill', label: '⚡ Skills', example: 'e.g., Strategy, Finance' }
  ]

  if (totalCount === 0) {
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
          Your Repo ({totalCount} {totalCount === 1 ? 'item' : 'items'})
        </div>
        <button
          onClick={() => onUpdate?.()}
          className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
        >
          Refresh
        </button>
      </div>

      {Object.entries(groupedNodes).map(([type, nodes]) => (
        <div key={type} className="space-y-2">
          <div className="text-xs font-medium text-purple-300 flex items-center gap-1">
            {PREFERENCE_LABELS[type] || type}
          </div>
          <div className="space-y-1">
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`group flex items-center justify-between gap-2 px-3 py-2 rounded-lg border ${
                  PREFERENCE_COLORS[type] || 'bg-gray-500/20 border-gray-500/50 text-gray-200'
                } transition-all`}
              >
                <div className="flex-1 text-sm">{node.label}</div>
                <button
                  onClick={() => handleDelete(node)}
                  disabled={deletingId === node.id}
                  className="opacity-0 group-hover:opacity-100 text-xs text-red-400 hover:text-red-300 transition-all disabled:opacity-50"
                >
                  {deletingId === node.id ? '...' : '×'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
