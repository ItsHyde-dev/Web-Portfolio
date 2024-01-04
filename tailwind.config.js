/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sweepInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': {
            transform: 'translateX(30%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        expandFromCenter: {
          '0%': { 'transform': 'scaleX(0)' },
          '20%': { 'transform': 'scaleX(0)' },
          '100%': { 'transform': 'scaleX(1)' }
        },
        slideInBottom: {
          '0%': {
            transform: 'translateY(25%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
      },
      animation: {
        sweepInFromLeft: 'sweepInFromLeft 1s ease-out',
        fadeIn: 'fadeIn 1s ease-in',
        slideInLeft: 'slideInLeft 0.5s ease',
        slideInBottom: 'slideInLeft 0.5s linear',
        expandFromCenter: 'expandFromCenter 1.5s ease',
        bounce: 'bounce 2.5s ease infinite'
      }
    },
  },
  plugins: [],
}

