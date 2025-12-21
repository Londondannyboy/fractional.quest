export interface Job {
  id: string
  title: string
  company_name: string
  location?: string
  workplace_type?: string
  employment_type?: string
  compensation?: string
  posted_date?: string
  updated_date?: string
  is_fractional?: boolean
  classification_confidence?: number
  skills_required?: string[]
  seniority_level?: string
  role_category?: string
  salary_min?: number
  salary_max?: number
  salary_currency?: string
  full_description?: string
  requirements?: string[]
  responsibilities?: string[]
  benefits?: string[]
  qualifications?: string[]
  about_company?: string
  about_team?: string
  hours_per_week?: string
  is_remote?: boolean
  is_active?: boolean
  url: string
  external_id: string
}

export interface Article {
  id: number
  slug: string
  title: string
  content: string
  excerpt?: string
  status: 'draft' | 'published'
  app: string
  created_at?: Date
  published_at?: Date
  updated_at?: Date
  meta_description?: string
  featured_asset_url?: string
  featured_asset_alt?: string
  hero_asset_url?: string
  hero_asset_alt?: string
  hero_asset_title?: string
  word_count?: number
  is_featured?: boolean
  video_url?: string
  video_playback_id?: string
}

export interface Company {
  id: number
  slug: string
  name: string
  app: string
  description?: string
  logo_url?: string
  headquarters?: string
  specializations?: string[]
  founded_year?: number
  employee_count?: number
  primary_country?: string
  primary_region?: string
  meta_description?: string
  featured_asset_url?: string
  hero_asset_url?: string
  payload?: Record<string, any>
}

export interface JobFilter {
  title?: string
  location?: string
  isFractional?: boolean
  seniority?: string
  skills?: string[]
  remote?: boolean
  limit?: number
  offset?: number
}

export interface PaginationParams {
  limit: number
  offset: number
  total: number
}

// ============================================
// Destination Types (Aspirational Features)
// ============================================

export interface Destination {
  id: number
  name: string
  country: string
  slug: string
  tagline: string
  description?: string
  best_months: number[]
  avg_temp_jan?: number
  avg_temp_jul?: number
  timezone: string
  utc_offset_hours: number
  uk_overlap_hours: number
  cost_of_living: 'low' | 'medium' | 'high'
  monthly_cost_estimate?: number
  avg_internet_speed_mbps?: number
  coworking_spaces_count?: number
  nomad_score?: number
  image_url?: string
  is_active: boolean
}

export interface JobDestinationSuggestion {
  id: number
  job_id: string
  destination_id: number
  destination?: Destination
  suggestion_type: 'remote_escape' | 'weekend_getaway' | 'timezone_match'
  match_score: number
  ai_reasoning?: string
  season_context?: string
  generated_at: Date
}

// ============================================
// Featured Executive Types
// ============================================

export interface FeaturedExecutive {
  id: number
  name: string
  slug: string
  headline?: string
  role_category?: string

  // Lifestyle story
  based_in?: string
  lifestyle_summary?: string
  why_fractional?: string
  typical_week?: string

  // Professional
  specialisms?: string[]
  industries?: string[]
  notable_clients?: string[]
  years_experience?: number

  // Media
  photo_url?: string
  lifestyle_photos?: string[]
  video_url?: string

  // Links
  linkedin_url?: string

  // Status
  status: 'draft' | 'published' | 'featured'
  featured_order?: number
  published_at?: Date

  created_at: Date
  updated_at: Date
}

// ============================================
// Aspirational Message Types
// ============================================

export type AspirationalSuggestionType = 'remote_escape' | 'weekend_getaway' | 'timezone_match' | 'flexibility'

export interface AspirationalMessageData {
  headline: string
  subtext?: string
  type: AspirationalSuggestionType
  icon: 'globe' | 'sun' | 'calendar' | 'coffee' | 'plane'
  destination?: {
    name: string
    country: string
    tagline: string
  }
}
