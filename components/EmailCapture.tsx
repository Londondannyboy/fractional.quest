'use client'

import { useState, FormEvent } from 'react'

interface EmailCaptureProps {
  variant?: 'inline' | 'card' | 'banner' | 'sidebar'
  title?: string
  description?: string
  buttonText?: string
  className?: string
  source?: string // For tracking where signups come from
}

export function EmailCapture({
  variant = 'card',
  title = 'Get Fractional Job Alerts',
  description = 'Be the first to know about new fractional executive opportunities. Weekly digest, no spam.',
  buttonText = 'Subscribe',
  className = '',
  source = 'website',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address')
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      // Store in localStorage for now (would connect to email service in production)
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
      if (!subscribers.includes(email)) {
        subscribers.push({ email, source, subscribedAt: new Date().toISOString() })
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
      }

      // TODO: Connect to actual email service (Mailchimp, ConvertKit, etc.)
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, source }),
      // })

      setStatus('success')
      setEmail('')
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          disabled={status === 'loading' || status === 'success'}
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : buttonText}
        </button>
      </form>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-5 text-white ${className}`}>
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="font-bold text-sm">Job Alerts</h3>
        </div>
        <p className="text-blue-100 text-xs mb-4">
          Get weekly alerts for new fractional opportunities.
        </p>
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>You're subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3 py-2 text-sm text-gray-900 bg-white rounded-lg focus:ring-2 focus:ring-white/50"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-3 py-2 text-sm font-semibold bg-white text-blue-700 rounded-lg hover:bg-blue-50 disabled:opacity-50 transition-colors"
            >
              {status === 'loading' ? 'Subscribing...' : buttonText}
            </button>
            {status === 'error' && (
              <p className="text-xs text-red-200">{errorMessage}</p>
            )}
          </form>
        )}
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-gray-900 to-gray-800 py-4 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="font-semibold text-sm">{title}</span>
            </div>
            {status === 'success' ? (
              <span className="text-green-400 text-sm font-medium">You're subscribed to job alerts!</span>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 sm:w-64 px-4 py-2 text-sm text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 disabled:opacity-50 transition-colors whitespace-nowrap"
                >
                  {status === 'loading' ? '...' : buttonText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Default: card variant
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">Free weekly digest</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 p-4 bg-green-50 rounded-lg text-green-700">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Thanks! Check your inbox to confirm.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') setStatus('idle')
            }}
            placeholder="your@email.com"
            className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              status === 'error' ? 'border-red-300' : 'border-gray-300'
            }`}
            disabled={status === 'loading'}
          />
          {status === 'error' && (
            <p className="text-xs text-red-600">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'loading' ? 'Subscribing...' : buttonText}
          </button>
          <p className="text-xs text-gray-400 text-center">
            No spam, unsubscribe anytime
          </p>
        </form>
      )}
    </div>
  )
}
