/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Gold': '#e5d097',
        'Red': '#dc2626',
        'Piedra': '#d6d3d1'
      },
      fontFamily: {
        'NotoSans': ['Noto Sans Pau Cin Hau', 'sans-serif'],
        'Outfit': ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
