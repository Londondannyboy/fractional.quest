'use client'

import { useState, useEffect } from 'react'

export default function MinimalTestPage() {
  const [token, setToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('[MinimalTest] Fetching Hume token...')
    fetch('/api/hume-token')
      .then(r => {
        console.log('[MinimalTest] Response status:', r.status)
        return r.json()
      })
      .then(data => {
        console.log('[MinimalTest] Token data:', data)
        setToken(data.token || data.accessToken || 'No token')
        setLoading(false)
      })
      .catch(err => {
        console.error('[MinimalTest] Error:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="text-white p-8 bg-purple-900/20 rounded-lg border border-purple-500/30 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Minimal Test Page</h1>

        <div className="space-y-4">
          <div className="p-4 bg-black/40 rounded">
            <div className="text-sm text-gray-400 mb-2">Hume Token Status:</div>
            {loading && <div className="text-yellow-400">Loading...</div>}
            {error && <div className="text-red-400">Error: {error}</div>}
            {token && (
              <div className="text-green-400">
                ✅ Token received: {token.substring(0, 20)}...
              </div>
            )}
          </div>

          <div className="p-4 bg-black/40 rounded">
            <div className="text-sm text-gray-400 mb-2">Console Output:</div>
            <div className="text-xs text-gray-300">
              Check browser console for detailed logs
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => window.location.href = '/repo/live'}
              className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-500"
            >
              Try Live Page
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
