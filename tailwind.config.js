import colorTheme from "./tailwind/colorTheme";
import flexTheme from "./tailwind/flexTheme";
import radiusTheme from "./tailwind/radiusTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Use the 'class' strategy for dark mode
  content: [],
  theme: {
    extend: {
      flex: flexTheme,
    },
    colors: colorTheme,
    borderRadius: radiusTheme,
    fontFamily: {
      poppins: ['Poppins'],
      inter: ['Inter'],
    },
  },
  plugins: [],
};
