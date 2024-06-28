/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D99FF",
      },
      fontFamily: {
        iBlack: ["Inter-Black"],
        iBold: ["Inter-Bold"],
        iExtraBold: ["Inter-ExtraBold"],
        iExtraLight: ["Inter-ExtraLight"],
        iLight: ["Inter-Light"],
        iMedium: ["Inter-Medium"],
        iRegular: ["Inter-Regular"],
        iSemiBold: ["Inter-SemiBold"],
        iThin: ["Inter-Thin"],
      },
    },
  },
  plugins: [],
};
