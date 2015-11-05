exports.pacificate = function(stylesheet, indent) {
  stylesheet = stylesheet.replace(/\s/g, ""); //Retira todos os espacos em branco e quebras de linha e identacao
  stylesheet = stylesheet.toLowerCase(); //Transforma todos os caracteres para minusculo
  stylesheet = stylesheet.replace(/\'/g, "\""); //Altera todas as ' para "
  stylesheet = stylesheet.replace(/_/g, "-"); //Altera todas os _ para -
  stylesheet = stylesheet.replace(/\{/g, " \{\n"); //Adiciona um espaco antes do { e uma quebra de linha apos
  stylesheet = stylesheet.replace(/(.*[\:])/g, indent+"$1"); //Adiciona identacao aos textos terminados em :
  stylesheet = stylesheet.replace(/\:/g, "\: "); //Adiona um espaco apos os :
  stylesheet = stylesheet.replace(/\;/g, "\;\n"); //Adiciona uma quebra de linha apos o ;
  stylesheet = stylesheet.replace(/\}/g, "\}\n\n"); //Adiciona duas quebras de linha apos o }
  return stylesheet;
};
