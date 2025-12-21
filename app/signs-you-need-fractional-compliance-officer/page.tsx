import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '5 Signs Your Business Needs a Fractional Compliance Officer | UK Guide',
  description: '5 signs your business needs a fractional compliance officer - FCA authorisation, compliance gaps, scaling challenges, regulatory feedback, and specialist expertise.',
  keywords: 'fractional compliance officer, when to hire compliance officer, compliance officer signs, outsourced compliance, fca compliance help',
  alternates: {
    canonical: 'https://fractional.quest/signs-you-need-fractional-compliance-officer',
  },
  openGraph: {
    title: '5 Signs Your Business Needs a Fractional Compliance Officer',
    description: 'When to hire a fractional compliance officer - recognise these 5 signs in your UK regulated business.',
    url: 'https://fractional.quest/signs-you-need-fractional-compliance-officer',
  },
}

const signs = [
  {
    number: '1',
    title: 'You\'re Seeking FCA Authorisation',
    summary: 'Applying for FCA authorisation without experienced compliance leadership significantly increases rejection risk.',
    content: `
      <p>
        The <a href="https://www.fca.org.uk/firms/authorisation" target="_blank" rel="noopener noreferrer" class="text-rose-600 hover:text-rose-700 underline">FCA authorisation process</a>
        requires demonstrating robust compliance arrangements from day one. This includes compliance policies, monitoring programmes,
        risk assessments, and often a named SMF16 (Compliance Oversight) or SMF17 (MLRO) holder.
      </p>
      <p class="mt-4">
        <strong>Why a fractional compliance officer helps:</strong>
      </p>
      <ul class="mt-2 space-y-2">
        <li>Drafts application materials to FCA standards</li>
        <li>Develops the compliance framework the FCA expects to see</li>
        <li>Can be named as proposed SMF16/SMF17—often with faster approval due to existing FCA history</li>
        <li>Manages FCA queries and interview preparation</li>
        <li>Costs significantly less than hiring full-time before you're generating revenue</li>
      </ul>
    `,
    action: 'Get authorisation support',
    actionLink: '/contact/companies'
  },
  {
    number: '2',
    title: 'Your Current Compliance Officer Is Leaving',
    summary: 'A departing CCO or MLRO creates immediate regulatory risk and potential FCA notification requirements.',
    content: `
      <p>
        When your compliance officer resigns, you face several urgent challenges:
      </p>
      <ul class="mt-2 space-y-2">
        <li><strong>FCA notification:</strong> You must notify the FCA of SMF vacancies and may need to identify an interim holder</li>
        <li><strong>Regulatory gap:</strong> The FCA expects continuous compliance oversight—gaps create risk</li>
        <li><strong>Knowledge loss:</strong> Departing officers take institutional knowledge with them</li>
        <li><strong>Recruitment timeline:</strong> Hiring a permanent replacement takes 3-6 months</li>
      </ul>
      <p class="mt-4">
        <strong>Why a fractional compliance officer helps:</strong>
      </p>
      <ul class="mt-2 space-y-2">
        <li>Can start within 1-2 weeks—faster than any permanent hire</li>
        <li>Provides immediate SMF cover if already FCA-approved</li>
        <li>Maintains regulatory relationships and compliance programme</li>
        <li>Can transition to permanent fractional arrangement or hand over to permanent hire</li>
      </ul>
    `,
    action: 'Find interim cover',
    actionLink: '/interim-compliance-officer'
  },
  {
    number: '3',
    title: 'You\'re Scaling Rapidly and Compliance Can\'t Keep Up',
    summary: 'Fast growth often outpaces compliance capacity—creating regulatory gaps and risk.',
    content: `
      <p>
        Rapid business growth creates compliance pressure:
      </p>
      <ul class="mt-2 space-y-2">
        <li>New products launching faster than compliance review can keep pace</li>
        <li>Expanding into new markets or customer segments with different regulatory requirements</li>
        <li>Growing teams without adequate compliance training</li>
        <li>Increasing transaction volumes straining AML monitoring</li>
        <li>Board pressure to move fast conflicting with compliance caution</li>
      </ul>
      <p class="mt-4">
        <strong>Why a fractional compliance officer helps:</strong>
      </p>
      <ul class="mt-2 space-y-2">
        <li>Adds senior compliance capacity without full-time commitment</li>
        <li>Brings experience scaling compliance from previous high-growth environments</li>
        <li>Can increase days temporarily during high-growth phases</li>
        <li>Provides strategic input on compliance-friendly growth</li>
        <li>Costs less than an additional full-time hire while you assess long-term needs</li>
      </ul>
    `,
    action: 'Scale your compliance',
    actionLink: '/contact/companies'
  },
  {
    number: '4',
    title: 'You\'ve Received Regulatory Feedback or Enforcement Action',
    summary: 'FCA criticism, s166 reviews, or enforcement action requires experienced compliance response.',
    content: `
      <p>
        Regulatory issues demand immediate, expert attention:
      </p>
      <ul class="mt-2 space-y-2">
        <li><strong>FCA supervisory feedback:</strong> Criticism that requires documented remediation</li>
        <li><strong>s166 skilled person review:</strong> Independent review of compliance arrangements</li>
        <li><strong>Enforcement investigation:</strong> FCA enforcement action or investigation</li>
        <li><strong>Customer complaints:</strong> Patterns suggesting systemic compliance issues</li>
        <li><strong>Internal audit findings:</strong> Significant compliance gaps identified internally</li>
      </ul>
      <p class="mt-4">
        <strong>Why a fractional compliance officer helps:</strong>
      </p>
      <ul class="mt-2 space-y-2">
        <li>Brings independent, experienced perspective the FCA respects</li>
        <li>Has handled similar regulatory situations at other firms</li>
        <li>Can lead remediation programmes and evidence improvements</li>
        <li>Provides credibility in regulatory discussions</li>
        <li>Faster to deploy than a permanent hire during crisis</li>
      </ul>
    `,
    action: 'Get expert help',
    actionLink: '/contact/companies'
  },
  {
    number: '5',
    title: 'You Need Specialist Compliance Expertise You Don\'t Have',
    summary: 'Complex regulatory requirements like crypto AML, Consumer Duty, or CASS demand specialist knowledge.',
    content: `
      <p>
        Some compliance challenges require specialist expertise:
      </p>
      <ul class="mt-2 space-y-2">
        <li><strong>Consumer Duty:</strong> The FCA's new outcomes-focused regulation requires cultural and operational change</li>
        <li><strong>Crypto/Digital Assets:</strong> FCA registration and the Travel Rule need crypto-specific AML expertise</li>
        <li><strong>CASS (Client Assets):</strong> Client money and assets rules are complex and high-risk</li>
        <li><strong>Operational Resilience:</strong> New FCA requirements on business continuity and third-party risk</li>
        <li><strong>MiFID II/COBS:</strong> Investment business conduct requirements</li>
      </ul>
      <p class="mt-4">
        <strong>Why a fractional compliance officer helps:</strong>
      </p>
      <ul class="mt-2 space-y-2">
        <li>Access specialists without hiring full-time in a niche area</li>
        <li>Fractional professionals often have cross-firm experience implementing these requirements</li>
        <li>Project-based engagement for implementation, ongoing for monitoring</li>
        <li>Transfer knowledge to your team during engagement</li>
      </ul>
    `,
    action: 'Find a specialist',
    actionLink: '/contact/companies'
  }
]

