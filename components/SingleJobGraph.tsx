'use client'

import { useMemo } from 'react'
import { KnowledgeGraph } from './KnowledgeGraph'

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

interface SingleJobGraphProps {
  jobId: string
  jobTitle: string
  company: string
  skills: string[]
  location?: string
}

export function SingleJobGraph({ jobId, jobTitle, company, skills, location }: SingleJobGraphProps) {
  const graphData = useMemo(() => {
    const nodes: GraphNode[] = []
    const edges: GraphEdge[] = []

    // Central job node
    nodes.push({
      id: `job-${jobId}`,
      type: 'job',
      label: jobTitle,
      data: { company, location, central: true },
    })

    // Company node
    const companyId = `company-${company.toLowerCase().replace(/\s+/g, '-')}`
    nodes.push({
      id: companyId,
      type: 'company',
      label: company,
    })
    edges.push({
      source: `job-${jobId}`,
      target: companyId,
      type: 'at_company',
      label: 'at',
    })

    // Skill nodes
    skills.forEach((skill, idx) => {
      const skillId = `skill-${skill.toLowerCase().replace(/\s+/g, '-')}-${idx}`
      nodes.push({
        id: skillId,
        type: 'skill',
        label: skill,
      })
      edges.push({
        source: `job-${jobId}`,
        target: skillId,
        type: 'requires',
        label: 'requires',
      })
    })

    // Location node (if provided)
    if (location) {
      const locationId = `location-${location.toLowerCase().replace(/\s+/g, '-')}`
      nodes.push({
        id: locationId,
        type: 'preference',
        label: location,
        data: { isLocation: true },
      })
      edges.push({
        source: `job-${jobId}`,
        target: locationId,
        type: 'located_in',
        label: 'location',
      })
    }

    return { nodes, edges }
  }, [jobId, jobTitle, company, skills, location])

  // Don't show graph if no skills
  if (skills.length === 0 && !location) {
    return null
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Job Knowledge Graph</h3>
          <p className="text-sm text-gray-600">
            Skills and relationships for this role
          </p>
        </div>
        <div className="flex gap-3 text-sm">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-gray-600">Job</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-gray-600">Skills</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-gray-600">Company</span>
          </div>
        </div>
      </div>

      <KnowledgeGraph
        data={graphData}
        width={700}
        height={350}
        onNodeClick={(node) => {
          console.log('Clicked:', node)
        }}
      />

      <p className="mt-3 text-xs text-gray-600 text-center">
        Visual representation of job requirements and relationships
      </p>
    </div>
  )
}

export default SingleJobGraph
