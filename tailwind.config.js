/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          'gray-800': '#242331',
          'brown-500': '#A27035',
          'yellow-300': '#DDCA7D',
        },
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'), require('flowbite/plugin')],
};
