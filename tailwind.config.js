/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mountains': "url('/assets/hero-bg.png')",
        'peak': "url('/assets/peak-bg.png')",
        'snow-peak': "url('/assets/snow-peak.png')",
       
      },
    fontFamily: {
      'Bebas': [ 'Bebas Neue'],
      'Oswald': ['Oswald', 'sans-serif']
    }
  },
  plugins: [],
}
}