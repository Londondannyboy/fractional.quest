/**
 * Season utilities for destination suggestions
 * Used to suggest warm destinations during cold UK months
 */

export type Season = 'winter' | 'spring' | 'summer' | 'autumn'

/**
 * Get current UK season based on month
 */
export function getCurrentUKSeason(): Season {
  const month = new Date().getMonth() + 1 // 1-12
  if (month >= 12 || month <= 2) return 'winter'
  if (month >= 3 && month <= 5) return 'spring'
  if (month >= 6 && month <= 8) return 'summer'
  return 'autumn'
}

/**
 * Get current month (1-12)
 */
export function getCurrentMonth(): number {
  return new Date().getMonth() + 1
}

/**
 * Check if we're in "escape season" - when UK weather makes warm destinations appealing
 * November through March
 */
export function isWinterEscapeSeason(): boolean {
  const month = getCurrentMonth()
  return [11, 12, 1, 2, 3].includes(month)
}

/**
 * Check if a destination is ideal for the current month
 */
export function isDestinationInSeason(bestMonths: number[]): boolean {
  const currentMonth = getCurrentMonth()
  return bestMonths.includes(currentMonth)
}

/**
 * Get a friendly season label for display
 */
export function getSeasonLabel(season: Season): string {
  const labels: Record<Season, string> = {
    winter: 'this winter',
    spring: 'this spring',
    summer: 'this summer',
    autumn: 'this autumn'
  }
  return labels[season]
}

/**
 * Get months that are good for escaping UK weather
 */
export function getWinterEscapeMonths(): number[] {
  return [11, 12, 1, 2, 3]
}
