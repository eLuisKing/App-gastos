/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Pop: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

