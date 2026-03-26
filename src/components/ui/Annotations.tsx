'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Dictionary } from '@/lib/types'

interface AnnotationsProps {
  dict: Dictionary
}

type SectionId = 'hero' | 'manifesto' | 'stats' | 'projects' | 'skills' | 'about' | 'cta'

const sectionIds: SectionId[] = ['hero', 'manifesto', 'stats', 'projects', 'skills', 'about', 'cta']

// Map section IDs to their DOM IDs
const sectionDomIds: Record<SectionId, string> = {
  hero: 'hero',
  manifesto: 'manifesto',
  stats: 'stats',
  projects: 'projects',
  skills: 'skills',
  about: 'about',
  cta: 'contact',
}

export function Annotations({ dict }: AnnotationsProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('hero')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on large screens
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth >= 1280)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(sectionDomIds[id])
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setActiveSection(id)
            }
          })
        },
        { threshold: [0.3, 0.5, 0.7] }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [isVisible])

  if (!isVisible) return null

  const annotationKey = activeSection as keyof typeof dict.annotations
  const currentAnnotation = dict.annotations[annotationKey]

  return (
    <div 
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 w-48"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="text-right"
        >
          <p className="text-moonbeam/50 text-xs leading-relaxed italic">
            {currentAnnotation}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
