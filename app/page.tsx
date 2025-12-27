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
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section - Clean, White, Aspirational */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <span className="inline-block py-1.5 px-3 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
                The Fractional Revolution
              </span>
              <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                Design Your Life.<br />
                <span className="text-gray-500">Not Your Commute.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
                Join thousands of executives who've traded the 9-5 grind for freedom. Work 2-3 days a week. Earn £150-300k. Live anywhere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/fractional-jobs-uk"
                  className="inline-flex justify-center items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Browse {stats.jobs}+ Roles
                </Link>
                <Link
                  href="/profile/edit"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 border border-gray-200 font-medium rounded-lg hover:bg-gray-50 transition-all hover:border-gray-300"
                >
                  Create Profile
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-gray-900 block">500+ Executives</span>
                  <span className="text-gray-500">Joined this month</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" 
                   alt="Modern executive lifestyle"
                   className="w-full h-auto object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Property Card */}
              <div className="absolute -bottom-12 -left-12 w-72">
                 <PropertyOverlay variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Ticker */}
      <div className="border-y border-gray-100 bg-gray-50/50 py-6 overflow-hidden">
        <div className="container-content flex justify-center">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-60">
             {['CFO', 'CTO', 'CMO', 'COO', 'CPO', 'CHRO', 'CRO'].map((role) => (
              <span key={role} className="text-sm font-bold tracking-widest text-gray-900 uppercase">Fractional {role}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section - Clean & Minimal */}
      <section className="py-16 border-b border-gray-100">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 border-r border-gray-100 last:border-0">
              <div className="font-editorial text-4xl text-gray-900 mb-2">{stats.jobs}+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Live Opportunities</div>
            </div>
            <div className="text-center p-6 border-r border-gray-100 last:border-0">
              <div className="font-editorial text-4xl text-gray-900 mb-2">£1.5k</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Avg Day Rate</div>
            </div>
            <div className="text-center p-6 border-r border-gray-100 last:border-0">
              <div className="font-editorial text-4xl text-gray-900 mb-2">2-3</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Days Per Week</div>
            </div>
            <div className="text-center p-6">
              <div className="font-editorial text-4xl text-gray-900 mb-2">100%</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Flexibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* London Featured Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-content">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="font-editorial text-2xl md:text-3xl font-bold mb-2">Fractional Jobs London</h2>
              <p className="text-white/80">60% of UK opportunities • £900-£1,500 day rates • City & Canary Wharf</p>
            </div>
            <Link
              href="/fractional-jobs-london"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Browse London Jobs →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Jobs - Card Grid */}
      {featuredJobs.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-content">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">Latest Roles</h2>
                <p className="text-gray-600 max-w-xl">Curated senior leadership opportunities from top companies.</p>
              </div>
              <Link href="/fractional-jobs-uk" className="hidden md:inline-flex items-center font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                View All Opportunities
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featuredJobs as any[]).map((job) => {
                const postedDate = job.posted_date ? new Date(job.posted_date) : null;
                const postedDaysAgo = postedDate
                  ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                  : undefined;
                return (
                  <Link key={job.id} href={`/fractional-job/${job.slug}`} className="block h-full">
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

            <div className="mt-12 text-center md:hidden">
               <Link href="/fractional-jobs-uk" className="btn-secondary inline-block">View All Jobs</Link>
            </div>
          </div>
        </section>
      )}

      {/* Value Proposition - Clean Columns */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center mb-20">
             <h2 className="font-editorial text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Go Fractional?</h2>
             <p className="text-xl text-gray-600 leading-relaxed">
               The traditional career ladder is broken. Smart executives are building portfolios, diversifying income, and reclaiming their time.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Financial Freedom",
                desc: "Earn £150-300k+ annually working 2-4 days a week. Diversify your income streams and never rely on a single employer again.",
                icon: (
                  <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "True Autonomy",
                desc: "Choose who you work with and when. Take summers off. Work from Lisbon or London. You are the business, you make the rules.",
                icon: (
                  <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Accelerated Growth",
                desc: "Solve high-stakes problems across different industries. The variety keeps you sharp, engaged, and constantly learning.",
                icon: (
                  <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-editorial text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Executives - "Real Stories" */}
      {featuredExecutives.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-content">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">Meet the Community</h2>
                  <p className="text-gray-600">See who's already living the fractional life.</p>
               </div>
               <Link href="/people" className="hidden md:inline-flex items-center font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                  View All Members
               </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredExecutives.map((exec) => (
                <ExecutiveCard key={exec.id} executive={exec} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Featured Destinations */}
      {featuredDestinations.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-content">
             <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="font-editorial text-4xl font-bold text-gray-900 mb-4">Work From Anywhere</h2>
                  <p className="text-gray-600">Top rated destinations for fractional executives.</p>
                </div>
                <Link href="/destinations" className="hidden md:inline-flex items-center font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                  Explore Locations
                </Link>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA - Minimal */}
      <section className="py-32 bg-gray-900 text-white text-center">
        <div className="container-content max-w-4xl">
           <h2 className="font-editorial text-5xl md:text-6xl font-bold mb-8">Ready to make the switch?</h2>
           <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
             Your portfolio career starts here. Create your profile today and get discovered by companies looking for leadership.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
               href="/profile/edit" 
               className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
             >
               Start Your Profile
             </Link>
             <Link 
               href="/fractional-jobs-uk" 
               className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
             >
               Browse Jobs
             </Link>
           </div>
        </div>
      </section>

      {/* Footer Links - SEO Optimized */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Jobs</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/fractional-jobs" className="hover:text-gray-900 hover:underline font-semibold">All Fractional Jobs</Link></li>
                <li><Link href="/fractional-jobs-uk" className="hover:text-gray-900 hover:underline font-medium">UK Fractional Jobs</Link></li>
                <li><Link href="/fractional-jobs-london" className="hover:text-gray-900 hover:underline">London Jobs</Link></li>
                <li><Link href="/fractional-cfo-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional CFO Jobs</Link></li>
                <li><Link href="/fractional-cmo-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional CMO Jobs</Link></li>
                <li><Link href="/fractional-cto-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional CTO Jobs</Link></li>
                <li><Link href="/fractional-coo-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional COO Jobs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Services</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/fractional-cfo-services" className="hover:text-gray-900 hover:underline">Hire a Fractional CFO</Link></li>
                <li><Link href="/fractional-cmo-services" className="hover:text-gray-900 hover:underline">Hire a Fractional CMO</Link></li>
                <li><Link href="/fractional-cto-services" className="hover:text-gray-900 hover:underline">Hire a Fractional CTO</Link></li>
                <li><Link href="/fractional-coo-services" className="hover:text-gray-900 hover:underline">Hire a Fractional COO</Link></li>
                <li><Link href="/fractional-cpo-services" className="hover:text-gray-900 hover:underline">Hire a Fractional CPO</Link></li>
                <li><Link href="/fractional-cro-services" className="hover:text-gray-900 hover:underline">Hire a Fractional CRO</Link></li>
                <li><Link href="/fractional-compliance-services" className="hover:text-gray-900 hover:underline">Compliance Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">More Roles</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/fractional-cpo-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional CPO Jobs</Link></li>
                <li><Link href="/fractional-cro-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional CRO Jobs</Link></li>
                <li><Link href="/fractional-chro-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional CHRO Jobs</Link></li>
                <li><Link href="/fractional-ciso-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional CISO Jobs</Link></li>
                <li><Link href="/fractional-ceo-jobs-uk" className="hover:text-gray-900 hover:underline">Fractional CEO Jobs</Link></li>
                <li><Link href="/part-time-cfo-jobs-uk" className="hover:text-gray-900 hover:underline">Part-Time CFO Jobs</Link></li>
                <li><Link href="/remote-fractional-jobs" className="hover:text-gray-900 hover:underline">Remote Fractional Jobs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-6 uppercase text-sm tracking-wider">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/what-is-fractional-work" className="hover:text-gray-900 hover:underline">What is Fractional Work?</Link></li>
                <li><Link href="/how-it-works" className="hover:text-gray-900 hover:underline">How It Works</Link></li>
                <li><Link href="/fractional-jobs-articles" className="hover:text-gray-900 hover:underline">Guides & Articles</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}