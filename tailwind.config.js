/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "light-green-10": "#aae3ac",
        "light-green-20": "#7ae05a",
        "dark-green": "#2e7d32",
        "logo-purple": "#8f2068",
        "logo-blue": "#5396bd"
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2.5rem',
        'xl': '4rem',
        '2xl': '6.5rem',
        '3xl': '10.5rem',
      },
    },
    fontFamily: {
      serif: ["Merriwsdfgeather", "serif"],
      sans: ["Open Sans", "sans-serif"],
      handwriting: ["Kalam", "serif"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
