/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home-bg': 'url("/Background.svg")',
        'reason-container': 'linear-gradient(83.59deg, #FFDAC0 4.7%, rgba(255, 218, 192, 0) 110.33%, rgba(255, 218, 192, 0.37924) 110.33%)',
        'faq':'linear-gradient(83.7deg, #EEEEEE -84.09%, #969696 212.52%)',
      },
      boxShadow: {
        homepageMushroom: '0px 4px 25px -8px rgba(244, 120, 32, 0.26)',
        favoriteMushroom: '0px 4px 70px 13px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: '#F47820',
      }
    },
  },
  plugins: [],
}
