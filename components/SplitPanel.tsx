'use client'

import RevealBlock from './RevealBlock'

interface Props {
  reverse?: boolean
  kicker: string
  index: string
  title: React.ReactNode
  body: string
  cta: string
  specs?: { num: string; unit: string; label: string }[]
  svgContent?: React.ReactNode
  bg?: string
}

export default function SplitPanel({
  reverse = false,
  kicker,
  index,
  title,
  body,
  cta,
  specs,
  svgContent,
  bg = '#0A0A0A',
}: Props) {
  const imageCol = (
    <div
      className="relative overflow-hidden"
      style={{ background: bg, minHeight: '60vh' }}
    >
      <div
        className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.03]"
        style={{
          background:
            'radial-gradient(ellipse at 45% 50%, rgba(40,25,8,0.9) 0%, rgba(5,5,5,0.95) 100%)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-12">
        {svgContent}
      </div>
    </div>
  )

  const contentCol = (
    <div
      className="flex flex-col justify-center px-16 py-24"
      style={{ background: '#0A0A0A' }}
    >
      <RevealBlock direction="fade" delay={0}>
        <p className="text-[0.58rem] tracking-[0.35em] uppercase mb-8" style={{ color: 'var(--gold)' }}>
          {index} — {kicker}
        </p>
      </RevealBlock>

      <RevealBlock delay={80}>
        <div className="gold-line mb-8" />
      </RevealBlock>

      <RevealBlock delay={160}>
        <h2
          className="font-serif mb-8"
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 300,
            fontSize: 'clamp(2.8rem, 4.5vw, 5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.015em',
            color: 'var(--ivory)',
          }}
        >
          {title}
        </h2>
      </RevealBlock>

      <RevealBlock delay={240}>
        <p
          className="text-[0.7rem] tracking-[0.05em] leading-[2.3] mb-10 max-w-[44ch]"
          style={{ color: 'var(--ivory-dim)' }}
        >
          {body}
        </p>
      </RevealBlock>

      {specs && (
        <RevealBlock delay={320}>
          <div
            className="flex mb-10"
            style={{ borderTop: '1px solid rgba(184,149,106,0.15)', borderBottom: '1px solid rgba(184,149,106,0.15)' }}
          >
            {specs.map((s, i) => (
              <div
                key={i}
                className="flex-1 py-6 px-4"
                style={{ borderRight: i < specs.length - 1 ? '1px solid rgba(184,149,106,0.1)' : 'none' }}
              >
                <div
                  className="font-serif mb-1"
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: '2.2rem',
                    fontWeight: 300,
                    color: 'var(--ivory)',
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                  <span style={{ fontSize: '0.9rem', color: 'var(--gold)' }}>{s.unit}</span>
                </div>
                <div className="text-[0.55rem] tracking-[0.25em] uppercase" style={{ color: 'var(--ivory-dim)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </RevealBlock>
      )}

      <RevealBlock delay={400}>
        <a
          href="#"
          className="inline-flex items-center gap-4 text-[0.6rem] tracking-[0.25em] uppercase no-underline transition-all duration-400"
          style={{ color: 'var(--gold)' }}
          onMouseEnter={e => {
            const arrow = e.currentTarget.querySelector('.cta-arrow') as HTMLElement
            if (arrow) arrow.style.width = '44px'
          }}
          onMouseLeave={e => {
            const arrow = e.currentTarget.querySelector('.cta-arrow') as HTMLElement
            if (arrow) arrow.style.width = '24px'
          }}
        >
          {cta}
          <span
            className="cta-arrow block transition-all duration-500"
            style={{ width: 24, height: 1, background: 'var(--gold)' }}
          />
        </a>
      </RevealBlock>
    </div>
  )

  return (
    <section
      className="grid"
      style={{ gridTemplateColumns: '1fr 1fr', minHeight: '90vh' }}
    >
      {reverse ? <>{contentCol}{imageCol}</> : <>{imageCol}{contentCol}</>}
    </section>
  )
}
