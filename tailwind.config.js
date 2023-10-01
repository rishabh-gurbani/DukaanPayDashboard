/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        primary: "GalanoGrotesqueMedium",
        secondary: "GalanoGrotesqueLight",

      },
      colors:{
        'white-bg':'#fafafa',
        'primary-blue':'#146EB4',
        'hover-blue':'#0E4F82',
        'nav-button-active':'rgba(255, 255, 255, 0.10)',
        'nav-button-hover':'rgba(255, 255, 255, 0.05)',
        'searchbar-header':'#F2F2F2',
        'filter-button-bg':'#E6E6E6',
        'filter-button-text':'#808080',
      },
      boxShadow:{
        "table":"0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
      },
      fontSize:{
        '15':['15px', '22px'],
        '13':['13px', '16px'],
        '32':['32px', '38px'],
      }
    },
  },
  plugins: [],
}

