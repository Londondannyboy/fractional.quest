import Link from "next/link";
import { Metadata } from "next";
import { neon } from "@neondatabase/serverless";
import { JobCard } from "@/components/JobCard";
import { DestinationCard } from "@/components/DestinationCard";
import { ExecutiveCard } from "@/components/ExecutiveCard";
import { PropertyOverlay } from "@/components/PropertyOverlay";
import type { Destination, FeaturedExecutive } from "@/lib/types";

export const metadata: Metadata = {
  title: "Fractional Quest | Design Your Life as a Fractional Executive",
  description: "Join the fractional revolution. Work 2-3 days a week, earn £150-300k, and live anywhere. Browse fractional CFO, CMO, CTO roles or create your profile.",
  keywords: "fractional executive, fractional cfo, fractional cmo, fractional cto, portfolio career, fractional jobs, fractional ownership",
  alternates: {
    canonical: "https://fractional.quest",
  },
};

export const revalidate = 3600;

async function getStats() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const [jobsResult, execsResult] = await Promise.all([
      sql`SELECT COUNT(*) as total FROM jobs WHERE is_active = true AND is_fractional = true`,
      sql`SELECT COUNT(*) as total FROM candidate_profiles WHERE is_public = true AND profile_status = 'published'`
    ]);
    return {
      jobs: parseInt((jobsResult[0] as any)?.total || '0'),
      executives: parseInt((execsResult[0] as any)?.total || '0')
    };
  } catch {
    return { jobs: 0, executives: 0 };
  }
}

async function getFeaturedJobs() {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const jobs = await sql`
      SELECT id, slug, title, company_name, location, is_remote, workplace_type,
             compensation, role_category, skills_required, posted_date
      FROM jobs
      WHERE is_active = true AND is_fractional = true
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `;
    return jobs;
  } catch {
    return [];
  }
}

async function getFeaturedExecutives(): Promise<FeaturedExecutive[]> {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const executives = await sql`
      SELECT * FROM featured_executives
      WHERE status IN ('published', 'featured')
      ORDER BY CASE WHEN status = 'featured' THEN 0 ELSE 1 END,
               featured_order ASC NULLS LAST
      LIMIT 3
    `;
    return executives as FeaturedExecutive[];
  } catch {
    return [];
  }
}

async function getFeaturedDestinations(): Promise<Destination[]> {
  try {
    const sql = neon(process.env.DATABASE_URL!);
    const destinations = await sql`
      SELECT * FROM destinations
      WHERE is_active = true
      ORDER BY nomad_score DESC
      LIMIT 4
    `;
    return destinations as Destination[];
  } catch {
    return [];
  }
}

