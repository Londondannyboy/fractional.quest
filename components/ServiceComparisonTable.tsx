'use client'

interface ComparisonItem {
  feature: string
  fractional: string
  interim: string
  fullTime: string
}

interface ServiceComparisonTableProps {
  role?: string
  className?: string
  accentColor?: string
}

export function ServiceComparisonTable({
  role = 'CFO',
  className = '',
  accentColor = 'emerald'
}: ServiceComparisonTableProps) {
  const comparisons: ComparisonItem[] = [
    {
      feature: 'Commitment',
      fractional: '1-3 days/week',
      interim: 'Full-time (temporary)',
      fullTime: 'Full-time (permanent)',
    },
    {
      feature: 'Duration',
      fractional: 'Ongoing (6+ months typical)',
      interim: '3-12 months',
      fullTime: 'Permanent',
    },
    {
      feature: 'Cost',
      fractional: '£3,000-£6,000/week',
      interim: '£8,000-£12,000/week',
      fullTime: '£150,000-£250,000/year + benefits',
    },
    {
      feature: 'Focus',
      fractional: 'Strategic + operational',
      interim: 'Gap-fill or transformation',
      fullTime: 'All responsibilities',
    },
    {
      feature: 'Flexibility',
      fractional: 'Scale up/down as needed',
      interim: 'Fixed term contract',
      fullTime: 'Limited flexibility',
    },
    {
      feature: 'Best For',
      fractional: 'Growing companies, specific expertise needs',
      interim: 'Leadership gaps, major transitions',
      fullTime: 'Large orgs with full-time need',
    },
  ]

  const colorClasses: Record<string, { header: string; highlight: string; border: string }> = {
    emerald: { header: 'bg-emerald-500', highlight: 'bg-emerald-50', border: 'border-emerald-500' },
    amber: { header: 'bg-amber-500', highlight: 'bg-amber-50', border: 'border-amber-500' },
    blue: { header: 'bg-blue-500', highlight: 'bg-blue-50', border: 'border-blue-500' },
    orange: { header: 'bg-orange-500', highlight: 'bg-orange-50', border: 'border-orange-500' },
    purple: { header: 'bg-purple-500', highlight: 'bg-purple-50', border: 'border-purple-500' },
  }

  const colors = colorClasses[accentColor] || colorClasses.emerald

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-gray-500 bg-gray-50 border-b border-gray-200">
              Feature
            </th>
            <th className={`p-4 text-left text-sm font-bold uppercase tracking-wider text-white ${colors.header} border-b-4 ${colors.border}`}>
              Fractional {role}
            </th>
            <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-gray-700 bg-gray-100 border-b border-gray-200">
              Interim {role}
            </th>
            <th className="p-4 text-left text-sm font-bold uppercase tracking-wider text-gray-700 bg-gray-100 border-b border-gray-200">
              Full-Time {role}
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-4 text-sm font-semibold text-gray-900 border-b border-gray-200">
                {item.feature}
              </td>
              <td className={`p-4 text-sm text-gray-800 ${colors.highlight} border-b ${colors.border} border-l-4`}>
                {item.fractional}
              </td>
              <td className="p-4 text-sm text-gray-600 border-b border-gray-200">
                {item.interim}
              </td>
              <td className="p-4 text-sm text-gray-600 border-b border-gray-200">
                {item.fullTime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
