# Rules for pacification <3

[<-- Back](https://github.com/afonsopacifer/pacificator/blob/master/README.md)

## Table of contents

- [Syntax](#syntax)
- [Indentation](#indentation)

## Syntax

Always use double quotes:

```css
/* good */
.btn {
	background-image: url("textura.jpg");
	font-family: "Helvetica Neue", sans-serif;
}

/* bad */
.btn {
	background-image: url('textura.jpg');
	font-family: 'Helvetica Neue', sans-serif;
}
```

Include a single space before the opening bracket of a ruleset:

```css
/* good */
.btn {
	background-color: #000;
	color: #fff;
}

/* bad */
.btn{
	background-color: #000;
	color: #fff;
}
```

Place the closure of the keys on a new line:

```css
/* good */
.btn {
	background-color: #000;
	color: #fff;
}

/* bad */
.btn {
	background-color: #000;
	color: #fff;}
```

Include a single space after the : on the property:

```css
/* good */
.btn {
	background-color: #000;
	color: #fff;
}

/* bad */
.btn {
	background-color:#000;
	color:#fff;
}
```

Separate each ruleset by a blank line:

```css
/* good */
.btn {
	background-color: #000;
	color: #fff;
}

.btn-2 {
	background-color: #000;
	color: #fff;
}

/* bad */
.btn {
	background-color: #000;
	color: #fff;
}
.btn-2 {
	background-color: #000;
	color: #fff;
}
```

Use lowercase:

```css
/* good */
.btn {
	background-color: #000;
	color: #fff;
}

/* bad */
.Btn {
	background-color: #000;
	color: #FFF;
}
```

Use hyphens to separate the names:
```css
/* good */
.btn-default {
	background-color: #000;
	color: #FFF;
}

/* bad */
.btn_default {
	background-color: #000;
	color: #fff;
}
```

## Indentation

Maintain a consistency in the indentation

```css
/* good */
.btn-default {
	background-color: #000;
	color: #FFF;
}

/* bad */
.btn_default {
		background-color: #000;
	color: #fff;
}
```

**Note:** Choose from tabs or spaces, and keep the standard. [How to set up the indentation?](https://github.com/afonsopacifer/pacificator/blob/master/README.md#command-line-usage)

[Suggest a new rule ;)](https://github.com/afonsopacifer/pacificator/issues)
