import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'CFO Community & Reddit Resources: Networks for Finance Leaders 2025',
  description: 'Best CFO communities, Reddit forums, and professional networks for finance leaders. Connect with fractional CFOs, share insights, and access peer support.',
  openGraph: {
    title: 'CFO Community & Reddit Resources: Networks for Finance Leaders 2025',
    description: 'Discover CFO communities and Reddit forums for finance professionals.',
    url: 'https://fractional.quest/cfo-community-reddit',
  },
  alternates: {
    canonical: 'https://fractional.quest/cfo-community-reddit',
  },
}

export const revalidate = 3600

export default function CFOCommunityRedditPage() {
  const faqItems = [
    {
      question: 'What are the best CFO communities for fractional CFOs?',
      answer: 'Top communities include: CFO Connect UK (regional chapters), Finance Leaders Network, fractional CFO-specific Slack communities, LinkedIn CFO groups, and sector-specific forums (e.g., SaaS CFO community). These provide peer support, job opportunities, and knowledge sharing for fractional finance professionals.'
    },
    {
      question: 'Is there a fractional CFO subreddit?',
      answer: 'While there\'s no dedicated fractional CFO subreddit, relevant communities include r/Entrepreneur (startup finance discussions), r/smallbusiness (SME finance topics), r/Accounting (professional accountant community), and r/FinancialCareers (career advice). For CFO-specific discussions, LinkedIn groups are more active than Reddit.'
    },
    {
      question: 'How do I find other fractional CFOs to network with?',
      answer: 'Best approaches: Join LinkedIn fractional CFO groups, attend CFO roundtables and finance conferences, participate in professional body events (ICAEW, ACCA), join Slack communities for fractional executives, and engage in sector-specific finance forums. Many fractional CFOs also form informal mastermind groups of 5-8 peers.'
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context': 'https://schema.org', '@type': 'Article', headline: 'CFO Community & Reddit Resources 2025', description: 'Best communities and networks for CFO professionals.', author: {'@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest'}, publisher: {'@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest'}, datePublished: '2025-01-16', dateModified: '2025-01-16'})}} />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-950/20/30 to-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/fractional-cfo" className="hover:text-blue-600 transition-colors">Fractional CFO</Link>
            <span>/</span>
            <span className="text-slate-900">Community & Reddit</span>
          </nav>

          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              CFO Community & Reddit Resources: Networks for Finance Leaders 2025
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              Discover CFO communities, Reddit forums, and professional networks. Connect with fractional CFO peers, share insights, find opportunities, and access support from fellow finance leaders.
            </p>
          </header>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Professional CFO Communities</h2>
            <div className="not-prose space-y-4">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-lg font-bold text-slate-900 mb-2">CFO Connect UK</h3>
                <p className="text-sm text-slate-600 mb-3">Peer network for CFOs with regional chapters across the UK. Monthly roundtables, annual conferences, and exclusive CFO forums.</p>
                <span className="inline-block rounded-full bg-blue-900/30 px-3 py-1 text-xs font-semibold text-blue-700">Highly Recommended</span>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Finance Leaders Network</h3>
                <p className="text-sm text-slate-600 mb-3">Events and forums for senior finance professionals including fractional CFOs. Focus on transformation, technology, and best practices.</p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                <h3 className="text-lg font-bold text-slate-900 mb-2">ICAEW/ACCA CFO Networks</h3>
                <p className="text-sm text-slate-600 mb-3">Professional body networks for chartered accountants in CFO roles. CPD events, technical updates, and networking opportunities.</p>
              </div>
            </div>
          </section>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">Reddit Communities for Finance Professionals</h2>
            <div className="not-prose space-y-3">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">r/Entrepreneur</h3>
                <p className="text-sm text-slate-600">1.5M+ members discussing startup finance, fundraising, and growth strategies. Good for fractional CFOs serving startups.</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">r/smallbusiness</h3>
                <p className="text-sm text-slate-600">900K+ members. SME finance topics, cash flow management, accounting systems. Relevant for fractional CFOs targeting £2M-£20M revenue businesses.</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">r/Accounting</h3>
                <p className="text-sm text-slate-600">400K+ accounting professionals. Career advice, technical discussions, industry news. More US-focused but valuable content.</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-1">r/FinancialCareers</h3>
                <p className="text-sm text-slate-600">200K+ members. Career progression, transition advice, salary benchmarking. Useful for fractional CFO career planning.</p>
              </div>
            </div>
          </section>

          <section className="prose prose-slate mb-12 max-w-none">
            <h2 className="text-3xl font-bold text-slate-900">LinkedIn Groups & Communities</h2>
            <ul className="text-slate-700">
              <li><strong>Fractional CFO Network:</strong> 12K+ members, job postings, peer discussions, best practice sharing</li>
              <li><strong>CFO Leadership Network:</strong> 50K+ finance leaders, mix of full-time and fractional CFOs</li>
              <li><strong>UK Finance Directors & CFOs:</strong> UK-specific community for senior finance professionals</li>
              <li><strong>SaaS CFO Community:</strong> Sector-specific group for SaaS/tech finance leaders</li>
              <li><strong>Interim & Fractional Executives:</strong> Broader fractional executive community including CFOs</li>
            </ul>
          </section>

          <div className="mb-12 rounded-xl bg-gradient-to-br from-blue-950/200 to-blue-600 p-8 text-white shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Join the Fractional Quest Community</h2>
            <p className="mb-6 text-blue-950/20">
              Connect with fractional CFO professionals, access exclusive resources, and stay updated on opportunities.
            </p>
            <Link href="/fractional-cfo" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-950/20">
              Explore CFO Resources
            </Link>
          </div>

          <FAQ items={faqItems} title="CFO Community FAQs" />
        </div>
      </div>
    </>
  )
}
