'use client'

// Auth removed - will be replaced with NeonAuth
// This component is temporarily disabled

import { HumeWidget, HumeWidgetProps } from './HumeWidget'

interface AuthAwareHumeWidgetProps extends Omit<HumeWidgetProps, 'isAuthenticated' | 'userName' | 'userProfile'> {}

export function AuthAwareHumeWidget(props: AuthAwareHumeWidgetProps) {
  // Pass through without auth for now
  return (
    <HumeWidget
      {...props}
      isAuthenticated={false}
      userName={undefined}
      userProfile={undefined}
    />
  )
}
