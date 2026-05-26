'use client'

import { useEffect, useRef } from 'react'

const stages = [
  {
    kicker: 'The Bespoke Programme',
    title: <>Your <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Vision</em>,<br />Our Craft</>,
    body: 'No two motor cars are alike. The Bespoke programme works with master craftspeople to create a motor car singular in every respect — yours alone in all the world.',
  },
  {
    kicker: 'Forty Thousand Hours',
    title: <>Made by <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Hand</em></>,
    body: 'Each motor car passes through the hands of more than 800 craftspeople at the Home of Rolls-Royce in Goodwood. Every surface touched with intention. Every material chosen with care.',
  },
  {
    kicker: 'The Starlight Headliner',
    title: <>A Sky<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Within</em></>,
    body: 'Up to 1,340 individual fibre optic threads hand-woven into the headliner, each one placed with the precision of a jeweller — recreating the night sky above Goodwood.',
  },
]

export default function PinnedScroll() {
  const sectionRef  = useRef<HTMLDivElement>(null)
  const stageRef    = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const activeIdx   = useRef(0)

  useEffect(() => {
    let ctx: any

    const init = async () => {
      const { gsap }          = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const section = sectionRef.current
      if (!section) return

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start:   'top top',
          end:     'bottom bottom',
          pin:     section.querySelector('.pin-target'),
          pinSpacing: false,
          onUpdate: self => {
            const idx     = Math.min(Math.floor(self.progress * stages.length), stages.length - 1)
            const stage   = stages[idx]
            const el      = stageRef.current
            const progEl  = progressRef.current
            if (!el || !stage) return

            if (idx !== activeIdx.current) {
              activeIdx.current = idx
              gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })

              const kickerEl = el.querySelector('.pinned-kicker') as HTMLElement
              const titleEl  = el.querySelector('.pinned-title')  as HTMLElement
              const bodyEl   = el.querySelector('.pinned-body')   as HTMLElement

              if (kickerEl) kickerEl.textContent = stage.kicker
              if (titleEl)  titleEl.innerHTML = ''
              if (bodyEl)   bodyEl.textContent = stage.body

              // Re-render title (React elements to DOM manually)
              if (titleEl) {
                const temp = document.createElement('div')
                if (idx === 0) temp.innerHTML = `Your <em style="font-style:italic;color:var(--gold-light)">Vision</em>,<br/>Our Craft`
                if (idx === 1) temp.innerHTML = `Made by <em style="font-style:italic;color:var(--gold-light)">Hand</em>`
                if (idx === 2) temp.innerHTML = `A Sky<br/><em style="font-style:italic;color:var(--gold-light)">Within</em>`
                titleEl.innerHTML = temp.innerHTML
              }
            }

            if (progEl) {
              progEl.style.transform = `scaleX(${self.progress})`
            }
          },
        })
      }, section)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <div ref={sectionRef} style={{ height: '350vh', position: 'relative' }}>
      <div
        className="pin-target flex flex-col items-center justify-center text-center"
        style={{ height: '100vh', background: '#050505' }}
      >
        {/* Atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 45%, rgba(184,149,106,0.04) 0%, transparent 60%)',
          }}
        />

        {/* Progress bar */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: 1, background: 'rgba(184,149,106,0.1)' }}
        >
          <div
            ref={progressRef}
            className="h-full origin-left"
            style={{ background: 'var(--gold)', transform: 'scaleX(0)', transition: 'transform 0.1s' }}
          />
        </div>

        <div ref={stageRef} className="max-w-[72vw] relative z-10">
          <p
            className="pinned-kicker text-[0.62rem] tracking-[0.38em] uppercase mb-8"
            style={{ color: 'var(--gold)' }}
          >
            {stages[0].kicker}
          </p>

          <h2
            className="pinned-title font-serif mb-10"
            style={{
              fontFamily: 'var(--serif)',
              fontWeight: 300,
              fontSize: 'clamp(3.5rem, 8vw, 8rem)',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              color: 'var(--ivory)',
            }}
            dangerouslySetInnerHTML={{
              __html: `Your <em style="font-style:italic;color:var(--gold-light)">Vision</em>,<br/>Our Craft`,
            }}
          />

          <p
            className="pinned-body text-[0.7rem] tracking-[0.08em] leading-[2.4] mx-auto max-w-[52ch]"
            style={{ color: 'var(--ivory-dim)' }}
          >
            {stages[0].body}
          </p>

          {/* Ornament line */}
          <div
            className="mx-auto mt-14"
            style={{
              width: 1, height: 80,
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
            }}
          />
        </div>

        {/* Stage indicators */}
        <div
          className="absolute bottom-16 flex gap-3"
        >
          {stages.map((_, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                width: 24, height: 1,
                background: i === 0 ? 'var(--gold)' : 'rgba(184,149,106,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
