'use client'

import { useEffect, useRef } from 'react'

interface ForceGraphVRProps {
  graphData: {
    nodes: any[]
    links: any[]
  }
  width?: number
  height?: number
}

export default function ForceGraphVRWrapper({ graphData, width = 650, height = 700 }: ForceGraphVRProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return

    // Dynamically import the VR library
    import('3d-force-graph-vr').then((mod) => {
      const ForceGraphVR = mod.default

      if (!graphRef.current) {
        graphRef.current = ForceGraphVR()(containerRef.current!)
          .graphData(graphData)
          .nodeLabel('name')
          .nodeVal('val')
          .nodeColor('color')
          .linkColor(() => '#444')
          .backgroundColor('#000000')
          .width(width)
          .height(height)
      } else {
        graphRef.current.graphData(graphData)
      }
    }).catch(err => {
      console.error('VR Graph error:', err)
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <div style="color: cyan; padding: 20px; text-align: center;">
            <p>VR Mode requires a VR headset and WebXR support</p>
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
