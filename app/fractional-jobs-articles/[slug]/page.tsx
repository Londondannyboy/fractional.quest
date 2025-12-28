import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { createDbQuery } from '@/lib/db'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

interface Article {
  id: number
  slug: string
  title: string
  content: string
  excerpt: string | null
  category: string | null
  article_type: string | null
  featured_asset_url: string | null
  published_at: string | null
  auto_generated: boolean
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const sql = createDbQuery()
    const [article] = await sql`
      SELECT id, slug, title, content, excerpt, category, article_type,
             featured_asset_url, published_at, auto_generated
      FROM articles
      WHERE slug = ${slug}
        AND app = 'fractional'
        AND status = 'published'
    ` as Article[]

    return article || null
  } catch (error) {
    console.error('[Article Page] Error fetching article:', error)
    return null
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params
  const article = await getArticle(resolvedParams.slug)

  if (!article) {
    return {
      title: 'Article Not Found | Fractional Quest'
    }
  }

  return {
    title: `${article.title} | Fractional Quest`,
    description: article.excerpt || 'Fractional executive job market news and insights',
    openGraph: {
      title: article.title,
      description: article.excerpt || undefined,
      images: article.featured_asset_url ? [article.featured_asset_url] : undefined,
      type: 'article',
      publishedTime: article.published_at || undefined,
    }
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params
  const article = await getArticle(resolvedParams.slug)

  if (!article) {
    notFound()
  }

  const formattedDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null

  const typeBadges: Record<string, { label: string; color: string }> = {
    job_roundup: { label: 'Jobs Update', color: 'bg-blue-100 text-blue-800' },
    company_spotlight: { label: 'Company Spotlight', color: 'bg-amber-100 text-amber-800' },
    market_trend: { label: 'Market Insights', color: 'bg-purple-100 text-purple-800' },
    manual: { label: 'Article', color: 'bg-gray-100 text-gray-700' }
  }

  const badge = typeBadges[article.article_type || 'manual']

  // Generate JobPosting schema for SEO
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt || undefined,
    "image": article.featured_asset_url || undefined,
    "datePublished": article.published_at || undefined,
    "author": {
      "@type": "Organization",
      "name": "Fractional Quest"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fractional Quest",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fractional.quest/logo.svg"
      }
    },
    "about": {
      "@type": "JobPosting",
      "description": "Fractional executive job opportunities and market insights",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Fractional Quest"
      },
      "jobLocationType": "TELECOMMUTE",
      "applicantLocationRequirements": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/fractional-jobs-articles" className="hover:text-purple-600 transition-colors">
              Articles
            </Link>
            <span>/</span>
            <span className="text-gray-700 truncate max-w-[200px]">{article.title}</span>
          </div>

          {/* Badge */}
          {badge && (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${badge.color}`}>
              {badge.label}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            {formattedDate && <span>{formattedDate}</span>}
            {article.auto_generated && (
              <span className="inline-flex items-center gap-1 text-purple-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Auto-generated
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {article.featured_asset_url && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-8">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={article.featured_asset_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Excerpt */}
        {article.excerpt && (
          <div className="text-xl text-gray-700 leading-relaxed mb-8 pb-8 border-b border-gray-200">
            {article.excerpt}
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:my-4 prose-li:text-gray-700 prose-li:my-1 prose-blockquote:border-l-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to find fractional talent?
            </h2>
            <p className="text-gray-600 mb-6">
              Browse our curated list of fractional executive opportunities.
            </p>
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Browse Jobs →
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/fractional-jobs-articles"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to All Articles
          </Link>
        </div>
      </article>
    </div>
  )
}
