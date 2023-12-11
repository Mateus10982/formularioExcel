const fs = require('fs');

// Caminho do arquivo TXT
const arquivo = 'caminho/do/arquivo.txt';

// Lê o arquivo e exibe o conteúdo
fs.readFile(arquivo, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  
  console.log("Conteúdo do arquivo antes da adição:\n" + data);

  // Adiciona uma nova linha ao final do arquivo
  const novaLinha = "Nova linha a ser adicionada\n";
  fs.appendFile(arquivo, novaLinha, function(err) {
    if (err) {
      return console.log(err);
    }
    
    console.log("\nConteúdo do arquivo após a adição:\n" + fs.readFileSync(arquivo, 'utf8'));
  });
});
