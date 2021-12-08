module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'Ocean-Green-light': '#74C69D',
        'Ocean-Green': '#52B788',
        'Illuminating-Emerald': '#40916C',
        'Celadon-Blue': '#457b9d',
        'Blue-Green': '#468FAF',
      }
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
