/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E63",
          dark: "#081749",
          light: "#1A2F85"
        },
        gold: {
          DEFAULT: "#F4B400",
          light: "#FFC107",
          soft: "#E0A800"
        },
        pearlWhite: "#F7F9FC"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
