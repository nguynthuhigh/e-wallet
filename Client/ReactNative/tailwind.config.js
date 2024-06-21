/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D99FF",
      },
      fontFamily: {
        nRegular: ["NotoSans-Regular", "sans-serif"],
        nMedium: ["NotoSans-Medium", "sans-serif"],
        nLight: ["NotoSans-Light", "sans-serif"],
        nItalic: ["NotoSans-Italic", "sans-serif"],
        nExtraRegular: ["NotoSans_ExtraCondensed-Regular", "sans-serif"],
        nExtraMedium: ["NotoSans_ExtraCondensed-Medium", "sans-serif"],
        nExtraLight: ["NotoSans_ExtraCondensed-Light", "sans-serif"],
        nExtraBold: ["NotoSans_ExtraCondensed-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
