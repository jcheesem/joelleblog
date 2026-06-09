'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ReactNode } from 'react'

interface DayCardProps {
  mission: string
  title: string
  description: string
  delay?: string
  image?: { src: string; alt: string }
  dayLabel?: string
  date?: string
  body?: ReactNode
  comingSoon?: boolean
}

export function DayCard({
  mission,
  title,
  description,
  delay = '0.1s',
  image,
  dayLabel,
  date,
  body,
  comingSoon = false,
}: DayCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      style={{ animationDelay: delay }}
      className="group animate-fade-slide-up relative ml-9 rounded-[20px_14px_14px_20px] border border-primary/10 bg-card/60 p-5 backdrop-blur-md transition-colors hover:border-primary/25 hover:bg-card/80 sm:ml-16 sm:rounded-[28px_20px_20px_28px] sm:p-7 md:ml-24"
    >
      {/* timeline node */}
      <span
        aria-hidden="true"
        className="absolute -left-3.5 top-6 h-7 w-1.5 rounded-full bg-primary/60 transition-all group-hover:h-9 group-hover:bg-primary sm:-left-7 sm:top-8 sm:w-2"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* LEFT: mission title, subtitle, media */}
        <div className="flex flex-col">
          <span className="mb-3.5 inline-block w-fit rounded-full border border-accent/40 bg-secondary px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            {mission}
          </span>

          <h2 className="mb-3.5 font-heading text-2xl font-semibold uppercase leading-tight text-card-foreground sm:text-3xl">
            {title}
          </h2>

          <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>

          {image && (
            <div className="mt-auto aspect-square overflow-hidden rounded-2xl">
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                width={800}
                height={800}
                priority
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          )}
        </div>

        {/* RIGHT: written entry */}
        <div className="flex flex-col">
          {(dayLabel || date) && (
            <div className="mb-3 flex flex-wrap items-baseline gap-x-2">
              <span className="font-heading text-lg font-semibold uppercase tracking-wide text-primary">
                {dayLabel}
              </span>
              {date && (
                <span className="text-sm text-muted-foreground">· {date}</span>
              )}
            </div>
          )}

          {comingSoon ? (
            <div className="rounded-r-2xl border-l-[3px] border-primary bg-primary/5 py-3 pl-5 italic text-muted-foreground">
              Coming Soon...
            </div>
          ) : (
            <div className="rounded-r-2xl border-l-[3px] border-primary bg-primary/5 py-3 pl-5 pr-2">
              <div
                className={
                  expanded
                    ? 'space-y-4 text-pretty leading-relaxed text-card-foreground/90'
                    : 'relative max-h-[420px] space-y-4 overflow-hidden text-pretty leading-relaxed text-card-foreground/90'
                }
              >
                {body}
                {!expanded && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card/95 to-transparent"
                  />
                )}
              </div>

              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                {expanded ? 'Hide' : 'Read more …'}
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
