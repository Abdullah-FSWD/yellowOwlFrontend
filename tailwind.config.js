/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        94: "94%",
        110: "116vw",
      },
      height: {
        94: "94%",
        110: "116vh",
      },
    },
  },
  plugins: [],
};
