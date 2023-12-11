<?php
$mensagem=$_POST['men'];
$arq = '../txt/arc.txt';

// Lê o arquivo.
echo "Conteúdo do arquivo antes da adição:\n";
echo file_get_contents($arq);
$mensag=$mensagem."\n";
// Adiciona uma nova linha ao final do arquivo
file_put_contents($arq, $mensag, FILE_APPEND);

// Exibir o arquivo após a inscrição
echo "\nConteúdo do arquivo após a adição:\n";
echo file_get_contents($arq);
?>