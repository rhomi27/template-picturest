/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        'picturest' : "Alkatra"
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}

