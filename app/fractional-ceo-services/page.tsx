import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CEO Services UK | Hire a Part-Time CEO',
  description: 'Hire a Fractional CEO for your business. Access experienced Chief Executive leadership for turnarounds, scale-ups, and transitions. Strategic vision at a fraction of full-time cost.',
  keywords: 'fractional ceo, fractional ceo services, hire fractional ceo, part time ceo, fractional chief executive officer, fractional ceo uk, interim ceo services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-ceo-services',
  },
  openGraph: {
    title: 'Fractional CEO Services UK | Hire a Part-Time CEO',
    description: 'Hire a Fractional CEO for your business. Senior executive leadership for growth and transition.',
    images: ['/images/fractional-ceo-services.jpg'],
    url: 'https://fractional.quest/fractional-ceo-services',
  },
}

const CEO_FAQS = [
  {
    question: 'What is a Fractional CEO?',
    answer: 'A Fractional CEO is an experienced Chief Executive who leads a company on a part-time basis. They provide strategic direction, leadership, and operational oversight, typically for businesses in transition or those whose founder needs to step back from day-to-day management.',
  },
  {
    question: 'When should I hire a Fractional CEO?',
    answer: 'Consider a Fractional CEO if: the founder wants to focus on product/vision and needs someone to run the business; you are a subsidiary needing local leadership; you need turnaround expertise; or you are preparing for a sale/exit and need professional management.',
  },
  {
    question: 'How much does a Fractional CEO cost?',
    answer: 'Fractional CEOs typically charge £1,000-£2,000 per day in the UK. While high, this avoids the £200k-£300k+ fixed cost of a full-time CEO salary, plus equity and benefits.',
  },
  {
    question: 'Can a Fractional CEO really lead part-time?',
    answer: 'Yes. An experienced CEO focuses on high-leverage activities: strategy, culture, key hires, and investor relations. They delegate day-to-day execution to the management team, empowering them to step up.',
  },
]

export default function FractionalCEOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-slate-900/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('ceo', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Executive Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CEO<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional CEO</strong> to lead your business.
                Strategic vision, operational excellence, and proven leadership—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">50%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Cost Savings</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">2-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Rapid</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Deployment</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional CEO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CEO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CEO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional CEO</strong> is a seasoned Chief Executive who takes the helm of your company on a part-time or contract basis. They provide the gravitas, strategy, and decision-making capability of a full-time CEO, but with the flexibility to scale their involvement as the business needs.
            </p>
            <p>
              This isn't about advice—it's about accountability. A fractional CEO runs the business. They manage the P&L, lead the senior team, report to the board, and own the results.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-950">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Founders often get stuck working 'in' the business. A Fractional CEO works 'on' the business, freeing the founder to focus on their genius zone."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional CEO Do?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Strategic Direction',
                description: 'Defining the company vision, mission, and long-term goals. Aligning the entire organisation behind a clear roadmap.',
                icon: '🧭',
              },
              {
                title: 'P&L Management',
                description: 'Taking full responsibility for financial performance. Optimising costs, driving revenue, and ensuring profitability.',
                icon: '📈',
              },
              {
                title: 'Team Leadership',
                description: 'Managing and mentoring the C-suite/senior leadership team. Hiring key roles and setting performance standards.',
                icon: '👥',
              },
              {
                title: 'Investor Relations',
                description: 'Managing relationships with shareholders, VCs, and the board. Leading fundraising efforts and reporting.',
                icon: '🤝',
              },
              {
                title: 'Culture & Values',
                description: 'Building and maintaining a high-performance culture. Ensuring values are lived, not just written on a wall.',
                icon: '🏛️',
              },
              {
                title: 'Exit Planning',
                description: 'Preparing the business for sale or IPO. Maximising enterprise value through strategic positioning.',
                icon: '🏁',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does a Fractional CEO Cost?</h2>
          </div>
          <RoleCalculator role="ceo" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CEO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire a<br /><span className="text-gray-400">Fractional CEO?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Tell us about your leadership needs and we'll match you with pre-vetted fractional CEOs who fit your requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional CEO
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}