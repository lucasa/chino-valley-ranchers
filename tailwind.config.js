module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ultra': ['Ultra'],
        'lato': ['Lato'],
        'din': ['din-condensed', 'sans-serif'],
      },
      colors: {
        'chinored': '#b01116',
        'chinoyellow': '#f9a115',
        'chinodarkblue': '#303c4b',
        'chinoorange': '#f9a115'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
