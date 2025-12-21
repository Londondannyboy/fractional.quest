'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import type { GraphNode as ZepGraphNode } from '@/lib/zep-client'

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

// ============================================================================
// TYPES
// ============================================================================

type ClusterType =
  | 'skills' | 'experience' | 'career_interests' | 'preferences' // Candidate
  | 'requirements' | 'candidate_matches' | 'culture_fit' // Client

interface GraphNode {
  id: string
  name: string
  val: number
  color: string
  type: string
  cluster: ClusterType | 'center'
  validated?: boolean
  pending?: boolean
}

interface GraphLink {
  source: string
  target: string
  width?: number
  distance?: number
  type?: 'primary' | 'cluster'
}

interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}

interface ClusteredForceGraphProps {
  userId: string
  userType: 'candidate' | 'client'
  initialData?: { nodes: ZepGraphNode[], edges: any[] }
  onNodeClick?: (node: GraphNode) => void
  realtimeUpdates?: boolean
  className?: string
}

// ============================================================================
// CLUSTER CONFIGURATIONS
// ============================================================================

const CANDIDATE_CLUSTERS = {
  skills: {
    label: 'MY SKILLS',
    color: '#3B82F6',
    position: 'top-left',
    distance: 600
  },
  experience: {
    label: 'MY EXPERIENCE',
    color: '#10B981',
    position: 'top-right',
    distance: 600
  },
  career_interests: {
    label: 'CAREER INTERESTS',
    color: '#EC4899',
    position: 'bottom',
    distance: 600
  },
  preferences: {
    label: 'PREFERENCES',
    color: '#F97316',
    position: 'left',
    distance: 600
  }
} as const

