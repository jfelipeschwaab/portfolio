import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from './dictionaries'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { Stats } from '@/components/sections/Stats'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { About } from '@/components/sections/About'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { CursorTrail } from '@/components/ui/CursorTrail'
import { Annotations } from '@/components/ui/Annotations'

function JsonLd({ locale }: { locale: Locale }) {
  const baseUrl = 'https://joaofelipeschwaab.com'
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'João Felipe Schwaab',
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}/${locale}/opengraph-image`,
    sameAs: [
      'https://github.com/jfelipeschwaab',
      'https://linkedin.com/in/joaofelipeschwaab',
      'https://instagram.com/joaofelipeschwaab',
    ],
    jobTitle: locale === 'pt' 
      ? 'Desenvolvedor de Landing Pages & Mobile'
      : 'Landing Page & Mobile Developer',
    description: locale === 'pt'
      ? 'Desenvolvedor focado em criar experiências digitais que convertem.'
      : 'Developer focused on building digital experiences that convert.',
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'React Native', 'Flutter', 'Landing Pages', 'Mobile Development'],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function Home({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params
  
  if (!hasLocale(lang)) {
    notFound()
  }
  
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <JsonLd locale={locale} />
      <CursorTrail />
      <NavBar dict={dict} locale={locale} />
      <Annotations dict={dict} />
      
      <main>
        <Hero dict={dict} locale={locale} />
        <Manifesto dict={dict} />
        <Stats dict={dict} />
        <Projects dict={dict} />
        <Skills dict={dict} />
        <About dict={dict} />
        <FinalCTA dict={dict} locale={locale} />
      </main>
      
      <Footer dict={dict} locale={locale} />
      <FloatingWhatsApp locale={locale} />
    </>
  )
}
