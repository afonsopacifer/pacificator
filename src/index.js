#!/usr/bin/env node

var pacificator = require('./pacificator.js'),
    program = require('commander'),
    pkg = require('../package.json');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-t, --tabIndent', "dde")
  .option('-s, --spaceIndent', "frfr")
  .parse(process.argv);

var stylesheet = ".clGDGDASS__s{ bacjground-color:url('dwdwd');}.rer{ color:#660066;}";

if (program.tabIndent) {
  var output = pacificator.pacificate(stylesheet, "\t");
} else if (program.spaceIndent) {
  var output = pacificator.pacificate(stylesheet, "  ");
} else {
  var output = pacificator.pacificate(stylesheet, "\t");
}

console.log(output);
