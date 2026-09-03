import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'

export const BackgroundBeamsWithCollision = ({
  children,
  className,
  speed = 0.3, // 1 = normal, 2 = twice as fast, 0.5 = half speed
}: {
  children?: React.ReactNode
  className?: string
  speed?: number
}) => {
  const parentRef = useRef<HTMLDivElement>(null)

  const beams = [
    { initialX: 10, translateX: 10, duration: 7 },
    { initialX: 600, translateX: 600, duration: 3 },
    { initialX: 400, translateX: 400, duration: 5, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, className: 'h-20' },
    { initialX: 1200, translateX: 1200, duration: 6, delay: 2, className: 'h-6' },
  ]

  return (
    <div
      ref={parentRef}
      className={cn(
        'h-dvh bg-background relative flex items-center w-full justify-center overflow-hidden',
        className
      )}
    >
      {beams.map((beam) => (
        <FallingBeam key={beam.initialX + 'beam'} beamOptions={beam} speed={speed} />
      ))}
      {children}
    </div>
  )
}

const FallingBeam = ({
  beamOptions,
  speed,
}: {
  beamOptions: {
    initialX?: number
    translateX?: number
    duration?: number
    delay?: number
    className?: string
  }
  speed: number
}) => {
  return (
    <motion.div
      animate="animate"
      initial={{
        translateY: '-200px',
        translateX: beamOptions.initialX ?? '0px',
      }}
      variants={{
        animate: {
          translateY: '1800px',
          translateX: beamOptions.translateX ?? '0px',
        },
      }}
      transition={{
        duration: (beamOptions.duration ?? 8) / speed,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        delay: beamOptions.delay ?? 0,
      }}
      className={cn(
        'absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-primary via-secondary to-transparent opacity-30',
        beamOptions.className
      )}
    />
  )
}