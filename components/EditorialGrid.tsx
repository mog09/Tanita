'use client'

import { useState } from 'react'
import RevealBlock from './RevealBlock'

interface Model {
  name: string
  subtitle: string
  price: string
  tag: string
  bg: string
  svgPath?: React.ReactNode
}

const models: Model[] = [
  {
    name: 'Phantom',
    subtitle: 'Series II',
    price: 'From £363,000',
    tag: 'Flagship Saloon',
    bg: 'radial-gradient(ellipse at 40% 55%, #2a1a06 0%, #0e0904 100%)',
  },
  {
    name: 'Ghost',
    subtitle: 'Extended',
    price: 'From £248,000',
    tag: 'Grand Tourer',
    bg: 'radial-gradient(ellipse at 60% 40%, #0d1a24 0%, #050a0f 100%)',
  },
  {
    name: 'Spectre',
    subtitle: 'Electric',
    price: 'From £330,000',
    tag: 'Grand Coupé · EV',
    bg: 'radial-gradient(ellipse at 50% 50%, #1a0d06 0%, #0a0503 100%)',
  },
  {
    name: 'Cullinan',
    subtitle: 'Series II',
    price: 'From £296,000',
    tag: 'High Body',
    bg: 'radial-gradient(ellipse at 30% 65%, #071424 0%, #030810 100%)',
  },
]

