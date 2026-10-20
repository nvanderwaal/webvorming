import { type Metadata } from 'next'

import { Redirect } from '@/components/Redirect'
import { d0dge } from '@/lib/site'

export const metadata: Metadata = { robots: { index: false } }

// The app store listings link to this URL for the privacy policy.
export default function Page() {
  return <Redirect to={d0dge.privacyUrl} />
}
