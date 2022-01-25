module.exports = {
  purge: ['./src/**/*.html', './src/**/*.svelte'],
  darkMode: 'class',
  content: [],
  theme: {
    fontFamily: {
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#066f7c',
        secondary: '#73ccb9'
      }
    }
  },
  plugins: []
};
