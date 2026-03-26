'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { LocaleToggle } from './LocaleToggle'
import type { Dictionary, Locale } from '@/lib/types'
import { NAV_SECTIONS } from '@/lib/constants'

interface NavBarProps {
  dict: Dictionary
  locale: Locale
}

export function NavBar({ dict, locale }: NavBarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    setIsAtTop(currentScrollY < 50)
    
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsVisible(true)
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false)
      setIsMenuOpen(false)
    }
    
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const navItems = [
    { key: 'projects', href: '#projects', label: dict.nav.projects },
    { key: 'skills', href: '#skills', label: dict.nav.skills },
    { key: 'about', href: '#about', label: dict.nav.about },
  ]

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isAtTop ? 'bg-transparent' : 'glass'
        }`}
      >
        <nav className="mx-auto max-w-[1200px] px-5 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href={`/${locale}`}
            className="font-display font-semibold text-lg text-starlight hover:text-quasar transition-colors"
          >
            JFS
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-moonbeam hover:text-starlight transition-colors text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <LocaleToggle currentLocale={locale} />
            <Link
              href="#contact"
              className="px-4 py-2 bg-nova text-white text-sm font-medium rounded-lg hover:bg-pulsar transition-colors"
            >
              {dict.nav.contact}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-starlight"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 glass md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-display text-starlight hover:text-quasar transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-4 mt-8"
              >
                <LocaleToggle currentLocale={locale} />
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-nova text-white font-medium rounded-lg hover:bg-pulsar transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {dict.nav.contact}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
