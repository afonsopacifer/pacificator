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
  var output = pacificator.pacificateTab(stylesheet, 1);
} else if (program.spaceIndent) {
  var output = pacificator.pacificateSpace(stylesheet, 2);
} else {
  var output = pacificator.pacificate(stylesheet);
}

console.log(output);
