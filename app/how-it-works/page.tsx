import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Fractional Hiring Works",
  description: "Hire fractional executives. Connect with experienced CFOs, CMOs, CTOs, COOs at a fraction of cost.",
  alternates: {
    canonical: "https://fractional.quest/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="How fractional hiring works background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
            For Companies
          </span>
          <h1 className="font-editorial text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            How Fractional Hiring Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get experienced executive leadership without the full-time commitment.
            Here's how fractional executives can transform your business.
          </p>
        </div>
      </section>

      {/* What is Fractional */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
                The Basics
              </span>
              <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-6">
                What is a Fractional Executive?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A fractional executive is a senior leader who works with multiple companies
                on a part-time basis. Instead of hiring a full-time CFO at £200k+ per year,
                you engage a fractional CFO for 1-3 days per week at a fraction of the cost.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                These aren't consultants or contractors. They're experienced C-suite
                professionals who embed in your team, attend board meetings, and take
                accountability for outcomes—just like a full-time hire would.
              </p>
              <p className="text-lg text-gray-600">
                The difference? They bring experience from multiple companies, offer
                fresh perspectives, and cost 40-60% less than a full-time equivalent.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Typical Engagement</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">1-3 days per week</div>
                    <div className="text-sm text-gray-500">Flexible scheduling</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">£750-1,500/day</div>
                    <div className="text-sm text-gray-500">Or monthly retainer</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">6-12 month engagements</div>
                    <div className="text-sm text-gray-500">Often extended</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">15-25 years experience</div>
                    <div className="text-sm text-gray-500">Senior professionals only</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
              Our Process
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Four Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial conversation to having a fractional executive embedded in your team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 pt-20">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery Call</h3>
                <p className="text-gray-600">
                  We start with a 30-minute call to understand your business, challenges,
                  and what you're looking for in a fractional executive.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 pt-20">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Candidate Matching</h3>
                <p className="text-gray-600">
                  We search our network of pre-vetted executives and present 2-4 candidates
                  who match your specific requirements and culture.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 pt-20">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Interviews & Selection</h3>
                <p className="text-gray-600">
                  You interview shortlisted candidates directly. We facilitate the process
                  and help with reference checks and negotiations.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-6 left-6 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 pt-20">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Onboarding & Support</h3>
                <p className="text-gray-600">
                  Your fractional executive starts. We check in during the first 90 days
                  to ensure the engagement is successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Hire Fractional */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
              Is It Right For You?
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">
              When to Hire Fractional
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Great Fit</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scale-ups that need senior expertise but can't justify a £200k+ full-time hire
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Companies going through specific transitions (fundraising, M&A, scaling)
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Founder-led businesses that need strategic leadership guidance
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Teams that need mentoring alongside hands-on leadership
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Companies that want to "try before you buy" before making a full-time hire
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Less Ideal</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Large enterprises with complex, full-time leadership requirements
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Companies looking for someone to do junior-level execution
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Situations requiring 5+ days per week of dedicated time
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Companies not ready to give autonomy to an external leader
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Investment
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fractional executives typically charge day rates or monthly retainers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entry Level</h3>
              <p className="text-sm text-gray-500 mb-4">10-15 years experience</p>
              <div className="text-4xl font-bold text-gray-900 mb-2">£750-900</div>
              <div className="text-gray-500 mb-6">per day</div>
              <div className="text-sm text-gray-600">
                1 day/week = £3-4k/month
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-center text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST COMMON
              </div>
              <h3 className="text-lg font-bold mb-2">Experienced</h3>
              <p className="text-sm text-gray-600 mb-4">15-20 years experience</p>
              <div className="text-4xl font-bold mb-2">£1,000-1,200</div>
              <div className="text-gray-600 mb-6">per day</div>
              <div className="text-sm text-gray-400">
                2 days/week = £8-10k/month
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Senior</h3>
              <p className="text-sm text-gray-500 mb-4">20+ years, FTSE/Fortune 500</p>
              <div className="text-4xl font-bold text-gray-900 mb-2">£1,200-1,500+</div>
              <div className="text-gray-500 mb-6">per day</div>
              <div className="text-sm text-gray-600">
                2 days/week = £10-12k/month
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Compare: A full-time CFO costs £150-250k salary + 25-30% employer costs + equity
            </p>
            <p className="text-gray-500 text-sm">
              Fractional typically saves 40-60% while getting equivalent or better expertise
            </p>
          </div>
        </div>
      </section>

      {/* Roles We Place */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
              Roles We Place
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">
              Fractional Executive Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Fractional CFO',
                desc: 'Financial strategy, fundraising, investor relations, FP&A, board reporting',
                link: '/fractional-cfo-services',
                icon: '💰'
              },
              {
                title: 'Fractional CMO',
                desc: 'Marketing strategy, brand building, demand generation, growth leadership',
                link: '/fractional-cmo-services',
                icon: '📢'
              },
              {
                title: 'Fractional CTO',
                desc: 'Technical strategy, architecture, engineering leadership, product development',
                link: '/fractional-cto-services',
                icon: '💻'
              },
              {
                title: 'Fractional COO',
                desc: 'Operations, scaling, process optimisation, team building, execution',
                link: '/fractional-coo-services',
                icon: '⚙️'
              },
            ].map((role) => (
              <Link key={role.title} href={role.link} className="group">
                <div className="bg-white rounded-xl p-6 h-full hover:shadow-md transition-shadow border border-gray-100">
                  <span className="text-4xl mb-4 block">{role.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{role.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Find Your Fractional Executive?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Book a discovery call and we'll help you find the perfect match for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/companies"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/people"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Browse Executives
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
