import { useState } from 'react'
import './App.css'
import {GiImbricatedArrows} from "react-icons/gi"
import {ReadFile,AppendFile,ReadFileSync}from 'fs'
function App() {

  // Caminho do arquivo TXT
  const arquivo = 'caminho/do/arquivo.txt';
  
  // Lê o arquivo e exibe o conteúdo
  ReadFile(arquivo, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    
    console.log("Conteúdo do arquivo antes da adição:\n" + data);
  
    // Adiciona uma nova linha ao final do arquivo
    const novaLinha = "Nova linha a ser adicionada\n";
    AppendFile(arquivo, novaLinha, function(err) {
      if (err) {
        return console.log(err);
      }
      
      console.log("\nConteúdo do arquivo após a adição:\n" + ReadFileSync(arquivo, 'utf8'));
    });
  });
  return (
    <>
    <main className='corpo'></main>
      <div className='test'>
        <form className='tes'  method='POST'>
          <input className='inp'  type="text" name="men" id="inpp" />
          <button type='submit' className='icones'> < GiImbricatedArrows/> </button>
        </form>
      </div>
    </>
  )
}

export default App
