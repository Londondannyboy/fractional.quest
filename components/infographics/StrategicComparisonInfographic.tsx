'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, DollarSign, Zap } from 'lucide-react'

export interface ComparisonData {
  role: string
  labels?: {
    fullTime: string
    fractional: string
  }
  fullTime: {
    baseSalary: number
    bonusesBenefits: number
    recruitmentTraining: number
    hiddenCosts: number
    total: number
  }
  fractional: {
    fee: number
    total: number
    daysPerWeek: number
  }
  stats?: {
    label: string
    full: number
    frac: number
  }[]
  strengths: {
    fractional: string
    fullTime: string
  }
}

interface Props {
  data: ComparisonData
}

export function StrategicComparisonInfographic({ data }: Props) {
  const [activeTab, setActiveTab] = useState<'cost' | 'value'>('cost')
  const labels = data.labels || {
    fullTime: `Full-Time ${data.role}`,
    fractional: `Fractional ${data.role}`
  }

  return (
    <div className="my-12 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5">
      <div className="bg-slate-900/5 p-1">
        <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-200/50 p-1">
          <button
            onClick={() => setActiveTab('cost')}
            className={`relative flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'cost'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-slate-600 hover:bg-white/50 hover:text-slate-900'
            }`}
          >
            <DollarSign className="h-4 w-4" />
            Cost Analysis
          </button>
          <button
            onClick={() => setActiveTab('value')}
            className={`relative flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
              activeTab === 'value'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-slate-600 hover:bg-white/50 hover:text-slate-900'
            }`}
          >
            <Zap className="h-4 w-4" />
            Strategic Value
          </button>
        </div>
      </div>

      <div className="min-h-[500px] p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'cost' ? (
            <CostView key="cost" data={data} labels={labels} />
          ) : (
            <ValueView key="value" data={data} labels={labels} />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function CostView({ data, labels }: { data: ComparisonData; labels: { fullTime: string; fractional: string } }) {
  const { fullTime, fractional, role } = data
  const savings = fullTime.total - fractional.total

  const fullTimeBreakdown = [
    { label: 'Base Salary / Fee', value: fullTime.baseSalary, color: 'bg-slate-400' },
    { label: 'Bonuses & Benefits', value: fullTime.bonusesBenefits, color: 'bg-slate-300' },
    { label: 'Recruitment & Training', value: fullTime.recruitmentTraining, color: 'bg-slate-200' },
    { label: 'Hidden Costs', value: fullTime.hiddenCosts, color: 'bg-slate-100' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 md:flex-row"
    >
      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Annual Investment Required</h3>
          <p className="mt-2 text-slate-600">
            Comparing total cost of ownership for {labels.fractional} vs {labels.fullTime}.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <div className="mb-2 flex justify-between text-sm font-medium text-slate-900">
              <span>{labels.fullTime}</span>
              <span>£{(fullTime.total / 1000).toFixed(0)}k</span>
            </div>
            <div className="flex h-12 w-full overflow-hidden rounded-lg bg-slate-50 ring-1 ring-slate-900/5">
              {fullTimeBreakdown.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.value / fullTime.total) * 100}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`${item.color} relative group`}
                >
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                </motion.div>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-400"></span>Base</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-300"></span>Benefits</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-200"></span>Recruit</span>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm font-medium text-slate-900">
              <span>{labels.fractional} ({fractional.daysPerWeek} days/wk)</span>
              <span className="text-blue-600">£{(fractional.total / 1000).toFixed(0)}k</span>
            </div>
            <div className="relative flex h-12 w-full overflow-hidden rounded-lg bg-slate-50 ring-1 ring-slate-900/5">
              <div className="absolute inset-0 flex">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(fractional.total / fullTime.total) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-blue-600 relative group"
                  >
                     <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
                  </motion.div>
              </div>
            </div>
             <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-600"></span>Annual Fee</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
              <span className="text-lg font-bold">£</span>
            </div>
            <div>
              <div className="text-sm font-medium text-blue-900">Annual Savings</div>
              <div className="text-2xl font-bold text-blue-700">£{savings.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 rounded-xl bg-slate-50 p-6 ring-1 ring-slate-900/5">
         <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">The Efficiency Gap</h4>
         <ul className="space-y-4">
            <li className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                <div>
                    <strong className="text-slate-900">Cost Overheads:</strong>
                    <p className="text-sm text-slate-600">Full-time employment or broad agency retainers often carry significant overheads that don't directly drive strategy.</p>
                </div>
            </li>
            <li className="flex items-start gap-3">
                <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400" />
                <div>
                    <strong className="text-slate-900">Execution vs Strategy:</strong>
                    <p className="text-sm text-slate-600">Without internal strategic leadership, tactical execution often suffers from misalignment and wasted spend.</p>
                </div>
            </li>
            <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                <div>
                    <strong className="text-slate-900">Value Focused:</strong>
                    <p className="text-sm text-slate-600">Fractional leadership ensures every penny of your execution budget is aligned with high-level business goals.</p>
                </div>
            </li>
         </ul>
      </div>
    </motion.div>
  )
}

function ValueView({ data, labels }: { data: ComparisonData; labels: { fullTime: string; fractional: string } }) {
  const defaultStats = [
    { label: 'Cost Efficiency', full: 40, frac: 95 },
    { label: 'Hiring Speed', full: 20, frac: 90 },
    { label: 'Specialized Skills', full: 60, frac: 90 },
    { label: 'Availability', full: 100, frac: 40 },
    { label: 'Cultural Integration', full: 95, frac: 50 },
    { label: 'Flexibility', full: 30, frac: 95 },
  ]

  const stats = data.stats || defaultStats

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 md:flex-row"
    >
        <div className="flex items-center justify-center flex-1">
             <RadarChart stats={stats} labels={labels} />
        </div>

        <div className="flex-1 space-y-6">
            <div>
                <h3 className="text-xl font-bold text-slate-900">Strategic Trade-offs</h3>
                <p className="mt-2 text-slate-600">
                    Comparing deployment models across key operational dimensions.
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50 p-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-600 shadow-sm" />
                    <div>
                        <strong className="text-blue-900">{labels.fractional} Advantage</strong>
                        <p className="text-sm text-slate-600">{data.strengths.fractional}</p>
                    </div>
                </div>
                 <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-slate-400 shadow-sm" />
                    <div>
                        <strong className="text-slate-900">{labels.fullTime} Advantage</strong>
                        <p className="text-sm text-slate-600">{data.strengths.fullTime}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-900/5">
                    <div className="mb-1 text-xs font-semibold uppercase text-slate-400">Best For</div>
                    <div className="font-medium text-slate-900 text-sm">Growth & Agility</div>
                    <div className="text-sm text-blue-600 font-bold">{labels.fractional}</div>
                </div>
                 <div className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-900/5">
                    <div className="mb-1 text-xs font-semibold uppercase text-slate-400">Best For</div>
                    <div className="font-medium text-slate-900 text-sm">Stability & Scale</div>
                    <div className="text-sm text-slate-500 font-bold">{labels.fullTime}</div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

function RadarChart({ stats, labels }: { stats: { label: string; full: number; frac: number }[]; labels: { fullTime: string; fractional: string } }) {
    const radius = 100
    const center = 150
    const angleStep = (Math.PI * 2) / stats.length

    const getPoint = (value: number, index: number) => {
        const angle = index * angleStep - Math.PI / 2
        const r = (value / 100) * radius
        const x = center + r * Math.cos(angle)
        const y = center + r * Math.sin(angle)
        return `${x},${y}`
    }

    const fullPoints = stats.map((s, i) => getPoint(s.full, i)).join(' ')
    const fracPoints = stats.map((s, i) => getPoint(s.frac, i)).join(' ')
    const axes = stats.map((s, i) => getPoint(100, i))

    return (
        <div className="relative h-[300px] w-[300px]">
            <svg width="300" height="300" className="overflow-visible">
                {[0.25, 0.5, 0.75, 1].map((scale) => (
                    <circle
                        key={scale}
                        cx={center}
                        cy={center}
                        r={radius * scale}
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                    />
                ))}

                {axes.map((point, i) => {
                     const [x, y] = point.split(',').map(Number)
                     return (
                         <g key={i}>
                             <line x1={center} y1={center} x2={x} y2={y} stroke="#cbd5e1" strokeWidth="1" />
                             <foreignObject
                                x={x < center ? x - 75 : x - 5}
                                y={y < center ? y - 25 : y + 5}
                                width="80"
                                height="40"
                                className="overflow-visible"
                             >
                                <div className={`text-[9px] font-bold text-slate-500 leading-tight ${
                                    x < center ? 'text-right' :
                                    Math.abs(x - center) < 5 ? 'text-center' : 'text-left'
                                }`}>
                                    {stats[i].label}
                                </div>
                             </foreignObject>
                         </g>
                     )
                })}

                <motion.polygon
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.4, scale: 1 }}
                    points={fullPoints}
                    fill="#94a3b8"
                    stroke="#475569"
                    strokeWidth="2"
                />

                <motion.polygon
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    points={fracPoints}
                    fill="#3b82f6"
                    stroke="#2563eb"
                    strokeWidth="2"
                />
            </svg>

            <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-4 text-[10px] font-bold uppercase tracking-wider">
                 <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="text-slate-500">{labels.fullTime}</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-blue-600">{labels.fractional}</span>
                 </div>
            </div>
        </div>
    )
}
