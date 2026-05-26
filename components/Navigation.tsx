'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Motor Cars', 'Bespoke', 'Ownership', 'World']

const menuModels = ['Phantom', 'Ghost', 'Spectre', 'Cullinan', 'Wraith', 'Dawn']
const menuBespoke = ['Bespoke Commission', 'Collections', 'Coachbuild', 'Accessories', 'Colour & Trim']
const menuWorld   = ['The House', 'Goodwood', 'Stories', 'Ownership', 'Careers', 'Press']

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const prevY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      prevY.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-700 ease-in-out ${
          scrolled
            ? 'px-12 py-4 bg-[#050505]/90 backdrop-blur-2xl border-b border-[rgba(184,149,106,0.12)]'
            : 'px-16 py-8'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-[0.95rem] tracking-[0.3em] uppercase text-[var(--ivory)] no-underline select-none"
          style={{ fontFamily: 'var(--serif)', fontWeight: 300 }}
        >
          Spectre&ensp;Motor&ensp;Cars
        </a>

        {/* Centre links — desktop */}
        <ul className="hidden lg:flex gap-10 list-none">
          {navLinks.map(link => (
            <li key={link}>
              <a
                href="#"
                className="text-[0.62rem] tracking-[0.22em] uppercase text-[var(--ivory-dim)] no-underline transition-colors duration-300 hover:text-[var(--ivory)]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu toggle */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-3 text-[0.6rem] tracking-[0.25em] uppercase text-[var(--ivory-dim)] bg-transparent border-none transition-colors duration-300 hover:text-[var(--ivory)] cursor-none"
        >
          <span className="text-inherit">Menu</span>
          <span className="flex flex-col gap-[5px]">
            <i className="block h-px bg-current transition-all duration-400" style={{ width: 22 }} />
            <i className="block h-px bg-current transition-all duration-400" style={{ width: 14 }} />
            <i className="block h-px bg-current transition-all duration-400" style={{ width: 22 }} />
          </span>
        </button>
      </nav>

      {/* ── FULLSCREEN MENU OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[200] flex"
            style={{ background: '#0A0A0A' }}
          >
            {/* Close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-16 text-[0.6rem] tracking-[0.28em] uppercase text-[var(--ivory-dim)] bg-transparent border-none cursor-none hover:text-[var(--ivory)] transition-colors duration-300"
            >
              Close&ensp;✕
            </button>

            <div className="flex w-full px-16 pt-32 pb-16 gap-20 items-start">
              {/* Models */}
              <div className="flex flex-col gap-1 min-w-[280px]">
                <div className="text-[0.58rem] tracking-[0.35em] uppercase text-[var(--gold)] mb-6">
                  Motor Cars
                </div>
                {menuModels.map((m, i) => (
                  <motion.a
                    key={m}
                    href="#"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.25,0.1,0.25,1] }}
                    onClick={() => setMenuOpen(false)}
                    className="no-underline leading-[1.1] py-1 transition-colors duration-400"
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)',
                      fontWeight: 300,
                      color: 'rgba(245,240,232,0.15)',
                      letterSpacing: '-0.01em',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--ivory)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.15)')}
                  >
                    {m}
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px self-stretch" style={{ background: 'rgba(184,149,106,0.18)' }} />

              {/* Bespoke */}
              <div className="flex flex-col gap-0 flex-1">
                <div className="text-[0.58rem] tracking-[0.35em] uppercase text-[var(--gold)] mb-6">
                  Bespoke
                </div>
                {menuBespoke.map((b, i) => (
                  <motion.a
                    key={b}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.06 }}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[0.65rem] tracking-[0.18em] uppercase text-[var(--ivory-dim)] no-underline py-3 border-b transition-all duration-300 hover:text-[var(--ivory)] hover:pl-2"
                    style={{ borderColor: 'rgba(184,149,106,0.1)' }}
                  >
                    {b}
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px self-stretch" style={{ background: 'rgba(184,149,106,0.18)' }} />

              {/* World */}
              <div className="flex flex-col gap-0 flex-1">
                <div className="text-[0.58rem] tracking-[0.35em] uppercase text-[var(--gold)] mb-6">
                  The World
                </div>
                {menuWorld.map((w, i) => (
                  <motion.a
                    key={w}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 + i * 0.06 }}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[0.65rem] tracking-[0.18em] uppercase text-[var(--ivory-dim)] no-underline py-3 border-b transition-all duration-300 hover:text-[var(--ivory)] hover:pl-2"
                    style={{ borderColor: 'rgba(184,149,106,0.1)' }}
                  >
                    {w}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div
              className="absolute bottom-0 left-0 right-0 px-16 py-6 flex justify-between items-center border-t"
              style={{ borderColor: 'rgba(184,149,106,0.1)' }}
            >
              <span className="text-[0.55rem] tracking-[0.3em] uppercase" style={{ color: 'rgba(184,149,106,0.3)' }}>
                Goodwood · West Sussex · Est. 1998
              </span>
              <div className="flex gap-8">
                {['Instagram', 'X', 'YouTube', 'WeChat'].map(s => (
                  <a key={s} href="#" className="text-[0.55rem] tracking-[0.2em] uppercase no-underline transition-colors duration-300"
                    style={{ color: 'rgba(184,149,106,0.3)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(184,149,106,0.3)')}
                  >{s}</a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
