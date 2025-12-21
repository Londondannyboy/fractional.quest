import { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Services UK | Part-Time Executive Leadership',
  description: 'Access fractional executive services for your business. Part-time CFOs, CMOs, CTOs and more. Get senior leadership without full-time commitment or cost.',
  keywords: 'fractional services, fractional executive services, part-time executive, fractional leadership, fractional services uk',
  alternates: { canonical: 'https://fractional.quest/fractional-services' },
}

export default function FractionalServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        </div>

        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-3xl">
              <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
                Executive Services
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.95]">
                Fractional<br />
                <span className="text-amber-400">Executive Services</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Access senior executive talent on a part-time basis. Get the leadership
                expertise your business needs without the full-time cost or commitment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="/handler/sign-up"
                  className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-white mb-1">60%</div>
              <p className="text-gray-400 text-sm">Cost savings vs full-time</p>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">1-3</div>
              <p className="text-gray-400 text-sm">Days per week typical</p>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">2 wks</div>
              <p className="text-gray-400 text-sm">Average time to start</p>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">15+ yrs</div>
              <p className="text-gray-400 text-sm">Average experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Fractional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What Are Fractional Services?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Fractional services provide businesses access to experienced executives who work
            part-time—typically 1-3 days per week. Instead of hiring a full-time executive,
            you get senior expertise at a fraction of the cost.
          </p>
          <p className="text-gray-600 mb-6">
            This model is ideal for growing businesses that need strategic leadership but aren't
            ready for (or don't need) full-time executive hires. Fractional executives bring
            experience from multiple companies and industries, offering perspective that
            full-time hires often lack.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cost Effective</h3>
              <p className="text-gray-600 text-sm">Save 40-60% vs full-time equivalent</p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Flexible</h3>
              <p className="text-gray-600 text-sm">Scale up or down as needed</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Experienced</h3>
              <p className="text-gray-600 text-sm">15-25 years senior expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
              Our Services
            </span>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Available Fractional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of fractional executive services to match your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Fractional CFO', description: 'Financial strategy, fundraising, and FP&A leadership.', link: '/fractional-cfo-services', icon: '💰' },
              { title: 'Fractional CMO', description: 'Marketing strategy, brand, and growth leadership.', link: '/fractional-cmo-services', icon: '📢' },
              { title: 'Fractional CTO', description: 'Technical strategy, architecture, and engineering leadership.', link: '/fractional-cto-services', icon: '💻' },
              { title: 'Fractional COO', description: 'Operations, scaling, and process leadership.', link: '/fractional-coo-services', icon: '⚙️' },
              { title: 'Fractional CPO', description: 'Product strategy, roadmap, and team leadership.', link: '/fractional-cpo-services', icon: '🎯' },
              { title: 'Fractional CHRO', description: 'People strategy, culture, and HR leadership.', link: '/fractional-chro-services', icon: '👥' },
              { title: 'Fractional CRO', description: 'Revenue strategy, sales, and GTM leadership.', link: '/fractional-cro-services', icon: '📈' },
              { title: 'Fractional CISO', description: 'Security strategy, compliance, and risk leadership.', link: '/fractional-ciso-services', icon: '🔐' },
              { title: 'Fractional CDO', description: 'Data strategy, analytics, and AI leadership.', link: '/fractional-cdo-services', icon: '📊' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="group">
                <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-amber-400 hover:shadow-lg transition-all h-full">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who Uses Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
                Perfect For
              </span>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Who Uses Fractional Services?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Startups & Scale-ups', description: 'Need senior expertise but can\'t justify full-time executive salaries.' },
                  { title: 'SMEs', description: 'Want strategic leadership in specific functions without full-time overhead.' },
                  { title: 'PE Portfolio Companies', description: 'Need rapid value creation with experienced operators.' },
                  { title: 'Companies in Transition', description: 'Facing strategic challenges that need expert guidance.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Business meeting"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Find Your Fractional Executive?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Tell us what leadership expertise you need and we'll match you with experienced fractional executives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/handler/sign-up"
              className="px-10 py-5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/people"
              className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Browse Executives
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
