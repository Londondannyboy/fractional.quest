'use client'

import { useState } from 'react'

// Role-specific defaults based on UK market data
const ROLES = [
  { id: 'cfo', label: 'CFO', minRate: 800, avgRate: 1050, maxRate: 1500 },
  { id: 'cto', label: 'CTO', minRate: 850, avgRate: 1100, maxRate: 1600 },
  { id: 'cmo', label: 'CMO', minRate: 700, avgRate: 950, maxRate: 1400 },
  { id: 'coo', label: 'COO', minRate: 750, avgRate: 950, maxRate: 1400 },
  { id: 'chro', label: 'CHRO', minRate: 650, avgRate: 850, maxRate: 1200 },
  { id: 'cpo', label: 'CPO', minRate: 800, avgRate: 1000, maxRate: 1400 },
  { id: 'ciso', label: 'CISO', minRate: 900, avgRate: 1150, maxRate: 1600 },
]

const LOCATIONS = [
  { id: 'london', label: 'London', modifier: 1.15 },
  { id: 'manchester', label: 'Manchester', modifier: 1.0 },
  { id: 'birmingham', label: 'Birmingham', modifier: 0.95 },
  { id: 'edinburgh', label: 'Edinburgh', modifier: 1.0 },
  { id: 'bristol', label: 'Bristol', modifier: 1.0 },
  { id: 'remote', label: 'Remote (UK-wide)', modifier: 1.05 },
]

interface FractionalRateCalculatorUKProps {
  className?: string
}

export function FractionalRateCalculatorUK({ className = '' }: FractionalRateCalculatorUKProps) {
  const [selectedRole, setSelectedRole] = useState('cfo')
  const [selectedLocation, setSelectedLocation] = useState('london')
  const [dayRate, setDayRate] = useState(1050)
  const [daysPerWeek, setDaysPerWeek] = useState(2.5)
  const [clients, setClients] = useState(2)

  const role = ROLES.find(r => r.id === selectedRole) || ROLES[0]
  const location = LOCATIONS.find(l => l.id === selectedLocation) || LOCATIONS[0]

  // Adjusted rate based on location
  const locationAdjustedAvg = Math.round(role.avgRate * location.modifier)
  const locationAdjustedMin = Math.round(role.minRate * location.modifier)
  const locationAdjustedMax = Math.round(role.maxRate * location.modifier)

  // Calculations
  const weeklyEarnings = dayRate * daysPerWeek * clients
  const monthlyEarnings = weeklyEarnings * 4.33
  const annualEarnings = weeklyEarnings * 48
  const totalDaysPerWeek = daysPerWeek * clients

  // Market position
  const marketPosition = dayRate < locationAdjustedAvg ? 'below' : dayRate > locationAdjustedAvg ? 'above' : 'at'

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
    'name': 'Fractional Executive Rate Calculator UK',
    'description': 'Calculate your potential earnings as a fractional executive in the UK',
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
        <h3 className="text-2xl font-bold mb-2">Fractional Rate Calculator UK</h3>
        <p className="text-purple-200">Calculate your earning potential as a fractional executive</p>
      </div>

      <div className="p-6 md:p-8">
        {/* Role and Location Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Role Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => {
                setSelectedRole(e.target.value)
                const newRole = ROLES.find(r => r.id === e.target.value)
                if (newRole) {
                  const newAdjustedAvg = Math.round(newRole.avgRate * location.modifier)
                  setDayRate(newAdjustedAvg)
                }
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
            >
              {ROLES.map(r => (
                <option key={r.id} value={r.id}>
                  Fractional {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Location
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value)
                const newLocation = LOCATIONS.find(l => l.id === e.target.value)
                if (newLocation) {
                  const newAdjustedAvg = Math.round(role.avgRate * newLocation.modifier)
                  setDayRate(newAdjustedAvg)
                }
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
            >
              {LOCATIONS.map(l => (
                <option key={l.id} value={l.id}>
                  {l.label} {l.modifier > 1 ? `(+${Math.round((l.modifier - 1) * 100)}%)` : l.modifier < 1 ? `(${Math.round((l.modifier - 1) * 100)}%)` : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-6 mb-8">
          {/* Day Rate */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Day Rate
            </label>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-4xl font-black text-purple-700">{formatCurrency(dayRate)}</span>
              <span className="text-sm text-gray-500">
                {marketPosition === 'below' && `(${Math.round(((locationAdjustedAvg - dayRate) / locationAdjustedAvg) * 100)}% below market)`}
                {marketPosition === 'above' && `(${Math.round(((dayRate - locationAdjustedAvg) / locationAdjustedAvg) * 100)}% above market)`}
                {marketPosition === 'at' && '(at market rate)'}
              </span>
            </div>
            <input
              type="range"
              min={locationAdjustedMin}
              max={locationAdjustedMax}
              step="25"
              value={dayRate}
              onChange={(e) => setDayRate(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{formatCurrency(locationAdjustedMin)}</span>
              <span className="text-purple-600 font-medium">Avg: {formatCurrency(locationAdjustedAvg)}</span>
              <span>{formatCurrency(locationAdjustedMax)}</span>
            </div>
          </div>

          {/* Days Per Week Per Client */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Days Per Week (Per Client)
            </label>
            <div className="text-2xl font-bold text-gray-900 mb-3">
              {daysPerWeek} {daysPerWeek === 1 ? 'day' : 'days'}
            </div>
            <input
              type="range"
              min="0.5"
              max="4"
              step="0.5"
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5 day</span>
              <span>4 days</span>
            </div>
          </div>

          {/* Number of Clients */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Number of Clients
            </label>
            <div className="flex gap-3">
              {[1, 2, 3, 4].map(num => (
                <button
                  key={num}
                  onClick={() => setClients(num)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                    clients === num
                      ? 'bg-purple-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Total: {totalDaysPerWeek} days/week working
              {totalDaysPerWeek > 5 && (
                <span className="text-amber-600 font-medium"> (exceeds 5 days)</span>
              )}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 mb-6">
          <h4 className="text-sm font-semibold text-purple-700 uppercase tracking-wider mb-4">Your Earning Potential</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Weekly</div>
              <div className="text-xl font-bold text-gray-900">{formatCurrency(weeklyEarnings)}</div>
            </div>
            <div className="text-center border-x border-purple-200">
              <div className="text-sm text-gray-600 mb-1">Monthly</div>
              <div className="text-xl font-bold text-gray-900">{formatCurrency(monthlyEarnings)}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Annual</div>
              <div className="text-3xl font-black text-purple-700">{formatCurrency(annualEarnings)}</div>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-4">How This Is Calculated</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Day rate</span>
              <span className="font-medium text-gray-900">{formatCurrency(dayRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Days per client per week</span>
              <span className="font-medium text-gray-900">{daysPerWeek}</span>
            </div>
            <div className="flex justify-between">
              <span>Number of clients</span>
              <span className="font-medium text-gray-900">{clients}</span>
            </div>
            <div className="flex justify-between">
              <span>Working weeks per year</span>
              <span className="font-medium text-gray-900">48</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-semibold">
              <span>Annual total</span>
              <span className="text-purple-700">{formatCurrency(dayRate)} x {daysPerWeek} x {clients} x 48 = {formatCurrency(annualEarnings)}</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          Rates based on UK market data for {role.label} roles. Actual rates vary by experience, industry, and specific client requirements.
          Annual calculation assumes 48 working weeks (4 weeks holiday).
        </p>
      </div>
    </div>
  )
}
