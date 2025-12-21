'use client'

import { useRef, useEffect, useState, useCallback, forwardRef, useImperativeHandle } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import * as THREE from 'three'
import SpriteText from 'three-spritetext'

interface GraphData {
  nodes: Array<{
    id: string
    type: 'user' | 'skill' | 'job' | 'company' | 'preference' | 'fact'
    label: string
    data?: Record<string, unknown>
  }>
  edges: Array<{
    source: string
    target: string
    type: string
    weight?: number
    label?: string
  }>
}

interface Props {
  data?: GraphData
}

// Node colors matching existing KnowledgeGraph.tsx
const NODE_COLORS: Record<string, string> = {
  user: '#8B5CF6',      // Purple
  skill: '#10B981',     // Emerald
  company: '#F59E0B',   // Amber
  job: '#3B82F6',       // Blue
  preference: '#EC4899', // Pink
  fact: '#6366F1'       // Indigo
}

// Node sizes
const NODE_SIZES: Record<string, number> = {
  user: 20,        // Largest - center of universe
  skill: 12,
  company: 14,
  job: 11,
  preference: 10,
  fact: 10
}

const ForceGraph3DRepo = forwardRef<any, Props>(({ data }, ref) => {
  const graphRef = useRef<any>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const previousNodeCount = useRef<number>(0)
  const [stableGraphData, setStableGraphData] = useState<any>({ nodes: [], links: [] })
  const [hasError, setHasError] = useState(false)

  // Expose graphRef to parent
  useImperativeHandle(ref, () => graphRef.current)

  // Error boundary
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      if (error.message.includes('tick')) {
        console.error('[ForceGraph3D] Caught tick error, using fallback')
        setHasError(true)
        error.preventDefault()
      }
    }
    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])

  // Debounce graph data updates to prevent flickering
  useEffect(() => {
    const timer = setTimeout(() => {
      const newGraphData = {
        nodes: data?.nodes || [],
        links: data?.edges.map(edge => ({
          source: edge.source,
          target: edge.target,
          label: edge.label
        })) || []
      }

      // Only update if actually changed
      const dataChanged = JSON.stringify(newGraphData) !== JSON.stringify(stableGraphData)
      if (dataChanged) {
        setStableGraphData(newGraphData)
      }
    }, 500) // 500ms debounce

    return () => clearTimeout(timer)
  }, [data, stableGraphData])

  // Use stable graph data for rendering
  const graphData = stableGraphData

  // Initial camera setup - focus on center
  useEffect(() => {
    if (graphRef.current && !isInitialized && graphData.nodes.length > 0) {
      try {
        const camera = graphRef.current.camera()
        if (camera) {
          camera.position.set(0, 0, 400)
          camera.lookAt(0, 0, 0)
        }

        // Add ambient lighting
        const scene = graphRef.current.scene()
        if (scene) {
          const ambientLight = new THREE.AmbientLight(0x404040, 2)
          scene.add(ambientLight)

          // Add accent lights
          const light1 = new THREE.PointLight(0xFFFFFF, 1, 1000)
          light1.position.set(100, 100, 100)
          scene.add(light1)

          const light2 = new THREE.PointLight(0x8B5CF6, 0.5, 1000)
          light2.position.set(-100, -100, 100)
          scene.add(light2)
        }

        setIsInitialized(true)
      } catch (error) {
        console.error('[ForceGraph3D] Error initializing:', error)
      }
    }
  }, [isInitialized, graphData.nodes.length])

  // Center user node and arrange others in clusters
  useEffect(() => {
    if (!graphRef.current || !data?.nodes || !isInitialized) return

    try {
      const userNode = data.nodes.find(n => n.type === 'user') as any
      if (!userNode) return

      // Force user node to center
      userNode.fx = 0
      userNode.fy = 0
      userNode.fz = 0

      // Position other nodes in circular clusters by type
      const nodesByType: Record<string, any[]> = {}
      data.nodes.forEach(node => {
        if (node.type !== 'user') {
          if (!nodesByType[node.type]) nodesByType[node.type] = []
          nodesByType[node.type].push(node)
        }
      })

      // Arrange node types in a circle around center
      const nodeTypes = Object.keys(nodesByType)
      if (nodeTypes.length === 0) return

      const angleStep = (Math.PI * 2) / nodeTypes.length
      const clusterRadius = 150 // Distance from center

      nodeTypes.forEach((type, typeIndex) => {
        const angle = angleStep * typeIndex
        const clusterX = Math.cos(angle) * clusterRadius
        const clusterZ = Math.sin(angle) * clusterRadius

        // Position nodes within this cluster
        const nodesInCluster = nodesByType[type]
        nodesInCluster.forEach((node, nodeIndex) => {
          const subAngle = (Math.PI * 2 * nodeIndex) / nodesInCluster.length
          const subRadius = 30 + Math.random() * 20 // Vary distance within cluster

          node.fx = clusterX + Math.cos(subAngle) * subRadius
          node.fy = Math.sin(subAngle) * subRadius * 0.5 // Flatten vertically
          node.fz = clusterZ + Math.sin(subAngle) * subRadius
        })
      })

      // Re-heat simulation to apply new positions (only if graph is ready)
      if (graphRef.current?.d3ReheatSimulation) {
        graphRef.current.d3ReheatSimulation()
      }
    } catch (error) {
      console.error('[ForceGraph3D] Error positioning nodes:', error)
    }
  }, [data?.nodes, isInitialized])

  // Animate new nodes (spawn effect)
  useEffect(() => {
    if (!data?.nodes) return

    const currentNodeCount = data.nodes.length
    if (currentNodeCount > previousNodeCount.current) {
      // New nodes added!
      const newNodes = data.nodes.slice(previousNodeCount.current)
      newNodes.forEach(node => {
        // Mark as newly added for visual effect
        ;(node as any).__isNew = true
        setTimeout(() => {
          ;(node as any).__isNew = false
        }, 2000) // Flash for 2 seconds
      })
    }
    previousNodeCount.current = currentNodeCount
  }, [data?.nodes?.length])

  // Node appearance
  const nodeThreeObject = useCallback((node: any) => {
    const isNew = node.__isNew
    const baseColor = NODE_COLORS[node.type] || '#666666'
    const size = NODE_SIZES[node.type] || 10

    // Create sphere for node
    const geometry = new THREE.SphereGeometry(size, 16, 16)
    const material = new THREE.MeshLambertMaterial({
      color: baseColor,
      emissive: isNew ? baseColor : '#000000',
      emissiveIntensity: isNew ? 0.5 : 0
    })
    const mesh = new THREE.Mesh(geometry, material)

    // Add label
    const sprite = new SpriteText(node.label)
    sprite.color = '#FFFFFF'
    sprite.textHeight = 8
    sprite.position.set(0, size + 10, 0)
    mesh.add(sprite)

    // Add glow for user node
    if (node.type === 'user') {
      const glowGeometry = new THREE.SphereGeometry(size * 1.3, 16, 16)
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.3
      })
      const glow = new THREE.Mesh(glowGeometry, glowMaterial)
      mesh.add(glow)

      // Pulse animation for user node
      const pulse = () => {
        if (glow) {
          glow.scale.set(1 + Math.sin(Date.now() / 500) * 0.1, 1 + Math.sin(Date.now() / 500) * 0.1, 1 + Math.sin(Date.now() / 500) * 0.1)
        }
        requestAnimationFrame(pulse)
      }
      pulse()
    }

    return mesh
  }, [])

  // Link appearance
  const linkColor = useCallback(() => {
    return 'rgba(255, 255, 255, 0.2)'
  }, [])

  const linkWidth = useCallback(() => {
    return 1
  }, [])

  // Handle node click
  const handleNodeClick = useCallback((node: any) => {
    if (!graphRef.current) return

    // Camera zoom to node
    const distance = 150
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z)

    graphRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
      node, // Look at node
      1500 // Animation duration
    )
  }, [])

  // Debug logging
  useEffect(() => {
    console.log('[ForceGraph3D] Rendering with data:', {
      nodeCount: graphData.nodes?.length || 0,
      linkCount: graphData.links?.length || 0,
      nodes: graphData.nodes?.map(n => n.label)
    })
  }, [graphData])

  // Get window dimensions safely
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth * 0.6,
        height: window.innerHeight
      })

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth * 0.6,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Don't render if no nodes
  if (!graphData.nodes || graphData.nodes.length === 0) {
    return (
      <div style={{ width: '100%', height: '100vh' }} className="flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-4xl mb-2">🌌</div>
          <div>Loading universe...</div>
        </div>
      </div>
    )
  }

  // Fallback to 2D visualization if 3D fails
  if (hasError) {
    return (
      <div style={{ width: '100%', height: '100vh' }} className="flex items-center justify-center p-8">
        <div className="text-white text-center max-w-2xl">
          <div className="text-2xl font-bold mb-4">Your Knowledge Graph</div>
          <div className="grid grid-cols-3 gap-4">
            {graphData.nodes.filter((n: any) => n.type !== 'user').map((node: any) => (
              <div key={node.id} className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30">
                <div className="text-sm font-medium">{node.label}</div>
                <div className="text-xs text-purple-300 mt-1">{node.type}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-purple-400">
            {graphData.nodes.length} nodes • {graphData.links.length} connections
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ForceGraph3D
        ref={graphRef}
        graphData={graphData}
        nodeThreeObject={nodeThreeObject}
        linkColor={linkColor}
        linkWidth={linkWidth}
        linkOpacity={0.6}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.005}
        onNodeClick={handleNodeClick}
        backgroundColor="#000000"
        showNavInfo={false}
        enableNavigationControls={true}
        width={dimensions.width}
        height={dimensions.height}
        warmupTicks={50}
        cooldownTime={1000}
      />
    </div>
  )
})

ForceGraph3DRepo.displayName = 'ForceGraph3DRepo'

export default ForceGraph3DRepo
