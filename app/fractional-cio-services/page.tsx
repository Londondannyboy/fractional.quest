import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'
import { ServiceSchema } from '@/components/ServiceSchema'

export const revalidate = 3600

const CIO_SERVICE_FAQS = [
  {
    question: 'What is a Fractional CIO?',
    answer: 'A Fractional CIO (Chief Information Officer) is an experienced IT executive who works with your company part-time, typically 1-3 days per week. You get strategic IT leadership, digital transformation expertise, and technology governance without the cost of a full-time executive.',
  },
  {
    question: 'How is a CIO different from a CTO?',
    answer: 'A CTO focuses on product technology—the technology in your product that customers use. A CIO focuses on enterprise technology—the internal systems, infrastructure, and IT operations that run your business. Some companies need both; others need one or the other depending on their model.',
  },
  {
    question: 'When should my company hire a Fractional CIO?',
    answer: 'Consider hiring a fractional CIO when: your IT infrastructure is holding back growth; you need digital transformation leadership; you\'re scaling and need enterprise systems; you have compliance or security requirements; or IT costs are out of control. <a href="https://technation.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Tech Nation</a> research shows technology leadership is critical during scale-up phases.',
  },
  {
    question: 'How much does a Fractional CIO cost?',
    answer: 'Fractional CIOs typically charge £800-£1,400 per day in the UK. At 2 days per week, this translates to roughly £80,000-£140,000 annually—compared to £160,000-£250,000+ for a full-time CIO.',
  },
  {
    question: 'What does a Fractional CIO do?',
    answer: 'A Fractional CIO develops IT strategy, leads digital transformation, manages enterprise systems (ERP, CRM, etc.), oversees IT infrastructure and security, controls IT budgets, manages vendor relationships, and ensures technology enables business objectives. They often align their work with <a href="https://www.bcs.org/membership/become-a-member/member-grades/chartered-it-professional-citp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered IT Professional standards</a>.',
  },
  {
    question: 'Can a Fractional CIO help with digital transformation?',
    answer: 'Yes—digital transformation is a core CIO responsibility. A fractional CIO can assess your current state, develop a transformation roadmap, select and implement new systems, manage change, and ensure the transformation delivers business value.',
  },
]

export const metadata: Metadata = {
  title: 'Fractional CIO Services UK',
  description: 'Hire a Fractional CIO. Digital transformation, IT strategy, enterprise systems.',
  keywords: 'fractional cio, fractional cio services, hire fractional cio, part time cio, fractional chief information officer, fractional cio uk, fractional it director',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cio-services',
  },
  openGraph: {
    title: 'Fractional CIO Services UK | Hire a Part-Time Chief Information Officer',
    description: 'Hire a Fractional CIO for your business. Senior IT leadership at a fraction of full-time cost.',
    images: ['/images/fractional-cio-services.jpg'],
    url: 'https://fractional.quest/fractional-cio-services',
  },
}