function CarSvg({ index }: { index: number }) {
  const configs = [
    // Phantom - longer, formal
    { cx1: 155, cy1: 290, cx2: 620, cy2: 288, scale: 1 },
    // Ghost
    { cx1: 130, cy1: 240, cx2: 500, cy2: 238, scale: 0.88 },
    // Spectre - coupé (lower roofline)
    { cx1: 120, cy1: 230, cx2: 490, cy2: 228, scale: 0.85 },
    // Cullinan - taller
    { cx1: 140, cy1: 260, cx2: 540, cy2: 258, scale: 0.92 },
  ]
  const c = configs[index] || configs[0]

  return (
    <svg viewBox="0 0 700 380" fill="none" className="w-[80%] opacity-60">
      <defs>
        <radialGradient id={`bg${index}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="rgba(184,149,106,0.07)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="700" height="380" fill={`url(#bg${index})`} />

      {/* Body */}
      <path
        d={`M60 ${c.cy1 + 30} Q68 ${c.cy1 - 30} 105 ${c.cy1 - 55} L${c.cx1 + 50} ${c.cy1 - 90} Q${c.cx1 + 120} ${c.cy1 - 130} ${c.cx2 - 50} ${c.cy1 - 140} Q${c.cx2 + 30} ${c.cy1 - 130} ${c.cx2 + 60} ${c.cy1 - 110} L${c.cx2 + 90} ${c.cy1 - 65} Q${c.cx2 + 95} ${c.cy1 - 30} ${c.cx2 + 88} ${c.cy1 + 30} Z`}
        fill="rgba(184,149,106,0.06)"
        stroke="rgba(184,149,106,0.25)"
        strokeWidth="0.7"
      />

      {/* Roofline */}
      <path
        d={`M${c.cx1 + 50} ${c.cy1 - 90} Q${c.cx1 + 90} ${c.cy1 - 155} ${c.cx1 + 150} ${c.cy1 - 175} Q${c.cx2 - 80} ${c.cy1 - 185} ${c.cx2 - 20} ${c.cy1 - 160} L${c.cx2 + 60} ${c.cy1 - 110}`}
        fill="none"
        stroke="rgba(184,149,106,0.4)"
        strokeWidth="0.8"
      />

      {/* Front wheel */}
      <circle cx={c.cx1} cy={c.cy1} r="48" fill="none" stroke="rgba(184,149,106,0.3)" strokeWidth="0.8" />
      <circle cx={c.cx1} cy={c.cy1} r="34" fill="none" stroke="rgba(184,149,106,0.12)" strokeWidth="0.5" />
      <circle cx={c.cx1} cy={c.cy1} r="7"  fill="rgba(184,149,106,0.2)" />

      {/* Rear wheel */}
      <circle cx={c.cx2} cy={c.cy2} r="48" fill="none" stroke="rgba(184,149,106,0.3)" strokeWidth="0.8" />
      <circle cx={c.cx2} cy={c.cy2} r="34" fill="none" stroke="rgba(184,149,106,0.12)" strokeWidth="0.5" />
      <circle cx={c.cx2} cy={c.cy2} r="7"  fill="rgba(184,149,106,0.2)" />

      {/* Ground */}
      <ellipse cx={(c.cx1 + c.cx2) / 2} cy={c.cy1 + 52} rx="320" ry="12" fill="rgba(184,149,106,0.04)" />

      {/* Model name */}
      <text
        x="350" y="365"
        fontFamily="Cormorant Garamond, serif"
        fontSize="13"
        fill="rgba(184,149,106,0.22)"
        textAnchor="middle"
        letterSpacing="8"
      >
        {models[index]?.name.toUpperCase()}
      </text>
    </svg>
  )
}

export default function EditorialGrid() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-32 px-16" style={{ background: '#0A0A0A' }}>
      {/* Header */}
      <div
        className="flex justify-between items-end mb-24 pb-10"
        style={{ borderBottom: '1px solid rgba(184,149,106,0.15)' }}
      >
        <RevealBlock direction="up">
          <h2
            className="font-serif"
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)',
              letterSpacing: '-0.01em',
              color: 'var(--ivory)',
            }}
          >
            The{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Collection</em>
          </h2>
        </RevealBlock>
        <RevealBlock direction="right" delay={200} className="max-w-[34ch] text-right">
          <p className="text-[0.68rem] tracking-[0.08em] leading-[2.1]" style={{ color: 'var(--ivory-dim)' }}>
            Six motor cars. One philosophy. Each an expression of absolute luxury through the lens of its own distinct character.
          </p>
        </RevealBlock>
      </div>

      {/* Grid */}
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: '1.55fr 1fr 1fr', gridTemplateRows: 'auto auto' }}
      >
        {models.map((model, i) => (
          <RevealBlock
            key={model.name}
            direction="scale"
            delay={i * 90}
            className="relative overflow-hidden cursor-none"
            style={{ gridRow: i === 0 ? '1 / 3' : 'auto' }}
            as="div"
          >
            <div
              className="relative transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                paddingTop: i === 0 ? '130%' : '72%',
                transform: hovered === i ? 'scale(1.03)' : 'scale(1)',
                background: model.bg,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Car visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <CarSvg index={i} />
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(5,5,5,0.88) 0%, transparent 60%)',
                  opacity: hovered === i ? 1 : 0,
                }}
              >
                <div className="text-[0.55rem] tracking-[0.3em] uppercase mb-2" style={{ color: 'var(--gold)' }}>
                  {model.tag}
                </div>
                <div
                  className="font-serif leading-[1.15]"
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: i === 0 ? '2.2rem' : '1.6rem',
                    fontWeight: 300,
                    color: 'var(--ivory)',
                  }}
                >
                  {model.name}
                  <span
                    className="block text-[1rem]"
                    style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}
                  >
                    {model.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Price bar */}
            <div
              className="px-4 py-4 flex justify-between items-center"
              style={{ borderTop: '1px solid rgba(184,149,106,0.1)' }}
            >
              <span className="text-[0.58rem] tracking-[0.18em] uppercase" style={{ color: 'var(--ivory-dim)' }}>
                {model.price}
              </span>
              <a
                href="#"
                className="text-[0.55rem] tracking-[0.2em] uppercase no-underline transition-colors duration-300"
                style={{ color: 'rgba(184,149,106,0.5)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(184,149,106,0.5)')}
              >
                Explore →
              </a>
            </div>
          </RevealBlock>
        ))}
      </div>

      {/* View all */}
      <RevealBlock direction="up" delay={300} className="mt-20 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-6 text-[0.62rem] tracking-[0.28em] uppercase no-underline px-10 py-4 border transition-all duration-500"
          style={{ color: 'var(--ivory)', borderColor: 'rgba(184,149,106,0.3)' }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--gold)'
            e.currentTarget.style.background = 'rgba(184,149,106,0.06)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(184,149,106,0.3)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          View All Motor Cars
        </a>
      </RevealBlock>
    </section>
  )
}
