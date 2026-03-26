import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { Dictionary } from '@/lib/types'

interface ManifestoProps {
  dict: Dictionary
}

export function Manifesto({ dict }: ManifestoProps) {
  return (
    <SectionWrapper id="manifesto" className="relative overflow-hidden">
      {/* Decorative quotes */}
      <div
        className="absolute top-0 left-0 font-display text-[200px] leading-none text-starlight/5 select-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        &ldquo;
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Pull quote */}
        <div className="lg:col-span-5">
          <ScrollReveal>
            <h2 className="font-display font-semibold text-[28px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-starlight">
              {dict.manifesto.quote_line1}
              <br />
              {dict.manifesto.quote_line2}
            </h2>
          </ScrollReveal>
        </div>
        
        {/* Body text */}
        <div className="lg:col-span-7">
          <ScrollReveal delay={0.3}>
            <div className="text-moonbeam text-base md:text-lg leading-relaxed space-y-4">
              {dict.manifesto.body.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
