'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useUser } from '@stackframe/stack'
import { VoiceProvider, useVoice } from '@humeai/voice-react'
import { useRouter } from 'next/navigation'
import RepoBuilder from '@/components/RepoBuilder'
import { FracConfirmations } from '@/components/FracConfirmations'
import RepoDisplayZep from '@/components/onboarding/RepoDisplayZep'
import dynamic from 'next/dynamic'

// Dynamically import 3D graph to avoid SSR issues
const ForceGraph3DRepo = dynamic(() => import('@/components/onboarding/ForceGraph3DRepo'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-white text-lg">Loading 3D Universe...</div>
    </div>
  )
})

const CONFIG_ID = 'd57ceb71-4cf5-47e9-87cd-6052445a031c'

// Store chat_group_id per user for Hume resume functionality
function getChatGroupId(userId: string): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(`hume_chat_group_${userId}`)
}

function setChatGroupId(userId: string, chatGroupId: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(`hume_chat_group_${userId}`, chatGroupId)
}

interface GraphData {
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

interface ExtractedPreference {
  type: 'role' | 'industry' | 'location' | 'availability' | 'day_rate' | 'skill'
  values: string[]
  confidence: 'high' | 'medium' | 'low'
  raw_text: string
}

function VoiceInterface({ token, userId, profile, memoryContext, graphData, onPreferenceAdded }: {
  token: string
  userId?: string
  profile?: any
  memoryContext?: string
  graphData?: GraphData
  onPreferenceAdded?: () => void
}) {
  const { connect, disconnect, status, messages, isPlaying } = useVoice()
  const [showCelebration, setShowCelebration] = useState<string | null>(null)
  const [confirmation, setConfirmation] = useState<any | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [refreshCounter, setRefreshCounter] = useState(0)
  const graphRef = useRef<any>(null)
  const wasConnectedRef = useRef(false)
  const lastProcessedTranscript = useRef<string>('')

  // Extract preferences and trigger confirmations
  const extractPreferences = useCallback(async (transcript: string) => {
    if (!transcript || transcript === lastProcessedTranscript.current) return
    if (transcript.length < 20) return // Too short

    lastProcessedTranscript.current = transcript

    try {
      console.log('[Pydantic] Extracting from:', transcript.substring(0, 50))

      const response = await fetch('/api/pydantic-extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript })
      })

      if (!response.ok) {
        console.log('[Pydantic] Extraction failed, status:', response.status)
        return
      }

      const data = await response.json()
      console.log('[Pydantic] Extraction result:', data)

      // Check for items requiring hard validation
      if (data.preferences && Array.isArray(data.preferences)) {
        const hardValidationItems = data.preferences.filter(
          (pref: any) => pref.requires_hard_validation === true
        )

        // Show confirmation modal for first hard validation item
        if (hardValidationItems.length > 0) {
          const item = hardValidationItems[0]
          console.log('[Pydantic] Hard validation needed for:', item)

          setConfirmation({
            type: 'confirmation_required',
            action: 'update_preference',
            message: `Confirm your ${item.type}: ${item.values.join(', ')}?`,
            data: {
              preference_type: item.type,
              values: item.values,
              raw_text: item.raw_text
            },
            user_id: userId
          })
        }
      }
    } catch (error) {
      console.error('[Pydantic] Extraction error:', error)
    }
  }, [userId])

