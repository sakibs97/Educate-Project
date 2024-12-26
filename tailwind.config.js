/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '4F5DE4': '#4F5DE4',
        'F57005': '#F57005',
      },
    },
    fontFamily: {
      'urbanist': ['Urbanist', 'serif']      
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '24px',
        md: '32px',
      },
    },
  },
  plugins: [],
}