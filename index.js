#!/usr/bin/env node

// var fs = require('fs');
// var program = require('commander');
// var pkg = require('./package.json');

// program basic
// program.version(pkg.version);
// program.description('Pacificate your CSS');

// The CSS
var css = ".clGDGDASS__s{ bacjground-color:url('dwdwd');}.rer{ color:#660066;}";
console.log("Before:\n"+css);

css = css.replace(/\s/g, ""); //Retira todos os espacos em branco e quebras de linha e identacao
css = css.toLowerCase(); //Transforma todos os caracteres para minusculo
css = css.replace(/\'/g, "\""); //Altera todas as ' para "
css = css.replace(/_/g, "-"); //Altera todas os _ para -
css = css.replace(/\{/g, " \{\n"); //Adiciona um espaco antes do { e uma quebra de linha apos
css = css.replace(/(.*[\:])/g, "\t$1"); //Adiciona identacao aos textos terminados em :
css = css.replace(/\:/g, "\: "); //Adiona um espaco apos os :
css = css.replace(/\;/g, "\;\n"); //Adiciona uma quebra de linha apos o ;
css = css.replace(/\}/g, "\}\n\n"); //Adiciona duas quebras de linha apos o }

//Result
console.log("After:\n"+css);

// program.command( '<name>' );

// program.action(function nam( name ) {

// 	fs.writeFile('message.css', name);

// });

// program.parse( process.argv );
