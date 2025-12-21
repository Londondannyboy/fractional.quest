'use client'

import { useState } from 'react'
import type { ConfirmationRequest } from '@/lib/voice-to-graph-sync'

// ============================================================================
// TYPES
// ============================================================================

interface VoiceConfirmationModalProps {
  requests: ConfirmationRequest[]
  onConfirm: (requestId: string, value: string) => Promise<void>
  onReject: (requestId: string) => void
  onEdit: (requestId: string, newValue: string) => Promise<void>
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function VoiceConfirmationModal({
  requests,
  onConfirm,
  onReject,
  onEdit
}: VoiceConfirmationModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  if (requests.length === 0) return null

  const currentRequest = requests[currentIndex]
  const isHard = currentRequest.validation_type === 'hard'

  // ========================================================================
  // HANDLERS
  // ========================================================================

  const handleConfirm = async () => {
    setIsProcessing(true)
    try {
      await onConfirm(currentRequest.id, currentRequest.value)
      moveToNext()
    } catch (error) {
      console.error('Failed to confirm:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleReject = () => {
    onReject(currentRequest.id)
    moveToNext()
  }

  const handleEdit = async () => {
    if (!editValue.trim()) return

    setIsProcessing(true)
    try {
      await onEdit(currentRequest.id, editValue.trim())
      moveToNext()
    } catch (error) {
      console.error('Failed to edit:', error)
    } finally {
      setIsProcessing(false)
      setIsEditing(false)
      setEditValue('')
    }
  }

  const moveToNext = () => {
    if (currentIndex < requests.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const startEditing = () => {
    setIsEditing(true)
    setEditValue(currentRequest.value)
  }

  const cancelEditing = () => {
    setIsEditing(false)
    setEditValue('')
  }

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className={`
          w-full max-w-md mx-4 rounded-2xl border-2 p-6 shadow-2xl
          ${isHard
            ? 'bg-gradient-to-br from-red-900/40 to-orange-900/40 border-red-500'
            : 'bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border-purple-500'
          }
        `}
      >
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-white">
              {isHard ? '🔴 Confirm Requirement' : '🟡 Verify Preference'}
            </h2>
            {requests.length > 1 && (
              <span className="text-sm text-gray-400">
                {currentIndex + 1} of {requests.length}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-300">
            {isHard
              ? 'This is a critical requirement - please confirm'
              : 'Low confidence detection - please verify'}
          </p>
        </div>

        {/* Cluster Badge */}
        <div className="mb-4">
          <span className={`
            inline-block px-3 py-1 rounded-full text-xs font-semibold
            ${getClusterColor(currentRequest.cluster)}
          `}>
            {formatClusterName(currentRequest.cluster)}
          </span>
        </div>

        {/* Value Display / Edit */}
        {!isEditing ? (
          <div className="mb-4 p-4 bg-black/40 rounded-xl border border-white/10">
            <div className="text-sm text-gray-400 mb-1">Detected:</div>
            <div className="text-xl font-bold text-white">{currentRequest.value}</div>
            {currentRequest.confidence < 1 && (
              <div className="mt-2 text-xs text-gray-500">
                Confidence: {Math.round(currentRequest.confidence * 100)}%
              </div>
            )}
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-2">
              Edit value:
            </label>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleEdit()
                if (e.key === 'Escape') cancelEditing()
              }}
              className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
              autoFocus
            />
          </div>
        )}

        {/* Reasoning */}
        <div className="mb-6 p-4 bg-black/30 rounded-xl border border-white/5">
          <div className="text-sm text-gray-400 mb-1">Why we're asking:</div>
          <div className="text-sm text-gray-200">{currentRequest.reasoning}</div>
        </div>

        {/* Actions */}
        {!isEditing ? (
          <div className="flex gap-3">
            {/* Edit Button */}
            <button
              onClick={startEditing}
              disabled={isProcessing}
              className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ✏️ Edit
            </button>

            {/* Reject Button */}
            <button
              onClick={handleReject}
              disabled={isProcessing}
              className="flex-1 px-4 py-3 bg-red-900/50 hover:bg-red-800/50 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ❌ Reject
            </button>

            {/* Confirm Button */}
            <button
              onClick={handleConfirm}
              disabled={isProcessing}
              className={`
                flex-1 px-4 py-3 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed
                ${isHard
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500'
                }
                ${isProcessing ? 'animate-pulse' : 'hover:scale-105'}
              `}
            >
              {isProcessing ? '...' : '✓ Confirm'}
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            {/* Cancel Edit */}
            <button
              onClick={cancelEditing}
              disabled={isProcessing}
              className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>

            {/* Save Edit */}
            <button
              onClick={handleEdit}
              disabled={isProcessing || !editValue.trim()}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {requests.length > 1 && (
          <div className="mt-4 w-full bg-black/40 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / requests.length) * 100}%`
              }}
            />
          </div>
        )}

        {/* Keyboard Hints */}
        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500 text-center">
          {isEditing ? (
            <>Press <kbd className="px-1.5 py-0.5 bg-black/40 rounded">Enter</kbd> to save or <kbd className="px-1.5 py-0.5 bg-black/40 rounded">Esc</kbd> to cancel</>
          ) : (
            <>You can also say "yes", "no", or "change it to..." to respond</>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getClusterColor(cluster: string): string {
  const colors: Record<string, string> = {
    skills: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    experience: 'bg-green-500/20 text-green-300 border border-green-500/30',
    career_interests: 'bg-pink-500/20 text-pink-300 border border-pink-500/30',
    preferences: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
    requirements: 'bg-pink-500/20 text-pink-300 border border-pink-500/30',
    candidate_matches: 'bg-green-500/20 text-green-300 border border-green-500/30',
    culture_fit: 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
  }

  return colors[cluster] || 'bg-gray-500/20 text-gray-300 border border-gray-500/30'
}

function formatClusterName(cluster: string): string {
  const names: Record<string, string> = {
    skills: 'Skills',
    experience: 'Experience',
    career_interests: 'Career Interests',
    preferences: 'Preferences',
    requirements: 'Requirements',
    candidate_matches: 'Candidate Matches',
    culture_fit: 'Culture & Personality'
  }

  return names[cluster] || cluster
}
