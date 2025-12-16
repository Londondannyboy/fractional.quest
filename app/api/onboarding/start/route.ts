import { NextRequest, NextResponse } from 'next/server'
import { stackServerApp } from '@/stack/server'
import { startOnboardingSession } from '@/lib/onboarding-state'

export async function POST(request: NextRequest) {
  try {
    const user = await stackServerApp.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { method = 'voice', humeChatGroupId } = body

    const session = await startOnboardingSession(
      user.id,
      method,
      humeChatGroupId
    )

    return NextResponse.json({ session }, { status: 200 })
  } catch (error) {
    console.error('Error starting onboarding session:', error)
    return NextResponse.json(
      { error: 'Failed to start onboarding session' },
      { status: 500 }
    )
  }
}
