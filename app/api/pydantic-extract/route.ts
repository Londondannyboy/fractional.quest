import { NextRequest, NextResponse } from 'next/server'

/**
 * Wrapper for Python Pydantic AI extraction
 * Calls the Python API running on the gateway or falls back to TypeScript extraction
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { transcript } = body

    if (!transcript) {
      return NextResponse.json(
        { error: 'Missing transcript' },
        { status: 400 }
      )
    }

    // Try calling the Python Pydantic AI service via gateway
    const gatewayUrl = process.env.GATEWAY_URL || process.env.NEXT_PUBLIC_GATEWAY_URL

    if (gatewayUrl) {
      try {
        const response = await fetch(`${gatewayUrl}/pydantic-extract`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.API_KEY || ''}`
          },
          body: JSON.stringify({ transcript })
        })

        if (response.ok) {
          const data = await response.json()
          return NextResponse.json(data)
        }
      } catch (gatewayError) {
        console.error('[Pydantic Extract] Gateway error:', gatewayError)
        // Fall through to TypeScript extraction
      }
    }

    // Fallback to simple TypeScript extraction
    const preferences = extractSimple(transcript)

    return NextResponse.json({
      preferences,
      should_confirm: false,
      fallback: true
    })
  } catch (error) {
    console.error('[Pydantic Extract] Error:', error)
    return NextResponse.json(
      { error: 'Extraction failed', preferences: [] },
      { status: 500 }
    )
  }
}

// Simple TypeScript fallback extraction
function extractSimple(transcript: string) {
  const text = transcript.toLowerCase()
  const preferences: any[] = []

  // Extract roles
  const rolePatterns = ['ceo', 'cfo', 'cmo', 'cto', 'coo', 'director', 'manager', 'head of']
  for (const role of rolePatterns) {
    if (text.includes(role)) {
      preferences.push({
        type: 'role',
        values: [role.toUpperCase()],
        confidence: 0.8,
        raw_text: transcript,
        requires_hard_validation: false
      })
    }
  }

  // Extract locations
  const locationPatterns = ['london', 'paris', 'new york', 'berlin', 'amsterdam', 'remote']
  for (const loc of locationPatterns) {
    if (text.includes(loc)) {
      preferences.push({
        type: 'location',
        values: [loc.charAt(0).toUpperCase() + loc.slice(1)],
        confidence: 0.9,
        raw_text: transcript,
        requires_hard_validation: text.includes('must') || text.includes('only')
      })
    }
  }

  // Extract day rate
  const rateMatch = text.match(/£?(\d+(?:,\d+)?)\s*(?:per day|day rate|\/day)/i)
  if (rateMatch) {
    preferences.push({
      type: 'day_rate',
      values: [`£${rateMatch[1]}`],
      confidence: 0.9,
      raw_text: transcript,
      requires_hard_validation: text.includes('minimum') || text.includes('at least')
    })
  }

  return preferences
}
