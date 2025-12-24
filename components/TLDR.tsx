interface TLDRProps {
  points: string[]
  title?: string
  className?: string
}

export function TLDR({ points, title = "TL;DR", className = "" }: TLDRProps) {
  return (
    <div className={`bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded">
          {title}
        </span>
      </div>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
