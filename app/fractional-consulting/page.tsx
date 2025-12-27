import { Metadata } from 'next'
import Link from 'next/link'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'

export const revalidate = 3600

const FRACTIONAL_CONSULTING_FAQS = [
  {
    question: 'What is fractional consulting?',
    answer: 'Fractional consulting provides ongoing access to expert consultants who work with you part-time on a retained basis. Unlike traditional projects with defined end dates, fractional consultants become an extension of your team, combining senior expertise with relationship continuity.',
  },
  {
    question: 'How is fractional consulting different from traditional consulting?',
    answer: 'Traditional consulting is project-based with defined deliverables and end dates. Fractional consulting is ongoing, retained, and relationship-focused. You get deeper knowledge of your business, shared accountability for outcomes, and a partner who grows with you.',
  },
  {
    question: 'What types of fractional consultants are available?',
    answer: 'Fractional consultants are available across all business functions: Finance (CFO, FP&A), Marketing (CMO, Growth), Technology (CTO, CIO), Operations (COO), Security (CISO), HR (CHRO), and Revenue (CRO). Most have 15+ years experience.',
  },
  {
    question: 'How much does fractional consulting cost?',
    answer: 'Fractional consulting typically costs £2,000-£8,000 per month for 1-2 days per week of senior expertise. This is 60-80% less than equivalent full-time hires while providing access to more experienced professionals.',
  },
  {
    question: 'When should I choose fractional over full-time?',
    answer: 'Choose fractional when you need senior expertise but cannot justify or afford a full-time hire, want flexibility to scale up or down, need diverse experience across multiple companies, or are between growth stages.',
  },
  {
    question: 'How do I find a fractional consultant?',
    answer: 'Use specialised platforms like Fractional Quest that vet consultants, match based on your needs, and provide ongoing support. Look for consultants with relevant industry experience, proven track records, and good cultural fit.',
  },
]

export const metadata: Metadata = {
  title: 'Fractional Consulting UK',
  description: 'Fractional consulting services. Finance, marketing, technology, operations expertise.',
  keywords: 'fractional consulting, fractional consultants, part-time consulting, fractional consulting services, fractional consulting uk',
  alternates: { canonical: 'https://fractional.quest/fractional-consulting' },
}

export default function FractionalConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Fractional Consulting UK"
        description="Fractional consulting services across finance, marketing, technology, and operations"
        url="https://fractional.quest/fractional-consulting"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={FRACTIONAL_CONSULTING_FAQS} />

      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)' }} />
          <JobsGraph3D limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-indigo-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Consulting Services</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Fractional<br /><span className="text-indigo-400">Consulting</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Access expert consultants on a fractional basis. Get strategic advice and hands-on support from experienced professionals without the cost of traditional consulting.</p>
              <Link href="#contact" className="px-8 py-4 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors inline-block">Find Consultants</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is Fractional Consulting?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Fractional consulting provides ongoing access to expert consultants who work with you part-time on a retained basis. Unlike traditional consulting projects with defined end dates, fractional consultants become an extension of your team. Following <a href="https://www.iconsulting.org.uk/professional-standards" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">Institute of Consulting professional standards</a> and <a href="https://www.managementconsultanciesassociation.org/code-of-practice/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">MCA best practices</a>, they bring rigorous methodologies to fractional engagements.</p>
          <p className="text-gray-600 mb-6">This model combines the expertise of top consultants with the continuity and relationship depth of an employee. You get strategic advice and hands-on execution from someone who deeply understands your business. Research from the <a href="https://www.cbi.org.uk/insights/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline">CBI</a> highlights how UK businesses increasingly value flexible expertise over traditional consulting models.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Fractional vs Traditional Consulting</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold">Aspect</th>
                  <th className="p-4 text-left font-bold text-indigo-700">Fractional Consulting</th>
                  <th className="p-4 text-left font-bold">Traditional Consulting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4 font-medium">Engagement</td><td className="p-4">Ongoing, retained</td><td className="p-4">Project-based</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Cost Model</td><td className="p-4">Monthly retainer</td><td className="p-4">Day rates or project fees</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Relationship</td><td className="p-4">Deep, ongoing partnership</td><td className="p-4">Transactional</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Knowledge</td><td className="p-4">Builds over time</td><td className="p-4">Limited by project scope</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Accountability</td><td className="p-4">Shared outcomes</td><td className="p-4">Deliverable-focused</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Consulting Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Finance Consulting', description: 'FP&A, fundraising, M&A support, financial transformation.', link: '/finance-consultants' },
              { title: 'Marketing Consulting', description: 'Strategy, brand, digital marketing, demand generation.', link: '/marketing-consultants' },
              { title: 'Technology Consulting', description: 'Architecture, digital transformation, tech strategy.', link: '/technology-consultants' },
              { title: 'Operations Consulting', description: 'Process improvement, scaling, efficiency.', link: '/operations-consultants' },
              { title: 'Security Consulting', description: 'Cybersecurity, compliance, risk management.', link: '/cybersecurity-consultants' },
              { title: 'Executive Consulting', description: 'C-level advisory, board support, strategy.', link: '/fractional-services' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-indigo-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={FRACTIONAL_CONSULTING_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find Fractional<br /><span className="text-indigo-400">Consultants</span>
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Tell us what expertise you need and we'll match you with experienced fractional consultants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-indigo-900 font-bold uppercase tracking-wider hover:bg-indigo-50 transition-colors">Get Started</Link>
            <Link href="/fractional-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-indigo-900 transition-colors">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Related Consulting Resources</h2>
            <p className="text-gray-600">Explore consulting options by function</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Business Functions</h3>
              <div className="space-y-2">
                <Link href="/finance-consultants" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Finance Consultants</Link>
                <Link href="/marketing-consultants" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Marketing Consultants</Link>
                <Link href="/technology-consultants" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Technology Consultants</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Operations & Security</h3>
              <div className="space-y-2">
                <Link href="/operations-consultants" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Operations Consultants</Link>
                <Link href="/cybersecurity-consultants" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Cybersecurity Consultants</Link>
                <Link href="/fractional-services" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">All Services</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Learn More</h3>
              <div className="space-y-2">
                <Link href="/what-is-fractional" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">What is Fractional?</Link>
                <Link href="/fractional-jobs-uk" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Fractional Jobs</Link>
                <Link href="/how-to-become-a-fractional-executive" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Become a Consultant</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
