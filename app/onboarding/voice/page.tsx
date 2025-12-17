'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useUser } from '@stackframe/stack'
import { VoiceProvider, useVoice } from '@humeai/voice-react'
import Link from 'next/link'
import { RepoLiveBuilder, type RepoData } from '@/components/RepoLiveBuilder'

// Onboarding-specific Hume configuration
const CONFIG_ID = '5da7f806-2f21-4450-b4db-ab7509b3c38a'

// Store chat_group_id per user for Hume resume functionality
function getChatGroupId(userId: string): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(`hume_onboarding_chat_group_${userId}`)
}

function setChatGroupId(userId: string, chatGroupId: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(`hume_onboarding_chat_group_${userId}`, chatGroupId)
}

interface VoiceInterfaceProps {
  token: string
  userId: string
  userName: string
}

function VoiceInterface({ token, userId, userName }: VoiceInterfaceProps) {
  const { connect, disconnect, status, messages } = useVoice()
  const [repoData, setRepoData] = useState<RepoData>({
    userType: 'unknown',
    candidate: { skills: [], companies: [], roles: [] },
    client: { rolesNeeded: [], requirements: [] }
  })
  const [showRepoGraph, setShowRepoGraph] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const wasConnectedRef = useRef(false)

  // Connect to Hume on mount
  useEffect(() => {
    if (!token) return

    const storedChatGroupId = getChatGroupId(userId)

    // DEBUG: Log connection parameters
    console.log('[ONBOARDING] Connecting to Hume:', {
      hasToken: !!token,
      tokenLength: token.length,
      configId: CONFIG_ID,
      userId: userId,
      userIdType: typeof userId,
      hasChatGroupId: !!storedChatGroupId
    })

    connect({
      auth: { type: 'accessToken', value: token },
      configId: CONFIG_ID,
      resumedChatGroupId: storedChatGroupId || undefined,
      sessionSettings: {
        type: 'session_settings' as const,
        variables: {
          user_id: userId,
          first_name: userName.split(' ')[0] || userName,
          last_name: userName.split(' ')[1] || '',
          is_authenticated: 'true',
          current_country: 'United Kingdom',
          interests: '',
          timeline: '',
          budget: '',
          email: userName.includes('@') ? userName : '',
          previous_context: ''
        }
      }
    })
      .then(() => console.log('[ONBOARDING] Connected successfully!'))
      .catch(err => console.error('[ONBOARDING] Failed to connect to Hume:', err))

    return () => {
      disconnect()
    }
  }, [token, userId, userName]) // Removed connect/disconnect to prevent loop

  // Track connection state
  useEffect(() => {
    if (status.value === 'connected') {
      wasConnectedRef.current = true
    }
  }, [status])

  // Capture and save chat_group_id from Hume messages
  useEffect(() => {
    messages.forEach((message: any) => {
      // Save chat_group_id for resume capability
      if (message.type === 'chat_metadata' && message.chatGroupId) {
        console.log('[Hume] Saving chat_group_id for resume:', message.chatGroupId)
        setChatGroupId(userId, message.chatGroupId)
      }
    })
  }, [messages, userId])

  // Process tool messages from Hume
  useEffect(() => {
    messages.forEach((message: any) => {
      if (message.type === 'tool_call') {
        const toolName = message.name
        const toolInput = message.parameters

        console.log('[ONBOARDING] Tool called:', toolName, toolInput)

        // Handle different onboarding tools
        switch (toolName) {
          case 'set_user_type':
            console.log('[ONBOARDING] Setting user type:', toolInput.user_type)
            handleSetUserType(toolInput.user_type)
            break

          case 'add_skill':
            console.log('[ONBOARDING] Adding skill:', toolInput.skill_name)
            handleAddSkill(toolInput.skill_name, toolInput.confidence)
            break

          case 'add_company':
            console.log('[ONBOARDING] Adding company:', toolInput.company_name)
            handleAddCompany(
              toolInput.company_name,
              toolInput.role,
              toolInput.tenure
            )
            break

          case 'add_role_preference':
            console.log('[ONBOARDING] Adding role preference:', toolInput.role_title)
            handleAddRolePreference(toolInput.role_title)
            break

          case 'set_company_info':
            console.log('[ONBOARDING] Setting company info:', toolInput.company_name)
            handleSetCompanyInfo(
              toolInput.company_name,
              toolInput.industry
            )
            break

          case 'add_role_needed':
            console.log('[ONBOARDING] Adding role needed:', toolInput.role_title)
            handleAddRoleNeeded(
              toolInput.role_title,
              toolInput.priority,
              toolInput.timeline
            )
            break

          case 'add_requirement':
            console.log('[ONBOARDING] Adding requirement:', toolInput.requirement_type)
            handleAddRequirement(
              toolInput.requirement_type,
              toolInput.value,
              toolInput.is_hard_constraint
            )
            break

          case 'complete_onboarding':
            console.log('[ONBOARDING] Completing onboarding')
            handleCompleteOnboarding()
            break

          default:
            console.log('[ONBOARDING] Unknown tool:', toolName)
        }
      }
    })
  }, [messages])

  const handleSetUserType = useCallback(async (userType: 'candidate' | 'client') => {
    setRepoData(prev => ({ ...prev, userType }))

    // Save to database
    await fetch('/api/onboarding/update-user-type', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, userType })
    })
  }, [userId])

  const handleAddSkill = useCallback((skillName: string, confidence?: number) => {
    setRepoData(prev => {
      const skills = prev.candidate?.skills || []

      // Check if skill already exists
      if (skills.some(s => s.name.toLowerCase() === skillName.toLowerCase())) {
        console.log('[ONBOARDING] Skill already exists:', skillName)
        return prev
      }

      const newSkills = [...skills, { name: skillName, confidence }]

      // Show graph after 2+ skills
      if (newSkills.length >= 2 && !showRepoGraph) {
        console.log('[ONBOARDING] Showing graph! Skills:', newSkills.length)
        setShowRepoGraph(true)
      }

      console.log('[ONBOARDING] Updated skills:', newSkills)

      return {
        ...prev,
        candidate: {
          ...prev.candidate!,
          skills: newSkills
        }
      }
    })
  }, [showRepoGraph])

  const handleAddCompany = useCallback((companyName: string, role?: string, tenure?: string) => {
    setRepoData(prev => {
      const companies = prev.candidate?.companies || []

      // Check if company already exists
      if (companies.some(c => c.name.toLowerCase() === companyName.toLowerCase())) {
        return prev
      }

      const newCompanies = [...companies, { name: companyName, role, tenure }]

      // Show graph after 1+ company
      if (newCompanies.length >= 1 && !showRepoGraph) {
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
  }, [showRepoGraph])

  const handleAddRolePreference = useCallback((roleTitle: string) => {
    setRepoData(prev => {
      const roles = prev.candidate?.roles || []

      if (roles.includes(roleTitle)) {
        return prev
      }

      return {
        ...prev,
        candidate: {
          ...prev.candidate!,
          roles: [...roles, roleTitle]
        }
      }
    })
  }, [])

  const handleSetCompanyInfo = useCallback((companyName: string, industry?: string) => {
    setRepoData(prev => ({
      ...prev,
      client: {
        ...prev.client!,
        companyName,
        industry
      }
    }))

    // Show graph when company is set
    if (!showRepoGraph) {
      setShowRepoGraph(true)
    }
  }, [showRepoGraph])

  const handleAddRoleNeeded = useCallback((roleTitle: string, priority?: string, timeline?: string) => {
    setRepoData(prev => {
      const rolesNeeded = prev.client?.rolesNeeded || []

      // Check if role already exists
      if (rolesNeeded.some(r => r.title.toLowerCase() === roleTitle.toLowerCase())) {
        return prev
      }

      const newRoles = [...rolesNeeded, { title: roleTitle, priority, timeline }]

      // Show graph after 1+ role
      if (newRoles.length >= 1 && !showRepoGraph) {
        setShowRepoGraph(true)
      }

      return {
        ...prev,
        client: {
          ...prev.client!,
          rolesNeeded: newRoles
        }
      }
    })
  }, [showRepoGraph])

  const handleAddRequirement = useCallback((
    requirementType: string,
    value: string,
    isHardConstraint?: boolean
  ) => {
    setRepoData(prev => {
      const requirements = prev.client?.requirements || []

      return {
        ...prev,
        client: {
          ...prev.client!,
          requirements: [...requirements, {
            type: requirementType,
            value,
            isHardConstraint: isHardConstraint || false
          }]
        }
      }
    })
  }, [])

  const handleCompleteOnboarding = useCallback(async () => {
    // Save final data to database
    await fetch('/api/onboarding/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        userType: repoData.userType,
        collectedData: repoData.userType === 'candidate' ? repoData.candidate : repoData.client
      })
    })

    setIsComplete(true)

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = '/repo'
    }, 3000)
  }, [userId, repoData])

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">✨</div>
          <h2 className="text-3xl font-bold mb-4">Onboarding Complete!</h2>
          <p className="text-lg text-gray-400 mb-8">
            Your profile is ready. Redirecting to your knowledge graph...
          </p>
          <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white">
      {/* Left side - Voice Interface */}
      <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col">
        <Link
          href="/onboarding"
          className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"
        >
          <span className="mr-2">←</span> Back
        </Link>

        <div className="flex-1 flex flex-col justify-center max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build your<br />
            <span className="text-blue-400">profile together</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8">
            Just have a natural conversation with Frac. I'll ask a few questions to understand your background and preferences.
          </p>

          {/* Connection Status */}
          <div className="mb-8">
            {status.value === 'connected' && (
              <div className="flex items-center gap-3 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Voice active - Start talking!</span>
              </div>
            )}
            {status.value === 'connecting' && (
              <div className="flex items-center gap-3 text-yellow-400">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Connecting...</span>
              </div>
            )}
            {status.value === 'disconnected' && (
              <div className="flex items-center gap-3 text-red-400">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="text-sm font-medium">Disconnected - Reconnecting...</span>
              </div>
            )}
          </div>

          {/* Transcript */}
          <div className="bg-gray-900/50 rounded-xl p-6 max-h-96 overflow-y-auto mb-6">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-sm italic">
                Conversation will appear here...
              </p>
            ) : (
              <div className="space-y-4">
                {messages
                  .filter((m: any) => m.type === 'user_message' || m.type === 'assistant_message')
                  .slice(-10)
                  .map((m: any, i: number) => (
                    <div key={i} className={`flex ${m.type === 'user_message' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        m.type === 'user_message'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">
                          {m.message?.content || m.text || ''}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Manual Fallback */}
          <Link
            href="/onboarding/manual"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 transition-all text-sm"
          >
            Switch to Manual Form →
          </Link>
        </div>
      </div>

      {/* Right side - Live Repo Builder */}
      <div className="lg:w-1/2 bg-gray-950 p-6 lg:p-12 flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          {/* Debug: Always show graph status */}
          <div className="mb-4 p-3 bg-gray-900 rounded text-xs">
            <div>Graph visible: {showRepoGraph ? 'YES' : 'NO'}</div>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Demo user for local development (static object to prevent re-renders)
const DEMO_USER = {
  id: 'demo-user-local',
  displayName: 'Demo User',
  primaryEmail: 'demo@example.com'
}

export default function VoiceOnboardingPage() {
  // Bypass auth in development
  const isDev = process.env.NODE_ENV === 'development'
  const realUser = useUser({ or: isDev ? undefined : 'redirect' })
  const user = isDev && !realUser ? DEMO_USER : realUser
  const [token, setToken] = useState<string | null>(null)

  // Fetch Hume access token
  useEffect(() => {
    if (!user) return

    // DEBUG: Log user object
    console.log('[ONBOARDING] User object:', {
      id: user.id,
      displayName: user.displayName,
      primaryEmail: user.primaryEmail,
      hasId: !!user.id,
      idType: typeof user.id
    })

    fetch('/api/hume-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id })
    })
      .then(res => res.json())
      .then(data => {
        console.log('[ONBOARDING] Token response:', {
          hasToken: !!data.token,
          hasAccessToken: !!data.accessToken,
          tokenLength: data.token?.length,
          keys: Object.keys(data)
        })
        if (data.token) {
          setToken(data.token)
        }
      })
      .catch(err => console.error('Failed to fetch Hume token:', err))

    // Start onboarding session in database
    fetch('/api/onboarding/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, method: 'voice' })
    }).catch(err => console.error('Failed to start onboarding session:', err))
  }, [user])

  if (!user || !token) {
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
    <VoiceProvider>
      <VoiceInterface
        token={token}
        userId={user.id}
        userName={user.displayName || user.primaryEmail || 'there'}
      />
    </VoiceProvider>
  )
}
