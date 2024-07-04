/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'color-default':'#3BADFF',
      'white':'#FFFFFF'
    },
    extend: {
      backgroundImage: {
        'background-default': "url('./assets/images/bg_home.png')"
      }
    },
  },
  plugins: [],
}

