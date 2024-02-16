/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
        		'light-green-10': '#aae3ac',
        		'light-green-20': '#91e876',
				'dark-green': '#2e7d32',
      		},
		},
	},
	plugins: [],
}