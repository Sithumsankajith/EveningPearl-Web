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
          50: '#f0f4f9',
          100: '#dce5f0',
          200: '#bacce0',
          300: '#8caacd',
          400: '#5c81b2',
          500: '#3e6598',
          600: '#2d4e7d',
          700: '#253f65',
          800: '#213655',
          900: '#1e2e47',
          950: '#131e31',
        },
        gold: {
          50: '#fdf9ec',
          100: '#f9f1ce',
          200: '#f3e09d',
          300: '#ebd173',
          400: '#e1bc40',
          500: '#dab031',
          600: '#be9023',
          700: '#986c1d',
          800: '#7e571e',
          900: '#69481e',
          950: '#3d260e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
