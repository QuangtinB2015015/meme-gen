/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#219c90",
        yellow: "#e9b824",
        orange: "#ee9322",
        red: "#d83f31",
      },
    },
  },
  plugins: [],
}