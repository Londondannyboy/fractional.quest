import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim CHRO Services UK',
  description: 'Hire an Interim CHRO. Temporary HR leadership for transformations and restructuring.',
  keywords: 'interim chro, interim hr director, hire interim chro, temporary hr director, interim chief hr officer, interim chro uk',
  alternates: { canonical: 'https://fractional.quest/interim-chro' },
}

export default function InterimCHROPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Interim CHRO Services UK - HR leadership"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <JobsGraph3D roleFilter="CHRO" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CHRO<br /><span className="text-pink-400">Services UK</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary HR leadership for transformations, restructuring, and critical <a href="https://www.gov.uk/browse/employing-people" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">people challenges</a>. Expert HR executives available immediately.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">Hire an Interim CHRO</Link>
                <Link href="/fractional-chro-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Consider Fractional Instead?</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CHRO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CHRO</strong> (or Interim HR Director) is a temporary Chief Human Resources Officer who works full-time for a defined period—typically 3-12 months. Unlike <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">fractional CHROs who work part-time</a>, interim CHROs focus exclusively on one organisation.</p>
          <p className="text-gray-600">Interim CHROs are typically hired to lead <a href="https://www.cipd.org/uk/knowledge/guides/hr-transformation/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">HR transformations</a>, manage <a href="https://www.acas.org.uk/reorganising-your-business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">restructuring with people implications</a>, or fill leadership gaps during sensitive periods.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CHRO</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'HR Leader Departure', description: 'Your CHRO/HRD has left and you need immediate leadership while recruiting. Learn more about employment leadership from the Institute of Directors.' },
              { scenario: 'Restructuring/Redundancies', description: 'Major restructuring with significant people implications requiring expert handling. Consult ACAS guidance on redundancy processes.' },
              { scenario: 'Culture Crisis', description: 'Serious culture or engagement issues requiring intensive, dedicated focus. CIPD research highlights the importance of workplace culture.' },
              { scenario: 'M&A Integration', description: 'Merging workforces and cultures post-acquisition. British Business Bank research shows people integration is critical to M&A success.' },
              { scenario: 'HR Transformation', description: 'Complete overhaul of HR function, systems, or operating model. SHRM provides frameworks for HR function transformation.' },
              { scenario: 'Rapid Hiring', description: 'Scaling from 50 to 500+ employees and need full-time HR leadership. ScaleUp Institute research shows HR capability gaps in high-growth firms.' },
            ].map((item, i) => {
              const links = [
                { url: 'https://www.iod.com/membership/communities-and-groups/hr-and-people-directors/', text: 'Institute of Directors' },
                { url: 'https://www.acas.org.uk/making-staff-redundant', text: 'ACAS guidance on redundancy processes' },
                { url: 'https://www.cipd.org/uk/knowledge/factsheets/culture-factsheet/', text: 'CIPD research highlights the importance of workplace culture' },
                { url: 'https://www.british-business-bank.co.uk/research/smaller-businesses-and-the-uk-economy/', text: 'British Business Bank research shows people integration is critical to M&A success' },
                { url: 'https://www.shrm.org/topics-tools/topics/organizational-employee-development', text: 'SHRM provides frameworks for HR function transformation' },
                { url: 'https://www.scaleupinstitute.org.uk/research/', text: 'ScaleUp Institute research shows HR capability gaps in high-growth firms' },
              ];

              const linkMap: { [key: string]: { url: string; text: string } } = {
                'HR Leader Departure': links[0],
                'Restructuring/Redundancies': links[1],
                'Culture Crisis': links[2],
                'M&A Integration': links[3],
                'HR Transformation': links[4],
                'Rapid Hiring': links[5],
              };

              const link = linkMap[item.scenario];
              const parts = item.description.split('. ');

              return (
                <div key={i} className="bg-white p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                  <p className="text-gray-600 text-sm">
                    {parts[0]}.{parts.length > 1 && (
                      <> <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">{link.text}</a>.</>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CHRO" accentColor="pink" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim CHRO?</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your situation and we'll help you find the right interim or fractional CHRO. For general employment guidance, visit <a href="https://www.ons.gov.uk/employmentandlabourmarket" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS employment data</a>.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">Find an Interim CHRO</Link>
            <Link href="/fractional-chro-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CHRO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
