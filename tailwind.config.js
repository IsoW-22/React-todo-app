import colors from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#FFFAFAff",
        black: "#010400ff",
        bitsweet: "#ff6663ff",
        chtrs: "#e0ff4fff",
        stlblue: "#4381c1ff",
        magenta: "#C45BAA",
        plum: "#7D387D",
        spring: "#5EFC8D",
        white: colors.white,
        green: colors.green,
        red: colors.red,
        yellow: colors.yellow,
        slate: colors.slate,
        emerald: colors.emerald,
        violet: colors.violet,
        amber: colors.amber,
        fuchsia: colors.fuchsia,
      },
    },
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    colors: {},
  },
  plugins: [],
};
