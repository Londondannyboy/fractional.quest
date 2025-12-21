import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Fractional Quest | Our Story & Mission",
  description: "Learn about Fractional Quest - the platform helping executives transition to portfolio careers and companies find fractional leadership talent.",
  alternates: {
    canonical: "https://fractional.quest/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <span className="inline-block text-sm font-semibold text-amber-600 uppercase tracking-wider mb-4">
            Our Story
          </span>
          <h1 className="font-editorial text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            Building the Future of Executive Work
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Fractional Quest was born from a simple observation: the traditional employment
            model is broken for senior executives. Too many talented leaders are stuck in
            roles that don't fulfil them, while thousands of companies need their expertise
            but can't afford full-time C-suite hires.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
                Our Mission
              </span>
              <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-6">
                Democratising Access to Executive Talent
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe every ambitious company deserves access to world-class leadership,
                and every experienced executive deserves the freedom to design their own career.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The fractional model makes this possible. A CFO who once worked exclusively
                for one company can now bring their expertise to three or four growing
                businesses. A startup that couldn't afford a full-time CMO can now access
                senior marketing leadership at a fraction of the cost.
              </p>
              <p className="text-lg text-gray-600">
                Everyone wins. That's the fractional revolution.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">For Executives</h3>
                    <p className="text-gray-600">Freedom, flexibility, and a portfolio career that matches your ambitions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">For Companies</h3>
                    <p className="text-gray-600">Senior leadership expertise at a fraction of the cost of a full-time hire.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">For Everyone</h3>
                    <p className="text-gray-600">A new model of work that creates value for all stakeholders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
              What We Do
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">
              Three Ways We Help
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Job Board</h3>
              <p className="text-gray-600">
                The UK's most comprehensive fractional executive job board. We aggregate
                roles from across the market so you can find your next engagement in one place.
              </p>
              <Link href="/fractional-jobs-uk" className="inline-block mt-4 text-gray-900 font-semibold hover:underline">
                Browse Jobs →
              </Link>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Executive Network</h3>
              <p className="text-gray-600">
                Join our community of fractional executives. Create your profile,
                connect with peers, and get discovered by companies looking for talent like you.
              </p>
              <Link href="/people" className="inline-block mt-4 text-gray-900 font-semibold hover:underline">
                Meet Executives →
              </Link>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fractional Services</h3>
              <p className="text-gray-600">
                Need a fractional CFO, CMO, CTO, or COO? We help companies find and
                engage the right fractional executives for their specific needs.
              </p>
              <Link href="/fractional-cfo-services" className="inline-block mt-4 text-gray-900 font-semibold hover:underline">
                Our Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
              The Team
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">
              Built by Fractional Believers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fractional Quest is built by a team who've lived the fractional journey themselves.
              We understand the challenges and opportunities because we've been there.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-600 mb-6">
              We're a small, focused team based in the UK, combining deep expertise in
              executive recruitment, technology, and the fractional work model. Our mission
              is to make fractional careers accessible to more executives and fractional
              talent accessible to more companies.
            </p>
            <p className="text-gray-600">
              Questions? We'd love to hear from you at{" "}
              <a href="mailto:hello@fractional.quest" className="text-gray-900 font-semibold hover:underline">
                hello@fractional.quest
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Whether you're an executive exploring fractional work or a company looking for talent,
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/profile/edit"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Create Your Profile
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
