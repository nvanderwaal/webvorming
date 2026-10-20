import Image from 'next/image'
import clsx from 'clsx'

import logoFlier from '@/images/logos/flier.png'
import logoIngeLamboo from '@/images/logos/inge-lamboo.png'
import logoSparta from '@/images/logos/sparta-rotterdam.png'
import logoValleiEnRijn from '@/images/logos/vallei-en-rijn.png'
import logoViaConnect from '@/images/logos/via-connect.png'

export const clients = [
  { name: 'Sparta Rotterdam', logo: logoSparta },
  { name: 'Autorijschool Flier', logo: logoFlier },
  { name: 'Vallei en Rijn Businessclub', logo: logoValleiEnRijn },
  { name: 'VIA Connect', logo: logoViaConnect },
  { name: 'Inge Lamboo', logo: logoIngeLamboo },
]

export function ClientLogos({ className }: { className?: string }) {
  return (
    <ul
      role="list"
      className={clsx(
        'grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3',
        className,
      )}
    >
      {clients.map((client) => (
        <li key={client.name} className="flex items-center justify-center">
          <Image
            src={client.logo}
            alt={client.name}
            title={client.name}
            className="h-10 w-auto max-w-full object-contain opacity-70 transition hover:opacity-100 dark:opacity-60 dark:invert dark:hover:opacity-90"
          />
        </li>
      ))}
    </ul>
  )
}
