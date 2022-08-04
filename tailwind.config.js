/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'body': '#FFFFFF',
      'orange': '#FFC300',
      'black' : '#000814',
      'lemonade' : '#16E500',
      'red' : '#fE50000',
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