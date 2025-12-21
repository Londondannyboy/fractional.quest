/**
 * Seed script for initial destinations data
 * Run with: npx tsx scripts/seed-destinations.ts
 */

import { neon } from '@neondatabase/serverless'

const DESTINATIONS = [
  {
    name: 'Da Nang',
    country: 'Vietnam',
    slug: 'da-nang-vietnam',
    tagline: 'Beach paradise with world-class coworking at UK-friendly prices',
    description: 'Da Nang offers the perfect blend of stunning beaches, affordable living, and a thriving digital nomad community. With excellent coworking spaces, reliable internet, and incredible food, it\'s become a top destination for remote workers escaping the UK winter.',
    best_months: [11, 12, 1, 2, 3, 4],
    avg_temp_jan: 23,
    avg_temp_jul: 34,
    timezone: 'Asia/Ho_Chi_Minh',
    utc_offset_hours: 7,
    uk_overlap_hours: 4,
    cost_of_living: 'low',
    monthly_cost_estimate: 1200,
    avg_internet_speed_mbps: 40,
    coworking_spaces_count: 15,
    nomad_score: 85
  },
  {
    name: 'Albufeira',
    country: 'Portugal',
    slug: 'albufeira-portugal',
    tagline: 'Sun-soaked Algarve gem with same timezone as UK',
    description: 'Albufeira in the Algarve offers the dream: beautiful beaches, great weather year-round, and zero timezone adjustment from the UK. Perfect for fractional executives who want Mediterranean living without the scheduling headaches.',
    best_months: [1, 2, 3, 4, 5, 9, 10, 11],
    avg_temp_jan: 16,
    avg_temp_jul: 28,
    timezone: 'Europe/Lisbon',
    utc_offset_hours: 0,
    uk_overlap_hours: 8,
    cost_of_living: 'medium',
    monthly_cost_estimate: 1800,
    avg_internet_speed_mbps: 100,
    coworking_spaces_count: 8,
    nomad_score: 82
  },
  {
    name: 'Lisbon',
    country: 'Portugal',
    slug: 'lisbon-portugal',
    tagline: 'Europe\'s startup hub with perfect UK timezone alignment',
    description: 'Lisbon has become the European capital for digital nomads and remote workers. With a thriving startup scene, excellent infrastructure, beautiful architecture, and the same timezone as the UK, it\'s an ideal base for fractional executives.',
    best_months: [3, 4, 5, 9, 10, 11],
    avg_temp_jan: 15,
    avg_temp_jul: 28,
    timezone: 'Europe/Lisbon',
    utc_offset_hours: 0,
    uk_overlap_hours: 8,
    cost_of_living: 'medium',
    monthly_cost_estimate: 2200,
    avg_internet_speed_mbps: 150,
    coworking_spaces_count: 50,
    nomad_score: 90
  },
  {
    name: 'Chiang Mai',
    country: 'Thailand',
    slug: 'chiang-mai-thailand',
    tagline: 'Digital nomad capital with unbeatable value',
    description: 'Chiang Mai pioneered the digital nomad lifestyle and remains one of the best value destinations in the world. Ancient temples, incredible food, and a massive expat community make it perfect for those seeking adventure alongside their work.',
    best_months: [11, 12, 1, 2],
    avg_temp_jan: 25,
    avg_temp_jul: 32,
    timezone: 'Asia/Bangkok',
    utc_offset_hours: 7,
    uk_overlap_hours: 4,
    cost_of_living: 'low',
    monthly_cost_estimate: 1000,
    avg_internet_speed_mbps: 50,
    coworking_spaces_count: 30,
    nomad_score: 92
  },
  {
    name: 'Tenerife',
    country: 'Spain',
    slug: 'tenerife-spain',
    tagline: 'Year-round sunshine just 4 hours from the UK',
    description: 'Tenerife offers the unique combination of European infrastructure, year-round warm weather, and easy access from the UK. Perfect for those who want to escape grey winters without going too far from home.',
    best_months: [1, 2, 3, 4, 10, 11, 12],
    avg_temp_jan: 18,
    avg_temp_jul: 26,
    timezone: 'Atlantic/Canary',
    utc_offset_hours: 0,
    uk_overlap_hours: 8,
    cost_of_living: 'medium',
    monthly_cost_estimate: 1600,
    avg_internet_speed_mbps: 100,
    coworking_spaces_count: 12,
    nomad_score: 78
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    slug: 'bali-indonesia',
    tagline: 'Tropical coworking paradise for creative professionals',
    description: 'Bali is synonymous with the digital nomad dream. From Canggu\'s surf culture to Ubud\'s spiritual retreats, it offers diverse environments for remote work. The community, climate, and cost of living make it irresistible.',
    best_months: [4, 5, 6, 7, 8, 9, 10],
    avg_temp_jan: 28,
    avg_temp_jul: 27,
    timezone: 'Asia/Makassar',
    utc_offset_hours: 8,
    uk_overlap_hours: 3,
    cost_of_living: 'low',
    monthly_cost_estimate: 1400,
    avg_internet_speed_mbps: 30,
    coworking_spaces_count: 40,
    nomad_score: 88
  },
  {
    name: 'Barcelona',
    country: 'Spain',
    slug: 'barcelona-spain',
    tagline: 'Mediterranean lifestyle meets world-class city',
    description: 'Barcelona offers the perfect balance of beach life, cultural richness, and professional infrastructure. Just 1 hour timezone difference from the UK, it\'s ideal for hybrid workers who need occasional UK trips.',
    best_months: [3, 4, 5, 6, 9, 10],
    avg_temp_jan: 12,
    avg_temp_jul: 28,
    timezone: 'Europe/Madrid',
    utc_offset_hours: 1,
    uk_overlap_hours: 7,
    cost_of_living: 'medium',
    monthly_cost_estimate: 2400,
    avg_internet_speed_mbps: 200,
    coworking_spaces_count: 80,
    nomad_score: 87
  },
  {
    name: 'Madeira',
    country: 'Portugal',
    slug: 'madeira-portugal',
    tagline: 'Island paradise with digital nomad village',
    description: 'Madeira has embraced remote workers with its Digital Nomad Village initiative. Stunning natural beauty, subtropical climate, and Portugal\'s excellent infrastructure make it a unique destination for fractional executives.',
    best_months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
    avg_temp_jan: 17,
    avg_temp_jul: 24,
    timezone: 'Europe/Lisbon',
    utc_offset_hours: 0,
    uk_overlap_hours: 8,
    cost_of_living: 'medium',
    monthly_cost_estimate: 1700,
    avg_internet_speed_mbps: 100,
    coworking_spaces_count: 10,
    nomad_score: 80
  }
]

