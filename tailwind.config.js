/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        twitter: '#7834FF',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
