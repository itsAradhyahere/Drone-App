/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        red: "#FF0000", // Optional if you use bg-red
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')", // make sure this path is correct
      },
    },
  },
  plugins: [],
}