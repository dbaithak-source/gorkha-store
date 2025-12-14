/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f1e8',
        slate: {
          900: '#0f172a',
          800: '#1e293b',
        },
        emerald: {
          400: '#4ade80',
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
module.exports = config
