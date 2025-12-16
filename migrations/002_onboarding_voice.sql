-- Migration: Add voice-first onboarding tables
-- Date: 2025-12-16
-- Description: Unified onboarding system supporting both candidate and client flows with voice-first UX

-- Onboarding sessions table (unified for candidates and clients)
CREATE TABLE IF NOT EXISTS onboarding_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL UNIQUE,
  user_type TEXT CHECK (user_type IN ('candidate', 'client', 'unknown')),
  method TEXT NOT NULL CHECK (method IN ('voice', 'manual')),
  current_step TEXT NOT NULL,
  collected_data JSONB DEFAULT '{}'::jsonb,
  hume_chat_group_id TEXT,
  is_complete BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  last_activity_at TIMESTAMP DEFAULT NOW(),

  -- Ensure we have a valid user_type if completed
  CONSTRAINT complete_requires_user_type CHECK (
    NOT is_complete OR user_type IS NOT NULL
  )
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_onboarding_sessions_user_id ON onboarding_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_onboarding_sessions_user_type ON onboarding_sessions(user_type) WHERE user_type IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_onboarding_sessions_incomplete ON onboarding_sessions(user_id, is_complete, last_activity_at) WHERE is_complete = FALSE;
CREATE INDEX IF NOT EXISTS idx_onboarding_sessions_method ON onboarding_sessions(method);
CREATE INDEX IF NOT EXISTS idx_onboarding_sessions_last_activity ON onboarding_sessions(last_activity_at DESC);

-- GIN index for JSONB queries
CREATE INDEX IF NOT EXISTS idx_onboarding_sessions_collected_data ON onboarding_sessions USING GIN (collected_data);

-- Update trigger for last_activity_at
CREATE OR REPLACE FUNCTION update_onboarding_last_activity()
RETURNS TRIGGER AS $$
BEGIN
    NEW.last_activity_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_onboarding_sessions_last_activity
  BEFORE UPDATE ON onboarding_sessions
  FOR EACH ROW
  EXECUTE FUNCTION update_onboarding_last_activity();

-- Auto-set completed_at when is_complete changes to true
CREATE OR REPLACE FUNCTION set_onboarding_completed_at()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.is_complete = TRUE AND OLD.is_complete = FALSE THEN
        NEW.completed_at = NOW();
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER set_onboarding_sessions_completed_at
  BEFORE UPDATE ON onboarding_sessions
  FOR EACH ROW
  EXECUTE FUNCTION set_onboarding_completed_at();

-- Comments for documentation
COMMENT ON TABLE onboarding_sessions IS 'Unified onboarding state for both candidates and clients with voice-first support';
COMMENT ON COLUMN onboarding_sessions.user_type IS 'AI-detected user type: candidate (seeking jobs), client (hiring), or unknown (not yet determined)';
COMMENT ON COLUMN onboarding_sessions.method IS 'Onboarding method: voice (Hume AI conversation) or manual (form-based)';
COMMENT ON COLUMN onboarding_sessions.current_step IS 'Current onboarding step for resume capability';
COMMENT ON COLUMN onboarding_sessions.collected_data IS 'JSONB structure varies by user_type - candidate: {name, skills[], companies[], roles[]}, client: {companyName, industry, rolesNeeded[], requirements[]}';
COMMENT ON COLUMN onboarding_sessions.hume_chat_group_id IS 'Hume AI chat group ID for resuming voice conversations after disconnection';
COMMENT ON COLUMN onboarding_sessions.is_complete IS 'Auto-detected completion when all required fields are collected';
COMMENT ON COLUMN onboarding_sessions.last_activity_at IS 'Last state update - used to detect abandoned onboarding sessions';

-- Helper view for incomplete onboarding sessions (for notifications)
CREATE OR REPLACE VIEW incomplete_onboarding_sessions AS
SELECT
  user_id,
  user_type,
  method,
  current_step,
  started_at,
  last_activity_at,
  EXTRACT(EPOCH FROM (NOW() - last_activity_at)) / 3600 AS hours_since_activity
FROM onboarding_sessions
WHERE is_complete = FALSE
ORDER BY last_activity_at DESC;

COMMENT ON VIEW incomplete_onboarding_sessions IS 'View for tracking incomplete onboarding sessions for notification triggers';
