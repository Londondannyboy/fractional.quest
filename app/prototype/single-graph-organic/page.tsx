'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

// SINGLE GRAPH with ORGANIC CLUSTERS
// All clusters in same area but naturally separated, with occasional cross-links

export default function SingleGraphOrganic() {
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
      fgRef.current.zoom(0.3, 1000)
    }
  }, [])

  const [graphData, setGraphData] = useState({
    nodes: [
      // CENTER: User node
      { id: 'user', name: 'You', val: 55, color: '#8B5CF6', type: 'user', cluster: 'center' },

      // CLUSTER 1: Skills - BLUE
      { id: 'skills-anchor', name: 'Skills', val: 28, color: '#3B82F6', type: 'anchor', cluster: 'skills' },
      { id: 'skill-1', name: 'M&A', val: 18, color: '#60A5FA', type: 'skill', cluster: 'skills' },
      { id: 'skill-2', name: 'Fundraising', val: 17, color: '#60A5FA', type: 'skill', cluster: 'skills' },
      { id: 'skill-3', name: 'Leadership', val: 19, color: '#60A5FA', type: 'skill', cluster: 'skills' },
      { id: 'skill-4', name: 'Strategy', val: 16, color: '#60A5FA', type: 'skill', cluster: 'skills' },
      { id: 'skill-5', name: 'FP&A', val: 15, color: '#60A5FA', type: 'skill', cluster: 'skills' },

      // CLUSTER 2: Experience - GREEN
      { id: 'exp-anchor', name: 'Experience', val: 28, color: '#10B981', type: 'anchor', cluster: 'experience' },
      { id: 'exp-1', name: 'Stripe (CFO)', val: 20, color: '#34D399', type: 'experience', cluster: 'experience' },
      { id: 'exp-2', name: 'Monzo (VP)', val: 19, color: '#34D399', type: 'experience', cluster: 'experience' },
      { id: 'exp-3', name: 'KPMG', val: 17, color: '#34D399', type: 'experience', cluster: 'experience' },
      { id: 'exp-4', name: '15+ years', val: 16, color: '#34D399', type: 'experience', cluster: 'experience' },

      // CLUSTER 3: Job Interests - PINK
      { id: 'jobs-anchor', name: 'Looking For', val: 28, color: '#EC4899', type: 'anchor', cluster: 'jobs' },
      { id: 'role-1', name: 'CFO', val: 22, color: '#F472B6', type: 'role', cluster: 'jobs' },
      { id: 'role-2', name: 'VP Finance', val: 20, color: '#F472B6', type: 'role', cluster: 'jobs' },
      { id: 'comp-1', name: 'Revolut', val: 19, color: '#F59E0B', type: 'company', cluster: 'jobs' },
      { id: 'comp-2', name: 'Wise', val: 18, color: '#F59E0B', type: 'company', cluster: 'jobs' },
      { id: 'comp-3', name: 'Klarna', val: 17, color: '#F59E0B', type: 'company', cluster: 'jobs' },

      // CLUSTER 4: Preferences - ORANGE
      { id: 'prefs-anchor', name: 'Preferences', val: 28, color: '#F97316', type: 'anchor', cluster: 'preferences' },
      { id: 'loc-1', name: 'London', val: 16, color: '#FB923C', type: 'location', cluster: 'preferences' },
      { id: 'loc-2', name: 'Remote', val: 17, color: '#FB923C', type: 'location', cluster: 'preferences' },
      { id: 'pri-1', name: 'Impact', val: 15, color: '#FB923C', type: 'priority', cluster: 'preferences' },
      { id: 'pri-2', name: 'Equity', val: 14, color: '#FB923C', type: 'priority', cluster: 'preferences' },
    ],
    links: [
      // User to cluster anchors (2.5X BIGGER for desktop spread)
      { source: 'user', target: 'skills-anchor', distance: 500, width: 3, type: 'primary' },
      { source: 'user', target: 'exp-anchor', distance: 500, width: 3, type: 'primary' },
      { source: 'user', target: 'jobs-anchor', distance: 500, width: 3, type: 'primary' },
      { source: 'user', target: 'prefs-anchor', distance: 500, width: 3, type: 'primary' },

      // Skills cluster (2X bigger)
      { source: 'skills-anchor', target: 'skill-1', distance: 120, width: 2, type: 'cluster' },
      { source: 'skills-anchor', target: 'skill-2', distance: 120, width: 2, type: 'cluster' },
      { source: 'skills-anchor', target: 'skill-3', distance: 120, width: 2, type: 'cluster' },
      { source: 'skills-anchor', target: 'skill-4', distance: 120, width: 2, type: 'cluster' },
      { source: 'skills-anchor', target: 'skill-5', distance: 120, width: 2, type: 'cluster' },
      { source: 'skill-1', target: 'skill-2', distance: 80, width: 1, type: 'cluster' },
      { source: 'skill-3', target: 'skill-4', distance: 80, width: 1, type: 'cluster' },

      // Experience cluster (2X bigger)
      { source: 'exp-anchor', target: 'exp-1', distance: 120, width: 2, type: 'cluster' },
      { source: 'exp-anchor', target: 'exp-2', distance: 120, width: 2, type: 'cluster' },
      { source: 'exp-anchor', target: 'exp-3', distance: 120, width: 2, type: 'cluster' },
      { source: 'exp-anchor', target: 'exp-4', distance: 120, width: 2, type: 'cluster' },
      { source: 'exp-1', target: 'exp-2', distance: 80, width: 1, type: 'cluster' },

      // Jobs cluster (2X bigger)
      { source: 'jobs-anchor', target: 'role-1', distance: 120, width: 2, type: 'cluster' },
      { source: 'jobs-anchor', target: 'role-2', distance: 120, width: 2, type: 'cluster' },
      { source: 'jobs-anchor', target: 'comp-1', distance: 120, width: 2, type: 'cluster' },
      { source: 'jobs-anchor', target: 'comp-2', distance: 120, width: 2, type: 'cluster' },
      { source: 'jobs-anchor', target: 'comp-3', distance: 120, width: 2, type: 'cluster' },
      { source: 'role-1', target: 'comp-1', distance: 80, width: 1, type: 'cluster' },
      { source: 'role-2', target: 'comp-2', distance: 80, width: 1, type: 'cluster' },

      // Preferences cluster (2X bigger)
      { source: 'prefs-anchor', target: 'loc-1', distance: 120, width: 2, type: 'cluster' },
      { source: 'prefs-anchor', target: 'loc-2', distance: 120, width: 2, type: 'cluster' },
      { source: 'prefs-anchor', target: 'pri-1', distance: 120, width: 2, type: 'cluster' },
      { source: 'prefs-anchor', target: 'pri-2', distance: 120, width: 2, type: 'cluster' },
      { source: 'loc-1', target: 'loc-2', distance: 80, width: 1, type: 'cluster' },

      // CROSS-CLUSTER LINKS (show relationships, longer distances)
      { source: 'skill-1', target: 'exp-1', distance: 200, width: 1, type: 'cross', style: 'dashed' }, // M&A skill used at Stripe
      { source: 'skill-3', target: 'role-1', distance: 200, width: 1, type: 'cross', style: 'dashed' }, // Leadership needed for CFO
      { source: 'exp-1', target: 'comp-1', distance: 200, width: 1, type: 'cross', style: 'dashed' }, // Stripe experience relevant to Revolut
    ]
  })

  const addSkill = () => {
    const newSkill = {
      id: `skill-${Date.now()}`,
      name: 'Risk Mgmt',
      val: 16,
      color: '#60A5FA',
      type: 'skill',
      cluster: 'skills'
    }
    setGraphData(prev => ({
      nodes: [...prev.nodes, newSkill],
      links: [...prev.links, {
        source: 'skills-anchor',
        target: newSkill.id,
        distance: 60,
        width: 2,
        type: 'cluster'
      }]
    }))
  }

  const addCompany = () => {
    const newComp = {
      id: `comp-${Date.now()}`,
      name: 'N26',
      val: 17,
      color: '#F59E0B',
      type: 'company',
      cluster: 'jobs'
    }
    setGraphData(prev => ({
      nodes: [...prev.nodes, newComp],
      links: [...prev.links, {
        source: 'jobs-anchor',
        target: newComp.id,
        distance: 60,
        width: 2,
        type: 'cluster'
      }]
    }))
  }

  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header */}
      <div className="p-6 border-b border-purple-500/30">
        <h1 className="text-4xl font-bold mb-2">
          Single Graph with Organic Clusters
        </h1>
        <p className="text-purple-300 mb-4">
          One unified view - clusters naturally separated with cross-connections showing relationships
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
          <div className="w-4 h-4 rounded-full bg-blue-400"></div>
          <span>Skills Cluster</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-400"></div>
          <span>Experience Cluster</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-pink-400"></div>
          <span>Jobs Cluster</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-400"></div>
          <span>Preferences Cluster</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-gray-500" style={{ borderTop: '1px dashed #666' }}></div>
          <span className="text-gray-400">Cross-links</span>
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
            linkColor={(link: any) => {
              if (link.type === 'primary') return '#8B5CF6'
              if (link.type === 'cross') return '#666'
              return '#333'
            }}
            linkWidth={(link: any) => link.width || 1}
            linkLineDash={(link: any) => link.style === 'dashed' ? [5, 5] : null}
            backgroundColor="#000000"
            enableNodeDrag={true}
            enableZoomInteraction={true}
            enablePanInteraction={true}
            width={dimensions.width}
            height={dimensions.height}
            d3AlphaDecay={0.01}
            d3VelocityDecay={0.2}
            cooldownTicks={150}
            nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
              // Draw circle
              ctx.beginPath()
              ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
              ctx.fillStyle = node.color
              ctx.fill()

              // Add border for user/anchor nodes
              if (node.type === 'user' || node.type === 'anchor') {
                ctx.strokeStyle = '#fff'
                ctx.lineWidth = node.type === 'user' ? 3 : 2
                ctx.stroke()
              }

              // Node label
              const fontSize = node.type === 'user' ? 14 : node.type === 'anchor' ? 12 : 10
              ctx.font = `${fontSize / globalScale}px Sans-Serif`
              ctx.textAlign = 'center'
              ctx.fillStyle = '#fff'
              ctx.fillText(node.name, node.x, node.y + node.val / 2 + 14 / globalScale)

              // CLUSTER LABELS - Show what each cluster represents
              if (node.id === 'skills-anchor') {
                ctx.font = `bold ${18 / globalScale}px Sans-Serif`
                ctx.fillStyle = '#3B82F6'
                ctx.textAlign = 'center'
                ctx.fillText('↑ MY SKILLS', node.x, node.y - 60 / globalScale)
              }
              if (node.id === 'exp-anchor') {
                ctx.font = `bold ${18 / globalScale}px Sans-Serif`
                ctx.fillStyle = '#10B981'
                ctx.textAlign = 'center'
                ctx.fillText('↑ MY EXPERIENCE', node.x, node.y - 60 / globalScale)
              }
              if (node.id === 'jobs-anchor') {
                ctx.font = `bold ${18 / globalScale}px Sans-Serif`
                ctx.fillStyle = '#EC4899'
                ctx.textAlign = 'center'
                ctx.fillText('↑ CAREER INTERESTS', node.x, node.y - 60 / globalScale)
              }
              if (node.id === 'prefs-anchor') {
                ctx.font = `bold ${18 / globalScale}px Sans-Serif`
                ctx.fillStyle = '#F97316'
                ctx.textAlign = 'center'
                ctx.fillText('↑ PREFERENCES', node.x, node.y - 60 / globalScale)
              }
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 pb-4 flex gap-8 text-sm text-gray-400">
        <div>Total nodes: <span className="text-white font-semibold">{graphData.nodes.length}</span></div>
        <div>Connections: <span className="text-white font-semibold">{graphData.links.length}</span></div>
        <div>Cross-cluster links: <span className="text-purple-400 font-semibold">{graphData.links.filter(l => l.type === 'cross').length}</span></div>
      </div>
    </div>
  )
}
