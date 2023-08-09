module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules:
	{
		'no-tabs': 0,
		indent: [2, 'tab'],
		'comma-dangle': 0,
		semi: [2, 'always'],
		'vue/html-indent': [2, 'tab'],
		'space-before-function-paren': 0,
		'brace-style': [2, 'allman'],
		curly: 0,
		'no-new': 0,
		'no-return-assign': 0,
		'vue/multi-word-component-names': 0,
		'vue/script-setup-uses-vars': 'error',
		'vue/max-attributes-per-line': ['error',
			{
				singleline:
				{
					max: 3
				},
				multiline:
				{
					max: 1
				}
			}
		],
		'import/no-named-as-default': 0,
		'vue/no-v-html': 0,
		'no-multi-spaces': [1, {
			exceptions:
			{
				VariableDeclarator: true
			}
		}],
		'no-unused-vars': 'off'
	}
};
