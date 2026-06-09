type IconProps = { className?: string }

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function RedNoteIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    </svg>
  )
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export const socialLinks = [
  {
    href: 'https://linkedin.com/in/joelle-cheeseman',
    label: 'LinkedIn',
    Icon: LinkedInIcon,
  },
  {
    href: 'https://xhslink.com/m/8jLjgMZinIo',
    label: 'RedNote',
    Icon: RedNoteIcon,
  },
  {
    href: 'https://www.instagram.com/joelle.jz',
    label: 'Instagram',
    Icon: InstagramIcon,
  },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 sm:gap-5 ${className}`}>
      {socialLinks.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-card/50 px-6 py-2.5 text-sm text-card-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-secondary/60 sm:px-7"
        >
          <Icon className="text-primary/80" />
          {label}
        </a>
      ))}
    </div>
  )
}
