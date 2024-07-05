/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-default': "url('./assets/images/bg_home.png')"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        'color-default':'#3BADFF',
        'white':'#FFFFFF',
        'grayy':'#CECECE',
        'blue-bold':'#0093FE'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

