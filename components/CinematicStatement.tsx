'use client'

import RevealBlock from './RevealBlock'

interface Props {
  kicker: string
  oversize: React.ReactNode
  sub: string
  tag?: string
  bg?: string
}

export default function CinematicStatement({ kicker, oversize, sub, tag, bg = '#050505' }: Props) {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: '100vh', background: bg }}
    >
      {/* Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 72% 48%, rgba(184,149,106,0.045) 0%, transparent 52%), ' +
            'linear-gradient(180deg, rgba(5,5,5,0.25) 0%, transparent 50%, rgba(5,5,5,0.4) 100%)',
        }}
      />

      {/* Vertical tag */}
      {tag && (
        <RevealBlock
          direction="fade"
          className="absolute top-16 right-16 text-[0.55rem] tracking-[0.32em] uppercase"
          style={{ color: 'rgba(184,149,106,0.42)', writingMode: 'vertical-rl' }}
        >
          {tag}
        </RevealBlock>
      )}

      <div className="relative px-16 lg:px-24 max-w-[1400px]">
        <RevealBlock delay={0} direction="fade">
          <div
            className="inline-flex items-center gap-3 text-[0.58rem] tracking-[0.32em] uppercase mb-10 px-4 py-2 border"
            style={{ color: 'var(--gold)', borderColor: 'rgba(184,149,106,0.3)' }}
          >
            {kicker}
          </div>
        </RevealBlock>

        <RevealBlock delay={120} direction="up" duration={1400}>
          <h2
            className="font-serif mb-0"
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 300,
              fontSize: 'clamp(5rem, 14vw, 15rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              color: 'var(--ivory)',
              maxWidth: '7ch',
            }}
          >
            {oversize}
          </h2>
        </RevealBlock>
      </div>

      {/* Sub copy — bottom right */}
      <RevealBlock
        direction="fade"
        delay={400}
        className="absolute bottom-16 right-16 max-w-[34ch] text-right"
        style={{ color: 'var(--ivory-dim)' }}
      >
        <p className="text-[0.68rem] tracking-[0.08em] leading-[2.3]">{sub}</p>
      </RevealBlock>

      {/* Thin gold rule */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(184,149,106,0.2), transparent)' }}
      />
    </section>
  )
}
