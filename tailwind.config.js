/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
          customGreen: '#559268',
          customOrange: '#ffa135',

        },

        dropShadow: {
          '3xl': '0 35px 35px rgba(169, 169, 169, 0.25)', // Light gray shadow
          '4xl': [
            '0 35px 35px rgba(169, 169, 169, 0.25)', // Light gray shadow
            '0 45px 65px rgba(255, 255,, 169, 1)'  // Lighter gray shadow
          ]
        },
        
        boxShadow: {
          'customGreen': '0 5px 6px rgba(34, 199, 94, 0.8)', // Custom green color with opacity
        },

      fontFamily: {
        gilroy: ['Gilroy-Bold', 'sans-serif'], // Custom font family
      },
      fontSize: {
        'custom-80': ['80px', '100px'], // Font size + Line height
      },
        
    

      
    },
  },
  plugins: [],
};