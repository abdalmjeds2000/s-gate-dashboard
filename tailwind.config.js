/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        salic: {
          DEFAULT: '#08305C',
          primary: '#0B4D89',
          skyBlue: '#339BD6',
          lightBlue: '#79BDE3',
          green: '#2A7C62',
          lightGreen: '#A4D5AD'
        },
      }
    },
  },
  plugins: [],
}

