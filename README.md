# Pacificator.js

> inspired by [Idiomatic CSS](https://github.com/necolas/idiomatic-css).

## What does it do?

**Before:**
```css
.class{
color:#fff;}
```

**After:**
```css
.class {
  color: #fff;
}
```

[See all rules]().

## How to install

```sh
$ npm install -g pacificator
```

## How to use

```sh
$ pacificator <input>
```

## Command Line

```sh
$ pacificator <input>
```

```sh
$ pacificator -t <input>
```

```sh
$ pacificator -s <input>
```

```sh
$ pacificator --version
```

```sh
$ pacificator --help
```

## Module Usage

```js
var pacificator = require('pacificator');
    path = 'somePath/file.css';

// Output the css pacificated (By default the indent is with 1 tab)
var output = pacificator.pacificate(path);

// Output the css pacificated and indent with 1 tab
var output = pacificator.pacificateTab(path, 1);

// Output the css pacificated and indent with 2 spaces
var output = pacificator.pacificateSpace(path, 2);
```

## Contributing

Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/pacificator/blob/master/CONTRIBUTING.md).

## Licence

[MIT Licence](https://github.com/afonsopacifer/pacificator/blob/master/LICENCE.md) © Afonso Pacifer
