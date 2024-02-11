let numeroEntrada = Number(prompt("Digite um número até 10"))
console.log("TABUADA DO " + numeroEntrada + " ABAIXO:")
for(let contador = 0; contador <= 10; contador++ ){

    let resultado = contador * numeroEntrada;
    console.log(numeroEntrada + " x " + contador + " = " + resultado);

}

let numeroEntrada2 = numeroEntrada + 1
console.log("TABUADA DO " + numeroEntrada2 + " ABAIXO:")

for(let contador2 = 0; contador2 <= 10; contador2++){

    let resultado2 = contador2 * numeroEntrada2;
    console.log(numeroEntrada2 + " x " + contador2 + " = " + resultado2);
}

let numeroEntrada3 = numeroEntrada2 + 1
console.log("TABUADA DO " + numeroEntrada3 + " ABAIXO:")

for(let contador3 = 0; contador3 <= 10; contador3++){

let resultado3 = contador3 * numeroEntrada3;
console.log(numeroEntrada3 + " x " + contador3 + " = " + resultado3)

}