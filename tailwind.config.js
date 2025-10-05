/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveRotate: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(150px, -150px) rotate(360deg)' },
        },
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideTopToBottom: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        }
      },
      animation: {
        moveRotate: 'moveRotate 5s linear infinite',
        slide_rgt: 'slideRightToLeft 1s ease-in forwards',
        slide_bottom: 'slideTopToBottom 1s ease-in forwards'
      },
      fontFamily: {
        inter: ["Alfa Slab One"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        base_clr: '#00f6ff',
      },
      boxShadow: {
        shadow_2: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [],
};

