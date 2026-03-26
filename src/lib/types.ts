export type Locale = 'pt' | 'en'

export interface Project {
  id: string
  type: 'landing-page' | 'mobile-app'
  slug: string
  image: string
  techs: string[]
  link?: string
  span: 'small' | 'medium' | 'large' // Grid span: 4, 6, or 8 cols
}

export interface StatItem {
  value: number
  suffix: string
  labelKey: string
}

export interface SkillGroup {
  titleKey: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon: string
  brandColor: string
}

// Dictionary type - will be inferred from JSON structure
export interface Dictionary {
  nav: {
    projects: string
    skills: string
    about: string
    contact: string
  }
  hero: {
    label: string
    title_line1: string
    title_accent: string
    description: string
    cta_primary: string
    cta_secondary: string
  }
  manifesto: {
    quote_line1: string
    quote_line2: string
    body: string
  }
  stats: {
    projects_label: string
    satisfaction_label: string
    experience_label: string
    conversion_label: string
  }
  projects: {
    title: string
    subtitle: string
    view_project: string
    badge_landing: string
    badge_mobile: string
    more_title: string
    more_description: string
    items: Record<string, {
      title: string
      description: string
    }>
  }
  skills: {
    title: string
    groups: {
      frontend: string
      mobile: string
      tools: string
    }
  }
  about: {
    title: string
    body: string
    location: string
    availability: string
  }
  cta: {
    title_line1: string
    title_accent: string
    body: string
    whatsapp: string
    instagram: string
  }
  footer: {
    copyright: string
  }
  annotations: {
    hero: string
    manifesto: string
    stats: string
    projects: string
    skills: string
    about: string
    cta: string
  }
}
