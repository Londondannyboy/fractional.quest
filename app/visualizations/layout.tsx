import { Metadata } from 'next'

// SEO POLICY: Visualization tools should not be indexed
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function VisualizationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
