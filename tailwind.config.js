import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#2DA3FF',
        'purple-accent': '#8B5CF6',
        'bg-dark-start': '#070A12',
        'bg-dark-end': '#0B1220',
        'bg-light-start': '#F8FAFC',
        'bg-light-end': '#EEF2FF',
        'muted-dark': '#1C2333',
        'muted-light': '#E2E8F0',
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'dark-gradient':
          'linear-gradient(135deg, #070A12 0%, #0B1220 50%, #111a2e 100%)',
        'light-gradient':
          'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 50%, #E2E8F0 100%)',
        'grid-glow':
          'radial-gradient(circle at 1px 1px, rgba(45,163,255,0.4) 1px, transparent 0)',
      },
      boxShadow: {
        'glow-blue': '0 10px 40px rgba(45, 163, 255, 0.35)',
        'glow-purple': '0 10px 40px rgba(139, 92, 246, 0.35)',
        'card-dark': '0 20px 60px rgba(7, 10, 18, 0.7)',
        'card-light': '0 12px 40px rgba(15, 23, 42, 0.1)',
      },
      keyframes: {
        'float-orbit': {
          '0%': { transform: 'rotate(0deg) translateX(8px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(8px) rotate(-360deg)' },
        },
      },
      animation: {
        'float-orbit': 'float-orbit 18s linear infinite',
      },
    },
  },
  plugins: [forms],
}

