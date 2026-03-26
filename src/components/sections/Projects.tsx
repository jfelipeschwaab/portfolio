import Image from 'next/image'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlassCard } from '@/components/ui/GlassCard'
import { TechBadge } from '@/components/ui/TechBadge'
import { DeviceMockup } from '@/components/ui/DeviceMockup'
import type { Dictionary, Project } from '@/lib/types'

interface ProjectsProps {
  dict: Dictionary
}

const projects: Project[] = [
  {
    id: 'lucascorretor',
    type: 'landing-page',
    slug: 'lucascorretor',
    image: '/lucas-corretor-foto.jpeg',
    techs: ['Next.js', 'Tailwind CSS'],
    link: 'https://lucascorretor.com.br',
    span: 'large',
  },
  {
    id: 'solaris',
    type: 'mobile-app',
    slug: 'solaris',
    image: '/solaris-foto.jpeg',
    techs: ['SwiftUI', 'UIKit', 'WidgetKit', 'MVVM'],
    link: 'https://apps.apple.com/br/app/solaris-foco-e-produtividade/id6751549690',
    span: 'small',
  },
  {
    id: 'julianepsi',
    type: 'landing-page',
    slug: 'julianepsi',
    image: '/julianepsi-foto.jpeg',
    techs: ['Next.js', 'Tailwind CSS'],
    link: 'https://julianepsi.com',
    span: 'medium',
  },
  {
    id: 'aqua',
    type: 'mobile-app',
    slug: 'aqua',
    image: '/Aqua-foto.jpeg',
    techs: ['SwiftUI', 'WidgetKit', 'MVVM', 'XCTest', 'CI/CD'],
    link: 'https://apps.apple.com/br/app/aqua-water-tracker/id6755016225',
    span: 'medium',
  },
]

const spanClasses = {
  small: 'lg:col-span-4',
  medium: 'lg:col-span-6',
  large: 'lg:col-span-8',
}

const brandColors: Record<string, string> = {
  'Next.js': '#FFFFFF',
  'TypeScript': '#3178C6',
  'Tailwind CSS': '#06B6D4',
  'React Native': '#61DAFB',
  'React': '#61DAFB',
  'Node.js': '#339933',
  'Swift': '#F05138',
  'SwiftUI': '#0071E3',
  'UIKit': '#147EFB',
  'WidgetKit': '#A78BFA',
  'MVVM': '#818CF8',
  'XCTest': '#147EFB',
  'CI/CD': '#00B0FF',
}

export function Projects({ dict }: ProjectsProps) {
  return (
    <SectionWrapper id="projects" withRadialBg>
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <ScrollReveal>
          <h2 className="font-display font-semibold text-[28px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-starlight mb-4">
            {dict.projects.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-moonbeam text-base md:text-lg max-w-[600px]">
            {dict.projects.subtitle}
          </p>
        </ScrollReveal>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {projects.map((project, index) => {
          const projectContent = dict.projects.items[project.id]
          const isPhone = project.type === 'mobile-app'

          return (
            <ScrollReveal
              key={project.id}
              delay={index * 0.1}
              className={`${spanClasses[project.span]}`}
            >
              <GlassCard
                glow
                className="group relative overflow-hidden h-full p-4 md:p-6"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs font-medium text-starlight">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: isPhone ? '#38BDF8' : '#7B2FBE'
                      }}
                    />
                    {isPhone ? dict.projects.badge_mobile : dict.projects.badge_landing}
                  </span>
                </div>

                {/* Image/Mockup */}
                <div className={`relative mb-4 rounded-lg overflow-hidden bg-cosmos ${isPhone ? 'aspect-[9/16] max-w-[220px] mx-auto' : 'aspect-[16/10]'}`}>
                  <Image
                    src={project.image}
                    alt={projectContent?.title || project.slug}
                    fill
                    className={isPhone ? 'object-contain' : 'object-cover'}
                    sizes={isPhone ? '220px' : '(max-width: 768px) 100vw, 50vw'}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-starlight mb-2">
                    {projectContent?.title || project.slug}
                  </h3>
                  <p className="text-moonbeam text-sm md:text-base mb-4 line-clamp-2">
                    {projectContent?.description || 'Project description'}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <TechBadge
                        key={tech}
                        name={tech}
                        brandColor={brandColors[tech] || '#7B2FBE'}
                      />
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-void/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 px-6 py-3 bg-nova text-white font-medium rounded-lg">
                      {isPhone ? 'Ver na App Store' : dict.projects.view_project}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                )}
              </GlassCard>
            </ScrollReveal>
          )
        })}

        {/* "E muito mais..." card */}
        <ScrollReveal
          delay={projects.length * 0.1}
          className="lg:col-span-12"
        >
          <GlassCard className="flex flex-col items-center justify-center py-12 md:py-16 text-center">
            <span className="text-4xl md:text-5xl mb-4" aria-hidden="true">...</span>
            <h3 className="font-display font-semibold text-xl md:text-2xl text-starlight mb-2">
              {dict.projects.more_title}
            </h3>
            <p className="text-moonbeam text-sm md:text-base max-w-md">
              {dict.projects.more_description}
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
