module.exports = {
	'extends': [
		'./'
	].map(require.resolve),

	plugins: [
		'stylelint-scss',
		'stylelint-at-rule-no-debug'
	],

	rules: {

		// @extend
		'scss/at-extend-no-missing-placeholder': true,

		// @function
		'scss/at-function-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],

		// @import
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-no-partial-extension': true,
		'scss/at-import-partial-extension-blacklist': null,
		'scss/at-import-partial-extension-whitelist': null,

		// @mixin
		'scss/at-mixin-no-argumentless-call-parentheses': true,
		'scss/at-mixin-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],

		// @debug
		'at-rule-no-debug': [true, { severity: 'warning' }],

		// $variable
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/dollar-variable-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],

		// %placeholder
		'scss/percent-placeholder-pattern': [/^[\da-z-_]+$/, { severity: 'warning' }],

		// Media feature
		'scss/media-feature-value-dollar-variable': null,

		// Partial
		'scss/partial-no-import': null,

		// Selector
		'scss/selector-no-redundant-nesting-selector': [true, { severity: 'warning' }],

		// Other
		'at-rule-no-unknown': [true, {
			ignoreAtRules: ['extend', 'at-root', 'debug', 'warn', 'error', 'if', 'for', 'each', 'while', 'mixin', 'include'],
			severity: 'warning'
		}]
	}
};
