/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'IBM Plex Sans KR'", "sans-serif"],
        ibmplex: ["'IBM Plex Sans KR'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
