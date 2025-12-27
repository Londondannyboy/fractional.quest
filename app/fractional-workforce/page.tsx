import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Workforce UK 2025: The Future of Work',
  description: 'Guide to the fractional workforce trend. How companies are building flexible teams with part-time executives and professionals.',
  keywords: 'fractional workforce, fractional work, flexible workforce, future of work, gig economy executives, portfolio professionals',
  alternates: {
    canonical: 'https://fractional.quest/fractional-workforce',
  },
  openGraph: {
    title: 'Fractional Workforce UK 2025: The Future of Work',
    description: 'The rise of the fractional workforce and what it means.',
    url: 'https://fractional.quest/fractional-workforce',
  },
}

const faqItems = [
  {
    question: 'What is the fractional workforce?',
    answer: 'The fractional workforce refers to professionals who work part-time across multiple organizations rather than full-time for one employer. At the executive level, this includes fractional CFOs, CMOs, CTOs, and other leaders who serve 2-4 clients simultaneously.',
  },
  {
    question: 'Is fractional work the same as gig work?',
    answer: 'Not quite. Gig work typically involves short, task-based engagements. Fractional work involves ongoing professional relationships with regular time commitment (e.g., 2 days/week for months or years). It\'s more akin to part-time professional employment than gig economy.',
  },
  {
    question: 'Why is the fractional workforce growing?',
    answer: 'Several factors drive growth: professionals seeking flexibility and variety, companies needing expertise without full-time costs, remote work normalizing part-time arrangements, and talent shortages making traditional hiring difficult.',
  },
  {
    question: 'Is fractional work only for executives?',
    answer: 'No, though it\'s most established at executive level. Fractional models are expanding to directors, specialists, and professional roles. Any function where expertise matters more than presence can potentially be fractional.',
  },
]

export default function FractionalWorkforcePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 to-blue-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Future of Work
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional<br />Workforce
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed font-light">
              The rise of flexible work at the executive level. How companies and professionals are embracing fractional.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-blue-50 border-b-4 border-blue-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-blue-700 mb-2">40%</div>
              <div className="text-gray-600">Of workforce will be contingent by 2030</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-700 mb-2">3x</div>
              <div className="text-gray-600">Growth in fractional searches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-700 mb-2">70%</div>
              <div className="text-gray-600">Execs would consider fractional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern flexible workforce"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">What is the Fractional Workforce?</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The <strong>fractional workforce</strong> represents a fundamental shift in how companies access talent and how professionals structure their careers. Instead of the traditional full-time employment model, skilled professionals—particularly at senior levels—work part-time across multiple organizations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              According to the <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">CIPD</a>, flexible working arrangements have become mainstream, with organizations increasingly designing roles around outcomes rather than hours.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Drivers of Fractional Work</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-3">For Professionals</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Flexibility:</strong> Control over time and work-life balance</li>
                  <li><strong>Variety:</strong> Multiple challenges and learning opportunities</li>
                  <li><strong>Autonomy:</strong> Independence from organizational politics</li>
                  <li><strong>Income:</strong> Often higher than equivalent full-time</li>
                  <li><strong>Portfolio:</strong> Build diverse experience</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-3">For Companies</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cost:</strong> Access senior talent at lower cost</li>
                  <li><strong>Talent access:</strong> Reach executives unavailable full-time</li>
                  <li><strong>Flexibility:</strong> Scale up/down with needs</li>
                  <li><strong>Risk:</strong> Lower commitment, easier to adjust</li>
                  <li><strong>Expertise:</strong> Get specific skills when needed</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">The Fractional Workforce Landscape</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Fractional Executives</h4>
                  <p className="text-sm text-gray-600 m-0">C-suite leaders (CFO, CMO, CTO, etc.) working 1-3 days/week per client. The most established fractional category.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Portfolio Directors</h4>
                  <p className="text-sm text-gray-600 m-0">Director-level professionals serving multiple companies. Growing segment as the model expands beyond C-suite.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Specialist Professionals</h4>
                  <p className="text-sm text-gray-600 m-0">Deep specialists (data scientists, designers, developers) working fractionally where expertise trumps presence.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Board & Advisors</h4>
                  <p className="text-sm text-gray-600 m-0">Non-executive directors and advisors serving multiple boards—the original "fractional" model.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional Workforce Trends</h2>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Growth post-pandemic:</strong> Remote work normalized part-time arrangements</li>
              <li><strong>Talent shortage:</strong> Companies can't find/afford full-time senior talent</li>
              <li><strong>Platform emergence:</strong> Technology enabling fractional matching</li>
              <li><strong>Executive preference:</strong> More leaders seeking portfolio careers</li>
              <li><strong>Investor acceptance:</strong> VCs and PE firms endorse fractional models</li>
              <li><strong>Expanding roles:</strong> Model spreading beyond traditional C-suite</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Challenges & Considerations</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <h3 className="font-bold text-red-700 mb-3">Challenges</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Coordination across part-time leaders</li>
                  <li>Cultural integration</li>
                  <li>Knowledge retention</li>
                  <li>Availability during crises</li>
                  <li>Less organizational loyalty</li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h3 className="font-bold text-green-700 mb-3">Solutions</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Clear communication protocols</li>
                  <li>Inclusive team practices</li>
                  <li>Documentation and handoffs</li>
                  <li>Flexible surge capacity</li>
                  <li>Results-based relationships</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-blue-400">Summary:</strong> The fractional workforce is growing rapidly as professionals seek flexibility and companies seek efficient access to talent. Fractional models are expanding from C-suite to all levels, reshaping how work gets done.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">FAQs</h2>
          <FAQ skipSchema={true} items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Join the Fractional Workforce</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/how-to-become-a-fractional-executive" className="px-10 py-5 bg-white text-blue-800 font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors">
              Become Fractional
            </Link>
            <Link href="/fractional-executive-jobs" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-blue-800 transition-colors">
              Find Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-work" className="text-gray-600 hover:text-blue-700 font-medium">Fractional Work</Link>
            <Link href="/portfolio-career" className="text-gray-600 hover:text-blue-700 font-medium">Portfolio Career</Link>
            <Link href="/fractional-staffing" className="text-gray-600 hover:text-blue-700 font-medium">Fractional Staffing</Link>
            <Link href="/what-is-fractional" className="text-gray-600 hover:text-blue-700 font-medium">What is Fractional?</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
