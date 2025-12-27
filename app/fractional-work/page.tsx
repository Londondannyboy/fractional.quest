import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'What is Fractional Work? Guide',
  description: 'Fractional work: professionals working part-time across companies. Meaning, vs consulting.',
  keywords: 'fractional work, what is fractional work, fractional work meaning, fractional employment, fractional career, portfolio career, part-time executive work',
  alternates: {
    canonical: 'https://fractional.quest/fractional-work',
  },
  openGraph: {
    title: 'What is Fractional Work? Guide',
    description: 'Fractional work career model for senior professionals.',
    url: 'https://fractional.quest/fractional-work',
  },
}

const faqItems = [
  {
    question: 'What is fractional work?',
    answer: 'Fractional work is a career model where experienced professionals work part-time (typically 1-3 days per week) across multiple companies simultaneously. Unlike traditional employment, fractional workers divide their time between 2-4 clients, providing senior expertise to each without the commitment of full-time roles.',
  },
  {
    question: 'What does "fractional" mean in fractional work?',
    answer: 'The term "fractional" refers to working a fraction of full-time hours. If a full-time role is 5 days per week, a fractional role might be 1-3 days—a "fraction" of the whole. This allows companies to access senior talent at a fraction of full-time cost, and professionals to build diverse portfolio careers.',
  },
  {
    question: 'How is fractional work different from consulting?',
    answer: 'Fractional workers are embedded members of client teams with ongoing accountability for outcomes. Consultants typically advise on specific projects then leave. A fractional CMO manages your marketing team long-term; a marketing consultant advises on a campaign and moves on.',
  },
  {
    question: 'What roles are available as fractional work?',
    answer: 'Most C-suite and senior leadership roles can be done fractionally: CFO, CMO, CTO, COO, CHRO, CISO, and various Director-level positions. Fractional work is most common in finance, marketing, technology, operations, and HR leadership.',
  },
  {
    question: 'How much do fractional workers earn?',
    answer: 'Fractional executives typically earn £100,000-£300,000+ annually in the UK, with day rates of £700-£1,600. Working with 2-4 clients simultaneously, many fractional workers earn more than equivalent full-time roles while enjoying greater flexibility.',
  },
  {
    question: 'Is fractional work the same as freelancing?',
    answer: 'No—fractional work differs from freelancing in seniority and commitment. Freelancers typically do project-based work at various levels; fractional workers are senior executives with ongoing, embedded relationships. Fractional work is executive-level freelancing with long-term client partnerships.',
  },
]

