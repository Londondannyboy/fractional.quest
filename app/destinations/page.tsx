import { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'
import { DestinationCard } from '@/components/DestinationCard'
import type { Destination } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Best Destinations for Fractional Executives | Work From Anywhere',
  description: 'Discover the best destinations for fractional executives and digital nomads. Find your ideal base with great timezone overlap, coworking spaces, and quality of life.',
}

async function getDestinations(): Promise<Destination[]> {
  const sql = neon(process.env.DATABASE_URL!)
  const destinations = await sql`
    SELECT
      id, name, country, slug, tagline, description,
      best_months, avg_temp_jan, avg_temp_jul,
      timezone, utc_offset_hours, uk_overlap_hours,
      cost_of_living, monthly_cost_estimate,
      avg_internet_speed_mbps, coworking_spaces_count,
      nomad_score, image_url, is_active
    FROM destinations
    WHERE is_active = true
    ORDER BY nomad_score DESC
  `
  return destinations as Destination[]
}

export default async function DestinationsPage() {
  const destinations = await getDestinations()

  // Group by UK overlap for easier browsing
  const sameTimezone = destinations.filter(d => d.uk_overlap_hours >= 7)
  const goodOverlap = destinations.filter(d => d.uk_overlap_hours >= 4 && d.uk_overlap_hours < 7)
  const adventurous = destinations.filter(d => d.uk_overlap_hours < 4)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
        <div className="container-content">
          <div className="max-w-3xl">
            <span className="section-label text-teal-600 mb-4 block">
              Work From Anywhere
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Next Base Awaits
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fractional work means freedom. Discover destinations loved by executives
              who've traded the commute for adventure, sunshine, and a better quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Same Timezone Section */}
      {sameTimezone.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container-content">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Same Timezone as UK
              </h2>
              <p className="text-gray-600">
                Perfect alignment with UK clients. No early mornings or late nights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sameTimezone.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Good Overlap Section */}
      {goodOverlap.length > 0 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container-content">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Good UK Overlap (4-6 hours)
              </h2>
              <p className="text-gray-600">
                Start early or finish late, but plenty of overlap for meetings and collaboration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goodOverlap.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Adventurous Section */}
      {adventurous.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container-content">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                For the Adventurous
              </h2>
              <p className="text-gray-600">
                Less overlap, but worth it for those who can make async work... work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adventurous.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-teal-50">
        <div className="container-content text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to make the leap?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse remote-friendly fractional roles and start planning your escape.
          </p>
          <a
            href="/fractional-jobs?remote=remote"
            className="btn-gradient inline-flex items-center gap-2"
          >
            View Remote Jobs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
