import { NextResponse } from 'next/server'

// Auth removed - will be replaced with NeonAuth
export async function GET() {
  return NextResponse.json({ count: 0 })
}
