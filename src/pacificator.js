'use strict';

var fs = require('fs');

function pacificator() {

  this.pacificate = function(path) {
    var stylesheet = fs.readFileSync(path, 'utf8');

    stylesheet = pacificateSyntax(stylesheet)
                 .replace(/(.*[\:])/g, "\t$1")        // Adds indentation the texts terminated in :
                 .replace(/\t(.*[\:].*[\{])/g, "$1"); // Removes the indentation in all texts  started in : and the followed text terminated in whitespace+{ (for pseudo-classes)

    return stylesheet;
  };

  this.pacificateTab = function(path, amount) {
    var stylesheet = fs.readFileSync(path, 'utf8'),
        tabs = "\t".repeat(amount);

    stylesheet = pacificateSyntax(stylesheet)
                 .replace(/(.*[\:])/g, tabs+"$1")      // Adds indentation the texts terminated in :
                 .replace(/\t*(.*[\:].*[\{])/g, "$1"); // Removes the indentation in all texts  started in : and the followed text terminated in whitespace+{ (for pseudo-classes)

    return stylesheet;
  };

  this.pacificateSpace = function(path, amount) {
    var stylesheet = fs.readFileSync(path, 'utf8'),
        spaces = " ".repeat(amount);

    stylesheet = pacificateSyntax(stylesheet)
                 .replace(/(.*[\:])/g, spaces+"$1")   // Adds indentation the texts terminated in :
                 .replace(/ *(.*[\:].*[\{])/g, "$1"); // Removes the indentation in all texts  started in : and the followed text terminated in whitespace+{ (for pseudo-classes)

    return stylesheet;
  };

}

function pacificateSyntax(stylesheet) {
  stylesheet = stylesheet.replace(/\s/g, "")       // Removes all whitespace, indentation and line breaks.
               .toLowerCase()                      // converts all characters to lowercase
               .replace(/\'/g, "\"")               // Change all ' to "
               .replace(/_/g, "-")                 // Change all  _ to -
               .replace(/\{/g, " \{\n")            // Adds a whitespace before the { and add a line break after
               .replace(/\/\*/g, "\/\* ")          // Adds a whitespace the /* (for comments)
               .replace(/\*\//g, " \*\/\n\n")      // Adds a line break after the /* (for comments)
               .replace(/\;/g, "\;\n")             // Adds a line break after the ;
               .replace(/\:/g, "\: ")              // Adds a whitespace after the :
               .replace(/[\:] (.* [\{])/g, "\:$1") // Removes a whitespace after the : when terminated in whitespace+{ (for pseudo-classes)
               .replace(/\}/g, "\}\n\n");          // Adds two line break after the }

  return stylesheet;
}

module.exports = new pacificator();
