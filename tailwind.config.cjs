/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F7F9FC",
        dimBlack: "#101413",
        dimCyan: "#03AEAE",
        dimGrey: "#898B8A",
        dimHover: "#D9D9D9",
        dimCard: "#FAFCFF",
        
      },
      fontFamily: {
        nohemi: ["Nohemi", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
      rotate: {
        '130': '130deg',
        '40': '40deg',
        '220': '220deg',
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
