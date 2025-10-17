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
          '100%': { transform: 'translate(150px, -150px)' },
        },
        slideRightToLeft: {
          '0%': { transform: 'translateX(40%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideLeftToRight: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideTopToBottom: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        slideBottomToTop: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        fade_in: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        moveRotate: 'moveRotate 5s linear infinite',
        slide_rgt: 'slideRightToLeft 1s ease-in forwards',
        slide_left: 'slideLeftToRight 0.9s ease-in forwards',
        slide_bottom: 'slideTopToBottom 1s ease-in forwards',
        slide_top: 'slideBottomToTop 1s ease-in forwards',
        fade_in: 'fade_in 1s ease-out forwards',
      },
      fontFamily: {
        inter: ["Alfa Slab One"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        base_clr: '#00f6ff',
        base_clr_1: '#fa0c0c',
      },
      boxShadow: {
        shadow_2: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      screens: {
        'min-2000': { max: '2000px' },
        'min-1950': { max: '1950px' },
        'min-1900': { max: '1900px' },
        'min-1800': { max: '1800px' },
        'min-1700': { max: '1700px' },
        'min-1600': { max: '1600px' },
        'min-1500': { max: '1500px' },
        'min-1400': { max: '1400px' },
        'min-1300': { max: '1300px' },
        'min-1200': { max: '1200px' },
        'min-1150': { max: '1150px' },
        'min-1100': { max: '1100px' },
        'min-1000': { max: '1000px' },
        'min-950': { max: '950px' },
        'min-900': { max: '900px' },
        'min-850': { max: '850px' },
        'min-800': { max: '800px' },
        'min-700': { max: '700px' },
        'min-600': { max: '600px' },
        'min-550': { max: '550px' },
        'min-500': { max: '500px' },
        'min-450': { max: '450px' },
      },
    },
  },
  plugins: [],
};

