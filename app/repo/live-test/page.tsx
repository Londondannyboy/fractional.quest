'use client'

import { useUser } from '@stackframe/stack'

export default function LiveTestPage() {
  const user = useUser({ or: 'redirect' })

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white p-8 bg-purple-900/20 rounded-lg border border-purple-500/30">
        <h1 className="text-2xl font-bold mb-4">Live Test Page</h1>
        <div className="space-y-2">
          <p>User ID: {user.id}</p>
          <p>User Name: {user.displayName || user.primaryEmail || 'Unknown'}</p>
          <p>✅ Stack Auth is working!</p>
        </div>
        <div className="mt-6">
          <a
            href="/repo/live"
            className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-500 inline-block"
          >
            Go to Live Repo Builder
          </a>
        </div>
      </div>
    </div>
  )
}
