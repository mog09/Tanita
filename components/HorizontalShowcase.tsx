'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import RevealBlock from './RevealBlock'

const collections = [
  {
    num: '01',
    name: 'La Rose Noire Droptail',
    sub: 'Coachbuild · One of Four',
    bg: 'radial-gradient(ellipse at 45% 55%, #2a1206 0%, #0a0502 100%)',
  },
  {
    num: '02',
    name: 'Arcadia Droptail',
    sub: 'Coachbuild · Unique Commission',
    bg: 'radial-gradient(ellipse at 55% 45%, #0d1824 0%, #030810 100%)',
  },
  {
    num: '03',
    name: 'Amethyst Droptail',
    sub: 'Coachbuild · Unique Commission',
    bg: 'radial-gradient(ellipse at 40% 60%, #160d20 0%, #07040f 100%)',
  },
  {
    num: '04',
    name: 'Boat Tail',
    sub: 'Coachbuild · One of Three',
    bg: 'radial-gradient(ellipse at 60% 40%, #0a1a10 0%, #030a05 100%)',
  },
  {
    num: '05',
    name: 'Black Badge Ghost',
    sub: 'Collections · Dark Alter Ego',
    bg: 'radial-gradient(ellipse at 50% 50%, #0f0f0f 0%, #050505 100%)',
  },
]

function CollectionCarSvg({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 600 340" fill="none" className="w-[85%] opacity-65">
      <defs>
        <radialGradient id={`cGrad${index}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="rgba(184,149,106,0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="300" cy="310" rx="280" ry="14" fill="rgba(184,149,106,0.04)" />
      <path
        d="M50 248 Q58 210 92 192 L188 154 Q262 124 330 116 Q392 109 428 124 L450 144 Q458 160 454 204 L450 250 Z"
        fill={`url(#cGrad${index})`}
        stroke="rgba(184,149,106,0.22)"
        strokeWidth="0.7"
      />
      <path
        d="M188 154 Q258 126 328 118 Q388 111 426 125"
        fill="none"
        stroke="rgba(184,149,106,0.38)"
        strokeWidth="0.8"
      />
      <path
        d="M192 152 Q250 138 288 146 L348 155 L386 152 L382 186 L286 192 L190 188 Z"
        fill="rgba(184,149,106,0.06)"
        stroke="rgba(184,149,106,0.13)"
        strokeWidth="0.4"
      />
      <circle cx="128" cy="252" r="44" fill="none" stroke="rgba(184,149,106,0.28)" strokeWidth="0.7" />
      <circle cx="128" cy="252" r="30" fill="none" stroke="rgba(184,149,106,0.11)" strokeWidth="0.5" />
      <circle cx="128" cy="252" r="6"  fill="rgba(184,149,106,0.18)" />
      <circle cx="388" cy="250" r="44" fill="none" stroke="rgba(184,149,106,0.28)" strokeWidth="0.7" />
      <circle cx="388" cy="250" r="30" fill="none" stroke="rgba(184,149,106,0.11)" strokeWidth="0.5" />
      <circle cx="388" cy="250" r="6"  fill="rgba(184,149,106,0.18)" />
    </svg>
  )
}

export default function HorizontalShowcase() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const onDown = (e: MouseEvent) => {
      isDown = true
      startX = e.pageX - track.offsetLeft
      scrollLeft = track.scrollLeft
    }
    const onUp   = () => { isDown = false }
    const onMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x    = e.pageX - track.offsetLeft
      const walk = (x - startX) * 1.6
      track.scrollLeft = scrollLeft - walk
    }

    track.addEventListener('mousedown',  onDown)
    track.addEventListener('mouseup',    onUp)
    track.addEventListener('mouseleave', onUp)
    track.addEventListener('mousemove',  onMove)

    return () => {
      track.removeEventListener('mousedown',  onDown)
      track.removeEventListener('mouseup',    onUp)
      track.removeEventListener('mouseleave', onUp)
      track.removeEventListener('mousemove',  onMove)
    }
  }, [])

  return (
    <section className="py-28 overflow-hidden" style={{ background: '#111111' }}>
      {/* Header */}
      <div className="flex justify-between items-center px-16 mb-16">
        <RevealBlock direction="up">
          <h2
            className="font-serif"
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4vw, 4rem)',
              letterSpacing: '-0.01em',
              color: 'var(--ivory)',
            }}
          >
            Bespoke{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Stories</em>
          </h2>
        </RevealBlock>
        <RevealBlock direction="left" delay={200}>
          <a
            href="#"
            className="inline-flex items-center gap-4 text-[0.6rem] tracking-[0.25em] uppercase no-underline transition-all duration-400"
            style={{ color: 'var(--gold)' }}
            onMouseEnter={e => {
              const arrow = e.currentTarget.querySelector('.sh-arrow') as HTMLElement
              if (arrow) arrow.style.width = '44px'
            }}
            onMouseLeave={e => {
              const arrow = e.currentTarget.querySelector('.sh-arrow') as HTMLElement
              if (arrow) arrow.style.width = '24px'
            }}
          >
            View all collections
            <span className="sh-arrow block transition-all duration-500" style={{ width: 24, height: 1, background: 'var(--gold)' }} />
          </a>
        </RevealBlock>
      </div>

      {/* Drag-scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-[3px] select-none overflow-x-auto"
        style={{ scrollbarWidth: 'none', paddingLeft: '4rem', paddingRight: '4rem', cursor: 'grab' }}
      >
        {collections.map((col, i) => (
          <div
            key={i}
            className="flex-shrink-0 group"
            style={{ width: '38vw', minWidth: 340 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ paddingTop: '62%', background: col.bg }}
            >
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]">
                <CollectionCarSvg index={i} />
              </div>
            </div>
            <div className="pt-5 pb-6" style={{ borderBottom: '1px solid rgba(184,149,106,0.1)' }}>
              <div className="text-[0.55rem] tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--gold)' }}>
                Collection {col.num}
              </div>
              <div
                className="font-serif"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
                  fontWeight: 300,
                  color: 'var(--ivory)',
                }}
              >
                {col.name}
              </div>
              <div className="text-[0.6rem] tracking-[0.15em] mt-1" style={{ color: 'var(--ivory-dim)' }}>
                {col.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Drag hint */}
      <div className="px-16 mt-8">
        <p className="text-[0.55rem] tracking-[0.22em] uppercase" style={{ color: 'rgba(184,149,106,0.28)' }}>
          Drag to explore →
        </p>
      </div>
    </section>
  )
}
