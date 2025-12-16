'use client'

import Link from 'next/link'

export default function TestOnboardingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Test Onboarding Flow</h1>
        <p className="text-gray-400 mb-12">
          These links bypass authentication for testing the onboarding UI
        </p>

        <div className="space-y-4">
          <Link
            href="/onboarding"
            className="block w-full p-6 bg-blue-900/30 border-2 border-blue-500/50 rounded-xl hover:border-blue-400 transition-all"
          >
            <h2 className="text-xl font-bold text-white mb-2">Onboarding Router</h2>
            <p className="text-gray-400 text-sm">Choose between voice and manual</p>
          </Link>

          <div className="block w-full p-6 bg-gray-900/50 border-2 border-gray-600 rounded-xl opacity-50 cursor-not-allowed">
            <h2 className="text-xl font-bold text-white mb-2">Voice Onboarding (Requires Auth)</h2>
            <p className="text-gray-400 text-sm">Must be logged in - configure Stack Auth localhost first</p>
          </div>

          <div className="block w-full p-6 bg-gray-900/50 border-2 border-gray-600 rounded-xl opacity-50 cursor-not-allowed">
            <h2 className="text-xl font-bold text-white mb-2">Manual Onboarding (Requires Auth)</h2>
            <p className="text-gray-400 text-sm">Must be logged in - configure Stack Auth localhost first</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-yellow-900/20 border border-yellow-600/50 rounded-xl text-left">
          <h3 className="text-yellow-400 font-bold mb-2">⚠️ Stack Auth Setup Required</h3>
          <ol className="text-gray-300 text-sm space-y-2">
            <li>1. Go to https://app.stack-auth.com</li>
            <li>2. Settings → Domains</li>
            <li>3. Add: <code className="bg-black/50 px-2 py-1 rounded">http://localhost:3000</code></li>
            <li>4. Restart dev server</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
