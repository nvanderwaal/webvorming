import Image from 'next/image'
import clsx from 'clsx'

import d0dgeIcon from '@/images/d0dge-icon.svg'
import { d0dge } from '@/lib/site'

const stats = [
  { value: '1', label: 'vinger' },
  { value: '7', label: 'stages' },
  { value: '3', label: 'daily runs' },
  { value: '0', label: 'gedwongen ads' },
]

function ArrowUpRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.75 10.25 10.25 5.75M10.25 5.75H6.5M10.25 5.75V9.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DotField() {
  let size = 9

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 grid grid-cols-9 place-items-center p-6 sm:p-10"
    >
      {Array.from({ length: size * size }, (_, index) => {
        let x = index % size
        let y = Math.floor(index / size)
        let distance = Math.abs(x - 4) + Math.abs(y - 4)
        let warning = (x === 0 && y === 2) || (x === 8 && y === 6)

        return (
          <span
            key={index}
            className={clsx(
              'h-1.5 w-1.5 rounded-full',
              warning
                ? 'animate-pulse bg-zinc-200'
                : distance === 3
                  ? 'bg-zinc-500'
                  : 'bg-zinc-700',
            )}
          />
        )
      })}
    </div>
  )
}

export function D0dgeFeature({ className }: { className?: string }) {
  return (
    <section
      id="d0dge"
      aria-labelledby="d0dge-title"
      className={clsx(
        'relative isolate overflow-hidden rounded-3xl bg-[#080808] ring-1 ring-zinc-900/10 dark:ring-white/10',
        className,
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-6 py-10 sm:px-10 sm:py-14">
          <p className="flex items-center gap-2 text-xs font-medium tracking-widest text-zinc-400 uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F5F5F0]" />
            Nu in ontwikkeling · Onze eigen app
          </p>
          <h2
            id="d0dge-title"
            className="mt-6 font-doto text-6xl font-black tracking-tight text-[#F5F5F0] sm:text-7xl"
          >
            {d0dge.name}
          </h2>
          <p className="mt-2 font-doto text-lg font-bold text-zinc-400">
            {d0dge.subtitle}
          </p>
          <p className="mt-6 max-w-md text-base text-zinc-300">
            Een minimalistisch, monochroom survival-arcadespel. Eén glyph, één
            vinger en een levend veld van stippen dat je waarschuwt voor wat er
            aankomt. Overleef de stages, jaag op je beste score en zie hoe lang
            je het volhoudt zodra Overload begint.
          </p>
          <dl className="mt-8 grid max-w-md grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-doto text-3xl font-black text-[#F5F5F0]">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-zinc-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={d0dge.url}
              className="group inline-flex items-center gap-2 rounded-md bg-[#F5F5F0] px-4 py-2 text-sm font-semibold text-[#080808] transition hover:bg-white"
            >
              Bekijk d0dge
              <ArrowUpRightIcon className="h-4 w-4 stroke-current transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-sm text-zinc-400">
              Binnenkort in de App Store en Google Play
            </p>
          </div>
        </div>
        <a
          href={d0dge.url}
          aria-label="Ga naar d0dge"
          className="relative hidden min-h-80 border-t border-white/5 lg:block lg:border-t-0 lg:border-l"
        >
          <DotField />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={d0dgeIcon}
              alt=""
              className="h-48 w-48 rounded-[2.5rem] shadow-2xl ring-1 shadow-black ring-white/10 transition duration-500 hover:rotate-6"
              unoptimized
            />
          </div>
        </a>
      </div>
    </section>
  )
}
