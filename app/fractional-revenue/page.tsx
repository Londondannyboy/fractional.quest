import { Metadata } from 'next'
import Link from 'next/link'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Revenue UK 2025',
  description: 'Hire fractional revenue leaders. Part-time CROs, VPs of Sales, Sales Directors.',
  keywords: 'fractional revenue, fractional sales director, part-time sales executive, fractional vp sales, hire revenue leader, fractional cro',
  alternates: { canonical: 'https://fractional.quest/fractional-revenue' },
}

export default function FractionalRevenuePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        {/* 3D Knowledge Graph Background */}
        <div className="absolute inset-0">
          <JobsGraph3D categoryFilter="Revenue" limit={25} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Fractional<br /><span className="text-blue-400">Revenue</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Access senior revenue leadership without the full-time commitment. From CROs to VPs of Sales, find the right level of sales expertise for your growth stage. According to <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white underline">British Business Bank</a> research, flexible leadership models are increasingly vital for UK businesses.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Find Revenue Leadership</Link>
                <Link href="/fractional-cro-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Fractional CRO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Fractional Revenue Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Revenue growth requires experienced leadership. Research from <a href="https://www.bridgegroupinc.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">The Bridge Group</a> demonstrates that structured sales leadership dramatically improves win rates and quota attainment. According to the <a href="https://www.cim.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Marketing</a>, professional sales leadership is crucial for sustainable growth. Fractional revenue leaders bring proven sales methodologies, GTM expertise, and team-building experience—helping you accelerate growth without the commitment of a full-time hire, applying <a href="https://www.winningbydesign.com/resources/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Winning by Design frameworks</a> for predictable revenue growth. This flexible approach aligns with <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK flexible working regulations</a>, enabling businesses to access senior expertise on demand.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { title: 'Fractional CRO', description: 'C-level revenue leadership for GTM strategy and growth.', link: '/fractional-cro-services' },
              { title: 'VP of Sales', description: 'Senior sales leadership for team scaling and process.', link: '#contact' },
              { title: 'Sales Director', description: 'Hands-on sales leadership and pipeline management.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-blue-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">What Fractional Revenue Leaders Do</h2>
          <p className="text-lg text-gray-600 mb-8">Drawing on insights from the <a href="https://www.ism.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Sales Management</a>, fractional revenue leaders provide strategic expertise across multiple revenue disciplines. The <a href="https://www.scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> reports that access to experienced leadership is a key factor in scaling businesses successfully.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'GTM Strategy', description: 'Develop go-to-market strategies for new products, markets, and segments.' },
              { title: 'Sales Process', description: 'Implement sales methodologies, stages, and qualification frameworks.' },
              { title: 'Team Building', description: 'Recruit, train, and develop high-performing sales teams.' },
              { title: 'Pipeline Management', description: 'Build forecasting, pipeline reviews, and deal coaching programmes.' },
              { title: 'Revenue Operations', description: 'Implement CRM, sales tools, and revenue analytics.' },
              { title: 'Partnership Strategy', description: 'Develop channel partnerships and alliance programmes.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8">The <a href="https://www.bvca.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Private Equity & Venture Capital Association</a> notes that portfolio companies often benefit from fractional executives who bring cross-sector experience. Data from the <a href="https://www.ons.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Office for National Statistics</a> shows the growing trend of flexible executive roles in the UK market.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="green" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Revenue Leadership</h2>
          <p className="text-xl text-gray-600 mb-10">Tell us about your revenue challenges and we'll match you with the right fractional sales executive. Research by the <a href="https://www.cipd.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Personnel and Development</a> and the <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> highlights the strategic value of flexible senior talent models in achieving business objectives.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Get Started</Link>
            <Link href="/fractional-cro-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Fractional CROs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
