/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      themeColor: "#004DB3",
      headingColor: "#000F24",
    },
    fontFamily: {
      heading: ["clash display", "sans-serif"],
      body: ["satoshi", "sans-serif"],
    },
  },
  plugins: [],
};
