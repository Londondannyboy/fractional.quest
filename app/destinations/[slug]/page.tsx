import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { neon } from '@neondatabase/serverless'
import type { Destination } from '@/lib/types'

interface Props {
  params: Promise<{ slug: string }>
}

async function getDestination(slug: string): Promise<Destination | null> {
  const sql = neon(process.env.DATABASE_URL!)
  const destinations = await sql`
    SELECT * FROM destinations WHERE slug = ${slug} AND is_active = true
  `
  return destinations.length > 0 ? (destinations[0] as Destination) : null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const destination = await getDestination(slug)

  if (!destination) {
    return { title: 'Destination Not Found' }
  }

  return {
    title: `Work From ${destination.name}, ${destination.country} | Fractional Executive Guide`,
    description: destination.tagline,
  }
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params
  const destination = await getDestination(slug)

  if (!destination) {
    notFound()
  }

  const bestMonthsDisplay = destination.best_months
    ?.map(m => MONTH_NAMES[m - 1])
    .join(', ')

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-24">
        <div className="container-content">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/destinations" className="hover:text-gray-900">Destinations</Link></li>
              <li>/</li>
              <li className="text-gray-900">{destination.name}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="section-label text-teal-600 mb-4 block">
              {destination.country}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {destination.name}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {destination.tagline}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-teal-600">{destination.uk_overlap_hours}h</div>
                <div className="text-xs text-gray-500">UK Overlap</div>
              </div>
              {destination.nomad_score && (
                <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-amber-600">{destination.nomad_score}</div>
                  <div className="text-xs text-gray-500">Nomad Score</div>
                </div>
              )}
              {destination.monthly_cost_estimate && (
                <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">£{destination.monthly_cost_estimate.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Monthly Cost</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main column */}
            <div className="md:col-span-2">
              {destination.description && (
                <div className="prose prose-lg max-w-none mb-12">
                  <h2>Why Fractional Executives Love {destination.name}</h2>
                  <p>{destination.description}</p>
                </div>
              )}

              {/* Best time to visit */}
              {bestMonthsDisplay && (
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Best Time to Visit</h3>
                  <p className="text-gray-600">
                    The ideal months for {destination.name} are <strong>{bestMonthsDisplay}</strong>.
                    {destination.avg_temp_jan && destination.avg_temp_jul && (
                      <> Average temperatures range from {destination.avg_temp_jan}°C in January to {destination.avg_temp_jul}°C in July.</>
                    )}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="p-6 bg-teal-50 rounded-xl border border-teal-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Ready to work from {destination.name}?
                </h3>
                <p className="text-gray-600 mb-4">
                  Browse remote-friendly fractional roles that you could do from here.
                </p>
                <Link
                  href="/fractional-jobs?remote=remote"
                  className="btn-gradient inline-flex items-center gap-2"
                >
                  View Remote Jobs
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick facts card */}
              <div className="card-premium p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Facts</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wide">Timezone</dt>
                    <dd className="text-gray-900">{destination.timezone}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wide">UK Overlap</dt>
                    <dd className="text-gray-900">{destination.uk_overlap_hours} working hours</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-gray-500 uppercase tracking-wide">Cost of Living</dt>
                    <dd className="text-gray-900 capitalize">{destination.cost_of_living}</dd>
                  </div>
                  {destination.avg_internet_speed_mbps && (
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wide">Internet Speed</dt>
                      <dd className="text-gray-900">{destination.avg_internet_speed_mbps} Mbps avg</dd>
                    </div>
                  )}
                  {destination.coworking_spaces_count && (
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wide">Coworking Spaces</dt>
                      <dd className="text-gray-900">{destination.coworking_spaces_count}+ spaces</dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Back link */}
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                All Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
