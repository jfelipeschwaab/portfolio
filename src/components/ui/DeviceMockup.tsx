import { cn } from '@/lib/utils'
import Image from 'next/image'

interface DeviceMockupProps {
  image: string
  alt: string
  type: 'phone' | 'laptop'
  className?: string
}

export function DeviceMockup({ 
  image, 
  alt, 
  type,
  className 
}: DeviceMockupProps) {
  const isPhone = type === 'phone'
  
  return (
    <div
      className={cn(
        'relative group perspective-1000',
        isPhone ? 'max-w-[280px]' : 'max-w-full',
        className
      )}
      style={{ perspective: '1000px' }}
    >
      <div
        className={cn(
          'relative transform transition-transform duration-500 ease-out',
          'group-hover:rotate-y-0',
          isPhone ? 'rotate-y-[-5deg]' : 'rotate-y-[-3deg]'
        )}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${isPhone ? -5 : -3}deg)`,
        }}
      >
        {/* Device frame */}
        <div
          className={cn(
            'relative overflow-hidden',
            'bg-cosmos border-2 border-stardust',
            isPhone 
              ? 'rounded-[32px] p-2 aspect-[9/19]' 
              : 'rounded-xl p-3 aspect-[16/10]'
          )}
        >
          {/* Screen */}
          <div className={cn(
            'relative w-full h-full overflow-hidden',
            isPhone ? 'rounded-[24px]' : 'rounded-lg'
          )}>
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={isPhone ? '280px' : '(max-width: 768px) 100vw, 50vw'}
            />
          </div>
          
          {/* Phone notch */}
          {isPhone && (
            <div 
              className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-cosmos rounded-full"
              aria-hidden="true"
            />
          )}
        </div>
        
        {/* 3D shadow */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-nova/20 blur-xl rounded-full"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
