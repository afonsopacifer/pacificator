#!/usr/bin/env node

var pacificator = require('../src/pacificator.js'),
    program = require('commander'),
    pkg = require('../package.json')
    fs = require('fs');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-t, --tabIndent', "dde")
  .option('-s, --spaceIndent', "frfr")
  .parse(process.argv);

var stylesheet = fs.readFileSync('./style.css', 'utf8');

if (program.tabIndent) {
  var output = pacificator.pacificateTab(stylesheet, 1);
} else if (program.spaceIndent) {
  var output = pacificator.pacificateSpace(stylesheet, 2);
} else {
  var output = pacificator.pacificate(stylesheet);
}

fs.writeFile('./style.css', output);
console.log(output);
