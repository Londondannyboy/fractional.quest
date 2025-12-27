import { Metadata } from 'next'
import Link from 'next/link'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Operations UK 2025',
  description: 'Hire fractional operations leaders. Part-time COOs, VPs of Ops, Operations Directors.',
  keywords: 'fractional operations, fractional ops director, part-time operations executive, fractional vp operations, hire operations leader',
  alternates: { canonical: 'https://fractional.quest/fractional-operations' },
}

export default function FractionalOperationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Unsplash Image Background with Orange Gradient */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt="Operations background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-600/60 to-orange-900/80"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Fractional<br /><span className="text-orange-200">Operations</span></h1>
              <p className="text-xl text-white leading-relaxed max-w-2xl mb-8">Access senior operations leadership without the full-time commitment. From COOs to Operations Directors, find the right level of expertise for your growth stage. The <a href="https://www.british-business-bank.co.uk/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200 underline">British Business Bank</a> highlights how flexible leadership models enable businesses to scale sustainably.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-900 transition-colors">Find Operations Leadership</Link>
                <Link href="/fractional-coo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-orange-900 transition-colors">Fractional COO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Fractional Operations Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">As companies scale, operational complexity grows exponentially. Research from the <a href="https://scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> shows that scaling businesses face unique operational challenges that require experienced leadership. Fractional operations leaders bring the experience to build scalable systems, processes, and teams—without the cost of a full-time executive. According to <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">government flexible working guidelines</a>, this model offers businesses greater agility in accessing senior talent.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Fractional COO', description: 'C-level operations leadership for scaling and transformation.', link: '/fractional-coo-services' },
              { title: 'VP of Operations', description: 'Senior operations leadership for process improvement and efficiency.', link: '#contact' },
              { title: 'Operations Director', description: 'Hands-on operations leadership for growing teams.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-orange-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
          <p className="text-gray-600 mt-8 leading-relaxed">The <a href="https://www.bethebusiness.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Be the Business</a> research shows that productivity gains often come from experienced operations leadership. Meanwhile, <a href="https://www.makeuk.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Make UK</a> highlights the importance of operational efficiency for manufacturers and production businesses.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">What Fractional Operations Leaders Do</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">From process optimisation informed by <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS labour market data</a> to team development guided by <a href="https://www.cipd.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD people management standards</a>, fractional operations leaders deliver comprehensive operational excellence:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Process Design', description: 'Design and implement efficient, scalable operational processes.' },
              { title: 'Team Scaling', description: 'Build organisational structures and hire teams to support growth.' },
              { title: 'Systems Implementation', description: 'Select and implement operational systems and tools.' },
              { title: 'Performance Management', description: 'Create KPIs, dashboards, and accountability frameworks.' },
              { title: 'Vendor Management', description: 'Negotiate and manage relationships with suppliers and partners.' },
              { title: 'Cost Optimisation', description: 'Identify and implement operational efficiencies and cost savings.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8 leading-relaxed">These capabilities align with professional standards set by organisations like the <a href="https://www.cmi.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Management Institute</a> and <a href="https://www.apm.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Association for Project Management</a>, ensuring best practice operational leadership across all business functions.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="orange" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Operations Leadership</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your operational challenges and we'll match you with the right fractional operations executive. Drawing on insights from the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a>, we connect you with leaders who understand modern business governance and operational best practice.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Get Started</Link>
            <Link href="/fractional-coo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Fractional COOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
