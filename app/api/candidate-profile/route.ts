import { NextRequest, NextResponse } from 'next/server'
import { getPublicProfiles, getPublicProfileCount } from '@/lib/candidate-profiles'

// Auth removed - will be replaced with NeonAuth
// Only public profile listing works without auth

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const listPublic = searchParams.get('public') === 'true'

    if (listPublic) {
      const profiles = await getPublicProfiles({ limit: 50 })
      const count = await getPublicProfileCount()
      return NextResponse.json({ profiles, count })
    }

    // Auth required for personal profile
    return NextResponse.json({ error: 'Auth required' }, { status: 401 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ error: 'Auth required' }, { status: 401 })
}
