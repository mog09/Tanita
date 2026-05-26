import Cursor           from '@/components/Cursor'
import SmoothScroll     from '@/components/SmoothScroll'
import Navigation       from '@/components/Navigation'
import Hero             from '@/components/Hero'
import SplitPanel       from '@/components/SplitPanel'
import CinematicStatement from '@/components/CinematicStatement'
import EditorialGrid    from '@/components/EditorialGrid'
import PinnedScroll     from '@/components/PinnedScroll'
import HorizontalShowcase from '@/components/HorizontalShowcase'
import QuoteStatement   from '@/components/QuoteStatement'
import AtelierGallery   from '@/components/AtelierGallery'
import Footer           from '@/components/Footer'
import { SpectreCoupe, PhantomSaloon } from '@/components/CarSvgAssets'

export default function Home() {
  const spectreSpecs = [
    { num: '430', unit: 'mi', label: 'Range' },
    { num: '2.9', unit: 's',  label: '0–60 mph' },
    { num: '577', unit: 'hp', label: 'Power' },
  ]
  const phantomSpecs = [
    { num: '6.75', unit: 'L',   label: 'Engine' },
    { num: '3.9',  unit: 's',   label: '0–60 mph' },
    { num: '563',  unit: 'hp',  label: 'Power' },
  ]

  return (
    <SmoothScroll>
      <Cursor />
      <Navigation />

      {/* S1 — Hero */}
      <Hero />

      {/* S2 — Spectre Split */}
      <SplitPanel
        index="01"
        kicker="Featured Motor Car"
        title={<>The New<br /><em style={{ fontStyle:'italic', color:'var(--gold-light)' }}>Spectre</em></>}
        body="Spectre is the first fully electric motor car to bear the Spirit of Ecstasy. The most aerodynamic Rolls-Royce ever created — a grand touring coupé of unprecedented refinement, delivering effortless, silent power."
        cta="Discover Spectre"
        specs={spectreSpecs}
        svgContent={<SpectreCoupe />}
        bg="radial-gradient(ellipse at 45% 50%, #1a1208 0%, #050502 100%)"
      />

      {/* S3 — Cinematic fullscreen */}
      <CinematicStatement
        kicker="Bespoke Collections · 2025"
        oversize={<>Above<br /><em style={{ fontStyle:'italic', display:'block', color:'var(--gold-light)' }}>All</em><br />Else</>}
        sub="Crafted in Goodwood, West Sussex, each motor car is the product of forty thousand hours of skilled labour — an act of devotion to the pursuit of perfection."
        tag="The Spirit of Ecstasy"
        bg="#050505"
      />

      {/* S4 — Phantom split (reversed) */}
      <SplitPanel
        reverse
        index="02"
        kicker="The Flagship"
        title={<>Phantom<br /><em style={{ fontStyle:'italic', color:'var(--gold-light)' }}>Series II</em></>}
        body="The Phantom defines the very pinnacle of the motor car. Its Gallery — a glass-enclosed, climate-controlled showcase behind the dashboard — is unlike anything else on four wheels."
        cta="Discover Phantom"
        specs={phantomSpecs}
        svgContent={<PhantomSaloon />}
        bg="radial-gradient(ellipse at 55% 45%, #0d1824 0%, #040810 100%)"
      />

      {/* S4 — Editorial grid */}
      <EditorialGrid />

      {/* S5 — Pinned GSAP scroll */}
      <PinnedScroll />

      {/* S6 — Horizontal showcase */}
      <HorizontalShowcase />

      {/* S7 — Statement quote */}
      <QuoteStatement />

      {/* S8 — Atelier gallery */}
      <AtelierGallery />

      {/* S9 — Footer */}
      <Footer />
    </SmoothScroll>
  )
}
