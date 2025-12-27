import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Executive Guide UK',
  description: 'What is a fractional executive? Part-time CFOs, CMOs, CTOs, COOs. Rates, when to hire.',
  keywords: 'fractional executive, fractional executives, part-time executive, fractional c-suite, fractional leadership, what is a fractional executive',
  alternates: {
    canonical: 'https://fractional.quest/fractional-executive',
  },
  openGraph: {
    title: 'Fractional Executive Guide UK',
    description: 'Part-time C-suite leadership for growing businesses.',
    url: 'https://fractional.quest/fractional-executive',
  },
}

const faqItems = [
  {
    question: 'What is a fractional executive?',
    answer: 'A fractional executive is an experienced C-suite leader who works with companies on a part-time basis, typically 1-3 days per week. They provide senior leadership—such as CFO, CMO, CTO, or COO expertise—without the cost of a full-time hire. The term "fractional" refers to working a fraction of full-time hours.',
  },
  {
    question: 'How much do fractional executives cost?',
    answer: 'Fractional executives in the UK typically charge £700-£1,500 per day, depending on role and experience. At 1-2 days per week, this translates to £35,000-£150,000 annually—compared to £150,000-£300,000+ for a full-time C-suite executive. Most companies save 50-70% versus a full-time hire.',
  },
  {
    question: 'What roles do fractional executives fill?',
    answer: 'The most common fractional executive roles are CFO (Chief Financial Officer), CMO (Chief Marketing Officer), CTO (Chief Technology Officer), COO (Chief Operating Officer), CHRO (Chief Human Resources Officer), and CISO (Chief Information Security Officer). Essentially any C-suite function can be filled fractionally.',
  },
  {
    question: 'When should a company hire a fractional executive?',
    answer: 'Companies typically hire fractional executives when they need senior expertise but cannot justify or afford a full-time hire. Common triggers include preparing for fundraising, scaling rapidly, needing specialized expertise, building out a function from scratch, or covering a gap while recruiting a permanent executive.',
  },
  {
    question: 'How is a fractional executive different from a consultant?',
    answer: 'Unlike consultants who advise from the outside, fractional executives become embedded members of your leadership team. They attend board meetings, manage teams, own outcomes, and take accountability for their function. They are essentially your CFO, CMO, or CTO—just part-time rather than full-time.',
  },
  {
    question: 'How do I become a fractional executive?',
    answer: 'To become a fractional executive, you typically need 15-20+ years of experience with significant time in senior leadership roles. Building a fractional practice requires developing a clear niche, building a referral network, establishing your personal brand, and learning to manage multiple clients simultaneously.',
  },
]

