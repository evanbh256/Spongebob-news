/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'fox-blue': '#003366',
        'fox-red': '#cc0000',
        'fox-dark': '#1e2a3a',
        'fox-text': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Roboto Slab"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
};
