'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AuthButtons } from './AuthButtons'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/fractional-jobs', label: 'Jobs' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/people', label: 'People' },
    { href: '/fractional-services', label: 'Services' },
    { href: '/fractional-ownership-guide', label: 'Property' },
    { href: '/fractional-jobs-articles', label: 'Resources' }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  // Base classes
  const navBaseClasses = "sticky top-0 z-50 transition-all duration-300"
  const navScrolledClasses = "bg-white/90 backdrop-blur-md shadow-md"
  const navUnscrolledClasses = "bg-transparent"

  const linkBaseClasses = "nav-link"
  const linkScrolledClasses = "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
  const linkUnscrolledClasses = "text-white hover:bg-white/10"
  const linkActiveScrolledClasses = "text-gray-900 bg-gray-200"
  const linkActiveUnscrolledClasses = "text-white bg-white/10"

  return (
    <nav className={`${navBaseClasses} ${scrolled ? navScrolledClasses : navUnscrolledClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow ${scrolled ? 'bg-gradient-to-br from-gray-800 to-black' : 'bg-white/20'}`}>
              <span className="text-white font-black text-xl">F</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div>
                <span className={`font-bold text-lg transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>Fractional</span>
                <span className={`font-bold text-lg transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}>.Quest</span>
              </div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide transition-colors ${scrolled ? 'bg-amber-100 text-amber-700' : 'bg-white/20 text-white'}`}>
                Beta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBaseClasses} ${scrolled ? linkScrolledClasses : linkUnscrolledClasses} ${isActive(link.href) ? (scrolled ? linkActiveScrolledClasses : linkActiveUnscrolledClasses) : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Jobs link - always visible, prominent on mobile */}
            <Link
              href="/fractional-jobs-uk"
              className={`md:hidden px-3 py-2 rounded-lg font-semibold text-sm transition-colors ${
                isActive('/fractional-jobs')
                  ? (scrolled ? 'bg-gray-200 text-gray-900' : 'bg-white/20 text-white')
                  : (scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10')
              }`}
            >
              Jobs
            </Link>

            <AuthButtons scrolled={scrolled} />
            <Link
              href="/handler/sign-up"
              className={`hidden sm:inline-flex btn-gradient text-sm px-4 py-2 ${scrolled ? '' : 'bg-white !text-gray-900 hover:bg-gray-200'}`}
            >
              Join Beta
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${scrolled ? 'border-gray-100' : 'border-white/20'}`}>
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? (scrolled ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white')
                      : (scrolled ? 'text-gray-600 hover:bg-gray-50' : 'text-white hover:bg-white/10')
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/handler/sign-up"
                onClick={() => setMobileMenuOpen(false)}
                className={`mx-4 mt-4 text-center ${scrolled ? 'btn-gradient' : 'bg-white text-gray-900 py-3 rounded-lg font-semibold'}`}
              >
                Join Beta
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
