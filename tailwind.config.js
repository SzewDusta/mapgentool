/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'backgroundDark': '#161616',
      'backgroundDark2': '#16181d',
      'backgroundGradientStart': '#161616',
      'backgroundGradientMiddle': '#121212',
      'backgroundGradientEnd': '#090909',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#000000',
      'gray': '#f5f5f5',
      'gradientStartColor': '#050053',
      'gradientMiddleColor': '#0f0d55',
      'gradientEndColor': '#2a2259',
      'whiteGradientStartColor': '#e7f3f9',
      'whiteGradientMiddleColor': '#e8e8f2',
      'whiteGradientEndColor': '#edebf9',
      'darkHeaderColor': '#1c1f26',
      'darkThemeTextColor': '#cbd5e1',
      "darkThemeMeetingCardColor":"#101214"
    },},
  },
  plugins: [],
}

