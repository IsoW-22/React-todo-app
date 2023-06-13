import colors from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'inputShadow': '0px 0px 4px 1px #9336B4',
        'todoShaodw': "0px 0px 10px 1px #00000055"
      },
      colors: {
        snow: "#FFFAFAff",
        black: "#010400ff",
        bitsweet: "#F24C3D",
        chtrs: "#FCE700",
        stlblue: "#419FD9",
        magenta: "#E1AEFF",
        plum: "#7D387D",
        spring: "#16FF00",
        brd: "#9336B4",
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
