/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree'],
        roboto: ['Roboto'],
      },
    }, 
    colors: {
      'gray': '#4d4d4d',
      'red': '#8C1C25',
      'dark-red': '#651815',
      'white': '#ffffff',
      'silver': '#f7f6f8', 
      'black': '#0a090c',
      'yellow': '#F2AA80',
      'green': '#2c666e',
    },
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },  
  plugins: [],
}

