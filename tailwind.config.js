/** @type {import('tailwindcss').Config} */
/*eslint no-undef: "error"*/
/*eslint-env node*/
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	daisyui: {
		theme: [
			{
				fiatsend: {

				}
			}
		]
	},
	theme: {
		extend: {
			boxShadow: {
				center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
			},
			animation: {
				"pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
