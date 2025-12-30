import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { neon } from '@neondatabase/serverless'
import { ExecutiveCard } from '@/components/ExecutiveCard'
import { CandidateCard } from '@/components/CandidateCard'
import type { FeaturedExecutive } from '@/lib/types'
import type { CandidateProfile } from '@/lib/candidate-profiles'

export const metadata: Metadata = {
  title: 'Fractional Executives UK',
  description: 'Meet fractional executives UK. Browse profiles, discover stories, connect with leaders.',
}

// Aspirational images of professionals
const EXECUTIVE_IMAGES = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop', // Professional woman
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop', // Professional man
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop', // Tech woman
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', // Creative man
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop', // Marketing woman
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', // Executive man
]

// Example fractional leaders for inspiration
const FEATURED_ROLES = [
  {
    role: 'Fractional CFO',
    tagline: 'Financial Strategy & Growth',
    image: EXECUTIVE_IMAGES[0],
    specialties: ['Fundraising', 'FP&A', 'M&A'],
    link: '/fractional-cfo-services',
  },
  {
    role: 'Fractional CTO',
    tagline: 'Technical Leadership',
    image: EXECUTIVE_IMAGES[1],
    specialties: ['Architecture', 'Team Building', 'Product'],
    link: '/fractional-cto-services',
  },
  {
    role: 'Fractional CMO',
    tagline: 'Marketing & Growth',
    image: EXECUTIVE_IMAGES[4],
    specialties: ['Brand', 'Digital', 'GTM'],
    link: '/fractional-cmo-services',
  },
  {
    role: 'Fractional COO',
    tagline: 'Operations & Scaling',
    image: EXECUTIVE_IMAGES[3],
    specialties: ['Process', 'Scale', 'Efficiency'],
    link: '/fractional-coo-services',
  },
]

async function getFeaturedExecutives(): Promise<FeaturedExecutive[]> {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const executives = await sql`
      SELECT *
      FROM featured_executives
      WHERE status IN ('published', 'featured')
      ORDER BY
        CASE WHEN status = 'featured' THEN 0 ELSE 1 END,
        featured_order ASC NULLS LAST,
        published_at DESC
    `
    return executives as FeaturedExecutive[]
  } catch {
    return []
  }
}

async function getPublicCandidates(): Promise<CandidateProfile[]> {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const candidates = await sql`
      SELECT *
      FROM candidate_profiles
      WHERE is_public = true AND profile_status = 'published'
      ORDER BY is_featured DESC, published_at DESC
      LIMIT 50
    `
    return candidates as CandidateProfile[]
  } catch {
    return []
  }
}

export default async function PeoplePage() {
  const [executives, candidates] = await Promise.all([
    getFeaturedExecutives(),
    getPublicCandidates()
  ])

  const totalProfiles = executives.length + candidates.length

  return (
    <main className="min-h-screen bg-white">
      {/* Hero with Aspirational Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image - Someone working from home in sunlight */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Fractional executives background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 via-blue-500/60 to-purple-500/40" />
        </div>

        <div className="relative z-10 w-full py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                {totalProfiles > 0 ? `${totalProfiles}+ Executives` : 'Our Community'}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Meet Fractional Leaders
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Connect with fractional executives who have traded the traditional career path for
                freedom, flexibility, and a life designed on their terms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#community"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Browse Profiles
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <Link
                  href="/profile/edit"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
                >
                  Create Your Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Role Types with Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
              Expertise Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fractional Leaders by Function
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced executives available for part-time leadership across every business function
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_ROLES.map((role, i) => (
              <Link key={i} href={role.link} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={role.image}
                      alt={role.role}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-white text-xl mb-1">{role.role}</h3>
                      <p className="text-white/80 text-sm">{role.tagline}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {role.specialties.map((s) => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Images Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2 block">
              The Fractional Lifestyle
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work From Anywhere
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fractional executives enjoy the freedom to work from anywhere while delivering strategic value
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80"
                alt="Working from Lisbon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="font-bold text-lg">Lisbon, Portugal</div>
                  <div className="text-white/80 text-sm">Sunshine & great timezone</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                alt="Home office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="font-bold text-lg">Your Home Office</div>
                  <div className="text-white/80 text-sm">Skip the commute</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="Beach work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="font-bold text-lg">Bali & Beyond</div>
                  <div className="text-white/80 text-sm">Digital nomad friendly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      {executives.length > 0 && (
        <section id="community" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
                Featured Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Real Executive Journeys</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {executives.map((executive) => (
                <ExecutiveCard key={executive.id} executive={executive} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Candidate Profiles */}
      {candidates.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2 block">
                Community Members
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Fractional Executives</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state - Shown when no profiles */}
      {executives.length === 0 && candidates.length === 0 && (
        <section id="community" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Be Among the First
              </h2>
              <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
                Create your profile and join our growing community of fractional executives.
              </p>
              <Link href="/profile/edit" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all">
                Create Your Profile
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2 block">
                Why Join
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Build Your Fractional Brand
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your profile is your digital presence. Showcase your expertise, share your story, and connect with companies looking for fractional talent.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🎯', title: 'Attract Opportunities', desc: 'Get discovered by companies seeking your expertise' },
                  { icon: '🌍', title: 'Global Reach', desc: 'Connect with clients worldwide from anywhere' },
                  { icon: '🤝', title: 'Build Your Network', desc: 'Join a community of like-minded executives' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional meeting"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Create your profile and start connecting with companies looking for fractional talent.
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
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
