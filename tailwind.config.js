/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"]
      },
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}

