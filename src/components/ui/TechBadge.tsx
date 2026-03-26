import { cn } from '@/lib/utils'

interface TechBadgeProps {
  name: string
  brandColor?: string
  className?: string
}

export function TechBadge({ 
  name, 
  brandColor = '#7B2FBE',
  className 
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5',
        'text-sm font-medium text-starlight',
        'glass rounded-full transition-all duration-300',
        'hover:border-[var(--brand-color)]',
        className
      )}
      style={{ 
        '--brand-color': brandColor,
      } as React.CSSProperties}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: brandColor }}
        aria-hidden="true"
      />
      {name}
    </span>
  )
}
