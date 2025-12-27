/**
 * ServiceSchema Component
 *
 * Server-side Service JSON-LD schema for SEO rich snippets.
 * Helps Google understand the services offered on the page.
 */

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  provider?: string
  areaServed?: string
  priceRange?: string
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = 'Fractional Quest',
  areaServed = 'United Kingdom',
  priceRange = '£££',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: 'https://fractional.quest',
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    priceRange,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
