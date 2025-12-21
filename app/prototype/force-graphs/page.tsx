'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// Import ALL React Force Graph variants
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })
const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), { ssr: false })
const ForceGraphVRWrapper = dynamic(() => import('@/components/prototype/ForceGraphVRWrapper'), { ssr: false })
const ForceGraphARWrapper = dynamic(() => import('@/components/prototype/ForceGraphARWrapper'), { ssr: false })

// Rich dataset (reusing from mega-viz)
const RICH_GRAPH_DATA = {
  nodes: [
    { id: 'user', name: 'Sarah Chen', val: 35, color: '#8B5CF6' },
    // Roles
    { id: 'role-1', name: 'CFO', val: 22, color: '#EC4899' },
    { id: 'role-2', name: 'COO', val: 20, color: '#EC4899' },
    { id: 'role-3', name: 'CTO', val: 18, color: '#EC4899' },
    // Locations
    { id: 'loc-1', name: 'London', val: 18, color: '#10B981' },
    { id: 'loc-2', name: 'Paris', val: 17, color: '#10B981' },
    { id: 'loc-3', name: 'Dubai', val: 17, color: '#10B981' },
    { id: 'loc-4', name: 'Singapore', val: 16, color: '#10B981' },
    { id: 'loc-5', name: 'New York', val: 18, color: '#10B981' },
    // Skills
    { id: 'skill-1', name: 'M&A', val: 16, color: '#3B82F6' },
    { id: 'skill-2', name: 'Leadership', val: 17, color: '#3B82F6' },
    { id: 'skill-3', name: 'Strategy', val: 16, color: '#3B82F6' },
    { id: 'skill-4', name: 'Fundraising', val: 15, color: '#3B82F6' },
    { id: 'skill-5', name: 'FP&A', val: 16, color: '#3B82F6' },
    // Companies
    { id: 'comp-1', name: 'Stripe', val: 20, color: '#F59E0B' },
    { id: 'comp-2', name: 'Revolut', val: 20, color: '#F59E0B' },
    { id: 'comp-3', name: 'Monzo', val: 19, color: '#F59E0B' },
    { id: 'comp-4', name: 'Wise', val: 19, color: '#F59E0B' },
    { id: 'comp-5', name: 'Klarna', val: 18, color: '#F59E0B' },
  ],
  links: [
    { source: 'user', target: 'role-1' },
    { source: 'user', target: 'role-2' },
    { source: 'user', target: 'role-3' },
    { source: 'user', target: 'loc-1' },
    { source: 'user', target: 'loc-2' },
    { source: 'user', target: 'loc-3' },
    { source: 'user', target: 'loc-4' },
    { source: 'user', target: 'loc-5' },
    { source: 'user', target: 'skill-1' },
    { source: 'user', target: 'skill-2' },
    { source: 'user', target: 'skill-3' },
    { source: 'user', target: 'skill-4' },
    { source: 'user', target: 'skill-5' },
    { source: 'user', target: 'comp-1' },
    { source: 'user', target: 'comp-2' },
    { source: 'user', target: 'comp-3' },
    { source: 'user', target: 'comp-4' },
    { source: 'user', target: 'comp-5' },
  ]
}

