import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TechBadge } from '@/components/ui/TechBadge'
import type { Dictionary } from '@/lib/types'

interface SkillsProps {
  dict: Dictionary
}

interface SkillData {
  name: string
  brandColor: string
}

interface SkillGroupData {
  key: 'frontend' | 'mobile' | 'tools'
  skills: SkillData[]
}

const skillGroups: SkillGroupData[] = [
  {
    key: 'frontend',
    skills: [
      { name: 'React', brandColor: '#61DAFB' },
      { name: 'Next.js', brandColor: '#FFFFFF' },
      { name: 'TypeScript', brandColor: '#3178C6' },
      { name: 'Tailwind CSS', brandColor: '#06B6D4' },
      { name: 'Python', brandColor: '#3776AB' },
      { name: 'Django', brandColor: '#44B78B' },
      { name: 'Node.js', brandColor: '#339933' },
      { name: 'Express.js', brandColor: '#888888' },
    ],
  },
  {
    key: 'mobile',
    skills: [
      { name: 'Swift', brandColor: '#F05138' },
      { name: 'SwiftUI', brandColor: '#0071E3' },
      { name: 'UIKit', brandColor: '#147EFB' },
      { name: 'React Native', brandColor: '#61DAFB' },
      { name: 'MVVM', brandColor: '#A78BFA' },
      { name: 'VIPER', brandColor: '#818CF8' },
    ],
  },
  {
    key: 'tools',
    skills: [
      { name: 'Git', brandColor: '#F05032' },
      { name: 'GitHub Actions', brandColor: '#2088FF' },
      { name: 'Figma', brandColor: '#F24E1E' },
      { name: 'AWS EC2', brandColor: '#FF9900' },
      { name: 'Supabase', brandColor: '#3ECF8E' },
      { name: 'XCTest', brandColor: '#147EFB' },
      { name: 'CI/CD', brandColor: '#00B0FF' },
    ],
  },
]

export function Skills({ dict }: SkillsProps) {
  return (
    <SectionWrapper id="skills">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <ScrollReveal>
          <h2 className="font-display font-semibold text-[28px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-starlight">
            {dict.skills.title}
          </h2>
        </ScrollReveal>
      </div>

      {/* Skill groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {skillGroups.map((group, groupIndex) => (
          <ScrollReveal key={group.key} delay={groupIndex * 0.15}>
            <div>
              <h3 className="font-display font-semibold text-lg md:text-xl text-starlight mb-6">
                {dict.skills.groups[group.key]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <ScrollReveal 
                    key={skill.name} 
                    delay={groupIndex * 0.15 + skillIndex * 0.05}
                  >
                    <TechBadge
                      name={skill.name}
                      brandColor={skill.brandColor}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
