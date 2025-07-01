/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "#E5E8EB",
      mainDark: "#0D141C",
      button: '#1A80E5',
      ...colors
    },
    extend: {},
  },
  plugins: [],
};
