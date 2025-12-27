import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { FAQPageSchema } from '@/components/FAQPageSchema'
import { WebPageSchema } from '@/components/WebPageSchema'

export const revalidate = 3600

const SECURITY_CONSULTANT_FAQS = [
  {
    question: 'What is a cybersecurity consultant?',
    answer: 'A cybersecurity consultant is an experienced security professional who helps organisations protect their systems, data, and reputation from cyber threats. They bring CISO-level expertise on a flexible basis, helping companies build security programmes without the commitment of a full-time hire.',
  },
  {
    question: 'How much do cybersecurity consultants charge in the UK?',
    answer: 'Cybersecurity consultants in the UK typically charge £600-£1,600 per day depending on experience and specialisation. Senior consultants with CISO-level experience command £1,000-£1,600/day, while specialists charge £600-£900/day.',
  },
  {
    question: 'When should I hire a cybersecurity consultant?',
    answer: 'Hire a cybersecurity consultant when preparing for SOC 2 or ISO 27001 certification, responding to customer security questionnaires, building a security programme, after a breach, preparing for enterprise customers, or meeting investor due diligence requirements.',
  },
  {
    question: 'What is the difference between a cybersecurity consultant and a fractional CISO?',
    answer: 'A cybersecurity consultant typically works on specific projects like assessments or compliance, while a fractional CISO takes ongoing ownership of your security programme. Fractional CISOs are embedded leaders who manage security strategy and team.',
  },
  {
    question: 'Can a cybersecurity consultant help with SOC 2?',
    answer: 'Yes, SOC 2 preparation is one of the most common reasons to hire a cybersecurity consultant. They assess your current state, develop required policies and controls, prepare evidence, and guide you through the audit process.',
  },
  {
    question: 'What certifications should a cybersecurity consultant have?',
    answer: 'Look for consultants with CISSP, CISM, or CISA certifications. For specific areas, OSCP for penetration testing, ISO 27001 Lead Auditor for compliance, or CCSP for cloud security. Experience often matters more than certifications.',
  },
]

export const metadata: Metadata = {
  title: 'Cybersecurity Consultants UK',
  description: 'Hire cybersecurity consultants UK. Fractional security experts for compliance, risk.',
  keywords: 'cybersecurity consultants, hire cybersecurity consultant, fractional security expert, cybersecurity consultant uk, information security consultant, soc 2 consultant',
  alternates: { canonical: 'https://fractional.quest/cybersecurity-consultants' },
  openGraph: {
    title: 'Cybersecurity Consultants UK | Hire Expert Security Advisors',
    description: 'Find experienced cybersecurity consultants for compliance, risk, and security programmes.',
    url: 'https://fractional.quest/cybersecurity-consultants',
  },
}

