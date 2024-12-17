
function border(event){


event.target.style.outlineColor= "green"


}


let input1 = document.getElementById('nome')
input1.addEventListener('focus', border)


let input2 = document.getElementById('endereco')

input2.addEventListener('focus', border)

///////////////////////////////////////////////


function forminho (event){

   console.log("Recebemos o cadastro");
   console.log(event);
   console.log("Preparando envio...")
   forms.action = "api.dodev.com.br/submeterDados";
   





}
let forms = document.getElementById('forms')
forms.addEventListener('submit', forminho)