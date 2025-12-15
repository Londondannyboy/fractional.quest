'use client'

import { useState } from 'react'

// Role-specific defaults based on UK market data
const ROLES = [
  { id: 'cfo', label: 'CFO', avgDayRate: 1050, avgSalary: 145000 },
  { id: 'cto', label: 'CTO', avgDayRate: 1100, avgSalary: 155000 },
  { id: 'cmo', label: 'CMO', avgDayRate: 950, avgSalary: 130000 },
  { id: 'coo', label: 'COO', avgDayRate: 950, avgSalary: 140000 },
  { id: 'chro', label: 'CHRO', avgDayRate: 850, avgSalary: 125000 },
  { id: 'cpo', label: 'CPO', avgDayRate: 1000, avgSalary: 145000 },
]

interface FractionalVsFullTimeComparisonProps {
  className?: string
}

export function FractionalVsFullTimeComparison({ className = '' }: FractionalVsFullTimeComparisonProps) {
  const [selectedRole, setSelectedRole] = useState('cfo')
  const [fullTimeSalary, setFullTimeSalary] = useState(145000)
  const [daysNeeded, setDaysNeeded] = useState(2)

  const role = ROLES.find(r => r.id === selectedRole) || ROLES[0]

  // Calculations
  const fullTimeTotalCost = fullTimeSalary * 1.35 // Include NI, pension, benefits, overhead
  const fractionalAnnualCost = role.avgDayRate * daysNeeded * 48 // 48 working weeks
  const annualSavings = fullTimeTotalCost - fractionalAnnualCost
  const savingsPercent = Math.round((annualSavings / fullTimeTotalCost) * 100)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(amount)
  }

  // JSON-LD Schema for WebApplication
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Fractional vs Full-Time Cost Calculator',
    'description': 'Compare the cost of hiring a fractional executive versus a full-time hire in the UK',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Any',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'GBP'
    }
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden ${className}`}>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Fractional vs Full-Time: Cost Calculator</h3>
        <p className="text-purple-200">See how much your company could save with a fractional executive</p>
      </div>

      <div className="p-6 md:p-8">
        {/* Inputs Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Role Selector */}
          <div>
            <label htmlFor="role-select" className="block text-sm font-semibold text-gray-700 mb-2">
              Executive Role
            </label>
            <select
              id="role-select"
              value={selectedRole}
              onChange={(e) => {
                setSelectedRole(e.target.value)
                const newRole = ROLES.find(r => r.id === e.target.value)
                if (newRole) setFullTimeSalary(newRole.avgSalary)
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
              aria-label="Executive Role"
            >
              {ROLES.map(r => (
                <option key={r.id} value={r.id}>
                  Fractional {r.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">Average day rate: {formatCurrency(role.avgDayRate)}</p>
          </div>

          {/* Full-Time Salary */}
          <div>
            <label htmlFor="salary-slider" className="block text-sm font-semibold text-gray-700 mb-2">
              Full-Time {role.label} Salary
            </label>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatCurrency(fullTimeSalary)}
            </div>
            <input
              id="salary-slider"
              type="range"
              min="80000"
              max="300000"
              step="5000"
              value={fullTimeSalary}
              onChange={(e) => setFullTimeSalary(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              aria-label={`Full-Time ${role.label} Salary`}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>£80k</span>
              <span>£300k</span>
            </div>
          </div>

          {/* Days Per Week Needed */}
          <div>
            <label htmlFor="days-slider" className="block text-sm font-semibold text-gray-700 mb-2">
              Days Per Week Needed
            </label>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {daysNeeded} {daysNeeded === 1 ? 'day' : 'days'}/week
            </div>
            <input
              id="days-slider"
              type="range"
              min="1"
              max="5"
              step="0.5"
              value={daysNeeded}
              onChange={(e) => setDaysNeeded(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              aria-label="Days Per Week Needed"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 day</span>
              <span>5 days</span>
            </div>
          </div>
        </div>

        {/* Results Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Full-Time Cost */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <h4 className="font-semibold text-gray-900">Full-Time {role.label}</h4>
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">
              {formatCurrency(fullTimeTotalCost)}
            </div>
            <p className="text-sm text-gray-600">per year (salary + 35% overhead)</p>
            <div className="mt-4 pt-4 border-t border-red-200 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Base salary</span>
                <span>{formatCurrency(fullTimeSalary)}</span>
              </div>
              <div className="flex justify-between">
                <span>Employer NI, pension, benefits</span>
                <span>{formatCurrency(fullTimeSalary * 0.35)}</span>
              </div>
            </div>
          </div>

          {/* Fractional Cost */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h4 className="font-semibold text-gray-900">Fractional {role.label}</h4>
            </div>
            <div className="text-3xl font-bold text-green-700 mb-2">
              {formatCurrency(fractionalAnnualCost)}
            </div>
            <p className="text-sm text-gray-600">per year ({daysNeeded} days/week x 48 weeks)</p>
            <div className="mt-4 pt-4 border-t border-green-200 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Day rate</span>
                <span>{formatCurrency(role.avgDayRate)}</span>
              </div>
              <div className="flex justify-between">
                <span>Working weeks</span>
                <span>48</span>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Banner */}
        {annualSavings > 0 ? (
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 text-white text-center">
            <p className="text-purple-200 text-sm font-medium mb-1">Your Annual Savings</p>
            <div className="text-4xl font-black mb-2">
              {formatCurrency(annualSavings)}
            </div>
            <p className="text-lg font-semibold">
              That&apos;s {savingsPercent}% less than hiring full-time
            </p>
          </div>
        ) : (
          <div className="bg-gray-100 rounded-xl p-6 text-center">
            <p className="text-gray-600">
              At {daysNeeded} days/week, a full-time hire may be more cost-effective.
              Consider fractional for roles requiring 3 days/week or less.
            </p>
          </div>
        )}

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden border border-gray-200 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Factor</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Full-Time</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700">Fractional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-gray-600">Time to hire</td>
                <td className="px-4 py-3 text-center text-red-600">3-6 months</td>
                <td className="px-4 py-3 text-center text-green-700">2-4 weeks</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-600">Commitment</td>
                <td className="px-4 py-3 text-center text-red-600">Permanent</td>
                <td className="px-4 py-3 text-center text-green-700">Flexible</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-600">Experience level</td>
                <td className="px-4 py-3 text-center text-gray-900">Varies</td>
                <td className="px-4 py-3 text-center text-green-700">15+ years typical</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-600">Scale up/down</td>
                <td className="px-4 py-3 text-center text-red-600">Difficult</td>
                <td className="px-4 py-3 text-center text-green-700">Easy</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-600">Equity required</td>
                <td className="px-4 py-3 text-center text-red-600">Usually yes</td>
                <td className="px-4 py-3 text-center text-green-700">Rarely</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          Estimates based on UK market averages. Actual costs vary by location, experience, and industry.
          Full-time costs include estimated 35% for employer NI, pension, and benefits.
        </p>
      </div>
    </div>
  )
}