export default function FractionalExecutivePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fractional Executive: The Complete Guide to Part-Time C-Suite Leadership',
    description: 'A comprehensive guide to fractional executives - what they are, how they work, typical costs, and when to hire one.',
    author: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    publisher: { '@type': 'Organization', name: 'Fractional Quest', url: 'https://fractional.quest' },
    datePublished: '2025-01-16',
    dateModified: '2025-01-16',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-600 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Complete Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Executive
            </h1>
            <p className="text-2xl md:text-3xl text-purple-100 leading-relaxed font-light">
              Part-time C-suite leadership for growing businesses. Get senior expertise without the full-time cost.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-purple-50 border-b-4 border-purple-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-purple-200">
            <div className="text-sm font-bold uppercase tracking-wider text-purple-600 mb-4">Definition</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              What is a Fractional Executive?
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional executive</strong> is an experienced C-suite leader who provides senior leadership to companies on a part-time basis—typically 1-3 days per week.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              The term "fractional" means they work a <em>fraction</em> of full-time hours. Companies get access to seasoned executives—CFOs, CMOs, CTOs, COOs—at 50-70% less cost than a full-time hire. According to the <a href="https://www.cipd.org/uk/knowledge/reports/flexible-working-trends/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">CIPD</a>, this flexible leadership model is one of the fastest-growing segments of the UK executive market.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fractional executive leading a business meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">Fractional executives provide senior leadership across multiple companies</p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">The Rise of Fractional Leadership</h2>

            <p className="text-lg leading-relaxed">
              The fractional executive model has exploded over the past decade. What started as an ad-hoc solution for startups that couldn't afford full-time executives has evolved into a legitimate career path for senior leaders and a strategic advantage for growing companies.
            </p>

            <p className="text-lg leading-relaxed">
              According to research from the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">ScaleUp Institute</a>, the demand for flexible executive talent has grown 300% since 2019. The <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">Institute of Directors</a> reports that over 40% of UK scale-ups now use some form of fractional leadership.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                Why Now?
              </p>
              <p className="text-gray-700 mb-0">
                Three forces have accelerated the shift to fractional executives: <strong>remote work</strong> (executives can serve multiple clients efficiently), <strong>economic uncertainty</strong> (companies want flexibility over fixed costs), and <strong>lifestyle preferences</strong> (senior leaders seeking portfolio careers over single-employer roles).
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Types of Fractional Executives</h2>

            <p className="text-lg">
              Nearly every C-suite function can be filled fractionally. Here are the most common roles:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <Link href="/fractional-cfo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-purple-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Fractional CFO</h3>
                <p className="text-gray-600 text-sm mb-0">
                  Strategic financial leadership, fundraising support, board reporting, cash flow management. Rates: £800-£1,500/day.
                </p>
              </Link>

              <Link href="/fractional-cmo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-purple-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Fractional CMO</h3>
                <p className="text-gray-600 text-sm mb-0">
                  Marketing strategy, team leadership, demand generation, brand building. Rates: £700-£1,400/day.
                </p>
              </Link>

              <Link href="/fractional-cto" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-purple-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Fractional CTO</h3>
                <p className="text-gray-600 text-sm mb-0">
                  Technical strategy, architecture decisions, engineering leadership, due diligence. Rates: £850-£1,600/day.
                </p>
              </Link>

              <Link href="/fractional-coo" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-purple-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Fractional COO</h3>
                <p className="text-gray-600 text-sm mb-0">
                  Operations strategy, process optimization, scaling systems, team structure. Rates: £750-£1,400/day.
                </p>
              </Link>

              <Link href="/fractional-hr" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-purple-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Fractional CHRO / HR Director</h3>
                <p className="text-gray-600 text-sm mb-0">
                  People strategy, employment law, talent acquisition, HR infrastructure. Rates: £700-£1,300/day.
                </p>
              </Link>

              <Link href="/fractional-ciso" className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-purple-400 transition-colors group">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Fractional CISO</h3>
                <p className="text-gray-600 text-sm mb-0">
                  Security strategy, compliance, risk management, incident response. Rates: £900-£1,600/day.
                </p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">How Fractional Executives Work</h2>

            <p className="text-lg">
              A fractional executive typically works with 2-4 companies simultaneously, dedicating 1-3 days per week to each client. Unlike consultants who advise from the outside, fractional executives become embedded members of the leadership team.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-8 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">Typical Engagement Model</h3>
              <ul className="text-gray-700 space-y-3 mb-0">
                <li><strong>Time commitment:</strong> 1-3 days per week (8-24 hours)</li>
                <li><strong>Contract length:</strong> 6-12 months, often extending to 2-3+ years</li>
                <li><strong>Pricing:</strong> Day rate (£700-£1,600) or monthly retainer (£3,000-£8,000)</li>
                <li><strong>Flexibility:</strong> Can scale up/down based on company needs</li>
              </ul>
            </div>

            <p className="text-lg">
              The key distinction from consulting is <strong>ownership and accountability</strong>. A fractional CFO doesn't just advise on financial strategy—they own it. They attend board meetings, manage the finance team, present to investors, and are accountable for financial outcomes.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">When to Hire a Fractional Executive</h2>

            <p className="text-lg">
              Companies typically hire fractional executives at specific inflection points. According to research from <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">BVCA</a>, the most common triggers are:
            </p>

            <ul className="text-lg space-y-3">
              <li><strong>Fundraising:</strong> Need credible financial leadership for due diligence and investor relations</li>
              <li><strong>Rapid growth:</strong> Scaling from £1M to £10M+ and founder-led functions are bottlenecking</li>
              <li><strong>Specific expertise:</strong> Need a specialist skill (M&A, PLG marketing, AI architecture) that's overkill full-time</li>
              <li><strong>Building a function:</strong> Creating a marketing, finance, or tech team from scratch</li>
              <li><strong>Gap coverage:</strong> An executive has left and need coverage during recruitment</li>
              <li><strong>Strategic initiative:</strong> Major project (digital transformation, market expansion) requiring senior leadership</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-8 my-10">
              <p className="text-xl font-semibold text-gray-900 mb-3">
                The "Right Stage" for Fractional
              </p>
              <p className="text-gray-700 mb-0">
                The sweet spot for fractional executives is companies with <strong>£1M-£30M revenue</strong>. Below £1M, founders usually handle everything themselves. Above £30M, companies typically need—and can afford—full-time C-suite. The fractional model bridges the gap, providing senior expertise during the critical scaling years.
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Executive Costs</h2>

            <p className="text-lg">
              Fractional executives typically charge by day rate or monthly retainer. Here's what to expect in the UK market:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-purple-500">Role</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-purple-500">Day Rate</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-purple-500">Annual (2 days/week)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Fractional CFO</td>
                    <td className="p-4 text-gray-700">£800-£1,500</td>
                    <td className="p-4 text-gray-600">£80k-£150k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Fractional CMO</td>
                    <td className="p-4 text-gray-700">£700-£1,400</td>
                    <td className="p-4 text-gray-600">£70k-£140k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Fractional CTO</td>
                    <td className="p-4 text-gray-700">£850-£1,600</td>
                    <td className="p-4 text-gray-600">£85k-£160k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Fractional COO</td>
                    <td className="p-4 text-gray-700">£750-£1,400</td>
                    <td className="p-4 text-gray-600">£75k-£140k</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-gray-900">Fractional CHRO</td>
                    <td className="p-4 text-gray-700">£700-£1,300</td>
                    <td className="p-4 text-gray-600">£70k-£130k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg">
              Compare this to full-time executive salaries of £150,000-£300,000+ (plus equity, benefits, and overhead), and the cost savings become clear. Most companies save <strong>50-70%</strong> by using fractional leadership during their scaling years.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional vs Full-Time Executives</h2>

            <p className="text-lg">
              The choice between fractional and full-time leadership depends on your specific situation:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h4 className="font-bold text-green-800 mb-3">Choose Fractional If:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Revenue is £1M-£30M</li>
                  <li>Need senior expertise but not 40 hours/week</li>
                  <li>Require specific skills for a phase (fundraising, M&A)</li>
                  <li>Want flexibility to scale up or down</li>
                  <li>Budget-conscious but need quality</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">Choose Full-Time If:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Revenue is £30M+</li>
                  <li>Function requires 40+ hours/week</li>
                  <li>Complex, multi-entity organization</li>
                  <li>Preparing for IPO</li>
                  <li>Need deep integration into culture</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">How to Become a Fractional Executive</h2>

            <p className="text-lg">
              For experienced executives, the fractional path offers flexibility, variety, and often higher earning potential. Here's what the transition requires:
            </p>

            <ul className="text-lg space-y-3">
              <li><strong>Experience:</strong> 15-20+ years with significant senior leadership experience</li>
              <li><strong>Track record:</strong> Demonstrable results that clients will pay for</li>
              <li><strong>Niche:</strong> A clear focus (industry, stage, or specialty) that differentiates you</li>
              <li><strong>Network:</strong> Referrals drive 70%+ of fractional business</li>
              <li><strong>Multi-client skills:</strong> Ability to context-switch and manage multiple priorities</li>
            </ul>

            <p className="text-lg">
              Many fractional executives work with 2-4 clients at a time, earning <strong>£150,000-£350,000+</strong> annually while enjoying better work-life balance than traditional roles. Learn more in our guide to <Link href="/how-to-become-a-fractional-executive" className="text-purple-600 hover:text-purple-700 underline">becoming a fractional executive</Link>.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Bottom Line</h2>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-purple-400">Fractional executives in one sentence:</strong>
              </p>
              <p className="text-2xl font-light leading-relaxed mb-0">
                Seasoned C-suite leaders who work part-time (1-3 days per week) to provide strategic leadership—CFO, CMO, CTO, COO expertise—at 50-70% less cost than a full-time hire.
              </p>
            </div>

            <p className="text-lg">
              Whether you're a growing company seeking senior expertise or an experienced executive considering the fractional path, this model offers a compelling alternative to traditional full-time employment. The market is growing rapidly, and the best fractional executives are in high demand.
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
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Fractional Executive Jobs
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Browse live fractional executive opportunities or learn more about specific roles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-jobs" className="px-10 py-5 bg-white text-purple-600 font-bold uppercase tracking-wider hover:bg-purple-50 transition-colors">
              Browse All Fractional Jobs
            </Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-600 transition-colors">
              Get Matched
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Guides</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cfo" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional CFO
              </Link>
              <Link href="/fractional-cmo" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional CMO
              </Link>
              <Link href="/fractional-cto" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional CTO
              </Link>
              <Link href="/fractional-coo" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional COO
              </Link>
              <Link href="/fractional-hr" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional HR
              </Link>
              <Link href="/what-is-fractional" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                What is Fractional?
              </Link>
              <Link href="/fractional-cxo" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional CXO
              </Link>
              <Link href="/portfolio-career" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Portfolio Career
              </Link>
              <Link href="/fractional-hiring" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional Hiring
              </Link>
              <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Fractional Executive Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
