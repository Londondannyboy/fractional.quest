'use client'

import { useState, useEffect, Component, ReactNode } from 'react'
import { CopilotPopup } from '@copilotkit/react-ui'
import { useCopilotAction, useCopilotReadable } from '@copilotkit/react-core'
import '@copilotkit/react-ui/styles.css'

// Error boundary to prevent CopilotKit errors from crashing the page
class CopilotErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.warn('CopilotKit error (non-fatal):', error.message)
  }

  render() {
    if (this.state.hasError) {
      return null // Silently fail - don't show anything
    }
    return this.props.children
  }
}

interface JobAssistantProps {
  pageContext?: {
    currentPage: string
    jobs?: any[]
    filters?: any
  }
}

function JobAssistantInner({ pageContext }: JobAssistantProps) {
  const [savedJobs, setSavedJobs] = useState<string[]>([])

  // Make page context readable to the AI
  useCopilotReadable({
    description: 'Current page and job context for the AI assistant',
    value: {
      currentPage: pageContext?.currentPage || 'Fractional Jobs UK',
      availableJobs: pageContext?.jobs?.length || 50,
      currentFilters: pageContext?.filters || {},
      savedJobsCount: savedJobs.length,
      siteInfo: {
        name: 'Fractional Quest',
        description: 'UK marketplace for fractional executive jobs',
        dayRateRange: '£500-£1,500/day',
        roles: ['CFO', 'CTO', 'CMO', 'COO', 'CHRO', 'CPO', 'CISO'],
        locations: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Remote'],
      },
    },
  })

  // Action to explain fractional work
  useCopilotAction({
    name: 'explainFractionalWork',
    description: 'Explain what fractional executive work is and how it differs from full-time or consulting',
    parameters: [
      {
        name: 'topic',
        type: 'string',
        description: 'Specific topic to explain (rates, benefits, getting started, etc.)',
        required: false,
      },
    ],
    handler: async ({ topic }) => {
      const explanations: Record<string, string> = {
        default: `Fractional work is a modern employment model where experienced executives work part-time (typically 1-3 days/week) with multiple companies. Unlike consulting, fractional executives are embedded in leadership teams and take accountability for outcomes. Day rates range from £500-£1,500 depending on role and location.`,
        rates: `UK fractional executive rates: CFO £800-£1,500/day, CTO £850-£1,600/day, CMO £700-£1,400/day, COO £750-£1,400/day. London commands 25-40% premium over regional cities. Most executives work 2-4 days/week with 2-3 clients.`,
        benefits: `Benefits include: work-life balance, variety of challenges, premium earnings potential, flexibility, building a portfolio career, and reduced corporate politics. Many executives report higher satisfaction than full-time roles.`,
        getting_started: `To go fractional: 1) Build a strong track record in your domain, 2) Define your niche and value proposition, 3) Create a portfolio/case studies, 4) Network through LinkedIn and industry events, 5) Consider starting with 1-2 clients while transitioning.`,
      }

      return explanations[topic || 'default'] || explanations.default
    },
  })

  // Action to compare roles
  useCopilotAction({
    name: 'compareRoles',
    description: 'Compare different fractional executive roles (CFO vs CTO, etc.)',
    parameters: [
      {
        name: 'role1',
        type: 'string',
        description: 'First role to compare',
        required: true,
      },
      {
        name: 'role2',
        type: 'string',
        description: 'Second role to compare',
        required: true,
      },
    ],
    handler: async ({ role1, role2 }) => {
      const roleData: Record<string, { rate: string; focus: string; demand: string }> = {
        CFO: { rate: '£800-£1,500/day', focus: 'Financial strategy, fundraising, investor relations', demand: 'Very high, especially in PE-backed companies' },
        CTO: { rate: '£850-£1,600/day', focus: 'Technical strategy, architecture, engineering leadership', demand: 'High in tech startups and digital transformation' },
        CMO: { rate: '£700-£1,400/day', focus: 'Marketing strategy, brand, demand generation', demand: 'High in B2B SaaS and scale-ups' },
        COO: { rate: '£750-£1,400/day', focus: 'Operations, scaling, process optimization', demand: 'Growing as companies focus on efficiency' },
        CHRO: { rate: '£650-£1,200/day', focus: 'People strategy, culture, talent acquisition', demand: 'Moderate, growing in fast-scaling companies' },
        CISO: { rate: '£900-£1,600/day', focus: 'Security strategy, compliance, risk management', demand: 'Very high due to regulatory requirements' },
      }

      const r1 = roleData[role1.toUpperCase()] || { rate: 'Unknown', focus: 'Unknown', demand: 'Unknown' }
      const r2 = roleData[role2.toUpperCase()] || { rate: 'Unknown', focus: 'Unknown', demand: 'Unknown' }

      return `**${role1.toUpperCase()}**: ${r1.rate} | Focus: ${r1.focus} | Demand: ${r1.demand}\n\n**${role2.toUpperCase()}**: ${r2.rate} | Focus: ${r2.focus} | Demand: ${r2.demand}`
    },
  })

  // Action to calculate potential earnings
  useCopilotAction({
    name: 'calculateEarnings',
    description: 'Calculate potential annual earnings based on day rate and work pattern',
    parameters: [
      {
        name: 'dayRate',
        type: 'number',
        description: 'Day rate in GBP',
        required: true,
      },
      {
        name: 'daysPerWeek',
        type: 'number',
        description: 'Days worked per week',
        required: true,
      },
      {
        name: 'numberOfClients',
        type: 'number',
        description: 'Number of clients',
        required: false,
      },
    ],
    handler: async ({ dayRate, daysPerWeek, numberOfClients = 1 }) => {
      const totalDays = daysPerWeek * numberOfClients
      const weeklyEarnings = dayRate * totalDays
      const monthlyEarnings = weeklyEarnings * 4.33
      const annualEarnings = weeklyEarnings * 48 // Assuming 4 weeks holiday

      return `At £${dayRate}/day working ${daysPerWeek} day(s)/week per client with ${numberOfClients} client(s):\n\n- Weekly: £${weeklyEarnings.toLocaleString()}\n- Monthly: £${Math.round(monthlyEarnings).toLocaleString()}\n- Annual: £${Math.round(annualEarnings).toLocaleString()} (48 working weeks)`
    },
  })

  return (
    <CopilotPopup
      instructions={`You are a helpful assistant for Fractional Quest, the UK's leading marketplace for fractional executive jobs.

Your role is to help users:
1. Find relevant fractional jobs (CFO, CTO, CMO, COO, CHRO, CPO, CISO roles)
2. Understand fractional work and how it differs from full-time or consulting
3. Calculate potential earnings based on day rates
4. Compare different executive roles
5. Navigate the site and understand job listings

Key information:
- Day rates typically range from £500-£1,500 depending on role and location
- London commands 25-40% premium over regional cities
- Most fractional executives work 1-3 days/week per client
- Common roles: CFO (finance), CTO (technology), CMO (marketing), COO (operations)

Be concise, helpful, and professional. Use UK English spelling.`}
      labels={{
        title: 'Job Search Assistant',
        initial: 'Hi! I can help you find fractional executive jobs, explain rates, or answer questions about going fractional. What would you like to know?',
        placeholder: 'Ask about jobs, rates, or fractional work...',
      }}
      className="z-50"
    />
  )
}

// Export wrapped component with error boundary
export function JobAssistant({ pageContext }: JobAssistantProps) {
  return (
    <CopilotErrorBoundary>
      <JobAssistantInner pageContext={pageContext} />
    </CopilotErrorBoundary>
  )
}
