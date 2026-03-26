import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Negotiator from 'negotiator'

const locales = ['pt', 'en'] as const
const defaultLocale = 'pt'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language') ?? ''
  const headers = { 'accept-language': acceptLanguage }
  const negotiator = new Negotiator({ headers })
  const languages = negotiator.languages()
  
  // Check if any preferred language matches our locales
  for (const lang of languages) {
    // Handle both "pt-BR" -> "pt" and "en-US" -> "en"
    const shortLang = lang.split('-')[0]
    if (locales.includes(shortLang as typeof locales[number])) {
      return shortLang
    }
  }
  
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect root to localized path
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip internal paths (_next, api, static files)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
}
