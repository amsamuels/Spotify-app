/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      nav: ['Mochiy Pop P One', 'sans-serif'],
      hero: ['Source Serif Pro', 'serif'],
      header: ['Roboto Condensed', 'sans-serif'],
    },
  },
  plugins: [],
};
