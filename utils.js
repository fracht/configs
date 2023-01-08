const mergeWith = require('lodash.mergewith');

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const performArrayConcat = (objectValue, sourceValue) => {
	if (Array.isArray(objectValue) && Array.isArray(sourceValue)) {
		return [...objectValue, ...sourceValue];
	}
};

/**
 * @template T
 * @param {boolean} concatArrays
 * @param {T} object
 * @param {T[]} sources
 * @returns {T}
 */
const mergeConfigs = (concatArrays = false, object, ...sources) => {
	let customizer = noop;

	if (concatArrays) {
		customizer = performArrayConcat;
	}

	return mergeWith(object, ...sources.filter(Boolean), customizer);
};

module.exports = { mergeConfigs };
