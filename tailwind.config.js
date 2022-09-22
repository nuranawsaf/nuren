module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1267E4",
        secondary: "#FF8717",
        tertiary: "#ED1C3D",
        white_orange: "#F5F2EF",
        black: "#07031F",
        custom: "#16B3CB",
        light_black: "#202933",
        dark_gray: "#2C3742",
      },
      letterSpacing: {
        widest: '1.06em',
      },
      fontFamily: {
        lora: ["Lora"],
        inter: ["Inter"],
        poppins: ["Poppins"],
      },
    },
  },
  variants: {},
  plugins: [],
};
