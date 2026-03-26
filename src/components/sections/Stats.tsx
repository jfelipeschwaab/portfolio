'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { GlassCard } from '@/components/ui/GlassCard'
import type { Dictionary } from '@/lib/types'

interface StatsProps {
  dict: Dictionary
}

interface StatItemProps {
  value: number
  suffix: string
  label: string
  delay: number
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000 // 2 seconds
    const startTime = Date.now() + delay * 1000
    let animationFrame: number
    
    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      
      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate)
        return
      }
      
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * value)
      
      setDisplayValue(current)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, delay])

  return (
    <div ref={ref} className="flex flex-col items-center text-center py-6 md:py-8">
      <div className="flex items-baseline gap-1">
        <span className="font-display font-bold text-[40px] md:text-[48px] text-starlight">
          {displayValue}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView && displayValue === value ? 1 : 0 }}
          className="font-display font-bold text-[32px] md:text-[40px] text-quasar"
        >
          {suffix}
        </motion.span>
      </div>
      <span className="text-moonbeam text-sm md:text-base mt-2">{label}</span>
    </div>
  )
}

export function Stats({ dict }: StatsProps) {
  const stats = [
    { value: 20, suffix: '+', label: dict.stats.projects_label },
    { value: 100, suffix: '%', label: dict.stats.satisfaction_label },
    { value: 3, suffix: '+', label: dict.stats.experience_label },
    { value: 40, suffix: '%+', label: dict.stats.conversion_label },
  ]

  return (
    <SectionWrapper id="stats">
      <GlassCard glow className="p-4 md:p-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                ${index < stats.length - 1 ? 'lg:border-r lg:border-glass-border' : ''}
                ${index < 2 ? 'border-b lg:border-b-0 border-glass-border' : ''}
                ${index % 2 === 0 ? 'border-r lg:border-r-0 border-glass-border' : 'lg:border-r lg:border-glass-border'}
              `}
            >
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.2}
              />
            </div>
          ))}
        </div>
      </GlassCard>
    </SectionWrapper>
  )
}
