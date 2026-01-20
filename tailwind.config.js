/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3c83f6",
        "cyan-neon": "#06b6d4",
        "background-light": "#f7f7f7",
        "background-dark": "#091b39",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'orbit': 'orbit 10s linear infinite',
        'orbit-reverse': 'orbit 15s linear infinite reverse',
        'orbit-slow': 'orbit 25s linear infinite',
        'stream-flow': 'streamFlow 4s linear infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'draw-line': 'drawLine 1s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}