export default function FractionalCIOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema for SEO */}
      <WebPageSchema
        title="Fractional CIO Services UK"
        description="Hire a Fractional CIO for your business"
        url="https://fractional.quest/fractional-cio-services"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={CIO_SERVICE_FAQS} />
      <ServiceSchema
        name="Fractional CIO Services"
        description="Hire a Fractional CIO for digital transformation, IT strategy, and enterprise systems"
        url="https://fractional.quest/fractional-cio-services"
        priceRange="£800-£1,400/day"
      />
      {/* Hero Section with Unsplash Image */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-700/85" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cio', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-indigo-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                IT Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CIO<br />
                <span className="text-indigo-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional CIO</strong> to transform your IT.
                Senior IT leadership, digital transformation expertise, and enterprise systems strategy—at a fraction of full-time cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-indigo-400">50%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Cost Savings</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">15+ Yrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Experience</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors">
                  Hire a Fractional CIO
                </Link>
                <Link href="#responsibilities" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CIO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CIO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional CIO</strong> (Chief Information Officer) is an experienced IT executive who works with your company on a part-time basis—typically 1-3 days per week. You get strategic IT leadership, digital transformation expertise, and enterprise systems management without the commitment and cost of a full-time hire. This <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangement</a> benefits both businesses and senior IT professionals.
            </p>
            <p>
              Unlike IT managers who focus on day-to-day operations, a fractional CIO provides strategic leadership. They align technology with business objectives, lead digital transformation initiatives, and ensure your IT investments deliver value. Following <a href="https://www.bcs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BCS professional standards</a> and <a href="https://www.axelos.com/certifications/itil-service-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ITIL frameworks</a>, they bring enterprise IT best practices to growing companies.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-indigo-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "A fractional CIO ensures technology enables your business rather than constraining it."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">CIO vs CTO: Understanding the Difference</h3>
            <p>
              Many companies confuse the CIO and CTO roles. A <strong>CTO</strong> focuses on product technology—the technology that your customers interact with. A <strong>CIO</strong> focuses on enterprise technology—the internal systems, infrastructure, and IT operations that run your business. The <a href="https://www.isaca.org/resources/news-and-trends/industry-news/2021/cio-vs-cto" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ISACA guidance</a> on executive IT roles provides detailed distinctions.
            </p>
            <p>
              SaaS companies typically need a CTO for their product and may also need a CIO as they scale their internal operations. Traditional businesses often need a CIO but not a CTO. Understanding these differences is crucial for building the right leadership structure, as highlighted by <a href="https://www.techuk.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">techUK</a> on UK technology leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section id="responsibilities" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional CIO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Core responsibilities your fractional CIO will own</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'IT Strategy',
                description: 'Develop IT strategy aligned with business objectives. Create technology roadmaps that support growth and efficiency, following frameworks recommended by the <a href="https://www.iod.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a>.',
                icon: '🎯',
              },
              {
                title: 'Digital Transformation',
                description: 'Lead digital transformation initiatives. Modernise legacy systems, implement new technologies, and drive digital adoption.',
                icon: '🔄',
              },
              {
                title: 'Enterprise Systems',
                description: 'Oversee enterprise systems—ERP, CRM, HRIS, and business applications. Ensure systems work together and serve the business.',
                icon: '🏢',
              },
              {
                title: 'IT Infrastructure',
                description: 'Manage IT infrastructure—cloud, networks, hardware, and end-user computing. Ensure reliability, performance, and security following <a href="https://www.ncsc.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">NCSC guidance</a>.',
                icon: '☁️',
              },
              {
                title: 'IT Governance',
                description: 'Establish IT governance frameworks. Define policies, standards, and processes that ensure IT operates effectively, aligned with <a href="https://www.isaca.org/resources/cobit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">COBIT governance principles</a>.',
                icon: '📋',
              },
              {
                title: 'Vendor Management',
                description: 'Manage technology vendors and contracts. Negotiate deals, oversee implementations, and ensure vendor accountability.',
                icon: '🤝',
              },
              {
                title: 'IT Budget & ROI',
                description: 'Control IT spending and demonstrate ROI. Ensure technology investments deliver business value.',
                icon: '💰',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Timing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire a Fractional CIO?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'IT Holding Back Growth',
                description: 'Systems can\'t scale, processes are manual, and IT is a bottleneck rather than an enabler. Time for strategic IT leadership. Research from <a href="https://www.scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a> shows that technology capabilities are critical for growth.',
                timing: 'Before crisis',
              },
              {
                scenario: 'Digital Transformation',
                description: 'Need to modernise legacy systems, move to cloud, or implement new digital capabilities. Requires experienced leadership to navigate <a href="https://www.ons.gov.uk/businessindustryandtrade/itandinternetindustry" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">digital economy transitions</a>.',
                timing: 'At project inception',
              },
              {
                scenario: 'Scaling Operations',
                description: 'Growing rapidly and need enterprise systems—ERP, CRM, HRIS. Need someone to select, implement, and integrate them.',
                timing: 'Before implementation',
              },
              {
                scenario: 'IT Costs Out of Control',
                description: 'Spending too much on IT with unclear ROI. Need strategic oversight to optimise spend and demonstrate value. <a href="https://www.cipd.org/uk/knowledge/factsheets/hr-business-partnering-factsheet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Strategic business partnering</a> helps align IT spending with business outcomes.',
                timing: 'ASAP',
              },
              {
                scenario: 'Security & Compliance',
                description: 'Need to meet compliance requirements or improve security posture. Requires senior leadership to drive programmes following <a href="https://www.ncsc.gov.uk/collection/10-steps" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">NCSC\'s 10 Steps to Cyber Security</a>.',
                timing: '6+ months before deadlines',
              },
              {
                scenario: 'M&A Integration',
                description: 'Acquiring or merging with companies. Need IT leadership to assess, plan, and execute technology integration. The <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank</a> provides resources for growing businesses navigating acquisitions.',
                timing: 'During due diligence',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional vs Interim vs Full-Time CIO</h2>
          </div>
          <ServiceComparisonTable role="CIO" accentColor="purple" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire a Fractional CIO</h2>
          </div>
          <HireProcessStepper accentColor="purple" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CIO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire a<br /><span className="text-indigo-400">Fractional CIO?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Tell us about your IT challenges and we'll match you with pre-vetted fractional CIOs who have solved them before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors">
              Find a Fractional CIO
            </Link>
            <Link href="/fractional-cio-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CIO Looking for Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related CIO Resources */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Complete IT Leadership Hub</h2>
            <p className="text-gray-600">Explore our comprehensive guides for businesses and IT professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For Businesses</h3>
              <div className="space-y-2">
                <Link href="/fractional-cio-cost" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">CIO Cost Guide</Link>
                <Link href="/fractional-cio-for-startups" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">CIO for Startups</Link>
                <Link href="/fractional-cto-services" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Fractional CTO Services</Link>
                <Link href="/fractional-ciso-services" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Fractional CISO Services</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For IT Professionals</h3>
              <div className="space-y-2">
                <Link href="/fractional-cio-jobs-uk" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">CIO Jobs UK</Link>
                <Link href="/fractional-cio-salary" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">CIO Salary Guide</Link>
                <Link href="/how-to-become-fractional-cio" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Become a Fractional CIO</Link>
                <Link href="/fractional-cto-jobs-uk" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">CTO Jobs UK</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Fractional Roles</h3>
              <div className="space-y-2">
                <Link href="/fractional-cdo-services" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Fractional CDO</Link>
                <Link href="/fractional-cfo-services" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Fractional CFO</Link>
                <Link href="/fractional-coo-services" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Fractional COO</Link>
                <Link href="/fractional-cao-services" className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors">Fractional CAO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
