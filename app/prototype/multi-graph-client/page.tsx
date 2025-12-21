'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

// CLIENT: Multi-dimensional force graph view
// 3 graphs showing different aspects of hiring needs

export default function MultiGraphClient() {
  // GRAPH 1: Skills & Requirements Network
  const [skillsGraph, setSkillsGraph] = useState({
    nodes: [
      { id: 'req', name: 'Requirements', val: 40, color: '#8B5CF6', type: 'center' },
      { id: 'skill-1', name: 'M&A', val: 25, color: '#EC4899', type: 'skill' },
      { id: 'skill-2', name: 'Fundraising', val: 24, color: '#EC4899', type: 'skill' },
      { id: 'skill-3', name: 'Leadership', val: 23, color: '#EC4899', type: 'skill' },
      { id: 'skill-4', name: 'Strategy', val: 22, color: '#EC4899', type: 'skill' },
      { id: 'skill-5', name: 'FP&A', val: 21, color: '#EC4899', type: 'skill' },
      { id: 'exp-1', name: '15+ years', val: 22, color: '#3B82F6', type: 'experience' },
      { id: 'exp-2', name: 'CFO level', val: 21, color: '#3B82F6', type: 'experience' },
      { id: 'exp-3', name: 'Scale-up', val: 20, color: '#3B82F6', type: 'experience' },
    ],
    links: [
      { source: 'req', target: 'skill-1', width: 4 },
      { source: 'req', target: 'skill-2', width: 4 },
      { source: 'req', target: 'skill-3', width: 3 },
      { source: 'req', target: 'skill-4', width: 3 },
      { source: 'req', target: 'skill-5', width: 3 },
      { source: 'req', target: 'exp-1', width: 3 },
      { source: 'req', target: 'exp-2', width: 3 },
      { source: 'req', target: 'exp-3', width: 2 },
    ]
  })

  // GRAPH 2: Candidate Matching Network (MAIN - CENTER)
  const [matchingGraph, setMatchingGraph] = useState({
    nodes: [
      { id: 'company', name: 'Stripe', val: 45, color: '#8B5CF6', type: 'company' },
      { id: 'role-cfo', name: 'CFO', val: 30, color: '#EC4899', type: 'role' },
      { id: 'role-cto', name: 'CTO', val: 28, color: '#EC4899', type: 'role' },
      // Top candidates
      { id: 'cand-1', name: 'Sarah Chen', val: 32, color: '#10B981', type: 'candidate', fit: 92 },
      { id: 'cand-2', name: 'Marcus Thompson', val: 30, color: '#10B981', type: 'candidate', fit: 88 },
      { id: 'cand-3', name: 'Aisha Patel', val: 30, color: '#10B981', type: 'candidate', fit: 87 },
      { id: 'cand-4', name: 'David Kim', val: 28, color: '#3B82F6', type: 'candidate', fit: 82 },
      { id: 'cand-5', name: 'Emma Rodriguez', val: 26, color: '#3B82F6', type: 'candidate', fit: 79 },
    ],
    links: [
      { source: 'company', target: 'role-cfo', width: 4 },
      { source: 'company', target: 'role-cto', width: 4 },
      { source: 'role-cfo', target: 'cand-1', width: 5 },
      { source: 'role-cfo', target: 'cand-2', width: 5 },
      { source: 'role-cfo', target: 'cand-3', width: 4 },
      { source: 'role-cto', target: 'cand-3', width: 3 },
      { source: 'role-cto', target: 'cand-4', width: 4 },
      { source: 'role-cto', target: 'cand-5', width: 3 },
    ]
  })

  // GRAPH 3: Personality & Culture Network
  const [cultureGraph, setCultureGraph] = useState({
    nodes: [
      { id: 'culture', name: 'Culture Fit', val: 40, color: '#8B5CF6', type: 'center' },
      { id: 'trait-1', name: 'Strategic', val: 24, color: '#F59E0B', type: 'trait' },
      { id: 'trait-2', name: 'Driver (Red)', val: 23, color: '#EF4444', type: 'trait' },
      { id: 'trait-3', name: 'Analytical', val: 22, color: '#F59E0B', type: 'trait' },
      { id: 'trait-4', name: 'ENTJ', val: 25, color: '#F59E0B', type: 'trait' },
      { id: 'value-1', name: 'Speed', val: 20, color: '#10B981', type: 'value' },
      { id: 'value-2', name: 'Quality', val: 21, color: '#10B981', type: 'value' },
      { id: 'value-3', name: 'Innovation', val: 19, color: '#10B981', type: 'value' },
    ],
    links: [
      { source: 'culture', target: 'trait-1', width: 4 },
      { source: 'culture', target: 'trait-2', width: 4 },
      { source: 'culture', target: 'trait-3', width: 3 },
      { source: 'culture', target: 'trait-4', width: 4 },
      { source: 'culture', target: 'value-1', width: 3 },
      { source: 'culture', target: 'value-2', width: 3 },
      { source: 'culture', target: 'value-3', width: 2 },
    ]
  })

  // Test: Add new skill requirement
  const addSkill = () => {
    const newSkill = {
      id: `skill-${Date.now()}`,
      name: 'Board Relations',
      val: 22,
      color: '#EC4899',
      type: 'skill'
    }
    setSkillsGraph(prev => ({
      nodes: [...prev.nodes, newSkill],
      links: [...prev.links, { source: 'req', target: newSkill.id, width: 3 }]
    }))
  }

  // Test: Add new candidate
  const addCandidate = () => {
    const newCand = {
      id: `cand-${Date.now()}`,
      name: 'Alex Zhang',
      val: 28,
      color: '#3B82F6',
      type: 'candidate',
      fit: 75
    }
    setMatchingGraph(prev => ({
      nodes: [...prev.nodes, newCand],
      links: [...prev.links, { source: 'role-cfo', target: newCand.id, width: 3 }]
    }))
  }

  // Test: Add personality trait
  const addTrait = () => {
    const newTrait = {
      id: `trait-${Date.now()}`,
      name: 'Results-driven',
      val: 21,
      color: '#F59E0B',
      type: 'trait'
    }
    setCultureGraph(prev => ({
      nodes: [...prev.nodes, newTrait],
      links: [...prev.links, { source: 'culture', target: newTrait.id, width: 3 }]
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-6 border-b border-purple-500/30">
        <h1 className="text-4xl font-bold mb-2">
          Multi-Graph Client Dashboard
        </h1>
        <p className="text-purple-300 mb-4">
          Three interactive force graphs showing different dimensions of hiring needs
        </p>
        <div className="flex gap-3">
          <button
            onClick={addSkill}
            className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold text-sm"
          >
            + Add Skill (Left Graph)
          </button>
          <button
            onClick={addCandidate}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-sm"
          >
            + Add Candidate (Center Graph)
          </button>
          <button
            onClick={addTrait}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-sm"
          >
            + Add Trait (Right Graph)
          </button>
        </div>
      </div>

      {/* Three-column graph layout */}
      <div className="grid grid-cols-3 gap-4 p-4" style={{ height: 'calc(100vh - 180px)' }}>
        {/* LEFT: Skills & Requirements */}
        <div className="bg-pink-900/20 rounded-2xl border border-pink-500/30 p-4 flex flex-col">
          <div className="mb-3">
            <h2 className="text-xl font-bold text-pink-300">Skills & Requirements</h2>
            <p className="text-sm text-pink-300/60">What they're looking for</p>
          </div>
          <div className="flex-1 bg-black rounded-xl overflow-hidden">
            <ForceGraph2D
              graphData={skillsGraph}
              nodeLabel="name"
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              linkWidth={(link: any) => link.width || 1}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              width={window.innerWidth / 3 - 50}
              height={window.innerHeight - 260}
              nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
                ctx.fillStyle = node.color
                ctx.fill()

                // Label
                ctx.font = `${10 / globalScale}px Sans-Serif`
                ctx.textAlign = 'center'
                ctx.fillStyle = '#fff'
                ctx.fillText(node.name, node.x, node.y + node.val / 2 + 10 / globalScale)
              }}
            />
          </div>
          <div className="mt-3 text-xs text-pink-300/60 text-center">
            {skillsGraph.nodes.length - 1} requirements defined
          </div>
        </div>

        {/* CENTER: Candidate Matching (LARGEST) */}
        <div className="bg-green-900/20 rounded-2xl border border-green-500/30 p-4 flex flex-col">
          <div className="mb-3">
            <h2 className="text-2xl font-bold text-green-300">Candidate Matches</h2>
            <p className="text-sm text-green-300/60">Who fits best</p>
          </div>
          <div className="flex-1 bg-black rounded-xl overflow-hidden">
            <ForceGraph2D
              graphData={matchingGraph}
              nodeLabel={(node: any) => `${node.name}${node.fit ? ` (${node.fit}%)` : ''}`}
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              linkWidth={(link: any) => link.width || 1}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              width={window.innerWidth / 3 - 50}
              height={window.innerHeight - 260}
              nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
                ctx.fillStyle = node.color
                ctx.fill()

                // Show fit % for candidates
                if (node.fit) {
                  ctx.font = `${11 / globalScale}px Sans-Serif`
                  ctx.textAlign = 'center'
                  ctx.textBaseline = 'middle'
                  ctx.fillStyle = '#fff'
                  ctx.fillText(`${node.fit}%`, node.x, node.y)
                }

                // Label
                ctx.font = `${10 / globalScale}px Sans-Serif`
                ctx.textAlign = 'center'
                ctx.fillStyle = '#fff'
                ctx.fillText(node.name.split(' ')[0], node.x, node.y + node.val / 2 + 10 / globalScale)
              }}
            />
          </div>
          <div className="mt-3 text-xs text-green-300/60 text-center">
            {matchingGraph.nodes.filter(n => n.type === 'candidate').length} candidates matched
          </div>
        </div>

        {/* RIGHT: Personality & Culture */}
        <div className="bg-orange-900/20 rounded-2xl border border-orange-500/30 p-4 flex flex-col">
          <div className="mb-3">
            <h2 className="text-xl font-bold text-orange-300">Culture & Personality</h2>
            <p className="text-sm text-orange-300/60">Team fit requirements</p>
          </div>
          <div className="flex-1 bg-black rounded-xl overflow-hidden">
            <ForceGraph2D
              graphData={cultureGraph}
              nodeLabel="name"
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              linkWidth={(link: any) => link.width || 1}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              width={window.innerWidth / 3 - 50}
              height={window.innerHeight - 260}
              nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
                ctx.fillStyle = node.color
                ctx.fill()

                // Label
                ctx.font = `${10 / globalScale}px Sans-Serif`
                ctx.textAlign = 'center'
                ctx.fillStyle = '#fff'
                ctx.fillText(node.name, node.x, node.y + node.val / 2 + 10 / globalScale)
              }}
            />
          </div>
          <div className="mt-3 text-xs text-orange-300/60 text-center">
            {cultureGraph.nodes.length - 1} cultural factors
          </div>
        </div>
      </div>
    </div>
  )
}
