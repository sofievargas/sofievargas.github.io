/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'customImg':"url('/src/components/IMG_6294.jpeg')",
      },
      fontFamily: {
        amarante : ['"Pixelify Sans"','sans-serif'],
      },
      colors:{
        customBrown: "#362426",
        customDarkGreen: "#70a288",
        customPink: "#f9b3d1",
        customYellow: "#ffeccc",
        customLightGreen: "#c8d6af",
      },

    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}