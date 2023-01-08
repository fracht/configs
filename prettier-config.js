const { mergeConfigs } = require('./utils');

/**
 * Function which generates configuration for Prettier, using organization defaults.
 * @param {import('prettier').Config} [overrides] - override default values. Use carefully: if you need to override
 *   configuration, consider changing default configuration across all repositories
 * @returns {import('prettier').Config}
 */
const defineConfig = (overrides) => {
	return mergeConfigs(
		false,
		{
			tabWidth: 4,
			printWidth: 120,
			trailingComma: 'all',
			singleQuote: true,
			useTabs: true,
			arrowParens: 'always',
			bracketSameLine: false,
			bracketSpacing: true,
			embeddedLanguageFormatting: 'auto',
			jsxSingleQuote: false,
			endOfLine: 'auto',
		},
		overrides,
	);
};

module.exports = { defineConfig };
