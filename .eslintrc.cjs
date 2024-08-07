module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:import/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "react", "@typescript-eslint", "react-hooks", "jsx-a11y", "import"],
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"react/self-closing-comp": ["error", { component: true, html: true }],
		"react-hooks/rules-of-hooks": "warn",
		"react-hooks/exhaustive-deps": "warn",

		"@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],

		"import/order": [
			"warn",
			{
				groups: ["index", "sibling", "parent", "internal", "external", "builtin", "object", "type"],
				"newlines-between": "always",
			},
		],
	},
};
