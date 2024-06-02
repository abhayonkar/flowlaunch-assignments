// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#171717',
          productCard: '#f44c1c',
          border: '#eae1cb',
        },
        light: {
          background: '#faf8ed',
          productCard: '#b9a6e0',
          border: '#3f275a',
        },
        click: {
          background: '#108fb0',
          text: '#fe9177',
        },
        searchBar: {
          bg: '#0096d1',
          text: '#F7F2D7',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
