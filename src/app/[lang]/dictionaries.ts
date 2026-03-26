import 'server-only'
import type { Dictionary } from '@/lib/types'

const dictionaries = {
  pt: () => import('./dictionaries/pt.json').then((module) => module.default as Dictionary),
  en: () => import('./dictionaries/en.json').then((module) => module.default as Dictionary),
}

export type Locale = keyof typeof dictionaries

export const locales: Locale[] = ['pt', 'en']

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale): Promise<Dictionary> => 
  dictionaries[locale]()
