'use client'

interface AgentAvatarProps {
  type: 'frac' | 'onboarding'
  isActive: boolean
  isListening?: boolean
  onClick?: () => void
}

export function AgentAvatar({ type, isActive, isListening = false, onClick }: AgentAvatarProps) {
  const isFrac = type === 'frac'

  return (
    <button
      onClick={onClick}
      className={`relative group transition-all duration-300 ${
        isActive
          ? 'scale-110 ring-4 ring-blue-500 ring-opacity-50'
          : 'scale-100 opacity-60 hover:opacity-100 hover:scale-105'
      }`}
    >
      {/* Cartoon Face SVG */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="drop-shadow-2xl"
      >
        {/* Head/Face Circle */}
        <circle
          cx="60"
          cy="60"
          r="50"
          fill={isFrac ? '#3B82F6' : '#10B981'}
          className={isActive ? 'animate-pulse' : ''}
        />

        {/* Face Shadow */}
        <ellipse
          cx="60"
          cy="65"
          rx="45"
          ry="40"
          fill="rgba(0,0,0,0.1)"
        />

        {isFrac ? (
          // Frac - Friendly Robot
          <>
            {/* Eyes */}
            <circle cx="45" cy="50" r="8" fill="white" />
            <circle cx="75" cy="50" r="8" fill="white" />
            <circle cx="47" cy="52" r="4" fill="#1E293B" />
            <circle cx="77" cy="52" r="4" fill="#1E293B" />

            {/* Happy Smile */}
            <path
              d="M 40 70 Q 60 85 80 70"
              stroke="white"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            {/* Antenna */}
            <line x1="60" y1="10" x2="60" y2="20" stroke="white" strokeWidth="3" />
            <circle cx="60" cy="8" r="4" fill="#FCD34D" />

            {/* Robot details */}
            <rect x="35" y="45" width="6" height="2" fill="white" opacity="0.5" />
            <rect x="79" y="45" width="6" height="2" fill="white" opacity="0.5" />
          </>
        ) : (
          // Onboarding Coach - Professional Person
          <>
            {/* Eyes */}
            <ellipse cx="45" cy="52" rx="5" ry="7" fill="white" />
            <ellipse cx="75" cy="52" rx="5" ry="7" fill="white" />
            <circle cx="45" cy="54" r="3" fill="#1E293B" />
            <circle cx="75" cy="54" r="3" fill="#1E293B" />

            {/* Friendly Smile */}
            <path
              d="M 42 72 Q 60 80 78 72"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Hair */}
            <path
              d="M 20 50 Q 15 30 35 25 Q 50 20 65 25 Q 85 30 90 40"
              fill="#1E293B"
            />

            {/* Eyebrows */}
            <path d="M 38 45 L 52 43" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
            <path d="M 68 43 L 82 45" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
          </>
        )}

        {/* Listening indicator - Pulsing rings */}
        {isListening && isActive && (
          <g>
            <circle
              cx="60"
              cy="60"
              r="55"
              fill="none"
              stroke={isFrac ? '#3B82F6' : '#10B981'}
              strokeWidth="2"
              opacity="0.6"
              className="animate-ping"
            />
            <circle
              cx="60"
              cy="60"
              r="58"
              fill="none"
              stroke={isFrac ? '#60A5FA' : '#34D399'}
              strokeWidth="1"
              opacity="0.4"
              className="animate-ping"
              style={{ animationDelay: '0.3s' }}
            />
          </g>
        )}
      </svg>

      {/* Agent Name */}
      <div className={`text-center mt-2 font-bold transition-colors ${
        isActive ? 'text-white' : 'text-gray-400'
      }`}>
        {isFrac ? 'Frac' : 'Onboarding Coach'}
      </div>

      {/* Status Badge */}
      <div className="absolute -top-2 -right-2">
        {isActive ? (
          <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full" />
            Active
          </div>
        ) : (
          <div className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
            Tap to talk
          </div>
        )}
      </div>
    </button>
  )
}
