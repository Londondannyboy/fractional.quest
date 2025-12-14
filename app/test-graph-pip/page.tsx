import { Metadata } from 'next'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const metadata: Metadata = {
  title: 'Graph Test - Picture in Picture',
  description: 'Testing graph-in-graph layout with mini overview',
  robots: 'noindex, nofollow',
}

export default function TestGraphPipPage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black via-black/80 to-transparent z-20 p-6">
        <h1 className="text-white text-2xl font-bold">Graph in Graph Test</h1>
        <p className="text-gray-400">Main view with mini overview in corner</p>
      </div>

      {/* Main Graph - Full Screen */}
      <div className="absolute inset-0">
        <JobsGraph3D
          limit={30}
          height="100%"
          isHero={true}
          showOverlay={false}
        />
      </div>

      {/* Mini Graph - Picture in Picture (Top Right) */}
      <div className="absolute top-24 right-6 w-80 h-64 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl z-30">
        <div className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs">
          <span className="text-white font-medium">CFO Focus</span>
        </div>
        <JobsGraph3D
          roleFilter="CFO"
          limit={15}
          height="100%"
          isHero={true}
          showOverlay={false}
        />
      </div>

      {/* Mini Graph - Picture in Picture (Bottom Right) */}
      <div className="absolute bottom-24 right-6 w-80 h-64 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl z-30">
        <div className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur px-3 py-1 rounded text-xs">
          <span className="text-white font-medium">London Focus</span>
        </div>
        <JobsGraph3D
          locationFilter="london"
          limit={15}
          height="100%"
          isHero={true}
          showOverlay={false}
        />
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full text-xs z-30 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-amber-500" />
          <span className="text-white">Companies</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-gray-300">Jobs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-gray-400">Skills</span>
        </div>
        <span className="text-gray-400 border-l border-gray-600 pl-4">Click nodes to explore</span>
      </div>
    </div>
  )
}
