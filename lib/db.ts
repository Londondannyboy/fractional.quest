import { neon } from '@neondatabase/serverless'

// Get SQL client - DATABASE_URL required at runtime
// The neon function must be called as a tagged template function
export const createDbQuery = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required')
  }
  return neon(process.env.DATABASE_URL)
}
