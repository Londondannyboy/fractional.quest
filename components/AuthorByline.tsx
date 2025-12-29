'use client'

interface AuthorBylineProps {
  author?: string
  team?: 'editorial' | 'careers' | 'research'
  publishedDate?: string
  updatedDate?: string
  className?: string
  showAvatar?: boolean
}

const TEAM_INFO = {
  editorial: {
    name: 'Quest Editorial Team',
    description: 'Expert insights on fractional executive careers',
    avatar: 'QE',
    color: 'bg-blue-600',
  },
  careers: {
    name: 'Quest Careers Team',
    description: 'Career guidance for fractional executives',
    avatar: 'QC',
    color: 'bg-purple-600',
  },
  research: {
    name: 'Quest Research Team',
    description: 'Market data and salary analysis',
    avatar: 'QR',
    color: 'bg-teal-600',
  },
}

export function AuthorByline({
  author,
  team = 'editorial',
  publishedDate,
  updatedDate,
  className = '',
  showAvatar = true,
}: AuthorBylineProps) {
  const teamInfo = TEAM_INFO[team]
  const displayName = author || teamInfo.name

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  // JSON-LD for author/publisher
  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: displayName,
    url: 'https://fractional.quest',
    logo: 'https://fractional.quest/logo.svg',
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      {showAvatar && (
        <div
          className={`w-10 h-10 rounded-full ${teamInfo.color} flex items-center justify-center text-white font-bold text-sm`}
        >
          {teamInfo.avatar}
        </div>
      )}

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900 text-sm">{displayName}</span>
          <span className="text-gray-400">•</span>
          <span className="text-xs text-gray-500">{teamInfo.description}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          {publishedDate && (
            <span>Published {formatDate(publishedDate)}</span>
          )}
          {updatedDate && publishedDate !== updatedDate && (
            <>
              <span className="text-gray-400">•</span>
              <span className="text-blue-600 font-medium">Updated {formatDate(updatedDate)}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// Compact version for sidebars/cards
export function AuthorBylineCompact({
  team = 'editorial',
  updatedDate,
  className = '',
}: {
  team?: 'editorial' | 'careers' | 'research'
  updatedDate?: string
  className?: string
}) {
  const teamInfo = TEAM_INFO[team]

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div className={`flex items-center gap-2 text-xs text-gray-500 ${className}`}>
      <div
        className={`w-5 h-5 rounded-full ${teamInfo.color} flex items-center justify-center text-white font-bold text-[10px]`}
      >
        {teamInfo.avatar}
      </div>
      <span>{teamInfo.name}</span>
      {updatedDate && (
        <>
          <span className="text-gray-400">•</span>
          <span>Updated {formatDate(updatedDate)}</span>
        </>
      )}
    </div>
  )
}
