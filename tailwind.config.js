/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        green: "##1db954",
        black: "#121212",
        grafite: "#212121",
        white: "#FFFFFF",
        lightGrey: "#b3b3b3",
        darkGrey: "#535353",
      },
    },
  },
  plugins: [],
};
