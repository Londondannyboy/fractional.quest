'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })
const JobsGlobe = dynamic(() => import('@/components/JobsGlobe').then(mod => mod.JobsGlobe), { ssr: false })
const JobsSunburst = dynamic(() => import('@/components/JobsSunburst').then(mod => mod.JobsSunburst), { ssr: false })
const SkillsRadar = dynamic(() => import('@/components/SkillsRadar').then(mod => mod.SkillsRadar), { ssr: false })
const JobsCalendarHeatmap = dynamic(() => import('@/components/JobsCalendarHeatmap').then(mod => mod.JobsCalendarHeatmap), { ssr: false })

// SEED DATA - Realistic medium-sized user profile
const SEED_USER = {
  name: 'Sarah Chen',
  targetRole: 'CFO',
  locations: ['London', 'Paris', 'Dubai', 'Singapore', 'New York'],
  skills: ['Financial Strategy', 'M&A', 'Leadership', 'Fundraising', 'Board Relations', 'FP&A', 'Risk Management', 'Capital Markets', 'Due Diligence', 'Corporate Governance'],
  companies: ['Stripe', 'Revolut', 'Monzo', 'Wise', 'Klarna', 'N26', 'GoCardless', 'Tide'],
  dayRate: '£1500',
  availability: 'Immediate',
  personality: {
    strategic: 85,
    operational: 70,
    interpersonal: 90,
    technical: 65,
    creative: 75,
  }
}

