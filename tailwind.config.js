/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': {'min': '1024px', 'max': '1724px'}, // Custom "xl" breakpoint between 1024px and 1724px
        '2xl': '1724px', // Screens larger than 1724px
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },       
        slideInToRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        infiniteScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideInFromRight: 'slideInFromRight 300ms ease-in-out',
        slideInToRight: 'slideInToRight 300ms ease-in-out',
        infiniteScroll: 'infinite-scroll 25s linear infinite',

        slide: 'slide 15s linear infinite',

      },
    },
  },
  plugins: [],

}
