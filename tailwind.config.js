const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      fontFamily: {
        ...defaultTheme.fontFamily.sans,
        'playfair-display': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
