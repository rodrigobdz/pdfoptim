import test from 'ava';
import tempy from 'tempy';
import pdfoptim from '.';

test.beforeEach(t => {
	t.context.file = tempy.file({extension: 'pdf'});
});

test('checks type of file', t => {
	const err = t.throws(() => {
		pdfoptim('');
	}, TypeError);
	t.is(err.message, 'Expected a string, got undefined');
});

test('checks type of outputFile', t => {
	const err = t.throws(() => {
		pdfoptim(t.context.file, {outputFile: 123});
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');
});
