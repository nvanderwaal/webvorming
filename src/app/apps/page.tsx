import { type Metadata } from 'next'

import { Redirect } from '@/components/Redirect'
import { d0dge } from '@/lib/site'

export const metadata: Metadata = { robots: { index: false } }

export default function Page() {
  return <Redirect to={d0dge.url} />
}
