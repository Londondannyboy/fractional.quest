import { Metadata } from 'next'

// SEO POLICY: Interactive tools should not be indexed
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
