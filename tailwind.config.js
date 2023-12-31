/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    '2xs': { min: '300px' },
    xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
    sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
    lg: { min: '1200px' }, // Desktop smallest.
    xl: { min: '1159px' }, // Desktop wide.
    '2xl': { min: '1359px' } // Desktop widescreen.
  },
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
      },
    },
    // colors: {
    //   "dark-purple": "#081A51",
    //   "light-white": "rgba(255, 255, 255, 0.17)"
    // }
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}

