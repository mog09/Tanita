'use client'

import { useEffect, useRef, ReactNode, CSSProperties, ElementType } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale' | 'fade'

interface Props {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  style?: CSSProperties
  as?: ElementType
}

const initTransform: Record<Direction, string> = {
  up:    'translateY(36px)',
  left:  'translateX(-36px)',
  right: 'translateX(36px)',
  scale: 'scale(0.96)',
  fade:  'translateY(0)',
}

export default function RevealBlock({
  children,
  direction = 'up',
  delay = 0,
  duration = 1000,
  threshold = 0.12,
  className = '',
  style = {},
  as: Tag = 'div',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = initTransform[direction]
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.25,0.1,0.25,1), transform ${duration}ms cubic-bezier(0.25,0.1,0.25,1)`
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0) translateX(0) scale(1)'
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [direction, delay, duration, threshold])

  // @ts-ignore
  return <Tag ref={ref} className={className} style={style}>{children}</Tag>
}
