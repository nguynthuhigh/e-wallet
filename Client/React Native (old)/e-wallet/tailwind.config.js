/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        example: ["Inter Thin"],
        inter: ['Inter-Regular', 'Inter-Bold'],
      },
    },
  },
  plugins: [],
}

