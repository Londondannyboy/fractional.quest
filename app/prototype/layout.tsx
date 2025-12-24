import { Metadata } from 'next'

// SEO POLICY: Prototype/test pages should not be indexed
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrototypeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