// Force graph data - MEDIUM SIZED REPO (40+ nodes)
const FORCE_GRAPH_DATA = {
  nodes: [
    // User node (center)
    { id: 'user', name: 'Sarah Chen', val: 35, color: '#8B5CF6', type: 'user' },

    // Target Roles (5)
    { id: 'role-cfo', name: 'CFO', val: 22, color: '#EC4899', type: 'role' },
    { id: 'role-coo', name: 'COO', val: 20, color: '#EC4899', type: 'role' },
    { id: 'role-cto', name: 'CTO', val: 18, color: '#EC4899', type: 'role' },
    { id: 'role-vp-finance', name: 'VP Finance', val: 20, color: '#EC4899', type: 'role' },
    { id: 'role-head-fp&a', name: 'Head of FP&A', val: 19, color: '#EC4899', type: 'role' },

    // Locations (8)
    { id: 'loc-london', name: 'London', val: 18, color: '#10B981', type: 'location' },
    { id: 'loc-paris', name: 'Paris', val: 17, color: '#10B981', type: 'location' },
    { id: 'loc-dubai', name: 'Dubai', val: 17, color: '#10B981', type: 'location' },
    { id: 'loc-singapore', name: 'Singapore', val: 16, color: '#10B981', type: 'location' },
    { id: 'loc-new-york', name: 'New York', val: 18, color: '#10B981', type: 'location' },
    { id: 'loc-amsterdam', name: 'Amsterdam', val: 15, color: '#10B981', type: 'location' },
    { id: 'loc-berlin', name: 'Berlin', val: 15, color: '#10B981', type: 'location' },
    { id: 'loc-remote', name: 'Remote', val: 16, color: '#10B981', type: 'location' },

    // Skills (12)
    { id: 'skill-strategy', name: 'Financial Strategy', val: 16, color: '#3B82F6', type: 'skill' },
    { id: 'skill-ma', name: 'M&A', val: 16, color: '#3B82F6', type: 'skill' },
    { id: 'skill-leadership', name: 'Leadership', val: 17, color: '#3B82F6', type: 'skill' },
    { id: 'skill-fundraising', name: 'Fundraising', val: 15, color: '#3B82F6', type: 'skill' },
    { id: 'skill-board', name: 'Board Relations', val: 15, color: '#3B82F6', type: 'skill' },
    { id: 'skill-fpa', name: 'FP&A', val: 16, color: '#3B82F6', type: 'skill' },
    { id: 'skill-risk', name: 'Risk Management', val: 14, color: '#3B82F6', type: 'skill' },
    { id: 'skill-capital', name: 'Capital Markets', val: 14, color: '#3B82F6', type: 'skill' },
    { id: 'skill-diligence', name: 'Due Diligence', val: 14, color: '#3B82F6', type: 'skill' },
    { id: 'skill-governance', name: 'Corporate Governance', val: 14, color: '#3B82F6', type: 'skill' },
    { id: 'skill-forecasting', name: 'Financial Forecasting', val: 15, color: '#3B82F6', type: 'skill' },
    { id: 'skill-reporting', name: 'Financial Reporting', val: 14, color: '#3B82F6', type: 'skill' },

    // Companies Interested In (15)
    { id: 'comp-stripe', name: 'Stripe', val: 20, color: '#F59E0B', type: 'company', status: 'applied' },
    { id: 'comp-revolut', name: 'Revolut', val: 20, color: '#F59E0B', type: 'company', status: 'applied' },
    { id: 'comp-monzo', name: 'Monzo', val: 19, color: '#F59E0B', type: 'company', status: 'interested' },
    { id: 'comp-wise', name: 'Wise', val: 19, color: '#F59E0B', type: 'company', status: 'applied' },
    { id: 'comp-klarna', name: 'Klarna', val: 18, color: '#F59E0B', type: 'company', status: 'interested' },
    { id: 'comp-n26', name: 'N26', val: 17, color: '#F59E0B', type: 'company', status: 'interested' },
    { id: 'comp-gocardless', name: 'GoCardless', val: 17, color: '#F59E0B', type: 'company', status: 'applied' },
    { id: 'comp-tide', name: 'Tide', val: 16, color: '#F59E0B', type: 'company', status: 'interested' },
    { id: 'comp-checkout', name: 'Checkout.com', val: 18, color: '#F59E0B', type: 'company', status: 'applied' },
    { id: 'comp-sumup', name: 'SumUp', val: 16, color: '#F59E0B', type: 'company', status: 'interested' },
    { id: 'comp-paddle', name: 'Paddle', val: 16, color: '#F59E0B', type: 'company', status: 'interested' },
    { id: 'comp-zopa', name: 'Zopa', val: 16, color: '#F59E0B', type: 'company', status: 'applied' },
    { id: 'comp-oaknorth', name: 'OakNorth', val: 17, color: '#F59E0B', type: 'company', status: 'interested' },
    { id: 'comp-starling', name: 'Starling Bank', val: 18, color: '#F59E0B', type: 'company', status: 'applied' },
    { id: 'comp-truelayer', name: 'TrueLayer', val: 16, color: '#F59E0B', type: 'company', status: 'interested' },
  ],
  links: [
    // User to Roles
    { source: 'user', target: 'role-cfo' },
    { source: 'user', target: 'role-coo' },
    { source: 'user', target: 'role-cto' },
    { source: 'user', target: 'role-vp-finance' },
    { source: 'user', target: 'role-head-fp&a' },

    // User to Locations
    { source: 'user', target: 'loc-london' },
    { source: 'user', target: 'loc-paris' },
    { source: 'user', target: 'loc-dubai' },
    { source: 'user', target: 'loc-singapore' },
    { source: 'user', target: 'loc-new-york' },
    { source: 'user', target: 'loc-amsterdam' },
    { source: 'user', target: 'loc-berlin' },
    { source: 'user', target: 'loc-remote' },

    // User to Skills
    { source: 'user', target: 'skill-strategy' },
    { source: 'user', target: 'skill-ma' },
    { source: 'user', target: 'skill-leadership' },
    { source: 'user', target: 'skill-fundraising' },
    { source: 'user', target: 'skill-board' },
    { source: 'user', target: 'skill-fpa' },
    { source: 'user', target: 'skill-risk' },
    { source: 'user', target: 'skill-capital' },
    { source: 'user', target: 'skill-diligence' },
    { source: 'user', target: 'skill-governance' },
    { source: 'user', target: 'skill-forecasting' },
    { source: 'user', target: 'skill-reporting' },

    // User to Companies
    { source: 'user', target: 'comp-stripe' },
    { source: 'user', target: 'comp-revolut' },
    { source: 'user', target: 'comp-monzo' },
    { source: 'user', target: 'comp-wise' },
    { source: 'user', target: 'comp-klarna' },
    { source: 'user', target: 'comp-n26' },
    { source: 'user', target: 'comp-gocardless' },
    { source: 'user', target: 'comp-tide' },
    { source: 'user', target: 'comp-checkout' },
    { source: 'user', target: 'comp-sumup' },
    { source: 'user', target: 'comp-paddle' },
    { source: 'user', target: 'comp-zopa' },
    { source: 'user', target: 'comp-oaknorth' },
    { source: 'user', target: 'comp-starling' },
    { source: 'user', target: 'comp-truelayer' },
  ]
}

