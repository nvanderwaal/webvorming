import { Button } from '@/components/Button'
import { MailIcon, PhoneIcon } from '@/components/SocialIcons'
import { site } from '@/lib/site'

export function ContactCta() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none fill-zinc-400 dark:fill-zinc-500" />
        <span className="ml-3">Aan de slag</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Laten we samen aan de slag gaan om jouw digitale wereld te laten
        groeien! We beantwoorden je vraag binnen 48 uur.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <Button href={`mailto:${site.email}`} className="flex-1">
          Mail sturen
        </Button>
        <Button
          href={site.phone.href}
          variant="secondary"
          className="flex-1 whitespace-nowrap"
        >
          <PhoneIcon className="h-4 w-4 fill-zinc-400 dark:fill-zinc-500" />
          {site.phone.label}
        </Button>
      </div>
    </div>
  )
}
