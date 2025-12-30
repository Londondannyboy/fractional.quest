import Link from 'next/link'

interface Article {
  title: string
  href: string
  category?: string
}

interface Guide {
  title: string
  href: string
  icon?: string
}

interface SidebarPanelsProps {
  showPopularArticles?: boolean
  showGuides?: boolean
  showRelatedJobs?: boolean
  showPostJob?: boolean
  popularArticles?: Article[]
  guides?: Guide[]
  relatedJobsHref?: string
  className?: string
}

const defaultArticles: Article[] = [
  { title: 'How to Become a Fractional Executive', href: '/how-to-become-a-fractional-executive', category: 'Guide' },
  { title: 'Fractional vs Interim: Key Differences', href: '/fractional-vs-interim', category: 'Comparison' },
  { title: 'UK Fractional Executive Salary Guide', href: '/fractional-executive-salary-uk', category: 'Salary' },
]

const defaultGuides: Guide[] = [
  { title: 'Day Rate Calculator', href: '#rate-calculator', icon: '🧮' },
  { title: 'IR35 Tax Guide', href: '#ir35-calculator', icon: '📋' },
  { title: 'Getting Started', href: '/how-to-become-a-fractional-executive', icon: '🚀' },
]

export function SidebarPanels({
  showPopularArticles = true,
  showGuides = true,
  showRelatedJobs = false,
  showPostJob = true,
  popularArticles = defaultArticles,
  guides = defaultGuides,
  relatedJobsHref,
  className = "",
}: SidebarPanelsProps) {
  return (
    <div className={`space-y-5 ${className}`}>
      {/* Popular Articles */}
      {showPopularArticles && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-lg">📚</span>
            Popular Articles
          </h3>
          <div className="space-y-3">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                href={article.href}
                className="block group"
              >
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">
                      {article.title}
                    </p>
                    {article.category && (
                      <span className="text-xs text-gray-600">{article.category}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick Guides */}
      {showGuides && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-lg">⚡</span>
            Quick Tools
          </h3>
          <div className="space-y-2">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href={guide.href}
                className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-base">{guide.icon || '📖'}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {guide.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Jobs */}
      {showRelatedJobs && relatedJobsHref && (
        <Link
          href={relatedJobsHref}
          className="block bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 text-white hover:from-gray-700 hover:to-gray-800 transition-all group"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💼</span>
            <h3 className="text-base font-bold">More Jobs</h3>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            Browse all fractional opportunities
          </p>
          <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors flex items-center gap-1">
            View all jobs →
          </span>
        </Link>
      )}

      {/* Post a Job CTA */}
      {showPostJob && (
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-5 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🎯</span>
            <h3 className="text-base font-bold">Hiring?</h3>
          </div>
          <p className="text-sm text-emerald-100 mb-4">
            Post your fractional role and reach experienced executives.
          </p>
          <Link
            href="/contact/companies"
            className="block w-full text-center px-4 py-2.5 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors text-sm"
          >
            Post a Job
          </Link>
        </div>
      )}
    </div>
  )
}
