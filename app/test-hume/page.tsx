'use client'

import { useState, useEffect } from 'react'
import { VoiceProvider, useVoice } from '@humeai/voice-react'

const CONFIG_ID = 'd57ceb71-4cf5-47e9-87cd-6052445a031c'

function VoiceTest() {
  const { connect, disconnect, status, messages, sendSessionSettings } = useVoice()
  const [token, setToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [logs, setLogs] = useState<string[]>([])
  const [userName, setUserName] = useState('Dan')

  const log = (msg: string) => {
    console.log(msg)
    setLogs(prev => [...prev, `${new Date().toISOString().slice(11, 19)} - ${msg}`])
  }

  useEffect(() => {
    log('Fetching access token...')
    fetch('/api/hume-token')
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          log('✅ Got access token: ' + data.accessToken.slice(0, 20) + '...')
          setToken(data.accessToken)
        } else {
          log('❌ Error: No access token in response')
          setError('No access token')
        }
      })
      .catch(err => {
        log('❌ Error fetching token: ' + err.message)
        setError(err.message)
      })
  }, [])

  // Method 1: Connect WITHOUT sessionSettings (this worked before)
  const handleConnectBasic = async () => {
    if (!token) {
      log('❌ No token available')
      return
    }

    log('🔄 METHOD 1: Connecting WITHOUT sessionSettings...')
    log(`Config ID: ${CONFIG_ID}`)

    try {
      await connect({
        auth: { type: 'accessToken', value: token },
        configId: CONFIG_ID
      })
      log('✅ Connected successfully (basic)!')
    } catch (err: any) {
      log('❌ Connect error: ' + (err?.message || JSON.stringify(err)))
      setError(err?.message || String(err))
    }
  }

  // Method 2: Connect WITH sessionSettings
  const handleConnectWithVars = async () => {
    if (!token) {
      log('❌ No token available')
      return
    }

    const variables = {
      is_authenticated: 'true',
      first_name: userName
    }

    log('🔄 METHOD 2: Connecting WITH sessionSettings...')
    log(`Config ID: ${CONFIG_ID}`)
    log(`Variables: ${JSON.stringify(variables)}`)

    try {
      await connect({
        auth: { type: 'accessToken', value: token },
        configId: CONFIG_ID,
        sessionSettings: {
          type: 'session_settings',
          variables
        } as any
      })
      log('✅ Connected successfully (with vars)!')
    } catch (err: any) {
      log('❌ Connect error: ' + (err?.message || JSON.stringify(err)))
      setError(err?.message || String(err))
    }
  }

  // Method 3: Connect basic, THEN send sessionSettings after
  const handleConnectThenSend = async () => {
    if (!token) {
      log('❌ No token available')
      return
    }

    const variables = {
      is_authenticated: 'true',
      first_name: userName
    }

    log('🔄 METHOD 3: Connect basic, then send sessionSettings...')
    log(`Config ID: ${CONFIG_ID}`)
    log(`Variables: ${JSON.stringify(variables)}`)

    try {
      await connect({
        auth: { type: 'accessToken', value: token },
        configId: CONFIG_ID
      })
      log('✅ Connected! Now sending sessionSettings...')

      // Send session settings after connection (type is added automatically)
      sendSessionSettings({
        variables
      } as any)
      log('✅ SessionSettings sent!')
    } catch (err: any) {
      log('❌ Connect error: ' + (err?.message || JSON.stringify(err)))
      setError(err?.message || String(err))
    }
  }

  const handleDisconnect = () => {
    log('🔄 Disconnecting...')
    disconnect()
    log('✅ Disconnected')
  }

  const clearLogs = () => setLogs([])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Hume Voice Debug Test</h1>

        {/* Status Panel */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <h2 className="font-semibold mb-2 text-yellow-400">Status</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Connection: <span className={`font-mono ${status.value === 'connected' ? 'text-green-400' : 'text-red-400'}`}>{status.value}</span></div>
            <div>Token: <span className="font-mono">{token ? '✅ Ready' : '⏳ Loading...'}</span></div>
            <div>Config: <span className="font-mono text-xs">{CONFIG_ID}</span></div>
            <div>Messages: <span className="font-mono">{messages.length}</span></div>
          </div>
          {error && <p className="text-red-400 mt-2">Error: {error}</p>}
        </div>

        {/* User Name Input */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <label className="block text-sm mb-2">Test User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-gray-700 px-3 py-2 rounded text-white w-48"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={handleConnectBasic}
            disabled={!token || status.value === 'connected'}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 hover:bg-blue-700"
          >
            1. Connect (No Vars)
          </button>
          <button
            onClick={handleConnectWithVars}
            disabled={!token || status.value === 'connected'}
            className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-50 hover:bg-purple-700"
          >
            2. Connect (With Vars)
          </button>
          <button
            onClick={handleConnectThenSend}
            disabled={!token || status.value === 'connected'}
            className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50 hover:bg-green-700"
          >
            3. Connect Then Send Vars
          </button>
          <button
            onClick={handleDisconnect}
            disabled={status.value !== 'connected'}
            className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50 hover:bg-red-700"
          >
            Disconnect
          </button>
          <button
            onClick={clearLogs}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear Logs
          </button>
        </div>

        {/* Logs Panel - FULL WIDTH */}
        <div className="bg-black rounded-lg p-4 font-mono text-sm mb-4">
          <h2 className="text-yellow-400 mb-2">Logs ({logs.length}):</h2>
          <div className="h-80 overflow-auto space-y-1">
            {logs.map((log, i) => (
              <div key={i} className="text-green-400 whitespace-pre-wrap break-all">{log}</div>
            ))}
            {logs.length === 0 && <div className="text-gray-500">No logs yet...</div>}
          </div>
        </div>

        {/* Messages Panel */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="font-semibold mb-2 text-yellow-400">Messages ({messages.length})</h2>
          <div className="max-h-48 overflow-auto text-sm space-y-2">
            {messages.slice(-10).map((msg: any, i) => (
              <div key={i} className="bg-gray-700 p-2 rounded">
                <span className="font-mono text-xs text-purple-400">{msg.type}</span>
                {msg.message?.content && (
                  <p className="text-gray-300 mt-1">{msg.message.content}</p>
                )}
              </div>
            ))}
            {messages.length === 0 && <div className="text-gray-500">No messages yet...</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestHumePage() {
  return (
    <VoiceProvider>
      <VoiceTest />
    </VoiceProvider>
  )
}
