document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
 
    var arquivoInput = document.getElementById('arquivoExcel');
    var arquivo = arquivoInput.files[0];
 
    var leitor = new FileReader();
 
    leitor= function(e) {
       var arrayBuffer = e.target.result;
       var workbook = XLSX.read(arrayBuffer, { type: 'array' });
       
       var firstSheetName = workbook.SheetNames[0];
       var worksheet = workbook.Sheets[firstSheetName];
 
       // Preencher dados do primeiro nome e e-mail
       document.getElementById('nome1').value = worksheet['A2'].v;
       document.getElementById('email1').value = worksheet['B2'].v;
 
       // Preencher dados do segundo nome e e-mail
       document.getElementById('nome2').value = worksheet['A3'].v;
       document.getElementById('email2').value = worksheet['B3'].v;
 
       // Preencher dados do terceiro nome e e-mail
       document.getElementById('nome3').value = worksheet['A4'].v;
       document.getElementById('email3').value = worksheet['B4'].v;
    };
 
    leitor.readAsArrayBuffer(arquivo);
 });