export default function ForceGraphsComparison() {
  const [graphData, setGraphData] = useState(RICH_GRAPH_DATA)

  const addNode = () => {
    const newNode = {
      id: `test-${Date.now()}`,
      name: 'N26',
      val: 18,
      color: '#F59E0B'
    }
    setGraphData(prev => ({
      nodes: [...prev.nodes, newNode],
      links: [...prev.links, { source: 'user', target: newNode.id }]
    }))
  }

  return (
    <div className="min-h-screen bg-black p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          React Force Graph: All Variants (2D, 3D, VR, AR)
        </h1>
        <p className="text-purple-300 mb-4">
          Same dataset ({graphData.nodes.length} nodes), four different renderers
        </p>
        <button
          onClick={addNode}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
        >
          Add Node (Test All)
        </button>
      </div>

      {/* Side by side comparison */}
      <div className="grid grid-cols-2 gap-8">
        {/* 2D Force Graph */}
        <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            ⭐ 2D Force Graph (Recommended)
          </h2>
          <div className="space-y-2 text-sm text-purple-300 mb-4">
            <div>✅ Drag nodes to reposition</div>
            <div>✅ Zoom with scroll</div>
            <div>✅ Pan by dragging background</div>
            <div>✅ Smooth, no lag</div>
          </div>
          <div className="bg-black rounded-xl" style={{ height: 700 }}>
            <ForceGraph2D
              graphData={graphData}
              nodeLabel="name"
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              width={650}
              height={700}
              nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                // Draw circle
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
                ctx.fillStyle = node.color
                ctx.fill()

                // Draw label
                ctx.font = `${12 / globalScale}px Sans-Serif`
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.fillStyle = '#fff'
                ctx.fillText(node.name, node.x, node.y + node.val / 2 + 12 / globalScale)
              }}
            />
          </div>
        </div>

        {/* 3D Force Graph */}
        <div className="bg-indigo-900/20 rounded-2xl p-6 border border-indigo-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            🚀 3D Force Graph (Immersive)
          </h2>
          <div className="space-y-2 text-sm text-indigo-300 mb-4">
            <div>✅ Drag to orbit</div>
            <div>✅ Scroll to zoom</div>
            <div>✅ Drag nodes in 3D space</div>
            <div>⚠️ More complex (3D rendering)</div>
          </div>
          <div className="bg-black rounded-xl" style={{ height: 700 }}>
            <ForceGraph3D
              graphData={graphData}
              nodeLabel="name"
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              backgroundColor="#000000"
              enableNodeDrag={true}
              width={650}
              height={700}
            />
          </div>
        </div>

        {/* VR Force Graph */}
        <div className="bg-cyan-900/20 rounded-2xl p-6 border border-cyan-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            🥽 VR Force Graph (Virtual Reality)
          </h2>
          <div className="space-y-2 text-sm text-cyan-300 mb-4">
            <div>✅ Full VR experience</div>
            <div>✅ Requires VR headset</div>
            <div>✅ Immersive 3D navigation</div>
            <div>⚠️ WebXR required</div>
          </div>
          <div className="bg-black rounded-xl flex items-center justify-center" style={{ height: 700 }}>
            <ForceGraphVRWrapper
              graphData={graphData}
              width={650}
              height={700}
            />
          </div>
        </div>

        {/* AR Force Graph */}
        <div className="bg-emerald-900/20 rounded-2xl p-6 border border-emerald-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            📱 AR Force Graph (Augmented Reality)
          </h2>
          <div className="space-y-2 text-sm text-emerald-300 mb-4">
            <div>✅ Overlay on real world</div>
            <div>✅ Requires mobile device</div>
            <div>✅ AR camera integration</div>
            <div>⚠️ WebXR AR required</div>
          </div>
          <div className="bg-black rounded-xl flex items-center justify-center" style={{ height: 700 }}>
            <ForceGraphARWrapper
              graphData={graphData}
              width={650}
              height={700}
            />
          </div>
        </div>
      </div>

      {/* Verdict */}
      <div className="mt-8 bg-green-900/20 rounded-xl p-6 border border-green-500/30">
        <h3 className="text-xl font-bold text-green-200 mb-3">
          💡 Recommendations
        </h3>
        <div className="space-y-2 text-green-100">
          <p><strong>2D:</strong> Best for most dashboards - Better performance, clearer visualization, easier interaction</p>
          <p><strong>3D:</strong> Great for "wow factor" demos - More immersive exploration</p>
          <p><strong>VR:</strong> Ultimate immersion - Requires VR headset, best for spatial exploration experiences</p>
          <p><strong>AR:</strong> Real-world overlay - Requires mobile device with AR, good for on-site visualization</p>
        </div>
      </div>
    </div>
  )
}
