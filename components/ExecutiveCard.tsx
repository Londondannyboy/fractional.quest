'use client'

import Link from 'next/link'
import type { FeaturedExecutive } from '@/lib/types'

interface ExecutiveCardProps {
  executive: FeaturedExecutive
  className?: string
}

export function ExecutiveCard({ executive, className = '' }: ExecutiveCardProps) {
  return (
    <Link href={`/people/${executive.slug}`} className="block">
      <article
        className={`
          card-premium p-6 h-full flex flex-col
          group cursor-pointer
          ${className}
        `}
      >
        {/* Photo and basic info */}
        <div className="flex items-start gap-4 mb-4">
          {/* Photo placeholder */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 overflow-hidden">
            {executive.photo_url ? (
              <img
                src={executive.photo_url}
                alt={executive.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
              {executive.name}
            </h3>
            {executive.headline && (
              <p className="text-sm text-gray-600 line-clamp-1">
                {executive.headline}
              </p>
            )}
            {executive.based_in && (
              <p className="text-xs text-teal-600 mt-1 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Based in {executive.based_in}
              </p>
            )}
          </div>
        </div>

        {/* Lifestyle summary */}
        {executive.lifestyle_summary && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-3 italic">
            "{executive.lifestyle_summary}"
          </p>
        )}

        {/* Specialisms */}
        {executive.specialisms && executive.specialisms.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {executive.specialisms.slice(0, 3).map((spec) => (
              <span
                key={spec}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
              >
                {spec}
              </span>
            ))}
            {executive.specialisms.length > 3 && (
              <span className="text-xs text-gray-400">
                +{executive.specialisms.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-grow" />

        {/* CTA */}
        <div className="pt-4 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-900 group-hover:text-teal-600 transition-colors flex items-center gap-1">
            Read their story
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  )
}
