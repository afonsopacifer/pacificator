fs = require('fs');

exports.pacificate = function(path) {

  var stylesheet = fs.readFileSync(path, 'utf8');

  stylesheet = stylesheet.replace(/\s/g, ""); //Retira todos os espacos em branco e quebras de linha e identacao
  stylesheet = stylesheet.toLowerCase(); //Transforma todos os caracteres para minusculo
  stylesheet = stylesheet.replace(/\'/g, "\""); //Altera todas as ' para "
  stylesheet = stylesheet.replace(/_/g, "-"); //Altera todas os _ para -
  stylesheet = stylesheet.replace(/\{/g, " \{\n"); //Adiciona um espaco antes do { e uma quebra de linha apos
  stylesheet = stylesheet.replace(/\;/g, "\;\n"); //Adiciona uma quebra de linha apos o ;
  stylesheet = stylesheet.replace(/(.*[\:])/g, "\t$1"); //Adiciona identacao aos textos terminados em :
  stylesheet = stylesheet.replace(/\:/g, "\: "); //Adiona um espaco apos os :
  stylesheet = stylesheet.replace(/\}/g, "\}\n\n"); //Adiciona duas quebras de linha apos o }
  return stylesheet;
};

exports.pacificateTab = function(path, amount) {

  var stylesheet = fs.readFileSync(path, 'utf8'),
  tabs = "\t".repeat(amount);

  stylesheet = stylesheet.replace(/\s/g, ""); //Retira todos os espacos em branco e quebras de linha e identacao
  stylesheet = stylesheet.toLowerCase(); //Transforma todos os caracteres para minusculo
  stylesheet = stylesheet.replace(/\'/g, "\""); //Altera todas as ' para "
  stylesheet = stylesheet.replace(/_/g, "-"); //Altera todas os _ para -
  stylesheet = stylesheet.replace(/\{/g, " \{\n"); //Adiciona um espaco antes do { e uma quebra de linha apos
  stylesheet = stylesheet.replace(/\;/g, "\;\n"); //Adiciona uma quebra de linha apos o ;
  stylesheet = stylesheet.replace(/(.*[\:])/g, tabs+"$1"); //Adiciona identacao aos textos terminados em :
  stylesheet = stylesheet.replace(/\:/g, "\: "); //Adiona um espaco apos os :
  stylesheet = stylesheet.replace(/\}/g, "\}\n\n"); //Adiciona duas quebras de linha apos o }
  return stylesheet;
};

exports.pacificateSpace = function(path, amount) {

  var stylesheet = fs.readFileSync(path, 'utf8'),
  spaces = " ".repeat(amount);

  stylesheet = stylesheet.replace(/\s/g, ""); //Retira todos os espacos em branco e quebras de linha e identacao
  stylesheet = stylesheet.toLowerCase(); //Transforma todos os caracteres para minusculo
  stylesheet = stylesheet.replace(/\'/g, "\""); //Altera todas as ' para "
  stylesheet = stylesheet.replace(/_/g, "-"); //Altera todas os _ para -
  stylesheet = stylesheet.replace(/\{/g, " \{\n"); //Adiciona um espaco antes do { e uma quebra de linha apos
  stylesheet = stylesheet.replace(/\;/g, "\;\n"); //Adiciona uma quebra de linha apos o ;
  stylesheet = stylesheet.replace(/(.*[\:])/g, spaces+"$1"); //Adiciona identacao aos textos terminados em :
  stylesheet = stylesheet.replace(/\:/g, "\: "); //Adiona um espaco apos os :
  stylesheet = stylesheet.replace(/\}/g, "\}\n\n"); //Adiciona duas quebras de linha apos o }
  return stylesheet;
};
