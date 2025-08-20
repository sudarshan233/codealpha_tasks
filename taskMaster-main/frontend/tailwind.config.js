/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#202020",
        "secondary": "#151515",
        "tertiary": "#252525",
        "accent": "#9B7EBD"
      },
      textColor: {
        "primary": "#F2F2F2"
      },
      stroke: {
        "accent": "#9B7EBD",
        "primary": "#F2F2F2"
      },
      borderColor: {
        "accent": "#9B7EBD",
        "primary": "#F2F2F2"
      }
    },
  },
  plugins: [],
}