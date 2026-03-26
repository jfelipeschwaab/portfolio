'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Point {
  x: number
  y: number
}

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState<Point>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0
      )
    }
    
    checkTouchDevice()
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsTouchDevice(true) // Disable cursor effect
      return
    }
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    if (!isVisible) setIsVisible(true)
  }, [isVisible])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isTouchDevice, handleMouseMove, handleMouseLeave])

  // Don't render on touch devices
  if (isTouchDevice) return null

  const trailPoints = [
    { delay: 0, size: 6, opacity: 0.8 },
    { delay: 0.05, size: 5, opacity: 0.6 },
    { delay: 0.1, size: 4, opacity: 0.4 },
    { delay: 0.15, size: 3, opacity: 0.3 },
    { delay: 0.2, size: 2, opacity: 0.2 },
  ]

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 hidden md:block"
      aria-hidden="true"
    >
      {isVisible && trailPoints.map((point, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(168, 85, 247, ${point.opacity}) 0%, transparent 70%)`,
            width: point.size * 2,
            height: point.size * 2,
            marginLeft: -point.size,
            marginTop: -point.size,
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            type: 'spring',
            stiffness: 500 - index * 80,
            damping: 28 + index * 5,
            mass: 0.5 + index * 0.1,
          }}
        />
      ))}
    </div>
  )
}
