/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      }
    },

    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },

    extend: {
      backgroundImage: {
        // 'hero': "url('/src/imgs/hero.png')"
      }
    },
  },
  plugins: [],
}