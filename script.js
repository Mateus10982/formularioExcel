
document.getElementById('meuFormulario').addEventListener('submit', function(e) {
   e.preventDefault();
const caminhoDoArquivo ='Pasta 5.xlsx';

   var arquivoInput = document.getElementById('arquivoExcel');
   var arquivo;
if (arquivoInput.files.length >= 0) {
      arquivo = arquivoInput.files[0];
   } else {
      // Se o usuário não selecionou um arquivo,  arquivo padrão;
      arquivo = caminhoDoArquivo.files[0];
   }

   var leitor = new FileReader();

   leitor.onload = function(e) {
      var dados = new Uint8Array(e.target.result);
      var workbook = XLSX.read(dados, { type: 'array' });
      
      var firstSheetName = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[firstSheetName];

      var data = XLSX.utils.sheet_to_json(worksheet);
      console.log(data);
      // Preencher os campos do formulário com os dados obtidos do Excel
      document.getElementById('nome1').value = data[0].Nome;
      document.getElementById('email1').value = data[0].Email;
      
      document.getElementById('nome2').value = data[1].Nome;
      document.getElementById('email2').value = data[1].Email;
      
      document.getElementById('nome3').value = data[2].Nome;
      document.getElementById('email3').value = data[2].Email;
   };

   leitor.readAsArrayBuffer(arquivo);
});
