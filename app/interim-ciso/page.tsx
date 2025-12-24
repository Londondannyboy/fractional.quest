import { Metadata } from 'next'
import Link from 'next/link'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim CISO Services UK | Hire a Temporary CISO',
  description: 'Hire an Interim CISO for your business. Full-time temporary security leadership for breaches, compliance, and security transformations. Expert CISOs available immediately.',
  keywords: 'interim ciso, interim ciso services, hire interim ciso, temporary ciso, interim chief information security officer, interim ciso uk',
  alternates: { canonical: 'https://fractional.quest/interim-ciso' },
}

export default function InterimCISOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
          <JobsGraph3D roleFilter="CISO" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-red-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CISO<br /><span className="text-red-400">Services UK</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary security leadership for <a href="https://www.ncsc.gov.uk/section/about-ncsc/what-we-do" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">breaches</a>, <a href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">compliance requirements</a>, and security transformations. Expert <a href="https://www.iod.com/membership/membership-benefits/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">security executives</a> available immediately.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">Hire an Interim CISO</Link>
                <Link href="/fractional-ciso-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Consider Fractional Instead?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CISO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CISO</strong> is a temporary <a href="https://www.isc2.org/Certifications/CISSP" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chief Information Security Officer</a> who works full-time for a defined period—typically 3-12 months. Unlike fractional CISOs who work part-time on a <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working</a> basis, interim CISOs focus exclusively on one organisation during critical security periods.</p>
          <p className="text-gray-600">Interim CISOs are typically hired following <a href="https://www.ncsc.gov.uk/collection/incident-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">security breaches</a>, during major compliance initiatives, or to lead security transformations requiring intensive daily attention.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CISO</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Security Breach</h3>
              <p className="text-gray-600 text-sm">Active breach or incident requiring full-time <a href="https://www.ncsc.gov.uk/guidance/responding-to-cyber-incidents" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">crisis management</a> and remediation.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">CISO Departure</h3>
              <p className="text-gray-600 text-sm">Your CISO has left and you need immediate <a href="https://www.isaca.org/resources/news-and-trends/industry-news/2023/the-ciso-role-evolving-responsibilities" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">security leadership</a> while recruiting.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Compliance Deadline</h3>
              <p className="text-gray-600 text-sm">Major compliance requirements (<a href="https://www.bcs.org/membership-and-registrations/get-registered/professional-registration-for-it-technicians/citp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SOC 2, ISO 27001</a>, PCI-DSS) with tight deadlines.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Security Transformation</h3>
              <p className="text-gray-600 text-sm">Complete overhaul of <a href="https://www.ncsc.gov.uk/collection/cyber-security-design-principles" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">security programme</a> requiring dedicated leadership.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Due Diligence</h3>
              <p className="text-gray-600 text-sm">Preparing for <a href="https://www.scaleupinstitute.org.uk/scale-up-programmes/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">acquisition or investment</a> with intensive security scrutiny.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Post-Breach Recovery</h3>
              <p className="text-gray-600 text-sm">Rebuilding security posture after a <a href="https://ico.org.uk/for-organisations/report-a-breach/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">significant incident</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CISO" accentColor="red" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim CISO?</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your <a href="https://www.cipd.org/uk/knowledge/factsheets/interim-managers-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">security challenges</a> and we'll help you find the right interim or fractional CISO.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">Find an Interim CISO</Link>
            <Link href="/fractional-ciso-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CISO</Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-ciso-jobs" className="text-gray-600 hover:text-red-600 font-medium transition-colors">CISO Jobs UK</Link>
              <Link href="/fractional-ciso" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Fractional CISO Guide</Link>
              <Link href="/fractional-ciso-services" className="text-gray-600 hover:text-red-600 font-medium transition-colors">CISO Services</Link>
              <Link href="/interim-cto" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Interim CTO</Link>
              <Link href="/top-fractional-recruitment-agencies-best-fractional-recruitment-agency-fractional-recruiter" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Fractional Recruiters</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
