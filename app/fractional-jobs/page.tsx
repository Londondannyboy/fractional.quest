import { redirect } from 'next/navigation'

// Redirect to /fractional-jobs-uk (our #1 Google ranking page)
// This preserves SEO value while consolidating traffic
export default function FractionalJobsRedirect() {
  redirect('/fractional-jobs-uk')
}
