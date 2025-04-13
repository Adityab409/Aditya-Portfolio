// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arizonia: ['Arizonia', 'cursive'],
        montez: ['Montez', 'cursive'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
        floatX: 'floatX 6s ease-in-out infinite',
        floatY: 'floatY 8s ease-in-out infinite',
        floatXReverse: 'floatXReverse 5s ease-in-out infinite',
        floatYReverse: 'floatYReverse 7s ease-in-out infinite',
        floatRotate: 'floatRotate 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatXReverse: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        floatYReverse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
        floatRotate: {
          '0%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(3deg) translateY(-10px)' },
          '100%': { transform: 'rotate(0deg) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
