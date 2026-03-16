/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'navy-dark': '#0a2540',
          'navy-light': '#1a4d7a',
          'brand-red': '#d32f2f',
          'brand-blue': '#013164'
        },
        fontFamily: {
          sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }