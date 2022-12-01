/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mob': {'max': '450px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}