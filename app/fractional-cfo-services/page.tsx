import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, CFO_SERVICE_FAQS } from '@/components/FAQ'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { BreadcrumbsLight } from '@/components/Breadcrumbs'
import { getRoleBreadcrumbs } from '@/lib/seo-config'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional CFO Services UK | Hire a Part-Time CFO',
  description: 'Hire a Fractional CFO for your business. Access senior financial leadership at a fraction of full-time cost. Expert CFOs for fundraising, financial strategy, and growth. Start within days.',
  keywords: 'fractional cfo, fractional cfo services, hire fractional cfo, part time cfo, fractional chief financial officer, fractional cfo uk, fractional finance director',
  alternates: {
    canonical: 'https://fractional.quest/fractional-cfo-services',
  },
  openGraph: {
    title: 'Fractional CFO Services UK | Hire a Part-Time CFO',
    description: 'Hire a Fractional CFO for your business. Senior financial leadership at a fraction of full-time cost.',
    images: ['/images/fractional-cfo-services.jpg'],
    url: 'https://fractional.quest/fractional-cfo-services',
  },
}

export default function FractionalCFOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Aspirational Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 via-blue-600/80 to-blue-500/60" />
        </div>
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <BreadcrumbsLight
              items={getRoleBreadcrumbs('cfo', 'services')}
              className="mb-8"
            />
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Financial Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Fractional CFO<br />
                <span className="text-white/70">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire a <strong className="text-white">Fractional CFO</strong> to lead your finance function.
                Senior financial leadership, strategic expertise, and hands-on support—at a fraction of full-time cost.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">60%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Cost Savings</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-3</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">7 Days</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Start</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire a Fractional CFO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Calculate Savings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Fractional CFO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Fractional CFO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              A <strong className="font-semibold text-gray-900">Fractional CFO</strong> is an experienced Chief Financial Officer who works with your company on a part-time basis—typically 1-3 days per week. You get the strategic financial leadership, expertise, and guidance of a senior CFO without the commitment and cost of a full-time hire.
            </p>
            <p>
              Unlike consultants who advise from the sidelines, a fractional CFO becomes part of your leadership team. They attend board meetings, manage your finance function, build investor relationships, and take ownership of financial outcomes—just not five days a week.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-gray-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Companies access CFO expertise for £3,000-£6,000 per week instead of £12,500+ monthly for a full-time CFO."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Fractional CFO vs Full-Time CFO</h3>
            <p>
              A full-time CFO costs £150,000-£250,000 in salary alone, plus benefits, equity, office space, and management overhead. According to <a href="https://www.bankofengland.co.uk/statistics/research-datasets" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Bank of England research</a>, UK SMEs increasingly access senior finance expertise through flexible arrangements. For many growing companies, full-time is overkill—you need CFO-level thinking on capital strategy and fundraising, but not 40 hours weekly. See our complete <Link href="/fractional-cfo-vs-full-time" className="text-blue-600 hover:text-blue-700 underline">fractional vs full-time CFO comparison</Link> for detailed analysis.
            </p>
            <p>
              A fractional CFO gives you exactly what you need: senior financial leadership scaled to your actual requirements. The <a href="https://ifs.org.uk/publications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Institute for Fiscal Studies</a> notes the UK trend toward part-time senior executives, particularly in high-growth sectors. As your company grows, you can increase their time—or transition to a full-time hire when the role justifies it. Most fractional CFOs work through <a href="https://www.gov.uk/limited-company-formation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">limited companies</a>, ensuring tax efficiency and professional structure.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Fractional CFO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Core responsibilities your fractional CFO will own</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Financial Strategy',
                description: 'Develop and execute financial strategies aligned with your business goals. Create financial models, set KPIs, and drive data-informed decisions.',
                icon: '📊',
              },
              {
                title: 'Fundraising & Capital',
                description: 'Lead equity raises and debt facilities. Build financial models, prepare data rooms, manage due diligence, and negotiate terms with investors.',
                icon: '💰',
              },
              {
                title: 'Cash Flow Management',
                description: 'Optimise working capital, manage cash flow forecasting, and ensure your runway supports your growth plans.',
                icon: '📈',
              },
              {
                title: 'Financial Reporting',
                description: 'Produce board packs, investor reports, and management accounts. Build the reporting infrastructure that scales with you.',
                icon: '📋',
              },
              {
                title: 'Team Building',
                description: 'Hire and develop your finance team. Implement processes, systems, and controls that professionalise your finance function.',
                icon: '👥',
              },
              {
                title: 'Investor Relations',
                description: 'Manage relationships with existing investors. Prepare for board meetings and provide the financial credibility investors expect.',
                icon: '🤝',
              },
              {
                title: 'M&A Support',
                description: 'Lead financial due diligence for acquisitions. Prepare your company for sale or IPO with investor-ready financials.',
                icon: '🔄',
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire a Fractional CFO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Cost Efficiency',
                description: 'Access CFO-level expertise at 40-60% less than a full-time hire. Pay only for the time you need—typically £80,000-£150,000 per year versus £200,000+ for full-time.',
                stat: '60%',
                statLabel: 'Cost Savings',
              },
              {
                title: 'Immediate Impact',
                description: 'Skip the 3-6 month recruitment process. Fractional CFOs are experienced professionals who can start within days and make immediate impact.',
                stat: '7',
                statLabel: 'Days to Start',
              },
              {
                title: 'Senior Expertise',
                description: 'Get a CFO with 15-20+ years of experience who has seen your challenges before. Many have raised hundreds of millions in funding across multiple companies.',
                stat: '15+',
                statLabel: 'Years Experience',
              },
              {
                title: 'Flexibility',
                description: 'Scale up during fundraising or critical periods, scale down during steady states. No long-term commitments—engagements flex with your needs.',
                stat: '1-5',
                statLabel: 'Days/Week Flex',
              },
              {
                title: 'Fresh Perspective',
                description: 'Fractional CFOs work across multiple companies and industries. They bring best practices, benchmarks, and insights you wouldn\'t get from a single-company CFO.',
                stat: '3-5',
                statLabel: 'Companies Seen',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-gray-900">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-gray-900">{benefit.stat}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire a Fractional CFO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none mb-8">
            <p>
              The right time to hire a fractional CFO depends on your company's stage and challenges. Here are the most common scenarios:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'Preparing for Fundraising',
                description: 'You\'re planning a Series A, B, or later round. You need financial models, a data room, and someone who can represent your finances to investors credibly.',
                timing: 'Start 3-6 months before',
              },
              {
                scenario: 'Post-Funding Scale-Up',
                description: 'You\'ve raised capital and need to professionalise finance. Investors expect proper reporting, controls, and financial leadership.',
                timing: 'Immediately after close',
              },
              {
                scenario: 'Revenue £1M-£20M',
                description: 'You\'ve outgrown a bookkeeper or part-time accountant but can\'t justify a £200k CFO. This is the sweet spot for fractional.',
                timing: 'When complexity increases',
              },
              {
                scenario: 'CEO Spending Too Much Time on Finance',
                description: 'If you\'re handling investor updates, cash management, and financial planning yourself, it\'s time to delegate to a professional.',
                timing: 'Before burnout',
              },
              {
                scenario: 'M&A or Exit Planning',
                description: 'You\'re considering acquiring companies, being acquired, or preparing for IPO. These processes require dedicated financial leadership.',
                timing: '6-12 months before',
              },
              {
                scenario: 'Financial Function Needs Building',
                description: 'You need to implement systems, hire finance staff, and create processes. A fractional CFO can build the foundation, then hand off to an FD.',
                timing: 'As early as practical',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-gray-700 uppercase tracking-wider">{item.timing}</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does a Fractional CFO Cost?</h2>
            <p className="text-gray-600 mt-4">Compare the cost of fractional vs full-time CFO</p>
          </div>
          <RoleCalculator role="cfo" />
          <div className="mt-8 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">Typical Fractional CFO Pricing</h3>
            <ul className="text-gray-600">
              <li><strong>Day Rate:</strong> £800-£1,500 per day (depending on experience and specialisation)</li>
              <li><strong>Monthly Retainer:</strong> £3,000-£6,000 for 1-2 days per week</li>
              <li><strong>Annual Cost:</strong> £80,000-£150,000 (vs £200,000+ for full-time)</li>
            </ul>
            <p className="text-sm text-gray-500">
              Pricing varies based on the CFO's experience, your industry, and complexity of the role.
              Specialist expertise (e.g., SaaS metrics, PE-backed companies) commands premium rates.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional vs Interim vs Full-Time CFO</h2>
            <p className="text-gray-600 mt-4">Choose the right model for your needs</p>
          </div>
          <ServiceComparisonTable role="CFO" accentColor="gray" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire a Fractional CFO</h2>
            <p className="text-gray-600 mt-4">From first conversation to start date in as little as 7 days</p>
          </div>
          <HireProcessStepper accentColor="gray" />
          <div className="mt-12 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">What to Look For</h3>
            <ul className="text-gray-600">
              <li><strong>Relevant Experience:</strong> Have they worked with companies at your stage and in your industry?</li>
              <li><strong>Specific Expertise:</strong> Do they have the skills you need most (fundraising, M&A, international expansion)?</li>
              <li><strong>Cultural Fit:</strong> Will they work well with your team and leadership style?</li>
              <li><strong>Availability:</strong> Can they commit to the time you need, when you need it?</li>
              <li><strong>Track Record:</strong> Can they demonstrate results from previous fractional engagements?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-2 block">Industries</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional CFOs by Industry</h2>
            <p className="text-gray-600 mt-4">Specialists with deep sector experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'SaaS & Technology', description: 'ARR/MRR metrics, burn rate management, growth financing', link: '/fractional-jobs-saas' },
              { name: 'E-commerce & DTC', description: 'Unit economics, inventory financing, marketplace expansion', link: '/fractional-jobs-ecommerce' },
              { name: 'FinTech', description: 'Regulatory compliance, funding rounds, FCA requirements', link: '/fractional-jobs-finance' },
              { name: 'Healthcare & HealthTech', description: 'NHS contracting, clinical economics, health regulations', link: '/fractional-jobs-healthcare' },
              { name: 'Professional Services', description: 'Partner economics, utilisation metrics, practice management', link: '/fractional-jobs-professional-services' },
              { name: 'Startups & Scale-ups', description: 'Seed to Series C, investor relations, rapid scaling', link: '/fractional-jobs-startups' },
            ].map((industry, index) => (
              <Link key={index} href={industry.link} className="block bg-white p-6 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </Link>
            ))}
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
          <FAQ items={CFO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire a<br /><span className="text-gray-400">Fractional CFO?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Tell us about your needs and we'll match you with pre-vetted fractional CFOs who fit your requirements. Start conversations within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find a Fractional CFO
            </Link>
            <Link href="/fractional-cfo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CFO Looking for Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related CFO Resources */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Complete CFO Resource Hub</h2>
            <p className="text-gray-600">Explore our comprehensive guides for businesses and CFO professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For Businesses</h3>
              <div className="space-y-2">
                <Link href="/fractional-cfo-vs-full-time" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Fractional vs Full-Time CFO</Link>
                <Link href="/fractional-cfo-companies" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Service Providers</Link>
                <Link href="/fractional-cfo-cost" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Cost Guide</Link>
                <Link href="/fractional-cfo-hourly-rate" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Rates 2025</Link>
                <Link href="/fractional-cfo-for-startups" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO for Startups</Link>
                <Link href="/outsourced-cfo-services" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Outsourced CFO Services</Link>
                <Link href="/virtual-cfo-services" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Virtual CFO Services</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">For CFO Professionals</h3>
              <div className="space-y-2">
                <Link href="/how-to-become-fractional-cfo" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Become a Fractional CFO</Link>
                <Link href="/fractional-cfo-training" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Training & Certification</Link>
                <Link href="/fractional-cfo-jobs-remote" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Remote CFO Jobs</Link>
                <Link href="/contract-cfo-jobs" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Contract CFO Jobs</Link>
                <Link href="/fractional-controller-jobs" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Controller Jobs</Link>
                <Link href="/fractional-cfo-salary" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Salary Guide</Link>
                <Link href="/cfo-community-reddit" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">CFO Communities</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3">Market Insights</h3>
              <div className="space-y-2">
                <Link href="/fractional-cfo-salary-report-2025" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">2025 Salary Report</Link>
                <Link href="/state-fractional-cfo-market-2025" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">2025 Market Report</Link>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-3 mt-6">Other Fractional Roles</h3>
              <div className="space-y-2">
                <Link href="/fractional-cmo-services" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Fractional CMO</Link>
                <Link href="/fractional-cto-services" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Fractional CTO</Link>
                <Link href="/fractional-coo-services" className="block text-gray-600 hover:text-blue-600 font-medium transition-colors">Fractional COO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
