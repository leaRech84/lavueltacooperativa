 /**@type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {
      colors: {
        primary: "#03045eff",
        secondary:"#0077b6ff",
        third:"#00b4d8ff",
        fourth:"#90e0efff",
        fifth:"#caf0f8ff"
      },
    },
  },
  variants: {
    extend: {
      display:["group-hover"]
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar-hide')],
};

