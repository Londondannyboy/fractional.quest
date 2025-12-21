'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import graphs
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

// CLIENT SEED DATA - What they're looking for (MULTI-ROLE BLENDED)
const CLIENT_REQUIREMENTS = {
  company: 'Stripe',

  // Multiple roles being hired (blended view)
  roles: [
    { title: 'CFO', seniority: 'Senior', urgency: 90 },
    { title: 'CTO', seniority: 'Senior', urgency: 75 },
    { title: 'CMO', seniority: 'Mid-Senior', urgency: 60 },
  ],

  locations: ['London', 'Remote'],

  // BLENDED Trinity (averaged across all 3 roles)
  trinity: {
    skills: 43,      // Average: CFO wants 40%, CTO wants 55%, CMO wants 35%
    experience: 33,  // Balanced across all
    personality: 24, // Culture fit matters for all
  },

  // Required skills
  skills: [
    { name: 'M&A', importance: 95, mentions: 3 },
    { name: 'Fundraising', importance: 90, mentions: 2 },
    { name: 'Board Relations', importance: 85, mentions: 2 },
    { name: 'Financial Strategy', importance: 80, mentions: 1 },
    { name: 'FP&A', importance: 75, mentions: 1 },
    { name: 'Risk Management', importance: 70, mentions: 1 },
  ],

  // Personality target
  personality: {
    type: 'ENTJ', // Detected from speech
    color: 'Red', // Driver
    traits: {
      strategic: 85,
      operational: 60,
      interpersonal: 75,
      analytical: 80,
      creative: 55,
    }
  },

  // Hiring policy
  hiringFocus: {
    speed: 70,        // How urgent
    quality: 90,      // Standards level
    cultureFit: 80,   // Team alignment
    costSensitive: 40 // Budget flexibility
  }
}

// Matching candidates (MULTI-ROLE BLENDED GRAPH)
const MATCHING_CANDIDATES = {
  nodes: [
    // Company node (center)
    { id: 'company', name: 'Stripe', val: 45, color: '#8B5CF6', type: 'company' },

    // Role nodes (radiating from company)
    { id: 'role-cfo', name: 'CFO', val: 28, color: '#EC4899', type: 'role', urgency: 90 },
    { id: 'role-cto', name: 'CTO', val: 25, color: '#EC4899', type: 'role', urgency: 75 },
    { id: 'role-cmo', name: 'CMO', val: 22, color: '#EC4899', type: 'role', urgency: 60 },

    // Candidates (some match multiple roles!)
    { id: 'cand-1', name: 'Sarah Chen', val: 30, color: '#10B981', type: 'candidate', roles: { cfo: 92, cmo: 45 } },
    { id: 'cand-2', name: 'Marcus Thompson', val: 28, color: '#10B981', type: 'candidate', roles: { cfo: 88 } },
    { id: 'cand-3', name: 'Aisha Patel', val: 28, color: '#10B981', type: 'candidate', roles: { cto: 89, cfo: 62 } },
    { id: 'cand-4', name: 'David Kim', val: 26, color: '#3B82F6', type: 'candidate', roles: { cto: 85 } },
    { id: 'cand-5', name: 'Emma Rodriguez', val: 24, color: '#3B82F6', type: 'candidate', roles: { cmo: 82, cfo: 58 } },
    { id: 'cand-6', name: 'James O\'Brien', val: 22, color: '#3B82F6', type: 'candidate', roles: { cfo: 76 } },
    { id: 'cand-7', name: 'Sophie Martin', val: 24, color: '#6B7280', type: 'candidate', roles: { cmo: 78 } },
    { id: 'cand-8', name: 'Alex Zhang', val: 26, color: '#6B7280', type: 'candidate', roles: { cto: 72, cmo: 65 } },
  ],
  links: [
    // Company to roles
    { source: 'company', target: 'role-cfo', width: 3 },
    { source: 'company', target: 'role-cto', width: 3 },
    { source: 'company', target: 'role-cmo', width: 3 },

    // Candidates to roles they match (shows versatility!)
    { source: 'role-cfo', target: 'cand-1', width: 4 },
    { source: 'role-cfo', target: 'cand-2', width: 4 },
    { source: 'role-cfo', target: 'cand-3', width: 2 },
    { source: 'role-cfo', target: 'cand-6', width: 3 },

    { source: 'role-cto', target: 'cand-3', width: 4 },
    { source: 'role-cto', target: 'cand-4', width: 4 },
    { source: 'role-cto', target: 'cand-8', width: 2 },

    { source: 'role-cmo', target: 'cand-1', width: 2 },
    { source: 'role-cmo', target: 'cand-5', width: 4 },
    { source: 'role-cmo', target: 'cand-7', width: 3 },
    { source: 'role-cmo', target: 'cand-8', width: 2 },
  ]
}

