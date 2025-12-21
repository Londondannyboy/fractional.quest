'use client'

import { useState, useEffect, useCallback } from 'react'
import { useUser } from '@stackframe/stack'
import { VoiceProvider, useVoice } from '@humeai/voice-react'
import ClusteredForceGraph from '@/components/ClusteredForceGraph'
import VoiceConfirmationModal from '@/components/VoiceConfirmationModal'
import { markConfirmationComplete, loadPendingConfirmations, validateAndSaveToNeon } from '@/lib/voice-to-graph-sync'
import type { ConfirmationRequest } from '@/lib/voice-to-graph-sync'
import type { GraphNode } from '@/lib/zep-client'

// ============================================================================
// HUME CONFIG
// ============================================================================

const HUME_CONFIG_ID = '5da7f806-2f21-4450-b4db-ab7509b3c38a'

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function LiveRepoBuilder() {
  const user = useUser({ or: 'redirect' })
  const [accessToken, setAccessToken] = useState<string | null>(null)

  // Fetch Hume access token
  useEffect(() => {
    fetch('/api/hume-token')
      .then(r => r.json())
      .then(data => setAccessToken(data.token))
      .catch(err => console.error('Failed to get Hume token:', err))
  }, [])

  if (!accessToken) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-purple-300 animate-pulse">Loading voice interface...</div>
      </div>
    )
  }

  return (
    <VoiceProvider>
      <LiveRepoInterface
        token={accessToken}
        userId={user.id}
        userName={user.displayName || user.primaryEmail || 'User'}
      />
    </VoiceProvider>
  )
}

// ============================================================================
// VOICE INTERFACE
// ============================================================================

interface LiveRepoInterfaceProps {
  token: string
  userId: string
  userName: string
}

