#!/usr/bin/env node

var pacificator = require('../src/pacificator.js'),
    fs = require('fs'),
    program = require('commander'),
    pkg = require('../package.json');

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-t, --tabIndent', "Choose the amount of tabs for indentation")
  .option('-s, --spaceIndent', "Choose the amount of spaces for indentation")
  .arguments('<input_file> [input_amount...]')
  .action(function (input_file, input_amount) {
    amount = input_amount;
    path = input_file;
  });

program.parse(process.argv);

if (program.tabIndent) {
    var output = pacificator.pacificateTab(path, amount);
  } else if (program.spaceIndent) {
    var output = pacificator.pacificateSpace(path, amount);
  } else {
    var output = pacificator.pacificate(path);
}

fs.writeFile(path, output);

console.log('Done! Your CSS was Pacificated successfully.');
