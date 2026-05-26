'use client'

import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any

    const init = async () => {
      const LenisClass = (await import('@studio-freight/lenis')).default
      lenis = new LenisClass({
        duration: 1.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.2,
      })

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    init()
    return () => lenis?.destroy()
  }, [])

  return <>{children}</>
}
