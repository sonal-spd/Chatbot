module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		listStyleType: {
			none: 'none',
			disc: 'disc',
			decimal: 'decimal',
			square: 'square',
			roman: 'upper-roman',
		  },
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
				},
		extend: {
			height: {
				'120': '29rem',
			  },
			colors: {
				primary: '#d73d36',
				secondary: '#ecc94b',
				inputBg: '#EDF2F7',
			},
		},
		screens: {
			'sm': {'min': '50px', 'max': '767px'},
			'md': {'min': '768px', 'max': '1023px'},
			'lg': {'min': '1024px', 'max': '1279px'},
			'xl': {'min': '1280px', 'max': '1535px'},
			'2xl': {'min': '1536px'},
		  },
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
