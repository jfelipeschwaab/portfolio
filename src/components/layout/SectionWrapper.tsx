import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  withRadialBg?: boolean
}

export function SectionWrapper({ 
  id, 
  children, 
  className,
  withRadialBg = false 
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={id}
      className={cn(
        'relative py-24 md:py-32 px-5 md:px-8',
        withRadialBg && 'before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_30%_20%,_#7B2FBE15_0%,_transparent_60%)] before:pointer-events-none',
        className
      )}
    >
      <div className="relative mx-auto max-w-[1200px]">
        {children}
      </div>
    </section>
  )
}
