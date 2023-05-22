/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#2F2F2F',
      },
      fontFamily: {
        'sans': ['Spectral', 'Sans-serif']
      }
    },
  },
  plugins: [],
}