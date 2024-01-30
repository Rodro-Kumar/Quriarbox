/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      Oxanium: ["Oxanium", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        main: "#FFF1DC",
        bgnavfrom: "#fff",
        bgvia: "#fff6e5",
        bgnavto: "#fff6e5",
        orangeColor: "#F95C19",
      },
      boxShadow: {
        navshadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        videoimg: "url('/src/assets/video.png')",
      },
    },
  },
  plugins: [],
};
