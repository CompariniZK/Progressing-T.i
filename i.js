let nomeCliente = 0
let cpfCliente = 0
let valor = 0
let operacao = 0
let saldo = 0
let ovoParar = 0
let saldoTotal = 0
let mediaGeral = 0
let maiorValorI = 0
let numeroOperações = 0

do{
 
 nomeCliente = prompt("Diga seu nome")

 cpfCliente = Number(prompt("Digite seu cpf"))

 valor = Number(prompt("Qual o valor?"))
 numeroOperações++
 mediaGeral += valor


 operacao = prompt("Saque ou depósito?")

 saldo = 500
                   
 let saque = saldo - valor
 let deposito = saldo + valor

 if(operacao === "Saque"){

     saldoTotal -= valor
    
 }
 else{
    saldoTotal += valor
 } 
 
 saldo += saldoTotal 
  

 if(valor > maiorValorI){

  maiorValorI = valor
 }
 ovoParar = Number(prompt("Deseja continuar, digite 1 para sim e 2 para não"))
 
}
while (ovoParar === 1)

console.log("Seu saldo é: " + saldo)
console.log("A média geral foi: "+ mediaGeral/numeroOperações)
console.log("O maior valor inserido foi: " + maiorValorI)
