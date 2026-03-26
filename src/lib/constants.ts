// Social and contact links
export const WHATSAPP_NUMBER = '5561986395713'
export const WHATSAPP_MESSAGE_PT = 'Oi João! Vi seu portfólio e gostaria de conversar sobre um projeto.'
export const WHATSAPP_MESSAGE_EN = 'Hi João! I saw your portfolio and would like to discuss a project.'

export const INSTAGRAM_HANDLE = 'jschwaab.dev'

export const SOCIAL_LINKS = {
  github: 'https://github.com/jfelipeschwaab',
  linkedin: 'https://www.linkedin.com/in/joão-felipe-schwaab/',
  instagram: `https://instagram.com/${INSTAGRAM_HANDLE}`,
} as const

export function getWhatsAppLink(locale: 'pt' | 'en'): string {
  const message = locale === 'pt' ? WHATSAPP_MESSAGE_PT : WHATSAPP_MESSAGE_EN
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// Navigation anchors
export const NAV_SECTIONS = ['projects', 'skills', 'about', 'contact'] as const
