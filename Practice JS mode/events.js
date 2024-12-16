
function border(event){


event.target.style.outlineColor= "green"


}


let input1 = document.getElementById('nome')
input1.addEventListener('focus', border)


let input2 = document.getElementById('endereco')

input2.addEventListener('focus', border)


