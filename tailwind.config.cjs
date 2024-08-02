/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    minWidth: {
      32: '8rem',
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        dimBlack: '#101413',
        dimCyan: '#03AEAE',
        dimGrey: '#898B8A',
        dimHover: '#D9D9D9',
        dimCard: '#FAFCFF',
        malibu: {
          50: '#f1f8fe',
          100: '#e2f0fc',
          200: '#bfe2f8',
          // This, malibu-300, is our accent color
          300: '#83c8f3',
          400: '#45aeeb',
          500: '#1d93da',
          600: '#1076b9',
          700: '#0e5e96',
          800: '#104f7c',
          900: '#134367',
          950: '#0c2b45',
        },
      },
      fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        nat: ['Nat', 'sans-serif'],
        'nat-symbol': ['Nat Symbol', 'sans-serif'],
      },
      rotate: {
        130: '130deg',
        40: '40deg',
        220: '220deg',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  plugins: [],
}
