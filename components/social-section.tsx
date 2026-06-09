import { SocialLinks } from '@/components/social-links'

export function SocialSection() {
  return (
    <section className="border-t border-primary/10 px-6 pb-5 pt-10 text-center">
      <p className="mb-4 text-sm uppercase tracking-[2px] text-muted-foreground">
        Follow the journey
      </p>
      <SocialLinks />
    </section>
  )
}
