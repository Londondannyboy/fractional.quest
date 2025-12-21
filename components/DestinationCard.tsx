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

export function DestinationCard({ destination, className = '' }: DestinationCardProps) {
  const costInfo = COST_LABELS[destination.cost_of_living] || COST_LABELS.medium

  return (
    <Link href={`/destinations/${destination.slug}`} className="block">
      <article
        className={`
          card-premium p-6 h-full flex flex-col
          group cursor-pointer
          ${className}
        `}
      >
        {/* Header with country flag placeholder */}
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
            {destination.country}
          </span>
          {destination.nomad_score && (
            <span className="flex items-center gap-1 text-xs font-medium text-teal-600">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {destination.nomad_score}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-editorial text-xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
          {destination.name}
        </h3>

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
      </article>
    </Link>
  )
}
