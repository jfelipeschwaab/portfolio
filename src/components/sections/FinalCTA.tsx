import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { CosmicOrb } from '@/components/ui/CosmicOrb'
import { getWhatsAppLink, SOCIAL_LINKS } from '@/lib/constants'
import type { Dictionary, Locale } from '@/lib/types'

interface FinalCTAProps {
  dict: Dictionary
  locale: Locale
}

export function FinalCTA({ dict, locale }: FinalCTAProps) {
  return (
    <SectionWrapper 
      id="contact" 
      className="relative py-32 md:py-40 overflow-hidden text-center"
    >
      {/* Intensified background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #7B2FBE25 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Cosmic orbs - more visible */}
      <CosmicOrb 
        size={500} 
        color="#7B2FBE" 
        className="top-[5%] left-[10%]" 
        blur={100}
        animationDelay={0}
      />
      <CosmicOrb 
        size={400} 
        color="#38BDF8" 
        className="bottom-[10%] right-[5%]" 
        blur={80}
        animationDelay={2}
      />
      <CosmicOrb 
        size={300} 
        color="#A855F7" 
        className="top-[30%] right-[20%]" 
        blur={60}
        animationDelay={1}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[600px] mx-auto">
        <ScrollReveal>
          <h2 className="font-display font-semibold text-[28px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-starlight mb-2">
            {dict.cta.title_line1}
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <GradientText 
            as="h2" 
            className="font-display font-semibold text-[28px] md:text-[48px] leading-[1.1] tracking-[-0.02em] mb-6"
          >
            {dict.cta.title_accent}
          </GradientText>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-moonbeam text-base md:text-lg leading-relaxed max-w-[480px] mx-auto mb-8">
            {dict.cta.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton
              href={getWhatsAppLink(locale)}
              variant="primary"
              icon="whatsapp"
              size="large"
            >
              {dict.cta.whatsapp}
            </MagneticButton>
            
            <MagneticButton
              href={SOCIAL_LINKS.instagram}
              variant="ghost"
              icon="instagram"
              size="large"
            >
              {dict.cta.instagram}
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
