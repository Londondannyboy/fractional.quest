import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/Badge'
import { Suspense } from 'react'
import { RecommendedArticlesLight } from '@/components/RecommendedArticles'

// Revalidate every 4 hours for articles
export const revalidate = 14400

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getArticle(slug: string) {
  try {
    const sql = createDbQuery()
    const articles = await sql`
      SELECT
        id,
        slug,
        title,
        excerpt,
        content,
        hero_asset_url,
        hero_asset_alt,
        published_at,
        word_count,
        category,
        article_type
      FROM articles
      WHERE slug = ${slug}
        AND status = 'published'
        AND app = 'fractional'
      LIMIT 1
    `
    return articles[0] || null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

// Get related articles from same category
async function getRelatedArticles(category: string | null, currentSlug: string, limit: number = 5) {
  if (!category) return []
  try {
    const sql = createDbQuery()
    const articles = await sql`
      SELECT id, slug, title, excerpt, category, published_at, hero_asset_url
      FROM articles
      WHERE app = 'fractional'
        AND status = 'published'
        AND category = ${category}
        AND slug != ${currentSlug}
      ORDER BY published_at DESC
      LIMIT ${limit}
    `
    return articles
  } catch (error) {
    console.error('Error fetching related articles:', error)
    return []
  }
}

// Get hub link for a category
function getCategoryHub(category: string | null): { label: string; href: string } | null {
  const hubs: Record<string, { label: string; href: string }> = {
    Finance: { label: 'Finance Hub', href: '/fractional-cfo-jobs-uk' },
    Marketing: { label: 'Marketing Hub', href: '/fractional-cmo-jobs-uk' },
    Engineering: { label: 'Technology Hub', href: '/fractional-cto-jobs-uk' },
    Operations: { label: 'Operations Hub', href: '/fractional-coo-jobs-uk' },
    HR: { label: 'HR Hub', href: '/fractional-hr' },
    'Project Management': { label: 'Project Management Hub', href: '/fractional-project-manager' },
    Compliance: { label: 'Compliance Hub', href: '/fractional-compliance-fintech' },
    Security: { label: 'Security Hub', href: '/fractional-ciso-jobs-uk' },
  }
  return category ? hubs[category] || null : null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return { title: 'Article Not Found | Fractional Quest' }
  }

  return {
    title: `${article.title} | Fractional Quest`,
    description: article.meta_description || article.excerpt || 'Read this article on Fractional Quest',
  }
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  // Fetch related articles from the same category
  const relatedArticles = await getRelatedArticles(article.category, slug, 5)
  const categoryHub = getCategoryHub(article.category)

  const readingTime = article.word_count ? Math.ceil(article.word_count / 200) : null
  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/fractional-jobs-articles" className="text-purple-200 hover:text-white transition-colors text-sm">
              ← Back to Articles
            </Link>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <Badge variant="primary" size="md" className="bg-purple-600/50 text-white border border-purple-400/30">
              Fractional Executive Guide
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed mb-8 max-w-3xl">
              {article.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-purple-200">
            {formattedDate && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate}
              </span>
            )}
            {readingTime && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            )}
            {article.word_count && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {article.word_count.toLocaleString()} words
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Hero Image (if exists) */}
      {article.hero_asset_url && (
        <div className="relative -mt-8 max-w-5xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={article.hero_asset_url}
              alt={article.hero_asset_alt || article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Article Body with Enhanced Styling */}
            <div
              className="article-content bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-10 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ready to find fractional talent?</h3>
                  <p className="text-purple-100">Browse our curated list of fractional executive opportunities.</p>
                </div>
                <Link href="/fractional-jobs-uk">
                  <button className="px-8 py-4 bg-white text-purple-700 rounded-xl font-bold hover:bg-purple-50 transition-colors whitespace-nowrap shadow-lg">
                    Browse Jobs →
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Category Hub Link */}
              {categoryHub && (
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100 p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-2 block">Content Hub</span>
                  <Link href={categoryHub.href} className="group">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                      {categoryHub.label}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Explore all {article.category} guides and resources
                    </p>
                    <span className="inline-flex items-center text-purple-600 font-semibold text-sm">
                      Visit Hub <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                    </span>
                  </Link>
                </div>
              )}

              {/* Related Articles in Cluster */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    More in {article.category}
                  </h3>
                  <ul className="space-y-4">
                    {relatedArticles.map((related: any) => (
                      <li key={related.id}>
                        <Link href={`/${related.slug}`} className="group block">
                          <h4 className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          {related.published_at && (
                            <span className="text-xs text-gray-400 mt-1 block">
                              {new Date(related.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {categoryHub && (
                    <Link
                      href={categoryHub.href}
                      className="block mt-4 pt-4 border-t border-gray-100 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      View all {article.category} articles →
                    </Link>
                  )}
                </div>
              )}

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/fractional-jobs-uk" className="text-gray-600 hover:text-purple-600 transition-colors">Browse All Jobs</Link></li>
                  <li><Link href="/fractional-jobs-articles" className="text-gray-600 hover:text-purple-600 transition-colors">All Articles</Link></li>
                  <li><Link href="/fractional-executive-salary-uk" className="text-gray-600 hover:text-purple-600 transition-colors">Salary Guide</Link></li>
                  <li><Link href="/handler/sign-up" className="text-gray-600 hover:text-purple-600 transition-colors">Create Profile</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* You May Also Like Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((related: any) => (
                <Link key={related.id} href={`/${related.slug}`} className="group">
                  <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all h-full flex flex-col">
                    {related.hero_asset_url ? (
                      <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                        <img
                          src={related.hero_asset_url}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                        <span className="text-4xl">📚</span>
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col">
                      {related.category && (
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-2">{related.category}</span>
                      )}
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h3>
                      {related.excerpt && (
                        <p className="text-gray-600 text-sm line-clamp-2 flex-1">{related.excerpt}</p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
          <Link href="/fractional-jobs-articles" className="text-purple-700 hover:text-purple-900 font-medium flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Articles
          </Link>
          <a
            href="#top"
            className="text-gray-600 hover:text-gray-700 flex items-center gap-2"
          >
            Back to top
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
