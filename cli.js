#!/usr/bin/env node
'use strict';
const updateNotifier = require('update-notifier');
const meow = require('meow');
const pdfoptim = require('.');

const cli = meow(`
	Usage
	  $ pdfoptim [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ pdfoptim
	  unicorns & rainbows
	  $ pdfoptim ponies
	  ponies & rainbows
`);

updateNotifier({pkg: cli.pkg}).notify();

console.log(pdfoptim(cli.input[0] || 'unicorns'));
