'use client'

// Real market statistics from authoritative sources - no fake testimonials
const stats = [
  { value: '68%', label: 'YoY growth in fractional demand', source: 'Marks Sattin 2025' },
  { value: '£5.7B', label: 'Global fractional executive market', source: 'Industry Reports' },
  { value: '40-60%', label: 'Cost savings vs full-time C-suite', source: 'ScaleUp Institute' },
  { value: '25%', label: 'US businesses using fractional leaders', source: 'Market Research' },
]

interface SocialProofProps {
  className?: string
  variant?: 'full' | 'compact' | 'stats-only'
}

export function SocialProof({ className = '', variant = 'full' }: SocialProofProps) {
  if (variant === 'stats-only') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 ${className}`}>
        <h3 className="text-white font-bold text-lg mb-4 text-center">The Fractional Revolution</h3>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 ${className}`}>
        <h3 className="text-white font-bold text-sm mb-3">Market Growth</h3>
        <div className="grid grid-cols-2 gap-3">
          {stats.slice(0, 2).map((stat, index) => (
            <div key={index}>
              <div className="text-xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Full variant - stats only, no fake testimonials
  return (
    <section className={`${className}`}>
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8">
        <h3 className="text-white font-bold text-xl mb-6 text-center">The Rise of Fractional Leadership</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-xs mt-6">
          Sources: <a href="https://www.markssattin.co.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">Marks Sattin</a>, <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">ScaleUp Institute</a>, Industry Reports
        </p>
      </div>

      {/* Why Fractional - Educational instead of fake testimonials */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mt-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Companies Choose Fractional</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Cost Effective</h4>
            <p className="text-sm text-gray-600">Access C-suite expertise at 40-60% of full-time cost</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Immediate Impact</h4>
            <p className="text-sm text-gray-600">Experienced leaders who hit the ground running</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Flexible Scale</h4>
            <p className="text-sm text-gray-600">Scale leadership up or down as your needs change</p>
          </div>
        </div>
      </div>
    </section>
  )
}
