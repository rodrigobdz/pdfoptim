# pdfoptim [![Build Status](https://travis-ci.com/rodrigobdz/pdfoptim.svg?branch=master)](https://travis-ci.com/rodrigobdz/pdfoptim)

> Optimize file size of PDFs

## Install

```sh
$ npm install pdfoptim
```

## Usage

```js
const pdfoptim = require('pdfoptim');

pdfoptim('unicorns');
//=> 'unicorns & rainbows'
```

## API

### pdfoptim(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `Object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI

```sh
$ npm install --global pdfoptim
```

```sh
$ pdfoptim --help

  Usage
    pdfoptim [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ pdfoptim
    unicorns & rainbows
    $ pdfoptim ponies
    ponies & rainbows
```

## Credits

* [generator-lnm](https://github.com/rodrigobdz/generator-lnm) - Awesome node module generator

## License

[MIT](license) © [Rodrigo Bermudez Schettino](https://rodrigobdz.github.io)
