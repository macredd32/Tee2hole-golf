
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        teeGreen: "#1f8a4c",
        teeNavy: "#0b2340",
        teeWhite: "#ffffff"
      }
    }
  },
  plugins: [],
}
