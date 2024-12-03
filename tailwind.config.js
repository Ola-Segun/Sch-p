/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6d28d9',
        'primary-highlight': '#d8b4f',
        'blue-start': '#97AFFF', // 0%
        'blue-mid': '#A646DD',   // 26%
        'blue-end': '#3629B7',   // 65%
        'medic': '#ef4444',
        'medic-highlight': '#fca5a5',
        'food': '#fb923c',
        'food-highlight': '#fdba74',
        'library': '#3b82f6',
        'library-highlight': '#93c5fd',


        'text-primary': '#3629B7',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Poppins as a custom font
      },
    },
  },
  plugins: [],
}

