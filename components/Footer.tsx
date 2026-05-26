'use client'

import RevealBlock from './RevealBlock'

const footerCols = [
  {
    title: 'Motor Cars',
    links: ['Phantom', 'Ghost', 'Spectre', 'Cullinan', 'Wraith', 'Dawn'],
  },
  {
    title: 'Bespoke',
    links: ['Commission', 'Collections', 'Coachbuild', 'Accessories', 'Colour & Trim'],
  },
  {
    title: 'The House',
    links: ['Goodwood', 'History', 'Stories', 'Ownership', 'Careers', 'Press'],
  },
  {
    title: 'Connect',
    links: ['Instagram', 'X (Twitter)', 'YouTube', 'WeChat', 'Weibo', 'LinkedIn'],
  },
]

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: '#050505',
        borderTop: '1px solid rgba(184,149,106,0.12)',
      }}
    >
      {/* Top decorative rule */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(184,149,106,0.4) 30%, rgba(184,149,106,0.4) 70%, transparent)',
          marginBottom: 0,
        }}
      />

      <div className="px-16 pt-24 pb-16">
        {/* Main grid */}
        <div
          className="grid gap-16 mb-24"
          style={{ gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr' }}
        >
          {/* Brand */}
          <RevealBlock direction="up">
            <div>
              <div
                className="font-serif mb-6"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ivory)',
                  lineHeight: 1.4,
                }}
              >
                Spectre<br />Motor Cars
              </div>
              <p
                className="text-[0.65rem] tracking-[0.08em] leading-[2.2] max-w-[28ch]"
                style={{ color: 'var(--ivory-dim)' }}
              >
                The home of the world's most desirable motor cars. Crafted in Goodwood, West Sussex.
              </p>
              <div className="gold-line mt-8" />

              {/* Contact */}
              <div className="mt-8 space-y-2">
                <a
                  href="tel:+441243755155"
                  className="block text-[0.6rem] tracking-[0.15em] no-underline transition-colors duration-300"
                  style={{ color: 'rgba(184,149,106,0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(184,149,106,0.4)')}
                >
                  +44 (0)1243 755 155
                </a>
                <a
                  href="mailto:enquiries@spectre.com"
                  className="block text-[0.6rem] tracking-[0.15em] no-underline transition-colors duration-300"
                  style={{ color: 'rgba(184,149,106,0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(184,149,106,0.4)')}
                >
                  enquiries@spectre.com
                </a>
              </div>
            </div>
          </RevealBlock>

          {/* Columns */}
          {footerCols.map((col, ci) => (
            <RevealBlock key={col.title} direction="up" delay={100 + ci * 80}>
              <div>
                <div
                  className="text-[0.58rem] tracking-[0.32em] uppercase mb-7"
                  style={{ color: 'var(--gold)' }}
                >
                  {col.title}
                </div>
                {col.links.map(link => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[0.62rem] tracking-[0.15em] no-underline py-[0.4rem] transition-all duration-300"
                    style={{ color: 'var(--ivory-dim)', borderBottom: '1px solid rgba(184,149,106,0.06)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--ivory)'
                      e.currentTarget.style.paddingLeft = '0.4rem'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--ivory-dim)'
                      e.currentTarget.style.paddingLeft = '0'
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </RevealBlock>
          ))}
        </div>

        {/* Legal bar */}
        <div
          className="flex justify-between items-center pt-8"
          style={{ borderTop: '1px solid rgba(184,149,106,0.1)' }}
        >
          <div className="flex gap-8">
            {['Privacy Policy', 'Cookie Policy', 'Legal', 'Sitemap'].map(item => (
              <a
                key={item}
                href="#"
                className="text-[0.55rem] tracking-[0.15em] uppercase no-underline transition-colors duration-300"
                style={{ color: 'rgba(184,149,106,0.28)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(184,149,106,0.6)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(184,149,106,0.28)')}
              >
                {item}
              </a>
            ))}
          </div>
          <p
            className="text-[0.52rem] tracking-[0.14em] uppercase"
            style={{ color: 'rgba(184,149,106,0.22)' }}
          >
            © 2025 Spectre Motor Cars Ltd · All Rights Reserved · Goodwood, West Sussex
          </p>
        </div>
      </div>
    </footer>
  )
}
