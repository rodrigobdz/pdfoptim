'use strict';
const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');
const percentageDiff = require('percentage-diff');

/**
 * Get filesize in bytes
 * @param {string} file Path to file
 *
 * @returns {string} Size in bytes
 */
function fileSizeInBytes(file) {
	return Number(fs.statSync(file).size);
}

function logOptimizationResults(oldSize, file, outputFile) {
	const newSize = fileSizeInBytes(outputFile);
	const diff = percentageDiff(oldSize, newSize);

	console.log(`Filesize difference ${percentageDiff.toPercentage(diff)} ✂️`);
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

	const oldSize = fileSizeInBytes(file);

	try {
		execSync(`\\gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=${options.outputFile} ${file}`);
		logOptimizationResults(oldSize, file, options.outputFile);
	} catch (error) {
		const errMsg = error.stdout ? error.stdout : error;
		console.log(errMsg.toString());

		return false;
	}

	return true;
};
