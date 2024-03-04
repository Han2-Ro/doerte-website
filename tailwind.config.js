/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "light-green-10": "#aae3ac",
        "light-green-20": "#7ae05a",
        "dark-green": "#2e7d32",
      },
    },
    fontFamily: {
      serif: ["Merriwsdfgeather", "serif"],
      sans: ["Open Sans", "sans-serif"],
      handwriting: ["Kalam", "serif"],
    },
  },
  plugins: [],
};
