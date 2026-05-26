import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'sans-serif'],
      },
      colors: {
        ivory:    '#F5F0E8',
        gold:     '#B8956A',
        'near-black': '#0A0A0A',
        charcoal: '#111111',
      },
      transitionDuration: {
        '400': '400ms',
        '900': '900ms',
      },
    },
  },
  plugins: [],
}

export default config
