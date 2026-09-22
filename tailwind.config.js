/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1B2A4A",
        "navy-dark": "#12192B",
        brass: "#B08D57",
        "brass-light": "#D4B483",
        parchment: "#F2E9D8",
        cream: "#FAF7F0",
        ink: "#12181F",
        teal: "#3E6259",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
