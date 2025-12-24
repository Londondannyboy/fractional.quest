import { Metadata } from 'next'

// SEO POLICY: Onboarding flows should not be indexed
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