export default function CybersecurityConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Cybersecurity Consultants UK"
        description="Hire cybersecurity consultants for compliance, risk management, and security programmes"
        url="https://fractional.quest/cybersecurity-consultants"
        dateModified={new Date()}
      />
      <FAQPageSchema faqs={SECURITY_CONSULTANT_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1920&q=80"
            alt="Cybersecurity consultant protecting business systems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-slate-900/85"></div>
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-red-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Expert Advisory</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Cybersecurity<br /><span className="text-red-400">Consultants UK</span></h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                Hire experienced cybersecurity consultants on a fractional basis. Get expert security guidance, compliance support, and risk management without the cost of a full-time security team.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-red-400">£600-1.6k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Day</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">SOC 2</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Expertise</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">Find a Consultant</Link>
                <Link href="/fractional-ciso-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Fractional CISO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Cybersecurity Consultants Do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Cybersecurity Consultants Do</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Cybersecurity consultants</strong> help organisations protect their systems, data, and reputation from cyber threats. On a fractional basis, they bring CISO-level expertise without the full-time commitment—following standards from the <a href="https://www.ncsc.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">National Cyber Security Centre (NCSC)</a>.
            </p>
            <p>
              Unlike permanent hires, cybersecurity consultants work with multiple clients, bringing diverse experience across threat landscapes and compliance frameworks. According to <a href="https://www.cyberessentials.ncsc.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">Cyber Essentials</a>, UK businesses face increasing security requirements from customers and regulators.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-red-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Great cybersecurity consultants make security a business enabler, not a blocker—protecting without slowing you down."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Security Assessments', description: 'Evaluate your security posture, identify vulnerabilities, and prioritise remediation based on actual risk.' },
              { title: 'Compliance Support', description: 'Achieve SOC 2, ISO 27001, PCI-DSS, GDPR, Cyber Essentials, and other security certifications.' },
              { title: 'Incident Response', description: 'Prepare for and respond to security incidents with proven methodologies and playbooks.' },
              { title: 'Security Architecture', description: 'Design secure systems, networks, cloud infrastructure, and application security controls.' },
              { title: 'Penetration Testing', description: 'Test your defences with authorised simulated attacks and vulnerability assessments.' },
              { title: 'Security Training', description: 'Educate your team on security awareness, phishing, and secure development practices.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Compliance</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Compliance Frameworks We Support</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'SOC 2', description: 'Type I & II' },
              { name: 'ISO 27001', description: 'Certification' },
              { name: 'GDPR', description: 'Data Protection' },
              { name: 'Cyber Essentials', description: 'UK Standard' },
              { name: 'PCI-DSS', description: 'Payment Security' },
              { name: 'HIPAA', description: 'Healthcare' },
              { name: 'NIST', description: 'Framework' },
              { name: 'FCA', description: 'Financial Services' },
            ].map((cert, index) => (
              <div key={index} className="bg-white p-4 text-center border border-gray-200 rounded-lg">
                <div className="font-black text-gray-900">{cert.name}</div>
                <div className="text-xs text-gray-500">{cert.description}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire a Cybersecurity Consultant</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'Compliance Certification', description: 'Preparing for SOC 2, ISO 27001, or other security certifications.', timing: '6-9 months before audit' },
              { scenario: 'Security Questionnaires', description: 'Enterprise customers asking about security and blocking deals.', timing: 'Before you lose deals' },
              { scenario: 'Building Security Programme', description: 'Creating security policies, controls, and processes from scratch.', timing: '3-6 month engagement' },
              { scenario: 'Post-Incident Review', description: 'After a breach or near-miss, need to assess and remediate.', timing: 'Immediately' },
              { scenario: 'Enterprise Sales', description: 'Security requirements blocking enterprise customer acquisition.', timing: 'Before sales cycle' },
              { scenario: 'Due Diligence', description: 'Investors or acquirers asking about security posture.', timing: '2-3 months before raise' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Cybersecurity Consultant Rates UK</h2>
            <p className="text-gray-600 mt-4">Typical daily rates for cybersecurity consultants in the UK market</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Specialist</div>
              <div className="text-3xl font-black text-gray-900">£600-800</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">5-8 years, technical focus</p>
            </div>
            <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-center">
              <div className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">Senior</div>
              <div className="text-3xl font-black text-gray-900">£800-1,200</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">10-15 years, compliance lead</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">CISO-Level</div>
              <div className="text-3xl font-black text-gray-900">£1,200-1,600</div>
              <div className="text-xs text-gray-500">per day</div>
              <p className="text-sm text-gray-600 mt-4">15+ years, strategic security</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            Rates based on <a href="https://www.isc2.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">(ISC)²</a> salary surveys and our network experience.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={SECURITY_CONSULTANT_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Find a Cybersecurity<br /><span className="text-red-400">Consultant</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tell us about your security challenges and we'll match you with experienced cybersecurity consultants who have solved them before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">Get Started</Link>
            <Link href="/fractional-ciso-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-colors">Explore Fractional CISO</Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Related Security Resources</h2>
            <p className="text-gray-600">Explore more security leadership options</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Security Leadership</h3>
              <div className="space-y-2">
                <Link href="/fractional-ciso" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">What is a Fractional CISO?</Link>
                <Link href="/fractional-ciso-services" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">Fractional CISO Services</Link>
                <Link href="/fractional-security" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">Security Hub</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Find Jobs</h3>
              <div className="space-y-2">
                <Link href="/fractional-ciso-jobs-uk" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">Fractional CISO Jobs</Link>
                <Link href="/fractional-dpo-jobs-uk" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">DPO Jobs</Link>
                <Link href="/fractional-compliance-jobs-uk" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">Compliance Jobs</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Other Consultants</h3>
              <div className="space-y-2">
                <Link href="/technology-consultants" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">Technology Consultants</Link>
                <Link href="/finance-consultants" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">Finance Consultants</Link>
                <Link href="/operations-consultants" className="block text-gray-700 hover:text-red-600 font-medium transition-colors">Operations Consultants</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
