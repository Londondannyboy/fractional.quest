import { Metadata } from 'next'
import Link from 'next/link'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Marketing UK 2025',
  description: 'Hire fractional marketing leaders. Part-time CMOs, VPs of Marketing, Marketing Directors.',
  keywords: 'fractional marketing, fractional marketing director, part-time marketing executive, fractional vp marketing, hire marketing leader',
  alternates: { canonical: 'https://fractional.quest/fractional-marketing' },
}

export default function FractionalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Unsplash Image Background with Amber Gradient */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&q=80"
            alt="Marketing background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-amber-600/60 to-amber-900/80"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Fractional<br /><span className="text-amber-200">Marketing</span></h1>
              <p className="text-xl text-white leading-relaxed max-w-2xl mb-8">Access senior marketing leadership without the full-time commitment. From CMOs to VPs of Marketing, find the right level of expertise for your growth stage.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-amber-900 transition-colors">Find Marketing Leadership</Link>
                <Link href="/fractional-cmo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-amber-900 transition-colors">Fractional CMO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Fractional Marketing Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Not every company needs a full-time marketing executive, but most need strategic marketing leadership. Research from <a href="https://www.warc.com/content/paywall/article/warc-exclusive/the-future-of-marketing-leadership/en-gb/138591" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">WARC</a> shows that marketing effectiveness depends more on strategic leadership quality than team size. Fractional marketing leaders work part-time (typically 1-3 days per week) providing the strategic direction, team leadership, and marketing expertise your business needs, following <a href="https://www.marketingsociety.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">Marketing Society insights</a> on modern marketing leadership.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Fractional CMO', description: 'C-level marketing leadership for strategy, brand, and growth.', link: '/fractional-cmo-services' },
              { title: 'VP of Marketing', description: 'Senior marketing leadership focused on execution and team building.', link: '#contact' },
              { title: 'Marketing Director', description: 'Hands-on marketing leadership for growing teams.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-amber-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">What Fractional Marketing Leaders Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Marketing Strategy', description: 'Develop comprehensive marketing strategies aligned with business goals.' },
              { title: 'Brand Development', description: 'Build and refine brand positioning, messaging, and visual identity.' },
              { title: 'Team Leadership', description: 'Lead, mentor, and develop your marketing team and agency relationships.' },
              { title: 'Demand Generation', description: 'Create and optimise lead generation and customer acquisition programmes.' },
              { title: 'Marketing Operations', description: 'Implement marketing technology, processes, and measurement frameworks.' },
              { title: 'Budget Management', description: 'Allocate and optimise marketing spend for maximum ROI.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-amber-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="amber" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Marketing Leadership</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your marketing challenges and we'll match you with the right fractional marketing executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Get Started</Link>
            <Link href="/fractional-cmo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Fractional CMOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
