import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Fractional Executive Meaning UK 2025',
  description: 'What does fractional executive mean? Complete guide to the fractional executive model and how it works.',
  keywords: 'fractional executive meaning, what is a fractional executive, fractional executive definition, fractional meaning, fractional cxo',
  alternates: {
    canonical: 'https://fractional.quest/fractional-executive-meaning',
  },
  openGraph: {
    title: 'Fractional Executive Meaning UK 2025',
    description: 'Understanding the fractional executive model.',
    url: 'https://fractional.quest/fractional-executive-meaning',
  },
}

const faqItems = [
  {
    question: 'What does fractional executive mean?',
    answer: 'A fractional executive is a senior business leader (CFO, CMO, CTO, etc.) who works with a company on a part-time basis—typically 1-3 days per week. "Fractional" refers to providing a fraction of their time, rather than full-time commitment.',
  },
  {
    question: 'Why is it called fractional?',
    answer: 'The term "fractional" comes from the concept of fractional ownership—like owning a fraction of a vacation property. You get access to executive-level talent for a fraction of the time (and cost) of a full-time hire.',
  },
  {
    question: 'Is fractional the same as part-time?',
    answer: 'Fractional executives are part-time in terms of hours, but they typically work with multiple clients and operate as independent consultants or through their own companies—not as traditional part-time employees.',
  },
  {
    question: 'How is fractional different from interim?',
    answer: 'Fractional executives work part-time (1-3 days/week) on an ongoing basis with multiple clients. Interim executives work near full-time (4-5 days/week) for a single company for a fixed period, usually to fill a gap.',
  },
]

export default function FractionalExecutiveMeaningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-800 to-zinc-700 py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded">
              Definition Guide
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Fractional Executive<br />Meaning
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-300 leading-relaxed font-light">
              Understanding what "fractional" means in executive leadership and how the model works.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-zinc-100 border-b-4 border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white p-10 rounded-lg shadow-sm border-2 border-zinc-200">
            <h2 className="text-3xl font-black text-gray-900 mb-6">What Does Fractional Executive Mean?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed font-light mb-6">
              A <strong className="font-semibold text-gray-900">fractional executive</strong> is a senior business leader who works with companies on a part-time basis—typically 1-3 days per week—providing C-suite or director-level expertise without the full-time commitment or cost.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              The term "fractional" refers to the time allocation: companies get a fraction of the executive's working week, accessing senior talent at 50-70% lower cost than a permanent hire.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Executive working flexibly"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-xl prose-gray max-w-none">
            <h2 className="text-3xl font-black text-gray-900">The Origin of "Fractional"</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The term "fractional" in business comes from the concept of <strong>fractional ownership</strong>—sharing ownership of high-value assets like private jets, yachts, or vacation properties. Rather than bearing the full cost and commitment of ownership, multiple parties share the asset and its expenses.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Applied to executive talent, "fractional" means the same principle: companies share access to senior executives, each getting a fraction of their time—and paying a fraction of what a full-time hire would cost.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mt-16">How Fractional Executives Work</h2>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Time Commitment</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>1-3 days per week typical</li>
                  <li>Regular, ongoing engagement</li>
                  <li>Flexible scheduling</li>
                  <li>Often hybrid/remote</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Multiple Clients</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Serve 2-4 companies simultaneously</li>
                  <li>Diversified experience</li>
                  <li>Cross-pollination of ideas</li>
                  <li>Portfolio career model</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Engagement Model</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Day rate or monthly retainer</li>
                  <li>Contractor/consultancy basis</li>
                  <li>6-12+ month typical duration</li>
                  <li>Flexible terms</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Role Scope</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>Full executive responsibilities</li>
                  <li>Join leadership team</li>
                  <li>Own their function</li>
                  <li>Board/investor interface</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Fractional vs Other Executive Models</h2>

            <div className="overflow-x-auto my-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-bold text-gray-900">Aspect</th>
                    <th className="text-left py-3 font-bold text-zinc-700">Fractional</th>
                    <th className="text-left py-3 font-bold text-gray-500">Interim</th>
                    <th className="text-left py-3 font-bold text-gray-500">Consultant</th>
                    <th className="text-left py-3 font-bold text-gray-500">Full-Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 font-medium">Time</td>
                    <td className="py-3 text-zinc-700">1-3 days/week</td>
                    <td className="py-3 text-gray-600">4-5 days/week</td>
                    <td className="py-3 text-gray-600">Project-based</td>
                    <td className="py-3 text-gray-600">5 days/week</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Duration</td>
                    <td className="py-3 text-zinc-700">Ongoing</td>
                    <td className="py-3 text-gray-600">3-12 months</td>
                    <td className="py-3 text-gray-600">Project</td>
                    <td className="py-3 text-gray-600">Permanent</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Clients</td>
                    <td className="py-3 text-zinc-700">Multiple</td>
                    <td className="py-3 text-gray-600">Usually one</td>
                    <td className="py-3 text-gray-600">Multiple</td>
                    <td className="py-3 text-gray-600">One</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Accountability</td>
                    <td className="py-3 text-zinc-700">Own function</td>
                    <td className="py-3 text-gray-600">Own function</td>
                    <td className="py-3 text-gray-600">Advise only</td>
                    <td className="py-3 text-gray-600">Own function</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Common Fractional Executive Roles</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The fractional model applies across all C-suite and senior leadership positions:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-10">
              <Link href="/fractional-cfo" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-zinc-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-zinc-700">Fractional CFO</h3>
                <p className="text-sm text-gray-600">Finance leadership</p>
              </Link>

              <Link href="/fractional-cmo-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-zinc-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-zinc-700">Fractional CMO</h3>
                <p className="text-sm text-gray-600">Marketing leadership</p>
              </Link>

              <Link href="/fractional-cto-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-zinc-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-zinc-700">Fractional CTO</h3>
                <p className="text-sm text-gray-600">Technology leadership</p>
              </Link>

              <Link href="/fractional-coo-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-zinc-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-zinc-700">Fractional COO</h3>
                <p className="text-sm text-gray-600">Operations leadership</p>
              </Link>

              <Link href="/fractional-chro-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-zinc-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-zinc-700">Fractional CHRO</h3>
                <p className="text-sm text-gray-600">HR leadership</p>
              </Link>

              <Link href="/fractional-cro-jobs-uk" className="bg-white border-2 border-gray-200 p-5 rounded-lg hover:border-zinc-400 transition-colors group text-center">
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-zinc-700">Fractional CRO</h3>
                <p className="text-sm text-gray-600">Revenue leadership</p>
              </Link>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Who Uses Fractional Executives?</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              The fractional model is most commonly used by:
            </p>

            <ul className="text-lg space-y-3 my-8">
              <li><strong>Startups (Seed to Series B):</strong> Need senior expertise but can't afford or justify full-time C-suite</li>
              <li><strong>Scale-ups:</strong> Growing fast and need to professionalize functions</li>
              <li><strong>PE-backed companies:</strong> Portfolio companies needing quick capability injection</li>
              <li><strong>SMEs:</strong> Established businesses accessing skills typically reserved for larger companies</li>
              <li><strong>Turnarounds:</strong> Companies needing specific expertise for transformation</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16">Benefits of the Fractional Model</h2>

            <div className="grid gap-4 my-10">
              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-zinc-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Cost Efficiency</h4>
                  <p className="text-sm text-gray-600 m-0">Access senior talent at 50-70% of full-time cost. Pay only for time needed.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-zinc-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Flexibility</h4>
                  <p className="text-sm text-gray-600 m-0">Scale up or down as needs change. No long-term employment commitments.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-zinc-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Experience</h4>
                  <p className="text-sm text-gray-600 m-0">Often more experienced than affordable full-time hires. Been there, done it.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 border rounded-lg bg-white">
                <div className="w-1.5 bg-zinc-700 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-900">Speed</h4>
                  <p className="text-sm text-gray-600 m-0">Start in weeks, not months. No lengthy recruitment process.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-lg my-8">
              <p className="text-2xl font-light leading-relaxed mb-0">
                <strong className="text-zinc-300">In Summary:</strong> "Fractional executive" means a senior leader who works part-time (1-3 days/week) with multiple companies, providing C-suite expertise at a fraction of full-time cost.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">FAQs</h2>
          <FAQ skipSchema={true} items={faqItems} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Explore Fractional Roles</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/fractional-executive-jobs" className="px-10 py-5 bg-white text-zinc-800 font-bold uppercase tracking-wider hover:bg-zinc-100 transition-colors">
              Executive Jobs
            </Link>
            <Link href="/fractional-executive" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-zinc-800 transition-colors">
              Complete Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/fractional-executive" className="text-gray-600 hover:text-zinc-700 font-medium">Fractional Executive</Link>
            <Link href="/fractional-work" className="text-gray-600 hover:text-zinc-700 font-medium">Fractional Work</Link>
            <Link href="/fractional-c-suite" className="text-gray-600 hover:text-zinc-700 font-medium">C-Suite</Link>
            <Link href="/fractional-executive-jobs" className="text-gray-600 hover:text-zinc-700 font-medium">Executive Jobs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
