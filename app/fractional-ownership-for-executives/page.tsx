import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Ownership for Execs",
  description: "Fractional ownership for executives. Property, jets, luxury assets. Lifestyle investment guide.",
  keywords: "fractional ownership executives, fractional ownership lifestyle, executive fractional property, portfolio career investments",
  alternates: {
    canonical: "https://fractional.quest/fractional-ownership-for-executives",
  },
};

export default function FractionalOwnershipExecutivesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span>/</span>
            <Link href="/fractional-ownership-guide" className="hover:text-gray-200">Ownership Guide</Link>
            <span>/</span>
            <span className="text-white">For Executives</span>
          </nav>
          <span className="inline-block text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
            Lifestyle Guide
          </span>
          <h1 className="font-editorial text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
            Fractional Ownership<br />
            <span className="text-amber-400">For Fractional Executives</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            You've built a fractional career. You work 2-3 days a week, earn £150-300k,
            and have the flexibility others dream about. Now it's time to extend that
            fractional philosophy to the rest of your life.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Perfect Match */}
          <section className="mb-16">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Why Fractional Ownership + Fractional Careers = Perfect Match
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fractional executives are uniquely positioned to benefit from fractional
              ownership of luxury assets. Here's why the model works so well for portfolio
              professionals:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">The Income Fit</h3>
                <p className="text-gray-600 text-sm">
                  Earning £150-300k with 2-4 clients gives you the capital for fractional
                  investments without overextending. A 1/8th share in a £2M property
                  (~£250k) is achievable on fractional executive earnings.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">The Flexibility Fit</h3>
                <p className="text-gray-600 text-sm">
                  Unlike full-time employees locked to set holidays, fractional executives
                  can often schedule work around fractional property availability—taking
                  off-peak weeks that others can't access.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">The Philosophy Fit</h3>
                <p className="text-gray-600 text-sm">
                  You've already embraced the idea that you don't need to own 100% of
                  something to get the value. Why own a holiday home you'll use 6 weeks
                  a year when a fraction gives you the same lifestyle?
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">The Location Fit</h3>
                <p className="text-gray-600 text-sm">
                  Fractional work is location-independent. Fractional property in Lisbon,
                  the Alps, or the Algarve becomes a genuine base of operations—not just
                  a holiday.
                </p>
              </div>
            </div>
          </section>

          {/* Common Fractional Ownership Paths */}
          <section className="mb-16">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Common Fractional Ownership Paths for Executives
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="font-bold text-gray-900 mb-2 text-xl">1. The European Holiday Home</h3>
                <p className="text-gray-600 mb-4">
                  The most popular path. A 1/8th share in a villa in Portugal, Spain, France,
                  or Greece gives you 6+ weeks per year in the sun. Many fractional executives
                  structure their client work to include extended European "workcations."
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Typical investment:</strong> £100k-£400k for the share, £5-10k annual fees
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="font-bold text-gray-900 mb-2 text-xl">2. The UK Country Retreat</h3>
                <p className="text-gray-600 mb-4">
                  A share in a Cotswolds cottage, Lake District lodge, or Scottish estate.
                  Perfect for weekends away without the hassle of full ownership. Many
                  executives use these for client hospitality as well as personal use.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Typical investment:</strong> £75k-£300k for the share, £4-8k annual fees
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-gray-900 mb-2 text-xl">3. The Ski Property</h3>
                <p className="text-gray-600 mb-4">
                  French, Swiss, or Austrian Alps properties work brilliantly on a fractional
                  basis. Ski properties have strong rental demand for off-peak weeks, offsetting
                  costs. And 4-6 weeks of skiing is plenty for most families.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Typical investment:</strong> £150k-£500k for the share, £8-15k annual fees
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-bold text-gray-900 mb-2 text-xl">4. The Aviation Solution</h3>
                <p className="text-gray-600 mb-4">
                  For executives with heavy travel requirements, fractional jet ownership
                  (or jet card programs) can make sense. 50-100 flight hours per year is
                  ideal for fractional—too much for charter, too little for full ownership.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Typical investment:</strong> £500k-£2M for a share, £100k+ annual fees (higher cost tier)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Lifestyle Calculation */}
          <section className="mb-16">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              The Lifestyle Calculation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Let's do the maths on a typical fractional executive considering fractional
              property ownership:
            </p>

            <div className="bg-gray-100 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Example: Sarah, Fractional CFO</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Work Profile</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 3 clients, 2 days/week each = 6 days/week capacity</li>
                    <li>• Day rate: £1,100</li>
                    <li>• Annual revenue: ~£250k</li>
                    <li>• After tax/costs: ~£150k take-home</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Fractional Property</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 1/8th share in Algarve villa</li>
                    <li>• Share cost: £180k</li>
                    <li>• Annual fees: £7,500</li>
                    <li>• Usage: 6 weeks/year</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">The Result</h4>
                <p className="text-gray-600 text-sm">
                  Sarah works remotely from Portugal for 4 of her 6 weeks, maintaining
                  client work while living the lifestyle. Her annual fees work out to
                  £1,250/week—less than many quality villa rentals, but she's building
                  equity, not burning cash.
                </p>
              </div>
            </div>
          </section>

          {/* Practical Considerations */}
          <section className="mb-16">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Practical Considerations
            </h2>

            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3">Work Remotely from Your Share</h3>
                <p className="text-green-700 text-sm">
                  Many fractional executives use their property shares as working bases.
                  Check that your ownership includes: reliable WiFi, a workspace, and no
                  restrictive usage policies. Some properties prohibit extended working stays.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-bold text-amber-800 mb-3">Tax Structuring Matters</h3>
                <p className="text-amber-700 text-sm">
                  As a fractional executive (likely a Ltd company director), think about
                  whether to buy personally or through your company. Each has different
                  tax implications for purchase costs, running costs, and eventual sale.
                  Get advice from an accountant who understands both property and contractor structures.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-3">Scheduling Flexibility</h3>
                <p className="text-blue-700 text-sm">
                  Your advantage over full-time employees: you can often take off-peak weeks
                  that others can't. Look for fractional arrangements with fair scheduling
                  systems and ask how peak weeks are allocated.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="font-bold text-purple-800 mb-3">Liquidity Planning</h3>
                <p className="text-purple-700 text-sm">
                  Don't over-extend. Fractional property is relatively illiquid—you can't
                  sell quickly if clients dry up. Keep emergency reserves outside of
                  property investments.
                </p>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="mb-16">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Getting Started
            </h2>

            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Establish Your Fractional Career First</h3>
                  <p className="text-gray-600">
                    If you're not already working fractionally, that's step one. You need the
                    income and flexibility before extending to ownership.
                  </p>
                  <Link href="/fractional-jobs-uk" className="text-gray-900 font-semibold hover:underline text-sm mt-2 inline-block">
                    Browse Fractional Executive Jobs →
                  </Link>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Define Your Lifestyle Vision</h3>
                  <p className="text-gray-600">
                    Where do you want to spend time? How many weeks per year? Working remotely
                    or pure holiday? Beach or mountains? These questions shape your search.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Research Operators</h3>
                  <p className="text-gray-600">
                    The management company matters enormously. Look at their track record,
                    existing properties, owner reviews, and exit procedures.
                  </p>
                  <Link href="/fractional-property-ownership-uk" className="text-gray-900 font-semibold hover:underline text-sm mt-2 inline-block">
                    Read Our UK Property Guide →
                  </Link>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Get Professional Advice</h3>
                  <p className="text-gray-600">
                    Speak to an accountant about tax structuring and a solicitor about the
                    ownership agreement before committing significant capital.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Start Smaller If Unsure</h3>
                  <p className="text-gray-600">
                    Some platforms offer smaller fractional shares. Test the model before
                    committing to a larger stake in a premium property.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Related Content */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="font-bold text-gray-900 mb-6">Continue Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/fractional-ownership-guide" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors h-full">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    Fractional Ownership 101
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The complete guide to fractional ownership.
                  </p>
                </div>
              </Link>
              <Link href="/fractional-property-ownership-uk" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors h-full">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    UK Property Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fractional property for UK buyers.
                  </p>
                </div>
              </Link>
              <Link href="/destinations" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors h-full">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    Work From Anywhere
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Popular destinations for fractional executives.
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
            Start Your Fractional Journey
          </h2>
          <p className="text-gray-600 mb-8">
            The path to fractional ownership starts with fractional income.
            Explore executive opportunities that give you the flexibility and
            earnings to build your ideal lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse Fractional Jobs
            </Link>
            <Link
              href="/profile/edit"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Create Your Profile
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
