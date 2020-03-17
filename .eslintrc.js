module.exports = {
	env: {
		node: true
	},
	// parser: "vue-eslint-parser",

	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2015,
		parser: "@typescript-eslint/parser"
	},
	plugins: ["@typescript-eslint", "fnlint"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended"
	],
	rules: {
		"fnlint/no-xmlrequest": "error"
	}
};
