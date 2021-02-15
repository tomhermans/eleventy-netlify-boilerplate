module.exports = {
	purge: {
		enabled: true,
		// content: ['_site/**/*.html', './**/*.html', './**/*.njk', './**/*.md'],
		content: ['_site/**/*.html'],
		options: {
			safelist: [],
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
