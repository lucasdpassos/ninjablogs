/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary": "#0292B7",
        "secondary": "#99DFEC"
      }
    },
  },
  plugins: [],
}

