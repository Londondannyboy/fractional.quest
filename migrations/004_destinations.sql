-- Migration: Add destinations table for aspirational job suggestions
-- Created: 2024-12-21

-- Destinations table - curated list of digital nomad destinations
CREATE TABLE IF NOT EXISTS destinations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,

  -- Appeal & Description
  tagline VARCHAR(200) NOT NULL,
  description TEXT,

  -- Seasonal data
  best_months INTEGER[] NOT NULL DEFAULT '{}',
  avg_temp_jan INTEGER,
  avg_temp_jul INTEGER,

  -- Timezone & UK compatibility
  timezone VARCHAR(50) NOT NULL,
  utc_offset_hours DECIMAL(3,1) NOT NULL,
  uk_overlap_hours INTEGER NOT NULL DEFAULT 8,

  -- Cost indicators
  cost_of_living VARCHAR(20) NOT NULL DEFAULT 'medium',
  monthly_cost_estimate INTEGER,

  -- Digital nomad infrastructure
  avg_internet_speed_mbps INTEGER,
  coworking_spaces_count INTEGER,
  nomad_score INTEGER,

  -- Assets
  image_url VARCHAR(500),

  -- Metadata
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Job-destination suggestions cache
CREATE TABLE IF NOT EXISTS job_destination_suggestions (
  id SERIAL PRIMARY KEY,
  job_id VARCHAR(255) NOT NULL,
  destination_id INTEGER NOT NULL REFERENCES destinations(id) ON DELETE CASCADE,

  -- Matching metadata
  suggestion_type VARCHAR(50) NOT NULL,
  match_score INTEGER DEFAULT 50,
  ai_reasoning TEXT,

  -- Context
  season_context VARCHAR(50),
  generated_at TIMESTAMP DEFAULT NOW(),

  UNIQUE(job_id, destination_id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_destinations_best_months ON destinations USING GIN(best_months);
CREATE INDEX IF NOT EXISTS idx_destinations_uk_overlap ON destinations(uk_overlap_hours);
CREATE INDEX IF NOT EXISTS idx_destinations_active ON destinations(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_destinations_slug ON destinations(slug);
CREATE INDEX IF NOT EXISTS idx_job_dest_job_id ON job_destination_suggestions(job_id);
CREATE INDEX IF NOT EXISTS idx_job_dest_score ON job_destination_suggestions(match_score DESC);

-- Updated at trigger
CREATE OR REPLACE FUNCTION update_destinations_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS destinations_updated_at ON destinations;
CREATE TRIGGER destinations_updated_at
  BEFORE UPDATE ON destinations
  FOR EACH ROW
  EXECUTE FUNCTION update_destinations_updated_at();