function LiveRepoInterface({ token, userId, userName }: LiveRepoInterfaceProps) {
  const { connect, disconnect, status, messages } = useVoice()
  const [userType, setUserType] = useState<'candidate' | 'client' | null>(null)
  const [graphData, setGraphData] = useState<{ nodes: GraphNode[], edges: any[] }>({ nodes: [], edges: [] })
  const [confirmations, setConfirmations] = useState<ConfirmationRequest[]>([])
  const [transcript, setTranscript] = useState<string[]>([])

  // ========================================================================
  // CONNECT TO HUME
  // ========================================================================

  useEffect(() => {
    if (!token) return

    connect({
      auth: { type: 'accessToken', value: token },
      configId: HUME_CONFIG_ID,
      sessionSettings: {
        type: 'session_settings' as const,
        variables: {
          user_id: userId,
          first_name: userName.split(' ')[0] || userName,
          is_authenticated: 'true'
        }
      }
    })
      .then(() => console.log('[LiveRepo] Connected to Hume'))
      .catch(err => console.error('[LiveRepo] Hume connection failed:', err))

    return () => {
      disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userId, userName])

  // ========================================================================
  // DETECT USER TYPE (candidate vs client)
  // ========================================================================

  useEffect(() => {
    // Auto-detect from first conversation
    // For now, default to candidate (can be changed via UI toggle)
    if (!userType) {
      setUserType('candidate')
    }
  }, [userType])

  // ========================================================================
  // LOAD PENDING CONFIRMATIONS ON MOUNT
  // ========================================================================

  useEffect(() => {
    loadPendingConfirmations(userId).then(pending => {
      if (pending.length > 0) {
        console.log(`[LiveRepo] Loaded ${pending.length} pending confirmations`)
        setConfirmations(pending)
      }
    })
  }, [userId])

  // ========================================================================
  // PROCESS VOICE MESSAGES
  // ========================================================================

  useEffect(() => {
    messages.forEach((message: any) => {
      // Capture user transcripts
      if (message.type === 'user_message' && message.message?.content) {
        const text = message.message.content
        setTranscript(prev => [...prev, text])

        // Process transcript through our pipeline
        processTranscript(text)
      }

      // Handle tool calls (alternative approach)
      if (message.type === 'tool_call') {
        handleToolCall(message.toolName, message.parameters)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages])

  // ========================================================================
  // PROCESS TRANSCRIPT
  // ========================================================================

  const processTranscript = useCallback(async (text: string) => {
    if (!userType || text.length < 5) return

    try {
      const response = await fetch('/api/voice-to-graph', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          transcript: text,
          userType,
          context: transcript.slice(-5) // Last 5 messages for context
        })
      })

      if (!response.ok) {
        throw new Error('Voice-to-graph API failed')
      }

      const result = await response.json()

      // Optimistic update: Add nodes immediately
      if (result.immediateNodes?.length > 0) {
        result.immediateNodes.forEach((node: GraphNode) => {
          addNodeToGraph(node)
        })
      }

      // Show confirmation modal for pending items
      if (result.confirmationRequests?.length > 0) {
        setConfirmations(prev => [...prev, ...result.confirmationRequests])
      }

      console.log('[LiveRepo] Processed transcript:', result.stats)
    } catch (error) {
      console.error('[LiveRepo] Failed to process transcript:', error)
    }
  }, [userId, userType, transcript])

  // ========================================================================
  // HANDLE TOOL CALLS (alternative to transcript processing)
  // ========================================================================

  const handleToolCall = useCallback(async (toolName: string, params: any) => {
    console.log('[LiveRepo] Tool call:', toolName, params)

    // Map tool calls to graph updates
    switch (toolName) {
      case 'add_skill':
        addNodeToGraph({
          id: `skill-${Date.now()}`,
          type: 'skill',
          label: params.skill,
          data: { cluster: 'skills', metadata: { years: params.years } }
        })
        break

      case 'add_company':
        addNodeToGraph({
          id: `company-${Date.now()}`,
          type: 'company',
          label: params.company,
          data: { cluster: 'experience', metadata: { role: params.role } }
        })
        break

      case 'add_role_preference':
        addNodeToGraph({
          id: `role-${Date.now()}`,
          type: 'job',
          label: params.role,
          data: { cluster: 'career_interests', metadata: { seniority: params.seniority } }
        })
        break

      default:
        console.log('[LiveRepo] Unknown tool call:', toolName)
    }
  }, [])

  // ========================================================================
  // ADD NODE TO GRAPH (optimistic update)
  // ========================================================================

  const addNodeToGraph = useCallback((node: GraphNode) => {
    // Use the global function exposed by ClusteredForceGraph
    if (typeof (window as any).addNodeToGraph === 'function') {
      (window as any).addNodeToGraph({
        id: node.id,
        name: node.label,
        val: 20,
        color: getColorForCluster(String(node.data?.cluster || 'preferences')),
        type: node.type,
        cluster: node.data?.cluster || 'preferences',
        pending: !node.data?.validated
      })
    }
  }, [])

  // ========================================================================
  // CONFIRMATION HANDLERS
  // ========================================================================

  const handleConfirm = async (requestId: string, value: string) => {
    const request = confirmations.find(r => r.id === requestId)
    if (!request) return

    // Mark as confirmed in database
    await markConfirmationComplete(requestId, 'confirmed')

    // Save validated data to Neon
    await validateAndSaveToNeon(
      userId,
      {
        id: request.entity_id,
        cluster: request.cluster,
        entity_type: 'skill', // TODO: Derive from cluster
        value: value,
        confidence: request.confidence,
        raw_text: value,
        metadata: {},
        requires_hard_validation: false,
        requires_soft_validation: false
      },
      'user'
    )

    // Add to graph with validated flag
    addNodeToGraph({
      id: request.entity_id,
      type: 'skill',
      label: value,
      data: {
        cluster: request.cluster,
        validated: true
      }
    })

    // Remove from confirmations list
    setConfirmations(prev => prev.filter(r => r.id !== requestId))
  }

  const handleReject = async (requestId: string) => {
    // Mark as rejected in database
    await markConfirmationComplete(requestId, 'rejected')

    // Remove from confirmations list
    setConfirmations(prev => prev.filter(r => r.id !== requestId))
  }

  const handleEdit = async (requestId: string, newValue: string) => {
    // Same as confirm but with edited value
    await handleConfirm(requestId, newValue)
  }

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className="h-screen w-screen bg-black relative overflow-hidden">
      {/* Full Screen Force Graph */}
      {userType && (
        <ClusteredForceGraph
          userId={userId}
          userType={userType}
          initialData={graphData}
          realtimeUpdates={true}
          className="w-full h-full"
        />
      )}

      {/* Impressive Bottom-Left Overlay */}
      <div className="absolute bottom-8 left-8 z-50">
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
          <div className="space-y-3">
            <h2 className="text-4xl font-black text-white tracking-tight">
              Scale Your Revenue
            </h2>
            <p className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              With AI
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-300 uppercase tracking-wider">Live Demo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Top-Right Controls */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        {/* Voice Button */}
        <button
          onClick={() => {
            if (status.value === 'connected') {
              disconnect()
            } else {
              connect({
                auth: { type: 'accessToken', value: token },
                configId: HUME_CONFIG_ID,
                sessionSettings: {
                  type: 'session_settings' as const,
                  variables: {
                    user_id: userId,
                    first_name: userName.split(' ')[0] || userName,
                    is_authenticated: 'true'
                  }
                }
              })
            }
          }}
          className={`
            relative w-14 h-14 rounded-full font-bold transition-all
            ${status.value === 'connected'
              ? 'bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 animate-pulse'
              : 'bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:scale-110'
            }
            shadow-2xl
          `}
        >
          <span className="text-2xl">
            {status.value === 'connected' ? '⏹' : '🎤'}
          </span>
        </button>

        {/* User Type Toggle */}
        <div className="flex gap-2 bg-black/40 backdrop-blur-lg rounded-lg p-1 border border-white/10">
          <button
            onClick={() => setUserType('candidate')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
              userType === 'candidate'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Candidate
          </button>
          <button
            onClick={() => setUserType('client')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
              userType === 'client'
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Client
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmations.length > 0 && (
        <VoiceConfirmationModal
          requests={confirmations}
          onConfirm={handleConfirm}
          onReject={handleReject}
          onEdit={handleEdit}
        />
      )}

      {/* Transcript Log (for debugging) */}
      {process.env.NODE_ENV === 'development' && transcript.length > 0 && (
        <div className="absolute bottom-4 left-4 max-w-md bg-black/90 rounded-lg p-4 border border-purple-500/30 max-h-48 overflow-y-auto">
          <div className="text-xs text-purple-300 font-semibold mb-2">Recent Transcripts:</div>
          <div className="space-y-1">
            {transcript.slice(-5).map((text, i) => (
              <div key={i} className="text-xs text-gray-300">
                • {text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ============================================================================
// HELPERS
// ============================================================================

function getColorForCluster(cluster: string): string {
  const colors: Record<string, string> = {
    skills: '#3B82F6',
    experience: '#10B981',
    career_interests: '#EC4899',
    preferences: '#F97316',
    requirements: '#EC4899',
    candidate_matches: '#10B981',
    culture_fit: '#F59E0B'
  }
  return colors[cluster] || '#666'
}
