/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        "revealCardCol" : "repeat(3, 400px)"
      },
      gridTemplateRows : {
        "revealCardRow" : "repeat(2,400px)"
      }
    },
  },
  plugins: [],
}