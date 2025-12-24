import { Metadata } from 'next'

// SEO POLICY: Interactive calculators should not be indexed (CSR pages)
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
