import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { FAQPageSchema } from '@/components/FAQPageSchema'

export const revalidate = 3600

const CRO_SERVICE_FAQS = [
  {
    question: 'What is a Fractional CRO?',
    answer: 'A Fractional CRO (Chief Revenue Officer) is an experienced revenue leader who works with your company part-time, typically 1-3 days per week. This <a href="https://www.cipd.org/uk/knowledge/factsheets/flexible-working-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working model</a> gives you strategic revenue leadership across sales, marketing, and customer success without the cost of a full-time executive.',
  },
  {
    question: 'When should my company hire a Fractional CRO?',
    answer: 'Consider hiring a fractional CRO when: sales and marketing are misaligned; you\'re struggling to scale revenue predictably; you need to professionalise your go-to-market; you\'re preparing for fundraising and need revenue credibility; or you\'re transitioning to a new revenue model.',
  },
  {
    question: 'How much does a Fractional CRO cost?',
    answer: 'Fractional CROs typically charge £900-£1,500 per day in the UK. At 2 days per week, this translates to roughly £90,000-£150,000 annually—compared to £200,000-£300,000+ for a full-time CRO. This pricing structure offers significant <a href="https://www.cim.co.uk/membership/professional-marketing-standards/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">professional-level expertise</a> at a fraction of the cost.',
  },
  {
    question: 'What does a Fractional CRO do?',
    answer: 'A Fractional CRO aligns sales, marketing, and customer success; develops revenue strategy; builds go-to-market playbooks; implements revenue operations; manages pipeline and forecasting; and drives predictable revenue growth.',
  },
  {
    question: 'How is a CRO different from a VP of Sales?',
    answer: 'A VP of Sales focuses on the sales team and closing deals. A CRO has broader responsibility across the entire revenue engine—sales, marketing, customer success, and revenue operations. They optimise the full customer journey, not just the sales process.',
  },
  {
    question: 'Can a Fractional CRO help with sales and marketing alignment?',
    answer: 'Yes—alignment is one of the primary reasons to hire a fractional CRO. Following <a href="https://www.scaleupinstitute.org.uk/scaling-insights/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scaleup best practices</a>, they create shared metrics, unified processes, and collaborative structures that ensure sales and marketing work together effectively to drive revenue.',
  },
]

export const metadata: Metadata = {
  title: 'Fractional CRO Services UK',
  description: 'Hire a Fractional CRO. Go-to-market strategy, sales leadership, revenue growth.',
  keywords: 'fractional cro, fractional cro services, hire fractional cro, part time cro, fractional chief revenue officer, fractional cro uk, fractional revenue director',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cro-services',
  },
  openGraph: {
    title: 'Fractional CRO Services UK | Hire a Part-Time Chief Revenue Officer',
    description: 'Hire a Fractional CRO for your business. Senior revenue leadership at a fraction of full-time cost.',
    images: ['/images/fractional-cro-services.jpg'],
    url: 'https://fractional.quest/fractional-cro-services',
  },
}

