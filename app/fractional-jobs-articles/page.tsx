import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { ArticleCard } from '@/components/ArticleCard'
import { JobsCalendarHeatmap } from '@/components/JobsCalendarHeatmap'
import { ArticleSearch } from '@/components/ArticleSearch'

export const revalidate = 14400 // Revalidate every 4 hours

export const metadata: Metadata = {
  title: 'Fractional Exec Articles',
  description: 'Fractional executive articles. Career tips, salary guides, hiring strategies.',
  openGraph: {
    title: 'Fractional Executive Articles & Guides | Fractional Quest',
    description: 'Expert guides and articles about fractional executive roles, career tips, and hiring strategies.',
    type: 'website',
  },
}

interface ArticlesPageProps {
  searchParams: Promise<{
    page?: string
    sort?: string
    category?: string
    type?: string
    q?: string
  }>
}

async function getArticleStats() {
  try {
    const sql = createDbQuery()
    const result = await sql`
      SELECT COUNT(*) as count
      FROM articles
      WHERE status = 'published' AND app = 'fractional'
    `
    return parseInt((result[0] as any)?.count || '0')
  } catch (error) {
    return 0
  }
}

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const params = await searchParams
  const limit = 12
  const page = parseInt(params.page || '1')
  const offset = (page - 1) * limit

  const sort = params.sort || 'recent'
  const category = params.category
  const type = params.type
  const searchQuery = params.q

  try {
    const sql = createDbQuery()

    // Build WHERE clause
    const whereConditions = ['status = \'published\'', 'app = \'fractional\'']
    if (category) {
      whereConditions.push(`category = '${category}'`)
    }
    if (type) {
      whereConditions.push(`article_type = '${type}'`)
    }
    if (searchQuery) {
      // Search in title and excerpt (escape single quotes)
      const escapedQuery = searchQuery.replace(/'/g, "''")
      whereConditions.push(`(title ILIKE '%${escapedQuery}%' OR excerpt ILIKE '%${escapedQuery}%' OR meta_description ILIKE '%${escapedQuery}%')`)
    }

    // Build ORDER BY clause
    const orderBy = sort === 'oldest' ? 'published_at ASC' : 'published_at DESC'

    const [articles, totalCount] = await Promise.all([
      sql`
        SELECT
          id,
          slug,
          title,
          excerpt,
          meta_description,
          hero_asset_url,
          hero_asset_alt,
          published_at,
          word_count,
          category,
          article_type,
          featured_asset_url
        FROM articles
        WHERE ${sql.unsafe(whereConditions.join(' AND '))}
        ORDER BY ${sql.unsafe(orderBy)}
        LIMIT ${limit} OFFSET ${offset}
      `,
      sql`SELECT COUNT(*) as count FROM articles WHERE ${sql.unsafe(whereConditions.join(' AND '))}`
    ])

    const totalArticles = parseInt((totalCount[0] as any)?.count || '0')

    const totalPages = Math.ceil(totalArticles / limit)

    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section with Aspirational Image */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          {/* Background Image - Sunny workspace */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/80 via-orange-500/60 to-yellow-400/40" />
          </div>

          <div className="relative z-10 w-full py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="max-w-2xl">
                <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
                  <span className="mr-2">←</span> Back to Home
                </Link>

                <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  {totalArticles}+ Expert Guides
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Articles & Resources
                </h1>

                <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                  Expert guides, case studies, and career tips for fractional executives. Learn how to build a successful portfolio career.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#articles"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
                  >
                    Browse Articles
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <Link
                    href="/handler/sign-up"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white/20 transition-all duration-200"
                  >
                    Get Updates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Search Bar */}
            <div className="mb-6">
              <Suspense fallback={<div className="h-12 bg-gray-100 rounded-lg animate-pulse max-w-md" />}>
                <ArticleSearch />
              </Suspense>
              {searchQuery && (
                <p className="mt-3 text-sm text-gray-600">
                  Showing results for "<span className="font-medium text-gray-900">{searchQuery}</span>"
                </p>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              {/* Sort */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-sm font-medium">Sort by:</span>
                <div className="flex gap-2">
                  <Link
                    href={`/fractional-jobs-articles?sort=recent${category ? `&category=${category}` : ''}${type ? `&type=${type}` : ''}${searchQuery ? `&q=${searchQuery}` : ''}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      sort === 'recent' || !sort
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    Most Recent
                  </Link>
                  <Link
                    href={`/fractional-jobs-articles?sort=oldest${category ? `&category=${category}` : ''}${type ? `&type=${type}` : ''}${searchQuery ? `&q=${searchQuery}` : ''}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      sort === 'oldest'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    Oldest First
                  </Link>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/fractional-jobs-articles?sort=${sort}${type ? `&type=${type}` : ''}${searchQuery ? `&q=${searchQuery}` : ''}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    !category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  All
                </Link>
                {['Finance', 'Marketing', 'Engineering', 'Operations', 'HR', 'Sales'].map((cat) => (
                  <Link
                    key={cat}
                    href={`/fractional-jobs-articles?sort=${sort}&category=${cat}${type ? `&type=${type}` : ''}${searchQuery ? `&q=${searchQuery}` : ''}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      category === cat
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Job Posting Activity Calendar */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">Market Activity</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Job Posting Trends</h2>
              <p className="text-gray-600 mt-2 text-sm">When fractional jobs are posted throughout the year</p>
            </div>
            <Suspense fallback={
              <div className="flex items-center justify-center h-48 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-blue-600 text-xs">Loading calendar...</p>
                </div>
              </div>
            }>
              <JobsCalendarHeatmap height="280px" />
            </Suspense>
          </div>
        </section>

        {/* Articles Grid */}
        <section id="articles" className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {articles.length === 0 ? (
              <div className="text-center py-20">
                <span className="text-6xl mb-6 block">{searchQuery ? '🔍' : '📚'}</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {searchQuery ? `No results for "${searchQuery}"` : 'No articles found yet'}
                </h2>
                <p className="text-gray-600 mb-8">
                  {searchQuery
                    ? 'Try a different search term or browse all articles.'
                    : "We're working on creating expert guides for you."}
                </p>
                <Link
                  href="/fractional-jobs-articles"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-all"
                >
                  {searchQuery ? 'Browse All Articles' : 'Back to Home'}
                </Link>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {articles.map((article: any) => (
                    <Link key={article.id} href={`/${article.slug}`} className="group">
                      <article className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-600 h-full flex flex-col">
                        {article.hero_asset_url ? (
                          <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                            <img
                              src={article.hero_asset_url}
                              alt={article.hero_asset_alt || article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                            <span className="text-6xl">📚</span>
                          </div>
                        )}
                        <div className="p-6 flex-1 flex flex-col">
                          <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                            {article.title}
                          </h2>
                          <p className="text-gray-600 text-sm line-clamp-3 flex-1">
                            {article.excerpt || article.meta_description}
                          </p>
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                            {article.published_at && (
                              <time className="text-xs text-gray-500">
                                {new Date(article.published_at).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </time>
                            )}
                            {article.word_count && (
                              <span className="text-xs text-gray-500">
                                {Math.ceil(article.word_count / 200)} min read
                              </span>
                            )}
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2">
                    {page > 1 && (
                      <Link href={`/fractional-jobs-articles?page=${page - 1}${sort ? `&sort=${sort}` : ''}${category ? `&category=${category}` : ''}${searchQuery ? `&q=${searchQuery}` : ''}`}>
                        <button className="px-5 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-600">
                          ← Previous
                        </button>
                      </Link>
                    )}

                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                        const pageNum = Math.max(1, page - 2) + i
                        if (pageNum > totalPages) return null

                        return (
                          <Link key={pageNum} href={`/fractional-jobs-articles?page=${pageNum}${sort ? `&sort=${sort}` : ''}${category ? `&category=${category}` : ''}${searchQuery ? `&q=${searchQuery}` : ''}`}>
                            <button
                              className={`w-10 h-10 rounded-lg text-sm font-medium ${
                                pageNum === page
                                  ? 'bg-blue-600 text-white'
                                  : 'border border-gray-200 hover:bg-gray-100 text-gray-600'
                              }`}
                            >
                              {pageNum}
                            </button>
                          </Link>
                        )
                      })}
                    </div>

                    {page < totalPages && (
                      <Link href={`/fractional-jobs-articles?page=${page + 1}${sort ? `&sort=${sort}` : ''}${category ? `&category=${category}` : ''}${searchQuery ? `&q=${searchQuery}` : ''}`}>
                        <button className="px-5 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-100 text-sm font-medium text-gray-600">
                          Next →
                        </button>
                      </Link>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Executive Role Hubs */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-4 block">Content Hubs</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Explore by Role</h2>
              <p className="text-lg text-gray-600">Comprehensive guides for every fractional executive function</p>
            </div>

            {/* C-Suite Roles */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-blue-600"></span>
                C-Suite Executive Roles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '💰', title: 'Fractional CFO', desc: 'Finance leadership, fundraising, FP&A', link: '/fractional-cfo-jobs-uk' },
                  { icon: '💻', title: 'Fractional CTO', desc: 'Technology strategy and engineering leadership', link: '/fractional-cto-jobs-uk' },
                  { icon: '📢', title: 'Fractional CMO', desc: 'Marketing strategy and growth leadership', link: '/fractional-cmo-jobs-uk' },
                  { icon: '⚙️', title: 'Fractional COO', desc: 'Operations, scaling, and process excellence', link: '/fractional-coo-jobs-uk' },
                  { icon: '👔', title: 'Fractional CEO', desc: 'Executive leadership and strategic direction', link: '/fractional-ceo-jobs-uk' },
                  { icon: '👥', title: 'Fractional CHRO', desc: 'People strategy, culture, and HR leadership', link: '/fractional-chro-jobs-uk' },
                  { icon: '🔐', title: 'Fractional CISO', desc: 'Security strategy and risk management', link: '/fractional-ciso-jobs-uk' },
                  { icon: '📦', title: 'Fractional CPO', desc: 'Product strategy and roadmap leadership', link: '/fractional-product-jobs-uk' },
                ].map((topic) => (
                  <Link key={topic.title} href={topic.link} className="group">
                    <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-600 h-full">
                      <span className="text-3xl mb-4 block">{topic.icon}</span>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {topic.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{topic.desc}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            {/* Specialist Functions */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-teal-600"></span>
                Specialist Functions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '👥', title: 'Fractional HR', desc: 'People strategy and talent management', link: '/fractional-hr-jobs-uk' },
                  { icon: '📋', title: 'Project Management', desc: 'Fractional PM roles and certifications', link: '/fractional-project-manager-jobs-uk' },
                  { icon: '🎯', title: 'Product Leadership', desc: 'Product strategy and team leadership', link: '/fractional-product-jobs-uk' },
                  { icon: '✅', title: 'Compliance', desc: 'Regulatory compliance and risk management', link: '/fractional-compliance-jobs-uk' },
                  { icon: '📊', title: 'Finance', desc: 'Financial operations and controller roles', link: '/fractional-finance' },
                  { icon: '📈', title: 'Marketing', desc: 'Marketing strategy and growth', link: '/fractional-marketing' },
                  { icon: '🔧', title: 'Operations', desc: 'Business operations and process improvement', link: '/fractional-coo' },
                  { icon: '💼', title: 'Revenue', desc: 'Revenue operations and sales leadership', link: '/fractional-revenue' },
                ].map((topic) => (
                  <Link key={topic.title} href={topic.link} className="group">
                    <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-teal-500 h-full">
                      <span className="text-3xl mb-4 block">{topic.icon}</span>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                        {topic.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{topic.desc}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            {/* Career & Salary Guides */}
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-amber-600"></span>
                Career & Salary Guides
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: '📊', title: 'Salary Guides', desc: 'Day rates and earnings benchmarks', link: '/fractional-executive-salary-uk' },
                  { icon: '🚀', title: 'Career Transition', desc: 'Go from full-time to fractional', link: '/how-to-become-a-fractional-executive' },
                  { icon: '🤝', title: 'Hiring Guides', desc: 'How companies hire fractional talent', link: '/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter' },
                  { icon: '🏠', title: 'Remote Work', desc: 'Work from anywhere as a fractional exec', link: '/fractional-jobs-remote' },
                ].map((topic) => (
                  <Link key={topic.title} href={topic.link} className="group">
                    <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-amber-500 h-full">
                      <span className="text-3xl mb-4 block">{topic.icon}</span>
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                        {topic.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{topic.desc}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Stay Updated</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Get the latest guides<br />in your inbox
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join fractional executives who receive our weekly career insights and job alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/handler/sign-up"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
              >
                Join the Platform
              </Link>
              <Link
                href="/fractional-jobs-uk"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error fetching articles:', error)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <span className="text-6xl mb-6 block">😢</span>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Articles</h1>
          <p className="text-gray-600 mb-8">There was an error loading articles. Please try again later.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }
}
