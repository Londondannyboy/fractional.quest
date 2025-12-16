import { NextRequest, NextResponse } from 'next/server'
import { stackServerApp } from '@/stack/server'
import { completeOnboarding, updateOnboardingStep } from '@/lib/onboarding-state'

export async function POST(request: NextRequest) {
  try {
    const user = await stackServerApp.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { userType, collectedData } = body

    // Save final collected data
    await updateOnboardingStep(user.id, 'complete', collectedData)

    // Mark as complete
    await completeOnboarding(user.id)

    // TODO: Sync to ZEP knowledge graph
    // TODO: Update user profile in database

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error completing onboarding:', error)
    return NextResponse.json(
      { error: 'Failed to complete onboarding' },
      { status: 500 }
    )
  }
}
