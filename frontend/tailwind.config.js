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
      backgroundImage: {
        'heroPattern' : "url(\"https://www.transparenttextures.com/patterns/dark-tire.png\");"

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
      },
      shadowColor: {
        "accent": "#9B7EBD"
      }
    },
  },
  plugins: [],
}