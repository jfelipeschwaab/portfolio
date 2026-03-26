import { cn } from '@/lib/utils'
import { ElementType, ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glow?: boolean
  as?: ElementType
}

export function GlassCard({ 
  children, 
  className, 
  glow = false,
  as: Component = 'div' 
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        'glass glass-hover transition-all duration-300',
        glow && 'glow-card',
        className
      )}
    >
      {children}
    </Component>
  )
}
