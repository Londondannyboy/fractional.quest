import { Metadata } from 'next'

// SEO POLICY: User pages should not be indexed
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