export default function FractionalCROServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for rich snippets */}
      <FAQPageSchema faqs={CRO_SERVICE_FAQS} />
      {/* Hero Section with Unsplash Image */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1920&q=80"
            alt="Business collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-700/85" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight items={getRoleBreadcrumbs('cro', 'services')} className="mb-8" />
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Revenue Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CRO<br />
                <span className="text-blue-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional CRO</strong> to accelerate your revenue.
                Senior revenue leadership across sales, marketing, and customer success—at a fraction of full-time cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400">50%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Cost Savings</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">2x</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Revenue Growth</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
                  Hire a Fractional CRO
                </Link>
                <Link href="#responsibilities" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CRO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CRO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional CRO</strong> (Chief Revenue Officer) is an experienced revenue executive who works with your company on a part-time basis—typically 1-3 days per week. This <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangement</a> gives you strategic leadership across your entire revenue engine—sales, marketing, and customer success—without the commitment and cost of a full-time hire.
            </p>
            <p>
              Unlike a VP of Sales who focuses only on selling, a fractional CRO takes a holistic view of revenue. They align all customer-facing functions, optimise the full buyer journey, and build the systems for predictable, scalable revenue growth. Applying insights from <a href="https://hbr.org/topic/subject/sales" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Harvard Business Review</a> research and <a href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">McKinsey growth insights</a>, they bring proven revenue methodologies to growing companies.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "A fractional CRO connects the dots between marketing, sales, and customer success to create a true revenue machine."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Beyond Siloed Sales and Marketing</h3>
            <p>
              In many companies, sales and marketing operate as separate functions with different goals and metrics. This creates friction, blame games, and leaked revenue. A fractional CRO breaks down these silos, creating unified revenue operations that drive predictable growth. Drawing on <a href="https://www.cim.co.uk/content-hub/reports/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Chartered Institute of Marketing research</a> and best practices from the <a href="https://www.iod.com/news/business-strategy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a>, they implement the revenue operations that scale efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section id="responsibilities" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional CRO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Core responsibilities your fractional CRO will own</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Revenue Strategy',
                description: 'Develop comprehensive revenue strategy aligned with UK business growth patterns. Define go-to-market approach, pricing, packaging, and the path to revenue targets.',
                icon: '🎯',
              },
              {
                title: 'Sales & Marketing Alignment',
                description: 'Break down silos between sales and marketing. Create shared metrics, unified processes, and collaborative culture.',
                icon: '🤝',
              },
              {
                title: 'Revenue Operations',
                description: 'Build RevOps infrastructure—CRM, automation, reporting, and processes that enable predictable revenue.',
                icon: '⚙️',
              },
              {
                title: 'Pipeline Management',
                description: 'Implement pipeline discipline. Create forecasting processes, deal reviews, and the visibility needed to hit targets.',
                icon: '📊',
              },
              {
                title: 'Go-to-Market Playbooks',
                description: 'Develop repeatable GTM playbooks—sales processes, marketing campaigns, and customer success motions that scale.',
                icon: '📋',
              },
              {
                title: 'Team Leadership',
                description: 'Lead and develop revenue teams across sales, marketing, and customer success following <a href="https://www.cipd.org/uk/knowledge/guides/leadership-development/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD leadership best practices</a>. Hire key roles and build capability.',
                icon: '👥',
              },
              {
                title: 'Customer Success',
                description: 'Ensure customer success drives expansion revenue. Build retention and upsell motions that maximise customer lifetime value.',
                icon: '❤️',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire a Fractional CRO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Unified Revenue Leadership',
                description: 'Get one leader accountable for the entire revenue engine. No more finger-pointing between sales and marketing—just aligned growth.',
                stat: '1',
                statLabel: 'Revenue Leader',
              },
              {
                title: 'Cost Efficiency',
                description: 'Access CRO-level expertise at 40-60% less than a full-time hire. This flexible approach aligns with <a href="https://www.gov.uk/business-support-helpline" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK business efficiency guidelines</a>. Pay only for the time you need—typically £90,000-£150,000 per year versus £250,000+ for full-time.',
                stat: '50%',
                statLabel: 'Cost Savings',
              },
              {
                title: 'Faster Revenue Growth',
                description: 'Fractional CROs have scaled revenue before, often working with <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK scaleup companies</a>. They know what works, can avoid common mistakes, and accelerate your path to targets.',
                stat: '2x',
                statLabel: 'Revenue Growth',
              },
              {
                title: 'Predictable Pipeline',
                description: 'Build the systems and processes for predictable revenue. Know what\'s coming, forecast accurately, and hit targets consistently.',
                stat: '95%',
                statLabel: 'Forecast Accuracy',
              },
              {
                title: 'Proven Playbooks',
                description: 'Fractional CROs bring playbooks from multiple companies. They know what GTM motions work for businesses like yours.',
                stat: '10+',
                statLabel: 'GTM Playbooks',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-500">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-blue-600">{benefit.stat}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{benefit.statLabel}</div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Timing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire a Fractional CRO?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'Sales & Marketing Misalignment',
                description: 'Sales blames marketing for bad leads. Marketing blames sales for not closing. You need someone to align both functions around revenue.',
                timing: 'Before it gets worse',
              },
              {
                scenario: 'Unpredictable Revenue',
                description: 'You\'re missing forecasts, pipeline is chaotic, and you don\'t know if you\'ll hit targets. Time for revenue discipline.',
                timing: 'ASAP',
              },
              {
                scenario: 'Scaling Go-to-Market',
                description: 'You\'ve found PMF and need to scale revenue, similar to successful <a href="https://www.british-business-bank.co.uk/case-studies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Business Bank portfolio companies</a>. Time to professionalise GTM with proven playbooks and processes.',
                timing: 'Post-PMF',
              },
              {
                scenario: 'Preparing for Fundraising',
                description: 'Investors, including <a href="https://www.bvca.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">BVCA members</a>, want to see strong revenue leadership and predictable growth. A fractional CRO provides credibility and structure.',
                timing: '3-6 months before raise',
              },
              {
                scenario: 'New Market Entry',
                description: 'Launching into new segments or geographies. Need strategic revenue leadership to develop and execute GTM.',
                timing: 'At strategy phase',
              },
              {
                scenario: 'Transition Between Revenue Models',
                description: 'Moving from founder-led sales to a sales team, or from outbound to inbound, or enterprise to PLG.',
                timing: 'Before the transition',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does a Fractional CRO Cost?</h2>
            <p className="text-gray-600 mt-4">Compare the cost of fractional vs full-time CRO</p>
          </div>
          <RoleCalculator role="cro" />
          <div className="mt-8 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">Typical Fractional CRO Pricing</h3>
            <ul className="text-gray-600">
              <li><strong>Day Rate:</strong> £900-£1,500 per day (depending on experience and specialisation)</li>
              <li><strong>Monthly Retainer:</strong> £4,000-£6,500 for 1-2 days per week</li>
              <li><strong>Annual Cost:</strong> £90,000-£150,000 (vs £250,000+ for full-time, based on <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ONS earnings data</a>)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional vs Interim vs Full-Time CRO</h2>
          </div>
          <ServiceComparisonTable role="CRO" accentColor="emerald" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire a Fractional CRO</h2>
          </div>
          <HireProcessStepper accentColor="emerald" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={CRO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire a<br /><span className="text-blue-400">Fractional CRO?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Tell us about your revenue challenges and we'll match you with pre-vetted fractional CROs who have solved them before. Our professionals bring experience from <a href="https://www.iod.com/membership/director-development/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">director-level positions</a> across multiple industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-blue-500 text-black font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
              Find a Fractional CRO
            </Link>
            <Link href="/fractional-cro-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CRO Looking for Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related CRO Resources */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Complete Revenue Leadership Hub</h2>
            <p className="text-gray-600">Explore our comprehensive guides for businesses and revenue professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For Businesses</h3>
              <div className="space-y-2">
                <Link href="/fractional-cro-cost" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CRO Cost Guide</Link>
                <Link href="/fractional-cro-for-startups" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CRO for Startups</Link>
                <Link href="/fractional-cso-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Chief Sales Officer Services</Link>
                <Link href="/fractional-cmo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CMO Services</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For Revenue Professionals</h3>
              <div className="space-y-2">
                <Link href="/fractional-cro-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CRO Jobs UK</Link>
                <Link href="/fractional-cro-salary" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CRO Salary Guide</Link>
                <Link href="/how-to-become-fractional-cro" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Become a Fractional CRO</Link>
                <Link href="/fractional-cmo-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CMO Jobs UK</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Fractional Roles</h3>
              <div className="space-y-2">
                <Link href="/fractional-cfo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CFO</Link>
                <Link href="/fractional-coo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional COO</Link>
                <Link href="/fractional-cto-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CTO</Link>
                <Link href="/fractional-chro-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CHRO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
