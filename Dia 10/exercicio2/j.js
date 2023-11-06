let whilezin = true
let arrayNumeros = []
let contador = 5

while(whilezin === true){

    let numero = Number(prompt("Digite 5 números inteiros e positivos"))

    arrayNumeros[contador] = numero

    contador--

    if(contador === 0)
    whilezin = false
}

console.log(arrayNumeros)