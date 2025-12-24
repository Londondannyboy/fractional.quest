import Link from 'next/link'
import { RoleType, getRelatedRoleLinks } from '@/lib/seo-config'

interface RelatedContentProps {
  role: RoleType
  currentPage: 'jobs' | 'services' | 'guide' | 'salary'
  className?: string
}

/**
 * RelatedContent component provides contextual internal links
 * for improved SEO and user navigation
 */
export function RelatedContent({ role, currentPage, className = '' }: RelatedContentProps) {
  const links = getRelatedRoleLinks(role, currentPage)
  const roleName = role.toUpperCase()

  return (
    <section className={`py-16 bg-gray-50 border-t border-gray-200 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Complete {roleName} Resource Hub
          </h2>
          <p className="text-gray-600">
            Explore our comprehensive guides for businesses and {roleName} professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* For Businesses */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-4">
              For Businesses
            </h3>
            <ul className="space-y-2">
              {links.forBusinesses.map((link, i) => (
                <li key={i}>
                  {link.current ? (
                    <span className="text-gray-400 font-medium">{link.label}</span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-4">
              For {roleName} Professionals
            </h3>
            <ul className="space-y-2">
              {links.forProfessionals.map((link, i) => (
                <li key={i}>
                  {link.current ? (
                    <span className="text-gray-400 font-medium">{link.label}</span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Guides sub-section */}
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-4 mt-6">
              Guides
            </h3>
            <ul className="space-y-2">
              {links.guides.map((link, i) => (
                <li key={i}>
                  {link.current ? (
                    <span className="text-gray-400 font-medium">{link.label}</span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Roles */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-4">
              Other Fractional Roles
            </h3>
            <ul className="space-y-2">
              {links.otherRoles.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

interface QuickLinksProps {
  role: RoleType
  variant?: 'sidebar' | 'inline'
  className?: string
}

/**
 * QuickLinks component for sidebar or inline contextual links
 */
export function QuickLinks({ role, variant = 'sidebar', className = '' }: QuickLinksProps) {
  const links = getRelatedRoleLinks(role, 'services')
  const roleName = role.toUpperCase()

  if (variant === 'inline') {
    return (
      <div className={`bg-blue-50 border border-blue-100 rounded-lg p-6 ${className}`}>
        <h3 className="font-bold text-gray-900 mb-3">Related {roleName} Resources</h3>
        <div className="flex flex-wrap gap-3">
          {[...links.forBusinesses, ...links.forProfessionals].slice(0, 6).map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-sm text-blue-700 hover:text-blue-900 font-medium underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <aside className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        {links.forBusinesses.slice(0, 4).map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="pt-2 border-t border-gray-200 mt-2">
          <Link
            href={links.forProfessionals[0]?.href || '#'}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View {roleName} Jobs →
          </Link>
        </li>
      </ul>
    </aside>
  )
}
