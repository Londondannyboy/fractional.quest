import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left: Company Info */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-serif font-bold text-xl">F</span>
              </div>
              <div>
                <span className="font-serif font-bold text-white text-xl">Fractional Quest</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The premier marketplace for fractional executive roles. Design your life, not your commute.
            </p>
            <p className="text-gray-500 text-xs mt-6">
              © {new Date().getFullYear()} Fractional Quest. All rights reserved.
            </p>
          </div>

          {/* Right: Key Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
