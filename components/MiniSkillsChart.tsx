'use client'

import { useMemo } from 'react'

interface MiniSkillsChartProps {
  skills: string[]
  maxSkills?: number
  className?: string
}

// Color palette for skills
const skillColors = [
  '#3b82f6', // blue
  '#10b981', // emerald
  '#f59e0b', // amber
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#06b6d4', // cyan
]

export function MiniSkillsChart({ skills, maxSkills = 5, className = '' }: MiniSkillsChartProps) {
  const displaySkills = useMemo(() => {
    return skills.slice(0, maxSkills).map((skill, i) => ({
      name: skill,
      // Create visual weight based on position (first skills assumed more important)
      weight: 100 - (i * 12),
      color: skillColors[i % skillColors.length]
    }))
  }, [skills, maxSkills])

  if (skills.length === 0) return null

  return (
    <div className={`${className}`}>
      <div className="flex items-center gap-1.5 mb-3">
        <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Skills Profile</span>
      </div>
      <div className="space-y-2">
        {displaySkills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-xs text-gray-700 font-medium" title={skill.name}>
                {skill.name}
              </span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out group-hover:opacity-100"
                style={{
                  width: `${skill.weight}%`,
                  backgroundColor: skill.color,
                  opacity: 0.85
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {skills.length > maxSkills && (
        <p className="text-xs text-gray-600 font-medium mt-2">+{skills.length - maxSkills} more skills</p>
      )}
    </div>
  )
}
