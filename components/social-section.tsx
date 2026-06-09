const links = [
  {
    href: 'https://linkedin.com/in/joelle-cheeseman',
    label: 'LinkedIn',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="text-primary/80"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://xhslink.com/m/8jLjgMZinIo',
    label: 'RedNote',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="text-primary/80"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      </svg>
    ),
  },
]

export function SocialSection() {
  return (
    <section className="border-t border-primary/10 px-6 pb-5 pt-10 text-center">
      <p className="mb-4 text-sm uppercase tracking-[2px] text-muted-foreground">
        Follow the journey
      </p>
      <div className="flex flex-wrap justify-center gap-5">
        {links.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-secondary/40 px-7 py-2.5 text-sm text-card-foreground transition-colors hover:border-primary/30 hover:bg-secondary/60"
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
