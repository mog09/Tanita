'use client'

import { useState } from 'react'
import RevealBlock from './RevealBlock'

const cells = [
  { label: 'Design Studio',          bg: 'radial-gradient(ellipse at 40% 55%, #1e1208 0%, #080402 100%)',  span: false },
  { label: 'Wheel Engineering',      bg: 'radial-gradient(ellipse at 60% 40%, #0d1824 0%, #040810 100%)',  span: false },
  { label: 'Leather Crafting',       bg: 'radial-gradient(ellipse at 50% 50%, #1a0d06 0%, #0a0503 100%)',  span: false },
  { label: 'Hand-painted Coachline', bg: 'radial-gradient(ellipse at 35% 65%, #071424 0%, #030810 100%)',  span: false },
  { label: 'Starlight Headliner',    bg: 'radial-gradient(ellipse at 55% 45%, #100a1a 0%, #06040f 100%)',  span: true  },
  { label: 'Spirit of Ecstasy',      bg: 'radial-gradient(ellipse at 45% 55%, #1a1006 0%, #0a0903 100%)',  span: false },
]

function GalleryPattern({ index }: { index: number }) {
  const patterns = [
    // Design Studio - curved lines
    <svg key={0} viewBox="0 0 400 300" fill="none" className="w-3/4 opacity-50">
      <path d="M40 240 Q180 80 360 120" stroke="rgba(184,149,106,0.3)" strokeWidth="0.6" />
      <path d="M40 200 Q180 50 360 85"  stroke="rgba(184,149,106,0.2)" strokeWidth="0.5" />
      <path d="M40 280 Q200 140 360 160" stroke="rgba(184,149,106,0.15)" strokeWidth="0.4" />
      <circle cx="200" cy="150" r="60" fill="none" stroke="rgba(184,149,106,0.1)" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="30" fill="none" stroke="rgba(184,149,106,0.08)" strokeWidth="0.4" />
    </svg>,
    // Wheel
    <svg key={1} viewBox="0 0 300 300" fill="none" className="w-3/4 opacity-50">
      {[100, 72, 44, 16].map((r, i) => (
        <circle key={i} cx="150" cy="150" r={r} fill="none" stroke="rgba(184,149,106,0.2)" strokeWidth="0.5" />
      ))}
      {[0, 45, 90, 135].map(a => {
        const rad = (a * Math.PI) / 180
        return (
          <g key={a}>
            <line x1={150 + Math.cos(rad) * 16} y1={150 + Math.sin(rad) * 16}
                  x2={150 + Math.cos(rad) * 100} y2={150 + Math.sin(rad) * 100}
                  stroke="rgba(184,149,106,0.15)" strokeWidth="0.4" />
            <line x1={150 - Math.cos(rad) * 16} y1={150 - Math.sin(rad) * 16}
                  x2={150 - Math.cos(rad) * 100} y2={150 - Math.sin(rad) * 100}
                  stroke="rgba(184,149,106,0.15)" strokeWidth="0.4" />
          </g>
        )
      })}
    </svg>,
    // Leather grid
    <svg key={2} viewBox="0 0 300 300" fill="none" className="w-3/4 opacity-50">
      <rect x="50" y="50" width="200" height="200" fill="none" stroke="rgba(184,149,106,0.18)" strokeWidth="0.5" />
      {[83,116,150,183,216].map(x => <line key={x} x1={x} y1="50" x2={x} y2="250" stroke="rgba(184,149,106,0.08)" strokeWidth="0.4" />)}
      {[83,116,150,183,216].map(y => <line key={y} x1="50" y1={y} x2="250" y2={y} stroke="rgba(184,149,106,0.08)" strokeWidth="0.4" />)}
    </svg>,
    // Coachline
    <svg key={3} viewBox="0 0 400 200" fill="none" className="w-3/4 opacity-50">
      <path d="M20 100 Q200 60 380 100" stroke="rgba(184,149,106,0.35)" strokeWidth="1" />
      <path d="M20 112 Q200 72 380 112" stroke="rgba(184,149,106,0.18)" strokeWidth="0.5" />
      <circle cx="200" cy="80" r="6" fill="rgba(184,149,106,0.25)" />
    </svg>,
    // Starlight - dots
    <svg key={4} viewBox="0 0 500 300" fill="none" className="w-4/5 opacity-50">
      {Array.from({ length: 120 }, (_, i) => {
        const x = (i * 73 + i * 41) % 480 + 10
        const y = (i * 53 + i * 29) % 280 + 10
        const r = (i % 3 === 0) ? 1.2 : 0.6
        return <circle key={i} cx={x} cy={y} r={r} fill="rgba(184,149,106,0.45)" />
      })}
    </svg>,
    // Spirit - star
    <svg key={5} viewBox="0 0 300 300" fill="none" className="w-3/4 opacity-50">
      <path
        d="M150 30 L168 105 L245 105 L183 150 L207 225 L150 180 L93 225 L117 150 L55 105 L132 105 Z"
        fill="rgba(184,149,106,0.06)"
        stroke="rgba(184,149,106,0.28)"
        strokeWidth="0.7"
      />
      <path
        d="M150 65 L163 108 L210 108 L172 133 L186 178 L150 155 L114 178 L128 133 L90 108 L137 108 Z"
        fill="none"
        stroke="rgba(184,149,106,0.14)"
        strokeWidth="0.5"
      />
    </svg>,
  ]
  return patterns[index] || patterns[0]
}

