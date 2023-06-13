module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        35: "35px",
        450: "450px",	
        514: "514px",
        30: "30px",
        143: "143px",
        107: "107px",
        15: "15px",
        5: "5px",
        6: "6px",
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      },
      borderRadius: {
        '30': '30px',
      },
      fontSize: {
        '32': '32px',
        '14': '14px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
    },
  },
  plugins: [],
};
