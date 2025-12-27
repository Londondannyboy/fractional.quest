import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Become a Compliance Officer UK',
  description: 'How to become a fractional compliance officer. Qualifications, experience, finding clients.',
  keywords: 'how to become fractional compliance officer, fractional compliance career, compliance consultant career, start compliance consultancy, smf16 career, compliance freelance',
  alternates: {
    canonical: 'https://fractional.quest/how-to-become-fractional-compliance-officer',
  },
  openGraph: {
    title: 'How to Become a Fractional Compliance Officer UK | Career Guide',
    description: 'Step-by-step guide to becoming a fractional compliance officer. Qualifications, experience, setup, and finding clients.',
    url: 'https://fractional.quest/how-to-become-fractional-compliance-officer',
  },
}

const CAREER_FAQS = [
  {
    question: 'How much experience do I need to become a fractional compliance officer?',
    answer: 'Most fractional compliance officers have 10-15+ years of compliance experience in FCA-regulated firms, including 3-5+ years in senior compliance roles (Head of Compliance, CCO, or senior manager level). For SMF16/SMF17 roles, you typically need prior FCA approval history. Consultancy roles without SMF accountability may accept 8-10 years experience.'
  },
  {
    question: 'What qualifications do fractional compliance officers need?',
    answer: 'Common qualifications include <a href="https://www.int-comp.org/qualifications/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICA (International Compliance Association)</a> Certificate or Diploma, <a href="https://www.cisi.org/cisiweb2/cisi-website/study-with-us/professional-qualifications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CISI Diploma in Investment Compliance</a>, and/or legal qualifications (solicitor/barrister). While not mandatory, these demonstrate professional competence. More important is practical experience and track record in <a href="https://www.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA</a>-regulated environments.'
  },
  {
    question: 'How much can I earn as a fractional compliance officer?',
    answer: 'Fractional compliance officers earn £800-£1,500 per day, depending on seniority and SMF accountability. Working 3 days per week across clients, annual earnings range from £115,000-£230,000. Most start with 1-2 clients and build to 3-4, optimising for income while maintaining quality.'
  },
  {
    question: 'Do I need professional indemnity insurance?',
    answer: 'Yes, professional indemnity (PI) insurance is essential. Most clients require £1-2 million minimum cover. PI insurance protects against claims arising from professional advice. Expect to pay £1,500-£4,000 annually depending on coverage level and claims history.'
  },
  {
    question: 'Should I set up a limited company?',
    answer: 'Most fractional compliance officers operate through limited companies for tax efficiency and liability protection. Ltd company structure allows dividend payments, pension contributions, and expense deductions. You can <a href="https://www.gov.uk/set-up-limited-company" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">register via Companies House</a>. However, consider <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35</a> implications—many engagements may be caught by IR35, particularly SMF roles.'
  },
  {
    question: 'How do I find my first fractional compliance clients?',
    answer: 'First clients typically come from: your professional network (former colleagues, clients, contacts), compliance consultancies seeking associate capacity, recruitment agencies with interim/contract desks, LinkedIn outreach and content, referrals from lawyers and accountants serving FinTech, and direct approaches to newly authorised firms (check the <a href="https://www.fca.org.uk/firms/financial-services-register" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA register</a>).'
  }
]

const careerSteps = [
  {
    step: 1,
    title: 'Build Your Foundation',
    desc: 'Develop the experience and credentials needed for fractional work',
    items: [
      'Accumulate 10-15+ years compliance experience in FCA-regulated firms',
      'Obtain FCA SMF approval (SMF16 or SMF17) at least once',
      'Gain ICA qualifications (Certificate, Diploma) or CISI credentials',
      'Develop sector expertise (FinTech, payments, investment, crypto)',
      'Build a track record of successful compliance outcomes'
    ]
  },
  {
    step: 2,
    title: 'Develop Your Specialism',
    desc: 'Focus on high-demand areas where you can command premium rates',
    items: [
      'Consumer Duty implementation and ongoing compliance',
      'Crypto and digital assets AML/KYC',
      'Payments and e-money (EMI/PI) compliance',
      'FCA authorisation support',
      'Operational resilience and third-party risk',
      'Client assets (CASS) compliance'
    ]
  },
  {
    step: 3,
    title: 'Set Up Your Business',
    desc: 'Establish the legal and administrative infrastructure',
    items: [
      'Incorporate a limited company (or assess sole trader option)',
      'Register for VAT (if expecting £90k+ turnover)',
      'Obtain professional indemnity insurance (£1-2m minimum)',
      'Set up business banking and accounting',
      'Develop standard engagement terms and contracts',
      'Understand IR35 and determine your likely status'
    ]
  },
  {
    step: 4,
    title: 'Build Your Network',
    desc: 'Create referral relationships and visibility',
    items: [
      'Update LinkedIn profile for fractional compliance positioning',
      'Connect with compliance recruiters (Bruin, Robert Walters, etc.)',
      'Approach compliance consultancies for associate work',
      'Network with lawyers and accountants serving FinTech',
      'Join ICA, CISI, and compliance professional networks',
      'Consider speaking at events or writing articles'
    ]
  },
  {
    step: 5,
    title: 'Find Your First Clients',
    desc: 'Secure initial engagements to build your portfolio',
    items: [
      'Reach out to former colleagues and contacts',
      'Register with compliance interim recruiters',
      'Approach newly FCA-authorised firms (check FCA register)',
      'Offer to sub-contract for established consultancies',
      'Consider one client while still employed (if permitted)',
      'Start at competitive rates to build track record'
    ]
  },
  {
    step: 6,
    title: 'Scale and Optimise',
    desc: 'Build a sustainable portfolio career',
    items: [
      'Gradually increase day rates as demand builds',
      'Target 2-4 concurrent clients for income stability',
      'Balance SMF roles with advisory work for flexibility',
      'Develop recurring retainer relationships',
      'Consider building a small team or associate network',
      'Invest in CPD and staying current with regulatory change'
    ]
  }
]

export default function HowToBecomeFractionalComplianceOfficerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="How to become a fractional compliance officer - career development in regulatory compliance"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/90 to-slate-900/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-purple-300/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <span className="inline-block bg-purple-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Career Guide
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            How to Become a<br />
            <span className="text-purple-400">Fractional Compliance Officer</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100/80 leading-relaxed max-w-3xl mb-8">
            Step-by-step guide to building a career as a <strong className="text-white">fractional compliance officer</strong> in the UK.
            Qualifications, experience, setting up, finding clients, and pricing.
          </p>
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-purple-400">&pound;150k+</div>
              <div className="text-purple-200/60 text-sm uppercase tracking-wider">Earning Potential</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">10+</div>
              <div className="text-purple-200/60 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">2-4</div>
              <div className="text-purple-200/60 text-sm uppercase tracking-wider">Clients Typical</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              <strong className="text-slate-900">Becoming a fractional compliance officer</strong> offers experienced
              compliance professionals the opportunity to build a portfolio career with higher earning potential,
              greater flexibility, and exposure to diverse clients and sectors.
            </p>

            <p>
              The UK market for fractional compliance has grown significantly, driven by FinTech expansion (supported by initiatives like the <a href="https://www.scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ScaleUp Institute</a>),
              regulatory complexity, and cost pressures on regulated firms. For compliance professionals with
              the right experience and credentials, fractional work can be both financially rewarding and
              professionally fulfilling.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 not-prose">
              <p className="text-lg font-semibold text-slate-900 mb-2">Is Fractional Compliance Right for You?</p>
              <p className="text-slate-700">
                Fractional work suits self-motivated professionals comfortable with business development,
                variable income, and managing multiple client relationships. Leadership resources from the <a href="https://www.iod.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute of Directors</a> can help develop these skills. It's less suited to those who
                prefer job security, employer-provided benefits, and deep integration with a single organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Step-by-Step: Becoming a Fractional Compliance Officer
            </h2>
          </div>

          <div className="space-y-8">
            {careerSteps.map((step) => (
              <div key={step.step} className="bg-white border border-slate-200 p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white font-black text-xl rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start">
                          <span className="text-purple-500 mr-2">&bull;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Credentials</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Qualifications and Experience</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Essential Experience</h3>
            <ul className="space-y-2">
              <li><strong>10-15+ years</strong> compliance experience in FCA-regulated firms</li>
              <li><strong>3-5+ years</strong> in senior compliance roles (Head of, CCO, Senior Manager)</li>
              <li>Direct experience with <a href="https://www.fca.org.uk/firms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA regulatory requirements</a> and interaction</li>
              <li>Previous <strong>SMF approval</strong> (SMF16 or SMF17) highly valued</li>
              <li>Experience building compliance frameworks and leading teams</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Professional Qualifications</h3>
            <p>While not mandatory, these qualifications enhance credibility:</p>
            <ul className="space-y-2">
              <li><strong><a href="https://www.int-comp.org/qualifications/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICA qualifications</a></strong> — International Compliance Association Certificate/Diploma</li>
              <li><strong><a href="https://www.cisi.org/cisiweb2/cisi-website/study-with-us/professional-qualifications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CISI</a></strong> — Diploma in Investment Compliance</li>
              <li><strong>Legal qualifications</strong> — Solicitor or barrister qualification (valued for regulatory roles)</li>
              <li><strong>AML certifications</strong> — CAMS, ICA Advanced Certificate in AML (for MLRO roles)</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Sector Expertise</h3>
            <p>
              Developing deep expertise in specific sectors increases your marketability and rates.
              High-demand sectors include:
            </p>
            <ul className="space-y-2">
              <li><strong>Crypto and digital assets</strong> — <a href="https://www.fca.org.uk/firms/financial-crime/cryptoassets-aml-ctf-regime" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA registration</a>, Travel Rule, custody</li>
              <li><strong>Payments and e-money</strong> — EMI/PI compliance, safeguarding, PSD2. Data protection under <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICO</a> guidance is critical</li>
              <li><strong>Consumer credit</strong> — CONC, affordability, Consumer Duty</li>
              <li><strong>Investment management</strong> — MiFID II, CASS, best execution. <a href="https://www.bankofengland.co.uk/prudential-regulation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">PRA</a> requirements for deposit-takers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business Setup */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Practicalities</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Setting Up Your Business</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Business Structure</h3>
            <p>Most fractional compliance officers operate through <strong>limited companies</strong> (register via <a href="https://www.gov.uk/set-up-limited-company" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Companies House</a>). See <a href="https://www.gov.uk/business-legal-structures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">gov.uk business structures guidance</a> for options:</p>
            <ul className="space-y-2">
              <li>Tax efficiency through salary and dividend combination</li>
              <li>Liability protection (though PI insurance remains essential)</li>
              <li>Professional image for client engagements</li>
              <li>Ability to claim business expenses</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 not-prose">
              <p className="text-lg font-semibold text-slate-900 mb-2">IR35 Consideration</p>
              <p className="text-slate-700">
                Many fractional compliance engagements, particularly SMF roles, may be caught by
                <a href="https://www.gov.uk/topic/business-tax/ir35" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline ml-1">IR35</a>.
                This means you may be taxed as an employee despite working through a limited company.
                Factor this into your pricing and financial planning. <a href="https://www.ipse.co.uk/ipse-news/news-listing/ir35-reforms-what-you-need-to-know.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IPSE provides guidance</a> on IR35 for self-employed professionals.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Professional Indemnity Insurance</h3>
            <p>
              PI insurance is essential—clients will require it. Coverage should include:
            </p>
            <ul className="space-y-2">
              <li><strong>Minimum &pound;1 million cover</strong> (many clients require &pound;2 million)</li>
              <li>Coverage for regulatory advice and compliance consulting</li>
              <li>Run-off cover for claims arising after engagements end</li>
              <li>Typical annual cost: &pound;1,500-&pound;4,000</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Your Services */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Pricing Your Services</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Day Rate Guidelines</h3>
            <ul className="space-y-2">
              <li><strong>Entry-level fractional (10-12 years exp):</strong> &pound;800-&pound;1,000/day</li>
              <li><strong>Experienced (12-15 years, SMF history):</strong> &pound;1,000-&pound;1,200/day</li>
              <li><strong>Senior (15+ years, CCO experience):</strong> &pound;1,200-&pound;1,500/day</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Pricing Strategies</h3>
            <ul className="space-y-2">
              <li><strong>Start competitively:</strong> When building your client base, consider rates slightly below market to secure initial engagements</li>
              <li><strong>Value-based pricing:</strong> For high-stakes work (authorisation, remediation), price based on value delivered</li>
              <li><strong>Retainer discounts:</strong> Offer 5-10% discount for committed retainer arrangements</li>
              <li><strong>Regular reviews:</strong> Increase rates annually as your reputation and demand grows. Consider professional development support from <a href="https://www.cipd.org/uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CIPD</a> for consulting skills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Common Questions
            </h2>
          </div>
          <FAQ items={CAREER_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Go<br /><span className="text-purple-400">Fractional?</span>
          </h2>
          <p className="text-xl text-purple-200/80 mb-10 max-w-2xl mx-auto">
            Register your profile to be matched with firms seeking fractional compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/candidates" className="px-10 py-5 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">
              Register Profile
            </Link>
            <Link href="/part-time-compliance-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-purple-900 transition-colors">
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/part-time-compliance-jobs-uk" className="text-slate-600 hover:text-purple-600 font-medium transition-colors">Part-Time Compliance Jobs</Link>
              <Link href="/compliance-officer-salary-uk" className="text-slate-600 hover:text-purple-600 font-medium transition-colors">Compliance Salary UK</Link>
              <Link href="/fractional-cco" className="text-slate-600 hover:text-purple-600 font-medium transition-colors">Fractional CCO</Link>
              <Link href="/outsourced-compliance-cost" className="text-slate-600 hover:text-purple-600 font-medium transition-colors">Compliance Costs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