export default function ClientDashboard() {
  const [requirements, setRequirements] = useState(CLIENT_REQUIREMENTS)
  const [candidateGraph, setCandidateGraph] = useState(MATCHING_CANDIDATES)

  // Simulate real-time update (for demo)
  const addSkillMention = () => {
    setRequirements(prev => ({
      ...prev,
      skills: prev.skills.map(s =>
        s.name === 'M&A'
          ? { ...s, mentions: s.mentions + 1, importance: Math.min(100, s.importance + 2) }
          : s
      )
    }))
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="p-6 border-b border-purple-500/30">
        <h1 className="text-4xl font-bold mb-2">
          Client Dashboard: Understanding Your Hiring Needs
        </h1>
        <p className="text-purple-300 mb-2">
          Real-time blended view of {requirements.company}'s hiring requirements
        </p>
        <div className="flex gap-2">
          {requirements.roles.map(role => (
            <span key={role.title} className="px-3 py-1 bg-pink-600/30 rounded-full text-sm">
              {role.title} ({role.urgency}% urgent)
            </span>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={addSkillMention}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Client mentions "M&A" again (Test)
          </button>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="p-6 grid grid-cols-12 gap-6">
        {/* LEFT: Trinity + Role Profile */}
        <div className="col-span-4 space-y-6">
          {/* Trinity Triangle */}
          <div className="bg-gradient-to-br from-purple-900/30 to-black rounded-2xl border border-purple-500/30 p-6">
            <h2 className="text-2xl font-bold mb-6">Trinity Framework</h2>
            <div className="relative h-64 flex items-center justify-center">
              {/* Triangle */}
              <svg width="250" height="220" viewBox="0 0 250 220">
                {/* Triangle outline */}
                <polygon
                  points="125,20 230,200 20,200"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                />

                {/* Filled triangle based on values */}
                <polygon
                  points="125,20 230,200 20,200"
                  fill="url(#trinity-gradient)"
                  opacity="0.3"
                />

                {/* Labels */}
                <text x="125" y="15" textAnchor="middle" fill="#EC4899" fontSize="14" fontWeight="bold">
                  Skills {requirements.trinity.skills}%
                </text>
                <text x="15" y="215" textAnchor="start" fill="#3B82F6" fontSize="14" fontWeight="bold">
                  Experience {requirements.trinity.experience}%
                </text>
                <text x="235" y="215" textAnchor="end" fill="#10B981" fontSize="14" fontWeight="bold">
                  Personality {requirements.trinity.personality}%
                </text>

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="trinity-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mt-4 text-sm text-purple-300 text-center">
              Hiring priority: <span className="font-bold text-pink-400">Skills-focused</span>
            </div>
          </div>

          {/* Role Profile Building */}
          <div className="bg-gradient-to-br from-pink-900/30 to-black rounded-2xl border border-pink-500/30 p-6">
            <h2 className="text-xl font-bold mb-4">Role Requirements</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{requirements.roles[0]?.title || 'Role'}</span>
                <span className="px-3 py-1 bg-pink-600/30 rounded-full text-sm">
                  {requirements.roles[0]?.seniority || 'Senior'}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                📍 {requirements.locations?.join(', ') || 'Location TBD'}
              </div>

              <div className="mt-6 space-y-2">
                <div className="text-sm font-semibold text-pink-300">Required Skills:</div>
                {requirements.skills.slice(0, 6).map(skill => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                          style={{ width: `${skill.importance}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500">
                        {skill.mentions}x
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CENTER: Matching Candidates Graph */}
        <div className="col-span-5 bg-gradient-to-br from-green-900/20 to-black rounded-2xl border border-green-500/30 p-6">
          <h2 className="text-2xl font-bold mb-4">Matching Candidates</h2>
          <div className="bg-gray-50 rounded-xl" style={{ height: 600 }}>
            <ForceGraph2D
              graphData={candidateGraph}
              nodeLabel={(node: any) => `${node.name}${node.fit ? ` (${node.fit}% fit)` : ''}`}
              nodeVal="val"
              nodeColor="color"
              linkColor={() => '#444'}
              linkWidth={(link: any) => link.width || 1}
              backgroundColor="#000000"
              enableNodeDrag={true}
              enableZoomInteraction={true}
              width={600}
              height={600}
              nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                // Draw circle
                ctx.beginPath()
                ctx.arc(node.x, node.y, node.val / 2, 0, 2 * Math.PI)
                ctx.fillStyle = node.color
                ctx.fill()

                // Draw fit score for candidates
                if (node.type === 'candidate' && node.fit) {
                  ctx.font = `${10 / globalScale}px Sans-Serif`
                  ctx.textAlign = 'center'
                  ctx.textBaseline = 'middle'
                  ctx.fillStyle = '#fff'
                  ctx.fillText(`${node.fit}%`, node.x, node.y)
                }

                // Draw label
                ctx.font = `${12 / globalScale}px Sans-Serif`
                ctx.textAlign = 'center'
                ctx.fillStyle = '#fff'
                ctx.fillText(node.name.split(' ')[0], node.x, node.y + node.val / 2 + 12 / globalScale)
              }}
            />
          </div>
        </div>

        {/* RIGHT: Personality + Hiring Focus */}
        <div className="col-span-3 space-y-6">
          {/* Personality Target */}
          <div className="bg-gradient-to-br from-blue-900/30 to-black rounded-2xl border border-blue-500/30 p-6">
            <h2 className="text-xl font-bold mb-4">Personality Target</h2>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {requirements.personality.type}
              </div>
              <div className="text-sm text-gray-400">
                {requirements.personality.color} (Driver)
              </div>
            </div>
            <div className="space-y-3">
              {Object.entries(requirements.personality.traits).map(([trait, value]) => (
                <div key={trait}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="capitalize">{trait}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Policy */}
          <div className="bg-gradient-to-br from-orange-900/30 to-black rounded-2xl border border-orange-500/30 p-6">
            <h2 className="text-xl font-bold mb-4">Hiring Focus</h2>
            <div className="space-y-4">
              {Object.entries(requirements.hiringFocus).map(([focus, value]) => (
                <div key={focus}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="capitalize">{focus.replace(/([A-Z])/g, ' $1')}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Match Stats */}
          <div className="bg-gradient-to-br from-indigo-900/30 to-black rounded-2xl border border-indigo-500/30 p-6">
            <h2 className="text-xl font-bold mb-4">Pipeline</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Total Matches</span>
                <span className="text-2xl font-bold text-green-400">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Strong Fit (80%+)</span>
                <span className="text-xl font-bold text-green-400">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Good Fit (70-80%)</span>
                <span className="text-xl font-bold text-blue-400">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Potential (60-70%)</span>
                <span className="text-xl font-bold text-gray-400">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