export default function FractionalWorkPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What is Fractional Work? The Complete Guide to the Fractional Economy',
    description: 'A comprehensive guide to fractional work - the career model where senior professionals work part-time across multiple companies.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Career Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Work
            </h1>
            <p className="text-2xl md:text-3xl text-indigo-100 leading-relaxed font-light">
              The career model transforming how senior professionals work—and how companies access executive talent.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-indigo-50 border-b-4 border-indigo-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-indigo-200">
            <div className="text-sm font-bold uppercase tracking-wider text-indigo-600 mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              What is Fractional Work?
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              <strong className="font-semibold text-gray-900">Fractional work</strong> is a career model where experienced professionals work part-time across multiple companies simultaneously, typically dedicating 1-3 days per week to each client.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              The term <strong>"fractional"</strong> refers to working a <em>fraction</em> of full-time hours. Rather than committing 40+ hours to one employer, fractional workers split their time between 2-4 companies—providing senior expertise to each at a fraction of full-time cost. It's the evolution of the <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">portfolio career</a> for the executive class.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional working on laptop in modern office - fractional work concept"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Fractional workers build portfolio careers across multiple companies</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">The Rise of the Fractional Economy</h2>

            <p className="text-lg leading-relaxed">
              The way we work is fundamentally changing. The <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">traditional employment model</a>—one person, one company, 40+ hours per week—is giving way to something more flexible.
            </p>

            <p className="text-lg leading-relaxed">
              Fractional work sits at the intersection of several forces: the rise of remote work, the demand for flexible talent, the desire for portfolio careers, and companies' need to access senior expertise without full-time overhead. According to the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">ScaleUp Institute</a>, demand for fractional executives has grown 300% since 2019.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Why Fractional Work is Growing
              </p>
              <ul className="text-gray-700 mb-0 space-y-2">
                <li><strong>Remote work:</strong> Executives can serve multiple clients efficiently from anywhere</li>
                <li><strong>Economic uncertainty:</strong> Companies want flexibility over fixed costs</li>
                <li><strong>Lifestyle shift:</strong> Senior professionals seek variety and work-life balance</li>
                <li><strong>Skills shortage:</strong> Sharing talent across companies stretches limited executive supply</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">How Fractional Work Actually Works</h2>

            <p className="text-lg leading-relaxed">
              In practice, a fractional worker might have three clients: a Series B SaaS company on Mondays and Tuesdays, a mid-market ecommerce business on Wednesdays, and a PE-backed healthcare firm on Thursdays. Friday might be for admin, business development, or a fourth client.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-8 border-l-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">Typical Fractional Work Structure</h3>
              <ul className="text-gray-700 space-y-3 mb-0">
                <li><strong>Time per client:</strong> 1-3 days per week (8-24 hours)</li>
                <li><strong>Number of clients:</strong> 2-4 simultaneously</li>
                <li><strong>Engagement length:</strong> 6-24 months (often ongoing)</li>
                <li><strong>Working style:</strong> Hybrid (1-2 days on-site, rest remote)</li>
                <li><strong>Compensation:</strong> Day rate (£700-£1,600) or monthly retainer</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              The key difference from consulting is <strong>embeddedness</strong>. Fractional workers aren't external advisors who pop in for a project—they're integrated members of the leadership team. They attend board meetings, manage teams, own outcomes, and build long-term relationships with their clients.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Types of Fractional Work</h2>

            <p className="text-lg">
              Fractional work is most common at the executive level, but the model is expanding to other senior roles:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">C-Suite Roles</h3>
                <p className="text-gray-600 text-sm mb-3">
                  The classic fractional model—senior executives working across multiple companies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><Link href="/fractional-cfo" className="text-indigo-600 hover:underline">Fractional CFO</Link></li>
                  <li><Link href="/fractional-cmo" className="text-indigo-600 hover:underline">Fractional CMO</Link></li>
                  <li><Link href="/fractional-cto" className="text-indigo-600 hover:underline">Fractional CTO</Link></li>
                  <li><Link href="/fractional-coo" className="text-indigo-600 hover:underline">Fractional COO</Link></li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Director-Level Roles</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Expanding to senior individual contributors and directors.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><Link href="/fractional-hr-director" className="text-indigo-600 hover:underline">Fractional HR Director</Link></li>
                  <li><Link href="/fractional-finance-director-jobs-uk" className="text-indigo-600 hover:underline">Fractional Finance Director</Link></li>
                  <li><Link href="/fractional-sales-director-jobs-uk" className="text-indigo-600 hover:underline">Fractional Sales Director</Link></li>
                  <li><Link href="/fractional-product-manager-jobs-uk" className="text-indigo-600 hover:underline">Fractional Product Manager</Link></li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Work vs Other Models</h2>

            <p className="text-lg">
              Fractional work often gets confused with consulting, contracting, or freelancing. Here's how they differ:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-indigo-500">Model</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-indigo-500">Relationship</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-indigo-500">Duration</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-indigo-500">Accountability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-indigo-50/50">
                    <td className="p-4 font-semibold text-indigo-700">Fractional</td>
                    <td className="p-4 text-gray-700">Embedded team member</td>
                    <td className="p-4 text-gray-600">6-24+ months</td>
                    <td className="p-4 text-gray-600">Owns outcomes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Consulting</td>
                    <td className="p-4 text-gray-700">External advisor</td>
                    <td className="p-4 text-gray-600">Project-based</td>
                    <td className="p-4 text-gray-600">Advises on outcomes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Interim</td>
                    <td className="p-4 text-gray-700">Full-time temporary</td>
                    <td className="p-4 text-gray-600">3-12 months</td>
                    <td className="p-4 text-gray-600">Gap-fills a role</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Contracting</td>
                    <td className="p-4 text-gray-700">Hired resource</td>
                    <td className="p-4 text-gray-600">Varies</td>
                    <td className="p-4 text-gray-600">Executes tasks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Benefits of Fractional Work</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">For Companies</h3>

            <ul className="text-lg space-y-3">
              <li><strong>Cost savings:</strong> Access senior talent at 50-70% of full-time cost</li>
              <li><strong>Flexibility:</strong> Scale up or down based on business needs</li>
              <li><strong>Cross-pollination:</strong> Fractional workers bring best practices from other companies</li>
              <li><strong>Speed:</strong> No lengthy recruitment—fractional talent can start within weeks</li>
              <li><strong>Quality:</strong> Access executives who might not take a full-time role</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">For Professionals</h3>

            <ul className="text-lg space-y-3">
              <li><strong>Variety:</strong> Work across different industries, stages, and challenges</li>
              <li><strong>Flexibility:</strong> Control your schedule and work-life balance</li>
              <li><strong>Income potential:</strong> Top fractional executives earn £200,000-£350,000+</li>
              <li><strong>Reduced risk:</strong> Multiple clients mean no single point of failure</li>
              <li><strong>Impact:</strong> Make a difference at multiple companies simultaneously</li>
            </ul>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                The Portfolio Career Advantage
              </p>
              <p className="text-gray-700 mb-0">
                According to the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">Institute of Directors</a>, executives with fractional experience report higher career satisfaction than those in traditional roles. The variety, autonomy, and learning from different environments creates what many describe as the best phase of their career.
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Who is Fractional Work For?</h2>

            <p className="text-lg">
              Fractional work isn't for everyone. It requires a specific profile:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-3">Good Fit If You:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Have 15-20+ years senior experience</li>
                  <li>Can context-switch between clients</li>
                  <li>Comfortable with ambiguity</li>
                  <li>Self-motivated and organized</li>
                  <li>Strong network for business development</li>
                  <li>Want variety over depth</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h4 className="font-bold text-red-800 mb-3">Challenging If You:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Prefer deep immersion in one company</li>
                  <li>Need external structure and management</li>
                  <li>Uncomfortable with sales/BD</li>
                  <li>Want predictable income</li>
                  <li>Early in your career</li>
                  <li>Prefer employee benefits over flexibility</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Getting Started with Fractional Work</h2>

            <p className="text-lg">
              Whether you're a company looking to hire fractional talent, or a professional considering the fractional path:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <Link href="/fractional-jobs" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-indigo-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600">For Professionals</h3>
                <p className="text-gray-600 text-sm mb-0">
                  Browse live fractional job opportunities across CFO, CMO, CTO, COO, and other senior roles.
                </p>
              </Link>

              <Link href="/contact/companies" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-indigo-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600">For Companies</h3>
                <p className="text-gray-600 text-sm mb-0">
                  Get matched with vetted fractional executives who fit your needs, stage, and culture.
                </p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-indigo-400">Fractional work in one sentence:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                A career model where senior professionals work part-time (1-3 days per week) across multiple companies, providing executive expertise at a fraction of full-time cost—and building portfolio careers with variety, flexibility, and often higher earnings.
              </p>
            </div>

            <p className="text-lg">
              The fractional economy is still emerging, but it's growing rapidly. For companies seeking senior talent and professionals seeking portfolio careers, fractional work offers a compelling alternative to the traditional employment model.
            </p>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Explore Fractional Work?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Whether you're looking for your next fractional role or want to learn more about specific positions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-jobs" className="px-10 py-5 bg-white text-indigo-600 font-bold uppercase tracking-wider hover:bg-indigo-50 transition-colors">
              Browse Fractional Jobs
            </Link>
            <Link href="/fractional-executive" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-indigo-600 transition-colors">
              Fractional Executive Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Articles</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-executive" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                What is a Fractional Executive?
              </Link>
              <Link href="/fractional-jobs" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                Fractional Jobs
              </Link>
              <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                Fractional Executive Jobs
              </Link>
              <Link href="/how-to-become-a-fractional-executive" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                How to Become Fractional
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
