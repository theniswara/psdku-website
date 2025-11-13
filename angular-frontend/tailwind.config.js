/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",  
  ],
  theme: {
    extend: {
      fontFamily: {
        biryani: ['Biryani', 'sans-serif'],  // <-- Custom font for titles
        inter: ['Inter', 'sans-serif'],      // <-- Default UI font
      },
    },
  },
  plugins: [],
};
