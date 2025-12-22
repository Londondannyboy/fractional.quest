import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

async function getHumeToken() {
  const apiKey = process.env.NEXT_PUBLIC_HUME_API_KEY
  const secretKey = process.env.HUME_SECRET_KEY

  console.log('[Hume Token] Request received')
  console.log('[Hume Token] Keys present:', { 
    hasApiKey: !!apiKey, 
    hasSecretKey: !!secretKey 
  })

  if (!apiKey || !secretKey) {
    console.error('[Hume Token] Missing credentials')
    return NextResponse.json(
      { error: 'Hume API credentials not configured', details: 'Missing NEXT_PUBLIC_HUME_API_KEY or HUME_SECRET_KEY' },
      { status: 500 }
    )
  }

  try {
    // Get access token from Hume
    console.log('[Hume Token] Fetching token from Hume API...')
    const response = await fetch('https://api.hume.ai/oauth2-cc/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${apiKey}:${secretKey}`).toString('base64')
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
    })

    // Try parsing as JSON regardless of status to see error details
    let data
    try {
      data = await response.json()
    } catch (e) {
      const text = await response.text()
      console.error('[Hume Token] Failed to parse JSON:', text)
      return NextResponse.json(
        { error: 'Invalid response from Hume API', details: text },
        { status: 500 }
      )
    }

    if (!response.ok) {
      console.error('[Hume Token] Error response:', data)
      return NextResponse.json(
        { error: 'Failed to get access token', details: data },
        { status: response.status }
      )
    }

    if (!data.access_token) {
      console.error('[Hume Token] No access_token in response:', data)
      return NextResponse.json(
        { error: 'No access token in response', details: data },
        { status: 500 }
      )
    }

    console.log('[Hume Token] Success, token received')
    
    // Return both formats for compatibility
    return NextResponse.json({
      token: data.access_token,
      accessToken: data.access_token
    })
  } catch (error: any) {
    console.error('[Hume Token] Exception:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}

export async function GET() {
  return getHumeToken()
}

export async function POST() {
  return getHumeToken()
}
