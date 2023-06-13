module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        42: '4px',
        0.05: '0.05em',
        1: '1px',
        35: "35px",
        450: "450px",	
        514: "514px",
        30: "30px",
        143: "143px",
        107: "107px",
        15: "15px",
        5: "5px",
        6: "6px",
        21: "21px",
        0.9: "0.9px",
        340: "340px",
        28.8: "28.8px",
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      },
      borderRadius: {
        '50': "50px",
        '30': '30px',
      },
      fontSize: {
        '32': '32px',
        '14': '14px',
      },
      borderWidth: {
        1: '1px',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
    },
  },
  plugins: [],
};
