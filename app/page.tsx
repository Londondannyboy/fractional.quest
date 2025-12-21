import Link from "next/link";
import { Metadata } from "next";
import { neon } from "@neondatabase/serverless";
import { JobCard } from "@/components/JobCard";
import { DestinationCard } from "@/components/DestinationCard";
import { ExecutiveCard } from "@/components/ExecutiveCard";
import type { Destination, FeaturedExecutive } from "@/lib/types";

export const metadata: Metadata = {
  title: "Fractional Quest | Design Your Life as a Fractional Executive",
  description: "Join the fractional revolution. Work 2-3 days a week, earn £150-300k, and live anywhere. Browse fractional CFO, CMO, CTO roles or create your profile.",
  keywords: "fractional executive, fractional cfo, fractional cmo, fractional cto, portfolio career, fractional jobs uk",
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
      {/* Hero with Background Image */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

              {/* Mini testimonial */}
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <p className="text-white/70 text-sm">Join 500+ fractional executives in the UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider font-medium">
            Trusted by executives from leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
            {['Stripe', 'Monzo', 'Revolut', 'Wise', 'GoCardless', 'Checkout.com'].map((company) => (
              <span key={company} className="text-xl font-bold text-gray-400">{company}</span>
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
              Meet Our Executives
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">
              Fractional Leaders Across Every Function
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From CFOs to CTOs, our community includes experienced executives ready to make an impact
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Sarah Mitchell', role: 'Fractional CFO', company: 'Ex-Stripe, Monzo', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop', color: 'amber' },
              { name: 'James Chen', role: 'Fractional CTO', company: 'Ex-Google, Deliveroo', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', color: 'blue' },
              { name: 'Emma Williams', role: 'Fractional CMO', company: 'Ex-Meta, Wise', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop', color: 'teal' },
              { name: 'Marcus Thompson', role: 'Fractional COO', company: 'Ex-McKinsey, Revolut', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', color: 'purple' },
            ].map((exec, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`inline-block bg-${exec.color}-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                      {exec.role}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{exec.name}</h3>
                <p className="text-gray-500 text-sm">{exec.company}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/people"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              View All Executives
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-3xl font-bold">£150-300k</div>
                  <div className="text-white/80 text-sm">Annual earnings potential</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531746790095-e6a4c9a4b6f3?w=800&q=80"
                alt="Working remotely in Lisbon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-3xl font-bold">Work Anywhere</div>
                  <div className="text-white/80 text-sm">Lisbon, Bali, your home</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                alt="Work life balance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-3xl font-bold">2-3 Days</div>
                  <div className="text-white/80 text-sm">Per client, per week</div>
                </div>
              </div>
            </div>
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

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
              Success Stories
            </span>
            <h2 className="font-editorial text-4xl font-bold text-gray-900">
              What Executives Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "Going fractional was the best career decision I've made. I work with three amazing startups, earn more than my old full-time role, and finally have time for my family."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  SC
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-500">Fractional CFO, ex-Stripe</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "The variety of work keeps me sharp. Every client brings different challenges. I'm learning more now than I did in 10 years at a single company."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold">
                  MT
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Marcus Thompson</div>
                  <div className="text-sm text-gray-500">Fractional CTO, 4 clients</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "I split my time between London and Lisbon now. My clients don't mind where I work from as long as I deliver results. That's the fractional promise."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold">
                  AP
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Aisha Patel</div>
                  <div className="text-sm text-gray-500">Fractional CMO, remote from Portugal</div>
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
                      location={job.location || 'UK'}
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
