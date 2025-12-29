'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AuthButtons } from './AuthButtons'

// Job markets for dropdown
const JOB_MARKETS = [
  { href: '/fractional-jobs-london', label: 'London', flag: '🏙️' },
  { href: '/fractional-jobs-uk', label: 'United Kingdom', flag: '🇬🇧' },
  { href: '/fractional-jobs', label: 'Global', flag: '🌍' },
]

// Role categories
const JOB_ROLES = [
  { href: '/fractional-cfo-jobs-uk', label: 'CFO Jobs', icon: '💰' },
  { href: '/fractional-cto-jobs-uk', label: 'CTO Jobs', icon: '💻' },
  { href: '/fractional-cmo-jobs-uk', label: 'CMO Jobs', icon: '📣' },
  { href: '/fractional-coo-jobs-uk', label: 'COO Jobs', icon: '⚙️' },
  { href: '/fractional-chro-jobs-uk', label: 'CHRO Jobs', icon: '👥' },
  { href: '/fractional-cpo-jobs-uk', label: 'CPO Jobs', icon: '📦' },
]

// Industry verticals
const JOB_VERTICALS = [
  { href: '/fractional-jobs-startups', label: 'Startups', icon: '🚀' },
  { href: '/fractional-jobs-tech', label: 'Tech & SaaS', icon: '⚡' },
  { href: '/fractional-jobs-finance', label: 'Finance', icon: '🏦' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [jobsDropdownOpen, setJobsDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Always use the "light" theme for consistency
  const navBaseClasses = "sticky top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100"

  const navLinks = [
    { href: '/destinations', label: 'Destinations' },
    { href: '/fractional-property-ownership-uk', label: 'Property' },
    { href: '/frac', label: 'Talk to Frac' },
    { href: '/fractional-services', label: 'Services' },
    { href: '/fractional-jobs-articles', label: 'Resources' }
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className={navBaseClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-900 shadow-sm group-hover:bg-black transition-colors">
              <span className="text-white font-serif font-bold text-xl">F</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-serif font-bold text-xl text-gray-900">Fractional Quest</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide bg-blue-50 text-blue-700">
                Beta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Jobs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setJobsDropdownOpen(!jobsDropdownOpen)}
                onBlur={() => setTimeout(() => setJobsDropdownOpen(false), 150)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  pathname.includes('fractional-jobs')
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Jobs
                <svg className={`w-4 h-4 transition-transform ${jobsDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {jobsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg py-3 z-50">
                  {/* By Location */}
                  <div className="px-4 py-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">By Location</span>
                  </div>
                  {JOB_MARKETS.map((market) => (
                    <Link
                      key={market.href}
                      href={market.href}
                      className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        pathname === market.href ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                      onClick={() => setJobsDropdownOpen(false)}
                    >
                      <span className="text-base">{market.flag}</span>
                      <span>{market.label}</span>
                    </Link>
                  ))}

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-2" />

                  {/* By Role */}
                  <div className="px-4 py-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">By Role</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 px-2">
                    {JOB_ROLES.map((role) => (
                      <Link
                        key={role.href}
                        href={role.href}
                        className={`flex items-center gap-2 px-2 py-2 text-sm rounded hover:bg-gray-50 transition-colors ${
                          pathname === role.href ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                        }`}
                        onClick={() => setJobsDropdownOpen(false)}
                      >
                        <span className="text-sm">{role.icon}</span>
                        <span>{role.label}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-2" />

                  {/* By Industry */}
                  <div className="px-4 py-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">By Industry</span>
                  </div>
                  {JOB_VERTICALS.map((vertical) => (
                    <Link
                      key={vertical.href}
                      href={vertical.href}
                      className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        pathname === vertical.href ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                      onClick={() => setJobsDropdownOpen(false)}
                    >
                      <span className="text-base">{vertical.icon}</span>
                      <span>{vertical.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Jobs link - visible on mobile */}
            <Link
              href="/fractional-jobs-uk"
              className="md:hidden text-sm font-semibold text-gray-900"
            >
              Jobs
            </Link>

            <AuthButtons scrolled={true} />
            
            <Link
              href="/handler/sign-up"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-gray-900 rounded-lg hover:bg-black hover:shadow-md"
            >
              Join Beta
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900"
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
          <div className="md:hidden py-4 border-t border-gray-100 bg-white absolute left-0 right-0 shadow-lg px-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-gray-50 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  href="/handler/sign-up"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-gray-900 text-white font-semibold rounded-lg"
                >
                  Join Beta
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
