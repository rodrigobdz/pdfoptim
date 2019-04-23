'use strict';
const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');

/**
 * Calculate file size and return human readable representation
 * @param {string} file Path to file
 *
 * @returns {string} '<size> bytes'
 */
function humanFileSize(file) {
	return `${fs.statSync(file).size} bytes`;
}

function logOptimizationResults(oldSize, file, outputFile) {
	const newSize = humanFileSize(outputFile);

	console.log('File Size Comparison');
	console.log(`Original: ${oldSize}`);
	console.log(`Optimized: ${newSize}\n`);
	console.log(`Optimized version of ${path.basename(file)} saved as ${outputFile} 🎉`);
}

module.exports = (file, options = {}) => {
	if (typeof options.outputFile !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof options.outputFile}`);
	}

	const ext = path.extname(file).toLowerCase();
	if (ext !== '.pdf') {
		throw new TypeError(`Expected a PDF, got ${ext || undefined}`);
	}

	try {
		if (!fs.existsSync(file)) {
			throw new ReferenceError(`File ${file} does not exist.`);
		}
	} catch (error) {
		console.error(error);
		return false;
	}

	const oldSize = humanFileSize(file);

	try {
		execSync(`\\gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=${options.outputFile} ${file}`);
		logOptimizationResults(oldSize, file, options.outputFile);
	} catch (error) {
		console.log(error.stdout.toString());
		return false;
	}

	return true;
};
