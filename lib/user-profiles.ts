import { createDbQuery } from './db'

export interface UserProfile {
  id: number
  stack_user_id: string
  email: string | null
  first_name: string | null
  current_country: string | null
  destination_countries: string[] | null
  budget: string | null
  timeline: string | null
  interests: string[] | null
  created_at: Date
  updated_at: Date
}

export async function getUserProfile(stackUserId: string): Promise<UserProfile | null> {
  const sql = createDbQuery()
  const results = await sql`
    SELECT * FROM user_profiles
    WHERE stack_user_id = ${stackUserId}
    LIMIT 1
  `
  return (results[0] as UserProfile) || null
}

export async function createOrUpdateUserProfile(
  stackUserId: string,
  data: {
    email?: string
    first_name?: string
    current_country?: string
    destination_countries?: string[]
    budget?: string
    timeline?: string
    interests?: string[]
  }
): Promise<UserProfile> {
  const sql = createDbQuery()

  const results = await sql`
    INSERT INTO user_profiles (
      stack_user_id,
      email,
      first_name,
      current_country,
      destination_countries,
      budget,
      timeline,
      interests
    ) VALUES (
      ${stackUserId},
      ${data.email || null},
      ${data.first_name || null},
      ${data.current_country || 'United Kingdom'},
      ${data.destination_countries || null},
      ${data.budget || null},
      ${data.timeline || null},
      ${data.interests || null}
    )
    ON CONFLICT (stack_user_id) DO UPDATE SET
      email = COALESCE(EXCLUDED.email, user_profiles.email),
      first_name = COALESCE(EXCLUDED.first_name, user_profiles.first_name),
      current_country = COALESCE(EXCLUDED.current_country, user_profiles.current_country),
      destination_countries = COALESCE(EXCLUDED.destination_countries, user_profiles.destination_countries),
      budget = COALESCE(EXCLUDED.budget, user_profiles.budget),
      timeline = COALESCE(EXCLUDED.timeline, user_profiles.timeline),
      interests = COALESCE(EXCLUDED.interests, user_profiles.interests),
      updated_at = NOW()
    RETURNING *
  `

  return results[0] as UserProfile
}

export async function updateUserProfile(
  stackUserId: string,
  data: Partial<Omit<UserProfile, 'id' | 'stack_user_id' | 'created_at' | 'updated_at'>>
): Promise<UserProfile | null> {
  const sql = createDbQuery()

  const results = await sql`
    UPDATE user_profiles
    SET
      email = COALESCE(${data.email}, email),
      first_name = COALESCE(${data.first_name}, first_name),
      current_country = COALESCE(${data.current_country}, current_country),
      destination_countries = COALESCE(${data.destination_countries}, destination_countries),
      budget = COALESCE(${data.budget}, budget),
      timeline = COALESCE(${data.timeline}, timeline),
      interests = COALESCE(${data.interests}, interests),
      updated_at = NOW()
    WHERE stack_user_id = ${stackUserId}
    RETURNING *
  `

  return (results[0] as UserProfile) || null
}
