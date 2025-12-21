'use client'

import Link from 'next/link'
import type { Destination } from '@/lib/types'

interface DestinationCardProps {
  destination: Destination
  className?: string
}

const COST_LABELS = {
  low: { label: 'Budget-friendly', color: 'text-emerald-600 bg-emerald-50' },
  medium: { label: 'Moderate', color: 'text-amber-600 bg-amber-50' },
  high: { label: 'Premium', color: 'text-rose-600 bg-rose-50' },
}

// Map destination names/countries to Unsplash image URLs
const DESTINATION_IMAGES: Record<string, string> = {
  // Cities
  'lisbon': 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
  'porto': 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80',
  'barcelona': 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
  'madrid': 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
  'berlin': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
  'amsterdam': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
  'paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
  'london': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
  'dublin': 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80',
  'bali': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  'bangkok': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80',
  'chiang mai': 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80',
  'dubai': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  'singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
  'cape town': 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
  'medellin': 'https://images.unsplash.com/photo-1599413987323-b2b8c0e99d09?w=800&q=80',
  'mexico city': 'https://images.unsplash.com/photo-1518659526054-190340b32735?w=800&q=80',
  'austin': 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&q=80',
  'miami': 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&q=80',
  'new york': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
  'tokyo': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
  'sydney': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
  'vancouver': 'https://images.unsplash.com/photo-1559511260-66a68e7e60e5?w=800&q=80',
  'split': 'https://images.unsplash.com/photo-1555990538-a7d0c5b46f9e?w=800&q=80',
  'athens': 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
  'florence': 'https://images.unsplash.com/photo-1543429258-c5ca3e0c22a2?w=800&q=80',
  // Countries as fallback
  'portugal': 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
  'spain': 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
  'germany': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80',
  'netherlands': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
  'france': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
  'uk': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
  'united kingdom': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
  'ireland': 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80',
  'indonesia': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  'thailand': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80',
  'uae': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  'south africa': 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
  'colombia': 'https://images.unsplash.com/photo-1599413987323-b2b8c0e99d09?w=800&q=80',
  'mexico': 'https://images.unsplash.com/photo-1518659526054-190340b32735?w=800&q=80',
  'usa': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
  'united states': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
  'japan': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
  'australia': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80',
  'canada': 'https://images.unsplash.com/photo-1559511260-66a68e7e60e5?w=800&q=80',
  'croatia': 'https://images.unsplash.com/photo-1555990538-a7d0c5b46f9e?w=800&q=80',
  'greece': 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
  'italy': 'https://images.unsplash.com/photo-1543429258-c5ca3e0c22a2?w=800&q=80',
}

// Default fallback image
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'

function getDestinationImage(destination: Destination): string {
  // Try to match by name first
  const nameLower = destination.name?.toLowerCase() || ''
  if (DESTINATION_IMAGES[nameLower]) {
    return DESTINATION_IMAGES[nameLower]
  }

  // Try to match by country
  const countryLower = destination.country?.toLowerCase() || ''
  if (DESTINATION_IMAGES[countryLower]) {
    return DESTINATION_IMAGES[countryLower]
  }

  // Use image_url from database if available
  if (destination.image_url) {
    return destination.image_url
  }

  return DEFAULT_IMAGE
}

export function DestinationCard({ destination, className = '' }: DestinationCardProps) {
  const costInfo = COST_LABELS[destination.cost_of_living] || COST_LABELS.medium
  const imageUrl = getDestinationImage(destination)

  return (
    <Link href={`/destinations/${destination.slug}`} className="block">
      <article
        className={`
          overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 h-full flex flex-col
          group cursor-pointer hover:shadow-lg transition-all duration-300
          ${className}
        `}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

          {/* Nomad score badge */}
          {destination.nomad_score && (
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
              <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {destination.nomad_score}
            </div>
          )}

          {/* Location name overlay */}
          <div className="absolute bottom-3 left-3">
            <span className="text-xs font-medium uppercase tracking-wide text-white/80">
              {destination.country}
            </span>
            <h3 className="font-editorial text-xl text-white font-bold">
              {destination.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Tagline */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {destination.tagline}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* UK Overlap */}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {destination.uk_overlap_hours}h UK overlap
            </span>

            {/* Cost */}
            <span className={`inline-flex items-center px-2 py-1 text-xs rounded-md ${costInfo.color}`}>
              {costInfo.label}
            </span>
          </div>

          {/* Monthly cost if available */}
          {destination.monthly_cost_estimate && (
            <p className="text-sm text-gray-500 mb-4">
              ~£{destination.monthly_cost_estimate.toLocaleString()}/month
            </p>
          )}

          {/* Spacer */}
          <div className="flex-grow" />

          {/* CTA */}
          <div className="pt-4 border-t border-gray-100">
            <span className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors flex items-center gap-1">
              Explore destination
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
