let teste = parseInt(prompt("Digite um número para a tabuada: "));

for(let contador = 0; contador <= 10; contador++){

  
    console.log( teste + " x " + contador + " = " + teste*contador)


}
console.log("Próximo é:")
let teste2 = teste + 1; 
for(contador = 0; contador <= 10; contador++ ){

    console.log( teste2 + " x " + contador + " = " + teste2*contador )

}
console.log("Próximo é:")
let teste3 = teste2 + 1;

for(contador = 0; contador <= 10; contador++){

    console.log(teste3 + " x " + contador + " = " + teste3*contador)

}