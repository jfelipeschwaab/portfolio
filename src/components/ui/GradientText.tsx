import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
  className?: string
}

export function GradientText({ 
  children, 
  as: Component = 'span',
  className 
}: GradientTextProps) {
  return (
    <Component className={cn('gradient-text', className)}>
      {children}
    </Component>
  )
}
