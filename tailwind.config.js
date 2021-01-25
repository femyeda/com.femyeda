module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent": "#9f7aea",
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
      backgroundOpacity: ['dark']
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
