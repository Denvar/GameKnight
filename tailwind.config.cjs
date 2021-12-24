const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ]
};

module.exports = config;
