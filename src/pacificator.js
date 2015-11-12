'use strict';

var fs = require('fs');

exports.pacificate = function(path) {

  var stylesheet = fs.readFileSync(path, 'utf8');

  stylesheet = stylesheet.replace(/\s/g, "");                 // Removes all whitespace, indentation and line breaks.
  stylesheet = stylesheet.toLowerCase();                      // converts all characters to lowercase
  stylesheet = stylesheet.replace(/\'/g, "\"");               // Change all ' to "
  stylesheet = stylesheet.replace(/_/g, "-");                 // Change all  _ to -
  stylesheet = stylesheet.replace(/\{/g, " \{\n");            // Adds a whitespace before the { and add a line break after
  stylesheet = stylesheet.replace(/\/\*/g, "\/\* ");          // Adds a whitespace the /* (for comments)
  stylesheet = stylesheet.replace(/\*\//g, " \*\/\n\n");      // Adds a line break after the /* (for comments)
  stylesheet = stylesheet.replace(/\;/g, "\;\n");             // Adds a line break after the ;
  stylesheet = stylesheet.replace(/(.*[\:])/g, "\t$1");       // Adds indentation the texts terminated in :
  stylesheet = stylesheet.replace(/\t(.*[\:].*[\{])/g, "$1"); // Removes the indentation in all texts  started in : and the followed text terminated in whitespace+{ (for pseudo-classes)
  stylesheet = stylesheet.replace(/\:/g, "\: ");              // Adds a whitespace after the :
  stylesheet = stylesheet.replace(/[\:] (.* [\{])/g, "\:$1"); // Removes a whitespace after the : when terminated in whitespace+{ (for pseudo-classes)
  stylesheet = stylesheet.replace(/\}/g, "\}\n\n");           // Adds two line break after the }

  return stylesheet;
};

exports.pacificateTab = function(path, amount) {

  var stylesheet = fs.readFileSync(path, 'utf8'),
  tabs = "\t".repeat(amount);

  stylesheet = stylesheet.replace(/\s/g, "");                 // Removes all whitespace, indentation and line breaks.
  stylesheet = stylesheet.toLowerCase();                      // converts all characters to lowercase
  stylesheet = stylesheet.replace(/\'/g, "\"");               // Change all ' to "
  stylesheet = stylesheet.replace(/_/g, "-");                 // Change all  _ to -
  stylesheet = stylesheet.replace(/\{/g, " \{\n");            // Adds a whitespace before the { and add a line break after
  stylesheet = stylesheet.replace(/\/\*/g, "\/\* ");          // Adds a whitespace the /* (for comments)
  stylesheet = stylesheet.replace(/\*\//g, " \*\/\n\n");      // Adds a line break after the /* (for comments)
  stylesheet = stylesheet.replace(/\;/g, "\;\n");             // Adds a line break after the ;
  stylesheet = stylesheet.replace(/(.*[\:])/g, tabs+"$1");    // Adds indentation the texts terminated in :
  stylesheet = stylesheet.replace(/\t*(.*[\:].*[\{])/g, "$1"); // Removes the indentation in all texts  started in : and the followed text terminated in whitespace+{ (for pseudo-classes)
  stylesheet = stylesheet.replace(/\:/g, "\: ");              // Adds a whitespace after the :
  stylesheet = stylesheet.replace(/[\:] (.* [\{])/g, "\:$1"); // Removes a whitespace after the : when terminated in whitespace+{ (for pseudo-classes)
  stylesheet = stylesheet.replace(/\}/g, "\}\n\n");           // Adds two line break after the }

  return stylesheet;
};

exports.pacificateSpace = function(path, amount) {

  var stylesheet = fs.readFileSync(path, 'utf8'),
  spaces = " ".repeat(amount);

  stylesheet = stylesheet.replace(/\s/g, "");                 // Removes all whitespace, indentation and line breaks.
  stylesheet = stylesheet.toLowerCase();                      // converts all characters to lowercase
  stylesheet = stylesheet.replace(/\'/g, "\"");               // Change all ' to "
  stylesheet = stylesheet.replace(/_/g, "-");                 // Change all  _ to -
  stylesheet = stylesheet.replace(/\{/g, " \{\n");            // Adds a whitespace before the { and add a line break after
  stylesheet = stylesheet.replace(/\/\*/g, "\/\* ");          // Adds a whitespace the /* (for comments)
  stylesheet = stylesheet.replace(/\*\//g, " \*\/\n\n");      // Adds a line break after the /* (for comments)
  stylesheet = stylesheet.replace(/\;/g, "\;\n");             // Adds a line break after the ;
  stylesheet = stylesheet.replace(/(.*[\:])/g, spaces+"$1");  // Adds indentation the texts terminated in :
  stylesheet = stylesheet.replace(/ *(.*[\:].*[\{])/g, "$1"); // Removes the indentation in all texts  started in : and the followed text terminated in whitespace+{ (for pseudo-classes)
  stylesheet = stylesheet.replace(/\:/g, "\: ");              // Adds a whitespace after the :
  stylesheet = stylesheet.replace(/[\:] (.* [\{])/g, "\:$1"); // Removes a whitespace after the : when terminated in whitespace+{ (for pseudo-classes)
  stylesheet = stylesheet.replace(/\}/g, "\}\n\n");           // Adds two line break after the }

  return stylesheet;
};
