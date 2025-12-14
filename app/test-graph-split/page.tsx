import { Metadata } from 'next'
import { JobsGraph3D } from '@/components/JobsGraph3D'

export const metadata: Metadata = {
  title: 'Graph Test - Split Screen',
  description: 'Testing split screen graph layout',
  robots: 'noindex, nofollow',
}

export default function TestGraphSplitPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 p-4">
        <h1 className="text-white text-xl font-bold">Split Screen Graph Test</h1>
        <p className="text-gray-400 text-sm">Two graphs with different viewpoints side by side</p>
      </div>

      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        {/* Left Panel - CFO Jobs */}
        <div className="flex-1 relative border-r border-gray-800">
          <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur px-4 py-2 rounded-lg">
            <h2 className="text-white font-semibold">CFO Jobs</h2>
            <p className="text-gray-400 text-xs">Finance leadership roles</p>
          </div>
          <JobsGraph3D
            roleFilter="CFO"
            limit={20}
            height="100%"
            isHero={true}
            showOverlay={false}
          />
        </div>

        {/* Right Panel - CTO Jobs */}
        <div className="flex-1 relative">
          <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur px-4 py-2 rounded-lg">
            <h2 className="text-white font-semibold">CTO Jobs</h2>
            <p className="text-gray-400 text-xs">Technology leadership roles</p>
          </div>
          <JobsGraph3D
            roleFilter="CTO"
            limit={20}
            height="100%"
            isHero={true}
            showOverlay={false}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full text-xs z-30 flex items-center gap-6">
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
