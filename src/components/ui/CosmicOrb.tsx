import { cn } from '@/lib/utils'

interface CosmicOrbProps {
  size: number
  color?: string
  className?: string
  blur?: number
  animationDelay?: number
}

export function CosmicOrb({
  size,
  color = '#7B2FBE',
  className,
  blur = 60,
  animationDelay = 0,
}: CosmicOrbProps) {
  return (
    <div
      className={cn(
        'absolute rounded-full pointer-events-none animate-float',
        'hidden md:block', // Hidden on mobile
        className
      )}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, ${color}00 70%)`,
        filter: `blur(${blur}px)`,
        animationDelay: `${animationDelay}s`,
      }}
      aria-hidden="true"
    />
  )
}
