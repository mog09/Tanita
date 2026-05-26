'use client'

import { useEffect, useRef } from 'react'

type RevealOptions = {
  threshold?: number
  delay?: number
  once?: boolean
}

export function useScrollReveal(options: RevealOptions = {}) {
  const { threshold = 0.1, delay = 0, once = true } = options
  const ref = useRef<any>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0) translateX(0) scale(1)'
          }, delay)
          if (once) observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay, once])

  return ref
}

type UseRevealAllOptions = {
  threshold?: number
  stagger?: number
}

export function useRevealAll(selector: string, options: UseRevealAllOptions = {}) {
  const { threshold = 0.1, stagger = 120 } = options
  const containerRef = useRef<any>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const els = Array.from(container.querySelectorAll(selector)) as HTMLElement[]
    els.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.25,0.1,0.25,1)'
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          els.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * stagger)
          })
          observer.unobserve(container)
        }
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [selector, threshold, stagger])

  return containerRef
}
