'use client'

import { useState } from 'react'
import { useUser } from '@stackframe/stack'
import Link from 'next/link'

export default function OnboardingRouter() {
  const user = useUser({ or: 'redirect' })
  const [hoveredCard, setHoveredCard] = useState<'voice' | 'manual' | null>(null)

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to <span className="text-blue-400">Fractional Quest</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's build your profile. Choose how you'd like to get started.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Voice Onboarding Card */}
          <Link href="/onboarding/voice">
            <div
              className={`relative bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer h-full ${
                hoveredCard === 'voice'
                  ? 'border-blue-400 shadow-2xl shadow-blue-500/20 scale-105'
                  : 'border-blue-500/30 hover:border-blue-400/50'
              }`}
              onMouseEnter={() => setHoveredCard('voice')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </span>
              </div>

              <div className="text-center mt-4">
                {/* Icon */}
                <div className="text-6xl mb-6 animate-pulse">🎙️</div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-4">
                  Voice Onboarding
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  Have a natural conversation with Frac. Just talk about your experience and preferences—we'll handle the rest.
                </p>

                {/* Features */}
                <ul className="text-left space-y-3 text-sm text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Natural conversation (3-5 minutes)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Live knowledge graph visualization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    AI-powered extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Resume anytime if disconnected
                  </li>
                </ul>

                {/* CTA */}
                <div className={`inline-flex items-center gap-2 text-blue-400 font-semibold transition-transform ${
                  hoveredCard === 'voice' ? 'translate-x-2' : ''
                }`}>
                  Start talking →
                </div>
              </div>
            </div>
          </Link>

          {/* Manual Onboarding Card */}
          <Link href="/onboarding/manual">
            <div
              className={`relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer h-full ${
                hoveredCard === 'manual'
                  ? 'border-gray-400 shadow-2xl shadow-gray-500/10 scale-105'
                  : 'border-gray-500/30 hover:border-gray-400/50'
              }`}
              onMouseEnter={() => setHoveredCard('manual')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center">
                {/* Icon */}
                <div className="text-6xl mb-6">📝</div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-4">
                  Manual Form
                </h2>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  Prefer to fill out a form? No problem. Provide your details step-by-step at your own pace.
                </p>

                {/* Features */}
                <ul className="text-left space-y-3 text-sm text-gray-400 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    Traditional step-by-step form
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    Full control over details
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    Edit and review before submitting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    Works without microphone
                  </li>
                </ul>

                {/* CTA */}
                <div className={`inline-flex items-center gap-2 text-gray-400 font-semibold transition-transform ${
                  hoveredCard === 'manual' ? 'translate-x-2' : ''
                }`}>
                  Fill out form →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm">
          <p>You can switch between methods anytime during onboarding.</p>
        </div>
      </div>
    </div>
  )
}
