'use client'

import { motion } from 'framer-motion'
import { GradientText } from '@/components/ui/GradientText'
import { CosmicOrb } from '@/components/ui/CosmicOrb'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { getWhatsAppLink } from '@/lib/constants'
import type { Dictionary, Locale } from '@/lib/types'

interface HeroProps {
  dict: Dictionary
  locale: Locale
}

export function Hero({ dict, locale }: HeroProps) {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.03,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  }

  const accentLetterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.03,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  }

  const line1 = dict.hero.title_line1
  const accent = dict.hero.title_accent

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, #7B2FBE15 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Cosmic orbs */}
      <CosmicOrb 
        size={400} 
        color="#7B2FBE" 
        className="top-[10%] right-[10%]" 
        blur={80}
        animationDelay={0}
      />
      <CosmicOrb 
        size={300} 
        color="#38BDF8" 
        className="top-[40%] right-[25%]" 
        blur={60}
        animationDelay={2}
      />
      <CosmicOrb 
        size={200} 
        color="#A855F7" 
        className="bottom-[20%] right-[15%]" 
        blur={50}
        animationDelay={4}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 py-32 md:py-0 w-full">
        <div className="max-w-[600px]">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-quasar font-sans font-medium text-sm tracking-[0.08em] uppercase mb-6"
          >
            {dict.hero.label}
          </motion.p>

          {/* Headline */}
          <h1 className="font-display font-bold text-[40px] md:text-[72px] leading-[1.0] tracking-[-0.03em] mb-6">
            {/* Line 1 - Letter by letter reveal */}
            <span className="block">
              {line1.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            
            {/* Accent - Letter by letter reveal with gradient */}
            <span className="block gradient-text">
              {accent.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={accentLetterVariants}
                  className="inline-block"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-moonbeam text-base md:text-lg leading-relaxed max-w-[520px] mb-8"
          >
            {dict.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <MagneticButton
              href={getWhatsAppLink(locale)}
              variant="primary"
              icon="whatsapp"
            >
              {dict.hero.cta_primary}
            </MagneticButton>
            
            <MagneticButton
              href="#projects"
              variant="ghost"
            >
              {dict.hero.cta_secondary} ↓
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-scroll">
          <div className="w-6 h-10 border-2 border-moonbeam/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-moonbeam/50 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
