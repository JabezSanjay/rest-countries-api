module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        dark: "hsl(209, 23%, 22%)",
        veryDarkDMB: "hsl(207, 26%, 17%)",
        veryDarkLMT: "hsl(200, 15%, 8%)",
      },
      white: {
        default: "hsl(0, 0%, 100%)",
      },
      gray: {
        darkGrayLMI: "hsl(0, 0%, 52%)",
        veryLightGrayLMB: "hsl(0, 0%, 98%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
