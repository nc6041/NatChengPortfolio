/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        dimBlack: "#101413",
        dimCyan: "#03AEAE",
        dimGrey: "#898B8A",
      },
      fontFamily: {
        nohemi: "Nohemi",
        poppins: "Poppins",
      },
      rotate: {
        '130': '130deg',
        '40': '40deg',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  plugins: [],
};
