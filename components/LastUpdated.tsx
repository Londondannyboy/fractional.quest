'use client'

interface LastUpdatedProps {
  date: string | Date
  className?: string
  showTime?: boolean
  prefix?: string
}

export function LastUpdated({
  date,
  className = '',
  showTime = false,
  prefix = 'Last updated',
}: LastUpdatedProps) {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  const formattedDate = dateObj.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const formattedTime = dateObj.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })

  // Calculate relative time
  const now = new Date()
  const diffMs = now.getTime() - dateObj.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  let relativeTime = ''
  if (diffHours < 1) {
    relativeTime = 'Less than an hour ago'
  } else if (diffHours < 24) {
    relativeTime = `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`
  } else if (diffDays < 7) {
    relativeTime = `${diffDays} day${diffDays === 1 ? '' : 's'} ago`
  }

  // JSON-LD for dateModified
  const dateModifiedSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    dateModified: dateObj.toISOString(),
  }

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dateModifiedSchema) }}
      />

      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <span className="text-gray-500">
        {prefix}:{' '}
        <time dateTime={dateObj.toISOString()} className="font-medium text-gray-700">
          {formattedDate}
          {showTime && ` at ${formattedTime}`}
        </time>
        {relativeTime && (
          <span className="text-gray-400 ml-1">({relativeTime})</span>
        )}
      </span>
    </div>
  )
}

// Compact badge version
export function LastUpdatedBadge({
  date,
  className = '',
}: {
  date: string | Date
  className?: string
}) {
  const dateObj = typeof date === 'string' ? new Date(date) : date

  const now = new Date()
  const diffMs = now.getTime() - dateObj.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  let text = ''
  let bgColor = 'bg-gray-100 text-gray-600'

  if (diffHours < 1) {
    text = 'Just updated'
    bgColor = 'bg-green-100 text-green-700'
  } else if (diffHours < 24) {
    text = 'Updated today'
    bgColor = 'bg-green-100 text-green-700'
  } else if (diffDays < 7) {
    text = `Updated ${diffDays}d ago`
    bgColor = 'bg-blue-100 text-blue-700'
  } else {
    const formatted = dateObj.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
    })
    text = `Updated ${formatted}`
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${className}`}>
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      {text}
    </span>
  )
}
