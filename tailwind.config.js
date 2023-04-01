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
        'peak': "url('/assets/peak-bg.svg')",
        'snow-peak': "url('/assets/snow-peak.svg')",
       
      },
    fontFamily: {
      'Bebas': [ 'Bebas Neue'],
      'Oswald': ['Oswald', 'sans-serif']
    }
  },
  plugins: [],
}
}