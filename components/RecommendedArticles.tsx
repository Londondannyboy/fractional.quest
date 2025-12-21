import Link from 'next/link'
import { createDbQuery } from '@/lib/db'

interface Article {
  id: number
  slug: string
  title: string
  excerpt: string | null
  category: string | null
  article_type: string | null
  published_at: string | null
}

interface RecommendedArticlesProps {
  limit?: number
  title?: string
  category?: string
}

const categoryColors: Record<string, string> = {
  Finance: 'bg-blue-100 text-blue-800',
  Marketing: 'bg-amber-100 text-amber-800',
  Engineering: 'bg-purple-100 text-purple-800',
  Operations: 'bg-green-100 text-green-800',
  HR: 'bg-pink-100 text-pink-800',
  Sales: 'bg-orange-100 text-orange-800',
  General: 'bg-gray-100 text-gray-700',
}

function formatDate(dateString: string | null): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

export async function RecommendedArticles({
  limit = 5,
  title = 'Recommended Reading',
  category
}: RecommendedArticlesProps) {
  let articles: Article[] = []

  try {
    const sql = createDbQuery()

    if (category) {
      articles = await sql`
        SELECT id, slug, title, excerpt, category, article_type, published_at
        FROM articles
        WHERE app = 'fractional'
          AND status = 'published'
          AND category = ${category}
        ORDER BY published_at DESC
        LIMIT ${limit}
      ` as Article[]
    } else {
      articles = await sql`
        SELECT id, slug, title, excerpt, category, article_type, published_at
        FROM articles
        WHERE app = 'fractional'
          AND status = 'published'
        ORDER BY published_at DESC
        LIMIT ${limit}
      ` as Article[]
    }
  } catch (error) {
    console.error('RecommendedArticles: Failed to fetch', error)
  }

  if (articles.length === 0) {
    return null
  }

  return (
    <div className="bg-gray-950 rounded-xl border border-gray-800 p-6">
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              href={`/${article.slug}`}
              className="group block"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    {article.category && (
                      <span className={`text-xs px-2 py-0.5 rounded ${categoryColors[article.category] || categoryColors.General}`}>
                        {article.category}
                      </span>
                    )}
                    {article.published_at && (
                      <span className="text-xs text-gray-500">
                        {formatDate(article.published_at)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/fractional-jobs-articles"
        className="block mt-4 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
      >
        View all articles →
      </Link>
    </div>
  )
}

export async function RecommendedArticlesLight({
  limit = 5,
  title = 'Recommended Reading',
  category
}: RecommendedArticlesProps) {
  let articles: Article[] = []

  try {
    const sql = createDbQuery()

    if (category) {
      articles = await sql`
        SELECT id, slug, title, excerpt, category, article_type, published_at
        FROM articles
        WHERE app = 'fractional'
          AND status = 'published'
          AND category = ${category}
        ORDER BY published_at DESC
        LIMIT ${limit}
      ` as Article[]
    } else {
      articles = await sql`
        SELECT id, slug, title, excerpt, category, article_type, published_at
        FROM articles
        WHERE app = 'fractional'
          AND status = 'published'
        ORDER BY published_at DESC
        LIMIT ${limit}
      ` as Article[]
    }
  } catch (error) {
    console.error('RecommendedArticlesLight: Failed to fetch', error)
  }

  if (articles.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id}>
            <Link
              href={`/${article.slug}`}
              className="group block"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    {article.category && (
                      <span className={`text-xs px-2 py-0.5 rounded ${categoryColors[article.category] || categoryColors.General}`}>
                        {article.category}
                      </span>
                    )}
                    {article.published_at && (
                      <span className="text-xs text-gray-500">
                        {formatDate(article.published_at)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/fractional-jobs-articles"
        className="block mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
      >
        View all articles →
      </Link>
    </div>
  )
}
