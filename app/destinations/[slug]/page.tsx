import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { neon } from '@neondatabase/serverless'
import type { Destination } from '@/lib/types'

interface Props {
  params: Promise<{ slug: string }>
}

// Map destination names/countries to Unsplash image URLs
const DESTINATION_IMAGES: Record<string, string> = {
  'lisbon': 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80',
  'porto': 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80',
  'barcelona': 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80',
  'madrid': 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80',
  'berlin': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80',
  'amsterdam': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=80',
  'paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
  'london': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80',
  'dublin': 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1920&q=80',
  'bali': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80',
  'bangkok': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1920&q=80',
  'chiang mai': 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80',
  'dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
  'singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80',
  'cape town': 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80',
  'medellin': 'https://images.unsplash.com/photo-1599413987323-b2b8c0e99d09?w=1920&q=80',
  'mexico city': 'https://images.unsplash.com/photo-1518659526054-190340b32735?w=1920&q=80',
  'tokyo': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
  'sydney': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80',
  'split': 'https://images.unsplash.com/photo-1555990538-a7d0c5b46f9e?w=1920&q=80',
  'athens': 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80',
  'florence': 'https://images.unsplash.com/photo-1543429258-c5ca3e0c22a2?w=1920&q=80',
  // Countries as fallback
  'portugal': 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80',
  'spain': 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80',
  'germany': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80',
  'netherlands': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=80',
  'france': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
  'thailand': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1920&q=80',
  'indonesia': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80',
  'japan': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
  'australia': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&q=80',
  'greece': 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80',
  'italy': 'https://images.unsplash.com/photo-1543429258-c5ca3e0c22a2?w=1920&q=80',
  'croatia': 'https://images.unsplash.com/photo-1555990538-a7d0c5b46f9e?w=1920&q=80',
}

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80'

