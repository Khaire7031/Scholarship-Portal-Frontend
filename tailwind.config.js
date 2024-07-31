/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#0c4a6e', // Define your custom color here
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
