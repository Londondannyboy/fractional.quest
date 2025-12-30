'use client'

// Auth removed - will be replaced with NeonAuth
// This component is temporarily disabled

export function SavedJobsCounter() {
  // Return a placeholder until NeonAuth is added
  return (
    <div className="block bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Save Jobs</p>
          <p className="text-xs text-gray-500">Coming soon</p>
        </div>
      </div>
    </div>
  )
}

export default SavedJobsCounter
