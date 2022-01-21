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
				primary: '#11a795',
				secondary: '#73ccb9'
			}
		}
	},
	plugins: []
};
