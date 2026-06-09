export function Hero() {
  return (
    <header className="relative flex min-h-[80vh] flex-col items-center justify-center border-b border-primary/10 px-5 py-16 text-center">
      {/* gradient overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_65%,rgba(0,133,209,0.08),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-[1] h-24 w-full bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative z-[2] flex flex-col items-center">
        <h1 className="text-gradient font-heading text-balance text-5xl font-semibold uppercase leading-[1.08] tracking-wide sm:text-6xl md:text-7xl">
          2026 Blog
          <br />
          Future Close-Up
        </h1>

        <div className="mt-4 rounded-full border border-primary/20 bg-card/50 px-8 py-2.5 text-sm uppercase tracking-[2px] text-primary backdrop-blur-sm sm:text-base">
          AI for a Shared Future
        </div>

        <p className="mt-7 max-w-2xl text-pretty px-4 text-base leading-relaxed text-muted-foreground">
          My name is Joelle, and I am one of 21 participants in the Future
          Close-Up 2026 Cohort! Follow along with my journey through Shenzhen
          and Chengdu in China&apos;s AI and Robotics hubs in a program
          organized by Tencent and CICG. This program theme is &quot;AI for a
          Shared Future&quot; where we start off as &quot;v1.0&quot; of
          ourselves, and through cultural exchange, education, and reflection,
          we become an upgraded v7.0 by the end of the program, with a new
          outlook on AI development and impacts across an international sphere.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="rounded-full bg-secondary/40 px-5 py-1.5 backdrop-blur-sm">
            Jun 8 – 12, 2026
          </span>
          <span className="rounded-full bg-secondary/40 px-5 py-1.5 backdrop-blur-sm">
            Shenzhen · Chengdu
          </span>
        </div>

        <div className="mt-9 text-xs uppercase tracking-[3px] text-muted-foreground/60">
          ↓ Scroll to explore missions
        </div>
      </div>
    </header>
  )
}
