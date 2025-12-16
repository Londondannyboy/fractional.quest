'use client'

interface JobMarketContextProps {
  roleCategory: string | null
  location: string | null
  isRemote: boolean
  companyName: string
}

interface MarketInsight {
  text: string
  links: Array<{
    text: string
    url: string
  }>
}

// Generate contextual market insights with varied authoritative links
function getMarketInsight(
  roleCategory: string | null,
  location: string | null,
  isRemote: boolean
): MarketInsight {
  const category = roleCategory?.toLowerCase() || ''
  const loc = location?.toLowerCase() || ''
  const isLondon = loc.includes('london')
  const isManchester = loc.includes('manchester')
  const isBirmingham = loc.includes('birmingham')
  const isEdinburgh = loc.includes('edinburgh')

  // Finance/CFO roles
  if (category.includes('finance') || category.includes('cfo')) {
    if (isLondon) {
      return {
        text: 'The fractional CFO market in London has grown 180% since 2021, with FinTech and PE-backed companies driving demand. London-based fractional finance leaders command 25% premium rates compared to regional markets.',
        links: [
          { text: 'UK Earnings Data', url: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours' },
          { text: 'ICAEW Financial Leadership', url: 'https://www.icaew.com' }
        ]
      }
    } else if (isRemote) {
      return {
        text: 'Remote fractional CFO roles have increased 150% as companies embrace flexible senior finance leadership. Tax-efficient structuring through limited companies remains the standard approach for fractional finance professionals.',
        links: [
          { text: 'Self-Employed Tax Guidance', url: 'https://www.gov.uk/topic/business-tax/self-employed' },
          { text: 'BVCA Portfolio Trends', url: 'https://www.bvca.co.uk' }
        ]
      }
    } else {
      return {
        text: 'UK companies increasingly turn to fractional CFOs for strategic financial guidance without full-time commitment. Series B-C startups are 3x more likely to hire fractional versus full-time finance leadership.',
        links: [
          { text: 'Business Finance Support', url: 'https://www.gov.uk/business-finance-support' },
          { text: 'ACCA Professional Standards', url: 'https://www.accaglobal.com' }
        ]
      }
    }
  }

  // Technology/CTO roles
  if (category.includes('technology') || category.includes('cto') || category.includes('engineering')) {
    if (isLondon) {
      return {
        text: 'London Tech City leads fractional CTO demand, with AI/ML integration projects driving 55% YoY growth. Technical leadership roles in London command £1,100-£1,600 daily rates reflecting the capital\'s tech ecosystem.',
        links: [
          { text: 'UK Digital Strategy', url: 'https://www.gov.uk/government/publications/uks-digital-strategy' },
          { text: 'Tech UK Industry Data', url: 'https://www.techuk.org/resource/uk-tech-the-scorecard-2024.html' }
        ]
      }
    } else if (isManchester || isBirmingham) {
      return {
        text: 'Regional tech hubs are experiencing rapid growth in fractional CTO demand as startups and scale-ups seek experienced technical leadership. Software engineering expertise combined with cloud architecture knowledge creates strong market positioning.',
        links: [
          { text: 'BCS Professional Development', url: 'https://www.bcs.org' },
          { text: 'UK Tech Employment Trends', url: 'https://www.gov.uk/government/organisations/department-for-business-and-trade' }
        ]
      }
    } else if (isRemote) {
      return {
        text: 'Remote fractional CTO roles have surged 200% as companies access nationwide technical talent. The rise of remote work enables CTOs to serve multiple clients across different UK regions simultaneously.',
        links: [
          { text: 'AI Regulation Framework', url: 'https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach' },
          { text: 'ICO Data Protection', url: 'https://ico.org.uk/for-organisations/' }
        ]
      }
    } else {
      return {
        text: 'Fractional CTOs provide strategic technical guidance to startups and scale-ups without the £180,000-£350,000 full-time commitment. Digital transformation initiatives and cloud migration projects drive consistent demand.',
        links: [
          { text: 'Digital Business Support', url: 'https://www.gov.uk/government/organisations/department-for-business-and-trade' },
          { text: 'British Computer Society', url: 'https://www.bcs.org' }
        ]
      }
    }
  }

  // Marketing/CMO roles
  if (category.includes('marketing') || category.includes('cmo')) {
    if (isLondon) {
      return {
        text: 'London-based fractional CMO roles have grown 200% YoY, with B2B SaaS and DTC e-commerce leading demand. Marketing leadership in the capital commands premium rates of £900-£1,400 daily.',
        links: [
          { text: 'Chartered Institute of Marketing', url: 'https://www.cim.co.uk' },
          { text: 'UK Business Support', url: 'https://www.gov.uk/topic/business-enterprise/business-support' }
        ]
      }
    } else if (isRemote) {
      return {
        text: 'Remote fractional CMO opportunities have tripled as performance marketing and digital channels dominate strategy. Marketing leaders work with 2-3 clients simultaneously, delivering diverse industry experience.',
        links: [
          { text: 'Advertising Standards', url: 'https://www.asa.org.uk' },
          { text: 'Annual Earnings Survey', url: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/bulletins/annualsurveyofhoursandearnings/latest' }
        ]
      }
    } else {
      return {
        text: 'UK companies increasingly access senior marketing expertise through fractional CMO engagements. Growth marketing specialists and brand-building strategists command strong rates across all regions.',
        links: [
          { text: 'Marketing Professional Development', url: 'https://www.cim.co.uk' },
          { text: 'Self-Employment Guidance', url: 'https://www.gov.uk/working-for-yourself' }
        ]
      }
    }
  }

  // Operations/COO roles
  if (category.includes('operations') || category.includes('coo')) {
    if (isRemote) {
      return {
        text: 'Fractional COO roles have expanded rapidly as PE-backed companies mandate operational excellence. Remote operational leadership enables serving multiple portfolio companies simultaneously.',
        links: [
          { text: 'CMI Management Development', url: 'https://www.cmi.org.uk/professional-development/' },
          { text: 'Business Population Data', url: 'https://www.gov.uk/government/statistics/business-population-estimates-2024' }
        ]
      }
    } else {
      return {
        text: 'Scale-up companies (Series B-C) drive 65% of fractional COO demand as they professionalize operations. Operational expertise in process design and team scaling commands £900-£1,400 daily rates.',
        links: [
          { text: 'Chartered Management Institute', url: 'https://www.cmi.org.uk/professional-development/' },
          { text: 'Department for Business', url: 'https://www.gov.uk/government/organisations/department-for-business-and-trade' }
        ]
      }
    }
  }

  // Default fallback for other roles
  if (isLondon) {
    return {
      text: 'London leads the UK fractional executive market with 60% of opportunities. The capital\'s concentration of startups, scale-ups, and PE-backed companies drives consistent demand for senior part-time leadership.',
      links: [
        { text: 'UK Labour Market Overview', url: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/uklabourmarket/latest' },
        { text: 'London Stock Exchange', url: 'https://www.londonstockexchange.com/indices/ftse-250' }
      ]
    }
  } else if (isRemote) {
    return {
      text: 'Remote fractional executive roles have grown 185% since 2021, enabling senior leaders to serve multiple clients nationwide. Flexible working arrangements are now standard across fractional positions.',
      links: [
        { text: 'Remote Working Trends', url: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/uklabourmarket/latest' },
        { text: 'IR35 Guidance', url: 'https://www.gov.uk/guidance/understanding-off-payroll-working-ir35' }
      ]
    }
  } else {
    return {
      text: 'The UK fractional executive market has grown 180% since 2021 as companies seek senior expertise without full-time commitment. Regional markets outside London offer strong opportunities with competitive day rates.',
      links: [
        { text: 'UK Employment Statistics', url: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/uklabourmarket/latest' },
        { text: 'Business Support Schemes', url: 'https://www.gov.uk/business-finance-support' }
      ]
    }
  }
}

export function JobMarketContext({ roleCategory, location, isRemote, companyName }: JobMarketContextProps) {
  const insight = getMarketInsight(roleCategory, location, isRemote)

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Market Context</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            {insight.text}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {insight.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium underline"
              >
                {link.text}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
