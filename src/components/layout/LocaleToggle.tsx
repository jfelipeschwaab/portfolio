'use client'

import { useRouter, usePathname } from 'next/navigation'
import type { Locale } from '@/lib/types'

interface LocaleToggleProps {
  currentLocale: Locale
}

export function LocaleToggle({ currentLocale }: LocaleToggleProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return
    
    // Replace the locale segment in the path
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1 p-1 glass rounded-lg">
      <button
        onClick={() => switchLocale('pt')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
          currentLocale === 'pt'
            ? 'bg-nova text-white'
            : 'text-moonbeam hover:text-starlight'
        }`}
        aria-label="Mudar para Português"
      >
        PT
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
          currentLocale === 'en'
            ? 'bg-nova text-white'
            : 'text-moonbeam hover:text-starlight'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
