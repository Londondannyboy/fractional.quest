-- Add country and city fields to jobs table for better classification
-- Run this before running classify-jobs-comprehensive.ts

-- Add country field (e.g., "UK", "USA", "Germany")
ALTER TABLE jobs
ADD COLUMN IF NOT EXISTS country VARCHAR(100);

-- Add city field (e.g., "London", "Manchester", "Birmingham")
ALTER TABLE jobs
ADD COLUMN IF NOT EXISTS city VARCHAR(100);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_jobs_country ON jobs(country);
CREATE INDEX IF NOT EXISTS idx_jobs_city ON jobs(city);
CREATE INDEX IF NOT EXISTS idx_jobs_role_category ON jobs(role_category);
CREATE INDEX IF NOT EXISTS idx_jobs_employment_type ON jobs(employment_type);
CREATE INDEX IF NOT EXISTS idx_jobs_is_fractional ON jobs(is_fractional);
CREATE INDEX IF NOT EXISTS idx_jobs_industry ON jobs(industry);

-- Composite index for common queries (fractional jobs by role and location)
CREATE INDEX IF NOT EXISTS idx_jobs_fractional_search
ON jobs(is_fractional, role_category, country, city)
WHERE is_active = true;

-- Add comment for documentation
COMMENT ON COLUMN jobs.country IS 'Country where the job is located (e.g., UK, USA, Germany)';
COMMENT ON COLUMN jobs.city IS 'City where the job is located (e.g., London, Manchester) or NULL for remote/country-wide';
