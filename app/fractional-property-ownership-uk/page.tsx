import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional Property Ownership UK: Complete Guide 2025",
  description: "Everything you need to know about fractional property ownership in the UK. How it works, costs, tax implications, and top providers.",
  keywords: "fractional property ownership UK, fractional ownership property, shared property ownership UK, fractional real estate UK",
  alternates: {
    canonical: "https://fractional.quest/fractional-property-ownership-uk",
  },
};

export default function FractionalPropertyUKPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/fractional-ownership-guide" className="hover:text-gray-700">Ownership Guide</Link>
            <span>/</span>
            <span className="text-gray-900">UK Property</span>
          </nav>
          <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-4">
            UK Guide
          </span>
          <h1 className="font-editorial text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            Fractional Property Ownership in the UK
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Own a share of a holiday home or investment property in the UK or abroad.
            This guide covers how fractional property works, typical costs, tax implications,
            and leading providers.
          </p>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
            <span>Updated December 2024</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Points */}
          <div className="bg-teal-50 rounded-xl p-6 mb-12">
            <h2 className="font-bold text-gray-900 mb-4">Key Points</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fractional property ownership gives you a deeded share in real estate
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Typical entry costs: £50,000-£500,000 depending on property value and share size
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You benefit from capital appreciation (or suffer depreciation)
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                UK tax treatment depends on how ownership is structured (personal vs company)
              </li>
            </ul>
          </div>

          {/* How it Works in UK */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              How Fractional Property Works in the UK
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Fractional property ownership in the UK typically involves purchasing a share
              in a property held through a Special Purpose Vehicle (SPV)—usually a limited
              company that exists solely to own the property.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              You buy shares in this company, which entitles you to:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-6 space-y-2">
              <li>Usage rights proportional to your share (e.g., 1/8th share = ~6 weeks/year)</li>
              <li>A share of any capital appreciation when the property is sold</li>
              <li>Voting rights on major decisions affecting the property</li>
            </ul>
            <p className="text-lg text-gray-600">
              A management company typically handles day-to-day operations including cleaning,
              maintenance, scheduling, and rental of unused weeks.
            </p>
          </section>

          {/* Popular Locations */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Popular Locations for UK Buyers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">UK Domestic</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cornwall & Devon (coastal properties)</li>
                  <li>• Lake District</li>
                  <li>• Scottish Highlands</li>
                  <li>• Cotswolds</li>
                  <li>• London (investment properties)</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">European Favourites</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Portugal (Algarve, Lisbon)</li>
                  <li>• Spain (Costa del Sol, Balearics)</li>
                  <li>• France (French Alps, Provence)</li>
                  <li>• Italy (Tuscany, Italian Lakes)</li>
                  <li>• Greece (Cyclades, Crete)</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6">
              <p className="text-gray-800">
                <strong>Post-Brexit note:</strong> Owning property in the EU is still
                straightforward, but be aware of Schengen 90/180 day rules for stays.
                Fractional ownership doesn't grant residency rights.
              </p>
            </div>
          </section>

          {/* Costs */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Typical Costs
            </h2>

            <h3 className="font-bold text-gray-900 mb-4">Upfront Costs</h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 border border-gray-200">Property Value</th>
                    <th className="text-left p-4 border border-gray-200">1/8th Share</th>
                    <th className="text-left p-4 border border-gray-200">1/4 Share</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-200">£500,000</td>
                    <td className="p-4 border border-gray-200">~£62,500</td>
                    <td className="p-4 border border-gray-200">~£125,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200">£1,000,000</td>
                    <td className="p-4 border border-gray-200">~£125,000</td>
                    <td className="p-4 border border-gray-200">~£250,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200">£2,000,000</td>
                    <td className="p-4 border border-gray-200">~£250,000</td>
                    <td className="p-4 border border-gray-200">~£500,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-gray-900 mb-4">Annual Costs (per share)</h3>
            <p className="text-gray-600 mb-4">
              Annual fees typically range from £3,000-£15,000 depending on property type
              and location. These cover:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
              <li>Property management</li>
              <li>Insurance</li>
              <li>Maintenance and repairs</li>
              <li>Cleaning between stays</li>
              <li>Reserve fund contributions</li>
              <li>Utilities and council tax</li>
            </ul>
          </section>

          {/* Tax Implications */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              UK Tax Implications
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <p className="text-red-800 font-medium">
                Disclaimer: This is general information, not tax advice. Consult a
                qualified accountant for your specific situation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Stamp Duty (SDLT)</h3>
                <p className="text-gray-600">
                  You pay SDLT on your share of the property purchase. Additional
                  property rates (3% surcharge) typically apply if you already own
                  property. For SPV purchases, rates differ.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Capital Gains Tax</h3>
                <p className="text-gray-600">
                  When you sell your share, you may owe CGT on any profit. Current
                  rates are 18%/24% depending on your income tax band. Losses can
                  offset gains.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Rental Income</h3>
                <p className="text-gray-600">
                  If your unused weeks are rented out, your share of rental income
                  is taxable. SPV structures may allow offset of certain costs.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Inheritance Tax</h3>
                <p className="text-gray-600">
                  Your share forms part of your estate for IHT purposes. Trust
                  structures can sometimes mitigate this, but get professional advice.
                </p>
              </div>
            </div>
          </section>

          {/* Providers */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              UK Fractional Property Providers
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Several companies operate in the UK fractional property market. Here are
              some of the established players:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Kocomo</h3>
                <p className="text-gray-600 text-sm">
                  Luxury holiday homes in Europe and beyond. Typically 1/8th shares
                  in properties valued £1M+.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Pacaso</h3>
                <p className="text-gray-600 text-sm">
                  US-based but expanding to Europe. Focus on luxury second homes
                  with strong management infrastructure.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Property Partner</h3>
                <p className="text-gray-600 text-sm">
                  UK investment-focused platform. Smaller fractional shares in
                  buy-to-let properties. More investment than lifestyle.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">August</h3>
                <p className="text-gray-600 text-sm">
                  Private syndicate model for luxury properties in the Alps,
                  Mediterranean, and UK. Higher entry points.
                </p>
              </div>
            </div>
          </section>

          {/* Pros and Cons */}
          <section className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Pros and Cons for UK Buyers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-4">Advantages</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Access luxury properties at fraction of full cost
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Professional management eliminates hassle
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Equity ownership with appreciation potential
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Diversify across multiple properties/locations
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-4">Disadvantages</h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Limited flexibility—can't use whenever you want
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Illiquid—selling can take 6-12 months
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Potential conflicts with co-owners
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Annual fees regardless of usage
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fractional-ownership-guide" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    What is Fractional Ownership?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    The complete guide to fractional ownership across all asset classes.
                  </p>
                </div>
              </Link>
              <Link href="/fractional-vs-timeshare" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    Fractional vs Timeshare
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Understand the key differences between these ownership models.
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
            Earn Like An Executive, Live Like An Owner
          </h2>
          <p className="text-gray-600 mb-8">
            Fractional executives earn £150-300k working 2-3 days a week—perfect
            for building the lifestyle that includes fractional property ownership.
          </p>
          <Link
            href="/fractional-jobs-uk"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Browse Fractional Executive Jobs
          </Link>
        </div>
      </section>
    </main>
  );
}
