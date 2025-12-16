'use client'

import { useMemo } from 'react'
import { KnowledgeGraph } from './KnowledgeGraph'

interface Skill {
  name: string
  confidence?: number
}

interface Company {
  name: string
  role?: string
  tenure?: string
}

interface RoleNeeded {
  title: string
  priority?: string
  timeline?: string
}

interface Requirement {
  type: string
  value: string
  isHardConstraint?: boolean
}

interface CandidateData {
  name?: string
  skills: Skill[]
  companies: Company[]
  roles?: string[]
}

interface ClientData {
  companyName?: string
  industry?: string
  rolesNeeded: RoleNeeded[]
  requirements: Requirement[]
}

export interface RepoData {
  userType: 'candidate' | 'client' | 'unknown'
  candidate?: CandidateData
  client?: ClientData
}

interface GraphNode {
  id: string
  type: 'user' | 'skill' | 'job' | 'company' | 'preference' | 'fact'
  label: string
  data?: Record<string, unknown>
}

interface GraphEdge {
  source: string
  target: string
  type: string
  weight?: number
  label?: string
}

interface GraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

interface RepoLiveBuilderProps {
  data: RepoData
  width?: number
  height?: number
  showProgress?: boolean
}

// Build graph for candidates
function buildCandidateGraph(data: CandidateData): GraphData {
  const nodes: GraphNode[] = []
  const edges: GraphEdge[] = []

  // Center user node
  const userName = data.name || 'You'
  nodes.push({
    id: 'user',
    type: 'user',
    label: userName,
    data: { type: 'candidate' }
  })

  // Add skills
  data.skills.forEach((skill, i) => {
    const skillId = `skill-${i}`
    nodes.push({
      id: skillId,
      type: 'skill',
      label: skill.name,
      data: { confidence: skill.confidence }
    })
    edges.push({
      source: 'user',
      target: skillId,
      type: 'has_skill',
      label: skill.confidence ? `${Math.round(skill.confidence * 100)}%` : undefined
    })
  })

  // Add companies
  data.companies.forEach((company, i) => {
    const companyId = `company-${i}`
    nodes.push({
      id: companyId,
      type: 'company',
      label: company.name,
      data: { role: company.role, tenure: company.tenure }
    })
    edges.push({
      source: 'user',
      target: companyId,
      type: 'worked_at',
      label: company.tenure || company.role
    })
  })

  // Add role preferences
  data.roles?.forEach((role, i) => {
    const roleId = `role-${i}`
    nodes.push({
      id: roleId,
      type: 'preference',
      label: role,
      data: { type: 'role_preference' }
    })
    edges.push({
      source: 'user',
      target: roleId,
      type: 'interested_in',
      label: 'interested'
    })
  })

  return { nodes, edges }
}

// Build graph for clients
function buildClientGraph(data: ClientData): GraphData {
  const nodes: GraphNode[] = []
  const edges: GraphEdge[] = []

  // Center company node
  const companyName = data.companyName || 'Your Company'
  nodes.push({
    id: 'company',
    type: 'company',
    label: companyName,
    data: { industry: data.industry }
  })

  // Add industry as a fact node if present
  if (data.industry) {
    nodes.push({
      id: 'industry',
      type: 'fact',
      label: data.industry,
      data: { type: 'industry' }
    })
    edges.push({
      source: 'company',
      target: 'industry',
      type: 'operates_in',
      label: 'industry'
    })
  }

  // Add roles needed
  data.rolesNeeded.forEach((role, i) => {
    const roleId = `role-${i}`
    nodes.push({
      id: roleId,
      type: 'job',
      label: role.title,
      data: { priority: role.priority, timeline: role.timeline }
    })
    edges.push({
      source: 'company',
      target: roleId,
      type: 'hiring_for',
      label: role.timeline || role.priority
    })
  })

  // Add requirements as preference nodes
  data.requirements.forEach((req, i) => {
    const reqId = `req-${i}`
    const label = `${req.type}: ${req.value}`
    nodes.push({
      id: reqId,
      type: 'preference',
      label: truncate(label, 20),
      data: {
        type: req.type,
        value: req.value,
        isHard: req.isHardConstraint
      }
    })
    edges.push({
      source: 'company',
      target: reqId,
      type: 'requires',
      label: req.isHardConstraint ? 'must have' : 'nice to have'
    })
  })

  return { nodes, edges }
}

function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - 2) + '...'
}

// Calculate completion progress
function calculateProgress(data: RepoData): number {
  if (data.userType === 'candidate' && data.candidate) {
    const { skills, companies } = data.candidate
    const hasName = !!data.candidate.name
    const hasSkills = skills.length >= 2
    const hasCompanies = companies.length >= 1

    let progress = 0
    if (hasName) progress += 33
    if (hasSkills) progress += 34
    if (hasCompanies) progress += 33

    return progress
  }

  if (data.userType === 'client' && data.client) {
    const { companyName, rolesNeeded } = data.client
    const hasCompany = !!companyName
    const hasRoles = rolesNeeded.length >= 1

    let progress = 0
    if (hasCompany) progress += 50
    if (hasRoles) progress += 50

    return progress
  }

  return 0
}

export function RepoLiveBuilder({
  data,
  width = 600,
  height = 400,
  showProgress = true
}: RepoLiveBuilderProps) {
  const graphData = useMemo(() => {
    if (data.userType === 'candidate' && data.candidate) {
      return buildCandidateGraph(data.candidate)
    }
    if (data.userType === 'client' && data.client) {
      return buildClientGraph(data.client)
    }
    return { nodes: [], edges: [] }
  }, [data])

  const progress = useMemo(() => calculateProgress(data), [data])

  // Don't show graph until we have some data
  const hasData = graphData.nodes.length > 1

  if (!hasData) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl border border-gray-200">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🎯</div>
          <p className="text-sm">Your knowledge graph will appear here as we talk...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Profile Building
            </span>
            <span className="text-sm text-gray-600">{progress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Graph */}
      <div className="relative">
        {/* Reveal animation */}
        <div className="animate-fade-in">
          <KnowledgeGraph
            data={graphData}
            width={width}
            height={height}
            title={data.userType === 'candidate' ? 'Your Profile' : 'Your Hiring Needs'}
          />
        </div>

        {/* Stats overlay */}
        <div className="absolute top-14 right-2 bg-white/95 backdrop-blur rounded-lg p-3 shadow-sm border border-gray-200 text-xs">
          <div className="space-y-1.5">
            {data.userType === 'candidate' && data.candidate && (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">🎯</span>
                  <span className="text-gray-700">{data.candidate.skills.length} skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-600">🏢</span>
                  <span className="text-gray-700">{data.candidate.companies.length} companies</span>
                </div>
                {(data.candidate.roles?.length || 0) > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-pink-600">⚙️</span>
                    <span className="text-gray-700">{data.candidate.roles?.length} preferences</span>
                  </div>
                )}
              </>
            )}
            {data.userType === 'client' && data.client && (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">💼</span>
                  <span className="text-gray-700">{data.client.rolesNeeded.length} roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-600">⚙️</span>
                  <span className="text-gray-700">{data.client.requirements.length} requirements</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Node count badge */}
      <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
        {graphData.nodes.length} nodes • {graphData.edges.length} connections
      </div>
    </div>
  )
}

export default RepoLiveBuilder
