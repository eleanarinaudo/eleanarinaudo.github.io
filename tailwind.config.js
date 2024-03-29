module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
};
