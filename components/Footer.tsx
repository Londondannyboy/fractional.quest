import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Company Info */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">F</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg">Fractional</span>
                <span className="text-blue-400 font-bold text-lg">.Quest</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Voice-powered fractional executive jobs. Talk with Frac.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              © {new Date().getFullYear()} Fractional Quest
            </p>
          </div>

          {/* Right: Key Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
