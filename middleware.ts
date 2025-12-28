import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Geo-routing middleware for international markets
 * Detects user's country and sets a cookie for personalization
 * Supports: UK, US, AU, CA, SG, IE (English-speaking markets)
 */

// Supported markets (English-speaking)
const SUPPORTED_MARKETS = ['GB', 'US', 'AU', 'CA', 'SG', 'IE', 'NZ'] as const
type Market = typeof SUPPORTED_MARKETS[number]

// Market display names
const MARKET_NAMES: Record<Market, string> = {
  'GB': 'United Kingdom',
  'US': 'United States',
  'AU': 'Australia',
  'CA': 'Canada',
  'SG': 'Singapore',
  'IE': 'Ireland',
  'NZ': 'New Zealand',
}

// Default market for unsupported countries
const DEFAULT_MARKET: Market = 'GB'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Get geo data from Vercel headers (x-vercel-ip-country, etc.)
  // These are set by Vercel's edge network
  const country = request.headers.get('x-vercel-ip-country') || ''
  const city = request.headers.get('x-vercel-ip-city') || ''
  const region = request.headers.get('x-vercel-ip-country-region') || ''

  // Check if user already has a market preference cookie
  const existingMarket = request.cookies.get('user_market')?.value

  // Determine the market
  let market: Market
  if (existingMarket && SUPPORTED_MARKETS.includes(existingMarket as Market)) {
    market = existingMarket as Market
  } else if (SUPPORTED_MARKETS.includes(country as Market)) {
    market = country as Market
  } else {
    market = DEFAULT_MARKET
  }

  // Set cookies for client-side use (30 days expiry)
  if (!existingMarket) {
    response.cookies.set('user_market', market, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'lax',
    })
  }

  // Set geo headers for server components
  response.headers.set('x-user-country', country)
  response.headers.set('x-user-city', city)
  response.headers.set('x-user-region', region)
  response.headers.set('x-user-market', market)

  return response
}

// Only run middleware on pages, not API routes or static files
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*|sitemap.xml|robots.txt).*)',
  ],
}
