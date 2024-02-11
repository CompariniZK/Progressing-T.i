let arrayModelos = []
let arrayAnos = []
let arrayValores = []
let whilezin = true
let contador = 1
let maiorValor = 0
let vetor = []

while(whilezin = true) 
{
let modelos = prompt("Insira o modelo do carro:")
arrayModelos[contador] = modelos

let anos = Number(prompt("insira o ano do carro:"))
arrayAnos[contador] = anos

let valores = Number(prompt("Insira o valor do carro:"))
arrayValores[contador] = valores

contador++

let stop = Number(prompt("Deseja insirir um novo carro? (1) Sim; (2) Não"))

if(stop === 2)
{
console.log("A tabela ficou:")
for(let i = 1; i < modelos.length; i++) {
console.log(arrayModelos[i] + "-" + arrayAnos[i] + "-" + arrayValores[i])
}
whilezin = false;
break;

}
}
