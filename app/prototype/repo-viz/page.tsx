'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import KnowledgeGraph from '@/components/KnowledgeGraph'

// Dynamically import to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })
const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), { ssr: false })
const VisNetwork = dynamic(() => import('@/components/prototype/VisNetworkGraph'), { ssr: false })

// Mock data for testing
const MOCK_GRAPH = {
  nodes: [
    { id: 'user-1', type: 'user' as const, label: 'You' },
    { id: 'role-1', type: 'preference' as const, label: 'CFO' },
    { id: 'role-2', type: 'preference' as const, label: 'CTO' },
    { id: 'role-3', type: 'preference' as const, label: 'COO' },
    { id: 'loc-1', type: 'preference' as const, label: 'London' },
    { id: 'loc-2', type: 'preference' as const, label: 'Paris' },
    { id: 'skill-1', type: 'skill' as const, label: 'Leadership' },
    { id: 'skill-2', type: 'skill' as const, label: 'Strategy' },
  ],
  edges: [
    { source: 'user-1', target: 'role-1', type: 'wants', label: 'wants to be' },
    { source: 'user-1', target: 'role-2', type: 'wants', label: 'wants to be' },
    { source: 'user-1', target: 'role-3', type: 'wants', label: 'wants to be' },
    { source: 'user-1', target: 'loc-1', type: 'prefers', label: 'prefers' },
    { source: 'user-1', target: 'loc-2', type: 'prefers', label: 'prefers' },
    { source: 'user-1', target: 'skill-1', type: 'has', label: 'has' },
    { source: 'user-1', target: 'skill-2', type: 'has', label: 'has' },
  ]
}

// Colors for nodes
const NODE_COLORS: Record<string, string> = {
  user: '#8B5CF6',
  skill: '#3B82F6',
  preference: '#EC4899',
  job: '#10B981',
  company: '#F59E0B',
}

export default function RepoVizPrototype() {
  const [graphData, setGraphData] = useState(MOCK_GRAPH)

  // Test button to add new node (for Stage 2 testing)
  const addTestNode = () => {
    const newNode = {
      id: `test-${Date.now()}`,
      type: 'preference' as const,
      label: 'CEO'
    }

    setGraphData(prev => ({
      nodes: [...prev.nodes, newNode],
      edges: [
        ...prev.edges,
        { source: 'user-1', target: newNode.id, type: 'wants', label: 'wants to be' }
      ]
    }))
  }

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Graph Visualization Comparison
        </h1>
        <p className="text-purple-300">
          Testing 3 libraries side-by-side - which one works best?
        </p>
      </div>

      {/* Controls */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={addTestNode}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold"
        >
          Add CEO Node (Test All)
        </button>
        <div className="text-white/60 text-sm flex items-center">
          Current nodes: {graphData.nodes.length}
        </div>
      </div>

      {/* Three visualizations */}
      <div className="grid grid-cols-1 gap-8">
        {/* 1. Custom SVG (Basic) */}
        <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500/30">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            1. Custom SVG (Current)
          </h2>
          <p className="text-purple-300 text-sm mb-4">
            ❌ Too basic - not draggable, not impressive
          </p>
          <div className="bg-white rounded-xl overflow-hidden">
            <KnowledgeGraph
              data={graphData}
              width={1200}
              height={500}
            />
          </div>
        </div>

        {/* 2. React Force Graph 2D */}
        <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500/30">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            2. React Force Graph 2D ⭐
          </h2>
          <p className="text-purple-300 text-sm mb-4">
            ⚡ Winner! Techy, draggable, interactive
          </p>
          <div className="bg-gray-50 rounded-xl overflow-hidden" style={{ height: 500 }}>
            <ForceGraph2D
              graphData={{
                nodes: graphData.nodes.map(n => ({ ...n, name: n.label })),
                links: graphData.edges.map(e => ({ ...e }))
              }}
              nodeLabel="name"
              nodeColor={(node: any) => NODE_COLORS[node.type] || '#666'}
              nodeRelSize={8}
              linkColor={() => '#666'}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              width={1200}
              height={500}
            />
          </div>
        </div>

        {/* 2.5 React Force Graph 3D */}
        <div className="bg-indigo-900/20 rounded-2xl p-6 border border-indigo-500/30">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            2.5 React Force Graph 3D 🚀
          </h2>
          <p className="text-indigo-300 text-sm mb-4">
            🌌 Full 3D - orbit controls, immersive!
          </p>
          <div className="bg-gray-50 rounded-xl overflow-hidden" style={{ height: 500 }}>
            <ForceGraph3D
              graphData={{
                nodes: graphData.nodes.map(n => ({ ...n, name: n.label })),
                links: graphData.edges.map(e => ({ ...e }))
              }}
              nodeLabel="name"
              nodeColor={(node: any) => NODE_COLORS[node.type] || '#666'}
              nodeRelSize={8}
              linkColor={() => '#666'}
              backgroundColor="#000000"
              enableNodeDrag={true}
              width={1200}
              height={500}
            />
          </div>
        </div>

        {/* 3. Vis Network */}
        <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500/30">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            3. Vis.js Network
          </h2>
          <p className="text-purple-300 text-sm mb-4">
            🚀 Professional grade - used in many projects
          </p>
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <VisNetwork
              data={graphData}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-green-900/20 rounded-xl p-6 border border-green-500/30">
        <h3 className="text-lg font-semibold text-green-200 mb-4">
          🧪 Test Instructions
        </h3>
        <div className="space-y-2 text-sm text-green-100">
          <p>1. Try dragging nodes in each graph</p>
          <p>2. Click "Add CEO Node" to test updates</p>
          <p>3. Zoom and pan in each one</p>
          <p>4. Tell me which one you like best!</p>
          <p className="text-green-300 font-semibold mt-4">
            → Let's proceed until one breaks (or all work!)
          </p>
        </div>
      </div>
    </div>
  )
}
