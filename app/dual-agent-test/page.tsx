'use client'

import { useState } from 'react'
import { AgentAvatar } from '@/components/AgentAvatar'
import Link from 'next/link'

export default function DualAgentTest() {
  const [activeAgent, setActiveAgent] = useState<'frac' | 'onboarding' | null>('frac')
  const [isListening, setIsListening] = useState(true)

  const handleActivate = (agent: 'frac' | 'onboarding') => {
    if (activeAgent === agent) return // Already active

    // Switch agents
    console.log(`Switching from ${activeAgent} to ${agent}`)
    setActiveAgent(agent)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mt-4">Dual Agent Interface Test</h1>
        <p className="text-gray-400 mt-2">
          Click on an agent to activate them. Only one can be active at a time.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="max-w-6xl w-full">

          {/* Agent Selection */}
          <div className="grid grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col items-center">
              <AgentAvatar
                type="frac"
                isActive={activeAgent === 'frac'}
                isListening={activeAgent === 'frac' && isListening}
                onClick={() => handleActivate('frac')}
              />

              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Frac</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Your general career assistant. Search jobs, get advice, explore opportunities.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <AgentAvatar
                type="onboarding"
                isActive={activeAgent === 'onboarding'}
                isListening={activeAgent === 'onboarding' && isListening}
                onClick={() => handleActivate('onboarding')}
              />

              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2">Onboarding Coach</h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Build your profile step-by-step. Share your skills, experience, and preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Active Agent Status */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {activeAgent === 'frac' ? '🤖 Frac is Active' : '👨‍💼 Onboarding Coach is Active'}
                </h2>
                <p className="text-gray-400 mt-1">
                  {activeAgent === 'frac'
                    ? 'Ready to help you find jobs and answer questions'
                    : 'Ready to build your profile and get you set up'
                  }
                </p>
              </div>

              <button
                onClick={() => setIsListening(!isListening)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  isListening
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                }`}
              >
                {isListening ? '🎤 Listening...' : '🔇 Muted'}
              </button>
            </div>

            {/* Conversation Area */}
            <div className="bg-black/50 rounded-lg p-6 min-h-[300px]">
              <div className="text-gray-500 text-center">
                <div className="text-6xl mb-4">
                  {activeAgent === 'frac' ? '🤖' : '👨‍💼'}
                </div>
                <p className="text-lg">
                  {isListening
                    ? `${activeAgent === 'frac' ? 'Frac' : 'Onboarding Coach'} is listening...`
                    : 'Microphone is muted'
                  }
                </p>
                <p className="text-sm mt-2">
                  (Voice interface would appear here when integrated with Hume)
                </p>
              </div>
            </div>

            {/* Debug Info */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="text-sm font-bold text-gray-400 mb-2">Debug Info:</h4>
              <pre className="text-xs text-gray-500">
                {JSON.stringify({
                  activeAgent,
                  isListening,
                  fracConfig: 'd57ceb71-4cf5-47e9-87cd-6052445a031c',
                  onboardingConfig: '5da7f806-2f21-4450-b4db-ab7509b3c38a'
                }, null, 2)}
              </pre>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4">
              <h4 className="font-bold text-blue-400 mb-2">✅ Working Features</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Click to switch between agents</li>
                <li>• Visual active state indicators</li>
                <li>• Cartoon face avatars</li>
                <li>• Mutual exclusion (only one active)</li>
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
              <h4 className="font-bold text-yellow-400 mb-2">🚧 Next Steps</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Integrate with actual Hume voice</li>
                <li>• Add graceful handover messages</li>
                <li>• Context sharing between agents</li>
                <li>• Pydantic AI confirmations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
