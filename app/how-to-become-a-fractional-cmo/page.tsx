import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'How to Become a Fractional CMO: Complete Career Guide 2025 | Skills, Salary & Jobs',
  description: 'Complete guide to becoming a fractional CMO. Career path, skills needed, how to get your first client, salary expectations (£700-£1,400/day), and how to build a sustainable fractional practice.',
  keywords: 'how to become fractional cmo, fractional cmo career, become fractional cmo, fractional cmo jobs, fractional cmo salary',
  alternates: {
    canonical: 'https://fractional.quest/how-to-become-a-fractional-cmo',
  },
  openGraph: {
    title: 'How to Become a Fractional CMO: Complete Career Guide',
    description: 'Career path, skills, salary (£700-£1,400/day), and how to land your first fractional CMO role.',
    url: 'https://fractional.quest/how-to-become-a-fractional-cmo',
  },
}

const faqItems = [
  {
    question: 'How many years of experience do you need to become a fractional CMO?',
    answer: 'Minimum 10-12 years, but ideally 15+ years of marketing experience with at least 5 years in leadership roles. You need proven track record scaling companies, building teams, and driving measurable results. Most successful fractional CMOs have 15-20 years experience.',
  },
  {
    question: 'Can you become a fractional CMO without being a full-time CMO first?',
    answer: 'Difficult but possible. Most fractional CMOs were full-time CMOs/VPs previously. However, if you have 15+ years as VP Marketing or Head of Marketing with demonstrable results, you can transition. The key is having C-level strategic expertise and leadership experience.',
  },
  {
    question: 'How much can you earn as a fractional CMO in the UK?',
    answer: 'Day rates: £700-£1,400 depending on experience. Working 2 days/week with 2-3 clients = £150k-£220k annually. Top fractional CMOs with 20+ years and strong track records earn £200k-£300k+ working 3-4 days/week across multiple clients.',
  },
  {
    question: 'How do you get your first fractional CMO client?',
    answer: 'Start with your network: former colleagues, investors, founders you know. Offer fractional services to companies you\'ve advised informally. Join fractional job boards like Fractional.Quest. Attend startup/scale-up events. Build thought leadership on LinkedIn. First client is hardest—leverage existing relationships.',
  },
  {
    question: 'Is being a fractional CMO better than full-time?',
    answer: 'Depends on preferences. Pros: Higher earning potential (£200k+ vs £150k-£180k full-time), flexibility, variety, no office politics. Cons: Less stability, no equity upside, hustle to find clients, juggling multiple companies. Best for experienced marketers who value autonomy.',
  },
  {
    question: 'Do you need any certifications to become a fractional CMO?',
    answer: 'No formal certifications required. This is a results-driven role—clients care about your track record, not credentials. Focus on building portfolio of successful outcomes, case studies, and recommendations. Industry-specific expertise (B2B SaaS, FinTech) is more valuable than certifications.',
  },
]

export default function HowToBecomeFractionalCMOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-500 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/fractional-cmo" className="text-rose-100 hover:text-white mb-8 inline-flex items-center text-sm">
            <span className="mr-2">←</span> Back to Fractional CMO Guide
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-rose-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Career Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              How to Become a<br />
              <span className="text-rose-200">Fractional CMO</span>
            </h1>
            <p className="text-2xl md:text-3xl text-rose-50 leading-relaxed font-light mb-10">
              Complete career guide: skills needed, how to get your first client, earning potential (£700-£1,400/day), and building a sustainable fractional practice.
            </p>
            <div className="flex flex-wrap gap-10 mb-12">
              <div>
                <div className="text-5xl font-black text-white">15+ Years</div>
                <div className="text-rose-100 text-sm uppercase tracking-wider mt-1">Experience Needed</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">£700-1.4k</div>
                <div className="text-rose-100 text-sm uppercase tracking-wider mt-1">Day Rate</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white">2-4</div>
                <div className="text-rose-100 text-sm uppercase tracking-wider mt-1">Clients Typical</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Prerequisites</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Are You Ready to Go Fractional?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Honest assessment: becoming a fractional CMO isn't for everyone. Here's what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">✅</span> You're Ready If:
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <div><strong>15+ years marketing experience</strong> with 5+ years in leadership roles (VP Marketing, CMO, Head of Marketing)</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <div><strong>Proven track record</strong> scaling companies (£1M to £10M+ ARR, reducing CAC, building teams from scratch)</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <div><strong>Strategic mindset</strong> — can set direction, not just execute tactics</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <div><strong>Team leadership experience</strong> — hired 5-10+ marketers, managed teams of 3-15</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <div><strong>Strong network</strong> in startup/scale-up ecosystem for first clients</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <div><strong>Self-motivated</strong> and comfortable with ambiguity and hustle</div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">❌</span> Not Ready If:
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <div><strong>Under 10 years experience</strong> or never held VP+ marketing role</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <div><strong>Tactical executor only</strong> — if you're a hands-on specialist (SEO, paid ads), not strategic leader</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <div><strong>Never managed people</strong> or built teams</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <div><strong>Can't demonstrate results</strong> — no metrics, case studies, or measurable outcomes from past roles</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <div><strong>Need job security</strong> — fractional work requires hustling for clients</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold mt-1">•</span>
                  <div><strong>Prefer single-company focus</strong> — fractional means juggling 2-4 companies</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-8 rounded-lg">
            <p className="text-lg text-gray-900">
              <strong>Reality check:</strong> Most successful fractional CMOs were full-time CMOs or VPs of Marketing at startups/scale-ups
              before going fractional. If you're not there yet, focus on building full-time experience first. Going fractional too early
              will damage your credibility and make client acquisition nearly impossible.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Needed */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Skills</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Essential Skills for Fractional CMOs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Strategic Skills',
                skills: [
                  'Marketing strategy development',
                  'Positioning & messaging frameworks',
                  'ICP definition & segmentation',
                  'Channel mix optimization',
                  'Budget planning & allocation',
                  'GTM strategy & product launches',
                ],
                icon: '🎯',
              },
              {
                category: 'Leadership Skills',
                skills: [
                  'Team building & hiring',
                  'Coaching & mentorship',
                  'Performance management',
                  'Cross-functional collaboration',
                  'Stakeholder management (CEO, board)',
                  'Agency/vendor management',
                ],
                icon: '👥',
              },
              {
                category: 'Technical Skills',
                skills: [
                  'Analytics & attribution modeling',
                  'Marketing tech stack (CRM, automation)',
                  'Data-driven decision making',
                  'Dashboard & reporting',
                  'Growth experimentation',
                  'Channel-specific expertise (2-3 deep)',
                ],
                icon: '⚙️',
              },
              {
                category: 'Business Skills',
                skills: [
                  'P&L understanding',
                  'Unit economics (CAC, LTV)',
                  'ROI measurement & optimization',
                  'Fundraising & investor relations',
                  'Revenue forecasting',
                  'Business model understanding',
                ],
                icon: '📊',
              },
              {
                category: 'Fractional-Specific Skills',
                skills: [
                  'Async communication mastery',
                  'Time management across clients',
                  'Fast ramp-up & context switching',
                  'Building systems & processes',
                  'Documentation & knowledge transfer',
                  'Remote/distributed team leadership',
                ],
                icon: '🔄',
              },
              {
                category: 'Soft Skills',
                skills: [
                  'Executive presence & gravitas',
                  'Influencing without authority',
                  'Adaptability & learning agility',
                  'Self-motivation & discipline',
                  'Networking & relationship building',
                  'Thought leadership & personal brand',
                ],
                icon: '✨',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{item.category}</h3>
                </div>
                <ul className="space-y-2">
                  {item.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-rose-600 font-bold mt-0.5">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Transition Plan</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">7 Steps to Become a Fractional CMO</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Build Your Track Record (Years 1-15)',
                description: 'You can\'t skip this. Become excellent at full-time marketing leadership first.',
                actions: [
                  'Work at 2-3 startups/scale-ups as VP Marketing or CMO',
                  'Drive measurable results: scale ARR, reduce CAC, build teams, launch products',
                  'Document everything: screenshots of dashboards, metrics, before/after results',
                  'Build relationships with founders, investors, other executives',
                  'Develop expertise in 1-2 specific industries (B2B SaaS, FinTech, etc.)',
                ],
                timeline: '10-15 years',
              },
              {
                step: 2,
                title: 'Build Your Personal Brand',
                description: 'Start positioning yourself as a marketing thought leader 12-18 months before going fractional.',
                actions: [
                  'Post on LinkedIn 3-5x/week: marketing insights, case studies, lessons learned',
                  'Write guest posts or start a newsletter on your marketing playbooks',
                  'Speak at industry events (SaaStr, GTM conferences, startup meetups)',
                  'Build a simple website showcasing your work and results',
                  'Engage with startup/marketing communities on Twitter, Slack',
                ],
                timeline: '12-18 months',
              },
              {
                step: 3,
                title: 'Test the Market',
                description: 'Validate demand before quitting your full-time job. Start small.',
                actions: [
                  'Offer fractional services to 1-2 companies while still employed (evenings/weekends)',
                  'Advisory roles for £500-£1,000/month to test client management',
                  'Ask your network: "If I went fractional, would you hire me or refer me?"',
                  'Join fractional job boards (Fractional.Quest) and see what roles are posted',
                  'Talk to other fractional CMOs about their experience and challenges',
                ],
                timeline: '6-12 months',
              },
              {
                step: 4,
                title: 'Set Up Your Business',
                description: 'Handle the admin before you need clients. Make it easy to get paid.',
                actions: [
                  'Register as limited company or sole trader (consult accountant)',
                  'Set up invoicing system (Xero, QuickBooks, or simple PayPal invoices)',
                  'Create service agreement template (scope, rates, IP, confidentiality)',
                  'Get professional indemnity insurance if required',
                  'Open business bank account and set aside tax reserves (40% of income)',
                ],
                timeline: '1 month',
              },
              {
                step: 5,
                title: 'Land Your First Client',
                description: 'Hardest step. Leverage existing relationships—don\'t cold outreach.',
                actions: [
                  'Message former colleagues/bosses: "I\'m going fractional. Know anyone who needs a CMO?"',
                  'Ask investors/VCs you know for intros to portfolio companies',
                  'Reach out to founders you\'ve advised informally: "Want to formalize this?"',
                  'Post on LinkedIn announcing your availability with clear positioning',
                  'Attend startup events and tell everyone you\'re taking fractional clients',
                ],
                timeline: '1-3 months',
              },
              {
                step: 6,
                title: 'Deliver & Build Social Proof',
                description: 'Over-deliver for first clients. They become your sales team.',
                actions: [
                  'Drive early wins in first 90 days (measurable metrics)',
                  'Ask for LinkedIn recommendations highlighting specific results',
                  'Create case studies (with client permission) showing before/after',
                  'Stay close to founders—they refer you to other founders',
                  'Document your process: playbooks, templates, frameworks to reuse',
                ],
                timeline: '3-6 months',
              },
              {
                step: 7,
                title: 'Scale to 2-4 Clients',
                description: 'Build sustainable practice. Balance workload, maximize earning.',
                actions: [
                  'Add 2nd client once 1st is stable (month 4-6)',
                  'Systemize: async updates, monthly retainers, clear deliverables',
                  'Increase rates as demand grows (£700 → £1,000 → £1,400/day)',
                  'Optimize client mix: 2-3 long-term (12+ months), 1 project-based',
                  'Build pipeline: always have 3-5 warm leads in case client churns',
                ],
                timeline: '6-12 months',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-10 rounded-lg border-l-4 border-rose-500">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-black">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="hidden md:block text-sm font-bold text-rose-600 bg-rose-100 px-4 py-2 rounded-full">
                    {item.timeline}
                  </div>
                </div>
                <ul className="space-y-2 ml-22">
                  {item.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-rose-600 font-bold mt-1">→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary & Earning Potential */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Earning Potential</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How Much Can You Earn?</h2>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fractional CMO Day Rates (UK)</h3>
            <div className="space-y-4">
              {[
                {
                  level: 'Entry Fractional CMO',
                  experience: '10-12 years experience',
                  rate: '£700-£900/day',
                  annual: '£110k-£140k',
                  clients: '2-3 clients × 2 days each',
                },
                {
                  level: 'Mid-Level Fractional CMO',
                  experience: '12-18 years experience',
                  rate: '£900-£1,200/day',
                  annual: '£140k-£190k',
                  clients: '2-3 clients × 2 days each',
                },
                {
                  level: 'Senior Fractional CMO',
                  experience: '18+ years, proven track record',
                  rate: '£1,200-£1,400/day',
                  annual: '£190k-£220k+',
                  clients: '2-3 clients × 2-3 days each',
                },
              ].map((tier, index) => (
                <div key={index} className="p-6 bg-gray-50 border-l-4 border-rose-500 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{tier.level}</h4>
                    <p className="text-sm text-gray-600 mb-2">{tier.experience}</p>
                    <p className="text-xs text-gray-500">{tier.clients}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-rose-600">{tier.rate}</div>
                    <div className="text-sm text-gray-600 mt-1">{tier.annual} annual</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-rose-600 text-white p-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Example Earning Scenario</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <div className="text-rose-200 text-sm font-bold uppercase mb-2">Client A</div>
                <div className="text-3xl font-black mb-1">2 days/week</div>
                <div className="text-rose-100">@ £1,000/day = £104k/year</div>
              </div>
              <div>
                <div className="text-rose-200 text-sm font-bold uppercase mb-2">Client B</div>
                <div className="text-3xl font-black mb-1">2 days/week</div>
                <div className="text-rose-100">@ £1,000/day = £104k/year</div>
              </div>
              <div>
                <div className="text-rose-200 text-sm font-bold uppercase mb-2">Total Income</div>
                <div className="text-3xl font-black mb-1">£208k/year</div>
                <div className="text-rose-100">Before tax</div>
              </div>
            </div>
            <div className="border-t border-rose-400 pt-6">
              <p className="text-lg">
                <strong>After tax (40%):</strong> ~£125k take-home. Compare this to £100k-£150k as full-time CMO.
                Plus more flexibility, variety, and no office politics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <FAQ items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Go Fractional?
          </h2>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">
            Browse live fractional CMO jobs and start building your fractional career today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-cmo-jobs-uk" className="px-10 py-5 bg-white text-rose-600 font-bold uppercase tracking-wider hover:bg-rose-50 transition-colors">
              Browse Fractional CMO Jobs
            </Link>
            <Link href="/fractional-cmo-salary" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-rose-600 transition-colors">
              See Salary Data
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Resources</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/fractional-cmo" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
                Fractional CMO Guide
              </Link>
              <Link href="/fractional-cmo-salary" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
                CMO Salary Data
              </Link>
              <Link href="/what-does-a-fractional-cmo-do" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
                What CMOs Do
              </Link>
              <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">
                CMO Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
