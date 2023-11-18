import { minhaAPI } from "./api.js";
const buttonn = document.getElementById("buttom1"); 
buttonn.addEventListener("click",function(){
    const post = document.getElementById("input1").value; 
    envia(post);
});
document.addEventListener("keydown", function(event){
    if (event.keyCode === 13) {
    const post = document.getElementById("input1").value; 
    envia(post);
    }});
function envia(post){
minhaAPI.Mensagens["3"]=post;
}
export{minhaAPI}

