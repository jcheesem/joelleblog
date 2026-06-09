import Image from 'next/image'
import type { ReactNode } from 'react'

interface DayCardProps {
  mission: string
  title: string
  description: string
  delay?: string
  image?: { src: string; alt: string }
  body?: ReactNode
  comingSoon?: boolean
}

export function DayCard({
  mission,
  title,
  description,
  delay = '0.1s',
  image,
  body,
  comingSoon = false,
}: DayCardProps) {
  return (
    <article
      style={{ animationDelay: delay }}
      className="group animate-fade-slide-up relative ml-9 rounded-[20px_14px_14px_20px] border border-primary/10 bg-card/40 p-5 backdrop-blur-md transition-colors hover:border-primary/25 hover:bg-card/60 sm:ml-16 sm:rounded-[28px_20px_20px_28px] sm:p-7 md:ml-24"
    >
      {/* timeline node */}
      <span
        aria-hidden="true"
        className="absolute -left-3.5 top-6 h-7 w-1.5 rounded-full bg-primary/60 transition-all group-hover:h-9 group-hover:bg-primary sm:-left-7 sm:top-8 sm:w-2"
      />

      <span className="mb-3.5 inline-block rounded-full border border-accent bg-secondary px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary">
        {mission}
      </span>

      <h2 className="mb-3.5 font-heading text-2xl font-semibold uppercase leading-tight text-card-foreground sm:text-3xl">
        {title}
      </h2>

      {image && (
        <div className="my-4 overflow-hidden rounded-2xl">
          <Image
            src={image.src || '/placeholder.svg'}
            alt={image.alt}
            width={800}
            height={420}
            priority
            className="h-auto w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>
      )}

      <p className="my-3 text-pretty leading-relaxed text-muted-foreground">
        {description}
      </p>

      {comingSoon ? (
        <div className="mt-4 rounded-r-2xl border-l-[3px] border-primary bg-primary/5 py-3 pl-5 italic text-muted-foreground">
          Coming Soon...
        </div>
      ) : (
        <div className="mt-4 space-y-4 rounded-r-2xl border-l-[3px] border-primary bg-primary/5 py-3 pl-5 text-pretty italic leading-relaxed text-card-foreground/90">
          {body}
        </div>
      )}
    </article>
  )
}