const CLIENT_CLUSTERS = {
  requirements: {
    label: 'REQUIREMENTS',
    color: '#EC4899',
    position: 'left',
    distance: 600
  },
  candidate_matches: {
    label: 'CANDIDATE MATCHES',
    color: '#10B981',
    position: 'center',
    distance: 600
  },
  culture_fit: {
    label: 'CULTURE & PERSONALITY',
    color: '#F59E0B',
    position: 'right',
    distance: 600
  }
} as const

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ClusteredForceGraph({
  userId,
  userType,
  initialData,
  onNodeClick,
  realtimeUpdates = true,
  className = ''
}: ClusteredForceGraphProps) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] })
  const [stableGraphData, setStableGraphData] = useState<GraphData>({ nodes: [], links: [] })
  const fgRef = useRef<any>(null)

  // Get cluster config based on user type
  const clusters = userType === 'candidate' ? CANDIDATE_CLUSTERS : CLIENT_CLUSTERS

  // ========================================================================
  // INITIALIZATION
  // ========================================================================

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth - 80,
        height: window.innerHeight - 200
      })
    }
  }, [])

  useEffect(() => {
    if (fgRef.current) {
      // Zoom out on mount for desktop spread
      fgRef.current.zoom(0.25, 1000)
    }
  }, [])

  // ========================================================================
  // LOAD INITIAL DATA
  // ========================================================================

  useEffect(() => {
    if (initialData) {
      const converted = convertZepToGraphData(initialData, userType)
      setGraphData(converted)
    } else {
      // Start with just user node
      setGraphData({
        nodes: [
          {
            id: 'user',
            name: 'You',
            val: 50,
            color: '#8B5CF6',
            type: 'user',
            cluster: 'center'
          }
        ],
        links: []
      })
    }
  }, [initialData, userType])

  // ========================================================================
  // REAL-TIME UPDATES (polling)
  // ========================================================================

  useEffect(() => {
    if (!realtimeUpdates || !userId) return

    const interval = setInterval(async () => {
      try {
        const response = await fetch(`/api/graph/user?userId=${userId}`)
        if (!response.ok) return

        const data = await response.json()
        if (data.graph) {
          const converted = convertZepToGraphData(data.graph, userType)
          setGraphData(converted)
        }
      } catch (error) {
        console.error('[ClusteredForceGraph] Failed to fetch updates:', error)
      }
    }, 2000) // Poll every 2 seconds

    return () => clearInterval(interval)
  }, [userId, realtimeUpdates, userType])

  // ========================================================================
  // DEBOUNCED GRAPH DATA (prevent flickering)
  // ========================================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setStableGraphData(graphData)
    }, 500) // 500ms debounce

    return () => clearTimeout(timer)
  }, [graphData])

  // ========================================================================
  // OPTIMISTIC UPDATE (for instant feedback)
  // ========================================================================

  const addNodeOptimistically = useCallback((node: GraphNode) => {
    setGraphData(prev => {
      // Check if node already exists
      if (prev.nodes.some(n => n.id === node.id)) {
        return prev
      }

      // Add node and link to user
      return {
        nodes: [...prev.nodes, node],
        links: [
          ...prev.links,
          {
            source: 'user',
            target: node.id,
            width: 3,
            distance: (clusters as Record<string, { distance?: number }>)[node.cluster]?.distance || 600,
            type: 'primary' as const
          }
        ]
      }
    })
  }, [clusters])

  // Expose addNode function to parent (via ref or callback)
  useEffect(() => {
    if (onNodeClick) {
      // Store the addNode function for parent access
      (window as any).addNodeToGraph = addNodeOptimistically
    }
  }, [addNodeOptimistically, onNodeClick])

  // ========================================================================
  // RENDER
  // ========================================================================

  return (
    <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
      {/* Graph Canvas */}
      <ForceGraph2D
        ref={fgRef}
        graphData={stableGraphData}
        nodeLabel="name"
        nodeVal="val"
        nodeColor="color"
        linkColor={(link: any) => link.type === 'primary' ? '#8B5CF6' : '#333'}
        linkWidth={(link: any) => link.width || 1}
        backgroundColor="#000000"
        enableNodeDrag={true}
        enableZoomInteraction={true}
        enablePanInteraction={true}
        width={dimensions.width}
        height={dimensions.height}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.3}
        cooldownTicks={100}
        onNodeClick={(node: any) => {
          if (onNodeClick) onNodeClick(node)
        }}
        nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
          // Draw circle
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
          ctx.fillStyle = node.color
          ctx.fill()

          // Add border for user node
          if (node.type === 'user') {
            ctx.strokeStyle = '#fff'
            ctx.lineWidth = 3
            ctx.stroke()
          }

          // Pending validation indicator (dashed border)
          if (node.pending) {
            ctx.strokeStyle = '#FCD34D'
            ctx.lineWidth = 2
            ctx.setLineDash([5, 5])
            ctx.stroke()
            ctx.setLineDash([])
          }

          // Validated indicator (solid border)
          if (node.validated) {
            ctx.strokeStyle = '#10B981'
            ctx.lineWidth = 2
            ctx.stroke()
          }

          // Node label
          ctx.font = `${(node.type === 'user' ? 14 : 11) / globalScale}px Sans-Serif`
          ctx.textAlign = 'center'
          ctx.fillStyle = '#fff'
          ctx.fillText(node.name, node.x, node.y + node.val / 2 + 14 / globalScale)

          // CLUSTER LABELS - Show what each cluster represents
          const clusterConfig = (clusters as Record<string, { color: string; label: string }>)[node.cluster]
          if (clusterConfig && isFirstNodeInCluster(node, stableGraphData.nodes)) {
            ctx.font = `bold ${16 / globalScale}px Sans-Serif`
            ctx.fillStyle = clusterConfig.color
            ctx.textAlign = 'center'
            ctx.fillText(clusterConfig.label, node.x, node.y - 80 / globalScale)
          }
        }}
      />

      {/* Stats Overlay */}
      <div className="absolute bottom-4 right-4 bg-black/80 rounded-lg p-4 border border-purple-500/30">
        <div className="text-xs space-y-1">
          <div className="text-purple-300 font-semibold">Live Repo Stats</div>
          {Object.entries(clusters).map(([key, config]) => {
            const count = stableGraphData.nodes.filter(n => n.cluster === key).length
            return (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: config.color }}
                />
                <span className="text-gray-400">{config.label}:</span>
                <span className="text-white font-semibold">{count}</span>
              </div>
            )
          })}
          <div className="pt-2 border-t border-purple-500/30 mt-2">
            <span className="text-gray-400">Total nodes:</span>{' '}
            <span className="text-white font-semibold">
              {stableGraphData.nodes.length}
            </span>
          </div>
        </div>
      </div>

      {/* Real-time indicator */}
      {realtimeUpdates && (
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/80 rounded-full px-3 py-1.5 border border-green-500/30">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-green-300">Live</span>
        </div>
      )}
    </div>
  )
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function convertZepToGraphData(
  zepData: { nodes: ZepGraphNode[], edges: any[] },
  userType: 'candidate' | 'client'
): GraphData {
  const clusters = userType === 'candidate' ? CANDIDATE_CLUSTERS : CLIENT_CLUSTERS

  // Convert ZEP nodes to graph nodes
  const nodes: GraphNode[] = zepData.nodes.map(zepNode => {
    const cluster = detectCluster(zepNode, userType)
    const clusterConfig = (clusters as Record<string, { color: string }>)[cluster]

    return {
      id: zepNode.id,
      name: zepNode.label,
      val: 20,
      color: clusterConfig?.color || '#666',
      type: zepNode.type,
      cluster,
      validated: Boolean(zepNode.data?.validated),
      pending: Boolean(zepNode.data?.pending)
    }
  })

  // Ensure user node exists
  if (!nodes.some(n => n.id === 'user')) {
    nodes.unshift({
      id: 'user',
      name: 'You',
      val: 50,
      color: '#8B5CF6',
      type: 'user',
      cluster: 'center'
    })
  }

  // Convert edges to links
  const links: GraphLink[] = zepData.edges.map(edge => ({
    source: edge.source,
    target: edge.target,
    width: edge.weight ? Math.min(edge.weight * 2, 5) : 2,
    distance: 150
  }))

  return { nodes, links }
}

function detectCluster(node: ZepGraphNode, userType: 'candidate' | 'client'): ClusterType {
  // Use cluster from node data if available
  if (node.data?.cluster) {
    return node.data.cluster as ClusterType
  }

  // Fallback: Detect based on type
  if (userType === 'candidate') {
    if (node.type === 'skill') return 'skills'
    if (node.type === 'company') return 'experience'
    if (node.type === 'job') return 'career_interests'
    return 'preferences'
  } else {
    if (node.type === 'preference') return 'requirements'
    if (node.type === 'user') return 'candidate_matches'
    return 'culture_fit'
  }
}

function isFirstNodeInCluster(node: GraphNode, allNodes: GraphNode[]): boolean {
  // Only show cluster label for the first node in that cluster
  const nodesInCluster = allNodes.filter(n => n.cluster === node.cluster && n.cluster !== 'center')
  return nodesInCluster.length > 0 && nodesInCluster[0].id === node.id
}
