/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50:  '#f5f0ff',
          100: '#ede0ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#4c1d95',
          900: '#1e0a3c',
          950: '#0a0010',
        },
        brand: {
          bg:      '#0a0010',
          surface: '#130025',
          card:    '#1a003a',
          primary: '#8b5cf6',
          glow:    '#a855f7',
          accent:  '#d8b4fe',
          text:    '#f5f0ff',
          muted:   '#7c6a9a',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        serif:   ['Playfair Display', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        glow:         'glow 3s ease-in-out infinite',
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%':      { boxShadow: '0 0 60px rgba(168, 85, 247, 0.6)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-gradient':    'radial-gradient(ellipse at top, #1e0a3c 0%, #0a0010 60%)',
        'card-gradient':    'linear-gradient(135deg, #1a003a 0%, #130025 100%)',
        'purple-gradient':  'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
        'text-gradient':    'linear-gradient(135deg, #d8b4fe 0%, #8b5cf6 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
