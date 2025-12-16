import { NextRequest, NextResponse } from 'next/server'
import { stackServerApp } from '@/stack/server'
import { updateUserType } from '@/lib/onboarding-state'

export async function POST(request: NextRequest) {
  try {
    const user = await stackServerApp.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { userType } = body

    if (!userType || !['candidate', 'client'].includes(userType)) {
      return NextResponse.json(
        { error: 'Invalid user type' },
        { status: 400 }
      )
    }

    await updateUserType(user.id, userType)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error updating user type:', error)
    return NextResponse.json(
      { error: 'Failed to update user type' },
      { status: 500 }
    )
  }
}
