import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CEO Services UK',
  description: 'Hire a Fractional CEO. Turnarounds, scale-ups, transitions. Strategic leadership.',
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
      {/* Schema for SEO */}
      <WebPageSchema
        title="Fractional CEO Services UK"
        description="Hire a Fractional CEO for your business"
        url="https://fractional.quest/fractional-ceo-services"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={CEO_FAQS} />
      <ServiceSchema
        name="Fractional CEO Services"
        description="Hire a Fractional CEO for turnarounds, scale-ups, and strategic leadership"
        url="https://fractional.quest/fractional-ceo-services"
        priceRange="£1,000-£2,000/day"
      />
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80"
            alt="Fractional CEO Services - Professional executive leadership"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire a Fractional CEO?</h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-950">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-950">50%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Cost Savings</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Cost Efficiency</h3>
                <p className="text-gray-600">Access CEO-level leadership at 40-60% less than a full-time hire. Pay only for the time you need—typically £100,000-£200,000 per year versus £300,000+ for full-time with equity.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-950">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-950">20+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Battle-Tested Leadership</h3>
                <p className="text-gray-600">Get a CEO with 20+ years of experience who has navigated growth, turnarounds, and exits. They've seen your challenges before and know what works.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-950">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-950">Fast</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Deployment</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Quick Start</h3>
                <p className="text-gray-600">A fractional CEO can start within weeks, not months. No lengthy recruitment process—get leadership in place when you need it most.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-950">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-950">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Flexibility</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Scalable Engagement</h3>
                <p className="text-gray-600">Scale up during critical periods, scale down when stable. No long-term employment commitments—the engagement adapts to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Timing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire a Fractional CEO?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Founder Stepping Back</h3>
              <p className="text-gray-600 text-sm mb-3">You want to focus on product, vision, or a new venture. You need someone to run day-to-day operations and lead the team.</p>
              <span className="inline-block text-xs font-bold text-blue-950 uppercase tracking-wider">When ready to delegate</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Turnaround Situation</h3>
              <p className="text-gray-600 text-sm mb-3">The business is struggling and needs experienced crisis management. A fractional CEO can stabilise operations quickly.</p>
              <span className="inline-block text-xs font-bold text-blue-950 uppercase tracking-wider">When urgent action needed</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Preparing for Exit</h3>
              <p className="text-gray-600 text-sm mb-3">You're planning a sale or IPO. Professional management increases valuation and buyer confidence.</p>
              <span className="inline-block text-xs font-bold text-blue-950 uppercase tracking-wider">12-24 months before exit</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Subsidiary Leadership</h3>
              <p className="text-gray-600 text-sm mb-3">Your UK or regional subsidiary needs local executive leadership without the cost of a full-time CEO.</p>
              <span className="inline-block text-xs font-bold text-blue-950 uppercase tracking-wider">When local presence needed</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Scaling Rapidly</h3>
              <p className="text-gray-600 text-sm mb-3">You've raised funding and need to scale fast. Experienced CEO leadership helps navigate hypergrowth challenges.</p>
              <span className="inline-block text-xs font-bold text-blue-950 uppercase tracking-wider">Post-funding</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Board Requirement</h3>
              <p className="text-gray-600 text-sm mb-3">Investors or the board want professional management. A fractional CEO satisfies governance requirements.</p>
              <span className="inline-block text-xs font-bold text-blue-950 uppercase tracking-wider">When board mandates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does a Fractional CEO Cost?</h2>
            <p className="text-gray-600 mt-4">Compare the cost of fractional vs full-time CEO</p>
          </div>
          <RoleCalculator role="ceo" />
          <div className="mt-8 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">Typical Fractional CEO Pricing</h3>
            <ul className="text-gray-600">
              <li><strong>Day Rate:</strong> £1,000-£2,000 per day (depending on experience and company size)</li>
              <li><strong>Monthly Retainer:</strong> £8,000-£16,000 for 2-3 days per week</li>
              <li><strong>Annual Cost:</strong> £100,000-£200,000 (vs £300,000+ for full-time with equity)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional vs Interim vs Full-Time CEO</h2>
            <p className="text-gray-600 mt-4">Choose the right leadership model for your needs</p>
          </div>
          <ServiceComparisonTable role="CEO" accentColor="blue" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire a Fractional CEO</h2>
            <p className="text-gray-600 mt-4">From first conversation to start date in as little as 2 weeks</p>
          </div>
          <HireProcessStepper accentColor="blue" />
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
            <Link href="/fractional-ceo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CEO Looking for Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Complete Executive Leadership Hub</h2>
            <p className="text-gray-600">Explore our comprehensive guides for businesses and executives</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For Businesses</h3>
              <div className="space-y-2">
                <Link href="/fractional-ceo" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CEO Guide</Link>
                <Link href="/interim-ceo" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Interim CEO Services</Link>
                <Link href="/fractional-managing-director-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional MD Services</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For Executives</h3>
              <div className="space-y-2">
                <Link href="/fractional-ceo-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CEO Jobs UK</Link>
                <Link href="/fractional-managing-director-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">MD Jobs UK</Link>
                <Link href="/contact/executives" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Join Our Network</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Fractional Roles</h3>
              <div className="space-y-2">
                <Link href="/fractional-cfo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CFO</Link>
                <Link href="/fractional-cto-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CTO</Link>
                <Link href="/fractional-cmo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CMO</Link>
                <Link href="/fractional-coo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional COO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}