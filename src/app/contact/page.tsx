import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '@/components/SocialIcons'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met Webvorming. Stuur een e-mail of bel ons direct, we reageren binnen 48 uur.',
}

function ContactItem({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Icon className="h-5 w-5 fill-zinc-500 dark:fill-zinc-400" />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="mt-4 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {children}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <SimpleLayout
      title="Laten we samen aan de slag gaan."
      intro="Heb je een vraag of een idee voor je website, webshop of app? Stuur ons een mail of bel ons direct. We beantwoorden je vraag binnen 48 uur."
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ContactItem
          icon={MailIcon}
          title="Stuur ons een e-mail"
          description="Dat mag altijd!"
        >
          <Link
            href={`mailto:${site.email}`}
            className="transition hover:text-blue-500"
          >
            {site.email}
          </Link>
        </ContactItem>
        <ContactItem
          icon={PhoneIcon}
          title="Een dringende vraag?"
          description="Bel ons dan direct."
        >
          <Link
            href={site.phone.href}
            className="transition hover:text-blue-500"
          >
            {site.phone.label}
          </Link>
        </ContactItem>
        <ContactItem
          icon={MapPinIcon}
          title={`Vanuit ${site.location}`}
          description="We hebben geen bezoekadres, maar we kunnen altijd even langskomen. 100% elektrisch."
        >
          {site.location}
        </ContactItem>
      </div>
      <div className="mt-16 flex gap-6">
        <Link
          href={site.socials.linkedin}
          aria-label="Volg ons op LinkedIn"
          className="group -m-1 p-1"
        >
          <LinkedInIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
        <Link
          href={site.socials.instagram}
          aria-label="Volg ons op Instagram"
          className="group -m-1 p-1"
        >
          <InstagramIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
        <Link
          href={site.socials.facebook}
          aria-label="Volg ons op Facebook"
          className="group -m-1 p-1"
        >
          <FacebookIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
      </div>
    </SimpleLayout>
  )
}
