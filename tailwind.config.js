module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ultra': ['Ultra'],
        'lato': ['Lato'],
      },
      colors: {
        'chinored': '#b01116'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
