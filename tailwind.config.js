/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F5F5",
        pinkBg: "#EA3A60",
        grayBg: "#F8F8F8",
        secondary: "#00f6ff",
        textBlack: "#232323",
        textGray: "#555555",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1536px",
    },
  },
  plugins: [],
};
