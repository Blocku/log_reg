/** @type {import('tailwindcss').Config}*/
const colors = require("tailwindcss/colors")
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors:{
        primary: colors.zinc,
        secondary: colors.violet
      }
    },
  },

  plugins: [],
};

module.exports = config;
