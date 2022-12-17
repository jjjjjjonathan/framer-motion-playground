/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      strokeWidth: {
        '3': '3',
        '4': '4',
        '5': '5'
      }
    },
  },
  plugins: [],
};
