import { Sparkle } from 'lucide-react'

// Scattered, sparse "glitter" across the whole page — fixed positions for a
// stable, SSR-safe layout. Percentages are relative to the fixed full-screen layer.
const sparkles = [
  { top: '6%', left: '8%', size: 13, delay: '0s' },
  { top: '11%', left: '82%', size: 18, delay: '0.6s' },
  { top: '19%', left: '16%', size: 10, delay: '1.4s' },
  { top: '9%', left: '54%', size: 12, delay: '2s' },
  { top: '27%', left: '88%', size: 15, delay: '0.9s' },
  { top: '33%', left: '30%', size: 12, delay: '1.7s' },
  { top: '17%', left: '70%', size: 9, delay: '2.6s' },
  { top: '30%', left: '60%', size: 16, delay: '0.3s' },
  { top: '38%', left: '12%', size: 11, delay: '2.2s' },
  { top: '24%', left: '44%', size: 9, delay: '1.1s' },
  { top: '47%', left: '86%', size: 13, delay: '0.5s' },
  { top: '54%', left: '7%', size: 12, delay: '1.9s' },
  { top: '61%', left: '92%', size: 10, delay: '2.4s' },
  { top: '68%', left: '20%', size: 14, delay: '0.8s' },
  { top: '73%', left: '74%', size: 11, delay: '1.5s' },
  { top: '82%', left: '40%', size: 12, delay: '2.1s' },
  { top: '88%', left: '88%', size: 15, delay: '0.4s' },
  { top: '92%', left: '14%', size: 10, delay: '1.3s' },
]

export function Sparkles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          className="animate-twinkle absolute"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            color: 'var(--sparkle)',
          }}
          fill="currentColor"
        />
      ))}
    </div>
  )
}
