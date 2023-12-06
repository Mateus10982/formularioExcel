import Axios from 'axios';
const botom=document.getElementById("buttom1");

botom.addEventListener("click",function(){
    let inputt=document.getElementById("input1");
    const postt=[inputt];
    Axios.post('http://localhost:5500/Mensagens', postt)
  .then((response) => {
    console.log('Resposta da API:', response.data);
  })
  .catch((error) => {
    console.error('Erro ao fazer o POST:', error);
  });
})