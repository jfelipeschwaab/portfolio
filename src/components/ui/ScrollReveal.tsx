'use client'

import { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  delay?: number
  duration?: number
}

const directionOffsets = {
  up: { y: 24, x: 0 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
}

export function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  
  const offset = directionOffsets[direction]
  
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      x: offset.x,
      y: offset.y,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