export default function AtelierGallery() {
  const [hov, setHov] = useState<number | null>(null)

  return (
    <section className="px-16 py-28" style={{ background: '#0A0A0A' }}>
      <RevealBlock direction="up" className="mb-20">
        <h2
          className="font-serif"
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
            letterSpacing: '-0.01em',
            color: 'var(--ivory)',
          }}
        >
          The{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Atelier</em>
        </h2>
      </RevealBlock>

      {/* Row 1 */}
      <div className="grid gap-[3px] mb-[3px]" style={{ gridTemplateColumns: '2fr 1fr 1.5fr' }}>
        {cells.slice(0, 3).map((cell, i) => (
          <RevealBlock key={i} direction="scale" delay={i * 80} as="div">
            <div
              className="relative overflow-hidden cursor-none"
              style={{ paddingTop: '68%', background: cell.bg }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
            >
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{ transform: hov === i ? 'scale(1.06)' : 'scale(1)' }}
              >
                <GalleryPattern index={i} />
              </div>
              {/* Caption */}
              <div
                className="absolute bottom-5 left-5 text-[0.58rem] tracking-[0.25em] uppercase transition-all duration-500"
                style={{
                  color: 'var(--ivory-dim)',
                  opacity: hov === i ? 1 : 0,
                  transform: hov === i ? 'translateY(0)' : 'translateY(6px)',
                }}
              >
                {cell.label}
              </div>
            </div>
          </RevealBlock>
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid gap-[3px]" style={{ gridTemplateColumns: '1fr 2fr 1fr' }}>
        {cells.slice(3).map((cell, i) => (
          <RevealBlock key={i + 3} direction="scale" delay={(i + 3) * 80} as="div">
            <div
              className="relative overflow-hidden cursor-none"
              style={{ paddingTop: '52%', background: cell.bg }}
              onMouseEnter={() => setHov(i + 3)}
              onMouseLeave={() => setHov(null)}
            >
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={{ transform: hov === i + 3 ? 'scale(1.05)' : 'scale(1)' }}
              >
                <GalleryPattern index={i + 3} />
              </div>
              <div
                className="absolute bottom-5 left-5 text-[0.58rem] tracking-[0.25em] uppercase transition-all duration-500"
                style={{
                  color: 'var(--ivory-dim)',
                  opacity: hov === i + 3 ? 1 : 0,
                  transform: hov === i + 3 ? 'translateY(0)' : 'translateY(6px)',
                }}
              >
                {cell.label}
              </div>
            </div>
          </RevealBlock>
        ))}
      </div>
    </section>
  )
}
