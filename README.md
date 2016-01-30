# Pacificator.js

> inspired by [Idiomatic CSS](https://github.com/necolas/idiomatic-css).

![Build Status](https://travis-ci.org/afonsopacifer/pacificator.svg?branch=master)

## What does it do?

*Adds a standard syntax and indentation to css.*

![](./screenshot.gif)

[See all supported Rules](https://github.com/afonsopacifer/pacificator/blob/master/RULES.md).

## How to install

Verify if you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

#### Command Line

```sh
$ npm install -g pacificator
```

#### Module

```sh
$ npm install pacificator
```

## Command Line Usage

*Output the css pacificated.*

```sh
$ pacificator <path>
```
<hr>

*Output the css pacificated and choose the amount of tabs for indentation.*

```sh
$ pacificator -t <path> <integer>
```

<hr>

*Output the css pacificated and choose the amount of spaces for indentation.*

```sh
$ pacificator -s <path> <integer>
```

<hr>

*Show the project version.*

```sh
$ pacificator --version
```

<hr>

*Show all available commands.*

```sh
$ pacificator --help
```

## Module Usage

```js
var pacificator = require('pacificator'),
    path = 'somePath/file.css';

/* Output the css pacificated. */
var output = pacificator.pacificate(path);

/* Output the css pacificated
and choose the amount of tabs for indentation. */
var output = pacificator.pacificateTab(path, 1);

/* Output the css pacificated
and choose the amount of spaces for indentation. */
var output = pacificator.pacificateSpace(path, 2);
```

## Not supported yet

- [ ] media queries syntax
- [ ] @charset syntax
- [ ] Shorthand syntax
- [ ] Other selectors *(ex: .abc > a)* syntax
- [ ] Animation syntax

[Report a bug :)](https://github.com/afonsopacifer/pacificator/issues)

## Contributing

Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/pacificator/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/afonsopacifer/pacificator/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
