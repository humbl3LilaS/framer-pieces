/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        "revealCardCol" : "repeat(3, 400px)",
        "colorChangeCol" : "repeat(2, 650px)"
        
      },
      gridTemplateRows : {
        "revealCardRow" : "repeat(2,400px)",
        "colorChangeRow" : "repeat(2,300px)"
      },
      backgroundImage: {
        "colorChangeCard" : "url('https://images.unsplash.com/photo-1715292779491-a32d1f086f5a?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }
      
    },
  },
  plugins: [],
}