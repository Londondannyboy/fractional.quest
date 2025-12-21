-- Migration: Create graph_nodes table for voice-to-graph repo builder
-- Created: 2025-12-18

-- Graph nodes table - stores career graph entities extracted from voice
CREATE TABLE IF NOT EXISTS graph_nodes (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  label TEXT NOT NULL,
  cluster TEXT NOT NULL, -- skills, experience, career_interests, preferences
  value TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  validated BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index on user_id for fast lookups
CREATE INDEX IF NOT EXISTS idx_graph_nodes_user_id ON graph_nodes(user_id);

-- Index on cluster for filtering by type
CREATE INDEX IF NOT EXISTS idx_graph_nodes_cluster ON graph_nodes(cluster);

-- Unique constraint on user_id + cluster + value (case-insensitive) to prevent duplicates
CREATE UNIQUE INDEX IF NOT EXISTS idx_graph_nodes_unique_value
  ON graph_nodes(user_id, cluster, LOWER(value));

-- Comments
COMMENT ON TABLE graph_nodes IS 'Career graph entities extracted from voice conversations';
COMMENT ON COLUMN graph_nodes.cluster IS 'Entity cluster: skills, experience, career_interests, preferences, requirements, candidate_matches, culture_fit';
COMMENT ON COLUMN graph_nodes.metadata IS 'Additional entity metadata: entityType, confidence, sentiment, importance';
COMMENT ON COLUMN graph_nodes.validated IS 'Whether user has confirmed this entity';
