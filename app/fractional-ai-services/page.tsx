import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional AI Services UK',
  description: 'Hire a Fractional Head of AI. AI strategy, implementation, ethics leadership.',
  keywords: 'fractional head of ai, fractional ai director, hire fractional ai expert, part time ai leadership, ai strategy consulting, fractional ai services',
  alternates: {
    canonical: 'https://fractional.quest/fractional-ai-services',
  },
  openGraph: {
    title: 'Fractional AI Services UK | Hire a Part-Time Head of AI',
    description: 'Hire a Fractional Head of AI. Expert leadership for Artificial Intelligence strategy and implementation.',
    images: ['/images/fractional-ai-services.jpg'],
    url: 'https://fractional.quest/fractional-ai-services',
  },
}

const AI_FAQS = [
  {
    question: 'What is a Fractional Head of AI?',
    answer: 'A Fractional Head of AI is an experienced technology leader who helps organisations define and execute their Artificial Intelligence strategy part-time. They cut through the hype to identify real business value and oversee implementation.',
  },
  {
    question: 'Why do I need a Fractional AI leader?',
    answer: 'AI is moving fast. A fractional leader provides the expertise to select the right tools (LLMs, Copilots), manage data risks, and train your team, without the cost or delay of finding a full-time expert.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Rates for Fractional AI Directors are high, typically £1,000-£1,800+ per day, reflecting the scarcity of talent. However, the ROI from automating processes or creating new AI-driven products can be immense.',
  },
  {
    question: 'What deliverables can I expect?',
    answer: 'An AI roadmap, vendor selection, pilot projects (PoCs), data readiness assessment, and an AI usage policy/governance framework.',
  },
]

export default function FractionalAIServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80" alt="Fractional AI Services" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 via-violet-800/80 to-purple-900/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                AI Services
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional AI<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional Head of AI</strong> to future-proof your business.
                Strategic AI adoption, implementation, and governance—at a flexible cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">GenAI</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Strategy</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-2</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Future</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Ready</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional Head of AI
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Costs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional Head of AI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional Head of AI?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional Head of AI</strong> is a technology leader who guides your organisation through the AI revolution. They don't just write code; they write the strategy. They identify where AI can add real value—automating operations, enhancing products, or creating new revenue streams—and lead the implementation.
            </p>
            <p>
              For most companies, hiring a full-time AI research team is overkill. A fractional leader gives you access to top-tier expertise to set the direction and oversee projects, ensuring you don't get left behind.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Strategic AI Leadership</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Roadmap',
                description: 'Identifying high-impact use cases and creating a phased implementation plan.',
                icon: '🗺️',
              },
              {
                title: 'Tool Selection',
                description: 'Navigating the vendor landscape (OpenAI, Microsoft, Anthropic, Open Source) to choose the right tech stack.',
                icon: '🛠️',
              },
              {
                title: 'Data Readiness',
                description: 'Assessing and improving data infrastructure to ensure it is ready to train or ground AI models.',
                icon: '💾',
              },
              {
                title: 'Governance & Ethics',
                description: 'Establishing policies for safe AI use, mitigating bias, and ensuring data privacy/security.',
                icon: '⚖️',
              },
              {
                title: 'Implementation',
                description: 'Overseeing pilot projects and proofs of concept (PoCs) to demonstrate value quickly.',
                icon: '🚀',
              },
              {
                title: 'Training',
                description: 'Upskilling your workforce on how to use AI tools (e.g., Copilots) effectively.',
                icon: '🎓',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Estimated AI Leadership Costs</h2>
          </div>
          <RoleCalculator role="cto" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={AI_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Lead the<br /><span className="text-violet-400">AI Revolution</span>
          </h2>
          <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
            Find the right fractional leader to guide your AI journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional Head of AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
