'use client'

import { useState, useEffect } from 'react'
import { ExtractionResult, ExtractedSkill, ExtractedCompany, ExtractedQualification, ExtractedPreference } from '@/lib/extraction-types'

interface PendingItem {
  id: number
  item_type: string
  extracted_data: ExtractedSkill | ExtractedCompany | ExtractedQualification | ExtractedPreference
  confidence: number
  created_at: string
}

interface ExtractionPanelProps {
  userId: string
  liveExtraction?: ExtractionResult | null
  isExtracting?: boolean
  onRefresh?: () => void
}

export function ExtractionPanel({ userId, liveExtraction, isExtracting, onRefresh }: ExtractionPanelProps) {
  const [pendingItems, setPendingItems] = useState<PendingItem[]>([])
  const [processingId, setProcessingId] = useState<number | null>(null)
  const [showDebug, setShowDebug] = useState(false)

  // Fetch pending items
  useEffect(() => {
    fetchPending()
  }, [userId])

  const fetchPending = async () => {
    try {
      const res = await fetch(`/api/extract?userId=${userId}`)
      if (res.ok) {
        const data = await res.json()
        setPendingItems(data.pending || [])
      }
    } catch (error) {
      console.error('Error fetching pending:', error)
    }
  }

  const handleConfirm = async (itemId: number, action: 'confirm' | 'reject') => {
    setProcessingId(itemId)
    try {
      const res = await fetch('/api/extract/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, userId, action })
      })

      if (res.ok) {
        setPendingItems(prev => prev.filter(item => item.id !== itemId))
        onRefresh?.()
      }
    } catch (error) {
      console.error('Error confirming:', error)
    }
    setProcessingId(null)
  }

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'skill': return '🎯'
      case 'company': return '🏢'
      case 'qualification': return '🎓'
      case 'preference': return '⚙️'
      default: return '📋'
    }
  }

  const getItemTitle = (item: PendingItem) => {
    const data = item.extracted_data as unknown as Record<string, unknown>
    return (data.name as string) || (data.value as string) || 'Unknown'
  }

  const getItemSubtitle = (item: PendingItem) => {
    const data = item.extracted_data as unknown as Record<string, unknown>
    switch (item.item_type) {
      case 'skill':
        return (data.context as string) || (data.category as string) || ''
      case 'company':
        return (data.role as string) || ''
      case 'qualification':
        return (data.institution as string) || ''
      case 'preference':
        return (data.type as string) || ''
      default:
        return ''
    }
  }

  return (
    <div className="bg-white border-l border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Building Your Repo</h2>
          <button
            onClick={() => setShowDebug(!showDebug)}
            className="text-xs text-gray-600 hover:text-gray-600"
          >
            {showDebug ? 'Hide' : 'Debug'}
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Confirm the information we've extracted
        </p>
      </div>

      {/* Live Extraction Indicator */}
      {isExtracting && (
        <div className="px-4 py-3 bg-purple-50 border-b border-purple-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm text-purple-700 font-medium">Listening & extracting...</span>
          </div>
        </div>
      )}

      {/* Live Extraction Preview */}
      {liveExtraction && (liveExtraction.skills.length > 0 || liveExtraction.companies.length > 0) && (
        <div className="px-4 py-3 bg-blue-50 border-b border-blue-100">
          <p className="text-xs font-medium text-blue-700 mb-2">Just detected:</p>
          <div className="space-y-1">
            {liveExtraction.skills.slice(0, 3).map((skill, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-blue-800">
                <span className="text-xs">🎯</span>
                <span>{skill.name}</span>
                <span className="text-xs text-blue-500">({Math.round(skill.confidence * 100)}%)</span>
              </div>
            ))}
            {liveExtraction.companies.slice(0, 2).map((company, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-blue-800">
                <span className="text-xs">🏢</span>
                <span>{company.name}</span>
                {company.role && <span className="text-xs text-blue-500">({company.role})</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pending Items */}
      <div className="flex-1 overflow-y-auto">
        {pendingItems.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm">
              Start talking and we'll extract skills,<br />experience, and preferences
            </p>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              {pendingItems.length} item{pendingItems.length !== 1 ? 's' : ''} to confirm
            </p>

            {pendingItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg p-3 border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg">{getItemIcon(item.item_type)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {getItemTitle(item)}
                    </p>
                    {getItemSubtitle(item) && (
                      <p className="text-sm text-gray-600 truncate">
                        {getItemSubtitle(item)}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600 capitalize">
                        {item.item_type}
                      </span>
                      <span className="text-xs text-gray-300">•</span>
                      <span className={`text-xs ${
                        item.confidence >= 0.8 ? 'text-blue-600' :
                        item.confidence >= 0.6 ? 'text-yellow-600' : 'text-orange-600'
                      }`}>
                        {Math.round(item.confidence * 100)}% confident
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => handleConfirm(item.id, 'confirm')}
                    disabled={processingId === item.id}
                    className="flex-1 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    ✓ Confirm
                  </button>
                  <button
                    onClick={() => handleConfirm(item.id, 'reject')}
                    disabled={processingId === item.id}
                    className="px-3 py-1.5 bg-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-300 disabled:opacity-50 transition-colors"
                  >
                    ✗
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Debug Panel */}
      {showDebug && liveExtraction && (
        <div className="border-t border-gray-200 p-4 bg-gray-50 max-h-48 overflow-y-auto">
          <p className="text-xs font-mono text-gray-600 mb-2">Debug: Raw Extraction</p>
          <pre className="text-xs font-mono text-gray-600 whitespace-pre-wrap">
            {JSON.stringify(liveExtraction, null, 2)}
          </pre>
        </div>
      )}

      {/* Footer Stats */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>Powered by AI extraction</span>
          <button
            onClick={fetchPending}
            className="text-purple-600 hover:text-purple-700"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
}
