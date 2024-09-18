const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          'light-blue': colors.lightBlue,
          fresh: {
            100: '#D8FEC1',
            200: '#AFFFB5',
            300: '#EFFFFB',
            400: '#C4FFFF',
            500: '#AFE8FF',
            600: '#ACFFD4',
          },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
