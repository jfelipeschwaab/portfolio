import { ImageResponse } from 'next/og'
import { hasLocale, type Locale } from './dictionaries'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = hasLocale(lang) ? (lang as Locale) : 'pt'
  
  const title = locale === 'pt' 
    ? 'João Felipe Schwaab' 
    : 'João Felipe Schwaab'
  
  const subtitle = locale === 'pt'
    ? 'Interfaces que convertem.'
    : 'Interfaces that convert.'
  
  const tagline = locale === 'pt'
    ? 'Landing Pages & Mobile'
    : 'Landing Pages & Mobile'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0A1A',
          backgroundImage: 'radial-gradient(ellipse at 30% 20%, #7B2FBE30 0%, transparent 60%)',
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '15%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #7B2FBE40 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #38BDF840 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C084FC',
              marginBottom: 24,
            }}
          >
            {tagline}
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#E2E8F0',
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>

          {/* Subtitle with gradient effect */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              background: 'linear-gradient(135deg, #7B2FBE, #A855F7, #38BDF8)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.01em',
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Glass card decoration at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 24px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 12,
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#25D366',
            }}
          />
          <span style={{ color: '#94A3B8', fontSize: 18 }}>
            {locale === 'pt' ? 'Disponível para projetos' : 'Available for projects'}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