function getDestinationImage(destination: Destination): string {
  const nameLower = destination.name?.toLowerCase() || ''
  if (DESTINATION_IMAGES[nameLower]) return DESTINATION_IMAGES[nameLower]

  const countryLower = destination.country?.toLowerCase() || ''
  if (DESTINATION_IMAGES[countryLower]) return DESTINATION_IMAGES[countryLower]

  if (destination.image_url) return destination.image_url

  return DEFAULT_IMAGE
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
    title: `Work From ${destination.name}, ${destination.country} | Digital Nomad Guide for Fractional Executives`,
    description: `${destination.name} guide for fractional executives and remote workers. ${destination.uk_overlap_hours}h UK timezone overlap, ${destination.cost_of_living} cost of living. ${destination.tagline}`,
  }
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params
  const destination = await getDestination(slug)

  if (!destination) {
    notFound()
  }

  const imageUrl = getDestinationImage(destination)
  const bestMonthsDisplay = destination.best_months?.map(m => MONTH_NAMES[m - 1]).join(', ')

  // Breadcrumb schema for SEO
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://fractional.quest'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Destinations',
        'item': 'https://fractional.quest/destinations'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': destination.name,
        'item': `https://fractional.quest/destinations/${slug}`
      }
    ]
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero with Background Image */}
      <section className="relative min-h-[60vh] flex items-end">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full pb-12 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
                <li>/</li>
                <li className="text-white">{destination.name}</li>
              </ol>
            </nav>

            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              {destination.country}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              {destination.tagline}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 bg-white/10 backdrop-blur rounded-xl">
                <div className="text-2xl font-bold text-white">{destination.uk_overlap_hours}h</div>
                <div className="text-xs text-white/70">UK Overlap</div>
              </div>
              {destination.nomad_score && (
                <div className="px-5 py-3 bg-white/10 backdrop-blur rounded-xl">
                  <div className="text-2xl font-bold text-amber-400">{destination.nomad_score}/5</div>
                  <div className="text-xs text-white/70">Nomad Score</div>
                </div>
              )}
              {destination.monthly_cost_estimate && (
                <div className="px-5 py-3 bg-white/10 backdrop-blur rounded-xl">
                  <div className="text-2xl font-bold text-white">£{destination.monthly_cost_estimate.toLocaleString()}</div>
                  <div className="text-xs text-white/70">Monthly Cost</div>
                </div>
              )}
              <div className="px-5 py-3 bg-white/10 backdrop-blur rounded-xl">
                <div className="text-2xl font-bold text-white capitalize">{destination.cost_of_living}</div>
                <div className="text-xs text-white/70">Cost of Living</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main column - Article Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2>Why Fractional Executives Choose {destination.name}</h2>

                {destination.description ? (
                  <p>{destination.description}</p>
                ) : (
                  <p>
                    {destination.name} has become an increasingly popular destination for fractional executives
                    and remote workers looking to combine productive work with an exceptional quality of life.
                    With {destination.uk_overlap_hours} hours of overlap with UK business hours, you can maintain
                    strong client relationships while enjoying everything this {destination.cost_of_living}-cost
                    destination has to offer.
                  </p>
                )}

                <h3>Working Remotely from {destination.name}</h3>
                <p>
                  For fractional executives based in the UK, {destination.name} offers an ideal work-life balance.
                  The {destination.uk_overlap_hours}-hour overlap with London means you can schedule client calls
                  and meetings during the {destination.timezone} timezone while still having flexibility in your schedule.
                </p>

                {destination.avg_internet_speed_mbps && (
                  <p>
                    With average internet speeds of {destination.avg_internet_speed_mbps} Mbps, {destination.name} provides
                    reliable connectivity for video calls, file sharing, and all the demands of modern remote work.
                    {destination.coworking_spaces_count && (
                      <> The city boasts {destination.coworking_spaces_count}+ coworking spaces, giving you plenty of options
                      for professional meeting spaces and networking opportunities.</>
                    )}
                  </p>
                )}

                <h3>Cost of Living for Fractional Executives</h3>
                <p>
                  {destination.name} is known for its {destination.cost_of_living} cost of living.
                  {destination.monthly_cost_estimate && (
                    <> Expect to budget approximately £{destination.monthly_cost_estimate.toLocaleString()} per month
                    for a comfortable lifestyle including accommodation, food, transport, and leisure activities.</>
                  )}
                </p>
                <p>
                  For fractional executives earning UK day rates (£750-1,500/day), this means your earnings
                  stretch significantly further than they would in London, allowing you to build wealth while
                  enjoying a higher quality of life.
                </p>

                {bestMonthsDisplay && (
                  <>
                    <h3>Best Time to Visit</h3>
                    <p>
                      The ideal months for {destination.name} are <strong>{bestMonthsDisplay}</strong>.
                      {destination.avg_temp_jan && destination.avg_temp_jul && (
                        <> Average temperatures range from {destination.avg_temp_jan}°C in winter
                        to {destination.avg_temp_jul}°C in summer, providing comfortable conditions
                        year-round for work and exploration.</>
                      )}
                    </p>
                  </>
                )}

                <h3>The Fractional Lifestyle in {destination.name}</h3>
                <p>
                  {destination.name} attracts a growing community of remote workers, digital nomads, and
                  fractional executives. You'll find networking events, co-living spaces, and a supportive
                  ecosystem for location-independent professionals.
                </p>
                <p>
                  Working fractionally means you're typically with clients 2-3 days per week, leaving plenty
                  of time to explore {destination.country}'s culture, cuisine, and attractions. This work-life
                  integration is exactly what draws experienced executives to the fractional model.
                </p>
              </article>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gray-900 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-3">
                  Ready to work from {destination.name}?
                </h3>
                <p className="text-gray-300 mb-6">
                  Browse remote-friendly fractional roles that let you work from anywhere.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/fractional-jobs-uk?remote=true"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    View Remote Jobs
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/profile/edit"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Create Your Profile
                  </Link>
                </div>
              </div>

              {/* Role-specific job links for SEO and internal linking */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4">Popular Remote Fractional Roles</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <Link href="/fractional-cfo-jobs-uk" className="text-sm text-teal-700 hover:text-teal-900 font-medium">
                    Fractional CFO Jobs →
                  </Link>
                  <Link href="/fractional-cto-jobs-uk" className="text-sm text-teal-700 hover:text-teal-900 font-medium">
                    Fractional CTO Jobs →
                  </Link>
                  <Link href="/fractional-cmo-jobs-uk" className="text-sm text-teal-700 hover:text-teal-900 font-medium">
                    Fractional CMO Jobs →
                  </Link>
                  <Link href="/fractional-coo-jobs-uk" className="text-sm text-teal-700 hover:text-teal-900 font-medium">
                    Fractional COO Jobs →
                  </Link>
                  <Link href="/fractional-chro-jobs-uk" className="text-sm text-teal-700 hover:text-teal-900 font-medium">
                    Fractional CHRO Jobs →
                  </Link>
                  <Link href="/fractional-jobs-uk" className="text-sm text-gray-600 hover:text-gray-900 font-medium">
                    All Fractional Jobs →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick facts card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">Quick Facts</h3>
                <dl className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wide">Timezone</dt>
                      <dd className="text-gray-900 font-medium">{destination.timezone}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 uppercase tracking-wide">UK Overlap</dt>
                      <dd className="text-gray-900 font-medium">{destination.uk_overlap_hours} working hours</dd>
                    </div>
                  </div>
                  {destination.avg_internet_speed_mbps && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                      </div>
                      <div>
                        <dt className="text-xs text-gray-500 uppercase tracking-wide">Internet Speed</dt>
                        <dd className="text-gray-900 font-medium">{destination.avg_internet_speed_mbps} Mbps avg</dd>
                      </div>
                    </div>
                  )}
                  {destination.coworking_spaces_count && (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <dt className="text-xs text-gray-500 uppercase tracking-wide">Coworking Spaces</dt>
                        <dd className="text-gray-900 font-medium">{destination.coworking_spaces_count}+ spaces</dd>
                      </div>
                    </div>
                  )}
                </dl>
              </div>

              {/* Other destinations */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Explore More</h3>
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  View All Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
