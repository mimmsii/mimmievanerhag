/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        paper: '#F9F9F7',
        industrial: '#3B4C5A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        satisfy: ['"Satisfy"', 'cursive'],
      },
    },
  },
  plugins: [],
}
