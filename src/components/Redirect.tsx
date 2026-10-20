import { Container } from '@/components/Container'

// GitHub Pages can't do server-side redirects, so old URLs of the previous
// site are kept alive with a meta refresh.
export function Redirect({ to }: { to: string }) {
  if (to.startsWith('/')) {
    to = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${to}`
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
      <p className="text-base text-zinc-600 dark:text-zinc-400">
        Deze pagina is verhuisd naar{' '}
        <a href={to} className="font-medium text-blue-500 hover:underline">
          {to}
        </a>
        .
      </p>
    </Container>
  )
}
