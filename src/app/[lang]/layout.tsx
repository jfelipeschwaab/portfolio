import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from './dictionaries'

const baseUrl = 'https://joaofelipeschwaab.com' // Replace with actual domain

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}): Promise<Metadata> {
  const { lang } = await params
  
  if (!hasLocale(lang)) {
    return {}
  }
  
  const metadata: Record<Locale, Metadata> = {
    pt: {
      metadataBase: new URL(baseUrl),
      title: 'João Felipe Schwaab | Desenvolvedor de Landing Pages & Apps Mobile',
      description: 'Crio landing pages de alta conversão e aplicativos mobile que transformam visitantes em clientes. Baseado no RS, disponível para projetos remotos.',
      keywords: ['landing page developer', 'desenvolvedor landing page', 'mobile developer', 'react developer', 'next.js', 'freelancer', 'portfolio'],
      openGraph: {
        title: 'João Felipe Schwaab | Landing Pages & Mobile',
        description: 'Interfaces que convertem.',
        type: 'website',
        locale: 'pt_BR',
      },
      alternates: {
        canonical: `${baseUrl}/pt`,
        languages: {
          'pt-BR': `${baseUrl}/pt`,
          'en-US': `${baseUrl}/en`,
        },
      },
    },
    en: {
      metadataBase: new URL(baseUrl),
      title: 'João Felipe Schwaab | Landing Page & Mobile Developer',
      description: 'I build high-converting landing pages and mobile apps that turn visitors into customers. Based in Brazil, available for remote projects.',
      keywords: ['landing page developer', 'mobile developer', 'react developer', 'next.js', 'freelancer', 'portfolio'],
      openGraph: {
        title: 'João Felipe Schwaab | Landing Pages & Mobile',
        description: 'Interfaces that convert.',
        type: 'website',
        locale: 'en_US',
      },
      alternates: {
        canonical: `${baseUrl}/en`,
        languages: {
          'pt-BR': `${baseUrl}/pt`,
          'en-US': `${baseUrl}/en`,
        },
      },
    },
  }
  
  return metadata[lang as Locale]
}

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  
  if (!hasLocale(lang)) {
    notFound()
  }

  return children
}
