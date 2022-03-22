module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#111",
        light: "#252525",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
