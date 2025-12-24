import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Ownership vs Timeshare: Key Differences Explained",
  description: "Confused about fractional ownership vs timeshare? Learn the crucial differences in ownership, value, costs, and which is right for you.",
  keywords: "fractional ownership vs timeshare, timeshare vs fractional, fractional ownership timeshare difference, is fractional ownership a timeshare",
  alternates: {
    canonical: "https://fractional.quest/fractional-vs-timeshare",
  },
};

export default function FractionalVsTimesharePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-white border-b border-gray-200">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/fractional-ownership-guide" className="hover:text-gray-700">Ownership Guide</Link>
            <span>/</span>
            <span className="text-gray-900">vs Timeshare</span>
          </nav>
          <span className="inline-block text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">
            Comparison Guide
          </span>
          <h1 className="font-editorial text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Fractional Ownership vs Timeshare
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            These terms are often confused, but they represent fundamentally different models.
            One gives you actual equity in an asset. The other is essentially a prepaid holiday.
            Here's what you need to know.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="bg-amber-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 mb-2">The Quick Answer</h2>
              <p className="text-gray-700">
                <strong>Fractional ownership</strong> = You own equity in the property. You share in
                appreciation and can sell your stake. <strong>Timeshare</strong> = You buy the right
                to use a property for one week per year. No equity, notoriously hard to resell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Comparison Table */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Side-by-Side Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 border border-gray-200 font-bold text-gray-900 w-1/3">Aspect</th>
                    <th className="text-left p-4 border border-gray-200 font-bold text-teal-700 w-1/3">Fractional Ownership</th>
                    <th className="text-left p-4 border border-gray-200 font-bold text-orange-700 w-1/3">Timeshare</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">What you own</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">Equity share in the property (typically via SPV)</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">Right to use for specific time period only</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Number of owners</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">4-12 owners per property</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">52+ owners (one per week)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Usage time</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">4-13 weeks per year</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">1-2 weeks per year</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Capital appreciation</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">Yes - your share grows with property value</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">No - no equity means no appreciation</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Typical entry cost</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">£50,000 - £500,000+</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">£10,000 - £50,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Resale value</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">Generally retains/gains value</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">Often worth nothing - hard to give away</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Exit strategy</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">Sell share on secondary market</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">Exit companies exist (you often pay them)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Annual fees</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">£3,000 - £15,000</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">£500 - £2,000 (often rising unpredictably)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Flexibility</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">Scheduling among few owners</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">Fixed week or points-based exchange</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Decision rights</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-teal-50">Voting rights on major decisions</td>
                    <td className="p-4 border border-gray-200 text-gray-600 bg-orange-50">No say in property management</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep Dive Sections */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              The Ownership Difference
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              This is the fundamental distinction that matters most.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <h3 className="font-bold text-teal-800 mb-3">Fractional: Real Equity</h3>
                <p className="text-teal-700 text-sm">
                  When you buy a fractional share, you literally own part of the property—usually
                  through shares in an LLC or SPV that holds the deed. If the property is worth
                  £2 million and you own 1/8th, you hold £250,000 in real estate equity.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="font-bold text-orange-800 mb-3">Timeshare: Just Usage Rights</h3>
                <p className="text-orange-700 text-sm">
                  A timeshare gives you the right to use a property (or points to exchange)
                  for a specific period each year. You own nothing tangible. The developer
                  or resort company owns the property—you're essentially a long-term renter.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              The Resale Problem
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              This is where timeshares have earned their notorious reputation.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-red-800 mb-3">The Timeshare Resale Nightmare</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Timeshares often sell for pennies on the pound on resale markets
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Many owners can't give them away for free
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  "Timeshare exit companies" charge thousands to help you escape
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Maintenance fees continue forever, even if you never use it
                </li>
              </ul>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
              <h3 className="font-bold text-teal-800 mb-3">Fractional Resale: A Different Story</h3>
              <p className="text-teal-700 mb-3">
                Fractional shares represent real property value. While not as liquid as stocks,
                they generally hold value because:
              </p>
              <ul className="space-y-2 text-teal-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You own actual equity that reflects property market values
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fewer owners means more usage value per share
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Many operators have buyback programs or facilitate resales
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              When Timeshares Might Make Sense
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              To be fair, there are narrow scenarios where timeshares work:
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You buy resale at a massive discount (often 90% off original price)
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You genuinely want to visit the same place every year forever
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You view it purely as consumption, not investment
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You're okay with annual fees for life with no exit
              </li>
            </ul>
            <p className="text-gray-600 italic">
              For most people with the capital for fractional ownership, it's the superior choice.
            </p>
          </section>

          {/* Bottom Line */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              The Bottom Line
            </h2>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  <strong>Fractional ownership</strong> is an investment. You buy real estate equity,
                  benefit from appreciation, and can sell your stake on a secondary market.
                </p>
                <p className="text-lg text-gray-700">
                  <strong>Timeshares</strong> are prepaid holidays with a terrible reputation for
                  good reason. Most people who buy them regret it and struggle to escape.
                </p>
                <p className="text-lg text-gray-700">
                  If you have the capital and want a second home experience with ownership
                  benefits, fractional ownership is almost always the smarter choice.
                </p>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="font-bold text-gray-900 mb-6">Learn More</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fractional-ownership-guide" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    Fractional Ownership Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Everything you need to know about fractional ownership.
                  </p>
                </div>
              </Link>
              <Link href="/fractional-property-ownership-uk" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    UK Property Ownership
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fractional property ownership for UK buyers.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Fractional Lifestyle Starts With Income
          </h2>
          <p className="text-gray-600 mb-8">
            Fractional executives earn £150-300k working flexibly—building the wealth
            and freedom to explore fractional ownership opportunities.
          </p>
          <Link
            href="/fractional-jobs-uk"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Fractional Executive Careers
          </Link>
        </div>
      </section>
    </main>
  );
}
