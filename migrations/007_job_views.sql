-- Job view/click tracking
CREATE TABLE IF NOT EXISTS job_views (
  id SERIAL PRIMARY KEY,
  job_id INTEGER NOT NULL,
  user_id TEXT,  -- Stack Auth user ID if logged in
  session_id TEXT,  -- Anonymous session tracking
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  referrer TEXT,  -- Where they came from
  device_type TEXT  -- mobile/desktop
);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_job_views_job_id ON job_views(job_id);
CREATE INDEX IF NOT EXISTS idx_job_views_viewed_at ON job_views(viewed_at);

-- Aggregated view counts (updated periodically for performance)
CREATE TABLE IF NOT EXISTS job_view_counts (
  job_id INTEGER PRIMARY KEY,
  total_views INTEGER DEFAULT 0,
  views_last_7_days INTEGER DEFAULT 0,
  views_last_24_hours INTEGER DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Function to update view counts
CREATE OR REPLACE FUNCTION update_job_view_counts() RETURNS VOID AS $$
BEGIN
  INSERT INTO job_view_counts (job_id, total_views, views_last_7_days, views_last_24_hours, last_updated)
  SELECT
    job_id,
    COUNT(*) as total_views,
    COUNT(*) FILTER (WHERE viewed_at > NOW() - INTERVAL '7 days') as views_last_7_days,
    COUNT(*) FILTER (WHERE viewed_at > NOW() - INTERVAL '24 hours') as views_last_24_hours,
    NOW()
  FROM job_views
  GROUP BY job_id
  ON CONFLICT (job_id) DO UPDATE SET
    total_views = EXCLUDED.total_views,
    views_last_7_days = EXCLUDED.views_last_7_days,
    views_last_24_hours = EXCLUDED.views_last_24_hours,
    last_updated = NOW();
END;
$$ LANGUAGE plpgsql;
