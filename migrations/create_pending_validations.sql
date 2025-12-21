-- Create pending_validations table for persistent confirmation queue
-- This allows confirmations to survive user sessions

CREATE TABLE IF NOT EXISTS pending_validations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  cluster TEXT NOT NULL,
  value TEXT NOT NULL,
  confidence DECIMAL(3, 2) NOT NULL CHECK (confidence >= 0 AND confidence <= 1),
  reasoning TEXT NOT NULL,
  validation_type TEXT NOT NULL CHECK (validation_type IN ('hard', 'soft')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,

  -- Indexes for performance
  INDEX idx_pending_validations_user_status (user_id, status),
  INDEX idx_pending_validations_created (created_at DESC)
);

-- Add comment
COMMENT ON TABLE pending_validations IS 'Stores validation requests that persist across sessions - users must confirm high-value preferences';

-- Example data
-- INSERT INTO pending_validations (id, user_id, entity_id, cluster, value, confidence, reasoning, validation_type)
-- VALUES ('conf-123', 'user-abc', 'entity-456', 'preferences', 'Remote', 0.95, 'You said "ONLY" remote - confirming this is exclusive', 'hard');
