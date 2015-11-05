#!/usr/bin/env node

var pacificator = require('../src/pacificator.js'),
    program = require('commander'),
    pkg = require('../package.json')

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-t, --tabIndent', "dde")
  .option('-s, --spaceIndent', "frfr")
  .arguments('<input_file> <input_amount>')
  .action(function (input_file, input_amount) {
     path = input_file;
     amount = input_amount;
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

console.log(output);
