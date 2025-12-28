import { headers, cookies } from 'next/headers'

/**
 * Geo utilities for international market support
 */

export type Market = 'GB' | 'US' | 'AU' | 'CA' | 'SG' | 'IE' | 'NZ'

export const MARKET_CONFIG: Record<Market, {
  name: string
  currency: string
  currencySymbol: string
  flag: string
  dayRateLabel: string
}> = {
  'GB': {
    name: 'United Kingdom',
    currency: 'GBP',
    currencySymbol: '£',
    flag: '🇬🇧',
    dayRateLabel: '/day',
  },
  'US': {
    name: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    flag: '🇺🇸',
    dayRateLabel: '/day',
  },
  'AU': {
    name: 'Australia',
    currency: 'AUD',
    currencySymbol: 'A$',
    flag: '🇦🇺',
    dayRateLabel: '/day',
  },
  'CA': {
    name: 'Canada',
    currency: 'CAD',
    currencySymbol: 'C$',
    flag: '🇨🇦',
    dayRateLabel: '/day',
  },
  'SG': {
    name: 'Singapore',
    currency: 'SGD',
    currencySymbol: 'S$',
    flag: '🇸🇬',
    dayRateLabel: '/day',
  },
  'IE': {
    name: 'Ireland',
    currency: 'EUR',
    currencySymbol: '€',
    flag: '🇮🇪',
    dayRateLabel: '/day',
  },
  'NZ': {
    name: 'New Zealand',
    currency: 'NZD',
    currencySymbol: 'NZ$',
    flag: '🇳🇿',
    dayRateLabel: '/day',
  },
}

// Map database country names to market codes
export const COUNTRY_TO_MARKET: Record<string, Market> = {
  'UK': 'GB',
  'United Kingdom': 'GB',
  'USA': 'US',
  'United States': 'US',
  'Australia': 'AU',
  'Canada': 'CA',
  'Singapore': 'SG',
  'Ireland': 'IE',
  'New Zealand': 'NZ',
}

/**
 * Get user's market from headers (server component)
 */
export async function getUserMarket(): Promise<Market> {
  try {
    const headersList = await headers()
    const market = headersList.get('x-user-market') as Market
    if (market && Object.keys(MARKET_CONFIG).includes(market)) {
      return market
    }
  } catch {
    // Headers not available (e.g., during static generation)
  }

  try {
    const cookieStore = await cookies()
    const market = cookieStore.get('user_market')?.value as Market
    if (market && Object.keys(MARKET_CONFIG).includes(market)) {
      return market
    }
  } catch {
    // Cookies not available
  }

  return 'GB' // Default to UK
}

/**
 * Get user's detected country (before market mapping)
 */
export async function getUserCountry(): Promise<string> {
  try {
    const headersList = await headers()
    return headersList.get('x-user-country') || 'GB'
  } catch {
    return 'GB'
  }
}

/**
 * Get SQL filter for market-specific jobs
 * Returns jobs from the user's market + remote jobs from anywhere
 */
export function getMarketJobsFilter(market: Market): string {
  // Map market code to database country values
  const countryValues: Record<Market, string[]> = {
    'GB': ['UK', 'United Kingdom'],
    'US': ['USA', 'United States'],
    'AU': ['Australia'],
    'CA': ['Canada'],
    'SG': ['Singapore'],
    'IE': ['Ireland'],
    'NZ': ['New Zealand'],
  }

  const countries = countryValues[market] || ['UK']
  const countryList = countries.map(c => `'${c}'`).join(', ')

  // Return filter: jobs from user's market OR remote jobs
  return `(country IN (${countryList}) OR is_remote = true OR country IS NULL)`
}

/**
 * Get all supported markets for selector
 */
export function getAllMarkets(): Array<{ code: Market; name: string; flag: string }> {
  return Object.entries(MARKET_CONFIG).map(([code, config]) => ({
    code: code as Market,
    name: config.name,
    flag: config.flag,
  }))
}
