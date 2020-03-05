const dictionary = require('./dictionary.json');

const wordExists = text => {
	if (typeof text === 'string') {
		const cleaned = text.trim().toLowerCase();

		return !!(cleaned.length > 1
			? dictionary[cleaned.slice(0, 2)] &&
			  dictionary[cleaned.slice(0, 2)].includes(cleaned)
			: cleaned === 'a' || cleaned === 'i');
	} else {
		throw new TypeError('The paramater passed to wordExists must be a string');
	}
};

module.exports = wordExists;
