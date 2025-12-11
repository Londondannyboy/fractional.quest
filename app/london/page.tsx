import { redirect } from 'next/navigation'

// Redirect London jobs to London-specific fractional jobs page
export default function LondonJobsPage() {
  redirect('/fractional-jobs-london')
}
