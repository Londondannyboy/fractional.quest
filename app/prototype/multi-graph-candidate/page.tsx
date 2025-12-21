'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

// CANDIDATE: Multi-dimensional force graph view
// 3 graphs showing different aspects of job search

export default function MultiGraphCandidate() {
  const [dimensions, setDimensions] = useState({ width: 400, height: 500 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth / 3 - 50,
        height: window.innerHeight - 260
      })
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth / 3 - 50,
          height: window.innerHeight - 260
        })
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  // GRAPH 1: Skills & Experience Network
  const [skillsGraph, setSkillsGraph] = useState({
    nodes: [
      { id: 'me', name: 'You', val: 40, color: '#8B5CF6', type: 'center' },
      { id: 'skill-1', name: 'M&A', val: 25, color: '#3B82F6', type: 'skill', years: 8 },
      { id: 'skill-2', name: 'Fundraising', val: 24, color: '#3B82F6', type: 'skill', years: 6 },
      { id: 'skill-3', name: 'Leadership', val: 26, color: '#3B82F6', type: 'skill', years: 10 },
      { id: 'skill-4', name: 'Strategy', val: 23, color: '#3B82F6', type: 'skill', years: 7 },
      { id: 'skill-5', name: 'FP&A', val: 22, color: '#3B82F6', type: 'skill', years: 5 },
      { id: 'exp-1', name: 'Stripe (CFO)', val: 22, color: '#10B981', type: 'experience' },
      { id: 'exp-2', name: 'Monzo (VP)', val: 21, color: '#10B981', type: 'experience' },
      { id: 'exp-3', name: 'KPMG', val: 20, color: '#10B981', type: 'experience' },
    ],
    links: [
      { source: 'me', target: 'skill-1', width: 4 },
      { source: 'me', target: 'skill-2', width: 4 },
      { source: 'me', target: 'skill-3', width: 5 },
      { source: 'me', target: 'skill-4', width: 3 },
      { source: 'me', target: 'skill-5', width: 3 },
      { source: 'me', target: 'exp-1', width: 4 },
      { source: 'me', target: 'exp-2', width: 3 },
      { source: 'me', target: 'exp-3', width: 3 },
    ]
  })

  // GRAPH 2: Job Interests Network (MAIN - CENTER)
  const [interestsGraph, setInterestsGraph] = useState({
    nodes: [
      { id: 'candidate', name: 'You', val: 45, color: '#8B5CF6', type: 'candidate' },
      // Target roles
      { id: 'role-1', name: 'CFO', val: 30, color: '#EC4899', type: 'role', match: 92 },
      { id: 'role-2', name: 'VP Finance', val: 28, color: '#EC4899', type: 'role', match: 85 },
      { id: 'role-3', name: 'COO', val: 26, color: '#EC4899', type: 'role', match: 78 },
      // Target companies
      { id: 'comp-1', name: 'Stripe', val: 28, color: '#F59E0B', type: 'company', status: 'applied' },
      { id: 'comp-2', name: 'Revolut', val: 27, color: '#F59E0B', type: 'company', status: 'applied' },
      { id: 'comp-3', name: 'Wise', val: 26, color: '#F59E0B', type: 'company', status: 'interested' },
      { id: 'comp-4', name: 'Klarna', val: 25, color: '#F59E0B', type: 'company', status: 'interested' },
    ],
    links: [
      { source: 'candidate', target: 'role-1', width: 5 },
      { source: 'candidate', target: 'role-2', width: 4 },
      { source: 'candidate', target: 'role-3', width: 3 },
      { source: 'role-1', target: 'comp-1', width: 4 },
      { source: 'role-1', target: 'comp-2', width: 4 },
      { source: 'role-2', target: 'comp-3', width: 3 },
      { source: 'role-3', target: 'comp-4', width: 3 },
    ]
  })

  // GRAPH 3: Preferences & Priorities Network
  const [preferencesGraph, setPreferencesGraph] = useState({
    nodes: [
      { id: 'prefs', name: 'Preferences', val: 40, color: '#8B5CF6', type: 'center' },
      // Locations
      { id: 'loc-1', name: 'London', val: 24, color: '#10B981', type: 'location' },
      { id: 'loc-2', name: 'Remote', val: 25, color: '#10B981', type: 'location' },
      { id: 'loc-3', name: 'Paris', val: 22, color: '#10B981', type: 'location' },
      // Priorities
      { id: 'pri-1', name: 'Impact', val: 23, color: '#F59E0B', type: 'priority' },
      { id: 'pri-2', name: 'Growth', val: 22, color: '#F59E0B', type: 'priority' },
      { id: 'pri-3', name: 'Equity', val: 21, color: '#F59E0B', type: 'priority' },
      { id: 'pri-4', name: 'Flexibility', val: 20, color: '#F59E0B', type: 'priority' },
    ],
    links: [
      { source: 'prefs', target: 'loc-1', width: 4 },
      { source: 'prefs', target: 'loc-2', width: 5 },
      { source: 'prefs', target: 'loc-3', width: 3 },
      { source: 'prefs', target: 'pri-1', width: 4 },
      { source: 'prefs', target: 'pri-2', width: 4 },
      { source: 'prefs', target: 'pri-3', width: 3 },
      { source: 'prefs', target: 'pri-4', width: 3 },
    ]
  })

  // Test: Add new skill
  const addSkill = () => {
    const newSkill = {
      id: `skill-${Date.now()}`,
      name: 'Board Relations',
      val: 22,
      color: '#3B82F6',
      type: 'skill',
      years: 4
    }
    setSkillsGraph(prev => ({
      nodes: [...prev.nodes, newSkill],
      links: [...prev.links, { source: 'me', target: newSkill.id, width: 3 }]
    }))
  }

  // Test: Add new company interest
  const addCompany = () => {
    const newComp = {
      id: `comp-${Date.now()}`,
      name: 'N26',
      val: 25,
      color: '#F59E0B',
      type: 'company',
      status: 'interested'
    }
    setInterestsGraph(prev => ({
      nodes: [...prev.nodes, newComp],
      links: [...prev.links, { source: 'role-1', target: newComp.id, width: 3 }]
    }))
  }

  // Test: Add location preference
  const addLocation = () => {
    const newLoc = {
      id: `loc-${Date.now()}`,
      name: 'Berlin',
      val: 22,
      color: '#10B981',
      type: 'location'
    }
    setPreferencesGraph(prev => ({
      nodes: [...prev.nodes, newLoc],
      links: [...prev.links, { source: 'prefs', target: newLoc.id, width: 3 }]
    }))
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="p-6 border-b border-purple-500/30">
        <h1 className="text-4xl font-bold mb-2">
          Multi-Graph Candidate Dashboard
        </h1>
        <p className="text-purple-300 mb-4">
          Three interactive force graphs showing your profile, interests, and preferences
        </p>
        <div className="flex gap-3">
          <button
            onClick={addSkill}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-sm"
          >
            + Add Skill (Left Graph)
          </button>
          <button
            onClick={addCompany}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold text-sm"
          >
            + Add Company Interest (Center)
          </button>
          <button
            onClick={addLocation}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-sm"
          >
            + Add Location (Right Graph)
          </button>
        </div>
      </div>

      {/* Three-column graph layout */}
      <div className="grid grid-cols-3 gap-4 p-4" style={{ height: 'calc(100vh - 180px)' }}>
        {/* LEFT: Skills & Experience */}
        <div className="bg-blue-900/20 rounded-2xl border border-blue-500/30 p-4 flex flex-col">
          <div className="mb-3">
            <h2 className="text-xl font-bold text-blue-300">Your Skills & Experience</h2>
            <p className="text-sm text-blue-300/60">What you bring</p>
          </div>
          <div className="flex-1 bg-black rounded-xl overflow-hidden">
            <ForceGraph2D
              graphData={skillsGraph}
              nodeLabel={(node: any) => `${node.name}${node.years ? ` (${node.years}y)` : ''}`}
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              linkWidth={(link: any) => link.width || 1}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              width={dimensions.width}
              height={dimensions.height}
              nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
                ctx.fillStyle = node.color
                ctx.fill()

                // Show years for skills
                if (node.years) {
                  ctx.font = `${9 / globalScale}px Sans-Serif`
                  ctx.textAlign = 'center'
                  ctx.textBaseline = 'middle'
                  ctx.fillStyle = '#fff'
                  ctx.fillText(`${node.years}y`, node.x, node.y)
                }

                // Label
                ctx.font = `${10 / globalScale}px Sans-Serif`
                ctx.textAlign = 'center'
                ctx.fillStyle = '#fff'
                ctx.fillText(node.name, node.x, node.y + node.val / 2 + 10 / globalScale)
              }}
            />
          </div>
          <div className="mt-3 text-xs text-blue-300/60 text-center">
            {skillsGraph.nodes.filter(n => n.type === 'skill').length} skills, {skillsGraph.nodes.filter(n => n.type === 'experience').length} companies
          </div>
        </div>

        {/* CENTER: Job Interests (LARGEST) */}
        <div className="bg-purple-900/20 rounded-2xl border border-purple-500/30 p-4 flex flex-col">
          <div className="mb-3">
            <h2 className="text-2xl font-bold text-purple-300">Job Interests</h2>
            <p className="text-sm text-purple-300/60">What you're looking for</p>
          </div>
          <div className="flex-1 bg-black rounded-xl overflow-hidden">
            <ForceGraph2D
              graphData={interestsGraph}
              nodeLabel={(node: any) => {
                if (node.match) return `${node.name} (${node.match}% fit)`
                if (node.status) return `${node.name} (${node.status})`
                return node.name
              }}
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              linkWidth={(link: any) => link.width || 1}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              width={dimensions.width}
              height={dimensions.height}
              nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
                ctx.fillStyle = node.color
                ctx.fill()

                // Show match % for roles
                if (node.match) {
                  ctx.font = `${11 / globalScale}px Sans-Serif`
                  ctx.textAlign = 'center'
                  ctx.textBaseline = 'middle'
                  ctx.fillStyle = '#fff'
                  ctx.fillText(`${node.match}%`, node.x, node.y)
                }

                // Label
                ctx.font = `${10 / globalScale}px Sans-Serif`
                ctx.textAlign = 'center'
                ctx.fillStyle = '#fff'
                ctx.fillText(node.name, node.x, node.y + node.val / 2 + 10 / globalScale)
              }}
            />
          </div>
          <div className="mt-3 text-xs text-purple-300/60 text-center">
            {interestsGraph.nodes.filter(n => n.type === 'role').length} target roles, {interestsGraph.nodes.filter(n => n.type === 'company').length} companies tracked
          </div>
        </div>

        {/* RIGHT: Preferences & Priorities */}
        <div className="bg-green-900/20 rounded-2xl border border-green-500/30 p-4 flex flex-col">
          <div className="mb-3">
            <h2 className="text-xl font-bold text-green-300">Preferences & Priorities</h2>
            <p className="text-sm text-green-300/60">What matters to you</p>
          </div>
          <div className="flex-1 bg-black rounded-xl overflow-hidden">
            <ForceGraph2D
              graphData={preferencesGraph}
              nodeLabel="name"
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              linkWidth={(link: any) => link.width || 1}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              enablePanInteraction={true}
              width={dimensions.width}
              height={dimensions.height}
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
          <div className="mt-3 text-xs text-green-300/60 text-center">
            {preferencesGraph.nodes.filter(n => n.type === 'location').length} locations, {preferencesGraph.nodes.filter(n => n.type === 'priority').length} priorities
          </div>
        </div>
      </div>
    </div>
  )
}