export default async function Home() {
  const [stats, featuredJobs, featuredExecutives, featuredDestinations] = await Promise.all([
    getStats(),
    getFeaturedJobs(),
    getFeaturedExecutives(),
    getFeaturedDestinations()
  ]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero with Sunny Background Image */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image - Beach/sunlight working */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700/85 via-blue-600/70 to-amber-500/50" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-3xl">
                <span className="inline-block bg-amber-500/90 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
                  The Fractional Revolution
                </span>
                <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                  Design Your Life.<br />
                  <span className="text-amber-400">Not Your Commute.</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                  Join thousands of executives who've traded the 9-5 grind for freedom,
                  flexibility, and a portfolio career. Work 2-3 days a week. Earn £150-300k. Live anywhere.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/fractional-jobs-uk"
                    className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Browse {stats.jobs}+ Jobs
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/profile/edit"
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
                  >
                    Create Your Profile
                  </Link>
                </div>

                {/* Social proof */}
                <div className="mt-12 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                  </div>
                  <p className="text-white/70 text-sm">Join fractional leaders globally</p>
                </div>
              </div>

              {/* Property Overlay on right side */}
              <div className="hidden lg:block lg:w-80">
                <PropertyOverlay variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Types Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">
            Fractional roles for every function
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {['CFO', 'CTO', 'CMO', 'COO', 'CPO', 'CHRO', 'CRO'].map((role) => (
              <span key={role} className="text-lg font-bold text-gray-700">Fractional {role}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">{stats.jobs}+</div>
              <div className="text-sm text-gray-400">Live Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">£750-1,500</div>
              <div className="text-sm text-gray-400">Day Rates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2-3 days</div>
              <div className="text-sm text-gray-400">Per Week</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Remote</div>
              <div className="text-sm text-gray-400">Work Anywhere</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Executives */}
      {featuredExecutives.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
                  Real Stories
                </span>
                <h2 className="font-editorial text-4xl font-bold text-gray-900">
                  Meet Our Community
                </h2>
              </div>
              <Link href="/people" className="text-gray-900 font-semibold hover:underline hidden md:block">
                View All →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredExecutives.map((exec) => (
                <ExecutiveCard key={exec.id} executive={exec} />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link href="/people" className="text-gray-900 font-semibold hover:underline">
                View All Executives →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Executive Roles with Photos */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Executive Roles
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">
              Fractional Leaders for Every Function
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Senior executives working part-time across finance, technology, marketing, and operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: 'Fractional CFO', tagline: 'Financial Strategy & Fundraising', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop', link: '/fractional-cfo-services' },
              { role: 'Fractional CTO', tagline: 'Technical Leadership & Architecture', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', link: '/fractional-cto-services' },
              { role: 'Fractional CMO', tagline: 'Marketing Strategy & Growth', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop', link: '/fractional-cmo-services' },
              { role: 'Fractional COO', tagline: 'Operations & Scaling', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', link: '/fractional-coo-services' },
            ].map((exec, i) => (
              <Link key={i} href={exec.link} className="group text-center block">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={exec.image}
                    alt={exec.role}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <h3 className="font-bold text-white text-lg mb-1">{exec.role}</h3>
                    <p className="text-white/80 text-sm">{exec.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/fractional-services"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle Image Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
              Why Go Fractional?
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Life You've Been Working Towards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop trading time for money. Start building a portfolio career that gives you
              freedom, variety, and the income to match.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Link href="/calculators/rate-finder" className="relative aspect-[4/3] rounded-2xl overflow-hidden block group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-3xl font-bold">£150-300k</div>
                  <div className="text-white/80 text-sm">Annual earnings potential</div>
                </div>
              </div>
            </Link>
            <Link href="/destinations" className="relative aspect-[4/3] rounded-2xl overflow-hidden block group">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Working remotely in Lisbon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-3xl font-bold">Work Anywhere</div>
                  <div className="text-white/80 text-sm">Lisbon, Bali, your home</div>
                </div>
              </div>
            </Link>
            <Link href="/fractional-jobs-uk" className="relative aspect-[4/3] rounded-2xl overflow-hidden block group">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                alt="Work life balance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-3xl font-bold">2-3 Days</div>
                  <div className="text-white/80 text-sm">Per client, per week</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Earn £150-300k+</h3>
              <p className="text-gray-600">
                Work with 2-4 clients at £750-1,500/day. Diversified income, no single point of failure.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work From Anywhere</h3>
              <p className="text-gray-600">
                Lisbon, Bali, or your home office. Fractional work is location-independent by design.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Own Your Time</h3>
              <p className="text-gray-600">
                2-3 days per client means time for family, travel, hobbies, or building your own thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fractional */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              The Benefits
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900">
              Why Go Fractional?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Higher Earnings</h3>
              <p className="text-gray-600 mb-4">
                Work with 2-4 clients at £700-1,500/day. Most fractional executives earn £150-300k annually - often more than full-time equivalents.
              </p>
              <Link href="/calculators/rate-finder" className="text-blue-600 font-semibold hover:underline">
                Calculate your potential →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8">
              <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work From Anywhere</h3>
              <p className="text-gray-600 mb-4">
                Lisbon, Bali, or your home office. Fractional work is location-independent. Deliver results from wherever suits your lifestyle.
              </p>
              <Link href="/destinations" className="text-teal-600 font-semibold hover:underline">
                Explore destinations →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Variety</h3>
              <p className="text-gray-600 mb-4">
                Work across multiple industries and challenges. Every client brings new problems to solve. Stay sharp, keep learning, avoid burnout.
              </p>
              <Link href="/fractional-jobs-uk" className="text-amber-600 font-semibold hover:underline">
                Browse opportunities →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional Ownership Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
                Beyond Work
              </span>
              <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fractional Ownership
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Earning £150-300k as a fractional executive opens doors. Why buy one home when you could own a share of properties across the globe?
              </p>
              <p className="text-gray-600 mb-8">
                Fractional ownership lets you invest in luxury properties, holiday homes, and prime real estate for a fraction of the cost. Perfect for executives who want flexibility in their lifestyle investments too.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/fractional-ownership-guide"
                  className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Learn About Fractional Ownership
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/fractional-ownership-for-executives"
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
                >
                  For Executives
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                    alt="Luxury villa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80"
                    alt="Modern property"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Own a Share</div>
                    <div className="text-xs text-gray-500">From 1/8th to 1/4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      {featuredDestinations.length > 0 && (
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
                  Work From Anywhere
                </span>
                <h2 className="font-editorial text-4xl font-bold text-gray-900">
                  Popular Destinations
                </h2>
                <p className="text-gray-600 mt-2">Where fractional executives are living their best lives</p>
              </div>
              <Link href="/destinations" className="text-gray-900 font-semibold hover:underline hidden md:block">
                Explore All →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link href="/destinations" className="text-gray-900 font-semibold hover:underline">
                Explore All Destinations →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Jobs */}
      {featuredJobs.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
                  Fresh This Week
                </span>
                <h2 className="font-editorial text-4xl font-bold text-gray-900">
                  Latest Fractional Roles
                </h2>
              </div>
              <Link href="/fractional-jobs-uk" className="text-gray-900 font-semibold hover:underline hidden md:block">
                View All {stats.jobs}+ Jobs →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featuredJobs as any[]).map((job) => {
                const postedDate = job.posted_date ? new Date(job.posted_date) : null;
                const postedDaysAgo = postedDate
                  ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                  : undefined;
                return (
                  <Link key={job.id} href={`/fractional-job/${job.slug}`}>
                    <JobCard
                      title={job.title}
                      company={job.company_name}
                      location={job.location || 'Remote'}
                      isRemote={job.is_remote || job.workplace_type === 'Remote'}
                      compensation={job.compensation}
                      roleCategory={job.role_category}
                      skills={job.skills_required || []}
                      postedDaysAgo={postedDaysAgo}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/fractional-jobs-uk"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Browse All Jobs
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Hire Fractional Talent - For Companies */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              For Companies
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hire Fractional Executives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get senior leadership without the full-time cost. Our fractional executives
              bring 15-20+ years of experience at 40-60% of the price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💰', title: 'Fractional CFO', desc: 'Financial strategy & fundraising', link: '/fractional-cfo-services' },
              { icon: '📢', title: 'Fractional CMO', desc: 'Marketing & growth leadership', link: '/fractional-cmo-services' },
              { icon: '💻', title: 'Fractional CTO', desc: 'Technical leadership & architecture', link: '/fractional-cto-services' },
              { icon: '⚙️', title: 'Fractional COO', desc: 'Operations & scaling', link: '/fractional-coo-services' },
            ].map((role) => (
              <Link key={role.title} href={role.link} className="group">
                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                  <span className="text-4xl mb-4 block">{role.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{role.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Find a Fractional Executive
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Join the Community */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Go Fractional?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Create your profile and join the fractional executive community.
            It only takes a few minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/profile/edit"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Create Your Profile
            </Link>
            <Link
              href="/fractional-jobs-uk"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Browse Jobs First
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links - SEO */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Fractional Jobs</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/fractional-cfo-jobs-uk" className="hover:text-gray-900">Fractional CFO Jobs</Link></li>
                <li><Link href="/fractional-cmo-jobs-uk" className="hover:text-gray-900">Fractional CMO Jobs</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="hover:text-gray-900">Fractional CTO Jobs</Link></li>
                <li><Link href="/fractional-coo-jobs-uk" className="hover:text-gray-900">Fractional COO Jobs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/fractional-cfo-services" className="hover:text-gray-900">Hire a Fractional CFO</Link></li>
                <li><Link href="/fractional-cmo-services" className="hover:text-gray-900">Hire a Fractional CMO</Link></li>
                <li><Link href="/fractional-cto-services" className="hover:text-gray-900">Hire a Fractional CTO</Link></li>
                <li><Link href="/fractional-coo-services" className="hover:text-gray-900">Hire a Fractional COO</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/people" className="hover:text-gray-900">Meet Executives</Link></li>
                <li><Link href="/destinations" className="hover:text-gray-900">Work From Anywhere</Link></li>
                <li><Link href="/profile/edit" className="hover:text-gray-900">Create Profile</Link></li>
                <li><Link href="/about" className="hover:text-gray-900">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Guides</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/what-is-fractional-work" className="hover:text-gray-900">What is Fractional Work?</Link></li>
                <li><Link href="/how-it-works" className="hover:text-gray-900">How It Works</Link></li>
                <li><Link href="/fractional-ownership-guide" className="hover:text-gray-900">Fractional Ownership</Link></li>
                <li><Link href="/fractional-jobs-articles" className="hover:text-gray-900">All Guides</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
