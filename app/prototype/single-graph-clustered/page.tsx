'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

// SINGLE GRAPH with RADIAL CLUSTERS
// User at center, distinct clusters radiating outward

export default function SingleGraphClustered() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const fgRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth - 80,
        height: window.innerHeight - 280
      })
    }
  }, [])

  useEffect(() => {
    if (fgRef.current) {
      // Zoom out MORE to make clusters use 30%+ of screen
      fgRef.current.zoom(0.25, 1000)
    }
  }, [])

  const [graphData, setGraphData] = useState({
    nodes: [
      // CENTER: User node
      { id: 'user', name: 'You', val: 50, color: '#8B5CF6', type: 'user', cluster: 'center' },

      // CLUSTER 1: Skills (Top-Left) - BLUE
      { id: 'skill-1', name: 'M&A', val: 20, color: '#3B82F6', type: 'skill', cluster: 'skills' },
      { id: 'skill-2', name: 'Fundraising', val: 19, color: '#3B82F6', type: 'skill', cluster: 'skills' },
      { id: 'skill-3', name: 'Leadership', val: 21, color: '#3B82F6', type: 'skill', cluster: 'skills' },
      { id: 'skill-4', name: 'Strategy', val: 18, color: '#3B82F6', type: 'skill', cluster: 'skills' },
      { id: 'skill-5', name: 'FP&A', val: 17, color: '#3B82F6', type: 'skill', cluster: 'skills' },
      { id: 'skill-6', name: 'Board Relations', val: 16, color: '#3B82F6', type: 'skill', cluster: 'skills' },

      // CLUSTER 2: Experience (Top-Right) - GREEN
      { id: 'exp-1', name: 'Stripe (CFO)', val: 22, color: '#10B981', type: 'experience', cluster: 'experience' },
      { id: 'exp-2', name: 'Monzo (VP)', val: 21, color: '#10B981', type: 'experience', cluster: 'experience' },
      { id: 'exp-3', name: 'KPMG', val: 19, color: '#10B981', type: 'experience', cluster: 'experience' },
      { id: 'exp-4', name: '15+ years', val: 18, color: '#10B981', type: 'experience', cluster: 'experience' },
      { id: 'exp-5', name: 'Scale-up', val: 17, color: '#10B981', type: 'experience', cluster: 'experience' },

      // CLUSTER 3: Job Interests (Bottom) - PINK
      { id: 'role-1', name: 'CFO', val: 24, color: '#EC4899', type: 'role', cluster: 'jobs' },
      { id: 'role-2', name: 'VP Finance', val: 22, color: '#EC4899', type: 'role', cluster: 'jobs' },
      { id: 'role-3', name: 'COO', val: 20, color: '#EC4899', type: 'role', cluster: 'jobs' },
      { id: 'comp-1', name: 'Revolut', val: 21, color: '#F59E0B', type: 'company', cluster: 'jobs' },
      { id: 'comp-2', name: 'Wise', val: 20, color: '#F59E0B', type: 'company', cluster: 'jobs' },
      { id: 'comp-3', name: 'Klarna', val: 19, color: '#F59E0B', type: 'company', cluster: 'jobs' },

      // CLUSTER 4: Preferences (Left) - ORANGE
      { id: 'loc-1', name: 'London', val: 18, color: '#F97316', type: 'location', cluster: 'preferences' },
      { id: 'loc-2', name: 'Remote', val: 19, color: '#F97316', type: 'location', cluster: 'preferences' },
      { id: 'loc-3', name: 'Paris', val: 17, color: '#F97316', type: 'location', cluster: 'preferences' },
      { id: 'pri-1', name: 'Impact', val: 17, color: '#F97316', type: 'priority', cluster: 'preferences' },
      { id: 'pri-2', name: 'Equity', val: 16, color: '#F97316', type: 'priority', cluster: 'preferences' },
    ],
    links: [
      // LONG LINES: User to cluster anchors (2X BIGGER for desktop spread)
      { source: 'user', target: 'skill-1', distance: 600, width: 3, type: 'primary' },
      { source: 'user', target: 'exp-1', distance: 600, width: 3, type: 'primary' },
      { source: 'user', target: 'role-1', distance: 600, width: 3, type: 'primary' },
      { source: 'user', target: 'loc-1', distance: 600, width: 3, type: 'primary' },

      // SHORT LINES: Within skills cluster (2X bigger spacing)
      { source: 'skill-1', target: 'skill-2', distance: 150, width: 1, type: 'cluster' },
      { source: 'skill-1', target: 'skill-3', distance: 150, width: 1, type: 'cluster' },
      { source: 'skill-2', target: 'skill-4', distance: 150, width: 1, type: 'cluster' },
      { source: 'skill-3', target: 'skill-5', distance: 150, width: 1, type: 'cluster' },
      { source: 'skill-4', target: 'skill-6', distance: 150, width: 1, type: 'cluster' },

      // SHORT LINES: Within experience cluster
      { source: 'exp-1', target: 'exp-2', distance: 150, width: 1, type: 'cluster' },
      { source: 'exp-1', target: 'exp-3', distance: 150, width: 1, type: 'cluster' },
      { source: 'exp-2', target: 'exp-4', distance: 150, width: 1, type: 'cluster' },
      { source: 'exp-3', target: 'exp-5', distance: 150, width: 1, type: 'cluster' },

      // SHORT LINES: Within jobs cluster
      { source: 'role-1', target: 'role-2', distance: 150, width: 1, type: 'cluster' },
      { source: 'role-1', target: 'comp-1', distance: 150, width: 1, type: 'cluster' },
      { source: 'role-2', target: 'role-3', distance: 150, width: 1, type: 'cluster' },
      { source: 'role-2', target: 'comp-2', distance: 150, width: 1, type: 'cluster' },
      { source: 'role-3', target: 'comp-3', distance: 150, width: 1, type: 'cluster' },

      // SHORT LINES: Within preferences cluster
      { source: 'loc-1', target: 'loc-2', distance: 150, width: 1, type: 'cluster' },
      { source: 'loc-1', target: 'loc-3', distance: 150, width: 1, type: 'cluster' },
      { source: 'loc-2', target: 'pri-1', distance: 150, width: 1, type: 'cluster' },
      { source: 'loc-3', target: 'pri-2', distance: 150, width: 1, type: 'cluster' },
    ]
  })

  const addSkill = () => {
    const newSkill = {
      id: `skill-${Date.now()}`,
      name: 'Risk Mgmt',
      val: 17,
      color: '#3B82F6',
      type: 'skill',
      cluster: 'skills'
    }
    setGraphData(prev => ({
      nodes: [...prev.nodes, newSkill],
      links: [...prev.links, {
        source: 'skill-1',
        target: newSkill.id,
        distance: 50,
        width: 1,
        type: 'cluster'
      }]
    }))
  }

  const addCompany = () => {
    const newComp = {
      id: `comp-${Date.now()}`,
      name: 'N26',
      val: 19,
      color: '#F59E0B',
      type: 'company',
      cluster: 'jobs'
    }
    setGraphData(prev => ({
      nodes: [...prev.nodes, newComp],
      links: [...prev.links, {
        source: 'role-1',
        target: newComp.id,
        distance: 50,
        width: 1,
        type: 'cluster'
      }]
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-6 border-b border-purple-500/30">
        <h1 className="text-4xl font-bold mb-2">
          Single Graph with Radial Clusters
        </h1>
        <p className="text-purple-300 mb-4">
          One unified force graph - user at center, distinct clusters radiating outward
        </p>
        <div className="flex gap-3">
          <button
            onClick={addSkill}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-sm"
          >
            + Add Skill (Blue Cluster)
          </button>
          <button
            onClick={addCompany}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-sm"
          >
            + Add Company (Jobs Cluster)
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 py-4 flex gap-6 text-sm border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <span>You (Center)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <span>Skills Cluster (Top-Left)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span>Experience Cluster (Top-Right)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-pink-500"></div>
          <span>Jobs Cluster (Bottom)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <span>Preferences Cluster (Left)</span>
        </div>
      </div>

      {/* Single large graph */}
      <div className="p-6 flex items-center justify-center" style={{ height: 'calc(100vh - 240px)' }}>
        <div className="bg-black rounded-2xl border border-purple-500/30" style={{ width: '100%', height: '100%' }}>
          <ForceGraph2D
            ref={fgRef}
            graphData={graphData}
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

              // Node label
              ctx.font = `${(node.type === 'user' ? 14 : 11) / globalScale}px Sans-Serif`
              ctx.textAlign = 'center'
              ctx.fillStyle = '#fff'
              ctx.fillText(node.name, node.x, node.y + node.val / 2 + 14 / globalScale)

              // CLUSTER LABELS - Show what each cluster represents
              if (node.id === 'skill-1') {
                ctx.font = `${16 / globalScale}px Sans-Serif`
                ctx.fillStyle = '#3B82F6'
                ctx.textAlign = 'center'
                ctx.fillText('MY SKILLS', node.x, node.y - 80 / globalScale)
              }
              if (node.id === 'exp-1') {
                ctx.font = `${16 / globalScale}px Sans-Serif`
                ctx.fillStyle = '#10B981'
                ctx.textAlign = 'center'
                ctx.fillText('MY EXPERIENCE', node.x, node.y - 80 / globalScale)
              }
              if (node.id === 'role-1') {
                ctx.font = `${16 / globalScale}px Sans-Serif`
                ctx.fillStyle = '#EC4899'
                ctx.textAlign = 'center'
                ctx.fillText('CAREER INTERESTS', node.x, node.y - 80 / globalScale)
              }
              if (node.id === 'loc-1') {
                ctx.font = `${16 / globalScale}px Sans-Serif`
                ctx.fillStyle = '#F97316'
                ctx.textAlign = 'center'
                ctx.fillText('PREFERENCES', node.x, node.y - 80 / globalScale)
              }
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 pb-4 flex gap-8 text-sm text-gray-400">
        <div>Total nodes: <span className="text-white font-semibold">{graphData.nodes.length}</span></div>
        <div>Skills: <span className="text-blue-400 font-semibold">{graphData.nodes.filter(n => n.cluster === 'skills').length}</span></div>
        <div>Experience: <span className="text-green-400 font-semibold">{graphData.nodes.filter(n => n.cluster === 'experience').length}</span></div>
        <div>Jobs: <span className="text-pink-400 font-semibold">{graphData.nodes.filter(n => n.cluster === 'jobs').length}</span></div>
        <div>Preferences: <span className="text-orange-400 font-semibold">{graphData.nodes.filter(n => n.cluster === 'preferences').length}</span></div>
      </div>
    </div>
  )
}
