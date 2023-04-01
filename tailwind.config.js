/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mountains': "url('/assets/hero-bg.svg')",
       
      },
    fontFamily: {
      'Bebas': [ 'Bebas Neue']
    }
  },
  plugins: [],
}
}