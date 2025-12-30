import { NextRequest, NextResponse } from 'next/server'

// Auth removed - will be replaced with NeonAuth
export async function POST(request: NextRequest) {
  return NextResponse.json({ error: 'Auth required' }, { status: 401 })
}
