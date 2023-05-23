/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "**/*.{html,js}",
    "src/**/*.{html,js}",
    "src/*.{html,js}",
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slowfade: {
          '0%, 50%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        diagonal: {
          '0%': { 'background-position': '0% 200%' },
          '50%': { 'background-position': '200% 0%'},
          '100%': { 'background-position': '0% 200%' }
        },
        pop: {
          '0%': { transform: 'scaleX(1) scaleY(1)' },
          '25%': { transform: 'scaleX(1.05) scaleY(1.05)' },
          '50%': { transform: 'scaleX(1) scaleY(1)' },
          '100%': { transform: 'scaleX(1) scaleY(1)' },
        },
      },
      animation: {
        fade: 'fade 2s linear forwards',
        slowfade: 'slowfade 4s linear forwards',
        diagonal: 'diagonal 60s linear infinite',
        pop: 'pop 3s ease-out infinite',
      },
      height: {
        '50': "50px",
      },
      spacing: {
        '50': "50px",
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
      maxWidth: {
        '7/8': '87.5%',
      }
    },
    plugins: [],
  },
};
