'use client'

import { useRef, useEffect } from 'react'

/**
 * Voice button that integrates with the 3D graph
 * The button appears at the center (user node position) and pulses with voice activity
 *
 * This component overlays the voice button on top of the user node in the 3D graph,
 * creating a seamless integration where the voice interface IS the graph node
 */

interface Props {
  isConnected: boolean
  isConnecting: boolean
  isPlaying: boolean
  onToggle: () => void
  graphRef?: React.MutableRefObject<any>
}

export default function VoiceGraphNode({
  isConnected,
  isConnecting,
  isPlaying,
  onToggle,
  graphRef
}: Props) {
  const buttonRef = useRef<HTMLDivElement>(null)

  // Position the button at the user node location in 3D space
  useEffect(() => {
    if (!graphRef?.current || !buttonRef.current) return

    const updatePosition = () => {
      const graph = graphRef.current
      const userNode = graph.graphData().nodes.find((n: any) => n.type === 'user')

      if (!userNode) return

      // Get 2D screen position of the user node
      const screenCoords = graph.graph2ScreenCoords(userNode.x, userNode.y, userNode.z)

      if (buttonRef.current) {
        buttonRef.current.style.left = `${screenCoords.x}px`
        buttonRef.current.style.top = `${screenCoords.y}px`
      }
    }

    // Update position on render
    const interval = setInterval(updatePosition, 50)
    return () => clearInterval(interval)
  }, [graphRef])

  return (
    <div
      ref={buttonRef}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-50"
      style={{ left: '50%', top: '50%' }}
    >
      {/* Pulsing ring for voice activity */}
      {isConnected && isPlaying && (
        <div className="absolute inset-0 -m-8 rounded-full border-4 border-purple-500 animate-ping opacity-75" />
      )}

      {/* Main voice button */}
      <button
        onClick={onToggle}
        disabled={isConnecting}
        className={`
          relative w-32 h-32 rounded-full text-white font-bold text-lg shadow-2xl
          transition-all transform hover:scale-110
          ${isConnected
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 animate-pulse'
            : isConnecting
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-br from-purple-600 to-purple-700'
          }
        `}
      >
        {isConnected ? (
          <span className="flex flex-col items-center">
            <MicIcon className="w-10 h-10 mb-1" />
            <span className="text-sm">Stop</span>
          </span>
        ) : isConnecting ? (
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
        ) : (
          <span className="flex flex-col items-center">
            <MicIcon className="w-10 h-10 mb-1" />
            <span className="text-sm">Speak</span>
          </span>
        )}
      </button>

      {/* Status text */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-white text-sm font-medium">
        {isConnected ? (isPlaying ? 'Listening...' : 'Speak now') : 'Tap to start'}
      </div>

      {/* Glow effect */}
      {isConnected && (
        <div className="absolute inset-0 -m-4 rounded-full bg-purple-500/30 blur-xl animate-pulse" />
      )}
    </div>
  )
}

function MicIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  )
}
