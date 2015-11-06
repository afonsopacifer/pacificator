# Pacificator.js

> inspired by [Idiomatic CSS](https://github.com/necolas/idiomatic-css).

## What does it do?

*Adds a standard syntax and indentation to css .*

**Before pacificate:**
```css
.class{
color:#fff;}

.class_2 {color:#000 ;
background:url('../bg.jpg');
}
```

**After pacificate:**
```css
.class {
  color: #fff;
}

.class-2 {
  color: #000;
  background: url("../bg.jpg");
}
```

[See all rules]().

## How to install

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
$ pacificator <css-path>
```
<hr>

*Output the css pacificated and choose the amount of tabs for indentation.*

```sh
$ pacificator -t <css-path> <amount-tabs>
```

<hr>

*Output the css pacificated and choose the amount of spaces for indentation.*

```sh
$ pacificator -s <css-path> <amount-spaces>
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

## Contributing

Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/pacificator/blob/master/CONTRIBUTING.md).

## Licence

[MIT Licence](https://github.com/afonsopacifer/pacificator/blob/master/LICENCE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
