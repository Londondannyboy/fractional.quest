import { NextRequest, NextResponse } from 'next/server'
import { createDbQuery } from '@/lib/db'
import { syncUserProfileToZep } from '@/lib/zep-client'

/**
 * POST /api/onboarding-complete
 * Saves skills, experiences, and preferences to Neon, then syncs to ZEP
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, skills, experiences, preferences } = body

    if (!userId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 })
    }

    const sql = createDbQuery()

    // Save skills to user_skills table
    if (skills && skills.length > 0) {
      for (const skillName of skills) {
        await sql`
          INSERT INTO user_skills (user_id, skill_name_raw, confirmed, created_at)
          VALUES (${userId}, ${skillName}, true, NOW())
          ON CONFLICT (user_id, skill_name_raw) DO NOTHING
        `
      }
      console.log(`[Onboarding] Saved ${skills.length} skills for user ${userId}`)
    }

    // Save experiences to user_experiences table
    if (experiences && experiences.length > 0) {
      for (const exp of experiences) {
        if (exp.company) {
          await sql`
            INSERT INTO user_experiences (user_id, company_name_raw, role_title, confirmed, created_at)
            VALUES (${userId}, ${exp.company}, ${exp.role || 'Executive'}, true, NOW())
            ON CONFLICT DO NOTHING
          `
        }
      }
      console.log(`[Onboarding] Saved ${experiences.length} experiences for user ${userId}`)
    }

    // Save preferences to user_job_preferences table
    if (preferences) {
      const roleTypes = preferences.roleTypes || []
      const dayRate = preferences.dayRate || ''

      // Parse day rate
      let dayRateMin = null
      let dayRateMax = null
      if (dayRate.includes('-')) {
        const match = dayRate.match(/£(\d+)-(\d+)/)
        if (match) {
          dayRateMin = parseInt(match[1])
          dayRateMax = parseInt(match[2])
        }
      } else if (dayRate.includes('+')) {
        const match = dayRate.match(/£(\d+)\+/)
        if (match) {
          dayRateMin = parseInt(match[1])
        }
      }

      await sql`
        INSERT INTO user_job_preferences (user_id, role_types, day_rate_min, day_rate_max, created_at)
        VALUES (${userId}, ${roleTypes}, ${dayRateMin}, ${dayRateMax}, NOW())
        ON CONFLICT (user_id) DO UPDATE SET
          role_types = ${roleTypes},
          day_rate_min = ${dayRateMin},
          day_rate_max = ${dayRateMax},
          updated_at = NOW()
      `
      console.log(`[Onboarding] Saved preferences for user ${userId}`)
    }

    // Sync to ZEP knowledge graph
    const zepSynced = await syncUserProfileToZep(userId, {
      skills: skills.map((name: string) => ({
        name,
        category: 'executive',
        proficiency: 'expert'
      })),
      experiences: experiences
        .filter((e: any) => e.company)
        .map((e: any) => ({
          company: e.company,
          role: e.role || 'Executive'
        })),
      preferences: {
        roleTypes: preferences?.roleTypes || [],
        dayRateMin: preferences?.dayRate?.includes('-')
          ? parseInt(preferences.dayRate.match(/£(\d+)/)?.[1] || '0')
          : undefined,
        dayRateMax: preferences?.dayRate?.includes('-')
          ? parseInt(preferences.dayRate.match(/-(\d+)/)?.[1] || '0')
          : undefined,
      }
    })

    console.log(`[Onboarding] ZEP sync: ${zepSynced ? 'success' : 'failed or disabled'}`)

    return NextResponse.json({
      success: true,
      saved: {
        skills: skills?.length || 0,
        experiences: experiences?.filter((e: any) => e.company).length || 0,
        preferences: !!preferences
      },
      zepSynced
    })
  } catch (error) {
    console.error('Onboarding complete error:', error)
    return NextResponse.json(
      { error: 'Failed to complete onboarding', details: String(error) },
      { status: 500 }
    )
  }
}
