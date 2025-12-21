'use client'

import { useEffect, useRef } from 'react'
import { Network } from 'vis-network/standalone'

interface GraphNode {
  id: string
  type: string
  label: string
}

interface GraphEdge {
  source: string
  target: string
  type?: string
  label?: string
}

interface GraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

interface VisNetworkProps {
  data: GraphData
  height?: number
}

const NODE_COLORS: Record<string, string> = {
  user: '#8B5CF6',
  skill: '#3B82F6',
  preference: '#EC4899',
  job: '#10B981',
  company: '#F59E0B',
  fact: '#6366F1',
}

export default function VisNetworkGraph({ data, height = 500 }: VisNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const networkRef = useRef<Network | null>(null)

  useEffect(() => {
    if (!containerRef.current || !data.nodes.length) return

    // Convert data to Vis.js format
    const visNodes = data.nodes.map(node => ({
      id: node.id,
      label: node.label,
      color: {
        background: NODE_COLORS[node.type] || '#666',
        border: NODE_COLORS[node.type] || '#666',
        highlight: {
          background: NODE_COLORS[node.type] || '#666',
          border: '#fff',
        }
      },
      font: {
        color: '#fff',
        size: node.type === 'user' ? 18 : 14,
        bold: node.type === 'user',
      },
      size: node.type === 'user' ? 30 : 20,
      fixed: node.type === 'user' ? { x: true, y: true } : false,
    }))

    const visEdges = data.edges.map((edge, i) => ({
      id: `edge-${i}`,
      from: edge.source,
      to: edge.target,
      color: {
        color: '#666',
        highlight: '#8B5CF6',
      },
      smooth: {
        type: 'cubicBezier',
        roundness: 0.4,
      },
      width: 1.5,
    }))

    // Network options
    const options = {
      nodes: {
        shape: 'dot',
        borderWidth: 2,
        shadow: {
          enabled: true,
          color: 'rgba(0,0,0,0.3)',
          size: 10,
        },
      },
      edges: {
        arrows: {
          to: {
            enabled: false,
          },
        },
      },
      physics: {
        enabled: true,
        solver: 'forceAtlas2Based',
        forceAtlas2Based: {
          gravitationalConstant: -50,
          centralGravity: 0.01,
          springLength: 150,
          springConstant: 0.08,
          damping: 0.4,
        },
        maxVelocity: 50,
        minVelocity: 0.1,
        timestep: 0.5,
        stabilization: {
          enabled: true,
          iterations: 150,
        },
      },
      interaction: {
        dragNodes: true,
        dragView: true,
        zoomView: true,
        hover: true,
        tooltipDelay: 200,
      },
    }

    // Create network
    try {
      networkRef.current = new Network(
        containerRef.current,
        { nodes: visNodes, edges: visEdges },
        options
      )

      // Center user node
      const userNode = data.nodes.find(n => n.type === 'user')
      if (userNode) {
        networkRef.current.moveTo({
          position: { x: 0, y: 0 },
          scale: 1,
        })
      }
    } catch (error) {
      console.error('[VisNetwork] Error:', error)
    }

    return () => {
      networkRef.current?.destroy()
    }
  }, [data])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: `${height}px`,
        background: '#000',
      }}
    />
  )
}
