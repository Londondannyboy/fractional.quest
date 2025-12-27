import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Recruiter UK 2025',
  description: 'Hire a Fractional Recruiter. In-house talent capability without agency fees.',
  keywords: 'fractional recruiter, fractional talent partner, hire fractional recruiter, part time internal recruiter, embedded talent partner, recruitment services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-recruitment-services',
  },
  openGraph: {
    title: 'Fractional Recruitment Services UK | Hire a Part-Time Talent Partner',
    description: 'Hire a Fractional Recruiter. Build in-house talent capability and reduce agency spend.',
    images: ['/images/fractional-recruitment-services.jpg'],
    url: 'https://fractional.quest/fractional-recruitment-services',
  },
}

const RECRUITER_FAQS = [
  {
    question: 'What is a Fractional Internal Recruiter?',
    answer: 'A Fractional Internal Recruiter (or Embedded Talent Partner) works as part of your team for a fixed period or part-time. They manage your hiring process from the inside, using your brand, not an agency\'s.',
  },
  {
    question: 'How does it save money?',
    answer: 'Agencies charge 15-20% per hire. A fractional recruiter charges a day rate (e.g., £500). If they hire 2 people in a month, the cost per hire is drastically lower than agency fees.',
  },
  {
    question: 'Do they have their own candidates?',
    answer: 'They use their skills to headhunt candidates specifically for you (using LinkedIn Recruiter etc.) and build *your* talent pool, which you then own forever.',
  },
  {
    question: 'What else do they do?',
    answer: 'They improve your job descriptions, interview process, and employer brand, making it easier to hire in the future.',
  },
]

export default function FractionalRecruitmentServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-800/90 via-pink-700/80 to-rose-800/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Talent Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional Talent<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Internal Recruiter</strong> to build your team.
                Lower costs, better candidates, and stronger employer brand—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">No</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Agency Fees</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Better</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Hires</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Talent Partner
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional Recruiter */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional Internal Recruiter?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Talent Partner</strong> is an experienced in-house recruiter who joins your team for a specific period or part-time. Instead of paying a 20% finder's fee for every hire, you pay a fixed day rate for their expertise.
            </p>
            <p>
              They don't just fill seats; they build your company's ability to hire. They set up your ATS, write better job ads, and train your managers to interview well.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Value</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">In-House Capability</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Sourcing',
                description: 'Proactively headhunting candidates on LinkedIn and other channels to find passive talent.',
                icon: '🔍',
              },
              {
                title: 'Process Design',
                description: 'Designing a rigorous, fair interview process that identifies the best candidates.',
                icon: '⚙️',
              },
              {
                title: 'Employer Branding',
                description: 'Improving your careers page and messaging to attract higher-quality applicants.',
                icon: '✨',
              },
              {
                title: 'System Setup',
                description: 'Implementing an Applicant Tracking System (ATS) to manage your candidate pipeline.',
                icon: '💻',
              },
              {
                title: 'Manager Training',
                description: 'Coaching hiring managers on how to interview effectively and remove bias.',
                icon: '🎓',
              },
              {
                title: 'Agency Management',
                description: 'Managing external agencies (if needed) to ensure you get value for money.',
                icon: '🤝',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4 text-pink-700">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated Talent Costs</h2>
          </div>
          <RoleCalculator role="chro" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ skipSchema={true} items={RECRUITER_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-pink-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Build Your<br /><span className="text-pink-200">Dream Team</span>
          </h2>
          <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional talent partner to scale your hiring.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Talent Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
