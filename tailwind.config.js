import colorTheme from "./tailwind/colorTheme";
import radiusTheme from "./tailwind/radiusTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use the 'class' strategy for dark mode
  content: [],
  theme: {
    colors: colorTheme,
    borderRadius: radiusTheme,
    fontFamily: {
      poppins: ['Poppins'],
      inter: ['Inter'],
    },
  },
  plugins: [],
};
