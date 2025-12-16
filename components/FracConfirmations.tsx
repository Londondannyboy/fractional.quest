/**
 * Frac Confirmations Component
 *
 * Handles human-in-the-loop confirmations for job interests and preferences
 * Works with the Pydantic AI copilot-agent backend
 */
'use client'

import { useState } from 'react'

interface ConfirmationProps {
  confirmation: {
    type: 'confirmation_required'
    action: 'save_job' | 'update_preference' | 'apply'
    message: string
    data: any
    user_id?: string
  }
  onClose: () => void
  onConfirm: (data: any) => void
}

export function FracConfirmations({ confirmation, onClose, onConfirm }: ConfirmationProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConfirm = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Call the confirm-action API
      const response = await fetch('/api/confirm-action', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: confirmation.action,
          approved: true,
          data: confirmation.data,
          user_id: confirmation.user_id || 'anonymous'
        })
      })

      const result = await response.json()

      if (result.success) {
        // Success! Call the onConfirm callback
        onConfirm(result.data)
      } else {
        setError(result.error || 'Failed to save')
      }
    } catch (err) {
      console.error('Confirmation error:', err)
      setError('Failed to save. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Confirm Action
              </h3>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                Method C
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {confirmation.message}
            </p>
          </div>
        </div>

        {/* Details Card */}
        {confirmation.action === 'save_job' && confirmation.data && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 mb-4 space-y-2">
            {confirmation.data.title && (
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Position</div>
                <div className="font-semibold text-gray-900 dark:text-white">{confirmation.data.title}</div>
              </div>
            )}
            {confirmation.data.company && (
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Company</div>
                <div className="font-semibold text-gray-900 dark:text-white">{confirmation.data.company}</div>
              </div>
            )}
            {confirmation.data.location && (
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                <div className="font-semibold text-gray-900 dark:text-white">{confirmation.data.location}</div>
              </div>
            )}
            {confirmation.data.day_rate && (
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Day Rate</div>
                <div className="font-semibold text-gray-900 dark:text-white">£{confirmation.data.day_rate}</div>
              </div>
            )}
          </div>
        )}

        {confirmation.action === 'update_preference' && confirmation.data && (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 mb-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Updating {confirmation.data.preference_type?.replace('_', ' ')}
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(confirmation.data.values) ? (
                confirmation.data.values.map((value: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                  >
                    {value}
                  </span>
                ))
              ) : (
                <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                  {confirmation.data.values}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Confirming...
              </span>
            ) : (
              'Confirm'
            )}
          </button>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>

        {/* Success indicator (shown after confirmation, before close) */}
        {isLoading === false && error === null && (
          <div className="mt-3 text-center text-sm text-blue-600 font-medium animate-in fade-in duration-200">
            ✓ Saved successfully!
          </div>
        )}
      </div>
    </div>
  )
}
