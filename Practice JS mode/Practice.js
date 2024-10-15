let saldoTotal = 1000
let valoresInseridos = []
let contador = 0;
let desejo = 2;
let maiorValor = 0
let contador2 = 0

do{
let nomeCliente = prompt("Digite seu nome:")
let cpfCliente =  Number(prompt("Digite seu CPF: "))
let valorCliente = Number(prompt("Digite um valor:"))
contador2 += valorCliente
let opcao = parseInt(prompt("Digite 1 para saque e 2 para depósito"))


if(opcao === 1 && valorCliente > 0 && valorCliente <= saldoTotal){

    
   saldoTotal =  saldoTotal  -  valorCliente;

    console.log("Você sacou: " + valorCliente + "euros de tua conta")

    console.log("Seu saldo total é de: " + saldoTotal + " euros")
    valoresInseridos[contador] = valorCliente
    contador++

    maiorValor = Math.max(...valoresInseridos)

}
else{

    console.log("saldo insuficiente")
}

else if (opcao === 2) {
    // Condição para depósito: valor positivo
    if (valorCliente > 0) {
        saldoTotal += valorCliente;
        console.log("Parabéns, você depositou " + valorCliente + " euros em sua conta");
        console.log("Seu saldo total é de: " + saldoTotal + " euros");
        valoresInseridos.push(valorCliente);  // Adiciona o valor ao array
        maiorValor = Math.max(...valoresInseridos);
        contador++;
    } else {
        console.log("Valor inválido. Operação cancelada.");
    }
let mediaValores = contador2 / contador;
 
desejo = parseInt(prompt("Você deseja terminar com as operações ou deseja realizar uma nova? Digite 1 para terminar e 2 para realizar mais operações"))

if(desejo === 1){

    console.log("O maior valor inserido para saques ou depósitos foi: " + maiorValor)
    console.log("A média dos valores é igual à: " + mediaValores)
}
}
}
while(desejo === 2)

