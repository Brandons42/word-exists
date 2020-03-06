const wordExists = require('./wordExists');

test('evaluates non-sensical string', () => {
	expect(wordExists('heawj')).toBe(false);
	expect(wordExists('gheuawijeuwhs')).toBe(false);
	expect(wordExists('ewva-iowefjn')).toBe(false);
	expect(wordExists('---eawj')).toBe(false);
	expect(wordExists('   h eewf ajfowawj')).toBe(false);
	expect(wordExists('987656789')).toBe(false);
	expect(wordExists('   ')).toBe(false);
	expect(wordExists('z')).toBe(false);
	expect(wordExists('tic-tac-toe')).toBe(false);
	expect(wordExists('')).toBe(false);
});

test('evaluates words', () => {
	expect(wordExists('a')).toBe(true);
	expect(wordExists('i')).toBe(true);
	expect(wordExists('hello')).toBe(true);
	expect(wordExists('dictionary')).toBe(true);
	expect(wordExists('jester')).toBe(true);
	expect(wordExists('word')).toBe(true);
	expect(wordExists('exists')).toBe(true);
	expect(wordExists('so')).toBe(true);
});

test('throws error for wrong type', () => {
	testErr = param => {
		try {
			wordExists(param);
			expect(true).toBe(false);
		} catch (err) {
			expect(err).toBeInstanceOf(TypeError);
		}
	};

	testErr(9);
	testErr(null);
	testErr({});
	testErr(undefined);
});
