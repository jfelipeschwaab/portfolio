import Image from 'next/image'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import type { Dictionary } from '@/lib/types'

interface AboutProps {
  dict: Dictionary
}

export function About({ dict }: AboutProps) {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Photo */}
        <ScrollReveal className="lg:col-span-4 flex justify-center">
          <div className="relative">
            {/* Gradient ring */}
            <div 
              className="absolute -inset-2 rounded-full animate-rotate-gradient opacity-50"
              style={{
                background: 'conic-gradient(from 0deg, #7B2FBE, #A855F7, #38BDF8, #7B2FBE)',
                filter: 'blur(8px)',
              }}
              aria-hidden="true"
            />
            
            {/* Photo container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glass animate-float-slow">
              <Image
                src="/720 - João Felipe_1.jpg"
                alt="João Felipe Schwaab"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="lg:col-span-8">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-[28px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-starlight mb-6">
              {dict.about.title}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="text-moonbeam text-base md:text-lg leading-relaxed space-y-4 mb-8">
              {dict.about.body.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          {/* Fun fact cards */}
          <div className="flex flex-col sm:flex-row gap-4">
            <ScrollReveal delay={0.3}>
              <GlassCard className="flex items-center gap-3 px-4 py-3">
                <svg className="w-4 h-4 text-quasar shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="text-starlight text-sm font-medium">
                  {dict.about.location}
                </span>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <GlassCard className="flex items-center gap-3 px-4 py-3">
                <svg className="w-4 h-4 text-quasar shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />
                </svg>
                <span className="text-starlight text-sm font-medium">
                  {dict.about.availability}
                </span>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