async function seedDestinations() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    console.error('DATABASE_URL environment variable is not set')
    process.exit(1)
  }

  const sql = neon(databaseUrl)

  console.log('Seeding destinations...')

  for (const dest of DESTINATIONS) {
    try {
      await sql`
        INSERT INTO destinations (
          name, country, slug, tagline, description,
          best_months, avg_temp_jan, avg_temp_jul,
          timezone, utc_offset_hours, uk_overlap_hours,
          cost_of_living, monthly_cost_estimate,
          avg_internet_speed_mbps, coworking_spaces_count, nomad_score,
          is_active
        ) VALUES (
          ${dest.name}, ${dest.country}, ${dest.slug}, ${dest.tagline}, ${dest.description},
          ${dest.best_months}, ${dest.avg_temp_jan}, ${dest.avg_temp_jul},
          ${dest.timezone}, ${dest.utc_offset_hours}, ${dest.uk_overlap_hours},
          ${dest.cost_of_living}, ${dest.monthly_cost_estimate},
          ${dest.avg_internet_speed_mbps}, ${dest.coworking_spaces_count}, ${dest.nomad_score},
          true
        )
        ON CONFLICT (slug) DO UPDATE SET
          name = EXCLUDED.name,
          tagline = EXCLUDED.tagline,
          description = EXCLUDED.description,
          best_months = EXCLUDED.best_months,
          avg_temp_jan = EXCLUDED.avg_temp_jan,
          avg_temp_jul = EXCLUDED.avg_temp_jul,
          uk_overlap_hours = EXCLUDED.uk_overlap_hours,
          cost_of_living = EXCLUDED.cost_of_living,
          monthly_cost_estimate = EXCLUDED.monthly_cost_estimate,
          avg_internet_speed_mbps = EXCLUDED.avg_internet_speed_mbps,
          coworking_spaces_count = EXCLUDED.coworking_spaces_count,
          nomad_score = EXCLUDED.nomad_score,
          updated_at = NOW()
      `
      console.log(`  ✓ ${dest.name}, ${dest.country}`)
    } catch (error) {
      console.error(`  ✗ Failed to seed ${dest.name}:`, error)
    }
  }

  console.log('\nDestinations seeded successfully!')
}

seedDestinations().catch(console.error)