export default function MegaVizDashboard() {
  const [graphData, setGraphData] = useState(FORCE_GRAPH_DATA)
  const [focusLocation, setFocusLocation] = useState<string>('london')

  // Test: Add new node to all graphs
  const addNewInterest = () => {
    const newNode = {
      id: `test-${Date.now()}`,
      name: 'Wise',
      val: 18,
      color: '#F59E0B',
      type: 'interest',
      status: 'active'
    }

    setGraphData(prev => ({
      nodes: [...prev.nodes, newNode],
      links: [...prev.links, { source: 'user', target: newNode.id }]
    }))

    // Future: Also update globe, skills, etc.
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="p-6 border-b border-purple-500/30">
        <h1 className="text-4xl font-bold mb-2">
          🚀 Ultimate Visualization Dashboard
        </h1>
        <p className="text-purple-300">
          Real-time visualization of {SEED_USER.name}'s profile - {SEED_USER.targetRole} search
        </p>
        <div className="mt-4 flex gap-4">
          <button
            onClick={addNewInterest}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Add "Wise" (Test)
          </button>
          <div className="px-4 py-3 bg-purple-900/30 rounded-lg">
            Nodes: {graphData.nodes.length}
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="p-6 grid grid-cols-12 gap-6">
        {/* CENTER: Main Force Graph (Huge!) */}
        <div className="col-span-8 row-span-2 bg-gradient-to-br from-purple-900/20 to-black rounded-2xl border border-purple-500/30 p-6">
          <h2 className="text-2xl font-bold mb-4">Knowledge Graph</h2>
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
              width={900}
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
                ctx.fillText(node.name, node.x, node.y + node.val / 2 + 10 / globalScale)
              }}
            />
          </div>
        </div>

        {/* TOP RIGHT: Spinning Globe */}
        <div className="col-span-4 bg-gradient-to-br from-green-900/20 to-black rounded-2xl border border-green-500/30 p-6">
          <h2 className="text-xl font-bold mb-4">🌍 Locations</h2>
          <div className="bg-black rounded-xl overflow-hidden" style={{ height: 300 }}>
            <JobsGlobe height="300px" focusCity={focusLocation as any} />
          </div>
          <div className="mt-4 flex gap-2">
            {SEED_USER.locations.map(loc => (
              <button
                key={loc}
                onClick={() => setFocusLocation(loc.toLowerCase())}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  focusLocation === loc.toLowerCase()
                    ? 'bg-green-600 text-white'
                    : 'bg-green-900/30 text-green-300 hover:bg-green-800/50'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* MIDDLE RIGHT: Skills Sunburst */}
        <div className="col-span-4 bg-gradient-to-br from-blue-900/20 to-black rounded-2xl border border-blue-500/30 p-6">
          <h2 className="text-xl font-bold mb-4">⚡ Skills</h2>
          <div className="bg-black rounded-xl overflow-hidden" style={{ height: 300 }}>
            <JobsSunburst height="300" />
          </div>
        </div>

        {/* BOTTOM LEFT: Timeline Heatmap */}
        <div className="col-span-6 bg-gradient-to-br from-orange-900/20 to-black rounded-2xl border border-orange-500/30 p-6">
          <h2 className="text-xl font-bold mb-4">📅 Activity Timeline</h2>
          <div className="bg-black rounded-xl overflow-hidden">
            <JobsCalendarHeatmap />
          </div>
        </div>

        {/* BOTTOM RIGHT: Personality Radar */}
        <div className="col-span-6 bg-gradient-to-br from-pink-900/20 to-black rounded-2xl border border-pink-500/30 p-6">
          <h2 className="text-xl font-bold mb-4">🧠 Profile Personality</h2>
          <div className="bg-black rounded-xl overflow-hidden">
            <SkillsRadar />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="p-6 border-t border-purple-500/30">
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-purple-900/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">{SEED_USER.locations.length}</div>
            <div className="text-sm text-purple-300">Locations</div>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">{SEED_USER.skills.length}</div>
            <div className="text-sm text-blue-300">Skills</div>
          </div>
          <div className="bg-orange-900/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">{SEED_USER.companies.length}</div>
            <div className="text-sm text-orange-300">Companies</div>
          </div>
          <div className="bg-pink-900/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">{SEED_USER.dayRate}</div>
            <div className="text-sm text-pink-300">Day Rate</div>
          </div>
          <div className="bg-green-900/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">{SEED_USER.targetRole}</div>
            <div className="text-sm text-green-300">Target Role</div>
          </div>
          <div className="bg-indigo-900/30 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">{SEED_USER.availability}</div>
            <div className="text-sm text-indigo-300">Availability</div>
          </div>
        </div>
      </div>
    </div>
  )
}
