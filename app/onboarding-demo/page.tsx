'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { VoiceProvider, useVoice } from '@humeai/voice-react'
import Link from 'next/link'
import { RepoLiveBuilder, type RepoData } from '@/components/RepoLiveBuilder'

// DEMO: No auth required, uses demo user ID
const CONFIG_ID = '5da7f806-2f21-4450-b4db-ab7509b3c38a'
const DEMO_USER_ID = 'demo-user-' + Date.now()
const DEMO_USER_NAME = 'Demo User'

function VoiceInterface() {
  const { connect, disconnect, status, messages } = useVoice()
  const [token, setToken] = useState<string | null>(null)
  const [repoData, setRepoData] = useState<RepoData>({
    userType: 'unknown',
    candidate: { skills: [], companies: [], roles: [] },
    client: { rolesNeeded: [], requirements: [] }
  })
  const [showRepoGraph, setShowRepoGraph] = useState(false)

  // Fetch token
  useEffect(() => {
    fetch('/api/hume-token')
      .then(res => res.json())
      .then(data => {
        console.log('[DEMO] Token received:', !!data.token)
        setToken(data.token || data.accessToken)
      })
      .catch(err => console.error('[DEMO] Token fetch failed:', err))
  }, [])

  // Connect to Hume
  useEffect(() => {
    if (!token) return

    console.log('[DEMO] Connecting to Hume with demo user:', DEMO_USER_ID)

    connect({
      auth: { type: 'accessToken', value: token },
      configId: CONFIG_ID,
      sessionSettings: {
        type: 'session_settings' as const,
        variables: {
          user_id: DEMO_USER_ID,
          first_name: 'Demo',
          last_name: 'User',
          is_authenticated: 'true',
          current_country: 'United Kingdom',
          interests: '',
          timeline: '',
          budget: '',
          email: 'demo@example.com',
          previous_context: ''
        }
      }
    })
      .then(() => console.log('[DEMO] Connected!'))
      .catch(err => console.error('[DEMO] Connection failed:', err))

    return () => {
      disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]) // Only depend on token to prevent reconnection loop

  // Process tools
  useEffect(() => {
    messages.forEach((message: any) => {
      if (message.type === 'tool_call') {
        const toolName = message.name
        const toolInput = message.parameters

        console.log('[DEMO] Tool called:', toolName, toolInput)

        switch (toolName) {
          case 'set_user_type':
            console.log('[DEMO] Setting user type:', toolInput.user_type)
            setRepoData(prev => ({ ...prev, userType: toolInput.user_type }))
            break

          case 'add_skill':
            console.log('[DEMO] Adding skill:', toolInput.skill_name)
            setRepoData(prev => {
              const skills = prev.candidate?.skills || []
              if (skills.some(s => s.name.toLowerCase() === toolInput.skill_name.toLowerCase())) {
                return prev
              }
              const newSkills = [...skills, { name: toolInput.skill_name, confidence: toolInput.confidence }]

              if (newSkills.length >= 2) {
                console.log('[DEMO] Showing graph!')
                setShowRepoGraph(true)
              }

              return {
                ...prev,
                candidate: {
                  ...prev.candidate!,
                  skills: newSkills
                }
              }
            })
            break

          case 'add_company':
            console.log('[DEMO] Adding company:', toolInput.company_name)
            setRepoData(prev => {
              const companies = prev.candidate?.companies || []
              if (companies.some(c => c.name.toLowerCase() === toolInput.company_name.toLowerCase())) {
                return prev
              }
              const newCompanies = [...companies, {
                name: toolInput.company_name,
                role: toolInput.role,
                tenure: toolInput.tenure
              }]

              if (newCompanies.length >= 1) {
                setShowRepoGraph(true)
              }

              return {
                ...prev,
                candidate: {
                  ...prev.candidate!,
                  companies: newCompanies
                }
              }
            })
            break

          case 'add_role_preference':
            setRepoData(prev => ({
              ...prev,
              candidate: {
                ...prev.candidate!,
                roles: [...(prev.candidate?.roles || []), toolInput.role_title]
              }
            }))
            break

          case 'set_company_info':
            setRepoData(prev => ({
              ...prev,
              client: {
                ...prev.client!,
                companyName: toolInput.company_name,
                industry: toolInput.industry
              }
            }))
            setShowRepoGraph(true)
            break
        }
      }
    })
  }, [messages])

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/" className="text-white/60 hover:text-white">
          ← Back
        </Link>
        <div className="mt-4 bg-yellow-900/20 border border-yellow-600/50 rounded-lg p-3 max-w-md">
          <h4 className="text-yellow-400 font-bold text-sm mb-1">🧪 Demo Mode</h4>
          <p className="text-yellow-200 text-xs">
            No authentication required. Using demo user ID for testing.
          </p>
        </div>
      </div>

      {/* Left - Voice Interface */}
      <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
        <div className="max-w-xl mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Voice Onboarding
            <br />
            <span className="text-blue-400">Demo</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8">
            Talk to Frac and watch your knowledge graph build in real-time!
          </p>

          {/* Status */}
          <div className="mb-8">
            {!token && (
              <div className="text-yellow-400">⏳ Fetching token...</div>
            )}
            {status.value === 'connected' && (
              <div className="flex items-center gap-3 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">🎤 Listening - Start talking!</span>
              </div>
            )}
            {status.value === 'connecting' && (
              <div className="text-yellow-400">🔄 Connecting...</div>
            )}
            {status.value === 'disconnected' && (
              <div className="text-red-400">❌ Disconnected</div>
            )}
          </div>

          {/* Transcript */}
          <div className="bg-gray-50/50 rounded-xl p-6 max-h-96 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500 italic">Conversation will appear here...</p>
            ) : (
              <div className="space-y-4">
                {messages
                  .filter((m: any) => m.type === 'user_message' || m.type === 'assistant_message')
                  .slice(-10)
                  .map((m: any, i: number) => (
                    <div key={i} className={`flex ${m.type === 'user_message' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        m.type === 'user_message' ? 'bg-blue-600' : 'bg-gray-800'
                      }`}>
                        {m.message?.content || m.text || ''}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right - Knowledge Graph */}
      <div className="lg:w-1/2 bg-white p-6 lg:p-12 flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          {/* Debug Panel */}
          <div className="mb-4 p-3 bg-gray-50 rounded text-xs font-mono">
            <div>Graph visible: {showRepoGraph ? '✅ YES' : '❌ NO'}</div>
            <div>User type: {repoData.userType}</div>
            <div>Skills: {repoData.candidate?.skills?.length || 0}</div>
            <div>Companies: {repoData.candidate?.companies?.length || 0}</div>
          </div>

          {showRepoGraph ? (
            <div className="animate-fade-in">
              <RepoLiveBuilder
                data={repoData}
                width={600}
                height={500}
                showProgress={true}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4 animate-pulse">🎯</div>
                <p className="text-lg">
                  Your knowledge graph will<br />appear here as we talk...
                </p>
                <p className="text-sm mt-4">
                  Try saying: "I'm a candidate" then mention skills or companies
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function OnboardingDemoPage() {
  return (
    <VoiceProvider>
      <VoiceInterface />
    </VoiceProvider>
  )
}
