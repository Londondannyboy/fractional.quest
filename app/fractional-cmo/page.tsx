import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, CMO_FAQS } from '@/components/FAQ'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CMO: Complete Guide to Part-Time Chief Marketing Officers | Fractional.Quest',
  description: 'Ultimate guide to fractional CMOs. Learn what they do, when to hire, costs (£700-£1,400/day), ROI, and how to find the perfect marketing leader for your business. Browse 100+ fractional CMO jobs.',
  keywords: 'fractional cmo, part time cmo, fractional chief marketing officer, fractional cmo uk, fractional cmo cost, hire fractional cmo, what is a fractional cmo',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cmo',
  },
  openGraph: {
    title: 'Fractional CMO: Complete Guide to Part-Time Chief Marketing Officers',
    description: 'Everything you need to know about fractional CMOs. Costs, benefits, when to hire, and 100+ live job opportunities.',
    images: ['/images/fractional-cmo-og.jpg'],
    url: 'https://fractional.quest/fractional-cmo',
  },
}

export default function FractionalCMOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with 3D Knowledge Graph Background */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <JobsGraph3D roleFilter="CMO" limit={30} height="100%" isHero={true} showOverlay={true} />
        </div>
        <div className="relative z-10 w-full py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-amber-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Ultimate Guide
              </span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
                Fractional<br />
                <span className="text-amber-400">CMO</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 leading-relaxed max-w-3xl mb-10 font-light">
                The complete guide to hiring (or becoming) a <strong className="text-white font-semibold">Fractional Chief Marketing Officer</strong>.
                Part-time marketing leadership that drives growth without full-time cost.
              </p>
              <div className="flex flex-wrap gap-10 mb-12">
                <div>
                  <div className="text-5xl md:text-6xl font-black text-amber-400">£700-1.4k</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider mt-1">Day Rate Range</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-black text-white">40-60%</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider mt-1">Cost Savings</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-black text-white">100+</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider mt-1">Live Jobs</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors text-lg">
                  Browse CMO Jobs
                </Link>
                <Link href="#cost-calculator" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-lg">
                  Calculate Cost Savings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6">
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#what-is" className="text-gray-400 hover:text-amber-400 transition-colors">What is a Fractional CMO?</a>
            <a href="#when-to-hire" className="text-gray-400 hover:text-amber-400 transition-colors">When to Hire</a>
            <a href="#what-they-do" className="text-gray-400 hover:text-amber-400 transition-colors">What They Do</a>
            <a href="#cost-calculator" className="text-gray-400 hover:text-amber-400 transition-colors">Cost & Pricing</a>
            <a href="#how-to-hire" className="text-gray-400 hover:text-amber-400 transition-colors">How to Hire</a>
            <a href="#roi" className="text-gray-400 hover:text-amber-400 transition-colors">ROI & Benefits</a>
            <a href="#faq" className="text-gray-400 hover:text-amber-400 transition-colors">FAQ</a>
            <a href="#jobs" className="text-gray-400 hover:text-amber-400 transition-colors">Jobs</a>
          </nav>
        </div>
      </section>

      {/* What is a Fractional CMO */}
      <section id="what-is" className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Definition</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">What is a Fractional CMO?</h2>
          </div>

          <div className="prose prose-xl prose-gray max-w-none">
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-10 font-light">
              A <strong className="font-semibold text-gray-900">Fractional CMO</strong> (Chief Marketing Officer) is a seasoned marketing executive who works with your company on a part-time or project basis—typically 1-3 days per week. You get senior-level marketing leadership, strategic expertise, and proven execution frameworks without the £150,000-£250,000 annual commitment of a full-time CMO.
            </p>

            <p className="text-lg leading-relaxed">
              Think of it as "marketing leadership as a service." Fractional CMOs bring 15+ years of experience scaling companies like yours. They've built marketing engines, hired teams, launched products, and driven millions in revenue. Now they work with 2-4 companies simultaneously, sharing that expertise at a fraction of the cost.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-8 my-12 not-prose">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <p className="text-xl font-semibold text-gray-900 mb-2">
                    The fractional model works because most companies don't need a CMO five days a week.
                  </p>
                  <p className="text-gray-700">
                    Strategic decisions happen weekly, not daily. A fractional CMO spends 2 days per week setting direction, building systems, and coaching your team—then your team executes during the other 3 days. You get the expertise when it matters, without paying for downtime.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-black text-gray-900 mt-16 mb-6">Fractional vs Full-Time vs Agency</h3>

            <p className="text-lg">
              Understanding the difference is critical to making the right hire:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 text-lg mb-3">Fractional CMO</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✅ Strategic leadership</li>
                  <li>✅ Team building & management</li>
                  <li>✅ Embedded in your company</li>
                  <li>✅ Accountable for results</li>
                  <li>✅ 1-3 days/week commitment</li>
                  <li>✅ £70k-£140k annual cost</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 text-lg mb-3">Full-Time CMO</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✅ Strategic leadership</li>
                  <li>✅ Full-time availability</li>
                  <li>✅ Deep company integration</li>
                  <li>✅ Equity alignment</li>
                  <li>❌ £150k-£250k+ annual cost</li>
                  <li>❌ 3-6 month hiring process</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 text-lg mb-3">Marketing Agency</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✅ Tactical execution</li>
                  <li>✅ Specialized capabilities</li>
                  <li>❌ Not strategic leadership</li>
                  <li>❌ Vendor relationship</li>
                  <li>❌ Doesn't manage your team</li>
                  <li>❌ Not accountable for strategy</li>
                </ul>
              </div>
            </div>

            <p className="text-lg">
              <strong>Key insight:</strong> Marketing agencies execute tactics (run ads, create content, manage social). Fractional CMOs <em>lead</em> (set strategy, build teams, own results). Many successful companies use both: a fractional CMO to lead, with agencies handling specialized execution.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Signs You Need a Fractional CMO */}
      <section id="when-to-hire" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">When to Hire</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">7 Signs Your Business Needs a Fractional CMO</h2>
            <p className="text-xl text-gray-600">
              Not sure if you're ready? Here are the telltale signs it's time to bring in marketing leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: '1',
                title: 'Marketing Spend with No Clear ROI',
                description: 'You\'re spending £10k-£50k/month on marketing—ads, agencies, tools—but can\'t articulate what\'s working or tie it to revenue. You need strategic oversight to optimize spend and prove ROI.',
                icon: '💸',
              },
              {
                number: '2',
                title: 'Founder-Led Marketing Has Hit a Wall',
                description: 'The CEO or founder has been "doing marketing" between product and fundraising calls. It worked for early traction, but now growth has plateaued and the founder needs to focus on their actual job.',
                icon: '🚧',
              },
              {
                number: '3',
                title: 'You Have a Marketing Team But No Strategy',
                description: 'You\'ve hired 2-4 marketers—maybe a content person, performance marketer, designer—but they lack direction. They\'re executing tactics without a cohesive strategy or someone making the hard prioritization calls.',
                icon: '🎯',
              },
              {
                number: '4',
                title: 'Post-Product-Market Fit Growth',
                description: 'You\'ve validated PMF and raised Series A or B. Now you need to scale customer acquisition systematically. This is the classic fractional CMO moment: build the marketing engine that takes you from £1M to £10M ARR.',
                icon: '📈',
              },
              {
                number: '5',
                title: 'Launching in a New Market or Vertical',
                description: 'Expanding to a new geography (e.g., UK to US), audience segment, or product line. You need someone who\'s done it before to lead GTM strategy, positioning, and messaging.',
                icon: '🌍',
              },
              {
                number: '6',
                title: 'Marketing Agencies Aren\'t Delivering',
                description: 'You\'ve hired agencies for SEO, paid ads, PR—but they operate in silos without strategic alignment. A fractional CMO acts as the "client-side quarterback" to coordinate agency work and drive accountability.',
                icon: '🤝',
              },
              {
                number: '7',
                title: 'You Can\'t Justify a £200k+ Full-Time CMO',
                description: 'You need senior marketing leadership but don\'t have the budget, headcount, or workload to justify a full-time executive hire. Fractional gives you 80% of the value at 40% of the cost.',
                icon: '💰',
              },
            ].map((sign, index) => (
              <div key={index} className="bg-white p-8 border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-500 text-black flex items-center justify-center rounded-full text-2xl font-black">
                      {sign.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl mb-3">{sign.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{sign.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{sign.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border-2 border-amber-300 p-8 rounded-lg">
            <p className="text-lg text-gray-700">
              <strong className="text-gray-900">Rule of thumb:</strong> If you checked 2+ boxes above, you should be talking to fractional CMOs this week. If you checked 4+, you're already late—marketing leadership should have been your last hire.
            </p>
          </div>
        </div>
      </section>

      {/* What Does a Fractional CMO Do */}
      <section id="what-they-do" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Roles & Responsibilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">What Does a Fractional CMO Actually Do?</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              A fractional CMO owns your entire marketing function. Here's what that looks like in practice across the first 90 days and beyond.
            </p>
          </div>

          {/* First 90 Days */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">The First 90 Days: Building the Foundation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-amber-600 font-bold text-sm mb-2">DAYS 1-30: AUDIT & STRATEGY</div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Marketing audit: channels, spend, performance</li>
                  <li>• Customer & market research</li>
                  <li>• Competitive analysis</li>
                  <li>• Define ICP and positioning</li>
                  <li>• Build 12-month marketing strategy</li>
                  <li>• Set KPIs and success metrics</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-amber-600 font-bold text-sm mb-2">DAYS 31-60: BUILD & OPTIMIZE</div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Implement marketing tech stack</li>
                  <li>• Set up analytics and attribution</li>
                  <li>• Launch quick-win campaigns</li>
                  <li>• Start hiring or upskilling team</li>
                  <li>• Onboard/optimize agencies</li>
                  <li>• Create content calendar</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-amber-600 font-bold text-sm mb-2">DAYS 61-90: SCALE & MEASURE</div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Scale high-performing channels</li>
                  <li>• Build repeatable processes</li>
                  <li>• Report on early wins</li>
                  <li>• Refine based on data</li>
                  <li>• Plan next quarter initiatives</li>
                  <li>• Begin team expansion if needed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ongoing Responsibilities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Ongoing Responsibilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Marketing Strategy & Planning',
                  description: 'Own the overall marketing strategy. Define positioning, messaging, target audiences, channel mix, and quarterly OKRs. Make the big strategic bets.',
                  icon: '🎯',
                },
                {
                  title: 'Team Leadership & Development',
                  description: 'Lead, mentor, and develop your marketing team. Hire key roles, set structure, run 1-on-1s, and build a high-performing culture.',
                  icon: '👥',
                },
                {
                  title: 'Demand Generation & Growth',
                  description: 'Drive customer acquisition across all channels—performance marketing, SEO, content, partnerships, PLG. Own the top of funnel.',
                  icon: '📈',
                },
                {
                  title: 'Brand & Product Marketing',
                  description: 'Shape brand identity, messaging, and positioning. Launch products, manage GTM, create sales enablement materials.',
                  icon: '✨',
                },
                {
                  title: 'Marketing Operations & Analytics',
                  description: 'Build marketing infrastructure: tech stack (CRM, automation, analytics), reporting dashboards, attribution models, data governance.',
                  icon: '⚙️',
                },
                {
                  title: 'Agency & Vendor Management',
                  description: 'Select, brief, and manage external partners—agencies, freelancers, tools. Ensure they deliver on strategy and budget.',
                  icon: '🤝',
                },
                {
                  title: 'Budget & Resource Allocation',
                  description: 'Manage marketing budget (typically 10-30% of revenue). Allocate spend across channels, optimize ROI, forecast future needs.',
                  icon: '💰',
                },
                {
                  title: 'Performance Tracking & Reporting',
                  description: 'Define KPIs, build dashboards, track performance, report to leadership. Make data-driven decisions and course corrections.',
                  icon: '📊',
                },
                {
                  title: 'Cross-Functional Leadership',
                  description: 'Sit in leadership team meetings. Partner with sales on pipeline, product on roadmap, customer success on retention.',
                  icon: '🔄',
                },
              ].map((responsibility, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 hover:border-amber-300 transition-colors">
                  <div className="text-3xl mb-4">{responsibility.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">{responsibility.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{responsibility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Pricing Calculator */}
      <section id="cost-calculator" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Cost & Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How Much Does a Fractional CMO Cost?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pricing varies by experience, industry, and engagement model. Use our calculator to see potential savings vs full-time.
            </p>
          </div>

          <RoleCalculator role="cmo" />

          <div className="mt-16 prose prose-lg prose-gray max-w-none">
            <h3 className="text-2xl font-bold text-gray-900">Fractional CMO Pricing Models</h3>

            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
              <div className="bg-white p-6 border-2 border-gray-200 rounded-lg">
                <h4 className="font-bold text-amber-600 text-sm uppercase tracking-wider mb-2">Day Rate</h4>
                <div className="text-3xl font-black text-gray-900 mb-2">£700-£1,400</div>
                <p className="text-sm text-gray-600 mb-4">per day</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Flexible engagement</li>
                  <li>• Pay only for time used</li>
                  <li>• Great for projects</li>
                  <li>• 1-3 days per week typical</li>
                </ul>
              </div>

              <div className="bg-white p-6 border-2 border-amber-300 rounded-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black px-3 py-1 text-xs font-bold uppercase">
                  Most Popular
                </div>
                <h4 className="font-bold text-amber-600 text-sm uppercase tracking-wider mb-2">Monthly Retainer</h4>
                <div className="text-3xl font-black text-gray-900 mb-2">£3k-£5.5k</div>
                <p className="text-sm text-gray-600 mb-4">per month</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ongoing support</li>
                  <li>• Predictable costs</li>
                  <li>• 4-8 days per month</li>
                  <li>• Best for long-term growth</li>
                </ul>
              </div>

              <div className="bg-white p-6 border-2 border-gray-200 rounded-lg">
                <h4 className="font-bold text-amber-600 text-sm uppercase tracking-wider mb-2">Project-Based</h4>
                <div className="text-3xl font-black text-gray-900 mb-2">£10k-£50k</div>
                <p className="text-sm text-gray-600 mb-4">per project</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Defined scope & deliverables</li>
                  <li>• Fixed cost</li>
                  <li>• Rebrands, launches, audits</li>
                  <li>• 3-6 month timeline</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12">What Affects Pricing?</h3>
            <ul className="text-gray-700">
              <li><strong>Experience Level:</strong> 10-15 years = £700-£900/day. 15-20 years = £900-£1,200/day. 20+ years or specialist = £1,200-£1,400/day.</li>
              <li><strong>Industry Expertise:</strong> Specialists in high-demand sectors (B2B SaaS, FinTech, HealthTech) command 15-25% premium.</li>
              <li><strong>Channel Specialization:</strong> Deep expertise in PLG, performance marketing, or brand building increases rates.</li>
              <li><strong>Engagement Scope:</strong> Strategic advisory only = lower rates. Hands-on execution + team management = higher rates.</li>
              <li><strong>Location:</strong> London-based CMOs charge 10-20% more than regional (though most work is remote).</li>
              <li><strong>Company Stage:</strong> Early-stage startups may negotiate lower rates in exchange for equity or advisory shares.</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <p className="text-gray-900 font-semibold mb-2">💡 ROI Reality Check</p>
              <p className="text-gray-700 text-sm mb-0">
                A £1,000/day fractional CMO working 2 days/week costs £104k annually. A full-time CMO with the same experience costs £180k-£250k in salary + £40k-£60k in benefits, equity, and overhead. You save £100k+ while getting the strategic expertise you actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Comparison</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Fractional vs Interim vs Part-Time vs Full-Time CMO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the differences helps you choose the right model for your business.
            </p>
          </div>
          <ServiceComparisonTable role="CMO" accentColor="amber" />
        </div>
      </section>

      {/* How to Hire */}
      <section id="how-to-hire" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Hiring Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How to Hire a Fractional CMO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From first conversation to start date in as little as 2-4 weeks. Here's the proven process.
            </p>
          </div>

          <HireProcessStepper accentColor="amber" />

          <div className="mt-16 prose prose-lg prose-gray max-w-none">
            <h3 className="text-2xl font-bold text-gray-900">Questions to Ask in Interviews</h3>

            <p className="text-gray-700">
              These questions separate strategic CMOs from tactical marketers:
            </p>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg my-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">🎯 Strategy & Experience</h4>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>• "Walk me through how you scaled marketing at [previous company]. What worked? What didn't?"</li>
                <li>• "What's your approach to developing marketing strategy from scratch?"</li>
                <li>• "How do you prioritize channels when you have limited budget?"</li>
                <li>• "Tell me about a time you pivoted strategy mid-execution. What changed and why?"</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg my-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">📊 Metrics & Performance</h4>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>• "What marketing KPIs do you track religiously? How do you define success?"</li>
                <li>• "How do you approach attribution modeling and proving marketing ROI?"</li>
                <li>• "What's an example of a campaign that underperformed? How did you diagnose and fix it?"</li>
                <li>• "What CAC and LTV ratios are healthy for a business like ours?"</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg my-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">👥 Team & Leadership</h4>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>• "How would you structure our marketing team? What roles would you hire first?"</li>
                <li>• "How do you manage agencies vs in-house teams?"</li>
                <li>• "Tell me about a time you had to coach an underperforming marketer."</li>
                <li>• "How do you balance being fractional with building deep relationships with the team?"</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg my-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">🔍 Company Fit</h4>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>• "What's your experience in [our industry]? What unique challenges does it have?"</li>
                <li>• "How many companies are you currently working with? How do you manage time?"</li>
                <li>• "What would success look like for you in the first 90 days here?"</li>
                <li>• "What red flags would make you walk away from this engagement?"</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12">Red Flags to Watch For</h3>
            <ul className="text-gray-700">
              <li>🚩 <strong>Can't articulate measurable results:</strong> If they talk in platitudes without concrete metrics, they're not data-driven.</li>
              <li>🚩 <strong>Overcommitted:</strong> Working with 5+ companies means you won't get the focus you need.</li>
              <li>🚩 <strong>One-trick pony:</strong> Only done one channel (e.g., just SEO or just paid ads) won't have full-funnel perspective.</li>
              <li>🚩 <strong>Never built a team:</strong> If they've only been individual contributors, they lack leadership experience.</li>
              <li>🚩 <strong>Defensive about past failures:</strong> Great CMOs own their mistakes and explain what they learned.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ROI & Benefits */}
      <section id="roi" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">ROI & Benefits</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Hire a Fractional CMO?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The business case for fractional marketing leadership is compelling. Here's why companies make the switch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Cost Efficiency: 40-60% Savings',
                description: 'Access CMO-level expertise at a fraction of full-time cost. A fractional CMO at £1,000/day for 2 days/week costs £104k annually vs £180k-£250k+ for full-time (salary + benefits + equity + overhead). You save £100k+ while getting the strategic leadership you need.',
                stat: '50%',
                statLabel: 'Average Cost Savings',
              },
              {
                title: 'Speed to Impact: Start in Weeks, Not Months',
                description: 'Recruiting a full-time CMO takes 3-6 months. Fractional CMOs can start within 1-2 weeks and deliver value immediately with proven playbooks. No 90-day ramp period—they\'ve seen your challenges before and know exactly how to solve them.',
                stat: '2-4',
                statLabel: 'Weeks to Impact',
              },
              {
                title: 'Deep Expertise Across Multiple Companies',
                description: 'Fractional CMOs bring 15-20 years of experience scaling companies like yours. Because they work with 2-4 companies simultaneously, they see what works across different models, markets, and stages. You get cross-pollinated best practices and fresh perspectives.',
                stat: '15-20',
                statLabel: 'Years Experience',
              },
              {
                title: 'Flexibility to Scale Up or Down',
                description: 'Increase days per week for product launches or fundraising. Reduce during steady-state periods. No long-term employment contracts or severance risk. Engagements flex with your business needs and cash flow.',
                stat: '1-5',
                statLabel: 'Days/Week Flexible',
              },
              {
                title: 'No Equity Dilution',
                description: 'Full-time CMOs at startups expect 0.5-2% equity. At a £50M valuation, that\'s £250k-£1M in ownership you retain. Some fractional CMOs take small advisory stakes (0.1-0.25%), but most work for cash only.',
                stat: '0-0.25%',
                statLabel: 'Equity Typical',
              },
              {
                title: 'Lower Risk: Try Before You Commit',
                description: 'Start with a 3-month trial engagement. If it works, extend. If not, part ways cleanly with 30 days notice. Much lower risk than hiring a £200k full-time executive who may take 6+ months to exit.',
                stat: '30',
                statLabel: 'Days Notice',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 border-l-4 border-amber-500">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 text-center">
                    <div className="text-4xl font-black text-amber-600">{benefit.stat}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{benefit.statLabel}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border-2 border-amber-300 p-10 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real ROI Example</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A Series A SaaS company hired a fractional CMO at £1,200/day, 2 days/week (£125k annual cost). In 12 months, they:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Reduced CAC from £4,200 to £2,100 (50% improvement)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Grew MQLs from 120 to 380 per month (3.2x)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Increased pipeline by £2.4M annually</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Hired and onboarded 3 full-time marketers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Built repeatable demand gen engine</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span>
                <span>Positioned company for successful Series B</span>
              </li>
            </ul>
            <p className="text-gray-900 font-bold mt-6">
              ROI: £125k investment → £2.4M incremental pipeline = 19x return in year one.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CMO_FAQS} title="" />
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 block">Live Opportunities</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Fractional CMO Jobs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Browse 100+ live fractional CMO opportunities. Companies hiring now for part-time marketing leadership.
            </p>
            <Link
              href="/fractional-cmo-jobs-uk"
              className="inline-block px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors text-lg"
            >
              View All CMO Jobs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Ready to Hire a<br /><span className="text-amber-400">Fractional CMO?</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Tell us about your growth challenges. We'll match you with pre-vetted fractional CMOs who have solved them before. Start conversations within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/handler/sign-up" className="px-12 py-6 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors text-lg">
              Find a Fractional CMO
            </Link>
            <Link href="/fractional-cmo-jobs-uk" className="px-12 py-6 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-lg">
              I'm a CMO Looking for Work
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/fractional-cmo-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">
              Fractional CMO Services →
            </Link>
            <Link href="/fractional-cmo-salary" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">
              CMO Salary Guide →
            </Link>
            <Link href="/fractional-cmo-jobs-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">
              CMO Jobs UK →
            </Link>
            <Link href="/hire-fractional-cmo" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">
              How to Hire a CMO →
            </Link>
            <Link href="/what-is-a-fractional-cmo" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">
              What is a Fractional CMO? →
            </Link>
            <Link href="/fractional-cfo-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">
              Fractional CFO →
            </Link>
            <Link href="/fractional-cto-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">
              Fractional CTO →
            </Link>
            <Link href="/fractional-coo-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">
              Fractional COO →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
