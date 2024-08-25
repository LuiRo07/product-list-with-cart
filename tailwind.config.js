/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // add color palette
      colors: {
        red_orange: '#C73A0F',
        green_confirmation: '#1EA475',
        rose: {
          50: '#FCF9F7',
          100: '#F4EDEB',
          300: '#C9AEA6',
          400: '#AD8985',
          500: '#87635A',
          900: '#260F08',
        }
      }
    }
  },
  plugins: [],
}

