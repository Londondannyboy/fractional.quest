import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { IR35Calculator } from '@/components/IR35Calculator'
import { WebPageSchema, LastUpdatedBadge } from '@/components/WebPageSchema'

export const metadata: Metadata = {
  title: 'Part-Time Compliance Jobs UK | Flexible Compliance Roles 2025',
  description: 'Part-time compliance jobs UK - Find flexible compliance officer, CCO, and MLRO positions. Day rates £800-£1,500. Remote & hybrid roles. FCA-regulated firms hiring now.',
  keywords: 'part time compliance jobs, part time compliance officer, part time compliance jobs uk, flexible compliance roles, compliance consultant jobs, fractional compliance jobs, remote compliance jobs uk',
  alternates: {
    canonical: 'https://fractional.quest/part-time-compliance-jobs-uk',
  },
  openGraph: {
    title: 'Part-Time Compliance Jobs UK | Flexible Compliance Roles 2025',
    description: 'Find part-time compliance jobs in the UK. Flexible CCO, MLRO, and compliance officer roles paying £800-£1,500/day.',
    url: 'https://fractional.quest/part-time-compliance-jobs-uk',
  },
}

const COMPLIANCE_FAQS = [
  {
    question: 'What are part-time compliance jobs?',
    answer: 'Part-time compliance jobs are compliance officer, CCO, or MLRO positions where you work less than full-time hours—typically 1-3 days per week. These roles provide strategic compliance oversight to organisations without requiring a full-time commitment. In the UK, part-time compliance professionals often hold FCA-approved SMF roles (SMF16 for Compliance Oversight, SMF17 for MLRO) and work with multiple clients simultaneously.'
  },
  {
    question: 'How much do part-time compliance jobs pay in the UK?',
    answer: 'Part-time compliance jobs in the UK typically pay £800-£1,500 per day, depending on seniority and specialisation. Junior compliance consultants earn £600-£900/day, experienced compliance officers £900-£1,200/day, and senior CCO/MLRO roles £1,200-£1,500/day. Working 2 days per week, annual earnings range from £80,000 to £150,000+.'
  },
  {
    question: 'Can you work part-time as a compliance officer?',
    answer: 'Yes, many compliance officers work part-time, particularly at senior levels. The <a href="https://www.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA</a> permits part-time appointments for SMF16 (Compliance Oversight) and SMF17 (MLRO) roles, provided the individual has sufficient time and resource to fulfil their responsibilities. Part-time compliance work is common in FinTech, payments, crypto, and smaller regulated firms.'
  },
  {
    question: 'Where can I find part-time compliance jobs?',
    answer: 'Part-time compliance jobs can be found through specialist recruitment agencies (Robert Walters, Morgan McKinley, Bruin Financial), compliance consultancies offering fractional services (Bovill, Thistle Initiatives), LinkedIn and compliance professional networks (ICA, CISI), and platforms like fractional.quest. Many roles are not widely advertised—networking is key.'
  },
  {
    question: 'What qualifications do I need for part-time compliance work?',
    answer: 'For senior part-time compliance roles holding SMF positions, you typically need 10+ years of compliance experience in financial services, <a href="https://www.int-comp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICA</a> or <a href="https://www.cisi.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CISI</a> compliance qualifications, previous FCA approval history for SMF roles, clean regulatory track record, and sector-specific expertise (FinTech, crypto, investment management). Junior roles may accept 5+ years experience.'
  },
  {
    question: 'Is part-time compliance work done remotely?',
    answer: 'Many part-time compliance roles offer remote or hybrid working. The strategic nature of compliance work—policy review, regulatory monitoring, board reporting—can largely be done remotely. However, most firms expect some on-site presence for committee meetings, team collaboration, and regulatory visits. Fully remote compliance roles exist but are less common for SMF holders.'
  }
]

const jobTypes = [
  {
    title: 'Part-Time CCO',
    desc: 'Chief Compliance Officer roles working 1-3 days per week. SMF16 accountability, strategic compliance oversight, regulatory relationship management.',
    rate: '£1,000-£1,500/day',
    commitment: '1-2 days/week'
  },
  {
    title: 'Part-Time MLRO',
    desc: 'Money Laundering Reporting Officer positions. AML/CTF framework oversight, SAR submissions, transaction monitoring oversight.',
    rate: '£900-£1,300/day',
    commitment: '1-2 days/week'
  },
  {
    title: 'Compliance Consultant',
    desc: 'Project-based or ongoing compliance support. Policy development, gap analysis, regulatory change implementation.',
    rate: '£700-£1,100/day',
    commitment: 'Flexible'
  },
  {
    title: 'Compliance Monitoring Officer',
    desc: 'Part-time compliance monitoring and testing roles. First-line assurance, breach investigation, MI production.',
    rate: '£600-£900/day',
    commitment: '2-3 days/week'
  }
]

