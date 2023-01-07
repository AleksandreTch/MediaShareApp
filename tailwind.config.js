/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    animation: {   
        spin: "spin 1s linear infinite",
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in 1',
        fadeInNoScale: 'fadeInNoScale 1.25s ease-in 1',
        scaleUp: 'scaleUp .5s ease-in-out 1',
        scaleUpDown: 'scaleUp .5s ease-in-out 1',
        pressBtn: 'pressBtn .1s linear 1',
        fadeOut: 'fadeOut 1.5s ease-in-out 1',
       
    },
    keyframes:{
        pressBtn: {
          from:{
            background: 'white',
            color: 'black',
          },
          to: {
            background:'white',
            color:'white',
          }
        },
        spin: {
            to: {
              transform: 'rotate(360deg)',
            }
        },

        fadeOut: {
          "0%": {
            opacity: '0',
            scale:'1'
          },
          "10%": {
            opacity: "1",
            scale: '1'
          },
          "50%": {
            opacity: "1",
            scale: '1'
          },

          "75%": {
            opacity:"1",
            scale:"1"
          },

          "100%" : {
            opacity: "0",
            scale: '1'
          }
        },

        fadeIn: {
          from: {
            opacity: '0',
            scale:"0.9"
          },

          to: {
            opacity:'1',
            scale:'1'
          },
        },

        fadeInNoScale: {
          from: {
            opacity: '0',
          },

          to: {
            opacity:'1',
          },
        },

        scaleUp:{
          '0%': {
            scale:'0.2',
            opacity:'0',
          },

          '75%': {
            scale:'1.09',
            opacity:'1',
          },

          '100%': {
            scale:'1',
            opacity:'1',
          }
        },

        wiggle: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(90deg)'},
        },
        
        scaleUpDown: {
          '0%': {
            scale:'0.2',
            opacity:'0.2',
          },

          '50%': {
            scale: '1',
            opacity:'1',
          },

          '100%': {
            scale: '0.2',
            opacity: '0.2',
          }
        }
    },
  },
  plugins: [],
};
