import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, CTO_SERVICE_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CTO Services UK',
  description: 'Hire a Fractional CTO. Architecture, team building, technical strategy.',
  keywords: 'fractional cto, fractional cto services, hire fractional cto, part time cto, fractional chief technology officer, fractional cto uk, fractional tech lead',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cto-services',
  },
  openGraph: {
    title: 'Fractional CTO Services UK | Hire a Part-Time CTO',
    description: 'Hire a Fractional CTO for your business. Senior technical leadership at a fraction of full-time cost.',
    images: ['/images/fractional-cto-services.jpg'],
    url: 'https://fractional.quest/fractional-cto-services',
  },
}

export default function FractionalCTOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema for SEO */}
      <WebPageSchema
        title="Fractional CTO Services UK"
        description="Hire a Fractional CTO for your business"
        url="https://fractional.quest/fractional-cto-services"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={CTO_SERVICE_FAQS} />
      {/* Hero Section with Aspirational Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700/90 via-blue-600/80 to-teal-500/60" />
        </div>
        <div className="relative z-10 w-full py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight
              items={getRoleBreadcrumbs('cto', 'services')}
              className="mb-6"
            />
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Technical Leadership
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fractional CTO Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Hire a Fractional CTO to lead your technology. Senior technical leadership, architecture expertise, and engineering strategy—at a fraction of full-time cost.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">55%</div>
                  <div className="text-white/80 text-sm">Cost Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">1-3</div>
                  <div className="text-white/80 text-sm">Days/Week</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <div className="text-3xl font-bold text-white">15+ Yrs</div>
                  <div className="text-white/80 text-sm">Experience</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Hire a Fractional CTO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Calculate Savings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CTO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CTO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional CTO</strong> is an experienced Chief Technology Officer who works with your company on a part-time basis—typically 1-3 days per week. You get the technical leadership, architecture expertise, and engineering strategy of a senior CTO without the commitment and cost of a full-time hire. This <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexible working arrangement</a> benefits both businesses and professionals.
            </p>
            <p>
              Unlike technical consultants who advise on specific problems, a fractional CTO becomes your technology leader. They make architecture decisions, lead your engineering team, set technical strategy, and take ownership of your technology—just not five days a week.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Companies access CTO expertise for £3,500-£6,500 per week instead of £15,000+ monthly for a full-time CTO."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CTO vs Technical Consultant</h3>
            <p>
              A technical consultant gives advice on specific problems—they might review your architecture, assess technical debt, or recommend a technology stack. But they don't take ongoing ownership or lead your team. As <a href="https://technation.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">TechNation research</a> shows, UK tech companies increasingly need strategic technical leadership, not just project-based consulting.
            </p>
            <p>
              A fractional CTO is an embedded leader. They're accountable for technical outcomes, make decisions (not just recommendations), mentor your engineers, and represent technology to your board and investors. With UK government support for <a href="https://www.ukri.org/councils/innovate-uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">innovation and R&D</a>, fractional CTOs help companies access funding and navigate <a href="https://www.ncsc.gov.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">cyber security requirements</a>. They're part of your leadership team.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional CTO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Core responsibilities your fractional CTO will own</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Technical Strategy</h3>
              <p className="text-gray-600 text-sm">Define technical vision and roadmap aligned with business goals. Make build vs buy decisions, choose technology stack, and plan for scale.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="font-bold text-gray-900 mb-2">Architecture & Design</h3>
              <p className="text-gray-600 text-sm">Design scalable, secure, maintainable architecture. Review technical decisions, address technical debt, and ensure systems can handle growth.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold text-gray-900 mb-2">Engineering Leadership</h3>
              <p className="text-gray-600 text-sm">Lead and mentor your engineering team. Set standards, improve processes, conduct code reviews, and build engineering culture. <a href="https://www.bcs.org/membership/chartered-it-professional-citp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Professional development</a> is key.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="font-bold text-gray-900 mb-2">Technical Hiring</h3>
              <p className="text-gray-600 text-sm">Hire key engineering roles. Define job specs, conduct technical interviews, assess candidates, and build the team you need.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600 text-sm">Ensure systems are secure and compliant. Implement <a href="https://www.ncsc.gov.uk/collection/10-steps" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">security best practices</a>, manage risks, and prepare for audits.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="font-bold text-gray-900 mb-2">Technical Due Diligence</h3>
              <p className="text-gray-600 text-sm">Represent technology to investors and acquirers. Prepare for technical DD, address concerns, and provide credibility.</p>
            </div>
            <div className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="font-bold text-gray-900 mb-2">Vendor & Tools</h3>
              <p className="text-gray-600 text-sm">Select and manage technology vendors. Evaluate tools, negotiate contracts, and ensure you're getting value from tech spend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire a Fractional CTO?</h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-500">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-600">55%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Cost Savings</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Cost Efficiency</h3>
                <p className="text-gray-600">Access CTO-level expertise at 40-60% less than a full-time hire. Pay only for the time you need—typically £85,000-£160,000 per year versus £250,000+ for full-time. This aligns with <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">modern employment trends</a>.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-500">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-600">15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Experienced Leadership</h3>
                <p className="text-gray-600">Get a CTO with 15-20+ years of experience who has built and scaled systems before. No learning on the job—they've seen your challenges already.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-500">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-600">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">DD Ready</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Investor Credibility</h3>
                <p className="text-gray-600">Investors want to see experienced technical leadership. A fractional CTO provides the credibility and can handle technical due diligence. The <a href="https://www.bvca.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">British Venture Capital Association</a> emphasises the importance of strong leadership teams.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-500">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-600">1-5</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Days/Week Flex</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Flexibility</h3>
                <p className="text-gray-600">Scale up for major releases or architecture work, scale down during steady periods. Engagements flex with your needs.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-500">
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-blue-600">5+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Companies Seen</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Broad Expertise</h3>
                <p className="text-gray-600">Fractional CTOs work across multiple companies and tech stacks. They bring diverse experience and modern best practices, crucial for <a href="https://scaleupinstitute.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">scaling UK businesses</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Timing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire a Fractional CTO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none mb-8">
            <p>
              The right time to hire a fractional CTO depends on your technical needs and company stage. Here are the most common scenarios:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Building First Product</h3>
              <p className="text-gray-600 text-sm mb-3">You're a non-technical founder building your first product. You need someone to set the technical direction and oversee development.</p>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">Before development starts</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Preparing for Fundraising</h3>
              <p className="text-gray-600 text-sm mb-3">Investors will want to talk to your technical leader. A fractional CTO provides credibility and handles technical due diligence. <a href="https://www.british-business-bank.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Access to finance</a> often requires strong governance.</p>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">3-6 months before raise</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Scaling Engineering Team</h3>
              <p className="text-gray-600 text-sm mb-3">You're growing from 2-3 developers to 10+. You need senior leadership to structure the team, set processes, and maintain quality. <a href="https://www.cipd.org/uk/knowledge/guides/hr-practices-knowledge-economy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">People management best practices</a> are essential.</p>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">When team exceeds 5</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Technical Debt Crisis</h3>
              <p className="text-gray-600 text-sm mb-3">Your system is struggling under its own weight. You need experienced leadership to diagnose problems and plan the path forward.</p>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">Before it's too late</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Architecture Evolution</h3>
              <p className="text-gray-600 text-sm mb-3">You need to re-architect for scale, migrate to cloud, or modernise legacy systems. These decisions need senior technical leadership.</p>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">At project inception</span>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600 text-sm mb-3">You need to achieve SOC 2, ISO 27001, or other certifications. A fractional CTO can lead the security programme in line with <a href="https://www.techuk.org/what-we-deliver/networks/cyber-security.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK cyber security standards</a>.</p>
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">6 months before audit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Calculator</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does a Fractional CTO Cost?</h2>
            <p className="text-gray-600 mt-4">Compare the cost of fractional vs full-time CTO</p>
          </div>
          <RoleCalculator role="cto" />
          <div className="mt-8 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">Typical Fractional CTO Pricing</h3>
            <ul className="text-gray-600">
              <li><strong>Day Rate:</strong> £850-£1,600 per day (depending on experience and specialisation)</li>
              <li><strong>Monthly Retainer:</strong> £3,500-£6,500 for 1-2 days per week</li>
              <li><strong>Annual Cost:</strong> £85,000-£160,000 (vs £250,000+ for full-time)</li>
            </ul>
            <p className="text-sm text-gray-500">
              Pricing varies based on the CTO's experience, your technology stack, and complexity.
              Specialist expertise (AI/ML, security, specific languages) may command premium rates.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional vs Interim vs Full-Time CTO</h2>
            <p className="text-gray-600 mt-4">Choose the right model for your needs</p>
          </div>
          <ServiceComparisonTable role="CTO" accentColor="blue" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire a Fractional CTO</h2>
            <p className="text-gray-600 mt-4">From first conversation to start date in as little as 2 weeks</p>
          </div>
          <HireProcessStepper accentColor="blue" />
          <div className="mt-12 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">What to Look For</h3>
            <ul className="text-gray-600">
              <li><strong>Relevant Stack:</strong> Have they built systems with your technology stack?</li>
              <li><strong>Scale Experience:</strong> Have they scaled systems and teams at companies like yours?</li>
              <li><strong>Leadership Skills:</strong> Can they lead engineers, not just write code? <a href="https://www.iod.com/professional-development/leadership/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Leadership competencies</a> matter.</li>
              <li><strong>Communication:</strong> Can they translate technical concepts for non-technical stakeholders?</li>
              <li><strong>Strategic Thinking:</strong> Do they think about technology in terms of business outcomes?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Specialisations</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CTOs by Expertise</h2>
            <p className="text-gray-600 mt-4">Specialists with deep technical experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/fractional-jobs-tech" className="block bg-white p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 text-sm">MLOps, model deployment, AI product development, data infrastructure</p>
            </Link>
            <Link href="/fractional-jobs-tech" className="block bg-white p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600 text-sm">AWS/GCP/Azure, infrastructure as code, CI/CD, platform engineering</p>
            </Link>
            <Link href="/fractional-jobs-tech" className="block bg-white p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600 text-sm">SOC 2, ISO 27001, penetration testing, security architecture</p>
            </Link>
            <Link href="/fractional-jobs-finance" className="block bg-white p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">FinTech</h3>
              <p className="text-gray-600 text-sm">Payment systems, FCA compliance, financial APIs, security requirements</p>
            </Link>
            <Link href="/fractional-jobs-saas" className="block bg-white p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">B2B SaaS</h3>
              <p className="text-gray-600 text-sm">Multi-tenant architecture, API design, integration platforms, enterprise features</p>
            </Link>
            <Link href="/fractional-jobs-healthcare" className="block bg-white p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              <h3 className="font-bold text-gray-900 mb-2">HealthTech</h3>
              <p className="text-gray-600 text-sm">HIPAA compliance, NHS integration, clinical systems, health data</p>
            </Link>
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
          <FAQ skipSchema={true} items={CTO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire a<br /><span className="text-blue-400">Fractional CTO?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Tell us about your technical challenges and we'll match you with pre-vetted fractional CTOs who have solved them before. Start conversations within 48 hours. Join thousands of <a href="https://www.gov.uk/business-support-helpline" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">UK businesses accessing flexible expertise</a>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
              Find a Fractional CTO
            </Link>
            <Link href="/fractional-cto-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CTO Looking for Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related CTO Resources */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Complete Technology Leadership Hub</h2>
            <p className="text-gray-600">Explore our comprehensive guides for businesses and technology professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For Businesses</h3>
              <div className="space-y-2">
                <Link href="/fractional-cto-cost" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CTO Cost Guide</Link>
                <Link href="/fractional-cto-for-startups" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CTO for Startups</Link>
                <Link href="/fractional-cio-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CIO Services</Link>
                <Link href="/fractional-ciso-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CISO Services</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For Technology Professionals</h3>
              <div className="space-y-2">
                <Link href="/fractional-cto-jobs-uk" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CTO Jobs UK</Link>
                <Link href="/fractional-cto-salary" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">CTO Salary Guide</Link>
                <Link href="/how-to-become-fractional-cto" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Become a Fractional CTO</Link>
                <Link href="/fractional-cto-jobs-remote" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Remote CTO Jobs</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Fractional Roles</h3>
              <div className="space-y-2">
                <Link href="/fractional-cfo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CFO</Link>
                <Link href="/fractional-cmo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CMO</Link>
                <Link href="/fractional-coo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional COO</Link>
                <Link href="/fractional-cpo-services" className="block text-gray-700 hover:text-blue-600 font-medium transition-colors">Fractional CPO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
