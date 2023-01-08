const { mergeConfigs } = require('./utils');

/**
 * Function which generates configuration for Syncpack, using organization defaults.
 * @param {import('syncpack/dist/types').SyncpackConfig} [overrides] - override default values. Use carefully: if you need to override
 *   configuration, consider changing default configuration across all repositories
 * @returns {import('syncpack/dist/types').SyncpackConfig}
 */
const defineConfig = (overrides) => {
	return mergeConfigs(
		true,
		{
			sortFirst: [
				'name',
				'description',
				'version',
				'private',
				'sideEffects',
				'main',
				'module',
				'types',
				'bugs',
				'homepage',
				'repository',
				'author',
				'license',
				'keywords',
				'publishConfig',
				'scripts',
				'dependencies',
				'devDependencies',
				'peerDependencies',
				'pnpm',
			],
			indent: '\t',
			peer: false,
			workspace: false,
		},
		overrides,
	);
};

module.exports = { defineConfig };
