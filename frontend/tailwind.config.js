/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          100:"#eeeeef",
          200:"#e5e7eb",
          600:"#7f8382"
        },
        purple:{
          600:"#4241e0",
          500:"#373b84",
          200:"#dfe5ff"
        }
      }
    },
  },
  plugins: [],
}