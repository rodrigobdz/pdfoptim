# pdfoptim [![Build Status](https://travis-ci.com/rodrigobdz/pdfoptim.svg?branch=master)](https://travis-ci.com/rodrigobdz/pdfoptim)

> Optimize file size of PDFs

## Install

```sh
$ npm install pdfoptim
```

## Usage

```js
const pdfoptim = require('pdfoptim');

pdfoptim('printer-manual.pdf');
// Filesize difference -79.46% ✂️
// Optimized version of printer-manual.pdf saved as optimized-1556039930343.pdf 🎉
```

## API

### pdfoptim(filePath, [options])

#### filePath

Type: `string`

Path to PDF file to optimize.

#### options

Type: `Object`

##### outputFile

Type: `string`<br>
Default: `optimized-{timestamp}.pdf`

Filename for optimized PDF.

## CLI

```sh
$ npm install --global pdfoptim
```

```sh
$ pdfoptim --help

  Usage
    pdfoptim [filePath]

  Options
    --outputFile  File name for optimized PDF [Default: optimized-{timestamp}.pdf

  Examples
    $ pdfoptim essay.pdf
    // Optimized PDF created with name optimized-[timestamp].pdf
    $ pdfoptim -o optim-essay.pdf essay.pdf
    // Optimized PDF created with name essay-optim.pdf
```

## Credits

* [percentage-diff](https://github.com/rodrigobdz/percentage-diff) - Calculate percentage difference between two numbers
* [generator-lnm](https://github.com/rodrigobdz/generator-lnm) - Awesome node module generator

## License

[MIT](license) © [Rodrigo Bermudez Schettino](https://rodrigobdz.github.io)
