/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        herobackground:"#F8F8FD",
        secondary:"#09F53D",
        fontColor:"#25324B",
        marketingColor:"#FFB836",
        designColor:"#4640DE",
        footerbackground:"#202430",
        footertext:"#D6DDEB",
        navtext:"#515B6F",
        buttonbg:'rgba(137,233,207, 22)'
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        epilogue:["Epilogue","sans-serif"],
        revalia:["Revalia","sans-serif"]
      },
      container: {
        center: true,
        width:'76.67%',
        padding: '0.25rem',
        screens: {
          sm: '320px', 
          md: '768px', // Custom width for medium screens
          lg: '1024px', // Custom width for large screens
          xl: '1124px', // Custom width for extra-large screens
          '2xl': '1200px', // Custom width for 2xl screens
        },
      },

      fontSize:{
        heroSize:'2.75rem'
      },
      backgroundImage:{
        'hero-pattern': "url('./src/assets/Desktop.png')",
      }
    },
  },
  plugins: [],
}