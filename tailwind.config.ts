import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005eff',
        },
        secondary: {
          DEFAULT: '#000000',
        },
        background: {
          DEFAULT: '#ffffff',
        },
        foreground: {
          DEFAULT: '#000000',
        },
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000',
        'brutal-sm': '2px 2px 0px 0px #000',
        'brutal-lg': '6px 6px 0px 0px #000',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'press': 'press 0.2s ease-in-out',
      },
      keyframes: {
        press: {
          '0%': { transform: 'translate(0px, 0px)', boxShadow: '4px 4px 0px 0px #000' },
          '100%': { transform: 'translate(4px, 4px)', boxShadow: '0px 0px 0px 0px #000' },
        }
      }
    },
  },
  plugins: [],
}
export default config
