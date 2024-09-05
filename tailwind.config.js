/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'high': '70rem', // Add a new height value
      },
    },
  },
  plugins: [],
}

