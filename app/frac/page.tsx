'use client'

import dynamic from 'next/dynamic'

// Dynamically import the page content to avoid SSR issues with Stack Auth
const FracContent = dynamic(() => import('./FracContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Loading Frac...</div>
    </div>
  )
})

export default function FracPage() {
  return <FracContent />
}
