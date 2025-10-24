/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['helvetica', 'sans-serif'],
        arial: ['arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
