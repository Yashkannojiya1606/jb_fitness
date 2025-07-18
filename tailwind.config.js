/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode with class
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        glow: 'glowPulse 2s ease-in-out infinite',
        'beat-glow': 'beatGlow 2s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(250,204,21,0.2)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(250,204,21,0.6)',
          },
        },
        beatGlow: {
          '0%, 100%': {
            opacity: '0.1',
          },
          '50%': {
            opacity: '0.25',
          },
        },
      },
    },
  },
  plugins: [],
};
