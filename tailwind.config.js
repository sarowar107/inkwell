/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9E7FFF',
        secondary: '#38bdf8',
        accent: '#f472b6',
        background: '#171717',
        surface: '#262626',
        'surface-light': 'rgba(41, 41, 41, 0.5)',
        text: '#FFFFFF',
        'text-secondary': '#A3A3A3',
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'aurora': {
          from: {
            backgroundPosition: '0% 50%',
          },
          to: {
            backgroundPosition: '100% 50%',
          },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px #9E7FFF' },
          '50%': { boxShadow: '0 0 20px #38bdf8' },
        }
      },
      animation: {
        'aurora': 'aurora 15s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'glow': 'glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
