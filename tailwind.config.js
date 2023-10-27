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
      },
      boxShadow: {
        homepageMushroom: '0px 4px 25px -8px rgba(244, 120, 32, 0.26)',
        favoriteMushroom: '0px 4px 70px 13px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
