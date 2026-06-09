import { Sparkle } from 'lucide-react'

// Scattered, sparse "glitter" — fixed positions so layout is stable and SSR-safe.
const sparkles = [
  { top: '12%', left: '8%', size: 14, delay: '0s' },
  { top: '22%', left: '82%', size: 20, delay: '0.6s' },
  { top: '40%', left: '16%', size: 11, delay: '1.4s' },
  { top: '15%', left: '54%', size: 12, delay: '2s' },
  { top: '58%', left: '88%', size: 16, delay: '0.9s' },
  { top: '70%', left: '30%', size: 13, delay: '1.7s' },
  { top: '34%', left: '70%', size: 10, delay: '2.6s' },
  { top: '64%', left: '60%', size: 18, delay: '0.3s' },
  { top: '78%', left: '12%', size: 12, delay: '2.2s' },
  { top: '48%', left: '44%', size: 9, delay: '1.1s' },
]

export function Sparkles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          className="animate-twinkle absolute text-primary/60"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  )
}
