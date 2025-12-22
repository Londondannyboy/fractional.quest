import Link from 'next/link'

interface RoleHubData {
  title: string
  description: string
  jobsLink: string
  servicesLink: string
  salaryLink?: string
  heroImage: string
  color: string
}

const ROLE_DATA: Record<string, RoleHubData> = {
  cfo: {
    title: 'Fractional CFO Hub',
    description: 'The central resource for Fractional Chief Financial Officers. Access jobs, hiring services, salary data, and expert guides.',
    jobsLink: '/fractional-cfo-jobs-uk',
    servicesLink: '/fractional-cfo-services',
    salaryLink: '/fractional-cfo-salary',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80',
    color: 'blue'
  },
  cmo: {
    title: 'Fractional CMO Hub',
    description: 'Your gateway to Fractional Chief Marketing Officer roles. Explore opportunities, hire talent, and benchmark day rates.',
    jobsLink: '/fractional-cmo-jobs-uk',
    servicesLink: '/fractional-cmo-services',
    salaryLink: '/fractional-cmo-salary',
    heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
    color: 'amber'
  },
  cto: {
    title: 'Fractional CTO Hub',
    description: 'The home for Fractional Chief Technology Officers. Find tech leadership jobs, access services, and view market rates.',
    jobsLink: '/fractional-cto-jobs-uk',
    servicesLink: '/fractional-cto-services',
    salaryLink: '/fractional-cto-salary',
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
    color: 'purple'
  },
  coo: {
    title: 'Fractional COO Hub',
    description: 'Resources for Fractional Chief Operating Officers. Navigate the operations market with jobs, guides, and salary insights.',
    jobsLink: '/fractional-coo-jobs-uk',
    servicesLink: '/fractional-coo-services',
    salaryLink: '/fractional-coo-salary',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=80',
    color: 'orange'
  },
  chro: {
    title: 'Fractional CHRO Hub',
    description: 'The definitive hub for Fractional HR leadership. Find opportunities, hire experts, and understand the HR market.',
    jobsLink: '/fractional-chro-jobs-uk',
    servicesLink: '/fractional-chro-services',
    salaryLink: '/fractional-hr-salary',
    heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
    color: 'pink'
  }
}

export function RoleHubHeader({ role }: { role: string }) {
  const data = ROLE_DATA[role.toLowerCase()]
  if (!data) return null

  const gradients: Record<string, string> = {
    blue: 'from-blue-900 via-blue-800/90',
    amber: 'from-amber-900 via-amber-800/90',
    purple: 'from-purple-900 via-purple-800/90',
    orange: 'from-orange-900 via-orange-800/90',
    pink: 'from-pink-900 via-pink-800/90',
  }

  const gradient = gradients[data.color] || 'from-gray-900 via-gray-800/90'

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
            <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-30" />
            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} to-gray-900/50`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <Link href="/fractional-jobs-articles" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm tracking-wide">
                      <span className="mr-2">←</span> Back to Resources
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                        {data.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm font-medium text-white/70">
                        <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>Jobs Live</span>
                        <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>Updated 2025</span>
                    </div>
                </div>

                {/* Bento Grid Navigation */}
                <div className="grid grid-cols-2 gap-4">
                    <Link href={data.jobsLink} className="group p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-lg">
                        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">💼</div>
                        <div className="font-bold text-lg mb-1">Find Jobs</div>
                        <div className="text-sm text-white/70 group-hover:text-white">Browse active fractional roles</div>
                    </Link>
                    
                    <Link href={data.servicesLink} className="group p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-lg">
                        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">🤝</div>
                        <div className="font-bold text-lg mb-1">Hire Talent</div>
                        <div className="text-sm text-white/70 group-hover:text-white">Find a Fractional {role.toUpperCase()}</div>
                    </Link>
                    
                    {data.salaryLink && (
                        <Link href={data.salaryLink} className="group p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-lg">
                            <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">💰</div>
                            <div className="font-bold text-lg mb-1">Salary Data</div>
                            <div className="text-sm text-white/70 group-hover:text-white">Day rates & compensation</div>
                        </Link>
                    )}
                    
                    <Link href="#guide" className="group p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-[1.02] hover:shadow-lg">
                        <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform">📚</div>
                        <div className="font-bold text-lg mb-1">The Guide</div>
                        <div className="text-sm text-white/70 group-hover:text-white">Deep dive & definition</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
