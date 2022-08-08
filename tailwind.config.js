/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./*.{html,js}'],
  theme: {

    screens: {
       
      '10xl': {'max': '9000px'},
      // => @media (max-width: 1535px) { ... }

      '2xl': {'max': '1600px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1350px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1140px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '750px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '475px'},
// => @media (max-width: 639px) { ... }
    },

    colors: {
      'body': '#FFFFFF',
      'orange': '#FFC300',
      'black' : '#000814',
      'lemonade' : '#16E500',
      'red' : '#E50000',
      'dark-blue' : '#001D3D'
    },
    fontFamily: {
      sans: ['Cabinet Grotesk', 'sans-serif'],
      serif: ['lato', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}