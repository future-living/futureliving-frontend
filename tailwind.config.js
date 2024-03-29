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
        key: "#525A6A",
        chips: "#371B40",
      },
      animation: {
        pop: "pop 2s both",
      },
      keyframes: {
        pop: {
          from: {
            transform: "scale(0)",
            opacity: 0,
          },
          to: {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
