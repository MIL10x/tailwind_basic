/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'red':'#FF0000'
      }
    },
    fontFamily:{
      bas:[ 'Oswald', 'sans-serif']
    },
    fontSize:{
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.052rem',
      '7xl': '5.052rem',
      '8xl': '6.052rem',
      '9xl': '7.052rem',
      '10xl': '8.00rem',
    },
  },
  plugins: [],
  darkMode:"selector"
}

