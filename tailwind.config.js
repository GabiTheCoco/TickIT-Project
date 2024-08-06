/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ["Poppins", "sans-serif"],
      colors: {
        "azul-oscuro": "#172B4D",
        "azul-hover": "#244276"
      },
    },

  },
  plugins: [],
}

