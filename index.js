#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var pkg = require('./package.json');

// program basic
program.version(pkg.version);
program.description('Pacificate your CSS');

// before
var css = ".class{color:#fff;}";

// after
var css_2 = ".class {\n\tcolor: #fff;\n}";

// show
console.log(css);
console.log(css_2);

// program.command( '<name>' );

// program.action(function nam( name ) {

// 	fs.writeFile('message.css', name);

// });

// program.parse( process.argv );
