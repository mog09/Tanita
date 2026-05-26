import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Spectre Motor Cars — Born of Silence & Steel',
  description: 'The pinnacle of automotive craftsmanship. Experience the extraordinary.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
