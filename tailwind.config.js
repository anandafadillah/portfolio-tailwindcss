/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container :{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary : '#8b5cf6',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