const transitionSteps = [
  {
    step: '1',
    title: 'Build Your Track Record',
    desc: 'Ensure you have 10+ years compliance experience with direct FCA interaction and preferably SMF approval history.'
  },
  {
    step: '2',
    title: 'Develop Specialist Expertise',
    desc: 'Focus on high-demand areas: Consumer Duty, crypto AML, payments compliance, or operational resilience.'
  },
  {
    step: '3',
    title: 'Set Up Your Business',
    desc: 'Establish a limited company, obtain professional indemnity insurance (£1m+ cover), and understand IR35 implications.'
  },
  {
    step: '4',
    title: 'Build Your Network',
    desc: 'Connect with compliance consultancies, recruiters, lawyers, and accountants who can refer work.'
  },
  {
    step: '5',
    title: 'Start While Employed',
    desc: 'Consider taking one part-time client (with employer agreement) before fully transitioning to test the market.'
  },
  {
    step: '6',
    title: 'Price Competitively',
    desc: 'Start at market rates (£900-£1,100/day for experienced compliance officers) and adjust based on demand.'
  }
]

export default function PartTimeComplianceJobsUKPage() {
  // For static pages without database queries, use current date
  const lastUpdatedDate = new Date()
  const stats = { total: 45 } // Approximate for schema

  return (
    <div className="min-h-screen bg-white">
      <WebPageSchema
        title="Part-Time Compliance Jobs UK | Flexible Compliance Roles"
        description="Find part-time compliance jobs in the UK. Flexible CCO, MLRO, and compliance officer roles paying £800-£1,500/day."
        url="https://fractional.quest/part-time-compliance-jobs-uk"
        dateModified={lastUpdatedDate}
        itemCount={stats.total}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Part-time compliance jobs UK - flexible compliance officer working in modern office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-800/90 to-slate-900/90"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-teal-300/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
            <span className="mr-2">&larr;</span> Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block bg-teal-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
              Career Guide
            </span>
            <LastUpdatedBadge date={lastUpdatedDate} className="text-white/70" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            Part-Time Compliance<br />
            <span className="text-teal-400">Jobs UK</span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-100/80 leading-relaxed max-w-3xl mb-8">
            Find flexible <strong className="text-white">part-time compliance jobs</strong> in the UK.
            CCO, MLRO, and compliance officer roles paying &pound;800-&pound;1,500/day.
            Build a portfolio career in regulatory compliance.
          </p>
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-teal-400">&pound;1,050</div>
              <div className="text-teal-200/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
              <div className="text-teal-200/60 text-sm uppercase tracking-wider">Days/Week</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">60%</div>
              <div className="text-teal-200/60 text-sm uppercase tracking-wider">Remote Options</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="#types" className="px-8 py-4 bg-teal-500 text-white font-bold uppercase tracking-wider hover:bg-teal-400 transition-colors">
              Explore Roles
            </Link>
            <Link href="/contact/candidates" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-teal-900 transition-colors">
              Register Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              <strong className="text-slate-900">Part-time compliance jobs</strong> have transformed how experienced
              regulatory professionals structure their careers. Whether you're seeking better work-life balance,
              building a portfolio career, or transitioning from full-time employment, the UK market offers
              growing opportunities for flexible compliance work.
            </p>

            <h2 className="text-2xl font-black text-slate-900 mt-12 mb-4">The Rise of Part-Time Compliance Work</h2>
            <p>
              The UK market for <strong>part-time compliance jobs</strong> has grown significantly since 2020.
              Several factors drive this trend:
            </p>
            <ul className="space-y-3">
              <li>
                <strong>FinTech growth:</strong> Hundreds of newly <a href="https://www.fca.org.uk/firms/authorisation" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">FCA-authorised firms</a> need
                compliance expertise but can't justify full-time hires
              </li>
              <li>
                <strong>Regulatory complexity:</strong> <a href="https://www.fca.org.uk/firms/consumer-duty" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">Consumer Duty</a>,
                operational resilience, and crypto regulation require specialist knowledge that's in short supply
              </li>
              <li>
                <strong>Remote work normalisation:</strong> The pandemic proved compliance oversight can be delivered remotely,
                opening up geographic flexibility
              </li>
              <li>
                <strong>Cost pressures:</strong> Economic uncertainty makes fractional compliance attractive versus
                &pound;100k+ full-time salaries
              </li>
              <li>
                <strong>Career preferences:</strong> Senior compliance professionals increasingly value <a href="https://www.gov.uk/flexible-working" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">flexibility</a> and portfolio careers over single-employer relationships
              </li>
            </ul>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8 not-prose">
              <p className="text-lg font-semibold text-slate-900 mb-2">Industry Terminology</p>
              <p className="text-slate-700">
                "Part-time compliance jobs" and "fractional compliance" describe similar arrangements. "Part-time"
                emphasises the reduced hours; "fractional" emphasises working with multiple clients. Both typically
                involve 1-3 days per week per client at senior levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Part-Time Compliance Roles */}
      <section id="types" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Role Types</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Types of Part-Time Compliance Roles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobTypes.map((job, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 hover:border-teal-300 transition-colors">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{job.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{job.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-600 font-semibold">{job.rate}</span>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">{job.commitment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part-Time vs Full-Time Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Part-Time vs Full-Time Compliance Work</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900">Factor</th>
                  <th className="text-left p-4 font-bold text-slate-900">Part-Time/Fractional</th>
                  <th className="text-left p-4 font-bold text-slate-900">Full-Time Employment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Annual Earnings</td>
                  <td className="p-4 text-teal-600 font-semibold">&pound;80,000-&pound;200,000+</td>
                  <td className="p-4 text-slate-700">&pound;70,000-&pound;150,000</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Effective Hourly Rate</td>
                  <td className="p-4 text-teal-600 font-semibold">&pound;100-&pound;190/hour</td>
                  <td className="p-4 text-slate-700">&pound;35-&pound;75/hour</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Work Flexibility</td>
                  <td className="p-4 text-slate-700">High—choose clients and schedule</td>
                  <td className="p-4 text-slate-700">Limited—employer determines</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Job Security</td>
                  <td className="p-4 text-slate-700">Variable—depends on client pipeline</td>
                  <td className="p-4 text-slate-700">Higher—notice periods protect</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Benefits</td>
                  <td className="p-4 text-slate-700">Self-funded pension, no sick pay</td>
                  <td className="p-4 text-slate-700">Employer pension, benefits package</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Career Development</td>
                  <td className="p-4 text-slate-700">Self-directed, broad exposure</td>
                  <td className="p-4 text-slate-700">Employer training, internal progression</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Experience Variety</td>
                  <td className="p-4 text-slate-700">Multiple firms, sectors, challenges</td>
                  <td className="p-4 text-slate-700">Deep expertise in one organisation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where to Find Jobs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Job Search</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Where to Find Part-Time Compliance Jobs</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              <strong>Part-time compliance jobs</strong> are often filled through networks rather than job boards.
              Here's where to find opportunities:
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Specialist Recruitment Agencies</h3>
            <p>
              Several agencies focus on compliance and interim financial services roles:
            </p>
            <ul className="space-y-2">
              <li><strong>Bruin Financial</strong> — Strong in compliance and risk interim market</li>
              <li><strong>Robert Walters</strong> — Compliance recruitment with interim/contract desk</li>
              <li><strong>Morgan McKinley</strong> — Financial services compliance specialists</li>
              <li><strong>Goodman Masson</strong> — Interim and contract compliance roles</li>
              <li><strong>Compliance Professionals</strong> — Niche compliance-only agency</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Compliance Consultancies</h3>
            <p>
              Many consultancies employ fractional compliance officers or can connect you with clients:
            </p>
            <ul className="space-y-2">
              <li><strong>Bovill</strong> — Large UK compliance consultancy with fractional services</li>
              <li><strong>Thistle Initiatives</strong> — Outsourced compliance and appointed representative services</li>
              <li><strong>Compliancy Services</strong> — FinTech-focused compliance support</li>
              <li><strong>CUBE</strong> — RegTech with compliance consulting arm</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Professional Networks</h3>
            <p>Many part-time opportunities come through professional connections:</p>
            <ul className="space-y-2">
              <li><strong><a href="https://www.int-comp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICA (International Compliance Association)</a></strong> — Events, forums, and job board</li>
              <li><strong><a href="https://www.cisi.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CISI</a></strong> — Compliance-focused professional body with networking events</li>
              <li><strong>LinkedIn</strong> — Compliance-specific groups and direct outreach</li>
              <li><strong>Former colleagues</strong> — Referrals from your professional network</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Direct Approaches</h3>
            <p>
              Proactively approaching firms can uncover opportunities not yet advertised. Target:
            </p>
            <ul className="space-y-2">
              <li>Newly <a href="https://register.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA-authorised firms</a> (check the FCA register for recent authorisations)</li>
              <li>Growing <a href="https://www.ukfinance.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FinTechs</a> and crypto firms</li>
              <li><a href="https://scaleupinstitute.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Private equity portfolio companies</a></li>
              <li>Firms advertising for full-time compliance staff (may consider part-time alternatives)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Transition */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Career Transition</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              How to Transition to Part-Time Compliance Work
            </h2>
            <p className="text-xl text-slate-600 mt-4">
              Moving from full-time employment to part-time/fractional compliance requires preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {transitionSteps.map((step, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-teal-500 text-white font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-teal-50 p-6 rounded-lg">
            <p className="text-slate-700">
              <strong className="text-slate-900">Want a step-by-step guide?</strong> Read our comprehensive article on
              <Link href="/how-to-become-fractional-compliance-officer" className="text-teal-600 hover:text-teal-700 underline ml-1">
                how to become a fractional compliance officer
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Required */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Requirements</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Skills for Part-Time Compliance Roles</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Core Qualifications</h3>
            <ul className="space-y-2">
              <li><a href="https://www.int-comp.org/qualifications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICA Certificate/Diploma</a> or <a href="https://www.cisi.org/cisiweb2/cisi-website/study-with-us/compliance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">CISI Diploma in Investment Compliance</a></li>
              <li>10+ years compliance experience in <a href="https://www.fca.org.uk/firms" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">FCA-regulated firms</a></li>
              <li>Previous SMF16 or SMF17 approval (for senior roles)</li>
              <li>Clean regulatory record with no FCA enforcement history</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Technical Knowledge</h3>
            <ul className="space-y-2">
              <li><a href="https://www.handbook.fca.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">FCA Handbook</a> and regulatory framework</li>
              <li><a href="https://www.fca.org.uk/firms/senior-managers-certification-regime" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">Senior Managers & Certification Regime</a></li>
              <li>AML/CTF regulations and <a href="https://www.jmlsg.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">JMLSG guidance</a></li>
              <li>Consumer Duty and conduct risk</li>
              <li>Sector-specific rules (COBS, CONC, BCOBS, etc.)</li>
              <li>Data protection compliance and <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">ICO guidance</a></li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Business Skills</h3>
            <ul className="space-y-2">
              <li><a href="https://www.iod.com/professional-development/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Board and committee presentation skills</a></li>
              <li>Policy and procedure drafting</li>
              <li>Regulatory relationship management</li>
              <li>Risk assessment and compliance monitoring programme design</li>
              <li>Training delivery and <a href="https://www.cipd.org/uk/knowledge/factsheets/learning-development-factsheet/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">compliance culture development</a></li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">High-Demand Specialisms</h3>
            <p>Certain specialisms command premium rates:</p>
            <ul className="space-y-2">
              <li><strong><a href="https://www.fca.org.uk/firms/cryptoassets" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Crypto and digital assets</a></strong> — FCA registration, Travel Rule, AML</li>
              <li><strong>Consumer Duty</strong> — Implementation and ongoing monitoring</li>
              <li><strong><a href="https://www.fca.org.uk/firms/electronic-money-payment-institutions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Payments and e-money</a></strong> — EMI/PI authorisation and compliance</li>
              <li><strong>CASS</strong> — Client assets and client money rules</li>
              <li><strong>Operational resilience</strong> — Business continuity and third-party risk</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Salary Expectations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Compensation</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Part-Time Compliance Salary Expectations</h2>
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900">Role</th>
                  <th className="text-left p-4 font-bold text-slate-900">Day Rate</th>
                  <th className="text-left p-4 font-bold text-slate-900">Annual (2 days/week)</th>
                  <th className="text-left p-4 font-bold text-slate-900">Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Compliance Analyst</td>
                  <td className="p-4 text-teal-600 font-semibold">&pound;400-&pound;600</td>
                  <td className="p-4 text-slate-700">&pound;40,000-&pound;60,000</td>
                  <td className="p-4 text-slate-600">3-5 years</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Compliance Officer</td>
                  <td className="p-4 text-teal-600 font-semibold">&pound;600-&pound;900</td>
                  <td className="p-4 text-slate-700">&pound;60,000-&pound;90,000</td>
                  <td className="p-4 text-slate-600">5-10 years</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Senior Compliance Officer</td>
                  <td className="p-4 text-teal-600 font-semibold">&pound;900-&pound;1,200</td>
                  <td className="p-4 text-slate-700">&pound;90,000-&pound;120,000</td>
                  <td className="p-4 text-slate-600">10-15 years</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 font-medium text-slate-900">Head of Compliance / CCO</td>
                  <td className="p-4 text-teal-600 font-semibold">&pound;1,200-&pound;1,500</td>
                  <td className="p-4 text-slate-700">&pound;120,000-&pound;150,000</td>
                  <td className="p-4 text-slate-600">15+ years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              Annual earnings assume approximately 100 billable days (2 days per week, accounting for holidays
              and non-billable time). Many <a href="https://www.ipse.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">fractional compliance professionals</a> work 3-4 days per week across
              multiple clients, earning &pound;150,000-&pound;200,000+.
            </p>
            <p>
              For detailed salary data, see our <Link href="/compliance-officer-salary-uk" className="text-teal-600 hover:text-teal-700 underline">Compliance Officer Salary UK 2025</Link> guide.
            </p>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">IR35: Inside vs Outside</h2>
            <p className="text-slate-600 mt-4">
              As a part-time compliance professional, your <a href="https://www.gov.uk/guidance/understanding-off-payroll-working-ir35" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">IR35 status</a> significantly impacts take-home pay
            </p>
          </div>
          <IR35Calculator defaultDayRate={1000} />
        </div>
      </section>

      {/* Remote Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">Remote Working</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Remote Part-Time Compliance Jobs</h2>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              Many <strong>part-time compliance jobs</strong> now offer remote or hybrid working arrangements.
              The nature of senior compliance work—strategic oversight, policy review, regulatory monitoring—lends
              itself well to remote delivery.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">What Can Be Done Remotely</h3>
            <ul className="space-y-2">
              <li>Compliance monitoring and testing</li>
              <li>Policy and procedure review</li>
              <li>Regulatory change analysis</li>
              <li>Training development and delivery</li>
              <li>Board pack preparation and MI reporting</li>
              <li>Virtual committee attendance</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">What Typically Requires On-Site</h3>
            <ul className="space-y-2">
              <li>FCA meetings and regulatory visits</li>
              <li>Board and committee meetings (some firms)</li>
              <li>Team building and culture development</li>
              <li>Complex investigations and interviews</li>
              <li>Initial onboarding and relationship building</li>
            </ul>

            <div className="bg-slate-100 p-6 rounded-lg my-8 not-prose">
              <p className="text-slate-700">
                <strong className="text-slate-900">Typical hybrid arrangement:</strong> 1-2 days per month on-site for
                committee meetings and team interaction, remainder remote. Some <a href="https://www.fca.org.uk/firms/senior-managers-certification-regime/senior-managers-regime" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">SMF holders</a> successfully work fully
                remotely, particularly for smaller firms outside London.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Part-Time Compliance Jobs: Common Questions
            </h2>
          </div>
          <FAQ skipSchema={true} items={COMPLIANCE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Find Part-Time<br /><span className="text-teal-400">Compliance Work?</span>
          </h2>
          <p className="text-xl text-teal-200/80 mb-10 max-w-2xl mx-auto">
            Register your profile to connect with UK firms seeking flexible compliance expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/candidates" className="px-10 py-5 bg-teal-500 text-white font-bold uppercase tracking-wider hover:bg-teal-400 transition-colors">
              Register Profile
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-teal-900 transition-colors">
              Outsourcing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12 bg-teal-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/fractional-cco" className="bg-white p-6 border border-teal-200 hover:border-teal-400 transition-colors group">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Role Guide</span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-teal-600 transition-colors">Fractional CCO Services</h3>
              <p className="text-slate-600 text-sm mt-2">Complete guide to fractional Chief Compliance Officer services and SMF16 requirements.</p>
            </Link>
            <Link href="/outsourced-compliance-officer-uk" className="bg-white p-6 border border-teal-200 hover:border-teal-400 transition-colors group">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Complete Guide</span>
              <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-teal-600 transition-colors">Outsourced Compliance UK</h3>
              <p className="text-slate-600 text-sm mt-2">Everything about outsourced compliance officers for UK regulated firms.</p>
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
              <Link href="/fractional-cco" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Fractional CCO</Link>
              <Link href="/compliance-officer-salary-uk" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Compliance Salary UK</Link>
              <Link href="/how-to-become-fractional-compliance-officer" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Become Fractional Compliance</Link>
              <Link href="/outsourced-compliance-officer-uk" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Outsourced Compliance Guide</Link>
              <Link href="/fractional-mlro-uk" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">Fractional MLRO</Link>
              <Link href="/fractional-compliance-fintech" className="text-slate-600 hover:text-teal-600 font-medium transition-colors">FinTech Compliance</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
