import test from 'ava';
import pdfoptim from '.';

test('title', t => {
	const err = t.throws(() => {
		pdfoptim(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(pdfoptim('unicorns'), 'unicorns & rainbows');
});
