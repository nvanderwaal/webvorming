import { type Metadata } from 'next'
import { Doto } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { site } from '@/lib/site'

import '@/styles/tailwind.css'

const doto = Doto({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-doto-family',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: `%s - ${site.name}`,
    default: `${site.name} - ${site.tagline}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: 'nl_NL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="nl"
      className={`h-full antialiased ${doto.variable}`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
