const replace = require('rollup-plugin-replace');

module.exports = (options = {}) => {
	const { js = true } = options;

	return Object.assign(
		replace({
			include: ['**/*.{ts,tsx}', js && '**/*.{js,jsx}'].filter(Boolean),
			delimiters: ['', ''],
			values: { '/** @class */': '/*@__PURE__*/' }
		}),
		{ name: 'ts-treeshaking' }
	);
};
