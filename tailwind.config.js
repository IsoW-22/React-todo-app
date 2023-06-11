/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    colors: {
      snow: "#FFFAFAff",
      black: "#010400ff",
      bitsweet: "#ff6663ff",
      chtrs: "#e0ff4fff",
      stlblue: "#4381c1ff",
    },
  },
  plugins: [],
};
