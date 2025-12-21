'use client'

import { useEffect, useRef } from 'react'

interface ForceGraphARProps {
  graphData: {
    nodes: any[]
    links: any[]
  }
  width?: number
  height?: number
}

export default function ForceGraphARWrapper({ graphData, width = 650, height = 700 }: ForceGraphARProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return

    // Dynamically import the AR library
    import('3d-force-graph-ar').then((mod) => {
      const ForceGraphAR = mod.default

      if (!graphRef.current) {
        graphRef.current = ForceGraphAR()(containerRef.current!)
          .graphData(graphData)
          .nodeLabel('name')
          .nodeVal('val')
          .nodeColor('color')
          .linkColor(() => '#444')
          .width(width)
          .height(height)
      } else {
        graphRef.current.graphData(graphData)
      }
    }).catch(err => {
      console.error('AR Graph error:', err)
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <div style="color: emerald; padding: 20px; text-align: center;">
            <p>AR Mode requires a mobile device with AR support</p>
            <p style="font-size: 12px; opacity: 0.7; margin-top: 10px;">Check browser console for details</p>
          </div>
        `
      }
    })

    return () => {
      if (graphRef.current && graphRef.current._destructor) {
        graphRef.current._destructor()
      }
    }
  }, [graphData, width, height])

  return (
    <div
      ref={containerRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative'
      }}
    />
  )
}