  // Trigger extraction when user speaks
  useEffect(() => {
    if (messages.length === 0) return

    const userMessages = messages
      .filter((m: any) => m.type === 'user_message' && m.message?.content)
      .map((m: any) => m.message.content)
      .join(' ')

    if (userMessages) {
      // Debounce extraction
      const timer = setTimeout(() => {
        extractPreferences(userMessages)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [messages, extractPreferences])

  // Save conversation to Supermemory when session ends
  useEffect(() => {
    if (status.value === 'connected') {
      wasConnectedRef.current = true
    }

    if (status.value === 'disconnected' && wasConnectedRef.current && userId && messages.length > 0) {
      wasConnectedRef.current = false

      const transcript = messages
        .filter((m: any) => m.type === 'user_message' || m.type === 'assistant_message')
        .map((m: any) => {
          const role = m.type === 'user_message' ? 'User' : 'Repo'
          return `${role}: ${m.message?.content || ''}`
        })
        .join('\n')

      if (transcript.length > 50) {
        fetch('/api/supermemory-save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, transcript })
        }).catch(err => console.error('[Supermemory] Save error:', err))
      }
    }
  }, [status.value, messages, userId])

  // Wrap onPreferenceAdded to trigger refresh
  const handlePreferenceAdded = useCallback(() => {
    onPreferenceAdded?.()
    setRefreshCounter(prev => prev + 1)
  }, [onPreferenceAdded])

  // Milestone celebrations
  const factCount = graphData?.nodes.filter(n => n.type !== 'user').length || 0
  useEffect(() => {
    if (factCount === 5) {
      setShowCelebration("Great start! 🎉")
      setTimeout(() => setShowCelebration(null), 3000)
    } else if (factCount === 10) {
      setShowCelebration("Looking good! 🌟")
      setTimeout(() => setShowCelebration(null), 3000)
    } else if (factCount === 15) {
      setShowCelebration("Your Repo is Complete! 🚀")
      setTimeout(() => {
        setShowCelebration(null)
        // Redirect to main repo after celebration
        window.location.href = '/repo'
      }, 4000)
    }
  }, [factCount])

  const handleConnect = useCallback(async () => {
    const vars = {
      user_id: userId || '',
      first_name: profile?.first_name || '',
      last_name: profile?.last_name || '',
      is_authenticated: userId ? 'true' : 'false',
      current_country: profile?.current_country || '',
      interests: profile?.interests || '',
      timeline: profile?.timeline || '',
      budget: profile?.budget_monthly ? `£${profile.budget_monthly}/day` : '',
      previous_context: memoryContext || '',
    }

    const existingChatGroupId = userId ? getChatGroupId(userId) : null

    try {
      await connect({
        auth: { type: 'accessToken', value: token },
        configId: CONFIG_ID,
        resumedChatGroupId: existingChatGroupId || undefined,
        sessionSettings: {
          type: 'session_settings' as const,
          variables: vars
        }
      })
    } catch (e) {
      console.error('Connection error:', e)
    }
  }, [connect, token, userId, profile, memoryContext])

  const isConnected = status.value === 'connected'
  const isConnecting = status.value === 'connecting'

  // Debug logging
  useEffect(() => {
    console.log('[VoiceInterface] graphData updated:', {
      hasData: !!graphData,
      nodeCount: graphData?.nodes?.length || 0,
      edgeCount: graphData?.edges?.length || 0
    })
  }, [graphData])

  return (
    <div className="h-screen relative bg-black overflow-hidden">
      {/* Debug info */}
      <div className="absolute top-4 right-4 z-50 bg-black/80 text-white text-xs p-2 rounded">
        Graph nodes: {graphData?.nodes?.length || 0} | Status: {status.value}
      </div>

      {/* Full-screen Graph Visualization */}
      <div className="absolute inset-0">
        {!graphData || !graphData.nodes || graphData.nodes.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center text-white">
            <div>
              <div className="text-6xl mb-4">🌌</div>
              <div className="text-2xl font-bold mb-2">Your Universe is Building...</div>
              <div className="text-gray-400">Click the center button and start speaking</div>
              <div className="text-xs text-gray-500 mt-4">
                {!graphData ? 'Loading graph data...' : 'Waiting for preferences...'}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-12">
            <div className="max-w-6xl w-full">
              {/* Center user node */}
              <div className="flex justify-center mb-12">
                <div className="w-32 h-32 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-purple-400 animate-pulse">
                  You
                </div>
              </div>

              {/* Radiating clusters */}
              <div className="grid grid-cols-3 gap-8">
                {Object.entries(
                  graphData.nodes
                    .filter((n: any) => n.type !== 'user')
                    .reduce((acc: any, node: any) => {
                      if (!acc[node.type]) acc[node.type] = []
                      acc[node.type].push(node)
                      return acc
                    }, {})
                ).map(([type, nodes]: [string, any]) => (
                  <div key={type} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                    <h3 className="text-lg font-semibold text-purple-300 mb-4 capitalize">
                      {type === 'role' && '💼 Roles'}
                      {type === 'location' && '📍 Locations'}
                      {type === 'skill' && '⚡ Skills'}
                      {type === 'day_rate' && '💰 Day Rate'}
                      {type === 'company' && '🏢 Companies'}
                      {!['role', 'location', 'skill', 'day_rate', 'company'].includes(type) && type}
                    </h3>
                    <div className="space-y-2">
                      {nodes.map((node: any) => (
                        <div
                          key={node.id}
                          className="px-4 py-2 bg-purple-600/20 rounded-lg text-purple-100 text-sm"
                        >
                          {node.label}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Voice Button - DRAGGABLE */}
      <div
        className="absolute pointer-events-auto z-30 cursor-move"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.effectAllowed = 'move'
        }}
        onDrag={(e) => {
          if (e.clientX === 0 && e.clientY === 0) return // Ignore end drag event
          const button = e.currentTarget as HTMLElement
          button.style.left = `${e.clientX}px`
          button.style.top = `${e.clientY}px`
          button.style.transform = 'translate(-50%, -50%)'
        }}
      >
        <div className="relative">
          {/* Pulsing ring for voice activity - non-interactive */}
          {isConnected && isPlaying && (
            <div className="absolute inset-0 -m-12 rounded-full border-4 border-purple-500 animate-ping opacity-75 pointer-events-none" />
          )}

          {/* Glow effect - non-interactive */}
          {isConnected && (
            <div className="absolute inset-0 -m-8 rounded-full bg-purple-500/30 blur-2xl animate-pulse pointer-events-none" />
          )}

          {/* Main voice button - clickable AND draggable */}
          <button
            onClick={isConnected ? disconnect : handleConnect}
            disabled={isConnecting}
            onMouseDown={(e) => e.stopPropagation()} // Allow dragging the container, not the button
            className={`
              relative w-40 h-40 rounded-full text-white font-bold text-xl shadow-2xl
              transition-all transform hover:scale-110
              ${isConnected
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 animate-pulse shadow-blue-500/50'
                : isConnecting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-br from-purple-600 to-purple-700 shadow-purple-500/50'
              }
            `}
          >
            {isConnected ? (
              <span className="flex flex-col items-center">
                <MicIcon className="w-12 h-12 mb-2" />
                <span className="text-base">Stop</span>
              </span>
            ) : isConnecting ? (
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
            ) : (
              <span className="flex flex-col items-center">
                <MicIcon className="w-12 h-12 mb-2" />
                <span className="text-base">Speak</span>
              </span>
            )}
          </button>

          {/* Status text - non-interactive */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-white text-lg font-medium drop-shadow-lg pointer-events-none">
            {isConnected ? (isPlaying ? '🎤 Listening...' : '💬 Speak now') : '👆 Tap to start'}
          </div>
        </div>
      </div>

      {/* Collapsible Sidebar */}
      <div className={`absolute top-0 right-0 h-full bg-gradient-to-l from-purple-900/95 via-purple-800/95 to-transparent backdrop-blur-md transition-all duration-300 ${
        sidebarOpen ? 'w-96' : 'w-0'
      } overflow-hidden`}>
        <div className="w-96 h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Your Repo</h2>
                <p className="text-sm text-purple-200">{factCount} items</p>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-purple-300 mb-2">
                <span>Progress</span>
                <span>{factCount}/15 facts</span>
              </div>
              <div className="w-full bg-purple-900/50 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((factCount / 15) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Confirmed Items */}
          <div className="p-6 border-b border-white/10 overflow-y-auto flex-shrink-0" style={{ maxHeight: '40%' }}>
            <RepoDisplayZep
              key={refreshCounter}
              userId={userId || ''}
              graphData={graphData}
              onUpdate={handlePreferenceAdded}
            />
          </div>

          {/* RepoBuilder */}
          <div className="p-6 overflow-y-auto flex-1">
            <RepoBuilder
              userId={userId}
              voiceTranscript={
                messages
                  .filter((m: any) => m.type === 'user_message' && m.message?.content)
                  .slice(-5)
                  .map((m: any) => m.message.content)
                  .join(' ')
              }
              onPreferenceSaved={handlePreferenceAdded}
            />
          </div>
        </div>
      </div>

      {/* Sidebar Toggle (when closed) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="absolute top-6 right-6 bg-purple-600/90 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-all z-50"
        >
          <div className="flex items-center gap-2">
            <span>Show Repo</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{factCount}</span>
          </div>
        </button>
      )}

      {/* Confirmation Modal */}
      {confirmation && (
        <FracConfirmations
          confirmation={confirmation}
          onClose={() => setConfirmation(null)}
          onConfirm={async (data) => {
            console.log('[Confirmation] User confirmed:', data)
            handlePreferenceAdded()
            setConfirmation(null)
          }}
        />
      )}

      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-none z-50">
          <div className="text-6xl font-bold text-white animate-bounce">
            {showCelebration}
          </div>
        </div>
      )}

      {/* Info Overlay - Top Left */}
      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/20 text-white z-40">
        <div className="text-sm space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span>You</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span>Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span>Companies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500" />
            <span>Preferences</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-white/20 text-xs text-gray-300">
          <div>{graphData?.nodes.length || 0} nodes</div>
          <div>{graphData?.edges.length || 0} connections</div>
        </div>
      </div>
    </div>
  )
}

export default function ImmersiveRepoPage() {
  // For local testing, bypass auth
  const bypassAuth = process.env.NEXT_PUBLIC_BYPASS_AUTH === 'true'
  const userFromStack = useUser({ or: bypassAuth ? undefined : 'redirect' })
  const user = bypassAuth
    ? { id: 'test-user', displayName: 'Test User', primaryEmail: 'test@example.com' }
    : userFromStack

  const [token, setToken] = useState<string | null>(null)
  const [profile, setProfile] = useState<any>(null)
  const [memoryContext, setMemoryContext] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [graphData, setGraphData] = useState<GraphData | null>(null)

  // Fetch Hume token
  useEffect(() => {
    fetch('/api/hume-token')
      .then(r => r.json())
      .then(d => d.accessToken ? setToken(d.accessToken) : setError('No token'))
      .catch(e => setError(e.message))
  }, [])

  // Fetch profile from Neon
  useEffect(() => {
    if (!user || bypassAuth) return
    fetch('/api/user-profile')
      .then(r => r.ok ? r.json() : null)
      .then(data => setProfile(data))
      .catch(console.error)
  }, [user, bypassAuth])

  // Fetch memory context from Supermemory + ZEP
  useEffect(() => {
    if (!user) return

    Promise.all([
      // Supermemory
      fetch('/api/supermemory-context', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, query: 'career preferences skills experience' })
      }).then(r => r.ok ? r.json() : null),
      // ZEP
      fetch(`/api/zep-context?userId=${user.id}&query=skills experience preferences`)
        .then(r => r.ok ? r.json() : null)
    ])
      .then(([smData, zepData]) => {
        const contexts = [
          zepData?.context,
          smData?.context
        ].filter(Boolean).join('\n\n')

        setMemoryContext(contexts)
      })
      .catch(e => console.error('[Memory] Error:', e))
  }, [user])

  // Fetch knowledge graph visualization data from Neon
  const fetchGraphData = useCallback(() => {
    if (!user) {
      console.log('[Graph] No user, skipping fetch')
      return
    }
    console.log('[Graph Neon] Fetching for user:', user.id)
    fetch(`/api/graph/neon?userId=${user.id}`)
      .then(r => {
        console.log('[Graph Neon] Response status:', r.status)
        return r.ok ? r.json() : null
      })
      .then(data => {
        console.log('[Graph Neon] Received data:', data)
        if (data?.graph) {
          console.log('[Graph Neon] Setting graph with', data.graph.nodes?.length, 'nodes')
          setGraphData(data.graph)
        } else {
          console.log('[Graph Neon] No graph in response')
        }
      })
      .catch(e => console.error('[Graph Neon] Error:', e))
  }, [user])

  // Initial graph fetch
  useEffect(() => {
    fetchGraphData()
  }, [fetchGraphData])

  // Auto-refresh graph every 3 seconds to show real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      fetchGraphData()
    }, 3000)
    return () => clearInterval(interval)
  }, [fetchGraphData])

  // Handle chat_group_id from Hume for resume functionality
  const handleHumeMessage = useCallback((msg: any) => {
    if (msg.type === 'chat_metadata' && msg.chatGroupId && user?.id) {
      setChatGroupId(user.id, msg.chatGroupId)
    }
  }, [user?.id])

  if (!user) return null

  return (
    <div className="min-h-screen bg-white">
      {error ? (
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-500 text-2xl">!</span>
            </div>
            <p className="text-white">Voice service unavailable</p>
            <p className="text-red-500 text-sm mt-2">{error}</p>
          </div>
        </div>
      ) : !token ? (
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white">Loading voice assistant...</p>
          </div>
        </div>
      ) : (
        <VoiceProvider
          onError={(err) => console.error('[Hume Error]', err)}
          onClose={(e) => console.warn('[Hume Close]', e?.code, e?.reason)}
          onMessage={handleHumeMessage}
        >
          <VoiceInterface
            token={token}
            userId={user.id}
            profile={profile}
            memoryContext={memoryContext}
            graphData={graphData || undefined}
            onPreferenceAdded={fetchGraphData}
          />
        </VoiceProvider>
      )}
    </div>
  )
}

// Icons
function MicIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  )
}
