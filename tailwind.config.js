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
        '152B4A': '#152B4A',
        '2A254D': '#2A254D',
      },
      backgroundImage: {
        'vector': "url('./src/assets/vector.png')",
        'VectorL': "url('./src/assets/VectorL.png')",
        'footer': "url('./src/assets/footer.png')",
        'about': "url('./src/assets/about/about.png')",
        'Texture': "url('./src/assets/favorite/Texture.png')",
        'favbg': "url('./src/assets/favorite/fav-bg.png')",
        'feature': "url('./src/assets/featured/feature-after-bg.png')",
        'free-banner': "url('./src/assets/freeAccount/free-ban.png')",
        'free-shape': "url('./src/assets/freeAccount/Shape.png')",
        'feedback-Shape': "url('./src/assets/feedback/Shape.png')",
        'team-member': "url('./src/assets/team-member/team-banner.png')",
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