'use client'

import { useUser } from '@stackframe/stack'
import { useEffect, useState } from 'react'
import { HumeWidget, HumeWidgetProps } from './HumeWidget'

interface UserProfile {
  first_name: string | null
  current_country: string | null
  destination_countries: string[] | null
  budget: string | null
  timeline: string | null
  interests: string[] | null
}

interface AuthAwareHumeWidgetProps extends Omit<HumeWidgetProps, 'isAuthenticated' | 'userName' | 'userProfile'> {}

export function AuthAwareHumeWidget(props: AuthAwareHumeWidgetProps) {
  const user = useUser()
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  const isAuthenticated = !!user

  // Fetch user profile when authenticated
  useEffect(() => {
    if (!isAuthenticated) return

    async function fetchProfile() {
      try {
        const response = await fetch('/api/user-profile')
        if (response.ok) {
          const profile = await response.json()
          setUserProfile(profile)
        }
      } catch (error) {
        console.error('Error fetching user profile:', error)
      }
    }

    fetchProfile()
  }, [isAuthenticated])

  // Get first name from profile or Stack Auth
  const userName = userProfile?.first_name || user?.displayName?.split(' ')[0] || undefined

  return (
    <HumeWidget
      {...props}
      isAuthenticated={isAuthenticated}
      userName={userName}
      userProfile={userProfile}
    />
  )
}
