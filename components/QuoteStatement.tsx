'use client'

import RevealBlock from './RevealBlock'

export default function QuoteStatement() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: '100vh', background: '#050505', padding: '12rem 4rem' }}
    >
      {/* Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(184,149,106,0.03) 0%, transparent 65%)',
        }}
      />

      {/* Top ornament */}
      <RevealBlock direction="scale" className="mb-20">
        <div
          style={{
            width: 1, height: 100,
            background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
            margin: '0 auto',
          }}
        />
      </RevealBlock>

      <RevealBlock direction="fade" delay={80}>
        <p className="text-[0.6rem] tracking-[0.42em] uppercase mb-12" style={{ color: 'var(--gold)' }}>
          Goodwood · Est. 1998
        </p>
      </RevealBlock>

      <RevealBlock direction="up" delay={160} duration={1400}>
        <h2
          className="font-serif mb-0 relative z-10"
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 300,
            fontSize: 'clamp(2.8rem, 6.5vw, 7.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.018em',
            color: 'var(--ivory)',
            maxWidth: '18ch',
          }}
        >
          Perfection is not<br />a destination,<br />it is a{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>devotion.</em>
        </h2>
      </RevealBlock>

      <RevealBlock direction="fade" delay={400} className="mt-16">
        <p className="text-[0.62rem] tracking-[0.25em] uppercase" style={{ color: 'var(--ivory-faint)' }}>
          One hundred and twenty years of unbroken pursuit
        </p>
      </RevealBlock>

      {/* Bottom ornament */}
      <RevealBlock direction="scale" delay={500} className="mt-20">
        <div
          style={{
            width: 1, height: 80,
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            margin: '0 auto',
          }}
        />
      </RevealBlock>

      {/* Horizontal rules */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: '50%', height: 1,
          background: 'linear-gradient(to right, transparent, rgba(184,149,106,0.06), transparent)',
        }}
      />
    </section>
  )
}
