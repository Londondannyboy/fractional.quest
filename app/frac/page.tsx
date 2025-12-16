'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useUser } from '@stackframe/stack'
import { VoiceProvider, useVoice } from '@humeai/voice-react'
import Link from 'next/link'
import { UserGraph } from '@/components/UserGraph'
import { JobCard } from '@/components/JobCard'

const CONFIG_ID = 'd57ceb71-4cf5-47e9-87cd-6052445a031c'

// Store chat_group_id per user for resume functionality
function getChatGroupId(userId: string): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(`hume_chat_group_${userId}`)
}

function setChatGroupId(userId: string, chatGroupId: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(`hume_chat_group_${userId}`, chatGroupId)
}

function VoiceInterface({ token, profile, userId, previousContext }: { token: string; profile: any; userId?: string; previousContext?: string }) {
  const {
    connect,
    disconnect,
    status,
    messages,
    isPlaying,
    error: voiceError,
    isError,
    isAudioError,
    isMicrophoneError,
    readyState,
    sendToolMessage
  } = useVoice()

  // Track previous connection state to detect disconnections
  const wasConnectedRef = useRef(false)

  // State for visual displays
  const [displayedJobs, setDisplayedJobs] = useState<any[]>([])
  const [transcriptJobs, setTranscriptJobs] = useState<any[]>([])  // Method B: Vercel AI SDK
  const [pydanticJobs, setPydanticJobs] = useState<any[]>([])  // Method C: Pydantic AI (Python)
  const [confirmation, setConfirmation] = useState<any | null>(null)
  const [transcriptConfirmation, setTranscriptConfirmation] = useState<any | null>(null)
  const [pydanticConfirmation, setPydanticConfirmation] = useState<any | null>(null)  // Method C confirmations
  const [debugMode, setDebugMode] = useState(true)  // Enable debug by default
  const [debugLogs, setDebugLogs] = useState<Array<{timestamp: string; message: string; type: string}>>([])
  const [toolCalls, setToolCalls] = useState<any[]>([])
  const [methodCActivity, setMethodCActivity] = useState<Array<{timestamp: string; status: string; intent?: string; confidence?: number}>>([])
  const [methodCAnalyzing, setMethodCAnalyzing] = useState(false)

  // Helper to add debug logs
  const addDebugLog = useCallback((message: string, type: 'info' | 'success' | 'error' | 'tool' = 'info') => {
    const timestamp = new Date().toLocaleTimeString()
    setDebugLogs(prev => [...prev.slice(-30), { timestamp, message, type }])
    console.log(`[${timestamp}] ${message}`)
  }, [])

  // Handle tool calls from Hume - call API and send response back via WebSocket
  const handleToolCall = useCallback(async (toolName: string, toolCallId: string, parameters: string) => {
    try {
      console.log('[handleToolCall] Starting...', { toolName, toolCallId, parameters, hasSendToolMessage: !!sendToolMessage })
      addDebugLog(`🔄 Executing tool: ${toolName}`, 'tool')

      // Call our API endpoint
      const response = await fetch('/api/hume-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'tool_call',
          tool_call_id: toolCallId,
          name: toolName,
          parameters: parameters
        })
      })

      const result = await response.json()
      console.log('[handleToolCall] API response:', result)
      addDebugLog(`✅ Tool executed: ${toolName}`, 'success')

      // Send tool response back to Hume via WebSocket
      if (sendToolMessage && result.content) {
        console.log('[handleToolCall] Sending tool response via WebSocket...', { toolCallId, contentLength: result.content.length })
        sendToolMessage({
          type: 'tool_response',
          toolCallId: toolCallId,
          content: result.content
        })
        addDebugLog(`📤 Tool response sent to Hume`, 'success')
      } else {
        console.error('[handleToolCall] Cannot send response:', { hasSendToolMessage: !!sendToolMessage, hasContent: !!result.content })
        addDebugLog(`❌ Cannot send tool response: ${!sendToolMessage ? 'sendToolMessage missing' : 'no content'}`, 'error')
      }
    } catch (error) {
      console.error('[handleToolCall] Error:', error)
      addDebugLog(`❌ Tool error: ${error}`, 'error')

      // Send error response to Hume
      if (sendToolMessage) {
        sendToolMessage({
          type: 'tool_error',
          toolCallId: toolCallId,
          error: 'Tool execution failed',
          content: `Error executing ${toolName}: ${error}`
        })
      }
    }
  }, [sendToolMessage, addDebugLog])

  // Method B: Analyze with Vercel AI SDK + Gemini (TypeScript)
  const analyzeTranscript = useCallback(async (transcript: string) => {
    if (!transcript || transcript.length < 10) return

    addDebugLog('🔬 Method B: Vercel AI SDK analyzing...', 'tool')

    try {
      const response = await fetch('/api/transcript-analyzer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript, userId })
      })

      const result = await response.json()
      addDebugLog(`📊 Method B result: ${result.status}`, 'info')

      if (result.data?.type === 'job_results') {
        addDebugLog(`🎯 Method B found ${result.data.jobs.length} jobs!`, 'success')
        setTranscriptJobs(result.data.jobs)
      }

      if (result.data?.type === 'confirmation') {
        setTranscriptConfirmation({ ...result.data, user_id: userId })
      }
    } catch (e) {
      addDebugLog(`❌ Method B failed: ${e}`, 'error')
    }
  }, [userId, addDebugLog])

  // Method C: Analyze with Pydantic AI (Python) + CopilotKit Confirmations
  const analyzePydanticAI = useCallback(async (transcript: string) => {
    if (!transcript || transcript.length < 10) return

    const timestamp = new Date().toLocaleTimeString()
    setMethodCAnalyzing(true)
    setMethodCActivity(prev => [...prev.slice(-5), { timestamp, status: 'analyzing' }])
    addDebugLog('🐍 Method C: Pydantic AI analyzing...', 'tool')

    try {
      const response = await fetch('/api/copilot-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript, user_id: userId })
      })

      // Check if response is OK before parsing JSON
      if (!response.ok) {
        setMethodCActivity(prev => [...prev.slice(-5), { timestamp, status: 'error' }])
        setMethodCAnalyzing(false)
        addDebugLog(`⚠️ Method C: API error ${response.status}`, 'error')
        return
      }

      // Check content-type to ensure it's JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        setMethodCActivity(prev => [...prev.slice(-5), { timestamp, status: 'unavailable' }])
        setMethodCAnalyzing(false)
        addDebugLog(`⚠️ Method C: Got ${contentType || 'HTML'} instead of JSON (endpoint may not be deployed)`, 'error')
        return
      }

      const result = await response.json()
      addDebugLog(`📊 Method C result: ${result.type || 'unknown'}`, 'info')

      // Check if it's a confirmation request
      if (result.type === 'confirmation_required') {
        setMethodCActivity(prev => [...prev.slice(-5), {
          timestamp,
          status: 'confirmation_pending',
          intent: result.action,
          confidence: result.confidence || 0.95
        }])
        addDebugLog(`✋ Method C: Confirmation requested - ${result.action}`, 'success')
        setPydanticConfirmation({
          ...result,
          user_id: userId
        })
      } else {
        setMethodCActivity(prev => [...prev.slice(-5), { timestamp, status: 'no_action_needed' }])
      }

      // Check if it's job results
      if (result.data?.type === 'job_results') {
        addDebugLog(`🎯 Method C found ${result.data.jobs.length} jobs!`, 'success')
        setPydanticJobs(result.data.jobs)
      }

      setMethodCAnalyzing(false)
    } catch (e: any) {
      // Graceful failure - Methods A & B still work
      setMethodCActivity(prev => [...prev.slice(-5), { timestamp, status: 'error' }])
      setMethodCAnalyzing(false)
      addDebugLog(`⚠️ Method C unavailable (${e.message || 'endpoint error'})`, 'error')
    }
  }, [userId, addDebugLog])

  // Debug: Log all status changes with timestamp
  useEffect(() => {
    const time = new Date().toLocaleTimeString()
    console.log(`=== HUME STATUS [${time}] ===`, status.value, `readyState: ${readyState}`)

    if (status.value === 'disconnected') {
      console.warn('⚠️ DISCONNECTED - Check if this was unexpected')
    }
    if (status.value === 'error') {
      console.error('❌ HUME ERROR STATE')
    }

    // Track connection state for save-on-disconnect
    if (status.value === 'connected') {
      wasConnectedRef.current = true
    }
  }, [status.value, readyState])

  // Save conversation to Supermemory when session ends
  useEffect(() => {
    // Only save if we were connected and now disconnected
    if (status.value === 'disconnected' && wasConnectedRef.current && userId && messages.length > 0) {
      wasConnectedRef.current = false

      // Build transcript from messages
      const transcript = messages
        .filter((m: any) => m.type === 'user_message' || m.type === 'assistant_message')
        .map((m: any) => {
          const role = m.type === 'user_message' ? 'User' : 'Frac'
          return `${role}: ${m.message?.content || ''}`
        })
        .join('\n')

      if (transcript.length > 50) {
        console.log('[Supermemory] Saving conversation transcript, length:', transcript.length)

        fetch('/api/supermemory-save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, transcript })
        })
          .then(r => r.json())
          .then(data => {
            if (data.saved) {
              console.log('[Supermemory] Conversation saved successfully')
            } else {
              console.log('[Supermemory] Conversation not saved:', data.reason || data.error)
            }
          })
          .catch(err => console.error('[Supermemory] Save error:', err))
      }
    }
  }, [status.value, messages, userId])

  // Log error states
  useEffect(() => {
    if (isError || isAudioError || isMicrophoneError || voiceError) {
      console.error('=== HUME ERROR ===', JSON.stringify({
        isError,
        isAudioError,
        isMicrophoneError,
        voiceErrorMessage: voiceError?.message || String(voiceError),
        voiceErrorType: (voiceError as any)?.type
      }, null, 2))
    }
  }, [isError, isAudioError, isMicrophoneError, voiceError])

  useEffect(() => {
    console.log('=== HUME MESSAGES ===', messages.length, 'total')
    messages.slice(-3).forEach((m: any, i: number) => {
      console.log(`  [${m.type}]`, m.message?.content?.substring(0, 50) || m)
    })
  }, [messages])

  useEffect(() => {
    console.log('=== HUME isPlaying ===', isPlaying)
  }, [isPlaying])

  // Parse messages for structured data (job results, confirmations)
  useEffect(() => {
    if (messages.length === 0) return

    const latestMessage = messages[messages.length - 1]

    // Log all message types for debugging
    addDebugLog(`Message type: ${latestMessage.type}`, 'info')

    // Handle tool calls - call API and send response back via WebSocket
    if (latestMessage.type === 'tool_call') {
      const toolName = (latestMessage as any).tool_name || (latestMessage as any).name || 'unknown'
      const toolCallId = (latestMessage as any).tool_call_id || (latestMessage as any).toolCallId
      const parameters = (latestMessage as any).parameters

      addDebugLog(`🔧 Tool called: ${toolName}`, 'tool')
      setToolCalls(prev => [...prev.slice(-10), {
        name: toolName,
        params: parameters,
        time: new Date().toLocaleTimeString()
      }])

      // Call our API endpoint and send response back (don't await - let it run async)
      handleToolCall(toolName, toolCallId, parameters).catch(err => {
        addDebugLog(`❌ Tool call failed: ${err}`, 'error')
      })
    }

    // Check for tool responses (these contain our structured data)
    if (latestMessage.type === 'tool_response') {
      const toolName = (latestMessage as any).tool_name || 'unknown'
      addDebugLog(`📥 Tool response from: ${toolName}`, 'tool')

      if ((latestMessage as any).content) {
        try {
          // Try to parse as JSON
          const parsed = JSON.parse((latestMessage as any).content)
          addDebugLog(`✅ Parsed JSON response from ${toolName}`, 'success')

          // Check if it's job results
          if (parsed.data?.type === 'job_results') {
            addDebugLog(`🎯 Found ${parsed.data.jobs.length} job results!`, 'success')
            setDisplayedJobs(parsed.data.jobs)
          }

          // Check if it's a confirmation request
          if (parsed.data?.type === 'confirmation') {
            addDebugLog(`✋ Confirmation requested`, 'success')
            setConfirmation(parsed.data)
          }
        } catch (e) {
          // Not JSON, just text
          const content = (latestMessage as any).content
          addDebugLog(`⚠️ Tool response is text, not JSON: ${content?.substring(0, 50)}`, 'info')
        }
      }
    }

    // NEW: Trigger transcript analysis after user messages
    if (latestMessage.type === 'user_message' || latestMessage.type === 'assistant_message') {
      // Build combinedMessages (same logic used for display)
      const combinedMessages: any[] = []
      let currentAssistant = ''

      for (const m of messages) {
        if (m.type === 'user_message' && m.message?.content) {
          if (currentAssistant) {
            combinedMessages.push({ type: 'assistant_message', content: currentAssistant.trim() })
            currentAssistant = ''
          }
          combinedMessages.push({ type: 'user_message', content: m.message.content })
        } else if (m.type === 'assistant_message' && m.message?.content) {
          currentAssistant += m.message.content + ' '
        }
      }
      if (currentAssistant) {
        combinedMessages.push({ type: 'assistant_message', content: currentAssistant.trim() })
      }

      // Build transcript from USER messages only (for intent extraction)
      // Don't include assistant responses - they confuse the AI
      const transcript = combinedMessages
        .filter((m: any) => m.type === 'user_message')
        .map((m: any) => m.content)
        .join(' ')

      addDebugLog(`📝 Transcript (${transcript.length} chars): "${transcript.substring(0, 80)}..."`, 'info')

      // Analyze transcript with BOTH Method B and Method C in parallel
      if (transcript.length > 20) {
        analyzeTranscript(transcript)  // Method B: Vercel AI SDK
        analyzePydanticAI(transcript)   // Method C: Pydantic AI (Python)
      } else {
        addDebugLog(`⚠️ Transcript too short: only ${transcript.length} chars`, 'error')
      }
    }
  }, [messages, addDebugLog, analyzeTranscript, analyzePydanticAI, handleToolCall])

  const handleConnect = useCallback(async () => {
    // Pass user_id and profile data to Hume
    // user_id is critical for the Hume tool to query our database
    const vars = {
      user_id: userId || '',  // CRITICAL: Hume tools use this to identify the user
      first_name: profile?.first_name || '',
      last_name: profile?.last_name || '',
      is_authenticated: userId ? 'true' : 'false',
      current_country: profile?.current_country || 'United Kingdom',
      interests: Array.isArray(profile?.interests) ? profile.interests.join(', ') : (profile?.interests || ''),
      timeline: profile?.timeline || '',
      budget: profile?.budget_monthly ? `£${profile.budget_monthly}/day` : (profile?.budget || ''),
      email: profile?.email || '',
      previous_context: previousContext || ''  // From Supermemory
    }

    // Check for existing chat to resume
    const existingChatGroupId = userId ? getChatGroupId(userId) : null

    console.log('[Hume] Connecting with user_id and profile:', JSON.stringify(vars, null, 2))
    if (existingChatGroupId) {
      console.log('[Hume] Resuming chat group:', existingChatGroupId)
    }

    try {
      await connect({
        auth: { type: 'accessToken', value: token },
        configId: CONFIG_ID,
        resumedChatGroupId: existingChatGroupId || undefined,  // Resume previous chat if available
        sessionSettings: {
          type: 'session_settings' as const,
          variables: vars
        }
      })
    } catch (e: any) {
      console.error('Connection error:', e)
    }
  }, [connect, token, profile, userId, previousContext])

  const isConnected = status.value === 'connected'
  const isConnecting = status.value === 'connecting'

  // Combine message segments into complete messages
  const combinedMessages: { type: string; content: string }[] = []
  let currentAssistant = ''

  messages.forEach((m: any) => {
    if (m.type === 'user_message' && m.message?.content) {
      // If we have accumulated assistant text, save it first
      if (currentAssistant) {
        combinedMessages.push({ type: 'assistant_message', content: currentAssistant })
        currentAssistant = ''
      }
      combinedMessages.push({ type: 'user_message', content: m.message.content })
    } else if (m.type === 'assistant_message' && m.message?.content) {
      // Accumulate assistant message segments
      currentAssistant += m.message.content + ' '
    }
  })

  // Don't forget the last assistant message
  if (currentAssistant) {
    combinedMessages.push({ type: 'assistant_message', content: currentAssistant.trim() })
  }

  const recentMessages = combinedMessages.slice(-4)

  return (
    <div className="flex flex-col items-center">
      {/* Voice Button with Status Indicator */}
      <div className="relative mb-8">
        {/* Outer status ring */}
        <div className={`absolute inset-0 w-32 h-32 rounded-full border-4 transition-all duration-300 ${
          isConnected && isPlaying
            ? 'border-blue-400 animate-pulse shadow-lg shadow-blue-400/50'
            : isConnected
            ? 'border-blue-500 shadow-lg shadow-blue-500/30'
            : isConnecting
            ? 'border-yellow-400 animate-spin'
            : 'border-purple-400 opacity-50'
        }`} style={{ animationDuration: isConnecting ? '2s' : undefined }} />

        {/* Pulse rings when speaking */}
        {isConnected && isPlaying && (
          <>
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-blue-400 animate-ping opacity-30" />
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-blue-300 animate-pulse opacity-40" />
          </>
        )}

        {/* Subtle pulse when listening (connected but not speaking) */}
        {isConnected && !isPlaying && (
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-blue-400 animate-pulse opacity-20" />
        )}

        <button
          onClick={isConnected ? disconnect : handleConnect}
          disabled={isConnecting}
          className={`relative w-32 h-32 rounded-full text-white font-bold text-lg shadow-2xl transition-all duration-300 ${
            isConnected && isPlaying
              ? 'bg-gradient-to-br from-blue-400 to-blue-950/200 scale-110'
              : isConnected
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
              : isConnecting
              ? 'bg-gradient-to-br from-yellow-400 to-orange-400 cursor-wait'
              : 'bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105'
          }`}
        >
          {isConnected ? (
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
              <span className="text-sm">Stop</span>
            </div>
          ) : isConnecting ? (
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mb-1" />
              <span className="text-sm">Connecting</span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <svg className="w-10 h-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-sm">Speak</span>
            </div>
          )}
        </button>
      </div>

      {/* Status text */}
      <p className="text-lg text-gray-600 mb-8">
        {isConnected
          ? isPlaying
            ? '🔊 Assistant is speaking...'
            : '🎤 Listening... speak naturally'
          : isConnecting
          ? 'Connecting to voice...'
          : 'Tap to start a conversation'}
      </p>

      {/* Debug info */}
      {isConnected && (
        <div className="text-xs text-gray-400 mb-4 font-mono">
          Status: {status.value} | Playing: {isPlaying ? 'YES' : 'NO'} | Messages: {messages.length} | WS: {readyState}
        </div>
      )}

      {/* Error display */}
      {(isError || isAudioError || isMicrophoneError) && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-sm">
          <p className="font-medium text-red-800 mb-1">Connection Issue:</p>
          {isError && <p className="text-red-600">• General error</p>}
          {isAudioError && <p className="text-red-600">• Audio playback error</p>}
          {isMicrophoneError && <p className="text-red-600">• Microphone error</p>}
          {voiceError && <p className="text-red-600">• {String(voiceError)}</p>}
        </div>
      )}

      {/* Conversation */}
      {recentMessages.length > 0 && (
        <div className="w-full max-w-lg space-y-3 mb-8">
          {recentMessages.map((m, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl ${
                m.type === 'user_message'
                  ? 'bg-purple-100 text-purple-900 ml-8'
                  : 'bg-gray-100 text-gray-800 mr-8'
              }`}
            >
              <p className="text-sm font-medium mb-1 opacity-60">
                {m.type === 'user_message' ? 'You' : 'Frac'}
              </p>
              <p>{m.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* Method C Activity Panel - Live Feedback */}
      {isConnected && (
        <div className="w-full max-w-lg mb-8">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-4 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-3 h-3 rounded-full ${methodCAnalyzing ? 'bg-yellow-500 animate-pulse' : 'bg-gray-300'}`} />
              <h3 className="font-bold text-gray-900">Method C: Human-in-the-Loop</h3>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                Pydantic AI
              </span>
            </div>

            {/* Activity Feed */}
            <div className="space-y-2 text-sm">
              {methodCActivity.length === 0 ? (
                <div className="text-gray-500 italic">Waiting for conversation...</div>
              ) : (
                methodCActivity.slice(-3).map((activity, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 p-2 rounded-lg ${
                      activity.status === 'confirmation_pending'
                        ? 'bg-blue-100 text-blue-900 font-medium'
                        : activity.status === 'analyzing'
                        ? 'bg-yellow-100 text-yellow-900'
                        : activity.status === 'error'
                        ? 'bg-red-100 text-red-900'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <span className="text-xs text-gray-500">{activity.timestamp}</span>
                    <span>
                      {activity.status === 'analyzing' && '🔄 Analyzing transcript...'}
                      {activity.status === 'confirmation_pending' && `✋ Confirmation: ${activity.intent} (${Math.round((activity.confidence || 0) * 100)}%)`}
                      {activity.status === 'no_action_needed' && '✓ No confirmation needed'}
                      {activity.status === 'error' && '⚠️ Endpoint error'}
                      {activity.status === 'unavailable' && '⚠️ Service unavailable'}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Inline Confirmation Card */}
            {pydanticConfirmation && (
              <div className="mt-3 bg-white border-2 border-yellow-400 rounded-xl p-4 shadow-lg animate-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-bold text-gray-900">{pydanticConfirmation.message}</h4>
                </div>

                {/* Job Details */}
                {pydanticConfirmation.action === 'save_job' && pydanticConfirmation.data && (
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 mb-3 space-y-1 text-sm">
                    {pydanticConfirmation.data.title && (
                      <div><span className="text-gray-500">Position:</span> <span className="font-semibold text-gray-900">{pydanticConfirmation.data.title}</span></div>
                    )}
                    {pydanticConfirmation.data.company && (
                      <div><span className="text-gray-500">Company:</span> <span className="font-semibold text-gray-900">{pydanticConfirmation.data.company}</span></div>
                    )}
                  </div>
                )}

                {/* Preference Details */}
                {pydanticConfirmation.action === 'update_preference' && pydanticConfirmation.data && (
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 mb-3">
                    <div className="text-sm text-gray-500 mb-2">Updating {pydanticConfirmation.data.preference_type?.replace('_', ' ')}</div>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(pydanticConfirmation.data.values) ? (
                        pydanticConfirmation.data.values.map((value: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                            {value}
                          </span>
                        ))
                      ) : (
                        <span className="px-2 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                          {pydanticConfirmation.data.values}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/confirm-action', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            action: pydanticConfirmation.action,
                            approved: true,
                            data: pydanticConfirmation.data,
                            user_id: pydanticConfirmation.user_id || 'anonymous'
                          })
                        })
                        const result = await response.json()
                        if (result.success) {
                          addDebugLog('✅ User confirmed action', 'success')
                          setMethodCActivity(prev => [...prev.slice(-5), {
                            timestamp: new Date().toLocaleTimeString(),
                            status: 'confirmed',
                            intent: pydanticConfirmation.action
                          }])
                        }
                      } catch (err) {
                        addDebugLog('❌ Confirmation failed', 'error')
                      }
                      setPydanticConfirmation(null)
                    }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    ✓ Confirm
                  </button>
                  <button
                    onClick={() => {
                      addDebugLog('❌ User rejected action', 'info')
                      setMethodCActivity(prev => [...prev.slice(-5), {
                        timestamp: new Date().toLocaleTimeString(),
                        status: 'rejected',
                        intent: pydanticConfirmation.action
                      }])
                      setPydanticConfirmation(null)
                    }}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    ✗ Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Visual Job Display - Hume Tools */}
      {displayedJobs.length > 0 && (
        <div className="w-full max-w-4xl mt-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">
              Jobs Found - Hume Tools ({displayedJobs.length})
            </h3>
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
              Method A
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedJobs.map((job) => (
              <JobCard
                key={job.id}
                jobId={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                isRemote={job.isRemote}
                dayRate={job.dayRate}
                currency={job.currency}
                onClick={() => window.location.href = `/fractional-job/${job.slug}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Visual Job Display - Transcript Analysis (Pydantic AI Layer) */}
      {transcriptJobs.length > 0 && (
        <div className="w-full max-w-4xl mt-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">
              Jobs Found - Transcript Analysis ({transcriptJobs.length})
            </h3>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
              Method B
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4 italic">
            🔬 Detected from conversation using Pydantic AI layer + direct Neon DB query
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transcriptJobs.map((job) => (
              <JobCard
                key={job.id}
                jobId={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                isRemote={job.isRemote}
                dayRate={job.dayRate}
                currency={job.currency}
                onClick={() => window.location.href = `/fractional-job/${job.slug}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Visual Job Display - Pydantic AI (Python) */}
      {pydanticJobs.length > 0 && (
        <div className="w-full max-w-4xl mt-8 animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">
              Jobs Found - Pydantic AI ({pydanticJobs.length})
            </h3>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
              Method C
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4 italic">
            🐍 Python Pydantic AI framework with structured outputs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pydanticJobs.map((job) => (
              <JobCard
                key={job.id}
                jobId={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                isRemote={job.isRemote}
                dayRate={job.dayRate}
                currency={job.currency}
                onClick={() => window.location.href = `/fractional-job/${job.slug}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Confirmation Modal - Hume Tools (Human-in-the-loop) */}
      {confirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl animate-scale-in">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Confirm Your Preference</h3>
                <p className="text-gray-600">{confirmation.details}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Method A: Hume Tools</span>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <div className="text-sm text-purple-900">
                <span className="font-medium">Preference Type:</span> {confirmation.preference_type}
              </div>
              <div className="text-sm text-purple-900 mt-1">
                <span className="font-medium">Values:</span> {Array.isArray(confirmation.values) ? confirmation.values.join(', ') : confirmation.values}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                onClick={async () => {
                  // Call API to save preference
                  if (confirmation.user_id && confirmation.preference_type && confirmation.values) {
                    try {
                      // Save to database via save_user_preference tool
                      await fetch('/api/hume-tool', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          type: 'tool_call',
                          name: 'save_user_preference',
                          parameters: {
                            user_id: confirmation.user_id,
                            field: 'interests',  // Map preference_type to field
                            value: Array.isArray(confirmation.values) ? confirmation.values.join(', ') : confirmation.values
                          }
                        })
                      })
                      console.log('[Confirmation] Preference saved to database')
                    } catch (e) {
                      console.error('[Confirmation] Failed to save:', e)
                    }
                  }
                  setConfirmation(null)
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Yes, Confirm
              </button>
              <button
                className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                onClick={() => setConfirmation(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Debug Panel */}
      {debugMode && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 max-h-64 overflow-y-auto z-40 font-mono text-xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <h3 className="font-bold text-sm">🐛 DEBUG MODE</h3>
              <div className={`px-2 py-1 rounded text-xs font-bold ${isConnected ? 'bg-blue-600' : 'bg-red-600'}`}>
                {status.value}
              </div>
              <div className="text-purple-400">Method A (Hume): {displayedJobs.length}</div>
              <div className="text-blue-400">Method B (Vercel AI): {transcriptJobs.length}</div>
              <div className="text-yellow-400">Method C (Pydantic AI): {pydanticJobs.length}</div>
              <div className="text-gray-400">Messages: {messages.length}</div>
            </div>
            <button
              onClick={() => setDebugMode(false)}
              className="px-2 py-1 bg-white/10 rounded hover:bg-white/20"
            >
              Hide
            </button>
          </div>

          {/* Tool Calls */}
          {toolCalls.length > 0 && (
            <div className="mb-2">
              <div className="text-yellow-400 font-bold mb-1">Recent Tool Calls:</div>
              {toolCalls.map((call, i) => (
                <div key={i} className="text-blue-400 ml-2">
                  [{call.time}] {call.name} {call.params ? `(${JSON.stringify(call.params).substring(0, 50)})` : ''}
                </div>
              ))}
            </div>
          )}

          {/* Debug Logs */}
          <div>
            <div className="text-blue-400 font-bold mb-1">Recent Logs:</div>
            {debugLogs.slice(-15).map((log: any, i) => (
              <div
                key={i}
                className={`ml-2 ${
                  log.type === 'error' ? 'text-red-400' :
                  log.type === 'success' ? 'text-blue-400' :
                  log.type === 'tool' ? 'text-yellow-400' :
                  'text-gray-300'
                }`}
              >
                [{log.timestamp}] {log.message}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Debug Toggle (when hidden) */}
      {!debugMode && (
        <button
          onClick={() => setDebugMode(true)}
          className="fixed bottom-4 left-4 px-3 py-2 bg-black/80 text-white rounded-lg text-xs font-mono hover:bg-black z-40"
        >
          🐛 Show Debug
        </button>
      )}
    </div>
  )
}

export default function VoicePage() {
  const user = useUser()
  const [token, setToken] = useState<string | null>(null)
  const [profile, setProfile] = useState<any>(null)
  const [previousContext, setPreviousContext] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  // Fetch token
  useEffect(() => {
    fetch('/api/hume-token')
      .then(r => r.json())
      .then(d => d.accessToken ? setToken(d.accessToken) : setError('No token'))
      .catch(e => setError(e.message))
  }, [])

  // Fetch profile if logged in
  useEffect(() => {
    if (!user) return
    fetch('/api/user-profile')
      .then(r => r.ok ? r.json() : null)
      .then(setProfile)
      .catch(console.error)
  }, [user])

  // Fetch Supermemory context for long-term memory
  useEffect(() => {
    if (!user?.id) return
    fetch('/api/supermemory-context', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, query: 'career preferences and background' })
    })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.context) {
          console.log('[Supermemory] Got previous context:', data.context.substring(0, 100))
          setPreviousContext(data.context)
        }
      })
      .catch(console.error)
  }, [user?.id])

  // Handle chat_group_id from Hume for resume functionality
  const handleHumeMessage = useCallback((msg: any) => {
    // Log specific message types that might indicate issues
    if (msg.type === 'error' || msg.type === 'chat_metadata') {
      console.log('=== HUME onMessage ===', msg.type, JSON.stringify(msg, null, 2))
    }
    // Save chat_group_id for resume functionality
    if (msg.type === 'chat_metadata' && msg.chatGroupId && user?.id) {
      console.log('[Hume] Saving chat_group_id for resume:', msg.chatGroupId)
      setChatGroupId(user.id, msg.chatGroupId)
    }
  }, [user?.id])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Meet Frac
              </h1>
              <p className="text-gray-600 mt-1">
                {profile?.first_name
                  ? `Welcome back, ${profile.first_name}! Your AI guide to fractional executive roles`
                  : 'Your AI guide to fractional executive roles'}
              </p>
            </div>
            <Link
              href="/profile"
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors"
            >
              View Profile →
            </Link>
          </div>
        </div>
      </div>

      {/* Voice Interface */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          {error ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-red-600">{error}</p>
            </div>
          ) : !token ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4" />
              <p className="text-gray-600">Initializing voice...</p>
            </div>
          ) : (
            <VoiceProvider
              onClose={(event) => {
                console.warn('=== HUME onClose ===', JSON.stringify({
                  code: event?.code,
                  reason: event?.reason,
                  wasClean: event?.wasClean
                }, null, 2))
              }}
              onError={(error) => {
                console.error('=== HUME onError ===', JSON.stringify({
                  message: error?.message || String(error),
                  type: (error as any)?.type
                }, null, 2))
              }}
              onMessage={handleHumeMessage}
            >
              <VoiceInterface token={token} profile={profile} userId={user?.id} previousContext={previousContext} />
            </VoiceProvider>
          )}
        </div>

        {/* ZEP Knowledge Graph */}
        {user && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Your Knowledge Graph</h2>
                <p className="text-sm text-gray-600">Skills, experience, and connections from ZEP</p>
              </div>
            </div>
            <UserGraph userId={user.id} />
          </div>
        )}

        {/* Not logged in state */}
        {!user && (
          <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sign in to see your graph</h3>
            <p className="text-gray-600 mb-4">
              Your conversations build a personalized knowledge graph of your skills and preferences.
            </p>
            <Link
              href="/handler/sign-in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-colors"
            >
              Sign In
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