export default function SignsYouNeedFractionalComplianceOfficerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-900 via-rose-800 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
            alt="Signs you need a fractional compliance officer - FCA regulatory warning indicators"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/90 via-rose-800/90 to-slate-900/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-rose-300/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <span className="inline-block bg-rose-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Buyer Guide
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[0.95] tracking-tight">
            5 Signs You Need a<br />
            <span className="text-rose-400">Fractional Compliance Officer</span>
          </h1>
          <p className="text-xl md:text-2xl text-rose-100/80 leading-relaxed max-w-3xl mb-8">
            Recognise these warning signs? Your UK regulated business may benefit from
            <strong className="text-white"> fractional compliance support</strong>.
          </p>
        </div>
      </section>

      {/* Signs List */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {signs.map((sign, i) => (
              <div key={i} className="scroll-mt-8" id={`sign-${sign.number}`}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-500 text-white font-black text-2xl rounded-full flex items-center justify-center">
                    {sign.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">{sign.title}</h2>
                    <p className="text-lg text-slate-600 mb-6 font-medium">{sign.summary}</p>
                    <div
                      className="prose prose-slate max-w-none"
                      dangerouslySetInnerHTML={{ __html: sign.content }}
                    />
                    <div className="mt-6">
                      <Link
                        href={sign.actionLink}
                        className="inline-flex items-center px-6 py-3 bg-rose-500 text-white font-bold uppercase tracking-wider text-sm hover:bg-rose-400 transition-colors"
                      >
                        {sign.action} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
                {i < signs.length - 1 && <hr className="mt-16 border-slate-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Summary</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Recognise Any of These Signs?</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              If you're experiencing one or more of these situations, a <strong>fractional compliance officer</strong> could
              provide the expert support you need—without the cost and commitment of a full-time hire.
            </p>

            <p>
              Fractional compliance works particularly well for:
            </p>
            <ul className="space-y-2">
              <li>FinTech and payments companies with fewer than 50-100 employees</li>
              <li>Firms seeking or recently granted FCA authorisation</li>
              <li>Companies with straightforward regulatory footprints</li>
              <li>Businesses needing senior compliance input 1-3 days per week</li>
              <li>Organisations facing specific compliance challenges or transitions</li>
            </ul>

            <p>
              Typical costs range from &pound;4,000-&pound;8,000 per month for combined CCO and MLRO services—compared to
              &pound;150,000-&pound;200,000+ annually for a full-time equivalent.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose-400 mb-4 block">Next Step</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Talk<br /><span className="text-rose-400">Compliance?</span>
          </h2>
          <p className="text-xl text-rose-200/80 mb-10 max-w-2xl mx-auto">
            Connect with experienced fractional CCOs and MLROs for your UK regulated business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-rose-500 text-white font-bold uppercase tracking-wider hover:bg-rose-400 transition-colors">
              Get in Touch
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-rose-900 transition-colors">
              Complete Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Related Guides</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/outsourced-compliance-officer-uk" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Outsourced Compliance Guide</Link>
              <Link href="/fractional-cco" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Fractional CCO</Link>
              <Link href="/fractional-mlro-uk" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Fractional MLRO</Link>
              <Link href="/outsourced-compliance-cost" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">Compliance Costs</Link>
              <Link href="/fractional-compliance-fintech" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">FinTech Compliance</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
