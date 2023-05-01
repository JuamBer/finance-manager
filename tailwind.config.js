/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.gray,
        success: colors.green,
        warning: colors.orange,
        danger: colors.red,
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1024px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
