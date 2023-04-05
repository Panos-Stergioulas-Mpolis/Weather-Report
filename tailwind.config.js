/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      ms: '600px',
      md: '768px',
      ml: '980px',
      lg: '1200px',
      xl: '1440px',
    },
    extend: { 
     colors:{
        "bg-color": "rgba(0, 0, 0, 0.546)",
     },
  },
  },
  plugins: [],
}