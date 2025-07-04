// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        radial: 'radial-gradient(circle at top, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
       boxShadow: {
    neon: "0 0 15px rgba(236, 72, 153, 0.6)",
  },
    },
  },
  plugins: [],
};
