let nomeCliente = 0
let cpfCliente = 0
let valor = 0
let operacao = 0
let saldo = 500
let saque = saldo - valor
let deposito = saldo + valor
let ovoParar = 0
let saldoTotal = 0
let mediaGeral = 0
let maiorValorI = 0


do{
    mediaGeral += valor

    if(valor > maiorValorI){

        maiorValor = valor
    }
    saldo += saldoTotal
    operacao++

 nomeCliente = prompt("Diga seu nome")
 cpfCliente = Number(prompt("Digite seu cpf"))
 valor = Number(prompt("Qual o valor?"))
 operacao = prompt("Saque ou depósito?")

 if(operacao === "Saque"){
    let saldoTotal = saque
 }
 else{
   let saldoTotal = deposito
 }

 ovoParar = Number(prompt("Deseja continuar, digite 1 para sim e 2 para não"))

}
while (ovoParar === 1)

console.log("Seu saldo é: " + saldo)
console.log(mediaGeral/operacao)

