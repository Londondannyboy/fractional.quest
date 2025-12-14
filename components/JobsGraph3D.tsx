'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the 3D graph component with SSR disabled
const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), {
  ssr: false,
  loading: () => null
})

interface GraphNode {
  id: string
  name?: string
  group: string
  val: number
  url?: string
  color?: string
}

interface GraphLink {
  source: string
  target: string
  label?: string
}

export interface JobsGraph3DProps {
  roleFilter?: string
  locationFilter?: string
  categoryFilter?: string
  limit?: number
  height?: string
  isHero?: boolean
  showOverlay?: boolean
}

const groupColors: Record<string, string> = {
  job: '#3b82f6',
  skill: '#10b981',
  company: '#f59e0b',
  location: '#8b5cf6',
  default: '#6366f1'
}

export function JobsGraph3D({
  roleFilter = '',
  locationFilter = '',
  categoryFilter = '',
  limit = 20,
  height = '500px',
  isHero = false,
  showOverlay = true,
}: JobsGraph3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<any>(null)
  const [graphData, setGraphData] = useState<{ nodes: GraphNode[], links: GraphLink[] } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 })
  const [cameraInfo, setCameraInfo] = useState({ x: 0, y: 0, z: 80, distance: 80 })

  // Fetch graph data
  useEffect(() => {
    async function fetchData() {
      try {
        const params = new URLSearchParams()
        if (roleFilter) params.set('role', roleFilter)
        if (locationFilter) params.set('location', locationFilter)
        if (categoryFilter) params.set('category', categoryFilter)
        params.set('limit', limit.toString())

        const response = await fetch(`/api/graph/jobs?${params}`)
        if (!response.ok) throw new Error('Failed to fetch')

        const data = await response.json()
        const graphResult = data.graph || data

        if (!graphResult.nodes || graphResult.nodes.length === 0) {
          setError(true)
          setLoading(false)
          return
        }

        // Transform data - make companies much larger and central
        const nodes: GraphNode[] = graphResult.nodes.map((node: any) => ({
          id: node.id,
          name: node.label,
          group: node.type || 'default',
          // Companies are largest, jobs medium, skills smaller
          val: node.type === 'company' ? 80 : node.type === 'job' ? 30 : 8,
          url: node.url,
          color: groupColors[node.type] || groupColors.default
        }))

        // Keep all company-job links, limit skill links
        const linkCounts: Record<string, number> = {}
        const maxSkillLinks = 3

        const links: GraphLink[] = (graphResult.edges || [])
          .filter((edge: any) => {
            const src = edge.source || edge.from
            const tgt = edge.target || edge.to
            // Always keep company links
            if (edge.type === 'at_company') return true
            // Limit skill links
            const sourceCount = linkCounts[src] || 0
            const targetCount = linkCounts[tgt] || 0
            if (sourceCount >= maxSkillLinks || targetCount >= maxSkillLinks) {
              return false
            }
            linkCounts[src] = sourceCount + 1
            linkCounts[tgt] = targetCount + 1
            return true
          })
          .map((edge: any) => ({
            source: edge.source || edge.from,
            target: edge.target || edge.to,
            label: edge.label || edge.type || ''
          }))

        setGraphData({ nodes, links })
        setLoading(false)
      } catch (err) {
        console.error('Error fetching graph data:', err)
        setError(true)
        setLoading(false)
      }
    }

    fetchData()
  }, [roleFilter, locationFilter, categoryFilter, limit])

  // Handle resize
  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Zoom camera in after graph loads
  useEffect(() => {
    if (!graphData || !graphRef.current) return

    // Wait for graph to initialize then zoom in very close
    const timer = setTimeout(() => {
      if (graphRef.current) {
        // Move camera very close - distance of 80 for intimate view
        graphRef.current.cameraPosition({ z: 80 }, { x: 0, y: 0, z: 0 }, 1000)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [graphData])

  // Track camera position for debug info
  useEffect(() => {
    if (!graphRef.current) return

    const interval = setInterval(() => {
      if (graphRef.current) {
        const pos = graphRef.current.cameraPosition()
        if (pos) {
          const distance = Math.sqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z)
          setCameraInfo({
            x: Math.round(pos.x),
            y: Math.round(pos.y),
            z: Math.round(pos.z),
            distance: Math.round(distance)
          })
        }
      }
    }, 500)

    return () => clearInterval(interval)
  }, [graphData])

  const handleNodeClick = useCallback((node: any) => {
    if (!node.url || !graphRef.current) {
      return
    }

    // Fly to the node with a "time warp" effect
    const distance = 40
    const distRatio = 1 + distance / Math.hypot(node.x || 0, node.y || 0, node.z || 0)

    graphRef.current.cameraPosition(
      {
        x: (node.x || 0) * distRatio,
        y: (node.y || 0) * distRatio,
        z: (node.z || 0) * distRatio
      },
      node, // lookAt
      1500  // transition duration
    )

    // Navigate after the fly animation completes
    setTimeout(() => {
      window.location.href = node.url
    }, 1600)
  }, [])

  // Generate label for node - all are clickable
  const getNodeLabel = useCallback((node: any) => {
    if (node.group === 'company') {
      return `🏢 ${node.name}\n👆 View company jobs`
    }
    if (node.group === 'job') {
      return `💼 ${node.name}\n👆 View job`
    }
    if (node.group === 'skill') {
      return `🔧 ${node.name}\n👆 Find jobs with this skill`
    }
    return node.name || node.id
  }, [])

  return (
    <div className="relative" style={{ width: '100%', height }}>
      <div
        ref={containerRef}
        className={`w-full h-full overflow-hidden ${isHero ? '' : 'rounded-xl'}`}
        style={{
          background: 'radial-gradient(ellipse at center, #0a0a1a 0%, #000000 100%)',
        }}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-blue-300 text-sm">Loading job network...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <svg className="w-12 h-12 text-blue-500 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c0-1.657-4.03-3-9-3s-9 1.343-9 3m18 0a9 9 0 01-9 9m-9-9a9 9 0 019-9" />
            </svg>
            <p className="text-blue-300 text-sm">Unable to load network data</p>
          </div>
        )}

        {!loading && !error && graphData && (
          <ForceGraph3D
            ref={graphRef}
            graphData={graphData}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="rgba(0,0,0,0)"
            nodeColor={(node: any) => node.color || groupColors.default}
            nodeVal={(node: any) => node.val}
            nodeLabel={getNodeLabel}
            nodeRelSize={8}
            nodeOpacity={0.95}
            linkColor={() => 'rgba(99, 102, 241, 0.5)'}
            linkWidth={2}
            linkOpacity={0.6}
            onNodeClick={handleNodeClick}
            onNodeHover={(node: any) => {
              if (containerRef.current) {
                containerRef.current.style.cursor = node ? 'pointer' : 'grab'
              }
            }}
            enableNodeDrag={false}
            enableNavigationControls={true}
            d3AlphaDecay={0.02}
            d3VelocityDecay={0.3}
            warmupTicks={50}
            cooldownTicks={100}
          />
        )}
      </div>

      {!loading && !error && showOverlay && (
        <>
          {/* Navigation Guide - Top Right */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-xl p-4 text-xs z-20 max-w-[200px]">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Navigation
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">🖱️</span>
                <span><strong className="text-white">Click</strong> any node to fly there & view details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">🔄</span>
                <span><strong className="text-white">Drag</strong> to rotate the view</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">🔍</span>
                <span><strong className="text-white">Scroll</strong> to zoom in/out</span>
              </li>
            </ul>

            {/* Viewpoint Info */}
            <div className="mt-4 pt-3 border-t border-gray-700">
              <h5 className="text-gray-400 text-[10px] uppercase tracking-wider mb-2">Viewpoint</h5>
              <div className="font-mono text-[10px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-500">Position:</span>
                  <span className="text-emerald-400">{cameraInfo.x}, {cameraInfo.y}, {cameraInfo.z}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Distance:</span>
                  <span className="text-blue-400">{cameraInfo.distance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Nodes:</span>
                  <span className="text-amber-400">{graphData?.nodes.length || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Links:</span>
                  <span className="text-purple-400">{graphData?.links.length || 0}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom center legend */}
          <div className={`absolute ${isHero ? 'bottom-6' : 'bottom-3'} left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-xs z-10 flex items-center gap-4`}>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-amber-500" />
              <span className="text-white font-medium">Companies</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-slate-300">Jobs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-slate-400">Skills</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
