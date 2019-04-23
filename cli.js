#!/usr/bin/env node
'use strict';
const updateNotifier = require('update-notifier');
const meow = require('meow');
const pdfoptim = require('.');

const timestamp = Date.now();
const cli = meow(`
	Usage
	  $ pdfoptim [input]

	Options
	  --outputFile  my-foo.pdf [Default: optimized-{timestamp}.pdf

	Examples
		$ pdfoptim essay.pdf
		// Optimized PDF created with name optimized-[timestamp].pdf
		$ pdfoptim -o essay-optim.pdf essay.pdf
		// Optimized PDF created with name essay-optim.pdf
`,
{
	flags: {
		outputFile: {
			type: 'string',
			alias: 'o',
			default: `optimized-${timestamp}.pdf`
		}
	}
});

updateNotifier({pkg: cli.pkg}).notify();

const {input: file} = cli;

if (file.length === 0) {
	console.error('Specify one path');
	process.exit(1);
}

const result = pdfoptim(file[0], {outputFile: cli.flags.outputFile}) ? 0 : 1;
process.exit(result);
