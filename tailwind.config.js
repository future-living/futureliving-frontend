/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        title: "#4D265A",
        link: "#F0F1F3",
        placeholder: "#667085",
        icon: "#71517B",
        bodyText: "#3D4350",
        card: "#E2C5EB",
        medsos: "#292D35",
        inputForm: "#C2C6CE",
      },
    },
  },
  plugins: [],
};
