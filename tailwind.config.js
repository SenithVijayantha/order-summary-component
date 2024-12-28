/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      'xs': "480px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Replace sans with Poppins
      },
      backgroundImage: {
        'desktop-pattern': "url('/images/pattern-background-desktop.svg')",
        'mobile-pattern': "url('/images/pattern-background-mobile.svg')"
      },
      colors: {
        'custom-pale-blue': 'hsl(225, 100%, 94%)',
        'custom-very-pale-blue': 'hsl(225, 100%, 98%)',
        'custom-bright-blue': 'hsl(245, 75%, 52%)',
        'custom-desaturated-blue': 'hsl(224, 23%, 55%)',
        'custom-dark-blue': 'hsl(223, 47%, 23%)'
      }
    },
  },
  plugins: [],
}