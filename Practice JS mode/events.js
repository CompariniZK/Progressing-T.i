
function border(event){


event.target.style.outlineColor= "green"


}

function saveNomeLoja (texto){

window.localStorage.setItem('NomeLoja', texto)

}

function saveEnderecoLoja (texto){

   window.localStorage.setItem('endereço', texto)
   
   }
   


let input1 = document.getElementById('nome')
input1.addEventListener('focus', border)


input1.addEventListener('blur', (event) => {

      console.log("Salvo")
      saveNomeLoja(event.target.value)
} )

let input2 = document.getElementById('endereco')

input2.addEventListener('focus', border)
input2.addEventListener('blur', (event) =>{

   console.log("Salvo tbm")
   saveEnderecoLoja(event.target.value)


} )

///////////////////////////////////////////////


function forminho (event){

   localStorage.setItem
   event.preventDefault();
   





}
let forms = document.getElementById('forms')
forms.addEventListener('submit', forminho)