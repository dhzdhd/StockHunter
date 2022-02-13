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
        secondary: '#73ccb9',
        dark_primary: ''
      },
      backgroundImage: {
        'light-image': "url('/2.png')",
        'dark-image': "url('/2_dark.png')"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(1px)' },
          '50%': { transform: 'translate(-1px)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      transitionTimingFunction: {
        'in-bounce': 'cubic-bezier(0.17,0.67,0.83,0.67)',
        'out-bounce': 'cubic-bezier(0.19, 1, 0.22, 1)'
      }
    }
  },
  plugins: []
};
