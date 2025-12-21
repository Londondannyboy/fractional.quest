/**
 * Aspirational messaging system for job cards
 * Transforms job attributes into lifestyle-focused messages
 */

import { getCurrentUKSeason, isWinterEscapeSeason, getSeasonLabel } from './season-utils'

export type SuggestionType = 'remote_escape' | 'weekend_getaway' | 'timezone_match' | 'flexibility'

export interface AspirationalMessage {
  headline: string
  subtext?: string
  type: SuggestionType
  icon: 'globe' | 'sun' | 'calendar' | 'coffee' | 'plane'
}

export interface JobContext {
  isRemote: boolean
  workplaceType?: string | null  // 'Remote', 'Hybrid', 'Onsite'
  location?: string | null
  daysInOffice?: number  // 0 = fully remote, 1-5 = hybrid
  hoursPerWeek?: string | null
  companyCountry?: string | null
}

export interface DestinationHint {
  name: string
  country: string
  tagline: string
}

// Winter escape destinations (Nov-Mar)
const WINTER_DESTINATIONS: DestinationHint[] = [
  { name: 'Da Nang', country: 'Vietnam', tagline: 'Beach paradise with world-class coworking' },
  { name: 'Lisbon', country: 'Portugal', tagline: 'Europe\'s startup hub, same timezone as UK' },
  { name: 'Albufeira', country: 'Portugal', tagline: 'Sun-soaked Algarve, perfect UK alignment' },
  { name: 'Tenerife', country: 'Spain', tagline: 'Year-round sunshine, 4 hours from UK' },
  { name: 'Chiang Mai', country: 'Thailand', tagline: 'Digital nomad capital at unbeatable value' },
]

// Weekend getaway destinations (short-haul from UK)
const WEEKEND_DESTINATIONS: DestinationHint[] = [
  { name: 'Paris', country: 'France', tagline: '2 hours by train, endless charm' },
  { name: 'Amsterdam', country: 'Netherlands', tagline: 'Creative hub, perfect for long weekends' },
  { name: 'Barcelona', country: 'Spain', tagline: 'Beach, culture, and sunshine' },
  { name: 'Dublin', country: 'Ireland', tagline: 'Quick hop for a change of scenery' },
]

/**
 * Parse hours per week string to number
 */
function parseHoursPerWeek(hours: string | null | undefined): number {
  if (!hours) return 40 // Assume full-time if not specified
  const match = hours.match(/(\d+)/)
  return match ? parseInt(match[1]) : 40
}

/**
 * Determine if job is fully remote
 */
function isFullyRemote(context: JobContext): boolean {
  return context.isRemote || context.workplaceType === 'Remote'
}

/**
 * Determine if job is hybrid
 */
function isHybrid(context: JobContext): boolean {
  return context.workplaceType === 'Hybrid'
}

/**
 * Get a random item from an array
 */
function getRandomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

/**
 * Generate aspirational message based on job context
 */
export function generateAspirationalMessage(
  context: JobContext,
  destination?: DestinationHint
): AspirationalMessage | null {
  const season = getCurrentUKSeason()
  const isPartTime = parseHoursPerWeek(context.hoursPerWeek) < 30

  // Fully remote jobs
  if (isFullyRemote(context)) {
    // Winter + remote = escape to warmth
    if (isWinterEscapeSeason()) {
      const dest = destination || getRandomItem(WINTER_DESTINATIONS)
      return {
        headline: `Why not work from ${dest.name} ${getSeasonLabel(season)}?`,
        subtext: dest.tagline,
        type: 'remote_escape',
        icon: 'sun'
      }
    }

    // Part-time remote = freedom message
    if (isPartTime) {
      return {
        headline: 'Work from anywhere, live everywhere',
        subtext: 'Fractional means freedom to choose your base',
        type: 'remote_escape',
        icon: 'globe'
      }
    }

    // Full-time remote = timezone flexibility
    return {
      headline: 'Your office is wherever you open your laptop',
      subtext: 'Build your ideal work environment',
      type: 'timezone_match',
      icon: 'coffee'
    }
  }

  // Hybrid jobs
  if (isHybrid(context)) {
    const daysInOffice = context.daysInOffice || 3

    if (daysInOffice <= 2) {
      return {
        headline: 'Perfect for your portfolio career',
        subtext: `Just ${daysInOffice} day${daysInOffice > 1 ? 's' : ''} in office leaves time for other ventures`,
        type: 'flexibility',
        icon: 'calendar'
      }
    }

    if (daysInOffice === 3) {
      const dest = getRandomItem(WEEKEND_DESTINATIONS)
      return {
        headline: 'Perfect for extended weekends',
        subtext: `${dest.name} is just a short flight away`,
        type: 'weekend_getaway',
        icon: 'plane'
      }
    }

    // 4-5 days hybrid
    return {
      headline: 'Great for work-life rhythm',
      subtext: 'Structured weeks with flexibility built in',
      type: 'flexibility',
      icon: 'calendar'
    }
  }

  // Onsite jobs - no aspirational message or subtle one
  return null
}

/**
 * Generate a destination suggestion for a remote job
 */
export function getDestinationSuggestion(context: JobContext): DestinationHint | null {
  if (!isFullyRemote(context)) return null

  if (isWinterEscapeSeason()) {
    return getRandomItem(WINTER_DESTINATIONS)
  }

  // Summer - could suggest anywhere, but bias toward variety
  return getRandomItem([...WINTER_DESTINATIONS, ...WEEKEND_DESTINATIONS])
}

/**
 * Reframe a hybrid schedule as an opportunity
 */
export function reframeHybridSchedule(daysInOffice: number): string {
  if (daysInOffice === 1) return 'One focused day in-person, four days of freedom'
  if (daysInOffice === 2) return 'Two collaboration days, long weekends every week'
  if (daysInOffice === 3) return 'Mid-week structure, weekend adventures await'
  if (daysInOffice === 4) return 'Friday freedom for side projects or travel prep'
  return 'Traditional schedule with fractional flexibility'
}
