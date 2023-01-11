const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				beige: "#F9F4ED",
				grey: "#444444",
				pink: "#CC6666",
				purple: "#34113F",
			},
			fontFamily: {
				sans: ["Akaya Telivigala", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
