-- Migration: Add featured executives table for lifestyle content
-- Created: 2024-12-21

-- Featured executives - showcasing fractional lifestyle stories
CREATE TABLE IF NOT EXISTS featured_executives (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  headline VARCHAR(300),
  role_category VARCHAR(100),

  -- Lifestyle story
  based_in VARCHAR(200),
  lifestyle_summary TEXT,
  why_fractional TEXT,
  typical_week TEXT,

  -- Professional background
  specialisms TEXT[] DEFAULT '{}',
  industries TEXT[] DEFAULT '{}',
  notable_clients TEXT[] DEFAULT '{}',
  years_experience INTEGER,

  -- Media assets
  photo_url VARCHAR(500),
  lifestyle_photos TEXT[] DEFAULT '{}',
  video_url VARCHAR(500),

  -- Links
  linkedin_url VARCHAR(500),

  -- Editorial status
  status VARCHAR(50) NOT NULL DEFAULT 'draft',
  featured_order INTEGER,
  published_at TIMESTAMP,

  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_executives_status ON featured_executives(status);
CREATE INDEX IF NOT EXISTS idx_executives_role ON featured_executives(role_category);
CREATE INDEX IF NOT EXISTS idx_executives_featured ON featured_executives(featured_order) WHERE status = 'featured';
CREATE INDEX IF NOT EXISTS idx_executives_slug ON featured_executives(slug);
CREATE INDEX IF NOT EXISTS idx_executives_based_in ON featured_executives(based_in);

-- Updated at trigger
CREATE OR REPLACE FUNCTION update_executives_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS executives_updated_at ON featured_executives;
CREATE TRIGGER executives_updated_at
  BEFORE UPDATE ON featured_executives
  FOR EACH ROW
  EXECUTE FUNCTION update_executives_updated_at();

-- Check constraint for status values
ALTER TABLE featured_executives
  DROP CONSTRAINT IF EXISTS check_executive_status;
ALTER TABLE featured_executives
  ADD CONSTRAINT check_executive_status
  CHECK (status IN ('draft', 'published', 'featured'));
