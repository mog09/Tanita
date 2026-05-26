'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const carRef     = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!carRef.current) return
    gsap.fromTo(
      carRef.current,
      { opacity: 0, x: 60 },
      { opacity: 0.88, x: 0, duration: 2.8, delay: 0.6, ease: 'power3.out' }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex flex-col justify-end"
      style={{ height: '100svh', minHeight: 700 }}
    >
      {/* ── BACKGROUND ATMOSPHERE ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 40%, #1a1208 0%, #050505 65%), ' +
              'radial-gradient(ellipse at 25% 75%, #0d0905 0%, transparent 55%)',
          }}
        />
        {/* Angled composition guide */}
        <div
          className="absolute"
          style={{
            top: '6%', right: '3%',
            width: '58%', height: '88%',
            background:
              'radial-gradient(ellipse at 50% 35%, rgba(184,149,106,0.04) 0%, transparent 55%)',
            borderLeft: '1px solid rgba(184,149,106,0.06)',
            clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        />
        {/* Subtle light scatter top-right */}
        <div
          className="absolute"
          style={{
            top: 0, right: 0,
            width: '40%', height: '50%',
            background:
              'radial-gradient(ellipse at 80% 10%, rgba(184,149,106,0.05) 0%, transparent 60%)',
          }}
        />
        {/* Bottom vignette */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: '45%', background: 'linear-gradient(to top, rgba(5,5,5,0.9), transparent)' }}
        />
      </div>

      {/* ── CAR SILHOUETTE (SVG) ── */}
      <svg
        ref={carRef}
        viewBox="0 0 960 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 opacity-0"
        style={{ right: '-2%', bottom: '12%', width: '64%', maxWidth: 820 }}
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(184,149,106,0.22)" />
            <stop offset="55%"  stopColor="rgba(120,90,50,0.14)"   />
            <stop offset="100%" stopColor="rgba(30,20,5,0.08)"     />
          </linearGradient>
          <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="rgba(184,149,106,0.18)" />
            <stop offset="100%" stopColor="rgba(184,149,106,0.03)" />
          </linearGradient>
          <radialGradient id="groundRefl" cx="50%" cy="0%" r="80%">
            <stop offset="0%"   stopColor="rgba(184,149,106,0.1)" />
            <stop offset="100%" stopColor="transparent"            />
          </radialGradient>
        </defs>

        {/* ── Ground reflection ── */}
        <ellipse cx="520" cy="385" rx="400" ry="18" fill="url(#groundRefl)" />

        {/* ── Body ── */}
        <path
          d="M75 298 Q84 252 138 228 L268 185 Q360 148 475 136 Q592 126 678 136 L780 153 Q835 164 855 190 L864 250 Q868 278 852 298 Z"
          fill="url(#bodyGrad)"
          stroke="rgba(184,149,106,0.28)"
          strokeWidth="0.7"
        />

        {/* ── Roofline ── */}
        <path
          d="M268 185 Q318 122 382 100 Q462 78 555 82 Q628 86 678 108 L742 148"
          fill="none"
          stroke="rgba(184,149,106,0.45)"
          strokeWidth="0.9"
        />

        {/* ── Glass ── */}
        <path
          d="M280 183 Q322 124 384 102 Q460 80 553 84 Q624 88 672 110 L728 145 L700 178 Q658 168 572 164 Q468 160 385 170 Z"
          fill="url(#glassGrad)"
          stroke="rgba(184,149,106,0.2)"
          strokeWidth="0.5"
        />

        {/* Glass divider post */}
        <line x1="535" y1="84" x2="544" y2="170" stroke="rgba(184,149,106,0.22)" strokeWidth="0.5" />

        {/* ── Character line ── */}
        <path
          d="M138 248 Q420 232 678 232 L832 245"
          fill="none"
          stroke="rgba(184,149,106,0.14)"
          strokeWidth="0.6"
        />

        {/* ── Sill ── */}
        <path
          d="M110 298 Q380 290 680 290 L840 296"
          fill="none"
          stroke="rgba(184,149,106,0.12)"
          strokeWidth="0.5"
        />

        {/* ── Front grille ── */}
        <rect x="844" y="202" width="20" height="55" rx="2" fill="none" stroke="rgba(184,149,106,0.4)" strokeWidth="0.7" />
        <line x1="854" y1="202" x2="854" y2="257" stroke="rgba(184,149,106,0.25)" strokeWidth="0.4" />
        {[210, 220, 230, 240, 250].map(y => (
          <line key={y} x1="844" y1={y} x2="864" y2={y} stroke="rgba(184,149,106,0.15)" strokeWidth="0.3" />
        ))}

        {/* ── Front headlight ── */}
        <path
          d="M855 192 Q872 196 878 215 L872 240 Q860 232 848 222 Z"
          fill="rgba(184,149,106,0.1)"
          stroke="rgba(184,149,106,0.32)"
          strokeWidth="0.5"
        />

        {/* ── A-pillar ── */}
        <line x1="280" y1="183" x2="268" y2="185" stroke="rgba(184,149,106,0.3)" strokeWidth="0.8" />

        {/* ── Rear detail ── */}
        <path d="M75 298 Q68 280 72 250 L82 235" fill="none" stroke="rgba(184,149,106,0.2)" strokeWidth="0.5" />

        {/* ── Wheel arches ── */}
        <path d="M118 298 Q118 265 152 255 Q186 244 220 255 Q254 265 254 298" fill="none" stroke="rgba(184,149,106,0.18)" strokeWidth="0.5" />
        <path d="M612 296 Q612 262 646 252 Q680 241 714 252 Q748 262 748 296" fill="none" stroke="rgba(184,149,106,0.18)" strokeWidth="0.5" />

        {/* ── Front wheel ── */}
        <circle cx="220" cy="302" r="58" fill="none" stroke="rgba(184,149,106,0.32)" strokeWidth="0.8" />
        <circle cx="220" cy="302" r="44" fill="none" stroke="rgba(184,149,106,0.14)" strokeWidth="0.5" />
        <circle cx="220" cy="302" r="9"  fill="rgba(184,149,106,0.2)" />
        {[0, 45, 90, 135].map(a => {
          const rad = (a * Math.PI) / 180
          return (
            <g key={a}>
              <line x1={220 + Math.cos(rad) * 9} y1={302 + Math.sin(rad) * 9}
                    x2={220 + Math.cos(rad) * 43} y2={302 + Math.sin(rad) * 43}
                    stroke="rgba(184,149,106,0.18)" strokeWidth="0.5" />
              <line x1={220 - Math.cos(rad) * 9} y1={302 - Math.sin(rad) * 9}
                    x2={220 - Math.cos(rad) * 43} y2={302 - Math.sin(rad) * 43}
                    stroke="rgba(184,149,106,0.18)" strokeWidth="0.5" />
            </g>
          )
        })}

        {/* ── Rear wheel ── */}
        <circle cx="714" cy="300" r="58" fill="none" stroke="rgba(184,149,106,0.32)" strokeWidth="0.8" />
        <circle cx="714" cy="300" r="44" fill="none" stroke="rgba(184,149,106,0.14)" strokeWidth="0.5" />
        <circle cx="714" cy="300" r="9"  fill="rgba(184,149,106,0.2)" />
        {[0, 45, 90, 135].map(a => {
          const rad = (a * Math.PI) / 180
          return (
            <g key={a}>
              <line x1={714 + Math.cos(rad) * 9} y1={300 + Math.sin(rad) * 9}
                    x2={714 + Math.cos(rad) * 43} y2={300 + Math.sin(rad) * 43}
                    stroke="rgba(184,149,106,0.18)" strokeWidth="0.5" />
              <line x1={714 - Math.cos(rad) * 9} y1={300 - Math.sin(rad) * 9}
                    x2={714 - Math.cos(rad) * 43} y2={300 - Math.sin(rad) * 43}
                    stroke="rgba(184,149,106,0.18)" strokeWidth="0.5" />
            </g>
          )
        })}

        {/* ── Spirit of Ecstasy hint ── */}
        <path d="M475 132 L472 114 L478 114 Z" fill="rgba(184,149,106,0.55)" />
        <line x1="475" y1="132" x2="475" y2="140" stroke="rgba(184,149,106,0.4)" strokeWidth="0.6" />
      </svg>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-20 px-16 pb-20 lg:pb-28 max-w-[720px]">
        <p
          className="anim-fade-up text-[0.6rem] tracking-[0.38em] uppercase mb-5"
          style={{ animationDelay: '0.2s', color: 'var(--gold)' }}
        >
          The Pinnacle of Motor Cars — 2025
        </p>

        <h1
          className="anim-fade-up font-serif mb-8"
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 300,
            fontSize: 'clamp(4rem, 9vw, 9.5rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.025em',
            animationDelay: '0.4s',
          }}
        >
          Born of<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Silence</em><br />
          &amp; Steel
        </h1>

        <p
          className="anim-fade-up text-[0.7rem] tracking-[0.12em] leading-[2.3] mb-10 max-w-[38ch]"
          style={{ animationDelay: '0.65s', color: 'var(--ivory-dim)' }}
        >
          Where engineering becomes art and motion becomes philosophy.<br />
          Every detail considered. Nothing superfluous.
        </p>

        <a
          href="#spectre"
          className="anim-fade-up inline-flex items-center gap-5 text-[0.62rem] tracking-[0.28em] uppercase no-underline px-8 py-4 border transition-all duration-500"
          style={{
            animationDelay: '0.85s',
            color: 'var(--ivory)',
            borderColor: 'rgba(184,149,106,0.45)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--gold)'
            e.currentTarget.style.background = 'rgba(184,149,106,0.08)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(184,149,106,0.45)'
            e.currentTarget.style.background = 'transparent'
          }}
        >
          Discover Spectre
          <span className="flex items-center gap-0">
            <span className="block transition-all duration-500" style={{ width: 28, height: 1, background: 'var(--gold)' }} />
            <span
              className="block"
              style={{
                width: 7, height: 7,
                borderRight: '1px solid var(--gold)',
                borderTop: '1px solid var(--gold)',
                transform: 'rotate(45deg)',
                marginLeft: -4,
              }}
            />
          </span>
        </a>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="anim-fade-up absolute z-20 flex flex-col items-center gap-4"
        style={{ right: '4rem', bottom: '4.5rem', animationDelay: '1.2s' }}
      >
        <span
          className="text-[0.55rem] tracking-[0.32em] uppercase"
          style={{ color: 'var(--ivory-dim)', writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="relative overflow-hidden" style={{ width: 1, height: 72, background: 'rgba(184,149,106,0.2)' }}>
          <span
            className="absolute left-0 w-full"
            style={{
              height: '100%',
              background: 'var(--gold)',
              animation: 'scrollDrop 2.2s 1.6s ease infinite',
            }}
          />
        </div>
      </div>

      {/* ── YEAR STAMP ── */}
      <div
        className="absolute z-20 top-1/2 left-16 -translate-y-1/2 anim-fade-in"
        style={{ animationDelay: '1.5s' }}
      >
        <span
          className="text-[0.55rem] tracking-[0.35em] uppercase"
          style={{
            color: 'rgba(184,149,106,0.25)',
            writingMode: 'vertical-rl',
          }}
        >
          Goodwood · Est. 1998
        </span>
      </div>
    </section>
  )
}
