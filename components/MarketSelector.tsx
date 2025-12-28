'use client'

import { useState, useEffect } from 'react'
import { MARKET_CONFIG, type Market, getAllMarkets } from '@/lib/geo'

/**
 * Market selector dropdown for users to switch between regions
 */
export function MarketSelector({ className = '' }: { className?: string }) {
  const [currentMarket, setCurrentMarket] = useState<Market>('GB')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Read current market from cookie
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('user_market='))
    if (cookie) {
      const market = cookie.split('=')[1] as Market
      if (Object.keys(MARKET_CONFIG).includes(market)) {
        setCurrentMarket(market)
      }
    }
  }, [])

  const handleMarketChange = (market: Market) => {
    setCurrentMarket(market)
    setIsOpen(false)
    // Set cookie and reload to apply filter
    document.cookie = `user_market=${market}; path=/; max-age=${60 * 60 * 24 * 30}`
    window.location.reload()
  }

  const markets = getAllMarkets()
  const current = MARKET_CONFIG[currentMarket]

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        aria-label="Select your market region"
      >
        <span className="text-base">{current.flag}</span>
        <span className="hidden sm:inline">{current.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div className="py-1">
              {markets.map(market => (
                <button
                  key={market.code}
                  onClick={() => handleMarketChange(market.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                    market.code === currentMarket ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
                  }`}
                >
                  <span className="text-base">{market.flag}</span>
                  <span>{market.name}</span>
                  {market.code === currentMarket && (
                    <svg className="w-4 h-4 ml-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

/**
 * Compact market badge showing current market
 */
export function MarketBadge({ className = '' }: { className?: string }) {
  const [market, setMarket] = useState<Market>('GB')

  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('user_market='))
    if (cookie) {
      const m = cookie.split('=')[1] as Market
      if (Object.keys(MARKET_CONFIG).includes(m)) {
        setMarket(m)
      }
    }
  }, [])

  const config = MARKET_CONFIG[market]

  return (
    <span className={`inline-flex items-center gap-1 text-sm ${className}`}>
      <span>{config.flag}</span>
      <span className="text-gray-600">{config.name}</span>
    </span>
  )
}
