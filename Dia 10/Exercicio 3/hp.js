let arrayNumeros = []
let whilezin = true
let quantidade = Number(prompt("Digite quantos números você deseja adicionar (somente números)"))
let contador = 0
let while2 = true
let adicionar = 0;

while(whilezin === true)
{

adicionar = Number(prompt("adicione um/outro número à variável"))
arrayNumeros[contador] = adicionar

contador++

if(contador === quantidade)
{
console.log(arrayNumeros)
break;
}
}
while(while2 === true){

arrayNumeros[contador] = quantidade
quantidade--
contador--

if(contador === 0){
    console.log(arrayNumeros)
    break;
}
    
}


