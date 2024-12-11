/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'custom-bg': "url('./Assests/5.jpg')",
        'custom-bg2': "url('./Assests/7a.jpg')",
        'custom-bg3': "url('./Assests/11_aswasdas1.jpg')",
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px":"400px"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1.5s ease-out',
        slideIn: 'slideIn 1.2s ease-out',
        zoom: 'zoom 8s ease-in-out infinite',
        bounce: 'bounce 2s infinite',
      },
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.2,
      },
      
    },
  },
  plugins: [],
};
