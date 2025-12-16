import { createDbQuery } from './db'

export interface OnboardingSession {
  id: string
  user_id: string
  user_type: 'candidate' | 'client' | 'unknown' | null
  method: 'voice' | 'manual'
  current_step: string
  collected_data: Record<string, any>
  hume_chat_group_id: string | null
  is_complete: boolean
  started_at: string
  completed_at: string | null
  last_activity_at: string
}

/**
 * Start a new onboarding session for a user
 */
export async function startOnboardingSession(
  userId: string,
  method: 'voice' | 'manual' = 'voice',
  humeChatGroupId?: string
): Promise<OnboardingSession> {
  const sql = createDbQuery()

  const result = await sql`
    INSERT INTO onboarding_sessions (user_id, method, current_step, hume_chat_group_id)
    VALUES (${userId}, ${method}, 'start', ${humeChatGroupId || null})
    ON CONFLICT (user_id)
    DO UPDATE SET
      method = ${method},
      hume_chat_group_id = COALESCE(${humeChatGroupId || null}, onboarding_sessions.hume_chat_group_id),
      last_activity_at = NOW()
    RETURNING *
  `

  return result[0] as OnboardingSession
}

/**
 * Get current onboarding session for a user
 */
export async function getOnboardingSession(userId: string): Promise<OnboardingSession | null> {
  const sql = createDbQuery()

  const result = await sql`
    SELECT * FROM onboarding_sessions
    WHERE user_id = ${userId}
  `

  return result[0] as OnboardingSession || null
}

/**
 * Update onboarding step and merge in new collected data
 */
export async function updateOnboardingStep(
  userId: string,
  step: string,
  data: Record<string, any>
): Promise<void> {
  const sql = createDbQuery()

  await sql`
    UPDATE onboarding_sessions
    SET
      current_step = ${step},
      collected_data = collected_data || ${JSON.stringify(data)}::jsonb,
      last_activity_at = NOW()
    WHERE user_id = ${userId}
  `
}

/**
 * Update user type when AI detects it from conversation
 */
export async function updateUserType(
  userId: string,
  userType: 'candidate' | 'client'
): Promise<void> {
  const sql = createDbQuery()

  await sql`
    UPDATE onboarding_sessions
    SET
      user_type = ${userType},
      last_activity_at = NOW()
    WHERE user_id = ${userId}
  `
}

/**
 * Update Hume chat group ID for resume capability
 */
export async function updateHumeChatGroupId(
  userId: string,
  chatGroupId: string
): Promise<void> {
  const sql = createDbQuery()

  await sql`
    UPDATE onboarding_sessions
    SET
      hume_chat_group_id = ${chatGroupId},
      last_activity_at = NOW()
    WHERE user_id = ${userId}
  `
}

/**
 * Check if onboarding requirements are met and auto-complete if so
 */
export async function checkAndCompleteOnboarding(userId: string): Promise<boolean> {
  const sql = createDbQuery()

  const session = await getOnboardingSession(userId)
  if (!session || session.is_complete) {
    return session?.is_complete || false
  }

  const { user_type, collected_data } = session

  let isComplete = false

  // Check candidate requirements
  if (user_type === 'candidate') {
    const hasName = !!collected_data.name
    const hasSkills = Array.isArray(collected_data.skills) && collected_data.skills.length >= 2
    const hasCompanies = Array.isArray(collected_data.companies) && collected_data.companies.length >= 1

    isComplete = hasName && hasSkills && hasCompanies
  }

  // Check client requirements
  if (user_type === 'client') {
    const hasCompany = !!collected_data.companyName
    const hasRoles = Array.isArray(collected_data.rolesNeeded) && collected_data.rolesNeeded.length >= 1

    isComplete = hasCompany && hasRoles
  }

  // If complete, update the session
  if (isComplete) {
    await sql`
      UPDATE onboarding_sessions
      SET is_complete = TRUE
      WHERE user_id = ${userId}
    `
  }

  return isComplete
}

/**
 * Manually mark onboarding as complete
 */
export async function completeOnboarding(userId: string): Promise<void> {
  const sql = createDbQuery()

  await sql`
    UPDATE onboarding_sessions
    SET is_complete = TRUE
    WHERE user_id = ${userId}
  `
}

/**
 * Get all incomplete onboarding sessions (for notifications)
 */
export async function getIncompleteOnboardingSessions(
  hoursThreshold: number = 24
): Promise<OnboardingSession[]> {
  const sql = createDbQuery()

  const result = await sql`
    SELECT * FROM incomplete_onboarding_sessions
    WHERE hours_since_activity >= ${hoursThreshold}
    ORDER BY hours_since_activity DESC
  `

  return result as OnboardingSession[]
}

/**
 * Delete an onboarding session (for testing/cleanup)
 */
export async function deleteOnboardingSession(userId: string): Promise<void> {
  const sql = createDbQuery()

  await sql`
    DELETE FROM onboarding_sessions
    WHERE user_id = ${userId}
  `
}

/**
 * Get onboarding progress percentage (0-100)
 */
export async function getOnboardingProgress(userId: string): Promise<number> {
  const session = await getOnboardingSession(userId)
  if (!session) return 0
  if (session.is_complete) return 100

  const { user_type, collected_data } = session

  if (user_type === 'candidate') {
    const hasName = !!collected_data.name
    const hasSkills = Array.isArray(collected_data.skills) && collected_data.skills.length >= 2
    const hasCompanies = Array.isArray(collected_data.companies) && collected_data.companies.length >= 1

    let progress = 0
    if (hasName) progress += 33
    if (hasSkills) progress += 34
    if (hasCompanies) progress += 33

    return progress
  }

  if (user_type === 'client') {
    const hasCompany = !!collected_data.companyName
    const hasRoles = Array.isArray(collected_data.rolesNeeded) && collected_data.rolesNeeded.length >= 1

    let progress = 0
    if (hasCompany) progress += 50
    if (hasRoles) progress += 50

    return progress
  }

  return 0
}
