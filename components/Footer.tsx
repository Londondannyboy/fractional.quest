import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Executive Roles */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Executive Jobs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fractional-cfo-jobs-uk" className="text-gray-400 hover:text-white transition-colors">CFO Jobs</Link></li>
              <li><Link href="/fractional-cto-jobs-uk" className="text-gray-400 hover:text-white transition-colors">CTO Jobs</Link></li>
              <li><Link href="/fractional-cmo-jobs-uk" className="text-gray-400 hover:text-white transition-colors">CMO Jobs</Link></li>
              <li><Link href="/fractional-coo-jobs-uk" className="text-gray-400 hover:text-white transition-colors">COO Jobs</Link></li>
              <li><Link href="/fractional-ceo-jobs-uk" className="text-gray-400 hover:text-white transition-colors">CEO Jobs</Link></li>
              <li><Link href="/fractional-chro-jobs-uk" className="text-gray-400 hover:text-white transition-colors">CHRO Jobs</Link></li>
              <li><Link href="/fractional-ciso-jobs-uk" className="text-gray-400 hover:text-white transition-colors">CISO Jobs</Link></li>
              <li><Link href="/fractional-cro-jobs-uk" className="text-gray-400 hover:text-white transition-colors">CRO Jobs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Hire Executives</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fractional-cfo-services" className="text-gray-400 hover:text-white transition-colors">Hire a CFO</Link></li>
              <li><Link href="/fractional-cto-services" className="text-gray-400 hover:text-white transition-colors">Hire a CTO</Link></li>
              <li><Link href="/fractional-cmo-services" className="text-gray-400 hover:text-white transition-colors">Hire a CMO</Link></li>
              <li><Link href="/fractional-coo-services" className="text-gray-400 hover:text-white transition-colors">Hire a COO</Link></li>
              <li><Link href="/fractional-chro-services" className="text-gray-400 hover:text-white transition-colors">Hire a CHRO</Link></li>
              <li><Link href="/fractional-ciso-services" className="text-gray-400 hover:text-white transition-colors">Hire a CISO</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fractional-cfo" className="text-gray-400 hover:text-white transition-colors">What is a Fractional CFO?</Link></li>
              <li><Link href="/fractional-cto" className="text-gray-400 hover:text-white transition-colors">What is a Fractional CTO?</Link></li>
              <li><Link href="/fractional-cmo" className="text-gray-400 hover:text-white transition-colors">What is a Fractional CMO?</Link></li>
              <li><Link href="/how-to-become-fractional-cfo" className="text-gray-400 hover:text-white transition-colors">Become a Fractional CFO</Link></li>
              <li><Link href="/how-to-become-a-fractional-cto" className="text-gray-400 hover:text-white transition-colors">Become a Fractional CTO</Link></li>
              <li><Link href="/fractional-cfo-vs-full-time" className="text-gray-400 hover:text-white transition-colors">Fractional vs Full-Time</Link></li>
            </ul>
          </div>

          {/* Salary & Cost */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Salary & Rates</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fractional-cfo-salary" className="text-gray-400 hover:text-white transition-colors">CFO Salary Guide</Link></li>
              <li><Link href="/fractional-cto-salary" className="text-gray-400 hover:text-white transition-colors">CTO Salary Guide</Link></li>
              <li><Link href="/fractional-cmo-salary" className="text-gray-400 hover:text-white transition-colors">CMO Salary Guide</Link></li>
              <li><Link href="/fractional-cfo-hourly-rate" className="text-gray-400 hover:text-white transition-colors">CFO Hourly Rates</Link></li>
              <li><Link href="/fractional-cfo-cost" className="text-gray-400 hover:text-white transition-colors">CFO Cost Guide</Link></li>
              <li><Link href="/calculators/fractional-rate" className="text-gray-400 hover:text-white transition-colors">Rate Calculator</Link></li>
            </ul>
          </div>

          {/* Jobs by Location */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Jobs by Location</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fractional-jobs-uk" className="text-gray-400 hover:text-white transition-colors">UK</Link></li>
              <li><Link href="/fractional-jobs-london" className="text-gray-400 hover:text-white transition-colors">London</Link></li>
              <li><Link href="/fractional-jobs-manchester" className="text-gray-400 hover:text-white transition-colors">Manchester</Link></li>
              <li><Link href="/fractional-jobs-birmingham" className="text-gray-400 hover:text-white transition-colors">Birmingham</Link></li>
              <li><Link href="/fractional-jobs-leeds" className="text-gray-400 hover:text-white transition-colors">Leeds</Link></li>
              <li><Link href="/fractional-jobs-edinburgh" className="text-gray-400 hover:text-white transition-colors">Edinburgh</Link></li>
              <li><Link href="/fractional-jobs-bristol" className="text-gray-400 hover:text-white transition-colors">Bristol</Link></li>
            </ul>
          </div>

          {/* Jobs by Industry */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Jobs by Industry</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fractional-jobs-saas" className="text-gray-400 hover:text-white transition-colors">SaaS</Link></li>
              <li><Link href="/fractional-jobs-tech" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="/fractional-jobs-healthcare" className="text-gray-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/fractional-jobs-finance" className="text-gray-400 hover:text-white transition-colors">Finance</Link></li>
              <li><Link href="/fractional-jobs-ecommerce" className="text-gray-400 hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link href="/fractional-jobs-startups" className="text-gray-400 hover:text-white transition-colors">Startups</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Logo & Description */}
            <div className="flex-shrink-0 max-w-sm">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-serif font-bold text-xl">F</span>
                </div>
                <span className="font-serif font-bold text-white text-xl">Fractional Quest</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                The UK marketplace for fractional executive roles. Connect with CFO, CTO, CMO and other C-suite opportunities.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <a href="https://x.com/fractionalquest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="https://www.linkedin.com/company/fractional-quest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          <p className="text-gray-500 text-xs mt-6">
            © {new Date().getFullYear()} Fractional Quest. All rights reserved. Fractional Quest is a trading name.
          </p>
        </div>
      </div>
    </footer>
  )
}
