'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the 3D graph component - only loaded when needed
const JobsGraph3D = dynamic(() => import('@/components/JobsGraph3D').then(mod => mod.JobsGraph3D), {
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900" />,
})

interface DesktopOnly3DGraphProps {
  locationFilter?: string
  limit?: number
  height?: string
  isHero?: boolean
  showOverlay?: boolean
}

export function DesktopOnly3DGraph({ locationFilter, limit, height, isHero, showOverlay }: DesktopOnly3DGraphProps) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check if screen is desktop size (768px+)
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches)
    }

    // Initial check
    checkIsDesktop()

    // Listen for window resize
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Mobile: Simple gradient background
  if (!isDesktop) {
    return <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900" />
  }

  // Desktop: Load the 3D graph
  return (
    <div className="absolute inset-0">
      <JobsGraph3D
        locationFilter={locationFilter}
        limit={limit}
        height={height}
        isHero={isHero}
        showOverlay={showOverlay}
      />
    </div>
  )
}
