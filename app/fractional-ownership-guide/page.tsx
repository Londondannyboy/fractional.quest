import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Fractional Ownership? Complete Guide 2025 | Fractional Quest",
  description: "Learn about fractional ownership: how it works, types of fractional investments, benefits, risks, and whether it's right for you. Complete UK guide.",
  keywords: "fractional ownership, fractional ownership UK, fractional investment, shared ownership, fractional property",
  alternates: {
    canonical: "https://fractional.quest/fractional-ownership-guide",
  },
};

export default function FractionalOwnershipGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero with Aspirational Image */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-700/90 via-orange-600/80 to-amber-500/60" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Fractional Ownership Guide</span>
            </nav>
            <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Complete Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              What is Fractional Ownership?
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Fractional ownership allows multiple investors to share ownership of high-value assets
              like property, aircraft, or luxury goods. This guide explains how it works, the different
              types, and whether it's right for you.
            </p>
            <div className="mt-8 flex items-center gap-4 text-sm text-white/70">
              <span>Updated December 2024</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="font-bold text-gray-900 mb-4">In This Guide</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#what-is" className="block text-gray-600 hover:text-gray-900">1. What is Fractional Ownership?</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">2. How Does Fractional Ownership Work?</a>
              <a href="#types" className="block text-gray-600 hover:text-gray-900">3. Types of Fractional Ownership</a>
              <a href="#benefits" className="block text-gray-600 hover:text-gray-900">4. Benefits of Fractional Ownership</a>
            </div>
            <div className="space-y-2">
              <a href="#risks" className="block text-gray-600 hover:text-gray-900">5. Risks and Considerations</a>
              <a href="#vs-timeshare" className="block text-gray-600 hover:text-gray-900">6. Fractional vs Timeshare</a>
              <a href="#right-for-you" className="block text-gray-600 hover:text-gray-900">7. Is Fractional Ownership Right For You?</a>
              <a href="#get-started" className="block text-gray-600 hover:text-gray-900">8. How to Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* What is Fractional Ownership */}
          <section id="what-is" className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              What is Fractional Ownership?
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Fractional ownership is a method of asset ownership where multiple investors purchase
              shares in a single high-value asset. Each owner holds a percentage of the asset and
              shares in both the costs and benefits proportional to their stake.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Think of it like buying shares in a company, but instead of owning part of a business,
              you own part of a physical asset—whether that's a holiday home in the Algarve, a private
              jet, or a classic car collection.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <p className="text-gray-800 font-medium">
                Key insight: Unlike timeshares, fractional ownership gives you actual equity in the asset.
                If the property increases in value, so does your share.
              </p>
            </div>
            <p className="text-lg text-gray-600">
              The fractional ownership model has existed for decades in aviation and yachting, but has
              recently expanded significantly into real estate, classic cars, fine art, and even
              luxury watches.
            </p>
          </section>

          {/* How it Works */}
          <section id="how-it-works" className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              How Does Fractional Ownership Work?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fractional ownership typically involves these key elements:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">1. Asset Selection</h3>
                <p className="text-gray-600">
                  A management company or syndicate identifies a high-value asset and divides it into
                  shares (typically 4-12 owners per asset, though some platforms allow smaller fractions).
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">2. Purchase Structure</h3>
                <p className="text-gray-600">
                  Owners purchase their share, usually through an LLC or SPV (Special Purpose Vehicle)
                  that holds the asset. This provides liability protection and simplifies ownership transfer.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">3. Usage Rights</h3>
                <p className="text-gray-600">
                  Owners receive proportional usage rights. A 1/8th share typically means 6-7 weeks of
                  usage per year. Scheduling is managed by the management company or through owner agreements.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">4. Ongoing Costs</h3>
                <p className="text-gray-600">
                  Annual fees cover maintenance, insurance, property management, and reserves. These
                  are split proportionally among owners based on their ownership percentage.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">5. Exit Strategy</h3>
                <p className="text-gray-600">
                  Owners can typically sell their share on the secondary market, to other co-owners,
                  or back to the management company. Some structures have built-in exit timelines.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Fractional Ownership */}
          <section id="types" className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Types of Fractional Ownership
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Property / Real Estate</h3>
                <p className="text-gray-600 text-sm mb-4">
                  The most common form. Own a share of a holiday home, investment property, or
                  luxury residence without the full price tag.
                </p>
                <Link href="/fractional-property-ownership-uk" className="text-sm font-semibold text-gray-900 hover:underline">
                  Read our UK Property Guide →
                </Link>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Private Aviation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Share ownership of private jets. Popular among executives who need 50-200 flight
                  hours per year but not enough to justify full ownership.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Yachts & Boats</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Own part of a yacht without the full maintenance burden. Ideal for 4-8 weeks
                  of sailing per year.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Classic Cars</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Invest in appreciating classic vehicles. Platforms like Rally let you buy
                  shares in Ferraris, Porsches, and rare collectibles.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Fine Art</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Own fractions of museum-quality art. Masterworks and similar platforms democratise
                  access to Picassos and Basquiats.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Luxury Watches</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Invest in rare timepieces. Platforms allow fractional ownership of Patek Philippe,
                  Rolex, and other collectible watches.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section id="benefits" className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Benefits of Fractional Ownership
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Lower Entry Cost</h3>
                  <p className="text-gray-600">
                    Access assets that would otherwise be out of reach. A £2M villa becomes accessible
                    at £250K for a 1/8th share.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Reduced Hassle</h3>
                  <p className="text-gray-600">
                    Professional management handles maintenance, cleaning, insurance, and logistics.
                    You just show up and enjoy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Equity Ownership</h3>
                  <p className="text-gray-600">
                    Unlike renting or timeshares, you build equity. If the asset appreciates, your
                    investment grows too.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Portfolio Diversification</h3>
                  <p className="text-gray-600">
                    Spread capital across multiple assets. Own fractions of properties in different
                    locations rather than everything in one.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Right-Sized Usage</h3>
                  <p className="text-gray-600">
                    Why pay for 365 days when you'll use 45? Fractional ownership matches investment
                    to actual usage needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Risks */}
          <section id="risks" className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Risks and Considerations
            </h2>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-red-800 mb-4">Key Risks to Consider</h3>
              <ul className="space-y-3 text-red-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span><strong>Illiquidity:</strong> Selling your share can take months. This isn't a liquid investment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span><strong>Co-owner conflicts:</strong> Disputes can arise over usage scheduling, maintenance decisions, or selling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span><strong>Management quality:</strong> Your experience depends heavily on the management company. Poor management = poor experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span><strong>Peak time competition:</strong> Everyone wants Christmas week and August. Allocation systems vary in fairness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span><strong>Depreciation risk:</strong> Some assets (jets, boats) depreciate. Property usually appreciates, but not always.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Fractional vs Timeshare */}
          <section id="vs-timeshare" className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Fractional Ownership vs Timeshare
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              These are often confused, but they're fundamentally different:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 border border-gray-200 font-bold text-gray-900">Aspect</th>
                    <th className="text-left p-4 border border-gray-200 font-bold text-gray-900">Fractional Ownership</th>
                    <th className="text-left p-4 border border-gray-200 font-bold text-gray-900">Timeshare</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Ownership</td>
                    <td className="p-4 border border-gray-200 text-gray-600">Actual equity stake in the asset</td>
                    <td className="p-4 border border-gray-200 text-gray-600">Right to use only, no equity</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Value</td>
                    <td className="p-4 border border-gray-200 text-gray-600">Can appreciate or depreciate</td>
                    <td className="p-4 border border-gray-200 text-gray-600">Typically depreciates rapidly</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Owners per asset</td>
                    <td className="p-4 border border-gray-200 text-gray-600">4-12 owners</td>
                    <td className="p-4 border border-gray-200 text-gray-600">52+ owners (weekly slices)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Usage time</td>
                    <td className="p-4 border border-gray-200 text-gray-600">4-13 weeks per year</td>
                    <td className="p-4 border border-gray-200 text-gray-600">1-2 weeks per year</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">Exit strategy</td>
                    <td className="p-4 border border-gray-200 text-gray-600">Sell share on secondary market</td>
                    <td className="p-4 border border-gray-200 text-gray-600">Difficult to sell, often worthless</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
              <p className="text-gray-800">
                <strong>Bottom line:</strong> Fractional ownership is an investment. Timeshare is a prepaid holiday
                with notoriously poor resale value. If you're thinking long-term and want potential appreciation,
                fractional ownership is the better structure.
              </p>
            </div>

            <div className="mt-6">
              <Link href="/fractional-vs-timeshare" className="text-gray-900 font-semibold hover:underline">
                Read our detailed Fractional vs Timeshare comparison →
              </Link>
            </div>
          </section>

          {/* Is it Right for You */}
          <section id="right-for-you" className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              Is Fractional Ownership Right For You?
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Fractional ownership works best for people who:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Have the capital for a significant investment but not full ownership
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Would realistically use the asset 4-12 weeks per year
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Want ownership benefits without management hassle
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Are comfortable with a 5-10+ year investment horizon
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Value flexibility in scheduling (can work with other owners)
              </li>
            </ul>

            <div className="bg-gray-100 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Particularly Suited For:</h3>
              <p className="text-gray-600">
                Fractional executives and portfolio professionals often find fractional ownership
                attractive because their flexible schedules allow off-peak usage, and their income
                supports the investment without over-extending.
              </p>
              <div className="mt-4">
                <Link href="/fractional-ownership-for-executives" className="text-gray-900 font-semibold hover:underline">
                  Read: Fractional Ownership for Executives →
                </Link>
              </div>
            </div>
          </section>

          {/* How to Get Started */}
          <section id="get-started" className="mb-12">
            <h2 className="font-editorial text-3xl font-bold text-gray-900 mb-6">
              How to Get Started
            </h2>

            <ol className="space-y-6 mb-8">
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Define your goals</h3>
                  <p className="text-gray-600">What asset class interests you? How much usage do you need? What's your budget and time horizon?</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Research management companies</h3>
                  <p className="text-gray-600">The quality of your experience depends heavily on management. Look for established operators with strong track records.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Understand the legal structure</h3>
                  <p className="text-gray-600">How is ownership held? What are your rights and obligations? Get independent legal advice.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Review all costs</h3>
                  <p className="text-gray-600">Purchase price is just the start. Understand annual fees, special assessments, and potential exit costs.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Start small if possible</h3>
                  <p className="text-gray-600">Some platforms allow smaller fractional investments. Test the model before committing to larger purchases.</p>
                </div>
              </li>
            </ol>
          </section>

          {/* Related Content */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/fractional-property-ownership-uk" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    Fractional Property Ownership UK
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Everything you need to know about fractional property ownership in the UK.
                  </p>
                </div>
              </Link>
              <Link href="/fractional-vs-timeshare" className="block group">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                    Fractional vs Timeshare
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A detailed comparison of fractional ownership and timeshares.
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
            Interested in Fractional Work?
          </h2>
          <p className="text-gray-600 mb-8">
            Fractional executives earn £150-300k while working 2-3 days a week—giving you the
            flexibility and income to explore alternative investments like fractional ownership.
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
